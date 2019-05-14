const reducer = (state = {counter: 0}, action) => {

    switch(action.type) {
        case 'COUNTER':
        return {...state, say:state.counter++}
        default:
      return state;
    }
};

export default reducer;