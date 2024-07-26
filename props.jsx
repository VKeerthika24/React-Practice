import {Appprops} from 'C:/Users/Admin/OneDrive/Desktop/my-react-app/src/components/Appprops.jsx';
import 'C:/Users/Admin/OneDrive/Desktop/my-react-app/src/App.js';
import 'C:/Users/Admin/OneDrive/Desktop/my-react-app/src/index.css';
import PropTypes from "prop-types";
export const Student =(props)=>
{
    return(
        <div className="student">
            <table>
                <body>
                    
                
                <tr>
                    <th>Name: </th>
                    <td>{props.name}</td>
                </tr>
                <tr>
                    <th>Age: </th>
                    <td>{props.age}</td>
                </tr>
                <tr>
                    <th>is Good: </th>
                    <td>{props.isGood ? "YES" : "NO"}</td>
                </tr>
                </body>
            </table>
        </div>
    )
}
Student.prototype={
    name:PropTypes.string,
    age:PropTypes.number,
    good:PropTypes.bool
}
Student.defaultProps={
    name:"No Name",
    age:0,
    good:true
}