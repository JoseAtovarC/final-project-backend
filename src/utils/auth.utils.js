import crypto from 'crypto';

const salt= '8021';

export const encodePassword = (pass) => {
 
    return crypto.pbkdf2Sync(pass, salt,1000, 64, `sha512`).toString(`hex`);
}

/**
 * Genera un token random de 128 caracteres en base64 para la validación de email
 */
export const generateRandomEmailToken = () => {
    return crypto.randomBytes(128).toString('hex');
}