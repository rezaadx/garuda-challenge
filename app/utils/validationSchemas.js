import * as Yup from 'yup';

export const changePasswordSchema = Yup.object().shape({
  oldPassword: Yup.string().required().min(8).matches(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%?=*&_()]).{8,})/, "Must be 8 or more characters and contain at least 1 uppercase, 1 number and 1 symbol").label('Password'),
  newPassword: Yup.string().required().min(8).matches(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%?=*&_()]).{8,})/, "Must be 8 or more characters and contain at least 1 uppercase, 1 number and 1 symbol").label('Password'),
  confirmPassword: Yup.string().oneOf([Yup.ref('newPassword'), null], 'Your password do not match'),
})

export const createPasswordSchema = Yup.object().shape({
  password: Yup.string().required().min(8).matches(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%?=*&_()]).{8,})/, "Must be 8 or more characters and contain at least 1 uppercase, 1 number and 1 symbol").label('Password'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Your password do not match'),
})

