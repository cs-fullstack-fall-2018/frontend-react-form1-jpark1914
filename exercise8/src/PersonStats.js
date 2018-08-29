import React, {Component} from 'react';

class PersonStats extends Component {
    constructor(props){
        super(props);
        this.state =
            {paragraph: " ",
            name: " ",
            age: " ",
            feeling: " "
            }
    }

    submitFunction = (event) =>{
        this.setState({paragraph: "Hello " + this.state.name + " your age is "+ this.state.age + " and you're feeling " + this.state.feeling});
        event.preventDefault();
    }
    nameChange = (event) =>{
        this.setState({name: event.target.value})
    }
    ageChange = (event) =>{
        this.setState({age: event.target.value})
    }
    feelingChange = (event) =>{
        this.setState({feeling: event.target.value})
    }
    render(){
        return(
            <div>
                <h1>Person Status</h1>
                <form onSubmit={this.submitFunction}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" onChange={this.nameChange} value={this.state.name}/>
                    <label htmlFor="age">Age: </label>
                    <input type="text" id="age" onChange={this.ageChange} value={this.state.age}/>
                    <label htmlFor="feeling">Feeling: </label>
                    <input type="text" id="feeling" onChange={this.feelingChange} value={this.state.feeling}/>
                    <input type="submit" value="Submit"/>
                </form>
                <p>
                    {this.state.paragraph}
                </p>
            </div>

        )
    }

}

export default PersonStats;