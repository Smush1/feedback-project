import { useState } from "react"
import Card from "./shared/Card"

function FeedbackForm() {

    const [ text, setText ] = useState('');

    const handleTextChange = (e) =>{
        setText(e.target.value);
      //  console.log(e.target.value)
    }


  return (
    <Card>
        <form action="">
            <h2>How would you rate your service with us?</h2>
                <div className="input-group">
                    <input 
                    type="text" 
                    placeholder="Write a Review" 
                    onChange={handleTextChange} 
                    value= { text } />
                    <button type="submit">Send</button>
                </div>          
        </form>
    </Card>
  )
}

export default FeedbackForm