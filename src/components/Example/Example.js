import { Component } from "react";

class ForState extends Component{
    constructor(props){
        super(props);
        this.state={ age:17, position:""}
        this.Age=this.Age.bind(this);
    }
    Age() {
        this.setState(state =>({
            age: state.age+1
        }));
    }
    commitInputChanges=(e)=>{
        this.setState({
            position: e.target.value
        })
    }
    render(){
        return(
    <div>
    <h1>ФИО= "Dora" должность={this.state.position} возраст={this.state.age}</h1>
    <button onClick={()=>this.Age()}> ++++ </button>
    <form>
        <span> введите должность </span>
        <input type='text' onChange={this.commitInputChanges}></input>
    </form>
    </div>
        );
    }
}
 export default ForState;