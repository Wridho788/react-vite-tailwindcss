import PlaceContentCenter from './components/PlaceContentCenter'
import Button from './components/Button'
import { useState } from 'react'
import Counter from './components/Counter'
const App = () => {


    return (
        <PlaceContentCenter>
            <Counter initialValue={10} />
        </PlaceContentCenter>
    )
}

export default App
