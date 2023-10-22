import React, {useState} from "react";

const FormExample = () => {
    const [formData, setFormData] = useState({})

    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [text, setText] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('ciao')
    }

    return(
        <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    onChange={(e) => setUserName(e.target.value)}
                />
                <input
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    name="text"
                    onChange={(event) => setFormData({
                        ...formData,
                        text: event.target.value
                    })}
                />
                <button type="submit" >CERCA</button>
            </form>
    )
}

export default FormExample;


/* class FormExample extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formData: {
                searchTerm: '',
                email: '',
                text: ''
            }
        }
    }

    handleInputChange = (event) => {
        const { name, value } = event.target
        this.setState((prevState) => ({
            formData: {
                ...prevState.formData,
                [name]: value,
            }
        }))
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('Form inviato')
    }

    render() {
        console.log(this.state.formData)
        const { username, email, text } = this.state.formData

        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={username}
                    name="searchTerm"
                    onChange={this.handleInputChange}
                />
               <input
                    type="email"
                    value={email}
                    name="email"
                    onChange={this.handleInputChange}
                />
                <input
                    type="text"
                    value={text}
                    name="text"
                    onChange={this.handleInputChange}
                />
                <button type="submit" >CERCA</button>
            </form>
        )
    }
}

export default FormExample; */