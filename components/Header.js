import React from 'react'
import { Toolbar } from '@material-ui/core'
import { Box } from '@material-ui/core';
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Header() {

    return (
        <Toolbar >
            <Box className={styles.header} >
                <Box >
                    <h2>
                        Attabuoy and Kel 
                    </h2>
                </Box>
                <Box>
                    <h3>
                        <Link href='/about'>About</Link>
                    </h3>
                </Box>
                <Box>
                    <h3>
                        <Link href='/all-posts'>Blog</Link>
                    </h3>
                </Box>
            </Box>
        </Toolbar>
    )
}
