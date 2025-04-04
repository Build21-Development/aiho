import axios from "axios";

const apiUrl = "https://api.aiho.ai";

// *****
// GET
// *****

export const getHomeSecurityEvents = (propertyId: number, nEvents: number) =>
  _doGet<
    | {
        status: "ok";
        events: {
          timestamp: number;
          base64img: string;
        }[];
        last_home_security_ping: number;
      }
    | {
        status: "no_event";
        event: null;
      }
  >(`/get_home_security_events?propertyId=${propertyId}&nEvents=${nEvents}`);

export const getPropertyCardDocuments = (propertyId: number) =>
  _doGet<{
    status: "ok";
    documents: {
      timestamp: number;
      cid: string;
      fileName: string;
    }[];
  }>(`/get_property_documents_list?propertyId=${propertyId}`);

export const getPropertyCardDocument = (propertyId: number, cid: string) =>
  _doGet<
    | {
        status: "ok";
        document: string;
      }
    | {
        status: "error";
        message: "File not found" | "Document not found";
      }
  >(`/get_property_document?propertyId=${propertyId}&cid=${cid}`);

// *****
// POST
// *****

export const newPropertyCardDocument = (
  propertyId: number,
  fileName: string,
  base64document: string,
) =>
  _doPost<{
    status: "ok";
    cid: string;
  }>(`/new_property_document`, {
    propertyId,
    fileName,
    base64document,
  });

// *****
// INTERNAL HELPERS
// *****

async function _doGet<T>(endpoint: string) {
  const { data } = await axiosApi.get<{
    result: T;
    server_node_addr: `0xai${string}`;
    evm_network: string;
  }>(endpoint);
  return data.result;
}

async function _doPost<T>(endpoint: string, body: any) {
  const { data } = await axiosApi.post<{
    result: T;
    server_node_addr: `0xai${string}`;
    evm_network: string;
  }>(endpoint, body);
  return data.result;
}

const axiosApi = axios.create({
  baseURL: apiUrl,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

axiosApi.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    return error.response;
  },
);
