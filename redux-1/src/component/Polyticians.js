import React,{useState} from 'react'
import { Container, Form,Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

export default function Actors() {
    
    const [polyticians, setPolyticians] = useState("")
    const dispatch = useDispatch()
    const handleSubmit=()=>
    {
        console.log(polyticians)
        dispatch({type:'addPoly',data:polyticians})
    }
    return (
        <div>
            <Container>
                <Form>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Polyticians</Form.Label>
                    <input type="text" onInput={(e)=>{setPolyticians(e.target.value)}} />
                </Form.Group>
                <Button  className="my-2" variant="primary" onClick={handleSubmit}>Add polyticians</Button>
                </Form>
            </Container>
        </div>
    )
}
