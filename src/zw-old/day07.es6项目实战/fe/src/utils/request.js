import { ENDPOINT } from './config';

/**
 * 基本的 request 构造函数
 *
 * @param {Object} options 参数对象
 */
function baseRequest(options) {
  const url = options.url ?? '/';
  return fetch(`${ENDPOINT}${url.startsWith('/') ? url : `/${url}`}`, {
    method: options.method ?? 'get',
    credentials: 'include',
    // 合并 headers
    headers: Object.assign({
      'Content-Type': 'application/json',
    }, options.headers ?? {}),
    body: options.method === 'get' ? null : JSON.stringify(options.data),
  })
  .then(resp => resp.json())
  .then(res => {
    if (res.status === 401) {
      // 需要登录的状态
      // 后续可以直接跳转登录路由
      return Promise.reject({ msg: res.msg, data: res.data, res });
    }

    if (res.status === 200 || res.status === 0) {
      // 请求成功
      return Promise.resolve(res);
    }

    // 通用的 toast 提示
    alert(res.msg ?? '请求失败');
    return Promise.reject({ msg: res.msg, data: res.data, res });
  });
}

/**
 * 构造 request 对象，拥有 request.get 和 request.post 两个方法
 */
const request = ['get', 'post'].reduce((req, method) => {
  req[method] = (url, data = {}, options = {}) => {
    return baseRequest(Object.assign({ url, data, method }, options));
  }
  return req;
}, {});

export default request;
