import React from "react";
import Container from "./Container";

const StyledCelebrationDate = ({ dayOfWeek, date, month, year }) => {
    return (
        <Container>
            <div className="flex items-center gap-4 font-light">
                <span className="py-0.5 flex-1 text-xl border-y-2 text-center tracking-[3px] uppercase">{dayOfWeek}</span>
                <div className="flex flex-col text-center">
                    <span className="dancing-script-400 text-6xl">{month}</span>
                    <span className="text-7xl">{date}</span>
                </div>
                <span className="py-0.5 flex-1 text-xl border-y-2 text-center tracking-[3px] uppercase">{year}</span>
            </div>
        </Container>
    );
};

export default StyledCelebrationDate;
