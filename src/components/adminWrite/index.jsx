import React, {Component} from 'react'
import './index.styl'

import ZyfEditor from '../richTextEditor/index'
class AdminWrite extends Component{
  render(){
    return (
      <div className='c-admin-write'>
        <ZyfEditor></ZyfEditor>
      </div>
    )
  }
}
export default AdminWrite