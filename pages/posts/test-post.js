import React from 'react';
import Link from 'next/link';

export default function TestPost() {
    return (
        <React.Fragment>
            <h1>Test Post</h1>
            <h3><Link href='/' >Return to Homepage</Link></h3>
        </React.Fragment>
    )
}