import {createElement, render, Component} from './toyReact.js'
class MyComponent extends Component{
    constructor(){
        super();
        this.state = {
            a: 1,
            b: 2
        }
    }
    render(){
        return <div>
                <h1>my component</h1>
                <span>{this.state.a.toString()}</span>
                {this.children}
            </div>
    }

}

render(<MyComponent id="a" class="c">
        <div>a</div>
        <div>b</div>
        <div>c</div>
       </MyComponent>, document.body)