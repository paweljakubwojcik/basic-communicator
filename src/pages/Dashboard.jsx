import React, { useContext } from 'react'
import useAuthListener from '../hooks/useAuthListener'
import { FirebaseContext } from '../context/firebase'

import { AppBar, Typography, Button } from '@material-ui/core'

export default function Dashboard() {
    const { user } = useAuthListener()
    const firebase = useContext(FirebaseContext)

    const signOut = () => {
        firebase.auth().signOut()
    }

    return (
        <>
            <AppBar position="fixed" style={{ flexDirection: 'row', padding: '0 1em' }}>
                <Typography variant="h5">Communicator</Typography>
                <Button color="inherit" style={{ marginLeft: 'auto' }} onClick={signOut}>
                    Logout
                </Button>
            </AppBar>
            <div>{`Hello ${user?.displayName}`}</div>
        </>
    )
}
