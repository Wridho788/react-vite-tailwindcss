import { IconBrandTwitter, IconBrandFacebook, IconBrandGithub } from '@tabler/icons-react'
import Button from './components/Button'
import Card from './components/Card'
const App = () => {
    return (
        <div className='bg-slate-100 text-slate-800 tracking-tighter flex items-center justify-center antialiased min-h-screen'>
            <div className='max-w-md w-full'>
                <Card>
                    <Card.Title>Hello World</Card.Title>
                    <Card.Body>
                        {' '}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet asperiores voluptas quos dolores delectus accusamus
                        distinctio rerum praesentium, commodi assumenda excepturi suscipit cupiditate dolorem nisi reiciendis repellendus facere,
                        accusantium odit?{' '}
                    </Card.Body>
                    <Card.Footer>
                        <Button>Register</Button>
                    </Card.Footer>
                </Card>
            </div>
        </div>
    )
}

export default App
