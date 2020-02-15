import React, {Component} from 'react'
import './index.styl'
class Index extends Component{
  state={
    showMenuInfo: false
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        showMenuInfo: true
      })
    }, 1000)
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
  render(){
    return (
      <div className="c-menu">
        {
          !this.state.showMenuInfo &&
          <div className='holder-box'></div>
        }
        {
          this.state.showMenuInfo &&
          <div className='menu-info' ref='menuInfo'>
            菜单内容
            <span className='closeMene' onClick={this.closeMene}>close</span>
          </div>
        }
      </div>
    )
  }
}
export default Index