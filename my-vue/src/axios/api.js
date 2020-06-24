import https from './https.js'

/* 将所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 * 此处的数据依然来自 Easy Mock
 */
export const query = params => {
    return https.httpPost({
        url: '/query',
        params
    })
}
// 默认全部倒出
// 根绝需要进行  
export default {
    query
}


