import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
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
    componentDidMount() {
        this.props.initializeApp()
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
                    <Route path={'/login'} render={() => <Login/>}/>
                    <Route path={'/dialogs'} render={withSuspense(DialogsContainer)}/>
                    <Route path={'/profile/:userId?'} render={withSuspense(ProfileContainer)}/>
                    <Route path={'/users'} render={withSuspense(UsersContainer)}/>
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
        <BrowserRouter>
            <Provider store={store}>
                {/* <React.StrictMode> */}
                <AppContainer/>
                {/* </React.StrictMode> */}
            </Provider>
        </BrowserRouter>
    )
}

export default MainApp
