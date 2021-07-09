export interface QuestionnaireModel {
  id: string,
  title: string,
  description: string,
  questions: QuestionModel[],
  createdAt?: Date,
  updatedAt?: Date,
  ownerId: string,
}

export type QuestionTypes = "Short" | "Long" | "Multiple";
export interface QuestionModel {
  questionData: QuestionData,
  setQuestion?: (val: string) => void,
}

export interface QuestionData {
  id: string,
  isRequired?: boolean,
  question: string,
  questionType: QuestionTypes,
  options?: OptionModel[] | null,
}
export interface MultipleQuestionProps extends QuestionModel {
  handleAddOption: () => void,
  handleEditOption: (id: string, value: string) => void
  handleDeleteOption: (id: string) => void
}

export type OptionModel = {
  id: string,
  value: string
}
