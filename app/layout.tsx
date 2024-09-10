"use client"
import type { Metadata } from "next"
import "./globals.css"
import { Heebo } from "next/font/google"
import { useEffect } from "react" // Import useEffect from React

const heeboFont = Heebo({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
})

const metadata: Metadata = {
  title: "Codelify",
  description: "Your creative digital solution",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  useEffect(() => {
    // Add LiveChat script dynamically
    const script = document.createElement('script');
    script.src = 'https://cdn.livechatinc.com/tracking.js';
    script.async = true;

    const inlineScript = document.createElement('script');
    inlineScript.innerHTML = `
      window.__lc = window.__lc || {};
      window.__lc.license = 18530559;
      window.__lc.integration_name = "manual_onboarding";
      window.__lc.product_name = "livechat";
      (function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}
      var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},
      once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},
      get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can't use getters before load.");
      return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},
      init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",
      n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};
      !n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice));
    `;
    
    document.head.appendChild(inlineScript); // Append inline script for initialization
    document.head.appendChild(script);       // Append actual LiveChat tracking script

    return () => {
      // Cleanup scripts on unmount
      document.head.removeChild(script);
      document.head.removeChild(inlineScript);
    };
  }, []);

  return (
    <html lang='en'>
      <body className={heeboFont.className}>{children}</body>
    </html>
  )
}
