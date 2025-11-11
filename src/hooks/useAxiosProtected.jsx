import { useEffect } from "react";
import apiClient from "../api/apiClient";
import useUserHook from "./useUserHook";

const useAxiosSecure = () => {
  const { user } = useUserHook();
  useEffect(() => {
    const requestInterceptor = apiClient.interceptors.request.use(
      (config) => {
        if (user?.accessToken) {
          config.headers.Authorization = `Bearer ${user?.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
    return () => {
      apiClient.interceptors.request.eject(requestInterceptor);
    };
  }, [user]);

  return apiClient;
};

export default useAxiosSecure;
