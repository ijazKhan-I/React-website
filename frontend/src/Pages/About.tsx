import { Timer } from "lucide-react";
import Timeline from "../Components/TimeLine";
import CoreValuesSection from "../Components/CoverValueSection";
import OurStory from "../Components/OurStory";
import GifOverlay from "../Components/Video";
import about_gif from "../assets/about_gif.gif"

function   About(){

    return(
        <>
        <div className="itme-center justify-center ">
                <GifOverlay gifUrl={about_gif} title="People Behind the Technology " paragraph="We're a team of passionate developers and AI engineers building the future of digital innovation" 
                className="w-full max-w-[1440px]" />

            <OurStory/>

        <CoreValuesSection/>
            <Timeline/>
    
            </div>
        </>
    )
}

export default About;