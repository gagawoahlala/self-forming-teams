import {Candidate} from './Candidate.js';
import {Question} from './Question.js';
import {Team} from './Team.js';
import * as Const from './Constants.jsx';
faker = require('faker');


export default class DataManager {
  fakeData() {
    return {
      "intro": {"mturk_id": "", "name": ""},
    };
  }

  static shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  static randomlyAssign(teamSize) {
    let candidateToForm =  Candidate.find({stage: 2}).fetch();
    candidateToForm = candidateToForm.map(function (candidate) { return [candidate._id ,candidate.mturk_id]});
    candidateToForm = DataManager.shuffle(candidateToForm);
    console.log(candidateToForm);
    if (candidateToForm.length % teamSize != 0) {
      let team_id = faker.finance.account();
      let candidateToFormModified = candidateToForm.splice(0,teamSize+1).map(function (candidate) {
        Candidate.update({_id: candidate[0]},{$set: {team_id: team_id}});
        return candidate[1];
      });
      // Team.insert({team_id: team_id, members: candidateToForm.splice(0,teamSize+1)});
      Team.insert({team_id: team_id, members: candidateToFormModified});

    }
    while (candidateToForm.length > 0) {
      let team_id = faker.finance.account();
      let candidateToFormModified = candidateToForm.splice(0,teamSize).map(function (candidate) {
        Candidate.update({_id: candidate[0]},{$set: {team_id: team_id}});
        return candidate[1];
      });
      // Team.insert({team_id: faker.finance.account(), members: candidateToForm.splice(0,teamSize)});
      Team.insert({team_id: team_id, members: candidateToFormModified});

    }

  }

  static prepareCandidates() {
    result_arr = [];
    stage1C = Candidate.find({stage: 1}).fetch();
    questions = Question.find({}).fetch();
    basic_info_q = DataManager.q4block(questions, "basic_info");
    personality_q = DataManager.q4block(questions, "personality");
    performance_q = DataManager.q4block(questions, "performance");
    for(let i = 0; i < stage1C.length; i++){
      candidate = stage1C[i];
      map = {mturk_id: candidate.mturk_id,
        name: "Candidate " + (i+1),
        stage: candidate.stage,
        basic_info: {},
        personality: {},
        performance: {}
      };

      bigFive = {
        extraversion: 0,
        agreeableness: 0,
        conscientiousness: 0,
        neuroticism: 0,
        openness: 0
      }

      for(let j = 0; j < candidate.answers.length; j ++){
        ans = candidate.answers[j];
        qualtricsid = Object.keys(ans)[0];
        q = Question.find({qualtricsid: qualtricsid}).fetch()[0];
        qid = undefined;
        if(q) qid = Number(q.qid.substring(1));
        if(qualtricsid in basic_info_q){
          if (qualtricsid == "Q20") {
            answer = ans[qualtricsid].replace("\"", "");
            answer = "\"" + ans[qualtricsid] + "\"";
            map.basic_info["Where do you see yourself in 5 years? - Write about your goals for your education, career, family, travel, or any other aspect of life. What will be your definition of success in measuring the achievement of those goals?"] = answer;
          } else {
            map.basic_info[basic_info_q[qualtricsid]] = ans[qualtricsid];
          }
        }else if(qualtricsid in personality_q){
          map.personality[personality_q[qualtricsid]] = ans[qualtricsid];
          bigFive = DataManager.updatePoints(bigFive, qid-10, ans[qualtricsid]);
        }else{
          if(qualtricsid == "Q23") {
            answer = ans[qualtricsid].replace("\"", "").trim();
            answer = answer + " (Found " + DataManager.countWords(answer) + " words)";
            map.performance["Found words"] = answer;
          } else {
            answer = ans[qualtricsid].replace("\"", "");
            answer = "\"" + ans[qualtricsid] + "\"";
            map.performance[performance_q[qualtricsid]] = answer;
          }
        }
      }
      map.personality["ocean"] = DataManager.OCEANScoreBaseChange(bigFive);
      result_arr.push(map);
    }
    return result_arr;
  }

