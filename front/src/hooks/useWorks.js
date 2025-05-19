import { useState, useEffect } from "react";
import * as worksApi from "../api/worksApi";

function useWorks(token) {
  const [works, setWorks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (token) {
      worksApi.fetchWorks.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }, [token]);

  const fetchAll = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await worksApi.fetchWorks();
      setWorks(res.data);
    } catch (e) {
      setError(e.response?.data || "Не вдалося отримати роботи");
    } finally {
      setLoading(false);
    }
  };

  const addWork = async (data) => {
    setLoading(true);
    setError(null);
    try {
      await worksApi.addWork(data);
      await fetchAll();
      return true;
    } catch (e) {
      setError(e.response?.data || "Не вдалося додати роботу");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const deleteWork = async (id) => {
    setLoading(true);
    setError(null);
    try {
      await worksApi.deleteWork(id);
      await fetchAll();
    } catch (e) {
      setError(e.response?.data || "Не вдалося видалити роботу");
    } finally {
      setLoading(false);
    }
  };

  return { works, loading, error, fetchAll, addWork, deleteWork };
}

export default useWorks;
