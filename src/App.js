import React, { Component } from 'react'
// import Header from './components/header'
import Main from './components/main'
// import Footer from './components/footer'
import Goods from './components/goods'
import Login from './components/login'
import Reg from './components/reg'
import {withRouter,Switch,Route} from 'react-router-dom'
@withRouter 
class App extends Component{
  render(){
    return <div className='all-box'>
      <Switch>
        <Route path="/goods" component={Goods} />
        <Route path="/login" component={Login} />
        <Route path="/reg" component={Reg} />
        <Main></Main>
      </Switch>
      
    </div>
  }
}

export default App;
