import { Models } from '@rematch/core'
import { count } from './count'
import { todo } from './todo'

export interface RootModel extends Models<RootModel> {
    count: typeof count,
    todo: typeof todo,
}

export const models: RootModel = { count, todo }