import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { registerMicroApps, start } from 'qiankun'
import 'antd/dist/antd.css' // or 'antd/dist/antd.less'
import { BrowserRouter as Router } from 'react-router-dom'

registerMicroApps([
  {
    name: 'vueApp',
    entry: '//localhost:8080',
    container: '#container',
    activeRule: '/app-vue',
  },
  {
    name: 'reactApp',
    entry: '//localhost:4000',
    container: '#container',
    activeRule: '/app-react',
  },
])

// 启动 qiankun
start()

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
