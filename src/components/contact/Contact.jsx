import { FaWhatsapp, FaInstagram , FaFacebook, FaTiktok} from "react-icons/fa"
const Contact = () => {
    
    return(
    <>
        <div className=" border border-solid flex flex-wrap justify-center container mx-auto px-4 bg-white max-w-4xl ">
        <div className=" w-full mb-3 text-green-primary text-center font-bold uppercase tracking-wide md:block md:text-lg">Contact</div>
            <form className="flex flex-col text-left ">
                <label className="w-[50%] block ">
                    Name:
                    <input className="  mx-auto border-solid border focus:outline-green-700  hover:border-green-700" type="text" name="name" />
                </label>
                <label className="w-[50%] block">
                    email:
                    <input className="  border-solid border focus:outline-green-700  hover:border-green-700" type="email" name="email" />
                </label>
                <label className="w-[50%] block">
                    Password:
                    <input className="  border-solid border focus:outline-green-700  hover:border-green-700" type="password" name="password" id="" />
                </label>
                <input className=" mx-auto border-solid border rounded-md hover:border-green-700 transition-all duration-1000 bg-gradient-to-r from-green-400 to-white hover:from-white hover:to-green-400" type="submit" value="Submit" />
            </form>
        </div>
        <div className=" border border-solid flex flex-wrap justify-center container mx-auto px-16 bg-white max-w-4xl " >
        <p className=" font-bold text-lg text-green-primary">Who are we?</p>
        <p className=" text-xs md:text-base" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam ipsa officiis ratione libero repellendus odio natus non a saepe, doloribus assumenda modi, voluptas reprehenderit maiores. Sunt omnis neque ipsum expedita animi, laborum nobis veritatis eius laboriosam minima ratione quidem dicta deleniti voluptate, non amet exercitationem quia et eaque. Doloremque, enim.</p>
        </div>
        <div className=" border border-solid flex flex-wrap justify-between container mx-auto px-16 bg-white max-w-4xl text-green-primary text-4xl">
        <p className=" w-full text-lg text-center text-green-primary">JadeHouseCol in all social media</p>
        <FaInstagram />
        <FaFacebook />
        <FaTiktok />
        <FaWhatsapp />
        
        </div>
    </>
    )
}

export default Contact