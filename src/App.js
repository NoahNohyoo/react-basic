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
      mode:'read',
      subject: {title:'WEB', sub:'World wide Web!'},
      welcome:{title:'Welcome', desc:'Hello, React!!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'},
      ]
    }
  }
  render() {
    let _title, _desc = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'read') {
      let i = 0;
      while (i < this.state.contents.length) {
        let data = this.state.contents[i];
        if (data.id === this.state.selectedContentId) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i++;
      }
    }

    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage={function(){
            this.setState({mode:'welcome'});
          }.bind(this)}
        >
        </Subject>
       <TOC 
        onChangePage={function(id) {
          this.setState({mode:'read',
          selectedContentId:Number(id)
        });
        }.bind(this)}
        data={this.state.contents}>

        </TOC>
       <Content title={_title} desc={_desc}></Content>
     </div>
    );
  }
}

export default App;