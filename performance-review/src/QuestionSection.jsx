import React, {Component} from 'react';
import ReviewQuestion from './ReviewQuestion';
import SectionHeader from './SectionHeader';
import './QuestionSection.css';
import classNames from 'classnames';

class QuestionSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionOpen: false
    }
  }

  toggleSection() {
    return (event) => {
      const sectionOpen = !this.state.sectionOpen;
      this.setState({ sectionOpen });
    }
  }

  render() {
    const { sectionOpen } = this.state;
    const { title, questions } = this.props;
    let renderedQuestions = [];
    for (const q in questions) {
      renderedQuestions.push(
        <ReviewQuestion question={questions[q]} />
      );
    }

    return (
      <div className={classNames('collapsable', sectionOpen ? 'open' : 'collapsed')}>
        <SectionHeader
          title={title}
          expandSection={this.toggleSection()}
          sectionOpen={sectionOpen}
        />
        {sectionOpen ? renderedQuestions : ''}
      </div>
    );
  }
}

export default QuestionSection;