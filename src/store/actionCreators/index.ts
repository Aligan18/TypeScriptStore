import * as productInfo from './productInfo'
import * as bagItems from './bagItems'
import * as products  from './products'
import * as userAuth from './userAuth'



export default {
    ...productInfo,
    ...bagItems,
    ...userAuth,
    ...products

}