import { handleCustomError, handleError } from "./ErrorService";
import { HttpInstance } from "./HttpConfig";

// MARK: GET
export async function httpRequest(
  endpoint = "/",
  method = "get",
  body = null
  // ...args
) {
  // ! ...args isnt implemented yet

  let httpInstance = new HttpInstance();

  switch (method) {
    case "get":
      httpInstance.updateReqConfig("method", "get");
      break;
    case "post":
      httpInstance.updateReqConfig("method", "post");
      break;
    default:
      httpInstance.updateReqConfig("method", "get");
      break;
  }

  if (body) {
    httpInstance.updateReqConfig("data", body);
  }

  let res = null;

  try {
    httpInstance.res = await httpInstance.req.request(endpoint);

    try {
      res = await httpInstance.res.data;
    } catch (err) {
      handleCustomError(err, "Response body has no data.");
    }
  } catch (err) {
    handleError(err);
  }
  return res;
}

// MARK: POST
