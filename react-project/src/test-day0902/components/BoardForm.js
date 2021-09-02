import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

// Reducer
import { board_save } from "./BoardReducer";

export class BoardForm extends Component {
   // connect;
   state = {};

   initalSelectedBoard = {
      b_no: 0,
      b_name: "",
      b_title: "",
      b_wdate: "",
   };

   handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
   };

   handleSave = () => {
      this.props.dispatch(board_save(this.state));
      this.setState(this.initalSelectedBoard);
   };

   componentWillReceiveProps(nextProps) {
      console.log("componentWillReceiveProps(nextProps) 처리...");
      this.setState(nextProps.selectedBoard);
   }

   render() {
      return (
         <Container>
            <div>
               이름 : <input name="b_name" value={this.state.b_name || ""} onChange={this.handleChange} />
            </div>
            <div>
               제목 : <input name="b_title" value={this.state.b_title || ""} onChange={this.handleChange} />
            </div>
            <button type="button" onClick={this.handleSave}>
               저장
            </button>
         </Container>
      );
   }
}

// 자동완성기능 (mapStateToProps, mapDispatchToProps)
// rfcredux

let mapStateToProps = (state) => {
   // 인수로 저장된 state 전체를 가리킴
   return { selectedBoard: state.selectedBoard };
};

export default connect(mapStateToProps)(BoardForm);

const Container = styled.div`
   > * {
      margin-bottom: 10px;
   }
   input {
      width: 70%;
      height: 30px;
   }
   button {
      width: 80%;
      height: 30px;
      color: red;
      border: 1px solid #666;
      background: none;
   }
`;
