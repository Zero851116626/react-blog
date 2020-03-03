import React, {Component} from 'react'
import './index.styl'

import {
  Route,
  Switch,
  withRouter
} from "react-router-dom";

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import routers from '@/router/adminRouter.js'

import store from '@/store'

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
class Admin extends Component{
  state = {
    collapsed: false,
    currentSelected: '2-1',
    openKey: '2',
    brandArr: [],
    menuContent: [
      {
        name: '信息维护',
        key: '1',
        subMenu: [
          {
            name: '个人信息',
            key: '1-1',
            path: '/person',
            subMenu: []
          },
          {
            name: '博客信息',
            key: '1-2',
            path: '/blog',
            subMenu: []
          }
        ]
      },
      {
        name: '文章维护',
        key: '2',
        subMenu: [
          {
            name: '写文章',
            key: '2-1',
            path: '/write',
            subMenu: []
          },
          {
            name: '文章列表',
            key: '2-2',
            path: '/list',
            subMenu: []
          }
        ]
      },
      {
        name: '其他',
        key: '3',
        subMenu: [
          {
            name: '新建超管',
            key: '3-1',
            path: '/addroot',
            subMenu: []
          }
        ]
      }
    ]
  };
  componentDidMount(){
    // 检测登陆状态
    console.log(store.getState())
    // 刷新时
    this.checkMenu()
  }
  checkMenu =() =>{
    for(let i = 0,l = this.state.menuContent.length; i<l;i++) {
      if (!this.state.menuContent[i].subMenu.length) {
        if (`/admin${this.state.menuContent[i].path}` === this.props.location.pathname) {
          let arr = []
          arr.push(this.state.menuContent[i].name)
          this.setState({
            currentSelected: this.state.menuContent[i].key,
            openKey: this.state.menuContent[i].key,
            brandArr: arr
          })
        }
      } else {
        for(let j=0,len=this.state.menuContent[i].subMenu.length; j<len;j++) {
          if (`/admin${this.state.menuContent[i].subMenu[j].path}` === this.props.location.pathname) {
            let arr = []
            arr.push(this.state.menuContent[i].name, this.state.menuContent[i].subMenu[j].name)
            this.setState({
              currentSelected: this.state.menuContent[i].subMenu[j].key,
              openKey: this.state.menuContent[i].key,
              brandArr: arr
            })
          }
        }
      }
    }
  }
  onCollapse = collapsed => {
    this.setState({ collapsed });
  };
  clickMenu = (e, item, obj)=>{
    let arr = []
    arr.push(item.name, obj.name)
    this.setState({
      brandArr: arr
    })
    this.props.history.push(`${this.props.match.path}${obj.path}`)
  }
  onSelectMenu = (e)=>{
    this.setState({
      currentSelected: e.key
    })
  }
  onClickMenu = (e, item)=>{
    this.setState({
      openKey: e.key
    })
  }
  render(){
    return (
      <div className="v-admin">
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} theme='light'>
            <div className="logo" onClick={()=>{this.props.history.push('/')}}>博客后台管理</div>
            <Menu 
              theme="light" 
              selectedKeys={[this.state.currentSelected]} 
              openKeys={[this.state.openKey]} 
              onSelect={this.onSelectMenu}
              mode="inline">
              {
                this.state.menuContent.length && this.state.menuContent.map((item, index) => {
                  if (!item.subMenu.length) {
                    return (
                      <Menu.Item key={item.key} onClick={(e)=>{this.clickMenu(e, item)}}>
                        <Icon type="pie-chart" />
                        <span>{item.name}</span>
                      </Menu.Item>
                    )
                  } else {
                    return (
                      <SubMenu
                        key={item.key}
                        onTitleClick={this.onClickMenu}
                        title={
                          <span>
                            <Icon type='user' />
                            <span>{item.name}</span>
                          </span>
                        }
                      >
                        {
                          item.subMenu.map((item2, index2) => {
                            return (
                              <Menu.Item key={item2.key} onClick={(e)=>{this.clickMenu(e,item, item2)}}>{item2.name}</Menu.Item>
                            )
                          })
                        }
                      </SubMenu>
                    )
                  }
                })
              }
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                {
                  this.state.brandArr.length && this.state.brandArr.map((item, index) => {
                    return (
                    <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>
                    )
                  })
                }
              </Breadcrumb>
              <div style={{ padding: 0, background: '#fff', minHeight: 360, height: `calc(100vh - 100px)`}}>
                <Switch>
                  {
                    routers.map((item, index)=>{
                      return (
                        <Route exact={item.exact} key={item.name} path={`${this.props.match.path}${item.path}`} component={item.component}></Route>
                      )
                    })
                  }
                </Switch>
              </div>
            </Content>
            <Footer style={{ textAlign: 'center', paddingBottom: '0' }}>博客后台管理</Footer>
          </Layout>
        </Layout>
      </div>
    )
  }
}
export default withRouter(Admin)