  static prepareTesters(mturk_id) {
    stage1C = Candidate.find({"mturk_id": mturk_id, "stage": 1}).fetch();
    console.log("This is inside datamanger");
    console.log(stage1C);
    questions = Question.find({}).fetch();
    basic_info_q = DataManager.q4block(questions, "basic_info");
    personality_q = DataManager.q4block(questions, "personality");
    performance_q = DataManager.q4block(questions, "performance");

    candidate = stage1C[0];
    map = {};

    bigFive = {
      extraversion: 0,
      agreeableness: 0,
      conscientiousness: 0,
      neuroticism: 0,
      openness: 0
    }

    for(let j = 0; j < candidate.answers.length; j ++){
      ans = candidate.answers[j];
      qualtricsid = Object.keys(ans)[0];
      q = Question.find({qualtricsid: qualtricsid}).fetch()[0];
      qid = undefined;
      if(q) qid = Number(q.qid.substring(1));
      if(qualtricsid in personality_q){
        map["q"+`${qid-10}`] = ans[qualtricsid];
        // map[personality_q[qualtricsid]] = ans[qualtricsid];

        bigFive = DataManager.updatePoints(bigFive, qid-10, ans[qualtricsid]);
      }
    }
    map["ocean"] = DataManager.OCEANScoreBaseChange(bigFive);

    return map;
  }


  static q4block(questions, block) {
    qs = questions.filter((q) => q.block === block);
    map = {};
    for(let i = 0; i < qs.length; i++){
      q = qs[i];
      map[q.qualtricsid] = q.content;
    }
    return map;
  }

  static countWords(str) {
    count = 0;
    flag = false;
    for (var x = 0; x < str.length; x++)
    {
      if(str[x].toLowerCase() != str[x].toUpperCase()) {
        if(!flag){
          flag = true;
          count++;
        }
      } else {
        flag = false;
      }
    }
    return count;
  }

  static calculateBigFivePoints(questions) {
    bigFive = {
      extraversion: 0,
      agreeableness: 0,
      conscientiousness: 0,
      neuroticism: 0,
      openness: 0
    }

    for (var key in questions) {
      tempKey = Number(key.substring(1));
      bigFive = DataManager.updatePoints(bigFive, tempKey, questions[key]);
      // console.log(questions[key]);
      // console.log(bigFive);
    }
    return DataManager.OCEANScoreBaseChange(bigFive);
  }

  static OCEANScoreBaseChange(bigFive) {
    newBigFive = bigFive;
    for (var attr in bigFive) {
      newScore = Math.round(bigFive[attr] * 50 / Const.OCEAN_SCORE[attr]);
      newBigFive[attr] = newScore;
    }
    return newBigFive
  }

  static updatePoints(bigFive, qid, answer) {
    if (qid <= 44) {
      points = 0;
      tempBigFive = bigFive;
      if (Const.POS_POINTS.indexOf(qid) > -1) {
        points = Const.POS_LIKERT_SCALE[answer];
      } else {
        points = Const.REV_LIKERT_SCALE[answer];
      }

      if (Const.O.indexOf(qid) > -1) {
        tempBigFive.openness += points;
      } else if (Const.C.indexOf(qid) > -1) {
        tempBigFive.conscientiousness += points;
      } else if (Const.E.indexOf(qid) > -1) {
        tempBigFive.extraversion += points;
      } else if (Const.A.indexOf(qid) > -1) {
        tempBigFive.agreeableness += points;
      } else if (Const.N.indexOf(qid) > -1) {
        tempBigFive.neuroticism += points;
      } else {
        console.log("alert something went wrong!");
      }

      return tempBigFive;
    } else {
      console.log("Wrong qid for big five questions");
    }
  }
}
