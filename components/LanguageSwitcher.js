import ReactCountryFlag from "react-country-flag";

export default function LanguageSwitcher() {
    return (
        <div className="
            flex gap-2 xs:gap-3 py-2 px-2.5 xs:px-3.5 rounded-md border-2 transition-background
            border-border-light bg-bg-light
            dark:border-border-dark dark:bg-bg-dark">
            
            <ReactCountryFlag countryCode="SK" title="SK" svg
                className="!w-4 xs:!w-5 sm:!w-6 !h-4 xs:!h-5 sm:!h-6"/>
            <ReactCountryFlag countryCode="GB" title="GB" svg
                className="!w-4 xs:!w-5 sm:!w-6 !h-4 xs:!h-5 sm:!h-6"/>
        </div>
    );
}
