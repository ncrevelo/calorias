const CryptoJS = require("crypto-js");

const Encrypt = (data) => {
    const ciphertext = CryptoJS.AES.encrypt(data, process.env.AUTH_AES_SECRET_KEY).toString();
    return ciphertext;
};

const Decrypt = (data) => {
    const bytes = CryptoJS.AES.decrypt(data, process.env.AUTH_AES_SECRET_KEY);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
};

module.exports = {
    Encrypt,
    Decrypt
};
