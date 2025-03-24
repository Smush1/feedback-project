function Card({children, reverse=false}) {
   // console.log(children)

    // conditional class
  //return <div className={` card ${reverse && 'reverse'}`}>{children}</div>

  // Conditional styling
  return <div className='card' style={{
    backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
    color: reverse ?   '#fff'  :  'rgb(0,0,0)'
   }}>{children}</div>
}

export default Card