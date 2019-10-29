import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useBack } from '../hook/index';
import {connect} from 'react-redux';

function getUser(path,user){
    if(path === "/login"){
        return ""
    }
    if(user){
        return (<span className="header-btn-right">
                <span 
                   
                >{user}</span>
    
            </span>);
    }
    return <Link className="user" to="/login" />;
}
function Header(props) {
    const back = useBack(props.history);
    const path =props.location.pathname;
    const {user} = props;
    console.log(props)
    return (
        <header id="header">
            <nav className="menu">
                {path === '/login' ?
                    <a 
                    className="header-btn-left iconfont icon-back"
                    onClick={()=>{
                        back()
                    }}
                    ></a> :
                    <a className="header-btn-left iconfont icon-hycaidan"></a>
                }
            </nav>
            <h1 className="logo">miaov.com</h1>
            {getUser(path,user)}
        </header>
    )
}
export default connect(state=>{return {user: state.getUser}})(withRouter(Header));