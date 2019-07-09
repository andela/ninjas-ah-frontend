export default () => {
  localStorage.user = '';
  localStorage.token = '';
  return !localStorage.user && !localStorage.token && window.location.replace('/');
};
