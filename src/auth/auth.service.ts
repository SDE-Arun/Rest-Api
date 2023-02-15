import { Injectable } from "@nestjs/common";
import { Auth } from "./auth.interface"; // using the "auth.interface in our service"

// we are using Injectable means we are using this in other places 
@Injectable({})
export class AuthService {

    private readonly authors: string[] = ['this', 'that'];

    findAll(): string[] {
        return this.authors;
    }

    create(item) {
        this.authors.push(item);
    }

    author = [{
        id: 1,
        name: 'ABC'
    }, {
        id: 2,
        name: 'no-one'
    }
    ];
    // getauthor() {
    //     return this.author;
    // }
    // // "author" is the object and "auth" is parameter
    // createauthor(auth){
    //     this.author=[...this.author,{...auth}];
    // }
    // updateUser(auth){
    //     this.author=this.author.map(a=>{
    //         if(a.id==auth.id){
    //             return{...auth};
    //         }
    //         return a;
    //     })
    // }
    // deleteUser(id){
    //     this.author=this.author.filter(a=>a.id!=id);
    // }
    signup() {
        return { msg: 'I am signed up' };
    }
    signin() {
        return { msg: 'I am signed in my account' };
    }
}