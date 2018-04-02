import React from 'react';
import { updateDisplayName } from '../store/actions/rootName.jsx';
import { updateSearchName } from '../store/actions/studentActions.jsx'; 
// Root componnet is a child of root container
export class RootItem extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            selectedItem :{},
            enterFocus : true
        };
        this.onSearchList = this.onSearchList.bind(this);
    }
    componentDidMount(){
        this.props.onStudentList();
    }
    onClickList(item){
        const { studentList } = this.props;        
        this.setState({ selectedItem :item});
    }
    onSearchList(event){
        const{ value } = event.target;
        this.props.dispatch(updateSearchName(value));
    }
    onChangeSearchList(event){
        const{ value } = event.target;
        this.props.dispatch(updateSearchName(value));
    }
    onFocusSearchList(event){
        const{ value } = event.target;
        value &&  this.props.dispatch(updateSearchName(value));
    }
    onBlurSearchList(event){
        const{ value } = event.target;
        this.props.dispatch(updateSearchName(value));
    }
    render() {
        const styles = {
            color: '#000',
            ':hover': {
                backgroundColor: '#0074d9'
            }
        };
        const{ displayHeader, displayName, studentList, searchValue } = this.props;    
        const { selectedItem } = this.state;
        let searchString = searchValue && searchValue.toLocaleLowerCase();
        return(
            <div>                
                <p style={{color: 'blue'}} >Welcome to react & redux with webpack - 2 </p>
                <hr/>
                <p>{displayHeader} <span>{displayName}</span></p>
                <hr/>
                <div>
                <b>Selected Student Information</b>
                    {
                        selectedItem &&
                        <div>
                            <p>Name  : <b>{selectedItem.Name}</b></p>
                            <p>DOB   : <b>{selectedItem.DOB}</b></p>
                            <p>Place : <b>{selectedItem.Place}</b></p>
                            <p>Rating: <b>{selectedItem.Rating}</b></p>
                            <p>Total : <b>{selectedItem.Total}</b></p>
                            
                        </div>
                    }   
                </div>  
                <hr/>           
                <div>
                    <p>
                        Change Author Name : <input type='text' value={displayName} onChange={(e)=>this.props.dispatch(updateDisplayName(e.target.value))}/>
                    </p>
                </div>
                    <button onClick={()=>this.props.dispatch(updateDisplayName('Muthu Raja'))} style={styles}>Default Author Name</button>
                <hr/>
                <div>                
                Search Student Name : <input type='search' onKeyUp={(e)=>this.onSearchList(e)} onChange={(e)=>this.onChangeSearchList(e)} onBlur={(e)=>this.onBlurSearchList(e)} onFocus={(e)=>this.onFocusSearchList(e)}/>
                </div>                
                <div>
                    {
                        searchString && studentList && studentList.length>0 && studentList.map((item,index) =>{
                                let studentName = item.Name.toLocaleLowerCase();
                            return(
                                (studentName.indexOf(searchString)>=0) && <div key={index}>
                                    <p><a style={{'cursor':'pointer'}} onClick={()=>this.onClickList(item)}>{item.Name}</a></p>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}
export default RootItem;
