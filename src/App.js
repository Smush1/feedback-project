import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/feedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

function App() {

  const [ feedback, setFeedback ] = useState(FeedbackData);

  

  const deleteFeedback = (id) => {
    if(window.confirm( 'Are you sure you want to delete?')){
      // Updating Feedback
      setFeedback(feedback.filter((item) => item.id !== id ))
    }
  }

  return (<>
    < Header bgColor="rgba(0,0,0,0.4)" textColor="#ff6a95" />
    <div className="container">
      <FeedbackForm />
      <FeedbackStats feedback={feedback} /> 
      <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
    </div>
    </>
  );
}

export default App;
