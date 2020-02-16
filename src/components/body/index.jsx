import React, {Component} from 'react'

import './index.styl'

import ArticleCard from '../articleInfoCard/index.jsx'
class Body extends Component{
  state={
    articleArr: [
      {
        title: '母猪的产后护理',
        imgUrl: '',
        content: '母猪母猪母猪母猪母猪母猪母猪母猪母猪母猪母猪护理护理护理护理护理护理护理护理护理护理护理护理',
        id: '1234',
        tag: '随笔',
        time: '2020-02-16'
      },
      {
        title: '母猪的产后护理',
        imgUrl: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=175284648,2825480163&fm=26&gp=0.jpg',
        content: '母猪母猪母猪母猪母猪母猪母猪母猪母猪母猪母猪护理护理护理护理护理护理护理护理护理护理护理护理',
        id: '12346',
        tag: '随笔',
        time: '2020-02-16'
      }
    ]
  }
  render(){
    return (
      <div className='c-content'>
        {
          this.state.articleArr.length && this.state.articleArr.map((item, index)=>{
            return <ArticleCard articleInfo={item} key={item.id}></ArticleCard>
          })
        }
      </div>
    )
  }
}
export default Body