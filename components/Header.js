import React from 'react'
import { Toolbar } from '@material-ui/core'
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    header: {
        backgroundColor: '#808080',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: '5%',
    },
})


export default function Header() {

    const classes = useStyles();

    return (
        <Toolbar >
            <Box className={classes.header}
            // width='100%' display='flex' flexDirection='row' justifyContent='space-between' 
            >
                <Box >
                    <h2>
                        Attabuoy and Kel 
                    </h2>
                </Box>
                <Box>
                    <h3>
                        About
                    </h3>
                </Box>
            </Box>
        </Toolbar>
    )
}
