import Head from "next/head";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Corrupted Pigs - NFT Collection & Social Game",
  description: "Welcome to the official home of Corrupted Pigs. Join us to explore our unique NFT collection and engaging social game. Log in to access exclusive perks, participate in the burning pigs game, and discover the benefits of holding our NFTs and Coinks tokens.",
  keywords: "NFT game, social good, donate to institutions, crowdfunding, animal farm, fight corruption",
  openGraph: {
    description: "Welcome to the official home of Corrupted Pigs. Join us to explore our unique NFT collection and engaging social game. Log in to access exclusive perks, participate in the burning pigs game, and discover the benefits of holding our NFTs and Coinks tokens.",
    image: "https://corruptedpigs.com/image-twitter-CP-launching-soon.jpg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
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
