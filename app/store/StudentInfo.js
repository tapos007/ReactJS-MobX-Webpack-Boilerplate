import { observable, computed  } from 'mobx';
class Student{

    @observable studentList = [
        {name:"sumon",email:"sumon@gmail.com"},
        {name:"rahim",email:"rahim@gmail.com"},
        {name:"karim",email:"karim@gmail.com"}
    ];

    @computed get totalStudent(){
        return this.studentList.length;
    }
    addStudent(aStudent){
        this.studentList.push(aStudent);
    }
}

const StudentInfo = new Student();
export default StudentInfo;