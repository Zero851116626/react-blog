
// admin 路由配置

import AdminPerson from '@/components/adminPerson/index.jsx'
import AdminBlog from '@/components/adminBlog/index.jsx'
import AdminWrite from '@/components/adminWrite/index.jsx'
import AdminList from '@/components/adminList/index.jsx'
import AdminAddRoot from '@/components/adminAddRoot/index.jsx'


const routers = [
  {
    name: 'adminPerson',
    path: '/person',
    component: AdminPerson,
    exact: true
  },
  {
    name: 'adminBlog',
    path: '/blog',
    component: AdminBlog,
    exact: true
  },
  {
    name: 'adminWrite',
    path: '/write',
    component: AdminWrite,
    exact: true
  },
  {
    name: 'adminList',
    path: '/list',
    component: AdminList,
    exact: true
  },
  {
    name: 'adminOrther',
    path: '/addroot',
    component: AdminAddRoot,
    exact: true
  }
]


export default routers