import React, {Component} from 'react'

import './index.styl'
class NavArticleType extends Component{
  state = {
    articleArr: [
      {
        typeName: '随笔',
        content: [
          {
            title: '第一篇文章',
            id: '4'
          },
          {
            title: '第一篇文章',
            id: '34'
          },
          {
            title: '第一篇文章',
            id: '234'
          }
        ]
      },
      {
        typeName: '某个排行',
        content: [
          {
            title: '第9篇文章',
            id: '1'
          },
          {
            title: '第8篇文章',
            id: '12'
          },
          {
            title: '第7篇文章',
            id: '123'
          }
        ]
      }
    ]
  }
  render(){
    return (
      <div className='c-nav-article-type'>
        {
          this.state.articleArr.length && this.state.articleArr.map((item, index) => {
            return (
              <div className='type' key={index}>
                <div className='type-title'>{item.typeName}</div>
                <div className='type-content'>
                  {
                    item.content.length && item.content.map((item2, index2)=>{
                      return <div className='article-name' title={item2.title} key={item2.id}>{item2.title}</div>
                    })
                  }
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}
export default NavArticleType