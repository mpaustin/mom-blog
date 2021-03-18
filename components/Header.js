import React from 'react'
import { Toolbar } from '@material-ui/core'
import { Box } from '@material-ui/core';
import styles from '../styles/Home.module.css'

export default function Header() {

    return (
        <Toolbar >
            <Box className={styles.header}
            // width='100%' display='flex' flexDirection='row' justifyContent='space-between' 
            >
                <Box >
                    <h2>
                        Attabuoy and Kel 
                    </h2>
                </Box>
                <Box>
                    <h3>
                        <a href='/about'>About</a>
                    </h3>
                </Box>
            </Box>
        </Toolbar>
    )
}
