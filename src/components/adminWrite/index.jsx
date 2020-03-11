import React, {Component} from 'react'
import './index.styl'
import {Button, Switch, Select} from 'antd'


// import ZyfEditor from '../richTextEditor/index'
import Editor from '../ortherRichText'
import adminService from '@/service/admin'
const { Option } = Select
class AdminWrite extends Component{
  constructor(props){
    super(props)
    this.state = {
      isSetTop : false,
      tagList: [],
      currentTag: {}
    }
  }
  componentDidMount(){
    adminService.getTagList().then(res=>{
      console.log(res)
      this.setState({
        tagList: res.data
      })
    })
  }
  onSwitchChange = ()=>{
    const {isSetTop}  = this.state
    this.setState({
      isSetTop: !isSetTop,
      optionArr: []
    })
  }
  handleChangeTag =(value)=>{
    this.setState({
      currentTag: value
    })
  }
  submitArticle=()=>{
    console.log(this.refs.editor)
    let title = this.refs.editor.state.title.trim()
    let content = this.refs.editor.state.editor.txt.text().trim()
    if (!title) {
      alert ('请输入文章标题')
      return
    }
    if (!content) {
      alert('文章内容不能为空')
      return
    }
    console.log(title, content)
    let articleInfo = {
      title: title,
      content: this.refs.editor.state.editor.txt.html(),
      setTop: this.state.isSetTop,
      tagTypeId: this.state.currentTag.id
    }
    adminService.createArticle(articleInfo).then(res=>{
      console.log(res)
      if (res.status === 200){
        alert('创建成功')
      }
    })
  }
  render(){
    return (
      <div className='c-admin-write'>
        {/* <ZyfEditor></ZyfEditor> */}
        <Editor ref='editor'></Editor>
        <Select style={{ width: 120 }}>
          {
            this.state.tagList.length && this.state.tagList.map((item, index) => {
              return (
                <Option value={item.tagName} key={item._id} onClick={(item)=>{this.handleChangeTag(item)}}>{item.tagName}</Option>
              )
            })
          }
        </Select>
        <Switch checked={this.state.isSetTop} onChange={this.onSwitchChange} />
        <Button type="primary" onClick={this.submitArticle}>提交</Button>
      </div>
    )
  }
}
export default AdminWrite