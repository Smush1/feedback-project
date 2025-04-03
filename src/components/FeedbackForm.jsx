import { useState } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

function FeedbackForm() {
  
  const [ text, setText ] = useState('');
  const [ btnDisabled, setBtnDisabled ] = useState(true);
  const [ message, setMessage ] = useState('');

    const handleTextChange = (e) =>{
      if(text === ''){
        setBtnDisabled(true)
        setMessage(null)
      }
      else if(text!== null && text.trim().length < '10'){
        setMessage('Message should contain at least 10 characters')
        setBtnDisabled(true)
      }

      else{
        setBtnDisabled(false)
        setMessage(null)
      }

        setText(e.target.value);
      //  console.log(e.target.value)
    }


  return (
    <Card>
        <form action="">
            <h2>How would you rate your service with us?</h2>

              <RatingSelect/>
                <div className="input-group">
                    <input 
                    type="text" 
                    placeholder="Write a Review" 
                    onChange={handleTextChange} 
                    value= { text } />
                    <Button type="submit" isDisabled={btnDisabled}>Send</Button>
                </div> 
                { message && (<div className="message">{message}</div>)}         
        </form>
    </Card>
  )
}

export default FeedbackForm