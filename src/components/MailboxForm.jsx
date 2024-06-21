

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
    owner: '',
    size: '',
}

const MailboxForm = ({addBox}) => {
    const [formData, setFormData] = useState(initialState)

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        addBox(formData)
        setFormData(initialState)
        navigate('/mailboxes')
    };

    const handleChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value});
    };

    return (
        <main>
            <h2>New Mailbox</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="owner">Owner Name:</label>
                <input 
                type="text" 
                id="owner"
                name="owner"
                value={formData.owner}
                onChange={handleChange}
                />
                <label htmlFor="size">Mailbox Size:</label>
                <input 
                type="text" 
                id="size"
                name="size"
                value={formData.size}
                onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </main>
    )
}

export default MailboxForm;