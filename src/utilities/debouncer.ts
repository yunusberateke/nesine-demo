const debouncer = (func: any, wait: number, immediate?: boolean) => {
    let timeout: number | undefined = undefined;

    return function executedFunction(this: any, ...args: any[]) {
        const context = this;
        const later = () => {
            timeout = undefined;
            if (!immediate) func.apply(context, args);
        };

        const callNow = immediate && !timeout;

        clearTimeout(timeout);

        timeout = window.setTimeout(later, wait);

        if (callNow) func.apply(context, args);
    };
}

export { debouncer }