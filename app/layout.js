import { Inter } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Corrupted Pigs",
  description: "Corrupted Pigs' NFTs fuel social causes. Play. Earn. Make a Difference.",
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      {process.env.NODE_ENV === 'production' && (
        <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS} />
      )}
    </html>
  );
}
