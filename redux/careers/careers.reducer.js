import {ADD_FRIEND} from './careers.type'

export default function FriendListReducer(state = {friends : []}, action) {
    switch (action.type) {
      case 'ADD_FRIEND':
        return [
          { friends : action.payload.friend }, ...state.friends
        ]     
      default:
        return state;
    }
  }