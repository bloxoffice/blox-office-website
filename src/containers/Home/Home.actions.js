import { STOREGOALDATA, STOREVIDEOURL, STORECAMPAIGNDATA, GETCAMPAIGNDATASUCCESS } from './Home.constants';

export const storeGoalData = (data, handler) => (dispatch) => {
  dispatch({
    type: STOREGOALDATA,
    data,
  });

  handler();
};

export const storeVideoUrl = (url) => (dispatch) => {
  dispatch({
    type: STOREVIDEOURL,
    url,
  });
};

export const storeCampaignData = (data, handler) => (dispatch) => {
  fetch('https://6ht1jx6yg2.execute-api.us-east-1.amazonaws.com/dev/hlthe/addTemplateInfo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((response) => {
      dispatch({
        type: STORECAMPAIGNDATA,
        response,
      });

      handler(response.message.id);
    });
};

export const joinWhiteList = (data, handler) => (dispatch) => {
  fetch('/sendEmail/{email}', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((response) => {
      dispatch({
        type: STORECAMPAIGNDATA,
        response,
      });

      handler(response.message.id);
    });
};


export const getCampaignData = (id) => (dispatch) => {
  fetch('https://6ht1jx6yg2.execute-api.us-east-1.amazonaws.com/dev/hlthe/getTemplateInfo', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
    .then((response) => {
      let campaignData = {};
      response.forEach((res) => {
        if (res.id === id) {
          campaignData = res;
        }
      });

      dispatch({
        type: GETCAMPAIGNDATASUCCESS,
        data: campaignData,
      });
    });
};
