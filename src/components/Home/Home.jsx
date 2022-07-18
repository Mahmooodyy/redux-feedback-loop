import { useHistory } from 'react-router-dom';
import './Home.css';

function Home () {
  const history = useHistory();

  return(
    <>
      <h2>Let us know how you're feeling this week!</h2>
      <button
        variant="contained"
        color="primary"
        onClick={() => history.push('/question1')}
      >Start Feedback</button>
    </>
  );
} // end Home

export default Home;