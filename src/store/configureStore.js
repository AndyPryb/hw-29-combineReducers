import {createStore} from "redux";
import reducer from "../reducers/index"

// export const initialState = {
//     user: {
//         avatar: 'http://gravatar.com/avatar/0?d=monsterid',
//         name: 'Monster'
//     },
//     stats: {
//         followers: 0,
//         following: 0
//     }
// }

export const store = createStore(reducer);