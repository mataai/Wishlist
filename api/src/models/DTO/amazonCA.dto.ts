export interface AmazonCaProduct {
    responseStatus: AmazonStatus,
    responseMessage: string;
    productTitle: string;
    manufacturer: string;
    productRating: string; //4.4 out of 5 stars,
    asin: string;
    soldBy: string,
    fulfilledBy: string,
    warehouseAvailability: string,
    retailPrice: number,
    price: number,
    priceRange?: string,
    shippingPrice: number,
    priceShippingInformation: string,
    priceSaving?: string,
    productDescription: string,
    dealPrice: number,
    salePrice: number,
    mainImage: {
        imageUrl: string
    },
    categories: string[],
    deliveryMessage: string,
    rentPrice: number,
    usedPrice: number,
    retailPriceRent: number,
    prime: boolean,
    addon: boolean,
    pantry: boolean
}

export enum AmazonStatus {
    FOUND = "PRODUCT_FOUND_RESPONSE"
}