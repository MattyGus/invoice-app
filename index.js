const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// "baza"
let invoices = [];


// CREATE invoice
app.post("/invoices", (req, res) => {
    const { client, amount, 
        description } = req.body;

        if (!client || !amount) {
            return res.status(400).json({
                massage: "Client and amount are required"
            });
            getInvoices();
        }

const newInvoice = {
    id: Date.now(),
    client, 
    amount, 
    description, 
    date: new Date(), 
    invoiceNumber:"2026-" + 
    (invoices.length + 1)
};

    invoices.push(newInvoice);

res.json(newInvoice);
});

// READ 
app.get("/invoices", (req, res) => {res.json(invoices);});

app.listen(3000, () => {console.log("Server running on http://localhost:3000");});

// DELETE 
app.delete("/invoices/:index", (req, res) => {
    const index = parseInt(req.params.index);
    

    invoices.splice(index, 1);
    
    res.json({message: "Invoice delete"
    });
});