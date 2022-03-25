import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { registerMicroApps, start } from 'qiankun'
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
