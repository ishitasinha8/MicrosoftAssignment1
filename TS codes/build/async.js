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
const isEven = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num % 2 === 0) {
                resolve(true);
            }
            else {
                reject(false);
            }
        }, 3000);
    });
};
((_) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield isEven(2);
        console.log("Yay! it's even");
    }
    catch (_a) {
        console.log("Meh! it's odd");
    }
}))();
