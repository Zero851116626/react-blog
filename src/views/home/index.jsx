import React, {Component} from 'react'
import './index.styl'
// import _ from 'lodash'
// import transition from '@/utils/transition.js'
import Head from '@/components/head/index.jsx'
import Body from '@/components/body/index.jsx'
import Menu from '@/components/menu/index.jsx'
import ToTop from '@/components/toTop/index.jsx'
import _ from 'lodash'

class Home extends Component{
  state = {
    currentScrollTop: 0,
    canScroll: true,
    showMenu: false,
    muneColor: '#fff',
    masterInfo: {}
  }
  componentDidMount(){
    
  }
  // 滚动位置变化
  adjustScrollTop = ()=>{
    console.log('滚动事件')
    requestAnimationFrame(this.scrollToContent)
  }
  scrollToContent = ()=>{
    if (this.refs.index.scrollTop >= window.innerHeight) {
      this.refs.index.scrollTop = window.innerHeight
      return
    }
    if (this.state.currentScrollTop === this.refs.index.scrollTop && this.state.currentScrollTop) {
      return
    }
    this.setState({
      currentScrollTop: this.refs.index.scrollTop
    })
    this.refs.index.scrollTop += 10
    requestAnimationFrame(this.scrollToContent)
  }
  scrollToTop = ()=>{
    requestAnimationFrame(this.scrollToTopFrame)
  }
  scrollToTopFrame = ()=>{
    if (this.refs.index.scrollTop <= 0) {
      this.refs.index.scrollTop = 0
      return
    }
    this.refs.index.scrollTop -= 40
    requestAnimationFrame(this.scrollToTopFrame)
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
  whenScroll= ()=>{
    let value = this.refs.index.scrollTop
    if (value >= window.innerHeight) {
      if (this.state.muneColor === '#000') return
      this.setState({
        muneColor: '#000'
      })
    } else {
      if (this.state.muneColor === '#fff') return
      this.setState({
        muneColor: '#fff'
      })
    }
  }
  render(){
    return (
      <div className="v-index" ref='index' onScroll={_.throttle(this.whenScroll, 100)}>
        {/* 右侧小功能按钮 */}
        <ToTop scrollToTop={this.scrollToTop}></ToTop>

        {/* 欢迎页组件 */}
        <Head adjustScrollTop={this.adjustScrollTop}></Head>
        {/* 内容主题 */}
        <Body></Body>
        {/* 个人中心组件 */}
        <div className='menu-btn' onClick={this.showMene} style={{'color': this.state.muneColor, 'borderColor': this.state.muneColor}}>
          <span className="iconfont icon-option2"></span>
          <span className='words'>MENU</span>
        </div>
        {this.state.showMene && <Menu closeMenu={this.closeMenu}></Menu>}
      </div>
    )
  }
}
export default Home