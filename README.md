# Questionnaire App for Fueled Test Project

# Instructions to run.

- Clone the repository in the local machine
- Run `yarn` to install the node dependencies
- Run `yarn start` to start the project files
- Navigate to `http://localhost:3000` or `http://0.0.0.0:3000` to see the project

## Routes
- Login
- Register
- Form Dashboard
- Form Builder
- Form Viewer
- Form Answers
- Public URLS for forms

## URLS
- auth/login
- auth/register
- app/dashboard
- app/builder/formId
- app/viewer/formId
- app/viewer/formId/answers/
- public/formId
- public/thankyou

Questions Types
 - Short Question
 - Long Question
 - Multiple Choice

## User Specs

- Display Name = Full Name
- Email Address 
- Password
- LoginId
- RegisteredId
- createdAt
- forms
- userId

## Forms Specs

- meta
  - createdAt: `string`
  - description: `string`
  - id: `string`
  - publicUrl: `string`
  - title: `string`
  - updatedAt: `Date`
- ownerId: `string`
- questionList: `Question[]`

## Question Specs
- id: `string`
- options: `Option[]`
- question: `string`
- questionType: `"Short" | "Long" | "Multiple"`

### Option
  - id: `string`
  - value: `string`
## Answers Record

- data
  - answer: `string`
  - question: `string`
- meta
  - createdAt: `Date`
  - formId: `string`
  - id: `string`
  - user: `string`