import React from 'react'

import { createMuiTheme } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import { bigMargin, defaultMargin } from './commonStyles'

const theme = createMuiTheme({
    overrides: {
        MuiButton: {
            root: {
                ...defaultMargin,
            },
        },
        MuiTypography: {
            root: {
                ...bigMargin,
            },
        },
    },
})

export default function MuiThemeProvider({ children }) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
