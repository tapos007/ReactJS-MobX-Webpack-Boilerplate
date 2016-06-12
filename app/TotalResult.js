import React, {
    PropTypes,
} from 'react';

import {observer} from "mobx-react";
import StudentInfo from './store/StudentInfo';
const TotalResult = observer(React.createClass({
    render() {
        return (
            <h1>Total number of Student {StudentInfo.totalStudent}</h1>
        );
    }
}));

export default TotalResult;
