import Provider from "@components/Provider";
import "@styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Social Media App Demo",
  description: "social media app demo for learning purpose",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ userSelect: "none" }}>
        <Provider>
          <main className="min-w-screen min-h-screen">{children}</main>
        </Provider>
      </body>
    </html>
  );
}
