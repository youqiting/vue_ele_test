import Mock from 'mockjs';
const baseUrl = 'http://39.108.182.97:8081';

export default {
  mockData () {
    Mock.mock(baseUrl + '/login', {
      "code":1,
      "data":'success'
    })
    Mock.mock(baseUrl+ '/getMessageList', {
      "sta": "00",
      "result": [{
        "message_title": "文章标题", 
        "message_content": "文章内容",
        "message_time": "2020-05-06"
      },
      {
        "message_title": "文章标题文章标题", 
        "message_content": "文章内容文章内容",
        "message_time": "2020-05-06"
      }]
    })
    // Mock.mock(baseUrl+ '/getMessageListById', {
    //   "code": "000",
    //   "datas|5-20": [
    //     {
    //       "date": '@date("yyyy-MM-dd")',
    //       "name": "@cname",
    //       "address": "@county(true)"
    //     }
    //   ]
    // });
    // Mock.mock('/api/getOptions', {
    //   "code": "000",
    //   "datas|5-7": [
    //     {
    //       "label": '广东省',
    //       "value": "@natural(10, 100)",
    //       "children|5-8": [
    //         {
    //           "label": '深圳市',
    //           "value": "@natural(10, 100)",
    //           "children|5-5": [
    //             {
    //               "label": '南山区',
    //               "value": "@natural(10, 100)"
    //             }
    //           ]
    //         }
    //       ]
    //     }
    //   ],
    //   "places|9-18": [
    //     {
    //       "label": '广东省',
    //       "value": "@natural(10, 100)"
    //     }
    //   ]
    // });
  }
};