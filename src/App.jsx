import PlaceContentCenter from './components/PlaceContentCenter'
import Input from './components/Input'
import Button from './components/Button'
import { useEffect, useState } from 'react'

const App = () => {

    const [name, setName] = useState('')
    const [online, setOnline] = useState(false)

    // ! Hooks always rendered
    useEffect( () => {
        // console.log('always rendered')
    })

    // ! Hooks First Render
    useEffect( () => {
        // console.log('first rendered')
    },[])

    // ! Hooks rendered after if change state
    useEffect( () => {
        // console.log(`i am now ${online ? 'online' : 'offline'}`)
    },[online])

    // ! Hooks cleanup hook
    // example
    function updateScrollPosition() {
        const windowScrolling = window.scrollY
        console.log(`window scrolling ${windowScrolling}`)
        setScrollPosition(windowScrolling)
    }


    useEffect( () => {
        window.addEventListener('scroll', updateScrollPosition)
        // TODO: dibagian ini dibutuhkan cleanup function
        return () => {
            window.removeEventListener('scroll', updateScrollPosition)
        }
    })


    return (
        <div className='h-[4000px]'>
            <Input className="boder border-slate-600" value={name} onChange={(e)=> setName(e.target.value)}/>
            <Button onClick={(e)=> setOnline(online=> !online)} >Set Online</Button>


        </div>
    )
}

export default App
