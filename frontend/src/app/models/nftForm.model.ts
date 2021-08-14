export interface NftForm {
    _id: string,
    title: string,
    description: string,
    image: File,
    token: string,
    type: string,
    price: number,
    onSale: boolean
}
