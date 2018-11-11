import React, {Component} from 'react';
import actionCreator from '../store/Num/actionCreator'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
class One extends Component {
    render(){
        return <div>{this.props.num.n}
            <button onClick={this.props.asyncinc}>+</button>
        </div>
    }
}
export default connect ((state)=>state,(dispatch)=>bindActionCreators(actionCreator,dispatch))(One);