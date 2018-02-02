import axios from 'axios';

export function fetchGlobal() {
  return(dispatch) => {
    return axios.get('https://api.credr.com/v1/product/search/?q=eyJwYWdlIjoxLCJjdXJyZW50X2NpdHlfaWQiOjJ9').then((resp) => {
      dispatch(saveGlobal(resp.data.payload));
    })
  }
}

export function saveGlobal(data) {
  return {
    type: "SAVE_GLOBAL",
    credrData: data
  }
}
