import { init, RematchDispatch, RematchRootState } from '@rematch/core';
import { models, RootModel } from './models';
/** Plugins **/
import updatedPlugin, { ExtraModelsFromUpdated } from '@rematch/updated';
import loadingPlugin, { ExtraModelsFromLoading } from '@rematch/loading';
import immerPlugin from '@rematch/immer';

type FullModel = ExtraModelsFromLoading<RootModel> &
  ExtraModelsFromUpdated<RootModel>;

export const store = init<RootModel, FullModel>({
  models,
  plugins: [loadingPlugin(), updatedPlugin(), immerPlugin()],
});

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel, FullModel>;
