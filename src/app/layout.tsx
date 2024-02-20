import "./globals.css";
import { Inter } from "next/font/google";
import Layout from "@/layouts";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lama Dev Blog App",
  description: "The best blog app!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout type="Full">{children}</Layout>
      </body>
    </html>
  );
}
