import React, {Component} from 'react'
import './index.styl'
// import _ from 'lodash'
// import transition from '@/utils/transition.js'
import Head from '@/components/head/index.jsx'
import Body from '@/components/body/index.jsx'
import Menu from '@/components/menu/index.jsx'
class Index extends Component{
  state = {
    currentScrollTop: 0,
    canScroll: true,
    showMenu: false
  }
  componentDidMount(){
    
  }
  // 动画特效，回头再加
  // whenScroll = (e)=>{
  //   let scrollTop = this.refs.index.scrollTop
  //   if (scrollTop < window.innerHeight) {
  //     this.setState({
  //       canScroll: true
  //     })
  //   } else {
  //     this.setState({
  //       canScroll: false
  //     })
  //   }
  //   // 在首屏，且向下滚动
  //   if (scrollTop < window.innerHeight && scrollTop - this.state.currentScrollTop > 0) {
  //     // 触发一个动画
  //     transition(this.refs.index, 'scrollTop', 1000, window.innerHeight)
  //   }
  //   this.setState({
  //     currentScrollTop: scrollTop
  //   })
  // }
  // 滚动位置变化
  adjustScrollTop = ()=>{
    console.log(this.refs)
    this.refs.index.scrollTop = window.innerHeight
  }
  showMene = ()=>{
    console.log('展开组件')
    this.setState({
      showMene: true
    })
  }
  closeMenu = ()=>{
    this.setState({
      showMene: false
    })
  }
  render(){
    return (
      // onScroll={_.throttle(this.whenScroll, 200)}
      <div className="v-index" ref='index'>
        {/* 欢迎页组件 */}
        <Head adjustScrollTop={this.adjustScrollTop}></Head>
        {/* 内容主题 */}
        <Body></Body>
        {/* 个人中心组件 */}
        <div className='menu-btn' onClick={this.showMene}>
          <span className="iconfont icon-option2"></span>
          <span className='words'>MENU</span>
        </div>
        {this.state.showMene && <Menu closeMenu={this.closeMenu}></Menu>}
      </div>
    )
  }
}
export default Index