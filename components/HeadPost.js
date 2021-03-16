import React from 'react'

export default function HeadPost({ meta }) {
    return (
        <>
            <h2>{meta.title}</h2>
            <div>
                <h4>
                    {meta.description}
                </h4>
            </div>
        </>
    )
}


