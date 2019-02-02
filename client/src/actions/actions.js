import * as types from './actionTypes';

export function updateField(payload) {
  return { type: types.UPDATE_FIELD, field: payload.field, value: payload.value };
}

export function updateUser(payload) {
  return { type: types.UPDATE_USER, name: payload.name, email: payload.email };
}
