import React, {Component} from 'react'
import './index.styl'

import Person from '../person/index.jsx'
class Index extends Component{
  state={
    showMenuInfo: false
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        showMenuInfo: true
      })
    }, 500)
  }
  closeMene= ()=>{
    // closeMene
    console.log('close')
    requestAnimationFrame(this.moveMeneInfo)
  }
  moveMeneInfo = ()=>{
    let leftPos = Number.parseInt(this.refs.menuInfo.style.left || 0)
    if (leftPos <= -250) {
      this.setState({
        showMenuInfo: false
      })
      this.props.closeMenu()
      return
    }
    this.refs.menuInfo.style.left = leftPos - 10 + 'px'
    requestAnimationFrame(this.moveMeneInfo)
  }
  stopPropagation = (e) => {
    e.stopPropagation()
  }
  render(){
    return (
      <div className="c-menu" onClick={this.closeMene}>
        {
          !this.state.showMenuInfo &&
          <div className='holder-box'></div>
        }
        {
          this.state.showMenuInfo &&
          <div className='menu-info' ref='menuInfo' onClick={this.stopPropagation}>
            <span className='closeMene' onClick={this.closeMene}>X</span>
            <Person></Person>
          </div>
        }
      </div>
    )
  }
}
export default Index