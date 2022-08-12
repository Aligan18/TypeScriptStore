export default  interface ItemsType {
  
    categoryId:string;
    creditMonthlyPrice :number;
    currency: string;
    discount : number;
    hasDescription : boolean;
    hasVideoReview : boolean;
    id : string ;
    name : string;
    primaryImage : PrimaryImageTypes;
    rating : number;
    reviewCount : number;
    stock : number;
    unitPrice : number;
    unitSalePrice : number;
    url : string;

}

interface PrimaryImageTypes{
    
large : string 
medium : string ;
small : string ;
}