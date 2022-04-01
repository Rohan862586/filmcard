import { configureStore } from "@reduxjs/toolkit";
import { contactsApi } from '../api/api';
import movieSlice from "../reducer/movies/movieSlice";

export const store = configureStore({
    reducer: {
        movie: movieSlice,
        [contactsApi.reducerPath]: contactsApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(contactsApi.middleware)
})


