import AgileDevelopment from "../Components/AgileDevelopmetn";
import Development from "../Components/Development";
import ProcessSteps from "../Components/ProcessSteps";
import GifOverlay from "../Components/Video";
import services_gif from "../assets/services_gif.gif"
function Services(){

    return(
        <>
        <Development/>
        <ProcessSteps/>
        <AgileDevelopment/>
        <div className="bg-[#7647e1] h-60 text-white p-8 flex flex-col justify-center items-start">
  <h1 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h1>
  
  <p>Experience our proven process that delivers results</p>
  <button className="bg-gray-500 text-white px-6 py-3 rounded hover:bg-white hover:text-gray-800 transition">
    Contact Us
  </button>
</div>
  
        </>
    )
}

export default Services;