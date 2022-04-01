
import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    movies: {},
    val:{},
    searchVal: ''
}

export const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        movies: (state,action) => {
            state.movies = action.payload;
        },
        val:(state,action) => {
            state.val = action.payload
        },
        searchVal: (state,action) =>{
            state.searchVal = action.payload
        }
        
        
    }
}) 


export const { movies, val, searchVal } = movieSlice.actions

export default movieSlice.reducer


