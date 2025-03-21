import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/feedbackData";

function App() {

  const [ feedback, setFeedback ] = useState(FeedbackData)

  return (<>
    < Header bgColor="rgba(0,0,0,0.4)" textColor="#ff6a95" />
    <div className="container">
      <FeedbackList feedback={feedback} />
    </div>
    </>
  );
}

export default App;
