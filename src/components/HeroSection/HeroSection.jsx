

const HeroSection = () => {
  return (
    <section class="bg-white relative">

        <span class="absolute animate-bounce left-[240px] top-[102px] hidden 2xl:inline-block">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.5046 24.6797L16.8046 32.0063C16.7247 32.2216 16.5808 32.4073 16.3923 32.5384C16.2038 32.6695 15.9796 32.7398 15.75 32.7398C15.5203 32.7398 15.2962 32.6695 15.1076 32.5384C14.9191 32.4073 14.7752 32.2216 14.6953 32.0063L11.9953 24.6797C11.9383 24.5251 11.8484 24.3846 11.7319 24.2681C11.6154 24.1516 11.4749 24.0617 11.3203 24.0047L3.99371 21.3047C3.77841 21.2248 3.59273 21.0809 3.4616 20.8924C3.33048 20.7038 3.26019 20.4797 3.26019 20.25C3.26019 20.0204 3.33048 19.7962 3.4616 19.6077C3.59273 19.4191 3.77841 19.2752 3.99371 19.1953L11.3203 16.4953C11.4749 16.4384 11.6154 16.3485 11.7319 16.232C11.8484 16.1154 11.9383 15.975 11.9953 15.8203L14.6953 8.49377C14.7752 8.27847 14.9191 8.09279 15.1076 7.96166C15.2962 7.83054 15.5203 7.76025 15.75 7.76025C15.9796 7.76025 16.2038 7.83054 16.3923 7.96166C16.5808 8.09279 16.7247 8.27847 16.8046 8.49377L19.5046 15.8203C19.5616 15.975 19.6515 16.1154 19.768 16.232C19.8846 16.3485 20.025 16.4384 20.1796 16.4953L27.5062 19.1953C27.7215 19.2752 27.9072 19.4191 28.0383 19.6077C28.1694 19.7962 28.2397 20.0204 28.2397 20.25C28.2397 20.4797 28.1694 20.7038 28.0383 20.8924C27.9072 21.0809 27.7215 21.2248 27.5062 21.3047L20.1796 24.0047C20.025 24.0617 19.8846 24.1516 19.768 24.2681C19.6515 24.3846 19.5616 24.5251 19.5046 24.6797Z" fill="#1A906B" />
                <path d="M24.75 2.25V9" stroke="#1A906B" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M28.125 5.625H21.375" stroke="#1A906B" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M31.5 10.125V14.625" stroke="#1A906B" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M33.75 12.375H29.25" stroke="#1A906B" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </span>

        <span class="absolute animate-pulse left-[752px] top-[160px] hidden 2xl:inline-block">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="6" cy="6" r="6" fill="#6D39E9" />
            </svg>
        </span>

        <span class="absolute animate-spin right-[926px] top-[120px] hidden 2xl:inline-block">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30.991 29.4259L29.5453 40.3888C29.5087 40.6523 29.3925 40.8983 29.212 41.0937C29.0316 41.2892 28.7957 41.4248 28.5359 41.4822C28.2762 41.5396 28.0051 41.5162 27.7591 41.4151C27.5131 41.3139 27.3039 41.1399 27.1596 40.9164L21.2258 31.5856C21.1226 31.4249 20.9859 31.2886 20.8249 31.1859C20.664 31.0833 20.4827 31.0168 20.2935 30.991L9.33059 29.5453C9.06711 29.5088 8.82111 29.3925 8.62566 29.2121C8.4302 29.0316 8.29465 28.7957 8.2372 28.536C8.17976 28.2762 8.20318 28.0051 8.30432 27.7591C8.40546 27.5131 8.57948 27.3039 8.80298 27.1597L18.1338 21.2258C18.2945 21.1227 18.4308 20.9859 18.5335 20.825C18.6361 20.664 18.7026 20.4827 18.7284 20.2936L20.1741 9.33062C20.2106 9.06714 20.3269 8.82114 20.5073 8.62569C20.6878 8.43023 20.9237 8.29468 21.1834 8.23723C21.4432 8.17979 21.7143 8.20321 21.9603 8.30435C22.2063 8.40549 22.4155 8.5795 22.5597 8.80301L28.4936 18.1339C28.5967 18.2945 28.7335 18.4309 28.8944 18.5335C29.0554 18.6362 29.2367 18.7027 29.4258 18.7284L40.3888 20.1741C40.6523 20.2107 40.8983 20.3269 41.0937 20.5074C41.2892 20.6878 41.4247 20.9237 41.4822 21.1835C41.5396 21.4432 41.5162 21.7143 41.415 21.9603C41.3139 22.2063 41.1399 22.4155 40.9164 22.5598L31.5855 28.4936C31.4249 28.5968 31.2885 28.7335 31.1859 28.8945C31.0832 29.0554 31.0167 29.2367 30.991 29.4259V29.4259Z" fill="#FFC27A" />
            </svg>
        </span>

        <span class="absolute animate-ping right-[21.35%] top-[24px] hidden 2xl:inline-block">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7.5" cy="7.5" r="7.5" fill="#FFC27A" />
            </svg>
        </span>

        <span class="absolute animate-ping  left-[34px] top-[548px] hidden 2xl:inline-block">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5" cy="5" r="5" fill="#ED4459" />
            </svg>
        </span>

        <span class="absolute animate-bounce bottom-[131px] right-[649px] hidden 2xl:inline-block">
            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7.5" cy="8.02197" r="7.5" fill="#6D39E9" />
            </svg>
        </span>

        <div class="banner-wrapper pb-8 xl:pb-[180px]">
            <div class="container px-4 sm:px-6 2xl:px-0">
                <div class="flex flex-wrap justify-center 2xl:justify-between">
                    
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
                                        <span class="absolute top-6 right-6">
                                            <svg class="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.875 18.75C15.2242 18.75 18.75 15.2242 18.75 10.875C18.75 6.52576 15.2242 3 10.875 3C6.52576 3 3 6.52576 3 10.875C3 15.2242 6.52576 18.75 10.875 18.75Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M16.4437 16.4437L21 21" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    
                    <div class="mt-5 2xl:mt-[156px] relative">
                        <div class="2xl:absolute 2xl:right-[-20%] 2xl:top-[-17%] 2xl:h-[444px] 2xl:w-[623px] w-full z-20">
                            <img src="./public/assets/img/banner_img.png" alt="" class=""/>
                        </div>
                        <div class="bg-white xl:px-5 xl:w-[197px] md:px-3 px-2 xl:py-[18px] md:py-2.5 py-1.5 rounded-lg shadow-2xl flex items-center md:gap-3 gap-2 xl:max-w-[197px] absolute z-50 xl:right-[-90px] right-[10px] xl:top-[73%] top-3/4">
                            <span>
                                <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="0.521973" width="44" height="44" rx="6" fill="#E9F8F3" />
                                    <path d="M22.4125 28.4001L27.1375 31.4001C27.7469 31.7845 28.4969 31.2126 28.3187 30.5095L26.95 25.1282C26.913 24.9791 26.9189 24.8225 26.967 24.6765C27.0151 24.5306 27.1034 24.4012 27.2219 24.3032L31.4594 20.7688C32.0125 20.3095 31.7312 19.3813 31.0094 19.3345L25.4781 18.9782C25.3272 18.9694 25.1821 18.9169 25.0606 18.827C24.939 18.7371 24.8463 18.6137 24.7937 18.472L22.7312 13.2782C22.6767 13.1281 22.5772 12.9985 22.4464 12.9069C22.3156 12.8152 22.1597 12.7661 22 12.7661C21.8403 12.7661 21.6844 12.8152 21.5536 12.9069C21.4228 12.9985 21.3233 13.1281 21.2687 13.2782L19.2062 18.472C19.1537 18.6137 19.061 18.7371 18.9394 18.827C18.8179 18.9169 18.6728 18.9694 18.5219 18.9782L12.9906 19.3345C12.2687 19.3813 11.9875 20.3095 12.5406 20.7688L16.7781 24.3032C16.8966 24.4012 16.9849 24.5306 17.033 24.6765C17.0811 24.8225 17.087 24.9791 17.05 25.1282L15.7844 30.1157C15.5687 30.9595 16.4687 31.6438 17.1906 31.1845L21.5875 28.4001C21.7108 28.3217 21.8539 28.2801 22 28.2801C22.1461 28.2801 22.2892 28.3217 22.4125 28.4001Z" fill="#20B486" stroke="#20B486" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                            <span class="text-xl text-gray-600">5.0 Rating</span>
                        </div>

                        <span class="2xl:absolute 2xl:top-[55px] 2xl:right-[-90px] z-10 animate-pulse hidden 2xl:inline-block">
                            <svg width="133" height="123" viewBox="0 0 133 123" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M129.565 3.0665C122.861 35.2321 103.672 88.7725 80.5502 45.6094C51.6481 -8.34447 46.9199 63.7019 44.5824 95.5299C44.7666 93.6398 41.0855 165.407 3.60982 68.6392" stroke="#FFC27A" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </span>
                    </div>
                    
                </div>
            </div>
        </div>

    </section>
  )
}

export default HeroSection