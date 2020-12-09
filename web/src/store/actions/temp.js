import { TEMP } from '../constants'

const temp = {
  send   : {
    fetch      : payload => ({
      type    : TEMP.SEND.FETCH,
      payload,
    }),
    create     : payload => ({
      type    : TEMP.SEND.CREATE,
      payload,
    }),
    modify     : payload => ({
      type    : TEMP.SEND.MODIFY,
      payload,
    }),
    activate   : payload => ({
      type    : TEMP.SEND.ACTIVATE,
      payload,
    }),
    deactivate : payload => ({
      type    : TEMP.SEND.DEACTIVATE,
      payload,
    }),
  },
  save   : {
    replace    : payload => ({
      type    : TEMP.SAVE.REPLACE,
      payload,
    }),
    addTop     : payload => ({
      type    : TEMP.SAVE.ADDTOP,
      payload,
    }),
    addBottom  : payload => ({
      type    : TEMP.SAVE.ADDBOTTOM,
      payload,
    }),
    modify     : payload => ({
      type    : TEMP.SAVE.MODIFY,
      payload,
    }),
    activate   : payload => ({
      type    : TEMP.SAVE.ACTIVATE,
      payload,
    }),
    deactivate : payload => ({
      type    : TEMP.SAVE.DEACTIVATE,
      payload,
    }),
    remove     : payload => ({
      type    : TEMP.SAVE.REMOVE,
      payload,
    }),
  },
  status : {
    request : payload => ({
      type    : TEMP.STATUS.REQUEST,
      payload,
    }),
    success : payload => ({
      type    : TEMP.STATUS.SUCCESS,
      payload,
    }),
    failed  : payload => ({
      type    : TEMP.STATUS.FAILED,
      payload,
    }),
  },
}

export default temp
