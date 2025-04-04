import type { Metadata } from "next";
import { NEXT_PUBLIC_URL } from "../config";
import Footer from "src/components/Footer";
import Navbar from "src/components/Navbar";
import "./global.css";
import "@coinbase/onchainkit/styles.css";
import "@rainbow-me/rainbowkit/styles.css";
import dynamic from "next/dynamic";

const OnchainProviders = dynamic(
  () => import("src/components/OnchainProviders")
);

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: "Aiho - your smart property companion",
  description:
    "Intelligently managing smart properties with a next-gen, AI and blockchain-powered property management app.",
  openGraph: {
    title: "Aiho - your smart property companion",
    description:
      "Intelligently managing smart properties with a next-gen, AI and blockchain-powered property management app.",
    images: [`${NEXT_PUBLIC_URL}/vibes/vibes-19.png`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex items-center justify-center bg-gray-50">
        <div className="hidden lg:block">
          <OnchainProviders>
            <div className="flex flex-row justify-center items-center">
              <Navbar />
            </div>
            <main>{children}</main>
            <Footer />
          </OnchainProviders>
        </div>
        <div className="block lg:hidden">
          <div className="bg-white p-6 rounded-xl shadow border w-full max-w-sm mx-auto text-center">
            <h1 className="text-2xl font-semibold mb-3">Desktop Only</h1>
            <p className="text-gray-600">
              This app is available only on desktop.
            </p>
            <p className="mt-2 text-gray-600">
              If you're on a mobile device, please check out our{" "}
              <a
                href="https://aiho.ai/"
                className="text-blue-600 underline hover:text-blue-800"
              >
                mobile mock app
              </a>
              .
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}
