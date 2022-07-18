import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, TextField } from '@material-ui/core';


function Support(){

    const dispatch = useDispatch();
    const history = useHistory(); 

    //  local state for input
    const [support, setSupport] = useState('');



    const handleSubmit = (event) => {
    event.preventDefault();
    console.log('in handleSubmit, support is: ', support);

    // validate data
    if (support === '') {
    return alert('Please enter a number between 1 and 5');
    } else if (support > 5 || support < 1)     {
    return alert('Please enter a number between 1 and 5');
    } else {
    dispatch({
        type: 'SUPPORT',
        payload: {support}
    })
      // reset local state on submission
    setSupport('');

      // move user to the next page 
    history.push('/Comments');
    }
}

return(
    <>
    <h2>How much did you feel supported today?</h2>
    <form onSubmit={handleSubmit}>
        <TextField 
        type="number" 
        id="filled-basic" 
        placeholder="1 - 5" 
        min="1"
        max="5"
        value={support}
        // turn to number
        onChange={event => setSupport(Number(event.target.value))} 
        />
        <br />
        <Button onClick={handleSubmit}>Next</Button>
    </form>
    </>
  );
} 

export default Support;