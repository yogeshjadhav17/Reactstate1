import React from 'react';
import ReactDOM  from 'react-dom';

class Welcome extends React.Component{
  constructor(props){
    super(props);
    this.state ={Fruit:"Apple"}
  }
  render()
  {
    return(
      <div>
        <h1> Hello, this is My Website</h1>

<h2> I love to create website</h2>    
<h3> I love to eat {this.state.Fruit}</h3> 
 </div>
    );
  }
}

ReactDOM.render(<Welcome/>, document.getElementById('root'));