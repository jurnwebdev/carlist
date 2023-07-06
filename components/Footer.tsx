import {footerLinks} from '@/constants';
import Link from 'next/link';

const Footer = () => {
  return (
   <footer className='w-full flex flex-col justify-center px-10 py-6 gap-4'>
   <div className='flex justify-between'>
   {
        footerLinks.map((link) => {
                  return (
                    <div
                      key={link.title}
                      className='text-blue-900'
                    ><a className='font-bold text-[20px] uppercase mb-6'>
                        {link.title}
                        </a>
                        <div className='flex flex-col gap-2 hover:text-gray-900'>
                            {
                                link.links.map((items) =>{
                                    return (
                                           <Link key={items.title} href={items.url}>{items.title}</Link>
                                 )})
                            }
                        </div>
                    </div>
                  )
                })
    }
   </div>
    <div className='flex justify-between items-center'>
    <p>&copy; 2023. Carlist</p>
    <p>🥷🏾</p>
    </div>
   </footer>
  )
}

export default Footer