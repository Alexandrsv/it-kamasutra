import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/profile'} component={(props)=><Profile {...props} text={'123123123'}/>}/>
                    <Route path={'/dialogs'} component={Dialogs}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
