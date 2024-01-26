import { isEmpty } from "lodash";
const tokenName = "Authorization"
const expireToken = "expiredTime"


export const getToken = () => {
  let date = new Date()
  if (!isEmpty(window.localStorage.getItem(tokenName))) {
    if (date > new Date(window.localStorage.getItem(expireToken))) {
      // window.location.href = 'http://localhost:3000/' + "login"
      // deleteToken()
      // window.location.href = "http://localhost:8080/login"
      return false
    } else {
      return window.localStorage.getItem(tokenName);
    }
  } else {
    return false
  }
};

export const saveToken = (token) => { 
   let date = new Date()
  let exp = new Date(Date.parse(date) + 8000 * 60 * 60)

  window.localStorage.setItem(tokenName, token);
  window.localStorage.setItem(expireToken, exp)
};

export const deleteToken = () => {
  window.localStorage.removeItem(tokenName);
  window.localStorage.removeItem(expireToken);
};
