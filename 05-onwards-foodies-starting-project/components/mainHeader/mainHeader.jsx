import Link from "next/link"
import logoImg from '@/assets/logo.png'
import Image from "next/image"
import classes from './mainHeader.module.css'
import MainHeaderBackground from '@/components/mainHeader/mainHeaderBackground';

export default function MainHeader() {
    console.log("어디서 실행될까요?")
    return(<>
    <MainHeaderBackground></MainHeaderBackground>
    <header className={classes.header}>
        <Link className={classes.logo} href="/">
        <Image src={logoImg} alt="접시위에 담긴 음식" priority></Image>
        NextLevel Food
        </Link>
        <nav className={classes.nav}>
            <ul>
                <li>
                    <Link href="/meals">Browse Meals</Link>
                </li>
                <li>
                    <Link href="/community">Foodies Community</Link>
                </li>
            </ul>
        </nav>
    </header>
    </>)
}