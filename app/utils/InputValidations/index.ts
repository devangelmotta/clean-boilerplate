import * as yup from 'yup';


const checkValidEmail = yup.object().shape({
    email: yup
        .string()
        .email()
        .required("Email required"),
});

const checkValidPassword = yup.object().shape({
    password: yup
        .string()
        .min(6)
        .required("Password required"),
});

export const validators = {
    email: checkValidEmail,
    password: checkValidPassword
}

