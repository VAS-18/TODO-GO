import React from 'react'
import { useState, useEffect } from 'react'
import { Calendar } from 'lucide-react';

const DateTime = () => {
    const [dateTime, setDateTime] = useState(new Date());
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDateTime(new Date());
        }, 1000)
        
        const currentHour = dateTime.getHours();

        if( currentHour < 12){
            setGreeting('Good Morning.');
        }else if( currentHour < 18){
            setGreeting('Good Afternoon.');
        }else{
            setGreeting('Good Evening.');
        }

        return () => clearInterval(intervalId)
    },[dateTime]);

    const formatDate = dateTime.getDate();
    const formatDay = dateTime.getDay();

    const DayMap = {
        0:"Sunday",
        1:"Monday",
        2:"Tuesday",
        3:"Wednesday",
        4:"Thursday",
        5:"Friday",
        6:"Saturday"
    }

    const day = DayMap[formatDay]
    let date = 0

    if(formatDate == 1 || formatDate == 21 || formatDate == 31){
        date = formatDate + "st"
    }
    else if(formatDate == 2 || formatDate == 22){
        date = formatDate + "nd"
    }
    else if(formatDate == 3 || formatDate == 23){
        date = formatDate + "rd"
    }
    else{
        date = formatDate + "th"
    }

    console.log(date)
    
    const formatTime = dateTime.toLocaleTimeString([],
        {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
        }
    );
    const monthName = dateTime.toLocaleDateString('default', { month: 'long' });

    return (
        <div className="">
            <div className='flex-col justify-center items-center'>
                <div className='flex'>
                    <p className='flex gap-2'><Calendar/> {monthName}</p>
                    <p className='mx-2'>{date}</p>
                </div>
                {/* <p className=''>{day}</p> */}
            </div>
            <div className=''>
                <h1 className='text-4xl font-poppins'>{greeting}</h1>
                <p className='font-funnel font-bold'>
                    What are we doing today?
                </p>
            </div>
            <div>
                <dir className="">
                    <p>
                        {formatTime}
                    </p>
                </dir>
            </div>
        </div>
       
    )
}
export default DateTime
