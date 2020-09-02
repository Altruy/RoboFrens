import  React, {Component} from 'react';

class ErrorCatcher extends Component {
    constructor(props){
        super(props);
        this.state={
            hasError:false
        }
    }

    componentDidCatch(error,info){
        this.setState({hasError:true});
    }

    render(){
        return this.state.hasError ? <h1>There has been an error</h1> : this.props.children
    }

}

export default ErrorCatcher