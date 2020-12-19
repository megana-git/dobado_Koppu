export interface IProduct {
    _id: number;
    name: string;
    description: string;
}

export enum ProductModificationStatus {
    None = 0,
    Create = 1,
    Edit = 2
}

export interface IProductList extends Array<IProduct>{}