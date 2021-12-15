import React, {Component } from 'react';
import Subject from './components/Subject';
import TOC from './components/TOC';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import Control from './components/Control';
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
    let _title, _desc, _article = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    
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
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    
    } else if (this.state.mode === 'create') {
      _article = <CreateContent title="Create" onSubmit={function(_title, _desc){
        console.log(_title, _desc);
      }.bind(this)}></CreateContent>;
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
        <Control onChangeMode={function(_mode) {
          this.setState({
            mode:_mode
          })
        }.bind(this)}></Control>
       <TOC 
        onChangePage={function(id) {
          this.setState({mode:'read',
          selectedContentId:Number(id)
        });
        }.bind(this)}
        data={this.state.contents}>
        </TOC>
        {_article}
     </div>
    );
  }
}

export default App;