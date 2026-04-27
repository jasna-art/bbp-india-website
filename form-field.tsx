import { cn } from "@/lib/cn";

type BaseProps = {
  label: string;
  name: string;
  required?: boolean;
  error?: string;
  className?: string;
  defaultValue?: string;
  placeholder?: string;
};

export function FormField({
  label,
  name,
  required,
  error,
  className,
  type = "text",
  defaultValue,
  placeholder,
}: BaseProps & { type?: "text" | "email" | "url" | "tel" }) {
  const id = `field-${name}`;
  const errorId = `${id}-error`;
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label
        htmlFor={id}
        className="font-sans text-eyebrow uppercase text-ink"
      >
        {label}
        {required ? (
          <span aria-hidden className="ml-1 text-muted">
            *
          </span>
        ) : null}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        defaultValue={defaultValue}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className="w-full border-0 border-b-hairline border-rule bg-transparent px-0 py-3 font-sans text-body text-ink placeholder:text-muted focus:border-b-heavy focus:border-ink focus:outline-none"
      />
      {error ? (
        <p id={errorId} className="font-sans text-small text-ink">
          <span className="font-semibold">Error:</span> {error}
        </p>
      ) : null}
    </div>
  );
}

export function TextAreaField({
  label,
  name,
  required,
  error,
  className,
  defaultValue,
  placeholder,
  rows = 5,
}: BaseProps & { rows?: number }) {
  const id = `field-${name}`;
  const errorId = `${id}-error`;
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label
        htmlFor={id}
        className="font-sans text-eyebrow uppercase text-ink"
      >
        {label}
        {required ? (
          <span aria-hidden className="ml-1 text-muted">
            *
          </span>
        ) : null}
      </label>
      <textarea
        id={id}
        name={name}
        rows={rows}
        required={required}
        defaultValue={defaultValue}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className="w-full resize-y border-0 border-b-hairline border-rule bg-transparent px-0 py-3 font-sans text-body text-ink placeholder:text-muted focus:border-b-heavy focus:border-ink focus:outline-none"
      />
      {error ? (
        <p id={errorId} className="font-sans text-small text-ink">
          <span className="font-semibold">Error:</span> {error}
        </p>
      ) : null}
    </div>
  );
}
