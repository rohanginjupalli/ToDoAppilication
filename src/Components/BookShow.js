import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({book,onDelete,onEdit}){
    const [showEdit , setShowEdit] = useState(false)
    function handleDeleteClick(){
        onDelete(book.id);
    }
    function handleEditClick(event){
        setShowEdit(!showEdit)
        event.preventDefault();
    }
    const handleSubmit = ()=>{
        setShowEdit(false)
    }
    return <div className="book-show">
        {showEdit ? <BookEdit onSubmit={handleSubmit} onEdit={onEdit} book={book} /> : book.title}
        <div className="actions">
            <button className="edit" onClick={handleEditClick}>Edit</button>
            <button className="delete" onClick={handleDeleteClick} >Delete</button>
        </div>
    </div>
}

export default BookShow;