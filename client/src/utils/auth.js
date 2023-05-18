// imports token and decrypt user from it
import decode from 'jwt-decode';

// creating new class for user
class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  // check: is user logged in?
  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  // check: is token expired
  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  //retrieve user token from local storage
  getToken() {
      return localStorage.getItem('id_token');
  }

//save user token to local storage
  login(idToken) {
   localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

//clear user data/profile from local storage, then reload the page
  logout() {
    localStorage.removeItem('id_token');
    window.location.assign('/');
  }
}

export default new AuthService();
