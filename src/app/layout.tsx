import "./globals.css";
export const metadata = { title: "BugBash", description: "A lightweight client-side tool for logging, tagging, and triaging JavaScript bugs found during manual testing sessions." };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
