// src/components/BlogList.jsx

import { useBlogDispatch, useBlogContext } from "../context/BlogReducerContext";
import { BlogContext, BlogDispatchContext } from "../context/BlogReducerContext";


export function BlogList (props){
    const state = useBlogContext();
    const dispatch = useBlogDispatch();

    return (
        <div>
            {state.map((blogPost) => {
                return (
                    <div key={blogPost.id}>
                    <h1>{blogPost.title}</h1>
                    <p>{blogPost.content}</p>
                    <button onClick={() => {dispatch({type:"delete", newData:{id: blogPost.id}})}}>
                        Delete
                    </button>
                </div>
                )
            })}
        </div>
    )
}
