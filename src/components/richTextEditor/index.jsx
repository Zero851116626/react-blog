import React, {Component} from 'react'
import './index.styl'

import getUuid from '@/utils/uuid.js'
const fontStyle = [
  {
    name: 'H1',
    style: {
      fontSize: '2em',
      fontWeight: 'bold'
    }
  },
  {
    name: 'H2',
    style: {
      fontSize: '1.5em',
      fontWeight: 'bold'
    }
  }
]
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
      // 默认样式都用css直接控制
      // }
      contentArr: [
      ],
      height: 0,
      currentDom: ''
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
    this.setState({
      currentDom: this.refs.writing
    })
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
      this.setState({
        currentDom: dom
      })
    }
  }
  editedBlur = (e)=>{
    e.stopPropagation()
    e.target.contentEditable = false
  }
  pressKey = (e, item, index)=>{
    if (e.keyCode === 13) {
      // 判断在edited 中还是writing中
      e.preventDefault()
      if (item && item.id) {
        // edited
        this.dealEdited(item, index)
      } else {
        // writing
        this.scrollWriting()
        this.dealWriting()
      }
    } else if (e.keyCode === 8){
      // 退格键
      if (e.target.innerHTML) return
      // 如果退完了
      if (this.state.contentArr.length === 0) return
      if (item && item.id){
        let arr = this.state.contentArr
        arr.splice(index,1)
        this.setState({
          contentArr: arr
        })
        setTimeout(()=>{
          let dom = this.refs['edited_' + (index - 1)]
          if (dom){
            dom.contentEditable = true
            dom.focus()
          }
        }, 0)
      }
    }
  }
  scrollWriting=()=>{
    let offsetTop = this.refs.writing.offsetTop
    if ( offsetTop >= (this.state.height / 2)){
      this.refs.articleContent.scrollTop = offsetTop - this.state.height / 2
    }
  }
  dealWriting=()=>{
    let contentArr = this.state.contentArr
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
  writingBlur=()=>{
    // 区分失焦情况
    let domContent = this.refs.writing.innerHTML.trim()
    // 如果没内容，就不新建行了
    if (!domContent) return
    this.dealWriting()
  }
  dealEdited = (item, index) =>{
    let contentArr = this.state.contentArr
    let domContent = this.refs['edited_' + index].innerHTML
    item.content = domContent
    contentArr.splice(index,1,item)
    this.refs['edited_' + index].blur()
    this.setState({contentArr})
  }
  editedBlur = (item, index)=>{
    this.dealEdited(item, index)
  }
  changeFontSize=(item)=>{
    // 为当前选中的节点增加样式
    Object.assign(this.state.currentDom.style, item.style)
  }
  render(){
    return (
      <div className='zyf-editor'>
        <div className='header'>
          <input className='title-input' placeholder='请输入标题'/>
        </div>
        <div className='tools'>
          <div className='tool font-size'>
            {
              fontStyle.map((item, index)=>{
                return (
                  <span onClick={()=>{this.changeFontSize(item)}} key={index}>{item.name}</span>
                )
              })
            }
          </div>
        </div>
        <div className='article-content' ref='articleContent'>
          <div className='content' ref='content' onClick={this.clickContent}>
            {this.state.contentArr.length > 0 && this.state.contentArr.map((item,index)=>{
              return (
                <div 
                className='edited' 
                ref={'edited_'+ index} 
                style={item.style} 
                key={item.id} 
                onClick={this.clickEdited} 
                onBlur={()=>{this.editedBlur(item, index)}} 
                onKeyDown={(e)=>{this.pressKey(e,item,index)}} 
                dangerouslySetInnerHTML={{'__html': item.content}}></div>
              )
            })}
            <div className='writing' ref='writing' contentEditable onKeyDown={(e)=>{this.pressKey(e)}} onBlur={this.writingBlur}></div>
          </div>
        </div>
      </div>
    )
  }
}
export default ReactTextEdtor