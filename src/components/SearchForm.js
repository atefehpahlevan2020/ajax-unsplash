import React from 'react';
import './SearchForm.css';



class SearchForm extends React.Component {

    state = {
        term : ''
    }
 
    searchFormSubmitHandler = (event) => {
        if(event.keyCode === 13){
            this.props.onSearchFormSubmit(this.state.term)
        }
    }

    searchFormChangeHandler = (event) => {
        this.setState({
            term : event.target.value,
        })
    }

    render() {
        return (
            <div className='SearchForm'>
                <input value={this.state.term} type='text' onKeyUp={this.searchFormSubmitHandler} onChange={this.searchFormChangeHandler} placeholder='search for photos'/>
            </div>
        )
    }
}


export default SearchForm;