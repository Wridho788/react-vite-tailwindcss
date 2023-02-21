import PlaceContentCenter from './components/PlaceContentCenter'
import Card from './components/Card'
import Button from './components/Button'
import Input from './components/Input'
import { useRef, useState } from 'react'

const App = () => {
    // const [tick, setTick] = useState(0)
    // const inputRef = useRef(null)

    function handleClick() {
        // inputRef.current.focus()
        // const newTick = tick + 1
        // setTick(newTick)
        // console.log(newTick)
    }
    return (
        <PlaceContentCenter>
            <Card>
                <Card.Title>useRef Hooks </Card.Title>
                <Card.Body>
                    <Input className="boder border-slate-600" isFocused/> 
                    <Button text='Tick' onClick={handleClick} />
                </Card.Body>
                {/* <Card.Footer>You clicked {tick} times</Card.Footer> */}
            </Card>
        </PlaceContentCenter>
    )
}

export default App
