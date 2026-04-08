import { useState, useEffect } from "react";

function App() {

  //STATES

 const[client, setClient] = useState("");
  const[amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [invoices, setInvoices] = useState([]);

  //CREATE
 

  const getInvoices = async () => {
    const res = await
     fetch("http://localhost:3000/invoices"
      , { 
    
      method: "POST",
      headers:{
         "Content-Type":  "application/json",
      },
      body: JSON.stringify({
        client,
        amount: Number(amount),
        description
      }),
    });
    
    const data =await res.json();
    console.log(data);
  
    getInvoices();
  };

  //GET
   
    setInvoices(data);
  return (
    <div style={{padding: 20}}>
      <h1>AI računovdstvo </h1>
  
      <input
      placeholder="client"
      value={client}
      onChange={(e) => setClient(e.target.value)}
      />
      <br /> <br />

      <input
      placeholder="amount"
      value={amount}
      onChange={(e) => setAmount(e.target.value)} 
      />
      <br /><br />

      <input
      placeholder="Desription"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      />

      <button onClick={createInvoice}>
         createInvoice
      </button>
      

      <h2>računi:</h2>
      {invoices.map((inv, index) => (
        <div key={index}>
         <p><b>{inv.client}</b></p>
         <p>{inv.amount} €</p>
         <p>{inv.description}</p>
         <hr />
    </div>
      ))}
   </div>
  );
};
export default App; 