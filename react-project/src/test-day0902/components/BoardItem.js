import React from "react";
import { connect } from "react-redux";
import { board_read, board_delete } from "./BoardReducer";

export const BoardItem = ({ row, board_read, board_delete }) => {
   return (
      <tr>
         <td>{row.b_no}</td>
         <td>{row.b_name}</td>
         <td>
            <a onClick={() => board_read(row.b_no)}>{row.b_title}</a>
         </td>
         <td>{row.b_wdate.toLocaleDateString("ko-KR")}</td>
         <td>
            <button onClick={() => board_delete(row.b_no)}>X</button>
         </td>
      </tr>
   );
};

const mapDispatchToProps = (dispatch) => ({
   board_read: (b_no) => dispatch(board_read(b_no)),
   board_delete: (b_no) => dispatch(board_delete(b_no)),
});

export default connect(null, mapDispatchToProps)(BoardItem);
