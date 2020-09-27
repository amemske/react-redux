import React from 'react';
import {connect} from 'react-redux'
//import { buyCake } from '../redux/cakes/cakeAction';
import {buyCake} from '../redux';

function CakeContainer(props) {
    return (
        <div>
            <h2>Number of cakes - {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cakes</button>
        </div>
    );
}

const mapStateToProps = state => {
    return{
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = displatch => {
    return {
        buyCake: () => displatch(buyCake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)