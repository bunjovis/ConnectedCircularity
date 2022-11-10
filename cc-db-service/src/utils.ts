export function getToken(wholeToken: any) {
    try {
        const tokenParts = wholeToken.split(' ');
        if (tokenParts[0] !== 'Bearer') {
        return 'Not a bearer token!';
        }
        const token = tokenParts[1];
        return token;
    } catch (error) {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
    }
}