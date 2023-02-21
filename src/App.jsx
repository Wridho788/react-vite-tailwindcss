import PlaceContentCenter from './components/PlaceContentCenter'
import Input from './components/Input'
import Button from './components/Button'
import { useRef, useState } from 'react'
import Card from './components/Card'
import useJoke from './hooks/useJoke'

const App = () => {
    const nameRef = useRef()
    const [name, setName] = useState('kylian')
    const joke = useJoke(name)

    const generateJoke = (e) => {
        e.preventDefault()
        setName(nameRef.current.value)
    }
    return (
        <PlaceContentCenter>
            <Card>
                <Card.Title>PlayGround</Card.Title>
                <Card.Body>
                    <p className='mb-4'>{joke.value}</p>
                    <Input ref={nameRef} />
                </Card.Body>
                <Card.Footer>
                    <Button onClick={generateJoke}>Generate a joke</Button>
                </Card.Footer>
            </Card>
        </PlaceContentCenter>
    )
}

export default App
