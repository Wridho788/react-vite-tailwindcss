import PlaceContentCenter from './components/PlaceContentCenter'
import Input from './components/Input'
import Button from './components/Button'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'

const App = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function getUsers() {
            setLoading(true)
            try {
                const response = await axios('https://jsonplaceholder.typicode.com/users')
                setUsers(response.data)
                setLoading(false)
                console.log('====================================')
                console.log('user', response)
                console.log('====================================')
            } catch (e) {
                console.log(e.message)
            }
        }

        getUsers()
    }, [])
    return (
        <PlaceContentCenter>
            <Card>
                <Card.Title>Users: {users.length}</Card.Title>
                <Card.Body>
                    {loading ? (
                        <div>loading .... </div>
                    ) : users.length ? (
                        <ol>
                            {users.map((user) => (
                                <li key={user.id}>
                                    {user.name} {user.username}
                                </li>
                            ))}
                        </ol>
                    ) : (
                        <div>There are no users</div>
                    )}
                </Card.Body>
            </Card>
        </PlaceContentCenter>
    )
}

export default App
