export function BackgroundGrid() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="bg-grid absolute inset-0 opacity-40 mask-fade-b" />
    </div>
  )
}
