import React, {FC} from 'react';
import {Link, NavLink} from 'react-router-dom';
import s from './Header.module.css';
import {Avatar, Button, Col, Layout, Row} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentUserId, selectCurrentUserLogin, selectIsAuth} from "../../redux/auth-selectors";
import {logout} from "../../redux/auth-reducer";

type PropsType = {
}

const AppHeader:FC<PropsType> = (props) => {
    const {Header} = Layout
    const isAuth = useSelector(selectIsAuth)
    const login = useSelector(selectCurrentUserLogin)
    const userId = useSelector(selectCurrentUserId)

    const dispatch = useDispatch()

    const logoutCallback =() => {
        dispatch(logout())
    }

    return (
        <Header className={s.header}>

            <Row>
                <Col span={18}>
                    <img alt='logo' src={'https://svgx.ru/svg/1775543.svg'}/>
                </Col>
                <Col span={6}>
                    <Avatar style={{backgroundColor: '#87d068'}} icon={<UserOutlined/>}/>
                    {isAuth
                        ? <Link to={`/profile/${userId}`}>
                            {login}
                            <Button onClick={logoutCallback}>Logout</Button>
                        </Link>
                        : <Link to={'/login'}>Login</Link>
                    }
                </Col>
            </Row>
        </Header>

    );
};

export default AppHeader;



// <div className={s.loginBlock}>
// {/*    {props.isAuth*/}
// {/*        ? <NavLink to={`/profile/${props.userId}`}>*/}
// {/*            {props.login}*/}
// {/*            <button onClick={props.logout}>Logout</button>*/}
// {/*        </NavLink>*/}
// {/*        : <NavLink to={'/login'}>Login</NavLink>*/}
// {/*    }*/}
// {/*</div>*/}
