import Link from 'next/link'
import { navMenu } from '@/constants'

const NavMenu = () => {
    return (
       <main className='md:flex gap-10 items-center hidden'>
         {
            navMenu.map((menu) => {
                return (
                    <p 
                    key={menu.title}
                    className="hover:translate-y-1 ease-in duration-300"><Link href={menu.url}>{menu.title}</Link></p>
                )
            })
        }
       </main>
    )
}

export default NavMenu