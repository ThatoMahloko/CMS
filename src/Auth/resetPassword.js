import {firebase} from '../Config/Firebase'

const resetPassword = (email) => {
    firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
        alert('Password reset email sent!')
    }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage, ":" + errorCode)
    })
}

export default resetPassword