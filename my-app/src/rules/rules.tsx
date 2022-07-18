export const RULES_FORM = {
    Username: {
        required: true,
        message: 'Please input your username or email!',
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
      pattern: new RegExp(/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])[0-9a-zA-Z!@#$%^&*]{8,}/g),
      message: 'Use minimum of 8 characters.',
    },
  } as const
