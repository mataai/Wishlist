import { Wishlist } from "./wishlist";

export class User {
    id: string;
    name: string;
    username: string;
    email: string;
    password: string;
    birthday: number;

    friends: User[];
    wishlists: Wishlist[];
}