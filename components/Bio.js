import Image from "next/future/image";
import Link from "next/link";
import Mbr from "./Mbr";
import Socials from "./Socials";

export default function Bio() {
    return (
        <div className="grid grid-cols-[auto_minmax(0,_1fr)] md:grid-cols-3 gap-x-5 gap-y-5 md:gap-y-4 items-center">
            <Image src="/profile-pic.jpg" width={300} height={300} alt="Profile picture of Ján" 
                className="md:row-span-2 self-center rounded-full my-border
                w-16 h-16 xs:w-20 xs:h-20 sm:w-32 sm:h-32 md:w-5/6 md:h-fit lg:w-72 lg:h-72"
            />

            <div className="col-start-2 col-span-full md:self-end">
                <h1 className="text-3xl xs:text-4xl sm:text-6xl md:mb-1 lg:mb-1.5">Ján Miškovič</h1>
                <span className="mr-1.5 xs:text-lg sm:text-xl">Hlohovec, Slovakia</span>
                <Image src="/skflag.webp" width={20} height={20} alt="Flag of the Slovak Republic"
                    className="inline-block"/>
            </div>

            <div className="md:col-start-2 col-span-full md:self-start flex flex-col gap-5">
                <p className="leading-relaxed">
                    Bachelor of Applied Informatics, currently freelancing in web development / design. <Mbr/>
                    Started with WordPress in 2021, then moved onto Next.js, React and Tailwind. <Mbr/>
                    Fan&nbsp;of functional programming and creative coding. Always looking to learn new things. <Mbr/>
                    I&nbsp;love movies, video-games, and challenges&nbsp;- currently learning Japanese (*^▽^*)
                </p>

                <div className="flex flex-col xs:flex-row gap-3 xs:gap-2 w-56 xs:w-full">
                    <Link href="/contact">
                        <a className="focus-ring my-border rounded-md text-center
                            py-1 xs:py-1.5 sm:py-2 px-1 md:px-7 xs:w-5/12 xs:max-w-[9rem]
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
