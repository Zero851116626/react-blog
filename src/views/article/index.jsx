import React, {Component} from 'react'

import './index.styl'

import Menu from '@/components/menu/index.jsx'
class Article extends Component{
  state= {
    showMene: false,
    articleList: [
      {
        years: 2020,
        list: [
          {
            title: '第一篇文章第一篇文章第一篇文章第一篇文章第一篇文章第一篇文章第一篇文章第一篇文章第一篇文章第一篇文章第一篇文章第一篇文章第一篇文章第一篇文章第一篇文章',
            id:'1'
          },
          {
            title: '第2篇文章',
            id:'2'
          },
          {
            title: '第一篇文章',
            id:'3'
          }
        ]
      },
      {
        years: 2019,
        list: [
          {
            title: '第一篇文章',
            id:'4'
          },
          {
            title: '第2篇文章',
            id:'5'
          },
          {
            title: '第一篇文章',
            id:'6'
          },
          {
            title: '第一篇文章',
            id:'12'
          },
          {
            title: '第2篇文章',
            id:'13'
          },
          {
            title: '第一篇文章',
            id:'14'
          },
          {
            title: '第一篇文章',
            id:'15'
          },
          {
            title: '第一篇文章',
            id:'16'
          },
          {
            title: '第2篇文章',
            id:'17'
          },
          {
            title: '第一篇文章',
            id:'18'
          }
        ]
      }
    ],
    currentList: []
  }
  componentDidMount(){
    let list = this.state.articleList
    this.setState({
      currentList: list
    })
  }
  showMene = ()=>{
    console.log('展开组件')
    this.setState({
      showMene: true
    })
  }
  closeMenu = ()=>{
    this.setState({
      showMene: false
    })
  }
  render(){
    return (
      <div className="v-artical">
        <div className='head-hoder'>
        </div>

        <div className='menu-btn' onClick={this.showMene}>
          <span className="iconfont icon-option2"></span>
          <span className='words'>MENU</span>
        </div>
        {this.state.showMene && <Menu closeMenu={this.closeMenu}></Menu>}

        <div className='content-warp'>
          <div className='content'>
            <div className='article-list'>
              {
                this.state.currentList.map((item, index)=>{
                  return (
                    <ul className='years' key={item.years}>
                      <h2>{item.years}</h2>
                      {
                        item.list.length && item.list.map((item2, index2) => {
                          return (
                            <li className='list-item' key={item2.id}>
                              <span className='point'></span>
                              <span className='date'>10-13</span>
                              <span className='title'>{item2.title}</span>
                            </li>
                          )
                        })
                      }
                    </ul>
                  )
                })
              }
            </div>
            <div className='article-strategy'>
              <div className='choose-tag'>选择标签分类</div>
            </div>
          </div>  
        </div>
        
      </div>
    )
  }
}
export default Article