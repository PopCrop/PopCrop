import React from 'react';  
import {forwardRef} from 'react' 
import MaterialTable from 'material-table';
import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

export default function BWFRankings(props) {

    const [selEvent, setselEvent] = React.useState()

    var MSranks = props.MSranks
    var WSranks = props.WSranks
    var MDranks = props.MDranks
    var WDranks = props.WDranks
    var XDranks = props.XDranks

    const columns = [
        {title: 'Rank', field: 'rank'},
        {title: 'Country', field: 'country'},
        {title: 'Player', field: 'name'},
        {title: 'Points', field: 'points'},
    ]

    const tableIcons = {
        Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
        Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
        Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
        DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
        Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
        Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
        FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
        LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
        NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
        ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
        SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
        ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
        ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
    };

    const showEvents = (e) =>  {
        const value = e.target.value
        setselEvent(value)

        if (value === "MSranktable") {
            document.getElementById('MSranktable').style.display = 'block'
            document.getElementById(selEvent).style.display = 'none'
        } else if (value === "WSranktable") {
            document.getElementById('WSranktable').style.display = 'block'
            document.getElementById(selEvent).style.display = 'none'
        } else if (value === "MDranktable") {
            document.getElementById('MDranktable').style.display = 'block'
            document.getElementById(selEvent).style.display = 'none'
        } else if (value === "WDranktable") {
            document.getElementById('WDranktable').style.display = 'block'
            document.getElementById(selEvent).style.display = 'none'
        } else if (value === "XDranktable") {
            document.getElementById('XDranktable').style.display = 'block'
            document.getElementById(selEvent).style.display = 'none'
        } 
    }
    
    try {
        console.log(XDranks)
        var MSranking = 
            <div id="MSranktable">
                <MaterialTable
                    columns={columns}
                    data={MSranks}
                    title="Men's Singles Ranking"
                    icons={tableIcons}
                />
            </div>

        var WSranking = 
            <div id="WSranktable">
                <MaterialTable
                    columns={columns}
                    data={WSranks}
                    title="Women's Singles Ranking"
                    icons={tableIcons}
                />
            </div>

        var MDranking = 
            <div id="MDranktable">
                <MaterialTable
                    columns={columns}
                    data={MDranks}
                    title="Men's Doubles Ranking"
                    icons={tableIcons}
                />
            </div>

        var WDranking = 
            <div id="WDranktable">
                <MaterialTable
                    columns={columns}
                    data={WDranks}
                    title="Women's Doubles Ranking"
                    icons={tableIcons}
                />
            </div>

        var XDranking = 
            <div id="XDranktable">
                <MaterialTable
                    columns={columns}
                    data={XDranks}
                    title="Mixed Doubles Ranking"
                    icons={tableIcons}
                />
            </div>

    } catch (error) {
        console.log("error");
    }

    return (
        <div className = "BWFrankings">
            <h1>BWF Player Results 2022</h1>
            <div>
                <select onChange={showEvents}>
                    <option value="Select">Select Event:</option>
                    <option value="MSranktable">Men's Singles</option>
                    <option value="WSranktable">Women's Singles</option>
                    <option value="MDranktable">Men's Doubles</option>
                    <option value="WDranktable">Women's Doubles</option>
                    <option value="XDranktable">Mixed Doubles</option>
                </select>
            </div>
            {MSranking}
            {WSranking}
            {MDranking}
            {WDranking}
            {XDranking}
        </div>
      )
}
