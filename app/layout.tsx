import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
        <body id="_rootBody" className="">{children}</body>
    </html>
  )
}
