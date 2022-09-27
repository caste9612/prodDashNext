import { useContext, useEffect, useState } from 'react';
import Router from 'next/router';
import { LotsContext } from '../lib/context';
import styles from "../styles/Navbar.module.css";
import Image from 'next/image';
import Logo from '../public/VisiaLab-Logo-RGB-Icon-HD.png';
import { GrRefresh } from 'react-icons/gr';
import getValue from '../pages/api/javaHttpRequest';


export default function Navbar() {

    function resetPage(){
        let response = getValue().then((res) => {
            console.log(res);
            console.log("la navbar setta i lotti");
            setLots(res);
        });
    }

    const { lots, setLots } = useContext(LotsContext);

    return(
        <nav className={styles.navbar}>
            <ul>

                <li>
                    <button className={styles.btnlogo}>
                        <img src= {Logo.src}/>
                    </button>
                </li>

                <li>
                    <button className={styles.btnred} onClick={resetPage}>
                        <GrRefresh />
                    </button>
                </li>

            </ul>
        </nav>
    );
}

