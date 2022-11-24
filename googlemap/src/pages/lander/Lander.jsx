import { makeStyles } from '@mui/styles'
import Box from '@mui/material/Box';
import React, { useState } from 'react'
import SignUp from '../../components/signup/SignUp';
import SignIn from '../../components/signin/SignIn';

const useStyles = makeStyles({
    container3: {
        width: '100vw',
        height: '100vh',
        border: '0px solid red',
    }
})

function Lander() {
    const classes = useStyles()

    const [toggle, setToggle] = useState(false)

    const listenTologin1 = () => {
        setToggle(true)
    }
    const listenTosignup1 = () => {
        setToggle(false)
    }

    return (
        <div>
            <Box className={classes.container3}>
                <div>
                    {
                        toggle ? <SignUp listenTosignup1={listenTosignup1} /> : <SignIn listenTologin1={listenTologin1} />
                    }
                </div>
            </Box>
        </div>
    )
}

export default Lander
