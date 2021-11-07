import { AmazonCaProduct } from "./DTO";
import { Vendor } from "./vendor";

export class Item {
    id: string;

    name: string;
    link: string;
    vendor: Vendor;

    imageURL?: string;
    price?: number;
    asin?: string;
    salePrice?: number;
    dealPrice?: number;
    "mainImage.imageUrl"?: string;
    categories?: [];
    itemTest: AmazonCaProduct;


}