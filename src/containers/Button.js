import React from 'react'
import { connect } from 'react-redux';
import {counter} from '../actions'


let Button = ({count}) => (
  <div>
    <button onClick={count}>Increment</button>
    {/* <h1>{stateObject.counter}</h1> */}
  </div>
)

// const mapStateToProps = (state) => ({
//     stateObject: state,
// })

const mapDispatchToProps = (dispatch) => ({
    count: () => { dispatch(counter())},
})

Button = connect(
    // mapStateToProps,
    null,
    mapDispatchToProps
)(Button)
export default Button;

