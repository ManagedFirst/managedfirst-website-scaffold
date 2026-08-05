// Root layout — intentionally minimal.
// The site layout (Navbar/Footer/fonts) lives in (site)/layout.tsx
// The Payload admin layout lives in (payload)/layout.tsx
// This file exists only because Next.js App Router requires a root layout.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
