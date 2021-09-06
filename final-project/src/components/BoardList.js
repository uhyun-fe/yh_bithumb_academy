import React from 'react';
import { TableRow, TableCell, Button } from '@material-ui/core';

function BoardList({ id,bno, bname, btitle, bwdate, onRowClick, onRemoveButtonClick }) {

    return (
        <TableRow>
            <TableCell align='center'>{id}</TableCell>
            <TableCell align='center'>{bname}</TableCell>
            <TableCell align='center' onClick={() => onRowClick(id, bno, bname, btitle, bwdate)}>{btitle}</TableCell>
            <TableCell align='center'> {bwdate}</TableCell>
            <TableCell align='center'><Button variant="contained" color="secondary" onClick={() => onRemoveButtonClick(id)}>삭제</Button></TableCell>
        </TableRow>
    )
}
export default BoardList;