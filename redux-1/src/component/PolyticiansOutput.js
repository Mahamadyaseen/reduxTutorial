import React from 'react'
import { useSelector } from 'react-redux'

export default function ActorsOutput() {
    const state = useSelector(state => state.addPoly)
    console.log(state.polyticians)
    return (
        <div>
          <div>
                
                <ul>
                {state.polyticians.map((polyticians)=>
                {
                    return <li><h4>{polyticians}</h4></li>
                })}
                </ul>
            
        </div>   
        </div>
    )
}
