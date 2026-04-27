"use client";

import { useFormState } from "react-dom";
import { FormField, TextAreaField } from "@/components/form-field";
import { PrimaryCTA } from "@/components/primary-cta";
import { ROLES } from "@/lib/content/roles";
import { sendApplication, type ApplicationState } from "./actions";

const INITIAL: ApplicationState = { status: "idle" };

export function ApplyForm({
  defaultRoleSlug,
}: {
  defaultRoleSlug?: string;
}) {
  const [state, formAction] = useFormState(sendApplication, INITIAL);

  if (state.status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="border-l-heavy border-ink pl-6 py-3 max-w-reading"
      >
        <p className="font-sans text-body text-ink">{state.message}</p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      encType="multipart/form-data"
      className="flex max-w-reading flex-col gap-8"
    >
      <FormField label="Name" name="name" required placeholder="Full name" />
      <FormField label="Email" name="email" type="email" required />
      <FormField
        label="Phone"
        name="phone"
        type="tel"
        placeholder="Optional · include country code"
      />

      <div className="flex flex-col gap-2">
        <label
          htmlFor="field-role"
          className="font-sans text-eyebrow uppercase text-ink"
        >
          Role
          <span aria-hidden className="ml-1 text-muted">
            *
          </span>
        </label>
        <select
          id="field-role"
          name="role"
          required
          defaultValue={defaultRoleSlug ?? ""}
          className="w-full appearance-none rounded-none border-0 border-b-hairline border-rule bg-transparent px-0 py-3 font-sans text-body text-ink focus:border-b-heavy focus:border-ink focus:outline-none"
        >
          <option value="" disabled>
            Choose a role
          </option>
          {ROLES.map((r) => (
            <option key={r.slug} value={r.slug}>
              {r.title} · {r.level}
            </option>
          ))}
          <option value="speculative">Speculative · open to fit</option>
        </select>
      </div>

      <TextAreaField
        label="Your brief"
        name="brief"
        required
        rows={10}
        placeholder="200–500 words. Respond to a real problem you've worked on, or one we've published. We read every brief."
      />

      <div className="flex flex-col gap-2">
        <label
          htmlFor="field-resume"
          className="font-sans text-eyebrow uppercase text-ink"
        >
          Resume
          <span className="ml-2 normal-case font-normal tracking-normal text-muted">
            (PDF or Word, up to 8MB · optional)
          </span>
        </label>
        <input
          id="field-resume"
          name="resume"
          type="file"
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          className="block w-full border-b-hairline border-rule bg-transparent py-3 font-sans text-body text-muted file:mr-4 file:cursor-pointer file:border-0 file:border-b-heavy file:border-ink file:bg-canvas file:px-1 file:py-2 file:font-sans file:text-body file:font-semibold file:text-ink hover:file:bg-ink hover:file:text-canvas focus:border-b-heavy focus:border-ink focus:outline-none"
        />
      </div>

      <FormField
        label="Portfolio or LinkedIn URL"
        name="portfolio"
        type="url"
        placeholder="Optional"
      />

      {state.status === "error" ? (
        <p role="alert" className="font-sans text-small text-ink">
          <span className="font-semibold">Error:</span> {state.message}
        </p>
      ) : null}

      <div className="pt-2">
        <PrimaryCTA type="submit">Send the application</PrimaryCTA>
      </div>
    </form>
  );
}
