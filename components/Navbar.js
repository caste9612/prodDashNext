import { useContext, useEffect, useState } from 'react';
import Router from 'next/router';
import { LotsContext } from '../lib/context';
import styles from "../styles/Navbar.module.css";
import Image from 'next/image';
import Logo from '../public/VisiaLab-Logo-RGB-Icon-HD.png';
import { GrRefresh } from 'react-icons/gr';
import { FcSettings } from 'react-icons/fc'
import getValue from '../pages/api/javaHttpRequest';


export default function Navbar() {

    const { lots, setLots } = useContext(LotsContext);
    const [check, setCheck] = useState(0);

    function askData(){
        let response = getValue().then((res) => {
            //console.log(res);
            console.log("la navbar setta i lotti");

            let incomingLots = [];

            for (var i = 0; i < res.length; i++){

                var obj = res[i];

                if(obj.type === "UNKNOWN"){

                }else{
                    //console.log(obj);
                    incomingLots.push({
                        startDate: obj.startDate,
                        expectedEndDate: obj.expectedEndDate,
                        currentPhase: obj.currentPhase,
                        lotProgress: obj.lotProgress,
                        type: obj.type,
                        lotName: obj.lotName
                    })
                }

            }

            incomingLots.sort((a, b) => parseFloat(b.lotName) - parseFloat(a.lotName));
            incomingLots.sort((a,b) => ((parseFloat(a.lotProgress) > parseFloat(b.lotProgress)) ? 1 : (parseFloat(a.lotName) > parseFloat(b.lotName)) ? -1 : 0))




            setLots(incomingLots);
        });
    }

    const callApi = () => {
        askData();
    }

    useEffect(() => {
        const id = setInterval(() => {
            callApi()
            setCheck(check + 1)
        }, 60000);
        return () => clearInterval(id);
    }, [check])

    return(
        <nav className={styles.navbar}>
            <ul>

                <li>
                    <button className={styles.btnlogo}>
                        <img src= {Logo.src}/>
                    </button>
                </li>

                <li>
                    <h1 className={styles.h1}>Production Dashboard</h1>
                </li>

                {/* <div className='buttonContainer'> */}
                    <li>
                        <button className={styles.btnred} onClick={askData}>
                            <GrRefresh size={20} color={"white"}/>
                        </button>
                    </li>

                    <li>
                        <button className={styles.btnsettings}>
                            <FcSettings size={20}/>
                        </button>
                    </li>
                {/* </div> */}
                
            </ul>
        </nav>
    );
}

