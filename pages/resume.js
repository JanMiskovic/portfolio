import Head from "next/head";
import { IoPerson } from "react-icons/io5";
import { BsChatQuoteFill, BsInfoCircleFill, BsTelephoneFill } from "react-icons/bs";

export default function Resume() {
    return (
        <>
            <Head>
                <title>Ján Miškovič - Resume</title>
            </Head>

            <div className="grid">
                <div className="flex flex-col gap-4 p-4 my-border rounded-lg
                    bg-bg-light dark:bg-bg-dark transition-[background,_border]">
                    <div className="flex flex-col gap-1.5">
                        <h2 className="flex items-center gap-2">
                            <IoPerson className="text-[#339DFF] dark:text-[#66C8FF]"/>
                            Personal details
                        </h2>
                        <ul className="text-sm leading-relaxed">
                            <li>Name: Ján Miškovič</li>
                            <li>Date of birth: 6. 5. 2000</li>
                            <li>City: Hlohovec, 920 01</li>
                            <li>Country: Slovak Republic</li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <h2 className="flex items-center gap-2">
                            <BsTelephoneFill className="text-[#339DFF] dark:text-[#66C8FF]"/>
                            Contact details
                        </h2>
                        <ul className="text-sm leading-relaxed">
                            <li>janmiskovicweb@gmail.com</li>
                            <li className="mb-2">+421 950 594 845</li>
                            <li>Please send an e-mail<br/>before calling.</li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <h2 className="flex items-center gap-2">
                            <BsChatQuoteFill className="text-[#339DFF] dark:text-[#66C8FF]"/>
                            Languages
                        </h2>
                        <ul className="text-sm leading-relaxed">
                            <li>Slovak - Native</li>
                            <li>English - B2 (active)</li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <h2 className="flex items-center gap-2">
                            <BsInfoCircleFill className="text-[#339DFF] dark:text-[#66C8FF]"/>
                            Others
                        </h2>
                        <ul className="text-sm leading-relaxed">
                            <li>Driving license - B</li>
                        </ul>
                    </div>

                    <div>
                        <a className="focus-ring my-border rounded-md shrink-0
                            py-1.5 sm:py-2 px-2 xs:px-3 sm:px-7
                            text-sm xs:text-base transition-colors
                            text-black bg-[#E9F7FF] hover:bg-[#dbf2ff] active:bg-[#ccecff]
                            dark:bg-[#66C8FF] dark:hover:bg-[#85d2ff] dark:active:bg-[#a3ddff]">
                            Message me
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
