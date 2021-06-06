import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {HashRouter, Route, Switch, withRouter} from "react-router-dom";
import HeaderContainer from './components/Header/HeaderContainer';
import Login from "./components/Login/Login";
import React, {Component} from "react";
import {logout} from "./redux/auth-reducer";
import {connect, Provider} from "react-redux";
import {compose} from 'redux';
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"))


class App extends Component {

    catchAllUnhandledErrors(promise) {
        console.log('Some error occured', promise.reason)
    }

    componentDidMount() {
        this.props.initializeApp()
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className={'app-wrapper'}>
                <HeaderContainer/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Switch>
                        <Route exact path={'/'} render={withSuspense(ProfileContainer)}/>
                        <Route path={'/login'} render={() => <Login/>}/>
                        <Route path={'/dialogs'} render={withSuspense(DialogsContainer)}/>
                        <Route path={'/profile/:userId?'} render={withSuspense(ProfileContainer)}/>
                        <Route path={'/users'} render={withSuspense(()=><UsersContainer pageTitle={'Samurai'}/>)}/>
                        <Route path={'*'} render={() => <div>404</div>}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    initialized: state.app.initialized,

})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp, logout},
    ))(App);

let MainApp = () => {
    return (
        <HashRouter>
            <Provider store={store}>
                {/* <React.StrictMode> */}
                <AppContainer/>
                {/* </React.StrictMode> */}
            </Provider>
        </HashRouter>
    )
}

export default MainApp
