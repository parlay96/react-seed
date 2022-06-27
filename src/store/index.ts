/*
 * @Date: 2022-05-29 10:22:45
 * @Description:
 */
import { configureStore } from '@reduxjs/toolkit'
import { connect as oldConnect, useDispatch, Provider } from 'react-redux'
import { reducer } from './reducer'

export { actions } from './reducer'

export { Provider, reducer }

export const store = configureStore({ devTools: false, reducer })

export const { dispatch, getState } = store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

/** 定义泛型默认为 RootState，并且只接收一个参数 */
export const connect = (mapStateToProps: (state: RootState) => Record<string, any>) => {
  return oldConnect(mapStateToProps)
}
