import React, { useState, useEffect } from 'react'
import TodoList from './components/TodoList'

const App = () => {
  const [toggle, setToggle] = useState(false)
  const [message, setMessage] = useState('')
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem('items')
    const initialValue = JSON.parse(saved)
    return initialValue || 
    [
      {text: 'study', completed: true},
      {text: 'read a book', completed: false},
      {text: 'exercise', completed: false}
    ]
  }, [])

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items))
  }, [items])

  return (
    <div>
      <TodoList 
        items={items}
        setItems={setItems}
        message={message}
        setMessage={setMessage}
        setToggle={setToggle}
        toggle={toggle}
      />
    </div>
  )
}

export default App