import React, {Component} from 'react';


class showTodos extends Component {
    state = {
        data: null,
    }

    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     // const data = new FormData(event.target);
    //     // console.log(event.target);
    //
    //     fetch('http://127.0.0.1:5000/todos/', {
    //         method: 'GET',
    //         // body: data,
    //     });
    // };

    componentDidMount() {
        var myHeaders = new Headers();
        var myInit = { method: 'GET',
            headers: myHeaders,
            mode: 'no-cors',
            cache: 'default' };

        // fetch('http://127.0.0.1:5000/todos/', myInit)
        //     .then(response => response.json())
        //     .then(data => this.setState({ data: data }));
        // console.log(this.state.data)
        fetch('http://127.0.0.1:5000/todos/', myInit)
            .then(function(response) {
                return response.body;
            })
            .then(function(myJson) {
                console.log(myJson);
            });
        console.log("component did mount");
    }

    render() {
        console.log(this.state.data)

        return(
            <div className="container">
                {/*<button type="submit" onClick={this.handleSubmit} className="btn btn-primary">shows Lists</button>*/}
                <div className="table-responsive">
                    <table className="table">
                        <caption>List of todos</caption>
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Body</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );



    }
}


export default showTodos;