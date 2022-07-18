import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function Understanding(){
  const dispatch = useDispatch();
  const history = useHistory(); 
  const feedback = useSelector(store => store.feedback);

  let understandingReduxState;
  
  if (feedback.understanding) {
    console.log('understanding is', feedback.understanding);
    understandingReduxState = feedback.understanding;
  } else {
    console.log('understanding is undefined');
    understandingReduxState = '';
  }

  // local state for input
  const [understanding, setUnderstanding] = useState(understandingReduxState);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('in handleSubmit, feeling is: ', understanding);


    if (understanding === '') {
      return alert('Please enter a number between 1 and 5');
    } else if (understanding > 5 || understanding < 1)     {
      return alert('Please enter a number between 1 and 5 ');
    } else {

      dispatch({
        type: 'SET_UNDERSTANDING_RATING',
        payload: { property: 'understanding', value: understanding }
      })

      setUnderstanding('');

      history.push('/question3');
    } 
  }


  return(
    <>
      <h2>Understand?</h2>
      <form onSubmit={handleSubmit}>
        <input 
        placeholder='1-5'
        value={understanding}
        onChange={event => setUnderstanding(Number(event.target.value))}
        ></input>
        <button onClick={handleSubmit}>Next</button>
      </form>

    </>
  );
}

export default Understanding;