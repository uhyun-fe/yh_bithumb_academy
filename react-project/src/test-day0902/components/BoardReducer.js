// rfcredux

import React from "react";
import { createAction, handleActions } from "redux-actions";

// action type 정의
const BOARD_SAVE = "SAVE";
const BOARD_DELETE = "DELETE";
const BOARD_LIST = "LIST"; // 전체조회
const BOARD_READ = "READ"; // 디테일

export const board_save = createAction(BOARD_SAVE);
export const board_delete = createAction(BOARD_DELETE);
export const board_list = createAction(BOARD_LIST);
export const board_read = createAction(BOARD_READ);

const initState = {
   No: 3,
   boards: [
      {
         b_no: 1,
         b_name: "최유현",
         b_title: "제목입니다",
         b_wdate: new Date(),
      },
      {
         b_no: 2,
         b_name: "최유현222",
         b_title: "제목입니다222",
         b_wdate: new Date(),
      },
   ],
};

export default handleActions({
   [BOARD_SAVE]: (e) => {
      /* 저장처리 concat */
   },
   [BOARD_DELETE]: (e) => {
      /* 삭제처리  */
   },
   [BOARD_LIST]: (e) => {
      /* 전체조회처리 */
   },
   [BOARD_READ]: (e) => {
      /* 디테일조회처리 filter, find */
   },
});
