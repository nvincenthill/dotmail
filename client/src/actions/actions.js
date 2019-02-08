import * as types from './actionTypes';

export function updateField(payload) {
  return { type: types.UPDATE_FIELD, field: payload.field, value: payload.value };
}

export function updateDisplayedTemplate(form) {
  return { type: types.UPDATE_DISPLAYED_TEMPLATE, form };
}

export function updateUser({
  name, email, uid, isUserAuthenticated,
}) {
  return {
    type: types.UPDATE_USER,
    name,
    email,
    uid,
    isUserAuthenticated,
  };
}

export function addRecipient(payload) {
  return {
    type: types.ADD_RECIPIENT,
    firstName: payload.firstName.current.value,
    lastName: payload.lastName.current.value,
    preferred: payload.preferred.current.value,
    email: payload.email.current.value,
  };
}

export function updateResponse(response) {
  return {
    type: types.UPDATE_RESPONSE,
    message: response.message,
    error: response.error,
    data: response.data,
  };
}
