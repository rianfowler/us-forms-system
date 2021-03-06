import { validateDate } from '../validation';

function schema() {
  return {
    type: 'string',
    pattern: '^(\\d{4}|XXXX)-(0[1-9]|1[0-2]|XX)-(0[1-9]|[1-2][0-9]|3[0-1]|XX)$'
  };
}

function uiSchema(title = 'Date') {
  return {
    'ui:title': title,
    'ui:widget': 'date',
    'ui:validations': [
      validateDate
    ],
    'ui:errorMessages': {
      pattern: 'Please provide a valid date'
    }
  };
}

export const dateConfig = {
  schema,
  uiSchema
};
