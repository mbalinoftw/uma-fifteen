import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Zoom from "yet-another-react-lightbox/plugins/zoom";
import SectionTitle from "./SectionTitle";
import Container from "./Container";
import _img1 from "../assets/fotos/thumbnails/img-1.jpg";
import _img3 from "../assets/fotos/thumbnails/img-3.jpg";
import _img4 from "../assets/fotos/thumbnails/img-4.jpg";
import _img7 from "../assets/fotos/thumbnails/img-7.jpg";
import img1 from "../assets/fotos/compressed/img-1.jpg";
import img3 from "../assets/fotos/compressed/img-3.jpg";
import img4 from "../assets/fotos/compressed/img-4.jpg";
import img7 from "../assets/fotos/compressed/img-7.jpg";

const imagenes = [
    {
        id: 7,
        src: img7,
        thumbnail: _img7,
        alt: "",
    },
    {
        id: 1,
        src: img1,
        thumbnail: _img1,
        alt: "",
    },
    {
        id: 4,
        src: img4,
        thumbnail: _img4,
        alt: "",
    },
    {
        id: 3,
        src: img3,
        thumbnail: _img3,
        alt: "",
    },
];

const slides = imagenes.map(({ src }) => ({ src }));

const Gallery = () => {
    const [index, setIndex] = useState(-1);

    return (
        <section id="fotos" className="py-16">
            <Container>
                <div className="mb-6 px-4">
                    <SectionTitle title="Un sueño hecho realidad" className="mb-4" />
                    <h3 className="text-lg text-center">Momentos que quedarán en mi corazón para siempre</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                    {imagenes.map((image, i) => (
                        <img
                            key={image.id}
                            src={image.thumbnail}
                            alt={image.alt}
                            className="cursor-pointer w-full h-[350px] object-cover object-center rounded-lg transition-transform duration-200 hover:scale-105 cursor-pointer"
                            role="button"
                            tabIndex={0}
                            onClick={() => setIndex(i)}
                            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setIndex(i)}
                        />
                    ))}
                </div>
                <Lightbox plugins={[Zoom]} open={index >= 0} index={index} close={() => setIndex(-1)} slides={slides} />
            </Container>
        </section>
    );
};

export default Gallery;
