import { useEffect, useState } from "react";

import { commentsAPI } from "../api/comments-api";

export function useGetAllComments(gameId) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        (async () => {
            const comments = await commentsAPI.getAll(gameId);
            setComments(comments);
        })()
    }, [])

    return [comments, setComments];
}