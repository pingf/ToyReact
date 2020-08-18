import {createElement, render, Component} from './toyReact.js'
class MyComponent extends Component{
    render(){
        return <div>my component</div>
    }

}

render(<MyComponent id="a" class="c">
       </MyComponent>, document.body)