import SlideProduct from "@/components/product/col-images/SlideProduct";
import { useState } from "react";

const MainImages = ({ ARRAY_IMGS, ARRAY_IMG_SMALL }) => {

    const [isOpenModal, setIsOpenModal] = useState(false)

    const handleOpenModal = () => {
        setIsOpenModal(true)
    }

    return (
        <>
            <SlideProduct 
                ARRAY_IMGS={ARRAY_IMGS}
                ARRAY_IMG_SMALL={ARRAY_IMG_SMALL}
                className="grid md:grid-cols-4 md:gap-4"
                onClick={handleOpenModal}
            />
            {isOpenModal && (

                <SlideProduct 
                    ARRAY_IMGS={ARRAY_IMGS}
                    ARRAY_IMG_SMALL={ARRAY_IMG_SMALL}
                    className="grid md:absolute md:-translate-y-1/2 md:-translate-x-1/2 md:top-1/2 md:left-1/2 md:max-w-xl md:grid-cols-4 md:gap-4 "
                />
                
            )}
        </>
        
    )
}

export default MainImages