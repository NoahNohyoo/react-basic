import React, {Component } from 'react';

class CreateContent extends Component {
    render() {
        return (
        <article>
            <h2>{this.props.title}</h2>
            <form>
                <input type="text" />
            </form>
        </article>
        );
    }
}

// function CreateContent() {
//     return (
//         <article>
//             <h2>{this.props.title}</h2>
//             {this.props.desc}
//         </article>
//     );
// };

  export default CreateContent;