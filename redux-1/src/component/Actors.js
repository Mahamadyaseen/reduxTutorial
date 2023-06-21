import React,{useState} from 'react'
import { Container, Form,Button } from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux'

export default function Actors() {
   
    
    const [actors, setActors] = useState("")
    const dispatch = useDispatch()
    const handleSubmit=()=>
    {
        console.log(actors)
        dispatch({type:'addActors',data:actors})
    }
    return (
        <div >
            <Container>
                <Form>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Actors</Form.Label>
                    <input type="text" onInput={(e)=>{setActors(e.target.value)}} />
                </Form.Group>
                <Button className="my-2" variant="primary" onClick={handleSubmit}>Add Actor</Button>
                </Form>
            </Container>
           
        </div>
    )
}
