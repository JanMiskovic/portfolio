import Image from "next/future/image";
import Link from "next/link";
import Mbr from "./Mbr";
import Socials from "./Socials";

export default function Bio() {
    return (
        <div className="grid grid-cols-[auto_minmax(0,_1fr)] md:grid-cols-3 items-center
            gap-x-5 gap-y-5 md:gap-y-4 mb-4 md:mb-10 lg:mb-16">

            <Image src="/profile-pic.jpg" width={300} height={300} alt="Profile picture of Ján" 
                className="md:row-span-2 self-center rounded-full my-border bg-neutral-200 dark:bg-neutral-500
                w-16 h-16 xs:w-20 xs:h-20 sm:w-32 sm:h-32 md:w-5/6 md:h-fit lg:w-72 lg:h-72"
            />

            <div className="col-start-2 col-span-full md:self-end">
                <h1 className="text-3xl xs:text-4xl sm:text-6xl md:mb-1 lg:mb-1.5">Ján Miškovič</h1>
                <span className="mr-1.5 xs:text-lg sm:text-xl">Hlohovec, Slovakia</span>
                <Image priority={true} src="/skflag.webp" width={20} height={20} alt="Flag of the Slovak Republic"
                    className="inline-block"/>
            </div>

            <div className="text-sm xs:text-base md:col-start-2 col-span-full md:self-start flex flex-col gap-5">
                <p className="leading-relaxed">
                    Bachelor of Applied Informatics, currently freelancing in web development / design. <Mbr/>
                    Started with WordPress in 2020, then moved onto Next.js, React and Tailwind. <Mbr/>
                    Fan&nbsp;of functional programming and creative coding. Always looking to learn new things. <Mbr/>
                    I&nbsp;love movies, video games, and&nbsp;challenges&nbsp;- currently&nbsp;learning Japanese&nbsp;(*^▽^*)
                </p>

                <div className="flex gap-3 sm:gap-5">
                    <Link href="/contact">
                        <a className="focus-ring my-border transition-hover 
                            rounded-md shrink-0 py-1.5 sm:py-2 px-2 xs:px-3 sm:px-7
                            text-sm xs:text-base
                            text-black bg-[#E9F7FF] hover:bg-[#dbf2ff] active:bg-[#ccecff]
                            dark:bg-[#66C8FF] dark:hover:bg-[#85d2ff] dark:active:bg-[#a3ddff]">
                            Message me
                        </a>
                    </Link>

                    <Socials />
                </div>

            </div>
        </div>
    );
}
