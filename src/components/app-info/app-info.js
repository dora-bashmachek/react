import "./app-info.css";

const AppInfo = ({inc, emp}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {emp}</h2>
            <h2>Премию получат: {inc} </h2>
        </div>
    )
}

export default AppInfo;