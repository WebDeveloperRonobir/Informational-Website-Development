! function(n, e, s) {
    function o(n) {
        var e = c.className,
            s = r._config.classPrefix || "";
        if (u && (e = e.baseVal), r._config.enableJSClass) {
            var o = new RegExp("(^|\\s)" + s + "no-js(\\s|$)");
            e = e.replace(o, "$1" + s + "js$2")
        }
        r._config.enableClasses && (e += " " + s + n.join(" " + s), u ? c.className.baseVal = e : c.className = e)
    }

    function a(n, e) {
        return typeof n === e
    }

    function t() {
        var n, e, s, o, t, f, c;
        for (var u in l)
            if (l.hasOwnProperty(u)) {
                if (n = [], e = l[u], e.name && (n.push(e.name.toLowerCase()), e.options && e.options.aliases && e.options.aliases.length))
                    for (s = 0; s < e.options.aliases.length; s++) n.push(e.options.aliases[s].toLowerCase());
                for (o = a(e.fn, "function") ? e.fn() : e.fn, t = 0; t < n.length; t++) f = n[t], c = f.split("."), 1 === c.length ? r[c[0]] = o : (!r[c[0]] || r[c[0]] instanceof Boolean || (r[c[0]] = new Boolean(r[c[0]])), r[c[0]][c[1]] = o), i.push((o ? "" : "no-") + c.join("-"))
            }
    }
    var i = [],
        l = [],
        f = {
            _version: "3.1.0",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(n, e) {
                var s = this;
                setTimeout(function() {
                    e(s[n])
                }, 0)
            },
            addTest: function(n, e, s) {
                l.push({
                    name: n,
                    fn: e,
                    options: s
                })
            },
            addAsyncTest: function(n) {
                l.push({
                    name: null,
                    fn: n
                })
            }
        },
        r = function() {};
    r.prototype = f, r = new r;
    var c = e.documentElement,
        u = "svg" === c.nodeName.toLowerCase();
    t(), o(i), delete f.addTest, delete f.addAsyncTest;
    for (var p = 0; p < r._q.length; p++) r._q[p]();
    n.Modernizr = r
}(window, document);