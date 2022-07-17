export const RULES_FORM = {
    Username: {
        required: true,
        message: 'Please input your username!',
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
      pattern: new RegExp(/^[A-Za-z0-9]\w{8,}$/),
      message: 'Use minimum of 8 characters.',
    },
    ForgetPassword: {
      required: true,
      message: 'No account for this email address.',
    }
  } as const
