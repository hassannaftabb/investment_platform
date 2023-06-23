import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";

class PrivateAxios {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
      baseURL: "http://localhost:3000",
    });
    this.setupInterceptors();
  }

  public getAxiosInstance(): AxiosInstance {
    return this.axiosInstance;
  }
  private setupInterceptors(): void {
    const token = localStorage.getItem("token") || "";
    // Add request interceptor
    this.axiosInstance.interceptors.request.use(
      (config: InternalAxiosRequestConfig<any>) => {
        if (token !== "") {
          Object.assign(config.headers, { Authorization: `Bearer ${token}` });
        }
        return config;
      },
      (error) => {
        console.log("An error in axios:", error);
        return Promise.reject(error);
      }
    );
  }
}

const privateAxios = new PrivateAxios();
export const axiosProtected = privateAxios.getAxiosInstance();
