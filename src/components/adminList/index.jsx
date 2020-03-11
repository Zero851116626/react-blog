import React, {Component} from 'react'
import './index.styl'
import adminService from '@/service/admin'
import moment from 'moment'
import {Button, Tag, Modal, Input} from 'antd'
class AdminList extends Component{
  constructor(props){
    super()
    this.state = {
      artileList: [],
      tagList: [],
      showModel: false,
      newTagName: '',
      newTagColor: ''
    }
  }
  componentDidMount(){
    adminService.getArticleList().then(res=>{
      console.log(res.data)
      this.setState({
        artileList: res.data
      })
    })
    this.getTagList()
  }
  getTagList=()=>{
    adminService.getTagList().then(res=>{
      this.setState({
        tagList: res.data
      })
    })
  }
  dealTime=(str)=>{
    let time = new Date(str).getTime()
    return moment(time).format('YYYY-MM-DD hh:mm:ss')
  }
  addNewTag=()=>{
    this.setState({
      showModel: true
    })
  }
  handleModelOk=()=>{
    console.log('提交新标签')
    adminService.createNewTag(this.state.newTagName, this.state.newTagColor).then((res)=>{
      if(res.status === 200) {
        this.getTagList()
        this.setState({
          showModel: false,
          newTagName: '',
          newTagColor: ''
        })
      } else if (res.status === 0) {
        alert(res.msg)
      }
    })
  }
  handleModelCancel = ()=>{
    console.log('关闭')
    this.setState({
      showModel: false
    })
  }
  changeNewTagName=(e)=>{
    this.setState({
      newTagName: e.target.value
    })
  }
  changeTagColor=(e)=>{
    this.setState({
      newTagColor: e.target.value
    })
  }
  deleteTag=(e, item)=>{
    e.preventDefault();
    console.log(e)
    console.log(item)
    console.log('删除标签会解除标签与文章的关联，确认删除？')
    // 第二期做
  }
  render(){
    return (
      <div className='c-article-list'>
        <div className='left-list'>
        {
          this.state.artileList.length && this.state.artileList.map((item, index)=>{
            return (
            <div className='item' key={item._id}><span>{item.title}</span><span className='time'>{this.dealTime(item.createTime)}</span></div>
            )
          })
        }
        </div>
        <div className='right-list'>
          <div className='tagChose'>
            <Button type="primary" onClick={this.addNewTag}>新增标签</Button>
            <div className='tag-list'>
              {
                this.state.tagList.length && this.state.tagList.map((item, index)=>{
                  return (
                    <Tag className='tag-item' key={item._id} color={item.tagColor} closable onClose={(e)=>{this.deleteTag(e, item)}}>{item.tagName}</Tag>
                  )
                })  
              }
            </div>
          </div>
        </div>
        <Modal
          title="创建新标签"
          visible={this.state.showModel}
          onOk={this.handleModelOk}
          onCancel={this.handleModelCancel}
        >
          <Input value={this.state.newTagName} placeholder='请输入标签名' onInput={(e)=>{this.changeNewTagName(e)}}></Input>
          <Input value={this.state.newTagColor} placeholder='请输入颜色十六进制编码' onInput={(e)=>{this.changeTagColor(e)}}></Input>
        </Modal>
      </div>
    )
  }
}
export default AdminList