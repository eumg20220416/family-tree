(function() {
    "use strict";
    var n = {
        1210: function(n, e, r) {
            var t = r(6369)
              , o = function() {
                var n = this
                  , e = n._self._c;
                return e("div", {
                    attrs: {
                        id: "app"
                    }
                }, [e("VueFamilyTree", {
                    attrs: {
                        tree: n.tree
                    },
                    on: {
                        "card-click": n.cardClick
                    }
                })], 1)
            }
              , i = []
              , a = r(7435)
              , s = r.n(a)
              , c = {
                name: "App",
                components: {
                    VueFamilyTree: s()
                },
                data() {
                    return {
                        tree: [{
                            firstPerson: {
                                name: "John Walker",
                                image: "https://picsum.photos/300/300?random=1"
                            },
                            secondPerson: {
                                name: "Jannet Grem",
                                image: "https://picsum.photos/300/300?random=2"
                            },
                            children: [{
                                firstPerson: {
                                    name: "Katia"
                                },
                                secondPerson: {
                                    name: "Oleg"
                                },
                                children: [{
                                    firstPerson: {
                                        name: "Gleb"
                                    },
                                    secondPerson: {
                                        name: "Viktoriya"
                                    },
                                    children: [{
                                        firstPerson: {
                                            name: "Rim"
                                        },
                                        secondPerson: {
                                            name: "Natasha"
                                        }
                                    }, {
                                        firstPerson: {
                                            name: "Leonid"
                                        }
                                    }]
                                }, {
                                    firstPerson: {
                                        name: "Olga"
                                    },
                                    secondPerson: {
                                        name: "Nikita"
                                    }
                                }]
                            }, {
                                firstPerson: {
                                    name: "Vitia"
                                },
                                secondPerson: {
                                    name: "Dasha"
                                }
                            }, {
                                firstPerson: {
                                    name: "Antonio Wild",
                                    image: "https://picsum.photos/300/300?random=3"
                                },
                                secondPerson: {
                                    name: "Olivia Olson"
                                },
                                children: [{
                                    firstPerson: {
                                        name: "Kristina Wild"
                                    }
                                }, {
                                    firstPerson: {
                                        name: "Alexey Wild"
                                    }
                                }, {
                                    firstPerson: {
                                        name: "Viktor Wild"
                                    }
                                }]
                            }]
                        }]
                    }
                },
                methods: {
                    cardClick(n) {
                        console.log(n)
                    }
                }
            }
              , u = c
              , f = r(1001)
              , l = (0,
            f.Z)(u, o, i, !1, null, null, null)
              , d = l.exports;
            t.ZP.config.productionTip = !1,
            new t.ZP({
                render: n=>n(d)
            }).$mount("#app")
        }
    }
      , e = {};
    function r(t) {
        var o = e[t];
        if (void 0 !== o)
            return o.exports;
        var i = e[t] = {
            exports: {}
        };
        return n[t](i, i.exports, r),
        i.exports
    }
    r.m = n,
    function() {
        var n = [];
        r.O = function(e, t, o, i) {
            if (!t) {
                var a = 1 / 0;
                for (f = 0; f < n.length; f++) {
                    t = n[f][0],
                    o = n[f][1],
                    i = n[f][2];
                    for (var s = !0, c = 0; c < t.length; c++)
                        (!1 & i || a >= i) && Object.keys(r.O).every((function(n) {
                            return r.O[n](t[c])
                        }
                        )) ? t.splice(c--, 1) : (s = !1,
                        i < a && (a = i));
                    if (s) {
                        n.splice(f--, 1);
                        var u = o();
                        void 0 !== u && (e = u)
                    }
                }
                return e
            }
            i = i || 0;
            for (var f = n.length; f > 0 && n[f - 1][2] > i; f--)
                n[f] = n[f - 1];
            n[f] = [t, o, i]
        }
    }(),
    function() {
        r.n = function(n) {
            var e = n && n.__esModule ? function() {
                return n["default"]
            }
            : function() {
                return n
            }
            ;
            return r.d(e, {
                a: e
            }),
            e
        }
    }(),
    function() {
        r.d = function(n, e) {
            for (var t in e)
                r.o(e, t) && !r.o(n, t) && Object.defineProperty(n, t, {
                    enumerable: !0,
                    get: e[t]
                })
        }
    }(),
    function() {
        r.g = function() {
            if ("object" === typeof globalThis)
                return globalThis;
            try {
                return this || new Function("return this")()
            } catch (n) {
                if ("object" === typeof window)
                    return window
            }
        }()
    }(),
    function() {
        r.o = function(n, e) {
            return Object.prototype.hasOwnProperty.call(n, e)
        }
    }(),
    function() {
        var n = {
            143: 0
        };
        r.O.j = function(e) {
            return 0 === n[e]
        }
        ;
        var e = function(e, t) {
            var o, i, a = t[0], s = t[1], c = t[2], u = 0;
            if (a.some((function(e) {
                return 0 !== n[e]
            }
            ))) {
                for (o in s)
                    r.o(s, o) && (r.m[o] = s[o]);
                if (c)
                    var f = c(r)
            }
            for (e && e(t); u < a.length; u++)
                i = a[u],
                r.o(n, i) && n[i] && n[i][0](),
                n[i] = 0;
            return r.O(f)
        }
          , t = self["webpackChunkfamily_tree"] = self["webpackChunkfamily_tree"] || [];
        t.forEach(e.bind(null, 0)),
        t.push = e.bind(null, t.push.bind(t))
    }();
    var t = r.O(void 0, [998], (function() {
        return r(1210)
    }
    ));
    t = r.O(t)
}
)();