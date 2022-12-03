import SlideProductsHome from "@/components/home/productsHome/SlideProductsHome";
import { useState } from "react";

const GalleryProductsHome = ({ ARRAY_IMGS, ARRAY_IMG_SMALL }) => {

    
    return (
        <>
            <SlideProductsHome 
                ARRAY_IMGS={ARRAY_IMGS}
                ARRAY_IMG_SMALL={ARRAY_IMG_SMALL}
                className=" max-h-[25%] flex mx-auto content-center  md:gap-4 max-w-[40%]"
                
            />
            
        </>
        
    )
}

export default GalleryProductsHome