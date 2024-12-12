import { cookies } from "next/headers";
import Script from "next/script";

function GoogleAnalytics() {
  const session = cookies().get("analyticsConsent")?.value;

  return (
    <>
      {session === "true" && (
        <>
          <Script
            strategy="lazyOnload"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.MEASUREMENT_ID}`}
          />
          <Script id="" strategy="lazyOnload">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.MEASUREMENT_ID}', {
                page_path: window.location.pathname,
                });
                `}
          </Script>
        </>
      )}
    </>
  );
}

export default GoogleAnalytics;
