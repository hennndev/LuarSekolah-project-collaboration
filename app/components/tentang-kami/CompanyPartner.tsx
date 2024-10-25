"use client"
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'


const CompanyPartner = () => {
    const images = [
        '/images/prakerja.png', 
        '/images/bukalapak.png',     
        '/images/tokopedia.png',    
        '/images/gojek.png',   
        '/images/flip.png',   
        '/images/mekari.png',   
        '/images/shopee.png',     
    ]

    const [animate] = useState(true);

    return (
        <section className='mb-[50px] space-y-[50px]'>
            <h2 className='text-[42px] leading-[63px] font-bold tracking-[0.08em] text-center'>Mitra Perusahaan</h2>
            <div className="">
                <div className="relative overflow-hidden w-full">
                    <AnimatePresence>
                    <motion.div
                        className="flex items-center flex-row-reverse"
                        initial={{ x: '-10%' }}
                        animate={{ x: animate ? '100%' : '-100%' }}
                        transition={{
                            duration: 35, 
                            ease: 'linear',
                            repeat: Infinity,
                        }}>
                            {images.map((src, index) => (
                                <img key={index} src={src} alt={`Moving Image ${index + 1}`} className="w-[300px] h-auto ml-20" />
                            ))}
                            {images.map((src, index) => (
                                <img key={index + images.length} src={src} alt={`Moving Image ${index + 1}`} className="w-[300px] h-auto ml-20" />
                            ))}
                            {/* {images.map((src, index) => (
                                <img key={index + images.length} src={src} alt={`Moving Image ${index + 1}`} className="w-[300px] h-auto" />
                            ))} */}
                    </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}

export default CompanyPartner