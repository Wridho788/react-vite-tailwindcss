import PlaceContentCenter from './components/PlaceContentCenter'
import Button from './components/Button'
import Card from './components/Card'
import { IconBrandGithub } from '@tabler/icons-react'
import Input from './components/Input'
import Label from './components/Label'
import { useState } from 'react'

const App = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
    })

    function onChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value })
    }
    return (
        <PlaceContentCenter>
            <Card>
                <Card.Title>Sign Up for new Account!</Card.Title>
                <Card.Body>
                    <div className='mb-5 border rounded-lg p-4'>
                        <p>Name: {form.name || '-------'}</p>
                        <p>Email: {form.email || '-------'}</p>
                    </div>

                    <div className='mb-6'>
                        <Label htmlFor='name' value='name'>
                            Name
                        </Label>
                        <Input onChange={onChange} id='name' name='name' />
                    </div>
                    <div className='mb-6'>
                        <Label htmlFor='email' value='email'>
                            Email
                        </Label>
                        <Input onChange={onChange} id='email' name='email' />
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
