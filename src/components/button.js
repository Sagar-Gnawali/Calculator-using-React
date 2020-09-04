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
                {/* <button name='1' onClick={this.clickbutton}>1</button>
                <button name='2' onClick={this.clickbutton}>2</button>
                <button name='3' onClick={this.clickbutton}>3</button>
                <button name='4' onClick={this.clickbutton}>4</button>
                <button name='5' onClick={this.clickbutton}>5</button>
                <button name='6' onClick={this.clickbutton}>6</button>
                <button name='7' onClick={this.clickbutton}>7</button>
                <button name='8' onClick={this.clickbutton}>8</button>
                <button name='9' onClick={this.clickbutton}>9</button>
                <button name='0' onClick={this.clickbutton}>0</button>
                <button name='+' onClick={this.clickbutton}>+</button>
                <button name='-' onClick={this.clickbutton}>-</button>
                <button name='=' onClick={this.clickbutton}>=</button>
                <button name='c' onClick={this.clickbutton}>c</button>
                <button name='ce' onClick={this.clickbutton}>ce</button> */}
                <input value={this.props.result} ></input>
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
                        <td><button name='=' onClick={this.clickbutton} className="btnstyl">=</button></td>
                        {/* <td><button name='' onClick={this.clickbutton}>+</button></td> */}
                    </tr>
                </table>
            </div>
        );
    }
}
export default btns;