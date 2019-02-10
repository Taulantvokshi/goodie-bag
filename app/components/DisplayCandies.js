import React from 'React'
import {connect} from 'react-redux'
import {thunkCandy, getCandie} from '../reducers/index'
 class DisplayCandies extends React.Component {
    
    componentDidMount(){
        this.props.thunkCandy()
    }
    render(){
        const props = this.props.state.candies.candies
        return ( 
      <div> 
            <ul>
           {
               props.map((item, i)=> (
                   <li key ={i}>{item.name}</li>
               ))
           }
            </ul>
      </div> 
        )
    } 
}
const mapStateToProps = (state) => {
    return {state: getCandie(state)}
}
const mapDipatchToProps = (dispatch) => {
    return { thunkCandy: () => dispatch(thunkCandy) }
}

export default connect(mapStateToProps, mapDipatchToProps)(DisplayCandies)