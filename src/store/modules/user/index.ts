/*
 * @Date: 2022-05-29 10:24:10
 * @Description: user reducer
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type UserInfo = {
  avatarUrl: string
  email: string
  enName: string
  mobile: string
  name: string
  openId: string
  tenantKey: string
  unionId: string
  userId: string
}

const { reducer, actions, name } = createSlice({
  name: 'user',
  initialState: {
    userInfo: {} as UserInfo,
    isLogin: false,
  },
  reducers: {
    setState (state, { payload }: PayloadAction<Record<string, any>>) {
      Object.assign(state, payload)
    },
    login (state, { payload }: PayloadAction<Record<string, any>>) {
      Object.assign(state, payload)
    },
  },
})

export const userName = name
export const userReducer = reducer
export const userActions = { ...actions }
