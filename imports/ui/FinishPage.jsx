import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import DataManager from '../api/DataManager.js';
import TeamTask from './TeamTask.jsx';


export default class FinishPage extends Component {
  constructor(props) {

    super(props);
  }

  componentWillMount() {
    this.props.showTimerCallBack(true);
  }

  componentWillUpdate() {
    if (DataManager.getTeamId(this.props.candidateId) !== null) {
      browserHistory.push(`/team?team_id=${DataManager.getTeamId(this.props.candidateId)}`);
    }
  }

  render() {
      if (!this.props.isWaitingForTeamFormation) {
        return(
          <div className="announcement"><b>Please wait until the timer runs out and all participants finish their candidate selections. Thank you for your patience.</b></div>
        );
      } else {
        return(
          <div className="announcement"><b>Team Formation is in process. Please hold on up to one minute until you are pushed to the collaborative workspace.</b></div>
        );
      }

      // let teamId = DataManager.getTeamId(this.props.testerId);
      // if(teamId != null){
      //   return (<TeamTask teamId={teamId} />);
      // } else {
      //   return (<div>It seems that you didn't finish the task on time. Thanks for your participation.</div>);
      // }


  }

}

FinishPage.propTypes = {
  code: React.PropTypes.string.isRequired,
  showTimerCallBack: React.PropTypes.func.isRequired,
  candidateId: React.PropTypes.string.isRequired,
  isInteam: React.PropTypes.bool.isRequired
};
