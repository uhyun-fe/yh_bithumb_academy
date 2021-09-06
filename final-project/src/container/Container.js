import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import BoardList from "../components/BoardList";
import BoardNew from "../components/BoardNew";
import { saveDataAsync, searchDataAsync, removeDataAsync } from "../module/boardReducer";

import { Table, TableHead, TableBody, TableRow, TableCell } from "@material-ui/core";

function Container() {
   let [inputData, setInputData] = useState({
      id: "",
      bno: "",
      bname: "",
      btitle: "",
      bwdate: "",
   });

   const dispatch = useDispatch();

   const { boards, lastId } = useSelector((state) => state.boardReducer);

   const onSearchButtonClick = () => {
      resetForm();
      dispatch(searchDataAsync());
   };

   const onSaveButtonClick = (data) => {
      if (lastId === 0) {
         alert("조회 버튼클릭 해서 데이터 출력 합니다");
         console.log("lastId = ", lastId);
         return;
      }
      dispatch(saveDataAsync(data, lastId));
   };

   const onRemoveButtonClick = (id) => {
      dispatch(removeDataAsync(id));
   };

   const onRowClick = (id, bno, bname, btitle, bwdate) => {
      setInputData({
         id: id,
         bno: bno,
         bname: bname,
         btitle: btitle,
         bwdate: bwdate,
      });
   };

   const changeInput = (e) => {
      setInputData({
         ...inputData,
         [e.target.name]: e.target.value,
      });
   };

   const resetForm = () => {
      setInputData({
         bno: "",
         bname: "",
         btitle: "",
         bwdate: "",
      });
   };

   return (
      <div className="App">
         <div>
            <Table>
               <TableHead>
                  <TableRow bgcolor="yellowgreen">
                     <TableCell align="center">No</TableCell>
                     <TableCell align="center">Name</TableCell>
                     <TableCell align="center">Title</TableCell>
                     <TableCell align="center">Date</TableCell>
                     <TableCell align="center">삭제버튼</TableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                  {boards.length > 0 &&
                     boards.map((row) => (
                        <BoardList
                           key={row.bno}
                           id={row.id}
                           bno={row.bno}
                           bname={row.bname}
                           btitle={row.btitle}
                           bwdate={row.bwdate}
                           onRowClick={onRowClick}
                           onRemoveButtonClick={onRemoveButtonClick}
                        />
                     ))}
               </TableBody>
            </Table>
         </div>
         <div>
            <BoardNew
               changeInput={changeInput}
               inputData={inputData}
               onSaveButtonClick={onSaveButtonClick}
               resetForm={resetForm}
               onSearchButtonClick={onSearchButtonClick}
            />
         </div>
      </div>
   );
}

export default Container;
