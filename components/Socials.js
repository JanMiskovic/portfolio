import { BsFacebook, BsGithub, BsLinkedin, BsSpotify } from "react-icons/bs";
import Button3D from "./Button3D";

export default function Socials() {
    return (
        <div
            className="flex h-9 flex-wrap items-center gap-1.5
            overflow-hidden xs:h-10 sm:gap-2.5 sm:overflow-visible">
            <Button3D
                href="https://github.com/JanMiskovic"
                target="_blank"
                rel="noreferrer"
                isLink={true}
                aria-label="GitHub profile"
                className="h-9 w-9 rounded-full xs:h-10 xs:w-10 sm:h-11 sm:w-11"
                innerClassName="bg-[hsl(273,_100%,_96%)] hover:bg-[hsl(273,_100%,_94%)]
                active:bg-[hsl(273,_100%,_93%)] dark:bg-bg-dark">
                <BsGithub
                    className="transition-hover h-4 w-4 
                    fill-icon-light dark:fill-[hsl(273,_100%,_70%)] 
                    dark:group-hover:fill-[hsl(273,_100%,_73%)] 
                    dark:group-active:fill-[hsl(273,_100%,_76%)] 
                    xs:h-5 xs:w-5 sm:h-6 sm:w-6"
                />
            </Button3D>

            <Button3D
                href="https://www.linkedin.com/in/jan-miskovic/"
                target="_blank"
                rel="noreferrer"
                isLink={true}
                aria-label="LinkedIn profile"
                className="h-9 w-9 rounded-full xs:h-10 xs:w-10 sm:h-11 sm:w-11"
                innerClassName="bg-[hsl(192,_100%,_96%)] hover:bg-[hsl(192,_100%,_94%)]
                active:bg-[hsl(192,_100%,_93%)] dark:bg-bg-dark">
                <BsLinkedin
                    className="transition-hover h-4 w-4 rounded-full 
                    fill-icon-light dark:fill-[hsl(192,_100%,_70%)] 
                    dark:group-hover:fill-[hsl(192,_100%,_73%)] 
                    dark:group-active:fill-[hsl(192,_100%,_76%)] 
                    xs:h-5 xs:w-5 sm:h-6 sm:w-6"
                />
            </Button3D>

            <Button3D
                href="https://www.facebook.com/mutualslump/"
                target="_blank"
                rel="noreferrer"
                isLink={true}
                aria-label="Facebook profile"
                className="h-9 w-9 rounded-full xs:h-10 xs:w-10 sm:h-11 sm:w-11"
                innerClassName="bg-[hsl(229,_100%,_96%)] hover:bg-[hsl(229,_100%,_94%)]
                active:bg-[hsl(229,_100%,_93%)] dark:bg-bg-dark">
                <BsFacebook
                    className="transition-hover h-4 w-4 
                    fill-icon-light dark:fill-[hsl(229,_100%,_70%)] 
                    dark:group-hover:fill-[hsl(229,_100%,_73%)] 
                    dark:group-active:fill-[hsl(229,_100%,_76%)] 
                    xs:h-5 xs:w-5 sm:h-6 sm:w-6"
                />
            </Button3D>

            <Button3D
                href="https://www.instagram.com/janiiscript/"
                target="_blank"
                rel="noreferrer"
                isLink={true}
                aria-label="Instagram profile"
                className="h-9 w-9 rounded-full xs:h-10 xs:w-10 sm:h-11 sm:w-11"
                innerClassName="bg-[hsl(309,_100%,_96%)] hover:bg-[hsl(309,_100%,_94%)]
                active:bg-[hsl(309,_100%,_93%)] dark:bg-bg-dark">
                {/* Instagram icon */}
                <svg
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-hover h-4 w-4 rounded-full
                    fill-icon-light dark:fill-[hsl(309,_100%,_70%)] 
                    dark:group-hover:fill-[hsl(309,_100%,_73%)] 
                    dark:group-active:fill-[hsl(309,_100%,_76%)] 
                    xs:h-5 xs:w-5 sm:h-6 sm:w-6">
                    <path d="M7.99785 5.3322C6.52888 5.3322 5.3301 6.53101 5.3301 8C5.3301 9.46899 6.52888 10.6678 7.99785 10.6678C9.46681 10.6678 10.6656 9.46899 10.6656 8C10.6656 6.53101 9.46681 5.3322 7.99785 5.3322ZM15.9991 8C15.9991 6.89525 16.0091 5.80051 15.9471 4.69777C15.885 3.4169 15.5928 2.28014 14.6562 1.3435C13.7176 0.404868 12.5829 0.114672 11.302 0.0526304C10.1973 -0.0094115 9.10258 0.000595291 7.99985 0.000595291C6.89512 0.000595291 5.80041 -0.0094115 4.69768 0.0526304C3.41684 0.114672 2.28009 0.40687 1.34348 1.3435C0.404861 2.28214 0.11467 3.4169 0.0526294 4.69777C-0.00941132 5.80252 0.000595279 6.89725 0.000595279 8C0.000595279 9.10275 -0.00941132 10.1995 0.0526294 11.3022C0.11467 12.5831 0.406862 13.7199 1.34348 14.6565C2.28209 15.5951 3.41684 15.8853 4.69768 15.9474C5.80241 16.0094 6.89713 15.9994 7.99985 15.9994C9.10458 15.9994 10.1993 16.0094 11.302 15.9474C12.5829 15.8853 13.7196 15.5931 14.6562 14.6565C15.5948 13.7179 15.885 12.5831 15.9471 11.3022C16.0111 10.1995 15.9991 9.10475 15.9991 8V8ZM7.99785 12.1048C5.72636 12.1048 3.89315 10.2715 3.89315 8C3.89315 5.72847 5.72636 3.89523 7.99785 3.89523C10.2693 3.89523 12.1025 5.72847 12.1025 8C12.1025 10.2715 10.2693 12.1048 7.99785 12.1048ZM12.2707 4.68576C11.7403 4.68576 11.312 4.25747 11.312 3.72711C11.312 3.19675 11.7403 2.76847 12.2707 2.76847C12.801 2.76847 13.2293 3.19675 13.2293 3.72711C13.2294 3.85305 13.2048 3.97778 13.1566 4.09416C13.1085 4.21054 13.0379 4.31628 12.9489 4.40533C12.8598 4.49438 12.7541 4.56499 12.6377 4.61311C12.5213 4.66123 12.3966 4.68592 12.2707 4.68576V4.68576Z" />
                </svg>
            </Button3D>

            <Button3D
                href="https://open.spotify.com/user/kthen1337"
                target="_blank"
                rel="noreferrer"
                isLink={true}
                aria-label="Spotify profile"
                className="h-9 w-9 rounded-full xs:h-10 xs:w-10 sm:h-11 sm:w-11"
                innerClassName="bg-[hsl(127,_100%,_96%)] hover:bg-[hsl(127,_100%,_94%)]
                active:bg-[hsl(127,_100%,_93%)] dark:bg-bg-dark">
                <BsSpotify
                    className="transition-hover h-4 w-4
                    fill-icon-light dark:fill-[hsl(127,_100%,_70%)] 
                    dark:group-hover:fill-[hsl(127,_100%,_73%)] 
                    dark:group-active:fill-[hsl(127,_100%,_76%)] 
                    xs:h-5 xs:w-5 sm:h-6 sm:w-6"
                />
            </Button3D>
        </div>
    );
}
