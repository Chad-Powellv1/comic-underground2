import * as uiService from './ui';
import * as storageService from './storage';
import * as STORAGE_KEYS from '../constants/storage';

export const remove = item => {
    let cart = JSON.parse(storageService.get(STORAGE_KEYS.CART));
    if (!cart || !cart.length) return;
    cart = cart.filter(cartItem => cartItem.Id !== item.id);
    storageService.save({ key: STORAGE_KEYS.cart, payload: JSON.stringify(cart) })
}

export const addToCart = item => {
    const cart = JSON.parse(storageService.get(STORAGE_KEYS.CART));
    if (cart && cart.length) {
        updateCart(cart, item);
    } else {
        createCart(item);
    }
    uiService.alert('Item added to cart');
};

const updateCart = (cart, item) => {
    if (!cart || !cart.length) return;
    const updatedCart = [];
    let isNonExisted = true;
    for (const cartItem of cart) {
        if (cartItem.id === item.id) {
            isNonExisted = false;
            cartItem.quanity = +cartItem.quanity + +item.quanity;
        }
        updatedCart.push(cartItem);
    }
    storageService.save({ key: STORAGE_KEYS.CART, payload: JSON.stringify(updatedCart) });
};

const createCart = item => {
    storageService.save({ key: STORAGE_KEYS.CART, payload: JSON.stringify([{ ...item }]) });
};
