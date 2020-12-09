import cloneDeep from 'lodash.clonedeep'

import { TEMP } from '../constants'

const initialState = {
  temp : [],
  status  : {
    success : false,
    request : false,
    failed  : false,
    message : '',
  },
}

const temp = (state = initialState, { type, payload }) => {
  switch (type) {
    case TEMP.SAVE.REPLACE: {
      const newState = { ...state }
      newState[payload.key] = payload.data
      return newState
    }
    case TEMP.SAVE.ADDTOP: {
      const newState = { ...state }
      newState[payload.key] = [ payload.data, ...newState[payload.key] ]

      return newState
    }
    case TEMP.SAVE.ADDBOTTOM: {
      const newState = cloneDeep(state)
      newState[payload.key] = [ ...newState[payload.key], payload.data ]

      return newState
    }
    case TEMP.SAVE.MODIFY: {
      const newState = cloneDeep(state)

      let toModify
      newState[payload.key].find((e, index) => e.id === payload.id && (toModify = index))

      newState[payload.key][toModify] = payload.data

      return newState
    }
    case TEMP.SAVE.ACTIVATE: {
      const newState = cloneDeep(state)

      let toModify = newState[payload.key].filter(e => e.id === payload.data.id)[0]
      toModify.isDisabled = false

      return newState
    }
    case TEMP.SAVE.DEACTIVATE: {
      const newState = cloneDeep(state)

      let toModify = newState[payload.key].filter(e => e.id === payload.data.id)[0]
      toModify.isDisabled = true

      return newState
    }
    case TEMP.STATUS.SUCCESS: {
      const newState = cloneDeep(state)

      newState.status.request = false
      newState.status.success = true

      return newState
    }
    case TEMP.STATUS.REQUEST: {
      const newState = cloneDeep(state)

      newState.status.success = false
      newState.status.failed = false
      newState.status.request = true

      return newState
    }
    case TEMP.STATUS.FAILED: {
      const newState = cloneDeep(state)

      newState.status.request = false
      newState.status.failed = true
      newState.status.message = payload

      return newState
    }
    default:
      return state
  }
}

export default temp
