import React from 'react';
import ReactDOM from 'react-dom';



class Butt extends React.Component {
    render() {
        return (<div><button type="submit" > Click Here </button></div>
            )
        ;
    }
}
class Lab extends React.Component {
    render() {
        return (<div> <label for="name" > Name: </label> </div>);
    }
}
class Inp extends React.Component {
    render() {
        return (<div> 
            <input type="text" id="name" name="user_name"> </input> 
            </div>);
    }
}

class Forms extends React.Component {
    render() {
        return (<div><form>
            <Inp />
            <Lab />
            <Butt />
            </form></div>);
    }
}


    
