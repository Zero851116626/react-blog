import React, {Component} from 'react'
import './index.styl'
class Index extends Component{
  state={
    userName: '张一帆',
    userWords: '跃马扬鞭，坚韧耐操',
    userNum: '3',
    bgImage: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3570850816,1571526185&fm=26&gp=0.jpg'
  }
  render(){
    return (
      <div className='c-person-info' style={{'backgroundImage': `url(${this.state.bgImage})`}}>
        <img className="user-pic" src={this.props.masterInfo.img || ''} alt=""  />
        <div className='user-info'>
          <div className='user-name'>{this.props.masterInfo.name}</div>
          <div className='user-words'>{this.props.masterInfo.sign}</div>
          <div className='user-num'>文章总数: {this.state.userNum}</div>
        </div>
      </div>
    )
  }
}
export default Index