export interface NftForm {
    _id: string,
    title: string,
    description: string,
    image: File,
    token: string,
    type: string,
    price: number,
    owner: string,
    onSale: boolean
}
