import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, TextField } from '@material-ui/core';


function Feelings(){

    const dispatch = useDispatch();
    const history = useHistory(); 

    //  local state for input
    const [feeling, setFeeling] = useState('');



    const handleSubmit = (event) => {
    event.preventDefault();
    console.log('in handleSubmit, feeling is: ', feeling);

    // validate data
    if (feeling === '') {
    return alert('Please enter a number between 1 and 5');
    } else if (feeling > 5 || feeling < 1)     {
    return alert('Please enter a number between 1 and 5');
    } else {
    dispatch({
        type: 'FEELINGS',
        payload: {feeling }
    })
      // reset local state on submission
    setFeeling('');

      // move user to the next page 
    history.push('/Understanding');
    }
}

return(
    <>
    <h2>How are you feeling today?</h2>
    <form onSubmit={handleSubmit}>
        <TextField 
        type="number" 
        id="filled-basic" 
        placeholder="1 - 5" 
        min="1"
        max="5"
        value={feeling}
        // turn to number
        onChange={event => setFeeling(Number(event.target.value))} 
        />
        <br />
        <Button onClick={handleSubmit}>Next</Button>
    </form>
    </>
  );
} 

export default Feelings;