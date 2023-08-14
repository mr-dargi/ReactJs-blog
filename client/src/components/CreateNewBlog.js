export default function CreateNewBlog() {
  return (
   <div className="create">
    <h2>Add a New Blog</h2>
    <form>
      <label>Add a New Blog:</label>
      <input
        type="text"
        required
      />
      <label>Blog body:</label>
      <textarea
        required
      ></textarea>
      <label>Blog author:</label>
      <select>
        <option value="Mohammad Reza Dargi">Mohammad Reza Dargi</option>
        <option value="Amir Mohammad">Amir Mohammad</option>
        <option value="Jadi">Jadi</option>
      </select>
      <button>Add Blog</button>
    </form>
   </div>
  )
}