import { IconBrandTwitter, IconBrandFacebook, IconBrandGithub } from '@tabler/icons-react'
import clsx from 'clsx'

function App() {

    const type = 'submit'
    const onClick = () => console.log('login tesla')

    return (
        <div className='bg-slate-800 grid place-content-center min-h-screen'>
            <div className="flex gap-x-2">
                <Button type="submit" onClick={() => console.log('register')}>
                    <IconBrandFacebook />
                    Login
                </Button>
                <Button className='bg-sky-600' {...{ type, onClick }}>
                    <IconBrandTwitter />
                    Login
                </Button>
                <Button className='bg-black'>
                    <IconBrandGithub />
                    Login
                </Button>
            </div>

        </div>
    )
}

export default App


function Button(props) {
    // ** default value props
    const { className = 'bg-blue-600', text, children } = props
    return (
        <button {...props} className={clsx(className, '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 flex items-center gap-x-2 text-white px-4 py-2 rounded')}>
            {text || children}
        </button>
    )
}