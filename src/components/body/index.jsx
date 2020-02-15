import React, {Component} from 'react'
import './index.styl'
class Index extends Component{
  render(){
    return (
      <div className='c-content'>
        <div className='article-list'>
          {/* 单片文章组件 */}
          <div>文章1</div>
          <div>文章2</div>
        </div>
      </div>
    )
  }
}
export default Index