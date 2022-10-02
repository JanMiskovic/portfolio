import { FormattedMessage } from "react-intl";
import Image from "next/future/image";
import Link from "next/link";
import Dbr from "./Dbr";
import Socials from "./Socials";
import ProfileImg from "../public/profile_pic.jpg";
import SkFlagImg from "../public/icons/skflag.webp";

export default function Bio() {
    return (
        <div className="grid grid-cols-[auto_minmax(0,_1fr)] md:grid-cols-3 items-center
            gap-x-5 gap-y-5 md:gap-y-4 mb-4 md:mb-10 lg:mb-16">

            {/* Profile pic */}
            <Image priority={true} src={ProfileImg} placeholder="blur" alt="Profile picture of Ján" 
                className="md:row-span-2 self-center rounded-full my-border bg-neutral-200
                w-16 h-16 xs:w-20 xs:h-20 sm:w-32 sm:h-32 md:w-5/6 md:h-fit lg:w-72 lg:h-72"
            />

            {/* Name and location */}
            <div className="col-start-2 col-span-full md:self-end">
                <h1 className="text-3xl xs:text-4xl sm:text-6xl md:mb-1 lg:mb-1.5">
                    Ján Miškovič
                </h1>
                <span className="flex items-center gap-1.5 xs:text-lg sm:text-xl">
                    <FormattedMessage id="bio.location"/>
                    <Image src={SkFlagImg} alt="Flag icon of the Slovak Republic"
                        className="mt-1 w-4 h-4 xs:w-5 xs:h-5"/>
                </span>
                
            </div>

            {/* Bio text */}
            <div className="text-sm xs:text-base md:col-start-2 col-span-full md:self-start flex flex-col gap-5">
                <p className="leading-relaxed">
                    <FormattedMessage id="bio.text.line.1"/><Dbr/>
                    <FormattedMessage id="bio.text.line.2"/><Dbr/>
                    <FormattedMessage id="bio.text.line.3"/><Dbr/>
                    <FormattedMessage id="bio.text.line.4"/>
                </p>

                {/* Contact button and socials */}
                <div className="flex gap-3 sm:gap-5">
                    <Link href="/contact">
                        <a className="focus-ring my-border transition-hover 
                            rounded-md shrink-0 py-1.5 sm:py-2 w-[6.5rem] xs:w-32 sm:w-40
                            text-sm xs:text-base text-center 
                            text-black bg-[#E9F7FF] hover:bg-[#dbf2ff] active:bg-[#ccecff]
                            dark:bg-[#66C8FF] dark:hover:bg-[#85d2ff] dark:active:bg-[#a3ddff]">
                            <FormattedMessage id="bio.btn"/>
                        </a>
                    </Link>
                    <Socials/>
                </div>
            </div>
        </div>
    );
}
