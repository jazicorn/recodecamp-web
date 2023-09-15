//import { API_ROUTES } from '../utils/constants';
export function storeTokenInLocalStorage(token) {
  localStorage.setItem('_ACCESS_TOKEN', token);
}

export function getTokenFromLocalStorage() {
  return localStorage.getItem('_ACCESS_TOKEN');
}

export function removeTokenFromLocalStorage() {
  return localStorage.removeItem('_ACCESS_TOKEN');
}

// export async function getAuthenticatedUser() {
//   const defaultReturnObject = { authenticated: false, user: null };
//   try {
//     const token = getTokenFromLocalStorage();
//     if (!token) {
//       return defaultReturnObject;
//     }
//     const response = await fetch({
//       method: 'GET',
//       url: API_ROUTES.GET_USER,
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     });
//     const { authenticated = false } = response.data;
//     return authenticated ? response.data : false;
//   }
//   catch (err) {
//     console.log('getAuthenticatedUser, Something Went Wrong', err);
//     return defaultReturnObject;
//   }
// }