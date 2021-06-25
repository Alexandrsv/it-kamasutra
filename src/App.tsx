import './App.css';
import {HashRouter, Link, Route, Switch, withRouter} from "react-router-dom";
import {LoginPage} from "./components/Login/Login";
import React, {Component} from "react";
import {logout} from "./redux/auth-reducer";
import {connect, Provider} from "react-redux";
import {compose} from 'redux';
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store, {AppStateType} from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";
import {UsersPage} from './components/Users/UsersContainer';
import 'antd/dist/antd.css'
import {Breadcrumb, Button, Layout, Menu} from "antd";
import {LaptopOutlined, NotificationOutlined, UserOutlined} from '@ant-design/icons';
import Friends from "./components/Navbar/Friends/Friends";
import AppHeader from "./components/Header/Header";

const {SubMenu} = Menu;
const {Header, Content, Footer, Sider} = Layout;


const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))
const ChatPage = React.lazy(() => import("./pages/Chat/ChatPage"))

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = { initializeApp: () => void }

class App extends Component<MapPropsType & DispatchPropsType> {

    catchAllUnhandledErrors(promise: PromiseRejectionEvent) {
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

            <Layout>
                <Header className="header">
                    <div className="logo"/>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        {/*<Menu.Item key="1">nav 1</Menu.Item>*/}
                    </Menu>
                    <AppHeader/>
                </Header>
                <Content style={{padding: '0 50px'}}>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Layout className="site-layout-background" style={{padding: '24px 0'}}>
                        <Sider className="site-layout-background" width={200}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{height: '100%'}}
                            >

                                <SubMenu key="sub1" icon={<UserOutlined/>} title="Мой профиль">
                                    <Menu.Item key="1"><Link to={'/profile'}>Профиль</Link></Menu.Item>
                                    <Menu.Item key="2"><Link to={'/dialogs'}>Диалоги</Link></Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" icon={<LaptopOutlined/>} title="Разработчики">
                                    <Menu.Item key="5"><Link to={'/users'}>Профили</Link></Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub3" icon={<LaptopOutlined/>} title="Чат">
                                    <Menu.Item key="6"><Link to={'/chat'}>Чат</Link></Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub4" icon={<NotificationOutlined/>} title="404">
                                    <Menu.Item key="9"><Link to={'/news'}>News</Link></Menu.Item>
                                    <Menu.Item key="10"><Link to={'/music'}>Music</Link></Menu.Item>
                                    <Menu.Item key="11"><Link to={'/settings'}>Settings</Link></Menu.Item>
                                </SubMenu>
                                <Friends/>
                            </Menu>
                        </Sider>
                        <Content style={{padding: '0 24px', minHeight: 280}}>
                            <Switch>
                                <Route exact path={'/'} render={withSuspense<any>(ProfileContainer)}/>
                                <Route path={'/login'} render={() => <LoginPage/>}/>
                                <Route path={'/chat'} render={withSuspense(ChatPage)}/>
                                <Route path={'/dialogs'} render={withSuspense<any>(DialogsContainer)}/>
                                <Route path={'/profile/:userId?'} render={withSuspense<any>(ProfileContainer)}/>
                                <Route path={'/users'} render={() => <UsersPage pageTitle={'Samurai'}/>}/>
                                <Route path={'*'} render={() => <div>404 <Button type={"primary"}>OK</Button></div>}/>
                            </Switch>
                        </Content>
                    </Layout>
                </Content>
                <Footer style={{textAlign: 'center'}}>Samurai Social Network 2021</Footer>
            </Layout>
        );
    }
}

let mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized,

})

let AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp, logout},
    ))(App);

let MainApp: React.FC = () => {
    return (
        <HashRouter>
            <Provider store={store}>
                {/*<React.StrictMode>*/}
                    <AppContainer/>
                {/*</React.StrictMode>*/}
            </Provider>
        </HashRouter>
    )
}

export default MainApp
