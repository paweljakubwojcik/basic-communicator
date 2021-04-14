import React from 'react'
import { Button, FormControl, Container, FilledInput } from '@material-ui/core'

export default function Form() {
    return (
        <FormControl>
            <Container>
                <FilledInput multiline={true} />
                <Button color="primary" variant="contained" size="small">
                    Send
                </Button>
            </Container>
        </FormControl>
    )
}
