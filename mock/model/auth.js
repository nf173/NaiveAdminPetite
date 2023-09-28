import Mock from 'mockjs';

export const userModel = [
  {
    token: '__TOKEN-PETITE__',
    refreshToken: '__REFRESH_TOKEN_PETITE__',
    userId: 0,
    username: 'Petite',
    userRole: 'Super',
    nickname: '',
    password: 'Petite123',
  },
  {
    token: '__TOKEN-ADMIN__',
    refreshToken: '__REFRESH_TOKEN_ADMIN__',
    userId: 1,
    username: 'Admin',
    userRole: 'admin',
    nickname: '',
    password: 'Admin123',
  },
  {
    token: '__TOKEN-USER__',
    refreshToken: '__REFRESH_TOKEN_USER__',
    userId: 2,
    username: 'User',
    userRole: 'user',
    nickname: '',
    password: 'User123',
  }
]

export const smsCode = Mock.mock(/^\d{6}$/);