import { useState } from "react";
import * as commentsApi from "../api/commentsApi";

function useComments(token) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  if (token) {
    commentsApi.fetchComments.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    commentsApi.addComment.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  const fetchByWork = async (workId) => {
    setLoading(true);
    setError(null);
    try {
      const res = await commentsApi.fetchComments(workId);
      setComments(res.data);
    } catch (e) {
      setError(e.response?.data || "Не вдалося отримати коментарі");
    } finally {
      setLoading(false);
    }
  };

  const add = async (data) => {
    setLoading(true);
    setError(null);
    try {
      await commentsApi.addComment(data);
      await fetchByWork(data.workId);
      return true;
    } catch (e) {
      setError(e.response?.data || "Не вдалося додати коментар");
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { comments, loading, error, fetchByWork, add };
}

export default useComments;
