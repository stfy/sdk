export function removeUrlLastSlash(url: string): string {
    if (url.slice(-1) === '/') {
        return url.slice(0, -1);
    }

    return url;
}

export function addPathToUrl(url: string, path: string): string {
    return removeUrlLastSlash(url) + '/' + path;
}

export function isTelegramUrl(link: string): boolean {
    const url = new URL(link);
    return url.protocol === 'tg:' || url.hostname === 't.me';
}
