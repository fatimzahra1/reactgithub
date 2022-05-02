import {useReducer} from "react";

import AlertContext from './alertContext'
import AlertReducer from './alertReducer'
import {
  SET_ALERT,
  REMOVE_ALERT

} from '../types'

const AlertState = props => {
    const initialState = {
        alert:false
    }
    
const [state, dispatch] = useReducer(AlertReducer, initialState)

// Set Alert
const setAlert = () =>{
    dispatch({ type: SET_ALERT})
    setTimeout(() =>dispatch({ type: REMOVE_ALERT}),5000 )
}

// Remove Alert
const removeAlert = () =>{
    dispatch({ type: REMOVE_ALERT})
}



return <AlertContext.Provider
value={{
  setAlert,
  removeAlert,
  alert: state.alert
 
}}>
  {props.children}
</AlertContext.Provider>
}

export default AlertState