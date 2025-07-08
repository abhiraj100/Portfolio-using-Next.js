import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Abhiraj's Portfolio",
  description:
    "I'm a full stack developer specializing in the MERN Stack, Next.js, SQL, and DevOps. This portfolio highlights my ability to build end-to-end web solutions—combining intuitive frontends, powerful backends, and efficient deployment workflows.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} ${ovo.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
