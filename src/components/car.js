import React, {Component} from "react"
import actionCreator from "../store/Car/actionCreator"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
class Car extends Component {
    add(){
        this.props.add(this.refs.productName.value, this.refs.productPrice.value)
    }
    render(){
        return <div>
            商品：<input type="text" ref="productName"/><br />
            价格：<input type="text" ref="productPrice"/><br />
            <button onClick={this.add.bind(this)}>确认</button>
            <ul>
                {
                    this.props.list.map((item)=>{
                        return <li key={item.id}>商品：{item.name}价格：{item.price}
                        数量：<button onClick={this.props.dec.bind(this,item.id)}>-</button>{item.count}<button  onClick={this.props.inc.bind(this,item.id)}>+</button>
                        </li>
                    })
                }
            </ul>
            {this.props.money()}
        </div>
    }
    
}
let mapStateToProps=(state)=>{
    return {
        list:state.car.list,
        money(){
            var m=0;
            for(var i=0; i<state.car.list.length; i++){
                m+=state.car.list[i].price*state.car.list[i].count
            }
            return m;
        }
    }
    
}
export default connect(mapStateToProps,(dispatch)=>bindActionCreators(actionCreator,dispatch))(Car);
// export default connect((state)=>state,(dispatch)=>bindActionCreators(actionCreator,dispatch))(Car);
