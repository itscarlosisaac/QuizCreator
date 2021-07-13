import {
  BuilderActions
} from '../constants/Builder'

import {
  ActionType
} from '../constants/ActionType'
import { QuestionData } from '../../DataModel/Questionnaire'

interface BuilderData {
  ownerId: string,
  meta: {
    id: string,
    title: string,
    description: string,
    createdAt?: Date,
  },
  questionList: QuestionData[],
}

const InitialState: BuilderData | {} = {}

export const BuilderReducer = (state = InitialState, action: ActionType) => {
  switch (action.type) {
    case BuilderActions.editing:
      return {
        ...state,
        ...action.payload
      }
    case BuilderActions.addQuestion:
      return {
        ...action.payload
      }
    case BuilderActions.cleanBuilder:
      return { }
  
    case BuilderActions.deleteQuestion:
      return {}
    
    default:
      return state;
    
    
  }
}