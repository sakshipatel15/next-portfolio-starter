import type { Metadata } from "next";
import packageJson from "../../package.json";
import "./globals.css";
import { ParticlesBackground } from "../components/Particles";

export const metadata: Metadata = {
  title: packageJson.title,
  description:
    "Software & App Developer portfolio starter by Sakshi Patel — Next.js, TypeScript, and Tailwind.",
  authors: [{ name: packageJson.author.name, url: packageJson.author.github }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-custom antialiased">
        <ParticlesBackground />
        {children}
      </body>
    </html>
  );
}
