import React, {Component } from 'react';
import Subject from './components/Subject';
import TOC from './components/TOC';
import Content from './components/Content';
//  import logo from './logo.svg';
 import './App.css';

// function App() {
//   return (
//     <div className="App">
//        <Subject title="WEB" sub="World wide web!"></Subject>
//        <TOC></TOC>
//        <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
//      </div>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: {title:'WEB', sub:'World wide Web!'}
    }
  }
  render() {
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}>
        </Subject>
       <TOC></TOC>
       <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
     </div>
    );
  }
}



export default App;
