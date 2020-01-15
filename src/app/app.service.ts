import { Injectable } from '@angular/core';

export class Product {
    ID: number;
    Name: string;
    Category: string;
    ImageSrc: string;
}

const products: Product[] = [{
    ID: 1,
    Name: 'FaceBook',
    Category: 'Social',
    ImageSrc: '/assets/social-svg/facebook.svg'
}, {
    ID: 2,
    Name: 'Instagram',
    Category: 'Social',
    ImageSrc: '/assets/social-svg/instagram.svg'
}, {
    ID: 3,
    Name: 'Twitter',
    Category: 'Social',
    ImageSrc: '/assets/social-svg/twitter.svg'
}, {
    ID: 4,
    Name: 'Skype',
    Category: 'Chat',
    ImageSrc: '/assets/social-svg/skype.svg'
}, {
    ID: 5,
    Name: 'WhatsApp',
    Category: 'Chat',
    ImageSrc: '/assets/social-svg/whatsapp.svg'
}, {
    ID: 6,
    Name: 'DropBox',
    Category: 'Corperate',
    ImageSrc: '/assets/social-svg/dropbox.svg'
}, {
    ID: 7,
    Name: 'Google',
    Category: 'Corperate',
    ImageSrc: '/assets/social-svg/google.svg'
}, {
    ID: 8,
    Name: 'Amazon',
    Category: 'Corperate',
    ImageSrc: '/assets/social-svg/amazon.svg'
}, {
    ID: 9,
    Name: 'GitHub',
    Category: 'Corperate',
    ImageSrc: '/assets/social-svg/github.svg'
}, {
    ID: 10,
    Name: 'Linked-In',
    Category: 'Corperate',
    ImageSrc: '/assets/social-svg/linkedin.svg'
}];


@Injectable()
export class Service {
    getProducts(): Product[] {
        return products;
    }
}
