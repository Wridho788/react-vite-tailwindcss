import { useState, useEffect } from 'react'
import axios from 'axios'

export default function useJoke(name) {
    const [joke, setJoke] = useState('')
    useEffect(() => {
        const getJoke = async () => {
            const response = await axios(`https://api.chucknorris.io/jokes/random?name=${name}`)
            setJoke(response.data)
        }
        getJoke().then((r) => r)
    }, [name])

    return joke
}
