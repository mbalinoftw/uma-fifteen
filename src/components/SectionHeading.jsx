import React from "react";
import SectionTitle from "./SectionTitle";
import SectionSubtitle from "./SectionSubtitle";

const SectionHeading = ({ title, subtitle }) => {
    return (
        <>
            <SectionTitle title={title} />
            {subtitle ? <SectionSubtitle subtitle={subtitle} /> : null}
        </>
    );
};

export default SectionHeading;
