import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "@styles/globals.css";
import Script from "next/script";

export const metadata = {
  title: "DocCRM",
  description: "CRM for doctors",
  icons: {
    icon: "/icodoc.png",
    shortcut: "/icodoc.png",
    apple: "/icodoc.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script id="vk_pixel">
          {`var _tmr = window._tmr || (window._tmr = []);
          _tmr.push({id: "3493947", type: "pageView", start: (new Date()).getTime()});
          _tmr.push({ type: 'reachGoal', id: 3493947, goal: 'VIEW_CONTENT'});
          (function (d, w, id) {
            if (d.getElementById(id)) return;
            var ts = d.createElement("script"); ts.type = "text/javascript"; ts.async = true; ts.id = id;
            ts.src = "https://top-fwz1.mail.ru/js/code.js";
            var f = function () {var s = d.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ts, s);};
            if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); }
          })(document, window, "tmr-code");`}
        </Script>
      </head>
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
