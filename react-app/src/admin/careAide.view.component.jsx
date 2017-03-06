import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class CareAideView extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <ReactCSSTransitionGroup
        transitionName="fadeTransition"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
        <div>
          <h1 className='title is-1'>View Care Aides</h1>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

export default CareAideView;
