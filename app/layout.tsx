import  type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";


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

    <html lang="en" className={"light"} suppressHydrationWarning>
      <body className="bg-[var(--background)]">
      <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
