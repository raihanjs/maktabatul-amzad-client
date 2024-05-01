import { useQuery } from "@tanstack/react-query";
import { useAxiosPublic } from "./useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";

export default function useUser() {
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  const {
    data: userDetails = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["userDetails"],
    queryFn: () =>
      axiosPublic.get(`/users?email=${user?.email}`).then((res) => {
        return res.data;
      }),
  });
  return [userDetails, isLoading, refetch];
}
