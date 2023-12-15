import { ClientProfile } from "@/types/ProfileTypes";
import { UseQueryOptions, useQuery } from "@tanstack/react-query";

const fetchClientInformation = async (): Promise<ClientProfile[]> => {
  const response = await fetch(
    "https://interview-test-mock-api.azurewebsites.net/profile"
  );
  if(!response.ok) throw Error
  return response.json();
};

type useClientsDataOptions = {
  config?: UseQueryOptions;
};

export const useClientInformation = ({ config }: useClientsDataOptions = {}) => {
  return useQuery({
    queryKey: ["client-data"],
    queryFn: () => fetchClientInformation(),
    ...config,
  });
};
