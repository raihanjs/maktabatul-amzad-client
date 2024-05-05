import { useQuery } from "@tanstack/react-query";
import { useAxiosPublic } from "./useAxiosPublic";

export default function useOrders(email) {
  const query = email ? `/orders?email=${email}` : "orders";
  const axiosPublic = useAxiosPublic();
  const {
    data: orders = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      axiosPublic.get(query).then((res) => {
        return res.data;
      }),
  });
  return [orders, isLoading, refetch];
}
