const fakeFetch = ({ email, password }) => new Promise(((success, failure) => {
  setTimeout(() => {
    if (email === 'admin@gmail.com' && password === 'Keturkojis1') {
      success({
        token: 'dfhgasdfbdndnfnfggjhgk',
        user: {
          id: '5165',
          role: 'USER',
          email: 'admin@gmail.com',
        },
      });
    } else {
      failure(new Error('Incorect email or/and password'));
    }
  }, 2000);
}));

const login = async ({ email, password }) => {
  const response = await fakeFetch({ email, password });
  return response;
};
const checkEmail = (email) => new Promise(((success) => {
  const existingEmails = ['admin@gmail.com', 'user1@gmail.com'];
  setTimeout(() => {
    const emailAvailable = !existingEmails.includes(email);
    success(emailAvailable);
  }, 1000);
}));

const register = () => new Promise(((success) => {
  setTimeout(() => {
    success(true);
  }, 2000);
}));
export default {
  login,
  checkEmail,
  register,
};
