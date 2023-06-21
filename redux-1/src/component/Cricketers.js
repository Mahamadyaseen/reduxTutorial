import React,{useState} from 'react'
import { Container, Form,Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

export default function Actors() {
    let dispatch=useDispatch()
    const [cricketers, setCricketers] = useState("")
    const handleSubmit=()=>
    {
        console.log(cricketers)
        dispatch({type:'addCrick',data:cricketers})
    }
    return (
        <div>
            <Container>
                <Form>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Cricketers</Form.Label>
                    <input type="text" onInput={(e)=>{setCricketers(e.target.value)}} />
                </Form.Group>
                <Button  className="my-2" variant="primary" onClick={handleSubmit}>Add cricketers</Button>
                </Form>
            </Container>
        </div>
    )
}
