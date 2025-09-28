export default function StyleGuidePage() {
  return (
    <div className="prose prose-invert max-w-3xl">
      <h1>Style Guide</h1>
      <h2>Typography</h2>
      <ul>
        <li>Fonts: Geist Sans (headings & UI), Geist Mono (code)</li>
        <li>Body line-height: 1.5, min body size: 14px</li>
      </ul>
      <h2>Color System (3–5 colors)</h2>
      <ul>
        <li>
          Primary (brand): Teal via <code>--primary</code>
        </li>
        <li>Neutrals: Background / Foreground tokens</li>
        <li>
          Accent (warnings): Amber via <code>--color-chart-5</code>
        </li>
      </ul>
      <div className="flex gap-3 my-3">
        <div className="w-10 h-10 rounded-md bg-primary" />
        <div className="w-10 h-10 rounded-md bg-background border" />
        <div className="w-10 h-10 rounded-md bg-foreground" />
        <div className="w-10 h-10 rounded-md" style={{ background: "oklch(0.645 0.246 16.439)" }} />
      </div>
      <h2>Motion</h2>
      <ul>
        <li>Micro-interactions: 150–250ms ease-out</li>
        <li>Map pins: gentle bounce + pulse</li>
        <li>Cards: subtle scale/translate on hover</li>
      </ul>
      <h2>Accessibility</h2>
      <ul>
        <li>High contrast tokens for light/dark</li>
        <li>Alt text for non-decorative images</li>
        <li>Meaningful labels on controls</li>
      </ul>
    </div>
  )
}
