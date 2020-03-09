import React, { Component } from 'react'
import {Route,Switch,Redirect} from 'react-router-dom' 
import Home from '../home'
import Vip from '../vip'
import List from '../list'
import Mine from '../mine'
import Login from '../login'
import Reg from '../reg'
// import Goods from '../goods'
import Header from '../header'
import Footer from '../footer'
import './main.scss'
export default class Main extends Component {
    render() {
        
        return (
            <div className='main'>
                <Header />
                <div className='main-box'>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/reg" component={Reg} />
                    {/* <Route path="/goods" component={Goods} /> */}
                    <Route path="/home" component={Home} />
                    <Route path="/vip" component={Vip} />
                    <Route path="/list" component={List} />
                    <Route path="/mine" component={Mine} />
                    <Redirect from="/" to="/home" exact />
                </Switch>
                </div>
                <Footer />
            </div>
        )
    }
}
