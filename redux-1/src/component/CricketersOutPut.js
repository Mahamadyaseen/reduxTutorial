import React from 'react'
import { useSelector } from 'react-redux'

export default function ActorsOutput() {
    const state = useSelector(state => state.addCrircketers)
    console.log(state.cricketers)
    return (
        <div>
          <div>
                
                <ul>
                {state.cricketers.map((cricketers)=>
                {
                    return <li><h4>{cricketers}</h4></li>
                })}
                </ul>
            
        </div>   
        </div>
    )
}
