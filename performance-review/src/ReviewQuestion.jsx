import './ReviewQuestion.css';
import React, {Component} from 'react';
import './Counter.css';
import classNames from 'classnames';

class ReviewQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    }
  }

  updateValue(value) {
    return (event) => {
      this.setState({value});
    }
  }

  render() {
    const { question } = this.props;
    const { value } = this.state;
    return (
      <div className='review-question'>
        <div className='question'>
          <span>{question}</span>
        </div>
        <div className='radio-button'>
          <span className={value === 0 ? 'selected' : undefined} onClick={this.updateValue(0)}></span>
        </div>
        <div className='radio-button'>
          <span className={value === 1 ? 'selected' : undefined} onClick={this.updateValue(1)}></span>
        </div>
        <div className='radio-button'>
          <span className={value === 2 ? 'selected' : undefined} onClick={this.updateValue(2)}></span>
        </div>
        <div className='radio-button'>
          <span className={value === 3 ? 'selected' : undefined} onClick={this.updateValue(3)}></span>
        </div>
        <div className='radio-button'>
          <span className={value === 4 ? 'selected' : undefined} onClick={this.updateValue(4)}></span>
        </div>
        <div className='radio-button'>
          <span className={value === 5 ? 'selected' : undefined} onClick={this.updateValue(5)}></span>
        </div>
      </div>
    )
  }
}

export default ReviewQuestion;