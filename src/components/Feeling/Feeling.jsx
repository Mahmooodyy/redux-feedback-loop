import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function Feeling(){
  const dispatch = useDispatch();
  const history = useHistory(); 
  const feedback = useSelector(store => store.feedback);

  let feelingReduxState;

  if (feedback.feeling) {
    console.log('feeling is', feedback.feeling);
    feelingReduxState = feedback.feeling;
  } else {
    console.log('feeling is undefined');
    feelingReduxState = '';
  }

  // local state for input
  const [feeling, setFeeling] = useState(feelingReduxState);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('in handleSubmit, feeling is: ', feeling);


    if (feeling === '') {
      return alert('Please enter a number between 1 and 5');
    } else if (feeling > 5 || feeling < 1)     {
      return alert('Please enter a number between 1 and 5');
    } else {

      dispatch({
        type: 'SET_FEELING_RATING',
        payload: { property: 'feeling', value: feeling }
      })

      setFeeling('');

      history.push('/question2');
    } 
  }


  return(
    <>
      <h2>How are you feeling today?</h2>
      <form onSubmit={handleSubmit}>
        <input 
        placeholder='1-5'
        value={feeling}
        onChange={event => setFeeling(Number(event.target.value))}
        ></input>
        <button onClick={handleSubmit}>Next</button>
      </form>

    </>
  );
}

export default Feeling;