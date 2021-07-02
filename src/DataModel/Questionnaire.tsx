export interface QuestionnaireModel {
  id: string,
  title: string,
  description: string,
  questions: QuestionModel[],
  createdAt?: Date,
  updatedAt?: Date,
  ownerId: string,
}

export type QuestionTypeModel = "Short" | "Long" | "Multiple"

export type QuestionModel = {
  type: QuestionTypeModel,
  question: string
  isRequired?: boolean
  options?: OptionModel[]
}

export type OptionModel = {
  id: string,
  value: string,
}
