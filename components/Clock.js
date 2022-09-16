import { useEffect, useState } from "react";

export default function Clock() {
    const [time, setTime] = useState();

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleString());
        }, 1000);
  
        return () => {
            clearInterval(timer);
        };
    }, []);
  
    return (
        <span>{time}</span>
    );
}
