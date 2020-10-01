import React,{Component} from 'react';
import './style.css';
class btns extends Component{
    clickbutton= (data)=>
    {
        this.props.clickbutton(data.target.name);

    }
    render()
    {
        return(
            <div className='style'>
               
                <input className="textfield" value={this.props.result} ></input>
                <table>
                    <tr>
                        <td><button name='c' onClick={this.clickbutton} className="btnstyl">c</button></td>
                        <td><button name='ce' onClick={this.clickbutton} className="btnstyl">ce</button></td>
                        <td><button name='(' onClick={this.clickbutton} className="btnstyl">(</button></td>
                        <td><button name=')' onClick={this.clickbutton} className="btnstyl">)</button></td>
                    </tr>
                    <tr>
                        <td><button name='7' onClick={this.clickbutton} className="btnstyl">7</button></td>
                        <td><button name='8' onClick={this.clickbutton} className="btnstyl">8</button></td>
                        <td><button name='9' onClick={this.clickbutton} className="btnstyl">9</button></td>
                        <td><button name='+' onClick={this.clickbutton} className="btnstyl">+</button></td>
                    </tr>
                    <tr>
                        <td><button name='4' onClick={this.clickbutton} className="btnstyl">4</button></td>
                        <td><button name='5' onClick={this.clickbutton} className="btnstyl">5</button></td>
                        <td><button name='6' onClick={this.clickbutton} className="btnstyl">6</button></td>
                        <td><button name='-' onClick={this.clickbutton} className="btnstyl">-</button></td>
                    </tr>
                    <tr>
                        <td><button name='1' onClick={this.clickbutton} className="btnstyl">1</button></td>
                        <td><button name='2' onClick={this.clickbutton} className="btnstyl">2</button></td>
                        <td><button name='3' onClick={this.clickbutton} className="btnstyl">3</button></td>
                        <td><button name='*' onClick={this.clickbutton} className="btnstyl">*</button></td>
                    </tr>   
                    <tr>
                        <td><button name='0' onClick={this.clickbutton} className="btnstyl">0</button></td>
                        <td><button name='.' onClick={this.clickbutton} className="btnstyl">.</button></td>
                        <td colSpan='2'><button name='=' onClick={this.clickbutton} className="btneql">=</button></td>
                        {/* <td><button name='' onClick={this.clickbutton}>+</button></td> */}
                    </tr>
                </table>
            </div>
        );
    }
}
export default btns;