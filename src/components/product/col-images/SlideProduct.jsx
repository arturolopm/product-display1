import { useState } from "react"
import PrevIcon from "@/components/icons/PrevIcon"
import NextIcon from "@/components/icons/NextIcon"

const SlideProduct = ({
    ARRAY_IMGS = [],
     ARRAY_IMG_SMALL=[], 
     isOpenModal = false,
     handleCloseModal= null,
     handleOpenModal= ()=>{}, 
     ...props
    }) => {

    const [imgIndex, setImgIndex] = useState(0)

    const handleClickNext = () => {
        
        (imgIndex === ARRAY_IMGS.length -1) ? setImgIndex(0) : setImgIndex(imgIndex + 1)
    }
    const handleClickPrev = () => {
        (imgIndex === 0) ? setImgIndex(ARRAY_IMGS.length-1) : setImgIndex(imgIndex-1)
    }



    return (
        <section {...props}>
        {
            isOpenModal && (
                <button onClick={handleCloseModal} className="md:col-span-4 text-right">cerrar</button>
        )}
            <div className=" relative col-span-4">
                <img src={ARRAY_IMGS[imgIndex]} alt="" className=" aspect-auto w-full md:cursor-pointer md:rounded-md" onClick={handleOpenModal} />
                <div className="absolute top-1/2 left-0 flex w-full -translate-y-1/2 justify-between px-4">
                    <button className=" grid place-items-center h-10 w-10 rounded-full bg-white " onClick={handleClickPrev}>
                        <PrevIcon />
                    </button>
                    <button className=" grid place-items-center h-10 w-10 rounded-full bg-white " onClick={handleClickNext}>
                        <NextIcon />
                    </button>
                </div>
            </div>
            {
                ARRAY_IMG_SMALL.map(smallImg =>(
                    <img 
                        key={smallImg}
                        src={smallImg} 
                        alt="" 
                        className="hidden md:block md:rounded-md" 
                    />
                ))
            }
            

        </section>
    )
}

export default SlideProduct