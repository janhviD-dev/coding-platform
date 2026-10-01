import AboutHero from "@/components/about/AboutHero";
import WhyWeExist from "@/components/about/WhyWeExist";
// import TheBeginning from "@/components/about/TheBeginning";
export default function page(){
    return (
      <>
        <div>
           <AboutHero/>
           <WhyWeExist/>
           {/* <TheBeginning/> */}
        </div>
      </>
    );
}
