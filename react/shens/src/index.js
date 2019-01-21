import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Route,BrowserRouter,Redirect} from 'react-router-dom';
import {combineReducers} from 'redux'

import {Home,homeReduce} from './component/home'

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
  <BrowserRouter basename='/'>
    <div>
      <div>
        <Route path='/' exact render={()=> (<Redirect to='/index'/>)}/>
        <Route path='/index' component={App}></Route>
        <Route path='/home' component={Home}></Route>
      </div>
      <div>
        <div>关于我们联系我们</div>
        <div>Copyright</div>
      </div>
      <ul>
        <li>首页</li>
        <li>咨询</li>
        <li>找军师</li>
        <li>好运馆</li>
      </ul>
    </div>     
  </BrowserRouter>
, document.getElementById('root'));


const reducers = combineReducers({
  homeReduce,
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
export default reducers;