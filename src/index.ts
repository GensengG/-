export interface ObjectData{
    id: number,
    url: string,
    mainImage: {
        blue: null,
        brightness: null,
        creation_tsz: null,
        full_height: null,
        full_width: null,
        green: null,
        hex_code: null,
        hue: null,
        is_black_and_white: null,
        listing_id: number,
        listing_image_id: number,
        rank: null,
        red: null,
        saturation: null
        url_75x75: string,
        url_170x135: string,
        url_570xN: string,
        url_fullxfull: string,
    }
    title: string,
    currencyCode: string,
    price: string,
    quantity: number,
}
