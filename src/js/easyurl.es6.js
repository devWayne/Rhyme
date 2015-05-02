export default class URL {
    constructor() {
        this.url = link || location.href;
        this.search = location.search || '';
        this.hash = location.hash | '';
        this.origin = location.protocol | '';
        this.host = location.host | '';
        location.origin ? this.origin = location.origin : this.origin = location.protocol + "//" + location.host;
    }

    createParams(data) {
        if (Object.keys(this.readParams()).length > 0) return {};
        return this.url + '?' + obj2arr(data).join('&');
    }

    readParams(opt) {
        opt = opt || {
            type: 'Object'
        };
        var paramsArray = this.url.match(PARAMS_REGEX);
        if (!paramsArray) return {};
        if (opt.type == 'Array') return paramsArray;
        return arr2obj(paramsArray);
    }

    updateParams(opt) {
        opt = extend(opt, {
            override: true,
            data: {}
        });
        var paramsObject = this.readParams();
        paramsObject = extend(paramsObject, opt.data, opt.override);
        return this.url.split('?')[0] + '?' + obj2arr(paramsObject).join('&');
    }
    deleteParams(data) {
        data = data || {};
        var paramsObject = this.readParams();
        Object.keys(paramsObject).forEach(function(v, idx) {
            if (data.hasOwnProperty(v)) delete paramsObject[v];
        });
        return Object.keys(paramsObject).length == 0 ? this.url.split('?')[0] : this.url.split('?')[0] + '?' + obj2arr(paramsObject).join('&');
    }

    hash(data) {
        if (data) return location.href = data;
        return this.hash ? this.hash.split('#')[1] : '';
    }

}

function obj2arr(obj) {
    var _arr = [];
    for (key in obj) {
        _arr.push(key + '=' + obj[key].toString());
    }
    return _arr;
}

function arr2obj(arr) {
    var _obj = {};
    arr.forEach((v, idx) => {
        _obj[v.split('=')[0]] = v.split('=')[1];
    });
    return _obj;
}
