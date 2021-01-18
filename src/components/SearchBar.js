import React from 'react';

class SearchBar extends React.Component {
    //initialize the state and set the arguments to 'term' with place holder text value of 'Hi There'
    state = { term: '' };

    // add event to prevent default form submit
    onFormSubmit = (event) => {
        event.preventDefault();
//when calling props in a class based component we use this.props
        this.props.onSubmit(this.state.term);
    };

    render() {
        return (
        <div className="ui segment"> 
        {/* for form add event handler this.onsubmit and disable default behaviour of form*/}
            <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input
                         type="text"
                         // set value to this.state.term so it recognizes the state
                         value={this.state.term}
                         //set onchange function and setState for the term and target value
                          onChange={e => this.setState({ term: e.target.value })}
                          />
                    </div>
            </form>   
        </div>
        );
    }
}

export default SearchBar;