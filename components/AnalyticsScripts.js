import { getCookie } from "cookies-next";
import Script from "next/script";

export default function GoogleTagManager() {
    const localCookieConsent = getCookie("localCookieConsent");

    return (
        <>
            <Script
                id="gtag"
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA4_ID}`}
            />

            <Script id="gtag-init" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    
                    gtag('consent', 'default', {
                        'ad_storage': 'denied',
                        'analytics_storage': '${
                            localCookieConsent === true ? "granted" : "denied"
                        }'
                    });

                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GA4_ID}', {
                        page_path: window.location.pathname,
                        cookie_domain: 'none',
                    });
                `}
            </Script>
        </>
    );
}
