import { Item } from "./item";
import { User } from "./user";

export class Wishlist {
    id: string;
    owner: User;

    items: Item[];
}