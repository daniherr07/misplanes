import Image from 'next/image'
import navbarStyle from './navbar.module.css'


export default function NavBar() {
    
    return(
        <>
        <nav className={navbarStyle.navbar}>
            <Image src='logoWhite.svg' alt='Logo de planes' width={200} height={200} className={navbarStyle.logo}/>
            

            <div className={navbarStyle.search}>
                <input type="text" name="search" id="searchInput" className={navbarStyle.searchInput} placeholder='Buscar'/>
                <Image src='lupa.svg' alt='icono lupa' width={100} height={100} className={navbarStyle.searchIcon}/>
            </div>

            <div className={navbarStyle.misc}>
                <span className={navbarStyle.coinsButton}>
                    <Image src='coins.svg' alt='coin' width={100} height={100} className={navbarStyle.coinIcon}/>
                    <p className={navbarStyle.coinText}>12</p>
                </span>

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