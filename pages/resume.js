import Head from "next/head";
import { motion } from "framer-motion";
import { IoPerson } from "react-icons/io5";
import { IoMdBriefcase } from "react-icons/io";
import { BsChatQuoteFill, BsInfoCircleFill, BsTelephoneFill, BsTerminalFill } from "react-icons/bs";
import { HiPrinter } from "react-icons/hi";
import { MdSchool } from "react-icons/md";

export default function Resume() {
    const resumeItems = {
        initial: { opacity: 0, y: -20, scale: 0.9 },
        animate: { opacity: 1, y: 0, scale: 1,
            transition: { 
                duration: 0.3,
                ease: "easeInOut"
            }
        },
    };

    return (
        <>
            <Head>
                <title>Ján Miškovič - Resume</title>
            </Head>

            <motion.div variants={{ animate: {transition: {staggerChildren: 0.07}}}}
                className="grid gap-5 sm:grid-cols-2 lg:grid-cols-[6fr_5fr_5fr_6fr]
                text-sm xs:text-base leading-relaxed">

                <motion.div variants={resumeItems}
                    className="flex flex-col gap-5 p-4 sm:px-5 my-border rounded-lg will-change-transform
                    bg-bg-light dark:bg-bg-dark lg:col-start-2 lg:col-end-4 lg:order-2">
                    <div className="flex flex-col gap-1.5 xs:gap-2 sm:gap-2.5">
                        <h2 className="flex items-center gap-2 lg:gap-3 text-base xs:text-lg sm:text-xl lg:text-2xl">
                            <IoMdBriefcase className="fill-[#339DFF] dark:fill-[#66C8FF]
                                text-lg xs:text-xl"/>
                            Work experience
                        </h2>
                        <div className="flex flex-col gap-1">
                            <span className="text-xs xs:text-sm">May 2020 - Present</span>
                            <h3 className="font-medium">Freelance - Web Developer</h3>
                            <p>
                                Design and complete implementation of several
                                websites for small to medium sized companies.
                            </p>
                        </div>
                    </div>
                </motion.div>

                <motion.div variants={resumeItems}
                    className="flex flex-col gap-4 p-4 sm:px-5 my-border rounded-lg will-change-transform
                    bg-bg-light dark:bg-bg-dark lg:col-start-2 lg:col-end-4 lg:order-3">
                    <div className="flex flex-col gap-1.5 xs:gap-2 sm:gap-2.5">
                        <h2 className="flex items-center gap-2 lg:gap-3 text-base xs:text-lg sm:text-xl lg:text-2xl">
                            <MdSchool className="fill-[#339DFF] dark:fill-[#66C8FF]
                                text-xl xs:text-2xl"/>
                            Education
                        </h2>
                        <div className="flex flex-col gap-1">
                            <span className="text-xs xs:text-sm">September 2019 - May 2022</span>
                            <h3 className="font-medium">Applied Informatics</h3>
                            <p className="mb-2">
                                Faculty of Natural Sciences and Informatics,
                                Constantine the Philosopher University in Nitra<br/>
                                Nitra, Slovak Republic
                            </p>
                            <span>
                                <span className="font-medium">Bachelor’s project </span>
                                - Functional programming in&nbsp;Python
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-xs xs:text-sm">September 2011 - May 2019</span>
                        <h3 className="font-medium">Ivan Kupec Gymnasium</h3>
                        <p>
                            8-year grammar school<br/>
                            Hlohovec, Slovak Republic
                        </p>
                    </div>
                </motion.div>

                <motion.div variants={resumeItems}
                    className="flex flex-col gap-1.5 xs:gap-2 sm:gap-2.5 p-4 sm:px-5 will-change-transform
                    my-border rounded-lg bg-bg-light dark:bg-bg-dark sm:order-1 lg:order-3
                    lg:col-start-4 lg:row-start-1 lg:row-end-3">
                    <h2 className="flex items-center gap-2 lg:gap-3 text-base xs:text-lg sm:text-xl lg:text-2xl">
                        <BsTerminalFill className="fill-[#339DFF] dark:fill-[#66C8FF]
                        text-base"/>
                        Stack
                    </h2>
                    <div className="flex flex-col gap-4">
                        <ul>
                            <li><span className="font-medium">Next.js</span> - Intermediate</li>
                            <li><span className="font-medium">React</span> - Intermediate</li>
                            <li><span className="font-medium">Tailwind CSS</span> - Advanced</li>
                            <li><span className="font-medium">Framer Motion</span> - Basic</li>
                        </ul>
                        <ul>
                            <li><span className="font-medium">HTML</span> - Advanced</li>
                            <li><span className="font-medium">CSS</span> - Advanced</li>
                        </ul>
                        <ul>
                            <li><span className="font-medium">Laravel</span> - Basic</li>
                            <li><span className="font-medium">WordPress</span> - Intermediate</li>
                            <li><span className="font-medium">SQL</span> - Intermediate</li>
                            <li><span className="font-medium">PHP</span> - Basic</li>
                        </ul>
                        <ul>
                            <li><span className="font-medium">Java</span> - Advanced</li>
                            <li><span className="font-medium">Python</span> - Advanced</li>
                            <li><span className="font-medium">JavaScript</span> - Intermediate</li>
                            <li><span className="font-medium">TypeScript</span> - Basic</li>
                        </ul>
                        <ul>
                            <li><span className="font-medium">Git</span> - Intermediate</li>
                            <li><span className="font-medium">Figma</span> - Intermediate</li>
                            <li><span className="font-medium">GIMP</span> - Intermediate</li>
                        </ul>
                    </div>
                </motion.div>

                <motion.div variants={resumeItems}
                    className="flex flex-col gap-4 p-4 sm:px-5 my-border rounded-lg will-change-transform
                    bg-bg-light dark:bg-bg-dark lg:col-start-1 lg:row-start-1 lg:row-end-3 lg:order-1">
                    <div className="flex flex-col gap-1.5 xs:gap-2 sm:gap-2.5">
                        <h2 className="flex items-center gap-2 lg:gap-3 text-base xs:text-lg sm:text-xl lg:text-2xl">
                            <IoPerson className="fill-[#339DFF] dark:fill-[#66C8FF]
                                text-lg xs:text-xl"/>
                            Personal details
                        </h2>
                        <ul>
                            <li><span className="font-medium">Name:</span> Ján Miškovič</li>
                            <li><span className="font-medium">Date of birth:</span> 6. 5. 2000</li>
                            <li><span className="font-medium">Address:</span> Hlohovec, 920 01</li>
                            <li>Slovak Republic</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-1.5 xs:gap-2 sm:gap-2.5">
                        <h2 className="flex items-center gap-2 lg:gap-3 text-base xs:text-lg sm:text-xl lg:text-2xl">
                            <BsTelephoneFill className="fill-[#339DFF] dark:fill-[#66C8FF]
                            text-base"/>
                            Contact details
                        </h2>
                        <ul>
                            <li className="font-medium link transition-hover">
                                <a href="mailto:janmiskovicweb@gmail.com">
                                    janmiskovicweb@gmail.com
                                </a>
                            </li>
                            <li className="font-medium link transition-hover mb-2">
                                <a href="tel:+421950594845">
                                +421 950 594 845
                                </a>
                            </li>
                            <li className="text-sm lg:text-base">
                                Please send an e-mail or use<br/>
                                the contact form before calling.
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-1.5 xs:gap-2 sm:gap-2.5">
                        <h2 className="flex items-center gap-2 lg:gap-3 text-base xs:text-lg sm:text-xl lg:text-2xl">
                            <BsChatQuoteFill className="fill-[#339DFF] dark:fill-[#66C8FF]
                            text-base"/>
                            Languages
                        </h2>
                        <ul>
                            <li><span className="font-medium">Slovak</span> - Native</li>
                            <li><span className="font-medium">English</span> - B2 (active)</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-1.5 xs:gap-2 sm:gap-2.5">
                        <h2 className="flex items-center gap-2 lg:gap-3 text-base xs:text-lg sm:text-xl lg:text-2xl">
                            <BsInfoCircleFill className="fill-[#339DFF] dark:fill-[#66C8FF]
                            text-base"/>
                            Other
                        </h2>
                        <ul>
                            <li><span className="font-medium">Driving license</span> - B</li>
                        </ul>
                    </div>
                    <div className="flex gap-2">
                        <a className="focus-ring my-border rounded-md transition-hover
                            py-1.5 sm:py-2 px-2 xs:px-3 text-sm xs:text-base 
                            text-black bg-[#E9F7FF] hover:bg-[#dbf2ff] active:bg-[#ccecff]
                            dark:bg-[#66C8FF] dark:hover:bg-[#85d2ff] dark:active:bg-[#a3ddff]">
                            Download resume
                        </a>
                        <a className="focus-ring my-border transition-hover 
                            p-1.5 xs:p-2 rounded-md flex items-center
                            bg-[#E9F7FF] hover:bg-[#dbf2ff] active:bg-[#ccecff]
                            dark:bg-[#66C8FF] dark:hover:bg-[#85d2ff] dark:active:bg-[#a3ddff]">
                            <HiPrinter className="text-icon-light dark:text-[#3e3e3e] w-5 sm:w-6 h-5 sm:h-6"/>
                        </a>
                    </div>
                </motion.div>

            </motion.div>
        </>
    );
}
