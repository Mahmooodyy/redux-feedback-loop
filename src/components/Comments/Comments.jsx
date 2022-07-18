import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Comments(){
  const dispatch = useDispatch();
  const history = useHistory();
  const feedback = useSelector(store => store.feedback);

  let commentsReduxState;

  if (feedback.comments) {
    console.log('comments is', feedback.comments);
    commentsReduxState = feedback.comments;
  } else {
    console.log('support is undefined');
    commentsReduxState = '';
  }

  // local state for input
  const [comments, setComments] = useState(commentsReduxState);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('in handleSubmit, comment is: ', comments);

    dispatch({
      type: 'SET_COMMENTS',
      payload: { property: 'comments', value: comments }
    })

    setComments('');

    history.push('/reviewFeedback');
  } 

  return(
    <>
      <h2>Do you have any additional comments?</h2>
      <form onSubmit={handleSubmit}>
      <input 
      placeholder='leave a comment'
      value={comments}
      onChange={event => setComments(event.target.value)}
      ></input>
      <button onClick={handleSubmit}>Next</button>
      </form>
    </>
  );
}

export default Comments;