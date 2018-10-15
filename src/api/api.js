import { wxRequest , wxAjax } from '@/utils/wxRequest';

let env = "-test" //-dev 或者 -test
let url = 'https://route.showapi.com/'

// 励志英文
const EnglishUrl = url + '1211-1';
const getEnglish = (params) => wxRequest(params, EnglishUrl)

// 图片
const photoUrl = 'https://image.baidu.com/channel/listjson';
const getPhoto = (params) => wxRequest(params, photoUrl)

// 笑话基
const jokesUrl = url + '255-1';
const getJokes = (params) => wxRequest(params, jokesUrl)

// 鬼故事
const storyUrl = url + '955-1';
const getStory = (params) => wxRequest(params, storyUrl)

// 鬼故事详情
const storydetailsUrl = url + '955-2';
const getStorydetails = (params) => wxRequest(params, storydetailsUrl)

export default {
  getEnglish,
  getPhoto,
  getJokes,
  getStory,
  getStorydetails
}
