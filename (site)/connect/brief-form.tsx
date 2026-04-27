"use client";

import { useFormState } from "react-dom";
import { FormField, TextAreaField } from "@/components/form-field";
import { PrimaryCTA } from "@/components/primary-cta";
import { sendBrief, type FormState } from "./actions";

const INITIAL: FormState = { status: "idle" };

export function BriefForm() {
  const [state, formAction] = useFormState(sendBrief, INITIAL);

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
    <form action={formAction} className="flex max-w-reading flex-col gap-8">
      <FormField label="Name" name="name" required placeholder="Full name" />
      <FormField
        label="Role"
        name="role"
        placeholder="Your title and where you sit"
      />
      <FormField
        label="Organisation"
        name="organisation"
        placeholder="Company or fund name"
      />
      <FormField label="Email" name="email" type="email" required />
      <TextAreaField
        label="Brief"
        name="brief"
        required
        rows={6}
        placeholder="One paragraph — the problem in your own words; we read every one."
      />
      <FormField
        label="Preferred time"
        name="preferred"
        placeholder="We'll come back within one business day"
      />
      {state.status === "error" ? (
        <p
          role="alert"
          className="font-sans text-small text-ink"
        >
          <span className="font-semibold">Error:</span> {state.message}
        </p>
      ) : null}
      <div className="pt-2">
        <PrimaryCTA type="submit">Send the brief</PrimaryCTA>
      </div>
    </form>
  );
}
