import React from 'react';
import { updateYourName, updatePartnerName, resetFlamesField } from '../store/actions/flamesActions.jsx'; 
export class FlamesComponent extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeYourName = this.onChangeYourName.bind(this);
        this.onChangePartnerName = this.onChangePartnerName.bind(this);
        this.onResetField = this.onResetField.bind(this);
        this.onFlamesCalc = this.onFlamesCalc.bind(this);
        this.state ={
            flamesRes:''
        };
    }
    componentWillReceiveProps(newProps){
        const { flames } = newProps;
        const { yourName, partnerName } = flames;
        if( !yourName || !partnerName) {
            this.setState({flamesRes : ''});
        }        
    }
    onFlamesCalc(){
        const { flames } = this.props;
        const { yourName, partnerName } = flames;
        let r = /\s+/g;
        let uname = yourName.toUpperCase();        
        let nameFirst = uname.replace(r,"");        
        if(nameFirst){
            let count = 0;
            let pname = partnerName.toUpperCase(); 
            let nameSecond = pname.replace(r,"");
            if(nameSecond){
                for(var xx=0; xx<nameFirst.length; xx++)
                {
                        for(var yy=0; yy<nameSecond.length; yy++)
                        {
                                if(nameFirst[xx] == nameSecond[yy])
                                {
                                        var a1 = nameFirst.substring(0,xx);
                                        var a2 = nameFirst.substring(xx+1,nameFirst.length);
                                        nameFirst = a1+a2;
                                        xx=-1;
                                        var b1 = nameSecond.substring(0,yy);
                                        var b2 = nameSecond.substring(yy+1,nameSecond.length);
                                        nameSecond = b1+b2;
                                        yy=-1;
                                        break;
                                }
                        }
                }
                var ss=(nameFirst+nameSecond);
                var l=ss.length;
                var ar = new Array("F", "L", "A", "M", "E", "S");
                var stp=1;
                let res = '';
                for(var x=6; x>1; x--)
                {
                    var g=((l%x)+stp)-1;
                    if(g>x)
                    {
                            g=g%x;
                    }
                    if(g==0)
                    {
                            g=ar.length;
                    }
                    ar.splice(g-1,1);
                    stp=g;                       
                }
                if(ar=="F"){
                    res="FRIENDS";                                      
                }
                else if(ar=="L") {
                    res="LOVER";                       
                }
                else if(ar=="A"){
                    res="AFFECTION";
                } 
                else if(ar=="M"){
                    res="MARRIAGE";
                }
                else if(ar=="E"){	
                    res="ENEMY";
                }
                else if(ar=="S"){
                    res="SISTER";
                }
                this.setState({flamesRes : res});
            } else {
                this.pNameTxt.value = '';
                this.props.dispatch(updatePartnerName(''));
            }
        } else { 
            this.uNameTxt.value ='';   
            this.props.dispatch(updateYourName(''));
        }
    }
    onResetField(){
        this.uNameTxt.value ='';
        this.pNameTxt.value = '';
        this.props.dispatch(resetFlamesField());        
    }
    onChangeYourName(event){
        const { value } = event.target;
        this.props.dispatch(updateYourName(value));
    }
    onChangePartnerName(event){
        const { value } = event.target;
        this.props.dispatch(updatePartnerName(value));
    }
    render() {  
            const { flames } = this.props;
            const { yourName, partnerName } = flames;
        return(
            <div>   
                FLAMES                            
                <div>
                    <p> Your Name : <input style={{marginLeft:'15px'}} type='text' ref={uTxt => this.uNameTxt = uTxt} onChange ={(e)=>this.onChangeYourName(e)}/>
                    {!yourName && <span style={{'color':'red'}}> Enter your name </span>}</p>
                    <p> Partner Name : <input type='text' ref={pTxt => this.pNameTxt = pTxt} onChange ={(e)=>this.onChangePartnerName(e)}/>
                    {!partnerName && <span style={{'color':'red'}}> Enter your partner name </span>}</p>
                </div>
                    { partnerName && yourName && <div><b>{this.state.flamesRes}</b></div> }
                <p style={{marginLeft:'105px'}}> 
                    <button onClick={()=>this.onFlamesCalc()}>FLAMES</button> 
                    <button style={{marginLeft:'20px'}} onClick={()=>this.onResetField()}>RESET</button> 
                </p>
            </div>
        );
    }
}
export default FlamesComponent;