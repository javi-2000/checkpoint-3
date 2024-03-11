import { useState } from "react"

const initialData = {
    title: '',
    author: '',
    year: ''
}

export default function BookForm ( {addBook} ) {

const [data, setData] = useState(initialData)

function handleChange (e){
    const {name, value} = e.target;
    setData({
        ...data,
        [name] : value
    })
}

function handleSubmit (e) {
    e.preventDefault()
    addBook(data)
    setData(initialData)
}

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" value={data.title} onChange={handleChange} placeholder="title"/>
            <input type="text" name="author" value={data.author} onChange={handleChange} placeholder="author"/>
            <input type="text" name="year" value={data.year} onChange={handleChange} placeholder="year"/>
            <button type='submit'>Search</button>
        </form>
    )
}