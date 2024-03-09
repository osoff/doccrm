import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "@styles/globals.css";

export const metadata = {
  title: "DocCRM",
  description: "CRM for doctors",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="relative">
          <Nav />
          <div className="app ">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
