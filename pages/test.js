import React, { Component } from 'react'
import { create_room, delete_room, join_room } from '../services/room';
import { google_login, logout } from '../services/auth';
import isLogged from '../helpers/isLogged';


export default class test extends Component {
    constructor(){
        super();
        this.state={
            isLogged: false,
            loggedName: null
        }
    }
    componentDidMount() {
        isLogged((u)=>{
            if(u){
                this.setState({isLogged: true, loggedName: u.displayName});
            }
        })        
    }
    render() {
        return (
            <div>
                {this.state.isLogged ? "logged in as " + this.state.loggedName : "not logged"}
                <button onClick={create_room}>create_room</button>
                <button onClick={delete_room}>delete_room</button>
                <button onClick={join_room.bind("test")}>join_room</button>
                <button onClick={google_login}>google_login</button>
                <button onClick={logout}>logout</button>
                <style jsx>{`
                text-align: center;
                margin: 30px auto;
                display: flex;
                flex-direction: column;
                color: #fff;
                button{
                    color: #000;
                    font-size: 1.2em;
                    cursor: pointer;
                }
                `}</style>
            </div>
        )
    }
}
