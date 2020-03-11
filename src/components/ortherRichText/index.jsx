import React, {Component} from 'react'

import Editor from 'wangeditor'
class RichTextEdit extends Component{
  constructor(props){
    super(props)
    this.state = {
      title: '',
      editor: ''
    }
  }
  componentDidMount(){
    var editor = new Editor('.editor')
    editor.create()
    this.setState({
      editor
    })
  }
  inputTitle = (e)=>{
    console.log(e.target.value)
    this.setState({
      title: e.target.value
    })
  }
  render(){
    return (
      <div className='c-editor-wrap'>
        <div className='header'>
          <input className='title-input' placeholder='请输入标题' onChange={(e)=>{this.inputTitle(e)}}/>
        </div>
        <div className='editor'></div>
      </div>
    )
  }
}
export default RichTextEdit