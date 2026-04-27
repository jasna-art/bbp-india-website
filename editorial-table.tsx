import { cn } from "@/lib/cn";

export type EditorialTableRow = {
  label: string;
  description: React.ReactNode;
};

export function EditorialTable({
  headers,
  rows,
  className,
}: {
  headers?: [string, string];
  rows: EditorialTableRow[];
  className?: string;
}) {
  return (
    <table className={cn("w-full border-collapse", className)}>
      {headers ? (
        <thead>
          <tr className="border-b-heavy border-ink">
            <th
              scope="col"
              className="py-4 pr-6 text-left font-sans text-eyebrow uppercase text-ink w-[30%]"
            >
              {headers[0]}
            </th>
            <th
              scope="col"
              className="py-4 text-left font-sans text-eyebrow uppercase text-ink"
            >
              {headers[1]}
            </th>
          </tr>
        </thead>
      ) : (
        <thead>
          <tr className="border-b-heavy border-ink">
            <th colSpan={2} className="sr-only">
              Reference
            </th>
          </tr>
        </thead>
      )}
      <tbody>
        {rows.map((row, i) => (
          <tr
            key={i}
            className={cn(
              "border-b-hairline border-rule",
              i === rows.length - 1 && "border-b-heavy border-ink",
            )}
          >
            <th
              scope="row"
              className="py-6 pr-6 align-top text-left font-sans text-body font-semibold text-ink w-[30%]"
            >
              {row.label}
            </th>
            <td className="py-6 align-top font-sans text-body text-ink">
              {row.description}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
