export function extend(destination, source, override) {
    //      var override = override ? override || true;
    if (!override) override = true;
    for (key in source) {
        if (override || !(key in destination)) destination[key] = source[key];
    }
    return destination;
}

export function setCss(elem, value) {
    if (arguments.length < 2) {
        var result = this.getComputedStyle(elem, '');
        return result;
    } else {
        if (elem && typeof(value) == 'string') {
            var css = elem + ":" + value;
            return this.style.cssText += css + ';'
        }
    }
}
