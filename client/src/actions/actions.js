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
  if (payload.firstName.current !== undefined) {
    return {
      type: types.ADD_RECIPIENT,
      firstName: payload.firstName.current.value,
      lastName: payload.lastName.current.value,
      preferred: payload.preferred.current.value,
      email: payload.email.current.value,
    };
  }
  return {
    type: types.ADD_RECIPIENT,
    firstName: payload.firstName,
    lastName: payload.lastName,
    preferred: payload.preferred,
    email: payload.email,
  };
}

export function deleteRecipients() {
  return {
    type: types.DELETE_RECIPIENTS,
  };
}

export function updateResponse(response) {
  return {
    type: types.UPDATE_RESPONSE,
    message: response.message,
    error: response.error || response.err,
    data: response.data,
  };
}

export function addTemplate(template) {
  return {
    type: types.ADD_TEMPLATE,
    template,
  };
}

export function deleteTemplates() {
  return {
    type: types.DELETE_TEMPLATES,
  };
}
