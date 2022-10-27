import Head from "next/head";
import { FormattedMessage, useIntl } from "react-intl";
import {
    BsChatQuoteFill,
    BsInfoCircleFill,
    BsTelephoneFill,
    BsTerminalFill,
} from "react-icons/bs";
import { IoMdBriefcase } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { HiPrinter } from "react-icons/hi";
import { MdSchool } from "react-icons/md";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Resume({ isSm, isMd }) {
    const intl = useIntl();

    const resumeItems = {
        initial: { opacity: 0, scale: 0.9, y: -20 },
        animate: { opacity: 1, scale: 1, y: 0 },
    };

    const stagger = 0.07;

    return (
        <>
            <Head>
                <title>
                    Ján Miškovič{" - "}
                    {intl.formatMessage({ id: "resume.meta.title" })}
                </title>
                <meta
                    property="og:title"
                    content={`Ján Miškovič - ${intl.formatMessage({
                        id: "resume.meta.title",
                    })}`}
                />
                <meta name="robots" content="nosnippet" />
            </Head>

            <motion.div
                initial="initial"
                animate="animate"
                className="grid gap-5 text-sm leading-relaxed xs:text-base
                sm:grid-cols-2 md:grid-cols-[2fr_3fr] lg:grid-cols-[3fr_5fr_3fr]">
                {/* Work experience section */}
                <motion.div
                    variants={resumeItems}
                    transition={{
                        ease: "easeInOut",
                        duration: 0.3,
                        delay: isMd ? stagger : 0,
                    }}
                    className="my-border flex flex-col gap-5 rounded-lg bg-bg-light 
                    p-4 will-change-transform dark:bg-bg-dark sm:px-5 md:col-start-2 lg:col-start-2">
                    <div className="flex flex-col gap-1.5 xs:gap-2 sm:gap-2.5">
                        <h2 className="flex items-center gap-2 text-base xs:text-lg sm:text-xl lg:gap-3 lg:text-2xl">
                            <IoMdBriefcase
                                className="fill-[#339DFF] text-lg
                                dark:fill-[#66C8FF] xs:text-xl"
                            />
                            <FormattedMessage id="resume.work.title" />
                        </h2>
                        <div className="flex flex-col gap-1">
                            <span className="text-xs xs:text-sm">
                                <FormattedMessage id="resume.work.date.1" />
                            </span>
                            <h3 className="font-medium">
                                <FormattedMessage id="resume.work.name.1" />
                            </h3>
                            <p>
                                <FormattedMessage id="resume.work.desc.1" />
                            </p>
                            <Link href="/">
                                <a
                                    className="link focus-ring focus-ring-loose transition-hover
                                    w-fit rounded-md font-medium">
                                    <FormattedMessage id="resume.work.portfolio" />
                                </a>
                            </Link>
                        </div>
                    </div>
                </motion.div>

                {/* Education section */}
                <motion.div
                    variants={resumeItems}
                    transition={{
                        ease: "easeInOut",
                        duration: 0.3,
                        delay: isMd ? stagger * 2 : stagger,
                    }}
                    className="my-border flex flex-col gap-4 rounded-lg bg-bg-light
                    p-4 will-change-transform dark:bg-bg-dark sm:px-5 lg:col-start-2">
                    <div className="flex flex-col gap-1.5 xs:gap-2 sm:gap-2.5">
                        <h2 className="flex items-center gap-2 text-base xs:text-lg sm:text-xl lg:gap-3 lg:text-2xl">
                            <MdSchool
                                className="fill-[#339DFF] text-xl
                                dark:fill-[#66C8FF] xs:text-2xl"
                            />
                            <FormattedMessage id="resume.education.title" />
                        </h2>
                        <div className="flex flex-col gap-1">
                            <span className="text-xs xs:text-sm">
                                <FormattedMessage id="resume.education.date.1" />
                            </span>
                            <h3 className="font-medium">
                                <FormattedMessage id="resume.education.name.1" />
                            </h3>
                            <p className="mb-2">
                                <FormattedMessage id="resume.education.desc.1" />
                                <br />
                                <FormattedMessage id="resume.education.location.1" />
                            </p>
                            <span>
                                <span className="font-medium">
                                    <FormattedMessage id="resume.education.bc.title" />
                                </span>
                                {" - "}
                                <FormattedMessage id="resume.education.bc.name" />
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-xs xs:text-sm">
                            <FormattedMessage id="resume.education.date.2" />
                        </span>
                        <h3 className="font-medium">
                            <FormattedMessage id="resume.education.name.2" />
                        </h3>
                        <p>
                            <FormattedMessage id="resume.education.desc.2" />
                            <br />
                            <FormattedMessage id="resume.education.location.2" />
                        </p>
                    </div>
                </motion.div>

                {/* Stack section */}
                <motion.div
                    variants={resumeItems}
                    transition={{
                        ease: "easeInOut",
                        duration: 0.3,
                        delay: isSm ? stagger * 3 : stagger * 2,
                    }}
                    className="my-border flex flex-col gap-1.5 rounded-lg bg-bg-light
                    p-4 will-change-transform dark:bg-bg-dark xs:gap-2 sm:gap-2.5 sm:px-5
                    md:col-span-full lg:col-start-3 lg:row-start-1 lg:row-end-3">
                    <h2 className="flex items-center gap-2 text-base xs:text-lg sm:text-xl lg:gap-3 lg:text-2xl">
                        <BsTerminalFill
                            className="fill-[#339DFF] text-lg
                            dark:fill-[#66C8FF]"
                        />
                        <FormattedMessage id="resume.stack.title" />
                    </h2>
                    <h3>
                        <FormattedMessage id="resume.stack.regular" />
                    </h3>
                    <ul>
                        <li>
                            <span className="font-medium">Next.js</span>
                            {" - "}
                            <FormattedMessage id="resume.stack.intermediate" />
                        </li>
                        <li>
                            <span className="font-medium">React</span>
                            {" - "}
                            <FormattedMessage id="resume.stack.intermediate" />
                        </li>
                        <li>
                            <span className="font-medium">Tailwind CSS</span>
                            {" - "}
                            <FormattedMessage id="resume.stack.advanced" />
                        </li>
                        <li className="mb-1.5">
                            <span className="font-medium">Framer Motion</span>
                            {" - "}
                            <FormattedMessage id="resume.stack.basic" />
                        </li>
                        <li>
                            <span className="font-medium">HTML</span>
                            {" - "}
                            <FormattedMessage id="resume.stack.advanced" />
                        </li>
                        <li>
                            <span className="font-medium">CSS</span>
                            {" - "}
                            <FormattedMessage id="resume.stack.advanced" />
                        </li>
                        <li className="mb-1.5">
                            <span className="font-medium">MySQL</span>
                            {" - "}
                            <FormattedMessage id="resume.stack.intermediate" />
                        </li>
                        <li>
                            <span className="font-medium">Python</span>
                            {" - "}
                            <FormattedMessage id="resume.stack.advanced" />
                        </li>
                        <li className="mb-1.5">
                            <span className="font-medium">JavaScript</span>
                            {" - "}
                            <FormattedMessage id="resume.stack.intermediate" />
                        </li>
                        <li>
                            <span className="font-medium">Git</span>
                            {" - "}
                            <FormattedMessage id="resume.stack.intermediate" />
                        </li>
                        <li>
                            <span className="font-medium">Figma</span>
                            {" - "}
                            <FormattedMessage id="resume.stack.intermediate" />
                        </li>
                        <li>
                            <span className="font-medium">GIMP</span>
                            {" - "}
                            <FormattedMessage id="resume.stack.intermediate" />
                        </li>
                        <li>
                            <span className="font-medium">Sony Vegas</span>
                            {" - "}
                            <FormattedMessage id="resume.stack.intermediate" />
                        </li>
                    </ul>

                    <h3>
                        <FormattedMessage id="resume.stack.before" />
                    </h3>
                    <ul>
                        <li>
                            <span className="font-medium">Java</span>
                            {" - "}
                            <FormattedMessage id="resume.stack.intermediate" />
                        </li>
                        <li className="mb-1.5">
                            <span className="font-medium">Android Studio</span>
                            {" - "}
                            <FormattedMessage id="resume.stack.basic" />
                        </li>
                        <li>
                            <span className="font-medium">WordPress</span>
                            {" - "}
                            <FormattedMessage id="resume.stack.intermediate" />
                        </li>
                        <li>
                            <span className="font-medium">Laravel</span>
                            {" - "}
                            <FormattedMessage id="resume.stack.basic" />
                        </li>
                        <li>
                            <span className="font-medium">PHP</span>
                            {" - "}
                            <FormattedMessage id="resume.stack.basic" />
                        </li>
                    </ul>
                </motion.div>

                {/* Personal details -> Others section */}
                <motion.div
                    variants={resumeItems}
                    transition={{
                        ease: "easeInOut",
                        duration: 0.3,
                        delay: isMd ? 0 : isSm ? stagger * 2 : stagger * 3,
                    }}
                    className="my-border flex flex-col gap-4 rounded-lg bg-bg-light
                    p-4 will-change-transform dark:bg-bg-dark sm:row-start-2 sm:justify-between sm:px-5 
                    md:row-start-1 md:row-end-3 lg:col-start-1
                    lg:row-start-1 lg:row-end-3 lg:justify-start">
                    {/* Personal details */}
                    <div className="flex flex-col gap-1.5 xs:gap-2 sm:gap-2.5">
                        <h2 className="flex items-center gap-2 text-base xs:text-lg sm:text-xl lg:gap-3 lg:text-2xl">
                            <IoPerson
                                className="fill-[#339DFF] text-lg
                                dark:fill-[#66C8FF] xs:text-xl"
                            />
                            <FormattedMessage id="resume.personal.title" />
                        </h2>
                        <ul>
                            <li>
                                <span className="font-medium">
                                    <FormattedMessage id="resume.personal.name" />
                                </span>
                                : Ján Miškovič
                            </li>
                            <li>
                                <span className="font-medium">
                                    <FormattedMessage id="resume.personal.birth" />
                                </span>
                                : 6. 5. 2000
                            </li>
                            <li>
                                <span className="font-medium">
                                    <FormattedMessage id="resume.personal.address" />
                                </span>
                                : Hlohovec, 920 01
                            </li>
                            <li>
                                <FormattedMessage id="resume.personal.country" />
                            </li>
                        </ul>
                    </div>

                    {/* Contact details */}
                    <div className="flex flex-col gap-1.5 xs:gap-2 sm:gap-2.5">
                        <h2
                            className="flex items-center gap-2 text-base
                            xs:text-lg sm:text-xl lg:gap-3 lg:text-2xl">
                            <BsTelephoneFill
                                className="fill-[#339DFF] text-lg
                                dark:fill-[#66C8FF]"
                            />
                            <FormattedMessage id="resume.contact.title" />
                        </h2>
                        <ul>
                            <li>
                                <a
                                    href="mailto:jan@janmiskovic.com"
                                    className="link focus-ring focus-ring-loose 
                                    transition-hover rounded-md font-medium">
                                    jan@janmiskovic.com
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    href="tel:+421950594845"
                                    className="link focus-ring focus-ring-loose
                                    transition-hover rounded-md font-medium">
                                    +421 950 594 845
                                </a>
                            </li>
                            <li>
                                <FormattedMessage
                                    id="resume.contact.msg"
                                    values={{ br: <br /> }}
                                />
                            </li>
                        </ul>
                    </div>

                    {/* Languages */}
                    <div className="flex flex-col gap-1.5 xs:gap-2 sm:gap-2.5">
                        <h2
                            className="flex items-center gap-2 text-base
                            xs:text-lg sm:text-xl lg:gap-3 lg:text-2xl">
                            <BsChatQuoteFill
                                className="fill-[#339DFF] text-lg
                            dark:fill-[#66C8FF]"
                            />
                            <FormattedMessage id="resume.languages.title" />
                        </h2>
                        <ul>
                            <li>
                                <span className="font-medium">
                                    <FormattedMessage id="resume.languages.name.1" />
                                </span>
                                {" - "}
                                <FormattedMessage id="resume.languages.level.1" />
                            </li>
                            <li>
                                <span className="font-medium">
                                    <FormattedMessage id="resume.languages.name.2" />
                                </span>
                                {" - "}
                                <FormattedMessage id="resume.languages.level.2" />
                            </li>
                        </ul>
                    </div>

                    {/* Other */}
                    <div className="flex flex-col gap-1.5 xs:gap-2 sm:gap-2.5">
                        <h2
                            className="flex items-center gap-2 text-base
                            xs:text-lg sm:text-xl lg:gap-3 lg:text-2xl">
                            <BsInfoCircleFill
                                className="fill-[#339DFF] text-lg
                            dark:fill-[#66C8FF]"
                            />
                            <FormattedMessage id="resume.other.title" />
                        </h2>
                        <ul>
                            <li>
                                <span className="font-medium">
                                    <FormattedMessage id="resume.other.driving" />
                                </span>
                                &nbsp;- B
                            </li>
                        </ul>
                    </div>

                    {/* Resume download */}
                    <div className="flex gap-2">
                        <a
                            className="focus-ring my-border transition-hover w-[10.5rem]
                            rounded-md bg-[#E9F7FF] py-1.5 text-center text-sm text-black hover:bg-[#dbf2ff]
                            active:bg-[#ccecff] dark:bg-[#66C8FF] dark:hover:bg-[#85d2ff] dark:active:bg-[#a3ddff]
                            xs:text-base sm:py-2 lg:flex-grow">
                            <FormattedMessage id="resume.download.btn" />
                        </a>
                        <a
                            className="focus-ring my-border transition-hover flex 
                            items-center rounded-md bg-[#E9F7FF] p-1.5
                            hover:bg-[#dbf2ff] active:bg-[#ccecff] dark:bg-[#66C8FF]
                            dark:hover:bg-[#85d2ff] dark:active:bg-[#a3ddff] xs:p-2">
                            <HiPrinter className="h-5 w-5 fill-icon-light dark:fill-[#3e3e3e] sm:h-6 sm:w-6" />
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        </>
    );
}
