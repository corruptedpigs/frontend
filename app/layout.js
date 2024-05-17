import Head from "next/head";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Corrupted Pigs",
  description: "Corrupted Pigs' NFTs fuel social causes. Play. Earn. Make a Difference.",
  keywords: "NFT game, social good, donate to institutions, crowdfunding, animal farm, fight corruption",
  openGraph: {
    description: "Corrupted Pigs' NFTs fuel social causes. Play. Earn. Make a Difference.",
    image: "https://corruptedpigs.com/image-twitter-CP-launching-soon.jpg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/images/favicon.ico" sizes="any"/>
      </head>
      <body className={inter.className}>{children}</body>
      {process.env.NODE_ENV === 'production' && (
        <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS} />
      )}
    </html>
  );
}
