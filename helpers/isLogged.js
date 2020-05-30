import { auth } from '../firebase';

function isLogged(fn) {
    auth.onAuthStateChanged(authUser => {
        if (authUser) {
            console.log("*****logged");
            return fn(authUser);
        } else {
            console.log("*****not logged");
            return fn(false);
        }
    });
}
export default isLogged;