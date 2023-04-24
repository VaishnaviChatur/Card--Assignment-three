
import './button.css'
export default function Button(props) {

 
   
  return (
    <div>
      <button className="sbutton" onClick={()=>alert(props.message)}>{props.Buttontext} </button>
    </div>
  )
}

