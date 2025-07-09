import React ,{useState} from "react";
function BookCreate({onCreate}){
    const [title,setTitle] = useState("")
    function handleChange(event){
        setTitle(event.target.value);
    }
    function handleSubmit(event){
        event.preventDefault()
        onCreate(title)
    }
    return <div className="book-create">
        <form onSubmit={handleSubmit}>
            <h3>Add A Book</h3>
            <input className="input" onChange={handleChange} value={title}  />
            <button className="button" >Create!</button>
        </form>
    </div>
}

export default BookCreate