'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var loadedScripts = {};
var src = "https://korablobstorage.blob.core.windows.net/modal-bucket/korapay-collections.min.js";
function useKorapayScript() {
    var _a = React.useState({
        loaded: false,
        error: false
    }), state = _a[0], setState = _a[1];
    React.useEffect(function () {
        if (loadedScripts.hasOwnProperty(src)) {
            setState({
                loaded: true,
                error: false
            });
        }
        else {
            loadedScripts.src = src;
            var script_1 = document.createElement("script");
            script_1.src = src;
            script_1.async = true;
            var onScriptLoad_1 = function () {
                setState({
                    loaded: true,
                    error: false
                });
            };
            var onScriptError_1 = function () {
                delete loadedScripts.src;
                setState({
                    loaded: true,
                    error: true
                });
            };
            script_1.addEventListener("load", onScriptLoad_1);
            script_1.addEventListener("complete", onScriptLoad_1);
            script_1.addEventListener("error", onScriptError_1);
            document.body.appendChild(script_1);
            return function () {
                script_1.removeEventListener("load", onScriptLoad_1);
                script_1.removeEventListener("error", onScriptError_1);
            };
        }
    }, []);
    return [state.loaded, state.error];
}

/**
 *
 * @param config takes in configuration for payment
 * @returns handleKorapayPayment
 */
function useKorapay(korapayConfig) {
    var _a = useKorapayScript(), loaded = _a[0], error = _a[1];
    React.useEffect(function () {
        if (error) {
            throw new Error("Unable to load korapay collection modal");
        }
    }, [error]);
    /**
     *
     * @param object - {onSuccess, onClose, onFailed, onTokenized}
     */
    function handleKorapayPayment(_a) {
        var _b, _c;
        var onSuccess = _a.onSuccess, onClose = _a.onClose, onFailed = _a.onFailed, onTokenized = _a.onTokenized;
        if (error) {
            throw new Error("Unable to load korapay collection modal");
        }
        if (loaded) {
            var korapayArgs = __assign(__assign({}, korapayConfig), { key: korapayConfig.public_key, amount: (_b = korapayConfig.amount) !== null && _b !== void 0 ? _b : 0, currency: (_c = korapayConfig.currency) !== null && _c !== void 0 ? _c : "NGN", onSuccess: onSuccess ? onSuccess : function () { return null; }, onClose: onClose ? onClose : function () { return null; } });
            // @ts-ignore
            delete korapayArgs.public_key;
            if (onFailed)
                korapayArgs.onFailed = onFailed;
            if (onTokenized)
                korapayArgs.onTokenized = onTokenized;
            // @ts-ignore
            return window.Korapay && window.Korapay.initialize(korapayArgs);
        }
    }
    return [handleKorapayPayment];
}

var KorapayButton = function (_a) {
    var text = _a.text, className = _a.className, children = _a.children, _b = _a.onSuccess, onSuccess = _b === void 0 ? function () { return null; } : _b, _c = _a.onClose, onClose = _c === void 0 ? function () { return null; } : _c, disabled = _a.disabled, config = __rest(_a, ["text", "className", "children", "onSuccess", "onClose", "disabled"]);
    var initializePayment = useKorapay(config)[0];
    return (React.createElement("button", { disabled: disabled, className: className, onClick: function () { return initializePayment({ onSuccess: onSuccess, onClose: onClose }); } }, text || children));
};

exports.KorapayButton = KorapayButton;
exports.useKorapay = useKorapay;
