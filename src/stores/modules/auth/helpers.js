export function getToken() {
  return localStorage.getItem('ACCESS-TOKEN') || '';
}

export function getUserInfo() {
  const emptyInfo = {
    userId: '',
    username: '',
    userRole: ''
  }
  const userInfo = localStorage.getItem('USER-INFO') || emptyInfo;
  
  return userInfo;
}