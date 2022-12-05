

const ProfileHeader = () => {

        
    return(
        <section className=" absolute top-[125%] right-0 z-10 w-3/5 md:top-full md:left-full md:max-w-md md:-translate-x-full">
            <div className=" mx-4 rounded-md bg-white shadow-md">

                <h4 className=" px-6 py-2 text-lg font-bold text-dark-grayish-blue">
                    Hello
                </h4>
                <hr />
                   
                     
             
                <div className=' px-6 pb-1'>
                <div className=" flex flex-col text-dark-grayish-blue">
                <a href="#">History purchase</a>
                <hr />
                <a href="#">Edit profile</a>
                <hr />
                <div className=" text-right">
                <button className=" h-6 w-2/5 rounded-md bg-dark-grayish-blue text-white transition-all hover:bg-very-dark-blue">Log Out</button>
                </div>
                </div>
                </div>
                    
                    
                </div>
                </section>
    )
}
export default ProfileHeader