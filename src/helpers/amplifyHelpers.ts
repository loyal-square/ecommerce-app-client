import { Auth, Hub } from 'aws-amplify';

export async function signUp(username: string, password: string) {
  try {
    const { user } = await Auth.signUp({
      username,
      password,
      autoSignIn: {
        // optional - enables auto sign in after user is confirmed
        enabled: true
      }
    });
    console.log(user);
  } catch (error) {
    console.log('error signing up:', error);
  }
}

export async function resendConfirmationCode(username: string) {
  try {
    await Auth.resendSignUp(username);
    console.log('code resent successfully');
  } catch (err) {
    console.log('error resending code: ', err);
  }
}

export async function confirmSignUp(username: string, code: string) {
  try {
    await Auth.confirmSignUp(username, code);
  } catch (error) {
    console.log('error confirming sign up', error);
  }
}

export function listenToAutoSignInEvent() {
  Hub.listen('auth', ({ payload }) => {
    const { event } = payload;
    if (event === 'autoSignIn') {
      const user = payload.data;
      // assign user
      return user;
    } else if (event === 'autoSignIn_failure') {
      // redirect to sign in page
      console.log('error auto sign in');
    }
  });
}

export async function signIn(username: string, password: string) {
  try {
    const user = await Auth.signIn(username, password);
    return user;
  } catch (error) {
    console.log('error signing in', error);
  }
}

export async function signOut() {
  try {
    await Auth.signOut();
  } catch (error) {
    console.log('error signing out: ', error);
  }
}

export async function signOutGlobal() {
  try {
    await Auth.signOut({ global: true });
  } catch (error) {
    console.log('error signing out: ', error);
  }
}

export async function changePassword() {
  Auth.currentAuthenticatedUser()
    .then((user) => {
      return Auth.changePassword(user, 'oldPassword', 'newPassword');
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

export async function forgotPasswordSendEmail(username: string) {
  // Send confirmation code to user's email
  Auth.forgotPassword(username)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

export async function forgotPasswordResetPW(username: string, code: string, new_password: string) {
  // Collect confirmation code and new password, then
  Auth.forgotPasswordSubmit(username, code, new_password)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}
