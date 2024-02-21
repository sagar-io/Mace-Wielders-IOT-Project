"use client"

import Image from 'next/image'
import animalIllustration from '../../public/images/animal-illustration.svg'
import settingIcon from '../../public/images/setting.svg'
import homeIcon from '../../public/images/home.svg'
import crossIcon from '../../public/images/cross.svg'
import hamburgerMenuIcon from '../../public/images/hamburger-menu.svg'
import videoIcon from '../../public/images/video.svg'
import Link from 'next/link'
import { useRef } from 'react'
import useGetWindowSize from '@/utils/hooks/useGetWindowSize'

const SideNav = () => {
    const currentWindowSize = useGetWindowSize();
    const sideNavRef = useRef<HTMLElement>(null);
    return (
        <>
            <div className='absolute left-0 md:hidden' onClick={openSideNav}>
                <Image src={hamburgerMenuIcon} alt='✘' width={45} height={45} />
            </div>
            <aside ref={sideNavRef} className='h-dvh max-w-96 bg-blue-300 flex flex-col absolute translate-x-[-150%] md:translate-x-0 md:static z-20 transition-transform'>
                <div className='md:hidden' onClick={closeSideNav}>
                    <Image src={crossIcon} alt='✘' width={40} height={40} />
                </div>
                <div>
                    <Image className='w-52' src={animalIllustration} alt='Save Animals' width={250} />
                </div>
                <div className='h-full'>
                    <ul className='flex flex-col h-full text-center' onClick={closeSideNav}>
                        <li className='border-y-lightPeach border-y-4'><Link href='/' className='py-3 pl-6 flex justify-start items-center flex-row gap-2 hover:border-r-4 border-r-lightPeach transition-all'><Image src={homeIcon} width={30} alt='' />Home</Link></li>
                        <li className='border-b-lightPeach border-b-4 '><Link href='/camera' className='py-3 pl-6 flex justify-start items-center flex-row gap-2 hover:border-r-4 border-r-lightPeach transition-all'><Image src={videoIcon} width={30} alt='' />RealTime Camera</Link></li>
                        <li className='border-t-4 border-t-lightPeach mt-auto'><Link href='/settings' className='py-3 pl-6 flex justify-start items-center flex-row gap-2 hover:border-r-4 border-r-lightPeach transition-all'><Image src={settingIcon} width={30} alt='' />Settings</Link></li>
                    </ul>
                </div>
            </aside>
        </>

    )
    function closeSideNav() {
        if (sideNavRef.current && currentWindowSize <= 500)
            sideNavRef.current.style.transform = "translateX(-150%)"
    }
    function openSideNav() {
        if (sideNavRef.current)
            sideNavRef.current.style.transform = "translateX(0%)"
    }
}

export default SideNav