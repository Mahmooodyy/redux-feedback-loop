import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, TextField } from '@material-ui/core';


function Understanding(){

    const dispatch = useDispatch();
    const history = useHistory(); 

    //  local state for input
    const [understanding, setUnderstanding] = useState('');



    const handleSubmit = (event) => {
    event.preventDefault();
    console.log('in handleSubmit, understanding is: ', understanding);

    // validate data
    if (understanding === '') {
    return alert('Please enter a number between 1 and 5');
    } else if (understanding > 5 || understanding < 1)     {
    return alert('Please enter a number between 1 and 5');
    } else {
    dispatch({
        type: 'UNDERSTANDING',
        payload: {understanding }
    })
      // reset local state on submission
    setUnderstanding('');

      // move user to the next page 
    history.push('/Support');
    }
}

return(
    <>
    <h2>How well do you think you understood todays contents?</h2>
    <form onSubmit={handleSubmit}>
        <TextField 
        type="number" 
        id="filled-basic" 
        placeholder="1 - 5" 
        min="1"
        max="5"
        value={understanding}
        // turn to number
        onChange={event => setUnderstanding(Number(event.target.value))} 
        />
        <br />
        <Button onClick={handleSubmit}>Next</Button>
    </form>
    </>
);
} 

export default Understanding;