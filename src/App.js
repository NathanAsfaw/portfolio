import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 1
        }
        this.main=this.main.bind(this);
    }
     main(){
         setInterval(this.setState({counter:this.state.counter+1}));
     }

    render() {
        return (<div>
            <div>{this.state.counter}</div>
            <button onClick={this.main}>click me</button>
            </div>
        )
    }
   
}
 
export default App;