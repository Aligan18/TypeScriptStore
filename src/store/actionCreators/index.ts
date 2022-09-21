import * as productInfo from './productInfo'
import * as bagItems from './bagItems'
import * as products  from './products'
import * as selectedProducts  from './selectedProducts'



export default {
    ...productInfo,
    ...bagItems,
    ...selectedProducts,
    ...products

}