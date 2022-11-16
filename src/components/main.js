import { useState } from "react";

const Forms = () => {
  const [names, setNames] = useState("");
  const handleSubmit = (event) => {
    alert(`nama kamu adalah ${names}`)
  }
  return <div>
    <form onSubmit={handleSubmit}>
      <label>Nama kamu : </label>
      <input 
        type="text"
        value={names}
        onChange={(e) => setNames(e.target.value)}
        />
      <input type="submit"/>
    </form>
  </div>
}

export default Forms;