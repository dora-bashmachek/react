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
        {name:'David', salary:800, increase:true, id:1},
        {name:'Alex', salary:8000, increase:false, id:2},
        {name:'Carl', salary:8500, increase:true, id:3}
      ],
      term:'',
      filter: "moreThen1000",
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
  filterPost=(items,filter)=>{
    switch(filter)
    {
      case 'rise':
        return items.filter(item=>item.rise);
      case 'moreThen1000':
        return items.filter(item=>item.salary>1000);
      default:
        return items
    }
      }
      searchEmp=(items,term)=>{
        if (term.length===0) {
          return items
        }
        items.filter(items=>{
          return items.namew.indexOf(term)>-1
        })
      }
      onUpdateSearch=(term)=>{
        this.setState({term})
      }
      onFilterSelect=(filter)=>
      {
        this.setState({filter});
      }
  render(){
    //const data=this.state;
    const {data,term,filter}=this.state;
    const countEmp=this.state.data.length
    const increase=this.state.data.filter(item=> item.increase).length
    const visibleData=this.filterPost(this.searchEmp(data,term),filter)
  return (
    <div className="app">
        <AppInfo emp={countEmp} inc={increase} />

        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
            <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
        </div>

        <EmployeesList data={visibleData}
        onDelete={this.deleteItem}/>
        <EmployeesAddForm
        onAdd={this.addItem}/>
        {/* <ForState/> */}
    </div>
  );
}}

export default App;