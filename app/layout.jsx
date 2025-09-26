import './globals.css'

export const metadata = {
  title: 'test-clock-page',
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
