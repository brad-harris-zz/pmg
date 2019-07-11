import React, {Component} from 'react';
import './App.css';
import QuestionSection from './QuestionSection';

class App extends Component {
  render () {
    return (
      <div className='perf-app'>
        <QuestionSection
          title='Job Skills'
          questions={[
            'Possess solid understanding of the equestrian industry',
            'Understands the scope of PMG services',
            'Possesses basic understand of how to build client brands',
            'Effectively designs and implements brand campaigns',
            'Follows effective communication plans',
            'Writes &amp; distributes compelling content in a timely manner',
            'Works hard to \"get the job done\"',
            'Efficiently manages time',
            'Proven ability to competently cover events on-site',
            'Self starter',
            'Independent thinker',
            'Receives feedback well',
            'Focuses on improving skills',
          ]}
        />
        <QuestionSection
         title='Organizational Skills'
         questions={[
           'Stays on task and follows directions well',
           'Demonstrates an efficient and effective process',
           'Consistently meets project deadlines',
           'Seeks guidance when necessary',
           'Demonstrates ability to prioritize client projects',
           'Completes assigned tasks on schedule',
           'Submits itemized credit card statements to Accounting in an accurate and timely fashion',
           'Effectively tracks and submits expense reports in a timely fashion',
           'Demonstrates an ability to multi-task',
           'Is detail oriented'
         ]}
        />
        <QuestionSection
          title='Team Skills'
          questions={[
            'Is a collaborative team member',
            'Demonstrates positive attitude during projects',
            'Supports others as needed',
            'Actively participates in brainstorm sessions',
            'Works effectively with management',
            'Works effectively with co-workers',
            'Demonstrates willingness to modify schedule when necessary'
          ]}
        />
        <QuestionSection
          title='Creative Skills'
          questions={[
            'Pushes creative skills by looking for creative opportunities in every task',
            'Shows passion and drive for excellence',
            'Provides unique solutions above and beyond expectations',
            'Demonstrates a basic set of capabilities that encompass all aspects of equestrian marketing - branding, writing, event coverage, graphics, etc',
            'Demonstrates a basic understanding of how to develop a brand',
            'Suggest new and different ways of producing creative content for clients',
            'Demonstrates a natural curiosity for new ideas, software, creative directions',
            'Works well with other professionals in the field'
          ]}
        />
        <QuestionSection
          title='Communication Skills - Internal'
          questions={[
            'Presents ideas in a clear and succinct manner',
            'Demonstrates effective verbal communication skills',
            'Demonstrates a professional and positive behavior at all times',
            'Communicates with confidence',
            'Communicates well with co-workers',
            'Returns emails in a prompt and timely fashion',
            'Communicates with clients in a professional and friendly manner'
          ]}
        />
        <QuestionSection
          title='Communication Skills - External/Clients'
          questions={[
            'Proactively communicates with clients',
            'Follows through on client communications',
            'Uses effective communication channels to communicate with client',
            'Actively listens to clients',
            'Strives to understand client\'s goals',
            'Capable of educating clients on strategies, media, etc.',
            'Works to been seen as a trusted advisor by clients',
            'Effectively manages client expectations'
          ]}
        />
        <QuestionSection
          title='Special Skills'
          questions={[
            'Graphic skills - design and layout',
            'Photography - action and still',
            'Demonstrates working knowledge of Photoshop or similar software',
            'Understand scope of PMG services',
            'Capable of media pitching',
            'Looks for ways to add value to the client',
            'Organizes & chairs effective client meetings',
            'Demonstrates strong understanding on best use of Social Media',
            'Stays current on new social media platforms',
            'Proactively creates social media posts for clients as needed'
          ]}
        />
      </div>
    );
  }
}

export default App;
