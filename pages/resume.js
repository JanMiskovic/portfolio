import { motion } from "motion/react";
import Head from "next/head";
import Link from "next/link";
import { BsChatFill, BsInfoCircleFill, BsTerminalFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import { HiPrinter } from "react-icons/hi";
import { IoMdBriefcase } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { MdSchool } from "react-icons/md";
import { TbArrowNarrowRight } from "react-icons/tb";
import { FormattedMessage, useIntl } from "react-intl";
import Button3D from "../components/Button3D";

export default function Resume({ isSm, isMd }) {
    const intl = useIntl();

    return (
        <>
            <Head>
                <title>
                    {`Ján Miškovič - ${intl.formatMessage({
                        id: "resume.meta.title",
                    })}`}
                </title>
                <meta
                    property="og:title"
                    content={`Ján Miškovič - ${intl.formatMessage({
                        id: "resume.meta.title",
                    })}`}
                />
                <meta name="robots" content="nosnippet" />
            </Head>
            <div
                className="grid gap-5 text-sm leading-relaxed xs:text-base sm:grid-cols-2
                    md:grid-cols-[2fr_3fr] lg:grid-cols-[3fr_5fr_3fr]">
                {/* Work experience section */}
                <motion.div
                    variants={resumeItemVariants}
                    transition={{
                        ease: "easeInOut",
                        duration: 0.3,
                        delay: isMd ? stagger : 0,
                    }}
                    className="border-thick-bottom flex flex-col gap-5 rounded-lg bg-bg-light p-4 sm:px-5
                        md:col-start-2 lg:col-start-2 dark:bg-bg-dark">
                    <div className="flex flex-col gap-1.5 xs:gap-2 sm:gap-2.5">
                        <h2 className="flex items-center gap-2 text-base xs:text-lg sm:text-xl lg:gap-3 lg:text-2xl">
                            <IoMdBriefcase className="fill-[#339DFF] text-lg xs:text-xl dark:fill-[#66C8FF]" />
                            <FormattedMessage id="resume.work.title" />
                        </h2>
                        <div className="flex flex-col gap-1">
                            <span className="text-xs xs:text-sm">
                                <FormattedMessage id="resume.work.date.1" />
                            </span>
                            <h3 className="font-medium">
                                <FormattedMessage id="resume.work.name.1" />
                            </h3>
                            <p className="max-w-[25rem]">
                                <FormattedMessage id="resume.work.desc.1" />
                            </p>
                            <Link
                                href="/"
                                scroll={false}
                                className="link focus-ring focus-ring-loose transition-hover flex w-fit items-center gap-1
                                    rounded-md font-medium">
                                <FormattedMessage id="resume.work.portfolio" />
                                <TbArrowNarrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </motion.div>

                {/* Education section */}
                <motion.div
                    variants={resumeItemVariants}
                    transition={{
                        ease: "easeInOut",
                        duration: 0.3,
                        delay: isMd ? stagger * 2 : stagger,
                    }}
                    className="border-thick-bottom flex flex-col gap-4 rounded-lg bg-bg-light p-4 sm:px-5
                        lg:col-start-2 dark:bg-bg-dark">
                    <div className="flex flex-col gap-1.5 xs:gap-2 sm:gap-2.5">
                        <h2 className="flex items-center gap-2 text-base xs:text-lg sm:text-xl lg:gap-3 lg:text-2xl">
                            <MdSchool className="fill-[#339DFF] text-xl xs:text-2xl dark:fill-[#66C8FF]" />
                            <FormattedMessage id="resume.education.title" />
                        </h2>
                        <div className="flex flex-col gap-1">
                            <span className="text-xs xs:text-sm">
                                <FormattedMessage id="resume.education.date.1" />
                            </span>
                            <h3 className="font-medium">
                                <FormattedMessage id="resume.education.name.1" />
                            </h3>
                            <p className="mb-2 max-w-[23rem]">
                                <FormattedMessage id="resume.education.desc.1" />
                                <br />
                                <FormattedMessage id="resume.education.location.1" />
                            </p>
                            <span className="max-w-[16rem]">
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
                    variants={resumeItemVariants}
                    transition={{
                        ease: "easeInOut",
                        duration: 0.3,
                        delay: isSm ? stagger * 3 : stagger * 2,
                    }}
                    className="border-thick-bottom flex flex-col gap-1.5 rounded-lg bg-bg-light p-4 xs:gap-2
                        sm:gap-2.5 sm:px-5 md:col-span-full lg:col-start-3 lg:row-start-1 lg:row-end-3
                        dark:bg-bg-dark">
                    <h2 className="flex items-center gap-2 text-base xs:text-lg sm:text-xl lg:gap-3 lg:text-2xl">
                        <BsTerminalFill className="fill-[#339DFF] xs:text-lg dark:fill-[#66C8FF]" />
                        <FormattedMessage id="resume.stack.title" />
                    </h2>
                    <div className="grid gap-2">
                        <h3 className="underline underline-offset-2 md:max-lg:col-start-1 md:max-lg:row-start-1">
                            <FormattedMessage id="resume.stack.regular" />
                        </h3>
                        <ul className="md:max-lg:col-start-1">
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
                                <span className="font-medium">
                                    Tailwind CSS
                                </span>
                                {" - "}
                                <FormattedMessage id="resume.stack.advanced" />
                            </li>
                            <li className="mb-1.5">
                                <span className="font-medium">
                                    Framer Motion
                                </span>
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
                            <li className="-mb-0.5">
                                <span className="font-medium">MySQL</span>
                                {" - "}
                                <FormattedMessage id="resume.stack.intermediate" />
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <span className="font-medium">Python</span>
                                {" - "}
                                <FormattedMessage id="resume.stack.advanced" />
                            </li>
                            <li className="mb-1.5">
                                <span className="font-medium">JavaScript</span>
                                {" - "}
                                <FormattedMessage id="resume.stack.advanced" />
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
                                <span className="font-medium">Vegas</span>
                                {" - "}
                                <FormattedMessage id="resume.stack.intermediate" />
                            </li>
                        </ul>
                        <h3 className="underline underline-offset-2 md:max-lg:col-start-3 md:max-lg:row-start-1">
                            <FormattedMessage id="resume.stack.before" />
                        </h3>
                        <ul className="md:max-lg:col-start-3 md:max-lg:row-start-2">
                            <li>
                                <span className="font-medium">Java</span>
                                {" - "}
                                <FormattedMessage id="resume.stack.intermediate" />
                            </li>
                            <li className="mb-1.5">
                                <span className="font-medium">
                                    Android Studio
                                </span>
                                {" - "}
                                <FormattedMessage id="resume.stack.basic" />
                            </li>
                            <li>
                                <span className="font-medium">WordPress</span>
                                {" - "}
                                <FormattedMessage id="resume.stack.advanced" />
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
                    </div>
                </motion.div>

                {/* Personal details -> Others section */}
                <motion.div
                    variants={resumeItemVariants}
                    transition={{
                        ease: "easeInOut",
                        duration: 0.3,
                        delay: isMd ? 0 : isSm ? stagger * 2 : stagger * 3,
                    }}
                    className="border-thick-bottom flex flex-col gap-4 rounded-lg bg-bg-light p-4
                        sm:row-start-2 sm:justify-between sm:px-5 md:row-start-1 md:row-end-3
                        lg:col-start-1 lg:row-start-1 lg:row-end-3 lg:justify-start dark:bg-bg-dark">
                    {/* Personal details */}
                    <div className="flex flex-col gap-1.5 xs:gap-2 sm:gap-2.5">
                        <h2 className="flex items-center gap-2 text-base xs:text-lg sm:text-xl lg:gap-3 lg:text-2xl">
                            <IoPerson className="fill-[#339DFF] text-lg xs:text-xl dark:fill-[#66C8FF]" />
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
                        <h2 className="flex items-center gap-2 text-base xs:text-lg sm:text-xl lg:gap-3 lg:text-2xl">
                            <FaEnvelope className="fill-[#339DFF] xs:text-lg dark:fill-[#66C8FF]" />
                            <FormattedMessage id="resume.contact.title" />
                        </h2>
                        <ul>
                            <li>
                                <a
                                    href="mailto:jan@janmiskovic.com"
                                    className="link focus-ring focus-ring-loose transition-hover rounded-md font-medium">
                                    jan@janmiskovic.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+421950594845"
                                    className="link focus-ring focus-ring-loose transition-hover rounded-md font-medium">
                                    +421 950 594 845
                                </a>
                            </li>
                        </ul>
                        <p className="max-w-[16rem]">
                            <FormattedMessage id="resume.contact.msg" />
                        </p>
                    </div>

                    {/* Languages */}
                    <div className="flex flex-col gap-1.5 xs:gap-2 sm:gap-2.5">
                        <h2 className="flex items-center gap-2 text-base xs:text-lg sm:text-xl lg:gap-3 lg:text-2xl">
                            <BsChatFill className="fill-[#339DFF] xs:text-lg dark:fill-[#66C8FF]" />
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
                        <h2 className="flex items-center gap-2 text-base xs:text-lg sm:text-xl lg:gap-3 lg:text-2xl">
                            <BsInfoCircleFill className="fill-[#339DFF] xs:text-lg dark:fill-[#66C8FF]" />
                            <FormattedMessage id="resume.other.title" />
                        </h2>
                        <ul>
                            <li>
                                <span className="font-medium">
                                    <FormattedMessage id="resume.other.driving" />
                                </span>
                                {" - B"}
                            </li>
                        </ul>
                    </div>

                    {/* Resume download */}
                    <div className="flex gap-2">
                        <Button3D
                            href={`/cv-${intl.locale}`}
                            download
                            isLink={true}
                            className="h-9 w-[10.5rem] rounded-md text-sm text-black xs:h-10 xs:w-40 xs:text-base
                                sm:h-11 lg:flex-grow"
                            innerClassName="bg-btn-blue hover:bg-btn-blue-hover active:bg-btn-blue-active dark:bg-btn-blue-d
                                dark:hover:bg-btn-blue-d-hover dark:active:bg-btn-blue-d-active">
                            <FormattedMessage id="resume.download.btn" />
                        </Button3D>
                        <Button3D
                            onClick={async () => {
                                await import("print-js");
                                printJS({
                                    printable: `/cv-${intl.locale}`,
                                    type: "pdf",
                                });
                            }}
                            className="w-9 rounded-md xs:w-10 sm:w-11"
                            innerClassName="bg-btn-blue hover:bg-btn-blue-hover active:bg-btn-blue-active dark:bg-btn-blue-d
                                dark:hover:bg-btn-blue-d-hover dark:active:bg-btn-blue-d-active">
                            <HiPrinter className="h-5 w-5 fill-icon-light sm:h-6 sm:w-6 dark:fill-[#3e3e3e]" />
                        </Button3D>
                    </div>
                </motion.div>
            </div>
        </>
    );
}

const resumeItemVariants = {
    initial: { opacity: 0, scale: 0.9, y: -20 },
    animate: { opacity: 1, scale: 1, y: 0 },
};

const stagger = 0.07;
