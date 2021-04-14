import React, { useContext } from 'react'

import { FirebaseContext } from '../context/firebase'

import { Button, Typography, Container } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { flexCenter } from '../styles/commonStyles'

export default function SignIn() {
    const firebase = useContext(FirebaseContext)
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(provider)
    }

    return (
        <>
            <Container style={{ ...flexCenter, flexDirection: 'column' }}>
                <Typography variant="h3">Sign In with your google account</Typography>

                <Button
                    startIcon={<FontAwesomeIcon icon={faGoogle} />}
                    color="primary"
                    variant="contained"
                    size="large"
                    onClick={signInWithGoogle}
                >
                    Sign In
                </Button>
            </Container>
        </>
    )
}
