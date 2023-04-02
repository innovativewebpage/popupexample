import React,{Component} from 'react';
import Popup from './Popup';

class App extends Component{

	constructor(props)
	{
		super(props);
		this.state = {
			showPopup : false,
			text:""
		}
		this.handleChange = this.handleChange.bind(this);
		this.togglePop = this.togglePop.bind(this);
	}
	
	handleChange(e) {
	this.setState({		
		text:e.target.value
	});
	}
	
	togglePop(){
	this.setState({		
		showPopup:!this.state.showPopup
		//showPopup:true
	});	
	}	

	render()
	{
		return(
					//<h1>Hello World</h1>
					
			<div>		
			<label for="">USERNAME</label><br/>
<input type="text" id="i1" 
onChange={this.handleChange}
value={this.state.text}/>



<br/>
<button className="button" onClick={this.togglePop}>CLICK ME</button>

{this.state.showPopup ?
<Popup text = "Pop Message!" 
closePopup ={this.togglePop} 
value={this.state.text}/> 

:null	
	}		
			</div>
		);
	}

}
export default App;

