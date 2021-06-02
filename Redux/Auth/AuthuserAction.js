import { SET_CURRENT_USER } from "./Authuserconstant"

export var setCurrentUser = (user) => {
    return {
        type : SET_CURRENT_USER,
        payload : {
            currentUser : user
        }
    }
}