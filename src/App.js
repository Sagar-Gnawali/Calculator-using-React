import React , { Component } from 'react';
import './App.css';
import Btns from './components/button';
class App extends Component {
  
  state={
    result:''
  }
  clickbutton = (e)=>
  {
    if(e==='=')
    {
      this.calculate();
    }
    else if(e==='c')
    {
      this.clear();
    }
    else if(e==='ce')
    {
      this.back();
    }
    else
    {
      this.setState({
        result:this.state.result +e
      });
    }
  }
  calculate= (e)=> {
    this.setState({
      result:eval(this.state.result)
    })
  }
  clear = ()=> {
    this.setState({
      result:''
    });
  }
  back = ()=> {
    this.setState({
      result:this.state.result.slice(0,-1)
    });
  }
    render() {
     return(
    <div className="App">
     <Btns clickbutton={this.clickbutton}  result={this.state.result}/>   
    </div>
  );
}
}
export default App;
