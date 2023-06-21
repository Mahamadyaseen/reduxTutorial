import {combineReducers} from 'redux';
const initialState={
    //count:0,
    actors:[],
    polyticians:[],
    cricketers:[]
};
//
 const addActors=(state=initialState,action)=>
{
   switch(action.type){
       
       case 'addActors':
        console.log(action.data) 
       
      return {...state,actors:state.actors.concat(action.data)}
       default:return state
       
   }
  

}
const addPoly=(state=initialState,action)=>
{
   switch(action.type){
       
       case 'addPoly':
        console.log(action.data) 
       
      return {...state,polyticians:state.polyticians.concat(action.data)}
       default:return state
       
   }
  

}
const addCrircketers=(state=initialState,action)=>
{
   switch(action.type){
       
       case 'addCrick':
        console.log(action.data) 
       
      return {...state,cricketers:state.cricketers.concat(action.data)}
       default:return state
       
   }
  

}


const rootReducer= combineReducers({
   // changeTheNumber,
    addActors,
    addPoly,
    addCrircketers
})
export default rootReducer;
//export default changeTheNumber;