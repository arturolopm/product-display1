import { FaWhatsapp, FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
const Contact = () => {
    return (
        <>
            <div className=" container mx-auto flex max-w-4xl flex-wrap justify-center border border-solid bg-white px-4 ">
                <div className=" mb-3 w-full text-center font-bold uppercase tracking-wide text-green-primary md:block md:text-lg">
                    Contact
                </div>
                <form className="flex flex-col text-left ">
                    <label className="block w-[50%] ">
                        Name:
                        <input
                            className="  mx-auto border border-solid hover:border-green-700  focus:outline-green-700"
                            type="text"
                            name="name"
                        />
                    </label>
                    <label className="block w-[50%]">
                        email:
                        <input
                            className="  border border-solid hover:border-green-700  focus:outline-green-700"
                            type="email"
                            name="email"
                        />
                    </label>
                    <label className="block w-[50%]">
                        Password:
                        <input
                            className="  border border-solid hover:border-green-700  focus:outline-green-700"
                            type="password"
                            name="password"
                            id=""
                        />
                    </label>
                    <input
                        className=" mx-auto rounded-md border border-solid bg-gradient-to-r from-green-400 to-white transition-all duration-1000 hover:border-green-700 hover:from-white hover:to-green-400"
                        type="submit"
                        value="Submit"
                    />
                </form>
            </div>
            <div className=" container mx-auto flex max-w-4xl flex-wrap justify-center border border-solid bg-white px-16 ">
                <p className=" text-lg font-bold text-green-primary">
                    Who are we?
                </p>
                <p className=" text-xs md:text-base">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Magnam ipsa officiis ratione libero repellendus odio natus
                    non a saepe, doloribus assumenda modi, voluptas
                    reprehenderit maiores. Sunt omnis neque ipsum expedita
                    animi, laborum nobis veritatis eius laboriosam minima
                    ratione quidem dicta deleniti voluptate, non amet
                    exercitationem quia et eaque. Doloremque, enim.
                </p>
            </div>
            <div className=" container mx-auto flex max-w-4xl flex-wrap justify-between border border-solid bg-white px-16 text-4xl text-green-primary">
                <p className=" w-full text-center text-lg text-green-primary">
                    JadeHouseCol in all social media
                </p>
                <FaInstagram />
                <FaFacebook />
                <FaTiktok />
                <FaWhatsapp />
            </div>
        </>
    );
};

export default Contact;
