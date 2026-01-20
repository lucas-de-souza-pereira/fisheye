import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});


export const metadata = {
  title: "Fisheye",
  description: "Plateforme photographe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${dmSans.variable} antialiased bg-background min-h-screen max-w-[1440px] mx-auto`}>
        {children}
      </body>
    </html>
  );
}
