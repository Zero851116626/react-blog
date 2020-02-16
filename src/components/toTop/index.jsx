import React, {Component} from 'react'
import './index.styl'
class ToTop extends Component{
  clickToTop = ()=>{
    this.props.scrollToTop()
  }
  render(){
    return (
      <div className='to-top' onClick={this.clickToTop}>
        <span className='iconfont icon-fanhuidingbu'></span>
      </div>
    )
  }
}
export default ToTop