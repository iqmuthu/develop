/** (c) Walgreen Co. All rights reserved.**/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import RootItem from '../components/Root.jsx';
import FlamesComponent from '../components/flames.jsx';
import { updateStudentDetails } from '../store/actions/studentActions.jsx';
import { updateDisplayName } from '../store/actions/rootName.jsx';
export class rootContainer extends Component {	
	constructor(props) {
        super(props);
        this.state={
            displayHeader : 'Author Name is : ',
            selectedOption:''
        }
        this.onUpdateStudentList = this.onUpdateStudentList.bind(this);
    } 
    onUpdateStudentList(){
        axios.get('../json/category.json').then((response) =>{
            this.props.dispatch(updateStudentDetails(response.data));
        });
    }
    handleOptionChange(event){
         this.setState({
            selectedOption: event.target.value
          });
    }
    componentDidMount(){
        const { displayName, dispatch } = this.props;
        dispatch(updateDisplayName('Muthu Raja'));
    } 
	render() {	
        const { displayName, dispatch, studentList, searchValue, flames } = this.props;
        const { displayHeader, selectedOption } = this.state;
        return (
            <div>
                <p style={{color: 'blue'}} >Welcome to react & redux with webpack - 2 </p>
                <hr/>
                    <div>
                        <label>
                            <input type="radio" name='rootChk' value="option1" onChange={(e)=>this.handleOptionChange(e)}/>
                            Flames
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="radio" name='rootChk' value="option2" onChange={(e)=>this.handleOptionChange(e)}/>
                            Student List
                        </label>
                    </div>
                <hr/>
             {  
                 selectedOption == 'option2' && 
                <div>
                    <RootItem
                    displayHeader={displayHeader} 
                    displayName={ displayName } 
                    dispatch={dispatch} 
                    onStudentList={this.onUpdateStudentList} 
                    studentList={studentList}
                    searchValue = { searchValue }
                    />
                    <hr/>
                </div>
            }
            {
              selectedOption == 'option1' && <div>                
                    <FlamesComponent 
                    flames={flames}  
                    dispatch={dispatch} 
                    />
                    <hr/>
                </div>  
            }          
            </div>
        );
	}
}
const mapStateToProps = (state) => {
    const { rootName, studentDetails, flames }=state;	    
	return {
        displayName: rootName.displayName,
        studentList: studentDetails.studentList,
        searchValue:studentDetails.searchValue,
        flames
    };
};
export default connect(
	mapStateToProps
)(rootContainer);
