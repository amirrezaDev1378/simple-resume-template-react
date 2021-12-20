import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    addText,
    changeText,
    selectValue,
    TestFunc
  } from './TextSlice';
  import Button from '@mui/material/Button';
function Text() {
    const value = useSelector(selectValue);
    const dispatch = useDispatch();
    // const [addText, setAddText] = useState('mamooz');


    return (
        <div>
            <p >{value}</p>
            <Button onClick={() => dispatch(addText())}>
                Add Text
            </Button>
        </div>
    )
}

export default Text
