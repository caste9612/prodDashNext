import ProgressBar from 'react-bootstrap/ProgressBar';
import styles from "../styles/LotStateCard.module.css"
import UniqoLogo from '../public/uniqo.png';
import EpiqoLogo from '../public/epiqo.png';
import NaviliveLogo from '../public/navilive.png';
import { useContext, useEffect, useState } from 'react';
import { isUndefined } from 'lodash';
import { MdEdit } from 'react-icons/md';
import AddSerialToLotModal from './AddSerialToLotModal';


export default function LotStateCard(props){

    const [expanded, setExpanded] = useState(false);
    const [showModal, setShowModal] = useState(false);


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
            <div className={styles.lotTitleDiv}>
                <h1 className='lotStateCardTitle'>Lot: {props.lotName}</h1>
                <button className={styles.btnEdit} onClick={() => setShowModal(true)}>
                    <MdEdit size={20}/>
                </button>
                <AddSerialToLotModal 
                        onClose={() => setShowModal(false)}
                        show={showModal}
                        lot =  {props.lotName}
                >
                    Aggiungi un seriale per il lotto:
                </AddSerialToLotModal>
            </div>
            <div className={styles.cardInfo}>
            <button className={styles.deviceLotImg}>
                <img src = {imgSource}/>
            </button>
            <div className={styles.cardDate}>
                <p>Start: {props.startDate}</p>
                <p>Expected End: {props.expectedEndDate}</p>
                <p>Effective End: {props.effectiveEndDate}</p>
                <p>Current Phase: {props.currentPhase}</p>
            </div>
            </div>
            
            {props.lotProgress === "100" && (
                <>
                    <ProgressBar striped variant="success" now={props.lotProgress} label={`${props.lotProgress}%`} />
                </>
            )}
            {props.lotProgress != "100" && (
                <>
                    <ProgressBar animated now={props.lotProgress} label={`${props.lotProgress}%`}/>                
                </>
            )}
            
        </div>
    );

}
