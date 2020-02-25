// 触发函数的名称
export const login = ()=>{
  return {
    type: 'Login',
    bool: true
  }
}

export const logout = () => {
  return {
    type: 'Logout',
    bool: false
  }
}