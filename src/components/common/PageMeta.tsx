// Next.js App Router: prefer export const metadata in pages/layouts.
// Provide a lightweight no-op component to avoid external deps.
export default function PageMeta({ title, description }: { title: string; description: string }) {
  return null;
}
