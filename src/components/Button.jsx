import React from 'react'
import clsx from 'clsx'

const Button = (props) => {
    // ** default value props
    const { className = 'bg-blue-600', text, children } = props
    return (
        <button
            {...props}
            className={clsx(className, '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 flex items-center gap-x-2 text-white px-4 py-2 rounded')}>
            {text || children}
        </button>
    )
}

export default Button
