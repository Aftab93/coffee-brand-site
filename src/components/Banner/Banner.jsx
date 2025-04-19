import React from 'react'
import BannerImg from '../../assets/coffee-cover.jpg'
import AppleStoreImg from '../../assets/app_store.png'
import PlayStoreImg from '../../assets/play_store.png'
import { motion } from 'framer-motion'

const BannerStyle = {
    backgroundImage: `url(${BannerImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
}

const Banner = () => {
  return (
    <div className='container my-14'>
        <div 
        style={BannerStyle}
        className='sm:min-h-[400px] sm:flex sm:justify-end sm:items-center rounded-xl'
        >
            <div>
                <div className='space-y-6 max-w-xl mx-auto'>
                    <motion.h1 
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        delay: 0.2,
                    }}
                    className='text-2xl text-center sm:text-4xl font-semibold'>
                        Download the App
                    </motion.h1>
                    <motion.p 
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        delay: 0.3,
                    }}
                    className='text-center sm:px-20'>
                        Experience convenience like never before. Get our app today and explore a wide range of features that simplify your life.
                    </motion.p>

                    {/* links */}
                    <div className='flex justify-center items-center gap-4'>
                        <a href="#" className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'>
                            <motion.img 
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 10,
                                delay: 0.4,
                            }}
                            src={AppleStoreImg} 
                            alt="" />
                        </a>
                        <a href="#" className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'>
                            <motion.img 
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 10,
                                delay: 0.5,
                            }}
                            src={PlayStoreImg} 
                            alt="" />
                        </a>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Banner