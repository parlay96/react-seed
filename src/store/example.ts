/*
 * @Date: 2022-05-29 10:23:35
 * @Description:
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const { reducer, actions, name } = createSlice({
  name: 'example',
  initialState: {
    value: 2,
    list: [],
  },
  reducers: {
    /** 可以更新多个值 sttState({ value:1, list: [] }) */
    setState (state, { payload }: PayloadAction<Record<string, any>>) {
      Object.assign(state, payload)
    },
    incremented (state) {
      console.log('进入')

      state.value += 1
    },
    decremented (state) {
      state.value -= 1
    },
    /** 添加一项 */
    addList (state) {
      state.list.push('hello')
    },
    /** 删除一项 */
    removeList (state) {
      state.list.pop()
    },
    /** 整个替换 */
    reset () {
      return {
        value: 2,
        list: [],
      }
    },
  },
})

// 异步方法
const asyncFetchByIdStatus = (payload) => async (dispatch, getState) => {
  console.log(getState())
  console.log(payload)
  const { data } = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: 100 })
    }, 1000)
  })

  dispatch(actions.incremented())

}

export const exampleName = name
export const exampleReducer = reducer
export const exampleActions = { ...actions, asyncFetchByIdStatus }
