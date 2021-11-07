import { HttpService, Injectable } from '@nestjs/common';
import { AmazonCaProduct } from 'src/models/DTO';
import { AxiosRequestConfig } from 'axios'
import { JSDOM } from "jsdom";


@Injectable()
export class AmazonService {

    constructor(private http: HttpService) { }


    async getProductInfo(url: string): Promise<AmazonCaProduct> {
        const options: AxiosRequestConfig = {
            method: 'GET',
            url: 'https://axesso-axesso-amazon-data-service-v1.p.rapidapi.com/amz/amazon-lookup-product',
            params: {
                url: url
            },
            headers: {
                'x-rapidapi-key': '8c8cd20a75mshf294dd1ec381f33p1255e8jsn6f7fc5b2c897',
                'x-rapidapi-host': 'axesso-axesso-amazon-data-service-v1.p.rapidapi.com'
            }
        };
        let data = this.http.get<AmazonCaProduct>('https://axesso-axesso-amazon-data-service-v1.p.rapidapi.com/amz/amazon-lookup-product', options).toPromise();

        return (await data).data;
    }

    async getInhomeProductInfo(url: string) {

        const data = (new JSDOM((await this.http.get(url).toPromise()).data));
        console.log(data.window.document.body.innerHTML);
        return "yo"
    }
}
