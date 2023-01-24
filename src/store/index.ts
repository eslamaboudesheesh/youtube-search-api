import { configureStore } from '@reduxjs/toolkit';
import DataFormSubmirReducer from '../features/form-submit/DataFormSubmitSlice';

const store = configureStore({
    reducer: {
       
        DataSearch: DataFormSubmirReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
