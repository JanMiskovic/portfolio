import Head from "next/head";
import { IoPerson } from "react-icons/io5";
import { IoMdBriefcase } from "react-icons/io";
import { BsChatQuoteFill, BsInfoCircleFill, BsTelephoneFill } from "react-icons/bs";
import { HiPrinter } from "react-icons/hi";

export default function Resume() {
    return (
        <>
            <Head>
                <title>Ján Miškovič - Resume</title>
            </Head>

            <div className="grid gap-4">
                <div className="flex flex-col gap-4 p-4 my-border rounded-lg
                    bg-bg-light dark:bg-bg-dark transition-[background,_border]">
                    <div className="flex flex-col gap-1.5 xs:gap-2">
                        <h2 className="flex items-center gap-2 xs:text-lg">
                            <IoPerson className="text-[#339DFF] dark:text-[#66C8FF] text-lg"/>
                            Personal details
                        </h2>
                        <ul className="text-sm xs:text-base leading-relaxed">
                            <li>Name: Ján Miškovič</li>
                            <li>Date of birth: 6. 5. 2000</li>
                            <li>City: Hlohovec, 920 01</li>
                            <li>Country: Slovak Republic</li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-1.5 xs:gap-2">
                        <h2 className="flex items-center gap-2 xs:text-lg">
                            <BsTelephoneFill className="text-[#339DFF] dark:text-[#66C8FF]"/>
                            Contact details
                        </h2>
                        <ul className="text-sm xs:text-base leading-relaxed">
                            <li>janmiskovicweb@gmail.com</li>
                            <li className="mb-2">+421 950 594 845</li>
                            <li>Please send an e-mail<br/>before calling.</li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-1.5 xs:gap-2">
                        <h2 className="flex items-center gap-2 xs:text-lg">
                            <BsChatQuoteFill className="text-[#339DFF] dark:text-[#66C8FF]"/>
                            Languages
                        </h2>
                        <ul className="text-sm xs:text-base leading-relaxed">
                            <li>Slovak - Native</li>
                            <li>English - B2 (active)</li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-1.5 xs:gap-2">
                        <h2 className="flex items-center gap-2 xs:text-lg">
                            <BsInfoCircleFill className="text-[#339DFF] dark:text-[#66C8FF]"/>
                            Others
                        </h2>
                        <ul className="text-sm xs:text-base leading-relaxed">
                            <li>Driving license - B</li>
                        </ul>
                    </div>

                    <div className="flex gap-2">
                        <a className="focus-ring my-border rounded-md
                            py-1.5 sm:py-2 px-2 xs:px-3 sm:px-7
                            text-sm xs:text-base transition-colors
                            text-black bg-[#E9F7FF] hover:bg-[#dbf2ff] active:bg-[#ccecff]
                            dark:bg-[#66C8FF] dark:hover:bg-[#85d2ff] dark:active:bg-[#a3ddff]">
                            Download resume
                        </a>
                        <a className="focus-ring my-border rounded-md flex items-center
                            p-1.5 transition-colors
                            text-black bg-[#E9F7FF] hover:bg-[#dbf2ff] active:bg-[#ccecff]
                            dark:bg-[#66C8FF] dark:hover:bg-[#85d2ff] dark:active:bg-[#a3ddff]">
                            <HiPrinter className="text-icon-light dark:text-[#262626] w-5 sm:w-6 h-5 sm:h-6"/>
                        </a>
                    </div>
                </div>

                <div className="flex flex-col gap-4 p-4 my-border rounded-lg
                    bg-bg-light dark:bg-bg-dark transition-[background,_border]">
                    <div className="flex flex-col gap-1.5 xs:gap-2 text-sm xs:text-base leading-relaxed">
                        <h2 className="flex items-center gap-2 text-base xs:text-lg">
                            <IoMdBriefcase className="text-[#339DFF] dark:text-[#66C8FF] text-xl"/>
                            Work experience
                        </h2>
                        <p>
                            <span className="text-xs xs:text-sm">May 2020 - Present</span><br/>
                            <span className="font-medium">Freelance - Web Developer</span><br/>
                            Design and complete implementation of several websites for small to medium sized companies.
                        </p>
                    </div>
                </div>

            </div>
        </>
    );
}
