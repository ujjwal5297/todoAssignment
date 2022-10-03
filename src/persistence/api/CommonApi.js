import axios from "axios";
import { applicationProperties } from "../applicationProperties";

const post = async (endPoint, data) => {
  try {
    let axs = axios.create({ withCredentials: false });
    let response = await axs.post(
      applicationProperties.baseUrl + endPoint,
      data
    );
    
    if (response.data !== undefined && response.data.status) {
      return {
        success: true,
        data: response,
      };
    } else {
      return {
        success: false,
        data: response,
      };
    }
  } catch (e) {
    return {
      success: false,
      data: e,
    };
  } finally {
    console.log("ERROR");
  }
};

const get = async (endPoint, data) => {
  try {
    let response = await axios.get(
      applicationProperties.baseUrl + endPoint,
      data
    );
    if (response.data !== undefined && response.data.status) {
      return {
        success: true,
        data: response,
      };
    } else {
      return {
        success: true,
        data: response,
      };
    }
  } catch (e) {
    return {
      success: false,
      data: e,
    };
  } finally {
  }
};
export const commonApi = {
  post,
  get,
};
