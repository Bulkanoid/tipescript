"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
function getUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('https://dummyjson.com/users');
            if (!response.ok) {
                throw new Error('Error response');
            }
            const data = yield response.json();
            return data;
        }
        catch (e) {
            if (e instanceof Error) {
                console.error(e.message);
            }
            else {
                console.error(`Произошла ошибка при получении пользователей`);
            }
            return null;
        }
    });
}
function assertUser(obj) {
    if (typeof obj === 'object' && !!obj && 'users' in obj) {
        return;
    }
    throw new Error('Not users');
}
function load() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield getUsers();
        assertUser(data);
        console.log(data.limit);
    });
}
load();
