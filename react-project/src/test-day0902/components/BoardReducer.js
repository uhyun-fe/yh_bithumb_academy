// rfcredux
import React from "react";
import { createAction, handleActions } from "redux-actions";

// action type 정의
const BOARD_SAVE = "SAVE";
const BOARD_READ = "READ"; // 디테일
const BOARD_DELETE = "DELETE";

export const board_save = createAction(BOARD_SAVE);
export const board_read = createAction(BOARD_READ);
export const board_delete = createAction(BOARD_DELETE, (b_no) => b_no);

const initialState = {
   No: 3,
   boards: [
      {
         b_no: 1,
         b_name: "hello",
         b_title: "world!",
         b_wdate: new Date(),
      },
   ],
   selectedBoard: {},
};

export default handleActions(
   {
      // payload는 redux에서 지정한 이름
      [BOARD_SAVE]: (sk, { payload: data }) => {
         /* 저장처리 concat */
         let boards = sk.boards;
         if (!data.b_no) {
            // 신규 등록
            let No = sk.No;
            return {
               No: No + 1,
               boards: boards.concat({ ...data, b_no: No, b_wdate: new Date() }),
               selectedBoard: {},
            };
         } else {
            // 기존값 수정
            return {
               ...sk,
               boards: boards.map((row) => (data.b_no === row.b_no ? { ...data } : row)),
               selectedBoard: {},
            };
         }
      },
      [BOARD_READ]: (state, { payload: b_no }) => {
         /* 디테일조회처리 filter, find */
         let boards = state.boards;
         return {
            ...state,
            selectedBoard: boards.find((row) => row.b_no === b_no),
         };
      },
      [BOARD_DELETE]: (state, { payload: b_no }) => {
         /* 삭제처리  */
         let boards = state.boards;
         return {
            ...state,
            boards: boards.filter((row) => row.b_no !== b_no),
            selectedBoard: {},
         };
      },
   },
   initialState
);
