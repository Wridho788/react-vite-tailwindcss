import React from 'react'
import clsx from 'clsx'

const Button = (props) => {
    // ** default value props
    const { className = 'bg-black', text, children } = props
    return (
        <button
            {...props}
            className={clsx(className, '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 font-medium whitespace-nowrap inline-flex justify-center items-center gap-x-2 text-white px-4 h-10 rounded')}>
            {text || children}
        </button>
    )
}

export default Button
