import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const nayoks =['Anuwar', 'Jafor', 'Alamgir', 'Salman','Shakib','Bappi', 'Shovo']

    const products = [
      {name: 'Photoshop', price: '$700.00'},
      {name: 'Illustrator', price: '$500.00'},
      {name: 'Pdf Reader', price: '$50.00'},
      {name: 'Adobe Premire', price: '$50.00'},
  ]
  const nayoknames = nayoks.map(nayok => nayok)
  console.log(nayoknames)

  const productNames = products.map(products => products)
  console.log(productNames)

    return (
        <div className="App">
            <header className="App-header">
                <p>I am a React Person</p>
                    <Counter></Counter>


                    <Users></Users>


                <ul>
                  {
                    nayoks.map(nayok => <li>{nayok}</li>)
                  }
                    {
                      products.map(product => <li>{product.name}</li>)
                    }
                </ul>
                  {
                    products.map(pd => <Product product={pd}></Product>)
                  }

                <Product name={products[0].name} price={products[0].price}></Product>
                <Product name={products[1].name} price={products[1].price}></Product>
                <Product name={products[2].name} price={products[2].price}></Product>
                <Product name={products[3].name} price={products[3].price}></Product>

                <Person name="Munna" job="Football"></Person>
                <Person name="Masum" job="Dorshok"></Person>

            </header>
        </div>
    );
}
function Users(){
  const [users, setUser] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data));
  },[])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}


    function Counter(){
      const [count, setCount] = useState(10);
      const handleIncrease = () => setCount(count + 1);
      
      return(
        <div>
          <h1>Count: {count}</h1>
          <button onClick ={() => setCount(count + 1)}>Increase</button>
          <button onClick ={() => setCount(count - 1)}>Decrease</button>
        </div>
      )
    }
    


function Product(props){
  const productStyle={
    border:'1px solid gray',
    borderRadius: '5px',
    backgroundColor:'lightgray',
    height:'200px',
    width: '200px',
    float:'left'
  }
    return(
      <div style={productStyle}>
          <h3>{props.name}</h3>
          <h5>{props.price}</h5>
          <button>Buy Now</button>
      </div>
    )
}



function Person(props){
  return (
    <div style={{color:'red',border:'2px solid white', width:'400px',margin:'10px'}}>
      <h2>My Name: {props.name}</h2>
      <p>My Profession: {props.job}</p>
    </div>
  )
}

export default App;
