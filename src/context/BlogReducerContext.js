// src/context/BlogReducerContext.js

import { createContext, useReducer, useContext } from "react";
import { blogReducer, initialBlogPosts } from "../reducers/BlogReducer";

export const BlogContext = createContext(null);
export const BlogDispatchContext = createContext(null);


export function BlogProvider({children}) {

    const [blogs, dispatch] = useReducer(blogReducer, initialBlogPosts);

    return (
        <BlogContext.Provider value={blogs}>
            <BlogDispatchContext.Provider value={dispatch}>
                {children}
            </BlogDispatchContext.Provider>
        </BlogContext.Provider>
    )
}

export function useBlogContext() {
    return useContext(BlogContext);
}

export function useBlogDispatch(){
    return useContext(BlogDispatchContext);
}
