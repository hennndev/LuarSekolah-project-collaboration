import React from 'react'
import Team from '@/app/components/tentang-kami/Team'
import Program from '@/app/components/tentang-kami/Program'
import HeroText from '@/app/components/tentang-kami/HeroText'
import VisiMisi from '@/app/components/tentang-kami/VisiMisi'
import OurValue from '@/app/components/tentang-kami/OurValue'
import OurActivities from '@/app/components/tentang-kami/OurActivities'
import StatisticInfo from '@/app/components/tentang-kami/StatisticInfo'
import CompanyPartner from '@/app/components/tentang-kami/CompanyPartner'
import UniversityPartner from '@/app/components/tentang-kami/UniversityPartner'
import AdditionalSection from '@/app/components/tentang-kami/AdditionalSection'

export const metadata = {
    title: "LuarSekolah | Tentang Kami"
}

const TentangKami = () => {
    return (
        <main className='mt-[50px]'>
            <HeroText/>
            <VisiMisi/>
            <OurValue/>
            <Team/>
            <Program/>
            <StatisticInfo/>
            <OurActivities/>
            <CompanyPartner/>
            <UniversityPartner/>
            <AdditionalSection/>
        </main>
    )
}

export default TentangKami