// @ts-ignore
import * as React from "react";

interface IList {
   idx: number;
   todo: string;
   isDelete: boolean;
   onDelete: Function;
}

function TodoItem(props: IList) {
   const handleDelete = () => {
      props.onDelete(props.idx);
   };

   return (
      <div>
         {props.idx !== 0 && !props.isDelete && (
            <div>
               {props.todo} &nbsp;
               <button onClick={handleDelete}> 삭제 </button>
            </div>
         )}
      </div>
   );
}

export default TodoItem;
