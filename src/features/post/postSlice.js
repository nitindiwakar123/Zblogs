import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
}

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.posts.push(action.payload.post);
        },
        setPosts: (state, action) => {
            state.posts = action.payload.posts;
        },
        deletePosts: (state) =>{
            state.posts = [];
        }
    }
});

export const { addPost, setPosts, deletePosts} = postSlice.actions;

export default postSlice.reducer;