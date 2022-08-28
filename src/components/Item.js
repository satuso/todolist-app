import React, { useState } from 'react'

const Item = ({ setItems, items, item, removeItem }) => {
  const [checked, setChecked] = useState(item.completed)

  const handleChange = () => {
    const itemToUpdate = item
    const updatedItems = items.map(item => {
      if (item === itemToUpdate) {
        return { ...item, completed: !checked }
      } else {
        return item
      }
    })
    setItems(updatedItems)
    setChecked(!checked)
  }

  return (
    <div className='todo-item'>
      <input
        type='checkbox'
        id='checkbox'
        checked={item.completed ? true : false}
        onChange={() => handleChange(item)}
      ></input>
      <span className={item.completed ? 'check' : ''}>{item.text}</span>
      <button onClick={() => removeItem(item)}>x</button>
    </div>
  )
}

export default Item