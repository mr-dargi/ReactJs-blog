import { useState } from "react"

export default function CreateNewBlog() {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    author: ""
  });

  const handleChange = event => {

    const { name, value } = event.target;

    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  console.log(formData);

  return (
   <div className="create">
    <h2>Add a New Blog</h2>
    <form>
      <label>Add a New Blog:</label>
      <input
        type="text"
        required
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
      <label>Blog body:</label>
      <textarea
        required
        name="body"
        value={formData.body}
        onChange={handleChange}
      ></textarea>
      <label>Blog author:</label>
      <select
        name="author"
        value={formData.author}
        onChange={handleChange}
      >
        <option value="">-- Choose Option --</option>
        <option value="Mohammad Reza Dargi">Mohammad Reza Dargi</option>
        <option value="Amir Mohammad">Amir Mohammad</option>
        <option value="Jadi">Jadi</option>
      </select>
      <button>Add Blog</button>
    </form>
   </div>
  )
}