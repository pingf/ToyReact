import {createElement, render, Component} from './toyReact.js'
class MyComponent extends Component{
    render(){
        return <div>
                <h1>my component</h1>
                {this.children}
            </div>
    }

}

render(<MyComponent id="a" class="c">
        <div>1</div>
        <div>2</div>
        <div>3</div>
       </MyComponent>, document.body)