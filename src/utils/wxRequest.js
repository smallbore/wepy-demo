import wepy from 'wepy';
import util from './util';
import md5 from './md5';
import tip from './tip'

const API_SECRET_KEY = 'www.mall.cycle.com'
const TIMESTAMP = util.getCurrentTime()
const SIGN = md5.hex_md5((TIMESTAMP + API_SECRET_KEY).toLowerCase())

const wxRequest = async(params = {}, url) => {
  tip.loading();
  let data = params.query || {};
  data.sign = SIGN;
  data.showapi_timestamp = TIMESTAMP;
  data.showapi_appid = 44966;
  data.showapi_sign = '6cae83dfd63e4c52af67dd9fe32dbe1c';
  let res = await wepy.request({
    url: url,
    method: params.method || 'GET',
    data: data,
    header: { 'Content-Type': (params.method ? 'application/x-www-form-urlencoded' : 'application/json') },
  });
  tip.loaded();
  return res;
};

const wxAjax = async(params = {}, key, url) => {
  let data = params.query || {};
  data.sign = SIGN;
  data.showapi_timestamp = TIMESTAMP;
  data.showapi_appid = 44966;
  data.showapi_sign = '6cae83dfd63e4c52af67dd9fe32dbe1c';
  let res = await wepy.request({
    url: url,
    method: params.method || 'GET',
    data: data,
    header: { 'Content-Type': (params.method ? 'application/x-www-form-urlencoded' : 'application/json') },
  });
  return res;
};



module.exports = {
  wxRequest,
  wxAjax
}
