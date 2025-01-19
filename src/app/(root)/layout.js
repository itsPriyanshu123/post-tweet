import { SessionProvider } from "next-auth/react";
import Navbar from '../../components/navbar'
export default function RootLayout({ children }) {
  return (
    <SessionProvider>
      <html lang="en">
        <body>
          <Navbar />
          {children}
        </body>
      </html>
    </SessionProvider>
  );
}
