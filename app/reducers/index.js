import axios from 'axios'

const initialState = {
  candies: []
}
//Action
const GET_CANDIE = 'GET_CANDIE';

//action creator
export const getCandie = (candies) => {
  return {
    type: GET_CANDIE,
    candies
  }
}

export const thunkCandy = async (dispatch) => {
  const candies = await axios.get('/api')
  return dispatch(getCandie(candies.data))
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CANDIE: 
      return {...state, candies: action.candies}
    default:
      return state
  }
}

export default rootReducer
