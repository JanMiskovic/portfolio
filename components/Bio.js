import { FormattedMessage } from "react-intl";
import { motion } from "framer-motion";
import Image from "next/future/image";
import Link from "next/link";
import Dbr from "./Dbr";
import Socials from "./Socials";
import ProfileImg from "../public/images/profile_pic.webp";
import SkFlagImg from "../public/icons/skflag.webp";
import Button3D from "./Button3D";

export default function Bio() {
    return (
        <div
            className="mb-4 grid grid-cols-[auto_minmax(0,_1fr)] items-center
            gap-x-5 gap-y-5 md:mb-10 md:grid-cols-3 md:gap-y-4 lg:mb-16">
            {/* Profile pic */}
            <Image
                priority={true}
                src={ProfileImg}
                alt="Profile picture of Ján"
                className="border-uniform h-16 w-16 self-center rounded-full
                bg-gradient-to-br from-[hsl(237,_100%,_98%)] to-bg-light
                dark:from-[hsl(237,_13%,_17%)] dark:to-bg-dark
                xs:h-20 xs:w-20 sm:h-32 sm:w-32
                md:row-span-2 md:h-fit md:w-5/6 lg:h-72 lg:w-72"
            />

            {/* Name and location */}
            <div className="col-span-full col-start-2 md:self-end">
                <div className="overflow-hidden">
                    <motion.h1
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.35 }}
                        className="text-3xl xs:text-4xl sm:text-6xl md:mb-1 lg:mb-1.5">
                        Ján Miškovič
                    </motion.h1>
                </div>
                <div className="overflow-hidden">
                    <motion.span
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.45 }}
                        className="flex items-center gap-1.5 xs:text-lg sm:text-xl">
                        <FormattedMessage id="bio.location" />
                        <Image
                            src={SkFlagImg}
                            alt="Flag icon of the Slovak Republic"
                            className="mt-1 h-4 w-4 xs:h-5 xs:w-5"
                        />
                    </motion.span>
                </div>
            </div>

            {/* Bio text */}
            <div
                className="col-span-full flex flex-col gap-5 text-sm
                xs:text-base md:col-start-2 md:self-start">
                <p className="leading-relaxed">
                    <FormattedMessage id="bio.text.line.1" />
                    <Dbr />
                    <FormattedMessage id="bio.text.line.2" />
                    <Dbr />
                    <FormattedMessage id="bio.text.line.3" />
                    <Dbr />
                    <FormattedMessage id="bio.text.line.4" />
                </p>

                {/* Contact button and socials */}
                <div className="flex gap-3 sm:gap-5">
                    <Link href="/contact" scroll={false} passHref>
                        <Button3D
                            isLink={true}
                            className="h-9 w-[6.5rem] shrink-0 rounded-md
                            text-sm text-black xs:h-10 xs:w-32
                            xs:text-base sm:h-11 sm:w-40"
                            innerClassName="bg-btn-blue hover:bg-btn-blue-hover
                            active:bg-btn-blue-active dark:bg-btn-blue-d
                            dark:hover:bg-btn-blue-d-hover
                            dark:active:bg-btn-blue-d-active">
                            <FormattedMessage id="bio.btn" />
                        </Button3D>
                    </Link>
                    <Socials />
                </div>
            </div>
        </div>
    );
}
