import 'whatwg-fetch'

export default () => {
  // preset request headers
  const reqHeaders = {
    Accept: 'application/json',
    'Cache-Control': 'no-cache'
  }
  /**
   * convert to query string
   * 
   * @param {Object} params 
   * @returns param=value&param1=value
   */
  const convertQuery = params => {
    if (!params) {
      return ''
    }
    return Object.keys(params).reduce((pre, key) => (pre + `${key}=${params[key]}&`), '').slice(0, -1)
  }
  /**
   * send request for specify url and params
   * 
   * @param {String} url 
   * @param {Object} init 
   */
  const request = (url, init, type) => new Promise((resolve, reject) => {
    fetch(url, init).then(res => {
      if (res.ok) {
        switch (type) {
          case 'text':
            resolve(res.text())
            break
          case 'blob':
            resolve(res.blob())
            break
          default:
            resolve(res.json())
            break
        }
      } else {
        // failed to do something
      }
    }).catch(err => {
      reject(err)
    })
  })

  window.fetcher = {
    /**
     * send get request
     * 
     * @param {String} url 
     * @param {Object} params 
     * @returns Promise object
     */
    get: (url, params, type) => {
      return request(url + '?' + convertQuery(Object.assign({}, params)), {
        headers: reqHeaders
      }, type)
    },
    /**
     * send post request
     * 
     * @param {String} url 
     * @param {Object} params 
     * @param {String} type
     * @returns Promise object
     */
    post: (url, params, type) => {
      return request(url, {
        method: 'POST',
        headers: Object.assign({}, reqHeaders, {
          'Content-Type': type === 'file' ? 'multipart/form-data' : 'application/x-www-form-urlencoded'
        }),
        body: convertQuery(params)
      }, type)
    }
  }
}
