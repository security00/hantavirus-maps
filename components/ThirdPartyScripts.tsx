"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

function scheduleIdle(callback: () => void) {
  if (typeof window === "undefined") return;

  const idleCallback = window.requestIdleCallback ?? ((handler: IdleRequestCallback) => window.setTimeout(() => handler({ didTimeout: false, timeRemaining: () => 0 }), 3500));
  const cancelIdleCallback = window.cancelIdleCallback ?? window.clearTimeout;
  const id = idleCallback(callback, { timeout: 4500 });

  return () => cancelIdleCallback(id);
}

export function ThirdPartyScripts() {
  const [loadAnalytics, setLoadAnalytics] = useState(false);
  const [loadAds, setLoadAds] = useState(false);

  useEffect(() => scheduleIdle(() => setLoadAnalytics(true)), []);
  useEffect(() => {
    if (!loadAnalytics) return undefined;

    return scheduleIdle(() => setLoadAds(true));
  }, [loadAnalytics]);

  return (
    <>
      {loadAnalytics && (
        <>
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-E7NH3NPGDE" strategy="lazyOnload" />
          <Script id="google-analytics" strategy="lazyOnload">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-E7NH3NPGDE');
            `}
          </Script>
          <Script id="microsoft-clarity" strategy="lazyOnload">
            {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "wp2f5d6gfd");
            `}
          </Script>
        </>
      )}
      {loadAds && (
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1548791648803369"
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />
      )}
    </>
  );
}
