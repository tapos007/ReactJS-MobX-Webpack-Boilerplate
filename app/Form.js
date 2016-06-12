import React, {
    PropTypes,
} from 'react';
import StudentInfo from './store/StudentInfo';
const Form = React.createClass({
    addStudent(e){
        StudentInfo.addStudent({name:this.refs.name.value, email:this.refs.email.value});
      e.preventDefault();
    },
    render() {
        return (
            <form onSubmit={this.addStudent}>
                <input type="text" ref="name" name="name" />
                <input type="text" ref="email" name="email" />
                <input type="submit" value="add Student"/>
            </form>
        );
    }
});

export default Form;
