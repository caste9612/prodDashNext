import ProgressBar from 'react-bootstrap/ProgressBar';
import styles from "../styles/LotStateCard.module.css"
import UniqoLogo from '../public/uniqo.png';
import EpiqoLogo from '../public/epiqo.png';
import NaviliveLogo from '../public/navilive.png';
import { useContext, useEffect, useState } from 'react';
import { isUndefined } from 'lodash';

export default function LotStateCard(props){

    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        console.log("card expanded:" + expanded);
      }, [expanded]);

    var imgSource = "" ;

    switch(props.type){
        case "UNIQO":
            imgSource = UniqoLogo.src;
            break;
        case "EPIQO":
            imgSource = EpiqoLogo.src;
            break;
        case "NAVILIVE":
            imgSource = NaviliveLogo.src;
            break;
    }

    return(
        <div className={expanded ? 'cardFullExp' : 'cardFull' } onClick={() => setExpanded(!expanded)}>
        <h1 className='lotStateCardTitle'>Lot: {props.lotName}</h1>
            <div className={styles.cardInfo}>
            <button className={styles.deviceLotImg}>
                <img src = {imgSource}/>
            </button>
            <div className={styles.cardDate}>
                <p>Start: {props.startDate}</p>
                <p>Expected End: {props.expectedEndDate}</p>
                <p>Effective End: XX/XX/XXXX</p>
                <p>Current Phase: {props.currentPhase}</p>
            </div>
            </div>
            <ProgressBar animated now={props.lotProgress} label={`${props.lotProgress}%`}/>
        </div>
    );

}
