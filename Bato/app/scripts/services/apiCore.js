/// <reference path="../../../typings/index.d.ts" />

/**
 * BatoApp DataService
 * Author: Bill
 */

angular.module('BatoApp')
    .factory('ApiCore', ['Data', function (data) {

        //Initialize system with admin user
        var root = {
            name: 'admin',
            password: hash('admin'),
            type: userTypes[0],
            id: 1
        };
        data.users.push(root);

        /**
         * Signs up a user
         */
        this.signUp = function (user) {
            data.users.forEach(function (i) {
                if (i.username == user.username)
                    return {
                        username: user.username,
                        userType: user.userType,
                        message: "Username not available"
                    };
            }, this);
            user.password = hash(user.password);
            user.id = data.users.length + 1;
            data.users.push(user);
            return {
                username: user.username,
                userType: user.userType,
                message: "Ok"
            };
        };

        /**
         * Signs in a user
         */
        this.signIn = function (user) {

            data.users.forEach(function (i) {
                if (i.username == user.username && hash(user.password) == i.password) {
                    return {
                        username: user.username,
                        userType: i.userType,
                        message: "Ok"
                    };
                }
            }, this);
            return {
                username: null,
                userType: null,
                message: "Invalid username or password"
            };
        };

        /**
         * Sell every item in the cart
         */
        this.checkoutCart = function (cart, userId) {
            cart.forEach(function (i) {
                sellCartItem(i);
            }, this);
            addOrder(cart, userId);
        };

        /**
         * Add an order
         */
        this.addOrder = function (cart, userId) {
            data.orders.push({
                cart: cart,
                userId = userId
            });
        }

        /**
         * Sell a cart item
         */
        this.sellCartItem = function (cartItem) {
            var item = getItemById(cartItem.itemId);

            item.quantity -= cartItem.quantity;

            //add to sales
            data.sales.push({
                id: data.sales.length + 1,
                itemId: item.id,
                quantity: cartItem.quantity
            });
        };

        /**
         * Get items by category id
         */
        this.getByCategory = function (categoryId) {
            var _items = [];
            data.items.forEach(function (i) {
                if (i.categoryId == categoryId) {
                    _items.push(i);
                }
            }, this);
            return _items;
        };

        /**
         * Get items by subcategory id
         */
        this.getBySubCategory = function (subCategoryId) {
            var _items = [];
            data.items.forEach(function (i) {
                if (i.subCategoryId == subCategoryId) {
                    _items.push(i);
                }
            }, this);
            return _items;
        };

        /**
         * Get all orders
         */
        this.getAllOrders = function () {
            return data.orders;
        };

        /**
         * Gets all orders by userid
         */
        this.getOrdersByUserId = function (userId) {
            var _orders = [];
            data.orders.forEach(function (i) {
                if (i.userId == userId) { }
                _orders.push(i);
            }, this);
            return _orders;
        }

        /**
         * Gets an item by id
         */
        this.getItemById = function (itemId) {
            for (var i = 0; i < data.items.length; i++) {
                if (data.items[i].id == itemId) {
                    return data.items[i];
                }
            }
            return null;
        };

        /**
         * Gets all items
         */
        this.getAllItems = function(){
            return data.items;
        }

        /**
         * Finds all items which contain the search query in their name
         */
        this.search = function (query) {
            var _items = [];
            data.items.forEach(function (i) {
                if (i.name.includes(query)) {
                    _items.push(i);
                }
            }, this);
            return _items;
        };

        /**
         * Restocks an item
         */
        this.restockItem = function (stock) {
            var item = getItemById(stock.itemId);
            item.quantity += stock.quantity;
        }

        /**
         * Adds a new item
         */
        this.addNewItem = function (item) {
            item.id = data.items.length + 1;
            data.items.push(item);
        }

        //dummy hash to hash the password
        function hash(s) {
            return s;
        }

        return this;
    }]);