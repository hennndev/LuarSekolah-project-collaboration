"use client"
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const UniversityPartner = () => {
    const images = [
        '/images/YPA.png', 
        '/images/ULBI.png',     
        '/images/university-logo-1.png',    
        '/images/UNIKOM.png',   
        '/images/POLBAN.png',   
        '/images/STAIPN.png',   
        '/images/LP3I.png',     
    ]

    const [animate] = useState(true);

    return (
        <section className='mb-[100px] space-y-[50px]'>
            <h2 className='text-[40px] leading-[63px] font-bold tracking-[0.04em] text-center'>Mitra Perguruan Tinggi</h2>
            <div className="relative overflow-hidden w-full">
                <AnimatePresence>
                    <motion.div
                        className="flexx space-x-20"
                        initial={{ x: '10%' }}
                        animate={{ x: animate ? '-100%' : '100%' }}
                        transition={{
                            duration: 35,
                            ease: 'linear',
                            repeat: Infinity,
                        }}>
                            {images.map((src, index) => (
                                <img key={index} src={src} alt={`Moving Image ${index + 1}`} className="w-[300px] h-auto" />
                            ))}
                            {images.map((src, index) => (
                                <img key={index + images.length} src={src} alt={`Moving Image ${index + 1}`} className="w-[300px] h-auto" />
                            ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    )
}

export default UniversityPartner