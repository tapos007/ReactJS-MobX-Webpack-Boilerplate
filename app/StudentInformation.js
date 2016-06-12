import React, {
    PropTypes,
} from 'react';
import {observer} from "mobx-react";
import StudentInfo from './store/StudentInfo';
const StudentInformation = observer(React.createClass({
    render() {
        return (
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>name</th>
                    <th>email</th>
                </tr>
                </thead>
                <tbody>
                {StudentInfo.studentList.map(x=>(
                    <tr>
                        <td>{x.name}</td>
                        <td>{x.email}</td>
                    </tr>
                ))}


                </tbody>
            </table>
        );
    }
}));

export default StudentInformation;
