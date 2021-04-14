import SignIn from './pages/SignIn'
import ThemeProvider from './styles/MuiThemeProvider'
import { firebase } from './services/firebase'
import { FirebaseContext } from './context/firebase'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { IsUserRedirect, PrivateRoute } from './helpers/routes'

function App() {
    return (
        <ThemeProvider>
            <div className="body-wrapper">
                <Router>
                    <Switch>
                        <IsUserRedirect loggedInPath={'/'} path={'/SignIn'}>
                            <SignIn />
                        </IsUserRedirect>
                        <PrivateRoute path={'/'}>
                            <div>Dashboard</div>
                        </PrivateRoute>
                    </Switch>
                </Router>
            </div>
        </ThemeProvider>
    )
}

export default function AppWithProvider() {
    return (
        <FirebaseContext.Provider value={firebase}>
            <App />
        </FirebaseContext.Provider>
    )
}
