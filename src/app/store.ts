import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "features/pokemon/pokemonSlice";

const rootReducer = configureStore({
    reducer: { pokemon: pokemonReducer }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof rootReducer.dispatch

export { pokemonReducer };

export default rootReducer;