import React, {Component} from 'react'


class Todo extends Component{
    state = {

    }

    handleSubmit = (event) => {
        const data = new FormData(event.target);
        fetch('http://127.0.0.1:5000/todos/', {
            method: 'POST',
            body: data,
        });
    }

    render() {
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="inputAddress">Title</label>
                        <input type="text" className="form-control" id="title" name="title" placeholder="Give the title..."/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAddress2">Body</label>
                        <input type="text" className="form-control" id="body" name="body"
                               placeholder="Please write body..."/>
                    </div>
                    <button type="submit" className="btn btn-primary">Insert</button>
                </form>
            </div>
        )
    }
}


export default Todo;
