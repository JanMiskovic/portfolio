import Image from "next/future/image";
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>Ján Miškovič</title>
            </Head>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 xs:gap-x-5
                gap-y-3.5 xs:gap-y-4 sm:gap-y-5">

                <a href="https://stavbytrnka.sk" target="_blank" rel="noreferrer"
                    className="flex flex-col rounded-lg focus-ring focus-ring-loose">
                    <div className="my-border rounded-lg p-[10%] mb-1.5 md:mb-2.5 
                        bg-[#E2EEFF] dark:bg-[#66B6FF] transition-colors">
                        <Image src="/websites/stavbytrnka.webp" width={640} height={360}
                            alt="Preview image of website Stavby Trnka"
                            className="rounded-sm drop-shadow-sharp
                            bg-neutral-200 dark:bg-neutral-500"
                        />
                    </div>
                    <h3 className="xs:text-lg sm:text-xl lg:text-2xl">Stavby Trnka</h3>
                    <span className="text-2xs xs:text-xs md:text-sm lg:text-base">Next.js (React)</span>
                </a>
            
                <a href="https://ervaar.eu" target="_blank" rel="noreferrer"
                    className="flex flex-col rounded-lg focus-ring focus-ring-loose">
                    <div className="my-border rounded-lg p-[10%] mb-1.5 md:mb-2.5 
                        bg-[#F0F0F0] dark:bg-[#999999] transition-colors">
                        <Image src="/websites/ervaar.webp" width={640} height={360}
                            alt="Preview image of website Ervaar"
                            className="rounded-sm drop-shadow-sharp
                            bg-neutral-200 dark:bg-neutral-500"
                        />
                    </div>
                    <h3 className="xs:text-lg sm:text-xl lg:text-2xl">Ervaar</h3>
                    <span className="text-2xs xs:text-xs md:text-sm lg:text-base">WordPress (Elementor)</span>
                </a>

                <a href="https://addetailing.sk" target="_blank" rel="noreferrer"
                    className="flex flex-col rounded-lg focus-ring focus-ring-loose">
                    <div className="my-border rounded-lg p-[10%] mb-1.5 md:mb-2.5 
                        bg-[#FFDEDE] dark:bg-[#FF6666] transition-colors">
                        <Image src="/websites/addetailing.webp" width={640} height={360}
                            alt="Preview image of website AD Detailing"
                            className="rounded-sm drop-shadow-sharp
                            bg-neutral-200 dark:bg-neutral-500"
                        />
                    </div>
                    <h3 className="xs:text-lg sm:text-xl lg:text-2xl">AD Detailing</h3>
                    <span className="text-2xs xs:text-xs md:text-sm lg:text-base">WordPress (Elementor)</span>
                </a>
                
                <a href="https://slezocoaching.sk" target="_blank" rel="noreferrer"
                    className="flex flex-col rounded-lg focus-ring focus-ring-loose">
                    <div className="my-border rounded-lg p-[10%] mb-1.5 md:mb-2.5 
                        bg-[#F0F0FF] dark:bg-[#6666FF] transition-colors">
                        <Image src="/websites/slezocoaching.webp" width={640} height={360}
                            alt="Preview image of website Slezocoaching"
                            className="rounded-sm drop-shadow-sharp
                            bg-neutral-200 dark:bg-neutral-500"
                        />
                    </div>
                    <h3 className="xs:text-lg sm:text-xl lg:text-2xl">Slezocoaching</h3>
                    <span className="text-2xs xs:text-xs md:text-sm lg:text-base">WordPress (Elementor)</span>
                </a>

                <a href="https://linkvistica.com" target="_blank" rel="noreferrer"
                    className="flex flex-col rounded-lg focus-ring focus-ring-loose">
                    <div className="my-border rounded-lg p-[10%] mb-1.5 md:mb-2.5 
                        bg-[#FFEFE0] dark:bg-[#FFAF66] transition-colors">
                        <Image src="/websites/linkvistica.webp" width={640} height={360}
                            alt="Preview image of website Linkvistica"
                            className="rounded-sm drop-shadow-sharp
                            bg-neutral-200 dark:bg-neutral-500"
                        />
                    </div>
                    <h3 className="xs:text-lg sm:text-xl lg:text-2xl">Linkvistica</h3>
                    <span className="text-2xs xs:text-xs md:text-sm lg:text-base">WordPress (Elementor)</span>
                </a>

                <a href="https://majdovan.com" target="_blank" rel="noreferrer"
                    className="flex flex-col rounded-lg focus-ring focus-ring-loose">
                    <div className="my-border rounded-lg p-[10%] mb-1.5 md:mb-2.5 
                        bg-[#E0EDFF] dark:bg-[#66A3FF] transition-colors">
                        <Image src="/websites/majdovan.webp" width={640} height={360}
                            alt="Preview image of website Majdovan Automation"
                            className="rounded-sm drop-shadow-sharp
                            bg-neutral-200 dark:bg-neutral-500"
                        />
                    </div>
                    <h3 className="xs:text-lg sm:text-xl lg:text-2xl">Majdovan</h3>
                    <span className="text-2xs xs:text-xs md:text-sm lg:text-base">WordPress (Elementor)</span>
                </a>
            </div>
        </>
    );
}
