import React, {Component} from 'react'
import './index.styl'

class Head extends Component{
  state= {
    bgImgUrl: '123',
    title: '张一帆博客',
    words: {
      content: '最美的不是下雨天，是曾与你躲过雨的屋檐',
      author: '周杰伦'
    },
  }
  componentDidMount(){
    this.setState({
      bgImgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1581759527793&di=c92c79a4af71adb2eff93ab1141f0c1f&imgtype=0&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2F201503%2F19%2F211608ztcq7higicydxhsy.jpg'
    })
  }
  clickArrow = ()=>{
    this.props.adjustScrollTop()
  }
  render(){
    return (
      <div className="c-head" style={{'backgroundImage': `url(${this.state.bgImgUrl})`}}>
        <div className="block">
          <div className="title">{this.state.title}</div>
          {this.state.words.content && <div className="content">{this.state.words.content}</div>}
          {this.state.words.author && <div className='author'>{this.state.words.author}</div>}
        </div>
        <span className="bottom-arrow iconfont icon-jiantouxia" onClick={this.clickArrow}></span>
      </div>
    )
  }
}
export default Head