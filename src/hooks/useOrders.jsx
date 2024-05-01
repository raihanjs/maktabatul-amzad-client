import { useQuery } from "@tanstack/react-query";
import { useAxiosPublic } from "./useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";

export default function useOrders() {
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  const {
    data: orders = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      axiosPublic.get(`/orders?email=${user?.email}`).then((res) => {
        return res.data;
      }),
  });
  return [orders, isLoading, refetch];
}
