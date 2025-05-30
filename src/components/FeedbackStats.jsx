function FeedbackStats({feedback}) {
    //calculating average  and average store reduce array value
   let average =  feedback.reduce((acc,cur )=>{
        return (acc + cur.rating)
   }, 0) /feedback.length

   average = average.toFixed(1).replace(/[.,]0$/,'')

    console.log(average)

  return (
    <div className="feedback-stats">
        <h4> Reviews: {feedback.length}</h4>
        <h4> Average Rating: {isNaN(average) ? '0': average }</h4>
    </div>
  )
}

export default FeedbackStats