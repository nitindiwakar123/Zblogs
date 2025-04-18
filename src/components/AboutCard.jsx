
function AboutCard({
    number = "1",
    heading = "",
    paragraph = "",
}) {
    return ( 
        <div className="w-auto pt-5 pb-10 px-4 text-gray-600 hover:text-custom-white bg-custom-white text-start hover:bg-custom-purple rounded-xl">
            <div className="w-full flex flex-col gap-2">
                <h1 className="font-mono font-semibold text-4xl">{number}</h1>
                <h3 className="text-xl font-poppins font-semibold">{heading}</h3>
                <p className="text-sm text-balance pr-4 text-start">{paragraph}</p>
            </div>
        </div>
     );
}

export default AboutCard;