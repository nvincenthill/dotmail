import * as types from './actionTypes';

export function updateField(payload) {
  return { type: types.UPDATE_FIELD, field: payload.field, value: payload.value };
}

export function updateDisplayedTemplate(form) {
  return { type: types.UPDATE_DISPLAYED_TEMPLATE, form };
}

export function updateUser({
  name,
  email,
  uid,
  isUserAuthenticated,
  role,
  AWSAccessKeyId,
  AWSSecretKey,
  useAWSSES,
}) {
  return {
    type: types.UPDATE_USER,
    name,
    email,
    uid,
    isUserAuthenticated,
    role,
    AWSAccessKeyId,
    AWSSecretKey,
    useAWSSES,
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

export function removeRecipient(payload) {
  return {
    type: types.REMOVE_RECIPIENT,
    i: payload.i,
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

export function addEmailGroup(emailGroup) {
  return {
    type: types.ADD_EMAIL_GROUP,
    group: emailGroup,
  };
}

export function deleteEmailGroups() {
  return {
    type: types.DELETE_EMAIL_GROUPS,
  };
}

export function updateInjection({ index, newInjection }) {
  return {
    type: types.UPDATE_INJECTION,
    index,
    injection: newInjection,
  };
}
