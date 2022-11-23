import PrevIcon from "@/components/icons/PrevIcon"
import NextIcon from "@/components/icons/NextIcon"

import imgProduct1 from "@/assets/images/image-product-1.jpg"
import imgProduct2 from "@/assets/images/image-product-2.jpg"
import imgProduct3 from "@/assets/images/image-product-3.jpg"
import imgProduct4 from "@/assets/images/image-product-4.jpg"

import imgProductSmall1 from "@/assets/images/image-product-1-thumbnail.jpg"
import imgProductSmall2 from "@/assets/images/image-product-2-thumbnail.jpg"
import imgProductSmall3 from "@/assets/images/image-product-3-thumbnail.jpg"
import imgProductSmall4 from "@/assets/images/image-product-4-thumbnail.jpg"
import { useState } from "react"

const ARRAY_IMGS = [imgProduct1, imgProduct2, imgProduct3, imgProduct4]

export default () => {

    const [imgIndex, setImgIndex] = useState(0)

    const handleClickNext = () => {
        
        (imgIndex === ARRAY_IMGS.length -1) ? setImgIndex(0) : setImgIndex(imgIndex + 1)
    }
    const handleClickPrev = () => {
        (imgIndex === 0) ? setImgIndex(ARRAY_IMGS.length-1) : setImgIndex(imgIndex-1)
    }

    return (
        <section className="grid md:grid-cols-4 md:gap-4">
            <div className=" relative col-span-4">
                <img src={ARRAY_IMGS[imgIndex]} alt="" className=" aspect-auto" />
                <div className="absolute top-1/2 left-0 flex w-full -translate-y-1/2 justify-between px-4">
                    <button className=" grid place-items-center h-10 w-10 rounded-full bg-white " onClick={handleClickPrev}>
                        <PrevIcon />
                    </button>
                    <button className=" grid place-items-center h-10 w-10 rounded-full bg-white " onClick={handleClickNext}>
                        <NextIcon />
                    </button>
                </div>
            </div>
            <img src={imgProductSmall1} alt="" className="hidden md:block" />
            <img src={imgProductSmall2} alt="" className="hidden md:block" />
            <img src={imgProductSmall3} alt="" className="hidden md:block" />
            <img src={imgProductSmall4} alt="" className="hidden md:block" />

        </section>
    )
}