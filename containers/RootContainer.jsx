/** (c) Walgreen Co. All rights reserved.**/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import RootItem from '../components/Root.jsx';
import { updateDisplayName } from '../store/actions/rootName.jsx';
export class rootContainer extends Component {	
	constructor(props) {
        super(props);
        this.state={
            displayHeader : 'Your Author Name is : '
        }
    } 
    componentDidMount(){
        const { displayName, dispatch } = this.props;
        dispatch(updateDisplayName('Muthu Raja'));
    } 
	render() {	
        const { displayName, dispatch } = this.props;
        const { displayHeader } = this.state;
		return <RootItem displayHeader={displayHeader} displayName={ displayName } dispatch={dispatch}/>;
	}
}
const mapStateToProps = (state) => {
    const { rootName }=state;	    
	return {
        displayName: rootName.displayName
    };
};
export default connect(
	mapStateToProps
)(rootContainer);
