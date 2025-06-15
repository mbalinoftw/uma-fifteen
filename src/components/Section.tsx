import React from "react";
import Container from "./Container";
import ButtonWithLink from "./ButtonWithLink";
import { getColorStyles } from "../theme";

type SectionProps = {
    id?: string;
    icon?: React.ReactNode;
    children?: React.ReactNode;
    linkUrl?: string;
    linkIcon?: React.ReactNode;
    linkText?: string;
    hasButton?: boolean;
    variant?: "primary" | "secondary" | "accent";
};

const Section = ({
    id,
    icon,
    children,
    linkUrl,
    linkIcon,
    linkText,
    hasButton = false,
    variant = "primary",
}: SectionProps) => {
    const colorStyles = getColorStyles(variant);

    return (
        <section id={id} className="py-16" style={colorStyles}>
            <Container>
                <div className="flex flex-col justify-center items-center text-center gap-4">
                    {icon}
                    {children}
                    {hasButton && linkUrl && linkText && (
                        <ButtonWithLink linkUrl={linkUrl} text={linkText} icon={linkIcon} />
                    )}
                </div>
            </Container>
        </section>
    );
};

export default Section;
