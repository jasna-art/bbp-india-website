"use server";

export type ApplicationState =
  | { status: "idle" }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

const MAX_RESUME_BYTES = 8 * 1024 * 1024; // 8MB
const ALLOWED_RESUME_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

// TODO(work-with-us): wire to Resend/Postmark to deliver applications (with
// the resume attachment) to hr@bbp-india.com once the inbox is provisioned.
// For now we acknowledge the submission so the flow is testable end-to-end.
export async function sendApplication(
  _prev: ApplicationState,
  formData: FormData,
): Promise<ApplicationState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const role = String(formData.get("role") ?? "").trim();
  const brief = String(formData.get("brief") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const resume = formData.get("resume");

  if (!name || !email || !role || !brief) {
    return {
      status: "error",
      message: "Please fill in name, email, role, and the brief.",
    };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      status: "error",
      message: "Enter a valid email address.",
    };
  }

  if (brief.length < 200) {
    return {
      status: "error",
      message:
        "The brief is short. We expect a 200–500 word response — give us enough to read.",
    };
  }

  if (phone && !/^[+\d][\d\s\-().]{6,}$/.test(phone)) {
    return {
      status: "error",
      message: "The phone number doesn't look right. Include the country code.",
    };
  }

  if (resume instanceof File && resume.size > 0) {
    if (resume.size > MAX_RESUME_BYTES) {
      return {
        status: "error",
        message: "The resume is over 8MB. Send a smaller PDF or Word file.",
      };
    }
    if (!ALLOWED_RESUME_TYPES.has(resume.type)) {
      return {
        status: "error",
        message:
          "Resume must be a PDF or a Word document (.pdf, .doc, .docx).",
      };
    }
  }

  return {
    status: "success",
    message:
      "Application received. We read every brief. We'll come back within five business days. — The BBP team",
  };
}
