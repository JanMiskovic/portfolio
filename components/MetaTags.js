import Head from "next/head";
import { useRouter } from "next/router";
import { useIntl } from "react-intl";

export default function MetaTags() {
    const { asPath, locale } = useRouter();
    const intl = useIntl();
    
    return (
        <Head>
            <meta name="author" content="Ján Miškovič"/>
            <meta property="og:description" content={intl.formatMessage({id: "general.meta.desc"})}/>
            <meta property="og:image" content=""/>
            <meta property="og:url" content={`https://janmiskovic.com${locale === "sk" ? "/sk" : ""}${asPath}`}/>
            <meta property="og:type" content="article"/>
            <meta property="og:site_name" content="janmiskovic.com"/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:image:alt" content="Logo of the website janmiskovic.com"/>
        </Head>
    );
}
