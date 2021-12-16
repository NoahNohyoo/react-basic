import React, {Component } from 'react';
import Subject from './components/Subject';
import TOC from './components/TOC';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';
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
    this.maxContentId = 3;
    this.state = {
      mode:'welcome',
      subject: {title:'WEB', sub:'World wide Web!'},
      welcome:{title:'Welcome', desc:'Hello, React!!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'},
      ]
    }
  }

  getReadContent() {
    let i = 0;
      while (i < this.state.contents.length) {
        let data = this.state.contents[i];
        if (data.id === this.state.selectedContentId) {
          return data;
        }
        i++;
      }
  }

  getContent() {
    let _title, _desc, _article, _content = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    
    } else if (this.state.mode === 'read') {
      _content = this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>;
    
    } else if (this.state.mode === 'create') {
      _article = <CreateContent title="Create" onSubmit={function(_title, _desc){
        this.maxContentId++;
        let _contents = this.state.contents.concat(
          {id:this.maxContentId, title:_title, desc:_desc}
        )
        this.setState({
          contents: _contents,
          mode: 'read',
          selectedContentId: this.maxContentId
        })

      }.bind(this)}></CreateContent>;
   
    } else if (this.state.mode === 'update') {
      _content = this.getReadContent();
      _article = <UpdateContent data={_content} title="Update" 
        onSubmit={function(_id, _title, _desc){
          let _contents = Array.from(this.state.contents);

          let i = 0;
          while(i < _contents.length) {
            if(_contents[i].id === _id) {
              _contents[i] = {id: _id, title: _title, desc: _desc};
              break;
            }
            i++;
          }

          this.setState({
            contents: _contents,
            mode: 'read'
          })

        }.bind(this)}></UpdateContent>;
    }

    return _article;
  }

  render() {
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
          if (_mode === "delete") {
            if (window.confirm("Are you sure?")) {
              let _contents = Array.from(this.state.contents);
              let i = 0;
              while (i < _contents.length) {
                if (_contents[i].id === this.state.selectedContentId) {
                  _contents.splice(i, 1);
                  break;
                }
                i++;
              }
              this.setState({
                mode: "welcome",
                contents: _contents
              });
              alert("Deleted.");
            }

          } else {
            this.setState({
              mode:_mode
            })
          }      
        }.bind(this)}></Control>
       <TOC 
        onChangePage={function(id) {
          this.setState({mode:'read',
          selectedContentId:Number(id)
        });
        }.bind(this)}
        data={this.state.contents}>
        </TOC>
        {this.getContent()}
     </div>
    );
  }
}

export default App;