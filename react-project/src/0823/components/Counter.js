import React from "react";

class Counter extends React.Component{
    state ={
        number:0,
    }

    handleAdd=()=>{
        this.setState({
          number:this.state.number + 5,
        });  
    };

    handleSub=()=>{
      this.setState({
        number:this.state.number - 1,
      });   
    }

    handleRandom=()=>{
        let val = Math.floor(Math.random()*5+1)
        this.setState({
          number:this.state.number-val,
        });   
    }

    render(){        
        const cc = {
            width:'450px', 
            height:'150px', 
            backgroundColor:'blue',
            color:'yellow',
            fontStyle:'bold',
            borderRadius:'50%',
            marginLeft: '220px' ,
        }

        const dd = {
            marginLeft: '200px' ,
            fontSize:'5em', 
        }

        const ee = {
            marginLeft: '15px' ,
            fontSize: '1.2em',
            backgroundColor:'yellow',
        }

        return(
         <div  style={cc}>
          <div> 
            <div style={dd}>{this.state.number}</div>
          </div> <p></p> 
          <button style={ee} onClick={this.handleAdd}>5씩증가</button>
          <button style={ee} onClick={this.handleSub}>1씩감소</button>
          <button style={ee} onClick={this.handleRandom}>랜덤숫자</button>
          </div>   
        )
    }
}//class END
export default Counter;

