import ReactCountryFlag from "react-country-flag";

export default function LanguageSwitcher() {
    return (
        <div className="
            flex gap-3 py-2 px-3.5 rounded-md border-2 
            border-border-light bg-bg-light
            dark:border-border-dark dark:bg-bg-dark">
            
            <ReactCountryFlag countryCode="SK" title="SK" svg className="!w-6 !h-6"/>
            <ReactCountryFlag countryCode="GB" title="GB" svg className="!w-6 !h-6"/>
        </div>
    );
}
