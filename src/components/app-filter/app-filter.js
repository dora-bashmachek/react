import { render } from "@testing-library/react";
import "./app-filter.css";
// import {Component} from 'react';

const AppFilter = (props) => {
    const buttonData=[
        {name:'all', label: 'все сотрудники'},
        {name:'rise', label: 'на повышение'},
        {name:'moreThen1000', label: 'з/п больше 1000$'}
    ];
    const buttons=buttonData.map(({name,label})=>{
        const active=props.filter===name;
        const classCss=active? 'btn btn-light': "btn btn-light-light";
        return(
            <button type="button"
            className={classCss}
            onClick={()=>props.onFilterSelect(name)}
            key={name}>
                {label}
            </button>
        )
    })
 
    return(
        <div className="btn-group">
            {buttons}
        </div>
    )

}

export default AppFilter;