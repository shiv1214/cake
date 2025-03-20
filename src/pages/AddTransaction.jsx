import React, { useState } from "react";
const AddTransaction = () => {
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Transaction Added:", { amount, category });
    };
    return (
        <div>
            <h2>Add Transaction</h2>
            <form onSubmit={handleSubmit}>
                <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
                <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} required />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};
export default AddTransaction;
