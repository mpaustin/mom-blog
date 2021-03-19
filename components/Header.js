import React from 'react'
import { Toolbar } from '@material-ui/core'
import { Box } from '@material-ui/core';
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Header() {

    return (
        <Toolbar >
            <Box className={styles.header} >
                <Box className={styles.headerTitle} >
                    <h2>
                        <Link href='/'>Attabuoy and Kel </Link>
                    </h2>
                </Box>
                <Box className={styles.headerItems} >
                    <h3>
                        <Link href='/about'>About</Link>
                    </h3>
                </Box>
                <Box className={styles.headerItems} >
                    <h3>
                        <Link href='/all-posts'>Blog</Link>
                    </h3>
                </Box>
            </Box>
        </Toolbar>
    )
}
