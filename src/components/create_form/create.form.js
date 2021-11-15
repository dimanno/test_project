import {useState} from "react";

import './form.css';

export function CreateForm() {
    const [formState, setFormState] = useState({
        username: '',
        firstname: '',
        lastname: '',
        email: '',
        type: '',
        password: '',
        repeat_password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const inputChange = () => {

    }

    return (
        <div className={'formContainer'}>
            <h4>Create new user</h4>
            <form name='createUser' onSubmit={handleSubmit}>
                <div className={'formField'}>
                    <label
                        htmlFor={'username'}
                        className={'labelField'}
                    >
                        Username
                    </label>
                    <input
                        className={'inputField'}
                        name='username'
                        type='text'
                        value={formState.username}
                        onChange={inputChange}

                    />

                    <label
                        htmlFor={'firstname'}
                        className={'labelField'}
                    >
                        First name
                    </label>
                    <input
                        className={'inputField'}
                        name='firstname'
                        type='text'
                        value={formState.firstname}
                        onChange={inputChange}

                    />

                    <label
                        htmlFor={'lastname'}
                        className={'labelField'}
                    >
                        Last name
                    </label>
                    <input
                        className={'inputField'}
                        name='lastname'
                        type='text'
                        value={formState.lastname}
                        onChange={inputChange}

                    />

                    <label
                        htmlFor={'email'}
                        className={'labelField'}
                    >
                        Last name
                    </label>
                    <input
                        className={'inputField'}
                        name='email'
                        type='email'
                        value={formState.email}
                        onChange={inputChange}

                    />

                    <label
                        htmlFor={'type'}
                        className={'labelField'}
                    >
                        Type
                    </label>
                    <input
                        className={'inputField'}
                        name='type'
                        type='text'
                        value={formState.type}
                        onChange={inputChange}

                    />

                    <label
                        htmlFor={'password'}
                        className={'labelField'}
                    >
                        Password
                    </label>
                    <input
                        className={'inputField'}
                        name='password'
                        type='password'
                        value={formState.password}
                        onChange={inputChange}

                    />

                    <label
                        htmlFor={'repeat_password'}
                        className={'labelField'}
                    >
                        Repeat password
                    </label>
                    <input
                        className={'inputField'}
                        name='repeat_password'
                        type='password'
                        value={formState.repeat_password}
                        onChange={inputChange}
                    />
                </div>
            </form>
            <div className={'wrap-button'}>
                <button className={'btn'}
                    // onClick={}
                >
                    Create
                </button>
            </div>

        </div>
    )
}
