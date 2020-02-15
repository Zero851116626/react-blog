/**
 * 这个路由管理使用来渲染跟路由的
 * 跟路由：
 * 1.首页
 * 2.文章
 * 3.管理
 * */ 
import Home from '@/views/home/index.jsx'
import Article from '@/views/article/index.jsx'
import Admin from '@/views/admin/index.jsx'
import NotFound from '@/views/notFound/index.jsx'
const router = [
	{
		name: 'home',
		path: '/',
		component: Home,
		exact: true
	},
	{
		name: 'article',
		path: '/article',
		component: Article,
		exact: false
	},
	{
		name: 'admin',
		path: '/admin',
		component: Admin,
		exact: false
	},
	{
		name: 'notFound',
		path: '*',
		component: NotFound,
		exact: false
	}
]

 export default router