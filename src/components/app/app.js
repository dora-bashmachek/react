import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import {Component} from 'react';
import './app.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      data:[
        {name:'David', salary:800, increase:false, id:1},
        {name:'Alex', salary:8000, increase:false, id:2},
        {name:'Carl', salary:8500, increase:false, id:3}
      ]
    }
    this.maxId=4;
  }
  deletItem=(id)=>{
    this.setState(({data})=>{
      return{
        data:data.filter(item=>item.id!==id)
      }
    })
  }
  addItem=(name, salary)=>{
    const newItem={
      name,
      salary,
      increase: false,
      rise:false,
      id: this.maxId++
    }
    this.setState(({data})=>{
      const newArr=[...data, newItem];
      return{
        data: newArr
      }
    });
  }
  render(){
    //const data=this.state;
    const countEmp=this.state.data.length
    const increase=this.state.data.filter(item=> item.increase).length
  return (
    <div className="app">
        <AppInfo emp={countEmp} inc={increase} />

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>

        <EmployeesList data={this.state.data}
        onDelete={this.deleteItem}/>
        <EmployeesAddForm
        onAdd={this.addItem}/>
        {/* <ForState/> */}
    </div>
  );
}}

export default App;