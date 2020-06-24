import * as constants from '../constants';

export const registerUser = (data, onSuccess, onError) => ({
  type: constants.API,
  payload: {
    method: 'POST',
    url: '/api/user/register',
    data,
    success: (response) => setUserInfo(response),
    postProcessSuccess: onSuccess,
    postProccessError: onError,
  },
});

export const loginUser = (data, onSuccess, onError) => ({
  type: constants.API,
  payload: {
    method: 'POST',
    url: '/api/user/authenticate',
    data,
    success: (response) => setUserInfo(response),
    postProcessSuccess: onSuccess,
    postProccessError: onError,
  },
});

export const logoutUser = () => {
  localStorage.removeItem('USER_INFO');
  return { type: constants.RESET_USER_INFO };
};

const setUserInfo = (data) => {
  const parsedToken = JSON.parse(atob(data.token.split('.')[1]));
  const userInfo = {
    userId: parsedToken.id,
    name: parsedToken.name,
    token: data.token,
    isLoggedIn: true,
  };
  localStorage.setItem('USER_INFO', JSON.stringify(userInfo));
  return { type: constants.SET_USER_INFO, payload: userInfo };
};
