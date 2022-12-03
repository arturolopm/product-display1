import CartIcon from "@/components/icons/CartIcon.jsx"
import { useCartDetails } from '@/context/useCartDetails'
import { useContext, useState } from "react"

const DetailsProductsHome = ({objectProduct}) => {

    const { addCartItems } = useContext(useCartDetails)
    const [count, setCount] = useState(1)

    const incrementCount = () => setCount(count+1)
    const decrementCount = () => { 
      if(count ===0) return
      setCount(count-1)
     }

    const handleAddToCart =  () => {
      addCartItems({
      ...objectProduct,
      quantity: count || 1,
    })
      setCount(1)
    }
    return(
        <section className="container max-h-[30vh] text-xs flex flex-col mx-auto px-4 md:px-0">
        {/* <p className=" mb-3 text-orange-primary font-bold uppercase tracking-wide">
        {objectProduct.subtitle}
        </p> */}
        <h2 className=" mb-0 text-sm font-bold">
        {objectProduct.title}
        </h2>
        <p className=" text-xs mb-0 text-ellipsis text-dark-grayish-blue">
        {objectProduct.description}
        </p>
        <div className="flex mb-0 items-center justify-between gap-4 font-bold md:gap-1">
          <span className=" text-xs">${(
            objectProduct.price *(1 - objectProduct.discount)
            ).toFixed(2)}</span>
          <span className=" mr-auto rounded-md bg-pale-orange py-1 px-2 text-orange-primary">
          {objectProduct.discount * 100}%
          </span>
          <span className=" text-right text-xs text-grayish-blue line-through md:text-left md:col-span-3">
          ${objectProduct.price.toFixed(2)}
          </span>
        </div>
        <div className=" flex flex-row justify-between">
          <div className=" flex grow items-baseline justify-between rounded-md bg-gray-200 py-2 px-1 pb-1 md:col-span-1">
            <button className=" text-xl grow text-orange-primary" onClick={decrementCount}>-</button>
            <span className=" text-lg">{count}</span>
            <button className=" text-xl grow text-orange-primary" onClick={incrementCount}>+</button>
          </div>
          <button className=" flex items-center w-[40%] justify-center gap-x-3 rounded-md bg-orange-primary py-3 text-white transition-all hover:bg-orange-700 md:col-span-1" onClick={handleAddToCart}>
            <CartIcon fill="#fff" className="fill-white" />
            <span>Add</span>
          </button>
        </div>
      </section>
    )
}
export default DetailsProductsHome