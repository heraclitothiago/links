import React from 'react'

export default function CarouselItem(srcImage, imageDescription) {
    const picsum = "https://picsum.photos/200/300"
    return (
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={srcImage || picsum}
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt={imageDescription || "..."}></img>
        </div>
    )
}
