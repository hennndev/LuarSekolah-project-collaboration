import React from 'react'
import HeroText from '@/app/components/aktivitas-kami/HeroText'
import Testimonials from '@/app/components/aktivitas-kami/Testimonials'
import OurActivities from '@/app/components/aktivitas-kami/OurActivities'

export const metadata = {
    title: "LuarSekolah | Aktivitas Kami"
}

const AktivitasKami = () => {
    return (
        <main className='mt-[30px]'>
            <HeroText/>
            <OurActivities/>
            <Testimonials/>
        </main>
    )
}

export default AktivitasKami