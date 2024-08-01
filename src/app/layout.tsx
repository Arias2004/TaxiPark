import "./globals.css";

import { ThemeProvider } from "@/providers/theme-provider";
import { NotificacionProvider } from "@/context/NotificacionContext";
import { raleway } from "@/font";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={raleway.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NotificacionProvider>
            <main className="w-full h-full"  >
                {children}
              </main>
          </NotificacionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
