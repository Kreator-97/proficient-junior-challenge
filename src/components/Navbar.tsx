import HomeIcon from '../assets/home.svg'
import { IoMdMenu } from 'react-icons/io'

export const Navbar = () => {

  return (
    <nav className="h-[80px] bg-primary flex">
      <div className='flex justify-between items-center px-4 w-full max-w-5xl mx-auto'>
        <img src={HomeIcon} alt="Inicio" width={32} height={32} />

        <ul className='gap-4 hidden sm:flex'>
          <li className='text-white'>How We Work</li>
          <li className='text-white'>Services</li>
          <li className='text-white'>Free Quote</li>
          <li className='text-white'>Contact</li>
        </ul>

        <div className='block sm:hidden'>
          <IoMdMenu color='#fff' size={36} />
        </div>
        
      </div>
    </nav>
  )
}
