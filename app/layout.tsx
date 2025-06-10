import type { Metadata } from "next";
import { Roboto, Merriweather } from "next/font/google";
import "./../styles/index.scss";
import AppHeader from "../components/AppHeader";

export const metadata: Metadata = {
  title: "Free At Last",
  description:
    "A faith-based, transformative rehabilitation center dedicated to restoring hope, rebuilding lives, and renewing purpose. We walk with each individual through:",
};

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${merriweather.variable} app-layout`}
      >
        <div className="app-layout__header">
          <AppHeader />
        </div>
        <div className="app-layout__body">{children}</div>
      </body>
    </html>
  );
}
