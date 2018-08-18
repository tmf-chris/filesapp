import * as Constants from './constants';

export const getBytesFromFileSizeString = (a) => {
    let [ size, type ] = a.split(' ');
    if (typeof type !== 'undefined') {
        size = type === 'KB' ? size * Constants.KB : type === 'MB' ? size * Constants.MB : size;
    }
    return size;
};

export const sortFileSizeStrings = (a, b, desc) => {
    const asize = getBytesFromFileSizeString(a);
    const bsize = getBytesFromFileSizeString(b);

    if (asize > bsize) {
        return 1;
    }
    if (asize < bsize) {
        return -1;
    }
    return 0;
};

export const formatBytes = (a, b) => {
    if (0 == a) return '0 Bytes';
    var c = 1024, d = b || 2, e = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        f = Math.floor(Math.log(a) / Math.log(c));
    return parseFloat((a / Math.pow(c, f)).toFixed(d)) + ' ' + e[f]
};