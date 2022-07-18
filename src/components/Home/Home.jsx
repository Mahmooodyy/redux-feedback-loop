import { useHistory } from 'react-router-dom';


function Home () {
  const history = useHistory();

  return(
    <>
      <h2>Let us know how you're feeling this week!</h2>
      <button onClick={() => history.push('/question1')}>Start Feedback</button>
    </>
  );
} 

export default Home;