define(['jquery'], function($) {
  return function verify(user) {
    if(!user.account) {
      alert('请输入用户名')
      return false
    }
    if(!user.password) {
      alert('请输入密码')
      return false
    }
    if(!user.password_2) {
      alert('请重复密码')
      return false
    }
    if(user.password_2 !== undefined && user.password !== user.password_2) {
      alert('两次密码不一致')
      return false
    } 
    return true
  }   
});