! function(e) {
    function t(i) {
        if (n[i]) return n[i].exports;
        var o = n[i] = {
            exports: {},
            id: i,
            loaded: !1
        };
        return e[i].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
    }
    var n = {};
    return t.m = e, t.c = n, t.p = "", t(0)
}([function(e, t, n) {
    e.exports = n(8)
}, function(e, t) {
    e.exports = React
}, function(e, t) {
    "use strict";

    function n(e) {
        return l.map(function(e) {
            return e.value
        }).indexOf(e)
    }

    function i(e) {
        var t = r.indexOf(e);
        return -1 !== t ? 100 / t : null
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = [{
            value: "#B0AFAE",
            label: "",
            tooltip: ""
        }, {
            value: "#7B7A78",
            label: "",
            tooltip: ""
        }, {
            value: "#545352",
            label: "",
            tooltip: ""
        }, {
            value: "#4477AA",
            label: "",
            tooltip: ""
        }, {
            value: "#7DB8DA",
            label: "",
            tooltip: ""
        }, {
            value: "#B6D7EA",
            label: "",
            tooltip: ""
        }, {
            value: "#46C646",
            label: "",
            tooltip: ""
        }, {
            value: "#F93F17",
            label: "",
            tooltip: ""
        }, {
            value: "#FFCF02",
            label: "",
            tooltip: ""
        }, {
            value: "#276E27",
            label: "",
            tooltip: ""
        }, {
            value: "#FFFFFF",
            label: "white",
            tooltip: "white"
        }, {
            value: "#d01919",
            label: "red",
            tooltip: "red"
        }, {
            value: "#f2711c",
            label: "orange",
            tooltip: "orange"
        }, {
            value: "#fbbd08",
            label: "yellow",
            tooltip: "yellow"
        }, {
            value: "#b5cc18",
            label: "olive",
            tooltip: "olive"
        }, {
            value: "#21ba45",
            label: "green",
            tooltip: "green"
        }, {
            value: "#009c95",
            label: "teal",
            tooltip: "teal"
        }, {
            value: "#2185d0",
            label: "blue",
            tooltip: "blue"
        }, {
            value: "#6435c9",
            label: "violet",
            tooltip: "violet"
        }, {
            value: "#a333c8",
            label: "purple",
            tooltip: "purple"
        }, {
            value: "#e03997",
            label: "pink",
            tooltip: "pink"
        }, {
            value: "#975b33",
            label: "brown",
            tooltip: "brown"
        }, {
            value: "#a5673f",
            label: "brown",
            tooltip: "brown"
        }, {
            value: "#767676",
            label: "grey",
            tooltip: "grey"
        }, {
            value: "#1b1c1d",
            label: "black",
            tooltip: "black"
        }],
        a = " ",
        l = [{
            value: "mini",
            label: "Mini",
            tooltip: "Mini"
        }, {
            value: "tiny",
            label: "Tiny",
            tooltip: "Tiny"
        }, {
            value: "small",
            label: "Small",
            tooltip: "Small"
        }, {
            value: "",
            label: "Normal",
            tooltip: "Normal"
        }, {
            value: "large",
            label: "Large",
            tooltip: "Large"
        }, {
            value: "huge",
            label: "Huge",
            tooltip: "Huge"
        }],
        r = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"],
        s = [{
            value: "top attached",
            label: "top attached"
        }, {
            value: "bottom attached",
            label: "bottom attached"
        }, {
            value: "top right attached",
            label: "top right attached"
        }, {
            value: "top left attached",
            label: "top left attached"
        }, {
            value: "bottom left attached",
            label: "bottom left attached"
        }, {
            value: "bottom right attached",
            label: "bottom right attached"
        }],
        c = [{
            value: "segment",
            label: "Segment"
        }, {
            value: "card",
            label: "Card"
        }],
        u = ["xx-small", "x-small", "small", "medium", "large", "x-large", "xx-large"];
    t["default"] = {
        COLOR_OPTIONS: o,
        DEFAULT_SIZE: a,
        SIZE_OPTIONS: l,
        DIVIDE_BY: r,
        DIM_LABEL_OPTIONS: s,
        DIM_VIEW_OPTIONS: c,
        FONT_SIZE_OPTIONS: u,
        getSizeIndex: n,
        getDivideByValue: i
    }, e.exports = t["default"]
}, function(e, t, n) {
    (function(e, i) {
        function o(e, t) {
            this._id = e, this._clearFn = t
        }
        var a = n(19).nextTick,
            l = Function.prototype.apply,
            r = Array.prototype.slice,
            s = {},
            c = 0;
        t.setTimeout = function() {
            return new o(l.call(setTimeout, window, arguments), clearTimeout)
        }, t.setInterval = function() {
            return new o(l.call(setInterval, window, arguments), clearInterval)
        }, t.clearTimeout = t.clearInterval = function(e) {
            e.close()
        }, o.prototype.unref = o.prototype.ref = function() {}, o.prototype.close = function() {
            this._clearFn.call(window, this._id)
        }, t.enroll = function(e, t) {
            clearTimeout(e._idleTimeoutId), e._idleTimeout = t
        }, t.unenroll = function(e) {
            clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
        }, t._unrefActive = t.active = function(e) {
            clearTimeout(e._idleTimeoutId);
            var t = e._idleTimeout;
            t >= 0 && (e._idleTimeoutId = setTimeout(function() {
                e._onTimeout && e._onTimeout()
            }, t))
        }, t.setImmediate = "function" == typeof e ? e : function(e) {
            var n = c++,
                i = arguments.length < 2 ? !1 : r.call(arguments, 1);
            return s[n] = !0, a(function() {
                s[n] && (i ? e.apply(null, i) : e.call(null), t.clearImmediate(n))
            }), n
        }, t.clearImmediate = "function" == typeof i ? i : function(e) {
            delete s[e]
        }
    }).call(t, n(3).setImmediate, n(3).clearImmediate)
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = {
        overridedLabel: {
            ref: "qAttributeExpressions.0.qExpression",
            index: 0
        }
    };
    t["default"] = n, e.exports = t["default"]
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function l(e, t) {
        return e.left === t.left && e.top === t.top && e.right === t.right && e.bottom === t.bottom
    }

    function r(e) {
        var t = e.info.type,
            n = this.accept[t] && "function" == typeof this.accept[t] ? this.accept[t].call(this, e) : this.accept[t];
        n && (e.registerDropRect(this), this.setupDragDropRect && this.setupDragDropRect())
    }

    function s() {}

    function c() {
        var e = arguments.length <= 0 || void 0 === arguments[0] ? h : arguments[0];
        return function(t) {
            var n = t.displayName || t.name || "Component",
                i = function(i) {
                    function c(i) {
                        o(this, c), p(Object.getPrototypeOf(c.prototype), "constructor", this).call(this, i), this.qlikDragDropService = i.services.DragDropService, this.DecoratedComponent = t, this.displayName = "DragDropContainer > " + n, this.accept = e.accept;
                        var a = e.onDropGridCellHandler || function(e) {},
                            l = e.onDropLibraryItemHandler || function(e) {};
                        this.drop = {
                            gridcell: a.bind(this),
                            libraryitem: l.bind(this)
                        }, this.prio = 1, this.start = r.bind(this), this.end = s.bind(this), e.onInitStateHandler && e.onInitStateHandler.call(this)
                    }
                    return a(c, i), u(c, [{
                        key: "componentDidMount",
                        value: function() {
                            this.qlikDragDropService && (this.setupDragDropRect(), this.qlikDragDropService.registerDropTarget(this)), this.props.isShow && this.injectObject()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.removeObject(), this.qlikDragDropService && this.qlikDragDropService.unregisterDropTarget(this), this.targetRect = null, this.drawRect = null, this.cellRect = null
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            this.props.isShow && (this.injectObject(), this.repaintObject())
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.DecoratedComponent;
                            return f["default"].createElement(e, this.props)
                        }
                    }, {
                        key: "getRect",
                        value: function() {
                            var e = f["default"].findDOMNode(this),
                                t = e.getBoundingClientRect(),
                                n = $(e).parent();
                            return {
                                left: t.left - n.scrollLeft(),
                                top: t.top - n.scrollTop(),
                                right: t.right - n.scrollLeft() || t.left - n.scrollLeft() + t.width,
                                bottom: t.bottom - n.scrollTop() || t.top - n.scrollTop() + t.height
                            }
                        }
                    }, {
                        key: "setupDragDropRect",
                        value: function() {
                            var e = this.getRect();
                            this.targetRect = e, this.drawRect = e, this.cellRect = e
                        }
                    }, {
                        key: "getPlaceholderElement",
                        value: function() {
                            var e = f["default"].findDOMNode(this),
                                t = e.getElementsByClassName(this.placeClassName || "placeholder")[0];
                            return t || (t = e), e
                        }
                    }, {
                        key: "injectObject",
                        value: function() {
                            var t = this.getPlaceholderElement();
                            e.onInjectObjectHandler && e.onInjectObjectHandler.call(this, t)
                        }
                    }, {
                        key: "repaintObject",
                        value: function() {
                            var t = this.getRect();
                            this.cellRect && !l(this.cellRect, t) && this.setupDragDropRect();
                            var n = this.getPlaceholderElement();
                            e.onRepaintObjectHandler && e.onRepaintObjectHandler.call(this, n)
                        }
                    }, {
                        key: "removeObject",
                        value: function() {
                            var t = this.getPlaceholderElement();
                            e.onRemoveObjectHandler && e.onRemoveObjectHandler.call(this, t)
                        }
                    }]), c
                }(d.Component);
            return i
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var u = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        p = function(e, t, n) {
            for (var i = !0; i;) {
                var o = e,
                    a = t,
                    l = n;
                i = !1, null === o && (o = Function.prototype);
                var r = Object.getOwnPropertyDescriptor(o, a);
                if (void 0 !== r) {
                    if ("value" in r) return r.value;
                    var s = r.get;
                    return void 0 === s ? void 0 : s.call(l)
                }
                var c = Object.getPrototypeOf(o);
                if (null === c) return void 0;
                e = c, t = a, n = l, i = !0, r = c = void 0
            }
        };
    t["default"] = c;
    var d = n(1),
        f = i(d),
        h = {
            accept: {
                libraryitem: function() {
                    return !0
                },
                gridcell: function() {
                    return !0
                }
            }
        };
    e.exports = t["default"]
}, function(e, t) {
    "use strict";

    function n(e, t) {
        var n = e,
            i = t,
            o = t.split(".");
        if (o.length > 0) {
            for (var a = 0; a < o.length - 1; ++a) n[o[a]] && (n = n[o[a]]);
            i = o[o.length - 1]
        }
        return {
            ref: n,
            name: i
        }
    }

    function i(e, t, i) {
        var o = n(e, t),
            a = o.ref,
            l = o.name;
        a[l] = i
    }

    function o(e, t) {
        var i = n(e, t),
            o = i.ref,
            a = i.name;
        return o[a]
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.setRefValue = i, t.getRefValue = o
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var l = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        r = function(e, t, n) {
            for (var i = !0; i;) {
                var o = e,
                    a = t,
                    l = n;
                i = !1, null === o && (o = Function.prototype);
                var r = Object.getOwnPropertyDescriptor(o, a);
                if (void 0 !== r) {
                    if ("value" in r) return r.value;
                    var s = r.get;
                    return void 0 === s ? void 0 : s.call(l)
                }
                var c = Object.getPrototypeOf(o);
                if (null === c) return void 0;
                e = c, t = a, n = l, i = !0, r = c = void 0
            }
        },
        s = n(1),
        c = i(s),
        u = n(5),
        p = i(u),
        d = 44,
        f = function(e) {
            function t() {
                o(this, t), r(Object.getPrototypeOf(t.prototype), "constructor", this).apply(this, arguments)
            }
            return a(t, e), l(t, [{
                key: "render",
                value: function() {
                    var e = this.props.valueStyles;
                    return c["default"].createElement("div", {
                        className: "value",
                        style: e
                    }, this.props.children)
                }
            }]), t
        }(s.Component),
        h = {
            placeClassName: "value",
            accept: {
                libraryitem: function(e) {
                    return e.info && e.info.item && e.info.item.visualization || e.item && e.item.visualization
                }
            },
            onInitStateHandler: function() {
                this.state = {
                    isObjectInjected: !1,
                    itemid: this.props.embeddedItem,
                    object: null
                }
            },
            onDropLibraryItemHandler: function(e) {
                this.removeObject(), this.setState({
                    itemid: e.item.id,
                    isObjectInjected: !1
                });
                var t = this.props.measureIndex,
                    n = this.props.services.QlikComponent && this.props.services.QlikComponent.backendApi;
                n.getProperties().then(function(i) {
                    var o = i.qHyperCubeDef.qMeasures;
                    t < o.length && (o[t].qDef.embeddedItem = e.item.id, n.setProperties(i))
                })
            },
            onInjectObjectHandler: function(e) {
                var t = this;
                if (!this.props.embeddedItem) return this.removeObject();
                if (!this.state.itemid || !this.state.isObjectInjected) {
                    this.removeObject();
                    var n = this,
                        i = this.state.itemid,
                        o = this.props.services.Qlik;
                    i && i.trim().length > 0 && (c["default"].unmountComponentAtNode(e), o.currApp().getObject(e, i).then(function(a) {
                        n.onObjectInvalidated = function() {
                            a.layout.qSelectionInfo.qInSelections ? $(e).css("margin-top", d + "px") : ($(e).css("margin-top", "0px"), o.resize(i))
                        }, a.Validated.bind(t.onObjectInvalidated);
                        var l = $(e).width(),
                            r = $(e).height();
                        t.setState({
                            itemid: i,
                            object: a,
                            isObjectInjected: !0
                        }), t.width = l, t.height = r, o.resize(i)
                    }))
                }
            },
            onRepaintObjectHandler: function(e) {
                if (this.state.object) {
                    var t = 0;
                    this.state.object.layout && this.state.object.layout.qSelectionInfo.qInSelections && (t = d);
                    var n = this.props.kpisRows,
                        i = this.props.mainContainerElement,
                        o = Math.floor((.9 * i.clientHeight || $(i).height()) / n),
                        a = $(e).height(),
                        l = $(e).width(),
                        r = o - t;
                    r > 0 && (a > r || r > a) ? ($(e).height(r), this.height = r, this.props.services.Qlik.resize(this.state.itemid)) : (l > this.width || l < this.width) && (Math.abs(l - this.width) > 5 && this.props.services.Qlik.resize(this.state.itemid), this.width = l)
                }
            },
            onRemoveObjectHandler: function(e) {
                this.state.object && (this.onObjectInvalidated && (this.state.object.Validated.unbind(this.onObjectInvalidated), this.onObjectInvalidated = null), this.state.object.close(), this.state.object = null, $(e).empty(), $(e).height("auto"), c["default"].render(c["default"].createElement("span", null, this.props.children), e), this.setState({
                    itemid: null,
                    object: null,
                    isObjectInjected: !1
                }))
            }
        };
    t["default"] = p["default"](h)(f), e.exports = t["default"]
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    var o = n(14),
        a = i(o),
        l = n(20),
        r = i(l),
        s = window,
        c = s.requirejs && s.requirejs.defined,
        u = s && s.define || u,
        p = ["module", "qlik", "general.services/show-service/show-service", "general.utils/drag-and-drop-service"].map(function(e) {
            return c(e) || "module" === e || "general.utils/drag-and-drop-service" === e ? e : "qlik" === e && c("js/qlik") ? "js/qlik" : null
        });
    s.React || p.push("./vendors/react.min"), u(p, function(e, t, i, o, l) {
        var c = e && e.uri && e.uri.split("/").slice(0, -1).join("/") || "/extensions/qsSimpleKPI";
        s.Promise || (s.Promise = r["default"]);
        var u = t.Promise || s.Promise,
            p = new u(function(e, t) {
                a["default"](c + "/qsSimpleKPI.css", function() {
                    e()
                }, function() {
                    e()
                })
            });
        l && !s.React && (s.React = l);
        var d = n(13),
            f = n(9)({
                ShowService: i
            }),
            h = n(16)({
                qlik: t,
                DragDropService: o,
                LoadedPromise: p
            });
        return {
            initialProperties: d,
            definition: f,
            paint: h,
            support: {
                snapshot: !0,
                "export": !0,
                exportData: !0
            }
        }
    })
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function o(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
        return Array.from(e)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = n(10),
        l = n(12),
        r = n(2),
        s = n(4),
        c = i(s);
    t["default"] = function(e) {
        var t = e.ShowService,
            n = {
                type: "items",
                uses: "dimensions",
                ref: "qHyperCubeDef.qDimensions",
                min: 0,
                max: 1,
                allowAdd: !0,
                allowRemove: !0
            },
            i = {
                uses: "measures",
                ref: "qHyperCubeDef.qMeasures",
                disabledRef: "qHyperCubeDef.qLayoutExclude.qHyperCubeDef.qMeasures",
                min: 1,
                max: 256,
                allowAdd: !0,
                allowRemove: !0,
                allowMove: !0,
                items: {
                    autoFormatTemplate: {
                        type: "string",
                        label: "Auto format",
                        translation: "properties.numberFormatting.formatPattern",
                        ref: "qDef.autoFormatTemplate",
                        defaultValue: "0A",
                        show: function(e) {
                            return "U" === e.qDef.qNumFormat.qType
                        }
                    },
                    labelColor: {
                        type: "string",
                        ref: "qDef.labelColor",
                        label: "Label color",
                        expression: "always",
                        defaultValue: "#545352"
                    },
                    pickLabelColor: {
                        type: "string",
                        component: a.ColorsPickerComponent,
                        ref: "qDef.labelColor",
                        defaultValue: "#545352",
                        options: r.COLOR_OPTIONS
                    },
                    itemColor: {
                        type: "string",
                        ref: "qDef.valueColor",
                        label: "Value color",
                        expression: "always",
                        defaultValue: "#808080"
                    },
                    pickItemColor: {
                        type: "string",
                        component: a.ColorsPickerComponent,
                        ref: "qDef.valueColor",
                        defaultValue: "#808080",
                        options: r.COLOR_OPTIONS
                    },
                    linkToSheet: {
                        type: "items",
                        items: {
                            useLink: {
                                ref: "qDef.useLink",
                                type: "boolean",
                                component: "switch",
                                translation: "properties.kpi.linkToSheet",
                                defaultValue: !1,
                                options: [{
                                    value: !0,
                                    translation: "properties.on"
                                }, {
                                    value: !1,
                                    translation: "properties.off"
                                }]
                            },
                            sheetLink: {
                                ref: "sheetLink",
                                type: "string",
                                component: a.DetectChangesInComponent("qDef.kpiLink"),
                                show: function(e) {
                                    return e.qDef.useLink
                                }
                            },
                            kpiLink: {
                                ref: "qDef.kpiLink",
                                type: "string",
                                component: "sheet-dropdown",
                                show: function(e) {
                                    return e.qDef.useLink
                                }
                            }
                        }
                    },
                    hideLabel: {
                        type: "boolean",
                        label: "Hide label",
                        ref: "qDef.hideLabel",
                        defaultValue: !1
                    },
                    hideValue: {
                        type: "boolean",
                        label: "Hide value",
                        ref: "qDef.hideValue",
                        defaultValue: !1
                    },
                    groupByDimension: {
                        type: "boolean",
                        label: "Group by dimension",
                        ref: "qDef.groupByDimension",
                        defaultValue: !1
                    },
                    groupByDimensionValue: {
                        type: "string",
                        ref: "qDef.groupByDimensionValue",
                        label: "Dimension Value",
                        expression: "always",
                        defaultValue: "",
                        show: function(e) {
                            return e.qDef.groupByDimension
                        }
                    },
                    overrideParams: {
                        type: "boolean",
                        label: "Override parameters",
                        ref: "qDef.ovParams",
                        defaultValue: !1
                    },
                    overridedLabel: {
                        type: "string",
                        label: "Label",
                        expression: "optional",
                        ref: c["default"].overridedLabel.ref,
                        translation: "Common.Label",
                        show: function(e) {
                            return e.qDef.ovParams
                        }
                    },
                    size: {
                        type: "string",
                        component: "dropdown",
                        label: "Size",
                        ref: "qDef.size",
                        options: [].concat(o(r.SIZE_OPTIONS), [{
                            value: r.DEFAULT_SIZE,
                            label: r.DEFAULT_SIZE,
                            tooltip: r.DEFAULT_SIZE
                        }]),
                        defaultValue: r.DEFAULT_SIZE,
                        show: function(e) {
                            return e.qDef.ovParams
                        }
                    },
                    labelOrientation: {
                        type: "string",
                        component: "buttongroup",
                        label: "Labels orientation",
                        ref: "qDef.labelOrientation",
                        options: [{
                            value: "horizontal",
                            label: "Horizontal",
                            tooltip: "Horizontal"
                        }, {
                            value: "",
                            label: "Vertical",
                            tooltip: "Vertical"
                        }],
                        defaultValue: "",
                        show: function(e) {
                            return e.qDef.ovParams && !e.qDef.hideLabel
                        }
                    },
                    labelOrder: {
                        type: "string",
                        component: "buttongroup",
                        label: "Labels order",
                        ref: "qDef.labelOrder",
                        options: [{
                            value: "first",
                            label: "Label, Value",
                            tooltip: "Label, Value"
                        }, {
                            value: "last",
                            label: "Value, Label",
                            tooltip: "Value, Label"
                        }],
                        defaultValue: "first",
                        show: function(e) {
                            return e.qDef.ovParams && !e.qDef.hideLabel
                        }
                    },
                    fontStyle: {
                        type: "string",
                        ref: "qDef.fontStyles",
                        label: "Font style",
                        expression: "always",
                        defaultValue: "",
                        show: !0
                    },
                    pickFontStyle: {
                        type: "string",
                        component: a.FontStylesComponent,
                        ref: "qDef.fontStyles",
                        defaultValue: "",
                        show: function(e) {
                            return "object" != typeof e.qDef.fontStyles
                        }
                    },
                    textAlignment: {
                        type: "string",
                        component: "item-selection-list",
                        icon: !0,
                        horizontal: !0,
                        label: "Alignment",
                        translation: "properties.Alignment",
                        ref: "qDef.textAlignment",
                        defaultValue: "center",
                        items: [{
                            value: "left",
                            component: "icon-item",
                            icon: "M"
                        }, {
                            value: "center",
                            icon: "O",
                            component: "icon-item"
                        }, {
                            value: "right",
                            icon: "N",
                            component: "icon-item"
                        }]
                    },
                    itemIcon: {
                        type: "string",
                        ref: "qDef.valueIcon",
                        label: "Icon",
                        expression: "always",
                        defaultValue: "",
                        show: !0
                    },
                    pickItemIcon: {
                        type: "string",
                        component: a.SelectIconDialogComponent(t),
                        ref: "qDef.valueIcon",
                        defaultValue: "",
                        options: l.FULL_ICONS_SET
                    },
                    iconPosition: {
                        type: "string",
                        component: "buttongroup",
                        label: "Icon position",
                        ref: "qDef.iconPosition",
                        options: [{
                            value: "value",
                            label: "Value",
                            tooltip: "Value"
                        }, {
                            value: "label",
                            label: "Label",
                            tooltip: "Label"
                        }],
                        defaultValue: "label",
                        show: function(e) {
                            return e.qDef.valueIcon
                        }
                    },
                    iconOrder: {
                        type: "string",
                        component: "buttongroup",
                        label: "Icon order",
                        ref: "qDef.iconOrder",
                        options: [{
                            value: "first",
                            label: "Icon, Value",
                            tooltip: "Icon, Value"
                        }, {
                            value: "last",
                            label: "Value, Icon",
                            tooltip: "Value, Icon"
                        }],
                        defaultValue: "first",
                        show: function(e) {
                            return e.qDef.valueIcon
                        }
                    },
                    iconSize: {
                        type: "string",
                        component: "dropdown",
                        label: "Icon size",
                        ref: "qDef.iconSize",
                        show: function(e) {
                            return e.qDef.valueIcon
                        },
                        options: r.SIZE_OPTIONS,
                        defaultValue: ""
                    },
                    infographicMode: {
                        type: "boolean",
                        label: "Infographic mode",
                        ref: "qDef.infographic",
                        defaultValue: !1
                    },
                    embeddedItem: {
                        type: "string",
                        ref: "qDef.embeddedItem",
                        label: "Visualization",
                        expression: "always",
                        defaultValue: "",
                        show: !0
                    }
                }
            },
            s = {
                type: "items",
                uses: "settings",
                items: {
                    dimensionsOptions: {
                        type: "items",
                        label: "Dimensions",
                        translation: "Common.Dimensions",
                        items: {
                            showAs: {
                                type: "string",
                                component: "dropdown",
                                label: "Show as",
                                ref: "options.dimShowAs",
                                options: r.DIM_VIEW_OPTIONS,
                                defaultValue: "segment"
                            },
                            divideBy: {
                                type: "string",
                                component: "dropdown",
                                label: "Items per row",
                                ref: "options.dimDivideBy",
                                defaultValue: "auto",
                                show: function(e) {
                                    return "card" === e.options.dimShowAs
                                },
                                options: [{
                                    value: "auto",
                                    label: "Auto",
                                    tooltip: "Auto"
                                }, {
                                    value: "one",
                                    label: "1",
                                    tooltip: "One"
                                }, {
                                    value: "two",
                                    label: "2",
                                    tooltip: "Two"
                                }, {
                                    value: "three",
                                    label: "3",
                                    tooltip: "Three"
                                }, {
                                    value: "four",
                                    label: "4",
                                    tooltip: "Four"
                                }, {
                                    value: "five",
                                    label: "5",
                                    tooltip: "Four"
                                }, {
                                    value: "six",
                                    label: "6",
                                    tooltip: "Six"
                                }, {
                                    value: "seven",
                                    label: "7",
                                    tooltip: "Seven"
                                }, {
                                    value: "eight",
                                    label: "8",
                                    tooltip: "Eight"
                                }, {
                                    value: "nine",
                                    label: "9",
                                    tooltip: "Nine"
                                }, {
                                    value: "ten",
                                    label: "10",
                                    tooltip: "Ten"
                                }]
                            },
                            dimensionsOrientation: {
                                type: "string",
                                component: "buttongroup",
                                label: "Orientation",
                                ref: "options.dimensionsOrientation",
                                show: function(e) {
                                    return "segment" === e.options.dimShowAs
                                },
                                options: [{
                                    value: "horizontal",
                                    label: "Horizontal",
                                    tooltip: "Horizontal"
                                }, {
                                    value: "vertical",
                                    label: "Vertical",
                                    tooltip: "Vertical"
                                }],
                                defaultValue: "horizontal"
                            },
                            labelOrientation: {
                                type: "string",
                                component: "dropdown",
                                label: "Labels",
                                ref: "options.dimLabelOrientation",
                                options: r.DIM_LABEL_OPTIONS,
                                defaultValue: "top attached"
                            },
                            labelSize: {
                                type: "string",
                                component: "dropdown",
                                label: "Size",
                                ref: "options.dimLabelSize",
                                options: r.SIZE_OPTIONS,
                                defaultValue: ""
                            },
                            hideLabel: {
                                type: "boolean",
                                label: "Hide labels",
                                ref: "options.dimHideLabels",
                                defaultValue: !1
                            },
                            centeredLabel: {
                                type: "boolean",
                                label: "Center aligned labels",
                                ref: "options.dimCenteredLabels",
                                defaultValue: !1
                            },
                            hideBorders: {
                                type: "boolean",
                                label: "Hide external borders",
                                ref: "options.dimHideBorders",
                                defaultValue: !1
                            },
                            hideInternalBorders: {
                                type: "boolean",
                                label: "Hide internal borders",
                                ref: "options.dimHideInternalBorders",
                                defaultValue: !1,
                                show: function(e) {
                                    return "segment" === e.options.dimShowAs
                                }
                            }
                        }
                    },
                    measuresOptions: {
                        type: "items",
                        label: "Measures",
                        translation: "Common.Measures",
                        items: {
                            labelOrientation: {
                                type: "string",
                                component: "buttongroup",
                                label: "Labels orientation",
                                ref: "options.labelOrientation",
                                options: [{
                                    value: "horizontal",
                                    label: "Horizontal",
                                    tooltip: "Horizontal"
                                }, {
                                    value: "",
                                    label: "Vertical",
                                    tooltip: "Vertical"
                                }],
                                defaultValue: ""
                            },
                            labelOrder: {
                                type: "string",
                                component: "buttongroup",
                                label: "Labels order",
                                ref: "options.labelOrder",
                                options: [{
                                    value: "first",
                                    label: "Label, Value",
                                    tooltip: "Label, Value"
                                }, {
                                    value: "last",
                                    label: "Value, Label",
                                    tooltip: "Value, Label"
                                }],
                                defaultValue: "first"
                            },
                            size: {
                                type: "string",
                                component: "dropdown",
                                label: "Size",
                                ref: "options.size",
                                options: r.SIZE_OPTIONS,
                                defaultValue: ""
                            },
                            autoSize: {
                                type: "boolean",
                                component: "switch",
                                label: "Responsive size",
                                ref: "options.autoSize",
                                defaultValue: !1,
                                options: [{
                                    value: !0,
                                    label: "On"
                                }, {
                                    value: !1,
                                    label: "Off"
                                }]
                            },
                            divideBy: {
                                type: "string",
                                component: "dropdown",
                                label: "Items per row",
                                ref: "options.divideBy",
                                defaultValue: "auto",
                                options: [{
                                    value: "",
                                    label: "Not set",
                                    tooltip: "Not set"
                                }, {
                                    value: "auto",
                                    label: "Auto",
                                    tooltip: "Auto"
                                }, {
                                    value: "one",
                                    label: "1",
                                    tooltip: "One"
                                }, {
                                    value: "two",
                                    label: "2",
                                    tooltip: "Two"
                                }, {
                                    value: "three",
                                    label: "3",
                                    tooltip: "Three"
                                }, {
                                    value: "four",
                                    label: "4",
                                    tooltip: "Four"
                                }, {
                                    value: "five",
                                    label: "5",
                                    tooltip: "Four"
                                }, {
                                    value: "six",
                                    label: "6",
                                    tooltip: "Six"
                                }, {
                                    value: "seven",
                                    label: "7",
                                    tooltip: "Seven"
                                }, {
                                    value: "eight",
                                    label: "8",
                                    tooltip: "Eight"
                                }, {
                                    value: "nine",
                                    label: "9",
                                    tooltip: "Nine"
                                }, {
                                    value: "ten",
                                    label: "10",
                                    tooltip: "Ten"
                                }]
                            }
                        }
                    },
                    stylingOptions: {
                        type: "items",
                        label: "Styles",
                        translation: "Styles",
                        items: {
                            backgroundColor: {
                                type: "string",
                                ref: "options.backgroundColor",
                                label: "Background color",
                                expression: "always",
                                defaultValue: ""
                            },
                            pickBackgroundColor: {
                                type: "string",
                                component: a.ColorsPickerComponent,
                                ref: "options.backgroundColor",
                                options: r.COLOR_OPTIONS,
                                defaultValue: ""
                            },
                            iconSize: {
                                type: "string",
                                component: "dropdown",
                                label: "Vertical alignment",
                                ref: "options.verticalAlign",
                                options: [{
                                    value: "top-aligned-items",
                                    label: "Top aligned"
                                }, {
                                    value: "bottom-aligned-items",
                                    label: "Bottom aligned"
                                }, {
                                    value: "center-aligned-items",
                                    label: "Center aligned"
                                }, {
                                    value: "stretched-items",
                                    label: "Stretched"
                                }],
                                defaultValue: "top-aligned-items"
                            },
                            styles: {
                                type: "string",
                                component: "expression",
                                label: "Styles (CSS)",
                                ref: "options.styles",
                                defaultValue: "",
								expression: "optional"
                            }
                        }
                    }
                }
            },
            u = {
                type: "items",
                translation: "properties.dataHandling",
                grouped: !0,
                items: {
                    calcCond: {
                        type: "items",
                        translation: "properties.hyperCube.calcCond",
                        items: {
                            expr: {
                                ref: "qHyperCubeDef.qCalcCond",
                                type: "string",
                                component: "expression",
                                expressionType: "ValueExpr",
                                label: "Calculation condition",
                                translation: "properties.hyperCube.calcCond"
                            },
                            customErrorMessage: {
                                ref: "qHyperCubeDef.customErrorMessage.calcCond",
                                component: "textarea",
                                defaultValue: "",
                                type: "string",
                                placeholderTranslation: "Object.ErrorMessage.CalculationCondition",
                                translation: "properties.hyperCube.calcCondMessage",
                                show: function(e) {
                                    var t = e.qHyperCubeDef && e.qHyperCubeDef.qCalcCond;
                                    return t && t.qv && "" !== t.qv
                                }
                            }
                        }
                    }
                }
            },
            p = {
                uses: "sorting"
            };
        return {
            type: "items",
            component: "accordion",
            items: {
                dims: n,
                kpis: i,
                sorting: p,
                dataHandling: u,
                settings: s
            }
        }
    }, e.exports = t["default"]
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = n(6),
        l = n(11),
        r = i(l),
        s = {
            template: '\n    <div class="pp-component" ng-if="visible">\n          <div class="label" ng-if="label" ng-class="{ \'disabled\': readOnly }">\n            {{label}}\n          </div>\n          <div class="value">\n            <div class="qv-object-qsstatistic" ng-if="!loading">\n              <div class="ui mini right labeled">\n                <input type="color" ng-model="t.value" ng-change="onColorChange()">\n                <a title="{{colorExpression}}" class="ui statistic tag label" qva-activate="showPallete()" style="color: #00; overflow: visible; background-color: {{t.value}};">\n                  <span ng-if="!isColorExpression" style="color: #ffffff; font-size: 16px;">{{t.value}}</span>\n                  <i class="icon-expression" ng-if="isColorExpression" style="font-size: 16px;"></i>\n                </a>\n              </div>\n              <div ng-if="showColorPallete">\n                <button ng-repeat="option in options track by option.value"\n                  class="ui mini icon button"\n                  ng-disabled="readOnly"\n                  style="margin: 1px; background-color: {{option.value}};"\n                  qva-activate="onColorChange(option.value)" tid="{{option.value}}" data-icon="{{definition.icon}}"\n                  q-title-translation="{{option.tooltip || option.label}}">\n                  <i class="checkmark icon" style="color: #ffffff; font-size:17px;" ng-if="option.value == t.value"></i>\n                  <i class="icon" style="font-size:17px;" ng-if="option.value != t.value"></i>\n                </button>\n              </div>\n            </div>\n            <div class="pp-loading-container" ng-if="loading">\n              <div class="pp-loader qv-loader"></div>\n            </div>\n            <div ng-if="errorMessage" class="pp-invalid error">{{errorMessage}}</div>\n          </div>\n    </div>\n    ',
            controller: ["$scope", "$element", function(e, t) {
                function n() {
                    e.loading = !0, e.errorMessage = "", e.label = e.definition.label, e.options = e.definition.options, e.isColorExpression = !1, e.colorExpression = "";
                    var t = a.getRefValue(e.data, e.definition.ref);
                    if ("object" == typeof t) e.isColorExpression = !0, e.colorExpression = t && t.qStringExpression && t.qStringExpression.qExpr || "", t = e.definition.defaultValue;
                    else if ("string" == typeof t) {
                        var n = /([#A-Fa-f0-9]{7}|[#A-Fa-f0-9]{4})/,
                            i = n.exec(t);
                        i && (t = i[0])
                    }
                    e.t = {
                        value: t || "..."
                    }, e.visible = !0, e.showColorPallete = !1, e.loading = !1
                }
                n(), e.onColorChange = function(t) {
                    if (t && (e.t.value = t), e.isColorExpression) {
                        var n = a.getRefValue(e.data, e.definition.ref);
                        n && n.qStringExpression && n.qStringExpression.qExpr ? n.qStringExpression.qExpr += e.t.value : a.setRefValue(e.data, e.definition.ref, e.t.value)
                    } else a.setRefValue(e.data, e.definition.ref, e.t.value);
                    "function" == typeof e.definition.change && e.definition.change(e.data, e.args.handler), e.$emit("saveProperties"), e.showColorPallete = !1
                }, e.showPallete = function() {
                    e.showColorPallete = !e.showColorPallete
                }, e.$on("datachanged", function() {
                    n()
                })
            }]
        },
        c = {
            template: '<div class="pp-component pp-buttongroup-component qv-object-qsstatistic" ng-if="visible">\n      <div class="label" ng-if="label" ng-class="{ \'disabled\': readOnly }">\n        {{label}}\n      </div>\n      <div class="lui-buttongroup qui-buttongroup" ng-if="!loading && !isExpression">\n        <button\n          class="lui-button qui-button"\n          ng-class="{\'lui-active qui-active\':states.bold}"\n          ng-disabled="readOnly"\n          qva-activate="select(\'bold\')"\n          q-title-translation="Bold">\n          <i class="icon bold" style="font-color: white; font-size:18px;"></i>\n        </button>\n        <button\n          class="lui-button qui-button"\n          ng-class="{\'lui-active qui-active\':states.italic}"\n          ng-disabled="readOnly"\n          qva-activate="select(\'italic\')"\n          q-title-translation="Italic">\n          <i class="icon italic" style="font-color: white; font-size:18px;"></i>\n        </button>\n        <button\n          class="lui-button qui-button"\n          ng-class="{\'lui-active qui-active\':states.underline}"\n          ng-disabled="readOnly"\n          qva-activate="select(\'underline\')"\n          q-title-translation="Underline">\n          <i class="icon underline" style="font-color: white; font-size:18px;"></i>\n        </button>\n      </div>\n\n      <div class="pp-loading-container" ng-if="loading">\n        <div class="pp-loader qv-loader"></div>\n      </div>\n\n      <div ng-if="errorMessage" class="pp-invalid error">{{errorMessage}}</div>\n    </div>',
            controller: ["$scope", function(e) {
                function t() {
                    e.loading = !0, e.errorMessage = "", e.label = e.definition.label, e.isExpression = !1;
                    var t = a.getRefValue(e.data, e.definition.ref);
                    if (e.states = {}, t) {
                        "object" == typeof t && t.qStringExpression && (e.isExpression = !0, t = t.qStringExpression.qExpr || "");
                        var n = t.split(",");
                        n.forEach(function(t) {
                            e.states[t] = t
                        })
                    }
                    e.visible = !0, e.loading = !1
                }
                e.select = function(t) {
                    e.states[t] ? delete e.states[t] : e.states[t] = t;
                    var n = Object.keys(e.states).join(",");
                    if (e.isExpression) {
                        var i = a.getRefValue(e.data, e.definition.ref);
                        i && i.qStringExpression && i.qStringExpression.qExpr ? i.qStringExpression.qExpr += n : a.setRefValue(e.data, e.definition.ref, n)
                    } else a.setRefValue(e.data, e.definition.ref, n);
                    "function" == typeof e.definition.change && e.definition.change(e.data, e.args.handler), e.$emit("saveProperties")
                }, e.$on("datachanged", function() {
                    t()
                }), t()
            }]
        },
        u = {
            template: '\n  <div class="pp-component" ng-if="visible">\n        <div class="label" ng-if="label" ng-class="{ \'disabled\': readOnly }">\n          {{label}}\n        </div>\n        <div class="value">\n          <div class="qv-object-qsstatistic" ng-if="!loading">\n            <textarea rows="5" ng-model="t.value" ng-change="onTextChange()" style="width: 100%; max-width: 100%;">\n            </textarea>\n          </div>\n        </div>\n        <div class="pp-loading-container" ng-if="loading">\n          <div class="pp-loader qv-loader"></div>\n        </div>\n        <div ng-if="errorMessage" class="pp-invalid error">{{errorMessage}}</div>\n  </div>\n  ',
            controller: ["$scope", function(e) {
                function t() {
                    e.loading = !0, e.errorMessage = "", e.label = e.definition.label, e.t = {
                        value: a.getRefValue(e.data, e.definition.ref)
                    }, e.visible = !0, e.loading = !1
                }
                e.onTextChange = function() {
                    a.setRefValue(e.data, e.definition.ref, e.t.value), "function" == typeof e.definition.change && e.definition.change(e.data, e.args.handler), e.$emit("saveProperties")
                }, e.$on("datachanged", function() {
                    t()
                }), t()
            }]
        },
        p = function(e) {
            return r["default"](e, function() {
                function e(e, t) {
                    var n = -1;
                    return e.isExpression || "string" != typeof e.value || (n = e.value.search(new RegExp("\\s" + t))), n
                }
                var t = $(document).height(),
                    n = "85%",
                    i = "auto";
                return {
                    text: "Icons",
                    icon: "",
                    initContext: function(e, t) {
                        e.isExpression = !1, e.isNotSet = !1, "object" == typeof e.value && e.value.qStringExpression ? (e.isExpression = !0, e.iconExpression = e.value.qStringExpression.qExpr || "") : "string" == typeof e.value && 0 === e.value.trim().length && (e.isNotSet = !0, e.iconExpression = "Select icon", e.value = "ellipsis horizontal icon")
                    },
                    controlComponent: '\n    <button\n      class="lui-button qui-button"\n      title="{{iconExpression}}"\n      qva-activate="showDialog()"\n      ng-disabled="readOnly">\n      <i class="{{value}}" ng-if="!isExpression" style="font-size:18px;"></i>\n      <i class="icon-expression" ng-if="isExpression" style="font-size:18px;"></i>\n    </button>\n    <span ng-if="!isExpression && !isNotSet">{{value}}</span>\n    <span ng-if="isNotSet">{{iconExpression}}</span>\n    ',
                    initDialogContext: function(t, n) {
                        var i;
                        n.iconOptions = (i = {
                            disabled: "Disabled",
                            loading: "Loading"
                        }, o(i, "horizontally flipped", "Horizontally flipped"), o(i, "vertically flipped", "Vertically flipped"), o(i, "clockwise rotated", "Clockwise rotated"), o(i, "counterclockwise rotated", "Counterclockwise rotated"), i), n.opts = {};
                        for (var a in n.iconOptions) n.opts[a] = -1 != e(t, a);
                        n.isExpression = t.isExpression, n.options = t.definition.options
                    },
                    selectValue: function(e, t) {
                        if (e.isExpression = !1, e.iconOptions[t]) {
                            var n = e.value || "",
                                i = e.opts[t],
                                o = new RegExp("\\s" + t),
                                a = n.search(o);
                            return i && -1 === a ? (n = n.concat(" ", t), e.opts[t] = !0) : i || -1 == a || (n = n.replace(o, ""), e.opts[t] = !1), n
                        }
                        var l = t;
                        for (var r in e.iconOptions) e.opts[r] && (l += " " + r);
                        return l
                    },
                    dialogContent: '\n    <div class="qv-object-qsstatistic">\n      <style scoped>\n        #my-confirm-dialog {\n          width: ' + n + ";\n          height: " + i + ';\n        }\n      </style>\n      <div style="height: auto; font-size:3em;">\n        <i class="{{value}}" ng-if="!isExpression"></i><span ng-if="!isExpression" style="font-size:0.5em;">{{value}}</span>\n        <i class="icon-expression" ng-if="isExpression" style="font-size:18px;"></i>\n      </div>\n      <div style="overflow:auto; -webkit-overflow-scrolling:touch; height:' + t / 2 + 'px; border: solid 1px #f2f2f2;border-radius:5px;padding:5px">\n      <div ng-repeat="(category, icons) in options">\n        <h1 style="margin-top:1em;">{{category}}</h1>\n        <button ng-repeat="icon in icons track by $index"\n          class="ui tiny icon button"\n          title="{{icon}}"\n          ng-disabled="readOnly"\n          qva-activate="select(icon)"\n          style="width: 40px; height: 40px; padding: 1px; margin: 2px;">\n          <div><i class="{{icon}}" style="margin: 0; font-size: 1.3em"></i></div>\n        </button>\n      </div>\n      </div>\n      <div style="margin-top: 10px;">\n        <span ng-repeat-start="(iconOption, iconOptLabel) in iconOptions track by iconOption" />\n        <label\n          class="lui-checkbox qui-checkboxicon"\n          style="display: inline-block"\n          title="{{iconOptLabel}}"\n          ng-class="{ \'lui-hovered qui-hover\': hover }"\n          ng-mouseenter="hover = true"\n          ng-mouseleave="hover = false">\n          <input type="checkbox"\n            class="lui-checkbox__input"\n            ng-model="opts[iconOption]"\n            ng-change="select(iconOption)">\n          <div class="lui-checkbox__check-wrap check-wrap">\n            <span class="lui-checkbox__check check"></span>\n            <span class="lui-checkbox__check-text check-text" style="max-width: 200px">{{iconOptLabel}}</span>\n          </div>\n        </label>\n        <span ng-repeat-end>&nbsp;</span>\n      </div>\n    </div>\n    '
                }
            }())
        },
        d = function(e) {
            return {
                template: "<span></span>",
                controller: ["$scope", function(t) {
                    t.$watch("data." + e, function(e) {
                        t.data[t.definition.ref] = e, t.$emit("saveProperties")
                    })
                }]
            }
        };
    t["default"] = {
        ColorsPickerComponent: s,
        FontStylesComponent: c,
        TextEditorComponent: u,
        SelectIconDialogComponent: p,
        DetectChangesInComponent: d
    }, e.exports = t["default"]
}, function(e, t, n) {
    "use strict";

    function i(e, t) {
        var n = t.controlComponent || '\n  <button\n    class="lui-button qui-button"\n    title="Show dialog"\n    qva-activate="showDialog()">\n    <i class="{{icon}}" style="font-size:18px;"></i>\n  </button>\n  ';
        return {
            template: '<div class="pp-component pp-buttongroup-component">\n      <div class="label" ng-if="label" ng-class="{ \'disabled\': readOnly }">\n        {{label}}\n      </div>\n      <div class="value">\n        <div class="qv-object-qsstatistic" ng-if="!loading">\n        ' + n + '\n        </div>\n      </div>\n      <div class="pp-loading-container" ng-if="loading">\n        <div class="pp-loader qv-loader"></div>\n      </div>\n      <div ng-if="errorMessage" class="pp-invalid error">{{errorMessage}}</div>\n    </div>',
            controller: ["$scope", "$element", function(n, i) {
                function a(e, n) {
                    e.visible = !1, e.loading = !0, e.label = e.definition.label, e.value = o.getRefValue(e.data, e.definition.ref) || e.definition.defaultValue, e.icon = "function" == typeof e.definition.icon && e.definition.icon(e, n) || e.definition.icon || "", e.visible = !0, t && t.initContext && "function" == typeof t.initContext && t.initContext(e, n), e.loading = !1
                }

                function l(t, n) {
                    var i = n.text,
                        o = void 0 !== n.icon ? n.icon : "cogwheel",
                        a = n.confirm || "Common.OK",
                        l = n.width || "100%",
                        r = n.height || "auto",
                        s = {
                            text: i,
                            header: n.header,
                            icon: o,
                            confirmLabel: a,
                            width: l,
                            height: r
                        };
                    return e.show(t, s)
                }
                a(n, i), n.changeValue = function(e) {
                    if (n.value = e, n.isExpression) {
                        var t = o.getRefValue(n.data, n.definition.ref);
                        t && t.qStringExpression && t.qStringExpression.qExpr ? t.qStringExpression.qExpr += n.value : o.setRefValue(n.data, n.definition.ref, n.value)
                    } else o.setRefValue(n.data, n.definition.ref, e);
                    "function" == typeof n.definition.change && n.definition.change(n.data, n.args.handler), o.setRefValue(n.data, n.definition.ref, e), n.$emit("saveProperties")
                }, n.$on("datachanged", function() {
                    a(n, i)
                }), n.showDialog = function() {
                    var e = {
                        template: '\n              <qv-modal-dialog qv-id="my-confirm-dialog"\n                qv-cancel="cancel()"\n                qv-confirm="confirm()">\n                <header ng-if="header" class="dm-header" q-translation="{{header}}"></header>\n                <main class="dm-main">\n                  <div class="qv-mvc-dialog-content">\n                    <div class="qv-mvc-dialog-icon icon-{{icon}}" ng-show="icon">\n                    </div>\n                    <p><span q-translation="{{text}}"></span></p>\n                  </div>\n                  <div style="width:{{width}};height:{{height}}">' + (t.dialogContent || "") + '</div>\n                </main>\n                <qv-confirm-cancel-footer qv-confirm="confirm()" qv-cancel="cancel()" qv-confirm-label="{{confirmLabel || $parent.confirmLabel}}"></qv-confirm-cancel-footer>\n              </qv-modal-dialog>',
                        scope: {
                            text: "=",
                            header: "=",
                            icon: "=",
                            confirmLabel: "=",
                            width: "=",
                            height: "="
                        },
                        controller: ["$scope", function(e) {
                            e.value = n.value, e.select = function(n) {
                                t.selectValue ? e.value = t.selectValue(e, n) : e.value = n
                            }, e.confirm = function() {
                                n.changeValue(e.value), e.destroyComponent(), e.deferredResult.resolve()
                            }, e.cancel = function() {
                                e.destroyComponent(), e.deferredResult.reject()
                            }, t && t.initDialogContext && "function" == typeof t.initDialogContext && t.initDialogContext(n, e)
                        }]
                    };
                    l(e, t)
                }
            }]
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t["default"] = i;
    var o = n(6);
    e.exports = t["default"]
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = {
        "Web content": ["alarm icon", "alarm slash icon", "alarm outline icon", "alarm slash outline icon", "at icon", "browser icon", "bug icon", "calendar outline icon", "calendar icon", "cloud icon", "comment icon", "comments icon", "comment outline icon", "comments outline icon", "copyright icon", "dashboard icon", "dropdown icon", "external square icon", "external icon", "eyedropper icon", "feed icon", "find icon", "heartbeat icon", "history icon", "home icon", "idea icon", "inbox icon", "lab icon", "mail icon", "mail outline icon", "mail square icon", "map icon", "options icon", "paint brush icon", "payment icon", "phone icon", "phone square icon", "privacy icon", "protect icon", "search icon", "setting icon", "settings icon", "shop icon", "sidebar icon", "signal icon", "sitemap icon", "tag icon", "tags icon", "tasks icon", "terminal icon", "text telephone icon", "ticket icon", "trophy icon", "wifi icon"],
        "User actions": ["adjust icon", "add user icon", "add to cart icon", "archive icon", "ban icon", "bookmark icon", "call icon", "call square icon", "cloud download icon", "cloud upload icon", "compress icon", "configure icon", "download icon", "edit icon", "erase icon", "exchange icon", "external share icon", "expand icon", "filter icon", "flag icon", "flag outline icon", "forward mail icon", "hide icon", "in cart icon", "lock icon", "pin icon", "print icon", "random icon", "recycle icon", "refresh icon", "remove bookmark icon", "remove user icon", "repeat icon", "reply all icon", "reply icon", "retweet icon", "send icon", "send outline icon", "share alternate icon", "share alternate square icon", "share icon", "share square icon", "sign in icon", "sign out icon", "theme icon", "translate icon", "undo icon", "unhide icon", "unlock alternate icon", "unlock icon", "upload icon", "wait icon", "wizard icon", "write icon", "write square icon"],
        Message: ["announcement icon", "birthday icon", "help icon", "help circle icon", "info icon", "info circle icon", "warning icon", "warning circle icon", "warning sign icon"],
        "User Types": ["child icon", "doctor icon", "handicap icon", "spy icon", "student icon", "user icon", "users icon"],
        Gender: ["female icon", "heterosexual icon", "male icon", "man icon", "neuter icon", "other gender icon", "other gender horizontal icon", "other gender vertical icon", "woman icon"],
        "Layout Adjustment": ["grid layout icon", "list layout icon", "block layout icon", "zoom icon", "zoom out icon", "resize vertical icon", "resize horizontal icon", "maximize icon", "crop icon"],
        Objects: ["anchor icon", "bar icon", "bomb icon", "book icon", "bullseye icon", "calculator icon", "checkered flag icon", "cocktail icon", "diamond icon", "fax icon", "fire extinguisher icon", "fire icon", "gift icon", "leaf icon", "legal icon", "lemon icon", "life ring icon", "lightning icon", "magnet icon", "money icon", "moon icon", "plane icon", "puzzle icon", "rain icon", "road icon", "rocket icon", "shipping icon", "soccer icon", "suitcase icon", "sun icon", "travel icon", "treatment icon", "world icon"],
        Shapes: ["asterisk icon", "certificate icon", "circle icon", "circle notched icon", "circle thin icon", "crosshairs icon", "cube icon", "cubes icon", "ellipsis horizontal icon", "ellipsis vertical icon", "quote left icon", "quote right icon", "spinner icon", "square icon", "square outline icon"],
        "Item Selection": ["add circle icon", "add square icon", "check circle icon", "check circle outline icon", "check square icon", "checkmark box icon", "checkmark icon", "minus circle icon", "minus icon", "minus square icon", "minus square outline icon", "move icon", "plus icon", "plus square outline icon", "radio icon", "remove circle icon", "remove circle outline icon", "remove icon", "selected radio icon", "toggle off icon", "toggle on icon"],
        Media: ["area chart icon", "bar chart icon", "camera retro icon", "newspaper icon", "film icon", "line chart icon", "photo icon", "pie chart icon", "sound icon"],
        Pointers: ["angle double down icon", "angle double left icon", "angle double right icon", "angle double up icon", "angle down icon", "angle left icon", "angle right icon", "angle up icon", "arrow circle down icon", "arrow circle left icon", "arrow circle outline down icon", "arrow circle outline left icon", "arrow circle outline right icon", "arrow circle outline up icon", "arrow circle right icon", "arrow circle up icon", "arrow down icon", "arrow left icon", "arrow right icon", "arrow up icon", "caret down icon", "caret left icon", "caret right icon", "caret up icon", "chevron circle down icon", "chevron circle left icon", "chevron circle right icon", "chevron circle up icon", "chevron down icon", "chevron left icon", "chevron right icon", "chevron up icon", "long arrow down icon", "long arrow left icon", "long arrow right icon", "long arrow up icon", "pointing down icon", "pointing left icon", "pointing right icon", "pointing up icon", "toggle down icon", "toggle left icon", "toggle right icon", "toggle up icon"],
        "Computer and File System": ["desktop icon", "disk outline icon", "file archive outline icon", "file audio outline icon", "file code outline icon", "file excel outline icon", "file icon", "file image outline icon", "file outline icon", "file pdf outline icon", "file powerpoint outline icon", "file text icon", "file text outline icon", "file video outline icon", "file word outline icon", "folder icon", "folder open icon", "folder open outline icon", "folder outline icon", "game icon", "keyboard icon", "laptop icon", "level down icon", "level up icon", "mobile icon", "power icon", "plug icon", "tablet icon", "trash icon", "trash outline icon"],
        Technologies: ["barcode icon", "css3 icon", "database icon", "fork icon", "html5 icon", "openid icon", "qrcode icon", "rss icon", "rss square icon", "server icon"],
        Rating: ["empty heart icon", "empty star icon", "frown icon", "heart icon", "meh icon", "smile icon", "star half empty icon", "star half icon", "star icon", "thumbs down icon", "thumbs outline down icon", "thumbs outline up icon", "thumbs up icon"],
        Audio: ["backward icon", "eject icon", "fast backward icon", "fast forward icon", "forward icon", "music icon", "mute icon", "pause icon", "play icon", "record icon", "step backward icon", "step forward icon", "stop icon", "unmute icon", "video play icon", "video play outline icon", "volume down icon", "volume off icon", "volume up icon"],
        Map: ["building icon", "building outline icon", "car icon", "coffee icon", "emergency icon", "first aid icon", "food icon", "h icon", "hospital icon", "location arrow icon", "marker icon", "military icon", "paw icon", "space shuttle icon", "spoon icon", "taxi icon", "tree icon", "university icon"],
        Tables: ["columns icon", "sort alphabet ascending icon", "sort alphabet descending icon", "sort ascending icon", "sort content ascending icon", "sort content descending icon", "sort descending icon", "sort icon", "sort numeric ascending icon", "sort numeric descending icon", "table icon"],
        "Text Editor": ["align center icon", "align justify icon", "align left icon", "align right icon", "attach icon", "bold icon", "copy icon", "cut icon", "font icon", "header icon", "indent icon", "italic icon", "linkify icon", "list icon", "ordered list icon", "outdent icon", "paragraph icon", "paste icon", "save icon", "strikethrough icon", "subscript icon", "superscript icon", "text height icon", "text width icon", "underline icon", "unlink icon", "unordered list icon"],
        Currency: ["dollar icon", "euro icon", "lira icon", "pound icon", "ruble icon", "rupee icon", "won icon", "shekel icon", "yen icon"],
        "Payment Options": ["american express icon", "discover icon", "google wallet icon", "mastercard icon", "paypal card icon", "paypal icon", "stripe icon", "visa icon"],
        Brands: ["adn icon", "android icon", "angellist icon", "apple icon", "behance icon", "behance square icon", "bitbucket icon", "bitbucket square icon", "bitcoin icon", "buysellads icon", "codepen icon", "connectdevelop icon", "dashcube icon", "delicious icon", "deviantart icon", "digg icon", "dribbble icon", "dropbox icon", "drupal icon", "empire icon", "facebook icon", "facebook square icon", "flickr icon", "forumbee icon", "foursquare icon", "git icon", "git square icon", "github alternate icon", "github icon", "github square icon", "gittip icon", "google icon", "google plus icon", "google plus square icon", "hacker news icon", "instagram icon", "ioxhost icon", "joomla icon", "jsfiddle icon", "lastfm icon", "lastfm square icon", "leanpub icon", "linkedin icon", "linkedin square icon", "linux icon", "maxcdn icon", "meanpath icon", "medium icon", "pagelines icon", "pied piper alternate icon", "pied piper icon", "pinterest icon", "pinterest square icon", "qq icon", "rebel icon", "reddit icon", "reddit square icon", "renren icon", "sellsy icon", "shirtsinbulk icon", "simplybuilt icon", "skyatlas icon", "skype icon", "slack icon", "slideshare icon", "soundcloud icon", "spotify icon", "stack exchange icon", "stack overflow icon", "steam icon", "steam square icon", "stumbleupon circle icon", "stumbleupon icon", "tencent weibo icon", "trello icon", "tumblr icon", "tumblr square icon", "twitch icon", "twitter icon", "twitter square icon", "viacoin icon", "vimeo icon", "vine icon", "vk icon", "wechat icon", "weibo icon", "whatsapp icon", "windows icon", "wordpress icon", "xing icon", "xing square icon", "yahoo icon", "yelp icon", "youtube icon", "youtube play icon", "youtube square icon"]
    };
    t["default"] = {
        FULL_ICONS_SET: n
    }, e.exports = t["default"]
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t["default"] = {
        version: 1.4,
        qHyperCubeDef: {
            qDimensions: [],
            qMeasures: [],
            qInitialDataFetch: [{
                qWidth: 125,
                qHeight: 80
            }]
        },
        options: {}
    }, e.exports = t["default"]
}, function(e, t) {
    "use strict";

    function n(e, t, n) {
        var i = document.createElement("link");
        i.rel = "stylesheet", i.href = e, "function" == typeof t && (i.onload = t), "function" == typeof n && (i.onerror = n), document.getElementsByTagName("head")[0].appendChild(i)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t["default"] = n, e.exports = t["default"]
}, function(e, t) {
    "use strict";

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
        if (!e || isNaN(+t)) return t;
        var t = "-" == e.charAt(0) ? -t : +t,
            n = 0 > t ? t = -t : 0,
            i = e.match(/[^\d\-\+#]/g),
            o = i && i[i.length - 1] || ".",
            a = i && i[1] && i[0] || ",",
            e = e.split(o);
        t = t.toFixed(e[1] && e[1].length), t = +t + "";
        var l = e[1] && e[1].lastIndexOf("0"),
            r = t.split(".");
        (!r[1] || r[1] && r[1].length <= l) && (t = (+t).toFixed(l + 1));
        var s = e[0].split(a);
        e[0] = s.join("");
        var c = e[0] && e[0].indexOf("0");
        if (c > -1)
            for (; r[0].length < e[0].length - c;) r[0] = "0" + r[0];
        else 0 == +r[0] && (r[0] = "");
        t = t.split("."), t[0] = r[0];
        var u = s[1] && s[s.length - 1].length;
        if (u) {
            for (var p = t[0], d = "", f = p.length % u, h = 0, v = p.length; v > h; h++) d += p.charAt(h), !((h - f + 1) % u) && v - u > h && (d += a);
            t[0] = d
        }
        return t[1] = e[1] && t[1] ? o + t[1] : "", (n ? "-" : "") + t[0] + t[1]
    }

    function o(e, t, n, i) {
        return e = e.toString(t), n[1] === n[1].toUpperCase() && (e = e.toUpperCase()), e.length - e.indexOf(".") > 10 && (e = e.slice(0, e.indexOf(".") + 11)), e.replace(".", i || ".")
    }

    function a(e, t, n) {
        var i;
        return h.test(t) ? e = o(e, Number(/\d{2}/.exec(t)[0]), t, n) : v.test(t) ? e = o(e, 8, t, n) : m.test(t) ? e = o(e, 10, t, n) : g.test(t) ? e = o(e, 16, t, n) : b.test(t) ? e = o(e, 2, t, n) : y.test(t) && (i = "", 0 > e && (i = "-", e = -e), e = Math.floor(e), 0 === e ? e = "0" : 5e5 >= e ? (e = l(e, t), e = i + e) : e = t + i + e.toExponential(0)), e
    }

    function l(e, t) {
        for (var n, i = "", o = Number(String(e).slice(-3)), a = (e - o) / 1e3, l = [0, 1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900].reverse(), r = ["0", "I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM"].reverse(); o > 0;)
            for (n = 0; n < l.length; n++)
                if (l[n] <= o) {
                    i += r[n], o -= l[n];
                    break
                }
        for (n = 0; a > n; n++) i = "M" + i;
        return t[1] !== t[1].toUpperCase() && (i = i.toLowerCase()), i
    }

    function r(e, t, n) {
        var i, o, a, l, r, s, p, d, h, v = e.pattern;
        v.indexOf("A") >= 0 && (v = v.replace("A", ""), e.abbreviate = !0), h = u(t, n), a = v.match(h), a = a ? a[0] : "", l = a ? v.substr(0, v.indexOf(a)) : v, r = a ? v.substring(v.indexOf(a) + a.length) : "", a || (a = v ? "#" : "##########"), t && t === n && (i = a.split(n), o = i.pop(), a = i.join("") + n + o, t = ""), s = t, t = /,/.test(n) ? "¤" : ",", s && (a = a.replace(c(s, "g"), t)), p = n, n = ".", p && (a = a.replace(c(p, "g"), n)), d = a.match(/#/g), d = d ? d.length : 0, e.prefix = l || "", e.postfix = r || "", e.pattern = v, e.percentage = f.test(v), e.numericPattern = a || "", e.numericRegex = new RegExp(c(t, null, !0) + "|" + c(n, null, !0), "g"), e.groupTemp = s, e.decTemp = p, e.t = t, e.d = n, e.temp = d
    }

    function s(e) {
        return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
    }

    function c(e, t, n) {
        var i = s(e);
        return n ? i : new RegExp(i || "", t)
    }

    function u(e, t) {
        return t && (t = s(t)), e && (e = s(e)), new RegExp("(?:[#0]+" + e + ")?[#0]+(?:" + t + "[#0]+)?")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var p = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        d = {
            3: "k",
            6: "M",
            9: "G",
            12: "T",
            15: "P",
            18: "E",
            21: "Z",
            24: "Y",
            "-3": "m",
            "-6": "μ",
            "-9": "n",
            "-12": "p",
            "-15": "f",
            "-18": "a",
            "-21": "z",
            "-24": "y"
        },
        f = /%$/,
        h = /^\(r(0[2-9]|[12]\d|3[0-6])\)/i,
        v = /^\(oct\)/i,
        m = /^\(dec\)/i,
        g = /^\(hex\)/i,
        b = /^\(bin\)/i,
        y = /^\(rom\)/i,
        w = /^(\(rom\)|\(bin\)|\(hex\)|\(dec\)|\(oct\)|\(r(0[2-9]|[12]\d|3[0-6])\))/i,
        x = function() {
            function e(t, i, o, a, l) {
                n(this, e), this.localeInfo = t, this.pattern = i, this.thousandDelimiter = o || t.qThousandSep || ",", this.decimalDelimiter = a || t.qDecimalSep || ".", this.type = l || "numeric", this.prepare()
            }
            return p(e, [{
                key: "clone",
                value: function() {
                    var t = new e(this.localeInfo, this.pattern, this.thousandDelimiter, this.decimalDelimiter, this.type);
                    return t.subtype = this.subtype, t
                }
            }, {
                key: "format",
                value: function(e, t, n, i) {
                    return this.prepare(t, n, i), this.formatValue(e)
                }
            }, {
                key: "prepare",
                value: function(e, t, n) {
                    var i, o;
                    return "undefined" == typeof e && (e = this.pattern), "undefined" == typeof t && (t = this.thousandDelimiter), "undefined" == typeof n && (n = this.decimalDelimiter), e ? (this._prepared = {
                        positive: {
                            d: n,
                            t: t,
                            abbreviate: !1,
                            isFunctional: !1,
                            prefix: "",
                            postfix: ""
                        },
                        negative: {
                            d: n,
                            t: t,
                            abbreviate: !1,
                            isFunctional: !1,
                            prefix: "",
                            postfix: ""
                        }
                    }, i = this._prepared, e = e.split(";"), i.positive.pattern = e[0], i.negative.pattern = e[1], w.test(e[0]) && (i.positive.isFunctional = !0), e[1] ? w.test(e[1]) && (i.negative.isFunctional = !0) : i.negative = !1, o = i.positive.isFunctional && (!i.negative || i.negative && i.negative.isFunctional), void(o || (r(i.positive, t, n), i.negative && r(i.negative, t, n)))) : void(this._prepared = {
                        pattern: !1
                    })
                }
            }, {
                key: "formatValue",
                value: function(e) {
                    var t = arguments.length <= 1 || void 0 === arguments[1] ? d : arguments[1],
                        n = void 0,
                        o = void 0,
                        l = void 0,
                        r = void 0,
                        s = void 0,
                        c = void 0,
                        u = void 0,
                        p = void 0,
                        f = void 0,
                        h = this._prepared,
                        v = "",
                        m = "";
                    if (isNaN(e)) return e;
                    if (h.pattern === !1) return e.toString();
                    if (0 > e && h.negative ? (h = h.negative, e = -e) : h = h.positive, s = h.d, c = h.t, h.isFunctional) e = a(e, h.pattern, s);
                    else {
                        if (h.percentage && (e *= 100), h.abbreviate && (o = Number(Number(e).toExponential().split("e")[1]), o -= o % 3, o in t && (v = t[o], e /= Math.pow(10, o))), l = Math.abs(e), n = h.temp, p = h.numericPattern, f = p.split(s)[1], "I" === this.type && (e = Math.round(e)), r = e, f || "#" !== p.slice(-1)[0])
                            if (l >= 1e15 || l > 0 && 1e-14 >= l) e = l ? l.toExponential(15).replace(/\.?0+(?=e)/, "") : "0";
                            else {
                                var g = Number(e.toFixed(Math.min(20, f ? f.length : 0)).split(".")[0]),
                                    b = p.split(s)[0];
                                if (b += s, e = i(b, g) || "0", f) {
                                    var y = Math.max(0, Math.min(14, f.length)),
                                        w = f.replace(/#+$/, "").length,
                                        x = (l % 1).toFixed(y).slice(2).replace(/0+$/, "");
                                    for (u = x.length; w > u; u++) x += "0";
                                    x && (e += s + x)
                                } else 0 === g && (r = 0)
                            }
                        else if (l >= Math.pow(10, n) || 1 > l || 1e-4 > l) 0 === e ? e = "0" : 1e-4 > l || l >= 1e20 ? (e = r.toExponential(Math.max(1, Math.min(14, n)) - 1), e = e.replace(/\.?0+(?=e)/, ""), m = "") : (e = e.toPrecision(Math.max(1, Math.min(14, n))), e.indexOf(".") >= 0 && (e = e.replace(e.indexOf("e") < 0 ? /0+$/ : /\.?0+(?=e)/, ""), e = e.replace(".", s)));
                        else {
                            for (p += s, n = Math.max(0, Math.min(20, n - Math.ceil(Math.log(l) / Math.log(10)))), u = 0; n > u; u++) p += "#";
                            e = i(p, e)
                        }
                        e = e.replace(h.numericRegex, function(e) {
                            return e === c ? h.groupTemp : e === s ? h.decTemp : ""
                        }), 0 > r && !/^\-/.test(e) && (e = "-" + e)
                    }
                    return h.prefix + e + m + v + h.postfix
                }
            }]), e
        }();
    t["default"] = x, e.exports = t["default"]
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function o(e, t) {
        if (e && t) {
            var n = e.qDecimalSep,
                i = e.qThousandSep;
            return new t(e, h, i, n, "U")
        }
        return void 0
    }

    function a(e, t, n) {
        var i = n.options;
        (i && i.isZoomed && v !== t.qInfo.qId || i && !i.isZoomed && v === t.qInfo.qId) && (c["default"].unmountComponentAtNode(e[0]), v = i.isZoomed ? t.qInfo.qId : void 0)
    }

    function l(e) {
        var t = e.qlik,
            n = e.Routing,
            i = e.DragDropService,
            l = e.LoadedPromise,
            u = void 0,
            d = void 0;
        return function(e, v) {
            var m = this;
            if (!d && (d = m.backendApi && m.backendApi.localeInfo, !d)) try {
                var g = t.currApp();
                g && (d = g.model.layout.qLocaleInfo)
            } catch (b) {}
            u || (u = o(d, f["default"]));
            var y = {
                    isInEditMode: m.inEditState && m.inEditState.bind(m),
                    isInAnalysisMode: m.inAnalysisState && m.inAnalysisState.bind(m)
                },
                w = t.Promise || window.Promise;
            return w.all([l, new w(function(o, l) {
                a(e, v, m), s.render(c["default"].createElement(p["default"], {
                    kpis: v.qHyperCube,
                    options: r({}, v.qInfo, v.options, {
                        numberFormatter: u,
                        DEFAULT_AUTO_FORMAT: h
                    }),
                    services: {
                        Routing: n,
                        State: y,
                        Qlik: t,
                        DragDropService: i,
                        QlikComponent: m,
                        PrintResolver: o
                    },
                    element: e[0]
                }), e[0])
            })])
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
        }
        return e
    };
    t["default"] = l;
    var s = n(1),
        c = i(s),
        u = n(17),
        p = i(u),
        d = n(15),
        f = i(d),
        h = "0A",
        v = void 0;
    e.exports = t["default"]
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var l = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        r = function(e, t, n) {
            for (var i = !0; i;) {
                var o = e,
                    a = t,
                    l = n;
                i = !1, null === o && (o = Function.prototype);
                var r = Object.getOwnPropertyDescriptor(o, a);
                if (void 0 !== r) {
                    if ("value" in r) return r.value;
                    var s = r.get;
                    return void 0 === s ? void 0 : s.call(l)
                }
                var c = Object.getPrototypeOf(o);
                if (null === c) return void 0;
                e = c, t = a, n = l, i = !0, r = c = void 0
            }
        },
        s = n(1),
        c = i(s),
        u = n(21),
        p = i(u),
        d = n(2),
        f = n(18),
        h = i(f),
        v = n(4),
        m = i(v),
        g = function(e) {
            function t(e) {
                o(this, t), r(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e), this.state = {
                    is_show: !1,
                    size: e.options.size,
                    clientWidth: e.element.clientWidth,
                    clientHeight: e.element.clientHeight,
                    overflow: null,
                    valueFontStyleIndex: null
                }, this.componentReady = this.componentReady.bind(this), this.kpiItemResizeHandler = this.kpiItemResizeHandler.bind(this)
            }
            return a(t, e), l(t, [{
                key: "componentDidMount",
                value: function() {
                    var e = this,
                        t = this.isPrinting(),
                        n = t ? 1 : 50,
                        i = t ? 10 : 1e4;
                    setTimeout(function() {
                        e.checkRequiredSize()
                    }, n), setTimeout(function() {
                        e.componentReady()
                    }, i)
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    this.checkRequiredSize()
                }
            }, {
                key: "componentWillReceiveProps",
                value: function(e) {
                    this.restoreSize(e)
                }
            }, {
                key: "componentReady",
                value: function() {
                    this.setState({
                        is_show: !0
                    }), this.props.services.PrintResolver && this.props.services.PrintResolver()
                }
            }, {
                key: "isPrinting",
                value: function() {
                    return this.props.services.QlikComponent.backendApi.isSnapshot && this.props.services.Qlik.navigation && !this.props.services.Qlik.navigation.inClient
                }
            }, {
                key: "restoreSize",
                value: function(e) {
                    var t = e || this.props,
                        n = t.element.clientWidth,
                        i = t.element.clientHeight,
                        o = t.options.size;
                    this.setState({
                        is_show: !0,
                        size: o,
                        overflow: null,
                        clientWidth: n,
                        clientHeight: i,
                        valueFontStyleIndex: null
                    })
                }
            }, {
                key: "kpiItemResizeHandler",
                value: function(e) {
                    if (e || this.state.is_show) {
                        if (e && this.props.options.autoSize) {
                            var t = this.state.size,
                                n = d.getSizeIndex(t);
                            n > 0 ? this.setState({
                                size: d.SIZE_OPTIONS[n - 1].value
                            }) : this.state.valueFontStyleIndex ? this.setState({
                                valueFontStyleIndex: this.state.valueFontStyleIndex - 1
                            }) : 0 !== this.state.valueFontStyleIndex && this.setState({
                                valueFontStyleIndex: d.FONT_SIZE_OPTIONS.length - 1
                            })
                        }
                    } else this.componentReady()
                }
            }, {
                key: "checkRequiredSize",
                value: function() {
                    var e = this.props.element,
                        t = .95 * e.scrollWidth,
                        n = .95 * e.scrollHeight;
                    if (this.props.options.autoSize) {
                        var i = this.state.size,
                            o = this.props.element.clientWidth,
                            a = this.props.element.clientHeight,
                            l = this.state.clientWidth,
                            r = this.state.clientHeight,
                            s = 0;
                        if (e.clientHeight == e.scrollHeight && this.state.size == this.props.options.size && !this.state.overflow) return;
                        if (this.refs["child-0"] && (s = c["default"].findDOMNode(this.refs["child-0"]).clientHeight), e && (e.clientHeight < n || s && e.clientHeight < s || (l != e.clientWidth || r != e.clientHeight) && i != this.props.options.size))
                            if (e.clientHeight < n || e.clientHeight < s || e.clientWidth < t) {
                                if (this.state.size == d.SIZE_OPTIONS[0].value && "auto" === this.state.overflow) return;
                                var u = d.getSizeIndex(i);
                                u > 0 ? this.setState({
                                    size: d.SIZE_OPTIONS[u - 1].value,
                                    clientWidth: o,
                                    clientHeight: a,
                                    prevClientWidth: this.state.clientWidth,
                                    prevClientHeight: this.state.clientHeight
                                }) : 0 == u && (0 !== this.state.valueFontStyleIndex ? this.kpiItemResizeHandler(!0) : "auto" !== this.state.overflow && this.setState({
                                    overflow: "auto"
                                }))
                            } else(this.state.prevClientWidth > this.state.clientWidth || this.state.prevClientHeight > this.state.clientHeight) && this.restoreSize()
                    } else "auto" !== this.state.overflow && (e.clientHeight < n || e.clientWidth < t) && this.setState({
                        overflow: "auto"
                    })
                }
            }, {
                key: "renderKpis",
                value: function(e, t, n) {
                    var i = this,
                        o = this.props.element,
                        a = this.props.options.numberFormatter,
                        l = this.props.options.labelOrientation,
                        r = this.props.services,
                        s = this.state.is_show,
                        u = this.props.options,
                        p = this.state.size,
                        f = d.getSizeIndex(p),
                        v = d.getSizeIndex(u.size),
                        g = 0; - 1 !== v && -1 !== f && (g = v - f);
                    var b = e.qDimensionInfo.length,
                        y = e.qMeasureInfo,
                        w = e.qDataPages[0].qMatrix.length > 0 && e.qDataPages[0].qMatrix[t],
                        x = b > 0 && w[0].qText,
                        q = Math.ceil(y.length / n);
                    return y.map(function(e, n) {
                        var p = b + n,
                            f = e.ovParams && e.size !== d.DEFAULT_SIZE ? e.size : u.size;
                        if (g > 0) {
                            var v = d.getSizeIndex(f);
                            v = Math.max(0, u.autoSize && g > 0 ? v - g + 1 : v), f = d.SIZE_OPTIONS[v].value
                        }
                        if (!(p >= w.length)) {
                            var O = w[p].qAttrExps && w[p].qAttrExps.qValues.length,
                                k = void 0;
                            O && (k = w[p].qAttrExps.qValues[m["default"].overridedLabel.index].qText);
                            var S = {
                                label: e.ovParams && k ? k : e.qFallbackTitle,
                                value: "",
                                measureIndex: n,
                                numericValue: null,
                                hideLabel: e.hideLabel,
                                hideValue: e.hideValue,
                                labelColor: e.labelColor,
                                valueColor: e.valueColor,
                                valueIcon: e.valueIcon,
                                iconPosition: e.iconPosition,
                                iconOrder: e.iconOrder,
                                iconSize: e.iconSize,
                                ovParams: e.ovParams,
                                size: f,
                                labelOrder: e.ovParams ? e.labelOrder : u.labelOrder,
                                labelOrientation: e.ovParams ? e.labelOrientation : l,
                                fontStyles: {},
                                kpiLink: e.kpiLink,
                                useLink: e.useLink,
                                textAlignment: e.textAlignment,
                                infographic: e.infographic,
                                embeddedItem: e.embeddedItem,
                                mainContainerElement: o,
                                kpisRows: q,
                                isShow: s
                            };
                            S.onClick = i.onKPIClick.bind(i, S);
                            var I = e.fontStyles && e.fontStyles.split(",");
                            if (I && I.forEach(function(e) {
                                    S.fontStyles[e] = e
                                }), i.state.valueFontStyleIndex >= 0 && i.state.valueFontStyleIndex < d.FONT_SIZE_OPTIONS.length && (S.fontStyles.fontSize = d.FONT_SIZE_OPTIONS[i.state.valueFontStyleIndex]), p < w.length && (S.value = w[p].qText, S.numericValue = w[p].qNum, e.qIsAutoFormat && e.autoFormatTemplate && e.autoFormatTemplate.length > 0 && a)) {
                                var _ = w[p].qNum;
                                !isNaN(_) && isFinite(_) && (e.autoFormatTemplate ? S.value = a.format(_, e.autoFormatTemplate) : S.value = a.format(_, u.DEFAULT_AUTO_FORMAT))
                            }
                            if (!e.groupByDimension || e.groupByDimension && e.groupByDimensionValue === x) {
                                var D = t * (b + y.length) + n;
                                return c["default"].createElement(h["default"], {
                                    ref: "child-" + D,
                                    index: D,
                                    key: e.cId,
                                    item: S,
                                    options: u,
                                    services: r,
                                    onNeedResize: i.kpiItemResizeHandler
                                })
                            }
                            return null
                        }
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this,
                        t = this.props.kpis,
                        n = this.props.options,
                        i = n.qId,
                        o = n.dimLabelOrientation,
                        a = n.dimLabelSize,
                        l = n.dimHideLabels,
                        r = n.dimCenteredLabels,
                        s = n.dimensionsOrientation,
                        u = n.dimHideBorders,
                        f = n.dimHideInternalBorders,
                        h = n.dimShowAs,
                        v = void 0 === h ? "segment" : h,
                        m = n.dimDivideBy,
                        g = void 0 === m ? "auto" : m,
                        b = n.divideBy,
                        y = n.backgroundColor,
                        w = n.verticalAlign,
                        x = void 0 === w ? "top-aligned-items" : w,
                        q = n.styles,
                        O = void 0 === q ? "" : q,
                        k = void 0;
                    t.qMeasureInfo.length > 0 && t.qDataPages.length > 0 && ! function() {
                        "auto" === b && (b = d.DIVIDE_BY[Math.min(10, t.qDataPages[0].qMatrix[0].length - t.qDimensionInfo.length)]);
                        var n = Math.max(1, d.DIVIDE_BY.indexOf(b));
                        t.qDimensionInfo.length > 0 ? ! function() {
                            var i = 0;
                            "auto" === g && (g = d.DIVIDE_BY[Math.min(10, t.qDimensionInfo[i].qCardinal)]);
                            var p = "card" === v ? g + " stackable cards" : "segments",
                                h = "";
                            r && (h = "center aligned");
                            var m = {},
                                y = {};
                            f && (y.border = "0"), u && (m.border = "0", m.boxShadow = "none", y.boxShadow = "none", "card" === v && (y.border = "0")), k = c["default"].createElement("div", {
                                className: "" + x
                            }, c["default"].createElement("div", {
                                className: "ui " + s + " " + p,
                                style: m
                            }, t.qDataPages[0].qMatrix.map(function(r, s) {
                                var u = r[i].qText,
                                    p = r[i].qElemNumber,
                                    d = e.renderKpis(t, s, n);
                                return c["default"].createElement("div", {
                                    className: "ui " + v,
                                    style: y
                                }, l ? null : c["default"].createElement("a", {
                                    className: "ui " + a + " " + o + " " + h + " label",
                                    onClick: e.onDimensionLabelClick.bind(e, i, p)
                                }, u), c["default"].createElement("div", {
                                    ref: "statistics",
                                    className: "ui " + b + " statistics"
                                }, d))
                            })))
                        }() : k = c["default"].createElement("div", {
                            className: "" + x
                        }, c["default"].createElement("div", {
                            ref: "statistics",
                            className: "ui " + b + " statistics"
                        }, e.renderKpis(t, 0, n)))
                    }();
                    var S = {};
                    return y && (S.backgroundColor = y), this.state.overflow && (S.overflow = this.state.overflow, S.WebkitOverflowScrolling = "touch"), this.state.is_show || (S.visibility = "hidden"), c["default"].createElement(p["default"], {
                        namespace: "css-" + i,
                        stylesheet: O,
                        style: {
                            height: "100%"
                        }
                    }, c["default"].createElement("div", {
                        className: "qv-object-qsstatistic",
                        style: S
                    }, k))
                }
            }, {
                key: "onKPIClick",
                value: function(e) {
                    var t = this.props.services,
                        n = this.props.services.State && !this.props.services.State.isInEditMode();
                    if (e.useLink && n) {
                        var i = void 0;
                        i = "string" == typeof e.kpiLink ? e.kpiLink : e.kpiLink && e.kpiLink.id, i && t.Qlik.navigation.gotoSheet(i)
                    }
                }
            }, {
                key: "onDimensionLabelClick",
                value: function(e, t) {
                    this.props.services && this.props.services.QlikComponent && this.props.services.QlikComponent.selectValues(e, [t], !0)
                }
            }]), t
        }(s.Component);
    t["default"] = g, e.exports = t["default"]
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var l = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        r = function(e, t, n) {
            for (var i = !0; i;) {
                var o = e,
                    a = t,
                    l = n;
                i = !1, null === o && (o = Function.prototype);
                var r = Object.getOwnPropertyDescriptor(o, a);
                if (void 0 !== r) {
                    if ("value" in r) return r.value;
                    var s = r.get;
                    return void 0 === s ? void 0 : s.call(l)
                }
                var c = Object.getPrototypeOf(o);
                if (null === c) return void 0;
                e = c, t = a, n = l, i = !0, r = c = void 0
            }
        },
        s = n(1),
        c = i(s),
        u = n(2),
        p = n(5),
        d = (i(p), n(7)),
        f = i(d),
        h = function(e) {
            function t(e) {
                o(this, t), r(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e)
            }
            return a(t, e), l(t, [{
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.value,
                        n = e.valueIcon,
                        i = e.iconSize,
                        o = e.infographic;
                    if (o) {
                        var a = [];
                        if (!isNaN(t) && isFinite(t)) {
                            t = Math.min(1e3, t);
                            for (var l = 0; t > l; ++l) a.push(c["default"].createElement("i", {
                                key: l,
                                className: n + " " + i
                            }))
                        }
                        return c["default"].createElement("span", null, a)
                    }
                    return c["default"].createElement("i", {
                        className: n + " " + i
                    })
                }
            }]), t
        }(s.Component),
        v = function(e) {
            function t(e) {
                o(this, t), r(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e)
            }
            return a(t, e), l(t, [{
                key: "componentDidMount",
                value: function() {
                    var e = this;
                    setTimeout(function() {
                        e.checkRequiredSize()
                    }, 100)
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    this.checkRequiredSize()
                }
            }, {
                key: "checkRequiredSize",
                value: function() {
                    if (this.props.onNeedResize) {
                        var e = this.props.item.hideValue;
                        if (e) return this.props.onNeedResize(!1);
                        var t = c["default"].findDOMNode(this.refs.value);
                        if (t && t.firstChild) {
                            var n = t.firstChild,
                                i = $(n).width();
                            i > t.clientWidth ? this.props.onNeedResize(!0) : this.props.onNeedResize(!1)
                        }
                    }
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props.index,
                        t = this.props.services,
                        n = this.props.item,
                        i = n.hideLabel,
                        o = n.hideValue,
                        a = n.labelOrientation,
                        l = void 0 === a ? "" : a,
                        r = n.labelOrder,
                        s = n.iconOrder,
                        p = n.labelColor,
                        d = n.value,
                        v = n.measureIndex,
                        m = n.numericValue,
                        g = n.valueColor,
                        b = void 0 === g ? "" : g,
                        y = n.valueIcon,
                        w = n.iconSize,
                        x = void 0 === w ? "" : w,
                        q = n.size,
                        O = void 0 === q ? "" : q,
                        k = n.fontStyles,
                        S = n.onClick,
                        I = n.textAlignment,
                        _ = void 0 === I ? "center" : I,
                        D = n.infographic,
                        E = n.embeddedItem,
                        C = n.mainContainerElement,
                        P = n.kpisRows,
                        j = n.isShow,
                        T = {
                            padding: "0px 5px",
                            textAlign: _
                        },
                        z = {
                            padding: "0px 5px",
                            textAlign: _,
                            color: b
                        };
                    p && (T.color = p), k.bold && (z.fontWeight = "bold"), k.italic && (z.fontStyle = "italic"), k.underline && (z.textDecoration = "underline"), k.fontSize && (z.fontSize = k.fontSize);
                    var V = "ui " + l + " " + O + " statistic";
                    V = V.split(" ").filter(function(e) {
                        return e.trim().length > 0
                    }).join(" ");
                    var L = "first" === s,
                        R = i ? null : c["default"].createElement("div", {
                            key: "lbl",
                            className: "label",
                            style: T
                        }, L && "label" === this.props.item.iconPosition ? c["default"].createElement(h, {
                            valueIcon: y,
                            iconSize: x,
                            value: m,
                            infographic: D
                        }) : null, this.props.item.label, L || "label" !== this.props.item.iconPosition ? null : c["default"].createElement(h, {
                            valueIcon: y,
                            iconSize: x,
                            value: m,
                            infographic: D
                        })),
                        M = {
                            key: "val",
                            ref: "value",
                            measureIndex: v,
                            embeddedItem: E,
                            mainContainerElement: C,
                            valueStyles: z,
                            services: t,
                            kpisRows: P,
                            isShow: j
                        },
                        F = o ? null : c["default"].createElement(f["default"], M, L && "value" === this.props.item.iconPosition ? c["default"].createElement(h, {
                            valueIcon: y,
                            iconSize: x,
                            value: m,
                            infographic: D
                        }) : null, d, L || "value" !== this.props.item.iconPosition ? null : c["default"].createElement(h, {
                            valueIcon: y,
                            iconSize: x,
                            value: m,
                            infographic: D
                        })),
                        N = [];
                    "first" === r ? (N.push(R), N.push(F)) : (N.push(F), N.push(R));
                    var A = {};
                    S && (A.cursor = "pointer");
                    var H = u.getDivideByValue(this.props.options.divideBy);
                    H && (A.width = H + "%");
                    var B = c["default"].createElement("div", {
                        className: "statistic statistic-" + (e + 1),
                        style: A,
                        onClick: S
                    }, c["default"].createElement("div", {
                        className: "ui one " + O + " statistics"
                    }, c["default"].createElement("div", {
                        className: V
                    }, N)));
                    return B
                }
            }]), t
        }(s.Component);
    t["default"] = v, e.exports = t["default"]
}, function(e, t) {
    function n() {
        c = !1, l.length ? s = l.concat(s) : u = -1, s.length && i()
    }

    function i() {
        if (!c) {
            var e = setTimeout(n);
            c = !0;
            for (var t = s.length; t;) {
                for (l = s, s = []; ++u < t;) l[u].run();
                u = -1, t = s.length
            }
            l = null, c = !1, clearTimeout(e)
        }
    }

    function o(e, t) {
        this.fun = e, this.array = t
    }

    function a() {}
    var l, r = e.exports = {},
        s = [],
        c = !1,
        u = -1;
    r.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        s.push(new o(e, t)), 1 !== s.length || c || setTimeout(i, 0)
    }, o.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = a, r.addListener = a, r.once = a, r.off = a, r.removeListener = a, r.removeAllListeners = a, r.emit = a, r.binding = function(e) {
        throw new Error("process.binding is not supported")
    }, r.cwd = function() {
        return "/"
    }, r.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }, r.umask = function() {
        return 0
    }
}, function(e, t, n) {
    (function(t) {
        ! function(n) {
            function i() {}

            function o(e, t) {
                return function() {
                    e.apply(t, arguments)
                }
            }

            function a(e) {
                if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
                if ("function" != typeof e) throw new TypeError("not a function");
                this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], p(e, this)
            }

            function l(e, t) {
                for (; 3 === e._state;) e = e._value;
                return 0 === e._state ? void e._deferreds.push(t) : (e._handled = !0, void a._immediateFn(function() {
                    var n = 1 === e._state ? t.onFulfilled : t.onRejected;
                    if (null === n) return void(1 === e._state ? r : s)(t.promise, e._value);
                    var i;
                    try {
                        i = n(e._value)
                    } catch (o) {
                        return void s(t.promise, o)
                    }
                    r(t.promise, i)
                }))
            }

            function r(e, t) {
                try {
                    if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
                    if (t && ("object" == typeof t || "function" == typeof t)) {
                        var n = t.then;
                        if (t instanceof a) return e._state = 3, e._value = t, void c(e);
                        if ("function" == typeof n) return void p(o(n, t), e)
                    }
                    e._state = 1, e._value = t, c(e)
                } catch (i) {
                    s(e, i)
                }
            }

            function s(e, t) {
                e._state = 2, e._value = t, c(e)
            }

            function c(e) {
                2 === e._state && 0 === e._deferreds.length && a._immediateFn(function() {
                    e._handled || a._unhandledRejectionFn(e._value)
                });
                for (var t = 0, n = e._deferreds.length; n > t; t++) l(e, e._deferreds[t]);
                e._deferreds = null
            }

            function u(e, t, n) {
                this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n
            }

            function p(e, t) {
                var n = !1;
                try {
                    e(function(e) {
                        n || (n = !0, r(t, e))
                    }, function(e) {
                        n || (n = !0, s(t, e))
                    })
                } catch (i) {
                    if (n) return;
                    n = !0, s(t, i)
                }
            }
            var d = setTimeout;
            a.prototype["catch"] = function(e) {
                return this.then(null, e)
            }, a.prototype.then = function(e, t) {
                var n = new this.constructor(i);
                return l(this, new u(e, t, n)), n
            }, a.all = function(e) {
                var t = Array.prototype.slice.call(e);
                return new a(function(e, n) {
                    function i(a, l) {
                        try {
                            if (l && ("object" == typeof l || "function" == typeof l)) {
                                var r = l.then;
                                if ("function" == typeof r) return void r.call(l, function(e) {
                                    i(a, e)
                                }, n)
                            }
                            t[a] = l, 0 === --o && e(t)
                        } catch (s) {
                            n(s)
                        }
                    }
                    if (0 === t.length) return e([]);
                    for (var o = t.length, a = 0; a < t.length; a++) i(a, t[a])
                })
            }, a.resolve = function(e) {
                return e && "object" == typeof e && e.constructor === a ? e : new a(function(t) {
                    t(e)
                })
            }, a.reject = function(e) {
                return new a(function(t, n) {
                    n(e)
                })
            }, a.race = function(e) {
                return new a(function(t, n) {
                    for (var i = 0, o = e.length; o > i; i++) e[i].then(t, n)
                })
            }, a._immediateFn = "function" == typeof t && function(e) {
                t(e)
            } || function(e) {
                d(e, 0)
            }, a._unhandledRejectionFn = function(e) {
                "undefined" != typeof console && console
            }, a._setImmediateFn = function(e) {
                a._immediateFn = e
            }, a._setUnhandledRejectionFn = function(e) {
                a._unhandledRejectionFn = e
            }, "undefined" != typeof e && e.exports ? e.exports = a : n.Promise || (n.Promise = a)
        }(this)
    }).call(t, n(3).setImmediate)
}, function(e, t, n) {
    var i = n(1),
        o = i.__spread,
        a = 0,
        l = i.createClass({
            displayName: "InlineCss",
            propTypes: {
                namespace: i.PropTypes.string,
                componentName: i.PropTypes.string,
                stylesheet: i.PropTypes.string.isRequired,
                className: i.PropTypes.string,
                wrapper: i.PropTypes.string
            },
            _transformSheet: function(e, t, n) {
                return e.replace(/}\s*/gi, "\n}\n").replace(/(^|{|}|;|,)\s*([&a-z0-9\-_\.:#\(\),>*\s]+)\s*(\{)/gi, function(e) {
                    return e.replace(new RegExp(t, "g"), "#" + n)
                })
            },
            render: function() {
                var e = this.props.namespace || "InlineCss-" + a++,
                    t = this.props.componentName || "&",
                    n = this._transformSheet(this.props.stylesheet, t, e),
                    l = this.props.wrapper || "div",
                    r = o({}, this.props, {
                        namespace: void 0,
                        componentName: void 0,
                        stylesheet: void 0,
                        wrapper: void 0,
                        id: e
                    });
                return i.createElement(l, r, this.props.children, i.createElement("style", {
                    scoped: !0,
                    dangerouslySetInnerHTML: {
                        __html: n
                    }
                }))
            }
        });
    e.exports = l
}]);
