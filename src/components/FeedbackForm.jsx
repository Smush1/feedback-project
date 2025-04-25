import { useState } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

function FeedbackForm({handleAdd}) {
  
  const [ text, setText ] = useState('');
  const [rating, setRating] = useState(10)
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


    const handleSubmit = (e)=>{
      e.preventDefault()
      if(text.trim().length > 10){
        const newFeedback = {
          text,
          rating,
        }

        handleAdd(newFeedback)

        setText('')

        console.log(newFeedback)
      } 
    }


  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us?</h2>

              <RatingSelect select={(rating)=>{setRating(rating)}}/>
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