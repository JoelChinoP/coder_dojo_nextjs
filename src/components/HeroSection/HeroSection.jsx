import { StarSVG, SpinningStar, SearchIcon, RatingStarIcon, CurvedLine } from "../icons/animatedstart"
import AnimatedCircle from "@/components/icons/animatedcircle"
import banner_img from "@/assets/banner_img.png"
import Image from "next/image"

const HeroSection = () => {
  return (
    <section className="bg-white relative px-10">

        <div >
        <div>
            <StarSVG 
                className="absolute animate-spin top-[20%] left-[20%] hidden 2xl:inline-block"
                width="50" height="50"
            />
            <SpinningStar
                className="absolute animate-spin right-[926px] top-[120px] hidden 2xl:inline-block"
                width="50" height="50"
            />
            <SpinningStar
                className="absolute animate-spin top-[10%] right-[10%] hidden 2xl:inline-block"
                width="70" height="70"
            />
                    
            <AnimatedCircle size={20} color="#FFC27A" animation="ping" right="21.35%" top="24px" />
            <AnimatedCircle size={15} color="#ED4459" animation="ping" left="14.5%" top="548px" />
            <AnimatedCircle size={20} color="#6D39E9" animation="bounce" right="649px" bottom="131px" />

            <div class="banner-wrapper pb-8 xl:pb-[180px] ">
                <div class="container px-4 sm:px-6 2xl:px-0">
                    <div class="flex flex-wrap justify-center 2xl:justify-between gap-64">
                        
                        <div class="2xl:pt-[150px] pt-5">
                            <div class="2xl:w-[677px] w-full">
                                <h2 class="font-display text-primary-500 font-semibold 2xl:text-2xl md:text-lg text-sm pb-2 2xl:pb-6" data-aos="fade-down" data-aos-duration="1000">START TO SUCCESS
                                </h2>
                                <h1 class="capitalize mb-4 lg:mb-6 font-display font-semibold md:text-3xl text-2xl 2xl:text-[56px] 2xl:leading-[72px] text-primary-900" data-aos="fade-down" data-aos-duration="1000">
                                    Access To <span class="text-primary-500 after-svg banner_5000">5000+</span> Courses
                                    from <span class="text-primary-500 after-svg banner_300">300</span> Instructors
                                    & Institutions
                                </h1>
                                <p class="text-gray-500 font-normal font-display lg:text-[20px] md:text-base text-sm lg:leading-7 mb-8 pt-4 xl:pt-0" data-aos="fade-down" data-aos-duration="1000">Various versions have
                                    evolved over the years, sometimes by accident,</p>
                                <form action="" data-aos="fade-down" data-aos-duration="1000">
                                    <div class="flex justify-between items-center ">
                                        <div class="relative w-full xl:max-w-[648px]">
                                            <input type="text" class="px-6 py-6 block w-full shadow-[-4px_-4px_44px_rgba(0,0,0,0.08)] rounded focus:outline-none focus:ring-1 focus:ring-primary-500 transition duration-300 ease-in-out" placeholder="What do want to learn?"/>
                                            <SearchIcon className="absolute top-6 right-6" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        
                        <div class="mt-5 2xl:mt-[156px] relative">
                            <div class="2xl:absolute 2xl:right-[-20%] 2xl:top-[-17%] 2xl:h-[444px] 2xl:w-[623px] w-full z-20">
                                <Image src={banner_img} alt="banner" layout="responsive" width={623} height={444} />
                            </div>
                            <div class="bg-white xl:px-5 xl:w-[197px] md:px-3 px-2 xl:py-[18px] md:py-2.5 py-1.5 rounded-lg shadow-2xl flex items-center md:gap-3 gap-2 xl:max-w-[197px] absolute z-50 xl:right-[-90px] right-[10px] xl:top-[73%] top-3/4">
                                <RatingStarIcon width="=50" height="50" />
                                <span class="text-xl text-gray-600">5.0 Rating</span>
                            </div>

                            <CurvedLine
                                className="2xl:absolute 2xl:top-[55px] 2xl:right-[-90px] z-10 animate-pulse hidden 2xl:inline-block"
                                width="133" height="123"
                            />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        </div>

    </section>
  )
}

export default HeroSection