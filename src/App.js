import './Styles/App.css';
import React, {useEffect} from "react"
import MUIDataTable from "mui-datatables";
import {MuiThemeProvider} from '@material-ui/core/styles'
import Theme from './Styles/Theme'
import Settings from './TableSettings'

async function retrieveWalmartIssues() {
    const response = await fetch("https://api.github.com/repos/walmartlabs/thorax/issues");
    const jsonData = await response.json();

    console.log(jsonData)
    return jsonData;
}

function App() {
    const [data, setData] = React.useState([]);
    const [json, setJson] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    const columns = Settings.Columns(json);

    const [options] = React.useState(Settings.Options);

    useEffect(() => {
        retrieveWalmartIssues().then(data => {
            setData(data.map(item => {
                return [
                    "",
                    item.id,
                    item.title,
                    item.user['login']
                ]
            }))
            setJson(data);
            setLoading(false)
        })
    }, [])


    return (
        <div className="App">
            <header className="App-header">
                <img src={"./logo512.png"} style = {{position: 'absolute', width: '10%', paddingLeft:'50%', paddingTop:'30%'}}/>
                {loading && <h3 color="white">loading...</h3>}
                {!loading && <MuiThemeProvider theme={Theme}> <MUIDataTable data={data} columns={columns} options={options}/> </MuiThemeProvider>}

            </header>
        </div>
    );
}

export default App;


