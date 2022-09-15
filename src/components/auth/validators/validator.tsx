export const emailValidator = (email: string) => {
  return /^[\w0-9._%+-]+@[\w0-9-]+\.[\w]{2,4}$/i.test(email);
};

export const passWordValidator = (password: string) => {
  // eslint-disable-next-line no-useless-escape
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-!$%^&*()_+|~=`{}[\]:";'<>?,.@#\/])[-!$%^&*()_+|~=`{}[\]:";'<>?,.@#\/A-Za-z\d]{8,}$/.test(
    password
  );
};
