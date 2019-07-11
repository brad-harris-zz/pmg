import React, {Component} from 'react';
import './SectionHeader.css';
import classNames from 'classnames';

class SectionHeader extends Component {
  render() {
    const { title, expandSection, sectionOpen } = this.props;
    return (
      <div className='section-header'>
        <div className='title'>
          <span className={classNames('title-text', sectionOpen ? 'open' : 'collapsed')} onClick={expandSection}>
            {title}
          </span>
        </div>
        <div className='rating-header'>Not Applicable</div>
        <div className='rating-header'>Fails To Meet Expectations</div>
        <div className='rating-header'>Improvement Needed</div>
        <div className='rating-header'>Solid Proficiency / Meets Standard</div>
        <div className='rating-header'>Consistently Above Standard</div>
        <div className='rating-header'>Far Exceeds Expectations</div>
      </div>
    )
  }
}

export default SectionHeader;