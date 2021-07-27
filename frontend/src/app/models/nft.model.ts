export interface Nft {
    _id: string,
    title: string,
    description: string,
    image: string,
    token: string,
    type: string,
    price: number,
    createdAt: Date,
    updatedAt: Date
}
