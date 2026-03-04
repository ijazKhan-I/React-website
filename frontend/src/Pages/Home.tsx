
import WhyChooseUs from "../Components/Wy_choose_us";
import FeaturedProjects from "../Components/FeaturedProjects";
import Hero from "../Components/Hero(4)";

function Home() {

    return (
        <>


            <div className="itme-center justify-center ">
                <Hero />
                <WhyChooseUs />

                <FeaturedProjects />
                <div className="bg-[#7647e1] h-60 text-white p-8">
                    <h1 className="text-4xl font-bold">Ready to Build Something Amazing?</h1>
                </div>

            </div>

        </>
    );
}


export default Home;