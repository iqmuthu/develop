/** (c) Walgreen Co. All rights reserved.**/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import RootItem from '../components/Root.jsx';
import { updateStudentDetails } from '../store/actions/studentActions.jsx';
import { updateDisplayName } from '../store/actions/rootName.jsx';
export class rootContainer extends Component {	
	constructor(props) {
        super(props);
        this.state={
            displayHeader : 'Author Name is : '
        }
        this.onUpdateStudentList = this.onUpdateStudentList.bind(this);
    } 
    onUpdateStudentList(){
        axios.get('../json/category.json').then((response) =>{
            this.props.dispatch(updateStudentDetails(response.data));
        });
    }
    componentDidMount(){
        const { displayName, dispatch } = this.props;
        dispatch(updateDisplayName('Muthu Raja'));
    } 
	render() {	
        const { displayName, dispatch, studentList, searchValue } = this.props;
        const { displayHeader } = this.state;
        return <RootItem
         displayHeader={displayHeader} 
         displayName={ displayName } 
         dispatch={dispatch} 
         onStudentList={this.onUpdateStudentList} 
         studentList={studentList}
         searchValue = { searchValue }
         />;
	}
}
const mapStateToProps = (state) => {
    const { rootName, studentDetails }=state;	    
	return {
        displayName: rootName.displayName,
        studentList: studentDetails.studentList,
        searchValue:studentDetails.searchValue
    };
};
export default connect(
	mapStateToProps
)(rootContainer);
