import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'


import './index.styl'
class NavList extends Component{
  state={
    navList: [
      {
        title: '首页',
        path: '/',
        name: 'home'
      },
      {
        title: '文章',
        path: '/article',
        name: 'article'
      },
      {
        title: '管理',
        path: '/admin',
        name: 'admin'
      },
      {
        title: 'github',
        path: 'https://github.com/Zero851116626',
        name: 'github'
      }
    ]
  }
  jump =(item)=>{
    if (item.name === 'github'){
      const w = window.open()
      w.location.href = 'https://github.com/Zero851116626'
    } else {
      this.props.history.push(item.path)
    }
  }
  render(){
    return (
      <div className='c-nav-list'>
        {this.state.navList.length && this.state.navList.map((item, index)=>{
          return <div className='nav-list' key={item.name} onClick={(e)=>{this.jump(item)}}>{item.title}</div>
        }) }
      </div>
    )
  }
}
export default withRouter(NavList)