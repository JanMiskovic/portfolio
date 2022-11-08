import { useState, useEffect, useRef } from "react";

export default function useLocalStorage(key, defaultValue) {
    const [value, setValue] = useState(defaultValue);

    useEffect(() => {
        const storageValue = JSON.parse(window.localStorage.getItem(key));
        if (storageValue !== null && storageValue !== defaultValue) {
            setValue(storageValue);
        }
    }, [key, defaultValue]);

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}
