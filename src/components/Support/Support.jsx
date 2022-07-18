import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function Support(){
  const dispatch = useDispatch();
  const history = useHistory(); 
  const feedback = useSelector(store => store.feedback);

  let supportReduxState;
  
  if (feedback.support) {
    console.log('support is', feedback.support);
    supportReduxState = feedback.support;
  } else {
    console.log('support is undefined');
    supportReduxState = '';
  }

  // local state for input
  const [support, setSupport] = useState(supportReduxState);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('in handleSubmit, support is: ', support);


    if (support === '') {
      return alert('Please enter a number between 1 and 5');
    } else if (support > 5 || support < 1)     {
      return alert('Please enter a number between 1 and 5 ');
    } else {

      dispatch({
        type: 'SET_SUPPORT_RATING',
        payload: { property: 'support', value: support }
      })

      setSupport('');

      history.push('/question4');
    } 
  }


  return(
    <>
      <h2>Support?</h2>
      <form onSubmit={handleSubmit}>
        <input 
        type={'number'}
        placeholder='1-5'
        value={support}
        onChange={event => setSupport(Number(event.target.value))}
        ></input>
        <button onClick={handleSubmit}>Next</button>
      </form>

    </>
  );
}

export default Support;