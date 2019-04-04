import React, {Component} from 'react'


class Todo extends Component{
    state = {
        green: false,
        purple: false,
        blue: false,
        yellow: false,
        black: false,
        navyblue: false,
    };

    toogleGreen = () => {
        this.setState(prevState => ({
            green: !prevState.green,
        }));
    }

    togglePurple = () => {
        this.setState(prevState => ({
            purple: !prevState.purple,
        }));
    }

    toggleBlue = () => {
        this.setState(prevState => ({
            blue: !prevState.blue,
        }));
    }

    toggleYellow = () => {
        this.setState(prevState => ({
            yellow: !prevState.yellow,
        }));
    }

    toggleBlack = () => {
        this.setState(prevState => ({
            black: !prevState.black,
        }));
    }

    toggleNavyBlue = () => {
        this.setState(prevState => ({
            navyblue: !prevState.navyblue,
        }));
    }



    handleSubmit = (event) => {

        event.preventDefault();
        let arr = [];
        for (var key in this.state) {
            if(this.state[key] === true) {
                arr.push(key);
            }
        }
        let chckData = {
            check: arr.toString()
        };
        console.log(chckData)
        const data = new FormData(event.target);
        console.log(data.getAll('title'))
        fetch('http://127.0.0.1:5000/todos/', {
            method: 'POST',
            body: data,
        });
    };


    render() {
        console.log("navyBlue",this.state.navyblue)
        console.log("yellow", this.state.yellow)
        console.log("black", this.state.black)
        console.log("blue", this.state.blue)
        console.log("purple",this.state.purple)
        console.log("green",this.state.green)
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="inputAddress">Title</label>
                        <input type="text" className="form-control" id="stunder_neme" name="title" placeholder="Give the title..."/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAddress2">Body</label>
                        <input type="text" className="form-control" id="body" name="body"
                               placeholder="Please write body..."/>
                    </div>
                    <div className="form-row">
                        <div className="col-md-2"> Choose Colors</div>
                        <div className="col-md">
                            <div className="form-group form-row">
                                <div className="form-check col-md-2">
                                    <input checked={this.state.green}
                                           onChange={this.toogleGreen}
                                           className="form-check-input"
                                           type="checkbox"
                                            name="color" value="greensss"/>
                                    <label className="form-check-label" htmlFor="gridCheck">
                                        Green
                                    </label>
                                </div>
                                <div className="form-check col-md-2">
                                    <input
                                        checked={this.state.purple}
                                        onChange={this.togglePurple}
                                        className="form-check-input" type="checkbox"   name="color" value="purple"/>
                                    <label className="form-check-label" htmlFor="gridCheck">
                                        Purple
                                    </label>
                                </div>
                                <div className="form-check col-md-2">
                                    <input
                                        checked={this.state.blue}
                                        onChange={this.toggleBlue}
                                        className="form-check-input" type="checkbox"  name="color" value="blue"/>
                                    <label className="form-check-label" htmlFor="gridCheck">
                                        Blue
                                    </label>
                                </div>
                                <div className="form-check col-md-2">
                                    <input
                                        checked={this.state.black}
                                        onChange={this.toggleBlack}
                                        className="form-check-input" type="checkbox"   name="color" value="black"/>
                                    <label className="form-check-label" htmlFor="gridCheck">
                                        Black
                                    </label>
                                </div>
                                <div className="form-check col-md-2">
                                    <input
                                        checked={this.state.yellow}
                                        onChange={this.toggleYellow}
                                        className="form-check-input" type="checkbox"   name="color" value="yellow"/>
                                    <label className="form-check-label" htmlFor="gridCheck">
                                        Yellow
                                    </label>
                                </div>
                                <div className="form-check col-md-2">
                                    <input
                                        checked={this.state.navyblue}
                                        onChange={this.toggleNavyBlue}
                                        className="form-check-input" type="checkbox" name="color" value="navyblue"/>
                                    <label className="form-check-label" htmlFor="gridCheck">
                                        Navy Blue
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">Send</button>
                </form>
            </div>
        )
    }
}


export default Todo;
