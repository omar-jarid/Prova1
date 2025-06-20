import { useState } from "react";
import './StringStateExample.css';

function StringStateExample() {
    const [message, setMessage] = useState("");
    const [username, setUsername] = useState("");

    const handleMessageChange = (event) => setMessage(event.target.value);

    const handleUsernameChange = (event) => {
        const value = event.target.value;
        const cleanValue = value.replace(/[^a-zA-Z0-9]/g, "");
        setUsername(cleanValue);
    }

    const clearMessage = () => setMessage("");

    return(
        <div className="form">
            <div className="form-field">
                <label>Messaggio:</label>
                <input 
                    type="text" 
                    value={message} 
                    onChange={handleMessageChange}
                    placeholder="Scrivi un messaggio..."/>
                <button onClick={clearMessage}>Pulisci</button>
                <p>Hai scritto: "{message}" ({message.length} caratteri)</p>
            </div>
            <div className="form-field">
                <label>Username (solo lettere e numeri):</label>
                <input 
                    type="text" 
                    value={username} 
                    onChange={handleUsernameChange}
                    placeholder="Username..."/>
                <p>Username: "{username}"</p>
            </div>
        </div>
    );
}

export default StringStateExample;