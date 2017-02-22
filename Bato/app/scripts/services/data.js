/// <reference path="../../../typings/index.d.ts" />

/**
 * BatoApp Data
 * Author: Bill
 */

angular.module('BatoApp')
    .factory('Data', [function () {

        this.userTypes = ['admin', 'simple'];

        this.categories = [
            {
                id:1,
                name: "Electronics"
            },
            {
                id:2,
                name: "Computers"
            },
            {
                id:3,
                name:"Phones"
            },
            {
                id:4,
                name: "Kitchen"
            },
            {
                id:5,
                name: "Furniture"
            },
            {
                id:6,
                name: "Books"
            },
            {
                id:7,
                name: "Clothing"
            }
        ];

        this.subCategories = [
            {
                id:1,
                category:1,
                name: "TV"
            },
            {
                id:2,
                category:1,
                name: "Mp3"
            },
            {
                id:3,
                category:1,
                name: "Speakers"
            },
            {
                id:4,
                category:2,
                name: "Notebooks"
            },
            {
                id:5,
                category:2,
                name: "Laptops"
            },
            {
                id:6,
                category:2,
                name: "Desktop"
            },
            {
                id:7,
                category:3,
                name: "Samsung"
            },
            {
                id:8,
                category:3,
                name: "Nokia Lumia"
            },
            {
                id:9,
                category:3,
                name: "Apple"
            }
        ];

        this.items = [
            {
                id:1,
                name:"Samsung 42 inch plasma",
                categoryId:1,
                subCategoryId:1,
                price: 300000,
                quantity = 3
            },
            {
                id:2,
                name:"LG 36 inch",
                categoryId:1,
                subCategoryId:1,
                price: 280000,
                quantity = 2
            },
            {
                id:3,
                name:"SINSUNG box matches",
                categoryId:1,
                subCategoryId:1,
                price: 10000,
                quantity = 10
            },
            {
                id:4,
                name:"Apple ear bots",
                categoryId:1,
                subCategoryId:2,
                price: 50000,
                quantity = 12
            },
            {
                id:5,
                name:"Amazon home speaker",
                categoryId:1,
                subCategoryId:3,
                price: 80000,
                quantity = 9
            },
            {
                id:6,
                name:"Hp Specter x360",
                categoryId:2,
                subCategoryId:4,
                price: 800000,
                quantity = 14
            },
            {
                id:7,
                name:"Dell XPS 15",
                categoryId:2,
                subCategoryId:4,
                price: 1200000,
                quantity = 5
            },
            {
                id:8,
                name:"Apple Mac book Pro 16",
                categoryId:2,
                subCategoryId:5,
                price: 2000000,
                quantity = 12
            },
            {
                id:9,
                name:"Microsoft surface hub",
                categoryId:2,
                subCategoryId:6,
                price: 2500000,
                quantity = 8
            },
            {
                id:9,
                name:"Samgsung Galaxy S6 Edge",
                categoryId:3,
                subCategoryId:7,
                price: 300000,
                quantity = 18
            },
            {
                id:10,
                name:"Samsung Galaxy Note 4",
                categoryId:3,
                subCategoryId:7,
                price: 200000,
                quantity = 15
            },
            {
                id:11,
                name:"Nokia Lumia 1020",
                categoryId:3,
                subCategoryId:8,
                price: 150000,
                quantity = 1
            },
            {
                id:12,
                name:"Iphone 6s",
                categoryId:3,
                subCategoryId:9,
                price: 300000,
                quantity = 6
            },
            {
                id:13,
                name:"Iphone 7s",
                categoryId:3,
                subCategoryId:9,
                price: 500000,
                quantity = 39
            },
            {
                id:14,
                name:"Iphone 7",
                categoryId:3,
                subCategoryId:9,
                price: 400000,
                quantity = 10
            },
            {
                id:15,
                name:"Cooking spoon",
                categoryId:4,
                subCategoryId:null,
                price: 1000,
                quantity = 100
            },
            {
                id:16,
                name:"table spoon",
                categoryId:4,
                subCategoryId:null,
                price: 100,
                quantity = 1000
            },
            {
                id:18,
                name:"Plate",
                categoryId:4,
                subCategoryId:null,
                price: 1500,
                quantity = 310
            },
            {
                id:20,
                name:"Molinex",
                categoryId:4,
                subCategoryId:null,
                price: 25000,
                quantity = 39
            },
            {
                id:21,
                name:"Microwave",
                categoryId:4,
                subCategoryId:null,
                price: 40000,
                quantity = 5
            },
            {
                id:22,
                name:"Glass cupboard",
                categoryId:5,
                subCategoryId:null,
                price: 400000,
                quantity = 8
            },
            {
                id:23,
                name:"Dinning table",
                categoryId:5,
                subCategoryId:null,
                price: 240000,
                quantity = 7
            },
            {
                id:24,
                name:"Set chair",
                categoryId:5,
                subCategoryId:null,
                price: 180000,
                quantity = 9
            },
            {
                id:25,
                name:"Carpet",
                categoryId:5,
                subCategoryId:null,
                price: 5000,
                quantity = 24
            },
            {
                id:26,
                name:"Harry Potter",
                categoryId:6,
                subCategoryId:null,
                price: 25000,
                quantity = 12
            },
            {
                id:27,
                name:"Dare Devil",
                categoryId:6,
                subCategoryId:null,
                price: 9000,
                quantity = 19
            },
            {
                id:28,
                name:"In the room",
                categoryId:6,
                subCategoryId:null,
                price: 1000,
                quantity = 30
            },
            {
                id:29,
                name:"The abducted",
                categoryId:6,
                subCategoryId:null,
                price: 800,
                quantity = 31
            },
            {
                id:30,
                name:"The davici code",
                categoryId:6,
                subCategoryId:null,
                price: 2000,
                quantity = 19
            },
            {
                id:31,
                name:"Hand bag",
                categoryId:7,
                subCategoryId:null,
                price: 5000,
                quantity = 5
            },
            {
                id:32,
                name:"Denk shoe",
                categoryId:7,
                subCategoryId:null,
                price: 50000,
                quantity = 9
            },
            {
                id:33,
                name:"Party gown",
                categoryId:7,
                subCategoryId:null,
                price: 12000,
                quantity = 9
            },
            {
                id:34,
                name:"Louis Vuiton Jeans",
                categoryId:7,
                subCategoryId:null,
                price: 15000,
                quantity = 12
            },
            {
                id:35,
                name:"Destroy jeans",
                categoryId:7,
                subCategoryId:null,
                price: 25000,
                quantity = 17
            },
            {
                id:36,
                name:"Pointinini",
                categoryId:7,
                subCategoryId:null,
                price: 10000,
                quantity = 10
            }
        ];

        this.users = [];

        this.sales = [];
    }])

