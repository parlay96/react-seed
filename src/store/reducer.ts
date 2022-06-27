/*
 * @Date: 2022-05-29 10:23:11
 * @Description:
 */
import { exampleActions, exampleReducer, exampleName } from './example'
import { userActions, userReducer, userName } from './modules/user'

export const reducer = {
  [exampleName]: exampleReducer,
  [userName]: userReducer,
}

export const actions = {
  exampleActions,
  userActions,
}
