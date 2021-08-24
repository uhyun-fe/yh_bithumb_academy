
import React from 'react'

class MyColor extends React.Component{
    render(){
        const mc = {fontSize:'20pt' , color:'hotpink'} ;
        const { kind,price } = this.props;

        return(
            <div>
                <h1>MyColor.js </h1>
                <div style={mc}>
                   종류: {kind} &nbsp; 가격: {price} <br></br>
                   종류: {this.props.kind} &nbsp; 가격: {this.props.price}<br></br>
                </div>
            </div>
        );
    }
}//class END

export default  MyColor ;

