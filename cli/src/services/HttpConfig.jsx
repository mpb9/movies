import axios from "axios";
import { handleError } from "./ErrorService";

export class HttpInstance {
  defaults = {
    baseURL: import.meta.env.REACT_APP_API_URL,
    timeout: 1000,
    headers: { Accept: "*/*", "Content-Type": "application/json" },
  };

  constructor(...args) {
    this.defaults = { ...this.defaults, ...args };

    this._req = axios.create(this.defaults);
    this._res = null;
  }

  get req() {
    return this._req;
  }

  set req(value) {
    if (value === null || value === undefined) {
      handleError(new Error("req cannot be null or undefined"));
    }
    this._req = value;
  }

  get res() {
    return this._res;
  }

  set res(value) {
    if (value === null || value === undefined) {
      handleError(new Error("res cannot be null or undefined"));
    }
    this._res = value;
  }

  updateReqConfig(key, value) {
    if (Object.prototype.hasOwnProperty.call(this._req.defaults, key)) {
      this._req.defaults[key] = value;
    }
  }

  updateResConfig(key, value) {
    if (this._res && Object.prototype.hasOwnProperty.call(this._res, key)) {
      this._res[key] = value;
    }
  }
}
