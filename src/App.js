import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/feedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";

function App() {

  const [ feedback, setFeedback ] = useState(FeedbackData);

  const addFeedback=(newFeedBack)=>{
    newFeedBack.id = uuidv4()
    setFeedback( [newFeedBack, ...feedback])
  }

  const deleteFeedback = (id) => {
    if(window.confirm( 'Are you sure you want to delete?')){
      // Updating Feedback
      setFeedback(feedback.filter((item) => item.id !== id ))
    }
  }

  return (<>
    < Header bgColor="rgba(0,0,0,0.4)" textColor="#ff6a95" />
    <div className="container">
      <FeedbackForm handleAdd= {addFeedback}/>
      <FeedbackStats feedback={feedback} /> 
      <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
    </div>
    </>
  );
}

export default App;
