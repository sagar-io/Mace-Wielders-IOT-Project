import Image from 'next/image'
import animalIllustration from '../../public/images/animal-illustration.svg'
import settingIcon from '../../public/images/setting.svg'
import homeIcon from '../../public/images/home.svg'
import videoIcon from '../../public/images/video.svg'
import Link from 'next/link'

const SideNav = () => {
    return (
        <aside className='max-w-96 bg-blue-300 h-screen flex flex-col'>
            <div>
                <Image src={animalIllustration} alt='Save Animals' width={250} />
            </div>
            <div className='h-full'>
                <ul className='flex flex-col h-full text-center'>
                    <li className='border-y-lightPeach border-y-4 '><Link href='/' className='py-3 pl-8 flex justify-start items-center flex-row gap-2 hover:border-r-4 border-r-lightPeach transition-all'><Image src={homeIcon} width={30} alt='' />Home</Link></li>
                    <li className='border-b-lightPeach border-b-4 '><Link href='/camera' className='py-3 pl-8 flex justify-start items-center flex-row gap-2 hover:border-r-4 border-r-lightPeach transition-all'><Image src={videoIcon} width={30} alt='' />RealTime Camera</Link></li>
                    <li className='border-t-4 border-t-lightPeach mt-auto'><Link href='/settings' className='py-3 pl-8 flex justify-start items-center flex-row gap-2 hover:border-r-4 border-r-lightPeach transition-all'><Image src={settingIcon} width={30} alt='' />Settings</Link></li>
                </ul>
            </div>
        </aside>
    )
}

export default SideNav