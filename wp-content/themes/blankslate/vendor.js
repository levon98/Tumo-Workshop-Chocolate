/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
 //@ sourceMappingURL=jquery.min.map
 */
(function (e, t) {
    var n, r, i = typeof t, o = e.location, a = e.document, s = a.documentElement, l = e.jQuery, u = e.$, c = {}, p = [], f = "1.10.2", d = p.concat, h = p.push, g = p.slice, m = p.indexOf, y = c.toString, v = c.hasOwnProperty, b = f.trim, x = function (e, t) {
        return new x.fn.init(e, t, r)
    }, w = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, T = /\S+/g, C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, k = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, E = /^[\],:{}\s]*$/, S = /(?:^|:|,)(?:\s*\[)+/g, A = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, j = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, D = /^-ms-/, L = /-([\da-z])/gi, H = function (e, t) {
        return t.toUpperCase()
    }, q = function (e) {
        (a.addEventListener || "load" === e.type || "complete" === a.readyState) && (_(), x.ready())
    }, _ = function () {
        a.addEventListener ? (a.removeEventListener("DOMContentLoaded", q, !1), e.removeEventListener("load", q, !1)) : (a.detachEvent("onreadystatechange", q), e.detachEvent("onload", q))
    };
    x.fn = x.prototype = {jquery: f, constructor: x, init: function (e, n, r) {
        var i, o;
        if (!e)return this;
        if ("string" == typeof e) {
            if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e), !i || !i[1] && n)return!n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
            if (i[1]) {
                if (n = n instanceof x ? n[0] : n, x.merge(this, x.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : a, !0)), k.test(i[1]) && x.isPlainObject(n))for (i in n)x.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                return this
            }
            if (o = a.getElementById(i[2]), o && o.parentNode) {
                if (o.id !== i[2])return r.find(e);
                this.length = 1, this[0] = o
            }
            return this.context = a, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : x.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), x.makeArray(e, this))
    }, selector: "", length: 0, toArray: function () {
        return g.call(this)
    }, get: function (e) {
        return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
    }, pushStack: function (e) {
        var t = x.merge(this.constructor(), e);
        return t.prevObject = this, t.context = this.context, t
    }, each: function (e, t) {
        return x.each(this, e, t)
    }, ready: function (e) {
        return x.ready.promise().done(e), this
    }, slice: function () {
        return this.pushStack(g.apply(this, arguments))
    }, first: function () {
        return this.eq(0)
    }, last: function () {
        return this.eq(-1)
    }, eq: function (e) {
        var t = this.length, n = +e + (0 > e ? t : 0);
        return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
    }, map: function (e) {
        return this.pushStack(x.map(this, function (t, n) {
            return e.call(t, n, t)
        }))
    }, end: function () {
        return this.prevObject || this.constructor(null)
    }, push: h, sort: [].sort, splice: [].splice}, x.fn.init.prototype = x.fn, x.extend = x.fn.extend = function () {
        var e, n, r, i, o, a, s = arguments[0] || {}, l = 1, u = arguments.length, c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, l = 2), "object" == typeof s || x.isFunction(s) || (s = {}), u === l && (s = this, --l); u > l; l++)if (null != (o = arguments[l]))for (i in o)e = s[i], r = o[i], s !== r && (c && r && (x.isPlainObject(r) || (n = x.isArray(r))) ? (n ? (n = !1, a = e && x.isArray(e) ? e : []) : a = e && x.isPlainObject(e) ? e : {}, s[i] = x.extend(c, a, r)) : r !== t && (s[i] = r));
        return s
    }, x.extend({expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""), noConflict: function (t) {
        return e.$ === x && (e.$ = u), t && e.jQuery === x && (e.jQuery = l), x
    }, isReady: !1, readyWait: 1, holdReady: function (e) {
        e ? x.readyWait++ : x.ready(!0)
    }, ready: function (e) {
        if (e === !0 ? !--x.readyWait : !x.isReady) {
            if (!a.body)return setTimeout(x.ready);
            x.isReady = !0, e !== !0 && --x.readyWait > 0 || (n.resolveWith(a, [x]), x.fn.trigger && x(a).trigger("ready").off("ready"))
        }
    }, isFunction: function (e) {
        return"function" === x.type(e)
    }, isArray: Array.isArray || function (e) {
        return"array" === x.type(e)
    }, isWindow: function (e) {
        return null != e && e == e.window
    }, isNumeric: function (e) {
        return!isNaN(parseFloat(e)) && isFinite(e)
    }, type: function (e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[y.call(e)] || "object" : typeof e
    }, isPlainObject: function (e) {
        var n;
        if (!e || "object" !== x.type(e) || e.nodeType || x.isWindow(e))return!1;
        try {
            if (e.constructor && !v.call(e, "constructor") && !v.call(e.constructor.prototype, "isPrototypeOf"))return!1
        } catch (r) {
            return!1
        }
        if (x.support.ownLast)for (n in e)return v.call(e, n);
        for (n in e);
        return n === t || v.call(e, n)
    }, isEmptyObject: function (e) {
        var t;
        for (t in e)return!1;
        return!0
    }, error: function (e) {
        throw Error(e)
    }, parseHTML: function (e, t, n) {
        if (!e || "string" != typeof e)return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || a;
        var r = k.exec(e), i = !n && [];
        return r ? [t.createElement(r[1])] : (r = x.buildFragment([e], t, i), i && x(i).remove(), x.merge([], r.childNodes))
    }, parseJSON: function (n) {
        return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = x.trim(n), n && E.test(n.replace(A, "@").replace(j, "]").replace(S, ""))) ? Function("return " + n)() : (x.error("Invalid JSON: " + n), t)
    }, parseXML: function (n) {
        var r, i;
        if (!n || "string" != typeof n)return null;
        try {
            e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
        } catch (o) {
            r = t
        }
        return r && r.documentElement && !r.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + n), r
    }, noop: function () {
    }, globalEval: function (t) {
        t && x.trim(t) && (e.execScript || function (t) {
            e.eval.call(e, t)
        })(t)
    }, camelCase: function (e) {
        return e.replace(D, "ms-").replace(L, H)
    }, nodeName: function (e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }, each: function (e, t, n) {
        var r, i = 0, o = e.length, a = M(e);
        if (n) {
            if (a) {
                for (; o > i; i++)if (r = t.apply(e[i], n), r === !1)break
            } else for (i in e)if (r = t.apply(e[i], n), r === !1)break
        } else if (a) {
            for (; o > i; i++)if (r = t.call(e[i], i, e[i]), r === !1)break
        } else for (i in e)if (r = t.call(e[i], i, e[i]), r === !1)break;
        return e
    }, trim: b && !b.call("\ufeff\u00a0") ? function (e) {
        return null == e ? "" : b.call(e)
    } : function (e) {
        return null == e ? "" : (e + "").replace(C, "")
    }, makeArray: function (e, t) {
        var n = t || [];
        return null != e && (M(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : h.call(n, e)), n
    }, inArray: function (e, t, n) {
        var r;
        if (t) {
            if (m)return m.call(t, e, n);
            for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)if (n in t && t[n] === e)return n
        }
        return-1
    }, merge: function (e, n) {
        var r = n.length, i = e.length, o = 0;
        if ("number" == typeof r)for (; r > o; o++)e[i++] = n[o]; else while (n[o] !== t)e[i++] = n[o++];
        return e.length = i, e
    }, grep: function (e, t, n) {
        var r, i = [], o = 0, a = e.length;
        for (n = !!n; a > o; o++)r = !!t(e[o], o), n !== r && i.push(e[o]);
        return i
    }, map: function (e, t, n) {
        var r, i = 0, o = e.length, a = M(e), s = [];
        if (a)for (; o > i; i++)r = t(e[i], i, n), null != r && (s[s.length] = r); else for (i in e)r = t(e[i], i, n), null != r && (s[s.length] = r);
        return d.apply([], s)
    }, guid: 1, proxy: function (e, n) {
        var r, i, o;
        return"string" == typeof n && (o = e[n], n = e, e = o), x.isFunction(e) ? (r = g.call(arguments, 2), i = function () {
            return e.apply(n || this, r.concat(g.call(arguments)))
        }, i.guid = e.guid = e.guid || x.guid++, i) : t
    }, access: function (e, n, r, i, o, a, s) {
        var l = 0, u = e.length, c = null == r;
        if ("object" === x.type(r)) {
            o = !0;
            for (l in r)x.access(e, n, l, r[l], !0, a, s)
        } else if (i !== t && (o = !0, x.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function (e, t, n) {
            return c.call(x(e), n)
        })), n))for (; u > l; l++)n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r)));
        return o ? e : c ? n.call(e) : u ? n(e[0], r) : a
    }, now: function () {
        return(new Date).getTime()
    }, swap: function (e, t, n, r) {
        var i, o, a = {};
        for (o in t)a[o] = e.style[o], e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t)e.style[o] = a[o];
        return i
    }}), x.ready.promise = function (t) {
        if (!n)if (n = x.Deferred(), "complete" === a.readyState)setTimeout(x.ready); else if (a.addEventListener)a.addEventListener("DOMContentLoaded", q, !1), e.addEventListener("load", q, !1); else {
            a.attachEvent("onreadystatechange", q), e.attachEvent("onload", q);
            var r = !1;
            try {
                r = null == e.frameElement && a.documentElement
            } catch (i) {
            }
            r && r.doScroll && function o() {
                if (!x.isReady) {
                    try {
                        r.doScroll("left")
                    } catch (e) {
                        return setTimeout(o, 50)
                    }
                    _(), x.ready()
                }
            }()
        }
        return n.promise(t)
    }, x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        c["[object " + t + "]"] = t.toLowerCase()
    });
    function M(e) {
        var t = e.length, n = x.type(e);
        return x.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    r = x(a), function (e, t) {
        var n, r, i, o, a, s, l, u, c, p, f, d, h, g, m, y, v, b = "sizzle" + -new Date, w = e.document, T = 0, C = 0, N = st(), k = st(), E = st(), S = !1, A = function (e, t) {
            return e === t ? (S = !0, 0) : 0
        }, j = typeof t, D = 1 << 31, L = {}.hasOwnProperty, H = [], q = H.pop, _ = H.push, M = H.push, O = H.slice, F = H.indexOf || function (e) {
            var t = 0, n = this.length;
            for (; n > t; t++)if (this[t] === e)return t;
            return-1
        }, B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", P = "[\\x20\\t\\r\\n\\f]", R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", W = R.replace("w", "w#"), $ = "\\[" + P + "*(" + R + ")" + P + "*(?:([*^$|!~]?=)" + P + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + W + ")|)|)" + P + "*\\]", I = ":(" + R + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + $.replace(3, 8) + ")*)|.*)\\)|)", z = RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"), X = RegExp("^" + P + "*," + P + "*"), U = RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"), V = RegExp(P + "*[+~]"), Y = RegExp("=" + P + "*([^\\]'\"]*)" + P + "*\\]", "g"), J = RegExp(I), G = RegExp("^" + W + "$"), Q = {ID: RegExp("^#(" + R + ")"), CLASS: RegExp("^\\.(" + R + ")"), TAG: RegExp("^(" + R.replace("w", "w*") + ")"), ATTR: RegExp("^" + $), PSEUDO: RegExp("^" + I), CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"), bool: RegExp("^(?:" + B + ")$", "i"), needsContext: RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")}, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, et = /^(?:input|select|textarea|button)$/i, tt = /^h\d$/i, nt = /'|\\/g, rt = RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"), it = function (e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
        };
        try {
            M.apply(H = O.call(w.childNodes), w.childNodes), H[w.childNodes.length].nodeType
        } catch (ot) {
            M = {apply: H.length ? function (e, t) {
                _.apply(e, O.call(t))
            } : function (e, t) {
                var n = e.length, r = 0;
                while (e[n++] = t[r++]);
                e.length = n - 1
            }}
        }
        function at(e, t, n, i) {
            var o, a, s, l, u, c, d, m, y, x;
            if ((t ? t.ownerDocument || t : w) !== f && p(t), t = t || f, n = n || [], !e || "string" != typeof e)return n;
            if (1 !== (l = t.nodeType) && 9 !== l)return[];
            if (h && !i) {
                if (o = Z.exec(e))if (s = o[1]) {
                    if (9 === l) {
                        if (a = t.getElementById(s), !a || !a.parentNode)return n;
                        if (a.id === s)return n.push(a), n
                    } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(s)) && v(t, a) && a.id === s)return n.push(a), n
                } else {
                    if (o[2])return M.apply(n, t.getElementsByTagName(e)), n;
                    if ((s = o[3]) && r.getElementsByClassName && t.getElementsByClassName)return M.apply(n, t.getElementsByClassName(s)), n
                }
                if (r.qsa && (!g || !g.test(e))) {
                    if (m = d = b, y = t, x = 9 === l && e, 1 === l && "object" !== t.nodeName.toLowerCase()) {
                        c = mt(e), (d = t.getAttribute("id")) ? m = d.replace(nt, "\\$&") : t.setAttribute("id", m), m = "[id='" + m + "'] ", u = c.length;
                        while (u--)c[u] = m + yt(c[u]);
                        y = V.test(e) && t.parentNode || t, x = c.join(",")
                    }
                    if (x)try {
                        return M.apply(n, y.querySelectorAll(x)), n
                    } catch (T) {
                    } finally {
                        d || t.removeAttribute("id")
                    }
                }
            }
            return kt(e.replace(z, "$1"), t, n, i)
        }

        function st() {
            var e = [];

            function t(n, r) {
                return e.push(n += " ") > o.cacheLength && delete t[e.shift()], t[n] = r
            }

            return t
        }

        function lt(e) {
            return e[b] = !0, e
        }

        function ut(e) {
            var t = f.createElement("div");
            try {
                return!!e(t)
            } catch (n) {
                return!1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function ct(e, t) {
            var n = e.split("|"), r = e.length;
            while (r--)o.attrHandle[n[r]] = t
        }

        function pt(e, t) {
            var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D);
            if (r)return r;
            if (n)while (n = n.nextSibling)if (n === t)return-1;
            return e ? 1 : -1
        }

        function ft(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return"input" === n && t.type === e
            }
        }

        function dt(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return("input" === n || "button" === n) && t.type === e
            }
        }

        function ht(e) {
            return lt(function (t) {
                return t = +t, lt(function (n, r) {
                    var i, o = e([], n.length, t), a = o.length;
                    while (a--)n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        s = at.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, r = at.support = {}, p = at.setDocument = function (e) {
            var n = e ? e.ownerDocument || e : w, i = n.defaultView;
            return n !== f && 9 === n.nodeType && n.documentElement ? (f = n, d = n.documentElement, h = !s(n), i && i.attachEvent && i !== i.top && i.attachEvent("onbeforeunload", function () {
                p()
            }), r.attributes = ut(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), r.getElementsByTagName = ut(function (e) {
                return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
            }), r.getElementsByClassName = ut(function (e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
            }), r.getById = ut(function (e) {
                return d.appendChild(e).id = b, !n.getElementsByName || !n.getElementsByName(b).length
            }), r.getById ? (o.find.ID = function (e, t) {
                if (typeof t.getElementById !== j && h) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, o.filter.ID = function (e) {
                var t = e.replace(rt, it);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete o.find.ID, o.filter.ID = function (e) {
                var t = e.replace(rt, it);
                return function (e) {
                    var n = typeof e.getAttributeNode !== j && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), o.find.TAG = r.getElementsByTagName ? function (e, n) {
                return typeof n.getElementsByTagName !== j ? n.getElementsByTagName(e) : t
            } : function (e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++])1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, o.find.CLASS = r.getElementsByClassName && function (e, n) {
                return typeof n.getElementsByClassName !== j && h ? n.getElementsByClassName(e) : t
            }, m = [], g = [], (r.qsa = K.test(n.querySelectorAll)) && (ut(function (e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || g.push("\\[" + P + "*(?:value|" + B + ")"), e.querySelectorAll(":checked").length || g.push(":checked")
            }), ut(function (e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && g.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
            })), (r.matchesSelector = K.test(y = d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ut(function (e) {
                r.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), m.push("!=", I)
            }), g = g.length && RegExp(g.join("|")), m = m.length && RegExp(m.join("|")), v = K.test(d.contains) || d.compareDocumentPosition ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t)while (t = t.parentNode)if (t === e)return!0;
                return!1
            }, A = d.compareDocumentPosition ? function (e, t) {
                if (e === t)return S = !0, 0;
                var i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
                return i ? 1 & i || !r.sortDetached && t.compareDocumentPosition(e) === i ? e === n || v(w, e) ? -1 : t === n || v(w, t) ? 1 : c ? F.call(c, e) - F.call(c, t) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
            } : function (e, t) {
                var r, i = 0, o = e.parentNode, a = t.parentNode, s = [e], l = [t];
                if (e === t)return S = !0, 0;
                if (!o || !a)return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : c ? F.call(c, e) - F.call(c, t) : 0;
                if (o === a)return pt(e, t);
                r = e;
                while (r = r.parentNode)s.unshift(r);
                r = t;
                while (r = r.parentNode)l.unshift(r);
                while (s[i] === l[i])i++;
                return i ? pt(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0
            }, n) : f
        }, at.matches = function (e, t) {
            return at(e, null, null, t)
        }, at.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== f && p(e), t = t.replace(Y, "='$1']"), !(!r.matchesSelector || !h || m && m.test(t) || g && g.test(t)))try {
                var n = y.call(e, t);
                if (n || r.disconnectedMatch || e.document && 11 !== e.document.nodeType)return n
            } catch (i) {
            }
            return at(t, f, null, [e]).length > 0
        }, at.contains = function (e, t) {
            return(e.ownerDocument || e) !== f && p(e), v(e, t)
        }, at.attr = function (e, n) {
            (e.ownerDocument || e) !== f && p(e);
            var i = o.attrHandle[n.toLowerCase()], a = i && L.call(o.attrHandle, n.toLowerCase()) ? i(e, n, !h) : t;
            return a === t ? r.attributes || !h ? e.getAttribute(n) : (a = e.getAttributeNode(n)) && a.specified ? a.value : null : a
        }, at.error = function (e) {
            throw Error("Syntax error, unrecognized expression: " + e)
        }, at.uniqueSort = function (e) {
            var t, n = [], i = 0, o = 0;
            if (S = !r.detectDuplicates, c = !r.sortStable && e.slice(0), e.sort(A), S) {
                while (t = e[o++])t === e[o] && (i = n.push(o));
                while (i--)e.splice(n[i], 1)
            }
            return e
        }, a = at.getText = function (e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)n += a(e)
                } else if (3 === i || 4 === i)return e.nodeValue
            } else for (; t = e[r]; r++)n += a(t);
            return n
        }, o = at.selectors = {cacheLength: 50, createPseudo: lt, match: Q, attrHandle: {}, find: {}, relative: {">": {dir: "parentNode", first: !0}, " ": {dir: "parentNode"}, "+": {dir: "previousSibling", first: !0}, "~": {dir: "previousSibling"}}, preFilter: {ATTR: function (e) {
            return e[1] = e[1].replace(rt, it), e[3] = (e[4] || e[5] || "").replace(rt, it), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
        }, CHILD: function (e) {
            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || at.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && at.error(e[0]), e
        }, PSEUDO: function (e) {
            var n, r = !e[5] && e[2];
            return Q.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && J.test(r) && (n = mt(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3))
        }}, filter: {TAG: function (e) {
            var t = e.replace(rt, it).toLowerCase();
            return"*" === e ? function () {
                return!0
            } : function (e) {
                return e.nodeName && e.nodeName.toLowerCase() === t
            }
        }, CLASS: function (e) {
            var t = N[e + " "];
            return t || (t = RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && N(e, function (e) {
                return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== j && e.getAttribute("class") || "")
            })
        }, ATTR: function (e, t, n) {
            return function (r) {
                var i = at.attr(r, e);
                return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
            }
        }, CHILD: function (e, t, n, r, i) {
            var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
            return 1 === r && 0 === i ? function (e) {
                return!!e.parentNode
            } : function (t, n, l) {
                var u, c, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling", m = t.parentNode, y = s && t.nodeName.toLowerCase(), v = !l && !s;
                if (m) {
                    if (o) {
                        while (g) {
                            p = t;
                            while (p = p[g])if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType)return!1;
                            h = g = "only" === e && !h && "nextSibling"
                        }
                        return!0
                    }
                    if (h = [a ? m.firstChild : m.lastChild], a && v) {
                        c = m[b] || (m[b] = {}), u = c[e] || [], d = u[0] === T && u[1], f = u[0] === T && u[2], p = d && m.childNodes[d];
                        while (p = ++d && p && p[g] || (f = d = 0) || h.pop())if (1 === p.nodeType && ++f && p === t) {
                            c[e] = [T, d, f];
                            break
                        }
                    } else if (v && (u = (t[b] || (t[b] = {}))[e]) && u[0] === T)f = u[1]; else while (p = ++d && p && p[g] || (f = d = 0) || h.pop())if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[b] || (p[b] = {}))[e] = [T, f]), p === t))break;
                    return f -= i, f === r || 0 === f % r && f / r >= 0
                }
            }
        }, PSEUDO: function (e, t) {
            var n, r = o.pseudos[e] || o.setFilters[e.toLowerCase()] || at.error("unsupported pseudo: " + e);
            return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t], o.setFilters.hasOwnProperty(e.toLowerCase()) ? lt(function (e, n) {
                var i, o = r(e, t), a = o.length;
                while (a--)i = F.call(e, o[a]), e[i] = !(n[i] = o[a])
            }) : function (e) {
                return r(e, 0, n)
            }) : r
        }}, pseudos: {not: lt(function (e) {
            var t = [], n = [], r = l(e.replace(z, "$1"));
            return r[b] ? lt(function (e, t, n, i) {
                var o, a = r(e, null, i, []), s = e.length;
                while (s--)(o = a[s]) && (e[s] = !(t[s] = o))
            }) : function (e, i, o) {
                return t[0] = e, r(t, null, o, n), !n.pop()
            }
        }), has: lt(function (e) {
            return function (t) {
                return at(e, t).length > 0
            }
        }), contains: lt(function (e) {
            return function (t) {
                return(t.textContent || t.innerText || a(t)).indexOf(e) > -1
            }
        }), lang: lt(function (e) {
            return G.test(e || "") || at.error("unsupported lang: " + e), e = e.replace(rt, it).toLowerCase(), function (t) {
                var n;
                do if (n = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                return!1
            }
        }), target: function (t) {
            var n = e.location && e.location.hash;
            return n && n.slice(1) === t.id
        }, root: function (e) {
            return e === d
        }, focus: function (e) {
            return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
        }, enabled: function (e) {
            return e.disabled === !1
        }, disabled: function (e) {
            return e.disabled === !0
        }, checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return"input" === t && !!e.checked || "option" === t && !!e.selected
        }, selected: function (e) {
            return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
        }, empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType)return!1;
            return!0
        }, parent: function (e) {
            return!o.pseudos.empty(e)
        }, header: function (e) {
            return tt.test(e.nodeName)
        }, input: function (e) {
            return et.test(e.nodeName)
        }, button: function (e) {
            var t = e.nodeName.toLowerCase();
            return"input" === t && "button" === e.type || "button" === t
        }, text: function (e) {
            var t;
            return"input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
        }, first: ht(function () {
            return[0]
        }), last: ht(function (e, t) {
            return[t - 1]
        }), eq: ht(function (e, t, n) {
            return[0 > n ? n + t : n]
        }), even: ht(function (e, t) {
            var n = 0;
            for (; t > n; n += 2)e.push(n);
            return e
        }), odd: ht(function (e, t) {
            var n = 1;
            for (; t > n; n += 2)e.push(n);
            return e
        }), lt: ht(function (e, t, n) {
            var r = 0 > n ? n + t : n;
            for (; --r >= 0;)e.push(r);
            return e
        }), gt: ht(function (e, t, n) {
            var r = 0 > n ? n + t : n;
            for (; t > ++r;)e.push(r);
            return e
        })}}, o.pseudos.nth = o.pseudos.eq;
        for (n in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})o.pseudos[n] = ft(n);
        for (n in{submit: !0, reset: !0})o.pseudos[n] = dt(n);
        function gt() {
        }

        gt.prototype = o.filters = o.pseudos, o.setFilters = new gt;
        function mt(e, t) {
            var n, r, i, a, s, l, u, c = k[e + " "];
            if (c)return t ? 0 : c.slice(0);
            s = e, l = [], u = o.preFilter;
            while (s) {
                (!n || (r = X.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(i = [])), n = !1, (r = U.exec(s)) && (n = r.shift(), i.push({value: n, type: r[0].replace(z, " ")}), s = s.slice(n.length));
                for (a in o.filter)!(r = Q[a].exec(s)) || u[a] && !(r = u[a](r)) || (n = r.shift(), i.push({value: n, type: a, matches: r}), s = s.slice(n.length));
                if (!n)break
            }
            return t ? s.length : s ? at.error(e) : k(e, l).slice(0)
        }

        function yt(e) {
            var t = 0, n = e.length, r = "";
            for (; n > t; t++)r += e[t].value;
            return r
        }

        function vt(e, t, n) {
            var r = t.dir, o = n && "parentNode" === r, a = C++;
            return t.first ? function (t, n, i) {
                while (t = t[r])if (1 === t.nodeType || o)return e(t, n, i)
            } : function (t, n, s) {
                var l, u, c, p = T + " " + a;
                if (s) {
                    while (t = t[r])if ((1 === t.nodeType || o) && e(t, n, s))return!0
                } else while (t = t[r])if (1 === t.nodeType || o)if (c = t[b] || (t[b] = {}), (u = c[r]) && u[0] === p) {
                    if ((l = u[1]) === !0 || l === i)return l === !0
                } else if (u = c[r] = [p], u[1] = e(t, n, s) || i, u[1] === !0)return!0
            }
        }

        function bt(e) {
            return e.length > 1 ? function (t, n, r) {
                var i = e.length;
                while (i--)if (!e[i](t, n, r))return!1;
                return!0
            } : e[0]
        }

        function xt(e, t, n, r, i) {
            var o, a = [], s = 0, l = e.length, u = null != t;
            for (; l > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s));
            return a
        }

        function wt(e, t, n, r, i, o) {
            return r && !r[b] && (r = wt(r)), i && !i[b] && (i = wt(i, o)), lt(function (o, a, s, l) {
                var u, c, p, f = [], d = [], h = a.length, g = o || Nt(t || "*", s.nodeType ? [s] : s, []), m = !e || !o && t ? g : xt(g, f, e, s, l), y = n ? i || (o ? e : h || r) ? [] : a : m;
                if (n && n(m, y, s, l), r) {
                    u = xt(y, d), r(u, [], s, l), c = u.length;
                    while (c--)(p = u[c]) && (y[d[c]] = !(m[d[c]] = p))
                }
                if (o) {
                    if (i || e) {
                        if (i) {
                            u = [], c = y.length;
                            while (c--)(p = y[c]) && u.push(m[c] = p);
                            i(null, y = [], u, l)
                        }
                        c = y.length;
                        while (c--)(p = y[c]) && (u = i ? F.call(o, p) : f[c]) > -1 && (o[u] = !(a[u] = p))
                    }
                } else y = xt(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, l) : M.apply(a, y)
            })
        }

        function Tt(e) {
            var t, n, r, i = e.length, a = o.relative[e[0].type], s = a || o.relative[" "], l = a ? 1 : 0, c = vt(function (e) {
                return e === t
            }, s, !0), p = vt(function (e) {
                return F.call(t, e) > -1
            }, s, !0), f = [function (e, n, r) {
                return!a && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r))
            }];
            for (; i > l; l++)if (n = o.relative[e[l].type])f = [vt(bt(f), n)]; else {
                if (n = o.filter[e[l].type].apply(null, e[l].matches), n[b]) {
                    for (r = ++l; i > r; r++)if (o.relative[e[r].type])break;
                    return wt(l > 1 && bt(f), l > 1 && yt(e.slice(0, l - 1).concat({value: " " === e[l - 2].type ? "*" : ""})).replace(z, "$1"), n, r > l && Tt(e.slice(l, r)), i > r && Tt(e = e.slice(r)), i > r && yt(e))
                }
                f.push(n)
            }
            return bt(f)
        }

        function Ct(e, t) {
            var n = 0, r = t.length > 0, a = e.length > 0, s = function (s, l, c, p, d) {
                var h, g, m, y = [], v = 0, b = "0", x = s && [], w = null != d, C = u, N = s || a && o.find.TAG("*", d && l.parentNode || l), k = T += null == C ? 1 : Math.random() || .1;
                for (w && (u = l !== f && l, i = n); null != (h = N[b]); b++) {
                    if (a && h) {
                        g = 0;
                        while (m = e[g++])if (m(h, l, c)) {
                            p.push(h);
                            break
                        }
                        w && (T = k, i = ++n)
                    }
                    r && ((h = !m && h) && v--, s && x.push(h))
                }
                if (v += b, r && b !== v) {
                    g = 0;
                    while (m = t[g++])m(x, y, l, c);
                    if (s) {
                        if (v > 0)while (b--)x[b] || y[b] || (y[b] = q.call(p));
                        y = xt(y)
                    }
                    M.apply(p, y), w && !s && y.length > 0 && v + t.length > 1 && at.uniqueSort(p)
                }
                return w && (T = k, u = C), x
            };
            return r ? lt(s) : s
        }

        l = at.compile = function (e, t) {
            var n, r = [], i = [], o = E[e + " "];
            if (!o) {
                t || (t = mt(e)), n = t.length;
                while (n--)o = Tt(t[n]), o[b] ? r.push(o) : i.push(o);
                o = E(e, Ct(i, r))
            }
            return o
        };
        function Nt(e, t, n) {
            var r = 0, i = t.length;
            for (; i > r; r++)at(e, t[r], n);
            return n
        }

        function kt(e, t, n, i) {
            var a, s, u, c, p, f = mt(e);
            if (!i && 1 === f.length) {
                if (s = f[0] = f[0].slice(0), s.length > 2 && "ID" === (u = s[0]).type && r.getById && 9 === t.nodeType && h && o.relative[s[1].type]) {
                    if (t = (o.find.ID(u.matches[0].replace(rt, it), t) || [])[0], !t)return n;
                    e = e.slice(s.shift().value.length)
                }
                a = Q.needsContext.test(e) ? 0 : s.length;
                while (a--) {
                    if (u = s[a], o.relative[c = u.type])break;
                    if ((p = o.find[c]) && (i = p(u.matches[0].replace(rt, it), V.test(s[0].type) && t.parentNode || t))) {
                        if (s.splice(a, 1), e = i.length && yt(s), !e)return M.apply(n, i), n;
                        break
                    }
                }
            }
            return l(e, f)(i, t, !h, n, V.test(e)), n
        }

        r.sortStable = b.split("").sort(A).join("") === b, r.detectDuplicates = S, p(), r.sortDetached = ut(function (e) {
            return 1 & e.compareDocumentPosition(f.createElement("div"))
        }), ut(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || ct("type|href|height|width", function (e, n, r) {
            return r ? t : e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2)
        }), r.attributes && ut(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || ct("value", function (e, n, r) {
            return r || "input" !== e.nodeName.toLowerCase() ? t : e.defaultValue
        }), ut(function (e) {
            return null == e.getAttribute("disabled")
        }) || ct(B, function (e, n, r) {
            var i;
            return r ? t : (i = e.getAttributeNode(n)) && i.specified ? i.value : e[n] === !0 ? n.toLowerCase() : null
        }), x.find = at, x.expr = at.selectors, x.expr[":"] = x.expr.pseudos, x.unique = at.uniqueSort, x.text = at.getText, x.isXMLDoc = at.isXML, x.contains = at.contains
    }(e);
    var O = {};

    function F(e) {
        var t = O[e] = {};
        return x.each(e.match(T) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    x.Callbacks = function (e) {
        e = "string" == typeof e ? O[e] || F(e) : x.extend({}, e);
        var n, r, i, o, a, s, l = [], u = !e.once && [], c = function (t) {
            for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = l.length, n = !0; l && o > a; a++)if (l[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                r = !1;
                break
            }
            n = !1, l && (u ? u.length && c(u.shift()) : r ? l = [] : p.disable())
        }, p = {add: function () {
            if (l) {
                var t = l.length;
                (function i(t) {
                    x.each(t, function (t, n) {
                        var r = x.type(n);
                        "function" === r ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== r && i(n)
                    })
                })(arguments), n ? o = l.length : r && (s = t, c(r))
            }
            return this
        }, remove: function () {
            return l && x.each(arguments, function (e, t) {
                var r;
                while ((r = x.inArray(t, l, r)) > -1)l.splice(r, 1), n && (o >= r && o--, a >= r && a--)
            }), this
        }, has: function (e) {
            return e ? x.inArray(e, l) > -1 : !(!l || !l.length)
        }, empty: function () {
            return l = [], o = 0, this
        }, disable: function () {
            return l = u = r = t, this
        }, disabled: function () {
            return!l
        }, lock: function () {
            return u = t, r || p.disable(), this
        }, locked: function () {
            return!u
        }, fireWith: function (e, t) {
            return!l || i && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? u.push(t) : c(t)), this
        }, fire: function () {
            return p.fireWith(this, arguments), this
        }, fired: function () {
            return!!i
        }};
        return p
    }, x.extend({Deferred: function (e) {
        var t = [
            ["resolve", "done", x.Callbacks("once memory"), "resolved"],
            ["reject", "fail", x.Callbacks("once memory"), "rejected"],
            ["notify", "progress", x.Callbacks("memory")]
        ], n = "pending", r = {state: function () {
            return n
        }, always: function () {
            return i.done(arguments).fail(arguments), this
        }, then: function () {
            var e = arguments;
            return x.Deferred(function (n) {
                x.each(t, function (t, o) {
                    var a = o[0], s = x.isFunction(e[t]) && e[t];
                    i[o[1]](function () {
                        var e = s && s.apply(this, arguments);
                        e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                    })
                }), e = null
            }).promise()
        }, promise: function (e) {
            return null != e ? x.extend(e, r) : r
        }}, i = {};
        return r.pipe = r.then, x.each(t, function (e, o) {
            var a = o[2], s = o[3];
            r[o[1]] = a.add, s && a.add(function () {
                n = s
            }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
                return i[o[0] + "With"](this === i ? r : this, arguments), this
            }, i[o[0] + "With"] = a.fireWith
        }), r.promise(i), e && e.call(i, i), i
    }, when: function (e) {
        var t = 0, n = g.call(arguments), r = n.length, i = 1 !== r || e && x.isFunction(e.promise) ? r : 0, o = 1 === i ? e : x.Deferred(), a = function (e, t, n) {
            return function (r) {
                t[e] = this, n[e] = arguments.length > 1 ? g.call(arguments) : r, n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n)
            }
        }, s, l, u;
        if (r > 1)for (s = Array(r), l = Array(r), u = Array(r); r > t; t++)n[t] && x.isFunction(n[t].promise) ? n[t].promise().done(a(t, u, n)).fail(o.reject).progress(a(t, l, s)) : --i;
        return i || o.resolveWith(u, n), o.promise()
    }}), x.support = function (t) {
        var n, r, o, s, l, u, c, p, f, d = a.createElement("div");
        if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*") || [], r = d.getElementsByTagName("a")[0], !r || !r.style || !n.length)return t;
        s = a.createElement("select"), u = s.appendChild(a.createElement("option")), o = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== d.className, t.leadingWhitespace = 3 === d.firstChild.nodeType, t.tbody = !d.getElementsByTagName("tbody").length, t.htmlSerialize = !!d.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), t.hrefNormalized = "/a" === r.getAttribute("href"), t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !!r.style.cssFloat, t.checkOn = !!o.value, t.optSelected = u.selected, t.enctype = !!a.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== a.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, o.checked = !0, t.noCloneChecked = o.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !u.disabled;
        try {
            delete d.test
        } catch (h) {
            t.deleteExpando = !1
        }
        o = a.createElement("input"), o.setAttribute("value", ""), t.input = "" === o.getAttribute("value"), o.value = "t", o.setAttribute("type", "radio"), t.radioValue = "t" === o.value, o.setAttribute("checked", "t"), o.setAttribute("name", "t"), l = a.createDocumentFragment(), l.appendChild(o), t.appendChecked = o.checked, t.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function () {
            t.noCloneEvent = !1
        }), d.cloneNode(!0).click());
        for (f in{submit: !0, change: !0, focusin: !0})d.setAttribute(c = "on" + f, "t"), t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1;
        d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip;
        for (f in x(t))break;
        return t.ownLast = "0" !== f, x(function () {
            var n, r, o, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", l = a.getElementsByTagName("body")[0];
            l && (n = a.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", l.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = d.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", p = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", t.reliableHiddenOffsets = p && 0 === o[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", x.swap(l, null != l.style.zoom ? {zoom: 1} : {}, function () {
                t.boxSizing = 4 === d.offsetWidth
            }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {width: "4px"}).width, r = d.appendChild(a.createElement("div")), r.style.cssText = d.style.cssText = s, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof d.style.zoom !== i && (d.innerHTML = "", d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (l.style.zoom = 1)), l.removeChild(n), n = d = o = r = null)
        }), n = s = l = u = r = o = null, t
    }({});
    var B = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, P = /([A-Z])/g;

    function R(e, n, r, i) {
        if (x.acceptData(e)) {
            var o, a, s = x.expando, l = e.nodeType, u = l ? x.cache : e, c = l ? e[s] : e[s] && s;
            if (c && u[c] && (i || u[c].data) || r !== t || "string" != typeof n)return c || (c = l ? e[s] = p.pop() || x.guid++ : s), u[c] || (u[c] = l ? {} : {toJSON: x.noop}), ("object" == typeof n || "function" == typeof n) && (i ? u[c] = x.extend(u[c], n) : u[c].data = x.extend(u[c].data, n)), a = u[c], i || (a.data || (a.data = {}), a = a.data), r !== t && (a[x.camelCase(n)] = r), "string" == typeof n ? (o = a[n], null == o && (o = a[x.camelCase(n)])) : o = a, o
        }
    }

    function W(e, t, n) {
        if (x.acceptData(e)) {
            var r, i, o = e.nodeType, a = o ? x.cache : e, s = o ? e[x.expando] : x.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) {
                    x.isArray(t) ? t = t.concat(x.map(t, x.camelCase)) : t in r ? t = [t] : (t = x.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
                    while (i--)delete r[t[i]];
                    if (n ? !I(r) : !x.isEmptyObject(r))return
                }
                (n || (delete a[s].data, I(a[s]))) && (o ? x.cleanData([e], !0) : x.support.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
            }
        }
    }

    x.extend({cache: {}, noData: {applet: !0, embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"}, hasData: function (e) {
        return e = e.nodeType ? x.cache[e[x.expando]] : e[x.expando], !!e && !I(e)
    }, data: function (e, t, n) {
        return R(e, t, n)
    }, removeData: function (e, t) {
        return W(e, t)
    }, _data: function (e, t, n) {
        return R(e, t, n, !0)
    }, _removeData: function (e, t) {
        return W(e, t, !0)
    }, acceptData: function (e) {
        if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType)return!1;
        var t = e.nodeName && x.noData[e.nodeName.toLowerCase()];
        return!t || t !== !0 && e.getAttribute("classid") === t
    }}), x.fn.extend({data: function (e, n) {
        var r, i, o = null, a = 0, s = this[0];
        if (e === t) {
            if (this.length && (o = x.data(s), 1 === s.nodeType && !x._data(s, "parsedAttrs"))) {
                for (r = s.attributes; r.length > a; a++)i = r[a].name, 0 === i.indexOf("data-") && (i = x.camelCase(i.slice(5)), $(s, i, o[i]));
                x._data(s, "parsedAttrs", !0)
            }
            return o
        }
        return"object" == typeof e ? this.each(function () {
            x.data(this, e)
        }) : arguments.length > 1 ? this.each(function () {
            x.data(this, e, n)
        }) : s ? $(s, e, x.data(s, e)) : null
    }, removeData: function (e) {
        return this.each(function () {
            x.removeData(this, e)
        })
    }});
    function $(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(P, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : B.test(r) ? x.parseJSON(r) : r
                } catch (o) {
                }
                x.data(e, n, r)
            } else r = t
        }
        return r
    }

    function I(e) {
        var t;
        for (t in e)if (("data" !== t || !x.isEmptyObject(e[t])) && "toJSON" !== t)return!1;
        return!0
    }

    x.extend({queue: function (e, n, r) {
        var i;
        return e ? (n = (n || "fx") + "queue", i = x._data(e, n), r && (!i || x.isArray(r) ? i = x._data(e, n, x.makeArray(r)) : i.push(r)), i || []) : t
    }, dequeue: function (e, t) {
        t = t || "fx";
        var n = x.queue(e, t), r = n.length, i = n.shift(), o = x._queueHooks(e, t), a = function () {
            x.dequeue(e, t)
        };
        "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
    }, _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return x._data(e, n) || x._data(e, n, {empty: x.Callbacks("once memory").add(function () {
            x._removeData(e, t + "queue"), x._removeData(e, n)
        })})
    }}), x.fn.extend({queue: function (e, n) {
        var r = 2;
        return"string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? x.queue(this[0], e) : n === t ? this : this.each(function () {
            var t = x.queue(this, e, n);
            x._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && x.dequeue(this, e)
        })
    }, dequeue: function (e) {
        return this.each(function () {
            x.dequeue(this, e)
        })
    }, delay: function (e, t) {
        return e = x.fx ? x.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
            var r = setTimeout(t, e);
            n.stop = function () {
                clearTimeout(r)
            }
        })
    }, clearQueue: function (e) {
        return this.queue(e || "fx", [])
    }, promise: function (e, n) {
        var r, i = 1, o = x.Deferred(), a = this, s = this.length, l = function () {
            --i || o.resolveWith(a, [a])
        };
        "string" != typeof e && (n = e, e = t), e = e || "fx";
        while (s--)r = x._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(l));
        return l(), o.promise(n)
    }});
    var z, X, U = /[\t\r\n\f]/g, V = /\r/g, Y = /^(?:input|select|textarea|button|object)$/i, J = /^(?:a|area)$/i, G = /^(?:checked|selected)$/i, Q = x.support.getSetAttribute, K = x.support.input;
    x.fn.extend({attr: function (e, t) {
        return x.access(this, x.attr, e, t, arguments.length > 1)
    }, removeAttr: function (e) {
        return this.each(function () {
            x.removeAttr(this, e)
        })
    }, prop: function (e, t) {
        return x.access(this, x.prop, e, t, arguments.length > 1)
    }, removeProp: function (e) {
        return e = x.propFix[e] || e, this.each(function () {
            try {
                this[e] = t, delete this[e]
            } catch (n) {
            }
        })
    }, addClass: function (e) {
        var t, n, r, i, o, a = 0, s = this.length, l = "string" == typeof e && e;
        if (x.isFunction(e))return this.each(function (t) {
            x(this).addClass(e.call(this, t, this.className))
        });
        if (l)for (t = (e || "").match(T) || []; s > a; a++)if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : " ")) {
            o = 0;
            while (i = t[o++])0 > r.indexOf(" " + i + " ") && (r += i + " ");
            n.className = x.trim(r)
        }
        return this
    }, removeClass: function (e) {
        var t, n, r, i, o, a = 0, s = this.length, l = 0 === arguments.length || "string" == typeof e && e;
        if (x.isFunction(e))return this.each(function (t) {
            x(this).removeClass(e.call(this, t, this.className))
        });
        if (l)for (t = (e || "").match(T) || []; s > a; a++)if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : "")) {
            o = 0;
            while (i = t[o++])while (r.indexOf(" " + i + " ") >= 0)r = r.replace(" " + i + " ", " ");
            n.className = e ? x.trim(r) : ""
        }
        return this
    }, toggleClass: function (e, t) {
        var n = typeof e;
        return"boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : x.isFunction(e) ? this.each(function (n) {
            x(this).toggleClass(e.call(this, n, this.className, t), t)
        }) : this.each(function () {
            if ("string" === n) {
                var t, r = 0, o = x(this), a = e.match(T) || [];
                while (t = a[r++])o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
            } else(n === i || "boolean" === n) && (this.className && x._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : x._data(this, "__className__") || "")
        })
    }, hasClass: function (e) {
        var t = " " + e + " ", n = 0, r = this.length;
        for (; r > n; n++)if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(U, " ").indexOf(t) >= 0)return!0;
        return!1
    }, val: function (e) {
        var n, r, i, o = this[0];
        {
            if (arguments.length)return i = x.isFunction(e), this.each(function (n) {
                var o;
                1 === this.nodeType && (o = i ? e.call(this, n, x(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : x.isArray(o) && (o = x.map(o, function (e) {
                    return null == e ? "" : e + ""
                })), r = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()], r && "set"in r && r.set(this, o, "value") !== t || (this.value = o))
            });
            if (o)return r = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()], r && "get"in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(V, "") : null == n ? "" : n)
        }
    }}), x.extend({valHooks: {option: {get: function (e) {
        var t = x.find.attr(e, "value");
        return null != t ? t : e.text
    }}, select: {get: function (e) {
        var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, l = 0 > i ? s : o ? i : 0;
        for (; s > l; l++)if (n = r[l], !(!n.selected && l !== i || (x.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && x.nodeName(n.parentNode, "optgroup"))) {
            if (t = x(n).val(), o)return t;
            a.push(t)
        }
        return a
    }, set: function (e, t) {
        var n, r, i = e.options, o = x.makeArray(t), a = i.length;
        while (a--)r = i[a], (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0);
        return n || (e.selectedIndex = -1), o
    }}}, attr: function (e, n, r) {
        var o, a, s = e.nodeType;
        if (e && 3 !== s && 8 !== s && 2 !== s)return typeof e.getAttribute === i ? x.prop(e, n, r) : (1 === s && x.isXMLDoc(e) || (n = n.toLowerCase(), o = x.attrHooks[n] || (x.expr.match.bool.test(n) ? X : z)), r === t ? o && "get"in o && null !== (a = o.get(e, n)) ? a : (a = x.find.attr(e, n), null == a ? t : a) : null !== r ? o && "set"in o && (a = o.set(e, r, n)) !== t ? a : (e.setAttribute(n, r + ""), r) : (x.removeAttr(e, n), t))
    }, removeAttr: function (e, t) {
        var n, r, i = 0, o = t && t.match(T);
        if (o && 1 === e.nodeType)while (n = o[i++])r = x.propFix[n] || n, x.expr.match.bool.test(n) ? K && Q || !G.test(n) ? e[r] = !1 : e[x.camelCase("default-" + n)] = e[r] = !1 : x.attr(e, n, ""), e.removeAttribute(Q ? n : r)
    }, attrHooks: {type: {set: function (e, t) {
        if (!x.support.radioValue && "radio" === t && x.nodeName(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t
        }
    }}}, propFix: {"for": "htmlFor", "class": "className"}, prop: function (e, n, r) {
        var i, o, a, s = e.nodeType;
        if (e && 3 !== s && 8 !== s && 2 !== s)return a = 1 !== s || !x.isXMLDoc(e), a && (n = x.propFix[n] || n, o = x.propHooks[n]), r !== t ? o && "set"in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get"in o && null !== (i = o.get(e, n)) ? i : e[n]
    }, propHooks: {tabIndex: {get: function (e) {
        var t = x.find.attr(e, "tabindex");
        return t ? parseInt(t, 10) : Y.test(e.nodeName) || J.test(e.nodeName) && e.href ? 0 : -1
    }}}}), X = {set: function (e, t, n) {
        return t === !1 ? x.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && x.propFix[n] || n, n) : e[x.camelCase("default-" + n)] = e[n] = !0, n
    }}, x.each(x.expr.match.bool.source.match(/\w+/g), function (e, n) {
        var r = x.expr.attrHandle[n] || x.find.attr;
        x.expr.attrHandle[n] = K && Q || !G.test(n) ? function (e, n, i) {
            var o = x.expr.attrHandle[n], a = i ? t : (x.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
            return x.expr.attrHandle[n] = o, a
        } : function (e, n, r) {
            return r ? t : e[x.camelCase("default-" + n)] ? n.toLowerCase() : null
        }
    }), K && Q || (x.attrHooks.value = {set: function (e, n, r) {
        return x.nodeName(e, "input") ? (e.defaultValue = n, t) : z && z.set(e, n, r)
    }}), Q || (z = {set: function (e, n, r) {
        var i = e.getAttributeNode(r);
        return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
    }}, x.expr.attrHandle.id = x.expr.attrHandle.name = x.expr.attrHandle.coords = function (e, n, r) {
        var i;
        return r ? t : (i = e.getAttributeNode(n)) && "" !== i.value ? i.value : null
    }, x.valHooks.button = {get: function (e, n) {
        var r = e.getAttributeNode(n);
        return r && r.specified ? r.value : t
    }, set: z.set}, x.attrHooks.contenteditable = {set: function (e, t, n) {
        z.set(e, "" === t ? !1 : t, n)
    }}, x.each(["width", "height"], function (e, n) {
        x.attrHooks[n] = {set: function (e, r) {
            return"" === r ? (e.setAttribute(n, "auto"), r) : t
        }}
    })), x.support.hrefNormalized || x.each(["href", "src"], function (e, t) {
        x.propHooks[t] = {get: function (e) {
            return e.getAttribute(t, 4)
        }}
    }), x.support.style || (x.attrHooks.style = {get: function (e) {
        return e.style.cssText || t
    }, set: function (e, t) {
        return e.style.cssText = t + ""
    }}), x.support.optSelected || (x.propHooks.selected = {get: function (e) {
        var t = e.parentNode;
        return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
    }}), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        x.propFix[this.toLowerCase()] = this
    }), x.support.enctype || (x.propFix.enctype = "encoding"), x.each(["radio", "checkbox"], function () {
        x.valHooks[this] = {set: function (e, n) {
            return x.isArray(n) ? e.checked = x.inArray(x(e).val(), n) >= 0 : t
        }}, x.support.checkOn || (x.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Z = /^(?:input|select|textarea)$/i, et = /^key/, tt = /^(?:mouse|contextmenu)|click/, nt = /^(?:focusinfocus|focusoutblur)$/, rt = /^([^.]*)(?:\.(.+)|)$/;

    function it() {
        return!0
    }

    function ot() {
        return!1
    }

    function at() {
        try {
            return a.activeElement
        } catch (e) {
        }
    }

    x.event = {global: {}, add: function (e, n, r, o, a) {
        var s, l, u, c, p, f, d, h, g, m, y, v = x._data(e);
        if (v) {
            r.handler && (c = r, r = c.handler, a = c.selector), r.guid || (r.guid = x.guid++), (l = v.events) || (l = v.events = {}), (f = v.handle) || (f = v.handle = function (e) {
                return typeof x === i || e && x.event.triggered === e.type ? t : x.event.dispatch.apply(f.elem, arguments)
            }, f.elem = e), n = (n || "").match(T) || [""], u = n.length;
            while (u--)s = rt.exec(n[u]) || [], g = y = s[1], m = (s[2] || "").split(".").sort(), g && (p = x.event.special[g] || {}, g = (a ? p.delegateType : p.bindType) || g, p = x.event.special[g] || {}, d = x.extend({type: g, origType: y, data: o, handler: r, guid: r.guid, selector: a, needsContext: a && x.expr.match.needsContext.test(a), namespace: m.join(".")}, c), (h = l[g]) || (h = l[g] = [], h.delegateCount = 0, p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), x.event.global[g] = !0);
            e = null
        }
    }, remove: function (e, t, n, r, i) {
        var o, a, s, l, u, c, p, f, d, h, g, m = x.hasData(e) && x._data(e);
        if (m && (c = m.events)) {
            t = (t || "").match(T) || [""], u = t.length;
            while (u--)if (s = rt.exec(t[u]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                p = x.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = c[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length;
                while (o--)a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a));
                l && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || x.removeEvent(e, d, m.handle), delete c[d])
            } else for (d in c)x.event.remove(e, d + t[u], n, r, !0);
            x.isEmptyObject(c) && (delete m.handle, x._removeData(e, "events"))
        }
    }, trigger: function (n, r, i, o) {
        var s, l, u, c, p, f, d, h = [i || a], g = v.call(n, "type") ? n.type : n, m = v.call(n, "namespace") ? n.namespace.split(".") : [];
        if (u = f = i = i || a, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + x.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), g = m.shift(), m.sort()), l = 0 > g.indexOf(":") && "on" + g, n = n[x.expando] ? n : new x.Event(g, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : x.makeArray(r, [n]), p = x.event.special[g] || {}, o || !p.trigger || p.trigger.apply(i, r) !== !1)) {
            if (!o && !p.noBubble && !x.isWindow(i)) {
                for (c = p.delegateType || g, nt.test(c + g) || (u = u.parentNode); u; u = u.parentNode)h.push(u), f = u;
                f === (i.ownerDocument || a) && h.push(f.defaultView || f.parentWindow || e)
            }
            d = 0;
            while ((u = h[d++]) && !n.isPropagationStopped())n.type = d > 1 ? c : p.bindType || g, s = (x._data(u, "events") || {})[n.type] && x._data(u, "handle"), s && s.apply(u, r), s = l && u[l], s && x.acceptData(u) && s.apply && s.apply(u, r) === !1 && n.preventDefault();
            if (n.type = g, !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(h.pop(), r) === !1) && x.acceptData(i) && l && i[g] && !x.isWindow(i)) {
                f = i[l], f && (i[l] = null), x.event.triggered = g;
                try {
                    i[g]()
                } catch (y) {
                }
                x.event.triggered = t, f && (i[l] = f)
            }
            return n.result
        }
    }, dispatch: function (e) {
        e = x.event.fix(e);
        var n, r, i, o, a, s = [], l = g.call(arguments), u = (x._data(this, "events") || {})[e.type] || [], c = x.event.special[e.type] || {};
        if (l[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
            s = x.event.handlers.call(this, e, u), n = 0;
            while ((o = s[n++]) && !e.isPropagationStopped()) {
                e.currentTarget = o.elem, a = 0;
                while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped())(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((x.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()))
            }
            return c.postDispatch && c.postDispatch.call(this, e), e.result
        }
    }, handlers: function (e, n) {
        var r, i, o, a, s = [], l = n.delegateCount, u = e.target;
        if (l && u.nodeType && (!e.button || "click" !== e.type))for (; u != this; u = u.parentNode || this)if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
            for (o = [], a = 0; l > a; a++)i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? x(r, this).index(u) >= 0 : x.find(r, this, null, [u]).length), o[r] && o.push(i);
            o.length && s.push({elem: u, handlers: o})
        }
        return n.length > l && s.push({elem: this, handlers: n.slice(l)}), s
    }, fix: function (e) {
        if (e[x.expando])return e;
        var t, n, r, i = e.type, o = e, s = this.fixHooks[i];
        s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new x.Event(o), t = r.length;
        while (t--)n = r[t], e[n] = o[n];
        return e.target || (e.target = o.srcElement || a), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, o) : e
    }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: {props: "char charCode key keyCode".split(" "), filter: function (e, t) {
        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
    }}, mouseHooks: {props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (e, n) {
        var r, i, o, s = n.button, l = n.fromElement;
        return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || a, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && l && (e.relatedTarget = l === e.target ? n.toElement : l), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
    }}, special: {load: {noBubble: !0}, focus: {trigger: function () {
        if (this !== at() && this.focus)try {
            return this.focus(), !1
        } catch (e) {
        }
    }, delegateType: "focusin"}, blur: {trigger: function () {
        return this === at() && this.blur ? (this.blur(), !1) : t
    }, delegateType: "focusout"}, click: {trigger: function () {
        return x.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
    }, _default: function (e) {
        return x.nodeName(e.target, "a")
    }}, beforeunload: {postDispatch: function (e) {
        e.result !== t && (e.originalEvent.returnValue = e.result)
    }}}, simulate: function (e, t, n, r) {
        var i = x.extend(new x.Event, n, {type: e, isSimulated: !0, originalEvent: {}});
        r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
    }}, x.removeEvent = a.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function (e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n))
    }, x.Event = function (e, n) {
        return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e, n && x.extend(this, n), this.timeStamp = e && e.timeStamp || x.now(), this[x.expando] = !0, t) : new x.Event(e, n)
    }, x.Event.prototype = {isDefaultPrevented: ot, isPropagationStopped: ot, isImmediatePropagationStopped: ot, preventDefault: function () {
        var e = this.originalEvent;
        this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
    }, stopPropagation: function () {
        var e = this.originalEvent;
        this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
    }, stopImmediatePropagation: function () {
        this.isImmediatePropagationStopped = it, this.stopPropagation()
    }}, x.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (e, t) {
        x.event.special[e] = {delegateType: t, bindType: t, handle: function (e) {
            var n, r = this, i = e.relatedTarget, o = e.handleObj;
            return(!i || i !== r && !x.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
        }}
    }), x.support.submitBubbles || (x.event.special.submit = {setup: function () {
        return x.nodeName(this, "form") ? !1 : (x.event.add(this, "click._submit keypress._submit", function (e) {
            var n = e.target, r = x.nodeName(n, "input") || x.nodeName(n, "button") ? n.form : t;
            r && !x._data(r, "submitBubbles") && (x.event.add(r, "submit._submit", function (e) {
                e._submit_bubble = !0
            }), x._data(r, "submitBubbles", !0))
        }), t)
    }, postDispatch: function (e) {
        e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && x.event.simulate("submit", this.parentNode, e, !0))
    }, teardown: function () {
        return x.nodeName(this, "form") ? !1 : (x.event.remove(this, "._submit"), t)
    }}), x.support.changeBubbles || (x.event.special.change = {setup: function () {
        return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (x.event.add(this, "propertychange._change", function (e) {
            "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
        }), x.event.add(this, "click._change", function (e) {
            this._just_changed && !e.isTrigger && (this._just_changed = !1), x.event.simulate("change", this, e, !0)
        })), !1) : (x.event.add(this, "beforeactivate._change", function (e) {
            var t = e.target;
            Z.test(t.nodeName) && !x._data(t, "changeBubbles") && (x.event.add(t, "change._change", function (e) {
                !this.parentNode || e.isSimulated || e.isTrigger || x.event.simulate("change", this.parentNode, e, !0)
            }), x._data(t, "changeBubbles", !0))
        }), t)
    }, handle: function (e) {
        var n = e.target;
        return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
    }, teardown: function () {
        return x.event.remove(this, "._change"), !Z.test(this.nodeName)
    }}), x.support.focusinBubbles || x.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var n = 0, r = function (e) {
            x.event.simulate(t, e.target, x.event.fix(e), !0)
        };
        x.event.special[t] = {setup: function () {
            0 === n++ && a.addEventListener(e, r, !0)
        }, teardown: function () {
            0 === --n && a.removeEventListener(e, r, !0)
        }}
    }), x.fn.extend({on: function (e, n, r, i, o) {
        var a, s;
        if ("object" == typeof e) {
            "string" != typeof n && (r = r || n, n = t);
            for (a in e)this.on(a, n, r, e[a], o);
            return this
        }
        if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1)i = ot; else if (!i)return this;
        return 1 === o && (s = i, i = function (e) {
            return x().off(e), s.apply(this, arguments)
        }, i.guid = s.guid || (s.guid = x.guid++)), this.each(function () {
            x.event.add(this, e, i, r, n)
        })
    }, one: function (e, t, n, r) {
        return this.on(e, t, n, r, 1)
    }, off: function (e, n, r) {
        var i, o;
        if (e && e.preventDefault && e.handleObj)return i = e.handleObj, x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
        if ("object" == typeof e) {
            for (o in e)this.off(o, n, e[o]);
            return this
        }
        return(n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = ot), this.each(function () {
            x.event.remove(this, e, r, n)
        })
    }, trigger: function (e, t) {
        return this.each(function () {
            x.event.trigger(e, t, this)
        })
    }, triggerHandler: function (e, n) {
        var r = this[0];
        return r ? x.event.trigger(e, n, r, !0) : t
    }});
    var st = /^.[^:#\[\.,]*$/, lt = /^(?:parents|prev(?:Until|All))/, ut = x.expr.match.needsContext, ct = {children: !0, contents: !0, next: !0, prev: !0};
    x.fn.extend({find: function (e) {
        var t, n = [], r = this, i = r.length;
        if ("string" != typeof e)return this.pushStack(x(e).filter(function () {
            for (t = 0; i > t; t++)if (x.contains(r[t], this))return!0
        }));
        for (t = 0; i > t; t++)x.find(e, r[t], n);
        return n = this.pushStack(i > 1 ? x.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
    }, has: function (e) {
        var t, n = x(e, this), r = n.length;
        return this.filter(function () {
            for (t = 0; r > t; t++)if (x.contains(this, n[t]))return!0
        })
    }, not: function (e) {
        return this.pushStack(ft(this, e || [], !0))
    }, filter: function (e) {
        return this.pushStack(ft(this, e || [], !1))
    }, is: function (e) {
        return!!ft(this, "string" == typeof e && ut.test(e) ? x(e) : e || [], !1).length
    }, closest: function (e, t) {
        var n, r = 0, i = this.length, o = [], a = ut.test(e) || "string" != typeof e ? x(e, t || this.context) : 0;
        for (; i > r; r++)for (n = this[r]; n && n !== t; n = n.parentNode)if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
            n = o.push(n);
            break
        }
        return this.pushStack(o.length > 1 ? x.unique(o) : o)
    }, index: function (e) {
        return e ? "string" == typeof e ? x.inArray(this[0], x(e)) : x.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    }, add: function (e, t) {
        var n = "string" == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [e] : e), r = x.merge(this.get(), n);
        return this.pushStack(x.unique(r))
    }, addBack: function (e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }});
    function pt(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    x.each({parent: function (e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null
    }, parents: function (e) {
        return x.dir(e, "parentNode")
    }, parentsUntil: function (e, t, n) {
        return x.dir(e, "parentNode", n)
    }, next: function (e) {
        return pt(e, "nextSibling")
    }, prev: function (e) {
        return pt(e, "previousSibling")
    }, nextAll: function (e) {
        return x.dir(e, "nextSibling")
    }, prevAll: function (e) {
        return x.dir(e, "previousSibling")
    }, nextUntil: function (e, t, n) {
        return x.dir(e, "nextSibling", n)
    }, prevUntil: function (e, t, n) {
        return x.dir(e, "previousSibling", n)
    }, siblings: function (e) {
        return x.sibling((e.parentNode || {}).firstChild, e)
    }, children: function (e) {
        return x.sibling(e.firstChild)
    }, contents: function (e) {
        return x.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : x.merge([], e.childNodes)
    }}, function (e, t) {
        x.fn[e] = function (n, r) {
            var i = x.map(this, t, n);
            return"Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = x.filter(r, i)), this.length > 1 && (ct[e] || (i = x.unique(i)), lt.test(e) && (i = i.reverse())), this.pushStack(i)
        }
    }), x.extend({filter: function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, dir: function (e, n, r) {
        var i = [], o = e[n];
        while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !x(o).is(r)))1 === o.nodeType && i.push(o), o = o[n];
        return i
    }, sibling: function (e, t) {
        var n = [];
        for (; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e);
        return n
    }});
    function ft(e, t, n) {
        if (x.isFunction(t))return x.grep(e, function (e, r) {
            return!!t.call(e, r, e) !== n
        });
        if (t.nodeType)return x.grep(e, function (e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (st.test(t))return x.filter(t, e, n);
            t = x.filter(t, e)
        }
        return x.grep(e, function (e) {
            return x.inArray(e, t) >= 0 !== n
        })
    }

    function dt(e) {
        var t = ht.split("|"), n = e.createDocumentFragment();
        if (n.createElement)while (t.length)n.createElement(t.pop());
        return n
    }

    var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", gt = / jQuery\d+="(?:null|\d+)"/g, mt = RegExp("<(?:" + ht + ")[\\s/>]", "i"), yt = /^\s+/, vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, bt = /<([\w:]+)/, xt = /<tbody/i, wt = /<|&#?\w+;/, Tt = /<(?:script|style|link)/i, Ct = /^(?:checkbox|radio)$/i, Nt = /checked\s*(?:[^=]|=\s*.checked.)/i, kt = /^$|\/(?:java|ecma)script/i, Et = /^true\/(.*)/, St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, At = {option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: x.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]}, jt = dt(a), Dt = jt.appendChild(a.createElement("div"));
    At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, At.th = At.td, x.fn.extend({text: function (e) {
        return x.access(this, function (e) {
            return e === t ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || a).createTextNode(e))
        }, null, e, arguments.length)
    }, append: function () {
        return this.domManip(arguments, function (e) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                var t = Lt(this, e);
                t.appendChild(e)
            }
        })
    }, prepend: function () {
        return this.domManip(arguments, function (e) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                var t = Lt(this, e);
                t.insertBefore(e, t.firstChild)
            }
        })
    }, before: function () {
        return this.domManip(arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this)
        })
    }, after: function () {
        return this.domManip(arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
        })
    }, remove: function (e, t) {
        var n, r = e ? x.filter(e, this) : this, i = 0;
        for (; null != (n = r[i]); i++)t || 1 !== n.nodeType || x.cleanData(Ft(n)), n.parentNode && (t && x.contains(n.ownerDocument, n) && _t(Ft(n, "script")), n.parentNode.removeChild(n));
        return this
    }, empty: function () {
        var e, t = 0;
        for (; null != (e = this[t]); t++) {
            1 === e.nodeType && x.cleanData(Ft(e, !1));
            while (e.firstChild)e.removeChild(e.firstChild);
            e.options && x.nodeName(e, "select") && (e.options.length = 0)
        }
        return this
    }, clone: function (e, t) {
        return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
            return x.clone(this, e, t)
        })
    }, html: function (e) {
        return x.access(this, function (e) {
            var n = this[0] || {}, r = 0, i = this.length;
            if (e === t)return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t;
            if (!("string" != typeof e || Tt.test(e) || !x.support.htmlSerialize && mt.test(e) || !x.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
                e = e.replace(vt, "<$1></$2>");
                try {
                    for (; i > r; r++)n = this[r] || {}, 1 === n.nodeType && (x.cleanData(Ft(n, !1)), n.innerHTML = e);
                    n = 0
                } catch (o) {
                }
            }
            n && this.empty().append(e)
        }, null, e, arguments.length)
    }, replaceWith: function () {
        var e = x.map(this, function (e) {
            return[e.nextSibling, e.parentNode]
        }), t = 0;
        return this.domManip(arguments, function (n) {
            var r = e[t++], i = e[t++];
            i && (r && r.parentNode !== i && (r = this.nextSibling), x(this).remove(), i.insertBefore(n, r))
        }, !0), t ? this : this.remove()
    }, detach: function (e) {
        return this.remove(e, !0)
    }, domManip: function (e, t, n) {
        e = d.apply([], e);
        var r, i, o, a, s, l, u = 0, c = this.length, p = this, f = c - 1, h = e[0], g = x.isFunction(h);
        if (g || !(1 >= c || "string" != typeof h || x.support.checkClone) && Nt.test(h))return this.each(function (r) {
            var i = p.eq(r);
            g && (e[0] = h.call(this, r, i.html())), i.domManip(e, t, n)
        });
        if (c && (l = x.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = l.firstChild, 1 === l.childNodes.length && (l = r), r)) {
            for (a = x.map(Ft(l, "script"), Ht), o = a.length; c > u; u++)i = l, u !== f && (i = x.clone(i, !0, !0), o && x.merge(a, Ft(i, "script"))), t.call(this[u], i, u);
            if (o)for (s = a[a.length - 1].ownerDocument, x.map(a, qt), u = 0; o > u; u++)i = a[u], kt.test(i.type || "") && !x._data(i, "globalEval") && x.contains(s, i) && (i.src ? x._evalUrl(i.src) : x.globalEval((i.text || i.textContent || i.innerHTML || "").replace(St, "")));
            l = r = null
        }
        return this
    }});
    function Lt(e, t) {
        return x.nodeName(e, "table") && x.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function Ht(e) {
        return e.type = (null !== x.find.attr(e, "type")) + "/" + e.type, e
    }

    function qt(e) {
        var t = Et.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function _t(e, t) {
        var n, r = 0;
        for (; null != (n = e[r]); r++)x._data(n, "globalEval", !t || x._data(t[r], "globalEval"))
    }

    function Mt(e, t) {
        if (1 === t.nodeType && x.hasData(e)) {
            var n, r, i, o = x._data(e), a = x._data(t, o), s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)for (r = 0, i = s[n].length; i > r; r++)x.event.add(t, n, s[n][r])
            }
            a.data && (a.data = x.extend({}, a.data))
        }
    }

    function Ot(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !x.support.noCloneEvent && t[x.expando]) {
                i = x._data(t);
                for (r in i.events)x.removeEvent(t, r, i.handle);
                t.removeAttribute(x.expando)
            }
            "script" === n && t.text !== e.text ? (Ht(t).text = e.text, qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), x.support.html5Clone && e.innerHTML && !x.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ct.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    x.each({appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"}, function (e, t) {
        x.fn[e] = function (e) {
            var n, r = 0, i = [], o = x(e), a = o.length - 1;
            for (; a >= r; r++)n = r === a ? this : this.clone(!0), x(o[r])[t](n), h.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    function Ft(e, n) {
        var r, o, a = 0, s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
        if (!s)for (s = [], r = e.childNodes || e; null != (o = r[a]); a++)!n || x.nodeName(o, n) ? s.push(o) : x.merge(s, Ft(o, n));
        return n === t || n && x.nodeName(e, n) ? x.merge([e], s) : s
    }

    function Bt(e) {
        Ct.test(e.type) && (e.defaultChecked = e.checked)
    }

    x.extend({clone: function (e, t, n) {
        var r, i, o, a, s, l = x.contains(e.ownerDocument, e);
        if (x.support.html5Clone || x.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML, Dt.removeChild(o = Dt.firstChild)), !(x.support.noCloneEvent && x.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e)))for (r = Ft(o), s = Ft(e), a = 0; null != (i = s[a]); ++a)r[a] && Ot(i, r[a]);
        if (t)if (n)for (s = s || Ft(e), r = r || Ft(o), a = 0; null != (i = s[a]); a++)Mt(i, r[a]); else Mt(e, o);
        return r = Ft(o, "script"), r.length > 0 && _t(r, !l && Ft(e, "script")), r = s = i = null, o
    }, buildFragment: function (e, t, n, r) {
        var i, o, a, s, l, u, c, p = e.length, f = dt(t), d = [], h = 0;
        for (; p > h; h++)if (o = e[h], o || 0 === o)if ("object" === x.type(o))x.merge(d, o.nodeType ? [o] : o); else if (wt.test(o)) {
            s = s || f.appendChild(t.createElement("div")), l = (bt.exec(o) || ["", ""])[1].toLowerCase(), c = At[l] || At._default, s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2], i = c[0];
            while (i--)s = s.lastChild;
            if (!x.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), !x.support.tbody) {
                o = "table" !== l || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length;
                while (i--)x.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u)
            }
            x.merge(d, s.childNodes), s.textContent = "";
            while (s.firstChild)s.removeChild(s.firstChild);
            s = f.lastChild
        } else d.push(t.createTextNode(o));
        s && f.removeChild(s), x.support.appendChecked || x.grep(Ft(d, "input"), Bt), h = 0;
        while (o = d[h++])if ((!r || -1 === x.inArray(o, r)) && (a = x.contains(o.ownerDocument, o), s = Ft(f.appendChild(o), "script"), a && _t(s), n)) {
            i = 0;
            while (o = s[i++])kt.test(o.type || "") && n.push(o)
        }
        return s = null, f
    }, cleanData: function (e, t) {
        var n, r, o, a, s = 0, l = x.expando, u = x.cache, c = x.support.deleteExpando, f = x.event.special;
        for (; null != (n = e[s]); s++)if ((t || x.acceptData(n)) && (o = n[l], a = o && u[o])) {
            if (a.events)for (r in a.events)f[r] ? x.event.remove(n, r) : x.removeEvent(n, r, a.handle);
            u[o] && (delete u[o], c ? delete n[l] : typeof n.removeAttribute !== i ? n.removeAttribute(l) : n[l] = null, p.push(o))
        }
    }, _evalUrl: function (e) {
        return x.ajax({url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    }}), x.fn.extend({wrapAll: function (e) {
        if (x.isFunction(e))return this.each(function (t) {
            x(this).wrapAll(e.call(this, t))
        });
        if (this[0]) {
            var t = x(e, this[0].ownerDocument).eq(0).clone(!0);
            this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                var e = this;
                while (e.firstChild && 1 === e.firstChild.nodeType)e = e.firstChild;
                return e
            }).append(this)
        }
        return this
    }, wrapInner: function (e) {
        return x.isFunction(e) ? this.each(function (t) {
            x(this).wrapInner(e.call(this, t))
        }) : this.each(function () {
            var t = x(this), n = t.contents();
            n.length ? n.wrapAll(e) : t.append(e)
        })
    }, wrap: function (e) {
        var t = x.isFunction(e);
        return this.each(function (n) {
            x(this).wrapAll(t ? e.call(this, n) : e)
        })
    }, unwrap: function () {
        return this.parent().each(function () {
            x.nodeName(this, "body") || x(this).replaceWith(this.childNodes)
        }).end()
    }});
    var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i, It = /opacity\s*=\s*([^)]*)/, zt = /^(top|right|bottom|left)$/, Xt = /^(none|table(?!-c[ea]).+)/, Ut = /^margin/, Vt = RegExp("^(" + w + ")(.*)$", "i"), Yt = RegExp("^(" + w + ")(?!px)[a-z%]+$", "i"), Jt = RegExp("^([+-])=(" + w + ")", "i"), Gt = {BODY: "block"}, Qt = {position: "absolute", visibility: "hidden", display: "block"}, Kt = {letterSpacing: 0, fontWeight: 400}, Zt = ["Top", "Right", "Bottom", "Left"], en = ["Webkit", "O", "Moz", "ms"];

    function tn(e, t) {
        if (t in e)return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = en.length;
        while (i--)if (t = en[i] + n, t in e)return t;
        return r
    }

    function nn(e, t) {
        return e = t || e, "none" === x.css(e, "display") || !x.contains(e.ownerDocument, e)
    }

    function rn(e, t) {
        var n, r, i, o = [], a = 0, s = e.length;
        for (; s > a; a++)r = e[a], r.style && (o[a] = x._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (o[a] = x._data(r, "olddisplay", ln(r.nodeName)))) : o[a] || (i = nn(r), (n && "none" !== n || !i) && x._data(r, "olddisplay", i ? n : x.css(r, "display"))));
        for (a = 0; s > a; a++)r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }

    x.fn.extend({css: function (e, n) {
        return x.access(this, function (e, n, r) {
            var i, o, a = {}, s = 0;
            if (x.isArray(n)) {
                for (o = Rt(e), i = n.length; i > s; s++)a[n[s]] = x.css(e, n[s], !1, o);
                return a
            }
            return r !== t ? x.style(e, n, r) : x.css(e, n)
        }, e, n, arguments.length > 1)
    }, show: function () {
        return rn(this, !0)
    }, hide: function () {
        return rn(this)
    }, toggle: function (e) {
        return"boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
            nn(this) ? x(this).show() : x(this).hide()
        })
    }}), x.extend({cssHooks: {opacity: {get: function (e, t) {
        if (t) {
            var n = Wt(e, "opacity");
            return"" === n ? "1" : n
        }
    }}}, cssNumber: {columnCount: !0, fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0}, cssProps: {"float": x.support.cssFloat ? "cssFloat" : "styleFloat"}, style: function (e, n, r, i) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var o, a, s, l = x.camelCase(n), u = e.style;
            if (n = x.cssProps[l] || (x.cssProps[l] = tn(u, l)), s = x.cssHooks[n] || x.cssHooks[l], r === t)return s && "get"in s && (o = s.get(e, !1, i)) !== t ? o : u[n];
            if (a = typeof r, "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(x.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || x.cssNumber[l] || (r += "px"), x.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (u[n] = "inherit"), s && "set"in s && (r = s.set(e, r, i)) === t)))try {
                u[n] = r
            } catch (c) {
            }
        }
    }, css: function (e, n, r, i) {
        var o, a, s, l = x.camelCase(n);
        return n = x.cssProps[l] || (x.cssProps[l] = tn(e.style, l)), s = x.cssHooks[n] || x.cssHooks[l], s && "get"in s && (a = s.get(e, !0, r)), a === t && (a = Wt(e, n, i)), "normal" === a && n in Kt && (a = Kt[n]), "" === r || r ? (o = parseFloat(a), r === !0 || x.isNumeric(o) ? o || 0 : a) : a
    }}), e.getComputedStyle ? (Rt = function (t) {
        return e.getComputedStyle(t, null)
    }, Wt = function (e, n, r) {
        var i, o, a, s = r || Rt(e), l = s ? s.getPropertyValue(n) || s[n] : t, u = e.style;
        return s && ("" !== l || x.contains(e.ownerDocument, e) || (l = x.style(e, n)), Yt.test(l) && Ut.test(n) && (i = u.width, o = u.minWidth, a = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = s.width, u.width = i, u.minWidth = o, u.maxWidth = a)), l
    }) : a.documentElement.currentStyle && (Rt = function (e) {
        return e.currentStyle
    }, Wt = function (e, n, r) {
        var i, o, a, s = r || Rt(e), l = s ? s[n] : t, u = e.style;
        return null == l && u && u[n] && (l = u[n]), Yt.test(l) && !zt.test(n) && (i = u.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), u.left = "fontSize" === n ? "1em" : l, l = u.pixelLeft + "px", u.left = i, a && (o.left = a)), "" === l ? "auto" : l
    });
    function on(e, t, n) {
        var r = Vt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function an(e, t, n, r, i) {
        var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0;
        for (; 4 > o; o += 2)"margin" === n && (a += x.css(e, n + Zt[o], !0, i)), r ? ("content" === n && (a -= x.css(e, "padding" + Zt[o], !0, i)), "margin" !== n && (a -= x.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += x.css(e, "padding" + Zt[o], !0, i), "padding" !== n && (a += x.css(e, "border" + Zt[o] + "Width", !0, i)));
        return a
    }

    function sn(e, t, n) {
        var r = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, o = Rt(e), a = x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = Wt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Yt.test(i))return i;
            r = a && (x.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function ln(e) {
        var t = a, n = Gt[e];
        return n || (n = un(e, t), "none" !== n && n || (Pt = (Pt || x("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (Pt[0].contentWindow || Pt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = un(e, t), Pt.detach()), Gt[e] = n), n
    }

    function un(e, t) {
        var n = x(t.createElement(e)).appendTo(t.body), r = x.css(n[0], "display");
        return n.remove(), r
    }

    x.each(["height", "width"], function (e, n) {
        x.cssHooks[n] = {get: function (e, r, i) {
            return r ? 0 === e.offsetWidth && Xt.test(x.css(e, "display")) ? x.swap(e, Qt, function () {
                return sn(e, n, i)
            }) : sn(e, n, i) : t
        }, set: function (e, t, r) {
            var i = r && Rt(e);
            return on(e, t, r ? an(e, n, r, x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, i), i) : 0)
        }}
    }), x.support.opacity || (x.cssHooks.opacity = {get: function (e, t) {
        return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
    }, set: function (e, t) {
        var n = e.style, r = e.currentStyle, i = x.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", o = r && r.filter || n.filter || "";
        n.zoom = 1, (t >= 1 || "" === t) && "" === x.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i)
    }}), x(function () {
        x.support.reliableMarginRight || (x.cssHooks.marginRight = {get: function (e, n) {
            return n ? x.swap(e, {display: "inline-block"}, Wt, [e, "marginRight"]) : t
        }}), !x.support.pixelPosition && x.fn.position && x.each(["top", "left"], function (e, n) {
            x.cssHooks[n] = {get: function (e, r) {
                return r ? (r = Wt(e, n), Yt.test(r) ? x(e).position()[n] + "px" : r) : t
            }}
        })
    }), x.expr && x.expr.filters && (x.expr.filters.hidden = function (e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !x.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || x.css(e, "display"))
    }, x.expr.filters.visible = function (e) {
        return!x.expr.filters.hidden(e)
    }), x.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        x.cssHooks[e + t] = {expand: function (n) {
            var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n];
            for (; 4 > r; r++)i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0];
            return i
        }}, Ut.test(e) || (x.cssHooks[e + t].set = on)
    });
    var cn = /%20/g, pn = /\[\]$/, fn = /\r?\n/g, dn = /^(?:submit|button|image|reset|file)$/i, hn = /^(?:input|select|textarea|keygen)/i;
    x.fn.extend({serialize: function () {
        return x.param(this.serializeArray())
    }, serializeArray: function () {
        return this.map(function () {
            var e = x.prop(this, "elements");
            return e ? x.makeArray(e) : this
        }).filter(function () {
            var e = this.type;
            return this.name && !x(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Ct.test(e))
        }).map(function (e, t) {
            var n = x(this).val();
            return null == n ? null : x.isArray(n) ? x.map(n, function (e) {
                return{name: t.name, value: e.replace(fn, "\r\n")}
            }) : {name: t.name, value: n.replace(fn, "\r\n")}
        }).get()
    }}), x.param = function (e, n) {
        var r, i = [], o = function (e, t) {
            t = x.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (n === t && (n = x.ajaxSettings && x.ajaxSettings.traditional), x.isArray(e) || e.jquery && !x.isPlainObject(e))x.each(e, function () {
            o(this.name, this.value)
        }); else for (r in e)gn(r, e[r], n, o);
        return i.join("&").replace(cn, "+")
    };
    function gn(e, t, n, r) {
        var i;
        if (x.isArray(t))x.each(t, function (t, i) {
            n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        }); else if (n || "object" !== x.type(t))r(e, t); else for (i in t)gn(e + "[" + i + "]", t[i], n, r)
    }

    x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        x.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), x.fn.extend({hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e)
    }, bind: function (e, t, n) {
        return this.on(e, null, t, n)
    }, unbind: function (e, t) {
        return this.off(e, null, t)
    }, delegate: function (e, t, n, r) {
        return this.on(t, e, n, r)
    }, undelegate: function (e, t, n) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
    }});
    var mn, yn, vn = x.now(), bn = /\?/, xn = /#.*$/, wn = /([?&])_=[^&]*/, Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Cn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Nn = /^(?:GET|HEAD)$/, kn = /^\/\//, En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Sn = x.fn.load, An = {}, jn = {}, Dn = "*/".concat("*");
    try {
        yn = o.href
    } catch (Ln) {
        yn = a.createElement("a"), yn.href = "", yn = yn.href
    }
    mn = En.exec(yn.toLowerCase()) || [];
    function Hn(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0, o = t.toLowerCase().match(T) || [];
            if (x.isFunction(n))while (r = o[i++])"+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function qn(e, n, r, i) {
        var o = {}, a = e === jn;

        function s(l) {
            var u;
            return o[l] = !0, x.each(e[l] || [], function (e, l) {
                var c = l(n, r, i);
                return"string" != typeof c || a || o[c] ? a ? !(u = c) : t : (n.dataTypes.unshift(c), s(c), !1)
            }), u
        }

        return s(n.dataTypes[0]) || !o["*"] && s("*")
    }

    function _n(e, n) {
        var r, i, o = x.ajaxSettings.flatOptions || {};
        for (i in n)n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
        return r && x.extend(!0, e, r), e
    }

    x.fn.load = function (e, n, r) {
        if ("string" != typeof e && Sn)return Sn.apply(this, arguments);
        var i, o, a, s = this, l = e.indexOf(" ");
        return l >= 0 && (i = e.slice(l, e.length), e = e.slice(0, l)), x.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && x.ajax({url: e, type: a, dataType: "html", data: n}).done(function (e) {
            o = arguments, s.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e)
        }).complete(r && function (e, t) {
            s.each(r, o || [e.responseText, t, e])
        }), this
    }, x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        x.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), x.extend({active: 0, lastModified: {}, etag: {}, ajaxSettings: {url: yn, type: "GET", isLocal: Cn.test(mn[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: {"*": Dn, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript"}, contents: {xml: /xml/, html: /html/, json: /json/}, responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"}, converters: {"* text": String, "text html": !0, "text json": x.parseJSON, "text xml": x.parseXML}, flatOptions: {url: !0, context: !0}}, ajaxSetup: function (e, t) {
        return t ? _n(_n(e, x.ajaxSettings), t) : _n(x.ajaxSettings, e)
    }, ajaxPrefilter: Hn(An), ajaxTransport: Hn(jn), ajax: function (e, n) {
        "object" == typeof e && (n = e, e = t), n = n || {};
        var r, i, o, a, s, l, u, c, p = x.ajaxSetup({}, n), f = p.context || p, d = p.context && (f.nodeType || f.jquery) ? x(f) : x.event, h = x.Deferred(), g = x.Callbacks("once memory"), m = p.statusCode || {}, y = {}, v = {}, b = 0, w = "canceled", C = {readyState: 0, getResponseHeader: function (e) {
            var t;
            if (2 === b) {
                if (!c) {
                    c = {};
                    while (t = Tn.exec(a))c[t[1].toLowerCase()] = t[2]
                }
                t = c[e.toLowerCase()]
            }
            return null == t ? null : t
        }, getAllResponseHeaders: function () {
            return 2 === b ? a : null
        }, setRequestHeader: function (e, t) {
            var n = e.toLowerCase();
            return b || (e = v[n] = v[n] || e, y[e] = t), this
        }, overrideMimeType: function (e) {
            return b || (p.mimeType = e), this
        }, statusCode: function (e) {
            var t;
            if (e)if (2 > b)for (t in e)m[t] = [m[t], e[t]]; else C.always(e[C.status]);
            return this
        }, abort: function (e) {
            var t = e || w;
            return u && u.abort(t), k(0, t), this
        }};
        if (h.promise(C).complete = g.add, C.success = C.done, C.error = C.fail, p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = x.trim(p.dataType || "*").toLowerCase().match(T) || [""], null == p.crossDomain && (r = En.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (mn[3] || ("http:" === mn[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = x.param(p.data, p.traditional)), qn(An, p, n, C), 2 === b)return C;
        l = p.global, l && 0 === x.active++ && x.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Nn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)), p.ifModified && (x.lastModified[o] && C.setRequestHeader("If-Modified-Since", x.lastModified[o]), x.etag[o] && C.setRequestHeader("If-None-Match", x.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]);
        for (i in p.headers)C.setRequestHeader(i, p.headers[i]);
        if (p.beforeSend && (p.beforeSend.call(f, C, p) === !1 || 2 === b))return C.abort();
        w = "abort";
        for (i in{success: 1, error: 1, complete: 1})C[i](p[i]);
        if (u = qn(jn, p, n, C)) {
            C.readyState = 1, l && d.trigger("ajaxSend", [C, p]), p.async && p.timeout > 0 && (s = setTimeout(function () {
                C.abort("timeout")
            }, p.timeout));
            try {
                b = 1, u.send(y, k)
            } catch (N) {
                if (!(2 > b))throw N;
                k(-1, N)
            }
        } else k(-1, "No Transport");
        function k(e, n, r, i) {
            var c, y, v, w, T, N = n;
            2 !== b && (b = 2, s && clearTimeout(s), u = t, a = i || "", C.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, r && (w = Mn(p, C, r)), w = On(p, w, C, c), c ? (p.ifModified && (T = C.getResponseHeader("Last-Modified"), T && (x.lastModified[o] = T), T = C.getResponseHeader("etag"), T && (x.etag[o] = T)), 204 === e || "HEAD" === p.type ? N = "nocontent" : 304 === e ? N = "notmodified" : (N = w.state, y = w.data, v = w.error, c = !v)) : (v = N, (e || !N) && (N = "error", 0 > e && (e = 0))), C.status = e, C.statusText = (n || N) + "", c ? h.resolveWith(f, [y, N, C]) : h.rejectWith(f, [C, N, v]), C.statusCode(m), m = t, l && d.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? y : v]), g.fireWith(f, [C, N]), l && (d.trigger("ajaxComplete", [C, p]), --x.active || x.event.trigger("ajaxStop")))
        }

        return C
    }, getJSON: function (e, t, n) {
        return x.get(e, t, n, "json")
    }, getScript: function (e, n) {
        return x.get(e, t, n, "script")
    }}), x.each(["get", "post"], function (e, n) {
        x[n] = function (e, r, i, o) {
            return x.isFunction(r) && (o = o || i, i = r, r = t), x.ajax({url: e, type: n, dataType: o, data: r, success: i})
        }
    });
    function Mn(e, n, r) {
        var i, o, a, s, l = e.contents, u = e.dataTypes;
        while ("*" === u[0])u.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
        if (o)for (s in l)if (l[s] && l[s].test(o)) {
            u.unshift(s);
            break
        }
        if (u[0]in r)a = u[0]; else {
            for (s in r) {
                if (!u[0] || e.converters[s + " " + u[0]]) {
                    a = s;
                    break
                }
                i || (i = s)
            }
            a = a || i
        }
        return a ? (a !== u[0] && u.unshift(a), r[a]) : t
    }

    function On(e, t, n, r) {
        var i, o, a, s, l, u = {}, c = e.dataTypes.slice();
        if (c[1])for (a in e.converters)u[a.toLowerCase()] = e.converters[a];
        o = c.shift();
        while (o)if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())if ("*" === o)o = l; else if ("*" !== l && l !== o) {
            if (a = u[l + " " + o] || u["* " + o], !a)for (i in u)if (s = i.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0], c.unshift(s[1]));
                break
            }
            if (a !== !0)if (a && e["throws"])t = a(t); else try {
                t = a(t)
            } catch (p) {
                return{state: "parsererror", error: a ? p : "No conversion from " + l + " to " + o}
            }
        }
        return{state: "success", data: t}
    }

    x.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"}, contents: {script: /(?:java|ecma)script/}, converters: {"text script": function (e) {
        return x.globalEval(e), e
    }}}), x.ajaxPrefilter("script", function (e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), x.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var n, r = a.head || x("head")[0] || a.documentElement;
            return{send: function (t, i) {
                n = a.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) {
                    (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                }, r.insertBefore(n, r.firstChild)
            }, abort: function () {
                n && n.onload(t, !0)
            }}
        }
    });
    var Fn = [], Bn = /(=)\?(?=&|$)|\?\?/;
    x.ajaxSetup({jsonp: "callback", jsonpCallback: function () {
        var e = Fn.pop() || x.expando + "_" + vn++;
        return this[e] = !0, e
    }}), x.ajaxPrefilter("json jsonp", function (n, r, i) {
        var o, a, s, l = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data");
        return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = x.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function () {
            return s || x.error(o + " was not called"), s[0]
        }, n.dataTypes[0] = "json", a = e[o], e[o] = function () {
            s = arguments
        }, i.always(function () {
            e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Fn.push(o)), s && x.isFunction(a) && a(s[0]), s = a = t
        }), "script") : t
    });
    var Pn, Rn, Wn = 0, $n = e.ActiveXObject && function () {
        var e;
        for (e in Pn)Pn[e](t, !0)
    };

    function In() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {
        }
    }

    function zn() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {
        }
    }

    x.ajaxSettings.xhr = e.ActiveXObject ? function () {
        return!this.isLocal && In() || zn()
    } : In, Rn = x.ajaxSettings.xhr(), x.support.cors = !!Rn && "withCredentials"in Rn, Rn = x.support.ajax = !!Rn, Rn && x.ajaxTransport(function (n) {
        if (!n.crossDomain || x.support.cors) {
            var r;
            return{send: function (i, o) {
                var a, s, l = n.xhr();
                if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)for (s in n.xhrFields)l[s] = n.xhrFields[s];
                n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                try {
                    for (s in i)l.setRequestHeader(s, i[s])
                } catch (u) {
                }
                l.send(n.hasContent && n.data || null), r = function (e, i) {
                    var s, u, c, p;
                    try {
                        if (r && (i || 4 === l.readyState))if (r = t, a && (l.onreadystatechange = x.noop, $n && delete Pn[a]), i)4 !== l.readyState && l.abort(); else {
                            p = {}, s = l.status, u = l.getAllResponseHeaders(), "string" == typeof l.responseText && (p.text = l.responseText);
                            try {
                                c = l.statusText
                            } catch (f) {
                                c = ""
                            }
                            s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404
                        }
                    } catch (d) {
                        i || o(-1, d)
                    }
                    p && o(s, c, p, u)
                }, n.async ? 4 === l.readyState ? setTimeout(r) : (a = ++Wn, $n && (Pn || (Pn = {}, x(e).unload($n)), Pn[a] = r), l.onreadystatechange = r) : r()
            }, abort: function () {
                r && r(t, !0)
            }}
        }
    });
    var Xn, Un, Vn = /^(?:toggle|show|hide)$/, Yn = RegExp("^(?:([+-])=|)(" + w + ")([a-z%]*)$", "i"), Jn = /queueHooks$/, Gn = [nr], Qn = {"*": [function (e, t) {
        var n = this.createTween(e, t), r = n.cur(), i = Yn.exec(t), o = i && i[3] || (x.cssNumber[e] ? "" : "px"), a = (x.cssNumber[e] || "px" !== o && +r) && Yn.exec(x.css(n.elem, e)), s = 1, l = 20;
        if (a && a[3] !== o) {
            o = o || a[3], i = i || [], a = +r || 1;
            do s = s || ".5", a /= s, x.style(n.elem, e, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --l)
        }
        return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
    }]};

    function Kn() {
        return setTimeout(function () {
            Xn = t
        }), Xn = x.now()
    }

    function Zn(e, t, n) {
        var r, i = (Qn[t] || []).concat(Qn["*"]), o = 0, a = i.length;
        for (; a > o; o++)if (r = i[o].call(n, t, e))return r
    }

    function er(e, t, n) {
        var r, i, o = 0, a = Gn.length, s = x.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (i)return!1;
            var t = Xn || Kn(), n = Math.max(0, u.startTime + u.duration - t), r = n / u.duration || 0, o = 1 - r, a = 0, l = u.tweens.length;
            for (; l > a; a++)u.tweens[a].run(o);
            return s.notifyWith(e, [u, o, n]), 1 > o && l ? n : (s.resolveWith(e, [u]), !1)
        }, u = s.promise({elem: e, props: x.extend({}, t), opts: x.extend(!0, {specialEasing: {}}, n), originalProperties: t, originalOptions: n, startTime: Xn || Kn(), duration: n.duration, tweens: [], createTween: function (t, n) {
            var r = x.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
            return u.tweens.push(r), r
        }, stop: function (t) {
            var n = 0, r = t ? u.tweens.length : 0;
            if (i)return this;
            for (i = !0; r > n; n++)u.tweens[n].run(1);
            return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
        }}), c = u.props;
        for (tr(c, u.opts.specialEasing); a > o; o++)if (r = Gn[o].call(u, e, c, u.opts))return r;
        return x.map(c, Zn, u), x.isFunction(u.opts.start) && u.opts.start.call(e, u), x.fx.timer(x.extend(l, {elem: e, anim: u, queue: u.opts.queue})), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function tr(e, t) {
        var n, r, i, o, a;
        for (n in e)if (r = x.camelCase(n), i = t[r], o = e[n], x.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = x.cssHooks[r], a && "expand"in a) {
            o = a.expand(o), delete e[r];
            for (n in o)n in e || (e[n] = o[n], t[n] = i)
        } else t[r] = i
    }

    x.Animation = x.extend(er, {tweener: function (e, t) {
        x.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
        var n, r = 0, i = e.length;
        for (; i > r; r++)n = e[r], Qn[n] = Qn[n] || [], Qn[n].unshift(t)
    }, prefilter: function (e, t) {
        t ? Gn.unshift(e) : Gn.push(e)
    }});
    function nr(e, t, n) {
        var r, i, o, a, s, l, u = this, c = {}, p = e.style, f = e.nodeType && nn(e), d = x._data(e, "fxshow");
        n.queue || (s = x._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
            s.unqueued || l()
        }), s.unqueued++, u.always(function () {
            u.always(function () {
                s.unqueued--, x.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === x.css(e, "display") && "none" === x.css(e, "float") && (x.support.inlineBlockNeedsLayout && "inline" !== ln(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", x.support.shrinkWrapBlocks || u.always(function () {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (r in t)if (i = t[r], Vn.exec(i)) {
            if (delete t[r], o = o || "toggle" === i, i === (f ? "hide" : "show"))continue;
            c[r] = d && d[r] || x.style(e, r)
        }
        if (!x.isEmptyObject(c)) {
            d ? "hidden"in d && (f = d.hidden) : d = x._data(e, "fxshow", {}), o && (d.hidden = !f), f ? x(e).show() : u.done(function () {
                x(e).hide()
            }), u.done(function () {
                var t;
                x._removeData(e, "fxshow");
                for (t in c)x.style(e, t, c[t])
            });
            for (r in c)a = Zn(f ? d[r] : 0, r, u), r in d || (d[r] = a.start, f && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function rr(e, t, n, r, i) {
        return new rr.prototype.init(e, t, n, r, i)
    }

    x.Tween = rr, rr.prototype = {constructor: rr, init: function (e, t, n, r, i, o) {
        this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (x.cssNumber[n] ? "" : "px")
    }, cur: function () {
        var e = rr.propHooks[this.prop];
        return e && e.get ? e.get(this) : rr.propHooks._default.get(this)
    }, run: function (e) {
        var t, n = rr.propHooks[this.prop];
        return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this
    }}, rr.prototype.init.prototype = rr.prototype, rr.propHooks = {_default: {get: function (e) {
        var t;
        return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
    }, set: function (e) {
        x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
    }}}, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {set: function (e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
    }}, x.each(["toggle", "show", "hide"], function (e, t) {
        var n = x.fn[t];
        x.fn[t] = function (e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
        }
    }), x.fn.extend({fadeTo: function (e, t, n, r) {
        return this.filter(nn).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
    }, animate: function (e, t, n, r) {
        var i = x.isEmptyObject(e), o = x.speed(t, n, r), a = function () {
            var t = er(this, x.extend({}, e), o);
            (i || x._data(this, "finish")) && t.stop(!0)
        };
        return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
    }, stop: function (e, n, r) {
        var i = function (e) {
            var t = e.stop;
            delete e.stop, t(r)
        };
        return"string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
            var t = !0, n = null != e && e + "queueHooks", o = x.timers, a = x._data(this);
            if (n)a[n] && a[n].stop && i(a[n]); else for (n in a)a[n] && a[n].stop && Jn.test(n) && i(a[n]);
            for (n = o.length; n--;)o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
            (t || !r) && x.dequeue(this, e)
        })
    }, finish: function (e) {
        return e !== !1 && (e = e || "fx"), this.each(function () {
            var t, n = x._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = x.timers, a = r ? r.length : 0;
            for (n.finish = !0, x.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;)o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
            for (t = 0; a > t; t++)r[t] && r[t].finish && r[t].finish.call(this);
            delete n.finish
        })
    }});
    function ir(e, t) {
        var n, r = {height: e}, i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t)n = Zt[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    x.each({slideDown: ir("show"), slideUp: ir("hide"), slideToggle: ir("toggle"), fadeIn: {opacity: "show"}, fadeOut: {opacity: "hide"}, fadeToggle: {opacity: "toggle"}}, function (e, t) {
        x.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), x.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? x.extend({}, e) : {complete: n || !n && t || x.isFunction(e) && e, duration: e, easing: n && t || t && !x.isFunction(t) && t};
        return r.duration = x.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in x.fx.speeds ? x.fx.speeds[r.duration] : x.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            x.isFunction(r.old) && r.old.call(this), r.queue && x.dequeue(this, r.queue)
        }, r
    }, x.easing = {linear: function (e) {
        return e
    }, swing: function (e) {
        return.5 - Math.cos(e * Math.PI) / 2
    }}, x.timers = [], x.fx = rr.prototype.init, x.fx.tick = function () {
        var e, n = x.timers, r = 0;
        for (Xn = x.now(); n.length > r; r++)e = n[r], e() || n[r] !== e || n.splice(r--, 1);
        n.length || x.fx.stop(), Xn = t
    }, x.fx.timer = function (e) {
        e() && x.timers.push(e) && x.fx.start()
    }, x.fx.interval = 13, x.fx.start = function () {
        Un || (Un = setInterval(x.fx.tick, x.fx.interval))
    }, x.fx.stop = function () {
        clearInterval(Un), Un = null
    }, x.fx.speeds = {slow: 600, fast: 200, _default: 400}, x.fx.step = {}, x.expr && x.expr.filters && (x.expr.filters.animated = function (e) {
        return x.grep(x.timers,function (t) {
            return e === t.elem
        }).length
    }), x.fn.offset = function (e) {
        if (arguments.length)return e === t ? this : this.each(function (t) {
            x.offset.setOffset(this, e, t)
        });
        var n, r, o = {top: 0, left: 0}, a = this[0], s = a && a.ownerDocument;
        if (s)return n = s.documentElement, x.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()), r = or(s), {top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0), left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)}) : o
    }, x.offset = {setOffset: function (e, t, n) {
        var r = x.css(e, "position");
        "static" === r && (e.style.position = "relative");
        var i = x(e), o = i.offset(), a = x.css(e, "top"), s = x.css(e, "left"), l = ("absolute" === r || "fixed" === r) && x.inArray("auto", [a, s]) > -1, u = {}, c = {}, p, f;
        l ? (c = i.position(), p = c.top, f = c.left) : (p = parseFloat(a) || 0, f = parseFloat(s) || 0), x.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (u.top = t.top - o.top + p), null != t.left && (u.left = t.left - o.left + f), "using"in t ? t.using.call(e, u) : i.css(u)
    }}, x.fn.extend({position: function () {
        if (this[0]) {
            var e, t, n = {top: 0, left: 0}, r = this[0];
            return"fixed" === x.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), x.nodeName(e[0], "html") || (n = e.offset()), n.top += x.css(e[0], "borderTopWidth", !0), n.left += x.css(e[0], "borderLeftWidth", !0)), {top: t.top - n.top - x.css(r, "marginTop", !0), left: t.left - n.left - x.css(r, "marginLeft", !0)}
        }
    }, offsetParent: function () {
        return this.map(function () {
            var e = this.offsetParent || s;
            while (e && !x.nodeName(e, "html") && "static" === x.css(e, "position"))e = e.offsetParent;
            return e || s
        })
    }}), x.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, n) {
        var r = /Y/.test(n);
        x.fn[e] = function (i) {
            return x.access(this, function (e, i, o) {
                var a = or(e);
                return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? x(a).scrollLeft() : o, r ? o : x(a).scrollTop()) : e[i] = o, t)
            }, e, i, arguments.length, null)
        }
    });
    function or(e) {
        return x.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }

    x.each({Height: "height", Width: "width"}, function (e, n) {
        x.each({padding: "inner" + e, content: n, "": "outer" + e}, function (r, i) {
            x.fn[i] = function (i, o) {
                var a = arguments.length && (r || "boolean" != typeof i), s = r || (i === !0 || o === !0 ? "margin" : "border");
                return x.access(this, function (n, r, i) {
                    var o;
                    return x.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? x.css(n, r, s) : x.style(n, r, i, s)
                }, n, a ? i : t, a, null)
            }
        })
    }), x.fn.size = function () {
        return this.length
    }, x.fn.andSelf = x.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = x : (e.jQuery = e.$ = x, "function" == typeof define && define.amd && define("jquery", [], function () {
        return x
    }))
})(window);

/*!
 * Modernizr v2.6.3
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */

/*
 * Modernizr tests which native CSS3 and HTML5 features are available in
 * the current UA and makes the results available to you in two ways:
 * as properties on a global Modernizr object, and as classes on the
 * <html> element. This information allows you to progressively enhance
 * your pages with a granular level of control over the experience.
 *
 * Modernizr has an optional (not included) conditional resource loader
 * called Modernizr.load(), based on Yepnope.js (yepnopejs.com).
 * To get a build that includes Modernizr.load(), as well as choosing
 * which tests to include, go to www.modernizr.com/download/
 *
 * Authors        Faruk Ates, Paul Irish, Alex Sexton
 * Contributors   Ryan Seddon, Ben Alman
 */

window.Modernizr = (function (window, document, undefined) {

    var version = '2.6.3',

        Modernizr = {},

    /*>>cssclasses*/
    // option for enabling the HTML classes to be added
        enableClasses = true,
    /*>>cssclasses*/

        docElement = document.documentElement,

        /**
         * Create our "modernizr" element that we do most feature tests on.
         */
            mod = 'modernizr',
        modElem = document.createElement(mod),
        mStyle = modElem.style,

        /**
         * Create the input element for various Web Forms feature tests.
         */
            inputElem /*>>inputelem*/ = document.createElement('input') /*>>inputelem*/ ,

    /*>>smile*/
        smile = ':)',
    /*>>smile*/

        toString = {}.toString,

    // TODO :: make the prefixes more granular
    /*>>prefixes*/
    // List of property values to set for css tests. See ticket #21
        prefixes = ' -webkit- -moz- -o- -ms- '.split(' '),
    /*>>prefixes*/

    /*>>domprefixes*/
    // Following spec is to expose vendor-specific style properties as:
    //   elem.style.WebkitBorderRadius
    // and the following would be incorrect:
    //   elem.style.webkitBorderRadius

    // Webkit ghosts their properties in lowercase but Opera & Moz do not.
    // Microsoft uses a lowercase `ms` instead of the correct `Ms` in IE8+
    //   erik.eae.net/archives/2008/03/10/21.48.10/

    // More here: github.com/Modernizr/Modernizr/issues/issue/21
        omPrefixes = 'Webkit Moz O ms',

        cssomPrefixes = omPrefixes.split(' '),

        domPrefixes = omPrefixes.toLowerCase().split(' '),
    /*>>domprefixes*/

    /*>>ns*/
        ns = {'svg': 'http://www.w3.org/2000/svg'},
    /*>>ns*/

        tests = {},
        inputs = {},
        attrs = {},

        classes = [],

        slice = classes.slice,

        featureName, // used in testing loop


    /*>>teststyles*/
    // Inject element with style element and some CSS rules
        injectElementWithStyles = function (rule, callback, nodes, testnames) {

            var style, ret, node, docOverflow,
                div = document.createElement('div'),
            // After page load injecting a fake body doesn't work so check if body exists
                body = document.body,
            // IE6 and 7 won't return offsetWidth or offsetHeight unless it's in the body element, so we fake it.
                fakeBody = body || document.createElement('body');

            if (parseInt(nodes, 10)) {
                // In order not to give false positives we create a node for each test
                // This also allows the method to scale for unspecified uses
                while (nodes--) {
                    node = document.createElement('div');
                    node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
                    div.appendChild(node);
                }
            }

            // <style> elements in IE6-9 are considered 'NoScope' elements and therefore will be removed
            // when injected with innerHTML. To get around this you need to prepend the 'NoScope' element
            // with a 'scoped' element, in our case the soft-hyphen entity as it won't mess with our measurements.
            // msdn.microsoft.com/en-us/library/ms533897%28VS.85%29.aspx
            // Documents served as xml will throw if using &shy; so use xml friendly encoded version. See issue #277
            style = ['&#173;', '<style id="s', mod, '">', rule, '</style>'].join('');
            div.id = mod;
            // IE6 will false positive on some tests due to the style element inside the test div somehow interfering offsetHeight, so insert it into body or fakebody.
            // Opera will act all quirky when injecting elements in documentElement when page is served as xml, needs fakebody too. #270
            (body ? div : fakeBody).innerHTML += style;
            fakeBody.appendChild(div);
            if (!body) {
                //avoid crashing IE8, if background image is used
                fakeBody.style.background = '';
                //Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible
                fakeBody.style.overflow = 'hidden';
                docOverflow = docElement.style.overflow;
                docElement.style.overflow = 'hidden';
                docElement.appendChild(fakeBody);
            }

            ret = callback(div, rule);
            // If this is done after page load we don't want to remove the body so check if body exists
            if (!body) {
                fakeBody.parentNode.removeChild(fakeBody);
                docElement.style.overflow = docOverflow;
            } else {
                div.parentNode.removeChild(div);
            }

            return !!ret;

        },
    /*>>teststyles*/

    /*>>mq*/
    // adapted from matchMedia polyfill
    // by Scott Jehl and Paul Irish
    // gist.github.com/786768
        testMediaQuery = function (mq) {

            var matchMedia = window.matchMedia || window.msMatchMedia;
            if (matchMedia) {
                return matchMedia(mq).matches;
            }

            var bool;

            injectElementWithStyles('@media ' + mq + ' { #' + mod + ' { position: absolute; } }', function (node) {
                bool = (window.getComputedStyle ?
                    getComputedStyle(node, null) :
                    node.currentStyle)['position'] == 'absolute';
            });

            return bool;

        },
    /*>>mq*/


    /*>>hasevent*/
    //
    // isEventSupported determines if a given element supports the given event
    // kangax.github.com/iseventsupported/
    //
    // The following results are known incorrects:
    //   Modernizr.hasEvent("webkitTransitionEnd", elem) // false negative
    //   Modernizr.hasEvent("textInput") // in Webkit. github.com/Modernizr/Modernizr/issues/333
    //   ...
        isEventSupported = (function () {

            var TAGNAMES = {
                'select': 'input', 'change': 'input',
                'submit': 'form', 'reset': 'form',
                'error': 'img', 'load': 'img', 'abort': 'img'
            };

            function isEventSupported(eventName, element) {

                element = element || document.createElement(TAGNAMES[eventName] || 'div');
                eventName = 'on' + eventName;

                // When using `setAttribute`, IE skips "unload", WebKit skips "unload" and "resize", whereas `in` "catches" those
                var isSupported = eventName in element;

                if (!isSupported) {
                    // If it has no `setAttribute` (i.e. doesn't implement Node interface), try generic element
                    if (!element.setAttribute) {
                        element = document.createElement('div');
                    }
                    if (element.setAttribute && element.removeAttribute) {
                        element.setAttribute(eventName, '');
                        isSupported = is(element[eventName], 'function');

                        // If property was created, "remove it" (by setting value to `undefined`)
                        if (!is(element[eventName], 'undefined')) {
                            element[eventName] = undefined;
                        }
                        element.removeAttribute(eventName);
                    }
                }

                element = null;
                return isSupported;
            }

            return isEventSupported;
        })(),
    /*>>hasevent*/

    // TODO :: Add flag for hasownprop ? didn't last time

    // hasOwnProperty shim by kangax needed for Safari 2.0 support
        _hasOwnProperty = ({}).hasOwnProperty, hasOwnProp;

    if (!is(_hasOwnProperty, 'undefined') && !is(_hasOwnProperty.call, 'undefined')) {
        hasOwnProp = function (object, property) {
            return _hasOwnProperty.call(object, property);
        };
    }
    else {
        hasOwnProp = function (object, property) { /* yes, this can give false positives/negatives, but most of the time we don't care about those */
            return ((property in object) && is(object.constructor.prototype[property], 'undefined'));
        };
    }

    // Adapted from ES5-shim https://github.com/kriskowal/es5-shim/blob/master/es5-shim.js
    // es5.github.com/#x15.3.4.5

    if (!Function.prototype.bind) {
        Function.prototype.bind = function bind(that) {

            var target = this;

            if (typeof target != "function") {
                throw new TypeError();
            }

            var args = slice.call(arguments, 1),
                bound = function () {

                    if (this instanceof bound) {

                        var F = function () {
                        };
                        F.prototype = target.prototype;
                        var self = new F();

                        var result = target.apply(
                            self,
                            args.concat(slice.call(arguments))
                        );
                        if (Object(result) === result) {
                            return result;
                        }
                        return self;

                    } else {

                        return target.apply(
                            that,
                            args.concat(slice.call(arguments))
                        );

                    }

                };

            return bound;
        };
    }

    /**
     * setCss applies given styles to the Modernizr DOM node.
     */
    function setCss(str) {
        mStyle.cssText = str;
    }

    /**
     * setCssAll extrapolates all vendor-specific css strings.
     */
    function setCssAll(str1, str2) {
        return setCss(prefixes.join(str1 + ';') + ( str2 || '' ));
    }

    /**
     * is returns a boolean for if typeof obj is exactly type.
     */
    function is(obj, type) {
        return typeof obj === type;
    }

    /**
     * contains returns a boolean for if substr is found within str.
     */
    function contains(str, substr) {
        return !!~('' + str).indexOf(substr);
    }

    /*>>testprop*/

    // testProps is a generic CSS / DOM property test.

    // In testing support for a given CSS property, it's legit to test:
    //    `elem.style[styleName] !== undefined`
    // If the property is supported it will return an empty string,
    // if unsupported it will return undefined.

    // We'll take advantage of this quick test and skip setting a style
    // on our modernizr element, but instead just testing undefined vs
    // empty string.

    // Because the testing of the CSS property names (with "-", as
    // opposed to the camelCase DOM properties) is non-portable and
    // non-standard but works in WebKit and IE (but not Gecko or Opera),
    // we explicitly reject properties with dashes so that authors
    // developing in WebKit or IE first don't end up with
    // browser-specific content by accident.

    function testProps(props, prefixed) {
        for (var i in props) {
            var prop = props[i];
            if (!contains(prop, "-") && mStyle[prop] !== undefined) {
                return prefixed == 'pfx' ? prop : true;
            }
        }
        return false;
    }

    /*>>testprop*/

    // TODO :: add testDOMProps
    /**
     * testDOMProps is a generic DOM property test; if a browser supports
     *   a certain property, it won't return undefined for it.
     */
    function testDOMProps(props, obj, elem) {
        for (var i in props) {
            var item = obj[props[i]];
            if (item !== undefined) {

                // return the property name as a string
                if (elem === false) return props[i];

                // let's bind a function
                if (is(item, 'function')) {
                    // default to autobind unless override
                    return item.bind(elem || obj);
                }

                // return the unbound function or obj or value
                return item;
            }
        }
        return false;
    }

    /*>>testallprops*/
    /**
     * testPropsAll tests a list of DOM properties we want to check against.
     *   We specify literally ALL possible (known and/or likely) properties on
     *   the element including the non-vendor prefixed one, for forward-
     *   compatibility.
     */
    function testPropsAll(prop, prefixed, elem) {

        var ucProp = prop.charAt(0).toUpperCase() + prop.slice(1),
            props = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' ');

        // did they call .prefixed('boxSizing') or are we just testing a prop?
        if (is(prefixed, "string") || is(prefixed, "undefined")) {
            return testProps(props, prefixed);

            // otherwise, they called .prefixed('requestAnimationFrame', window[, elem])
        } else {
            props = (prop + ' ' + (domPrefixes).join(ucProp + ' ') + ucProp).split(' ');
            return testDOMProps(props, prefixed, elem);
        }
    }

    /*>>testallprops*/


    /**
     * Tests
     * -----
     */

        // The *new* flexbox
        // dev.w3.org/csswg/css3-flexbox

    tests['flexbox'] = function () {
        return testPropsAll('flexWrap');
    };

    // The *old* flexbox
    // www.w3.org/TR/2009/WD-css3-flexbox-20090723/

    tests['flexboxlegacy'] = function () {
        return testPropsAll('boxDirection');
    };

    // On the S60 and BB Storm, getContext exists, but always returns undefined
    // so we actually have to call getContext() to verify
    // github.com/Modernizr/Modernizr/issues/issue/97/

    tests['canvas'] = function () {
        var elem = document.createElement('canvas');
        return !!(elem.getContext && elem.getContext('2d'));
    };

    tests['canvastext'] = function () {
        return !!(Modernizr['canvas'] && is(document.createElement('canvas').getContext('2d').fillText, 'function'));
    };

    // webk.it/70117 is tracking a legit WebGL feature detect proposal

    // We do a soft detect which may false positive in order to avoid
    // an expensive context creation: bugzil.la/732441

    tests['webgl'] = function () {
        return !!window.WebGLRenderingContext;
    };

    /*
     * The Modernizr.touch test only indicates if the browser supports
     *    touch events, which does not necessarily reflect a touchscreen
     *    device, as evidenced by tablets running Windows 7 or, alas,
     *    the Palm Pre / WebOS (touch) phones.
     *
     * Additionally, Chrome (desktop) used to lie about its support on this,
     *    but that has since been rectified: crbug.com/36415
     *
     * We also test for Firefox 4 Multitouch Support.
     *
     * For more info, see: modernizr.github.com/Modernizr/touch.html
     */

    tests['touch'] = function () {
        var bool;

        if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
            bool = true;
        } else {
            injectElementWithStyles(['@media (', prefixes.join('touch-enabled),('), mod, ')', '{#modernizr{top:9px;position:absolute}}'].join(''), function (node) {
                bool = node.offsetTop === 9;
            });
        }

        return bool;
    };


    // geolocation is often considered a trivial feature detect...
    // Turns out, it's quite tricky to get right:
    //
    // Using !!navigator.geolocation does two things we don't want. It:
    //   1. Leaks memory in IE9: github.com/Modernizr/Modernizr/issues/513
    //   2. Disables page caching in WebKit: webk.it/43956
    //
    // Meanwhile, in Firefox < 8, an about:config setting could expose
    // a false positive that would throw an exception: bugzil.la/688158

    tests['geolocation'] = function () {
        return 'geolocation' in navigator;
    };


    tests['postmessage'] = function () {
        return !!window.postMessage;
    };


    // Chrome incognito mode used to throw an exception when using openDatabase
    // It doesn't anymore.
    tests['websqldatabase'] = function () {
        return !!window.openDatabase;
    };

    // Vendors had inconsistent prefixing with the experimental Indexed DB:
    // - Webkit's implementation is accessible through webkitIndexedDB
    // - Firefox shipped moz_indexedDB before FF4b9, but since then has been mozIndexedDB
    // For speed, we don't test the legacy (and beta-only) indexedDB
    tests['indexedDB'] = function () {
        return !!testPropsAll("indexedDB", window);
    };

    // documentMode logic from YUI to filter out IE8 Compat Mode
    //   which false positives.
    tests['hashchange'] = function () {
        return isEventSupported('hashchange', window) && (document.documentMode === undefined || document.documentMode > 7);
    };

    // Per 1.6:
    // This used to be Modernizr.historymanagement but the longer
    // name has been deprecated in favor of a shorter and property-matching one.
    // The old API is still available in 1.6, but as of 2.0 will throw a warning,
    // and in the first release thereafter disappear entirely.
    tests['history'] = function () {
        return !!(window.history && history.pushState);
    };

    tests['draganddrop'] = function () {
        var div = document.createElement('div');
        return ('draggable' in div) || ('ondragstart' in div && 'ondrop' in div);
    };

    // FF3.6 was EOL'ed on 4/24/12, but the ESR version of FF10
    // will be supported until FF19 (2/12/13), at which time, ESR becomes FF17.
    // FF10 still uses prefixes, so check for it until then.
    // for more ESR info, see: mozilla.org/en-US/firefox/organizations/faq/
    tests['websockets'] = function () {
        return 'WebSocket' in window || 'MozWebSocket' in window;
    };


    // css-tricks.com/rgba-browser-support/
    tests['rgba'] = function () {
        // Set an rgba() color and check the returned value

        setCss('background-color:rgba(150,255,150,.5)');

        return contains(mStyle.backgroundColor, 'rgba');
    };

    tests['hsla'] = function () {
        // Same as rgba(), in fact, browsers re-map hsla() to rgba() internally,
        //   except IE9 who retains it as hsla

        setCss('background-color:hsla(120,40%,100%,.5)');

        return contains(mStyle.backgroundColor, 'rgba') || contains(mStyle.backgroundColor, 'hsla');
    };

    tests['multiplebgs'] = function () {
        // Setting multiple images AND a color on the background shorthand property
        //  and then querying the style.background property value for the number of
        //  occurrences of "url(" is a reliable method for detecting ACTUAL support for this!

        setCss('background:url(https://),url(https://),red url(https://)');

        // If the UA supports multiple backgrounds, there should be three occurrences
        //   of the string "url(" in the return value for elemStyle.background

        return (/(url\s*\(.*?){3}/).test(mStyle.background);
    };


    // this will false positive in Opera Mini
    //   github.com/Modernizr/Modernizr/issues/396

    tests['backgroundsize'] = function () {
        return testPropsAll('backgroundSize');
    };

    tests['borderimage'] = function () {
        return testPropsAll('borderImage');
    };


    // Super comprehensive table about all the unique implementations of
    // border-radius: muddledramblings.com/table-of-css3-border-radius-compliance

    tests['borderradius'] = function () {
        return testPropsAll('borderRadius');
    };

    // WebOS unfortunately false positives on this test.
    tests['boxshadow'] = function () {
        return testPropsAll('boxShadow');
    };

    // FF3.0 will false positive on this test
    tests['textshadow'] = function () {
        return document.createElement('div').style.textShadow === '';
    };


    tests['opacity'] = function () {
        // Browsers that actually have CSS Opacity implemented have done so
        //  according to spec, which means their return values are within the
        //  range of [0.0,1.0] - including the leading zero.

        setCssAll('opacity:.55');

        // The non-literal . in this regex is intentional:
        //   German Chrome returns this value as 0,55
        // github.com/Modernizr/Modernizr/issues/#issue/59/comment/516632
        return (/^0.55$/).test(mStyle.opacity);
    };


    // Note, Android < 4 will pass this test, but can only animate
    //   a single property at a time
    //   daneden.me/2011/12/putting-up-with-androids-bullshit/
    tests['cssanimations'] = function () {
        return testPropsAll('animationName');
    };


    tests['csscolumns'] = function () {
        return testPropsAll('columnCount');
    };


    tests['cssgradients'] = function () {
        /**
         * For CSS Gradients syntax, please see:
         * webkit.org/blog/175/introducing-css-gradients/
         * developer.mozilla.org/en/CSS/-moz-linear-gradient
         * developer.mozilla.org/en/CSS/-moz-radial-gradient
         * dev.w3.org/csswg/css3-images/#gradients-
         */

        var str1 = 'background-image:',
            str2 = 'gradient(linear,left top,right bottom,from(#9f9),to(white));',
            str3 = 'linear-gradient(left top,#9f9, white);';

        setCss(
            // legacy webkit syntax (FIXME: remove when syntax not in use anymore)
            (str1 + '-webkit- '.split(' ').join(str2 + str1) +
                // standard syntax             // trailing 'background-image:'
                prefixes.join(str3 + str1)).slice(0, -str1.length)
        );

        return contains(mStyle.backgroundImage, 'gradient');
    };


    tests['cssreflections'] = function () {
        return testPropsAll('boxReflect');
    };


    tests['csstransforms'] = function () {
        return !!testPropsAll('transform');
    };


    tests['csstransforms3d'] = function () {

        var ret = !!testPropsAll('perspective');

        // Webkit's 3D transforms are passed off to the browser's own graphics renderer.
        //   It works fine in Safari on Leopard and Snow Leopard, but not in Chrome in
        //   some conditions. As a result, Webkit typically recognizes the syntax but
        //   will sometimes throw a false positive, thus we must do a more thorough check:
        if (ret && 'webkitPerspective' in docElement.style) {

            // Webkit allows this media query to succeed only if the feature is enabled.
            // `@media (transform-3d),(-webkit-transform-3d){ ... }`
            injectElementWithStyles('@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}', function (node, rule) {
                ret = node.offsetLeft === 9 && node.offsetHeight === 3;
            });
        }
        return ret;
    };


    tests['csstransitions'] = function () {
        return testPropsAll('transition');
    };


    /*>>fontface*/
    // @font-face detection routine by Diego Perini
    // javascript.nwbox.com/CSSSupport/

    // false positives:
    //   WebOS github.com/Modernizr/Modernizr/issues/342
    //   WP7   github.com/Modernizr/Modernizr/issues/538
    tests['fontface'] = function () {
        var bool;

        injectElementWithStyles('@font-face {font-family:"font";src:url("https://")}', function (node, rule) {
            var style = document.getElementById('smodernizr'),
                sheet = style.sheet || style.styleSheet,
                cssText = sheet ? (sheet.cssRules && sheet.cssRules[0] ? sheet.cssRules[0].cssText : sheet.cssText || '') : '';

            bool = /src/i.test(cssText) && cssText.indexOf(rule.split(' ')[0]) === 0;
        });

        return bool;
    };
    /*>>fontface*/

    // CSS generated content detection
    tests['generatedcontent'] = function () {
        var bool;

        injectElementWithStyles(['#', mod, '{font:0/0 a}#', mod, ':after{content:"', smile, '";visibility:hidden;font:3px/1 a}'].join(''), function (node) {
            bool = node.offsetHeight >= 3;
        });

        return bool;
    };


    // These tests evaluate support of the video/audio elements, as well as
    // testing what types of content they support.
    //
    // We're using the Boolean constructor here, so that we can extend the value
    // e.g.  Modernizr.video     // true
    //       Modernizr.video.ogg // 'probably'
    //
    // Codec values from : github.com/NielsLeenheer/html5test/blob/9106a8/index.html#L845
    //                     thx to NielsLeenheer and zcorpan

    // Note: in some older browsers, "no" was a return value instead of empty string.
    //   It was live in FF3.5.0 and 3.5.1, but fixed in 3.5.2
    //   It was also live in Safari 4.0.0 - 4.0.4, but fixed in 4.0.5

    tests['video'] = function () {
        var elem = document.createElement('video'),
            bool = false;

        // IE9 Running on Windows Server SKU can cause an exception to be thrown, bug #224
        try {
            if (bool = !!elem.canPlayType) {
                bool = new Boolean(bool);
                bool.ogg = elem.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, '');

                // Without QuickTime, this value will be `undefined`. github.com/Modernizr/Modernizr/issues/546
                bool.h264 = elem.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, '');

                bool.webm = elem.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, '');
            }

        } catch (e) {
        }

        return bool;
    };

    tests['audio'] = function () {
        var elem = document.createElement('audio'),
            bool = false;

        try {
            if (bool = !!elem.canPlayType) {
                bool = new Boolean(bool);
                bool.ogg = elem.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, '');
                bool.mp3 = elem.canPlayType('audio/mpeg;').replace(/^no$/, '');

                // Mimetypes accepted:
                //   developer.mozilla.org/En/Media_formats_supported_by_the_audio_and_video_elements
                //   bit.ly/iphoneoscodecs
                bool.wav = elem.canPlayType('audio/wav; codecs="1"').replace(/^no$/, '');
                bool.m4a = ( elem.canPlayType('audio/x-m4a;') ||
                    elem.canPlayType('audio/aac;')).replace(/^no$/, '');
            }
        } catch (e) {
        }

        return bool;
    };


    // In FF4, if disabled, window.localStorage should === null.

    // Normally, we could not test that directly and need to do a
    //   `('localStorage' in window) && ` test first because otherwise Firefox will
    //   throw bugzil.la/365772 if cookies are disabled

    // Also in iOS5 Private Browsing mode, attempting to use localStorage.setItem
    // will throw the exception:
    //   QUOTA_EXCEEDED_ERRROR DOM Exception 22.
    // Peculiarly, getItem and removeItem calls do not throw.

    // Because we are forced to try/catch this, we'll go aggressive.

    // Just FWIW: IE8 Compat mode supports these features completely:
    //   www.quirksmode.org/dom/html5.html
    // But IE8 doesn't support either with local files

    tests['localstorage'] = function () {
        try {
            localStorage.setItem(mod, mod);
            localStorage.removeItem(mod);
            return true;
        } catch (e) {
            return false;
        }
    };

    tests['sessionstorage'] = function () {
        try {
            sessionStorage.setItem(mod, mod);
            sessionStorage.removeItem(mod);
            return true;
        } catch (e) {
            return false;
        }
    };


    tests['webworkers'] = function () {
        return !!window.Worker;
    };


    tests['applicationcache'] = function () {
        return !!window.applicationCache;
    };


    // Thanks to Erik Dahlstrom
    tests['svg'] = function () {
        return !!document.createElementNS && !!document.createElementNS(ns.svg, 'svg').createSVGRect;
    };

    // specifically for SVG inline in HTML, not within XHTML
    // test page: paulirish.com/demo/inline-svg
    tests['inlinesvg'] = function () {
        var div = document.createElement('div');
        div.innerHTML = '<svg/>';
        return (div.firstChild && div.firstChild.namespaceURI) == ns.svg;
    };

    // SVG SMIL animation
    tests['smil'] = function () {
        return !!document.createElementNS && /SVGAnimate/.test(toString.call(document.createElementNS(ns.svg, 'animate')));
    };

    // This test is only for clip paths in SVG proper, not clip paths on HTML content
    // demo: srufaculty.sru.edu/david.dailey/svg/newstuff/clipPath4.svg

    // However read the comments to dig into applying SVG clippaths to HTML content here:
    //   github.com/Modernizr/Modernizr/issues/213#issuecomment-1149491
    tests['svgclippaths'] = function () {
        return !!document.createElementNS && /SVGClipPath/.test(toString.call(document.createElementNS(ns.svg, 'clipPath')));
    };

    /*>>webforms*/
    // input features and input types go directly onto the ret object, bypassing the tests loop.
    // Hold this guy to execute in a moment.
    function webforms() {
        /*>>input*/
        // Run through HTML5's new input attributes to see if the UA understands any.
        // We're using f which is the <input> element created early on
        // Mike Taylr has created a comprehensive resource for testing these attributes
        //   when applied to all input types:
        //   miketaylr.com/code/input-type-attr.html
        // spec: www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#input-type-attr-summary

        // Only input placeholder is tested while textarea's placeholder is not.
        // Currently Safari 4 and Opera 11 have support only for the input placeholder
        // Both tests are available in feature-detects/forms-placeholder.js
        Modernizr['input'] = (function (props) {
            for (var i = 0, len = props.length; i < len; i++) {
                attrs[ props[i] ] = !!(props[i] in inputElem);
            }
            if (attrs.list) {
                // safari false positive's on datalist: webk.it/74252
                // see also github.com/Modernizr/Modernizr/issues/146
                attrs.list = !!(document.createElement('datalist') && window.HTMLDataListElement);
            }
            return attrs;
        })('autocomplete autofocus list placeholder max min multiple pattern required step'.split(' '));
        /*>>input*/

        /*>>inputtypes*/
        // Run through HTML5's new input types to see if the UA understands any.
        //   This is put behind the tests runloop because it doesn't return a
        //   true/false like all the other tests; instead, it returns an object
        //   containing each input type with its corresponding true/false value

        // Big thanks to @miketaylr for the html5 forms expertise. miketaylr.com/
        Modernizr['inputtypes'] = (function (props) {

            for (var i = 0, bool, inputElemType, defaultView, len = props.length; i < len; i++) {

                inputElem.setAttribute('type', inputElemType = props[i]);
                bool = inputElem.type !== 'text';

                // We first check to see if the type we give it sticks..
                // If the type does, we feed it a textual value, which shouldn't be valid.
                // If the value doesn't stick, we know there's input sanitization which infers a custom UI
                if (bool) {

                    inputElem.value = smile;
                    inputElem.style.cssText = 'position:absolute;visibility:hidden;';

                    if (/^range$/.test(inputElemType) && inputElem.style.WebkitAppearance !== undefined) {

                        docElement.appendChild(inputElem);
                        defaultView = document.defaultView;

                        // Safari 2-4 allows the smiley as a value, despite making a slider
                        bool = defaultView.getComputedStyle &&
                            defaultView.getComputedStyle(inputElem, null).WebkitAppearance !== 'textfield' &&
                            // Mobile android web browser has false positive, so must
                            // check the height to see if the widget is actually there.
                            (inputElem.offsetHeight !== 0);

                        docElement.removeChild(inputElem);

                    } else if (/^(search|tel)$/.test(inputElemType)) {
                        // Spec doesn't define any special parsing or detectable UI
                        //   behaviors so we pass these through as true

                        // Interestingly, opera fails the earlier test, so it doesn't
                        //  even make it here.

                    } else if (/^(url|email)$/.test(inputElemType)) {
                        // Real url and email support comes with prebaked validation.
                        bool = inputElem.checkValidity && inputElem.checkValidity() === false;

                    } else {
                        // If the upgraded input compontent rejects the :) text, we got a winner
                        bool = inputElem.value != smile;
                    }
                }

                inputs[ props[i] ] = !!bool;
            }
            return inputs;
        })('search tel url email datetime date month week time datetime-local number range color'.split(' '));
        /*>>inputtypes*/
    }

    /*>>webforms*/


    // End of test definitions
    // -----------------------


    // Run through all tests and detect their support in the current UA.
    // todo: hypothetically we could be doing an array of tests and use a basic loop here.
    for (var feature in tests) {
        if (hasOwnProp(tests, feature)) {
            // run the test, throw the return value into the Modernizr,
            //   then based on that boolean, define an appropriate className
            //   and push it into an array of classes we'll join later.
            featureName = feature.toLowerCase();
            Modernizr[featureName] = tests[feature]();

            classes.push((Modernizr[featureName] ? '' : 'no-') + featureName);
        }
    }

    /*>>webforms*/
    // input tests need to run.
    Modernizr.input || webforms();
    /*>>webforms*/


    /**
     * addTest allows the user to define their own feature tests
     * the result will be added onto the Modernizr object,
     * as well as an appropriate className set on the html element
     *
     * @param feature - String naming the feature
     * @param test - Function returning true if feature is supported, false if not
     */
    Modernizr.addTest = function (feature, test) {
        if (typeof feature == 'object') {
            for (var key in feature) {
                if (hasOwnProp(feature, key)) {
                    Modernizr.addTest(key, feature[ key ]);
                }
            }
        } else {

            feature = feature.toLowerCase();

            if (Modernizr[feature] !== undefined) {
                // we're going to quit if you're trying to overwrite an existing test
                // if we were to allow it, we'd do this:
                //   var re = new RegExp("\\b(no-)?" + feature + "\\b");
                //   docElement.className = docElement.className.replace( re, '' );
                // but, no rly, stuff 'em.
                return Modernizr;
            }

            test = typeof test == 'function' ? test() : test;

            if (typeof enableClasses !== "undefined" && enableClasses) {
                docElement.className += ' ' + (test ? '' : 'no-') + feature;
            }
            Modernizr[feature] = test;

        }

        return Modernizr; // allow chaining.
    };


    // Reset modElem.cssText to nothing to reduce memory footprint.
    setCss('');
    modElem = inputElem = null;

    /*>>shiv*/
    /*! HTML5 Shiv v3.6.1 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed */
    ;
    (function (window, document) {
        /*jshint evil:true */
        /** Preset options */
        var options = window.html5 || {};

        /** Used to skip problem elements */
        var reSkip = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;

        /** Not all elements can be cloned in IE **/
        var saveClones = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;

        /** Detect whether the browser supports default html5 styles */
        var supportsHtml5Styles;

        /** Name of the expando, to work with multiple documents or to re-shiv one document */
        var expando = '_html5shiv';

        /** The id for the the documents expando */
        var expanID = 0;

        /** Cached data for each document */
        var expandoData = {};

        /** Detect whether the browser supports unknown elements */
        var supportsUnknownElements;

        (function () {
            try {
                var a = document.createElement('a');
                a.innerHTML = '<xyz></xyz>';
                //if the hidden property is implemented we can assume, that the browser supports basic HTML5 Styles
                supportsHtml5Styles = ('hidden' in a);

                supportsUnknownElements = a.childNodes.length == 1 || (function () {
                    // assign a false positive if unable to shiv
                    (document.createElement)('a');
                    var frag = document.createDocumentFragment();
                    return (
                        typeof frag.cloneNode == 'undefined' ||
                            typeof frag.createDocumentFragment == 'undefined' ||
                            typeof frag.createElement == 'undefined'
                        );
                }());
            } catch (e) {
                supportsHtml5Styles = true;
                supportsUnknownElements = true;
            }

        }());

        /*--------------------------------------------------------------------------*/

        /**
         * Creates a style sheet with the given CSS text and adds it to the document.
         * @private
         * @param {Document} ownerDocument The document.
         * @param {String} cssText The CSS text.
         * @returns {StyleSheet} The style element.
         */
        function addStyleSheet(ownerDocument, cssText) {
            var p = ownerDocument.createElement('p'),
                parent = ownerDocument.getElementsByTagName('head')[0] || ownerDocument.documentElement;

            p.innerHTML = 'x<style>' + cssText + '</style>';
            return parent.insertBefore(p.lastChild, parent.firstChild);
        }

        /**
         * Returns the value of `html5.elements` as an array.
         * @private
         * @returns {Array} An array of shived element node names.
         */
        function getElements() {
            var elements = html5.elements;
            return typeof elements == 'string' ? elements.split(' ') : elements;
        }

        /**
         * Returns the data associated to the given document
         * @private
         * @param {Document} ownerDocument The document.
         * @returns {Object} An object of data.
         */
        function getExpandoData(ownerDocument) {
            var data = expandoData[ownerDocument[expando]];
            if (!data) {
                data = {};
                expanID++;
                ownerDocument[expando] = expanID;
                expandoData[expanID] = data;
            }
            return data;
        }

        /**
         * returns a shived element for the given nodeName and document
         * @memberOf html5
         * @param {String} nodeName name of the element
         * @param {Document} ownerDocument The context document.
         * @returns {Object} The shived element.
         */
        function createElement(nodeName, ownerDocument, data) {
            if (!ownerDocument) {
                ownerDocument = document;
            }
            if (supportsUnknownElements) {
                return ownerDocument.createElement(nodeName);
            }
            if (!data) {
                data = getExpandoData(ownerDocument);
            }
            var node;

            if (data.cache[nodeName]) {
                node = data.cache[nodeName].cloneNode();
            } else if (saveClones.test(nodeName)) {
                node = (data.cache[nodeName] = data.createElem(nodeName)).cloneNode();
            } else {
                node = data.createElem(nodeName);
            }

            // Avoid adding some elements to fragments in IE < 9 because
            // * Attributes like `name` or `type` cannot be set/changed once an element
            //   is inserted into a document/fragment
            // * Link elements with `src` attributes that are inaccessible, as with
            //   a 403 response, will cause the tab/window to crash
            // * Script elements appended to fragments will execute when their `src`
            //   or `text` property is set
            return node.canHaveChildren && !reSkip.test(nodeName) ? data.frag.appendChild(node) : node;
        }

        /**
         * returns a shived DocumentFragment for the given document
         * @memberOf html5
         * @param {Document} ownerDocument The context document.
         * @returns {Object} The shived DocumentFragment.
         */
        function createDocumentFragment(ownerDocument, data) {
            if (!ownerDocument) {
                ownerDocument = document;
            }
            if (supportsUnknownElements) {
                return ownerDocument.createDocumentFragment();
            }
            data = data || getExpandoData(ownerDocument);
            var clone = data.frag.cloneNode(),
                i = 0,
                elems = getElements(),
                l = elems.length;
            for (; i < l; i++) {
                clone.createElement(elems[i]);
            }
            return clone;
        }

        /**
         * Shivs the `createElement` and `createDocumentFragment` methods of the document.
         * @private
         * @param {Document|DocumentFragment} ownerDocument The document.
         * @param {Object} data of the document.
         */
        function shivMethods(ownerDocument, data) {
            if (!data.cache) {
                data.cache = {};
                data.createElem = ownerDocument.createElement;
                data.createFrag = ownerDocument.createDocumentFragment;
                data.frag = data.createFrag();
            }


            ownerDocument.createElement = function (nodeName) {
                //abort shiv
                if (!html5.shivMethods) {
                    return data.createElem(nodeName);
                }
                return createElement(nodeName, ownerDocument, data);
            };

            ownerDocument.createDocumentFragment = Function('h,f', 'return function(){' +
                'var n=f.cloneNode(),c=n.createElement;' +
                'h.shivMethods&&(' +
                // unroll the `createElement` calls
                getElements().join().replace(/\w+/g, function (nodeName) {
                    data.createElem(nodeName);
                    data.frag.createElement(nodeName);
                    return 'c("' + nodeName + '")';
                }) +
                ');return n}'
            )(html5, data.frag);
        }

        /*--------------------------------------------------------------------------*/

        /**
         * Shivs the given document.
         * @memberOf html5
         * @param {Document} ownerDocument The document to shiv.
         * @returns {Document} The shived document.
         */
        function shivDocument(ownerDocument) {
            if (!ownerDocument) {
                ownerDocument = document;
            }
            var data = getExpandoData(ownerDocument);

            if (html5.shivCSS && !supportsHtml5Styles && !data.hasCSS) {
                data.hasCSS = !!addStyleSheet(ownerDocument,
                    // corrects block display not defined in IE6/7/8/9
                    'article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}' +
                        // adds styling not present in IE6/7/8/9
                        'mark{background:#FF0;color:#000}'
                );
            }
            if (!supportsUnknownElements) {
                shivMethods(ownerDocument, data);
            }
            return ownerDocument;
        }

        /*--------------------------------------------------------------------------*/

        /**
         * The `html5` object is exposed so that more elements can be shived and
         * existing shiving can be detected on iframes.
         * @type Object
         * @example
         *
         * // options can be changed before the script is included
         * html5 = { 'elements': 'mark section', 'shivCSS': false, 'shivMethods': false };
         */
        var html5 = {

            /**
             * An array or space separated string of node names of the elements to shiv.
             * @memberOf html5
             * @type Array|String
             */
            'elements': options.elements || 'abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video',

            /**
             * A flag to indicate that the HTML5 style sheet should be inserted.
             * @memberOf html5
             * @type Boolean
             */
            'shivCSS': (options.shivCSS !== false),

            /**
             * Is equal to true if a browser supports creating unknown/HTML5 elements
             * @memberOf html5
             * @type boolean
             */
            'supportsUnknownElements': supportsUnknownElements,

            /**
             * A flag to indicate that the document's `createElement` and `createDocumentFragment`
             * methods should be overwritten.
             * @memberOf html5
             * @type Boolean
             */
            'shivMethods': (options.shivMethods !== false),

            /**
             * A string to describe the type of `html5` object ("default" or "default print").
             * @memberOf html5
             * @type String
             */
            'type': 'default',

            // shivs the document according to the specified `html5` object options
            'shivDocument': shivDocument,

            //creates a shived element
            createElement: createElement,

            //creates a shived documentFragment
            createDocumentFragment: createDocumentFragment
        };

        /*--------------------------------------------------------------------------*/

        // expose html5
        window.html5 = html5;

        // shiv the document
        shivDocument(document);

    }(this, document));
    /*>>shiv*/

    // Assign private properties to the return object with prefix
    Modernizr._version = version;

    // expose these for the plugin API. Look in the source for how to join() them against your input
    /*>>prefixes*/
    Modernizr._prefixes = prefixes;
    /*>>prefixes*/
    /*>>domprefixes*/
    Modernizr._domPrefixes = domPrefixes;
    Modernizr._cssomPrefixes = cssomPrefixes;
    /*>>domprefixes*/

    /*>>mq*/
    // Modernizr.mq tests a given media query, live against the current state of the window
    // A few important notes:
    //   * If a browser does not support media queries at all (eg. oldIE) the mq() will always return false
    //   * A max-width or orientation query will be evaluated against the current state, which may change later.
    //   * You must specify values. Eg. If you are testing support for the min-width media query use:
    //       Modernizr.mq('(min-width:0)')
    // usage:
    // Modernizr.mq('only screen and (max-width:768)')
    Modernizr.mq = testMediaQuery;
    /*>>mq*/

    /*>>hasevent*/
    // Modernizr.hasEvent() detects support for a given event, with an optional element to test on
    // Modernizr.hasEvent('gesturestart', elem)
    Modernizr.hasEvent = isEventSupported;
    /*>>hasevent*/

    /*>>testprop*/
    // Modernizr.testProp() investigates whether a given style property is recognized
    // Note that the property names must be provided in the camelCase variant.
    // Modernizr.testProp('pointerEvents')
    Modernizr.testProp = function (prop) {
        return testProps([prop]);
    };
    /*>>testprop*/

    /*>>testallprops*/
    // Modernizr.testAllProps() investigates whether a given style property,
    //   or any of its vendor-prefixed variants, is recognized
    // Note that the property names must be provided in the camelCase variant.
    // Modernizr.testAllProps('boxSizing')
    Modernizr.testAllProps = testPropsAll;
    /*>>testallprops*/


    /*>>teststyles*/
    // Modernizr.testStyles() allows you to add custom styles to the document and test an element afterwards
    // Modernizr.testStyles('#modernizr { position:absolute }', function(elem, rule){ ... })
    Modernizr.testStyles = injectElementWithStyles;
    /*>>teststyles*/


    /*>>prefixed*/
    // Modernizr.prefixed() returns the prefixed or nonprefixed property name variant of your input
    // Modernizr.prefixed('boxSizing') // 'MozBoxSizing'

    // Properties must be passed as dom-style camelcase, rather than `box-sizing` hypentated style.
    // Return values will also be the camelCase variant, if you need to translate that to hypenated style use:
    //
    //     str.replace(/([A-Z])/g, function(str,m1){ return '-' + m1.toLowerCase(); }).replace(/^ms-/,'-ms-');

    // If you're trying to ascertain which transition end event to bind to, you might do something like...
    //
    //     var transEndEventNames = {
    //       'WebkitTransition' : 'webkitTransitionEnd',
    //       'MozTransition'    : 'transitionend',
    //       'OTransition'      : 'oTransitionEnd',
    //       'msTransition'     : 'MSTransitionEnd',
    //       'transition'       : 'transitionend'
    //     },
    //     transEndEventName = transEndEventNames[ Modernizr.prefixed('transition') ];

    Modernizr.prefixed = function (prop, obj, elem) {
        if (!obj) {
            return testPropsAll(prop, 'pfx');
        } else {
            // Testing DOM property e.g. Modernizr.prefixed('requestAnimationFrame', window) // 'mozRequestAnimationFrame'
            return testPropsAll(prop, obj, elem);
        }
    };
    /*>>prefixed*/


    /*>>cssclasses*/
    // Remove "no-js" class from <html> element, if it exists:
    docElement.className = docElement.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') +

        // Add the new classes to the <html> element.
        (enableClasses ? ' js ' + classes.join(' ') : '');
    /*>>cssclasses*/

    return Modernizr;

})(this, this.document);

/**
 * @preserve HTML5 Shiv 3.7.2 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
 */
;
(function (window, document) {
    /*jshint evil:true */
    /** version */
    var version = '3.7.2';

    /** Preset options */
    var options = window.html5 || {};

    /** Used to skip problem elements */
    var reSkip = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;

    /** Not all elements can be cloned in IE **/
    var saveClones = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;

    /** Detect whether the browser supports default html5 styles */
    var supportsHtml5Styles;

    /** Name of the expando, to work with multiple documents or to re-shiv one document */
    var expando = '_html5shiv';

    /** The id for the the documents expando */
    var expanID = 0;

    /** Cached data for each document */
    var expandoData = {};

    /** Detect whether the browser supports unknown elements */
    var supportsUnknownElements;

    (function () {
        try {
            var a = document.createElement('a');
            a.innerHTML = '<xyz></xyz>';
            //if the hidden property is implemented we can assume, that the browser supports basic HTML5 Styles
            supportsHtml5Styles = ('hidden' in a);

            supportsUnknownElements = a.childNodes.length == 1 || (function () {
                // assign a false positive if unable to shiv
                (document.createElement)('a');
                var frag = document.createDocumentFragment();
                return (
                    typeof frag.cloneNode == 'undefined' ||
                        typeof frag.createDocumentFragment == 'undefined' ||
                        typeof frag.createElement == 'undefined'
                    );
            }());
        } catch (e) {
            // assign a false positive if detection fails => unable to shiv
            supportsHtml5Styles = true;
            supportsUnknownElements = true;
        }

    }());

    /*--------------------------------------------------------------------------*/

    /**
     * Creates a style sheet with the given CSS text and adds it to the document.
     * @private
     * @param {Document} ownerDocument The document.
     * @param {String} cssText The CSS text.
     * @returns {StyleSheet} The style element.
     */
    function addStyleSheet(ownerDocument, cssText) {
        var p = ownerDocument.createElement('p'),
            parent = ownerDocument.getElementsByTagName('head')[0] || ownerDocument.documentElement;

        p.innerHTML = 'x<style>' + cssText + '</style>';
        return parent.insertBefore(p.lastChild, parent.firstChild);
    }

    /**
     * Returns the value of `html5.elements` as an array.
     * @private
     * @returns {Array} An array of shived element node names.
     */
    function getElements() {
        var elements = html5.elements;
        return typeof elements == 'string' ? elements.split(' ') : elements;
    }

    /**
     * Extends the built-in list of html5 elements
     * @memberOf html5
     * @param {String|Array} newElements whitespace separated list or array of new element names to shiv
     * @param {Document} ownerDocument The context document.
     */
    function addElements(newElements, ownerDocument) {
        var elements = html5.elements;
        if (typeof elements != 'string') {
            elements = elements.join(' ');
        }
        if (typeof newElements != 'string') {
            newElements = newElements.join(' ');
        }
        html5.elements = elements + ' ' + newElements;
        shivDocument(ownerDocument);
    }

    /**
     * Returns the data associated to the given document
     * @private
     * @param {Document} ownerDocument The document.
     * @returns {Object} An object of data.
     */
    function getExpandoData(ownerDocument) {
        var data = expandoData[ownerDocument[expando]];
        if (!data) {
            data = {};
            expanID++;
            ownerDocument[expando] = expanID;
            expandoData[expanID] = data;
        }
        return data;
    }

    /**
     * returns a shived element for the given nodeName and document
     * @memberOf html5
     * @param {String} nodeName name of the element
     * @param {Document} ownerDocument The context document.
     * @returns {Object} The shived element.
     */
    function createElement(nodeName, ownerDocument, data) {
        if (!ownerDocument) {
            ownerDocument = document;
        }
        if (supportsUnknownElements) {
            return ownerDocument.createElement(nodeName);
        }
        if (!data) {
            data = getExpandoData(ownerDocument);
        }
        var node;

        if (data.cache[nodeName]) {
            node = data.cache[nodeName].cloneNode();
        } else if (saveClones.test(nodeName)) {
            node = (data.cache[nodeName] = data.createElem(nodeName)).cloneNode();
        } else {
            node = data.createElem(nodeName);
        }

        // Avoid adding some elements to fragments in IE < 9 because
        // * Attributes like `name` or `type` cannot be set/changed once an element
        //   is inserted into a document/fragment
        // * Link elements with `src` attributes that are inaccessible, as with
        //   a 403 response, will cause the tab/window to crash
        // * Script elements appended to fragments will execute when their `src`
        //   or `text` property is set
        return node.canHaveChildren && !reSkip.test(nodeName) && !node.tagUrn ? data.frag.appendChild(node) : node;
    }

    /**
     * returns a shived DocumentFragment for the given document
     * @memberOf html5
     * @param {Document} ownerDocument The context document.
     * @returns {Object} The shived DocumentFragment.
     */
    function createDocumentFragment(ownerDocument, data) {
        if (!ownerDocument) {
            ownerDocument = document;
        }
        if (supportsUnknownElements) {
            return ownerDocument.createDocumentFragment();
        }
        data = data || getExpandoData(ownerDocument);
        var clone = data.frag.cloneNode(),
            i = 0,
            elems = getElements(),
            l = elems.length;
        for (; i < l; i++) {
            clone.createElement(elems[i]);
        }
        return clone;
    }

    /**
     * Shivs the `createElement` and `createDocumentFragment` methods of the document.
     * @private
     * @param {Document|DocumentFragment} ownerDocument The document.
     * @param {Object} data of the document.
     */
    function shivMethods(ownerDocument, data) {
        if (!data.cache) {
            data.cache = {};
            data.createElem = ownerDocument.createElement;
            data.createFrag = ownerDocument.createDocumentFragment;
            data.frag = data.createFrag();
        }


        ownerDocument.createElement = function (nodeName) {
            //abort shiv
            if (!html5.shivMethods) {
                return data.createElem(nodeName);
            }
            return createElement(nodeName, ownerDocument, data);
        };

        ownerDocument.createDocumentFragment = Function('h,f', 'return function(){' +
            'var n=f.cloneNode(),c=n.createElement;' +
            'h.shivMethods&&(' +
            // unroll the `createElement` calls
            getElements().join().replace(/[\w\-:]+/g, function (nodeName) {
                data.createElem(nodeName);
                data.frag.createElement(nodeName);
                return 'c("' + nodeName + '")';
            }) +
            ');return n}'
        )(html5, data.frag);
    }

    /*--------------------------------------------------------------------------*/

    /**
     * Shivs the given document.
     * @memberOf html5
     * @param {Document} ownerDocument The document to shiv.
     * @returns {Document} The shived document.
     */
    function shivDocument(ownerDocument) {
        if (!ownerDocument) {
            ownerDocument = document;
        }
        var data = getExpandoData(ownerDocument);

        if (html5.shivCSS && !supportsHtml5Styles && !data.hasCSS) {
            data.hasCSS = !!addStyleSheet(ownerDocument,
                // corrects block display not defined in IE6/7/8/9
                'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}' +
                    // adds styling not present in IE6/7/8/9
                    'mark{background:#FF0;color:#000}' +
                    // hides non-rendered elements
                    'template{display:none}'
            );
        }
        if (!supportsUnknownElements) {
            shivMethods(ownerDocument, data);
        }
        return ownerDocument;
    }

    /*--------------------------------------------------------------------------*/

    /**
     * The `html5` object is exposed so that more elements can be shived and
     * existing shiving can be detected on iframes.
     * @type Object
     * @example
     *
     * // options can be changed before the script is included
     * html5 = { 'elements': 'mark section', 'shivCSS': false, 'shivMethods': false };
     */
    var html5 = {

        /**
         * An array or space separated string of node names of the elements to shiv.
         * @memberOf html5
         * @type Array|String
         */
        'elements': options.elements || 'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video',

        /**
         * current version of html5shiv
         */
        'version': version,

        /**
         * A flag to indicate that the HTML5 style sheet should be inserted.
         * @memberOf html5
         * @type Boolean
         */
        'shivCSS': (options.shivCSS !== false),

        /**
         * Is equal to true if a browser supports creating unknown/HTML5 elements
         * @memberOf html5
         * @type boolean
         */
        'supportsUnknownElements': supportsUnknownElements,

        /**
         * A flag to indicate that the document's `createElement` and `createDocumentFragment`
         * methods should be overwritten.
         * @memberOf html5
         * @type Boolean
         */
        'shivMethods': (options.shivMethods !== false),

        /**
         * A string to describe the type of `html5` object ("default" or "default print").
         * @memberOf html5
         * @type String
         */
        'type': 'default',

        // shivs the document according to the specified `html5` object options
        'shivDocument': shivDocument,

        //creates a shived element
        createElement: createElement,

        //creates a shived documentFragment
        createDocumentFragment: createDocumentFragment,

        //extends list of elements
        addElements: addElements
    };

    /*--------------------------------------------------------------------------*/

    // expose html5
    window.html5 = html5;

    // shiv the document
    shivDocument(document);

}(this, document));

/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */

/*global define: false*/

(function (root, factory) {
    if (typeof exports === "object" && exports) {
        factory(exports); // CommonJS
    } else {
        var mustache = {};
        factory(mustache);
        if (typeof define === "function" && define.amd) {
            define(mustache); // AMD
        } else {
            root.Mustache = mustache; // <script>
        }
    }
}(this, function (mustache) {

    // Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
    // See https://github.com/janl/mustache.js/issues/189
    var RegExp_test = RegExp.prototype.test;

    function testRegExp(re, string) {
        return RegExp_test.call(re, string);
    }

    var nonSpaceRe = /\S/;

    function isWhitespace(string) {
        return !testRegExp(nonSpaceRe, string);
    }

    var Object_toString = Object.prototype.toString;
    var isArray = Array.isArray || function (object) {
        return Object_toString.call(object) === '[object Array]';
    };

    function isFunction(object) {
        return typeof object === 'function';
    }

    function escapeRegExp(string) {
        return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
    }

    var entityMap = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': '&quot;',
        "'": '&#39;',
        "/": '&#x2F;'
    };

    function escapeHtml(string) {
        return String(string).replace(/[&<>"'\/]/g, function (s) {
            return entityMap[s];
        });
    }

    function escapeTags(tags) {
        if (!isArray(tags) || tags.length !== 2) {
            throw new Error('Invalid tags: ' + tags);
        }

        return [
            new RegExp(escapeRegExp(tags[0]) + "\\s*"),
            new RegExp("\\s*" + escapeRegExp(tags[1]))
        ];
    }

    var whiteRe = /\s*/;
    var spaceRe = /\s+/;
    var equalsRe = /\s*=/;
    var curlyRe = /\s*\}/;
    var tagRe = /#|\^|\/|>|\{|&|=|!/;

    /**
     * Breaks up the given `template` string into a tree of tokens. If the `tags`
     * argument is given here it must be an array with two string values: the
     * opening and closing tags used in the template (e.g. [ "<%", "%>" ]). Of
     * course, the default is to use mustaches (i.e. mustache.tags).
     *
     * A token is an array with at least 4 elements. The first element is the
     * mustache symbol that was used inside the tag, e.g. "#" or "&". If the tag
     * did not contain a symbol (i.e. {{myValue}}) this element is "name". For
     * all text that appears outside a symbol this element is "text".
     *
     * The second element of a token is its "value". For mustache tags this is
     * whatever else was inside the tag besides the opening symbol. For text tokens
     * this is the text itself.
     *
     * The third and fourth elements of the token are the start and end indices,
     * respectively, of the token in the original template.
     *
     * Tokens that are the root node of a subtree contain two more elements: 1) an
     * array of tokens in the subtree and 2) the index in the original template at
     * which the closing tag for that section begins.
     */
    function parseTemplate(template, tags) {
        tags = tags || mustache.tags;
        template = template || '';

        if (typeof tags === 'string') {
            tags = tags.split(spaceRe);
        }

        var tagRes = escapeTags(tags);
        var scanner = new Scanner(template);

        var sections = [];     // Stack to hold section tokens
        var tokens = [];       // Buffer to hold the tokens
        var spaces = [];       // Indices of whitespace tokens on the current line
        var hasTag = false;    // Is there a {{tag}} on the current line?
        var nonSpace = false;  // Is there a non-space char on the current line?

        // Strips all whitespace tokens array for the current line
        // if there was a {{#tag}} on it and otherwise only space.
        function stripSpace() {
            if (hasTag && !nonSpace) {
                while (spaces.length) {
                    delete tokens[spaces.pop()];
                }
            } else {
                spaces = [];
            }

            hasTag = false;
            nonSpace = false;
        }

        var start, type, value, chr, token, openSection;
        while (!scanner.eos()) {
            start = scanner.pos;

            // Match any text between tags.
            value = scanner.scanUntil(tagRes[0]);
            if (value) {
                for (var i = 0, len = value.length; i < len; ++i) {
                    chr = value.charAt(i);

                    if (isWhitespace(chr)) {
                        spaces.push(tokens.length);
                    } else {
                        nonSpace = true;
                    }

                    tokens.push(['text', chr, start, start + 1]);
                    start += 1;

                    // Check for whitespace on the current line.
                    if (chr === '\n') {
                        stripSpace();
                    }
                }
            }

            // Match the opening tag.
            if (!scanner.scan(tagRes[0])) break;
            hasTag = true;

            // Get the tag type.
            type = scanner.scan(tagRe) || 'name';
            scanner.scan(whiteRe);

            // Get the tag value.
            if (type === '=') {
                value = scanner.scanUntil(equalsRe);
                scanner.scan(equalsRe);
                scanner.scanUntil(tagRes[1]);
            } else if (type === '{') {
                value = scanner.scanUntil(new RegExp('\\s*' + escapeRegExp('}' + tags[1])));
                scanner.scan(curlyRe);
                scanner.scanUntil(tagRes[1]);
                type = '&';
            } else {
                value = scanner.scanUntil(tagRes[1]);
            }

            // Match the closing tag.
            if (!scanner.scan(tagRes[1])) {
                throw new Error('Unclosed tag at ' + scanner.pos);
            }

            token = [ type, value, start, scanner.pos ];
            tokens.push(token);

            if (type === '#' || type === '^') {
                sections.push(token);
            } else if (type === '/') {
                // Check section nesting.
                openSection = sections.pop();

                if (!openSection) {
                    throw new Error('Unopened section "' + value + '" at ' + start);
                }
                if (openSection[1] !== value) {
                    throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
                }
            } else if (type === 'name' || type === '{' || type === '&') {
                nonSpace = true;
            } else if (type === '=') {
                // Set the tags for the next time around.
                tagRes = escapeTags(tags = value.split(spaceRe));
            }
        }

        // Make sure there are no open sections when we're done.
        openSection = sections.pop();
        if (openSection) {
            throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);
        }

        return nestTokens(squashTokens(tokens));
    }

    /**
     * Combines the values of consecutive text tokens in the given `tokens` array
     * to a single token.
     */
    function squashTokens(tokens) {
        var squashedTokens = [];

        var token, lastToken;
        for (var i = 0, len = tokens.length; i < len; ++i) {
            token = tokens[i];

            if (token) {
                if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
                    lastToken[1] += token[1];
                    lastToken[3] = token[3];
                } else {
                    squashedTokens.push(token);
                    lastToken = token;
                }
            }
        }

        return squashedTokens;
    }

    /**
     * Forms the given array of `tokens` into a nested tree structure where
     * tokens that represent a section have two additional items: 1) an array of
     * all tokens that appear in that section and 2) the index in the original
     * template that represents the end of that section.
     */
    function nestTokens(tokens) {
        var nestedTokens = [];
        var collector = nestedTokens;
        var sections = [];

        var token, section;
        for (var i = 0, len = tokens.length; i < len; ++i) {
            token = tokens[i];

            switch (token[0]) {
                case '#':
                case '^':
                    collector.push(token);
                    sections.push(token);
                    collector = token[4] = [];
                    break;
                case '/':
                    section = sections.pop();
                    section[5] = token[2];
                    collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
                    break;
                default:
                    collector.push(token);
            }
        }

        return nestedTokens;
    }

    /**
     * A simple string scanner that is used by the template parser to find
     * tokens in template strings.
     */
    function Scanner(string) {
        this.string = string;
        this.tail = string;
        this.pos = 0;
    }

    /**
     * Returns `true` if the tail is empty (end of string).
     */
    Scanner.prototype.eos = function () {
        return this.tail === "";
    };

    /**
     * Tries to match the given regular expression at the current position.
     * Returns the matched text if it can match, the empty string otherwise.
     */
    Scanner.prototype.scan = function (re) {
        var match = this.tail.match(re);

        if (match && match.index === 0) {
            var string = match[0];
            this.tail = this.tail.substring(string.length);
            this.pos += string.length;
            return string;
        }

        return "";
    };

    /**
     * Skips all text until the given regular expression can be matched. Returns
     * the skipped string, which is the entire tail if no match can be made.
     */
    Scanner.prototype.scanUntil = function (re) {
        var index = this.tail.search(re), match;

        switch (index) {
            case -1:
                match = this.tail;
                this.tail = "";
                break;
            case 0:
                match = "";
                break;
            default:
                match = this.tail.substring(0, index);
                this.tail = this.tail.substring(index);
        }

        this.pos += match.length;

        return match;
    };

    /**
     * Represents a rendering context by wrapping a view object and
     * maintaining a reference to the parent context.
     */
    function Context(view, parentContext) {
        this.view = view == null ? {} : view;
        this.cache = { '.': this.view };
        this.parent = parentContext;
    }

    /**
     * Creates a new context using the given view with this context
     * as the parent.
     */
    Context.prototype.push = function (view) {
        return new Context(view, this);
    };

    /**
     * Returns the value of the given name in this context, traversing
     * up the context hierarchy if the value is absent in this context's view.
     */
    Context.prototype.lookup = function (name) {
        var value;
        if (name in this.cache) {
            value = this.cache[name];
        } else {
            var context = this;

            while (context) {
                if (name.indexOf('.') > 0) {
                    value = context.view;

                    var names = name.split('.'), i = 0;
                    while (value != null && i < names.length) {
                        value = value[names[i++]];
                    }
                } else {
                    value = context.view[name];
                }

                if (value != null) break;

                context = context.parent;
            }

            this.cache[name] = value;
        }

        if (isFunction(value)) {
            value = value.call(this.view);
        }

        return value;
    };

    /**
     * A Writer knows how to take a stream of tokens and render them to a
     * string, given a context. It also maintains a cache of templates to
     * avoid the need to parse the same template twice.
     */
    function Writer() {
        this.cache = {};
    }

    /**
     * Clears all cached templates in this writer.
     */
    Writer.prototype.clearCache = function () {
        this.cache = {};
    };

    /**
     * Parses and caches the given `template` and returns the array of tokens
     * that is generated from the parse.
     */
    Writer.prototype.parse = function (template, tags) {
        var cache = this.cache;
        var tokens = cache[template];

        if (tokens == null) {
            tokens = cache[template] = parseTemplate(template, tags);
        }

        return tokens;
    };

    /**
     * High-level method that is used to render the given `template` with
     * the given `view`.
     *
     * The optional `partials` argument may be an object that contains the
     * names and templates of partials that are used in the template. It may
     * also be a function that is used to load partial templates on the fly
     * that takes a single argument: the name of the partial.
     */
    Writer.prototype.render = function (template, view, partials) {
        var tokens = this.parse(template);
        var context = (view instanceof Context) ? view : new Context(view);
        return this.renderTokens(tokens, context, partials, template);
    };

    /**
     * Low-level method that renders the given array of `tokens` using
     * the given `context` and `partials`.
     *
     * Note: The `originalTemplate` is only ever used to extract the portion
     * of the original template that was contained in a higher-order section.
     * If the template doesn't use higher-order sections, this argument may
     * be omitted.
     */
    Writer.prototype.renderTokens = function (tokens, context, partials, originalTemplate) {
        var buffer = '';

        // This function is used to render an arbitrary template
        // in the current context by higher-order sections.
        var self = this;

        function subRender(template) {
            return self.render(template, context, partials);
        }

        var token, value;
        for (var i = 0, len = tokens.length; i < len; ++i) {
            token = tokens[i];

            switch (token[0]) {
                case '#':
                    value = context.lookup(token[1]);
                    if (!value) continue;

                    if (isArray(value)) {
                        for (var j = 0, jlen = value.length; j < jlen; ++j) {
                            buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate);
                        }
                    } else if (typeof value === 'object' || typeof value === 'string') {
                        buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate);
                    } else if (isFunction(value)) {
                        if (typeof originalTemplate !== 'string') {
                            throw new Error('Cannot use higher-order sections without the original template');
                        }

                        // Extract the portion of the original template that the section contains.
                        value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);

                        if (value != null) buffer += value;
                    } else {
                        buffer += this.renderTokens(token[4], context, partials, originalTemplate);
                    }

                    break;
                case '^':
                    value = context.lookup(token[1]);

                    // Use JavaScript's definition of falsy. Include empty arrays.
                    // See https://github.com/janl/mustache.js/issues/186
                    if (!value || (isArray(value) && value.length === 0)) {
                        buffer += this.renderTokens(token[4], context, partials, originalTemplate);
                    }

                    break;
                case '>':
                    if (!partials) continue;
                    value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
                    if (value != null) buffer += this.renderTokens(this.parse(value), context, partials, value);
                    break;
                case '&':
                    value = context.lookup(token[1]);
                    if (value != null) buffer += value;
                    break;
                case 'name':
                    value = context.lookup(token[1]);
                    if (value != null) buffer += mustache.escape(value);
                    break;
                case 'text':
                    buffer += token[1];
                    break;
            }
        }

        return buffer;
    };

    mustache.name = "mustache.js";
    mustache.version = "0.8.1";
    mustache.tags = [ "{{", "}}" ];

    // All high-level mustache.* functions use this writer.
    var defaultWriter = new Writer();

    /**
     * Clears all cached templates in the default writer.
     */
    mustache.clearCache = function () {
        return defaultWriter.clearCache();
    };

    /**
     * Parses and caches the given template in the default writer and returns the
     * array of tokens it contains. Doing this ahead of time avoids the need to
     * parse templates on the fly as they are rendered.
     */
    mustache.parse = function (template, tags) {
        return defaultWriter.parse(template, tags);
    };

    /**
     * Renders the `template` with the given `view` and `partials` using the
     * default writer.
     */
    mustache.render = function (template, view, partials) {
        return defaultWriter.render(template, view, partials);
    };

    // This is here for backwards compatibility with 0.4.x.
    mustache.to_html = function (template, view, partials, send) {
        var result = mustache.render(template, view, partials);

        if (isFunction(send)) {
            send(result);
        } else {
            return result;
        }
    };

    // Export the escaping function so that the user may override it.
    // See https://github.com/janl/mustache.js/issues/244
    mustache.escape = escapeHtml;

    // Export these mainly for testing, but also for advanced usage.
    mustache.Scanner = Scanner;
    mustache.Context = Context;
    mustache.Writer = Writer;

}));

//! moment.js
//! version : 2.7.0
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
(function (a) {
    function b(a, b, c) {
        switch (arguments.length) {
            case 2:
                return null != a ? a : b;
            case 3:
                return null != a ? a : null != b ? b : c;
            default:
                throw new Error("Implement me")
        }
    }

    function c() {
        return{empty: !1, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: !1, invalidMonth: null, invalidFormat: !1, userInvalidated: !1, iso: !1}
    }

    function d(a, b) {
        function c() {
            mb.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + a)
        }

        var d = !0;
        return j(function () {
            return d && (c(), d = !1), b.apply(this, arguments)
        }, b)
    }

    function e(a, b) {
        return function (c) {
            return m(a.call(this, c), b)
        }
    }

    function f(a, b) {
        return function (c) {
            return this.lang().ordinal(a.call(this, c), b)
        }
    }

    function g() {
    }

    function h(a) {
        z(a), j(this, a)
    }

    function i(a) {
        var b = s(a), c = b.year || 0, d = b.quarter || 0, e = b.month || 0, f = b.week || 0, g = b.day || 0, h = b.hour || 0, i = b.minute || 0, j = b.second || 0, k = b.millisecond || 0;
        this._milliseconds = +k + 1e3 * j + 6e4 * i + 36e5 * h, this._days = +g + 7 * f, this._months = +e + 3 * d + 12 * c, this._data = {}, this._bubble()
    }

    function j(a, b) {
        for (var c in b)b.hasOwnProperty(c) && (a[c] = b[c]);
        return b.hasOwnProperty("toString") && (a.toString = b.toString), b.hasOwnProperty("valueOf") && (a.valueOf = b.valueOf), a
    }

    function k(a) {
        var b, c = {};
        for (b in a)a.hasOwnProperty(b) && Ab.hasOwnProperty(b) && (c[b] = a[b]);
        return c
    }

    function l(a) {
        return 0 > a ? Math.ceil(a) : Math.floor(a)
    }

    function m(a, b, c) {
        for (var d = "" + Math.abs(a), e = a >= 0; d.length < b;)d = "0" + d;
        return(e ? c ? "+" : "" : "-") + d
    }

    function n(a, b, c, d) {
        var e = b._milliseconds, f = b._days, g = b._months;
        d = null == d ? !0 : d, e && a._d.setTime(+a._d + e * c), f && hb(a, "Date", gb(a, "Date") + f * c), g && fb(a, gb(a, "Month") + g * c), d && mb.updateOffset(a, f || g)
    }

    function o(a) {
        return"[object Array]" === Object.prototype.toString.call(a)
    }

    function p(a) {
        return"[object Date]" === Object.prototype.toString.call(a) || a instanceof Date
    }

    function q(a, b, c) {
        var d, e = Math.min(a.length, b.length), f = Math.abs(a.length - b.length), g = 0;
        for (d = 0; e > d; d++)(c && a[d] !== b[d] || !c && u(a[d]) !== u(b[d])) && g++;
        return g + f
    }

    function r(a) {
        if (a) {
            var b = a.toLowerCase().replace(/(.)s$/, "$1");
            a = bc[a] || cc[b] || b
        }
        return a
    }

    function s(a) {
        var b, c, d = {};
        for (c in a)a.hasOwnProperty(c) && (b = r(c), b && (d[b] = a[c]));
        return d
    }

    function t(b) {
        var c, d;
        if (0 === b.indexOf("week"))c = 7, d = "day"; else {
            if (0 !== b.indexOf("month"))return;
            c = 12, d = "month"
        }
        mb[b] = function (e, f) {
            var g, h, i = mb.fn._lang[b], j = [];
            if ("number" == typeof e && (f = e, e = a), h = function (a) {
                var b = mb().utc().set(d, a);
                return i.call(mb.fn._lang, b, e || "")
            }, null != f)return h(f);
            for (g = 0; c > g; g++)j.push(h(g));
            return j
        }
    }

    function u(a) {
        var b = +a, c = 0;
        return 0 !== b && isFinite(b) && (c = b >= 0 ? Math.floor(b) : Math.ceil(b)), c
    }

    function v(a, b) {
        return new Date(Date.UTC(a, b + 1, 0)).getUTCDate()
    }

    function w(a, b, c) {
        return bb(mb([a, 11, 31 + b - c]), b, c).week
    }

    function x(a) {
        return y(a) ? 366 : 365
    }

    function y(a) {
        return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
    }

    function z(a) {
        var b;
        a._a && -2 === a._pf.overflow && (b = a._a[tb] < 0 || a._a[tb] > 11 ? tb : a._a[ub] < 1 || a._a[ub] > v(a._a[sb], a._a[tb]) ? ub : a._a[vb] < 0 || a._a[vb] > 23 ? vb : a._a[wb] < 0 || a._a[wb] > 59 ? wb : a._a[xb] < 0 || a._a[xb] > 59 ? xb : a._a[yb] < 0 || a._a[yb] > 999 ? yb : -1, a._pf._overflowDayOfYear && (sb > b || b > ub) && (b = ub), a._pf.overflow = b)
    }

    function A(a) {
        return null == a._isValid && (a._isValid = !isNaN(a._d.getTime()) && a._pf.overflow < 0 && !a._pf.empty && !a._pf.invalidMonth && !a._pf.nullInput && !a._pf.invalidFormat && !a._pf.userInvalidated, a._strict && (a._isValid = a._isValid && 0 === a._pf.charsLeftOver && 0 === a._pf.unusedTokens.length)), a._isValid
    }

    function B(a) {
        return a ? a.toLowerCase().replace("_", "-") : a
    }

    function C(a, b) {
        return b._isUTC ? mb(a).zone(b._offset || 0) : mb(a).local()
    }

    function D(a, b) {
        return b.abbr = a, zb[a] || (zb[a] = new g), zb[a].set(b), zb[a]
    }

    function E(a) {
        delete zb[a]
    }

    function F(a) {
        var b, c, d, e, f = 0, g = function (a) {
            if (!zb[a] && Bb)try {
                require("./lang/" + a)
            } catch (b) {
            }
            return zb[a]
        };
        if (!a)return mb.fn._lang;
        if (!o(a)) {
            if (c = g(a))return c;
            a = [a]
        }
        for (; f < a.length;) {
            for (e = B(a[f]).split("-"), b = e.length, d = B(a[f + 1]), d = d ? d.split("-") : null; b > 0;) {
                if (c = g(e.slice(0, b).join("-")))return c;
                if (d && d.length >= b && q(e, d, !0) >= b - 1)break;
                b--
            }
            f++
        }
        return mb.fn._lang
    }

    function G(a) {
        return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "")
    }

    function H(a) {
        var b, c, d = a.match(Fb);
        for (b = 0, c = d.length; c > b; b++)d[b] = hc[d[b]] ? hc[d[b]] : G(d[b]);
        return function (e) {
            var f = "";
            for (b = 0; c > b; b++)f += d[b]instanceof Function ? d[b].call(e, a) : d[b];
            return f
        }
    }

    function I(a, b) {
        return a.isValid() ? (b = J(b, a.lang()), dc[b] || (dc[b] = H(b)), dc[b](a)) : a.lang().invalidDate()
    }

    function J(a, b) {
        function c(a) {
            return b.longDateFormat(a) || a
        }

        var d = 5;
        for (Gb.lastIndex = 0; d >= 0 && Gb.test(a);)a = a.replace(Gb, c), Gb.lastIndex = 0, d -= 1;
        return a
    }

    function K(a, b) {
        var c, d = b._strict;
        switch (a) {
            case"Q":
                return Rb;
            case"DDDD":
                return Tb;
            case"YYYY":
            case"GGGG":
            case"gggg":
                return d ? Ub : Jb;
            case"Y":
            case"G":
            case"g":
                return Wb;
            case"YYYYYY":
            case"YYYYY":
            case"GGGGG":
            case"ggggg":
                return d ? Vb : Kb;
            case"S":
                if (d)return Rb;
            case"SS":
                if (d)return Sb;
            case"SSS":
                if (d)return Tb;
            case"DDD":
                return Ib;
            case"MMM":
            case"MMMM":
            case"dd":
            case"ddd":
            case"dddd":
                return Mb;
            case"a":
            case"A":
                return F(b._l)._meridiemParse;
            case"X":
                return Pb;
            case"Z":
            case"ZZ":
                return Nb;
            case"T":
                return Ob;
            case"SSSS":
                return Lb;
            case"MM":
            case"DD":
            case"YY":
            case"GG":
            case"gg":
            case"HH":
            case"hh":
            case"mm":
            case"ss":
            case"ww":
            case"WW":
                return d ? Sb : Hb;
            case"M":
            case"D":
            case"d":
            case"H":
            case"h":
            case"m":
            case"s":
            case"w":
            case"W":
            case"e":
            case"E":
                return Hb;
            case"Do":
                return Qb;
            default:
                return c = new RegExp(T(S(a.replace("\\", "")), "i"))
        }
    }

    function L(a) {
        a = a || "";
        var b = a.match(Nb) || [], c = b[b.length - 1] || [], d = (c + "").match(_b) || ["-", 0, 0], e = +(60 * d[1]) + u(d[2]);
        return"+" === d[0] ? -e : e
    }

    function M(a, b, c) {
        var d, e = c._a;
        switch (a) {
            case"Q":
                null != b && (e[tb] = 3 * (u(b) - 1));
                break;
            case"M":
            case"MM":
                null != b && (e[tb] = u(b) - 1);
                break;
            case"MMM":
            case"MMMM":
                d = F(c._l).monthsParse(b), null != d ? e[tb] = d : c._pf.invalidMonth = b;
                break;
            case"D":
            case"DD":
                null != b && (e[ub] = u(b));
                break;
            case"Do":
                null != b && (e[ub] = u(parseInt(b, 10)));
                break;
            case"DDD":
            case"DDDD":
                null != b && (c._dayOfYear = u(b));
                break;
            case"YY":
                e[sb] = mb.parseTwoDigitYear(b);
                break;
            case"YYYY":
            case"YYYYY":
            case"YYYYYY":
                e[sb] = u(b);
                break;
            case"a":
            case"A":
                c._isPm = F(c._l).isPM(b);
                break;
            case"H":
            case"HH":
            case"h":
            case"hh":
                e[vb] = u(b);
                break;
            case"m":
            case"mm":
                e[wb] = u(b);
                break;
            case"s":
            case"ss":
                e[xb] = u(b);
                break;
            case"S":
            case"SS":
            case"SSS":
            case"SSSS":
                e[yb] = u(1e3 * ("0." + b));
                break;
            case"X":
                c._d = new Date(1e3 * parseFloat(b));
                break;
            case"Z":
            case"ZZ":
                c._useUTC = !0, c._tzm = L(b);
                break;
            case"dd":
            case"ddd":
            case"dddd":
                d = F(c._l).weekdaysParse(b), null != d ? (c._w = c._w || {}, c._w.d = d) : c._pf.invalidWeekday = b;
                break;
            case"w":
            case"ww":
            case"W":
            case"WW":
            case"d":
            case"e":
            case"E":
                a = a.substr(0, 1);
            case"gggg":
            case"GGGG":
            case"GGGGG":
                a = a.substr(0, 2), b && (c._w = c._w || {}, c._w[a] = u(b));
                break;
            case"gg":
            case"GG":
                c._w = c._w || {}, c._w[a] = mb.parseTwoDigitYear(b)
        }
    }

    function N(a) {
        var c, d, e, f, g, h, i, j;
        c = a._w, null != c.GG || null != c.W || null != c.E ? (g = 1, h = 4, d = b(c.GG, a._a[sb], bb(mb(), 1, 4).year), e = b(c.W, 1), f = b(c.E, 1)) : (j = F(a._l), g = j._week.dow, h = j._week.doy, d = b(c.gg, a._a[sb], bb(mb(), g, h).year), e = b(c.w, 1), null != c.d ? (f = c.d, g > f && ++e) : f = null != c.e ? c.e + g : g), i = cb(d, e, f, h, g), a._a[sb] = i.year, a._dayOfYear = i.dayOfYear
    }

    function O(a) {
        var c, d, e, f, g = [];
        if (!a._d) {
            for (e = Q(a), a._w && null == a._a[ub] && null == a._a[tb] && N(a), a._dayOfYear && (f = b(a._a[sb], e[sb]), a._dayOfYear > x(f) && (a._pf._overflowDayOfYear = !0), d = Z(f, 0, a._dayOfYear), a._a[tb] = d.getUTCMonth(), a._a[ub] = d.getUTCDate()), c = 0; 3 > c && null == a._a[c]; ++c)a._a[c] = g[c] = e[c];
            for (; 7 > c; c++)a._a[c] = g[c] = null == a._a[c] ? 2 === c ? 1 : 0 : a._a[c];
            a._d = (a._useUTC ? Z : Y).apply(null, g), null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() + a._tzm)
        }
    }

    function P(a) {
        var b;
        a._d || (b = s(a._i), a._a = [b.year, b.month, b.day, b.hour, b.minute, b.second, b.millisecond], O(a))
    }

    function Q(a) {
        var b = new Date;
        return a._useUTC ? [b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate()] : [b.getFullYear(), b.getMonth(), b.getDate()]
    }

    function R(a) {
        if (a._f === mb.ISO_8601)return void V(a);
        a._a = [], a._pf.empty = !0;
        var b, c, d, e, f, g = F(a._l), h = "" + a._i, i = h.length, j = 0;
        for (d = J(a._f, g).match(Fb) || [], b = 0; b < d.length; b++)e = d[b], c = (h.match(K(e, a)) || [])[0], c && (f = h.substr(0, h.indexOf(c)), f.length > 0 && a._pf.unusedInput.push(f), h = h.slice(h.indexOf(c) + c.length), j += c.length), hc[e] ? (c ? a._pf.empty = !1 : a._pf.unusedTokens.push(e), M(e, c, a)) : a._strict && !c && a._pf.unusedTokens.push(e);
        a._pf.charsLeftOver = i - j, h.length > 0 && a._pf.unusedInput.push(h), a._isPm && a._a[vb] < 12 && (a._a[vb] += 12), a._isPm === !1 && 12 === a._a[vb] && (a._a[vb] = 0), O(a), z(a)
    }

    function S(a) {
        return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (a, b, c, d, e) {
            return b || c || d || e
        })
    }

    function T(a) {
        return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }

    function U(a) {
        var b, d, e, f, g;
        if (0 === a._f.length)return a._pf.invalidFormat = !0, void(a._d = new Date(0 / 0));
        for (f = 0; f < a._f.length; f++)g = 0, b = j({}, a), b._pf = c(), b._f = a._f[f], R(b), A(b) && (g += b._pf.charsLeftOver, g += 10 * b._pf.unusedTokens.length, b._pf.score = g, (null == e || e > g) && (e = g, d = b));
        j(a, d || b)
    }

    function V(a) {
        var b, c, d = a._i, e = Xb.exec(d);
        if (e) {
            for (a._pf.iso = !0, b = 0, c = Zb.length; c > b; b++)if (Zb[b][1].exec(d)) {
                a._f = Zb[b][0] + (e[6] || " ");
                break
            }
            for (b = 0, c = $b.length; c > b; b++)if ($b[b][1].exec(d)) {
                a._f += $b[b][0];
                break
            }
            d.match(Nb) && (a._f += "Z"), R(a)
        } else a._isValid = !1
    }

    function W(a) {
        V(a), a._isValid === !1 && (delete a._isValid, mb.createFromInputFallback(a))
    }

    function X(b) {
        var c = b._i, d = Cb.exec(c);
        c === a ? b._d = new Date : d ? b._d = new Date(+d[1]) : "string" == typeof c ? W(b) : o(c) ? (b._a = c.slice(0), O(b)) : p(c) ? b._d = new Date(+c) : "object" == typeof c ? P(b) : "number" == typeof c ? b._d = new Date(c) : mb.createFromInputFallback(b)
    }

    function Y(a, b, c, d, e, f, g) {
        var h = new Date(a, b, c, d, e, f, g);
        return 1970 > a && h.setFullYear(a), h
    }

    function Z(a) {
        var b = new Date(Date.UTC.apply(null, arguments));
        return 1970 > a && b.setUTCFullYear(a), b
    }

    function $(a, b) {
        if ("string" == typeof a)if (isNaN(a)) {
            if (a = b.weekdaysParse(a), "number" != typeof a)return null
        } else a = parseInt(a, 10);
        return a
    }

    function _(a, b, c, d, e) {
        return e.relativeTime(b || 1, !!c, a, d)
    }

    function ab(a, b, c) {
        var d = rb(Math.abs(a) / 1e3), e = rb(d / 60), f = rb(e / 60), g = rb(f / 24), h = rb(g / 365), i = d < ec.s && ["s", d] || 1 === e && ["m"] || e < ec.m && ["mm", e] || 1 === f && ["h"] || f < ec.h && ["hh", f] || 1 === g && ["d"] || g <= ec.dd && ["dd", g] || g <= ec.dm && ["M"] || g < ec.dy && ["MM", rb(g / 30)] || 1 === h && ["y"] || ["yy", h];
        return i[2] = b, i[3] = a > 0, i[4] = c, _.apply({}, i)
    }

    function bb(a, b, c) {
        var d, e = c - b, f = c - a.day();
        return f > e && (f -= 7), e - 7 > f && (f += 7), d = mb(a).add("d", f), {week: Math.ceil(d.dayOfYear() / 7), year: d.year()}
    }

    function cb(a, b, c, d, e) {
        var f, g, h = Z(a, 0, 1).getUTCDay();
        return h = 0 === h ? 7 : h, c = null != c ? c : e, f = e - h + (h > d ? 7 : 0) - (e > h ? 7 : 0), g = 7 * (b - 1) + (c - e) + f + 1, {year: g > 0 ? a : a - 1, dayOfYear: g > 0 ? g : x(a - 1) + g}
    }

    function db(b) {
        var c = b._i, d = b._f;
        return null === c || d === a && "" === c ? mb.invalid({nullInput: !0}) : ("string" == typeof c && (b._i = c = F().preparse(c)), mb.isMoment(c) ? (b = k(c), b._d = new Date(+c._d)) : d ? o(d) ? U(b) : R(b) : X(b), new h(b))
    }

    function eb(a, b) {
        var c, d;
        if (1 === b.length && o(b[0]) && (b = b[0]), !b.length)return mb();
        for (c = b[0], d = 1; d < b.length; ++d)b[d][a](c) && (c = b[d]);
        return c
    }

    function fb(a, b) {
        var c;
        return"string" == typeof b && (b = a.lang().monthsParse(b), "number" != typeof b) ? a : (c = Math.min(a.date(), v(a.year(), b)), a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c), a)
    }

    function gb(a, b) {
        return a._d["get" + (a._isUTC ? "UTC" : "") + b]()
    }

    function hb(a, b, c) {
        return"Month" === b ? fb(a, c) : a._d["set" + (a._isUTC ? "UTC" : "") + b](c)
    }

    function ib(a, b) {
        return function (c) {
            return null != c ? (hb(this, a, c), mb.updateOffset(this, b), this) : gb(this, a)
        }
    }

    function jb(a) {
        mb.duration.fn[a] = function () {
            return this._data[a]
        }
    }

    function kb(a, b) {
        mb.duration.fn["as" + a] = function () {
            return+this / b
        }
    }

    function lb(a) {
        "undefined" == typeof ender && (nb = qb.moment, qb.moment = a ? d("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.", mb) : mb)
    }

    for (var mb, nb, ob, pb = "2.7.0", qb = "undefined" != typeof global ? global : this, rb = Math.round, sb = 0, tb = 1, ub = 2, vb = 3, wb = 4, xb = 5, yb = 6, zb = {}, Ab = {_isAMomentObject: null, _i: null, _f: null, _l: null, _strict: null, _tzm: null, _isUTC: null, _offset: null, _pf: null, _lang: null}, Bb = "undefined" != typeof module && module.exports, Cb = /^\/?Date\((\-?\d+)/i, Db = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, Eb = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, Fb = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g, Gb = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, Hb = /\d\d?/, Ib = /\d{1,3}/, Jb = /\d{1,4}/, Kb = /[+\-]?\d{1,6}/, Lb = /\d+/, Mb = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Nb = /Z|[\+\-]\d\d:?\d\d/gi, Ob = /T/i, Pb = /[\+\-]?\d+(\.\d{1,3})?/, Qb = /\d{1,2}/, Rb = /\d/, Sb = /\d\d/, Tb = /\d{3}/, Ub = /\d{4}/, Vb = /[+-]?\d{6}/, Wb = /[+-]?\d+/, Xb = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Yb = "YYYY-MM-DDTHH:mm:ssZ", Zb = [
        ["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/],
        ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/],
        ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/],
        ["GGGG-[W]WW", /\d{4}-W\d{2}/],
        ["YYYY-DDD", /\d{4}-\d{3}/]
    ], $b = [
        ["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/],
        ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
        ["HH:mm", /(T| )\d\d:\d\d/],
        ["HH", /(T| )\d\d/]
    ], _b = /([\+\-]|\d\d)/gi, ac = ("Date|Hours|Minutes|Seconds|Milliseconds".split("|"), {Milliseconds: 1, Seconds: 1e3, Minutes: 6e4, Hours: 36e5, Days: 864e5, Months: 2592e6, Years: 31536e6}), bc = {ms: "millisecond", s: "second", m: "minute", h: "hour", d: "day", D: "date", w: "week", W: "isoWeek", M: "month", Q: "quarter", y: "year", DDD: "dayOfYear", e: "weekday", E: "isoWeekday", gg: "weekYear", GG: "isoWeekYear"}, cc = {dayofyear: "dayOfYear", isoweekday: "isoWeekday", isoweek: "isoWeek", weekyear: "weekYear", isoweekyear: "isoWeekYear"}, dc = {}, ec = {s: 45, m: 45, h: 22, dd: 25, dm: 45, dy: 345}, fc = "DDD w W M D d".split(" "), gc = "M D H h m s w W".split(" "), hc = {M: function () {
        return this.month() + 1
    }, MMM: function (a) {
        return this.lang().monthsShort(this, a)
    }, MMMM: function (a) {
        return this.lang().months(this, a)
    }, D: function () {
        return this.date()
    }, DDD: function () {
        return this.dayOfYear()
    }, d: function () {
        return this.day()
    }, dd: function (a) {
        return this.lang().weekdaysMin(this, a)
    }, ddd: function (a) {
        return this.lang().weekdaysShort(this, a)
    }, dddd: function (a) {
        return this.lang().weekdays(this, a)
    }, w: function () {
        return this.week()
    }, W: function () {
        return this.isoWeek()
    }, YY: function () {
        return m(this.year() % 100, 2)
    }, YYYY: function () {
        return m(this.year(), 4)
    }, YYYYY: function () {
        return m(this.year(), 5)
    }, YYYYYY: function () {
        var a = this.year(), b = a >= 0 ? "+" : "-";
        return b + m(Math.abs(a), 6)
    }, gg: function () {
        return m(this.weekYear() % 100, 2)
    }, gggg: function () {
        return m(this.weekYear(), 4)
    }, ggggg: function () {
        return m(this.weekYear(), 5)
    }, GG: function () {
        return m(this.isoWeekYear() % 100, 2)
    }, GGGG: function () {
        return m(this.isoWeekYear(), 4)
    }, GGGGG: function () {
        return m(this.isoWeekYear(), 5)
    }, e: function () {
        return this.weekday()
    }, E: function () {
        return this.isoWeekday()
    }, a: function () {
        return this.lang().meridiem(this.hours(), this.minutes(), !0)
    }, A: function () {
        return this.lang().meridiem(this.hours(), this.minutes(), !1)
    }, H: function () {
        return this.hours()
    }, h: function () {
        return this.hours() % 12 || 12
    }, m: function () {
        return this.minutes()
    }, s: function () {
        return this.seconds()
    }, S: function () {
        return u(this.milliseconds() / 100)
    }, SS: function () {
        return m(u(this.milliseconds() / 10), 2)
    }, SSS: function () {
        return m(this.milliseconds(), 3)
    }, SSSS: function () {
        return m(this.milliseconds(), 3)
    }, Z: function () {
        var a = -this.zone(), b = "+";
        return 0 > a && (a = -a, b = "-"), b + m(u(a / 60), 2) + ":" + m(u(a) % 60, 2)
    }, ZZ: function () {
        var a = -this.zone(), b = "+";
        return 0 > a && (a = -a, b = "-"), b + m(u(a / 60), 2) + m(u(a) % 60, 2)
    }, z: function () {
        return this.zoneAbbr()
    }, zz: function () {
        return this.zoneName()
    }, X: function () {
        return this.unix()
    }, Q: function () {
        return this.quarter()
    }}, ic = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"]; fc.length;)ob = fc.pop(), hc[ob + "o"] = f(hc[ob], ob);
    for (; gc.length;)ob = gc.pop(), hc[ob + ob] = e(hc[ob], 2);
    for (hc.DDDD = e(hc.DDD, 3), j(g.prototype, {set: function (a) {
        var b, c;
        for (c in a)b = a[c], "function" == typeof b ? this[c] = b : this["_" + c] = b
    }, _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), months: function (a) {
        return this._months[a.month()]
    }, _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), monthsShort: function (a) {
        return this._monthsShort[a.month()]
    }, monthsParse: function (a) {
        var b, c, d;
        for (this._monthsParse || (this._monthsParse = []), b = 0; 12 > b; b++)if (this._monthsParse[b] || (c = mb.utc([2e3, b]), d = "^" + this.months(c, "") + "|^" + this.monthsShort(c, ""), this._monthsParse[b] = new RegExp(d.replace(".", ""), "i")), this._monthsParse[b].test(a))return b
    }, _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdays: function (a) {
        return this._weekdays[a.day()]
    }, _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysShort: function (a) {
        return this._weekdaysShort[a.day()]
    }, _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), weekdaysMin: function (a) {
        return this._weekdaysMin[a.day()]
    }, weekdaysParse: function (a) {
        var b, c, d;
        for (this._weekdaysParse || (this._weekdaysParse = []), b = 0; 7 > b; b++)if (this._weekdaysParse[b] || (c = mb([2e3, 1]).day(b), d = "^" + this.weekdays(c, "") + "|^" + this.weekdaysShort(c, "") + "|^" + this.weekdaysMin(c, ""), this._weekdaysParse[b] = new RegExp(d.replace(".", ""), "i")), this._weekdaysParse[b].test(a))return b
    }, _longDateFormat: {LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D YYYY", LLL: "MMMM D YYYY LT", LLLL: "dddd, MMMM D YYYY LT"}, longDateFormat: function (a) {
        var b = this._longDateFormat[a];
        return!b && this._longDateFormat[a.toUpperCase()] && (b = this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (a) {
            return a.slice(1)
        }), this._longDateFormat[a] = b), b
    }, isPM: function (a) {
        return"p" === (a + "").toLowerCase().charAt(0)
    }, _meridiemParse: /[ap]\.?m?\.?/i, meridiem: function (a, b, c) {
        return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM"
    }, _calendar: {sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L"}, calendar: function (a, b) {
        var c = this._calendar[a];
        return"function" == typeof c ? c.apply(b) : c
    }, _relativeTime: {future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years"}, relativeTime: function (a, b, c, d) {
        var e = this._relativeTime[c];
        return"function" == typeof e ? e(a, b, c, d) : e.replace(/%d/i, a)
    }, pastFuture: function (a, b) {
        var c = this._relativeTime[a > 0 ? "future" : "past"];
        return"function" == typeof c ? c(b) : c.replace(/%s/i, b)
    }, ordinal: function (a) {
        return this._ordinal.replace("%d", a)
    }, _ordinal: "%d", preparse: function (a) {
        return a
    }, postformat: function (a) {
        return a
    }, week: function (a) {
        return bb(a, this._week.dow, this._week.doy).week
    }, _week: {dow: 0, doy: 6}, _invalidDate: "Invalid date", invalidDate: function () {
        return this._invalidDate
    }}), mb = function (b, d, e, f) {
        var g;
        return"boolean" == typeof e && (f = e, e = a), g = {}, g._isAMomentObject = !0, g._i = b, g._f = d, g._l = e, g._strict = f, g._isUTC = !1, g._pf = c(), db(g)
    }, mb.suppressDeprecationWarnings = !1, mb.createFromInputFallback = d("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function (a) {
        a._d = new Date(a._i)
    }), mb.min = function () {
        var a = [].slice.call(arguments, 0);
        return eb("isBefore", a)
    }, mb.max = function () {
        var a = [].slice.call(arguments, 0);
        return eb("isAfter", a)
    }, mb.utc = function (b, d, e, f) {
        var g;
        return"boolean" == typeof e && (f = e, e = a), g = {}, g._isAMomentObject = !0, g._useUTC = !0, g._isUTC = !0, g._l = e, g._i = b, g._f = d, g._strict = f, g._pf = c(), db(g).utc()
    }, mb.unix = function (a) {
        return mb(1e3 * a)
    }, mb.duration = function (a, b) {
        var c, d, e, f = a, g = null;
        return mb.isDuration(a) ? f = {ms: a._milliseconds, d: a._days, M: a._months} : "number" == typeof a ? (f = {}, b ? f[b] = a : f.milliseconds = a) : (g = Db.exec(a)) ? (c = "-" === g[1] ? -1 : 1, f = {y: 0, d: u(g[ub]) * c, h: u(g[vb]) * c, m: u(g[wb]) * c, s: u(g[xb]) * c, ms: u(g[yb]) * c}) : (g = Eb.exec(a)) && (c = "-" === g[1] ? -1 : 1, e = function (a) {
            var b = a && parseFloat(a.replace(",", "."));
            return(isNaN(b) ? 0 : b) * c
        }, f = {y: e(g[2]), M: e(g[3]), d: e(g[4]), h: e(g[5]), m: e(g[6]), s: e(g[7]), w: e(g[8])}), d = new i(f), mb.isDuration(a) && a.hasOwnProperty("_lang") && (d._lang = a._lang), d
    }, mb.version = pb, mb.defaultFormat = Yb, mb.ISO_8601 = function () {
    }, mb.momentProperties = Ab, mb.updateOffset = function () {
    }, mb.relativeTimeThreshold = function (b, c) {
        return ec[b] === a ? !1 : (ec[b] = c, !0)
    }, mb.lang = function (a, b) {
        var c;
        return a ? (b ? D(B(a), b) : null === b ? (E(a), a = "en") : zb[a] || F(a), c = mb.duration.fn._lang = mb.fn._lang = F(a), c._abbr) : mb.fn._lang._abbr
    }, mb.langData = function (a) {
        return a && a._lang && a._lang._abbr && (a = a._lang._abbr), F(a)
    }, mb.isMoment = function (a) {
        return a instanceof h || null != a && a.hasOwnProperty("_isAMomentObject")
    }, mb.isDuration = function (a) {
        return a instanceof i
    }, ob = ic.length - 1; ob >= 0; --ob)t(ic[ob]);
    mb.normalizeUnits = function (a) {
        return r(a)
    }, mb.invalid = function (a) {
        var b = mb.utc(0 / 0);
        return null != a ? j(b._pf, a) : b._pf.userInvalidated = !0, b
    }, mb.parseZone = function () {
        return mb.apply(null, arguments).parseZone()
    }, mb.parseTwoDigitYear = function (a) {
        return u(a) + (u(a) > 68 ? 1900 : 2e3)
    }, j(mb.fn = h.prototype, {clone: function () {
        return mb(this)
    }, valueOf: function () {
        return+this._d + 6e4 * (this._offset || 0)
    }, unix: function () {
        return Math.floor(+this / 1e3)
    }, toString: function () {
        return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }, toDate: function () {
        return this._offset ? new Date(+this) : this._d
    }, toISOString: function () {
        var a = mb(this).utc();
        return 0 < a.year() && a.year() <= 9999 ? I(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : I(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
    }, toArray: function () {
        var a = this;
        return[a.year(), a.month(), a.date(), a.hours(), a.minutes(), a.seconds(), a.milliseconds()]
    }, isValid: function () {
        return A(this)
    }, isDSTShifted: function () {
        return this._a ? this.isValid() && q(this._a, (this._isUTC ? mb.utc(this._a) : mb(this._a)).toArray()) > 0 : !1
    }, parsingFlags: function () {
        return j({}, this._pf)
    }, invalidAt: function () {
        return this._pf.overflow
    }, utc: function () {
        return this.zone(0)
    }, local: function () {
        return this.zone(0), this._isUTC = !1, this
    }, format: function (a) {
        var b = I(this, a || mb.defaultFormat);
        return this.lang().postformat(b)
    }, add: function (a, b) {
        var c;
        return c = "string" == typeof a && "string" == typeof b ? mb.duration(isNaN(+b) ? +a : +b, isNaN(+b) ? b : a) : "string" == typeof a ? mb.duration(+b, a) : mb.duration(a, b), n(this, c, 1), this
    }, subtract: function (a, b) {
        var c;
        return c = "string" == typeof a && "string" == typeof b ? mb.duration(isNaN(+b) ? +a : +b, isNaN(+b) ? b : a) : "string" == typeof a ? mb.duration(+b, a) : mb.duration(a, b), n(this, c, -1), this
    }, diff: function (a, b, c) {
        var d, e, f = C(a, this), g = 6e4 * (this.zone() - f.zone());
        return b = r(b), "year" === b || "month" === b ? (d = 432e5 * (this.daysInMonth() + f.daysInMonth()), e = 12 * (this.year() - f.year()) + (this.month() - f.month()), e += (this - mb(this).startOf("month") - (f - mb(f).startOf("month"))) / d, e -= 6e4 * (this.zone() - mb(this).startOf("month").zone() - (f.zone() - mb(f).startOf("month").zone())) / d, "year" === b && (e /= 12)) : (d = this - f, e = "second" === b ? d / 1e3 : "minute" === b ? d / 6e4 : "hour" === b ? d / 36e5 : "day" === b ? (d - g) / 864e5 : "week" === b ? (d - g) / 6048e5 : d), c ? e : l(e)
    }, from: function (a, b) {
        return mb.duration(this.diff(a)).lang(this.lang()._abbr).humanize(!b)
    }, fromNow: function (a) {
        return this.from(mb(), a)
    }, calendar: function (a) {
        var b = a || mb(), c = C(b, this).startOf("day"), d = this.diff(c, "days", !0), e = -6 > d ? "sameElse" : -1 > d ? "lastWeek" : 0 > d ? "lastDay" : 1 > d ? "sameDay" : 2 > d ? "nextDay" : 7 > d ? "nextWeek" : "sameElse";
        return this.format(this.lang().calendar(e, this))
    }, isLeapYear: function () {
        return y(this.year())
    }, isDST: function () {
        return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone()
    }, day: function (a) {
        var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != a ? (a = $(a, this.lang()), this.add({d: a - b})) : b
    }, month: ib("Month", !0), startOf: function (a) {
        switch (a = r(a)) {
            case"year":
                this.month(0);
            case"quarter":
            case"month":
                this.date(1);
            case"week":
            case"isoWeek":
            case"day":
                this.hours(0);
            case"hour":
                this.minutes(0);
            case"minute":
                this.seconds(0);
            case"second":
                this.milliseconds(0)
        }
        return"week" === a ? this.weekday(0) : "isoWeek" === a && this.isoWeekday(1), "quarter" === a && this.month(3 * Math.floor(this.month() / 3)), this
    }, endOf: function (a) {
        return a = r(a), this.startOf(a).add("isoWeek" === a ? "week" : a, 1).subtract("ms", 1)
    }, isAfter: function (a, b) {
        return b = "undefined" != typeof b ? b : "millisecond", +this.clone().startOf(b) > +mb(a).startOf(b)
    }, isBefore: function (a, b) {
        return b = "undefined" != typeof b ? b : "millisecond", +this.clone().startOf(b) < +mb(a).startOf(b)
    }, isSame: function (a, b) {
        return b = b || "ms", +this.clone().startOf(b) === +C(a, this).startOf(b)
    }, min: d("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function (a) {
        return a = mb.apply(null, arguments), this > a ? this : a
    }), max: d("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function (a) {
        return a = mb.apply(null, arguments), a > this ? this : a
    }), zone: function (a, b) {
        var c = this._offset || 0;
        return null == a ? this._isUTC ? c : this._d.getTimezoneOffset() : ("string" == typeof a && (a = L(a)), Math.abs(a) < 16 && (a = 60 * a), this._offset = a, this._isUTC = !0, c !== a && (!b || this._changeInProgress ? n(this, mb.duration(c - a, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, mb.updateOffset(this, !0), this._changeInProgress = null)), this)
    }, zoneAbbr: function () {
        return this._isUTC ? "UTC" : ""
    }, zoneName: function () {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }, parseZone: function () {
        return this._tzm ? this.zone(this._tzm) : "string" == typeof this._i && this.zone(this._i), this
    }, hasAlignedHourOffset: function (a) {
        return a = a ? mb(a).zone() : 0, (this.zone() - a) % 60 === 0
    }, daysInMonth: function () {
        return v(this.year(), this.month())
    }, dayOfYear: function (a) {
        var b = rb((mb(this).startOf("day") - mb(this).startOf("year")) / 864e5) + 1;
        return null == a ? b : this.add("d", a - b)
    }, quarter: function (a) {
        return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3)
    }, weekYear: function (a) {
        var b = bb(this, this.lang()._week.dow, this.lang()._week.doy).year;
        return null == a ? b : this.add("y", a - b)
    }, isoWeekYear: function (a) {
        var b = bb(this, 1, 4).year;
        return null == a ? b : this.add("y", a - b)
    }, week: function (a) {
        var b = this.lang().week(this);
        return null == a ? b : this.add("d", 7 * (a - b))
    }, isoWeek: function (a) {
        var b = bb(this, 1, 4).week;
        return null == a ? b : this.add("d", 7 * (a - b))
    }, weekday: function (a) {
        var b = (this.day() + 7 - this.lang()._week.dow) % 7;
        return null == a ? b : this.add("d", a - b)
    }, isoWeekday: function (a) {
        return null == a ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7)
    }, isoWeeksInYear: function () {
        return w(this.year(), 1, 4)
    }, weeksInYear: function () {
        var a = this._lang._week;
        return w(this.year(), a.dow, a.doy)
    }, get: function (a) {
        return a = r(a), this[a]()
    }, set: function (a, b) {
        return a = r(a), "function" == typeof this[a] && this[a](b), this
    }, lang: function (b) {
        return b === a ? this._lang : (this._lang = F(b), this)
    }}), mb.fn.millisecond = mb.fn.milliseconds = ib("Milliseconds", !1), mb.fn.second = mb.fn.seconds = ib("Seconds", !1), mb.fn.minute = mb.fn.minutes = ib("Minutes", !1), mb.fn.hour = mb.fn.hours = ib("Hours", !0), mb.fn.date = ib("Date", !0), mb.fn.dates = d("dates accessor is deprecated. Use date instead.", ib("Date", !0)), mb.fn.year = ib("FullYear", !0), mb.fn.years = d("years accessor is deprecated. Use year instead.", ib("FullYear", !0)), mb.fn.days = mb.fn.day, mb.fn.months = mb.fn.month, mb.fn.weeks = mb.fn.week, mb.fn.isoWeeks = mb.fn.isoWeek, mb.fn.quarters = mb.fn.quarter, mb.fn.toJSON = mb.fn.toISOString, j(mb.duration.fn = i.prototype, {_bubble: function () {
        var a, b, c, d, e = this._milliseconds, f = this._days, g = this._months, h = this._data;
        h.milliseconds = e % 1e3, a = l(e / 1e3), h.seconds = a % 60, b = l(a / 60), h.minutes = b % 60, c = l(b / 60), h.hours = c % 24, f += l(c / 24), h.days = f % 30, g += l(f / 30), h.months = g % 12, d = l(g / 12), h.years = d
    }, weeks: function () {
        return l(this.days() / 7)
    }, valueOf: function () {
        return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * u(this._months / 12)
    }, humanize: function (a) {
        var b = +this, c = ab(b, !a, this.lang());
        return a && (c = this.lang().pastFuture(b, c)), this.lang().postformat(c)
    }, add: function (a, b) {
        var c = mb.duration(a, b);
        return this._milliseconds += c._milliseconds, this._days += c._days, this._months += c._months, this._bubble(), this
    }, subtract: function (a, b) {
        var c = mb.duration(a, b);
        return this._milliseconds -= c._milliseconds, this._days -= c._days, this._months -= c._months, this._bubble(), this
    }, get: function (a) {
        return a = r(a), this[a.toLowerCase() + "s"]()
    }, as: function (a) {
        return a = r(a), this["as" + a.charAt(0).toUpperCase() + a.slice(1) + "s"]()
    }, lang: mb.fn.lang, toIsoString: function () {
        var a = Math.abs(this.years()), b = Math.abs(this.months()), c = Math.abs(this.days()), d = Math.abs(this.hours()), e = Math.abs(this.minutes()), f = Math.abs(this.seconds() + this.milliseconds() / 1e3);
        return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (a ? a + "Y" : "") + (b ? b + "M" : "") + (c ? c + "D" : "") + (d || e || f ? "T" : "") + (d ? d + "H" : "") + (e ? e + "M" : "") + (f ? f + "S" : "") : "P0D"
    }});
    for (ob in ac)ac.hasOwnProperty(ob) && (kb(ob, ac[ob]), jb(ob.toLowerCase()));
    kb("Weeks", 6048e5), mb.duration.fn.asMonths = function () {
        return(+this - 31536e6 * this.years()) / 2592e6 + 12 * this.years()
    }, mb.lang("en", {ordinal: function (a) {
        var b = a % 10, c = 1 === u(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
        return a + c
    }}), Bb ? module.exports = mb : "function" == typeof define && define.amd ? (define("moment", function (a, b, c) {
        return c.config && c.config() && c.config().noGlobal === !0 && (qb.moment = nb), mb
    }), lb(!0)) : lb()
}).call(this);
/*
 Version 3.0.0
 =========================================================
 bootstrap-datetimepicker.js
 https://github.com/Eonasdan/bootstrap-datetimepicker
 =========================================================
 The MIT License (MIT)

 Copyright (c) 2014 Jonathan Peterson

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 */
(function (n) {
    if (typeof define == "function" && define.amd)define(["jquery", "moment"], n); else if (jQuery)if (moment)n(jQuery, moment); else throw"bootstrap-datetimepicker requires moment.js to be loaded first"; else throw"bootstrap-datetimepicker requires jQuery to be loaded first";
})(function (n, t) {
    if (typeof t == "undefined") {
        alert("momentjs is requried");
        throw new Error("momentjs is required");
    }
    var u = 0, r = t, f = function (t, f) {
        var st = {pickDate: !0, pickTime: !0, useMinutes: !0, useSeconds: !1, useCurrent: !0, minuteStepping: 1, minDate: new r({y: 1900}), maxDate: (new r).add(100, "y"), showToday: !0, collapse: !0, language: "en", defaultDate: "", disabledDates: !1, enabledDates: !1, icons: {}, useStrict: !1, direction: "auto", sideBySide: !1, daysOfWeekDisabled: !1}, ht = {time: "glyphicon glyphicon-time", date: "glyphicon glyphicon-calendar", up: "glyphicon glyphicon-chevron-up", down: "glyphicon glyphicon-chevron-down"}, e = this, ct = function () {
            var i = !1, o, h, s;
            if (e.options = n.extend({}, st, f), e.options.icons = n.extend({}, ht, e.options.icons), e.element = n(t), lt(), !(e.options.pickTime || e.options.pickDate))throw new Error("Must choose at least one picker");
            if (e.id = u++, r.lang(e.options.language), e.date = r(), e.unset = !1, e.isInput = e.element.is("input"), e.component = !1, e.element.hasClass("input-group") && (e.component = e.element.find(".datepickerbutton").size() == 0 ? e.element.find("[class^='input-group-']") : e.element.find(".datepickerbutton")), e.format = e.options.format, o = r()._lang._longDateFormat, e.format || (e.format = e.options.pickDate ? o.L : "", e.options.pickDate && e.options.pickTime && (e.format += " "), e.format += e.options.pickTime ? o.LT : "", e.options.useSeconds && (~o.LT.indexOf(" A") ? e.format = e.format.split(" A")[0] + ":ss A" : e.format += ":ss")), e.use24hours = e.format.toLowerCase().indexOf("a") < 1, e.component && (i = e.component.find("span")), e.options.pickTime && i && i.addClass(e.options.icons.time), e.options.pickDate && i && (i.removeClass(e.options.icons.time), i.addClass(e.options.icons.date)), e.widget = n(ni()).appendTo("body"), e.options.useSeconds && !e.use24hours && e.widget.width(300), e.minViewMode = e.options.minViewMode || 0, typeof e.minViewMode == "string")switch (e.minViewMode) {
                case"months":
                    e.minViewMode = 1;
                    break;
                case"years":
                    e.minViewMode = 2;
                    break;
                default:
                    e.minViewMode = 0
            }
            if (e.viewMode = e.options.viewMode || 0, typeof e.viewMode == "string")switch (e.viewMode) {
                case"months":
                    e.viewMode = 1;
                    break;
                case"years":
                    e.viewMode = 2;
                    break;
                default:
                    e.viewMode = 0
            }
            e.options.disabledDates = d(e.options.disabledDates);
            e.options.enabledDates = d(e.options.enabledDates);
            e.startViewMode = e.viewMode;
            e.setMinDate(e.options.minDate);
            e.setMaxDate(e.options.maxDate);
            at();
            vt();
            yt();
            pt();
            wt();
            l();
            b();
            ut();
            e.options.defaultDate !== "" && p().val() == "" && e.setValue(e.options.defaultDate);
            e.options.minuteStepping !== 1 && (h = e.date.minutes(), s = e.options.minuteStepping, e.date.minutes(Math.round(h / s) * s % 60).seconds(0))
        }, p = function () {
            return e.isInput ? e.element : dateStr = e.element.find("input")
        }, lt = function () {
            var n;
            n = e.element.is("input") ? e.element.data() : e.element.data();
            n.dateFormat !== undefined && (e.options.format = n.dateFormat);
            n.datePickdate !== undefined && (e.options.pickDate = n.datePickdate);
            n.datePicktime !== undefined && (e.options.pickTime = n.datePicktime);
            n.dateUseminutes !== undefined && (e.options.useMinutes = n.dateUseminutes);
            n.dateUseseconds !== undefined && (e.options.useSeconds = n.dateUseseconds);
            n.dateUsecurrent !== undefined && (e.options.useCurrent = n.dateUsecurrent);
            n.dateMinutestepping !== undefined && (e.options.minuteStepping = n.dateMinutestepping);
            n.dateMindate !== undefined && (e.options.minDate = n.dateMindate);
            n.dateMaxdate !== undefined && (e.options.maxDate = n.dateMaxdate);
            n.dateShowtoday !== undefined && (e.options.showToday = n.dateShowtoday);
            n.dateCollapse !== undefined && (e.options.collapse = n.dateCollapse);
            n.dateLanguage !== undefined && (e.options.language = n.dateLanguage);
            n.dateDefaultdate !== undefined && (e.options.defaultDate = n.dateDefaultdate);
            n.dateDisableddates !== undefined && (e.options.disabledDates = n.dateDisableddates);
            n.dateEnableddates !== undefined && (e.options.enabledDates = n.dateEnableddates);
            n.dateIcons !== undefined && (e.options.icons = n.dateIcons);
            n.dateUsestrict !== undefined && (e.options.useStrict = n.dateUsestrict);
            n.dateDirection !== undefined && (e.options.direction = n.dateDirection);
            n.dateSidebyside !== undefined && (e.options.sideBySide = n.dateSidebyside)
        }, it = function () {
            var u = "absolute", t = e.component ? e.component.offset() : e.element.offset(), i = n(window), r;
            e.width = e.component ? e.component.outerWidth() : e.element.outerWidth();
            t.top = t.top + e.element.outerHeight();
            e.options.direction === "up" ? r = "top" : e.options.direction === "bottom" ? r = "bottom" : e.options.direction === "auto" && (r = t.top + e.widget.height() > i.height() + i.scrollTop() && e.widget.height() + e.element.outerHeight() < t.top ? "top" : "bottom");
            r === "top" ? (t.top -= e.widget.height() + e.element.outerHeight() + 15, e.widget.addClass("top").removeClass("bottom")) : (t.top += 1, e.widget.addClass("bottom").removeClass("top"));
            e.options.width !== undefined && e.widget.width(e.options.width);
            e.options.orientation === "left" && (e.widget.addClass("left-oriented"), t.left = t.left - e.widget.width() + 20);
            gt() && (u = "fixed", t.top -= i.scrollTop(), t.left -= i.scrollLeft());
            i.width() < t.left + e.widget.outerWidth() ? (t.right = i.width() - t.left - e.width, t.left = "auto", e.widget.addClass("pull-right")) : (t.right = "auto", e.widget.removeClass("pull-right"));
            e.widget.css({position: u, top: t.top, left: t.left, right: t.right})
        }, c = function (n, t) {
            r(e.date).isSame(r(n)) || (e.element.trigger({type: "dp.change", date: r(e.date), oldDate: r(n)}), t !== "change" && e.element.change())
        }, g = function (n) {
            e.element.trigger({type: "dp.error", date: r(n)})
        }, l = function (n) {
            r.lang(e.options.language);
            var t = n;
            t || (t = p().val(), t && (e.date = r(t, e.format, e.options.useStrict)), e.date || (e.date = r()));
            e.viewDate = r(e.date).startOf("month");
            y();
            nt()
        }, at = function () {
            r.lang(e.options.language);
            var i = n("<tr>"), u = r.weekdaysMin(), t;
            if (r()._lang._week.dow == 0)for (t = 0; t < 7; t++)i.append('<th class="dow">' + u[t] + "<\/th>"); else for (t = 1; t < 8; t++)t == 7 ? i.append('<th class="dow">' + u[0] + "<\/th>") : i.append('<th class="dow">' + u[t] + "<\/th>");
            e.widget.find(".datepicker-days thead").append(i)
        }, vt = function () {
            r.lang(e.options.language);
            for (var n = "", t = 0, i = r.monthsShort(); t < 12;)n += '<span class="month">' + i[t++] + "<\/span>";
            e.widget.find(".datepicker-months td").append(n)
        }, y = function () {
            r.lang(e.options.language);
            var t = e.viewDate.year(), h = e.viewDate.month(), o = e.options.minDate.year(), y = e.options.minDate.month(), s = e.options.maxDate.year(), p = e.options.maxDate.month(), i, w, c = [], v, f, u, b, d, l, a = r.months();
            for (e.widget.find(".datepicker-days").find(".disabled").removeClass("disabled"), e.widget.find(".datepicker-months").find(".disabled").removeClass("disabled"), e.widget.find(".datepicker-years").find(".disabled").removeClass("disabled"), e.widget.find(".datepicker-days th:eq(1)").text(a[h] + " " + t), i = r(e.viewDate).subtract("months", 1), b = i.daysInMonth(), i.date(b).startOf("week"), (t == o && h <= y || t < o) && e.widget.find(".datepicker-days th:eq(0)").addClass("disabled"), (t == s && h >= p || t > s) && e.widget.find(".datepicker-days th:eq(2)").addClass("disabled"), w = r(i).add(42, "d"); i.isBefore(w);) {
                if (i.weekday() === r().startOf("week").weekday() && (v = n("<tr>"), c.push(v)), f = "", i.year() < t || i.year() == t && i.month() < h ? f += " old" : (i.year() > t || i.year() == t && i.month() > h) && (f += " new"), i.isSame(r({y: e.date.year(), M: e.date.month(), d: e.date.date()})) && (f += " active"), (k(i) || !ot(i)) && (f += " disabled"), e.options.showToday === !0 && i.isSame(r(), "day") && (f += " today"), e.options.daysOfWeekDisabled)for (u in e.options.daysOfWeekDisabled)if (i.day() == e.options.daysOfWeekDisabled[u]) {
                    f += " disabled";
                    break
                }
                v.append('<td class="day' + f + '">' + i.date() + "<\/td>");
                i.add(1, "d")
            }
            for (e.widget.find(".datepicker-days tbody").empty().append(c), l = e.date.year(), a = e.widget.find(".datepicker-months").find("th:eq(1)").text(t).end().find("span").removeClass("active"), l === t && a.eq(e.date.month()).addClass("active"), l - 1 < o && e.widget.find(".datepicker-months th:eq(0)").addClass("disabled"), l + 1 > s && e.widget.find(".datepicker-months th:eq(2)").addClass("disabled"), u = 0; u < 12; u++)t == o && y > u || t < o ? n(a[u]).addClass("disabled") : (t == s && p < u || t > s) && n(a[u]).addClass("disabled");
            for (c = "", t = parseInt(t / 10, 10) * 10, d = e.widget.find(".datepicker-years").find("th:eq(1)").text(t + "-" + (t + 9)).end().find("td"), e.widget.find(".datepicker-years").find("th").removeClass("disabled"), o > t && e.widget.find(".datepicker-years").find("th:eq(0)").addClass("disabled"), s < t + 9 && e.widget.find(".datepicker-years").find("th:eq(2)").addClass("disabled"), t -= 1, u = -1; u < 11; u++)c += '<span class="year' + (u === -1 || u === 10 ? " old" : "") + (l === t ? " active" : "") + (t < o || t > s ? " disabled" : "") + '">' + t + "<\/span>", t += 1;
            d.html(c)
        }, yt = function () {
            r.lang(e.options.language);
            var f = e.widget.find(".timepicker .timepicker-hours table"), n = "", t, i, u;
            if (f.parent().hide(), e.use24hours)for (t = 0, i = 0; i < 6; i += 1) {
                for (n += "<tr>", u = 0; u < 4; u += 1)n += '<td class="hour">' + s(t.toString()) + "<\/td>", t++;
                n += "<\/tr>"
            } else for (t = 1, i = 0; i < 3; i += 1) {
                for (n += "<tr>", u = 0; u < 4; u += 1)n += '<td class="hour">' + s(t.toString()) + "<\/td>", t++;
                n += "<\/tr>"
            }
            f.html(n)
        }, pt = function () {
            var f = e.widget.find(".timepicker .timepicker-minutes table"), n = "", i = 0, r, u, t = e.options.minuteStepping;
            for (f.parent().hide(), (t = 1) && (t = 5), r = 0; r < Math.ceil(15 / t); r++) {
                for (n += "<tr>", u = 0; u < 4; u += 1)i < 60 ? (n += '<td class="minute">' + s(i.toString()) + "<\/td>", i += t) : n += "<td><\/td>";
                n += "<\/tr>"
            }
            f.html(n)
        }, wt = function () {
            var r = e.widget.find(".timepicker .timepicker-seconds table"), n = "", u = 0, t, i;
            for (r.parent().hide(), t = 0; t < 3; t++) {
                for (n += "<tr>", i = 0; i < 4; i += 1)n += '<td class="second">' + s(u.toString()) + "<\/td>", u += 5;
                n += "<\/tr>"
            }
            r.html(n)
        }, nt = function () {
            if (e.date) {
                var t = e.widget.find(".timepicker span[data-time-component]"), n = e.date.hours(), i = "AM";
                e.use24hours || (n >= 12 && (i = "PM"), n === 0 ? n = 12 : n != 12 && (n = n % 12), e.widget.find(".timepicker [data-action=togglePeriod]").text(i));
                t.filter("[data-time-component=hours]").text(s(n));
                t.filter("[data-time-component=minutes]").text(s(e.date.minutes()));
                t.filter("[data-time-component=seconds]").text(s(e.date.second()))
            }
        }, bt = function (t) {
            t.stopPropagation();
            t.preventDefault();
            e.unset = !1;
            var i = n(t.target).closest("span, td, th"), u, f, s, h, l = r(e.date);
            if (i.length === 1 && !i.is(".disabled"))switch (i[0].nodeName.toLowerCase()) {
                case"th":
                    switch (i[0].className) {
                        case"switch":
                            b(1);
                            break;
                        case"prev":
                        case"next":
                            s = o.modes[e.viewMode].navStep;
                            i[0].className === "prev" && (s = s * -1);
                            e.viewDate.add(s, o.modes[e.viewMode].navFnc);
                            y()
                    }
                    break;
                case"span":
                    i.is(".month") ? (u = i.parent().find("span").index(i), e.viewDate.month(u)) : (f = parseInt(i.text(), 10) || 0, e.viewDate.year(f));
                    e.viewMode === e.minViewMode && (e.date = r({y: e.viewDate.year(), M: e.viewDate.month(), d: e.viewDate.date(), h: e.date.hours(), m: e.date.minutes(), s: e.date.seconds()}), c(l, t.type), a());
                    b(-1);
                    y();
                    break;
                case"td":
                    i.is(".day") && (h = parseInt(i.text(), 10) || 1, u = e.viewDate.month(), f = e.viewDate.year(), i.is(".old") ? u === 0 ? (u = 11, f -= 1) : u -= 1 : i.is(".new") && (u == 11 ? (u = 0, f += 1) : u += 1), e.date = r({y: f, M: u, d: h, h: e.date.hours(), m: e.date.minutes(), s: e.date.seconds()}), e.viewDate = r({y: f, M: u, d: Math.min(28, h)}), y(), a(), c(l, t.type))
            }
        }, w = {incrementHours: function () {
            v("add", "hours", 1)
        }, incrementMinutes: function () {
            v("add", "minutes", e.options.minuteStepping)
        }, incrementSeconds: function () {
            v("add", "seconds", 1)
        }, decrementHours: function () {
            v("subtract", "hours", 1)
        }, decrementMinutes: function () {
            v("subtract", "minutes", e.options.minuteStepping)
        }, decrementSeconds: function () {
            v("subtract", "seconds", 1)
        }, togglePeriod: function () {
            var n = e.date.hours();
            n >= 12 ? n -= 12 : n += 12;
            e.date.hours(n)
        }, showPicker: function () {
            e.widget.find(".timepicker > div:not(.timepicker-picker)").hide();
            e.widget.find(".timepicker .timepicker-picker").show()
        }, showHours: function () {
            e.widget.find(".timepicker .timepicker-picker").hide();
            e.widget.find(".timepicker .timepicker-hours").show()
        }, showMinutes: function () {
            e.widget.find(".timepicker .timepicker-picker").hide();
            e.widget.find(".timepicker .timepicker-minutes").show()
        }, showSeconds: function () {
            e.widget.find(".timepicker .timepicker-picker").hide();
            e.widget.find(".timepicker .timepicker-seconds").show()
        }, selectHour: function (t) {
            var r = e.widget.find(".timepicker [data-action=togglePeriod]").text(), i = parseInt(n(t.target).text(), 10);
            r == "PM" && (i += 12);
            e.date.hours(i);
            w.showPicker.call(e)
        }, selectMinute: function (t) {
            e.date.minutes(parseInt(n(t.target).text(), 10));
            w.showPicker.call(e)
        }, selectSecond: function (t) {
            e.date.seconds(parseInt(n(t.target).text(), 10));
            w.showPicker.call(e)
        }}, kt = function (t) {
            var i = r(e.date), u = n(t.currentTarget).data("action"), f = w[u].apply(e, arguments);
            return tt(t), e.date || (e.date = r({y: 1970})), a(), nt(), c(i, t.type), f
        }, tt = function (n) {
            n.stopPropagation();
            n.preventDefault()
        }, rt = function (t) {
            r.lang(e.options.language);
            var f = n(t.target), u = r(e.date), i = r(f.val(), e.format, e.options.useStrict);
            i.isValid() && !k(i) && ot(i) ? (l(), e.setValue(i), c(u, t.type), a()) : (e.viewDate = u, c(u, t.type), g(i), e.unset = !0)
        }, b = function (n) {
            n && (e.viewMode = Math.max(e.minViewMode, Math.min(2, e.viewMode + n)));
            var t = o.modes[e.viewMode].clsName;
            e.widget.find(".datepicker > div").hide().filter(".datepicker-" + o.modes[e.viewMode].clsName).show()
        }, ut = function () {
            var i, r, t, f, u;
            e.widget.on("click", ".datepicker *", n.proxy(bt, this));
            e.widget.on("click", "[data-action]", n.proxy(kt, this));
            e.widget.on("mousedown", n.proxy(tt, this));
            if (e.options.pickDate && e.options.pickTime)e.widget.on("click.togglePicker", ".accordion-toggle", function (o) {
                if (o.stopPropagation(), i = n(this), r = i.closest("ul"), t = r.find(".in"), f = r.find(".collapse:not(.in)"), t && t.length) {
                    if (u = t.data("collapse"), u && u.date - transitioning)return;
                    t.collapse("hide");
                    f.collapse("show");
                    i.find("span").toggleClass(e.options.icons.time + " " + e.options.icons.date);
                    e.element.find(".input-group-addon span").toggleClass(e.options.icons.time + " " + e.options.icons.date)
                }
            });
            if (e.isInput)e.element.on({focus: n.proxy(e.show, this), change: n.proxy(rt, this), blur: n.proxy(e.hide, this)}); else {
                e.element.on({change: n.proxy(rt, this)}, "input");
                if (e.component)e.component.on("click", n.proxy(e.show, this)); else e.element.on("click", n.proxy(e.show, this))
            }
        }, dt = function () {
            n(window).on("resize.datetimepicker" + e.id, n.proxy(it, this));
            if (!e.isInput)n(document).on("mousedown.datetimepicker" + e.id, n.proxy(e.hide, this))
        }, ft = function () {
            e.widget.off("click", ".datepicker *", e.click);
            e.widget.off("click", "[data-action]");
            e.widget.off("mousedown", e.stopEvent);
            e.options.pickDate && e.options.pickTime && e.widget.off("click.togglePicker");
            e.isInput ? e.element.off({focus: e.show, change: e.change}) : (e.element.off({change: e.change}, "input"), e.component ? e.component.off("click", e.show) : e.element.off("click", e.show))
        }, et = function () {
            n(window).off("resize.datetimepicker" + e.id);
            e.isInput || n(document).off("mousedown.datetimepicker" + e.id)
        }, gt = function () {
            if (e.element) {
                for (var i = e.element.parents(), r = !1, t = 0; t < i.length; t++)if (n(i[t]).css("position") == "fixed") {
                    r = !0;
                    break
                }
                return r
            }
            return!1
        }, a = function () {
            r.lang(e.options.language);
            var n = "";
            e.unset || (n = r(e.date).format(e.format));
            p().val(n);
            e.element.data("date", n);
            e.options.pickTime || e.hide()
        }, v = function (n, t, i) {
            r.lang(e.options.language);
            var u;
            if (n == "add" ? (u = r(e.date), u.hours() == 23 && u.add(i, t), u.add(i, t)) : u = r(e.date).subtract(i, t), k(r(u.subtract(i, t))) || k(u)) {
                g(u.format(e.format));
                return
            }
            n == "add" ? e.date.add(i, t) : e.date.subtract(i, t);
            e.unset = !1
        }, k = function (n) {
            return(r.lang(e.options.language), n.isAfter(e.options.maxDate) || n.isBefore(e.options.minDate)) ? !0 : e.options.disabledDates === !1 ? !1 : e.options.disabledDates[r(n).format("YYYY-MM-DD")] === !0
        }, ot = function (n) {
            return(r.lang(e.options.language), e.options.enabledDates === !1) ? !0 : e.options.enabledDates[r(n).format("YYYY-MM-DD")] === !0
        }, d = function (n) {
            var t = {}, u = 0;
            for (i = 0; i < n.length; i++)dDate = r(n[i]), dDate.isValid() && (t[dDate.format("YYYY-MM-DD")] = !0, u++);
            return u > 0 ? t : !1
        }, s = function (n) {
            return n = n.toString(), n.length >= 2 ? n : "0" + n
        }, ni = function () {
            if (e.options.pickDate && e.options.pickTime) {
                var n = "";
                return n = '<div class="bootstrap-datetimepicker-widget' + (e.options.sideBySide ? " timepicker-sbs" : "") + ' dropdown-menu" style="z-index:9999 !important;">', n += e.options.sideBySide ? '<div class="row"><div class="col-sm-6 datepicker">' + o.template + '<\/div><div class="col-sm-6 timepicker">' + h.getTemplate() + "<\/div><\/div>" : '<ul class="list-unstyled"><li' + (e.options.collapse ? ' class="collapse in"' : "") + '><div class="datepicker">' + o.template + '<\/div><\/li><li class="picker-switch accordion-toggle"><a class="btn" style="width:100%"><span class="' + e.options.icons.time + '"><\/span><\/a><\/li><li' + (e.options.collapse ? ' class="collapse"' : "") + '><div class="timepicker">' + h.getTemplate() + "<\/div><\/li><\/ul>", n + "<\/div>"
            }
            return e.options.pickTime ? '<div class="bootstrap-datetimepicker-widget dropdown-menu"><div class="timepicker">' + h.getTemplate() + "<\/div><\/div>" : '<div class="bootstrap-datetimepicker-widget dropdown-menu"><div class="datepicker">' + o.template + "<\/div><\/div>"
        }, o = {modes: [
            {clsName: "days", navFnc: "month", navStep: 1},
            {clsName: "months", navFnc: "year", navStep: 1},
            {clsName: "years", navFnc: "year", navStep: 10}
        ], headTemplate: '<thead><tr><th class="prev">&lsaquo;<\/th><th colspan="5" class="switch"><\/th><th class="next">&rsaquo;<\/th><\/tr><\/thead>', contTemplate: '<tbody><tr><td colspan="7"><\/td><\/tr><\/tbody>'}, h = {hourTemplate: '<span data-action="showHours"   data-time-component="hours"   class="timepicker-hour"><\/span>', minuteTemplate: '<span data-action="showMinutes" data-time-component="minutes" class="timepicker-minute"><\/span>', secondTemplate: '<span data-action="showSeconds"  data-time-component="seconds" class="timepicker-second"><\/span>'};
        o.template = '<div class="datepicker-days"><table class="table-condensed">' + o.headTemplate + '<tbody><\/tbody><\/table><\/div><div class="datepicker-months"><table class="table-condensed">' + o.headTemplate + o.contTemplate + '<\/table><\/div><div class="datepicker-years"><table class="table-condensed">' + o.headTemplate + o.contTemplate + "<\/table><\/div>";
        h.getTemplate = function () {
            return'<div class="timepicker-picker"><table class="table-condensed"><tr><td><a href="#" class="btn" data-action="incrementHours"><span class="' + e.options.icons.up + '"><\/span><\/a><\/td><td class="separator"><\/td><td>' + (e.options.useMinutes ? '<a href="#" class="btn" data-action="incrementMinutes"><span class="' + e.options.icons.up + '"><\/span><\/a>' : "") + "<\/td>" + (e.options.useSeconds ? '<td class="separator"><\/td><td><a href="#" class="btn" data-action="incrementSeconds"><span class="' + e.options.icons.up + '"><\/span><\/a><\/td>' : "") + (e.use24hours ? "" : '<td class="separator"><\/td>') + "<\/tr><tr><td>" + h.hourTemplate + '<\/td> <td class="separator">:<\/td><td>' + (e.options.useMinutes ? h.minuteTemplate : '<span class="timepicker-minute">00<\/span>') + "<\/td> " + (e.options.useSeconds ? '<td class="separator">:<\/td><td>' + h.secondTemplate + "<\/td>" : "") + (e.use24hours ? "" : '<td class="separator"><\/td><td><button type="button" class="btn btn-primary" data-action="togglePeriod"><\/button><\/td>') + '<\/tr><tr><td><a href="#" class="btn" data-action="decrementHours"><span class="' + e.options.icons.down + '"><\/span><\/a><\/td><td class="separator"><\/td><td>' + (e.options.useMinutes ? '<a href="#" class="btn" data-action="decrementMinutes"><span class="' + e.options.icons.down + '"><\/span><\/a>' : "") + "<\/td>" + (e.options.useSeconds ? '<td class="separator"><\/td><td><a href="#" class="btn" data-action="decrementSeconds"><span class="' + e.options.icons.down + '"><\/span><\/a><\/td>' : "") + (e.use24hours ? "" : '<td class="separator"><\/td>') + '<\/tr><\/table><\/div><div class="timepicker-hours" data-action="selectHour"><table class="table-condensed"><\/table><\/div><div class="timepicker-minutes" data-action="selectMinute"><table class="table-condensed"><\/table><\/div>' + (e.options.useSeconds ? '<div class="timepicker-seconds" data-action="selectSecond"><table class="table-condensed"><\/table><\/div>' : "")
        };
        e.destroy = function () {
            ft();
            et();
            e.widget.remove();
            e.element.removeData("DateTimePicker");
            e.component && e.component.removeData("DateTimePicker")
        };
        e.show = function (n) {
            e.options.useCurrent === !0 && p().val() == "" && e.setValue(r().format(e.format));
            e.widget.show();
            e.height = e.component ? e.component.outerHeight() : e.element.outerHeight();
            it();
            e.element.trigger({type: "dp.show", date: r(e.date)});
            dt();
            n && tt(n)
        };
        e.disable = function () {
            var n = e.element.find("input");
            n.prop("disabled") || (n.prop("disabled", !0), ft())
        };
        e.enable = function () {
            var n = e.element.find("input");
            n.prop("disabled") && (n.prop("disabled", !1), ut())
        };
        e.hide = function (t) {
            if (!t || !n(t.target).is(e.element.attr("id"))) {
                for (var f = e.widget.find(".collapse"), u, i = 0; i < f.length; i++)if (u = f.eq(i).data("collapse"), u && u.date - transitioning)return;
                e.widget.hide();
                e.viewMode = e.startViewMode;
                b();
                e.element.trigger({type: "dp.hide", date: r(e.date)});
                et()
            }
        };
        e.setValue = function (n) {
            r.lang(e.options.language);
            n ? e.unset = !1 : (e.unset = !0, a());
            r.isMoment(n) || (n = r(n));
            n.isValid() ? (e.date = n, a(), e.viewDate = r({y: e.date.year(), M: e.date.month()}), y(), nt()) : g(n)
        };
        e.getDate = function () {
            return e.unset ? null : e.date
        };
        e.setDate = function (n) {
            var t = r(e.date);
            n ? e.setValue(n) : e.setValue(null);
            c(t, "function")
        };
        e.setDisabledDates = function (n) {
            e.options.disabledDates = d(n);
            e.viewDate && l()
        };
        e.setEnabledDates = function (n) {
            e.options.enabledDates = d(n);
            e.viewDate && l()
        };
        e.setMaxDate = function (n) {
            n != undefined && (e.options.maxDate = r(n), e.viewDate && l())
        };
        e.setMinDate = function (n) {
            n != undefined && (e.options.minDate = r(n), e.viewDate && l())
        };
        ct()
    };
    n.fn.datetimepicker = function (t) {
        return this.each(function () {
            var i = n(this), r = i.data("DateTimePicker");
            r || i.data("DateTimePicker", new f(this, t))
        })
    }
});
/*! jQuery UI - v1.10.4 - 2014-04-02
 * http://jqueryui.com
 * Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.effect.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js, jquery.ui.menu.js, jquery.ui.progressbar.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.slider.js, jquery.ui.sortable.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js
 * Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */

(function (e, t) {
    function i(t, i) {
        var s, a, o, r = t.nodeName.toLowerCase();
        return"area" === r ? (s = t.parentNode, a = s.name, t.href && a && "map" === s.nodeName.toLowerCase() ? (o = e("img[usemap=#" + a + "]")[0], !!o && n(o)) : !1) : (/input|select|textarea|button|object/.test(r) ? !t.disabled : "a" === r ? t.href || i : i) && n(t)
    }

    function n(t) {
        return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function () {
            return"hidden" === e.css(this, "visibility")
        }).length
    }

    var s = 0, a = /^ui-id-\d+$/;
    e.ui = e.ui || {}, e.extend(e.ui, {version: "1.10.4", keyCode: {BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, NUMPAD_ADD: 107, NUMPAD_DECIMAL: 110, NUMPAD_DIVIDE: 111, NUMPAD_ENTER: 108, NUMPAD_MULTIPLY: 106, NUMPAD_SUBTRACT: 109, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38}}), e.fn.extend({focus: function (t) {
        return function (i, n) {
            return"number" == typeof i ? this.each(function () {
                var t = this;
                setTimeout(function () {
                    e(t).focus(), n && n.call(t)
                }, i)
            }) : t.apply(this, arguments)
        }
    }(e.fn.focus), scrollParent: function () {
        var t;
        return t = e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function () {
            return/(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
        }).eq(0) : this.parents().filter(function () {
            return/(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
        }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t
    }, zIndex: function (i) {
        if (i !== t)return this.css("zIndex", i);
        if (this.length)for (var n, s, a = e(this[0]); a.length && a[0] !== document;) {
            if (n = a.css("position"), ("absolute" === n || "relative" === n || "fixed" === n) && (s = parseInt(a.css("zIndex"), 10), !isNaN(s) && 0 !== s))return s;
            a = a.parent()
        }
        return 0
    }, uniqueId: function () {
        return this.each(function () {
            this.id || (this.id = "ui-id-" + ++s)
        })
    }, removeUniqueId: function () {
        return this.each(function () {
            a.test(this.id) && e(this).removeAttr("id")
        })
    }}), e.extend(e.expr[":"], {data: e.expr.createPseudo ? e.expr.createPseudo(function (t) {
        return function (i) {
            return!!e.data(i, t)
        }
    }) : function (t, i, n) {
        return!!e.data(t, n[3])
    }, focusable: function (t) {
        return i(t, !isNaN(e.attr(t, "tabindex")))
    }, tabbable: function (t) {
        var n = e.attr(t, "tabindex"), s = isNaN(n);
        return(s || n >= 0) && i(t, !s)
    }}), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function (i, n) {
        function s(t, i, n, s) {
            return e.each(a, function () {
                i -= parseFloat(e.css(t, "padding" + this)) || 0, n && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), s && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
            }), i
        }

        var a = "Width" === n ? ["Left", "Right"] : ["Top", "Bottom"], o = n.toLowerCase(), r = {innerWidth: e.fn.innerWidth, innerHeight: e.fn.innerHeight, outerWidth: e.fn.outerWidth, outerHeight: e.fn.outerHeight};
        e.fn["inner" + n] = function (i) {
            return i === t ? r["inner" + n].call(this) : this.each(function () {
                e(this).css(o, s(this, i) + "px")
            })
        }, e.fn["outer" + n] = function (t, i) {
            return"number" != typeof t ? r["outer" + n].call(this, t) : this.each(function () {
                e(this).css(o, s(this, t, !0, i) + "px")
            })
        }
    }), e.fn.addBack || (e.fn.addBack = function (e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function (t) {
        return function (i) {
            return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this)
        }
    }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.support.selectstart = "onselectstart"in document.createElement("div"), e.fn.extend({disableSelection: function () {
        return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (e) {
            e.preventDefault()
        })
    }, enableSelection: function () {
        return this.unbind(".ui-disableSelection")
    }}), e.extend(e.ui, {plugin: {add: function (t, i, n) {
        var s, a = e.ui[t].prototype;
        for (s in n)a.plugins[s] = a.plugins[s] || [], a.plugins[s].push([i, n[s]])
    }, call: function (e, t, i) {
        var n, s = e.plugins[t];
        if (s && e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType)for (n = 0; s.length > n; n++)e.options[s[n][0]] && s[n][1].apply(e.element, i)
    }}, hasScroll: function (t, i) {
        if ("hidden" === e(t).css("overflow"))return!1;
        var n = i && "left" === i ? "scrollLeft" : "scrollTop", s = !1;
        return t[n] > 0 ? !0 : (t[n] = 1, s = t[n] > 0, t[n] = 0, s)
    }})
})(jQuery);
(function (t, e) {
    var i = 0, s = Array.prototype.slice, n = t.cleanData;
    t.cleanData = function (e) {
        for (var i, s = 0; null != (i = e[s]); s++)try {
            t(i).triggerHandler("remove")
        } catch (o) {
        }
        n(e)
    }, t.widget = function (i, s, n) {
        var o, a, r, h, l = {}, c = i.split(".")[0];
        i = i.split(".")[1], o = c + "-" + i, n || (n = s, s = t.Widget), t.expr[":"][o.toLowerCase()] = function (e) {
            return!!t.data(e, o)
        }, t[c] = t[c] || {}, a = t[c][i], r = t[c][i] = function (t, i) {
            return this._createWidget ? (arguments.length && this._createWidget(t, i), e) : new r(t, i)
        }, t.extend(r, a, {version: n.version, _proto: t.extend({}, n), _childConstructors: []}), h = new s, h.options = t.widget.extend({}, h.options), t.each(n, function (i, n) {
            return t.isFunction(n) ? (l[i] = function () {
                var t = function () {
                    return s.prototype[i].apply(this, arguments)
                }, e = function (t) {
                    return s.prototype[i].apply(this, t)
                };
                return function () {
                    var i, s = this._super, o = this._superApply;
                    return this._super = t, this._superApply = e, i = n.apply(this, arguments), this._super = s, this._superApply = o, i
                }
            }(), e) : (l[i] = n, e)
        }), r.prototype = t.widget.extend(h, {widgetEventPrefix: a ? h.widgetEventPrefix || i : i}, l, {constructor: r, namespace: c, widgetName: i, widgetFullName: o}), a ? (t.each(a._childConstructors, function (e, i) {
            var s = i.prototype;
            t.widget(s.namespace + "." + s.widgetName, r, i._proto)
        }), delete a._childConstructors) : s._childConstructors.push(r), t.widget.bridge(i, r)
    }, t.widget.extend = function (i) {
        for (var n, o, a = s.call(arguments, 1), r = 0, h = a.length; h > r; r++)for (n in a[r])o = a[r][n], a[r].hasOwnProperty(n) && o !== e && (i[n] = t.isPlainObject(o) ? t.isPlainObject(i[n]) ? t.widget.extend({}, i[n], o) : t.widget.extend({}, o) : o);
        return i
    }, t.widget.bridge = function (i, n) {
        var o = n.prototype.widgetFullName || i;
        t.fn[i] = function (a) {
            var r = "string" == typeof a, h = s.call(arguments, 1), l = this;
            return a = !r && h.length ? t.widget.extend.apply(null, [a].concat(h)) : a, r ? this.each(function () {
                var s, n = t.data(this, o);
                return n ? t.isFunction(n[a]) && "_" !== a.charAt(0) ? (s = n[a].apply(n, h), s !== n && s !== e ? (l = s && s.jquery ? l.pushStack(s.get()) : s, !1) : e) : t.error("no such method '" + a + "' for " + i + " widget instance") : t.error("cannot call methods on " + i + " prior to initialization; " + "attempted to call method '" + a + "'")
            }) : this.each(function () {
                var e = t.data(this, o);
                e ? e.option(a || {})._init() : t.data(this, o, new n(a, this))
            }), l
        }
    }, t.Widget = function () {
    }, t.Widget._childConstructors = [], t.Widget.prototype = {widgetName: "widget", widgetEventPrefix: "", defaultElement: "<div>", options: {disabled: !1, create: null}, _createWidget: function (e, s) {
        s = t(s || this.defaultElement || this)[0], this.element = t(s), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this.bindings = t(), this.hoverable = t(), this.focusable = t(), s !== this && (t.data(s, this.widgetFullName, this), this._on(!0, this.element, {remove: function (t) {
            t.target === s && this.destroy()
        }}), this.document = t(s.style ? s.ownerDocument : s.document || s), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
    }, _getCreateOptions: t.noop, _getCreateEventData: t.noop, _create: t.noop, _init: t.noop, destroy: function () {
        this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
    }, _destroy: t.noop, widget: function () {
        return this.element
    }, option: function (i, s) {
        var n, o, a, r = i;
        if (0 === arguments.length)return t.widget.extend({}, this.options);
        if ("string" == typeof i)if (r = {}, n = i.split("."), i = n.shift(), n.length) {
            for (o = r[i] = t.widget.extend({}, this.options[i]), a = 0; n.length - 1 > a; a++)o[n[a]] = o[n[a]] || {}, o = o[n[a]];
            if (i = n.pop(), 1 === arguments.length)return o[i] === e ? null : o[i];
            o[i] = s
        } else {
            if (1 === arguments.length)return this.options[i] === e ? null : this.options[i];
            r[i] = s
        }
        return this._setOptions(r), this
    }, _setOptions: function (t) {
        var e;
        for (e in t)this._setOption(e, t[e]);
        return this
    }, _setOption: function (t, e) {
        return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!e).attr("aria-disabled", e), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
    }, enable: function () {
        return this._setOption("disabled", !1)
    }, disable: function () {
        return this._setOption("disabled", !0)
    }, _on: function (i, s, n) {
        var o, a = this;
        "boolean" != typeof i && (n = s, s = i, i = !1), n ? (s = o = t(s), this.bindings = this.bindings.add(s)) : (n = s, s = this.element, o = this.widget()), t.each(n, function (n, r) {
            function h() {
                return i || a.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? a[r] : r).apply(a, arguments) : e
            }

            "string" != typeof r && (h.guid = r.guid = r.guid || h.guid || t.guid++);
            var l = n.match(/^(\w+)\s*(.*)$/), c = l[1] + a.eventNamespace, u = l[2];
            u ? o.delegate(u, c, h) : s.bind(c, h)
        })
    }, _off: function (t, e) {
        e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(e).undelegate(e)
    }, _delay: function (t, e) {
        function i() {
            return("string" == typeof t ? s[t] : t).apply(s, arguments)
        }

        var s = this;
        return setTimeout(i, e || 0)
    }, _hoverable: function (e) {
        this.hoverable = this.hoverable.add(e), this._on(e, {mouseenter: function (e) {
            t(e.currentTarget).addClass("ui-state-hover")
        }, mouseleave: function (e) {
            t(e.currentTarget).removeClass("ui-state-hover")
        }})
    }, _focusable: function (e) {
        this.focusable = this.focusable.add(e), this._on(e, {focusin: function (e) {
            t(e.currentTarget).addClass("ui-state-focus")
        }, focusout: function (e) {
            t(e.currentTarget).removeClass("ui-state-focus")
        }})
    }, _trigger: function (e, i, s) {
        var n, o, a = this.options[e];
        if (s = s || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent)for (n in o)n in i || (i[n] = o[n]);
        return this.element.trigger(i, s), !(t.isFunction(a) && a.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
    }}, t.each({show: "fadeIn", hide: "fadeOut"}, function (e, i) {
        t.Widget.prototype["_" + e] = function (s, n, o) {
            "string" == typeof n && (n = {effect: n});
            var a, r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : e;
            n = n || {}, "number" == typeof n && (n = {duration: n}), a = !t.isEmptyObject(n), n.complete = o, n.delay && s.delay(n.delay), a && t.effects && t.effects.effect[r] ? s[e](n) : r !== e && s[r] ? s[r](n.duration, n.easing, o) : s.queue(function (i) {
                t(this)[e](), o && o.call(s[0]), i()
            })
        }
    })
})(jQuery);
(function (t) {
    var e = !1;
    t(document).mouseup(function () {
        e = !1
    }), t.widget("ui.mouse", {version: "1.10.4", options: {cancel: "input,textarea,button,select,option", distance: 1, delay: 0}, _mouseInit: function () {
        var e = this;
        this.element.bind("mousedown." + this.widgetName,function (t) {
            return e._mouseDown(t)
        }).bind("click." + this.widgetName, function (i) {
            return!0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : undefined
        }), this.started = !1
    }, _mouseDestroy: function () {
        this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
    }, _mouseDown: function (i) {
        if (!e) {
            this._mouseStarted && this._mouseUp(i), this._mouseDownEvent = i;
            var s = this, n = 1 === i.which, a = "string" == typeof this.options.cancel && i.target.nodeName ? t(i.target).closest(this.options.cancel).length : !1;
            return n && !a && this._mouseCapture(i) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                s.mouseDelayMet = !0
            }, this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = this._mouseStart(i) !== !1, !this._mouseStarted) ? (i.preventDefault(), !0) : (!0 === t.data(i.target, this.widgetName + ".preventClickEvent") && t.removeData(i.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (t) {
                return s._mouseMove(t)
            }, this._mouseUpDelegate = function (t) {
                return s._mouseUp(t)
            }, t(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), i.preventDefault(), e = !0, !0)) : !0
        }
    }, _mouseMove: function (e) {
        return t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button ? this._mouseUp(e) : this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
    }, _mouseUp: function (e) {
        return t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), !1
    }, _mouseDistanceMet: function (t) {
        return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
    }, _mouseDelayMet: function () {
        return this.mouseDelayMet
    }, _mouseStart: function () {
    }, _mouseDrag: function () {
    }, _mouseStop: function () {
    }, _mouseCapture: function () {
        return!0
    }})
})(jQuery);
(function (t, e) {
    function i(t, e, i) {
        return[parseFloat(t[0]) * (p.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (p.test(t[1]) ? i / 100 : 1)]
    }

    function s(e, i) {
        return parseInt(t.css(e, i), 10) || 0
    }

    function n(e) {
        var i = e[0];
        return 9 === i.nodeType ? {width: e.width(), height: e.height(), offset: {top: 0, left: 0}} : t.isWindow(i) ? {width: e.width(), height: e.height(), offset: {top: e.scrollTop(), left: e.scrollLeft()}} : i.preventDefault ? {width: 0, height: 0, offset: {top: i.pageY, left: i.pageX}} : {width: e.outerWidth(), height: e.outerHeight(), offset: e.offset()}
    }

    t.ui = t.ui || {};
    var a, o = Math.max, r = Math.abs, l = Math.round, h = /left|center|right/, c = /top|center|bottom/, u = /[\+\-]\d+(\.[\d]+)?%?/, d = /^\w+/, p = /%$/, f = t.fn.position;
    t.position = {scrollbarWidth: function () {
        if (a !== e)return a;
        var i, s, n = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), o = n.children()[0];
        return t("body").append(n), i = o.offsetWidth, n.css("overflow", "scroll"), s = o.offsetWidth, i === s && (s = n[0].clientWidth), n.remove(), a = i - s
    }, getScrollInfo: function (e) {
        var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"), s = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"), n = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth, a = "scroll" === s || "auto" === s && e.height < e.element[0].scrollHeight;
        return{width: a ? t.position.scrollbarWidth() : 0, height: n ? t.position.scrollbarWidth() : 0}
    }, getWithinInfo: function (e) {
        var i = t(e || window), s = t.isWindow(i[0]), n = !!i[0] && 9 === i[0].nodeType;
        return{element: i, isWindow: s, isDocument: n, offset: i.offset() || {left: 0, top: 0}, scrollLeft: i.scrollLeft(), scrollTop: i.scrollTop(), width: s ? i.width() : i.outerWidth(), height: s ? i.height() : i.outerHeight()}
    }}, t.fn.position = function (e) {
        if (!e || !e.of)return f.apply(this, arguments);
        e = t.extend({}, e);
        var a, p, g, m, v, _, b = t(e.of), y = t.position.getWithinInfo(e.within), k = t.position.getScrollInfo(y), w = (e.collision || "flip").split(" "), D = {};
        return _ = n(b), b[0].preventDefault && (e.at = "left top"), p = _.width, g = _.height, m = _.offset, v = t.extend({}, m), t.each(["my", "at"], function () {
            var t, i, s = (e[this] || "").split(" ");
            1 === s.length && (s = h.test(s[0]) ? s.concat(["center"]) : c.test(s[0]) ? ["center"].concat(s) : ["center", "center"]), s[0] = h.test(s[0]) ? s[0] : "center", s[1] = c.test(s[1]) ? s[1] : "center", t = u.exec(s[0]), i = u.exec(s[1]), D[this] = [t ? t[0] : 0, i ? i[0] : 0], e[this] = [d.exec(s[0])[0], d.exec(s[1])[0]]
        }), 1 === w.length && (w[1] = w[0]), "right" === e.at[0] ? v.left += p : "center" === e.at[0] && (v.left += p / 2), "bottom" === e.at[1] ? v.top += g : "center" === e.at[1] && (v.top += g / 2), a = i(D.at, p, g), v.left += a[0], v.top += a[1], this.each(function () {
            var n, h, c = t(this), u = c.outerWidth(), d = c.outerHeight(), f = s(this, "marginLeft"), _ = s(this, "marginTop"), x = u + f + s(this, "marginRight") + k.width, C = d + _ + s(this, "marginBottom") + k.height, M = t.extend({}, v), T = i(D.my, c.outerWidth(), c.outerHeight());
            "right" === e.my[0] ? M.left -= u : "center" === e.my[0] && (M.left -= u / 2), "bottom" === e.my[1] ? M.top -= d : "center" === e.my[1] && (M.top -= d / 2), M.left += T[0], M.top += T[1], t.support.offsetFractions || (M.left = l(M.left), M.top = l(M.top)), n = {marginLeft: f, marginTop: _}, t.each(["left", "top"], function (i, s) {
                t.ui.position[w[i]] && t.ui.position[w[i]][s](M, {targetWidth: p, targetHeight: g, elemWidth: u, elemHeight: d, collisionPosition: n, collisionWidth: x, collisionHeight: C, offset: [a[0] + T[0], a[1] + T[1]], my: e.my, at: e.at, within: y, elem: c})
            }), e.using && (h = function (t) {
                var i = m.left - M.left, s = i + p - u, n = m.top - M.top, a = n + g - d, l = {target: {element: b, left: m.left, top: m.top, width: p, height: g}, element: {element: c, left: M.left, top: M.top, width: u, height: d}, horizontal: 0 > s ? "left" : i > 0 ? "right" : "center", vertical: 0 > a ? "top" : n > 0 ? "bottom" : "middle"};
                u > p && p > r(i + s) && (l.horizontal = "center"), d > g && g > r(n + a) && (l.vertical = "middle"), l.important = o(r(i), r(s)) > o(r(n), r(a)) ? "horizontal" : "vertical", e.using.call(this, t, l)
            }), c.offset(t.extend(M, {using: h}))
        })
    }, t.ui.position = {fit: {left: function (t, e) {
        var i, s = e.within, n = s.isWindow ? s.scrollLeft : s.offset.left, a = s.width, r = t.left - e.collisionPosition.marginLeft, l = n - r, h = r + e.collisionWidth - a - n;
        e.collisionWidth > a ? l > 0 && 0 >= h ? (i = t.left + l + e.collisionWidth - a - n, t.left += l - i) : t.left = h > 0 && 0 >= l ? n : l > h ? n + a - e.collisionWidth : n : l > 0 ? t.left += l : h > 0 ? t.left -= h : t.left = o(t.left - r, t.left)
    }, top: function (t, e) {
        var i, s = e.within, n = s.isWindow ? s.scrollTop : s.offset.top, a = e.within.height, r = t.top - e.collisionPosition.marginTop, l = n - r, h = r + e.collisionHeight - a - n;
        e.collisionHeight > a ? l > 0 && 0 >= h ? (i = t.top + l + e.collisionHeight - a - n, t.top += l - i) : t.top = h > 0 && 0 >= l ? n : l > h ? n + a - e.collisionHeight : n : l > 0 ? t.top += l : h > 0 ? t.top -= h : t.top = o(t.top - r, t.top)
    }}, flip: {left: function (t, e) {
        var i, s, n = e.within, a = n.offset.left + n.scrollLeft, o = n.width, l = n.isWindow ? n.scrollLeft : n.offset.left, h = t.left - e.collisionPosition.marginLeft, c = h - l, u = h + e.collisionWidth - o - l, d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0, p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0, f = -2 * e.offset[0];
        0 > c ? (i = t.left + d + p + f + e.collisionWidth - o - a, (0 > i || r(c) > i) && (t.left += d + p + f)) : u > 0 && (s = t.left - e.collisionPosition.marginLeft + d + p + f - l, (s > 0 || u > r(s)) && (t.left += d + p + f))
    }, top: function (t, e) {
        var i, s, n = e.within, a = n.offset.top + n.scrollTop, o = n.height, l = n.isWindow ? n.scrollTop : n.offset.top, h = t.top - e.collisionPosition.marginTop, c = h - l, u = h + e.collisionHeight - o - l, d = "top" === e.my[1], p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0, f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0, g = -2 * e.offset[1];
        0 > c ? (s = t.top + p + f + g + e.collisionHeight - o - a, t.top + p + f + g > c && (0 > s || r(c) > s) && (t.top += p + f + g)) : u > 0 && (i = t.top - e.collisionPosition.marginTop + p + f + g - l, t.top + p + f + g > u && (i > 0 || u > r(i)) && (t.top += p + f + g))
    }}, flipfit: {left: function () {
        t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
    }, top: function () {
        t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
    }}}, function () {
        var e, i, s, n, a, o = document.getElementsByTagName("body")[0], r = document.createElement("div");
        e = document.createElement(o ? "div" : "body"), s = {visibility: "hidden", width: 0, height: 0, border: 0, margin: 0, background: "none"}, o && t.extend(s, {position: "absolute", left: "-1000px", top: "-1000px"});
        for (a in s)e.style[a] = s[a];
        e.appendChild(r), i = o || document.documentElement, i.insertBefore(e, i.firstChild), r.style.cssText = "position: absolute; left: 10.7432222px;", n = t(r).offset().left, t.support.offsetFractions = n > 10 && 11 > n, e.innerHTML = "", i.removeChild(e)
    }()
})(jQuery);
(function (e) {
    var t = 0, i = {}, a = {};
    i.height = i.paddingTop = i.paddingBottom = i.borderTopWidth = i.borderBottomWidth = "hide", a.height = a.paddingTop = a.paddingBottom = a.borderTopWidth = a.borderBottomWidth = "show", e.widget("ui.accordion", {version: "1.10.4", options: {active: 0, animate: {}, collapsible: !1, event: "click", header: "> li > :first-child,> :not(li):even", heightStyle: "auto", icons: {activeHeader: "ui-icon-triangle-1-s", header: "ui-icon-triangle-1-e"}, activate: null, beforeActivate: null}, _create: function () {
        var t = this.options;
        this.prevShow = this.prevHide = e(), this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"), t.collapsible || t.active !== !1 && null != t.active || (t.active = 0), this._processPanels(), 0 > t.active && (t.active += this.headers.length), this._refresh()
    }, _getCreateEventData: function () {
        return{header: this.active, panel: this.active.length ? this.active.next() : e(), content: this.active.length ? this.active.next() : e()}
    }, _createIcons: function () {
        var t = this.options.icons;
        t && (e("<span>").addClass("ui-accordion-header-icon ui-icon " + t.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader), this.headers.addClass("ui-accordion-icons"))
    }, _destroyIcons: function () {
        this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
    }, _destroy: function () {
        var e;
        this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function () {
            /^ui-accordion/.test(this.id) && this.removeAttribute("id")
        }), this._destroyIcons(), e = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function () {
            /^ui-accordion/.test(this.id) && this.removeAttribute("id")
        }), "content" !== this.options.heightStyle && e.css("height", "")
    }, _setOption: function (e, t) {
        return"active" === e ? (this._activate(t), undefined) : ("event" === e && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(t)), this._super(e, t), "collapsible" !== e || t || this.options.active !== !1 || this._activate(0), "icons" === e && (this._destroyIcons(), t && this._createIcons()), "disabled" === e && this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!t), undefined)
    }, _keydown: function (t) {
        if (!t.altKey && !t.ctrlKey) {
            var i = e.ui.keyCode, a = this.headers.length, s = this.headers.index(t.target), n = !1;
            switch (t.keyCode) {
                case i.RIGHT:
                case i.DOWN:
                    n = this.headers[(s + 1) % a];
                    break;
                case i.LEFT:
                case i.UP:
                    n = this.headers[(s - 1 + a) % a];
                    break;
                case i.SPACE:
                case i.ENTER:
                    this._eventHandler(t);
                    break;
                case i.HOME:
                    n = this.headers[0];
                    break;
                case i.END:
                    n = this.headers[a - 1]
            }
            n && (e(t.target).attr("tabIndex", -1), e(n).attr("tabIndex", 0), n.focus(), t.preventDefault())
        }
    }, _panelKeyDown: function (t) {
        t.keyCode === e.ui.keyCode.UP && t.ctrlKey && e(t.currentTarget).prev().focus()
    }, refresh: function () {
        var t = this.options;
        this._processPanels(), t.active === !1 && t.collapsible === !0 || !this.headers.length ? (t.active = !1, this.active = e()) : t.active === !1 ? this._activate(0) : this.active.length && !e.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (t.active = !1, this.active = e()) : this._activate(Math.max(0, t.active - 1)) : t.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
    }, _processPanels: function () {
        this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"), this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()
    }, _refresh: function () {
        var i, a = this.options, s = a.heightStyle, n = this.element.parent(), r = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++t);
        this.active = this._findActive(a.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"), this.active.next().addClass("ui-accordion-content-active").show(), this.headers.attr("role", "tab").each(function (t) {
            var i = e(this), a = i.attr("id"), s = i.next(), n = s.attr("id");
            a || (a = r + "-header-" + t, i.attr("id", a)), n || (n = r + "-panel-" + t, s.attr("id", n)), i.attr("aria-controls", n), s.attr("aria-labelledby", a)
        }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({"aria-selected": "false", "aria-expanded": "false", tabIndex: -1}).next().attr({"aria-hidden": "true"}).hide(), this.active.length ? this.active.attr({"aria-selected": "true", "aria-expanded": "true", tabIndex: 0}).next().attr({"aria-hidden": "false"}) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(a.event), "fill" === s ? (i = n.height(), this.element.siblings(":visible").each(function () {
            var t = e(this), a = t.css("position");
            "absolute" !== a && "fixed" !== a && (i -= t.outerHeight(!0))
        }), this.headers.each(function () {
            i -= e(this).outerHeight(!0)
        }), this.headers.next().each(function () {
            e(this).height(Math.max(0, i - e(this).innerHeight() + e(this).height()))
        }).css("overflow", "auto")) : "auto" === s && (i = 0, this.headers.next().each(function () {
            i = Math.max(i, e(this).css("height", "").height())
        }).height(i))
    }, _activate: function (t) {
        var i = this._findActive(t)[0];
        i !== this.active[0] && (i = i || this.active[0], this._eventHandler({target: i, currentTarget: i, preventDefault: e.noop}))
    }, _findActive: function (t) {
        return"number" == typeof t ? this.headers.eq(t) : e()
    }, _setupEvents: function (t) {
        var i = {keydown: "_keydown"};
        t && e.each(t.split(" "), function (e, t) {
            i[t] = "_eventHandler"
        }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {keydown: "_panelKeyDown"}), this._hoverable(this.headers), this._focusable(this.headers)
    }, _eventHandler: function (t) {
        var i = this.options, a = this.active, s = e(t.currentTarget), n = s[0] === a[0], r = n && i.collapsible, o = r ? e() : s.next(), h = a.next(), d = {oldHeader: a, oldPanel: h, newHeader: r ? e() : s, newPanel: o};
        t.preventDefault(), n && !i.collapsible || this._trigger("beforeActivate", t, d) === !1 || (i.active = r ? !1 : this.headers.index(s), this.active = n ? e() : s, this._toggle(d), a.removeClass("ui-accordion-header-active ui-state-active"), i.icons && a.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header), n || (s.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), i.icons && s.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader), s.next().addClass("ui-accordion-content-active")))
    }, _toggle: function (t) {
        var i = t.newPanel, a = this.prevShow.length ? this.prevShow : t.oldPanel;
        this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = a, this.options.animate ? this._animate(i, a, t) : (a.hide(), i.show(), this._toggleComplete(t)), a.attr({"aria-hidden": "true"}), a.prev().attr("aria-selected", "false"), i.length && a.length ? a.prev().attr({tabIndex: -1, "aria-expanded": "false"}) : i.length && this.headers.filter(function () {
            return 0 === e(this).attr("tabIndex")
        }).attr("tabIndex", -1), i.attr("aria-hidden", "false").prev().attr({"aria-selected": "true", tabIndex: 0, "aria-expanded": "true"})
    }, _animate: function (e, t, s) {
        var n, r, o, h = this, d = 0, c = e.length && (!t.length || e.index() < t.index()), l = this.options.animate || {}, u = c && l.down || l, v = function () {
            h._toggleComplete(s)
        };
        return"number" == typeof u && (o = u), "string" == typeof u && (r = u), r = r || u.easing || l.easing, o = o || u.duration || l.duration, t.length ? e.length ? (n = e.show().outerHeight(), t.animate(i, {duration: o, easing: r, step: function (e, t) {
            t.now = Math.round(e)
        }}), e.hide().animate(a, {duration: o, easing: r, complete: v, step: function (e, i) {
            i.now = Math.round(e), "height" !== i.prop ? d += i.now : "content" !== h.options.heightStyle && (i.now = Math.round(n - t.outerHeight() - d), d = 0)
        }}), undefined) : t.animate(i, o, r, v) : e.animate(a, o, r, v)
    }, _toggleComplete: function (e) {
        var t = e.oldPanel;
        t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), t.length && (t.parent()[0].className = t.parent()[0].className), this._trigger("activate", null, e)
    }})
})(jQuery);
(function (e) {
    e.widget("ui.autocomplete", {version: "1.10.4", defaultElement: "<input>", options: {appendTo: null, autoFocus: !1, delay: 300, minLength: 1, position: {my: "left top", at: "left bottom", collision: "none"}, source: null, change: null, close: null, focus: null, open: null, response: null, search: null, select: null}, requestIndex: 0, pending: 0, _create: function () {
        var t, i, s, n = this.element[0].nodeName.toLowerCase(), a = "textarea" === n, o = "input" === n;
        this.isMultiLine = a ? !0 : o ? !1 : this.element.prop("isContentEditable"), this.valueMethod = this.element[a || o ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {keydown: function (n) {
            if (this.element.prop("readOnly"))return t = !0, s = !0, i = !0, undefined;
            t = !1, s = !1, i = !1;
            var a = e.ui.keyCode;
            switch (n.keyCode) {
                case a.PAGE_UP:
                    t = !0, this._move("previousPage", n);
                    break;
                case a.PAGE_DOWN:
                    t = !0, this._move("nextPage", n);
                    break;
                case a.UP:
                    t = !0, this._keyEvent("previous", n);
                    break;
                case a.DOWN:
                    t = !0, this._keyEvent("next", n);
                    break;
                case a.ENTER:
                case a.NUMPAD_ENTER:
                    this.menu.active && (t = !0, n.preventDefault(), this.menu.select(n));
                    break;
                case a.TAB:
                    this.menu.active && this.menu.select(n);
                    break;
                case a.ESCAPE:
                    this.menu.element.is(":visible") && (this._value(this.term), this.close(n), n.preventDefault());
                    break;
                default:
                    i = !0, this._searchTimeout(n)
            }
        }, keypress: function (s) {
            if (t)return t = !1, (!this.isMultiLine || this.menu.element.is(":visible")) && s.preventDefault(), undefined;
            if (!i) {
                var n = e.ui.keyCode;
                switch (s.keyCode) {
                    case n.PAGE_UP:
                        this._move("previousPage", s);
                        break;
                    case n.PAGE_DOWN:
                        this._move("nextPage", s);
                        break;
                    case n.UP:
                        this._keyEvent("previous", s);
                        break;
                    case n.DOWN:
                        this._keyEvent("next", s)
                }
            }
        }, input: function (e) {
            return s ? (s = !1, e.preventDefault(), undefined) : (this._searchTimeout(e), undefined)
        }, focus: function () {
            this.selectedItem = null, this.previous = this._value()
        }, blur: function (e) {
            return this.cancelBlur ? (delete this.cancelBlur, undefined) : (clearTimeout(this.searching), this.close(e), this._change(e), undefined)
        }}), this._initSource(), this.menu = e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role: null}).hide().data("ui-menu"), this._on(this.menu.element, {mousedown: function (t) {
            t.preventDefault(), this.cancelBlur = !0, this._delay(function () {
                delete this.cancelBlur
            });
            var i = this.menu.element[0];
            e(t.target).closest(".ui-menu-item").length || this._delay(function () {
                var t = this;
                this.document.one("mousedown", function (s) {
                    s.target === t.element[0] || s.target === i || e.contains(i, s.target) || t.close()
                })
            })
        }, menufocus: function (t, i) {
            if (this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type)))return this.menu.blur(), this.document.one("mousemove", function () {
                e(t.target).trigger(t.originalEvent)
            }), undefined;
            var s = i.item.data("ui-autocomplete-item");
            !1 !== this._trigger("focus", t, {item: s}) ? t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(s.value) : this.liveRegion.text(s.value)
        }, menuselect: function (e, t) {
            var i = t.item.data("ui-autocomplete-item"), s = this.previous;
            this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = s, this._delay(function () {
                this.previous = s, this.selectedItem = i
            })), !1 !== this._trigger("select", e, {item: i}) && this._value(i.value), this.term = this._value(), this.close(e), this.selectedItem = i
        }}), this.liveRegion = e("<span>", {role: "status", "aria-live": "polite"}).addClass("ui-helper-hidden-accessible").insertBefore(this.element), this._on(this.window, {beforeunload: function () {
            this.element.removeAttr("autocomplete")
        }})
    }, _destroy: function () {
        clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
    }, _setOption: function (e, t) {
        this._super(e, t), "source" === e && this._initSource(), "appendTo" === e && this.menu.element.appendTo(this._appendTo()), "disabled" === e && t && this.xhr && this.xhr.abort()
    }, _appendTo: function () {
        var t = this.options.appendTo;
        return t && (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)), t || (t = this.element.closest(".ui-front")), t.length || (t = this.document[0].body), t
    }, _initSource: function () {
        var t, i, s = this;
        e.isArray(this.options.source) ? (t = this.options.source, this.source = function (i, s) {
            s(e.ui.autocomplete.filter(t, i.term))
        }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function (t, n) {
            s.xhr && s.xhr.abort(), s.xhr = e.ajax({url: i, data: t, dataType: "json", success: function (e) {
                n(e)
            }, error: function () {
                n([])
            }})
        }) : this.source = this.options.source
    }, _searchTimeout: function (e) {
        clearTimeout(this.searching), this.searching = this._delay(function () {
            this.term !== this._value() && (this.selectedItem = null, this.search(null, e))
        }, this.options.delay)
    }, search: function (e, t) {
        return e = null != e ? e : this._value(), this.term = this._value(), e.length < this.options.minLength ? this.close(t) : this._trigger("search", t) !== !1 ? this._search(e) : undefined
    }, _search: function (e) {
        this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({term: e}, this._response())
    }, _response: function () {
        var t = ++this.requestIndex;
        return e.proxy(function (e) {
            t === this.requestIndex && this.__response(e), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading")
        }, this)
    }, __response: function (e) {
        e && (e = this._normalize(e)), this._trigger("response", null, {content: e}), !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e), this._trigger("open")) : this._close()
    }, close: function (e) {
        this.cancelSearch = !0, this._close(e)
    }, _close: function (e) {
        this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", e))
    }, _change: function (e) {
        this.previous !== this._value() && this._trigger("change", e, {item: this.selectedItem})
    }, _normalize: function (t) {
        return t.length && t[0].label && t[0].value ? t : e.map(t, function (t) {
            return"string" == typeof t ? {label: t, value: t} : e.extend({label: t.label || t.value, value: t.value || t.label}, t)
        })
    }, _suggest: function (t) {
        var i = this.menu.element.empty();
        this._renderMenu(i, t), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(e.extend({of: this.element}, this.options.position)), this.options.autoFocus && this.menu.next()
    }, _resizeMenu: function () {
        var e = this.menu.element;
        e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
    }, _renderMenu: function (t, i) {
        var s = this;
        e.each(i, function (e, i) {
            s._renderItemData(t, i)
        })
    }, _renderItemData: function (e, t) {
        return this._renderItem(e, t).data("ui-autocomplete-item", t)
    }, _renderItem: function (t, i) {
        return e("<li>").append(e("<a>").text(i.label)).appendTo(t)
    }, _move: function (e, t) {
        return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e) ? (this._value(this.term), this.menu.blur(), undefined) : (this.menu[e](t), undefined) : (this.search(null, t), undefined)
    }, widget: function () {
        return this.menu.element
    }, _value: function () {
        return this.valueMethod.apply(this.element, arguments)
    }, _keyEvent: function (e, t) {
        (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(e, t), t.preventDefault())
    }}), e.extend(e.ui.autocomplete, {escapeRegex: function (e) {
        return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
    }, filter: function (t, i) {
        var s = RegExp(e.ui.autocomplete.escapeRegex(i), "i");
        return e.grep(t, function (e) {
            return s.test(e.label || e.value || e)
        })
    }}), e.widget("ui.autocomplete", e.ui.autocomplete, {options: {messages: {noResults: "No search results.", results: function (e) {
        return e + (e > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
    }}}, __response: function (e) {
        var t;
        this._superApply(arguments), this.options.disabled || this.cancelSearch || (t = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.text(t))
    }})
})(jQuery);
(function (e) {
    var t, i = "ui-button ui-widget ui-state-default ui-corner-all", n = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only", s = function () {
        var t = e(this);
        setTimeout(function () {
            t.find(":ui-button").button("refresh")
        }, 1)
    }, a = function (t) {
        var i = t.name, n = t.form, s = e([]);
        return i && (i = i.replace(/'/g, "\\'"), s = n ? e(n).find("[name='" + i + "']") : e("[name='" + i + "']", t.ownerDocument).filter(function () {
            return!this.form
        })), s
    };
    e.widget("ui.button", {version: "1.10.4", defaultElement: "<button>", options: {disabled: null, text: !0, label: null, icons: {primary: null, secondary: null}}, _create: function () {
        this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, s), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
        var n = this, o = this.options, r = "checkbox" === this.type || "radio" === this.type, h = r ? "" : "ui-state-active";
        null === o.label && (o.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(i).attr("role", "button").bind("mouseenter" + this.eventNamespace,function () {
            o.disabled || this === t && e(this).addClass("ui-state-active")
        }).bind("mouseleave" + this.eventNamespace,function () {
            o.disabled || e(this).removeClass(h)
        }).bind("click" + this.eventNamespace, function (e) {
            o.disabled && (e.preventDefault(), e.stopImmediatePropagation())
        }), this._on({focus: function () {
            this.buttonElement.addClass("ui-state-focus")
        }, blur: function () {
            this.buttonElement.removeClass("ui-state-focus")
        }}), r && this.element.bind("change" + this.eventNamespace, function () {
            n.refresh()
        }), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
            return o.disabled ? !1 : undefined
        }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
            if (o.disabled)return!1;
            e(this).addClass("ui-state-active"), n.buttonElement.attr("aria-pressed", "true");
            var t = n.element[0];
            a(t).not(t).map(function () {
                return e(this).button("widget")[0]
            }).removeClass("ui-state-active").attr("aria-pressed", "false")
        }) : (this.buttonElement.bind("mousedown" + this.eventNamespace,function () {
            return o.disabled ? !1 : (e(this).addClass("ui-state-active"), t = this, n.document.one("mouseup", function () {
                t = null
            }), undefined)
        }).bind("mouseup" + this.eventNamespace,function () {
            return o.disabled ? !1 : (e(this).removeClass("ui-state-active"), undefined)
        }).bind("keydown" + this.eventNamespace,function (t) {
            return o.disabled ? !1 : ((t.keyCode === e.ui.keyCode.SPACE || t.keyCode === e.ui.keyCode.ENTER) && e(this).addClass("ui-state-active"), undefined)
        }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function () {
            e(this).removeClass("ui-state-active")
        }), this.buttonElement.is("a") && this.buttonElement.keyup(function (t) {
            t.keyCode === e.ui.keyCode.SPACE && e(this).click()
        })), this._setOption("disabled", o.disabled), this._resetButton()
    }, _determineButtonType: function () {
        var e, t, i;
        this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button", "checkbox" === this.type || "radio" === this.type ? (e = this.element.parents().last(), t = "label[for='" + this.element.attr("id") + "']", this.buttonElement = e.find(t), this.buttonElement.length || (e = e.length ? e.siblings() : this.element.siblings(), this.buttonElement = e.filter(t), this.buttonElement.length || (this.buttonElement = e.find(t))), this.element.addClass("ui-helper-hidden-accessible"), i = this.element.is(":checked"), i && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element
    }, widget: function () {
        return this.buttonElement
    }, _destroy: function () {
        this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(i + " ui-state-active " + n).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
    }, _setOption: function (e, t) {
        return this._super(e, t), "disabled" === e ? (this.element.prop("disabled", !!t), t && this.buttonElement.removeClass("ui-state-focus"), undefined) : (this._resetButton(), undefined)
    }, refresh: function () {
        var t = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
        t !== this.options.disabled && this._setOption("disabled", t), "radio" === this.type ? a(this.element[0]).each(function () {
            e(this).is(":checked") ? e(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
        }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
    }, _resetButton: function () {
        if ("input" === this.type)return this.options.label && this.element.val(this.options.label), undefined;
        var t = this.buttonElement.removeClass(n), i = e("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(), s = this.options.icons, a = s.primary && s.secondary, o = [];
        s.primary || s.secondary ? (this.options.text && o.push("ui-button-text-icon" + (a ? "s" : s.primary ? "-primary" : "-secondary")), s.primary && t.prepend("<span class='ui-button-icon-primary ui-icon " + s.primary + "'></span>"), s.secondary && t.append("<span class='ui-button-icon-secondary ui-icon " + s.secondary + "'></span>"), this.options.text || (o.push(a ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || t.attr("title", e.trim(i)))) : o.push("ui-button-text-only"), t.addClass(o.join(" "))
    }}), e.widget("ui.buttonset", {version: "1.10.4", options: {items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"}, _create: function () {
        this.element.addClass("ui-buttonset")
    }, _init: function () {
        this.refresh()
    }, _setOption: function (e, t) {
        "disabled" === e && this.buttons.button("option", e, t), this._super(e, t)
    }, refresh: function () {
        var t = "rtl" === this.element.css("direction");
        this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function () {
            return e(this).button("widget")[0]
        }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(t ? "ui-corner-left" : "ui-corner-right").end().end()
    }, _destroy: function () {
        this.element.removeClass("ui-buttonset"), this.buttons.map(function () {
            return e(this).button("widget")[0]
        }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
    }})
})(jQuery);
(function (e, t) {
    function i() {
        this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {closeText: "Done", prevText: "Prev", nextText: "Next", currentText: "Today", monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], weekHeader: "Wk", dateFormat: "mm/dd/yy", firstDay: 0, isRTL: !1, showMonthAfterYear: !1, yearSuffix: ""}, this._defaults = {showOn: "focus", showAnim: "fadeIn", showOptions: {}, defaultDate: null, appendText: "", buttonText: "...", buttonImage: "", buttonImageOnly: !1, hideIfNoPrevNext: !1, navigationAsDateFormat: !1, gotoCurrent: !1, changeMonth: !1, changeYear: !1, yearRange: "c-10:c+10", showOtherMonths: !1, selectOtherMonths: !1, showWeek: !1, calculateWeek: this.iso8601Week, shortYearCutoff: "+10", minDate: null, maxDate: null, duration: "fast", beforeShowDay: null, beforeShow: null, onSelect: null, onChangeMonthYear: null, onClose: null, numberOfMonths: 1, showCurrentAtPos: 0, stepMonths: 1, stepBigMonths: 12, altField: "", altFormat: "", constrainInput: !0, showButtonPanel: !1, autoSize: !1, disabled: !1}, e.extend(this._defaults, this.regional[""]), this.dpDiv = a(e("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }

    function a(t) {
        var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return t.delegate(i, "mouseout",function () {
            e(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).removeClass("ui-datepicker-next-hover")
        }).delegate(i, "mouseover", function () {
            e.datepicker._isDisabledDatepicker(n.inline ? t.parent()[0] : n.input[0]) || (e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), e(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).addClass("ui-datepicker-next-hover"))
        })
    }

    function s(t, i) {
        e.extend(t, i);
        for (var a in i)null == i[a] && (t[a] = i[a]);
        return t
    }

    e.extend(e.ui, {datepicker: {version: "1.10.4"}});
    var n, r = "datepicker";
    e.extend(i.prototype, {markerClassName: "hasDatepicker", maxRows: 4, _widgetDatepicker: function () {
        return this.dpDiv
    }, setDefaults: function (e) {
        return s(this._defaults, e || {}), this
    }, _attachDatepicker: function (t, i) {
        var a, s, n;
        a = t.nodeName.toLowerCase(), s = "div" === a || "span" === a, t.id || (this.uuid += 1, t.id = "dp" + this.uuid), n = this._newInst(e(t), s), n.settings = e.extend({}, i || {}), "input" === a ? this._connectDatepicker(t, n) : s && this._inlineDatepicker(t, n)
    }, _newInst: function (t, i) {
        var s = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
        return{id: s, input: t, selectedDay: 0, selectedMonth: 0, selectedYear: 0, drawMonth: 0, drawYear: 0, inline: i, dpDiv: i ? a(e("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv}
    }, _connectDatepicker: function (t, i) {
        var a = e(t);
        i.append = e([]), i.trigger = e([]), a.hasClass(this.markerClassName) || (this._attachments(a, i), a.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(i), e.data(t, r, i), i.settings.disabled && this._disableDatepicker(t))
    }, _attachments: function (t, i) {
        var a, s, n, r = this._get(i, "appendText"), o = this._get(i, "isRTL");
        i.append && i.append.remove(), r && (i.append = e("<span class='" + this._appendClass + "'>" + r + "</span>"), t[o ? "before" : "after"](i.append)), t.unbind("focus", this._showDatepicker), i.trigger && i.trigger.remove(), a = this._get(i, "showOn"), ("focus" === a || "both" === a) && t.focus(this._showDatepicker), ("button" === a || "both" === a) && (s = this._get(i, "buttonText"), n = this._get(i, "buttonImage"), i.trigger = e(this._get(i, "buttonImageOnly") ? e("<img/>").addClass(this._triggerClass).attr({src: n, alt: s, title: s}) : e("<button type='button'></button>").addClass(this._triggerClass).html(n ? e("<img/>").attr({src: n, alt: s, title: s}) : s)), t[o ? "before" : "after"](i.trigger), i.trigger.click(function () {
            return e.datepicker._datepickerShowing && e.datepicker._lastInput === t[0] ? e.datepicker._hideDatepicker() : e.datepicker._datepickerShowing && e.datepicker._lastInput !== t[0] ? (e.datepicker._hideDatepicker(), e.datepicker._showDatepicker(t[0])) : e.datepicker._showDatepicker(t[0]), !1
        }))
    }, _autoSize: function (e) {
        if (this._get(e, "autoSize") && !e.inline) {
            var t, i, a, s, n = new Date(2009, 11, 20), r = this._get(e, "dateFormat");
            r.match(/[DM]/) && (t = function (e) {
                for (i = 0, a = 0, s = 0; e.length > s; s++)e[s].length > i && (i = e[s].length, a = s);
                return a
            }, n.setMonth(t(this._get(e, r.match(/MM/) ? "monthNames" : "monthNamesShort"))), n.setDate(t(this._get(e, r.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - n.getDay())), e.input.attr("size", this._formatDate(e, n).length)
        }
    }, _inlineDatepicker: function (t, i) {
        var a = e(t);
        a.hasClass(this.markerClassName) || (a.addClass(this.markerClassName).append(i.dpDiv), e.data(t, r, i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(t), i.dpDiv.css("display", "block"))
    }, _dialogDatepicker: function (t, i, a, n, o) {
        var u, c, h, l, d, p = this._dialogInst;
        return p || (this.uuid += 1, u = "dp" + this.uuid, this._dialogInput = e("<input type='text' id='" + u + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), e("body").append(this._dialogInput), p = this._dialogInst = this._newInst(this._dialogInput, !1), p.settings = {}, e.data(this._dialogInput[0], r, p)), s(p.settings, n || {}), i = i && i.constructor === Date ? this._formatDate(p, i) : i, this._dialogInput.val(i), this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null, this._pos || (c = document.documentElement.clientWidth, h = document.documentElement.clientHeight, l = document.documentElement.scrollLeft || document.body.scrollLeft, d = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [c / 2 - 100 + l, h / 2 - 150 + d]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), p.settings.onSelect = a, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), e.blockUI && e.blockUI(this.dpDiv), e.data(this._dialogInput[0], r, p), this
    }, _destroyDatepicker: function (t) {
        var i, a = e(t), s = e.data(t, r);
        a.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), e.removeData(t, r), "input" === i ? (s.append.remove(), s.trigger.remove(), a.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && a.removeClass(this.markerClassName).empty())
    }, _enableDatepicker: function (t) {
        var i, a, s = e(t), n = e.data(t, r);
        s.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !1, n.trigger.filter("button").each(function () {
            this.disabled = !1
        }).end().filter("img").css({opacity: "1.0", cursor: ""})) : ("div" === i || "span" === i) && (a = s.children("." + this._inlineClass), a.children().removeClass("ui-state-disabled"), a.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = e.map(this._disabledInputs, function (e) {
            return e === t ? null : e
        }))
    }, _disableDatepicker: function (t) {
        var i, a, s = e(t), n = e.data(t, r);
        s.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !0, n.trigger.filter("button").each(function () {
            this.disabled = !0
        }).end().filter("img").css({opacity: "0.5", cursor: "default"})) : ("div" === i || "span" === i) && (a = s.children("." + this._inlineClass), a.children().addClass("ui-state-disabled"), a.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = e.map(this._disabledInputs, function (e) {
            return e === t ? null : e
        }), this._disabledInputs[this._disabledInputs.length] = t)
    }, _isDisabledDatepicker: function (e) {
        if (!e)return!1;
        for (var t = 0; this._disabledInputs.length > t; t++)if (this._disabledInputs[t] === e)return!0;
        return!1
    }, _getInst: function (t) {
        try {
            return e.data(t, r)
        } catch (i) {
            throw"Missing instance data for this datepicker"
        }
    }, _optionDatepicker: function (i, a, n) {
        var r, o, u, c, h = this._getInst(i);
        return 2 === arguments.length && "string" == typeof a ? "defaults" === a ? e.extend({}, e.datepicker._defaults) : h ? "all" === a ? e.extend({}, h.settings) : this._get(h, a) : null : (r = a || {}, "string" == typeof a && (r = {}, r[a] = n), h && (this._curInst === h && this._hideDatepicker(), o = this._getDateDatepicker(i, !0), u = this._getMinMaxDate(h, "min"), c = this._getMinMaxDate(h, "max"), s(h.settings, r), null !== u && r.dateFormat !== t && r.minDate === t && (h.settings.minDate = this._formatDate(h, u)), null !== c && r.dateFormat !== t && r.maxDate === t && (h.settings.maxDate = this._formatDate(h, c)), "disabled"in r && (r.disabled ? this._disableDatepicker(i) : this._enableDatepicker(i)), this._attachments(e(i), h), this._autoSize(h), this._setDate(h, o), this._updateAlternate(h), this._updateDatepicker(h)), t)
    }, _changeDatepicker: function (e, t, i) {
        this._optionDatepicker(e, t, i)
    }, _refreshDatepicker: function (e) {
        var t = this._getInst(e);
        t && this._updateDatepicker(t)
    }, _setDateDatepicker: function (e, t) {
        var i = this._getInst(e);
        i && (this._setDate(i, t), this._updateDatepicker(i), this._updateAlternate(i))
    }, _getDateDatepicker: function (e, t) {
        var i = this._getInst(e);
        return i && !i.inline && this._setDateFromField(i, t), i ? this._getDate(i) : null
    }, _doKeyDown: function (t) {
        var i, a, s, n = e.datepicker._getInst(t.target), r = !0, o = n.dpDiv.is(".ui-datepicker-rtl");
        if (n._keyEvent = !0, e.datepicker._datepickerShowing)switch (t.keyCode) {
            case 9:
                e.datepicker._hideDatepicker(), r = !1;
                break;
            case 13:
                return s = e("td." + e.datepicker._dayOverClass + ":not(." + e.datepicker._currentClass + ")", n.dpDiv), s[0] && e.datepicker._selectDay(t.target, n.selectedMonth, n.selectedYear, s[0]), i = e.datepicker._get(n, "onSelect"), i ? (a = e.datepicker._formatDate(n), i.apply(n.input ? n.input[0] : null, [a, n])) : e.datepicker._hideDatepicker(), !1;
            case 27:
                e.datepicker._hideDatepicker();
                break;
            case 33:
                e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(n, "stepBigMonths") : -e.datepicker._get(n, "stepMonths"), "M");
                break;
            case 34:
                e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(n, "stepBigMonths") : +e.datepicker._get(n, "stepMonths"), "M");
                break;
            case 35:
                (t.ctrlKey || t.metaKey) && e.datepicker._clearDate(t.target), r = t.ctrlKey || t.metaKey;
                break;
            case 36:
                (t.ctrlKey || t.metaKey) && e.datepicker._gotoToday(t.target), r = t.ctrlKey || t.metaKey;
                break;
            case 37:
                (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, o ? 1 : -1, "D"), r = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(n, "stepBigMonths") : -e.datepicker._get(n, "stepMonths"), "M");
                break;
            case 38:
                (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, -7, "D"), r = t.ctrlKey || t.metaKey;
                break;
            case 39:
                (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, o ? -1 : 1, "D"), r = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(n, "stepBigMonths") : +e.datepicker._get(n, "stepMonths"), "M");
                break;
            case 40:
                (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, 7, "D"), r = t.ctrlKey || t.metaKey;
                break;
            default:
                r = !1
        } else 36 === t.keyCode && t.ctrlKey ? e.datepicker._showDatepicker(this) : r = !1;
        r && (t.preventDefault(), t.stopPropagation())
    }, _doKeyPress: function (i) {
        var a, s, n = e.datepicker._getInst(i.target);
        return e.datepicker._get(n, "constrainInput") ? (a = e.datepicker._possibleChars(e.datepicker._get(n, "dateFormat")), s = String.fromCharCode(null == i.charCode ? i.keyCode : i.charCode), i.ctrlKey || i.metaKey || " " > s || !a || a.indexOf(s) > -1) : t
    }, _doKeyUp: function (t) {
        var i, a = e.datepicker._getInst(t.target);
        if (a.input.val() !== a.lastVal)try {
            i = e.datepicker.parseDate(e.datepicker._get(a, "dateFormat"), a.input ? a.input.val() : null, e.datepicker._getFormatConfig(a)), i && (e.datepicker._setDateFromField(a), e.datepicker._updateAlternate(a), e.datepicker._updateDatepicker(a))
        } catch (s) {
        }
        return!0
    }, _showDatepicker: function (t) {
        if (t = t.target || t, "input" !== t.nodeName.toLowerCase() && (t = e("input", t.parentNode)[0]), !e.datepicker._isDisabledDatepicker(t) && e.datepicker._lastInput !== t) {
            var i, a, n, r, o, u, c;
            i = e.datepicker._getInst(t), e.datepicker._curInst && e.datepicker._curInst !== i && (e.datepicker._curInst.dpDiv.stop(!0, !0), i && e.datepicker._datepickerShowing && e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])), a = e.datepicker._get(i, "beforeShow"), n = a ? a.apply(t, [t, i]) : {}, n !== !1 && (s(i.settings, n), i.lastVal = null, e.datepicker._lastInput = t, e.datepicker._setDateFromField(i), e.datepicker._inDialog && (t.value = ""), e.datepicker._pos || (e.datepicker._pos = e.datepicker._findPos(t), e.datepicker._pos[1] += t.offsetHeight), r = !1, e(t).parents().each(function () {
                return r |= "fixed" === e(this).css("position"), !r
            }), o = {left: e.datepicker._pos[0], top: e.datepicker._pos[1]}, e.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({position: "absolute", display: "block", top: "-1000px"}), e.datepicker._updateDatepicker(i), o = e.datepicker._checkOffset(i, o, r), i.dpDiv.css({position: e.datepicker._inDialog && e.blockUI ? "static" : r ? "fixed" : "absolute", display: "none", left: o.left + "px", top: o.top + "px"}), i.inline || (u = e.datepicker._get(i, "showAnim"), c = e.datepicker._get(i, "duration"), i.dpDiv.zIndex(e(t).zIndex() + 1), e.datepicker._datepickerShowing = !0, e.effects && e.effects.effect[u] ? i.dpDiv.show(u, e.datepicker._get(i, "showOptions"), c) : i.dpDiv[u || "show"](u ? c : null), e.datepicker._shouldFocusInput(i) && i.input.focus(), e.datepicker._curInst = i))
        }
    }, _updateDatepicker: function (t) {
        this.maxRows = 4, n = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t), t.dpDiv.find("." + this._dayOverClass + " a").mouseover();
        var i, a = this._getNumberOfMonths(t), s = a[1], r = 17;
        t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), s > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + s).css("width", r * s + "em"), t.dpDiv[(1 !== a[0] || 1 !== a[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t === e.datepicker._curInst && e.datepicker._datepickerShowing && e.datepicker._shouldFocusInput(t) && t.input.focus(), t.yearshtml && (i = t.yearshtml, setTimeout(function () {
            i === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), i = t.yearshtml = null
        }, 0))
    }, _shouldFocusInput: function (e) {
        return e.input && e.input.is(":visible") && !e.input.is(":disabled") && !e.input.is(":focus")
    }, _checkOffset: function (t, i, a) {
        var s = t.dpDiv.outerWidth(), n = t.dpDiv.outerHeight(), r = t.input ? t.input.outerWidth() : 0, o = t.input ? t.input.outerHeight() : 0, u = document.documentElement.clientWidth + (a ? 0 : e(document).scrollLeft()), c = document.documentElement.clientHeight + (a ? 0 : e(document).scrollTop());
        return i.left -= this._get(t, "isRTL") ? s - r : 0, i.left -= a && i.left === t.input.offset().left ? e(document).scrollLeft() : 0, i.top -= a && i.top === t.input.offset().top + o ? e(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + s > u && u > s ? Math.abs(i.left + s - u) : 0), i.top -= Math.min(i.top, i.top + n > c && c > n ? Math.abs(n + o) : 0), i
    }, _findPos: function (t) {
        for (var i, a = this._getInst(t), s = this._get(a, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || e.expr.filters.hidden(t));)t = t[s ? "previousSibling" : "nextSibling"];
        return i = e(t).offset(), [i.left, i.top]
    }, _hideDatepicker: function (t) {
        var i, a, s, n, o = this._curInst;
        !o || t && o !== e.data(t, r) || this._datepickerShowing && (i = this._get(o, "showAnim"), a = this._get(o, "duration"), s = function () {
            e.datepicker._tidyDialog(o)
        }, e.effects && (e.effects.effect[i] || e.effects[i]) ? o.dpDiv.hide(i, e.datepicker._get(o, "showOptions"), a, s) : o.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? a : null, s), i || s(), this._datepickerShowing = !1, n = this._get(o, "onClose"), n && n.apply(o.input ? o.input[0] : null, [o.input ? o.input.val() : "", o]), this._lastInput = null, this._inDialog && (this._dialogInput.css({position: "absolute", left: "0", top: "-100px"}), e.blockUI && (e.unblockUI(), e("body").append(this.dpDiv))), this._inDialog = !1)
    }, _tidyDialog: function (e) {
        e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
    }, _checkExternalClick: function (t) {
        if (e.datepicker._curInst) {
            var i = e(t.target), a = e.datepicker._getInst(i[0]);
            (i[0].id !== e.datepicker._mainDivId && 0 === i.parents("#" + e.datepicker._mainDivId).length && !i.hasClass(e.datepicker.markerClassName) && !i.closest("." + e.datepicker._triggerClass).length && e.datepicker._datepickerShowing && (!e.datepicker._inDialog || !e.blockUI) || i.hasClass(e.datepicker.markerClassName) && e.datepicker._curInst !== a) && e.datepicker._hideDatepicker()
        }
    }, _adjustDate: function (t, i, a) {
        var s = e(t), n = this._getInst(s[0]);
        this._isDisabledDatepicker(s[0]) || (this._adjustInstDate(n, i + ("M" === a ? this._get(n, "showCurrentAtPos") : 0), a), this._updateDatepicker(n))
    }, _gotoToday: function (t) {
        var i, a = e(t), s = this._getInst(a[0]);
        this._get(s, "gotoCurrent") && s.currentDay ? (s.selectedDay = s.currentDay, s.drawMonth = s.selectedMonth = s.currentMonth, s.drawYear = s.selectedYear = s.currentYear) : (i = new Date, s.selectedDay = i.getDate(), s.drawMonth = s.selectedMonth = i.getMonth(), s.drawYear = s.selectedYear = i.getFullYear()), this._notifyChange(s), this._adjustDate(a)
    }, _selectMonthYear: function (t, i, a) {
        var s = e(t), n = this._getInst(s[0]);
        n["selected" + ("M" === a ? "Month" : "Year")] = n["draw" + ("M" === a ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(n), this._adjustDate(s)
    }, _selectDay: function (t, i, a, s) {
        var n, r = e(t);
        e(s).hasClass(this._unselectableClass) || this._isDisabledDatepicker(r[0]) || (n = this._getInst(r[0]), n.selectedDay = n.currentDay = e("a", s).html(), n.selectedMonth = n.currentMonth = i, n.selectedYear = n.currentYear = a, this._selectDate(t, this._formatDate(n, n.currentDay, n.currentMonth, n.currentYear)))
    }, _clearDate: function (t) {
        var i = e(t);
        this._selectDate(i, "")
    }, _selectDate: function (t, i) {
        var a, s = e(t), n = this._getInst(s[0]);
        i = null != i ? i : this._formatDate(n), n.input && n.input.val(i), this._updateAlternate(n), a = this._get(n, "onSelect"), a ? a.apply(n.input ? n.input[0] : null, [i, n]) : n.input && n.input.trigger("change"), n.inline ? this._updateDatepicker(n) : (this._hideDatepicker(), this._lastInput = n.input[0], "object" != typeof n.input[0] && n.input.focus(), this._lastInput = null)
    }, _updateAlternate: function (t) {
        var i, a, s, n = this._get(t, "altField");
        n && (i = this._get(t, "altFormat") || this._get(t, "dateFormat"), a = this._getDate(t), s = this.formatDate(i, a, this._getFormatConfig(t)), e(n).each(function () {
            e(this).val(s)
        }))
    }, noWeekends: function (e) {
        var t = e.getDay();
        return[t > 0 && 6 > t, ""]
    }, iso8601Week: function (e) {
        var t, i = new Date(e.getTime());
        return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), t = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((t - i) / 864e5) / 7) + 1
    }, parseDate: function (i, a, s) {
        if (null == i || null == a)throw"Invalid arguments";
        if (a = "object" == typeof a ? "" + a : a + "", "" === a)return null;
        var n, r, o, u, c = 0, h = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff, l = "string" != typeof h ? h : (new Date).getFullYear() % 100 + parseInt(h, 10), d = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort, p = (s ? s.dayNames : null) || this._defaults.dayNames, g = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort, m = (s ? s.monthNames : null) || this._defaults.monthNames, f = -1, _ = -1, v = -1, k = -1, y = !1, b = function (e) {
            var t = i.length > n + 1 && i.charAt(n + 1) === e;
            return t && n++, t
        }, D = function (e) {
            var t = b(e), i = "@" === e ? 14 : "!" === e ? 20 : "y" === e && t ? 4 : "o" === e ? 3 : 2, s = RegExp("^\\d{1," + i + "}"), n = a.substring(c).match(s);
            if (!n)throw"Missing number at position " + c;
            return c += n[0].length, parseInt(n[0], 10)
        }, w = function (i, s, n) {
            var r = -1, o = e.map(b(i) ? n : s,function (e, t) {
                return[
                    [t, e]
                ]
            }).sort(function (e, t) {
                return-(e[1].length - t[1].length)
            });
            if (e.each(o, function (e, i) {
                var s = i[1];
                return a.substr(c, s.length).toLowerCase() === s.toLowerCase() ? (r = i[0], c += s.length, !1) : t
            }), -1 !== r)return r + 1;
            throw"Unknown name at position " + c
        }, M = function () {
            if (a.charAt(c) !== i.charAt(n))throw"Unexpected literal at position " + c;
            c++
        };
        for (n = 0; i.length > n; n++)if (y)"'" !== i.charAt(n) || b("'") ? M() : y = !1; else switch (i.charAt(n)) {
            case"d":
                v = D("d");
                break;
            case"D":
                w("D", d, p);
                break;
            case"o":
                k = D("o");
                break;
            case"m":
                _ = D("m");
                break;
            case"M":
                _ = w("M", g, m);
                break;
            case"y":
                f = D("y");
                break;
            case"@":
                u = new Date(D("@")), f = u.getFullYear(), _ = u.getMonth() + 1, v = u.getDate();
                break;
            case"!":
                u = new Date((D("!") - this._ticksTo1970) / 1e4), f = u.getFullYear(), _ = u.getMonth() + 1, v = u.getDate();
                break;
            case"'":
                b("'") ? M() : y = !0;
                break;
            default:
                M()
        }
        if (a.length > c && (o = a.substr(c), !/^\s+/.test(o)))throw"Extra/unparsed characters found in date: " + o;
        if (-1 === f ? f = (new Date).getFullYear() : 100 > f && (f += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (l >= f ? 0 : -100)), k > -1)for (_ = 1, v = k; ;) {
            if (r = this._getDaysInMonth(f, _ - 1), r >= v)break;
            _++, v -= r
        }
        if (u = this._daylightSavingAdjust(new Date(f, _ - 1, v)), u.getFullYear() !== f || u.getMonth() + 1 !== _ || u.getDate() !== v)throw"Invalid date";
        return u
    }, ATOM: "yy-mm-dd", COOKIE: "D, dd M yy", ISO_8601: "yy-mm-dd", RFC_822: "D, d M y", RFC_850: "DD, dd-M-y", RFC_1036: "D, d M y", RFC_1123: "D, d M yy", RFC_2822: "D, d M yy", RSS: "D, d M y", TICKS: "!", TIMESTAMP: "@", W3C: "yy-mm-dd", _ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)), formatDate: function (e, t, i) {
        if (!t)return"";
        var a, s = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort, n = (i ? i.dayNames : null) || this._defaults.dayNames, r = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort, o = (i ? i.monthNames : null) || this._defaults.monthNames, u = function (t) {
            var i = e.length > a + 1 && e.charAt(a + 1) === t;
            return i && a++, i
        }, c = function (e, t, i) {
            var a = "" + t;
            if (u(e))for (; i > a.length;)a = "0" + a;
            return a
        }, h = function (e, t, i, a) {
            return u(e) ? a[t] : i[t]
        }, l = "", d = !1;
        if (t)for (a = 0; e.length > a; a++)if (d)"'" !== e.charAt(a) || u("'") ? l += e.charAt(a) : d = !1; else switch (e.charAt(a)) {
            case"d":
                l += c("d", t.getDate(), 2);
                break;
            case"D":
                l += h("D", t.getDay(), s, n);
                break;
            case"o":
                l += c("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                break;
            case"m":
                l += c("m", t.getMonth() + 1, 2);
                break;
            case"M":
                l += h("M", t.getMonth(), r, o);
                break;
            case"y":
                l += u("y") ? t.getFullYear() : (10 > t.getYear() % 100 ? "0" : "") + t.getYear() % 100;
                break;
            case"@":
                l += t.getTime();
                break;
            case"!":
                l += 1e4 * t.getTime() + this._ticksTo1970;
                break;
            case"'":
                u("'") ? l += "'" : d = !0;
                break;
            default:
                l += e.charAt(a)
        }
        return l
    }, _possibleChars: function (e) {
        var t, i = "", a = !1, s = function (i) {
            var a = e.length > t + 1 && e.charAt(t + 1) === i;
            return a && t++, a
        };
        for (t = 0; e.length > t; t++)if (a)"'" !== e.charAt(t) || s("'") ? i += e.charAt(t) : a = !1; else switch (e.charAt(t)) {
            case"d":
            case"m":
            case"y":
            case"@":
                i += "0123456789";
                break;
            case"D":
            case"M":
                return null;
            case"'":
                s("'") ? i += "'" : a = !0;
                break;
            default:
                i += e.charAt(t)
        }
        return i
    }, _get: function (e, i) {
        return e.settings[i] !== t ? e.settings[i] : this._defaults[i]
    }, _setDateFromField: function (e, t) {
        if (e.input.val() !== e.lastVal) {
            var i = this._get(e, "dateFormat"), a = e.lastVal = e.input ? e.input.val() : null, s = this._getDefaultDate(e), n = s, r = this._getFormatConfig(e);
            try {
                n = this.parseDate(i, a, r) || s
            } catch (o) {
                a = t ? "" : a
            }
            e.selectedDay = n.getDate(), e.drawMonth = e.selectedMonth = n.getMonth(), e.drawYear = e.selectedYear = n.getFullYear(), e.currentDay = a ? n.getDate() : 0, e.currentMonth = a ? n.getMonth() : 0, e.currentYear = a ? n.getFullYear() : 0, this._adjustInstDate(e)
        }
    }, _getDefaultDate: function (e) {
        return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))
    }, _determineDate: function (t, i, a) {
        var s = function (e) {
            var t = new Date;
            return t.setDate(t.getDate() + e), t
        }, n = function (i) {
            try {
                return e.datepicker.parseDate(e.datepicker._get(t, "dateFormat"), i, e.datepicker._getFormatConfig(t))
            } catch (a) {
            }
            for (var s = (i.toLowerCase().match(/^c/) ? e.datepicker._getDate(t) : null) || new Date, n = s.getFullYear(), r = s.getMonth(), o = s.getDate(), u = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, c = u.exec(i); c;) {
                switch (c[2] || "d") {
                    case"d":
                    case"D":
                        o += parseInt(c[1], 10);
                        break;
                    case"w":
                    case"W":
                        o += 7 * parseInt(c[1], 10);
                        break;
                    case"m":
                    case"M":
                        r += parseInt(c[1], 10), o = Math.min(o, e.datepicker._getDaysInMonth(n, r));
                        break;
                    case"y":
                    case"Y":
                        n += parseInt(c[1], 10), o = Math.min(o, e.datepicker._getDaysInMonth(n, r))
                }
                c = u.exec(i)
            }
            return new Date(n, r, o)
        }, r = null == i || "" === i ? a : "string" == typeof i ? n(i) : "number" == typeof i ? isNaN(i) ? a : s(i) : new Date(i.getTime());
        return r = r && "Invalid Date" == "" + r ? a : r, r && (r.setHours(0), r.setMinutes(0), r.setSeconds(0), r.setMilliseconds(0)), this._daylightSavingAdjust(r)
    }, _daylightSavingAdjust: function (e) {
        return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null
    }, _setDate: function (e, t, i) {
        var a = !t, s = e.selectedMonth, n = e.selectedYear, r = this._restrictMinMax(e, this._determineDate(e, t, new Date));
        e.selectedDay = e.currentDay = r.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = r.getMonth(), e.drawYear = e.selectedYear = e.currentYear = r.getFullYear(), s === e.selectedMonth && n === e.selectedYear || i || this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(a ? "" : this._formatDate(e))
    }, _getDate: function (e) {
        var t = !e.currentYear || e.input && "" === e.input.val() ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
        return t
    }, _attachHandlers: function (t) {
        var i = this._get(t, "stepMonths"), a = "#" + t.id.replace(/\\\\/g, "\\");
        t.dpDiv.find("[data-handler]").map(function () {
            var t = {prev: function () {
                e.datepicker._adjustDate(a, -i, "M")
            }, next: function () {
                e.datepicker._adjustDate(a, +i, "M")
            }, hide: function () {
                e.datepicker._hideDatepicker()
            }, today: function () {
                e.datepicker._gotoToday(a)
            }, selectDay: function () {
                return e.datepicker._selectDay(a, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
            }, selectMonth: function () {
                return e.datepicker._selectMonthYear(a, this, "M"), !1
            }, selectYear: function () {
                return e.datepicker._selectMonthYear(a, this, "Y"), !1
            }};
            e(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
        })
    }, _generateHTML: function (e) {
        var t, i, a, s, n, r, o, u, c, h, l, d, p, g, m, f, _, v, k, y, b, D, w, M, C, x, I, N, T, A, E, S, Y, F, P, O, j, K, R, H = new Date, W = this._daylightSavingAdjust(new Date(H.getFullYear(), H.getMonth(), H.getDate())), L = this._get(e, "isRTL"), U = this._get(e, "showButtonPanel"), B = this._get(e, "hideIfNoPrevNext"), z = this._get(e, "navigationAsDateFormat"), q = this._getNumberOfMonths(e), G = this._get(e, "showCurrentAtPos"), J = this._get(e, "stepMonths"), Q = 1 !== q[0] || 1 !== q[1], V = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)), $ = this._getMinMaxDate(e, "min"), X = this._getMinMaxDate(e, "max"), Z = e.drawMonth - G, et = e.drawYear;
        if (0 > Z && (Z += 12, et--), X)for (t = this._daylightSavingAdjust(new Date(X.getFullYear(), X.getMonth() - q[0] * q[1] + 1, X.getDate())), t = $ && $ > t ? $ : t; this._daylightSavingAdjust(new Date(et, Z, 1)) > t;)Z--, 0 > Z && (Z = 11, et--);
        for (e.drawMonth = Z, e.drawYear = et, i = this._get(e, "prevText"), i = z ? this.formatDate(i, this._daylightSavingAdjust(new Date(et, Z - J, 1)), this._getFormatConfig(e)) : i, a = this._canAdjustMonth(e, -1, et, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (L ? "e" : "w") + "'>" + i + "</span></a>" : B ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (L ? "e" : "w") + "'>" + i + "</span></a>", s = this._get(e, "nextText"), s = z ? this.formatDate(s, this._daylightSavingAdjust(new Date(et, Z + J, 1)), this._getFormatConfig(e)) : s, n = this._canAdjustMonth(e, 1, et, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (L ? "w" : "e") + "'>" + s + "</span></a>" : B ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (L ? "w" : "e") + "'>" + s + "</span></a>", r = this._get(e, "currentText"), o = this._get(e, "gotoCurrent") && e.currentDay ? V : W, r = z ? this.formatDate(r, o, this._getFormatConfig(e)) : r, u = e.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(e, "closeText") + "</button>", c = U ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (L ? u : "") + (this._isInRange(e, o) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + r + "</button>" : "") + (L ? "" : u) + "</div>" : "", h = parseInt(this._get(e, "firstDay"), 10), h = isNaN(h) ? 0 : h, l = this._get(e, "showWeek"), d = this._get(e, "dayNames"), p = this._get(e, "dayNamesMin"), g = this._get(e, "monthNames"), m = this._get(e, "monthNamesShort"), f = this._get(e, "beforeShowDay"), _ = this._get(e, "showOtherMonths"), v = this._get(e, "selectOtherMonths"), k = this._getDefaultDate(e), y = "", D = 0; q[0] > D; D++) {
            for (w = "", this.maxRows = 4, M = 0; q[1] > M; M++) {
                if (C = this._daylightSavingAdjust(new Date(et, Z, e.selectedDay)), x = " ui-corner-all", I = "", Q) {
                    if (I += "<div class='ui-datepicker-group", q[1] > 1)switch (M) {
                        case 0:
                            I += " ui-datepicker-group-first", x = " ui-corner-" + (L ? "right" : "left");
                            break;
                        case q[1] - 1:
                            I += " ui-datepicker-group-last", x = " ui-corner-" + (L ? "left" : "right");
                            break;
                        default:
                            I += " ui-datepicker-group-middle", x = ""
                    }
                    I += "'>"
                }
                for (I += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + x + "'>" + (/all|left/.test(x) && 0 === D ? L ? n : a : "") + (/all|right/.test(x) && 0 === D ? L ? a : n : "") + this._generateMonthYearHeader(e, Z, et, $, X, D > 0 || M > 0, g, m) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>", N = l ? "<th class='ui-datepicker-week-col'>" + this._get(e, "weekHeader") + "</th>" : "", b = 0; 7 > b; b++)T = (b + h) % 7, N += "<th" + ((b + h + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + d[T] + "'>" + p[T] + "</span></th>";
                for (I += N + "</tr></thead><tbody>", A = this._getDaysInMonth(et, Z), et === e.selectedYear && Z === e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, A)), E = (this._getFirstDayOfMonth(et, Z) - h + 7) % 7, S = Math.ceil((E + A) / 7), Y = Q ? this.maxRows > S ? this.maxRows : S : S, this.maxRows = Y, F = this._daylightSavingAdjust(new Date(et, Z, 1 - E)), P = 0; Y > P; P++) {
                    for (I += "<tr>", O = l ? "<td class='ui-datepicker-week-col'>" + this._get(e, "calculateWeek")(F) + "</td>" : "", b = 0; 7 > b; b++)j = f ? f.apply(e.input ? e.input[0] : null, [F]) : [!0, ""], K = F.getMonth() !== Z, R = K && !v || !j[0] || $ && $ > F || X && F > X, O += "<td class='" + ((b + h + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (K ? " ui-datepicker-other-month" : "") + (F.getTime() === C.getTime() && Z === e.selectedMonth && e._keyEvent || k.getTime() === F.getTime() && k.getTime() === C.getTime() ? " " + this._dayOverClass : "") + (R ? " " + this._unselectableClass + " ui-state-disabled" : "") + (K && !_ ? "" : " " + j[1] + (F.getTime() === V.getTime() ? " " + this._currentClass : "") + (F.getTime() === W.getTime() ? " ui-datepicker-today" : "")) + "'" + (K && !_ || !j[2] ? "" : " title='" + j[2].replace(/'/g, "&#39;") + "'") + (R ? "" : " data-handler='selectDay' data-event='click' data-month='" + F.getMonth() + "' data-year='" + F.getFullYear() + "'") + ">" + (K && !_ ? "&#xa0;" : R ? "<span class='ui-state-default'>" + F.getDate() + "</span>" : "<a class='ui-state-default" + (F.getTime() === W.getTime() ? " ui-state-highlight" : "") + (F.getTime() === V.getTime() ? " ui-state-active" : "") + (K ? " ui-priority-secondary" : "") + "' href='#'>" + F.getDate() + "</a>") + "</td>", F.setDate(F.getDate() + 1), F = this._daylightSavingAdjust(F);
                    I += O + "</tr>"
                }
                Z++, Z > 11 && (Z = 0, et++), I += "</tbody></table>" + (Q ? "</div>" + (q[0] > 0 && M === q[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), w += I
            }
            y += w
        }
        return y += c, e._keyEvent = !1, y
    }, _generateMonthYearHeader: function (e, t, i, a, s, n, r, o) {
        var u, c, h, l, d, p, g, m, f = this._get(e, "changeMonth"), _ = this._get(e, "changeYear"), v = this._get(e, "showMonthAfterYear"), k = "<div class='ui-datepicker-title'>", y = "";
        if (n || !f)y += "<span class='ui-datepicker-month'>" + r[t] + "</span>"; else {
            for (u = a && a.getFullYear() === i, c = s && s.getFullYear() === i, y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", h = 0; 12 > h; h++)(!u || h >= a.getMonth()) && (!c || s.getMonth() >= h) && (y += "<option value='" + h + "'" + (h === t ? " selected='selected'" : "") + ">" + o[h] + "</option>");
            y += "</select>"
        }
        if (v || (k += y + (!n && f && _ ? "" : "&#xa0;")), !e.yearshtml)if (e.yearshtml = "", n || !_)k += "<span class='ui-datepicker-year'>" + i + "</span>"; else {
            for (l = this._get(e, "yearRange").split(":"), d = (new Date).getFullYear(), p = function (e) {
                var t = e.match(/c[+\-].*/) ? i + parseInt(e.substring(1), 10) : e.match(/[+\-].*/) ? d + parseInt(e, 10) : parseInt(e, 10);
                return isNaN(t) ? d : t
            }, g = p(l[0]), m = Math.max(g, p(l[1] || "")), g = a ? Math.max(g, a.getFullYear()) : g, m = s ? Math.min(m, s.getFullYear()) : m, e.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; m >= g; g++)e.yearshtml += "<option value='" + g + "'" + (g === i ? " selected='selected'" : "") + ">" + g + "</option>";
            e.yearshtml += "</select>", k += e.yearshtml, e.yearshtml = null
        }
        return k += this._get(e, "yearSuffix"), v && (k += (!n && f && _ ? "" : "&#xa0;") + y), k += "</div>"
    }, _adjustInstDate: function (e, t, i) {
        var a = e.drawYear + ("Y" === i ? t : 0), s = e.drawMonth + ("M" === i ? t : 0), n = Math.min(e.selectedDay, this._getDaysInMonth(a, s)) + ("D" === i ? t : 0), r = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(a, s, n)));
        e.selectedDay = r.getDate(), e.drawMonth = e.selectedMonth = r.getMonth(), e.drawYear = e.selectedYear = r.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(e)
    }, _restrictMinMax: function (e, t) {
        var i = this._getMinMaxDate(e, "min"), a = this._getMinMaxDate(e, "max"), s = i && i > t ? i : t;
        return a && s > a ? a : s
    }, _notifyChange: function (e) {
        var t = this._get(e, "onChangeMonthYear");
        t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
    }, _getNumberOfMonths: function (e) {
        var t = this._get(e, "numberOfMonths");
        return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t
    }, _getMinMaxDate: function (e, t) {
        return this._determineDate(e, this._get(e, t + "Date"), null)
    }, _getDaysInMonth: function (e, t) {
        return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()
    }, _getFirstDayOfMonth: function (e, t) {
        return new Date(e, t, 1).getDay()
    }, _canAdjustMonth: function (e, t, i, a) {
        var s = this._getNumberOfMonths(e), n = this._daylightSavingAdjust(new Date(i, a + (0 > t ? t : s[0] * s[1]), 1));
        return 0 > t && n.setDate(this._getDaysInMonth(n.getFullYear(), n.getMonth())), this._isInRange(e, n)
    }, _isInRange: function (e, t) {
        var i, a, s = this._getMinMaxDate(e, "min"), n = this._getMinMaxDate(e, "max"), r = null, o = null, u = this._get(e, "yearRange");
        return u && (i = u.split(":"), a = (new Date).getFullYear(), r = parseInt(i[0], 10), o = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (r += a), i[1].match(/[+\-].*/) && (o += a)), (!s || t.getTime() >= s.getTime()) && (!n || t.getTime() <= n.getTime()) && (!r || t.getFullYear() >= r) && (!o || o >= t.getFullYear())
    }, _getFormatConfig: function (e) {
        var t = this._get(e, "shortYearCutoff");
        return t = "string" != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {shortYearCutoff: t, dayNamesShort: this._get(e, "dayNamesShort"), dayNames: this._get(e, "dayNames"), monthNamesShort: this._get(e, "monthNamesShort"), monthNames: this._get(e, "monthNames")}
    }, _formatDate: function (e, t, i, a) {
        t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
        var s = t ? "object" == typeof t ? t : this._daylightSavingAdjust(new Date(a, i, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
        return this.formatDate(this._get(e, "dateFormat"), s, this._getFormatConfig(e))
    }}), e.fn.datepicker = function (t) {
        if (!this.length)return this;
        e.datepicker.initialized || (e(document).mousedown(e.datepicker._checkExternalClick), e.datepicker.initialized = !0), 0 === e("#" + e.datepicker._mainDivId).length && e("body").append(e.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return"string" != typeof t || "isDisabled" !== t && "getDate" !== t && "widget" !== t ? "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i)) : this.each(function () {
            "string" == typeof t ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this].concat(i)) : e.datepicker._attachDatepicker(this, t)
        }) : e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i))
    }, e.datepicker = new i, e.datepicker.initialized = !1, e.datepicker.uuid = (new Date).getTime(), e.datepicker.version = "1.10.4"
})(jQuery);
(function (e) {
    var t = {buttons: !0, height: !0, maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0, width: !0}, i = {maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0};
    e.widget("ui.dialog", {version: "1.10.4", options: {appendTo: "body", autoOpen: !0, buttons: [], closeOnEscape: !0, closeText: "close", dialogClass: "", draggable: !0, hide: null, height: "auto", maxHeight: null, maxWidth: null, minHeight: 150, minWidth: 150, modal: !1, position: {my: "center", at: "center", of: window, collision: "fit", using: function (t) {
        var i = e(this).css(t).offset().top;
        0 > i && e(this).css("top", t.top - i)
    }}, resizable: !0, show: null, title: null, width: 300, beforeClose: null, close: null, drag: null, dragStart: null, dragStop: null, focus: null, open: null, resize: null, resizeStart: null, resizeStop: null}, _create: function () {
        this.originalCss = {display: this.element[0].style.display, width: this.element[0].style.width, minHeight: this.element[0].style.minHeight, maxHeight: this.element[0].style.maxHeight, height: this.element[0].style.height}, this.originalPosition = {parent: this.element.parent(), index: this.element.parent().children().index(this.element)}, this.originalTitle = this.element.attr("title"), this.options.title = this.options.title || this.originalTitle, this._createWrapper(), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog), this._createTitlebar(), this._createButtonPane(), this.options.draggable && e.fn.draggable && this._makeDraggable(), this.options.resizable && e.fn.resizable && this._makeResizable(), this._isOpen = !1
    }, _init: function () {
        this.options.autoOpen && this.open()
    }, _appendTo: function () {
        var t = this.options.appendTo;
        return t && (t.jquery || t.nodeType) ? e(t) : this.document.find(t || "body").eq(0)
    }, _destroy: function () {
        var e, t = this.originalPosition;
        this._destroyOverlay(), this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(), this.uiDialog.stop(!0, !0).remove(), this.originalTitle && this.element.attr("title", this.originalTitle), e = t.parent.children().eq(t.index), e.length && e[0] !== this.element[0] ? e.before(this.element) : t.parent.append(this.element)
    }, widget: function () {
        return this.uiDialog
    }, disable: e.noop, enable: e.noop, close: function (t) {
        var i, a = this;
        if (this._isOpen && this._trigger("beforeClose", t) !== !1) {
            if (this._isOpen = !1, this._destroyOverlay(), !this.opener.filter(":focusable").focus().length)try {
                i = this.document[0].activeElement, i && "body" !== i.nodeName.toLowerCase() && e(i).blur()
            } catch (s) {
            }
            this._hide(this.uiDialog, this.options.hide, function () {
                a._trigger("close", t)
            })
        }
    }, isOpen: function () {
        return this._isOpen
    }, moveToTop: function () {
        this._moveToTop()
    }, _moveToTop: function (e, t) {
        var i = !!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;
        return i && !t && this._trigger("focus", e), i
    }, open: function () {
        var t = this;
        return this._isOpen ? (this._moveToTop() && this._focusTabbable(), undefined) : (this._isOpen = !0, this.opener = e(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this._show(this.uiDialog, this.options.show, function () {
            t._focusTabbable(), t._trigger("focus")
        }), this._trigger("open"), undefined)
    }, _focusTabbable: function () {
        var e = this.element.find("[autofocus]");
        e.length || (e = this.element.find(":tabbable")), e.length || (e = this.uiDialogButtonPane.find(":tabbable")), e.length || (e = this.uiDialogTitlebarClose.filter(":tabbable")), e.length || (e = this.uiDialog), e.eq(0).focus()
    }, _keepFocus: function (t) {
        function i() {
            var t = this.document[0].activeElement, i = this.uiDialog[0] === t || e.contains(this.uiDialog[0], t);
            i || this._focusTabbable()
        }

        t.preventDefault(), i.call(this), this._delay(i)
    }, _createWrapper: function () {
        this.uiDialog = e("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({tabIndex: -1, role: "dialog"}).appendTo(this._appendTo()), this._on(this.uiDialog, {keydown: function (t) {
            if (this.options.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === e.ui.keyCode.ESCAPE)return t.preventDefault(), this.close(t), undefined;
            if (t.keyCode === e.ui.keyCode.TAB) {
                var i = this.uiDialog.find(":tabbable"), a = i.filter(":first"), s = i.filter(":last");
                t.target !== s[0] && t.target !== this.uiDialog[0] || t.shiftKey ? t.target !== a[0] && t.target !== this.uiDialog[0] || !t.shiftKey || (s.focus(1), t.preventDefault()) : (a.focus(1), t.preventDefault())
            }
        }, mousedown: function (e) {
            this._moveToTop(e) && this._focusTabbable()
        }}), this.element.find("[aria-describedby]").length || this.uiDialog.attr({"aria-describedby": this.element.uniqueId().attr("id")})
    }, _createTitlebar: function () {
        var t;
        this.uiDialogTitlebar = e("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog), this._on(this.uiDialogTitlebar, {mousedown: function (t) {
            e(t.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
        }}), this.uiDialogTitlebarClose = e("<button type='button'></button>").button({label: this.options.closeText, icons: {primary: "ui-icon-closethick"}, text: !1}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar), this._on(this.uiDialogTitlebarClose, {click: function (e) {
            e.preventDefault(), this.close(e)
        }}), t = e("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar), this._title(t), this.uiDialog.attr({"aria-labelledby": t.attr("id")})
    }, _title: function (e) {
        this.options.title || e.html("&#160;"), e.text(this.options.title)
    }, _createButtonPane: function () {
        this.uiDialogButtonPane = e("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), this.uiButtonSet = e("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane), this._createButtons()
    }, _createButtons: function () {
        var t = this, i = this.options.buttons;
        return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), e.isEmptyObject(i) || e.isArray(i) && !i.length ? (this.uiDialog.removeClass("ui-dialog-buttons"), undefined) : (e.each(i, function (i, a) {
            var s, n;
            a = e.isFunction(a) ? {click: a, text: i} : a, a = e.extend({type: "button"}, a), s = a.click, a.click = function () {
                s.apply(t.element[0], arguments)
            }, n = {icons: a.icons, text: a.showText}, delete a.icons, delete a.showText, e("<button></button>", a).button(n).appendTo(t.uiButtonSet)
        }), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog), undefined)
    }, _makeDraggable: function () {
        function t(e) {
            return{position: e.position, offset: e.offset}
        }

        var i = this, a = this.options;
        this.uiDialog.draggable({cancel: ".ui-dialog-content, .ui-dialog-titlebar-close", handle: ".ui-dialog-titlebar", containment: "document", start: function (a, s) {
            e(this).addClass("ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", a, t(s))
        }, drag: function (e, a) {
            i._trigger("drag", e, t(a))
        }, stop: function (s, n) {
            a.position = [n.position.left - i.document.scrollLeft(), n.position.top - i.document.scrollTop()], e(this).removeClass("ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", s, t(n))
        }})
    }, _makeResizable: function () {
        function t(e) {
            return{originalPosition: e.originalPosition, originalSize: e.originalSize, position: e.position, size: e.size}
        }

        var i = this, a = this.options, s = a.resizable, n = this.uiDialog.css("position"), r = "string" == typeof s ? s : "n,e,s,w,se,sw,ne,nw";
        this.uiDialog.resizable({cancel: ".ui-dialog-content", containment: "document", alsoResize: this.element, maxWidth: a.maxWidth, maxHeight: a.maxHeight, minWidth: a.minWidth, minHeight: this._minHeight(), handles: r, start: function (a, s) {
            e(this).addClass("ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", a, t(s))
        }, resize: function (e, a) {
            i._trigger("resize", e, t(a))
        }, stop: function (s, n) {
            a.height = e(this).height(), a.width = e(this).width(), e(this).removeClass("ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", s, t(n))
        }}).css("position", n)
    }, _minHeight: function () {
        var e = this.options;
        return"auto" === e.height ? e.minHeight : Math.min(e.minHeight, e.height)
    }, _position: function () {
        var e = this.uiDialog.is(":visible");
        e || this.uiDialog.show(), this.uiDialog.position(this.options.position), e || this.uiDialog.hide()
    }, _setOptions: function (a) {
        var s = this, n = !1, r = {};
        e.each(a, function (e, a) {
            s._setOption(e, a), e in t && (n = !0), e in i && (r[e] = a)
        }), n && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", r)
    }, _setOption: function (e, t) {
        var i, a, s = this.uiDialog;
        "dialogClass" === e && s.removeClass(this.options.dialogClass).addClass(t), "disabled" !== e && (this._super(e, t), "appendTo" === e && this.uiDialog.appendTo(this._appendTo()), "buttons" === e && this._createButtons(), "closeText" === e && this.uiDialogTitlebarClose.button({label: "" + t}), "draggable" === e && (i = s.is(":data(ui-draggable)"), i && !t && s.draggable("destroy"), !i && t && this._makeDraggable()), "position" === e && this._position(), "resizable" === e && (a = s.is(":data(ui-resizable)"), a && !t && s.resizable("destroy"), a && "string" == typeof t && s.resizable("option", "handles", t), a || t === !1 || this._makeResizable()), "title" === e && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
    }, _size: function () {
        var e, t, i, a = this.options;
        this.element.show().css({width: "auto", minHeight: 0, maxHeight: "none", height: 0}), a.minWidth > a.width && (a.width = a.minWidth), e = this.uiDialog.css({height: "auto", width: a.width}).outerHeight(), t = Math.max(0, a.minHeight - e), i = "number" == typeof a.maxHeight ? Math.max(0, a.maxHeight - e) : "none", "auto" === a.height ? this.element.css({minHeight: t, maxHeight: i, height: "auto"}) : this.element.height(Math.max(0, a.height - e)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
    }, _blockFrames: function () {
        this.iframeBlocks = this.document.find("iframe").map(function () {
            var t = e(this);
            return e("<div>").css({position: "absolute", width: t.outerWidth(), height: t.outerHeight()}).appendTo(t.parent()).offset(t.offset())[0]
        })
    }, _unblockFrames: function () {
        this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
    }, _allowInteraction: function (t) {
        return e(t.target).closest(".ui-dialog").length ? !0 : !!e(t.target).closest(".ui-datepicker").length
    }, _createOverlay: function () {
        if (this.options.modal) {
            var t = this, i = this.widgetFullName;
            e.ui.dialog.overlayInstances || this._delay(function () {
                e.ui.dialog.overlayInstances && this.document.bind("focusin.dialog", function (a) {
                    t._allowInteraction(a) || (a.preventDefault(), e(".ui-dialog:visible:last .ui-dialog-content").data(i)._focusTabbable())
                })
            }), this.overlay = e("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()), this._on(this.overlay, {mousedown: "_keepFocus"}), e.ui.dialog.overlayInstances++
        }
    }, _destroyOverlay: function () {
        this.options.modal && this.overlay && (e.ui.dialog.overlayInstances--, e.ui.dialog.overlayInstances || this.document.unbind("focusin.dialog"), this.overlay.remove(), this.overlay = null)
    }}), e.ui.dialog.overlayInstances = 0, e.uiBackCompat !== !1 && e.widget("ui.dialog", e.ui.dialog, {_position: function () {
        var t, i = this.options.position, a = [], s = [0, 0];
        i ? (("string" == typeof i || "object" == typeof i && "0"in i) && (a = i.split ? i.split(" ") : [i[0], i[1]], 1 === a.length && (a[1] = a[0]), e.each(["left", "top"], function (e, t) {
            +a[e] === a[e] && (s[e] = a[e], a[e] = t)
        }), i = {my: a[0] + (0 > s[0] ? s[0] : "+" + s[0]) + " " + a[1] + (0 > s[1] ? s[1] : "+" + s[1]), at: a.join(" ")}), i = e.extend({}, e.ui.dialog.prototype.options.position, i)) : i = e.ui.dialog.prototype.options.position, t = this.uiDialog.is(":visible"), t || this.uiDialog.show(), this.uiDialog.position(i), t || this.uiDialog.hide()
    }})
})(jQuery);
(function (t) {
    t.widget("ui.draggable", t.ui.mouse, {version: "1.10.4", widgetEventPrefix: "drag", options: {addClasses: !0, appendTo: "parent", axis: !1, connectToSortable: !1, containment: !1, cursor: "auto", cursorAt: !1, grid: !1, handle: !1, helper: "original", iframeFix: !1, opacity: !1, refreshPositions: !1, revert: !1, revertDuration: 500, scope: "default", scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, snap: !1, snapMode: "both", snapTolerance: 20, stack: !1, zIndex: !1, drag: null, start: null, stop: null}, _create: function () {
        "original" !== this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
    }, _destroy: function () {
        this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy()
    }, _mouseCapture: function (e) {
        var i = this.options;
        return this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(e), this.handle ? (t(i.iframeFix === !0 ? "iframe" : i.iframeFix).each(function () {
            t("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width: this.offsetWidth + "px", height: this.offsetHeight + "px", position: "absolute", opacity: "0.001", zIndex: 1e3}).css(t(this).offset()).appendTo("body")
        }), !0) : !1)
    }, _mouseStart: function (e) {
        var i = this.options;
        return this.helper = this._createHelper(e), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offsetParent = this.helper.offsetParent(), this.offsetParentCssPosition = this.offsetParent.css("position"), this.offset = this.positionAbs = this.element.offset(), this.offset = {top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left}, this.offset.scroll = !1, t.extend(this.offset, {click: {left: e.pageX - this.offset.left, top: e.pageY - this.offset.top}, parent: this._getParentOffset(), relative: this._getRelativeOffset()}), this.originalPosition = this.position = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", e) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0)
    }, _mouseDrag: function (e, i) {
        if ("fixed" === this.offsetParentCssPosition && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), !i) {
            var s = this._uiHash();
            if (this._trigger("drag", e, s) === !1)return this._mouseUp({}), !1;
            this.position = s.position
        }
        return this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1
    }, _mouseStop: function (e) {
        var i = this, s = !1;
        return t.ui.ddmanager && !this.options.dropBehaviour && (s = t.ui.ddmanager.drop(this, e)), this.dropped && (s = this.dropped, this.dropped = !1), "original" !== this.options.helper || t.contains(this.element[0].ownerDocument, this.element[0]) ? ("invalid" === this.options.revert && !s || "valid" === this.options.revert && s || this.options.revert === !0 || t.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
            i._trigger("stop", e) !== !1 && i._clear()
        }) : this._trigger("stop", e) !== !1 && this._clear(), !1) : !1
    }, _mouseUp: function (e) {
        return t("div.ui-draggable-iframeFix").each(function () {
            this.parentNode.removeChild(this)
        }), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), t.ui.mouse.prototype._mouseUp.call(this, e)
    }, cancel: function () {
        return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
    }, _getHandle: function (e) {
        return this.options.handle ? !!t(e.target).closest(this.element.find(this.options.handle)).length : !0
    }, _createHelper: function (e) {
        var i = this.options, s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
        return s.parents("body").length || s.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), s[0] === this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"), s
    }, _adjustOffsetFromHelper: function (e) {
        "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {left: +e[0], top: +e[1] || 0}), "left"in e && (this.offset.click.left = e.left + this.margins.left), "right"in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top"in e && (this.offset.click.top = e.top + this.margins.top), "bottom"in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
    }, _getParentOffset: function () {
        var e = this.offsetParent.offset();
        return"absolute" === this.cssPosition && this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {top: 0, left: 0}), {top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)}
    }, _getRelativeOffset: function () {
        if ("relative" === this.cssPosition) {
            var t = this.element.position();
            return{top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()}
        }
        return{top: 0, left: 0}
    }, _cacheMargins: function () {
        this.margins = {left: parseInt(this.element.css("marginLeft"), 10) || 0, top: parseInt(this.element.css("marginTop"), 10) || 0, right: parseInt(this.element.css("marginRight"), 10) || 0, bottom: parseInt(this.element.css("marginBottom"), 10) || 0}
    }, _cacheHelperProportions: function () {
        this.helperProportions = {width: this.helper.outerWidth(), height: this.helper.outerHeight()}
    }, _setContainment: function () {
        var e, i, s, n = this.options;
        return n.containment ? "window" === n.containment ? (this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], undefined) : "document" === n.containment ? (this.containment = [0, 0, t(document).width() - this.helperProportions.width - this.margins.left, (t(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], undefined) : n.containment.constructor === Array ? (this.containment = n.containment, undefined) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode), i = t(n.containment), s = i[0], s && (e = "hidden" !== i.css("overflow"), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = i), undefined) : (this.containment = null, undefined)
    }, _convertPositionTo: function (e, i) {
        i || (i = this.position);
        var s = "absolute" === e ? 1 : -1, n = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent;
        return this.offset.scroll || (this.offset.scroll = {top: n.scrollTop(), left: n.scrollLeft()}), {top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top) * s, left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) * s}
    }, _generatePosition: function (e) {
        var i, s, n, a, o = this.options, r = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, l = e.pageX, h = e.pageY;
        return this.offset.scroll || (this.offset.scroll = {top: r.scrollTop(), left: r.scrollLeft()}), this.originalPosition && (this.containment && (this.relative_container ? (s = this.relative_container.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, e.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left), e.pageY - this.offset.click.top < i[1] && (h = i[1] + this.offset.click.top), e.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left), e.pageY - this.offset.click.top > i[3] && (h = i[3] + this.offset.click.top)), o.grid && (n = o.grid[1] ? this.originalPageY + Math.round((h - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY, h = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - o.grid[1] : n + o.grid[1] : n, a = o.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX, l = i ? a - this.offset.click.left >= i[0] || a - this.offset.click.left > i[2] ? a : a - this.offset.click.left >= i[0] ? a - o.grid[0] : a + o.grid[0] : a)), {top: h - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top), left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left)}
    }, _clear: function () {
        this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
    }, _trigger: function (e, i, s) {
        return s = s || this._uiHash(), t.ui.plugin.call(this, e, [i, s]), "drag" === e && (this.positionAbs = this._convertPositionTo("absolute")), t.Widget.prototype._trigger.call(this, e, i, s)
    }, plugins: {}, _uiHash: function () {
        return{helper: this.helper, position: this.position, originalPosition: this.originalPosition, offset: this.positionAbs}
    }}), t.ui.plugin.add("draggable", "connectToSortable", {start: function (e, i) {
        var s = t(this).data("ui-draggable"), n = s.options, a = t.extend({}, i, {item: s.element});
        s.sortables = [], t(n.connectToSortable).each(function () {
            var i = t.data(this, "ui-sortable");
            i && !i.options.disabled && (s.sortables.push({instance: i, shouldRevert: i.options.revert}), i.refreshPositions(), i._trigger("activate", e, a))
        })
    }, stop: function (e, i) {
        var s = t(this).data("ui-draggable"), n = t.extend({}, i, {item: s.element});
        t.each(s.sortables, function () {
            this.instance.isOver ? (this.instance.isOver = 0, s.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(e), this.instance.options.helper = this.instance.options._helper, "original" === s.options.helper && this.instance.currentItem.css({top: "auto", left: "auto"})) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", e, n))
        })
    }, drag: function (e, i) {
        var s = t(this).data("ui-draggable"), n = this;
        t.each(s.sortables, function () {
            var a = !1, o = this;
            this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s.helperProportions, this.instance.offset.click = s.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (a = !0, t.each(s.sortables, function () {
                return this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s.helperProportions, this.instance.offset.click = s.offset.click, this !== o && this.instance._intersectsWith(this.instance.containerCache) && t.contains(o.instance.element[0], this.instance.element[0]) && (a = !1), a
            })), a ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = t(n).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function () {
                return i.helper[0]
            }, e.target = this.instance.currentItem[0], this.instance._mouseCapture(e, !0), this.instance._mouseStart(e, !0, !0), this.instance.offset.click.top = s.offset.click.top, this.instance.offset.click.left = s.offset.click.left, this.instance.offset.parent.left -= s.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= s.offset.parent.top - this.instance.offset.parent.top, s._trigger("toSortable", e), s.dropped = this.instance.element, s.currentItem = s.element, this.instance.fromOutside = s), this.instance.currentItem && this.instance._mouseDrag(e)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", e, this.instance._uiHash(this.instance)), this.instance._mouseStop(e, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), s._trigger("fromSortable", e), s.dropped = !1)
        })
    }}), t.ui.plugin.add("draggable", "cursor", {start: function () {
        var e = t("body"), i = t(this).data("ui-draggable").options;
        e.css("cursor") && (i._cursor = e.css("cursor")), e.css("cursor", i.cursor)
    }, stop: function () {
        var e = t(this).data("ui-draggable").options;
        e._cursor && t("body").css("cursor", e._cursor)
    }}), t.ui.plugin.add("draggable", "opacity", {start: function (e, i) {
        var s = t(i.helper), n = t(this).data("ui-draggable").options;
        s.css("opacity") && (n._opacity = s.css("opacity")), s.css("opacity", n.opacity)
    }, stop: function (e, i) {
        var s = t(this).data("ui-draggable").options;
        s._opacity && t(i.helper).css("opacity", s._opacity)
    }}), t.ui.plugin.add("draggable", "scroll", {start: function () {
        var e = t(this).data("ui-draggable");
        e.scrollParent[0] !== document && "HTML" !== e.scrollParent[0].tagName && (e.overflowOffset = e.scrollParent.offset())
    }, drag: function (e) {
        var i = t(this).data("ui-draggable"), s = i.options, n = !1;
        i.scrollParent[0] !== document && "HTML" !== i.scrollParent[0].tagName ? (s.axis && "x" === s.axis || (i.overflowOffset.top + i.scrollParent[0].offsetHeight - e.pageY < s.scrollSensitivity ? i.scrollParent[0].scrollTop = n = i.scrollParent[0].scrollTop + s.scrollSpeed : e.pageY - i.overflowOffset.top < s.scrollSensitivity && (i.scrollParent[0].scrollTop = n = i.scrollParent[0].scrollTop - s.scrollSpeed)), s.axis && "y" === s.axis || (i.overflowOffset.left + i.scrollParent[0].offsetWidth - e.pageX < s.scrollSensitivity ? i.scrollParent[0].scrollLeft = n = i.scrollParent[0].scrollLeft + s.scrollSpeed : e.pageX - i.overflowOffset.left < s.scrollSensitivity && (i.scrollParent[0].scrollLeft = n = i.scrollParent[0].scrollLeft - s.scrollSpeed))) : (s.axis && "x" === s.axis || (e.pageY - t(document).scrollTop() < s.scrollSensitivity ? n = t(document).scrollTop(t(document).scrollTop() - s.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < s.scrollSensitivity && (n = t(document).scrollTop(t(document).scrollTop() + s.scrollSpeed))), s.axis && "y" === s.axis || (e.pageX - t(document).scrollLeft() < s.scrollSensitivity ? n = t(document).scrollLeft(t(document).scrollLeft() - s.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < s.scrollSensitivity && (n = t(document).scrollLeft(t(document).scrollLeft() + s.scrollSpeed)))), n !== !1 && t.ui.ddmanager && !s.dropBehaviour && t.ui.ddmanager.prepareOffsets(i, e)
    }}), t.ui.plugin.add("draggable", "snap", {start: function () {
        var e = t(this).data("ui-draggable"), i = e.options;
        e.snapElements = [], t(i.snap.constructor !== String ? i.snap.items || ":data(ui-draggable)" : i.snap).each(function () {
            var i = t(this), s = i.offset();
            this !== e.element[0] && e.snapElements.push({item: this, width: i.outerWidth(), height: i.outerHeight(), top: s.top, left: s.left})
        })
    }, drag: function (e, i) {
        var s, n, a, o, r, l, h, c, u, d, p = t(this).data("ui-draggable"), g = p.options, f = g.snapTolerance, m = i.offset.left, _ = m + p.helperProportions.width, v = i.offset.top, b = v + p.helperProportions.height;
        for (u = p.snapElements.length - 1; u >= 0; u--)r = p.snapElements[u].left, l = r + p.snapElements[u].width, h = p.snapElements[u].top, c = h + p.snapElements[u].height, r - f > _ || m > l + f || h - f > b || v > c + f || !t.contains(p.snapElements[u].item.ownerDocument, p.snapElements[u].item) ? (p.snapElements[u].snapping && p.options.snap.release && p.options.snap.release.call(p.element, e, t.extend(p._uiHash(), {snapItem: p.snapElements[u].item})), p.snapElements[u].snapping = !1) : ("inner" !== g.snapMode && (s = f >= Math.abs(h - b), n = f >= Math.abs(c - v), a = f >= Math.abs(r - _), o = f >= Math.abs(l - m), s && (i.position.top = p._convertPositionTo("relative", {top: h - p.helperProportions.height, left: 0}).top - p.margins.top), n && (i.position.top = p._convertPositionTo("relative", {top: c, left: 0}).top - p.margins.top), a && (i.position.left = p._convertPositionTo("relative", {top: 0, left: r - p.helperProportions.width}).left - p.margins.left), o && (i.position.left = p._convertPositionTo("relative", {top: 0, left: l}).left - p.margins.left)), d = s || n || a || o, "outer" !== g.snapMode && (s = f >= Math.abs(h - v), n = f >= Math.abs(c - b), a = f >= Math.abs(r - m), o = f >= Math.abs(l - _), s && (i.position.top = p._convertPositionTo("relative", {top: h, left: 0}).top - p.margins.top), n && (i.position.top = p._convertPositionTo("relative", {top: c - p.helperProportions.height, left: 0}).top - p.margins.top), a && (i.position.left = p._convertPositionTo("relative", {top: 0, left: r}).left - p.margins.left), o && (i.position.left = p._convertPositionTo("relative", {top: 0, left: l - p.helperProportions.width}).left - p.margins.left)), !p.snapElements[u].snapping && (s || n || a || o || d) && p.options.snap.snap && p.options.snap.snap.call(p.element, e, t.extend(p._uiHash(), {snapItem: p.snapElements[u].item})), p.snapElements[u].snapping = s || n || a || o || d)
    }}), t.ui.plugin.add("draggable", "stack", {start: function () {
        var e, i = this.data("ui-draggable").options, s = t.makeArray(t(i.stack)).sort(function (e, i) {
            return(parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0)
        });
        s.length && (e = parseInt(t(s[0]).css("zIndex"), 10) || 0, t(s).each(function (i) {
            t(this).css("zIndex", e + i)
        }), this.css("zIndex", e + s.length))
    }}), t.ui.plugin.add("draggable", "zIndex", {start: function (e, i) {
        var s = t(i.helper), n = t(this).data("ui-draggable").options;
        s.css("zIndex") && (n._zIndex = s.css("zIndex")), s.css("zIndex", n.zIndex)
    }, stop: function (e, i) {
        var s = t(this).data("ui-draggable").options;
        s._zIndex && t(i.helper).css("zIndex", s._zIndex)
    }})
})(jQuery);
(function (t) {
    function e(t, e, i) {
        return t > e && e + i > t
    }

    t.widget("ui.droppable", {version: "1.10.4", widgetEventPrefix: "drop", options: {accept: "*", activeClass: !1, addClasses: !0, greedy: !1, hoverClass: !1, scope: "default", tolerance: "intersect", activate: null, deactivate: null, drop: null, out: null, over: null}, _create: function () {
        var e, i = this.options, s = i.accept;
        this.isover = !1, this.isout = !0, this.accept = t.isFunction(s) ? s : function (t) {
            return t.is(s)
        }, this.proportions = function () {
            return arguments.length ? (e = arguments[0], undefined) : e ? e : e = {width: this.element[0].offsetWidth, height: this.element[0].offsetHeight}
        }, t.ui.ddmanager.droppables[i.scope] = t.ui.ddmanager.droppables[i.scope] || [], t.ui.ddmanager.droppables[i.scope].push(this), i.addClasses && this.element.addClass("ui-droppable")
    }, _destroy: function () {
        for (var e = 0, i = t.ui.ddmanager.droppables[this.options.scope]; i.length > e; e++)i[e] === this && i.splice(e, 1);
        this.element.removeClass("ui-droppable ui-droppable-disabled")
    }, _setOption: function (e, i) {
        "accept" === e && (this.accept = t.isFunction(i) ? i : function (t) {
            return t.is(i)
        }), t.Widget.prototype._setOption.apply(this, arguments)
    }, _activate: function (e) {
        var i = t.ui.ddmanager.current;
        this.options.activeClass && this.element.addClass(this.options.activeClass), i && this._trigger("activate", e, this.ui(i))
    }, _deactivate: function (e) {
        var i = t.ui.ddmanager.current;
        this.options.activeClass && this.element.removeClass(this.options.activeClass), i && this._trigger("deactivate", e, this.ui(i))
    }, _over: function (e) {
        var i = t.ui.ddmanager.current;
        i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", e, this.ui(i)))
    }, _out: function (e) {
        var i = t.ui.ddmanager.current;
        i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", e, this.ui(i)))
    }, _drop: function (e, i) {
        var s = i || t.ui.ddmanager.current, n = !1;
        return s && (s.currentItem || s.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function () {
            var e = t.data(this, "ui-droppable");
            return e.options.greedy && !e.options.disabled && e.options.scope === s.options.scope && e.accept.call(e.element[0], s.currentItem || s.element) && t.ui.intersect(s, t.extend(e, {offset: e.element.offset()}), e.options.tolerance) ? (n = !0, !1) : undefined
        }), n ? !1 : this.accept.call(this.element[0], s.currentItem || s.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", e, this.ui(s)), this.element) : !1) : !1
    }, ui: function (t) {
        return{draggable: t.currentItem || t.element, helper: t.helper, position: t.position, offset: t.positionAbs}
    }}), t.ui.intersect = function (t, i, s) {
        if (!i.offset)return!1;
        var n, a, o = (t.positionAbs || t.position.absolute).left, r = (t.positionAbs || t.position.absolute).top, l = o + t.helperProportions.width, h = r + t.helperProportions.height, c = i.offset.left, u = i.offset.top, d = c + i.proportions().width, p = u + i.proportions().height;
        switch (s) {
            case"fit":
                return o >= c && d >= l && r >= u && p >= h;
            case"intersect":
                return o + t.helperProportions.width / 2 > c && d > l - t.helperProportions.width / 2 && r + t.helperProportions.height / 2 > u && p > h - t.helperProportions.height / 2;
            case"pointer":
                return n = (t.positionAbs || t.position.absolute).left + (t.clickOffset || t.offset.click).left, a = (t.positionAbs || t.position.absolute).top + (t.clickOffset || t.offset.click).top, e(a, u, i.proportions().height) && e(n, c, i.proportions().width);
            case"touch":
                return(r >= u && p >= r || h >= u && p >= h || u > r && h > p) && (o >= c && d >= o || l >= c && d >= l || c > o && l > d);
            default:
                return!1
        }
    }, t.ui.ddmanager = {current: null, droppables: {"default": []}, prepareOffsets: function (e, i) {
        var s, n, a = t.ui.ddmanager.droppables[e.options.scope] || [], o = i ? i.type : null, r = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
        t:for (s = 0; a.length > s; s++)if (!(a[s].options.disabled || e && !a[s].accept.call(a[s].element[0], e.currentItem || e.element))) {
            for (n = 0; r.length > n; n++)if (r[n] === a[s].element[0]) {
                a[s].proportions().height = 0;
                continue t
            }
            a[s].visible = "none" !== a[s].element.css("display"), a[s].visible && ("mousedown" === o && a[s]._activate.call(a[s], i), a[s].offset = a[s].element.offset(), a[s].proportions({width: a[s].element[0].offsetWidth, height: a[s].element[0].offsetHeight}))
        }
    }, drop: function (e, i) {
        var s = !1;
        return t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(), function () {
            this.options && (!this.options.disabled && this.visible && t.ui.intersect(e, this, this.options.tolerance) && (s = this._drop.call(this, i) || s), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
        }), s
    }, dragStart: function (e, i) {
        e.element.parentsUntil("body").bind("scroll.droppable", function () {
            e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
        })
    }, drag: function (e, i) {
        e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i), t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function () {
            if (!this.options.disabled && !this.greedyChild && this.visible) {
                var s, n, a, o = t.ui.intersect(e, this, this.options.tolerance), r = !o && this.isover ? "isout" : o && !this.isover ? "isover" : null;
                r && (this.options.greedy && (n = this.options.scope, a = this.element.parents(":data(ui-droppable)").filter(function () {
                    return t.data(this, "ui-droppable").options.scope === n
                }), a.length && (s = t.data(a[0], "ui-droppable"), s.greedyChild = "isover" === r)), s && "isover" === r && (s.isover = !1, s.isout = !0, s._out.call(s, i)), this[r] = !0, this["isout" === r ? "isover" : "isout"] = !1, this["isover" === r ? "_over" : "_out"].call(this, i), s && "isout" === r && (s.isout = !1, s.isover = !0, s._over.call(s, i)))
            }
        })
    }, dragStop: function (e, i) {
        e.element.parentsUntil("body").unbind("scroll.droppable"), e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
    }}
})(jQuery);
(function (t, e) {
    var i = "ui-effects-";
    t.effects = {effect: {}}, function (t, e) {
        function i(t, e, i) {
            var s = u[e.type] || {};
            return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : 0 > t ? 0 : t > s.max ? s.max : t)
        }

        function s(i) {
            var s = h(), n = s._rgba = [];
            return i = i.toLowerCase(), f(l, function (t, a) {
                var o, r = a.re.exec(i), l = r && a.parse(r), h = a.space || "rgba";
                return l ? (o = s[h](l), s[c[h].cache] = o[c[h].cache], n = s._rgba = o._rgba, !1) : e
            }), n.length ? ("0,0,0,0" === n.join() && t.extend(n, a.transparent), s) : a[i]
        }

        function n(t, e, i) {
            return i = (i + 1) % 1, 1 > 6 * i ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t
        }

        var a, o = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor", r = /^([\-+])=\s*(\d+\.?\d*)/, l = [
            {re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function (t) {
                return[t[1], t[2], t[3], t[4]]
            }},
            {re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function (t) {
                return[2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
            }},
            {re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function (t) {
                return[parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
            }},
            {re: /#([a-f0-9])([a-f0-9])([a-f0-9])/, parse: function (t) {
                return[parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
            }},
            {re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, space: "hsla", parse: function (t) {
                return[t[1], t[2] / 100, t[3] / 100, t[4]]
            }}
        ], h = t.Color = function (e, i, s, n) {
            return new t.Color.fn.parse(e, i, s, n)
        }, c = {rgba: {props: {red: {idx: 0, type: "byte"}, green: {idx: 1, type: "byte"}, blue: {idx: 2, type: "byte"}}}, hsla: {props: {hue: {idx: 0, type: "degrees"}, saturation: {idx: 1, type: "percent"}, lightness: {idx: 2, type: "percent"}}}}, u = {"byte": {floor: !0, max: 255}, percent: {max: 1}, degrees: {mod: 360, floor: !0}}, d = h.support = {}, p = t("<p>")[0], f = t.each;
        p.style.cssText = "background-color:rgba(1,1,1,.5)", d.rgba = p.style.backgroundColor.indexOf("rgba") > -1, f(c, function (t, e) {
            e.cache = "_" + t, e.props.alpha = {idx: 3, type: "percent", def: 1}
        }), h.fn = t.extend(h.prototype, {parse: function (n, o, r, l) {
            if (n === e)return this._rgba = [null, null, null, null], this;
            (n.jquery || n.nodeType) && (n = t(n).css(o), o = e);
            var u = this, d = t.type(n), p = this._rgba = [];
            return o !== e && (n = [n, o, r, l], d = "array"), "string" === d ? this.parse(s(n) || a._default) : "array" === d ? (f(c.rgba.props, function (t, e) {
                p[e.idx] = i(n[e.idx], e)
            }), this) : "object" === d ? (n instanceof h ? f(c, function (t, e) {
                n[e.cache] && (u[e.cache] = n[e.cache].slice())
            }) : f(c, function (e, s) {
                var a = s.cache;
                f(s.props, function (t, e) {
                    if (!u[a] && s.to) {
                        if ("alpha" === t || null == n[t])return;
                        u[a] = s.to(u._rgba)
                    }
                    u[a][e.idx] = i(n[t], e, !0)
                }), u[a] && 0 > t.inArray(null, u[a].slice(0, 3)) && (u[a][3] = 1, s.from && (u._rgba = s.from(u[a])))
            }), this) : e
        }, is: function (t) {
            var i = h(t), s = !0, n = this;
            return f(c, function (t, a) {
                var o, r = i[a.cache];
                return r && (o = n[a.cache] || a.to && a.to(n._rgba) || [], f(a.props, function (t, i) {
                    return null != r[i.idx] ? s = r[i.idx] === o[i.idx] : e
                })), s
            }), s
        }, _space: function () {
            var t = [], e = this;
            return f(c, function (i, s) {
                e[s.cache] && t.push(i)
            }), t.pop()
        }, transition: function (t, e) {
            var s = h(t), n = s._space(), a = c[n], o = 0 === this.alpha() ? h("transparent") : this, r = o[a.cache] || a.to(o._rgba), l = r.slice();
            return s = s[a.cache], f(a.props, function (t, n) {
                var a = n.idx, o = r[a], h = s[a], c = u[n.type] || {};
                null !== h && (null === o ? l[a] = h : (c.mod && (h - o > c.mod / 2 ? o += c.mod : o - h > c.mod / 2 && (o -= c.mod)), l[a] = i((h - o) * e + o, n)))
            }), this[n](l)
        }, blend: function (e) {
            if (1 === this._rgba[3])return this;
            var i = this._rgba.slice(), s = i.pop(), n = h(e)._rgba;
            return h(t.map(i, function (t, e) {
                return(1 - s) * n[e] + s * t
            }))
        }, toRgbaString: function () {
            var e = "rgba(", i = t.map(this._rgba, function (t, e) {
                return null == t ? e > 2 ? 1 : 0 : t
            });
            return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")"
        }, toHslaString: function () {
            var e = "hsla(", i = t.map(this.hsla(), function (t, e) {
                return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t
            });
            return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")"
        }, toHexString: function (e) {
            var i = this._rgba.slice(), s = i.pop();
            return e && i.push(~~(255 * s)), "#" + t.map(i,function (t) {
                return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t
            }).join("")
        }, toString: function () {
            return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
        }}), h.fn.parse.prototype = h.fn, c.hsla.to = function (t) {
            if (null == t[0] || null == t[1] || null == t[2])return[null, null, null, t[3]];
            var e, i, s = t[0] / 255, n = t[1] / 255, a = t[2] / 255, o = t[3], r = Math.max(s, n, a), l = Math.min(s, n, a), h = r - l, c = r + l, u = .5 * c;
            return e = l === r ? 0 : s === r ? 60 * (n - a) / h + 360 : n === r ? 60 * (a - s) / h + 120 : 60 * (s - n) / h + 240, i = 0 === h ? 0 : .5 >= u ? h / c : h / (2 - c), [Math.round(e) % 360, i, u, null == o ? 1 : o]
        }, c.hsla.from = function (t) {
            if (null == t[0] || null == t[1] || null == t[2])return[null, null, null, t[3]];
            var e = t[0] / 360, i = t[1], s = t[2], a = t[3], o = .5 >= s ? s * (1 + i) : s + i - s * i, r = 2 * s - o;
            return[Math.round(255 * n(r, o, e + 1 / 3)), Math.round(255 * n(r, o, e)), Math.round(255 * n(r, o, e - 1 / 3)), a]
        }, f(c, function (s, n) {
            var a = n.props, o = n.cache, l = n.to, c = n.from;
            h.fn[s] = function (s) {
                if (l && !this[o] && (this[o] = l(this._rgba)), s === e)return this[o].slice();
                var n, r = t.type(s), u = "array" === r || "object" === r ? s : arguments, d = this[o].slice();
                return f(a, function (t, e) {
                    var s = u["object" === r ? t : e.idx];
                    null == s && (s = d[e.idx]), d[e.idx] = i(s, e)
                }), c ? (n = h(c(d)), n[o] = d, n) : h(d)
            }, f(a, function (e, i) {
                h.fn[e] || (h.fn[e] = function (n) {
                    var a, o = t.type(n), l = "alpha" === e ? this._hsla ? "hsla" : "rgba" : s, h = this[l](), c = h[i.idx];
                    return"undefined" === o ? c : ("function" === o && (n = n.call(this, c), o = t.type(n)), null == n && i.empty ? this : ("string" === o && (a = r.exec(n), a && (n = c + parseFloat(a[2]) * ("+" === a[1] ? 1 : -1))), h[i.idx] = n, this[l](h)))
                })
            })
        }), h.hook = function (e) {
            var i = e.split(" ");
            f(i, function (e, i) {
                t.cssHooks[i] = {set: function (e, n) {
                    var a, o, r = "";
                    if ("transparent" !== n && ("string" !== t.type(n) || (a = s(n)))) {
                        if (n = h(a || n), !d.rgba && 1 !== n._rgba[3]) {
                            for (o = "backgroundColor" === i ? e.parentNode : e; ("" === r || "transparent" === r) && o && o.style;)try {
                                r = t.css(o, "backgroundColor"), o = o.parentNode
                            } catch (l) {
                            }
                            n = n.blend(r && "transparent" !== r ? r : "_default")
                        }
                        n = n.toRgbaString()
                    }
                    try {
                        e.style[i] = n
                    } catch (l) {
                    }
                }}, t.fx.step[i] = function (e) {
                    e.colorInit || (e.start = h(e.elem, i), e.end = h(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
                }
            })
        }, h.hook(o), t.cssHooks.borderColor = {expand: function (t) {
            var e = {};
            return f(["Top", "Right", "Bottom", "Left"], function (i, s) {
                e["border" + s + "Color"] = t
            }), e
        }}, a = t.Color.names = {aqua: "#00ffff", black: "#000000", blue: "#0000ff", fuchsia: "#ff00ff", gray: "#808080", green: "#008000", lime: "#00ff00", maroon: "#800000", navy: "#000080", olive: "#808000", purple: "#800080", red: "#ff0000", silver: "#c0c0c0", teal: "#008080", white: "#ffffff", yellow: "#ffff00", transparent: [null, null, null, 0], _default: "#ffffff"}
    }(jQuery), function () {
        function i(e) {
            var i, s, n = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle, a = {};
            if (n && n.length && n[0] && n[n[0]])for (s = n.length; s--;)i = n[s], "string" == typeof n[i] && (a[t.camelCase(i)] = n[i]); else for (i in n)"string" == typeof n[i] && (a[i] = n[i]);
            return a
        }

        function s(e, i) {
            var s, n, o = {};
            for (s in i)n = i[s], e[s] !== n && (a[s] || (t.fx.step[s] || !isNaN(parseFloat(n))) && (o[s] = n));
            return o
        }

        var n = ["add", "remove", "toggle"], a = {border: 1, borderBottom: 1, borderColor: 1, borderLeft: 1, borderRight: 1, borderTop: 1, borderWidth: 1, margin: 1, padding: 1};
        t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (e, i) {
            t.fx.step[i] = function (t) {
                ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (jQuery.style(t.elem, i, t.end), t.setAttr = !0)
            }
        }), t.fn.addBack || (t.fn.addBack = function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }), t.effects.animateClass = function (e, a, o, r) {
            var l = t.speed(a, o, r);
            return this.queue(function () {
                var a, o = t(this), r = o.attr("class") || "", h = l.children ? o.find("*").addBack() : o;
                h = h.map(function () {
                    var e = t(this);
                    return{el: e, start: i(this)}
                }), a = function () {
                    t.each(n, function (t, i) {
                        e[i] && o[i + "Class"](e[i])
                    })
                }, a(), h = h.map(function () {
                    return this.end = i(this.el[0]), this.diff = s(this.start, this.end), this
                }), o.attr("class", r), h = h.map(function () {
                    var e = this, i = t.Deferred(), s = t.extend({}, l, {queue: !1, complete: function () {
                        i.resolve(e)
                    }});
                    return this.el.animate(this.diff, s), i.promise()
                }), t.when.apply(t, h.get()).done(function () {
                    a(), t.each(arguments, function () {
                        var e = this.el;
                        t.each(this.diff, function (t) {
                            e.css(t, "")
                        })
                    }), l.complete.call(o[0])
                })
            })
        }, t.fn.extend({addClass: function (e) {
            return function (i, s, n, a) {
                return s ? t.effects.animateClass.call(this, {add: i}, s, n, a) : e.apply(this, arguments)
            }
        }(t.fn.addClass), removeClass: function (e) {
            return function (i, s, n, a) {
                return arguments.length > 1 ? t.effects.animateClass.call(this, {remove: i}, s, n, a) : e.apply(this, arguments)
            }
        }(t.fn.removeClass), toggleClass: function (i) {
            return function (s, n, a, o, r) {
                return"boolean" == typeof n || n === e ? a ? t.effects.animateClass.call(this, n ? {add: s} : {remove: s}, a, o, r) : i.apply(this, arguments) : t.effects.animateClass.call(this, {toggle: s}, n, a, o)
            }
        }(t.fn.toggleClass), switchClass: function (e, i, s, n, a) {
            return t.effects.animateClass.call(this, {add: i, remove: e}, s, n, a)
        }})
    }(), function () {
        function s(e, i, s, n) {
            return t.isPlainObject(e) && (i = e, e = e.effect), e = {effect: e}, null == i && (i = {}), t.isFunction(i) && (n = i, s = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (n = s, s = i, i = {}), t.isFunction(s) && (n = s, s = null), i && t.extend(e, i), s = s || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof s ? s : s in t.fx.speeds ? t.fx.speeds[s] : t.fx.speeds._default, e.complete = n || i.complete, e
        }

        function n(e) {
            return!e || "number" == typeof e || t.fx.speeds[e] ? !0 : "string" != typeof e || t.effects.effect[e] ? t.isFunction(e) ? !0 : "object" != typeof e || e.effect ? !1 : !0 : !0
        }

        t.extend(t.effects, {version: "1.10.4", save: function (t, e) {
            for (var s = 0; e.length > s; s++)null !== e[s] && t.data(i + e[s], t[0].style[e[s]])
        }, restore: function (t, s) {
            var n, a;
            for (a = 0; s.length > a; a++)null !== s[a] && (n = t.data(i + s[a]), n === e && (n = ""), t.css(s[a], n))
        }, setMode: function (t, e) {
            return"toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
        }, getBaseline: function (t, e) {
            var i, s;
            switch (t[0]) {
                case"top":
                    i = 0;
                    break;
                case"middle":
                    i = .5;
                    break;
                case"bottom":
                    i = 1;
                    break;
                default:
                    i = t[0] / e.height
            }
            switch (t[1]) {
                case"left":
                    s = 0;
                    break;
                case"center":
                    s = .5;
                    break;
                case"right":
                    s = 1;
                    break;
                default:
                    s = t[1] / e.width
            }
            return{x: s, y: i}
        }, createWrapper: function (e) {
            if (e.parent().is(".ui-effects-wrapper"))return e.parent();
            var i = {width: e.outerWidth(!0), height: e.outerHeight(!0), "float": e.css("float")}, s = t("<div></div>").addClass("ui-effects-wrapper").css({fontSize: "100%", background: "transparent", border: "none", margin: 0, padding: 0}), n = {width: e.width(), height: e.height()}, a = document.activeElement;
            try {
                a.id
            } catch (o) {
                a = document.body
            }
            return e.wrap(s), (e[0] === a || t.contains(e[0], a)) && t(a).focus(), s = e.parent(), "static" === e.css("position") ? (s.css({position: "relative"}), e.css({position: "relative"})) : (t.extend(i, {position: e.css("position"), zIndex: e.css("z-index")}), t.each(["top", "left", "bottom", "right"], function (t, s) {
                i[s] = e.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto")
            }), e.css({position: "relative", top: 0, left: 0, right: "auto", bottom: "auto"})), e.css(n), s.css(i).show()
        }, removeWrapper: function (e) {
            var i = document.activeElement;
            return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).focus()), e
        }, setTransition: function (e, i, s, n) {
            return n = n || {}, t.each(i, function (t, i) {
                var a = e.cssUnit(i);
                a[0] > 0 && (n[i] = a[0] * s + a[1])
            }), n
        }}), t.fn.extend({effect: function () {
            function e(e) {
                function s() {
                    t.isFunction(a) && a.call(n[0]), t.isFunction(e) && e()
                }

                var n = t(this), a = i.complete, r = i.mode;
                (n.is(":hidden") ? "hide" === r : "show" === r) ? (n[r](), s()) : o.call(n[0], i, s)
            }

            var i = s.apply(this, arguments), n = i.mode, a = i.queue, o = t.effects.effect[i.effect];
            return t.fx.off || !o ? n ? this[n](i.duration, i.complete) : this.each(function () {
                i.complete && i.complete.call(this)
            }) : a === !1 ? this.each(e) : this.queue(a || "fx", e)
        }, show: function (t) {
            return function (e) {
                if (n(e))return t.apply(this, arguments);
                var i = s.apply(this, arguments);
                return i.mode = "show", this.effect.call(this, i)
            }
        }(t.fn.show), hide: function (t) {
            return function (e) {
                if (n(e))return t.apply(this, arguments);
                var i = s.apply(this, arguments);
                return i.mode = "hide", this.effect.call(this, i)
            }
        }(t.fn.hide), toggle: function (t) {
            return function (e) {
                if (n(e) || "boolean" == typeof e)return t.apply(this, arguments);
                var i = s.apply(this, arguments);
                return i.mode = "toggle", this.effect.call(this, i)
            }
        }(t.fn.toggle), cssUnit: function (e) {
            var i = this.css(e), s = [];
            return t.each(["em", "px", "%", "pt"], function (t, e) {
                i.indexOf(e) > 0 && (s = [parseFloat(i), e])
            }), s
        }})
    }(), function () {
        var e = {};
        t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (t, i) {
            e[i] = function (e) {
                return Math.pow(e, t + 2)
            }
        }), t.extend(e, {Sine: function (t) {
            return 1 - Math.cos(t * Math.PI / 2)
        }, Circ: function (t) {
            return 1 - Math.sqrt(1 - t * t)
        }, Elastic: function (t) {
            return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
        }, Back: function (t) {
            return t * t * (3 * t - 2)
        }, Bounce: function (t) {
            for (var e, i = 4; ((e = Math.pow(2, --i)) - 1) / 11 > t;);
            return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
        }}), t.each(e, function (e, i) {
            t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function (t) {
                return 1 - i(1 - t)
            }, t.easing["easeInOut" + e] = function (t) {
                return.5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2
            }
        })
    }()
})(jQuery);
(function (t) {
    var e = /up|down|vertical/, i = /up|left|vertical|horizontal/;
    t.effects.effect.blind = function (s, n) {
        var a, o, r, l = t(this), h = ["position", "top", "bottom", "left", "right", "height", "width"], c = t.effects.setMode(l, s.mode || "hide"), u = s.direction || "up", d = e.test(u), p = d ? "height" : "width", f = d ? "top" : "left", g = i.test(u), m = {}, v = "show" === c;
        l.parent().is(".ui-effects-wrapper") ? t.effects.save(l.parent(), h) : t.effects.save(l, h), l.show(), a = t.effects.createWrapper(l).css({overflow: "hidden"}), o = a[p](), r = parseFloat(a.css(f)) || 0, m[p] = v ? o : 0, g || (l.css(d ? "bottom" : "right", 0).css(d ? "top" : "left", "auto").css({position: "absolute"}), m[f] = v ? r : o + r), v && (a.css(p, 0), g || a.css(f, r + o)), a.animate(m, {duration: s.duration, easing: s.easing, queue: !1, complete: function () {
            "hide" === c && l.hide(), t.effects.restore(l, h), t.effects.removeWrapper(l), n()
        }})
    }
})(jQuery);
(function (t) {
    t.effects.effect.bounce = function (e, i) {
        var s, n, a, o = t(this), r = ["position", "top", "bottom", "left", "right", "height", "width"], l = t.effects.setMode(o, e.mode || "effect"), h = "hide" === l, c = "show" === l, u = e.direction || "up", d = e.distance, p = e.times || 5, f = 2 * p + (c || h ? 1 : 0), g = e.duration / f, m = e.easing, v = "up" === u || "down" === u ? "top" : "left", _ = "up" === u || "left" === u, b = o.queue(), y = b.length;
        for ((c || h) && r.push("opacity"), t.effects.save(o, r), o.show(), t.effects.createWrapper(o), d || (d = o["top" === v ? "outerHeight" : "outerWidth"]() / 3), c && (a = {opacity: 1}, a[v] = 0, o.css("opacity", 0).css(v, _ ? 2 * -d : 2 * d).animate(a, g, m)), h && (d /= Math.pow(2, p - 1)), a = {}, a[v] = 0, s = 0; p > s; s++)n = {}, n[v] = (_ ? "-=" : "+=") + d, o.animate(n, g, m).animate(a, g, m), d = h ? 2 * d : d / 2;
        h && (n = {opacity: 0}, n[v] = (_ ? "-=" : "+=") + d, o.animate(n, g, m)), o.queue(function () {
            h && o.hide(), t.effects.restore(o, r), t.effects.removeWrapper(o), i()
        }), y > 1 && b.splice.apply(b, [1, 0].concat(b.splice(y, f + 1))), o.dequeue()
    }
})(jQuery);
(function (t) {
    t.effects.effect.clip = function (e, i) {
        var s, n, a, o = t(this), r = ["position", "top", "bottom", "left", "right", "height", "width"], l = t.effects.setMode(o, e.mode || "hide"), h = "show" === l, c = e.direction || "vertical", u = "vertical" === c, d = u ? "height" : "width", p = u ? "top" : "left", f = {};
        t.effects.save(o, r), o.show(), s = t.effects.createWrapper(o).css({overflow: "hidden"}), n = "IMG" === o[0].tagName ? s : o, a = n[d](), h && (n.css(d, 0), n.css(p, a / 2)), f[d] = h ? a : 0, f[p] = h ? 0 : a / 2, n.animate(f, {queue: !1, duration: e.duration, easing: e.easing, complete: function () {
            h || o.hide(), t.effects.restore(o, r), t.effects.removeWrapper(o), i()
        }})
    }
})(jQuery);
(function (t) {
    t.effects.effect.drop = function (e, i) {
        var s, n = t(this), a = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"], o = t.effects.setMode(n, e.mode || "hide"), r = "show" === o, l = e.direction || "left", h = "up" === l || "down" === l ? "top" : "left", c = "up" === l || "left" === l ? "pos" : "neg", u = {opacity: r ? 1 : 0};
        t.effects.save(n, a), n.show(), t.effects.createWrapper(n), s = e.distance || n["top" === h ? "outerHeight" : "outerWidth"](!0) / 2, r && n.css("opacity", 0).css(h, "pos" === c ? -s : s), u[h] = (r ? "pos" === c ? "+=" : "-=" : "pos" === c ? "-=" : "+=") + s, n.animate(u, {queue: !1, duration: e.duration, easing: e.easing, complete: function () {
            "hide" === o && n.hide(), t.effects.restore(n, a), t.effects.removeWrapper(n), i()
        }})
    }
})(jQuery);
(function (t) {
    t.effects.effect.explode = function (e, i) {
        function s() {
            b.push(this), b.length === u * d && n()
        }

        function n() {
            p.css({visibility: "visible"}), t(b).remove(), g || p.hide(), i()
        }

        var a, o, r, l, h, c, u = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3, d = u, p = t(this), f = t.effects.setMode(p, e.mode || "hide"), g = "show" === f, m = p.show().css("visibility", "hidden").offset(), v = Math.ceil(p.outerWidth() / d), _ = Math.ceil(p.outerHeight() / u), b = [];
        for (a = 0; u > a; a++)for (l = m.top + a * _, c = a - (u - 1) / 2, o = 0; d > o; o++)r = m.left + o * v, h = o - (d - 1) / 2, p.clone().appendTo("body").wrap("<div></div>").css({position: "absolute", visibility: "visible", left: -o * v, top: -a * _}).parent().addClass("ui-effects-explode").css({position: "absolute", overflow: "hidden", width: v, height: _, left: r + (g ? h * v : 0), top: l + (g ? c * _ : 0), opacity: g ? 0 : 1}).animate({left: r + (g ? 0 : h * v), top: l + (g ? 0 : c * _), opacity: g ? 1 : 0}, e.duration || 500, e.easing, s)
    }
})(jQuery);
(function (t) {
    t.effects.effect.fade = function (e, i) {
        var s = t(this), n = t.effects.setMode(s, e.mode || "toggle");
        s.animate({opacity: n}, {queue: !1, duration: e.duration, easing: e.easing, complete: i})
    }
})(jQuery);
(function (t) {
    t.effects.effect.fold = function (e, i) {
        var s, n, a = t(this), o = ["position", "top", "bottom", "left", "right", "height", "width"], r = t.effects.setMode(a, e.mode || "hide"), l = "show" === r, h = "hide" === r, c = e.size || 15, u = /([0-9]+)%/.exec(c), d = !!e.horizFirst, p = l !== d, f = p ? ["width", "height"] : ["height", "width"], g = e.duration / 2, m = {}, v = {};
        t.effects.save(a, o), a.show(), s = t.effects.createWrapper(a).css({overflow: "hidden"}), n = p ? [s.width(), s.height()] : [s.height(), s.width()], u && (c = parseInt(u[1], 10) / 100 * n[h ? 0 : 1]), l && s.css(d ? {height: 0, width: c} : {height: c, width: 0}), m[f[0]] = l ? n[0] : c, v[f[1]] = l ? n[1] : 0, s.animate(m, g, e.easing).animate(v, g, e.easing, function () {
            h && a.hide(), t.effects.restore(a, o), t.effects.removeWrapper(a), i()
        })
    }
})(jQuery);
(function (t) {
    t.effects.effect.highlight = function (e, i) {
        var s = t(this), n = ["backgroundImage", "backgroundColor", "opacity"], a = t.effects.setMode(s, e.mode || "show"), o = {backgroundColor: s.css("backgroundColor")};
        "hide" === a && (o.opacity = 0), t.effects.save(s, n), s.show().css({backgroundImage: "none", backgroundColor: e.color || "#ffff99"}).animate(o, {queue: !1, duration: e.duration, easing: e.easing, complete: function () {
            "hide" === a && s.hide(), t.effects.restore(s, n), i()
        }})
    }
})(jQuery);
(function (t) {
    t.effects.effect.pulsate = function (e, i) {
        var s, n = t(this), a = t.effects.setMode(n, e.mode || "show"), o = "show" === a, r = "hide" === a, l = o || "hide" === a, h = 2 * (e.times || 5) + (l ? 1 : 0), c = e.duration / h, u = 0, d = n.queue(), p = d.length;
        for ((o || !n.is(":visible")) && (n.css("opacity", 0).show(), u = 1), s = 1; h > s; s++)n.animate({opacity: u}, c, e.easing), u = 1 - u;
        n.animate({opacity: u}, c, e.easing), n.queue(function () {
            r && n.hide(), i()
        }), p > 1 && d.splice.apply(d, [1, 0].concat(d.splice(p, h + 1))), n.dequeue()
    }
})(jQuery);
(function (t) {
    t.effects.effect.puff = function (e, i) {
        var s = t(this), n = t.effects.setMode(s, e.mode || "hide"), a = "hide" === n, o = parseInt(e.percent, 10) || 150, r = o / 100, l = {height: s.height(), width: s.width(), outerHeight: s.outerHeight(), outerWidth: s.outerWidth()};
        t.extend(e, {effect: "scale", queue: !1, fade: !0, mode: n, complete: i, percent: a ? o : 100, from: a ? l : {height: l.height * r, width: l.width * r, outerHeight: l.outerHeight * r, outerWidth: l.outerWidth * r}}), s.effect(e)
    }, t.effects.effect.scale = function (e, i) {
        var s = t(this), n = t.extend(!0, {}, e), a = t.effects.setMode(s, e.mode || "effect"), o = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "hide" === a ? 0 : 100), r = e.direction || "both", l = e.origin, h = {height: s.height(), width: s.width(), outerHeight: s.outerHeight(), outerWidth: s.outerWidth()}, c = {y: "horizontal" !== r ? o / 100 : 1, x: "vertical" !== r ? o / 100 : 1};
        n.effect = "size", n.queue = !1, n.complete = i, "effect" !== a && (n.origin = l || ["middle", "center"], n.restore = !0), n.from = e.from || ("show" === a ? {height: 0, width: 0, outerHeight: 0, outerWidth: 0} : h), n.to = {height: h.height * c.y, width: h.width * c.x, outerHeight: h.outerHeight * c.y, outerWidth: h.outerWidth * c.x}, n.fade && ("show" === a && (n.from.opacity = 0, n.to.opacity = 1), "hide" === a && (n.from.opacity = 1, n.to.opacity = 0)), s.effect(n)
    }, t.effects.effect.size = function (e, i) {
        var s, n, a, o = t(this), r = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"], l = ["position", "top", "bottom", "left", "right", "overflow", "opacity"], h = ["width", "height", "overflow"], c = ["fontSize"], u = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"], d = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"], p = t.effects.setMode(o, e.mode || "effect"), f = e.restore || "effect" !== p, g = e.scale || "both", m = e.origin || ["middle", "center"], v = o.css("position"), _ = f ? r : l, b = {height: 0, width: 0, outerHeight: 0, outerWidth: 0};
        "show" === p && o.show(), s = {height: o.height(), width: o.width(), outerHeight: o.outerHeight(), outerWidth: o.outerWidth()}, "toggle" === e.mode && "show" === p ? (o.from = e.to || b, o.to = e.from || s) : (o.from = e.from || ("show" === p ? b : s), o.to = e.to || ("hide" === p ? b : s)), a = {from: {y: o.from.height / s.height, x: o.from.width / s.width}, to: {y: o.to.height / s.height, x: o.to.width / s.width}}, ("box" === g || "both" === g) && (a.from.y !== a.to.y && (_ = _.concat(u), o.from = t.effects.setTransition(o, u, a.from.y, o.from), o.to = t.effects.setTransition(o, u, a.to.y, o.to)), a.from.x !== a.to.x && (_ = _.concat(d), o.from = t.effects.setTransition(o, d, a.from.x, o.from), o.to = t.effects.setTransition(o, d, a.to.x, o.to))), ("content" === g || "both" === g) && a.from.y !== a.to.y && (_ = _.concat(c).concat(h), o.from = t.effects.setTransition(o, c, a.from.y, o.from), o.to = t.effects.setTransition(o, c, a.to.y, o.to)), t.effects.save(o, _), o.show(), t.effects.createWrapper(o), o.css("overflow", "hidden").css(o.from), m && (n = t.effects.getBaseline(m, s), o.from.top = (s.outerHeight - o.outerHeight()) * n.y, o.from.left = (s.outerWidth - o.outerWidth()) * n.x, o.to.top = (s.outerHeight - o.to.outerHeight) * n.y, o.to.left = (s.outerWidth - o.to.outerWidth) * n.x), o.css(o.from), ("content" === g || "both" === g) && (u = u.concat(["marginTop", "marginBottom"]).concat(c), d = d.concat(["marginLeft", "marginRight"]), h = r.concat(u).concat(d), o.find("*[width]").each(function () {
            var i = t(this), s = {height: i.height(), width: i.width(), outerHeight: i.outerHeight(), outerWidth: i.outerWidth()};
            f && t.effects.save(i, h), i.from = {height: s.height * a.from.y, width: s.width * a.from.x, outerHeight: s.outerHeight * a.from.y, outerWidth: s.outerWidth * a.from.x}, i.to = {height: s.height * a.to.y, width: s.width * a.to.x, outerHeight: s.height * a.to.y, outerWidth: s.width * a.to.x}, a.from.y !== a.to.y && (i.from = t.effects.setTransition(i, u, a.from.y, i.from), i.to = t.effects.setTransition(i, u, a.to.y, i.to)), a.from.x !== a.to.x && (i.from = t.effects.setTransition(i, d, a.from.x, i.from), i.to = t.effects.setTransition(i, d, a.to.x, i.to)), i.css(i.from), i.animate(i.to, e.duration, e.easing, function () {
                f && t.effects.restore(i, h)
            })
        })), o.animate(o.to, {queue: !1, duration: e.duration, easing: e.easing, complete: function () {
            0 === o.to.opacity && o.css("opacity", o.from.opacity), "hide" === p && o.hide(), t.effects.restore(o, _), f || ("static" === v ? o.css({position: "relative", top: o.to.top, left: o.to.left}) : t.each(["top", "left"], function (t, e) {
                o.css(e, function (e, i) {
                    var s = parseInt(i, 10), n = t ? o.to.left : o.to.top;
                    return"auto" === i ? n + "px" : s + n + "px"
                })
            })), t.effects.removeWrapper(o), i()
        }})
    }
})(jQuery);
(function (t) {
    t.effects.effect.shake = function (e, i) {
        var s, n = t(this), a = ["position", "top", "bottom", "left", "right", "height", "width"], o = t.effects.setMode(n, e.mode || "effect"), r = e.direction || "left", l = e.distance || 20, h = e.times || 3, c = 2 * h + 1, u = Math.round(e.duration / c), d = "up" === r || "down" === r ? "top" : "left", p = "up" === r || "left" === r, f = {}, g = {}, m = {}, v = n.queue(), _ = v.length;
        for (t.effects.save(n, a), n.show(), t.effects.createWrapper(n), f[d] = (p ? "-=" : "+=") + l, g[d] = (p ? "+=" : "-=") + 2 * l, m[d] = (p ? "-=" : "+=") + 2 * l, n.animate(f, u, e.easing), s = 1; h > s; s++)n.animate(g, u, e.easing).animate(m, u, e.easing);
        n.animate(g, u, e.easing).animate(f, u / 2, e.easing).queue(function () {
            "hide" === o && n.hide(), t.effects.restore(n, a), t.effects.removeWrapper(n), i()
        }), _ > 1 && v.splice.apply(v, [1, 0].concat(v.splice(_, c + 1))), n.dequeue()
    }
})(jQuery);
(function (t) {
    t.effects.effect.slide = function (e, i) {
        var s, n = t(this), a = ["position", "top", "bottom", "left", "right", "width", "height"], o = t.effects.setMode(n, e.mode || "show"), r = "show" === o, l = e.direction || "left", h = "up" === l || "down" === l ? "top" : "left", c = "up" === l || "left" === l, u = {};
        t.effects.save(n, a), n.show(), s = e.distance || n["top" === h ? "outerHeight" : "outerWidth"](!0), t.effects.createWrapper(n).css({overflow: "hidden"}), r && n.css(h, c ? isNaN(s) ? "-" + s : -s : s), u[h] = (r ? c ? "+=" : "-=" : c ? "-=" : "+=") + s, n.animate(u, {queue: !1, duration: e.duration, easing: e.easing, complete: function () {
            "hide" === o && n.hide(), t.effects.restore(n, a), t.effects.removeWrapper(n), i()
        }})
    }
})(jQuery);
(function (t) {
    t.effects.effect.transfer = function (e, i) {
        var s = t(this), n = t(e.to), a = "fixed" === n.css("position"), o = t("body"), r = a ? o.scrollTop() : 0, l = a ? o.scrollLeft() : 0, h = n.offset(), c = {top: h.top - r, left: h.left - l, height: n.innerHeight(), width: n.innerWidth()}, u = s.offset(), d = t("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(e.className).css({top: u.top - r, left: u.left - l, height: s.innerHeight(), width: s.innerWidth(), position: a ? "fixed" : "absolute"}).animate(c, e.duration, e.easing, function () {
            d.remove(), i()
        })
    }
})(jQuery);
(function (t) {
    t.widget("ui.menu", {version: "1.10.4", defaultElement: "<ul>", delay: 300, options: {icons: {submenu: "ui-icon-carat-1-e"}, menus: "ul", position: {my: "left top", at: "right top"}, role: "menu", blur: null, focus: null, select: null}, _create: function () {
        this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({role: this.options.role, tabIndex: 0}).bind("click" + this.eventNamespace, t.proxy(function (t) {
            this.options.disabled && t.preventDefault()
        }, this)), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({"mousedown .ui-menu-item > a": function (t) {
            t.preventDefault()
        }, "click .ui-state-disabled > a": function (t) {
            t.preventDefault()
        }, "click .ui-menu-item:has(a)": function (e) {
            var i = t(e.target).closest(".ui-menu-item");
            !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && t(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
        }, "mouseenter .ui-menu-item": function (e) {
            var i = t(e.currentTarget);
            i.siblings().children(".ui-state-active").removeClass("ui-state-active"), this.focus(e, i)
        }, mouseleave: "collapseAll", "mouseleave .ui-menu": "collapseAll", focus: function (t, e) {
            var i = this.active || this.element.children(".ui-menu-item").eq(0);
            e || this.focus(t, i)
        }, blur: function (e) {
            this._delay(function () {
                t.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(e)
            })
        }, keydown: "_keydown"}), this.refresh(), this._on(this.document, {click: function (e) {
            t(e.target).closest(".ui-menu").length || this.collapseAll(e), this.mouseHandled = !1
        }})
    }, _destroy: function () {
        this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function () {
            var e = t(this);
            e.data("ui-menu-submenu-carat") && e.remove()
        }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
    }, _keydown: function (e) {
        function i(t) {
            return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        }

        var s, n, a, o, r, l = !0;
        switch (e.keyCode) {
            case t.ui.keyCode.PAGE_UP:
                this.previousPage(e);
                break;
            case t.ui.keyCode.PAGE_DOWN:
                this.nextPage(e);
                break;
            case t.ui.keyCode.HOME:
                this._move("first", "first", e);
                break;
            case t.ui.keyCode.END:
                this._move("last", "last", e);
                break;
            case t.ui.keyCode.UP:
                this.previous(e);
                break;
            case t.ui.keyCode.DOWN:
                this.next(e);
                break;
            case t.ui.keyCode.LEFT:
                this.collapse(e);
                break;
            case t.ui.keyCode.RIGHT:
                this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                break;
            case t.ui.keyCode.ENTER:
            case t.ui.keyCode.SPACE:
                this._activate(e);
                break;
            case t.ui.keyCode.ESCAPE:
                this.collapse(e);
                break;
            default:
                l = !1, n = this.previousFilter || "", a = String.fromCharCode(e.keyCode), o = !1, clearTimeout(this.filterTimer), a === n ? o = !0 : a = n + a, r = RegExp("^" + i(a), "i"), s = this.activeMenu.children(".ui-menu-item").filter(function () {
                    return r.test(t(this).children("a").text())
                }), s = o && -1 !== s.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : s, s.length || (a = String.fromCharCode(e.keyCode), r = RegExp("^" + i(a), "i"), s = this.activeMenu.children(".ui-menu-item").filter(function () {
                    return r.test(t(this).children("a").text())
                })), s.length ? (this.focus(e, s), s.length > 1 ? (this.previousFilter = a, this.filterTimer = this._delay(function () {
                    delete this.previousFilter
                }, 1e3)) : delete this.previousFilter) : delete this.previousFilter
        }
        l && e.preventDefault()
    }, _activate: function (t) {
        this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(t) : this.select(t))
    }, refresh: function () {
        var e, i = this.options.icons.submenu, s = this.element.find(this.options.menus);
        this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length), s.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role: this.options.role, "aria-hidden": "true", "aria-expanded": "false"}).each(function () {
            var e = t(this), s = e.prev("a"), n = t("<span>").addClass("ui-menu-icon ui-icon " + i).data("ui-menu-submenu-carat", !0);
            s.attr("aria-haspopup", "true").prepend(n), e.attr("aria-labelledby", s.attr("id"))
        }), e = s.add(this.element), e.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex: -1, role: this._itemRole()}), e.children(":not(.ui-menu-item)").each(function () {
            var e = t(this);
            /[^\-\u2014\u2013\s]/.test(e.text()) || e.addClass("ui-widget-content ui-menu-divider")
        }), e.children(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
    }, _itemRole: function () {
        return{menu: "menuitem", listbox: "option"}[this.options.role]
    }, _setOption: function (t, e) {
        "icons" === t && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu), this._super(t, e)
    }, focus: function (t, e) {
        var i, s;
        this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), s = this.active.children("a").addClass("ui-state-focus"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function () {
            this._close()
        }, this.delay), i = e.children(".ui-menu"), i.length && t && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {item: e})
    }, _scrollIntoView: function (e) {
        var i, s, n, a, o, r;
        this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, n = e.offset().top - this.activeMenu.offset().top - i - s, a = this.activeMenu.scrollTop(), o = this.activeMenu.height(), r = e.height(), 0 > n ? this.activeMenu.scrollTop(a + n) : n + r > o && this.activeMenu.scrollTop(a + n - o + r))
    }, blur: function (t, e) {
        e || clearTimeout(this.timer), this.active && (this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", t, {item: this.active}))
    }, _startOpening: function (t) {
        clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function () {
            this._close(), this._open(t)
        }, this.delay))
    }, _open: function (e) {
        var i = t.extend({of: this.active}, this.options.position);
        clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
    }, collapseAll: function (e, i) {
        clearTimeout(this.timer), this.timer = this._delay(function () {
            var s = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
            s.length || (s = this.element), this._close(s), this.blur(e), this.activeMenu = s
        }, this.delay)
    }, _close: function (t) {
        t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
    }, collapse: function (t) {
        var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
        e && e.length && (this._close(), this.focus(t, e))
    }, expand: function (t) {
        var e = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
        e && e.length && (this._open(e.parent()), this._delay(function () {
            this.focus(t, e)
        }))
    }, next: function (t) {
        this._move("next", "first", t)
    }, previous: function (t) {
        this._move("prev", "last", t)
    }, isFirstItem: function () {
        return this.active && !this.active.prevAll(".ui-menu-item").length
    }, isLastItem: function () {
        return this.active && !this.active.nextAll(".ui-menu-item").length
    }, _move: function (t, e, i) {
        var s;
        this.active && (s = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.children(".ui-menu-item")[e]()), this.focus(i, s)
    }, nextPage: function (e) {
        var i, s, n;
        return this.active ? (this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () {
            return i = t(this), 0 > i.offset().top - s - n
        }), this.focus(e, i)) : this.focus(e, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]())), undefined) : (this.next(e), undefined)
    }, previousPage: function (e) {
        var i, s, n;
        return this.active ? (this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () {
            return i = t(this), i.offset().top - s + n > 0
        }), this.focus(e, i)) : this.focus(e, this.activeMenu.children(".ui-menu-item").first())), undefined) : (this.next(e), undefined)
    }, _hasScroll: function () {
        return this.element.outerHeight() < this.element.prop("scrollHeight")
    }, select: function (e) {
        this.active = this.active || t(e.target).closest(".ui-menu-item");
        var i = {item: this.active};
        this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i)
    }})
})(jQuery);
(function (t, e) {
    t.widget("ui.progressbar", {version: "1.10.4", options: {max: 100, value: 0, change: null, complete: null}, min: 0, _create: function () {
        this.oldValue = this.options.value = this._constrainedValue(), this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role: "progressbar", "aria-valuemin": this.min}), this.valueDiv = t("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this._refreshValue()
    }, _destroy: function () {
        this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove()
    }, value: function (t) {
        return t === e ? this.options.value : (this.options.value = this._constrainedValue(t), this._refreshValue(), e)
    }, _constrainedValue: function (t) {
        return t === e && (t = this.options.value), this.indeterminate = t === !1, "number" != typeof t && (t = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, t))
    }, _setOptions: function (t) {
        var e = t.value;
        delete t.value, this._super(t), this.options.value = this._constrainedValue(e), this._refreshValue()
    }, _setOption: function (t, e) {
        "max" === t && (e = Math.max(this.min, e)), this._super(t, e)
    }, _percentage: function () {
        return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
    }, _refreshValue: function () {
        var e = this.options.value, i = this._percentage();
        this.valueDiv.toggle(this.indeterminate || e > this.min).toggleClass("ui-corner-right", e === this.options.max).width(i.toFixed(0) + "%"), this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = t("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({"aria-valuemax": this.options.max, "aria-valuenow": e}), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== e && (this.oldValue = e, this._trigger("change")), e === this.options.max && this._trigger("complete")
    }})
})(jQuery);
(function (t) {
    function e(t) {
        return parseInt(t, 10) || 0
    }

    function i(t) {
        return!isNaN(parseInt(t, 10))
    }

    t.widget("ui.resizable", t.ui.mouse, {version: "1.10.4", widgetEventPrefix: "resize", options: {alsoResize: !1, animate: !1, animateDuration: "slow", animateEasing: "swing", aspectRatio: !1, autoHide: !1, containment: !1, ghost: !1, grid: !1, handles: "e,s,se", helper: !1, maxHeight: null, maxWidth: null, minHeight: 10, minWidth: 10, zIndex: 90, resize: null, start: null, stop: null}, _create: function () {
        var e, i, s, n, a, o = this, r = this.options;
        if (this.element.addClass("ui-resizable"), t.extend(this, {_aspectRatio: !!r.aspectRatio, aspectRatio: r.aspectRatio, originalElement: this.element, _proportionallyResizeElements: [], _helper: r.helper || r.ghost || r.animate ? r.helper || "ui-resizable-helper" : null}), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position: this.element.css("position"), width: this.element.outerWidth(), height: this.element.outerHeight(), top: this.element.css("top"), left: this.element.css("left")})), this.element = this.element.parent().data("ui-resizable", this.element.data("ui-resizable")), this.elementIsWrapper = !0, this.element.css({marginLeft: this.originalElement.css("marginLeft"), marginTop: this.originalElement.css("marginTop"), marginRight: this.originalElement.css("marginRight"), marginBottom: this.originalElement.css("marginBottom")}), this.originalElement.css({marginLeft: 0, marginTop: 0, marginRight: 0, marginBottom: 0}), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({position: "static", zoom: 1, display: "block"})), this.originalElement.css({margin: this.originalElement.css("margin")}), this._proportionallyResize()), this.handles = r.handles || (t(".ui-resizable-handle", this.element).length ? {n: ".ui-resizable-n", e: ".ui-resizable-e", s: ".ui-resizable-s", w: ".ui-resizable-w", se: ".ui-resizable-se", sw: ".ui-resizable-sw", ne: ".ui-resizable-ne", nw: ".ui-resizable-nw"} : "e,s,se"), this.handles.constructor === String)for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), e = this.handles.split(","), this.handles = {}, i = 0; e.length > i; i++)s = t.trim(e[i]), a = "ui-resizable-" + s, n = t("<div class='ui-resizable-handle " + a + "'></div>"), n.css({zIndex: r.zIndex}), "se" === s && n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[s] = ".ui-resizable-" + s, this.element.append(n);
        this._renderAxis = function (e) {
            var i, s, n, a;
            e = e || this.element;
            for (i in this.handles)this.handles[i].constructor === String && (this.handles[i] = t(this.handles[i], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (s = t(this.handles[i], this.element), a = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), n = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), e.css(n, a), this._proportionallyResize()), t(this.handles[i]).length
        }, this._renderAxis(this.element), this._handles = t(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function () {
            o.resizing || (this.className && (n = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), o.axis = n && n[1] ? n[1] : "se")
        }), r.autoHide && (this._handles.hide(), t(this.element).addClass("ui-resizable-autohide").mouseenter(function () {
            r.disabled || (t(this).removeClass("ui-resizable-autohide"), o._handles.show())
        }).mouseleave(function () {
            r.disabled || o.resizing || (t(this).addClass("ui-resizable-autohide"), o._handles.hide())
        })), this._mouseInit()
    }, _destroy: function () {
        this._mouseDestroy();
        var e, i = function (e) {
            t(e).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
        };
        return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({position: e.css("position"), width: e.outerWidth(), height: e.outerHeight(), top: e.css("top"), left: e.css("left")}).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
    }, _mouseCapture: function (e) {
        var i, s, n = !1;
        for (i in this.handles)s = t(this.handles[i])[0], (s === e.target || t.contains(s, e.target)) && (n = !0);
        return!this.options.disabled && n
    }, _mouseStart: function (i) {
        var s, n, a, o = this.options, r = this.element.position(), h = this.element;
        return this.resizing = !0, /absolute/.test(h.css("position")) ? h.css({position: "absolute", top: h.css("top"), left: h.css("left")}) : h.is(".ui-draggable") && h.css({position: "absolute", top: r.top, left: r.left}), this._renderProxy(), s = e(this.helper.css("left")), n = e(this.helper.css("top")), o.containment && (s += t(o.containment).scrollLeft() || 0, n += t(o.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {left: s, top: n}, this.size = this._helper ? {width: this.helper.width(), height: this.helper.height()} : {width: h.width(), height: h.height()}, this.originalSize = this._helper ? {width: h.outerWidth(), height: h.outerHeight()} : {width: h.width(), height: h.height()}, this.originalPosition = {left: s, top: n}, this.sizeDiff = {width: h.outerWidth() - h.width(), height: h.outerHeight() - h.height()}, this.originalMousePosition = {left: i.pageX, top: i.pageY}, this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1, a = t(".ui-resizable-" + this.axis).css("cursor"), t("body").css("cursor", "auto" === a ? this.axis + "-resize" : a), h.addClass("ui-resizable-resizing"), this._propagate("start", i), !0
    }, _mouseDrag: function (e) {
        var i, s = this.helper, n = {}, a = this.originalMousePosition, o = this.axis, r = this.position.top, h = this.position.left, l = this.size.width, c = this.size.height, u = e.pageX - a.left || 0, d = e.pageY - a.top || 0, p = this._change[o];
        return p ? (i = p.apply(this, [e, u, d]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), this._updateCache(i), this._propagate("resize", e), this.position.top !== r && (n.top = this.position.top + "px"), this.position.left !== h && (n.left = this.position.left + "px"), this.size.width !== l && (n.width = this.size.width + "px"), this.size.height !== c && (n.height = this.size.height + "px"), s.css(n), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), t.isEmptyObject(n) || this._trigger("resize", e, this.ui()), !1) : !1
    }, _mouseStop: function (e) {
        this.resizing = !1;
        var i, s, n, a, o, r, h, l = this.options, c = this;
        return this._helper && (i = this._proportionallyResizeElements, s = i.length && /textarea/i.test(i[0].nodeName), n = s && t.ui.hasScroll(i[0], "left") ? 0 : c.sizeDiff.height, a = s ? 0 : c.sizeDiff.width, o = {width: c.helper.width() - a, height: c.helper.height() - n}, r = parseInt(c.element.css("left"), 10) + (c.position.left - c.originalPosition.left) || null, h = parseInt(c.element.css("top"), 10) + (c.position.top - c.originalPosition.top) || null, l.animate || this.element.css(t.extend(o, {top: h, left: r})), c.helper.height(c.size.height), c.helper.width(c.size.width), this._helper && !l.animate && this._proportionallyResize()), t("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1
    }, _updateVirtualBoundaries: function (t) {
        var e, s, n, a, o, r = this.options;
        o = {minWidth: i(r.minWidth) ? r.minWidth : 0, maxWidth: i(r.maxWidth) ? r.maxWidth : 1 / 0, minHeight: i(r.minHeight) ? r.minHeight : 0, maxHeight: i(r.maxHeight) ? r.maxHeight : 1 / 0}, (this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio, n = o.minWidth / this.aspectRatio, s = o.maxHeight * this.aspectRatio, a = o.maxWidth / this.aspectRatio, e > o.minWidth && (o.minWidth = e), n > o.minHeight && (o.minHeight = n), o.maxWidth > s && (o.maxWidth = s), o.maxHeight > a && (o.maxHeight = a)), this._vBoundaries = o
    }, _updateCache: function (t) {
        this.offset = this.helper.offset(), i(t.left) && (this.position.left = t.left), i(t.top) && (this.position.top = t.top), i(t.height) && (this.size.height = t.height), i(t.width) && (this.size.width = t.width)
    }, _updateRatio: function (t) {
        var e = this.position, s = this.size, n = this.axis;
        return i(t.height) ? t.width = t.height * this.aspectRatio : i(t.width) && (t.height = t.width / this.aspectRatio), "sw" === n && (t.left = e.left + (s.width - t.width), t.top = null), "nw" === n && (t.top = e.top + (s.height - t.height), t.left = e.left + (s.width - t.width)), t
    }, _respectSize: function (t) {
        var e = this._vBoundaries, s = this.axis, n = i(t.width) && e.maxWidth && e.maxWidth < t.width, a = i(t.height) && e.maxHeight && e.maxHeight < t.height, o = i(t.width) && e.minWidth && e.minWidth > t.width, r = i(t.height) && e.minHeight && e.minHeight > t.height, h = this.originalPosition.left + this.originalSize.width, l = this.position.top + this.size.height, c = /sw|nw|w/.test(s), u = /nw|ne|n/.test(s);
        return o && (t.width = e.minWidth), r && (t.height = e.minHeight), n && (t.width = e.maxWidth), a && (t.height = e.maxHeight), o && c && (t.left = h - e.minWidth), n && c && (t.left = h - e.maxWidth), r && u && (t.top = l - e.minHeight), a && u && (t.top = l - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t
    }, _proportionallyResize: function () {
        if (this._proportionallyResizeElements.length) {
            var t, e, i, s, n, a = this.helper || this.element;
            for (t = 0; this._proportionallyResizeElements.length > t; t++) {
                if (n = this._proportionallyResizeElements[t], !this.borderDif)for (this.borderDif = [], i = [n.css("borderTopWidth"), n.css("borderRightWidth"), n.css("borderBottomWidth"), n.css("borderLeftWidth")], s = [n.css("paddingTop"), n.css("paddingRight"), n.css("paddingBottom"), n.css("paddingLeft")], e = 0; i.length > e; e++)this.borderDif[e] = (parseInt(i[e], 10) || 0) + (parseInt(s[e], 10) || 0);
                n.css({height: a.height() - this.borderDif[0] - this.borderDif[2] || 0, width: a.width() - this.borderDif[1] - this.borderDif[3] || 0})
            }
        }
    }, _renderProxy: function () {
        var e = this.element, i = this.options;
        this.elementOffset = e.offset(), this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({width: this.element.outerWidth() - 1, height: this.element.outerHeight() - 1, position: "absolute", left: this.elementOffset.left + "px", top: this.elementOffset.top + "px", zIndex: ++i.zIndex}), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
    }, _change: {e: function (t, e) {
        return{width: this.originalSize.width + e}
    }, w: function (t, e) {
        var i = this.originalSize, s = this.originalPosition;
        return{left: s.left + e, width: i.width - e}
    }, n: function (t, e, i) {
        var s = this.originalSize, n = this.originalPosition;
        return{top: n.top + i, height: s.height - i}
    }, s: function (t, e, i) {
        return{height: this.originalSize.height + i}
    }, se: function (e, i, s) {
        return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
    }, sw: function (e, i, s) {
        return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
    }, ne: function (e, i, s) {
        return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
    }, nw: function (e, i, s) {
        return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
    }}, _propagate: function (e, i) {
        t.ui.plugin.call(this, e, [i, this.ui()]), "resize" !== e && this._trigger(e, i, this.ui())
    }, plugins: {}, ui: function () {
        return{originalElement: this.originalElement, element: this.element, helper: this.helper, position: this.position, size: this.size, originalSize: this.originalSize, originalPosition: this.originalPosition}
    }}), t.ui.plugin.add("resizable", "animate", {stop: function (e) {
        var i = t(this).data("ui-resizable"), s = i.options, n = i._proportionallyResizeElements, a = n.length && /textarea/i.test(n[0].nodeName), o = a && t.ui.hasScroll(n[0], "left") ? 0 : i.sizeDiff.height, r = a ? 0 : i.sizeDiff.width, h = {width: i.size.width - r, height: i.size.height - o}, l = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null, c = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
        i.element.animate(t.extend(h, c && l ? {top: c, left: l} : {}), {duration: s.animateDuration, easing: s.animateEasing, step: function () {
            var s = {width: parseInt(i.element.css("width"), 10), height: parseInt(i.element.css("height"), 10), top: parseInt(i.element.css("top"), 10), left: parseInt(i.element.css("left"), 10)};
            n && n.length && t(n[0]).css({width: s.width, height: s.height}), i._updateCache(s), i._propagate("resize", e)
        }})
    }}), t.ui.plugin.add("resizable", "containment", {start: function () {
        var i, s, n, a, o, r, h, l = t(this).data("ui-resizable"), c = l.options, u = l.element, d = c.containment, p = d instanceof t ? d.get(0) : /parent/.test(d) ? u.parent().get(0) : d;
        p && (l.containerElement = t(p), /document/.test(d) || d === document ? (l.containerOffset = {left: 0, top: 0}, l.containerPosition = {left: 0, top: 0}, l.parentData = {element: t(document), left: 0, top: 0, width: t(document).width(), height: t(document).height() || document.body.parentNode.scrollHeight}) : (i = t(p), s = [], t(["Top", "Right", "Left", "Bottom"]).each(function (t, n) {
            s[t] = e(i.css("padding" + n))
        }), l.containerOffset = i.offset(), l.containerPosition = i.position(), l.containerSize = {height: i.innerHeight() - s[3], width: i.innerWidth() - s[1]}, n = l.containerOffset, a = l.containerSize.height, o = l.containerSize.width, r = t.ui.hasScroll(p, "left") ? p.scrollWidth : o, h = t.ui.hasScroll(p) ? p.scrollHeight : a, l.parentData = {element: p, left: n.left, top: n.top, width: r, height: h}))
    }, resize: function (e) {
        var i, s, n, a, o = t(this).data("ui-resizable"), r = o.options, h = o.containerOffset, l = o.position, c = o._aspectRatio || e.shiftKey, u = {top: 0, left: 0}, d = o.containerElement;
        d[0] !== document && /static/.test(d.css("position")) && (u = h), l.left < (o._helper ? h.left : 0) && (o.size.width = o.size.width + (o._helper ? o.position.left - h.left : o.position.left - u.left), c && (o.size.height = o.size.width / o.aspectRatio), o.position.left = r.helper ? h.left : 0), l.top < (o._helper ? h.top : 0) && (o.size.height = o.size.height + (o._helper ? o.position.top - h.top : o.position.top), c && (o.size.width = o.size.height * o.aspectRatio), o.position.top = o._helper ? h.top : 0), o.offset.left = o.parentData.left + o.position.left, o.offset.top = o.parentData.top + o.position.top, i = Math.abs((o._helper ? o.offset.left - u.left : o.offset.left - u.left) + o.sizeDiff.width), s = Math.abs((o._helper ? o.offset.top - u.top : o.offset.top - h.top) + o.sizeDiff.height), n = o.containerElement.get(0) === o.element.parent().get(0), a = /relative|absolute/.test(o.containerElement.css("position")), n && a && (i -= Math.abs(o.parentData.left)), i + o.size.width >= o.parentData.width && (o.size.width = o.parentData.width - i, c && (o.size.height = o.size.width / o.aspectRatio)), s + o.size.height >= o.parentData.height && (o.size.height = o.parentData.height - s, c && (o.size.width = o.size.height * o.aspectRatio))
    }, stop: function () {
        var e = t(this).data("ui-resizable"), i = e.options, s = e.containerOffset, n = e.containerPosition, a = e.containerElement, o = t(e.helper), r = o.offset(), h = o.outerWidth() - e.sizeDiff.width, l = o.outerHeight() - e.sizeDiff.height;
        e._helper && !i.animate && /relative/.test(a.css("position")) && t(this).css({left: r.left - n.left - s.left, width: h, height: l}), e._helper && !i.animate && /static/.test(a.css("position")) && t(this).css({left: r.left - n.left - s.left, width: h, height: l})
    }}), t.ui.plugin.add("resizable", "alsoResize", {start: function () {
        var e = t(this).data("ui-resizable"), i = e.options, s = function (e) {
            t(e).each(function () {
                var e = t(this);
                e.data("ui-resizable-alsoresize", {width: parseInt(e.width(), 10), height: parseInt(e.height(), 10), left: parseInt(e.css("left"), 10), top: parseInt(e.css("top"), 10)})
            })
        };
        "object" != typeof i.alsoResize || i.alsoResize.parentNode ? s(i.alsoResize) : i.alsoResize.length ? (i.alsoResize = i.alsoResize[0], s(i.alsoResize)) : t.each(i.alsoResize, function (t) {
            s(t)
        })
    }, resize: function (e, i) {
        var s = t(this).data("ui-resizable"), n = s.options, a = s.originalSize, o = s.originalPosition, r = {height: s.size.height - a.height || 0, width: s.size.width - a.width || 0, top: s.position.top - o.top || 0, left: s.position.left - o.left || 0}, h = function (e, s) {
            t(e).each(function () {
                var e = t(this), n = t(this).data("ui-resizable-alsoresize"), a = {}, o = s && s.length ? s : e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                t.each(o, function (t, e) {
                    var i = (n[e] || 0) + (r[e] || 0);
                    i && i >= 0 && (a[e] = i || null)
                }), e.css(a)
            })
        };
        "object" != typeof n.alsoResize || n.alsoResize.nodeType ? h(n.alsoResize) : t.each(n.alsoResize, function (t, e) {
            h(t, e)
        })
    }, stop: function () {
        t(this).removeData("resizable-alsoresize")
    }}), t.ui.plugin.add("resizable", "ghost", {start: function () {
        var e = t(this).data("ui-resizable"), i = e.options, s = e.size;
        e.ghost = e.originalElement.clone(), e.ghost.css({opacity: .25, display: "block", position: "relative", height: s.height, width: s.width, margin: 0, left: 0, top: 0}).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""), e.ghost.appendTo(e.helper)
    }, resize: function () {
        var e = t(this).data("ui-resizable");
        e.ghost && e.ghost.css({position: "relative", height: e.size.height, width: e.size.width})
    }, stop: function () {
        var e = t(this).data("ui-resizable");
        e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
    }}), t.ui.plugin.add("resizable", "grid", {resize: function () {
        var e = t(this).data("ui-resizable"), i = e.options, s = e.size, n = e.originalSize, a = e.originalPosition, o = e.axis, r = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid, h = r[0] || 1, l = r[1] || 1, c = Math.round((s.width - n.width) / h) * h, u = Math.round((s.height - n.height) / l) * l, d = n.width + c, p = n.height + u, f = i.maxWidth && d > i.maxWidth, g = i.maxHeight && p > i.maxHeight, m = i.minWidth && i.minWidth > d, v = i.minHeight && i.minHeight > p;
        i.grid = r, m && (d += h), v && (p += l), f && (d -= h), g && (p -= l), /^(se|s|e)$/.test(o) ? (e.size.width = d, e.size.height = p) : /^(ne)$/.test(o) ? (e.size.width = d, e.size.height = p, e.position.top = a.top - u) : /^(sw)$/.test(o) ? (e.size.width = d, e.size.height = p, e.position.left = a.left - c) : (p - l > 0 ? (e.size.height = p, e.position.top = a.top - u) : (e.size.height = l, e.position.top = a.top + n.height - l), d - h > 0 ? (e.size.width = d, e.position.left = a.left - c) : (e.size.width = h, e.position.left = a.left + n.width - h))
    }})
})(jQuery);
(function (t) {
    t.widget("ui.selectable", t.ui.mouse, {version: "1.10.4", options: {appendTo: "body", autoRefresh: !0, distance: 0, filter: "*", tolerance: "touch", selected: null, selecting: null, start: null, stop: null, unselected: null, unselecting: null}, _create: function () {
        var e, i = this;
        this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function () {
            e = t(i.options.filter, i.element[0]), e.addClass("ui-selectee"), e.each(function () {
                var e = t(this), i = e.offset();
                t.data(this, "selectable-item", {element: this, $element: e, left: i.left, top: i.top, right: i.left + e.outerWidth(), bottom: i.top + e.outerHeight(), startselected: !1, selected: e.hasClass("ui-selected"), selecting: e.hasClass("ui-selecting"), unselecting: e.hasClass("ui-unselecting")})
            })
        }, this.refresh(), this.selectees = e.addClass("ui-selectee"), this._mouseInit(), this.helper = t("<div class='ui-selectable-helper'></div>")
    }, _destroy: function () {
        this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy()
    }, _mouseStart: function (e) {
        var i = this, s = this.options;
        this.opos = [e.pageX, e.pageY], this.options.disabled || (this.selectees = t(s.filter, this.element[0]), this._trigger("start", e), t(s.appendTo).append(this.helper), this.helper.css({left: e.pageX, top: e.pageY, width: 0, height: 0}), s.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () {
            var s = t.data(this, "selectable-item");
            s.startselected = !0, e.metaKey || e.ctrlKey || (s.$element.removeClass("ui-selected"), s.selected = !1, s.$element.addClass("ui-unselecting"), s.unselecting = !0, i._trigger("unselecting", e, {unselecting: s.element}))
        }), t(e.target).parents().addBack().each(function () {
            var s, n = t.data(this, "selectable-item");
            return n ? (s = !e.metaKey && !e.ctrlKey || !n.$element.hasClass("ui-selected"), n.$element.removeClass(s ? "ui-unselecting" : "ui-selected").addClass(s ? "ui-selecting" : "ui-unselecting"), n.unselecting = !s, n.selecting = s, n.selected = s, s ? i._trigger("selecting", e, {selecting: n.element}) : i._trigger("unselecting", e, {unselecting: n.element}), !1) : undefined
        }))
    }, _mouseDrag: function (e) {
        if (this.dragged = !0, !this.options.disabled) {
            var i, s = this, n = this.options, a = this.opos[0], o = this.opos[1], r = e.pageX, l = e.pageY;
            return a > r && (i = r, r = a, a = i), o > l && (i = l, l = o, o = i), this.helper.css({left: a, top: o, width: r - a, height: l - o}), this.selectees.each(function () {
                var i = t.data(this, "selectable-item"), h = !1;
                i && i.element !== s.element[0] && ("touch" === n.tolerance ? h = !(i.left > r || a > i.right || i.top > l || o > i.bottom) : "fit" === n.tolerance && (h = i.left > a && r > i.right && i.top > o && l > i.bottom), h ? (i.selected && (i.$element.removeClass("ui-selected"), i.selected = !1), i.unselecting && (i.$element.removeClass("ui-unselecting"), i.unselecting = !1), i.selecting || (i.$element.addClass("ui-selecting"), i.selecting = !0, s._trigger("selecting", e, {selecting: i.element}))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.$element.addClass("ui-selected"), i.selected = !0) : (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.startselected && (i.$element.addClass("ui-unselecting"), i.unselecting = !0), s._trigger("unselecting", e, {unselecting: i.element}))), i.selected && (e.metaKey || e.ctrlKey || i.startselected || (i.$element.removeClass("ui-selected"), i.selected = !1, i.$element.addClass("ui-unselecting"), i.unselecting = !0, s._trigger("unselecting", e, {unselecting: i.element})))))
            }), !1
        }
    }, _mouseStop: function (e) {
        var i = this;
        return this.dragged = !1, t(".ui-unselecting", this.element[0]).each(function () {
            var s = t.data(this, "selectable-item");
            s.$element.removeClass("ui-unselecting"), s.unselecting = !1, s.startselected = !1, i._trigger("unselected", e, {unselected: s.element})
        }), t(".ui-selecting", this.element[0]).each(function () {
            var s = t.data(this, "selectable-item");
            s.$element.removeClass("ui-selecting").addClass("ui-selected"), s.selecting = !1, s.selected = !0, s.startselected = !0, i._trigger("selected", e, {selected: s.element})
        }), this._trigger("stop", e), this.helper.remove(), !1
    }})
})(jQuery);
(function (t) {
    var e = 5;
    t.widget("ui.slider", t.ui.mouse, {version: "1.10.4", widgetEventPrefix: "slide", options: {animate: !1, distance: 0, max: 100, min: 0, orientation: "horizontal", range: !1, step: 1, value: 0, values: null, change: null, slide: null, start: null, stop: null}, _create: function () {
        this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1
    }, _refresh: function () {
        this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
    }, _createHandles: function () {
        var e, i, s = this.options, n = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"), a = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>", o = [];
        for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), e = n.length; i > e; e++)o.push(a);
        this.handles = n.add(t(o.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function (e) {
            t(this).data("ui-slider-handle-index", e)
        })
    }, _createRange: function () {
        var e = this.options, i = "";
        e.range ? (e.range === !0 && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left: "", bottom: ""}) : (this.range = t("<div></div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + ("min" === e.range || "max" === e.range ? " ui-slider-range-" + e.range : ""))) : (this.range && this.range.remove(), this.range = null)
    }, _setupEvents: function () {
        var t = this.handles.add(this.range).filter("a");
        this._off(t), this._on(t, this._handleEvents), this._hoverable(t), this._focusable(t)
    }, _destroy: function () {
        this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
    }, _mouseCapture: function (e) {
        var i, s, n, a, o, r, l, h, u = this, c = this.options;
        return c.disabled ? !1 : (this.elementSize = {width: this.element.outerWidth(), height: this.element.outerHeight()}, this.elementOffset = this.element.offset(), i = {x: e.pageX, y: e.pageY}, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function (e) {
            var i = Math.abs(s - u.values(e));
            (n > i || n === i && (e === u._lastChangedValue || u.values(e) === c.min)) && (n = i, a = t(this), o = e)
        }), r = this._start(e, o), r === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = o, a.addClass("ui-state-active").focus(), l = a.offset(), h = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = h ? {left: 0, top: 0} : {left: e.pageX - l.left - a.width() / 2, top: e.pageY - l.top - a.height() / 2 - (parseInt(a.css("borderTopWidth"), 10) || 0) - (parseInt(a.css("borderBottomWidth"), 10) || 0) + (parseInt(a.css("marginTop"), 10) || 0)}, this.handles.hasClass("ui-state-hover") || this._slide(e, o, s), this._animateOff = !0, !0))
    }, _mouseStart: function () {
        return!0
    }, _mouseDrag: function (t) {
        var e = {x: t.pageX, y: t.pageY}, i = this._normValueFromMouse(e);
        return this._slide(t, this._handleIndex, i), !1
    }, _mouseStop: function (t) {
        return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
    }, _detectOrientation: function () {
        this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
    }, _normValueFromMouse: function (t) {
        var e, i, s, n, a;
        return"horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / e, s > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), a = this._valueMin() + s * n, this._trimAlignValue(a)
    }, _start: function (t, e) {
        var i = {handle: this.handles[e], value: this.value()};
        return this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("start", t, i)
    }, _slide: function (t, e, i) {
        var s, n, a;
        this.options.values && this.options.values.length ? (s = this.values(e ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === e && i > s || 1 === e && s > i) && (i = s), i !== this.values(e) && (n = this.values(), n[e] = i, a = this._trigger("slide", t, {handle: this.handles[e], value: i, values: n}), s = this.values(e ? 0 : 1), a !== !1 && this.values(e, i))) : i !== this.value() && (a = this._trigger("slide", t, {handle: this.handles[e], value: i}), a !== !1 && this.value(i))
    }, _stop: function (t, e) {
        var i = {handle: this.handles[e], value: this.value()};
        this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("stop", t, i)
    }, _change: function (t, e) {
        if (!this._keySliding && !this._mouseSliding) {
            var i = {handle: this.handles[e], value: this.value()};
            this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._lastChangedValue = e, this._trigger("change", t, i)
        }
    }, value: function (t) {
        return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), this._change(null, 0), undefined) : this._value()
    }, values: function (e, i) {
        var s, n, a;
        if (arguments.length > 1)return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), this._change(null, e), undefined;
        if (!arguments.length)return this._values();
        if (!t.isArray(arguments[0]))return this.options.values && this.options.values.length ? this._values(e) : this.value();
        for (s = this.options.values, n = arguments[0], a = 0; s.length > a; a += 1)s[a] = this._trimAlignValue(n[a]), this._change(null, a);
        this._refreshValue()
    }, _setOption: function (e, i) {
        var s, n = 0;
        switch ("range" === e && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (n = this.options.values.length), t.Widget.prototype._setOption.apply(this, arguments), e) {
            case"orientation":
                this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
                break;
            case"value":
                this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                break;
            case"values":
                for (this._animateOff = !0, this._refreshValue(), s = 0; n > s; s += 1)this._change(null, s);
                this._animateOff = !1;
                break;
            case"min":
            case"max":
                this._animateOff = !0, this._refreshValue(), this._animateOff = !1;
                break;
            case"range":
                this._animateOff = !0, this._refresh(), this._animateOff = !1
        }
    }, _value: function () {
        var t = this.options.value;
        return t = this._trimAlignValue(t)
    }, _values: function (t) {
        var e, i, s;
        if (arguments.length)return e = this.options.values[t], e = this._trimAlignValue(e);
        if (this.options.values && this.options.values.length) {
            for (i = this.options.values.slice(), s = 0; i.length > s; s += 1)i[s] = this._trimAlignValue(i[s]);
            return i
        }
        return[]
    }, _trimAlignValue: function (t) {
        if (this._valueMin() >= t)return this._valueMin();
        if (t >= this._valueMax())return this._valueMax();
        var e = this.options.step > 0 ? this.options.step : 1, i = (t - this._valueMin()) % e, s = t - i;
        return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e), parseFloat(s.toFixed(5))
    }, _valueMin: function () {
        return this.options.min
    }, _valueMax: function () {
        return this.options.max
    }, _refreshValue: function () {
        var e, i, s, n, a, o = this.options.range, r = this.options, l = this, h = this._animateOff ? !1 : r.animate, u = {};
        this.options.values && this.options.values.length ? this.handles.each(function (s) {
            i = 100 * ((l.values(s) - l._valueMin()) / (l._valueMax() - l._valueMin())), u["horizontal" === l.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[h ? "animate" : "css"](u, r.animate), l.options.range === !0 && ("horizontal" === l.orientation ? (0 === s && l.range.stop(1, 1)[h ? "animate" : "css"]({left: i + "%"}, r.animate), 1 === s && l.range[h ? "animate" : "css"]({width: i - e + "%"}, {queue: !1, duration: r.animate})) : (0 === s && l.range.stop(1, 1)[h ? "animate" : "css"]({bottom: i + "%"}, r.animate), 1 === s && l.range[h ? "animate" : "css"]({height: i - e + "%"}, {queue: !1, duration: r.animate}))), e = i
        }) : (s = this.value(), n = this._valueMin(), a = this._valueMax(), i = a !== n ? 100 * ((s - n) / (a - n)) : 0, u["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[h ? "animate" : "css"](u, r.animate), "min" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({width: i + "%"}, r.animate), "max" === o && "horizontal" === this.orientation && this.range[h ? "animate" : "css"]({width: 100 - i + "%"}, {queue: !1, duration: r.animate}), "min" === o && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({height: i + "%"}, r.animate), "max" === o && "vertical" === this.orientation && this.range[h ? "animate" : "css"]({height: 100 - i + "%"}, {queue: !1, duration: r.animate}))
    }, _handleEvents: {keydown: function (i) {
        var s, n, a, o, r = t(i.target).data("ui-slider-handle-index");
        switch (i.keyCode) {
            case t.ui.keyCode.HOME:
            case t.ui.keyCode.END:
            case t.ui.keyCode.PAGE_UP:
            case t.ui.keyCode.PAGE_DOWN:
            case t.ui.keyCode.UP:
            case t.ui.keyCode.RIGHT:
            case t.ui.keyCode.DOWN:
            case t.ui.keyCode.LEFT:
                if (i.preventDefault(), !this._keySliding && (this._keySliding = !0, t(i.target).addClass("ui-state-active"), s = this._start(i, r), s === !1))return
        }
        switch (o = this.options.step, n = a = this.options.values && this.options.values.length ? this.values(r) : this.value(), i.keyCode) {
            case t.ui.keyCode.HOME:
                a = this._valueMin();
                break;
            case t.ui.keyCode.END:
                a = this._valueMax();
                break;
            case t.ui.keyCode.PAGE_UP:
                a = this._trimAlignValue(n + (this._valueMax() - this._valueMin()) / e);
                break;
            case t.ui.keyCode.PAGE_DOWN:
                a = this._trimAlignValue(n - (this._valueMax() - this._valueMin()) / e);
                break;
            case t.ui.keyCode.UP:
            case t.ui.keyCode.RIGHT:
                if (n === this._valueMax())return;
                a = this._trimAlignValue(n + o);
                break;
            case t.ui.keyCode.DOWN:
            case t.ui.keyCode.LEFT:
                if (n === this._valueMin())return;
                a = this._trimAlignValue(n - o)
        }
        this._slide(i, r, a)
    }, click: function (t) {
        t.preventDefault()
    }, keyup: function (e) {
        var i = t(e.target).data("ui-slider-handle-index");
        this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), t(e.target).removeClass("ui-state-active"))
    }}})
})(jQuery);
(function (t) {
    function e(t, e, i) {
        return t > e && e + i > t
    }

    function i(t) {
        return/left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
    }

    t.widget("ui.sortable", t.ui.mouse, {version: "1.10.4", widgetEventPrefix: "sort", ready: !1, options: {appendTo: "parent", axis: !1, connectWith: !1, containment: !1, cursor: "auto", cursorAt: !1, dropOnEmpty: !0, forcePlaceholderSize: !1, forceHelperSize: !1, grid: !1, handle: !1, helper: "original", items: "> *", opacity: !1, placeholder: !1, revert: !1, scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, scope: "default", tolerance: "intersect", zIndex: 1e3, activate: null, beforeStop: null, change: null, deactivate: null, out: null, over: null, receive: null, remove: null, sort: null, start: null, stop: null, update: null}, _create: function () {
        var t = this.options;
        this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? "x" === t.axis || i(this.items[0].item) : !1, this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
    }, _destroy: function () {
        this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
        for (var t = this.items.length - 1; t >= 0; t--)this.items[t].item.removeData(this.widgetName + "-item");
        return this
    }, _setOption: function (e, i) {
        "disabled" === e ? (this.options[e] = i, this.widget().toggleClass("ui-sortable-disabled", !!i)) : t.Widget.prototype._setOption.apply(this, arguments)
    }, _mouseCapture: function (e, i) {
        var s = null, n = !1, o = this;
        return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(e), t(e.target).parents().each(function () {
            return t.data(this, o.widgetName + "-item") === o ? (s = t(this), !1) : undefined
        }), t.data(e.target, o.widgetName + "-item") === o && (s = t(e.target)), s ? !this.options.handle || i || (t(this.options.handle, s).find("*").addBack().each(function () {
            this === e.target && (n = !0)
        }), n) ? (this.currentItem = s, this._removeCurrentsFromItems(), !0) : !1 : !1)
    }, _mouseStart: function (e, i, s) {
        var n, o, a = this.options;
        if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left}, t.extend(this.offset, {click: {left: e.pageX - this.offset.left, top: e.pageY - this.offset.top}, parent: this._getParentOffset(), relative: this._getRelativeOffset()}), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt), this.domPosition = {prev: this.currentItem.prev()[0], parent: this.currentItem.parent()[0]}, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), a.containment && this._setContainment(), a.cursor && "auto" !== a.cursor && (o = this.document.find("body"), this.storedCursor = o.css("cursor"), o.css("cursor", a.cursor), this.storedStylesheet = t("<style>*{ cursor: " + a.cursor + " !important; }</style>").appendTo(o)), a.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", a.opacity)), a.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", a.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s)for (n = this.containers.length - 1; n >= 0; n--)this.containers[n]._trigger("activate", e, this._uiHash(this));
        return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(e), !0
    }, _mouseDrag: function (e) {
        var i, s, n, o, a = this.options, r = !1;
        for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < a.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + a.scrollSpeed : e.pageY - this.overflowOffset.top < a.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - a.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < a.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + a.scrollSpeed : e.pageX - this.overflowOffset.left < a.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - a.scrollSpeed)) : (e.pageY - t(document).scrollTop() < a.scrollSensitivity ? r = t(document).scrollTop(t(document).scrollTop() - a.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < a.scrollSensitivity && (r = t(document).scrollTop(t(document).scrollTop() + a.scrollSpeed)), e.pageX - t(document).scrollLeft() < a.scrollSensitivity ? r = t(document).scrollLeft(t(document).scrollLeft() - a.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < a.scrollSensitivity && (r = t(document).scrollLeft(t(document).scrollLeft() + a.scrollSpeed))), r !== !1 && t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)if (s = this.items[i], n = s.item[0], o = this._intersectsWithPointer(s), o && s.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === o ? "next" : "prev"]()[0] !== n && !t.contains(this.placeholder[0], n) && ("semi-dynamic" === this.options.type ? !t.contains(this.element[0], n) : !0)) {
            if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s))break;
            this._rearrange(e, s), this._trigger("change", e, this._uiHash());
            break
        }
        return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
    }, _mouseStop: function (e, i) {
        if (e) {
            if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
                var s = this, n = this.placeholder.offset(), o = this.options.axis, a = {};
                o && "x" !== o || (a.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)), o && "y" !== o || (a.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(a, parseInt(this.options.revert, 10) || 500, function () {
                    s._clear(e)
                })
            } else this._clear(e, i);
            return!1
        }
    }, cancel: function () {
        if (this.dragging) {
            this._mouseUp({target: null}), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
            for (var e = this.containers.length - 1; e >= 0; e--)this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
        }
        return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {helper: null, dragging: !1, reverting: !1, _noFinalSort: null}), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this
    }, serialize: function (e) {
        var i = this._getItemsAsjQuery(e && e.connected), s = [];
        return e = e || {}, t(i).each(function () {
            var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
            i && s.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
        }), !s.length && e.key && s.push(e.key + "="), s.join("&")
    }, toArray: function (e) {
        var i = this._getItemsAsjQuery(e && e.connected), s = [];
        return e = e || {}, i.each(function () {
            s.push(t(e.item || this).attr(e.attribute || "id") || "")
        }), s
    }, _intersectsWith: function (t) {
        var e = this.positionAbs.left, i = e + this.helperProportions.width, s = this.positionAbs.top, n = s + this.helperProportions.height, o = t.left, a = o + t.width, r = t.top, h = r + t.height, l = this.offset.click.top, c = this.offset.click.left, u = "x" === this.options.axis || s + l > r && h > s + l, d = "y" === this.options.axis || e + c > o && a > e + c, p = u && d;
        return"pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : e + this.helperProportions.width / 2 > o && a > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > r && h > n - this.helperProportions.height / 2
    }, _intersectsWithPointer: function (t) {
        var i = "x" === this.options.axis || e(this.positionAbs.top + this.offset.click.top, t.top, t.height), s = "y" === this.options.axis || e(this.positionAbs.left + this.offset.click.left, t.left, t.width), n = i && s, o = this._getDragVerticalDirection(), a = this._getDragHorizontalDirection();
        return n ? this.floating ? a && "right" === a || "down" === o ? 2 : 1 : o && ("down" === o ? 2 : 1) : !1
    }, _intersectsWithSides: function (t) {
        var i = e(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height), s = e(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width), n = this._getDragVerticalDirection(), o = this._getDragHorizontalDirection();
        return this.floating && o ? "right" === o && s || "left" === o && !s : n && ("down" === n && i || "up" === n && !i)
    }, _getDragVerticalDirection: function () {
        var t = this.positionAbs.top - this.lastPositionAbs.top;
        return 0 !== t && (t > 0 ? "down" : "up")
    }, _getDragHorizontalDirection: function () {
        var t = this.positionAbs.left - this.lastPositionAbs.left;
        return 0 !== t && (t > 0 ? "right" : "left")
    }, refresh: function (t) {
        return this._refreshItems(t), this.refreshPositions(), this
    }, _connectWith: function () {
        var t = this.options;
        return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
    }, _getItemsAsjQuery: function (e) {
        function i() {
            r.push(this)
        }

        var s, n, o, a, r = [], h = [], l = this._connectWith();
        if (l && e)for (s = l.length - 1; s >= 0; s--)for (o = t(l[s]), n = o.length - 1; n >= 0; n--)a = t.data(o[n], this.widgetFullName), a && a !== this && !a.options.disabled && h.push([t.isFunction(a.options.items) ? a.options.items.call(a.element) : t(a.options.items, a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), a]);
        for (h.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {options: this.options, item: this.currentItem}) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), s = h.length - 1; s >= 0; s--)h[s][0].each(i);
        return t(r)
    }, _removeCurrentsFromItems: function () {
        var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
        this.items = t.grep(this.items, function (t) {
            for (var i = 0; e.length > i; i++)if (e[i] === t.item[0])return!1;
            return!0
        })
    }, _refreshItems: function (e) {
        this.items = [], this.containers = [this];
        var i, s, n, o, a, r, h, l, c = this.items, u = [
            [t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {item: this.currentItem}) : t(this.options.items, this.element), this]
        ], d = this._connectWith();
        if (d && this.ready)for (i = d.length - 1; i >= 0; i--)for (n = t(d[i]), s = n.length - 1; s >= 0; s--)o = t.data(n[s], this.widgetFullName), o && o !== this && !o.options.disabled && (u.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, {item: this.currentItem}) : t(o.options.items, o.element), o]), this.containers.push(o));
        for (i = u.length - 1; i >= 0; i--)for (a = u[i][1], r = u[i][0], s = 0, l = r.length; l > s; s++)h = t(r[s]), h.data(this.widgetName + "-item", a), c.push({item: h, instance: a, width: 0, height: 0, left: 0, top: 0})
    }, refreshPositions: function (e) {
        this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
        var i, s, n, o;
        for (i = this.items.length - 1; i >= 0; i--)s = this.items[i], s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? t(this.options.toleranceElement, s.item) : s.item, e || (s.width = n.outerWidth(), s.height = n.outerHeight()), o = n.offset(), s.left = o.left, s.top = o.top);
        if (this.options.custom && this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this); else for (i = this.containers.length - 1; i >= 0; i--)o = this.containers[i].element.offset(), this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
        return this
    }, _createPlaceholder: function (e) {
        e = e || this;
        var i, s = e.options;
        s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = {element: function () {
            var s = e.currentItem[0].nodeName.toLowerCase(), n = t("<" + s + ">", e.document[0]).addClass(i || e.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
            return"tr" === s ? e.currentItem.children().each(function () {
                t("<td>&#160;</td>", e.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(n)
            }) : "img" === s && n.attr("src", e.currentItem.attr("src")), i || n.css("visibility", "hidden"), n
        }, update: function (t, n) {
            (!i || s.forcePlaceholderSize) && (n.height() || n.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), n.width() || n.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
        }}), e.placeholder = t(s.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), s.placeholder.update(e, e.placeholder)
    }, _contactContainers: function (s) {
        var n, o, a, r, h, l, c, u, d, p, f = null, g = null;
        for (n = this.containers.length - 1; n >= 0; n--)if (!t.contains(this.currentItem[0], this.containers[n].element[0]))if (this._intersectsWith(this.containers[n].containerCache)) {
            if (f && t.contains(this.containers[n].element[0], f.element[0]))continue;
            f = this.containers[n], g = n
        } else this.containers[n].containerCache.over && (this.containers[n]._trigger("out", s, this._uiHash(this)), this.containers[n].containerCache.over = 0);
        if (f)if (1 === this.containers.length)this.containers[g].containerCache.over || (this.containers[g]._trigger("over", s, this._uiHash(this)), this.containers[g].containerCache.over = 1); else {
            for (a = 1e4, r = null, p = f.floating || i(this.currentItem), h = p ? "left" : "top", l = p ? "width" : "height", c = this.positionAbs[h] + this.offset.click[h], o = this.items.length - 1; o >= 0; o--)t.contains(this.containers[g].element[0], this.items[o].item[0]) && this.items[o].item[0] !== this.currentItem[0] && (!p || e(this.positionAbs.top + this.offset.click.top, this.items[o].top, this.items[o].height)) && (u = this.items[o].item.offset()[h], d = !1, Math.abs(u - c) > Math.abs(u + this.items[o][l] - c) && (d = !0, u += this.items[o][l]), a > Math.abs(u - c) && (a = Math.abs(u - c), r = this.items[o], this.direction = d ? "up" : "down"));
            if (!r && !this.options.dropOnEmpty)return;
            if (this.currentContainer === this.containers[g])return;
            r ? this._rearrange(s, r, null, !0) : this._rearrange(s, null, this.containers[g].element, !0), this._trigger("change", s, this._uiHash()), this.containers[g]._trigger("change", s, this._uiHash(this)), this.currentContainer = this.containers[g], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[g]._trigger("over", s, this._uiHash(this)), this.containers[g].containerCache.over = 1
        }
    }, _createHelper: function (e) {
        var i = this.options, s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
        return s.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] === this.currentItem[0] && (this._storedCSS = {width: this.currentItem[0].style.width, height: this.currentItem[0].style.height, position: this.currentItem.css("position"), top: this.currentItem.css("top"), left: this.currentItem.css("left")}), (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()), (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()), s
    }, _adjustOffsetFromHelper: function (e) {
        "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {left: +e[0], top: +e[1] || 0}), "left"in e && (this.offset.click.left = e.left + this.margins.left), "right"in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top"in e && (this.offset.click.top = e.top + this.margins.top), "bottom"in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
    }, _getParentOffset: function () {
        this.offsetParent = this.helper.offsetParent();
        var e = this.offsetParent.offset();
        return"absolute" === this.cssPosition && this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {top: 0, left: 0}), {top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)}
    }, _getRelativeOffset: function () {
        if ("relative" === this.cssPosition) {
            var t = this.currentItem.position();
            return{top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()}
        }
        return{top: 0, left: 0}
    }, _cacheMargins: function () {
        this.margins = {left: parseInt(this.currentItem.css("marginLeft"), 10) || 0, top: parseInt(this.currentItem.css("marginTop"), 10) || 0}
    }, _cacheHelperProportions: function () {
        this.helperProportions = {width: this.helper.outerWidth(), height: this.helper.outerHeight()}
    }, _setContainment: function () {
        var e, i, s, n = this.options;
        "parent" === n.containment && (n.containment = this.helper[0].parentNode), ("document" === n.containment || "window" === n.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, t("document" === n.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (t("document" === n.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(n.containment) || (e = t(n.containment)[0], i = t(n.containment).offset(), s = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
    }, _convertPositionTo: function (e, i) {
        i || (i = this.position);
        var s = "absolute" === e ? 1 : -1, n = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, o = /(html|body)/i.test(n[0].tagName);
        return{top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : n.scrollTop()) * s, left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : n.scrollLeft()) * s}
    }, _generatePosition: function (e) {
        var i, s, n = this.options, o = e.pageX, a = e.pageY, r = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, h = /(html|body)/i.test(r[0].tagName);
        return"relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (a = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (a = this.containment[3] + this.offset.click.top)), n.grid && (i = this.originalPageY + Math.round((a - this.originalPageY) / n.grid[1]) * n.grid[1], a = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i, s = this.originalPageX + Math.round((o - this.originalPageX) / n.grid[0]) * n.grid[0], o = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)), {top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : r.scrollTop()), left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : r.scrollLeft())}
    }, _rearrange: function (t, e, i, s) {
        i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
        var n = this.counter;
        this._delay(function () {
            n === this.counter && this.refreshPositions(!s)
        })
    }, _clear: function (t, e) {
        function i(t, e, i) {
            return function (s) {
                i._trigger(t, s, e._uiHash(e))
            }
        }

        this.reverting = !1;
        var s, n = [];
        if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
            for (s in this._storedCSS)("auto" === this._storedCSS[s] || "static" === this._storedCSS[s]) && (this._storedCSS[s] = "");
            this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
        } else this.currentItem.show();
        for (this.fromOutside && !e && n.push(function (t) {
            this._trigger("receive", t, this._uiHash(this.fromOutside))
        }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || n.push(function (t) {
            this._trigger("update", t, this._uiHash())
        }), this !== this.currentContainer && (e || (n.push(function (t) {
            this._trigger("remove", t, this._uiHash())
        }), n.push(function (t) {
            return function (e) {
                t._trigger("receive", e, this._uiHash(this))
            }
        }.call(this, this.currentContainer)), n.push(function (t) {
            return function (e) {
                t._trigger("update", e, this._uiHash(this))
            }
        }.call(this, this.currentContainer)))), s = this.containers.length - 1; s >= 0; s--)e || n.push(i("deactivate", this, this.containers[s])), this.containers[s].containerCache.over && (n.push(i("out", this, this.containers[s])), this.containers[s].containerCache.over = 0);
        if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
            if (!e) {
                for (this._trigger("beforeStop", t, this._uiHash()), s = 0; n.length > s; s++)n[s].call(this, t);
                this._trigger("stop", t, this._uiHash())
            }
            return this.fromOutside = !1, !1
        }
        if (e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null, !e) {
            for (s = 0; n.length > s; s++)n[s].call(this, t);
            this._trigger("stop", t, this._uiHash())
        }
        return this.fromOutside = !1, !0
    }, _trigger: function () {
        t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
    }, _uiHash: function (e) {
        var i = e || this;
        return{helper: i.helper, placeholder: i.placeholder || t([]), position: i.position, originalPosition: i.originalPosition, offset: i.positionAbs, item: i.currentItem, sender: e ? e.element : null}
    }})
})(jQuery);
(function (t) {
    function e(t) {
        return function () {
            var e = this.element.val();
            t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change")
        }
    }

    t.widget("ui.spinner", {version: "1.10.4", defaultElement: "<input>", widgetEventPrefix: "spin", options: {culture: null, icons: {down: "ui-icon-triangle-1-s", up: "ui-icon-triangle-1-n"}, incremental: !0, max: null, min: null, numberFormat: null, page: 10, step: 1, change: null, spin: null, start: null, stop: null}, _create: function () {
        this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {beforeunload: function () {
            this.element.removeAttr("autocomplete")
        }})
    }, _getCreateOptions: function () {
        var e = {}, i = this.element;
        return t.each(["min", "max", "step"], function (t, s) {
            var n = i.attr(s);
            void 0 !== n && n.length && (e[s] = n)
        }), e
    }, _events: {keydown: function (t) {
        this._start(t) && this._keydown(t) && t.preventDefault()
    }, keyup: "_stop", focus: function () {
        this.previous = this.element.val()
    }, blur: function (t) {
        return this.cancelBlur ? (delete this.cancelBlur, void 0) : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", t), void 0)
    }, mousewheel: function (t, e) {
        if (e) {
            if (!this.spinning && !this._start(t))return!1;
            this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function () {
                this.spinning && this._stop(t)
            }, 100), t.preventDefault()
        }
    }, "mousedown .ui-spinner-button": function (e) {
        function i() {
            var t = this.element[0] === this.document[0].activeElement;
            t || (this.element.focus(), this.previous = s, this._delay(function () {
                this.previous = s
            }))
        }

        var s;
        s = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), e.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function () {
            delete this.cancelBlur, i.call(this)
        }), this._start(e) !== !1 && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
    }, "mouseup .ui-spinner-button": "_stop", "mouseenter .ui-spinner-button": function (e) {
        return t(e.currentTarget).hasClass("ui-state-active") ? this._start(e) === !1 ? !1 : (this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e), void 0) : void 0
    }, "mouseleave .ui-spinner-button": "_stop"}, _draw: function () {
        var t = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
        this.element.attr("role", "spinbutton"), this.buttons = t.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), this.buttons.height() > Math.ceil(.5 * t.height()) && t.height() > 0 && t.height(t.height()), this.options.disabled && this.disable()
    }, _keydown: function (e) {
        var i = this.options, s = t.ui.keyCode;
        switch (e.keyCode) {
            case s.UP:
                return this._repeat(null, 1, e), !0;
            case s.DOWN:
                return this._repeat(null, -1, e), !0;
            case s.PAGE_UP:
                return this._repeat(null, i.page, e), !0;
            case s.PAGE_DOWN:
                return this._repeat(null, -i.page, e), !0
        }
        return!1
    }, _uiSpinnerHtml: function () {
        return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
    }, _buttonHtml: function () {
        return"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span>" + "</a>" + "<a class='ui-spinner-button ui-spinner-down ui-corner-br'>" + "<span class='ui-icon " + this.options.icons.down + "'>&#9660;</span>" + "</a>"
    }, _start: function (t) {
        return this.spinning || this._trigger("start", t) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1
    }, _repeat: function (t, e, i) {
        t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function () {
            this._repeat(40, e, i)
        }, t), this._spin(e * this.options.step, i)
    }, _spin: function (t, e) {
        var i = this.value() || 0;
        this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), this.spinning && this._trigger("spin", e, {value: i}) === !1 || (this._value(i), this.counter++)
    }, _increment: function (e) {
        var i = this.options.incremental;
        return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1
    }, _precision: function () {
        var t = this._precisionOf(this.options.step);
        return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
    }, _precisionOf: function (t) {
        var e = "" + t, i = e.indexOf(".");
        return-1 === i ? 0 : e.length - i - 1
    }, _adjustValue: function (t) {
        var e, i, s = this.options;
        return e = null !== s.min ? s.min : 0, i = t - e, i = Math.round(i / s.step) * s.step, t = e + i, t = parseFloat(t.toFixed(this._precision())), null !== s.max && t > s.max ? s.max : null !== s.min && s.min > t ? s.min : t
    }, _stop: function (t) {
        this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t))
    }, _setOption: function (t, e) {
        if ("culture" === t || "numberFormat" === t) {
            var i = this._parse(this.element.val());
            return this.options[t] = e, this.element.val(this._format(i)), void 0
        }
        ("max" === t || "min" === t || "step" === t) && "string" == typeof e && (e = this._parse(e)), "icons" === t && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(e.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(e.down)), this._super(t, e), "disabled" === t && (e ? (this.element.prop("disabled", !0), this.buttons.button("disable")) : (this.element.prop("disabled", !1), this.buttons.button("enable")))
    }, _setOptions: e(function (t) {
        this._super(t), this._value(this.element.val())
    }), _parse: function (t) {
        return"string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t
    }, _format: function (t) {
        return"" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t
    }, _refresh: function () {
        this.element.attr({"aria-valuemin": this.options.min, "aria-valuemax": this.options.max, "aria-valuenow": this._parse(this.element.val())})
    }, _value: function (t, e) {
        var i;
        "" !== t && (i = this._parse(t), null !== i && (e || (i = this._adjustValue(i)), t = this._format(i))), this.element.val(t), this._refresh()
    }, _destroy: function () {
        this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.uiSpinner.replaceWith(this.element)
    }, stepUp: e(function (t) {
        this._stepUp(t)
    }), _stepUp: function (t) {
        this._start() && (this._spin((t || 1) * this.options.step), this._stop())
    }, stepDown: e(function (t) {
        this._stepDown(t)
    }), _stepDown: function (t) {
        this._start() && (this._spin((t || 1) * -this.options.step), this._stop())
    }, pageUp: e(function (t) {
        this._stepUp((t || 1) * this.options.page)
    }), pageDown: e(function (t) {
        this._stepDown((t || 1) * this.options.page)
    }), value: function (t) {
        return arguments.length ? (e(this._value).call(this, t), void 0) : this._parse(this.element.val())
    }, widget: function () {
        return this.uiSpinner
    }})
})(jQuery);
(function (t, e) {
    function i() {
        return++n
    }

    function s(t) {
        return t = t.cloneNode(!1), t.hash.length > 1 && decodeURIComponent(t.href.replace(a, "")) === decodeURIComponent(location.href.replace(a, ""))
    }

    var n = 0, a = /#.*$/;
    t.widget("ui.tabs", {version: "1.10.4", delay: 300, options: {active: null, collapsible: !1, event: "click", heightStyle: "content", hide: null, show: null, activate: null, beforeActivate: null, beforeLoad: null, load: null}, _create: function () {
        var e = this, i = this.options;
        this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", i.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace,function (e) {
            t(this).is(".ui-state-disabled") && e.preventDefault()
        }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function () {
            t(this).closest("li").is(".ui-state-disabled") && this.blur()
        }), this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function (t) {
            return e.tabs.index(t)
        }))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(i.active) : t(), this._refresh(), this.active.length && this.load(i.active)
    }, _initialActive: function () {
        var i = this.options.active, s = this.options.collapsible, n = location.hash.substring(1);
        return null === i && (n && this.tabs.each(function (s, a) {
            return t(a).attr("aria-controls") === n ? (i = s, !1) : e
        }), null === i && (i = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === i || -1 === i) && (i = this.tabs.length ? 0 : !1)), i !== !1 && (i = this.tabs.index(this.tabs.eq(i)), -1 === i && (i = s ? !1 : 0)), !s && i === !1 && this.anchors.length && (i = 0), i
    }, _getCreateEventData: function () {
        return{tab: this.active, panel: this.active.length ? this._getPanelForTab(this.active) : t()}
    }, _tabKeydown: function (i) {
        var s = t(this.document[0].activeElement).closest("li"), n = this.tabs.index(s), a = !0;
        if (!this._handlePageNav(i)) {
            switch (i.keyCode) {
                case t.ui.keyCode.RIGHT:
                case t.ui.keyCode.DOWN:
                    n++;
                    break;
                case t.ui.keyCode.UP:
                case t.ui.keyCode.LEFT:
                    a = !1, n--;
                    break;
                case t.ui.keyCode.END:
                    n = this.anchors.length - 1;
                    break;
                case t.ui.keyCode.HOME:
                    n = 0;
                    break;
                case t.ui.keyCode.SPACE:
                    return i.preventDefault(), clearTimeout(this.activating), this._activate(n), e;
                case t.ui.keyCode.ENTER:
                    return i.preventDefault(), clearTimeout(this.activating), this._activate(n === this.options.active ? !1 : n), e;
                default:
                    return
            }
            i.preventDefault(), clearTimeout(this.activating), n = this._focusNextTab(n, a), i.ctrlKey || (s.attr("aria-selected", "false"), this.tabs.eq(n).attr("aria-selected", "true"), this.activating = this._delay(function () {
                this.option("active", n)
            }, this.delay))
        }
    }, _panelKeydown: function (e) {
        this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.focus())
    }, _handlePageNav: function (i) {
        return i.altKey && i.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : i.altKey && i.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : e
    }, _findNextTab: function (e, i) {
        function s() {
            return e > n && (e = 0), 0 > e && (e = n), e
        }

        for (var n = this.tabs.length - 1; -1 !== t.inArray(s(), this.options.disabled);)e = i ? e + 1 : e - 1;
        return e
    }, _focusNextTab: function (t, e) {
        return t = this._findNextTab(t, e), this.tabs.eq(t).focus(), t
    }, _setOption: function (t, i) {
        return"active" === t ? (this._activate(i), e) : "disabled" === t ? (this._setupDisabled(i), e) : (this._super(t, i), "collapsible" === t && (this.element.toggleClass("ui-tabs-collapsible", i), i || this.options.active !== !1 || this._activate(0)), "event" === t && this._setupEvents(i), "heightStyle" === t && this._setupHeightStyle(i), e)
    }, _tabId: function (t) {
        return t.attr("aria-controls") || "ui-tabs-" + i()
    }, _sanitizeSelector: function (t) {
        return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
    }, refresh: function () {
        var e = this.options, i = this.tablist.children(":has(a[href])");
        e.disabled = t.map(i.filter(".ui-state-disabled"), function (t) {
            return i.index(t)
        }), this._processTabs(), e.active !== !1 && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh()
    }, _refresh: function () {
        this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({"aria-selected": "false", tabIndex: -1}), this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded": "false", "aria-hidden": "true"}), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected": "true", tabIndex: 0}), this._getPanelForTab(this.active).show().attr({"aria-expanded": "true", "aria-hidden": "false"})) : this.tabs.eq(0).attr("tabIndex", 0)
    }, _processTabs: function () {
        var e = this;
        this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist"), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role: "tab", tabIndex: -1}), this.anchors = this.tabs.map(function () {
            return t("a", this)[0]
        }).addClass("ui-tabs-anchor").attr({role: "presentation", tabIndex: -1}), this.panels = t(), this.anchors.each(function (i, n) {
            var a, o, r, h = t(n).uniqueId().attr("id"), l = t(n).closest("li"), c = l.attr("aria-controls");
            s(n) ? (a = n.hash, o = e.element.find(e._sanitizeSelector(a))) : (r = e._tabId(l), a = "#" + r, o = e.element.find(a), o.length || (o = e._createPanel(r), o.insertAfter(e.panels[i - 1] || e.tablist)), o.attr("aria-live", "polite")), o.length && (e.panels = e.panels.add(o)), c && l.data("ui-tabs-aria-controls", c), l.attr({"aria-controls": a.substring(1), "aria-labelledby": h}), o.attr("aria-labelledby", h)
        }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
    }, _getList: function () {
        return this.tablist || this.element.find("ol,ul").eq(0)
    }, _createPanel: function (e) {
        return t("<div>").attr("id", e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
    }, _setupDisabled: function (e) {
        t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1);
        for (var i, s = 0; i = this.tabs[s]; s++)e === !0 || -1 !== t.inArray(s, e) ? t(i).addClass("ui-state-disabled").attr("aria-disabled", "true") : t(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");
        this.options.disabled = e
    }, _setupEvents: function (e) {
        var i = {click: function (t) {
            t.preventDefault()
        }};
        e && t.each(e.split(" "), function (t, e) {
            i[e] = "_eventHandler"
        }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(this.anchors, i), this._on(this.tabs, {keydown: "_tabKeydown"}), this._on(this.panels, {keydown: "_panelKeydown"}), this._focusable(this.tabs), this._hoverable(this.tabs)
    }, _setupHeightStyle: function (e) {
        var i, s = this.element.parent();
        "fill" === e ? (i = s.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function () {
            var e = t(this), s = e.css("position");
            "absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0))
        }), this.element.children().not(this.panels).each(function () {
            i -= t(this).outerHeight(!0)
        }), this.panels.each(function () {
            t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
        }).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function () {
            i = Math.max(i, t(this).height("").height())
        }).height(i))
    }, _eventHandler: function (e) {
        var i = this.options, s = this.active, n = t(e.currentTarget), a = n.closest("li"), o = a[0] === s[0], r = o && i.collapsible, h = r ? t() : this._getPanelForTab(a), l = s.length ? this._getPanelForTab(s) : t(), c = {oldTab: s, oldPanel: l, newTab: r ? t() : a, newPanel: h};
        e.preventDefault(), a.hasClass("ui-state-disabled") || a.hasClass("ui-tabs-loading") || this.running || o && !i.collapsible || this._trigger("beforeActivate", e, c) === !1 || (i.active = r ? !1 : this.tabs.index(a), this.active = o ? t() : a, this.xhr && this.xhr.abort(), l.length || h.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), h.length && this.load(this.tabs.index(a), e), this._toggle(e, c))
    }, _toggle: function (e, i) {
        function s() {
            a.running = !1, a._trigger("activate", e, i)
        }

        function n() {
            i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), o.length && a.options.show ? a._show(o, a.options.show, s) : (o.show(), s())
        }

        var a = this, o = i.newPanel, r = i.oldPanel;
        this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function () {
            i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), n()
        }) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), r.hide(), n()), r.attr({"aria-expanded": "false", "aria-hidden": "true"}), i.oldTab.attr("aria-selected", "false"), o.length && r.length ? i.oldTab.attr("tabIndex", -1) : o.length && this.tabs.filter(function () {
            return 0 === t(this).attr("tabIndex")
        }).attr("tabIndex", -1), o.attr({"aria-expanded": "true", "aria-hidden": "false"}), i.newTab.attr({"aria-selected": "true", tabIndex: 0})
    }, _activate: function (e) {
        var i, s = this._findActive(e);
        s[0] !== this.active[0] && (s.length || (s = this.active), i = s.find(".ui-tabs-anchor")[0], this._eventHandler({target: i, currentTarget: i, preventDefault: t.noop}))
    }, _findActive: function (e) {
        return e === !1 ? t() : this.tabs.eq(e)
    }, _getIndex: function (t) {
        return"string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + t + "']"))), t
    }, _destroy: function () {
        this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function () {
            t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
        }), this.tabs.each(function () {
            var e = t(this), i = e.data("ui-tabs-aria-controls");
            i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls")
        }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
    }, enable: function (i) {
        var s = this.options.disabled;
        s !== !1 && (i === e ? s = !1 : (i = this._getIndex(i), s = t.isArray(s) ? t.map(s, function (t) {
            return t !== i ? t : null
        }) : t.map(this.tabs, function (t, e) {
            return e !== i ? e : null
        })), this._setupDisabled(s))
    }, disable: function (i) {
        var s = this.options.disabled;
        if (s !== !0) {
            if (i === e)s = !0; else {
                if (i = this._getIndex(i), -1 !== t.inArray(i, s))return;
                s = t.isArray(s) ? t.merge([i], s).sort() : [i]
            }
            this._setupDisabled(s)
        }
    }, load: function (e, i) {
        e = this._getIndex(e);
        var n = this, a = this.tabs.eq(e), o = a.find(".ui-tabs-anchor"), r = this._getPanelForTab(a), h = {tab: a, panel: r};
        s(o[0]) || (this.xhr = t.ajax(this._ajaxSettings(o, i, h)), this.xhr && "canceled" !== this.xhr.statusText && (a.addClass("ui-tabs-loading"), r.attr("aria-busy", "true"), this.xhr.success(function (t) {
            setTimeout(function () {
                r.html(t), n._trigger("load", i, h)
            }, 1)
        }).complete(function (t, e) {
            setTimeout(function () {
                "abort" === e && n.panels.stop(!1, !0), a.removeClass("ui-tabs-loading"), r.removeAttr("aria-busy"), t === n.xhr && delete n.xhr
            }, 1)
        })))
    }, _ajaxSettings: function (e, i, s) {
        var n = this;
        return{url: e.attr("href"), beforeSend: function (e, a) {
            return n._trigger("beforeLoad", i, t.extend({jqXHR: e, ajaxSettings: a}, s))
        }}
    }, _getPanelForTab: function (e) {
        var i = t(e).attr("aria-controls");
        return this.element.find(this._sanitizeSelector("#" + i))
    }})
})(jQuery);
(function (t) {
    function e(e, i) {
        var s = (e.attr("aria-describedby") || "").split(/\s+/);
        s.push(i), e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(s.join(" ")))
    }

    function i(e) {
        var i = e.data("ui-tooltip-id"), s = (e.attr("aria-describedby") || "").split(/\s+/), n = t.inArray(i, s);
        -1 !== n && s.splice(n, 1), e.removeData("ui-tooltip-id"), s = t.trim(s.join(" ")), s ? e.attr("aria-describedby", s) : e.removeAttr("aria-describedby")
    }

    var s = 0;
    t.widget("ui.tooltip", {version: "1.10.4", options: {content: function () {
        var e = t(this).attr("title") || "";
        return t("<a>").text(e).html()
    }, hide: !0, items: "[title]:not([disabled])", position: {my: "left top+15", at: "left bottom", collision: "flipfit flip"}, show: !0, tooltipClass: null, track: !1, close: null, open: null}, _create: function () {
        this._on({mouseover: "open", focusin: "open"}), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable()
    }, _setOption: function (e, i) {
        var s = this;
        return"disabled" === e ? (this[i ? "_disable" : "_enable"](), this.options[e] = i, void 0) : (this._super(e, i), "content" === e && t.each(this.tooltips, function (t, e) {
            s._updateContent(e)
        }), void 0)
    }, _disable: function () {
        var e = this;
        t.each(this.tooltips, function (i, s) {
            var n = t.Event("blur");
            n.target = n.currentTarget = s[0], e.close(n, !0)
        }), this.element.find(this.options.items).addBack().each(function () {
            var e = t(this);
            e.is("[title]") && e.data("ui-tooltip-title", e.attr("title")).attr("title", "")
        })
    }, _enable: function () {
        this.element.find(this.options.items).addBack().each(function () {
            var e = t(this);
            e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"))
        })
    }, open: function (e) {
        var i = this, s = t(e ? e.target : this.element).closest(this.options.items);
        s.length && !s.data("ui-tooltip-id") && (s.attr("title") && s.data("ui-tooltip-title", s.attr("title")), s.data("ui-tooltip-open", !0), e && "mouseover" === e.type && s.parents().each(function () {
            var e, s = t(this);
            s.data("ui-tooltip-open") && (e = t.Event("blur"), e.target = e.currentTarget = this, i.close(e, !0)), s.attr("title") && (s.uniqueId(), i.parents[this.id] = {element: this, title: s.attr("title")}, s.attr("title", ""))
        }), this._updateContent(s, e))
    }, _updateContent: function (t, e) {
        var i, s = this.options.content, n = this, o = e ? e.type : null;
        return"string" == typeof s ? this._open(e, t, s) : (i = s.call(t[0], function (i) {
            t.data("ui-tooltip-open") && n._delay(function () {
                e && (e.type = o), this._open(e, t, i)
            })
        }), i && this._open(e, t, i), void 0)
    }, _open: function (i, s, n) {
        function o(t) {
            l.of = t, a.is(":hidden") || a.position(l)
        }

        var a, r, h, l = t.extend({}, this.options.position);
        if (n) {
            if (a = this._find(s), a.length)return a.find(".ui-tooltip-content").html(n), void 0;
            s.is("[title]") && (i && "mouseover" === i.type ? s.attr("title", "") : s.removeAttr("title")), a = this._tooltip(s), e(s, a.attr("id")), a.find(".ui-tooltip-content").html(n), this.options.track && i && /^mouse/.test(i.type) ? (this._on(this.document, {mousemove: o}), o(i)) : a.position(t.extend({of: s}, this.options.position)), a.hide(), this._show(a, this.options.show), this.options.show && this.options.show.delay && (h = this.delayedShow = setInterval(function () {
                a.is(":visible") && (o(l.of), clearInterval(h))
            }, t.fx.interval)), this._trigger("open", i, {tooltip: a}), r = {keyup: function (e) {
                if (e.keyCode === t.ui.keyCode.ESCAPE) {
                    var i = t.Event(e);
                    i.currentTarget = s[0], this.close(i, !0)
                }
            }, remove: function () {
                this._removeTooltip(a)
            }}, i && "mouseover" !== i.type || (r.mouseleave = "close"), i && "focusin" !== i.type || (r.focusout = "close"), this._on(!0, s, r)
        }
    }, close: function (e) {
        var s = this, n = t(e ? e.currentTarget : this.element), o = this._find(n);
        this.closing || (clearInterval(this.delayedShow), n.data("ui-tooltip-title") && n.attr("title", n.data("ui-tooltip-title")), i(n), o.stop(!0), this._hide(o, this.options.hide, function () {
            s._removeTooltip(t(this))
        }), n.removeData("ui-tooltip-open"), this._off(n, "mouseleave focusout keyup"), n[0] !== this.element[0] && this._off(n, "remove"), this._off(this.document, "mousemove"), e && "mouseleave" === e.type && t.each(this.parents, function (e, i) {
            t(i.element).attr("title", i.title), delete s.parents[e]
        }), this.closing = !0, this._trigger("close", e, {tooltip: o}), this.closing = !1)
    }, _tooltip: function (e) {
        var i = "ui-tooltip-" + s++, n = t("<div>").attr({id: i, role: "tooltip"}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""));
        return t("<div>").addClass("ui-tooltip-content").appendTo(n), n.appendTo(this.document[0].body), this.tooltips[i] = e, n
    }, _find: function (e) {
        var i = e.data("ui-tooltip-id");
        return i ? t("#" + i) : t()
    }, _removeTooltip: function (t) {
        t.remove(), delete this.tooltips[t.attr("id")]
    }, _destroy: function () {
        var e = this;
        t.each(this.tooltips, function (i, s) {
            var n = t.Event("blur");
            n.target = n.currentTarget = s[0], e.close(n, !0), t("#" + i).remove(), s.data("ui-tooltip-title") && (s.attr("title", s.data("ui-tooltip-title")), s.removeData("ui-tooltip-title"))
        })
    }})
})(jQuery);