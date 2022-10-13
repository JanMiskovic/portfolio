import Script from "next/script";
import { getCookie } from "cookies-next";

export default function GoogleTagManager() {
    const localCookieConsent = getCookie("localCookieConsent");
    
    return (
        <>
            <Script id="gtag" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}

                    gtag('consent', 'default', {
                        'ad_storage': 'denied',
                        'analytics_storage': 'denied'
                    });
        
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
                `}
            </Script>

            {localCookieConsent === true && (
                <Script id="consent_update" strategy="afterInteractive">
                    {`
                        gtag('consent', 'update', {
                            'ad_storage': 'granted',
                            'analytics_storage': 'granted'
                        });
                    `}
                </Script>
            )}
        </>
    );
}
