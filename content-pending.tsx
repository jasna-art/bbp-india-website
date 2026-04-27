// ContentPending was a layout-review affordance. It is now a no-op so visible
// placeholder boxes disappear from the live site. The component is kept (rather
// than deleted) so that pages still importing it compile, and so we can flip
// it back on by changing this single function if we ever need to surface
// "pending" markers again during a review session.

export function ContentPending(_props: {
  block: string;
  source: string;
  className?: string;
}) {
  return null;
}
