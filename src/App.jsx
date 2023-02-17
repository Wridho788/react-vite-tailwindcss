import PlaceContentCenter from './components/PlaceContentCenter'
import Button from './components/Button'
import Card from './components/Card'
import { IconBrandGithub } from '@tabler/icons-react'
import Input from './components/Input'
import Label from './components/Label'
import { useState } from 'react'

const App = () => {
    const [name, setName] = useState(';')
    const [email, setEmail] = useState('')
    return (
        <PlaceContentCenter>
            <Card>
                <Card.Title>Sign Up for new Account!</Card.Title>
                <Card.Body>
                    <div className='mb-5 border rounded-lg p-4'>
                        <p>Name: {name || '-------'}</p>
                        <p>Email: {email || '-------'}</p>
                    </div>

                    <div className='mb-6'>
                        <Label htmlFor='name'>Name</Label>
                        <Input onChange={(e) => setName(e.target.value)} id='name' value={name} name='name' />
                    </div>
                    <div className='mb-6'>
                        <Label htmlFor='email'>Email</Label>
                        <Input value={email} onChange={(e) => setEmail(e.target.value)} id='email' name='email' />
                    </div>
                </Card.Body>
                <Card.Footer>
                    <Button className='bg-black'>
                        <IconBrandGithub />
                        Register
                    </Button>
                </Card.Footer>
            </Card>
        </PlaceContentCenter>
    )
}

export default App
