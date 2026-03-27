import React from 'react'
import PropTypes from 'prop-types'

const App = props => {
  const [form, setForm] = useState({id:'', title:'', author:''})
  const [books, setBooks] = useState([

  ])

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm({...form, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post("/books", form )
      .then(res => {
        console.log(res)
        // limpa formulario
        setForm({id:'', title:'', author:''})
        getbooks();
      })
      .catch(err => console.log(err))
  }

  const getbooks = () => {
    api.get("/books")
    .then(res => setBooks(res.data))
    .catch(err => console.log(err))
  }

  return (
    <div>
      <form>
        <Input id="id" label="ID" name="id"
        value={form.id} onChange={handleChange} />
        <Input id="title" label="Title" name="title"
        value={form.title} onChange={handleChange} />
        <Input id="author" label="Author" name="author"
        value={form.author} onChange={handleChange} />
        <button>
          <h2>Submit</h2>
        </button>
      </form>   
    
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Author</th>
          <th>Author</th>
        </tr>
      </thead>
      <tbody>
        {books.map(book)=><tr>
          <td>{book.id}</td>
          <td>{book.title}</td>
          <td>{book.author}</td>
          <td>X</td>
        </tr>)}
        

      </tbody>
    </table>
    </div>
  )
}

App.propTypes = {

}

export default App