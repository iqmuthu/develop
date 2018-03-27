import React from 'react';
import { updateDisplayName } from '../store/actions/rootName.jsx';

export class RootItem extends React.Component {
    constructor(props) {
        super(props);       
    }
    render() {
        const styles = {
            color: '#000',
            ':hover': {
                backgroundColor: '#0074d9'
            }
        };
        const{ displayHeader, displayName } = this.props;
        return(
            <div>                
                <p style={{color: 'blue'}} >Welcome to react & redux with webpack - 2 </p>
                <p>{displayHeader} <span>{displayName}</span></p>
                <p>
                    <input type='text' value={displayName} onChange={(e)=>this.props.dispatch(updateDisplayName(e.target.value))}/>
                </p>
                <button onClick={()=>this.props.dispatch(updateDisplayName('Muthu Raja'))} style={styles}>i am only</button>
            </div>
        );
    }
}
export default RootItem;
// module.exports = Radium(Root);
