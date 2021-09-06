import React from 'react';
import { useForm } from 'react-hook-form'; // react-hook-form import
import { TextField, Button } from '@material-ui/core';

function BoardNew({ changeInput, inputData, onSaveButtonClick, resetForm, onSearchButtonClick }) {

    const { handleSubmit, register, formState: { errors } } = useForm(); // useForm 의 handleSubmit 가져옴.

    const saveBtnClick = (data) => { // preventDefault() 제거
        console.log('saveBtnClick: saveBtnClick:',data);
        onSaveButtonClick(inputData);
        resetForm();
    }

    return (
        <div>
            <form onSubmit={handleSubmit(saveBtnClick)}>
                <div>
                    <TextField id='bname' label='글쓴이' type="text" {...register("bname", { required: true, minLength:3 })} onChange={changeInput} value={inputData.bname} />
                    {errors.bname && errors.bname.type === "required" && (
                        <span role="alert">이름을 입력해주세요</span>
                    )}
                    {errors.bname && errors.bname.type === "minLength" && (
                        <span>최소 3글자 입력해주세요</span> 
                    )}
                </div>
                <div>
                    <TextField id='btitle' label='글제목' type="text" {...register("btitle", { required: true, minLength:3 })} onChange={changeInput} value={inputData.btitle} />
                    {errors.btitle && errors.btitle.type === "required" && (
                        <span role="alert">제목을 입력해주세요</span>
                    )}
                    {errors.btitle && errors.btitle.type === "minLength" && (
                        <span>최소3글자 입력해주세요</span> 
                    )}
                </div>
                <input type="hidden" name="bno" onChange={changeInput} value={inputData.bno} /> <p></p>
                <div>
                <Button variant="contained" color="secondary" onClick={onSearchButtonClick}>조회</Button> &nbsp;
                <Button variant="contained" color="secondary" type="submit" >저장</Button>
                </div>
            </form>
        </div>
    )
};
export default BoardNew;


