import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';

/* Preset a rest api call function with token (if needed) */
const rest = async (request: AxiosRequestConfig): Promise<AxiosResponse> => {
  return await axios({
    ...request,
    // if we have token...
    // params: { ...request.params, token },
  });
};

export default rest;
