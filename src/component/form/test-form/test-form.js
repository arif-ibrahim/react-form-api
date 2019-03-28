import React, {Component} from 'react';


class MyForm extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {

        // event.preventDefault();
        const data = new FormData(event.target);
        fetch('http://127.0.0.1:5000/form-example', {
            method: 'POST',
            body: data,
        });

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="username">Enter username</label>
                <input id="username" name="username" type="text" />

                <label htmlFor="email">Enter your email</label>
                <input id="email" name="email" type="email" />

                <label htmlFor="birthdate">Enter your birth date</label>
                <input id="birthdate" name="birthdate" type="text" />

                <button>Send data!</button>
            </form>
        );
    }
}


export default MyForm;