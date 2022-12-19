import { createStore } from "redux";

const DEFAULT_STATE = {
    loggedInUser: '',
    showTrainers: null,
    mySubscriptions: null,
    displayName: '',
    uid: ''
}

const trainerReducer = (state = DEFAULT_STATE, action) => {

    if(action.type==='TrainerClicked'){
        return {...state, showTrainers: true, mySubscriptions:false}
    }

    else if(action.type == 'subscribedClassesClicked'){
        return {...state, mySubscriptions:true, showTrainers:false}
    }

    else if(action.type == 'loggedInUser'){
        return {...state, loggedInUser: action.payload.fullName, displayName: action.payload.firstName, uid:action.payload.mainId, email: action.payload.email}
    }


    return state
}

const store = createStore(trainerReducer)

export default store