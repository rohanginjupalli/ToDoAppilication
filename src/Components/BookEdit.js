import { useState } from "react"

function BookEdit({book,onEdit,onSubmit}){
    const [title,setTitle] = useState(book.title)

    const  handleChange = (event)=>{
        return setTitle(event.target.value)
    }

    const handleSubmit = (event)=>{
        onEdit(book.id,title)
        event.preventDefault()
        onSubmit()
    }
    return(
    <form onSubmit={handleSubmit} className="book-edit">
        <label>Title</label>
        <input onChange={handleChange} className="input" value={title} />
        <button className="button is-primary">Save</button>
    </form>
    )
}

export default BookEdit