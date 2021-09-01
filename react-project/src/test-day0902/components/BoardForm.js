import React, { Component } from "react";
import { connect } from "react-redux";

// Reducer
import { board_save } from "./BoardReducer";

export class BoardForm extends Component {
   connect;
   state = {
      b_no: 0,
      b_name: "",
      b_title: "",
      b_wdate: "",
   };

   initalSelectedBoard = {
      b_no: 0,
      b_name: "",
      b_title: "",
      b_wdate: "",
   };

   handleChange = (e) => {};

   handleSave = (e) => {};

   componentWillReceiveProps(n) {}

   render() {
      return (
         <div>
            <form>
               이름 : <input name="b_name" />
               제목 : <input name="b_title" />
               <button>저장</button>
            </form>
         </div>
      );
   }
}

export default BoardForm;
