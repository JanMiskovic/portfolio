import { BsFacebook, BsGithub, BsLinkedin, BsSpotify } from "react-icons/bs";

export default function Socials() {
    return (
        <div className="flex items-center gap-1.5 sm:gap-2.5 flex-wrap h-9 xs:h-10 sm:h-11 overflow-hidden">
            <a href="https://github.com/JanMiskovic" target="_blank" rel="noreferrer"
                className="focus-ring my-border p-2 rounded-full transition-colors
                bg-[#F6EBFF] hover:bg-[#efdbff] active:bg-[#e8ccff]
                dark:bg-bg-dark dark:hover:bg-[#585858] dark:active:bg-[#696969]">

                <BsGithub className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 transition-colors
                    text-icon-light dark:text-[#B366FF]"/>
            </a>
            
            <a href="" target="_blank" rel="noreferrer"
                className="focus-ring my-border p-2 rounded-full transition-colors
                bg-[#EBFBFF] hover:bg-[#dbf8ff] active:bg-[#ccf5ff]
                dark:bg-bg-dark dark:hover:bg-[#585858] dark:active:bg-[#696969]">

                <BsLinkedin className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 transition-colors rounded-full
                    text-icon-light dark:text-[#66E3FF]"/>
            </a>

            <a href="https://www.facebook.com/mutualslump/" target="_blank" rel="noreferrer"
                className="focus-ring my-border p-2 rounded-full transition-colors
                bg-[#EAEEFF] hover:bg-[#dbe2ff] active:bg-[#ccd6ff]
                dark:bg-bg-dark dark:hover:bg-[#585858] dark:active:bg-[#696969]">

                <BsFacebook className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 transition-colors
                    text-icon-light dark:text-[#6691FF]"/>
            </a>

            <a href="https://www.instagram.com/janiiscript/" target="_blank" rel="noreferrer"
                className="focus-ring my-border p-2 rounded-full transition-colors
                bg-[#FFEBFD] hover:bg-[#ffdbfb] active:bg-[#ffccf9]
                dark:bg-bg-dark dark:hover:bg-[#585858] dark:active:bg-[#696969]">

                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 transition-colors rounded-full
                    text-icon-light dark:text-[#EA66FF]">
                    <path d="M11.9968 7.9983C9.79333 7.9983 7.99515 9.79651 7.99515 12C7.99515 14.2035 9.79333 16.0017 11.9968 16.0017C14.2002 16.0017 15.9984 14.2035 15.9984 12C15.9984 9.79651 14.2002 7.9983 11.9968 7.9983ZM23.9987 12C23.9987 10.3429 24.0137 8.70077 23.9206 7.04665C23.8275 5.12536 23.3893 3.4202 21.9843 2.01525C20.5764 0.607302 18.8743 0.172009 16.953 0.0789456C15.2959 -0.0141172 13.6539 0.000892936 11.9998 0.000892936C10.3427 0.000892936 8.70061 -0.0141172 7.04652 0.0789456C5.12526 0.172009 3.42014 0.610305 2.01522 2.01525C0.607291 3.42321 0.172005 5.12536 0.0789442 7.04665C-0.014117 8.70377 0.000892919 10.3459 0.000892919 12C0.000892919 13.6541 -0.014117 15.2992 0.0789442 16.9533C0.172005 18.8746 0.610293 20.5798 2.01522 21.9847C3.42314 23.3927 5.12526 23.828 7.04652 23.9211C8.70361 24.0141 10.3457 23.9991 11.9998 23.9991C13.6569 23.9991 15.2989 24.0141 16.953 23.9211C18.8743 23.828 20.5794 23.3897 21.9843 21.9847C23.3923 20.5768 23.8275 18.8746 23.9206 16.9533C24.0167 15.2992 23.9987 13.6571 23.9987 12V12ZM11.9968 18.1572C8.58954 18.1572 5.83973 15.4073 5.83973 12C5.83973 8.5927 8.58954 5.84284 11.9968 5.84284C15.404 5.84284 18.1538 8.5927 18.1538 12C18.1538 15.4073 15.404 18.1572 11.9968 18.1572ZM18.406 7.02864C17.6105 7.02864 16.968 6.38621 16.968 5.59067C16.968 4.79513 17.6105 4.1527 18.406 4.1527C19.2015 4.1527 19.8439 4.79513 19.8439 5.59067C19.8442 5.77957 19.8071 5.96667 19.735 6.14124C19.6628 6.31581 19.5569 6.47442 19.4233 6.608C19.2897 6.74157 19.1311 6.84748 18.9565 6.91967C18.782 6.99185 18.5949 7.02888 18.406 7.02864V7.02864Z"/>
                </svg>
            </a>

            <a href="https://open.spotify.com/user/kthen1337" target="_blank" rel="noreferrer"
                className="focus-ring my-border p-2 rounded-full transition-colors
                bg-[#EBFFED] hover:bg-[#dbffdf] active:bg-[#ccffd2]
                dark:bg-bg-dark dark:hover:bg-[#585858] dark:active:bg-[#696969]">

                <BsSpotify className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 transition-colors
                    text-icon-light dark:text-[#66FF75]"/>
            </a>
        </div>
    );
}
