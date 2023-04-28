import axios from 'axios';

const httpRequest = axios.create({
  baseURL: 'https://ovooa.ybapi.cn/API',
  timeout: 8000, // 超时时间
  headers: {
    'Content-Type': 'application/json'
  }
});

export const getMeizi = async () => {
  try {
    const response = await httpRequest.get('/meizi/api.php?type=text');
    return response.data;
  } catch (error:any) {
    throw new Error(error);
  }
};

export const getCoser = async () => {
  try {
    const response = await httpRequest.get('/cosplay/api.php?type=text');
    return response.data;
  } catch (error:any) {
    throw new Error(error);
  }
};

export const getTianGouRiJi = async () => {
  try {
    const response = await httpRequest.get('/tgrj/api.php');
    return response.data;
  } catch (error:any) {
    throw new Error(error);
  }
};
export const getWRYl = async () => {
  try {
    const response = await httpRequest.get('/wryl/api.php');
    return response.data;
  } catch (error:any) {
    throw new Error(error);
  }
};
export const getHistory = async () => {
  try {
    const response = await httpRequest.get('/lishi/api.php?n=20');
    return response.data;
  } catch (error:any) {
    throw new Error(error);
  }
};