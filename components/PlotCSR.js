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

    return(
        
        <div className='containerColumn'>
            {lots.map( (lot, i) =>
                <LotStateCard key={i} lotName = {lot.lotName} startDate = {lot.startDate} expectedEndDate = {lot.expectedEndDate} effectiveEndDate = {lot.effectiveEndDate} currentPhase = {lot.currentPhase} lotProgress = {lot.lotProgress} type = {lot.type} />
            )}
        </div>
    );
}

