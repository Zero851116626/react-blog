import React, {Component} from 'react'
import './index.styl'

/**
 * props
 *  articleInfo:
 *    title: String 文章标题
 *    imgUrl: String 配图
 *    content: String 文章内容节选
 *    id: string 文章id
 *    tag: String 文章标签
 *    time: 文章创建时间
 * */ 
class ArticleInfoCard extends Component{
  render(){
    return (
      <div className='c-artile-card'>
        <div className='content'>
          {
            this.props.articleInfo.imgUrl && 
            <div className='img-wrap'>
              <img className='content-img' src={this.props.articleInfo.imgUrl} alt=""/>
            </div>
          }
          <div className='content-words'>
            <div className='article-title'>{this.props.articleInfo.title}</div>
            <div className='article-content'>{this.props.articleInfo.content}</div>
          </div>
        </div>
        <div className='bottom-info'>
          <div className='info'>
            <div className='tag'>
              <span className='iconfont icon-biaoqian'></span>
              <span>{this.props.articleInfo.tag}</span>
            </div>
            <div className='create-time'>
              <span className='iconfont con-riqi'></span>
              <span>{this.props.articleInfo.time}</span>
            </div>
          </div>
          <div className='jump-to-content'>阅读全文</div>
        </div>
      </div>
    )
  }
}
export default ArticleInfoCard