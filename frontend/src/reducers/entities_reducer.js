import { combineReducers } from 'redux';

import tweetsReducer from './tweets_reducer';

export default combineReducers({
  tweets: tweetsReducer
});