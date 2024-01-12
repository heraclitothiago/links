import React from 'react'

export default function CarouselButtons(ariaCurrent, order) {
    return (
        <button type="button" className="w-3 h-3 rounded-full"
            aria-current={ariaCurrent || "false"}
            aria-label={"Silide " + order} data-carousel-slide-to={order}></button>
    )
}
