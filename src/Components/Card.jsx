import Button from './Button'
import './card.css'
function Card (props)  {
 
  return (
   
    <div >
        <p className="carddesign">
          
                    <img className='imgs' src={props.link}/>
          <br></br>
    
          {props.jobdes}<hr></hr><br></br>{props.name}<br></br><br></br>{props.designation}
          <hr></hr>
        <Button message={props.name} Buttontext='More ...'
       
        // message={props.name}
        /></p>
      
    </div>
  )
}

export default Card