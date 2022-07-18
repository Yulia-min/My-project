export const RULES_FORM = {
    Username: {
        required: true,
<<<<<<< HEAD
<<<<<<< HEAD
        message: 'Please input your username or email!',
=======
        message: 'Please input your username!',
>>>>>>> 3f74201 (add forms)
=======
        message: 'Please input your username or email!',
>>>>>>> c0933a2 (add request)
    },
    Password: {
      required: true,
      message: 'Please input your password!',
    },
    ConfirmPassword:{
      required: true,
      message: 'Please confirm your password!',
    },
    PasswordCheck: {
<<<<<<< HEAD
<<<<<<< HEAD
      pattern: new RegExp(/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])[0-9a-zA-Z!@#$%^&*]{8,}/g),
      message: 'Use minimum of 8 characters.',
    },
=======
      pattern: new RegExp(/^[A-Za-z0-9]\w{8,}$/),
      message: 'Use minimum of 8 characters.',
    },
    ForgetPassword: {
      required: true,
      message: 'No account for this email address.',
    }
>>>>>>> 3f74201 (add forms)
=======
      pattern: new RegExp(/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])[0-9a-zA-Z!@#$%^&*]{8,}/g),
      message: 'Use minimum of 8 characters.',
    },
>>>>>>> c0933a2 (add request)
  } as const
