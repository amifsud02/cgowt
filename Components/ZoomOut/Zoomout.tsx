import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import CGOWT from '../../public/logo.svg'
import Lottie from 'react-lottie'
import ScrollDown from '../../lotties/scroll down lottie.json'
import React, { useEffect, useState } from 'react'

export const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: ScrollDown,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function ZoomOut() {

    const [panningOut, setPanningOut] = useState("");
    const [blur, setBlur] = useState("");
    const [scoll, setScroll] = useState("");

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll)
    })

    const handleScroll = () => {
        let scrollTop = window.scrollY, 
            panningOut = 'scale3d(' + (1 - scrollTop / 2500) + ', ' + (1 - scrollTop / 2500) + ', 1)',
            blur = 'blur(' + scrollTop/100 + 'px)';
        
        console.log(scrollTop)
        
        setPanningOut(panningOut)
        setBlur(blur)
    };

    return( 
        <header className={styles.header__outer} style={{transform: panningOut, filter: blur }}>
            <div className={styles.header__inner}>
                <div className={styles.header__top}>
                
                <Image src={CGOWT} alt="CGOWT" width={70} height={80}/>
                
                <a className={styles.git}>
                    {/* <div className={styles.git__bg}></div>
                    <div className={styles.git__border1}></div>
                    <div className={styles.git__border2}></div> */}
                    <div className={styles.git__label}>Get in touch</div>
                </a>
                </div>
                <div className={styles.header__bottom}>
                <h1>CGOWT.</h1>
                <p>Empowering digital transformations.</p>
                <Lottie options={defaultOptions} height={100} width={100} />
                </div>
            </div>
        </header>
    )

}