import React,{Component,Fragment} from 'react'

class Fruit extends Component{
  render() {
    return (
    	//子组件的根节点不想用div（可能影响flex布局的情况），可以使用Fragment替换，渲染不显示Fragment
    	<Fragment>
		  <div>
			<input type="text"/><button>再来一点</button>
		  </div>
		  <ul>
			<li>西瓜</li>
			<li>火龙果</li>
		  </ul>
		</Fragment>
	)
  }
}

export default Fruit