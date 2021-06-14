import React, { Component } from 'react';

class Search extends Component {

    render() { 
        return (  
          <div className="col-span-3 text-center flex items-center">
            <input type="text" className="form-input m-3 w-4/5 rounded" onChange={event => this.props.handleChange(event)}/>
              <div className="w-1/5">
                <button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                    type="button"
                    onClick={event => this.props.handleClick(event)}>
                    Search
                </button>
              </div>
          </div>
        );
    }
}
 
export default Search;