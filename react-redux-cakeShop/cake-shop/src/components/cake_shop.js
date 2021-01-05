import React from "react"
import  buyCake  from "./../redux/action"
import { connect } from "react-redux"

function Shop(props) {
    return (
        <div>
            <h3>number of cakes are :{props.numOfCake} </h3>
            <button onClick={props.buyCake}>buy cake</button>
        </div>
    ) 
}

const mapStateToProps = state => {
    return {
        numOfCake: state.numOfCake
    }
}

const mapDispatchToProps = dispatch=> {
    return {
        buyCake: () => dispatch(buyCake())
        
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Shop)