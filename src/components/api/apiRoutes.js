const root = process.env.NODE_ENV === "development" ? "v1" : "/MCP/v1";

const apiRoutes = {
  getProjectItems: (GUID) => `${root}/projectitems/${GUID}`,
  getAllScriptServices: () => `${root}/scriptservices`,
  getChannelsRoute: () => `${root}/channels`,

  getSingleScriptFileRoute: (path) =>
    `${root}/files?path=${path}&location=Scripts`,
  getAllScriptFileRoute: () => `${root}/files?pattern=%2A.lua&location=Scripts`,
  putFilesRoute: (path) => `${root}/files?path=${path}&location=Scripts`,

  getSubcriptionOnScriptService: (tokenLocalStorage) =>
    `${root}/subscriptions/${tokenLocalStorage.substr(
      22,
      tokenLocalStorage.length - 1
    )}`,
  getAllSubscripitions: () => `${root}/subscriptions`,

  getScriptServiceSubscriptionEventSource: (token) => {
    const url =
      process.env.NODE_ENV === "development"
        ? `http://localhost:8050/MCP/${token.split("/MCP/")[1]}/events`
        : `${root}/${token.split("/MCP/v1/")[1]}/events`;

    return url;
  },
  getScriptServiceFunctions: (GUID, searchString) =>
    `${root}/scriptservices/${GUID}/functions${
      searchString === "" ? "" : `/?contains=${searchString}`
    }`,
  getRunScript: (GUID) => `${root}/scriptservices/${GUID}/start`,
  getStopScript: (GUID) => `${root}/scriptservices/${GUID}/stop`,
  getPauseScript: (GUID) => `${root}/scriptservices/${GUID}/pause`,

  getDecapricatedCompile: (GUID) => `${root}/scriptservices/${GUID}/compile`,
};

export default apiRoutes;
