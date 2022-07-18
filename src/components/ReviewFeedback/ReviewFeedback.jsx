import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function ReviewFeedback({isFeedbackSubmitted, setIsFeedbackSubmitted}) {
  const history = useHistory();
  const dispatch = useDispatch();
  const feedback = useSelector(store => store.feedback);

  


  const backHome = () => {
    dispatch({ type: 'CLEAR_FEEDBACK' });
    
    history.push('/');
  };



  const submitFeedback = () => {
    console.log('in submitFeedback', feedback);

    // axios POST to DB
    axios.post('/api/feedback', feedback)
      .then(res => {
        console.log(`Server response after submission:`, res);
      })
      .catch(err => {
        console.log('There was an error adding feedback:', err);
        alert('There was an error adding feedback.');
      })
      backHome();
    } 

  return(
    <>

    <h2>Thank you for your feedback!</h2>

    <h4>Feeling: {feedback.feeling} </h4>
    <h4>Understanding: {feedback.understanding} </h4>
    <h4>Support: {feedback.support} </h4>
    <h4>Comments: {feedback.comments} </h4>
    <button onClick={submitFeedback}>Submit</button>
    
    </>
  );  
}

export default ReviewFeedback;