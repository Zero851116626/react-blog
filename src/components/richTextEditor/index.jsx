import React, {Component} from 'react'
import './index.styl'

import getUuid from '@/utils/uuid.js'
class ReactTextEdtor extends Component{
  constructor(props){
    super()
    this.state = {
      // 内容数组，item为对象，
      // {
      //   id: getUuid(),
      //   content: '这是第一段内容',
      //   style: {
      //     color: 'red'
      //   }
      // }
      contentArr: [
      ],
      height: 0
    }
    this.props = props
  }
  componentDidMount(){
    let {height} = this.refs.articleContent.getBoundingClientRect()
    this.setState({height})
  }
  chooseOver= (e)=>{
    console.log(this.refs.articleContent.innerHTML)
  }
  clickContent = (e)=>{
    // 做聚焦，
    this.refs.writing.focus()
  }
  clickEdited = (e)=>{
    e.stopPropagation()
    let dom = e.target
    if (dom.contentEditable !== 'true') {
      dom.contentEditable = 'true'
      dom.focus()
      let range = window.getSelection()
      range.selectAllChildren(e.target)
      range.collapseToEnd()
    }
  }
  editedBlur = (e)=>{
    e.stopPropagation()
    e.target.contentEditable = false
  }
  pressEnter = (e, item, index)=>{
    if (e.keyCode !== 13) return
    // 判断在edited 中还是writing中
    e.preventDefault()
    let contentArr = this.state.contentArr
    if (item && item.id) {
      // edited
      let domContent = this.refs['edited_' + index].innerHTML
      item.content = domContent
      contentArr.splice(index,1,item)
      this.setState({contentArr})
    } else {
      // writing
      this.scrollWriting()
      let domContent = this.refs.writing.innerHTML
      let obj = {
        id: getUuid(),
        content: domContent,
        style: {}
      }
      contentArr.push(obj)
      this.refs.writing.innerHTML = ''
      this.setState({contentArr})
    }
  }
  scrollWriting=()=>{
    let offsetTop = this.refs.writing.offsetTop
    if ( offsetTop >= (this.state.height / 2)){
      this.refs.articleContent.scrollTop = offsetTop - this.state.height / 2
    }
  }
  render(){
    return (
      <div className='zyf-editor'>
        <div className='header'>
          <input className='title-input' placeholder='请输入标题'/>
        </div>
        <div className='article-content' ref='articleContent'>
          <div className='content' ref='content' onClick={this.clickContent}>
            {this.state.contentArr.length > 0 && this.state.contentArr.map((item,index)=>{
              return (
                <div className='edited' ref={'edited_'+ index} style={item.style} key={item.id} onClick={this.clickEdited} onBlur={this.editedBlur} onKeyDown={(e)=>{this.pressEnter(e,item,index)}}>{item.content}</div>
              )
            })}
            <div className='writing' ref='writing' contentEditable onKeyDown={(e)=>{this.pressEnter(e)}}></div>
          </div>
        </div>
      </div>
    )
  }
}
export default ReactTextEdtor