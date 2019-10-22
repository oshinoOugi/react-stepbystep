import React,{Component} from "react"

class App extends Component{
  render() {
    return (
    	//JSX
    	<ul className={"my-list"}>
		  <li>{1+1>3?'aha.com':'哇哦哦'}</li>
		  <li>do u like react</li>
		</ul>
	);
    //render的实质
	// var child1=React.createElement("li",null,'aha.com');
	// var child2 = React.createElement("li",null,'d u like react');
	// var root=  React.createElement('ul',{className:'my-list'},child1,child2);

  }
}

export default App;