import React from 'react';
import './App.css'
import {useSelector,useDispatch} from 'react-redux'
//import {incNumber,decNumber} from './actions/index'
import Actors from './component/Actors';
import Polyticians from './component/Polyticians';
import Cricketers from './component/Cricketers';
import ActorsOutput from './component/ActorsOutput';
import PolyticiansOutput from './component/PolyticiansOutput';
import CricketersOutPut from './component/CricketersOutPut';

export default function App() {
  //const  state = useSelector(store => store.changeTheNumber);
  
  return (
    <>
    
      <h3 style={{textAlign:'center',backgroundColor:'lightgray'}}>Redux Part-1</h3>
    
    <div className="main-con">
    <div style={{width:'50%',borderRight:'1px solid black'}}>
     <Actors/>
     </div>
     <div style={{width:'50%'}}>
          <h3 style={{textAlign:'center'}}>
            Actors Lists
          </h3>
          <ActorsOutput/>
        </div>
    </div>
    <hr/>
    <div className="main-con">
    <div style={{width:'50%',borderRight:'1px solid black'}}>
    <Polyticians/>
     </div>
     <div style={{width:'50%'}}>
          <h3 style={{textAlign:'center'}}>
            Polyticians Lists
          </h3>
          <PolyticiansOutput/>
        </div>
    </div>
    <hr/>
    <div className="main-con">
    <div style={{width:'50%',borderRight:'1px solid black'}}>
    <Cricketers/>
     </div>
     <div style={{width:'50%'}}>
          <h3 style={{textAlign:'center'}}>
            Cricketers Lists
          </h3>
          <CricketersOutPut/>
        </div>
    </div>
    
      
  
    </>
  )
}
