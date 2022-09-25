import Plot from 'react-plotly.js'
import { useContext, useEffect, useState, useRef } from 'react';
import { CuvetteContext } from '../lib/context';
import Graph from 'graphology';
import { MultiGraph } from 'graphology';
import { SigmaContainer, useLoadGraph, ControlsContainer, ZoomControl, FullScreenControl, LayoutForceAtlas2Control, SearchControl } from "@react-sigma/core";
import "@react-sigma/core/lib/react-sigma.min.css";
import { isUndefined, sample } from 'lodash';
import drawLabel from 'sigma/rendering/canvas/label';
import drawEdgeLabel from 'sigma/rendering/canvas/edge-label';
import getValue from '../pages/api/javaHttpRequest';


export default function PlotCSR(){

    function getValuess() {

        let response = getValue().then((res) => console.log(res))

    }


    const { cuvettes, setCuvettes } = useContext(CuvetteContext);

   let count = 0 

    return(
        
        <div className='containerColumn'>

            {/* CUVETTE ALLOC */}
            <div className='cardFull'>
               
            </div>

            {/* CUVETTE USAGE */}
            <div className='cardFull'>
                
            </div>

         

            {/* CUVETTE TESTS */}
            <div className='container'>
                <div className='card'>
                    <div className='container'>
                        <label>Test Volume:</label>
                        <input
                            type="text"
                            id="roll"
                            name="roll"
                            value={4}
                            required
                            minLength="1"
                            maxLength="3"
                            onChange={(e) => testVolumeChange(e.target.value)}
                        />
                        <button onClick={getValuess}></button>
                    </div>
                </div>
                <div className='plotSolidContainer'>

                </div>
            </div>
            
    

        </div>
    );



}

