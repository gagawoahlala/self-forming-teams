import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
// import {faker} from 'meteor/digilord:faker';
faker = require('faker');

export const Candidate = new Mongo.Collection('candidates');
Candidate.schema = new SimpleSchema({
  // name: {type: String},
  mturk_id: {type: String},
  team_id: {type: String, optional: true},
  stage: {type: Number},
  answers: {type: [Object], blackbox: true},
  selection: {type: [String], optional: true},
  rating: {type: Object, blackbox: true, optional: true},  // [{userId: rating, block_order: [2,1,3]}]
  blocks: {type: [String], optional: true},
  code: {type: String, optional: true},
  meta_rating: {type: Object, blackbox: true, optional: true}, // how confident are you on rating...
  score_base: {type: Object, blackbox: true, optional: true}, // the criteria for calculating score
  score: {type: Number, optional: true}, // The score each candidate have based on the criteria
  rank: {type: Number, optional: true}
});

Candidate.randGen = {
  // name: faker.name.findName,
  mturk_id: faker.random.uuid,
  stage: (() => 1),
  session: (() => 1),
  answers: (() => []),
  selection: (() => []),
  rating: (() => []),
  blocks: (() => []),
}
