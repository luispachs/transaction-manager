import  type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
    title: "Transaction Manager",
    description: "User Transactions Register",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body

      >
        {children}
      </body>
    </html>
  );
}
