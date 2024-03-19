export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header
        style={{
          fontSize: '50px',
          backgroundColor: "lightblue",
          padding : "1rem",
        }}
        >
          <p>PIAIC</p>
        </header>
        {children}
        <footer
        style= {{
          fontSize: '30px',
          backgroundColor: "lavender",
          padding : "1rem",
        }}
        >
          <p>Key to Success, says Sir Zia khan "ربط، ضبط، خبط"</p>
        </footer>
        </body>
    </html>
  )
}