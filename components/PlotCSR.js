import Plot from 'react-plotly.js'
import { useContext, useEffect, useState, useRef } from 'react';
import { LotsContext } from '../lib/context';
import Graph from 'graphology';
import { MultiGraph } from 'graphology';
import { SigmaContainer, useLoadGraph, ControlsContainer, ZoomControl, FullScreenControl, LayoutForceAtlas2Control, SearchControl } from "@react-sigma/core";
import "@react-sigma/core/lib/react-sigma.min.css";
import { isUndefined, sample } from 'lodash';
import drawLabel from 'sigma/rendering/canvas/label';
import drawEdgeLabel from 'sigma/rendering/canvas/edge-label';
import getValue from '../pages/api/javaHttpRequest';
import LotStateCard from './LotStateCard';



export default function PlotCSR(){

    const { lots, setLots } = useContext(LotsContext);

    useEffect(() => {

        console.log("La lista di card si e accorta del ripopolamento dei dati");

      }, [lots]);

    let uniqoProductionsLots = [];

    let exampleLot = {
        startDate: "23/12/2021",
        expectedEndDate: "13/02/2022",
        currentPhase: "Montaggio Cover",
        lotProgress: 78,
        type: "UNIQO"
    }
    uniqoProductionsLots.push(exampleLot);

    let exampleLot1 = {
        startDate: "23/12/2021",
        expectedEndDate: "13/02/2022",
        currentPhase: "Accensione",
        lotProgress: 32,
        type: "EPIQO"
    }
    uniqoProductionsLots.push(exampleLot1);

    let exampleLot2 = {
        startDate: "23/12/2021",
        expectedEndDate: "13/02/2022",
        currentPhase: "Accensione",
        lotProgress: 2,
        type: "UNIQO"
    }
    uniqoProductionsLots.push(exampleLot2);

    let exampleLot3 = {
        startDate: "23/12/2021",
        expectedEndDate: "13/02/2022",
        currentPhase: "In spedizione",
        lotProgress: 100,
        type: "NAVILIVE"
    }
    uniqoProductionsLots.push(exampleLot3);

    return(
        
        <div className='containerColumn'>
            {uniqoProductionsLots.map( (lot, i) =>
                <LotStateCard key={i} startDate = {lot.startDate} expectedEndDate = {lot.expectedEndDate} currentPhase = {lot.currentPhase} lotProgress = {lot.lotProgress} type = {lot.type} />
            )}
        </div>
    );
}

