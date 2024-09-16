import Image from 'next/image'
import navbarStyle from './navbar.module.css'
import SelectPicker from '../selectPicker/SelectPicker'
import { Suspense } from 'react'




export default function NavBar() {
    
    return(
        <>

        <nav className={navbarStyle.navbar}>
            <form action="/api/login" method='POST'>
                <button type='submit' style={{background: "none", border: "none"}}>
                    <Image src='logoWhite.svg' alt='Logo de planes' width={200} height={200} className={navbarStyle.logo} />
                </button>
                
            </form>
            
            

            <div className={navbarStyle.search}>
                <Suspense>
                    <SelectPicker></SelectPicker>
                </Suspense>
                
                <Image src='lupa.svg' alt='icono lupa' width={100} height={100} className={navbarStyle.searchIcon}/>
            </div>

            <div className={navbarStyle.misc}>

                <form action='/api/purchase' method='POST'>
                    <button type='submit' style={{ border:"none"}} className={navbarStyle.coinsButton}>
                        <Image src='coins.svg' alt='coin' width={100} height={100} className={navbarStyle.coinIcon}/>
                        <p className={navbarStyle.coinText}>12</p>
                    </button>
                </form>



                <span className={navbarStyle.userInfo}>
                    <Image src='user.svg' alt='userIcon' width={10} height={10} className={navbarStyle.userIcon}/>
                    <p className={navbarStyle.userName}>Max Salsa</p>
                </span>

                <Image src='headset.svg' alt='coin' width={10} height={10} className={navbarStyle.headsetIcon}/>

            </div>
        </nav>
        </>
    )
}