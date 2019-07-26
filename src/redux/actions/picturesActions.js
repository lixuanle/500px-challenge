import Axios from 'axios';

export const getPictures = (page) => async (dispatch) => {
    const API_URL = `https://api.500px.com/v1/photos/`;
    const res = await Axios({
      method: 'get',
      url: API_URL,
      params: {
        consumer_key: process.env.REACT_APP_API_KEY,
        feature: 'popular',
        page: page
      }
    });
    console.log(res);
    dispatch({
        type: 'GET_PICTURES',
        payload: res.data.photos
    })
}