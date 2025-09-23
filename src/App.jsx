import './App.css'
import Counter from './counter'

function App() {

  function handleClick(){
    alert('I am clicked')
  }

  const handleClick3 = () => {
    alert('3 clicked')
  }

  const handleAdd5 = (num => {
    const newNum = num+5;
    alert (newNum)
  })
  return (
    <>
      <h3>Vite + React</h3>
      <Counter></Counter>
      <button onClick={handleClick}>Click me</button>
      <button
        onClick={function handleClick2() {
          alert("btn 2 clicked");
        }}
      >
        Click me 2
      </button>
      <button onClick={handleClick3}>Click me 3</button>
      <button onClick={() =>{
        alert ('Clicked 4')
      }}>Click me 4</button>

      <button onClick={()=>handleAdd5(10)}>Click Add 5</button>
    </>
  );
}

export default App
