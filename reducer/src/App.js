import React,{useReducer} from "react";
import { Container } from "react-bootstrap";



export default function App() {

const initialState={
    score:0,
    score2:0,
    total:0,
    wicket:0

}
const reducer =(state=initialState,action)=>
{
  switch(action.type)
  {
    case "sixer":
      return {...state,score:state.score+action.data}
      case "four":
      return {...state,score:state.score+action.data}
      case "double":
      return {...state,score:state.score+action.data}
      case "single":
      return {...state,score:state.score+action.data}
      case "sixer2":
      return {...state,score2:state.score2+action.data}
      case "four2":
      return {...state,score2:state.score2+action.data}
      case "double2":
      return {...state,score2:state.score2+action.data}
      case "single2":
      return {...state,score2:state.score2+action.data}
      case "wicket":
        return {...state,wicket:state.wicket+1}
       default:
        return state;
  }
}


  const [state, dispatch] = useReducer(reducer, initialState)
 
  



  return (
    <div className="mainContainer vstack">
    
    <Container fluid>
    <h1 style={{textAlign:'center'}}>Total Wickets/ {state.wicket}</h1>
    <hr/>
    <h1 style={{textAlign:'center'}}>Player 1 Score </h1>
    <h1 style={{textAlign:'center'}}> Score / {state.score}</h1>
   
    </Container>

     
     <Container fluid>
      
     <div style={{textAlign:'center'}}>
     <button className="btn btn-danger mx-3 my-2" onClick={()=>
      {
        dispatch({type:"sixer",data:6})
      }}>6</button>
     
     <button className="btn btn-danger" onClick={()=>
      {
        dispatch({type:"four",data:4})
      }}>4</button>
      <button className="btn btn-danger mx-3" onClick={()=>
      {
        dispatch({type:"double",data:2})
      }}>2</button>
     
     <button className="btn btn-danger" onClick={()=>
      {
        dispatch({type:"single",data:1})
      }}>1</button>
       <button className="btn btn-danger mx-2 my-2" onClick={()=>
      {
        dispatch({type:"wicket"})
      }}>Wicket</button>

     </div>
     <hr></hr>
     <Container fluid>
     <h1 style={{textAlign:'center'}}>Player2 score</h1>
    <h1 style={{textAlign:'center'}}>score/ {state.score2}</h1>
   
    </Container>
    
     <div style={{textAlign:'center'}}>
     <button className="btn btn-danger mx-3 my-2" onClick={()=>
      {
        dispatch({type:"sixer2",data:6})
      }}>6</button>
     
     <button className="btn btn-danger" onClick={()=>
      {
        dispatch({type:"four2",data:4})
      }}>4</button>
      <button className="btn btn-danger mx-3" onClick={()=>
      {
        dispatch({type:"double2",data:2})
      }}>2</button>
     
     <button className="btn btn-danger" onClick={()=>
      {
        dispatch({type:"single2",data:1})
      }}>1</button>
       <button className="btn btn-danger mx-2 my-2" onClick={()=>
      {
        dispatch({type:"wicket"})
      }}>Wicket</button>

     </div>
     <hr/>
     </Container>

    </div>
  );
}
