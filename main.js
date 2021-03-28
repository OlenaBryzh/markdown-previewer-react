let firstLoading = 
`This is a paragraph <br>
**bolded text**
# Header1
## Header2
>Block Quote!
- Revenue was off the chart.
- Profits were higher than ever.
 
[use the link](https://codepen.io/olenabryzh/pen/GRrKrRP?editors=1111)
  
Inline code: \`<div></div>\`
  
This is a block of code:
 \`\`\`
  var a = 1;
  var b = 2;
  var c = a - b;
 \`\`\`
  ![img](https://images.unsplash.com/photo-1596797882948-7d215d2d169e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80)
`;

class App extends React.Component {
    //create a state, which contains an example of markdown
    state = {
    initText: firstLoading
  }
   //add a function to change editor's value
    changeValue =(event)=> {
    this.setState({
    initText: event.target.value
    });
  }
   
  render(){
    const {initText} = this.state;
    return(
      <div>
        <h1 id="title" className="text-center m-5"> Markdown Previewer</h1>
        <div className="row">
          <div className="col-6">
            <h6>Markdown:</h6>
            <textarea className="form-control" id="editor"  value={initText} onChange={this.changeValue}/>
          </div>
          <div className="col-6">
            <h6>Preview:</h6>
            <div id="preview" dangerouslySetInnerHTML={{__html: marked(initText, {breaks:true})}} />
          </div>
        </div>
      </div>
     );
   }
 }

//print the whole app on the screen
ReactDOM.render( <App />, document.getElementById('root'));
