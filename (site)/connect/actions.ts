"use server";

export type FormState =
  | { status: "idle" }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

// TODO(connect): wire to Resend/Postmark when email infrastructure is live.
// Until then this acknowledges the submission so the form is testable end-to-end
// and the page renders the confirmation message from the microcopy library.

export async function sendBrief(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const brief = String(formData.get("brief") ?? "").trim();

  if (!name || !email || !brief) {
    return {
      status: "error",
      message: "Please fill in name, email, and the brief.",
    };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      status: "error",
      message: "Enter a valid email address.",
    };
  }

  return {
    status: "success",
    message:
      "Brief received. We read every one. We'll come back within one business day. — The BBP team",
  };
}

export async function sendOnePager(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const dislocation = String(formData.get("dislocation") ?? "").trim();

  if (!name || !email || !dislocation) {
    return {
      status: "error",
      message: "Please fill in name, email, and the dislocation.",
    };
  }

  return {
    status: "success",
    message:
      "Thank you. We'll be in touch within one business day with a slot for the discovery conversation. — The BBP team",
  };
}
