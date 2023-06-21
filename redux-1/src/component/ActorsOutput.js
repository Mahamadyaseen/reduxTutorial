import React from 'react'
import { useSelector } from 'react-redux'

export default function ActorsOutput() {
    const state = useSelector(state => state.addActors)
    console.log(state.actors)
    return (
        <div>
          <div>
                
                <ul>
                {state.actors.map((actors)=>
                {
                    return <li><h4>{actors}</h4></li>
                })}
                </ul>
            
        </div>   
        </div>
    )
}
