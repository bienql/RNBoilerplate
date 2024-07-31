export interface QueryRequest {
  page: number;
  limit: number;
  sort: string;
  order: string;
  search: string;
}

export interface QueryResponse {
  totalItems: number;
  data: [];
}

export interface AppVersion {
  androidLiveVersion: string;
  androidMinVersion: string;
  androidUpdateLink: string;
  iosLiveVersion: string;
  iosMinVersion: string;
  iosUpdateLink: string;
}
