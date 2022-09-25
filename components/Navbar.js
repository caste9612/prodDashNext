import { useContext, useEffect, useState } from 'react';
import Router from 'next/router';
import { CuvetteContext } from '../lib/context';
import styles from "../styles/Navbar.module.css";
import Image from 'next/image';
import Logo from '../public/VisiaLab-Logo-RGB-Icon-HD.png';
import { GrRefresh } from 'react-icons/gr';

export default function Navbar() {

    function resetPage(){
        Router.reload();
    }

    const { cuvettes, setCuvettes } = useContext(CuvetteContext);


    
    return(
        <nav className="navbar">
            <ul>

                <li>
                    <button className='btn-logo'>
                        <img src= {Logo.src}/>
                    </button>
                </li>


                <li>
                    <button className='btn-red' onClick={resetPage}>
                        <GrRefresh />
                    </button>
                </li>

            </ul>
        </nav>
    );
}

