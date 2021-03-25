import { fireAuth } from './firebase';

export function signUp(email: string, password: string) {
  return fireAuth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => fireAuth().setPersistence(fireAuth.Auth.Persistence.SESSION))
    .catch((err) => console.log(err));
}

export function signIn(email: string, password: string) {
  return fireAuth()
    .signInWithEmailAndPassword(email, password)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}
