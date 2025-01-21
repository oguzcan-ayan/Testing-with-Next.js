export const metadata = {
  title: "Testing in Next.js",
  description: "We are testing an example in Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
