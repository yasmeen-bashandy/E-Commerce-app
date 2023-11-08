export interface Cart {

    numOfCartItems:number,
    data:Data

}

interface Data{
    totalCartPrice:number,
    products:Products[]
}

interface Products{
    count:number,
    price:number,
    product:ProductDetails

}

interface ProductDetails{
    id:string,
    title:string,
    imageCover:string
}
