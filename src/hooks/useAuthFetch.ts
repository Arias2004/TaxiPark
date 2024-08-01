"use client";

import NotificacionContext from "@/context/NotificacionContext";
import axios, { AxiosRequestConfig } from "axios";
import { useRouter } from "next/navigation";
import { useContext } from "react";

interface AuthFetchProps {
  endpoint: string;
  redirectRoute?: string;
  formData?: any;
  options?: AxiosRequestConfig<any>;
}

export function useAuthFetch() {
  const { showNotification } = useContext(NotificacionContext);

  const router = useRouter();

  const authRouter = async ({
    endpoint,
    formData,
    redirectRoute,
    options,
  }: AuthFetchProps) => {
    try {
      const { data } = await axios.post(
        `/api/auth/${endpoint}`,
        formData,
        options
      );
      

      showNotification({
        open: true,
        status: "success",
        msj: data.message,
      });

      if (redirectRoute) router.push(redirectRoute);

      console.log('redirectRoute: ', redirectRoute)

    } catch (error: any) {
      showNotification({
        open: true,
        status: "error",
        msj: error.response.data.message as string,
      });
    }
  };

  return authRouter;
}
