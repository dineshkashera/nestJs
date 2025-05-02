import { User } from "src/users/user.entity";
export declare class Report {
    id: number;
    price: number;
    make: string;
    model: number;
    year: number;
    mileage: number;
    lng: number;
    lat: number;
    user: User;
}
