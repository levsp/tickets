import { TicketAction } from './../models/TicketActions.js';


export function ticket(state = {counter:0}, action) {



  switch (action.type) {

    case TicketAction.ADD_REQUEST:
    return {
      counter:state.counter,
      isAdding:true
    };

    case TicketAction.ADD_SUCCESS:
    return {
      counter:state.counter+1,
      isAdding:false
    };
   
    case TicketAction.ADD_FAIL:
      return {
        counter:state.counter,
        isAdding:false

      };
    case TicketAction.REMOVE:
      return {
        counter:state.counter-1
      };
    default:
      return state
  }
}