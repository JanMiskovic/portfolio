import Image from "next/future/image";
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>Ján Miškovič</title>
            </Head>
            
            <div className="grid grid-cols-2 gap-5">
                <a href="https://stavbytrnka.sk" target="_blank" rel="noreferrer"
                    className="flex flex-col">
                    <div className="my-border rounded-lg p-4 mb-1.5 bg-[#E2EEFF]">
                        <Image src="/websites/stavbytrnka.webp" width={640} height={360}
                            alt="Preview image of website Stavby Trnka"
                            className="rounded-sm drop-shadow-sharp"
                        />
                    </div>
                    <h3>Stavby Trnka</h3>
                    <span className="text-2xs">Next.js (React + Tailwind CSS)</span>
                </a>
            
                <a href="https://ervaar.eu" target="_blank" rel="noreferrer"
                    className="flex flex-col">
                    <div className="my-border rounded-lg p-4 mb-1.5 bg-[#F0F0F0]">
                        <Image src="/websites/ervaar.webp" width={640} height={360}
                            alt="Preview image of website Stavby Trnka"
                            className="rounded-sm drop-shadow-sharp"
                        />
                    </div>
                    <h3>Ervaar</h3>
                    <span className="text-2xs">Wordpress (Elementor)</span>
                </a>
            </div>
        </>
    );
}
