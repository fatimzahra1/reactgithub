import {
    REMOVE_ALERT,
    SET_ALERT

} from '../types'

export default (state, action) => {
    switch (action.type){
     
        case SET_ALERT:
            return{
                ...state,
                alert:true
            }
            case REMOVE_ALERT:
                return{
                    ...state,
                    alert:false
                }
     
        default:
            return state;
    }

}