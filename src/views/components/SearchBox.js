import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../../actions/filters';

export class SearchBox extends React.Component {  
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };
  render() {
    return (
      <div className="text-input-wrapper">
        <input
          className="text-input"
          type="text"
          value={this.props.filters.text}
          placeholder="Search string for name oder messages"
          onChange={this.onTextChange}
        />       
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);