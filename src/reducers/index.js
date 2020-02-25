// 拿到方法后，明确方法里面要干什么
const userStatus = (state = false, action)=>{
  switch(action.type) {
    case 'Login':
      return !state
    case 'Logout': 
      return state
    default: return false
  }
}

export default userStatus