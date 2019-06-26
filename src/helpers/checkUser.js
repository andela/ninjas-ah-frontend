module.exports = () => ({
  user: localStorage.user ? JSON.parse(localStorage.user) : {},
  isAuth: !!localStorage.token
});
