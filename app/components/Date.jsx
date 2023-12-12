'use client';

import { useState, useEffect } from "react";

const DateComponent = () =>{
    const [dateOfMonth, setDayOfMonth] = useState(null)
    const [month, setMonth] = useState(null);

    useEffect(()=>{
        const currentDate = new Date();
        const currentDayOfMonth = currentDate.getDate();
        const currentMonth = currentDate.toLocaleString('default', { month: 'long' });

        const shortMonth = currentMonth.slice(0, 3);

        setDayOfMonth(currentDayOfMonth);
        setMonth(shortMonth);
    }, []);

    return(
        <div className="text-white absolute top-[40px] lg:top-1 left-[160px] lg:left-3/4 flex ">
            <div className="animation-content-wrapper">
                <span className="text-[65px] lg:text-[140px] text-transparent date-content leading-none">{dateOfMonth}</span>
            </div>
            <div className="whitespace-nowrap flex flex-col justify-end pb-[6px] lg:pb-4 ml-2 leading-none">
                <div className="animation-content-wrapper">
                <p className="uppercase mb-0 font-bold text-[21px] lg:text-[23px] tracking-[2px] leading-none month-content">{month}</p>
                </div>
                <div className="animation-content-wrapper">
                <p className="mb-0 text-[14px] lg:text-[16px] uppercase month-content">Готов к работе</p>
                </div>
            </div>
        </div>
    )
}

export default DateComponent;