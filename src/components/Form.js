import React, { useState } from 'react'

const Form = ({ items, setItems, toggle, setToggle, setMessage }) => {
  const [input, setInput] = useState('')

  const handleChange = (e) => {
    setInput(e.target.value)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.length > 0){
      let itemsCopy = [...items]
      const itemInput = input
      const newItem = {
        text: itemInput,
        completed: false
      }
      itemsCopy.concat(newItem)
      if (itemsCopy.find(item => item.text.toLowerCase() === itemInput.toLowerCase())){
        setMessage('item is already in list')
        setTimeout(() => setMessage(''), 4000)
      } else {
        setItems(items.concat(newItem))
        setInput('')
        setToggle(!toggle)
        setMessage('')
      } 
    } else {
      setMessage('cannot add empty item')
      setTimeout(() => setMessage(''), 4000)
    }
  }

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <input 
          onChange={handleChange}
          value={input}
          placeholder='add new item'
          autoFocus
        ></input>
        <button type='submit'><i className='fas fa-edit'></i>Submit</button>
      </form>
    </div>
  )
}

export default Form