import {CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_FAILED ,} from './constants'
const initialStateS = {
    searchField:'',
}

export const searchRobots = (state=initialStateS,action={}) => {
    switch(action.type){
        case CHANGE_SEARCH_FIELD: 
            return Object.assign({}, state , {searchField: action.payload});

        default:
            return state;

    }
} 

const initialStateR ={
    robots:[],
    isPending:false,
    isError:false
}

export const requestRobots = (state=initialStateR,action={}) => {
    switch(action.type){
        case REQUEST_ROBOTS_PENDING:
            return {...state , isPending: true ,isError: false};

        case REQUEST_ROBOTS_SUCCESS:
            return {...state , robots: action.payload , isPending: false , isError: false};

        case REQUEST_ROBOTS_FAILED:
            return {...state , isError: true , isPending:false};

        default:
            return state;

    }
} 