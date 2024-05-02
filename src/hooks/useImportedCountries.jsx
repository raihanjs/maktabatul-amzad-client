import { useQuery } from "@tanstack/react-query";
import { useAxiosPublic } from "./useAxiosPublic";

export default function useImportedCountries() {
  const axiosPublic = useAxiosPublic();
  const {
    data: importedCountries = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["importedCountries"],
    queryFn: () =>
      axiosPublic.get("/importedcountry").then((res) => {
        return res.data;
      }),
  });
  return [importedCountries, isLoading, refetch];
}
