/*! For license information please see main.js.LICENSE.txt */
;(() => {
    'use strict'
    var t = {
            551: (t, e, n) => {
                var i = n(540),
                    r = n(982)

                function o(t) {
                    for (
                        var e = 'https://reactjs.org/docs/error-decoder.html?invariant=' + t, n = 1;
                        n < arguments.length;
                        n++
                    )
                        e += '&args[]=' + encodeURIComponent(arguments[n])
                    return (
                        'Minified React error #' +
                        t +
                        '; visit ' +
                        e +
                        ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
                    )
                }

                var a = new Set(),
                    s = {}

                function l(t, e) {
                    c(t, e), c(t + 'Capture', e)
                }

                function c(t, e) {
                    for (s[t] = e, t = 0; t < e.length; t++) a.add(e[t])
                }

                var u = !(
                        'undefined' == typeof window ||
                        void 0 === window.document ||
                        void 0 === window.document.createElement
                    ),
                    h = Object.prototype.hasOwnProperty,
                    d =
                        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
                    f = {},
                    p = {}

                function g(t, e, n, i, r, o, a) {
                    ;(this.acceptsBooleans = 2 === e || 3 === e || 4 === e),
                        (this.attributeName = i),
                        (this.attributeNamespace = r),
                        (this.mustUseProperty = n),
                        (this.propertyName = t),
                        (this.type = e),
                        (this.sanitizeURL = o),
                        (this.removeEmptyString = a)
                }

                var m = {}
                'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
                    .split(' ')
                    .forEach(function (t) {
                        m[t] = new g(t, 0, !1, t, null, !1, !1)
                    }),
                    [
                        ['acceptCharset', 'accept-charset'],
                        ['className', 'class'],
                        ['htmlFor', 'for'],
                        ['httpEquiv', 'http-equiv']
                    ].forEach(function (t) {
                        var e = t[0]
                        m[e] = new g(e, 1, !1, t[1], null, !1, !1)
                    }),
                    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (t) {
                        m[t] = new g(t, 2, !1, t.toLowerCase(), null, !1, !1)
                    }),
                    ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(
                        function (t) {
                            m[t] = new g(t, 2, !1, t, null, !1, !1)
                        }
                    ),
                    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
                        .split(' ')
                        .forEach(function (t) {
                            m[t] = new g(t, 3, !1, t.toLowerCase(), null, !1, !1)
                        }),
                    ['checked', 'multiple', 'muted', 'selected'].forEach(function (t) {
                        m[t] = new g(t, 3, !0, t, null, !1, !1)
                    }),
                    ['capture', 'download'].forEach(function (t) {
                        m[t] = new g(t, 4, !1, t, null, !1, !1)
                    }),
                    ['cols', 'rows', 'size', 'span'].forEach(function (t) {
                        m[t] = new g(t, 6, !1, t, null, !1, !1)
                    }),
                    ['rowSpan', 'start'].forEach(function (t) {
                        m[t] = new g(t, 5, !1, t.toLowerCase(), null, !1, !1)
                    })
                var b = /[\-:]([a-z])/g

                function y(t) {
                    return t[1].toUpperCase()
                }

                function v(t, e, n, i) {
                    var r = m.hasOwnProperty(e) ? m[e] : null
                    ;(null !== r
                        ? 0 !== r.type
                        : i ||
                        !(2 < e.length) ||
                        ('o' !== e[0] && 'O' !== e[0]) ||
                        ('n' !== e[1] && 'N' !== e[1])) &&
                    ((function (t, e, n, i) {
                        if (
                            null == e ||
                            (function (t, e, n, i) {
                                if (null !== n && 0 === n.type) return !1
                                switch (typeof e) {
                                    case 'function':
                                    case 'symbol':
                                        return !0
                                    case 'boolean':
                                        return (
                                            !i &&
                                            (null !== n
                                                ? !n.acceptsBooleans
                                                : 'data-' !== (t = t.toLowerCase().slice(0, 5)) && 'aria-' !== t)
                                        )
                                    default:
                                        return !1
                                }
                            })(t, e, n, i)
                        )
                            return !0
                        if (i) return !1
                        if (null !== n)
                            switch (n.type) {
                                case 3:
                                    return !e
                                case 4:
                                    return !1 === e
                                case 5:
                                    return isNaN(e)
                                case 6:
                                    return isNaN(e) || 1 > e
                            }
                        return !1
                    })(e, n, r, i) && (n = null),
                        i || null === r
                            ? (function (t) {
                            return (
                                !!h.call(p, t) ||
                                (!h.call(f, t) && (d.test(t) ? (p[t] = !0) : ((f[t] = !0), !1)))
                            )
                        })(e) && (null === n ? t.removeAttribute(e) : t.setAttribute(e, '' + n))
                            : r.mustUseProperty
                                ? (t[r.propertyName] = null === n ? 3 !== r.type && '' : n)
                                : ((e = r.attributeName),
                                    (i = r.attributeNamespace),
                                    null === n
                                        ? t.removeAttribute(e)
                                        : ((n = 3 === (r = r.type) || (4 === r && !0 === n) ? '' : '' + n),
                                            i ? t.setAttributeNS(i, e, n) : t.setAttribute(e, n))))
                }

                'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
                    .split(' ')
                    .forEach(function (t) {
                        var e = t.replace(b, y)
                        m[e] = new g(e, 1, !1, t, null, !1, !1)
                    }),
                    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
                        .split(' ')
                        .forEach(function (t) {
                            var e = t.replace(b, y)
                            m[e] = new g(e, 1, !1, t, 'http://www.w3.org/1999/xlink', !1, !1)
                        }),
                    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (t) {
                        var e = t.replace(b, y)
                        m[e] = new g(e, 1, !1, t, 'http://www.w3.org/XML/1998/namespace', !1, !1)
                    }),
                    ['tabIndex', 'crossOrigin'].forEach(function (t) {
                        m[t] = new g(t, 1, !1, t.toLowerCase(), null, !1, !1)
                    }),
                    (m.xlinkHref = new g(
                        'xlinkHref',
                        1,
                        !1,
                        'xlink:href',
                        'http://www.w3.org/1999/xlink',
                        !0,
                        !1
                    )),
                    ['src', 'href', 'action', 'formAction'].forEach(function (t) {
                        m[t] = new g(t, 1, !1, t.toLowerCase(), null, !0, !0)
                    })
                var x = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
                    _ = Symbol.for('react.element'),
                    w = Symbol.for('react.portal'),
                    k = Symbol.for('react.fragment'),
                    S = Symbol.for('react.strict_mode'),
                    M = Symbol.for('react.profiler'),
                    E = Symbol.for('react.provider'),
                    C = Symbol.for('react.context'),
                    P = Symbol.for('react.forward_ref'),
                    L = Symbol.for('react.suspense'),
                    D = Symbol.for('react.suspense_list'),
                    O = Symbol.for('react.memo'),
                    T = Symbol.for('react.lazy')
                Symbol.for('react.scope'), Symbol.for('react.debug_trace_mode')
                var z = Symbol.for('react.offscreen')
                Symbol.for('react.legacy_hidden'),
                    Symbol.for('react.cache'),
                    Symbol.for('react.tracing_marker')
                var R = Symbol.iterator

                function A(t) {
                    return null === t || 'object' != typeof t
                        ? null
                        : 'function' == typeof (t = (R && t[R]) || t['@@iterator'])
                            ? t
                            : null
                }

                var N,
                    I = Object.assign

                function F(t) {
                    if (void 0 === N)
                        try {
                            throw Error()
                        } catch (t) {
                            var e = t.stack.trim().match(/\n( *(at )?)/)
                            N = (e && e[1]) || ''
                        }
                    return '\n' + N + t
                }

                var V = !1

                function B(t, e) {
                    if (!t || V) return ''
                    V = !0
                    var n = Error.prepareStackTrace
                    Error.prepareStackTrace = void 0
                    try {
                        if (e)
                            if (
                                ((e = function () {
                                    throw Error()
                                }),
                                    Object.defineProperty(e.prototype, 'props', {
                                        set: function () {
                                            throw Error()
                                        }
                                    }),
                                'object' == typeof Reflect && Reflect.construct)
                            ) {
                                try {
                                    Reflect.construct(e, [])
                                } catch (t) {
                                    var i = t
                                }
                                Reflect.construct(t, [], e)
                            } else {
                                try {
                                    e.call()
                                } catch (t) {
                                    i = t
                                }
                                t.call(e.prototype)
                            }
                        else {
                            try {
                                throw Error()
                            } catch (t) {
                                i = t
                            }
                            t()
                        }
                    } catch (e) {
                        if (e && i && 'string' == typeof e.stack) {
                            for (
                                var r = e.stack.split('\n'),
                                    o = i.stack.split('\n'),
                                    a = r.length - 1,
                                    s = o.length - 1;
                                1 <= a && 0 <= s && r[a] !== o[s];
                            )
                                s--
                            for (; 1 <= a && 0 <= s; a--, s--)
                                if (r[a] !== o[s]) {
                                    if (1 !== a || 1 !== s)
                                        do {
                                            if ((a--, 0 > --s || r[a] !== o[s])) {
                                                var l = '\n' + r[a].replace(' at new ', ' at ')
                                                return (
                                                    t.displayName &&
                                                    l.includes('<anonymous>') &&
                                                    (l = l.replace('<anonymous>', t.displayName)),
                                                        l
                                                )
                                            }
                                        } while (1 <= a && 0 <= s)
                                    break
                                }
                        }
                    } finally {
                        ;(V = !1), (Error.prepareStackTrace = n)
                    }
                    return (t = t ? t.displayName || t.name : '') ? F(t) : ''
                }

                function j(t) {
                    switch (t.tag) {
                        case 5:
                            return F(t.type)
                        case 16:
                            return F('Lazy')
                        case 13:
                            return F('Suspense')
                        case 19:
                            return F('SuspenseList')
                        case 0:
                        case 2:
                        case 15:
                            return B(t.type, !1)
                        case 11:
                            return B(t.type.render, !1)
                        case 1:
                            return B(t.type, !0)
                        default:
                            return ''
                    }
                }

                function W(t) {
                    if (null == t) return null
                    if ('function' == typeof t) return t.displayName || t.name || null
                    if ('string' == typeof t) return t
                    switch (t) {
                        case k:
                            return 'Fragment'
                        case w:
                            return 'Portal'
                        case M:
                            return 'Profiler'
                        case S:
                            return 'StrictMode'
                        case L:
                            return 'Suspense'
                        case D:
                            return 'SuspenseList'
                    }
                    if ('object' == typeof t)
                        switch (t.$$typeof) {
                            case C:
                                return (t.displayName || 'Context') + '.Consumer'
                            case E:
                                return (t._context.displayName || 'Context') + '.Provider'
                            case P:
                                var e = t.render
                                return (
                                    (t = t.displayName) ||
                                    (t =
                                        '' !== (t = e.displayName || e.name || '')
                                            ? 'ForwardRef(' + t + ')'
                                            : 'ForwardRef'),
                                        t
                                )
                            case O:
                                return null !== (e = t.displayName || null) ? e : W(t.type) || 'Memo'
                            case T:
                                ;(e = t._payload), (t = t._init)
                                try {
                                    return W(t(e))
                                } catch (t) {
                                }
                        }
                    return null
                }

                function H(t) {
                    var e = t.type
                    switch (t.tag) {
                        case 24:
                            return 'Cache'
                        case 9:
                            return (e.displayName || 'Context') + '.Consumer'
                        case 10:
                            return (e._context.displayName || 'Context') + '.Provider'
                        case 18:
                            return 'DehydratedFragment'
                        case 11:
                            return (
                                (t = (t = e.render).displayName || t.name || ''),
                                e.displayName || ('' !== t ? 'ForwardRef(' + t + ')' : 'ForwardRef')
                            )
                        case 7:
                            return 'Fragment'
                        case 5:
                            return e
                        case 4:
                            return 'Portal'
                        case 3:
                            return 'Root'
                        case 6:
                            return 'Text'
                        case 16:
                            return W(e)
                        case 8:
                            return e === S ? 'StrictMode' : 'Mode'
                        case 22:
                            return 'Offscreen'
                        case 12:
                            return 'Profiler'
                        case 21:
                            return 'Scope'
                        case 13:
                            return 'Suspense'
                        case 19:
                            return 'SuspenseList'
                        case 25:
                            return 'TracingMarker'
                        case 1:
                        case 0:
                        case 17:
                        case 2:
                        case 14:
                        case 15:
                            if ('function' == typeof e) return e.displayName || e.name || null
                            if ('string' == typeof e) return e
                    }
                    return null
                }

                function $(t) {
                    switch (typeof t) {
                        case 'boolean':
                        case 'number':
                        case 'string':
                        case 'undefined':
                        case 'object':
                            return t
                        default:
                            return ''
                    }
                }

                function U(t) {
                    var e = t.type
                    return (
                        (t = t.nodeName) && 'input' === t.toLowerCase() && ('checkbox' === e || 'radio' === e)
                    )
                }

                function Y(t) {
                    t._valueTracker ||
                    (t._valueTracker = (function (t) {
                        var e = U(t) ? 'checked' : 'value',
                            n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
                            i = '' + t[e]
                        if (
                            !t.hasOwnProperty(e) &&
                            void 0 !== n &&
                            'function' == typeof n.get &&
                            'function' == typeof n.set
                        ) {
                            var r = n.get,
                                o = n.set
                            return (
                                Object.defineProperty(t, e, {
                                    configurable: !0,
                                    get: function () {
                                        return r.call(this)
                                    },
                                    set: function (t) {
                                        ;(i = '' + t), o.call(this, t)
                                    }
                                }),
                                    Object.defineProperty(t, e, {enumerable: n.enumerable}),
                                    {
                                        getValue: function () {
                                            return i
                                        },
                                        setValue: function (t) {
                                            i = '' + t
                                        },
                                        stopTracking: function () {
                                            ;(t._valueTracker = null), delete t[e]
                                        }
                                    }
                            )
                        }
                    })(t))
                }

                function Q(t) {
                    if (!t) return !1
                    var e = t._valueTracker
                    if (!e) return !0
                    var n = e.getValue(),
                        i = ''
                    return (
                        t && (i = U(t) ? (t.checked ? 'true' : 'false') : t.value),
                        (t = i) !== n && (e.setValue(t), !0)
                    )
                }

                function X(t) {
                    if (void 0 === (t = t || ('undefined' != typeof document ? document : void 0)))
                        return null
                    try {
                        return t.activeElement || t.body
                    } catch (e) {
                        return t.body
                    }
                }

                function q(t, e) {
                    var n = e.checked
                    return I({}, e, {
                        defaultChecked: void 0,
                        defaultValue: void 0,
                        value: void 0,
                        checked: null != n ? n : t._wrapperState.initialChecked
                    })
                }

                function K(t, e) {
                    var n = null == e.defaultValue ? '' : e.defaultValue,
                        i = null != e.checked ? e.checked : e.defaultChecked
                    ;(n = $(null != e.value ? e.value : n)),
                        (t._wrapperState = {
                            initialChecked: i,
                            initialValue: n,
                            controlled:
                                'checkbox' === e.type || 'radio' === e.type ? null != e.checked : null != e.value
                        })
                }

                function G(t, e) {
                    null != (e = e.checked) && v(t, 'checked', e, !1)
                }

                function Z(t, e) {
                    G(t, e)
                    var n = $(e.value),
                        i = e.type
                    if (null != n)
                        'number' === i
                            ? ((0 === n && '' === t.value) || t.value != n) && (t.value = '' + n)
                            : t.value !== '' + n && (t.value = '' + n)
                    else if ('submit' === i || 'reset' === i) return void t.removeAttribute('value')
                    e.hasOwnProperty('value')
                        ? tt(t, e.type, n)
                        : e.hasOwnProperty('defaultValue') && tt(t, e.type, $(e.defaultValue)),
                    null == e.checked && null != e.defaultChecked && (t.defaultChecked = !!e.defaultChecked)
                }

                function J(t, e, n) {
                    if (e.hasOwnProperty('value') || e.hasOwnProperty('defaultValue')) {
                        var i = e.type
                        if (!(('submit' !== i && 'reset' !== i) || (void 0 !== e.value && null !== e.value)))
                            return
                                ;
                        (e = '' + t._wrapperState.initialValue),
                        n || e === t.value || (t.value = e),
                            (t.defaultValue = e)
                    }
                    '' !== (n = t.name) && (t.name = ''),
                        (t.defaultChecked = !!t._wrapperState.initialChecked),
                    '' !== n && (t.name = n)
                }

                function tt(t, e, n) {
                    ;('number' === e && X(t.ownerDocument) === t) ||
                    (null == n
                        ? (t.defaultValue = '' + t._wrapperState.initialValue)
                        : t.defaultValue !== '' + n && (t.defaultValue = '' + n))
                }

                var et = Array.isArray

                function nt(t, e, n, i) {
                    if (((t = t.options), e)) {
                        e = {}
                        for (var r = 0; r < n.length; r++) e['$' + n[r]] = !0
                        for (n = 0; n < t.length; n++)
                            (r = e.hasOwnProperty('$' + t[n].value)),
                            t[n].selected !== r && (t[n].selected = r),
                            r && i && (t[n].defaultSelected = !0)
                    } else {
                        for (n = '' + $(n), e = null, r = 0; r < t.length; r++) {
                            if (t[r].value === n)
                                return (t[r].selected = !0), void (i && (t[r].defaultSelected = !0))
                            null !== e || t[r].disabled || (e = t[r])
                        }
                        null !== e && (e.selected = !0)
                    }
                }

                function it(t, e) {
                    if (null != e.dangerouslySetInnerHTML) throw Error(o(91))
                    return I({}, e, {
                        value: void 0,
                        defaultValue: void 0,
                        children: '' + t._wrapperState.initialValue
                    })
                }

                function rt(t, e) {
                    var n = e.value
                    if (null == n) {
                        if (((n = e.children), (e = e.defaultValue), null != n)) {
                            if (null != e) throw Error(o(92))
                            if (et(n)) {
                                if (1 < n.length) throw Error(o(93))
                                n = n[0]
                            }
                            e = n
                        }
                        null == e && (e = ''), (n = e)
                    }
                    t._wrapperState = {initialValue: $(n)}
                }

                function ot(t, e) {
                    var n = $(e.value),
                        i = $(e.defaultValue)
                    null != n &&
                    ((n = '' + n) !== t.value && (t.value = n),
                    null == e.defaultValue && t.defaultValue !== n && (t.defaultValue = n)),
                    null != i && (t.defaultValue = '' + i)
                }

                function at(t) {
                    var e = t.textContent
                    e === t._wrapperState.initialValue && '' !== e && null !== e && (t.value = e)
                }

                function st(t) {
                    switch (t) {
                        case 'svg':
                            return 'http://www.w3.org/2000/svg'
                        case 'math':
                            return 'http://www.w3.org/1998/Math/MathML'
                        default:
                            return 'http://www.w3.org/1999/xhtml'
                    }
                }

                function lt(t, e) {
                    return null == t || 'http://www.w3.org/1999/xhtml' === t
                        ? st(e)
                        : 'http://www.w3.org/2000/svg' === t && 'foreignObject' === e
                            ? 'http://www.w3.org/1999/xhtml'
                            : t
                }

                var ct,
                    ut,
                    ht =
                        ((ut = function (t, e) {
                            if ('http://www.w3.org/2000/svg' !== t.namespaceURI || 'innerHTML' in t)
                                t.innerHTML = e
                            else {
                                for (
                                    (ct = ct || document.createElement('div')).innerHTML =
                                        '<svg>' + e.valueOf().toString() + '</svg>',
                                        e = ct.firstChild;
                                    t.firstChild;
                                )
                                    t.removeChild(t.firstChild)
                                for (; e.firstChild;) t.appendChild(e.firstChild)
                            }
                        }),
                            'undefined' != typeof MSApp && MSApp.execUnsafeLocalFunction
                                ? function (t, e, n, i) {
                                    MSApp.execUnsafeLocalFunction(function () {
                                        return ut(t, e)
                                    })
                                }
                                : ut)

                function dt(t, e) {
                    if (e) {
                        var n = t.firstChild
                        if (n && n === t.lastChild && 3 === n.nodeType) return void (n.nodeValue = e)
                    }
                    t.textContent = e
                }

                var ft = {
                        animationIterationCount: !0,
                        aspectRatio: !0,
                        borderImageOutset: !0,
                        borderImageSlice: !0,
                        borderImageWidth: !0,
                        boxFlex: !0,
                        boxFlexGroup: !0,
                        boxOrdinalGroup: !0,
                        columnCount: !0,
                        columns: !0,
                        flex: !0,
                        flexGrow: !0,
                        flexPositive: !0,
                        flexShrink: !0,
                        flexNegative: !0,
                        flexOrder: !0,
                        gridArea: !0,
                        gridRow: !0,
                        gridRowEnd: !0,
                        gridRowSpan: !0,
                        gridRowStart: !0,
                        gridColumn: !0,
                        gridColumnEnd: !0,
                        gridColumnSpan: !0,
                        gridColumnStart: !0,
                        fontWeight: !0,
                        lineClamp: !0,
                        lineHeight: !0,
                        opacity: !0,
                        order: !0,
                        orphans: !0,
                        tabSize: !0,
                        widows: !0,
                        zIndex: !0,
                        zoom: !0,
                        fillOpacity: !0,
                        floodOpacity: !0,
                        stopOpacity: !0,
                        strokeDasharray: !0,
                        strokeDashoffset: !0,
                        strokeMiterlimit: !0,
                        strokeOpacity: !0,
                        strokeWidth: !0
                    },
                    pt = ['Webkit', 'ms', 'Moz', 'O']

                function gt(t, e, n) {
                    return null == e || 'boolean' == typeof e || '' === e
                        ? ''
                        : n || 'number' != typeof e || 0 === e || (ft.hasOwnProperty(t) && ft[t])
                            ? ('' + e).trim()
                            : e + 'px'
                }

                function mt(t, e) {
                    for (var n in ((t = t.style), e))
                        if (e.hasOwnProperty(n)) {
                            var i = 0 === n.indexOf('--'),
                                r = gt(n, e[n], i)
                            'float' === n && (n = 'cssFloat'), i ? t.setProperty(n, r) : (t[n] = r)
                        }
                }

                Object.keys(ft).forEach(function (t) {
                    pt.forEach(function (e) {
                        ;(e = e + t.charAt(0).toUpperCase() + t.substring(1)), (ft[e] = ft[t])
                    })
                })
                var bt = I(
                    {menuitem: !0},
                    {
                        area: !0,
                        base: !0,
                        br: !0,
                        col: !0,
                        embed: !0,
                        hr: !0,
                        img: !0,
                        input: !0,
                        keygen: !0,
                        link: !0,
                        meta: !0,
                        param: !0,
                        source: !0,
                        track: !0,
                        wbr: !0
                    }
                )

                function yt(t, e) {
                    if (e) {
                        if (bt[t] && (null != e.children || null != e.dangerouslySetInnerHTML))
                            throw Error(o(137, t))
                        if (null != e.dangerouslySetInnerHTML) {
                            if (null != e.children) throw Error(o(60))
                            if (
                                'object' != typeof e.dangerouslySetInnerHTML ||
                                !('__html' in e.dangerouslySetInnerHTML)
                            )
                                throw Error(o(61))
                        }
                        if (null != e.style && 'object' != typeof e.style) throw Error(o(62))
                    }
                }

                function vt(t, e) {
                    if (-1 === t.indexOf('-')) return 'string' == typeof e.is
                    switch (t) {
                        case 'annotation-xml':
                        case 'color-profile':
                        case 'font-face':
                        case 'font-face-src':
                        case 'font-face-uri':
                        case 'font-face-format':
                        case 'font-face-name':
                        case 'missing-glyph':
                            return !1
                        default:
                            return !0
                    }
                }

                var xt = null

                function _t(t) {
                    return (
                        (t = t.target || t.srcElement || window).correspondingUseElement &&
                        (t = t.correspondingUseElement),
                            3 === t.nodeType ? t.parentNode : t
                    )
                }

                var wt = null,
                    kt = null,
                    St = null

                function Mt(t) {
                    if ((t = vr(t))) {
                        if ('function' != typeof wt) throw Error(o(280))
                        var e = t.stateNode
                        e && ((e = _r(e)), wt(t.stateNode, t.type, e))
                    }
                }

                function Et(t) {
                    kt ? (St ? St.push(t) : (St = [t])) : (kt = t)
                }

                function Ct() {
                    if (kt) {
                        var t = kt,
                            e = St
                        if (((St = kt = null), Mt(t), e)) for (t = 0; t < e.length; t++) Mt(e[t])
                    }
                }

                function Pt(t, e) {
                    return t(e)
                }

                function Lt() {
                }

                var Dt = !1

                function Ot(t, e, n) {
                    if (Dt) return t(e, n)
                    Dt = !0
                    try {
                        return Pt(t, e, n)
                    } finally {
                        ;(Dt = !1), (null !== kt || null !== St) && (Lt(), Ct())
                    }
                }

                function Tt(t, e) {
                    var n = t.stateNode
                    if (null === n) return null
                    var i = _r(n)
                    if (null === i) return null
                    n = i[e]
                    t: switch (e) {
                        case 'onClick':
                        case 'onClickCapture':
                        case 'onDoubleClick':
                        case 'onDoubleClickCapture':
                        case 'onMouseDown':
                        case 'onMouseDownCapture':
                        case 'onMouseMove':
                        case 'onMouseMoveCapture':
                        case 'onMouseUp':
                        case 'onMouseUpCapture':
                        case 'onMouseEnter':
                            ;(i = !i.disabled) ||
                        (i = !(
                            'button' === (t = t.type) ||
                            'input' === t ||
                            'select' === t ||
                            'textarea' === t
                        )),
                            (t = !i)
                            break;
                        default:
                            t = !1
                    }
                    if (t) return null
                    if (n && 'function' != typeof n) throw Error(o(231, e, typeof n))
                    return n
                }

                var zt = !1
                if (u)
                    try {
                        var Rt = {}
                        Object.defineProperty(Rt, 'passive', {
                            get: function () {
                                zt = !0
                            }
                        }),
                            window.addEventListener('test', Rt, Rt),
                            window.removeEventListener('test', Rt, Rt)
                    } catch (ut) {
                        zt = !1
                    }

                function At(t, e, n, i, r, o, a, s, l) {
                    var c = Array.prototype.slice.call(arguments, 3)
                    try {
                        e.apply(n, c)
                    } catch (t) {
                        this.onError(t)
                    }
                }

                var Nt = !1,
                    It = null,
                    Ft = !1,
                    Vt = null,
                    Bt = {
                        onError: function (t) {
                            ;(Nt = !0), (It = t)
                        }
                    }

                function jt(t, e, n, i, r, o, a, s, l) {
                    ;(Nt = !1), (It = null), At.apply(Bt, arguments)
                }

                function Wt(t) {
                    var e = t,
                        n = t
                    if (t.alternate) for (; e.return;) e = e.return
                    else {
                        t = e
                        do {
                            0 != (4098 & (e = t).flags) && (n = e.return), (t = e.return)
                        } while (t)
                    }
                    return 3 === e.tag ? n : null
                }

                function Ht(t) {
                    if (13 === t.tag) {
                        var e = t.memoizedState
                        if ((null === e && null !== (t = t.alternate) && (e = t.memoizedState), null !== e))
                            return e.dehydrated
                    }
                    return null
                }

                function $t(t) {
                    if (Wt(t) !== t) throw Error(o(188))
                }

                function Ut(t) {
                    return null !==
                    (t = (function (t) {
                        var e = t.alternate
                        if (!e) {
                            if (null === (e = Wt(t))) throw Error(o(188))
                            return e !== t ? null : t
                        }
                        for (var n = t, i = e; ;) {
                            var r = n.return
                            if (null === r) break
                            var a = r.alternate
                            if (null === a) {
                                if (null !== (i = r.return)) {
                                    n = i
                                    continue
                                }
                                break
                            }
                            if (r.child === a.child) {
                                for (a = r.child; a;) {
                                    if (a === n) return $t(r), t
                                    if (a === i) return $t(r), e
                                    a = a.sibling
                                }
                                throw Error(o(188))
                            }
                            if (n.return !== i.return) (n = r), (i = a)
                            else {
                                for (var s = !1, l = r.child; l;) {
                                    if (l === n) {
                                        ;(s = !0), (n = r), (i = a)
                                        break
                                    }
                                    if (l === i) {
                                        ;(s = !0), (i = r), (n = a)
                                        break
                                    }
                                    l = l.sibling
                                }
                                if (!s) {
                                    for (l = a.child; l;) {
                                        if (l === n) {
                                            ;(s = !0), (n = a), (i = r)
                                            break
                                        }
                                        if (l === i) {
                                            ;(s = !0), (i = a), (n = r)
                                            break
                                        }
                                        l = l.sibling
                                    }
                                    if (!s) throw Error(o(189))
                                }
                            }
                            if (n.alternate !== i) throw Error(o(190))
                        }
                        if (3 !== n.tag) throw Error(o(188))
                        return n.stateNode.current === n ? t : e
                    })(t))
                        ? Yt(t)
                        : null
                }

                function Yt(t) {
                    if (5 === t.tag || 6 === t.tag) return t
                    for (t = t.child; null !== t;) {
                        var e = Yt(t)
                        if (null !== e) return e
                        t = t.sibling
                    }
                    return null
                }

                var Qt = r.unstable_scheduleCallback,
                    Xt = r.unstable_cancelCallback,
                    qt = r.unstable_shouldYield,
                    Kt = r.unstable_requestPaint,
                    Gt = r.unstable_now,
                    Zt = r.unstable_getCurrentPriorityLevel,
                    Jt = r.unstable_ImmediatePriority,
                    te = r.unstable_UserBlockingPriority,
                    ee = r.unstable_NormalPriority,
                    ne = r.unstable_LowPriority,
                    ie = r.unstable_IdlePriority,
                    re = null,
                    oe = null,
                    ae = Math.clz32
                        ? Math.clz32
                        : function (t) {
                            return 0 === (t >>>= 0) ? 32 : (31 - ((se(t) / le) | 0)) | 0
                        },
                    se = Math.log,
                    le = Math.LN2,
                    ce = 64,
                    ue = 4194304

                function he(t) {
                    switch (t & -t) {
                        case 1:
                            return 1
                        case 2:
                            return 2
                        case 4:
                            return 4
                        case 8:
                            return 8
                        case 16:
                            return 16
                        case 32:
                            return 32
                        case 64:
                        case 128:
                        case 256:
                        case 512:
                        case 1024:
                        case 2048:
                        case 4096:
                        case 8192:
                        case 16384:
                        case 32768:
                        case 65536:
                        case 131072:
                        case 262144:
                        case 524288:
                        case 1048576:
                        case 2097152:
                            return 4194240 & t
                        case 4194304:
                        case 8388608:
                        case 16777216:
                        case 33554432:
                        case 67108864:
                            return 130023424 & t
                        case 134217728:
                            return 134217728
                        case 268435456:
                            return 268435456
                        case 536870912:
                            return 536870912
                        case 1073741824:
                            return 1073741824
                        default:
                            return t
                    }
                }

                function de(t, e) {
                    var n = t.pendingLanes
                    if (0 === n) return 0
                    var i = 0,
                        r = t.suspendedLanes,
                        o = t.pingedLanes,
                        a = 268435455 & n
                    if (0 !== a) {
                        var s = a & ~r
                        0 !== s ? (i = he(s)) : 0 != (o &= a) && (i = he(o))
                    } else 0 != (a = n & ~r) ? (i = he(a)) : 0 !== o && (i = he(o))
                    if (0 === i) return 0
                    if (
                        0 !== e &&
                        e !== i &&
                        0 == (e & r) &&
                        ((r = i & -i) >= (o = e & -e) || (16 === r && 0 != (4194240 & o)))
                    )
                        return e
                    if ((0 != (4 & i) && (i |= 16 & n), 0 !== (e = t.entangledLanes)))
                        for (t = t.entanglements, e &= i; 0 < e;)
                            (r = 1 << (n = 31 - ae(e))), (i |= t[n]), (e &= ~r)
                    return i
                }

                function fe(t, e) {
                    switch (t) {
                        case 1:
                        case 2:
                        case 4:
                            return e + 250
                        case 8:
                        case 16:
                        case 32:
                        case 64:
                        case 128:
                        case 256:
                        case 512:
                        case 1024:
                        case 2048:
                        case 4096:
                        case 8192:
                        case 16384:
                        case 32768:
                        case 65536:
                        case 131072:
                        case 262144:
                        case 524288:
                        case 1048576:
                        case 2097152:
                            return e + 5e3
                        default:
                            return -1
                    }
                }

                function pe(t) {
                    return 0 != (t = -1073741825 & t.pendingLanes) ? t : 1073741824 & t ? 1073741824 : 0
                }

                function ge() {
                    var t = ce
                    return 0 == (4194240 & (ce <<= 1)) && (ce = 64), t
                }

                function me(t) {
                    for (var e = [], n = 0; 31 > n; n++) e.push(t)
                    return e
                }

                function be(t, e, n) {
                    ;(t.pendingLanes |= e),
                    536870912 !== e && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
                        ((t = t.eventTimes)[(e = 31 - ae(e))] = n)
                }

                function ye(t, e) {
                    var n = (t.entangledLanes |= e)
                    for (t = t.entanglements; n;) {
                        var i = 31 - ae(n),
                            r = 1 << i
                        ;(r & e) | (t[i] & e) && (t[i] |= e), (n &= ~r)
                    }
                }

                var ve = 0

                function xe(t) {
                    return 1 < (t &= -t) ? (4 < t ? (0 != (268435455 & t) ? 16 : 536870912) : 4) : 1
                }

                var _e,
                    we,
                    ke,
                    Se,
                    Me,
                    Ee = !1,
                    Ce = [],
                    Pe = null,
                    Le = null,
                    De = null,
                    Oe = new Map(),
                    Te = new Map(),
                    ze = [],
                    Re =
                        'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
                            ' '
                        )

                function Ae(t, e) {
                    switch (t) {
                        case 'focusin':
                        case 'focusout':
                            Pe = null
                            break
                        case 'dragenter':
                        case 'dragleave':
                            Le = null
                            break
                        case 'mouseover':
                        case 'mouseout':
                            De = null
                            break
                        case 'pointerover':
                        case 'pointerout':
                            Oe.delete(e.pointerId)
                            break
                        case 'gotpointercapture':
                        case 'lostpointercapture':
                            Te.delete(e.pointerId)
                    }
                }

                function Ne(t, e, n, i, r, o) {
                    return null === t || t.nativeEvent !== o
                        ? ((t = {
                            blockedOn: e,
                            domEventName: n,
                            eventSystemFlags: i,
                            nativeEvent: o,
                            targetContainers: [r]
                        }),
                        null !== e && null !== (e = vr(e)) && we(e),
                            t)
                        : ((t.eventSystemFlags |= i),
                            (e = t.targetContainers),
                        null !== r && -1 === e.indexOf(r) && e.push(r),
                            t)
                }

                function Ie(t) {
                    var e = yr(t.target)
                    if (null !== e) {
                        var n = Wt(e)
                        if (null !== n)
                            if (13 === (e = n.tag)) {
                                if (null !== (e = Ht(n)))
                                    return (
                                        (t.blockedOn = e),
                                            void Me(t.priority, function () {
                                                ke(n)
                                            })
                                    )
                            } else if (3 === e && n.stateNode.current.memoizedState.isDehydrated)
                                return void (t.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
                    }
                    t.blockedOn = null
                }

                function Fe(t) {
                    if (null !== t.blockedOn) return !1
                    for (var e = t.targetContainers; 0 < e.length;) {
                        var n = qe(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent)
                        if (null !== n) return null !== (e = vr(n)) && we(e), (t.blockedOn = n), !1
                        var i = new (n = t.nativeEvent).constructor(n.type, n)
                        ;(xt = i), n.target.dispatchEvent(i), (xt = null), e.shift()
                    }
                    return !0
                }

                function Ve(t, e, n) {
                    Fe(t) && n.delete(e)
                }

                function Be() {
                    ;(Ee = !1),
                    null !== Pe && Fe(Pe) && (Pe = null),
                    null !== Le && Fe(Le) && (Le = null),
                    null !== De && Fe(De) && (De = null),
                        Oe.forEach(Ve),
                        Te.forEach(Ve)
                }

                function je(t, e) {
                    t.blockedOn === e &&
                    ((t.blockedOn = null),
                    Ee || ((Ee = !0), r.unstable_scheduleCallback(r.unstable_NormalPriority, Be)))
                }

                function We(t) {
                    function e(e) {
                        return je(e, t)
                    }

                    if (0 < Ce.length) {
                        je(Ce[0], t)
                        for (var n = 1; n < Ce.length; n++) {
                            var i = Ce[n]
                            i.blockedOn === t && (i.blockedOn = null)
                        }
                    }
                    for (
                        null !== Pe && je(Pe, t),
                        null !== Le && je(Le, t),
                        null !== De && je(De, t),
                            Oe.forEach(e),
                            Te.forEach(e),
                            n = 0;
                        n < ze.length;
                        n++
                    )
                        (i = ze[n]).blockedOn === t && (i.blockedOn = null)
                    for (; 0 < ze.length && null === (n = ze[0]).blockedOn;)
                        Ie(n), null === n.blockedOn && ze.shift()
                }

                var He = x.ReactCurrentBatchConfig,
                    $e = !0

                function Ue(t, e, n, i) {
                    var r = ve,
                        o = He.transition
                    He.transition = null
                    try {
                        ;(ve = 1), Qe(t, e, n, i)
                    } finally {
                        ;(ve = r), (He.transition = o)
                    }
                }

                function Ye(t, e, n, i) {
                    var r = ve,
                        o = He.transition
                    He.transition = null
                    try {
                        ;(ve = 4), Qe(t, e, n, i)
                    } finally {
                        ;(ve = r), (He.transition = o)
                    }
                }

                function Qe(t, e, n, i) {
                    if ($e) {
                        var r = qe(t, e, n, i)
                        if (null === r) $i(t, e, i, Xe, n), Ae(t, i)
                        else if (
                            (function (t, e, n, i, r) {
                                switch (e) {
                                    case 'focusin':
                                        return (Pe = Ne(Pe, t, e, n, i, r)), !0
                                    case 'dragenter':
                                        return (Le = Ne(Le, t, e, n, i, r)), !0
                                    case 'mouseover':
                                        return (De = Ne(De, t, e, n, i, r)), !0
                                    case 'pointerover':
                                        var o = r.pointerId
                                        return Oe.set(o, Ne(Oe.get(o) || null, t, e, n, i, r)), !0
                                    case 'gotpointercapture':
                                        return (o = r.pointerId), Te.set(o, Ne(Te.get(o) || null, t, e, n, i, r)), !0
                                }
                                return !1
                            })(r, t, e, n, i)
                        )
                            i.stopPropagation()
                        else if ((Ae(t, i), 4 & e && -1 < Re.indexOf(t))) {
                            for (; null !== r;) {
                                var o = vr(r)
                                if (
                                    (null !== o && _e(o),
                                    null === (o = qe(t, e, n, i)) && $i(t, e, i, Xe, n),
                                    o === r)
                                )
                                    break
                                r = o
                            }
                            null !== r && i.stopPropagation()
                        } else $i(t, e, i, null, n)
                    }
                }

                var Xe = null

                function qe(t, e, n, i) {
                    if (((Xe = null), null !== (t = yr((t = _t(i))))))
                        if (null === (e = Wt(t))) t = null
                        else if (13 === (n = e.tag)) {
                            if (null !== (t = Ht(e))) return t
                            t = null
                        } else if (3 === n) {
                            if (e.stateNode.current.memoizedState.isDehydrated)
                                return 3 === e.tag ? e.stateNode.containerInfo : null
                            t = null
                        } else e !== t && (t = null)
                    return (Xe = t), null
                }

                function Ke(t) {
                    switch (t) {
                        case 'cancel':
                        case 'click':
                        case 'close':
                        case 'contextmenu':
                        case 'copy':
                        case 'cut':
                        case 'auxclick':
                        case 'dblclick':
                        case 'dragend':
                        case 'dragstart':
                        case 'drop':
                        case 'focusin':
                        case 'focusout':
                        case 'input':
                        case 'invalid':
                        case 'keydown':
                        case 'keypress':
                        case 'keyup':
                        case 'mousedown':
                        case 'mouseup':
                        case 'paste':
                        case 'pause':
                        case 'play':
                        case 'pointercancel':
                        case 'pointerdown':
                        case 'pointerup':
                        case 'ratechange':
                        case 'reset':
                        case 'resize':
                        case 'seeked':
                        case 'submit':
                        case 'touchcancel':
                        case 'touchend':
                        case 'touchstart':
                        case 'volumechange':
                        case 'change':
                        case 'selectionchange':
                        case 'textInput':
                        case 'compositionstart':
                        case 'compositionend':
                        case 'compositionupdate':
                        case 'beforeblur':
                        case 'afterblur':
                        case 'beforeinput':
                        case 'blur':
                        case 'fullscreenchange':
                        case 'focus':
                        case 'hashchange':
                        case 'popstate':
                        case 'select':
                        case 'selectstart':
                            return 1
                        case 'drag':
                        case 'dragenter':
                        case 'dragexit':
                        case 'dragleave':
                        case 'dragover':
                        case 'mousemove':
                        case 'mouseout':
                        case 'mouseover':
                        case 'pointermove':
                        case 'pointerout':
                        case 'pointerover':
                        case 'scroll':
                        case 'toggle':
                        case 'touchmove':
                        case 'wheel':
                        case 'mouseenter':
                        case 'mouseleave':
                        case 'pointerenter':
                        case 'pointerleave':
                            return 4
                        case 'message':
                            switch (Zt()) {
                                case Jt:
                                    return 1
                                case te:
                                    return 4
                                case ee:
                                case ne:
                                    return 16
                                case ie:
                                    return 536870912
                                default:
                                    return 16
                            }
                        default:
                            return 16
                    }
                }

                var Ge = null,
                    Ze = null,
                    Je = null

                function tn() {
                    if (Je) return Je
                    var t,
                        e,
                        n = Ze,
                        i = n.length,
                        r = 'value' in Ge ? Ge.value : Ge.textContent,
                        o = r.length
                    for (t = 0; t < i && n[t] === r[t]; t++) ;
                    var a = i - t
                    for (e = 1; e <= a && n[i - e] === r[o - e]; e++) ;
                    return (Je = r.slice(t, 1 < e ? 1 - e : void 0))
                }

                function en(t) {
                    var e = t.keyCode
                    return (
                        'charCode' in t ? 0 === (t = t.charCode) && 13 === e && (t = 13) : (t = e),
                        10 === t && (t = 13),
                            32 <= t || 13 === t ? t : 0
                    )
                }

                function nn() {
                    return !0
                }

                function rn() {
                    return !1
                }

                function on(t) {
                    function e(e, n, i, r, o) {
                        for (var a in ((this._reactName = e),
                            (this._targetInst = i),
                            (this.type = n),
                            (this.nativeEvent = r),
                            (this.target = o),
                            (this.currentTarget = null),
                            t))
                            t.hasOwnProperty(a) && ((e = t[a]), (this[a] = e ? e(r) : r[a]))
                        return (
                            (this.isDefaultPrevented = (
                                null != r.defaultPrevented ? r.defaultPrevented : !1 === r.returnValue
                            )
                                ? nn
                                : rn),
                                (this.isPropagationStopped = rn),
                                this
                        )
                    }

                    return (
                        I(e.prototype, {
                            preventDefault: function () {
                                this.defaultPrevented = !0
                                var t = this.nativeEvent
                                t &&
                                (t.preventDefault
                                    ? t.preventDefault()
                                    : 'unknown' != typeof t.returnValue && (t.returnValue = !1),
                                    (this.isDefaultPrevented = nn))
                            },
                            stopPropagation: function () {
                                var t = this.nativeEvent
                                t &&
                                (t.stopPropagation
                                    ? t.stopPropagation()
                                    : 'unknown' != typeof t.cancelBubble && (t.cancelBubble = !0),
                                    (this.isPropagationStopped = nn))
                            },
                            persist: function () {
                            },
                            isPersistent: nn
                        }),
                            e
                    )
                }

                var an,
                    sn,
                    ln,
                    cn = {
                        eventPhase: 0,
                        bubbles: 0,
                        cancelable: 0,
                        timeStamp: function (t) {
                            return t.timeStamp || Date.now()
                        },
                        defaultPrevented: 0,
                        isTrusted: 0
                    },
                    un = on(cn),
                    hn = I({}, cn, {view: 0, detail: 0}),
                    dn = on(hn),
                    fn = I({}, hn, {
                        screenX: 0,
                        screenY: 0,
                        clientX: 0,
                        clientY: 0,
                        pageX: 0,
                        pageY: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        altKey: 0,
                        metaKey: 0,
                        getModifierState: Mn,
                        button: 0,
                        buttons: 0,
                        relatedTarget: function (t) {
                            return void 0 === t.relatedTarget
                                ? t.fromElement === t.srcElement
                                    ? t.toElement
                                    : t.fromElement
                                : t.relatedTarget
                        },
                        movementX: function (t) {
                            return 'movementX' in t
                                ? t.movementX
                                : (t !== ln &&
                                (ln && 'mousemove' === t.type
                                    ? ((an = t.screenX - ln.screenX), (sn = t.screenY - ln.screenY))
                                    : (sn = an = 0),
                                    (ln = t)),
                                    an)
                        },
                        movementY: function (t) {
                            return 'movementY' in t ? t.movementY : sn
                        }
                    }),
                    pn = on(fn),
                    gn = on(I({}, fn, {dataTransfer: 0})),
                    mn = on(I({}, hn, {relatedTarget: 0})),
                    bn = on(I({}, cn, {animationName: 0, elapsedTime: 0, pseudoElement: 0})),
                    yn = I({}, cn, {
                        clipboardData: function (t) {
                            return 'clipboardData' in t ? t.clipboardData : window.clipboardData
                        }
                    }),
                    vn = on(yn),
                    xn = on(I({}, cn, {data: 0})),
                    _n = {
                        Esc: 'Escape',
                        Spacebar: ' ',
                        Left: 'ArrowLeft',
                        Up: 'ArrowUp',
                        Right: 'ArrowRight',
                        Down: 'ArrowDown',
                        Del: 'Delete',
                        Win: 'OS',
                        Menu: 'ContextMenu',
                        Apps: 'ContextMenu',
                        Scroll: 'ScrollLock',
                        MozPrintableKey: 'Unidentified'
                    },
                    wn = {
                        8: 'Backspace',
                        9: 'Tab',
                        12: 'Clear',
                        13: 'Enter',
                        16: 'Shift',
                        17: 'Control',
                        18: 'Alt',
                        19: 'Pause',
                        20: 'CapsLock',
                        27: 'Escape',
                        32: ' ',
                        33: 'PageUp',
                        34: 'PageDown',
                        35: 'End',
                        36: 'Home',
                        37: 'ArrowLeft',
                        38: 'ArrowUp',
                        39: 'ArrowRight',
                        40: 'ArrowDown',
                        45: 'Insert',
                        46: 'Delete',
                        112: 'F1',
                        113: 'F2',
                        114: 'F3',
                        115: 'F4',
                        116: 'F5',
                        117: 'F6',
                        118: 'F7',
                        119: 'F8',
                        120: 'F9',
                        121: 'F10',
                        122: 'F11',
                        123: 'F12',
                        144: 'NumLock',
                        145: 'ScrollLock',
                        224: 'Meta'
                    },
                    kn = {Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey'}

                function Sn(t) {
                    var e = this.nativeEvent
                    return e.getModifierState ? e.getModifierState(t) : !!(t = kn[t]) && !!e[t]
                }

                function Mn() {
                    return Sn
                }

                var En = I({}, hn, {
                        key: function (t) {
                            if (t.key) {
                                var e = _n[t.key] || t.key
                                if ('Unidentified' !== e) return e
                            }
                            return 'keypress' === t.type
                                ? 13 === (t = en(t))
                                    ? 'Enter'
                                    : String.fromCharCode(t)
                                : 'keydown' === t.type || 'keyup' === t.type
                                    ? wn[t.keyCode] || 'Unidentified'
                                    : ''
                        },
                        code: 0,
                        location: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        altKey: 0,
                        metaKey: 0,
                        repeat: 0,
                        locale: 0,
                        getModifierState: Mn,
                        charCode: function (t) {
                            return 'keypress' === t.type ? en(t) : 0
                        },
                        keyCode: function (t) {
                            return 'keydown' === t.type || 'keyup' === t.type ? t.keyCode : 0
                        },
                        which: function (t) {
                            return 'keypress' === t.type
                                ? en(t)
                                : 'keydown' === t.type || 'keyup' === t.type
                                    ? t.keyCode
                                    : 0
                        }
                    }),
                    Cn = on(En),
                    Pn = on(
                        I({}, fn, {
                            pointerId: 0,
                            width: 0,
                            height: 0,
                            pressure: 0,
                            tangentialPressure: 0,
                            tiltX: 0,
                            tiltY: 0,
                            twist: 0,
                            pointerType: 0,
                            isPrimary: 0
                        })
                    ),
                    Ln = on(
                        I({}, hn, {
                            touches: 0,
                            targetTouches: 0,
                            changedTouches: 0,
                            altKey: 0,
                            metaKey: 0,
                            ctrlKey: 0,
                            shiftKey: 0,
                            getModifierState: Mn
                        })
                    ),
                    Dn = on(I({}, cn, {propertyName: 0, elapsedTime: 0, pseudoElement: 0})),
                    On = I({}, fn, {
                        deltaX: function (t) {
                            return 'deltaX' in t ? t.deltaX : 'wheelDeltaX' in t ? -t.wheelDeltaX : 0
                        },
                        deltaY: function (t) {
                            return 'deltaY' in t
                                ? t.deltaY
                                : 'wheelDeltaY' in t
                                    ? -t.wheelDeltaY
                                    : 'wheelDelta' in t
                                        ? -t.wheelDelta
                                        : 0
                        },
                        deltaZ: 0,
                        deltaMode: 0
                    }),
                    Tn = on(On),
                    zn = [9, 13, 27, 32],
                    Rn = u && 'CompositionEvent' in window,
                    An = null
                u && 'documentMode' in document && (An = document.documentMode)
                var Nn = u && 'TextEvent' in window && !An,
                    In = u && (!Rn || (An && 8 < An && 11 >= An)),
                    Fn = String.fromCharCode(32),
                    Vn = !1

                function Bn(t, e) {
                    switch (t) {
                        case 'keyup':
                            return -1 !== zn.indexOf(e.keyCode)
                        case 'keydown':
                            return 229 !== e.keyCode
                        case 'keypress':
                        case 'mousedown':
                        case 'focusout':
                            return !0
                        default:
                            return !1
                    }
                }

                function jn(t) {
                    return 'object' == typeof (t = t.detail) && 'data' in t ? t.data : null
                }

                var Wn = !1,
                    Hn = {
                        color: !0,
                        date: !0,
                        datetime: !0,
                        'datetime-local': !0,
                        email: !0,
                        month: !0,
                        number: !0,
                        password: !0,
                        range: !0,
                        search: !0,
                        tel: !0,
                        text: !0,
                        time: !0,
                        url: !0,
                        week: !0
                    }

                function $n(t) {
                    var e = t && t.nodeName && t.nodeName.toLowerCase()
                    return 'input' === e ? !!Hn[t.type] : 'textarea' === e
                }

                function Un(t, e, n, i) {
                    Et(i),
                    0 < (e = Yi(e, 'onChange')).length &&
                    ((n = new un('onChange', 'change', null, n, i)), t.push({event: n, listeners: e}))
                }

                var Yn = null,
                    Qn = null

                function Xn(t) {
                    Fi(t, 0)
                }

                function qn(t) {
                    if (Q(xr(t))) return t
                }

                function Kn(t, e) {
                    if ('change' === t) return e
                }

                var Gn = !1
                if (u) {
                    var Zn
                    if (u) {
                        var Jn = 'oninput' in document
                        if (!Jn) {
                            var ti = document.createElement('div')
                            ti.setAttribute('oninput', 'return;'), (Jn = 'function' == typeof ti.oninput)
                        }
                        Zn = Jn
                    } else Zn = !1
                    Gn = Zn && (!document.documentMode || 9 < document.documentMode)
                }

                function ei() {
                    Yn && (Yn.detachEvent('onpropertychange', ni), (Qn = Yn = null))
                }

                function ni(t) {
                    if ('value' === t.propertyName && qn(Qn)) {
                        var e = []
                        Un(e, Qn, t, _t(t)), Ot(Xn, e)
                    }
                }

                function ii(t, e, n) {
                    'focusin' === t
                        ? (ei(), (Qn = n), (Yn = e).attachEvent('onpropertychange', ni))
                        : 'focusout' === t && ei()
                }

                function ri(t) {
                    if ('selectionchange' === t || 'keyup' === t || 'keydown' === t) return qn(Qn)
                }

                function oi(t, e) {
                    if ('click' === t) return qn(e)
                }

                function ai(t, e) {
                    if ('input' === t || 'change' === t) return qn(e)
                }

                var si =
                    'function' == typeof Object.is
                        ? Object.is
                        : function (t, e) {
                            return (t === e && (0 !== t || 1 / t == 1 / e)) || (t != t && e != e)
                        }

                function li(t, e) {
                    if (si(t, e)) return !0
                    if ('object' != typeof t || null === t || 'object' != typeof e || null === e) return !1
                    var n = Object.keys(t),
                        i = Object.keys(e)
                    if (n.length !== i.length) return !1
                    for (i = 0; i < n.length; i++) {
                        var r = n[i]
                        if (!h.call(e, r) || !si(t[r], e[r])) return !1
                    }
                    return !0
                }

                function ci(t) {
                    for (; t && t.firstChild;) t = t.firstChild
                    return t
                }

                function ui(t, e) {
                    var n,
                        i = ci(t)
                    for (t = 0; i;) {
                        if (3 === i.nodeType) {
                            if (((n = t + i.textContent.length), t <= e && n >= e))
                                return {node: i, offset: e - t}
                            t = n
                        }
                        t: {
                            for (; i;) {
                                if (i.nextSibling) {
                                    i = i.nextSibling
                                    break t
                                }
                                i = i.parentNode
                            }
                            i = void 0
                        }
                        i = ci(i)
                    }
                }

                function hi(t, e) {
                    return (
                        !(!t || !e) &&
                        (t === e ||
                            ((!t || 3 !== t.nodeType) &&
                                (e && 3 === e.nodeType
                                    ? hi(t, e.parentNode)
                                    : 'contains' in t
                                        ? t.contains(e)
                                        : !!t.compareDocumentPosition && !!(16 & t.compareDocumentPosition(e)))))
                    )
                }

                function di() {
                    for (var t = window, e = X(); e instanceof t.HTMLIFrameElement;) {
                        try {
                            var n = 'string' == typeof e.contentWindow.location.href
                        } catch (t) {
                            n = !1
                        }
                        if (!n) break
                        e = X((t = e.contentWindow).document)
                    }
                    return e
                }

                function fi(t) {
                    var e = t && t.nodeName && t.nodeName.toLowerCase()
                    return (
                        e &&
                        (('input' === e &&
                                ('text' === t.type ||
                                    'search' === t.type ||
                                    'tel' === t.type ||
                                    'url' === t.type ||
                                    'password' === t.type)) ||
                            'textarea' === e ||
                            'true' === t.contentEditable)
                    )
                }

                function pi(t) {
                    var e = di(),
                        n = t.focusedElem,
                        i = t.selectionRange
                    if (e !== n && n && n.ownerDocument && hi(n.ownerDocument.documentElement, n)) {
                        if (null !== i && fi(n))
                            if (((e = i.start), void 0 === (t = i.end) && (t = e), 'selectionStart' in n))
                                (n.selectionStart = e), (n.selectionEnd = Math.min(t, n.value.length))
                            else if (
                                (t = ((e = n.ownerDocument || document) && e.defaultView) || window).getSelection
                            ) {
                                t = t.getSelection()
                                var r = n.textContent.length,
                                    o = Math.min(i.start, r)
                                ;(i = void 0 === i.end ? o : Math.min(i.end, r)),
                                !t.extend && o > i && ((r = i), (i = o), (o = r)),
                                    (r = ui(n, o))
                                var a = ui(n, i)
                                r &&
                                a &&
                                (1 !== t.rangeCount ||
                                    t.anchorNode !== r.node ||
                                    t.anchorOffset !== r.offset ||
                                    t.focusNode !== a.node ||
                                    t.focusOffset !== a.offset) &&
                                ((e = e.createRange()).setStart(r.node, r.offset),
                                    t.removeAllRanges(),
                                    o > i
                                        ? (t.addRange(e), t.extend(a.node, a.offset))
                                        : (e.setEnd(a.node, a.offset), t.addRange(e)))
                            }
                        for (e = [], t = n; (t = t.parentNode);)
                            1 === t.nodeType && e.push({element: t, left: t.scrollLeft, top: t.scrollTop})
                        for ('function' == typeof n.focus && n.focus(), n = 0; n < e.length; n++)
                            ((t = e[n]).element.scrollLeft = t.left), (t.element.scrollTop = t.top)
                    }
                }

                var gi = u && 'documentMode' in document && 11 >= document.documentMode,
                    mi = null,
                    bi = null,
                    yi = null,
                    vi = !1

                function xi(t, e, n) {
                    var i = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument
                    vi ||
                    null == mi ||
                    mi !== X(i) ||
                    ((i =
                        'selectionStart' in (i = mi) && fi(i)
                            ? {start: i.selectionStart, end: i.selectionEnd}
                            : {
                                anchorNode: (i = (
                                    (i.ownerDocument && i.ownerDocument.defaultView) ||
                                    window
                                ).getSelection()).anchorNode,
                                anchorOffset: i.anchorOffset,
                                focusNode: i.focusNode,
                                focusOffset: i.focusOffset
                            }),
                    (yi && li(yi, i)) ||
                    ((yi = i),
                    0 < (i = Yi(bi, 'onSelect')).length &&
                    ((e = new un('onSelect', 'select', null, e, n)),
                        t.push({event: e, listeners: i}),
                        (e.target = mi))))
                }

                function _i(t, e) {
                    var n = {}
                    return (
                        (n[t.toLowerCase()] = e.toLowerCase()),
                            (n['Webkit' + t] = 'webkit' + e),
                            (n['Moz' + t] = 'moz' + e),
                            n
                    )
                }

                var wi = {
                        animationend: _i('Animation', 'AnimationEnd'),
                        animationiteration: _i('Animation', 'AnimationIteration'),
                        animationstart: _i('Animation', 'AnimationStart'),
                        transitionend: _i('Transition', 'TransitionEnd')
                    },
                    ki = {},
                    Si = {}

                function Mi(t) {
                    if (ki[t]) return ki[t]
                    if (!wi[t]) return t
                    var e,
                        n = wi[t]
                    for (e in n) if (n.hasOwnProperty(e) && e in Si) return (ki[t] = n[e])
                    return t
                }

                u &&
                ((Si = document.createElement('div').style),
                'AnimationEvent' in window ||
                (delete wi.animationend.animation,
                    delete wi.animationiteration.animation,
                    delete wi.animationstart.animation),
                'TransitionEvent' in window || delete wi.transitionend.transition)
                var Ei = Mi('animationend'),
                    Ci = Mi('animationiteration'),
                    Pi = Mi('animationstart'),
                    Li = Mi('transitionend'),
                    Di = new Map(),
                    Oi =
                        'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
                            ' '
                        )

                function Ti(t, e) {
                    Di.set(t, e), l(e, [t])
                }

                for (var zi = 0; zi < Oi.length; zi++) {
                    var Ri = Oi[zi]
                    Ti(Ri.toLowerCase(), 'on' + (Ri[0].toUpperCase() + Ri.slice(1)))
                }
                Ti(Ei, 'onAnimationEnd'),
                    Ti(Ci, 'onAnimationIteration'),
                    Ti(Pi, 'onAnimationStart'),
                    Ti('dblclick', 'onDoubleClick'),
                    Ti('focusin', 'onFocus'),
                    Ti('focusout', 'onBlur'),
                    Ti(Li, 'onTransitionEnd'),
                    c('onMouseEnter', ['mouseout', 'mouseover']),
                    c('onMouseLeave', ['mouseout', 'mouseover']),
                    c('onPointerEnter', ['pointerout', 'pointerover']),
                    c('onPointerLeave', ['pointerout', 'pointerover']),
                    l(
                        'onChange',
                        'change click focusin focusout input keydown keyup selectionchange'.split(' ')
                    ),
                    l(
                        'onSelect',
                        'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
                            ' '
                        )
                    ),
                    l('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
                    l(
                        'onCompositionEnd',
                        'compositionend focusout keydown keypress keyup mousedown'.split(' ')
                    ),
                    l(
                        'onCompositionStart',
                        'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
                    ),
                    l(
                        'onCompositionUpdate',
                        'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
                    )
                var Ai =
                        'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
                            ' '
                        ),
                    Ni = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Ai))

                function Ii(t, e, n) {
                    var i = t.type || 'unknown-event'
                    ;(t.currentTarget = n),
                        (function (t, e, n, i, r, a, s, l, c) {
                            if ((jt.apply(this, arguments), Nt)) {
                                if (!Nt) throw Error(o(198))
                                var u = It
                                ;(Nt = !1), (It = null), Ft || ((Ft = !0), (Vt = u))
                            }
                        })(i, e, void 0, t),
                        (t.currentTarget = null)
                }

                function Fi(t, e) {
                    e = 0 != (4 & e)
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n],
                            r = i.event
                        i = i.listeners
                        t: {
                            var o = void 0
                            if (e)
                                for (var a = i.length - 1; 0 <= a; a--) {
                                    var s = i[a],
                                        l = s.instance,
                                        c = s.currentTarget
                                    if (((s = s.listener), l !== o && r.isPropagationStopped())) break t
                                    Ii(r, s, c), (o = l)
                                }
                            else
                                for (a = 0; a < i.length; a++) {
                                    if (
                                        ((l = (s = i[a]).instance),
                                            (c = s.currentTarget),
                                            (s = s.listener),
                                        l !== o && r.isPropagationStopped())
                                    )
                                        break t
                                    Ii(r, s, c), (o = l)
                                }
                        }
                    }
                    if (Ft) throw ((t = Vt), (Ft = !1), (Vt = null), t)
                }

                function Vi(t, e) {
                    var n = e[gr]
                    void 0 === n && (n = e[gr] = new Set())
                    var i = t + '__bubble'
                    n.has(i) || (Hi(e, t, 2, !1), n.add(i))
                }

                function Bi(t, e, n) {
                    var i = 0
                    e && (i |= 4), Hi(n, t, i, e)
                }

                var ji = '_reactListening' + Math.random().toString(36).slice(2)

                function Wi(t) {
                    if (!t[ji]) {
                        ;(t[ji] = !0),
                            a.forEach(function (e) {
                                'selectionchange' !== e && (Ni.has(e) || Bi(e, !1, t), Bi(e, !0, t))
                            })
                        var e = 9 === t.nodeType ? t : t.ownerDocument
                        null === e || e[ji] || ((e[ji] = !0), Bi('selectionchange', !1, e))
                    }
                }

                function Hi(t, e, n, i) {
                    switch (Ke(e)) {
                        case 1:
                            var r = Ue
                            break
                        case 4:
                            r = Ye
                            break
                        default:
                            r = Qe
                    }
                    ;(n = r.bind(null, e, n, t)),
                        (r = void 0),
                    !zt || ('touchstart' !== e && 'touchmove' !== e && 'wheel' !== e) || (r = !0),
                        i
                            ? void 0 !== r
                                ? t.addEventListener(e, n, {capture: !0, passive: r})
                                : t.addEventListener(e, n, !0)
                            : void 0 !== r
                                ? t.addEventListener(e, n, {passive: r})
                                : t.addEventListener(e, n, !1)
                }

                function $i(t, e, n, i, r) {
                    var o = i
                    if (0 == (1 & e) && 0 == (2 & e) && null !== i)
                        t: for (; ;) {
                            if (null === i) return
                            var a = i.tag
                            if (3 === a || 4 === a) {
                                var s = i.stateNode.containerInfo
                                if (s === r || (8 === s.nodeType && s.parentNode === r)) break
                                if (4 === a)
                                    for (a = i.return; null !== a;) {
                                        var l = a.tag
                                        if (
                                            (3 === l || 4 === l) &&
                                            ((l = a.stateNode.containerInfo) === r ||
                                                (8 === l.nodeType && l.parentNode === r))
                                        )
                                            return
                                        a = a.return
                                    }
                                for (; null !== s;) {
                                    if (null === (a = yr(s))) return
                                    if (5 === (l = a.tag) || 6 === l) {
                                        i = o = a
                                        continue t
                                    }
                                    s = s.parentNode
                                }
                            }
                            i = i.return
                        }
                    Ot(function () {
                        var i = o,
                            r = _t(n),
                            a = []
                        t: {
                            var s = Di.get(t)
                            if (void 0 !== s) {
                                var l = un,
                                    c = t
                                switch (t) {
                                    case 'keypress':
                                        if (0 === en(n)) break t
                                    case 'keydown':
                                    case 'keyup':
                                        l = Cn
                                        break
                                    case 'focusin':
                                        ;(c = 'focus'), (l = mn)
                                        break
                                    case 'focusout':
                                        ;(c = 'blur'), (l = mn)
                                        break
                                    case 'beforeblur':
                                    case 'afterblur':
                                        l = mn
                                        break
                                    case 'click':
                                        if (2 === n.button) break t
                                    case 'auxclick':
                                    case 'dblclick':
                                    case 'mousedown':
                                    case 'mousemove':
                                    case 'mouseup':
                                    case 'mouseout':
                                    case 'mouseover':
                                    case 'contextmenu':
                                        l = pn
                                        break
                                    case 'drag':
                                    case 'dragend':
                                    case 'dragenter':
                                    case 'dragexit':
                                    case 'dragleave':
                                    case 'dragover':
                                    case 'dragstart':
                                    case 'drop':
                                        l = gn
                                        break
                                    case 'touchcancel':
                                    case 'touchend':
                                    case 'touchmove':
                                    case 'touchstart':
                                        l = Ln
                                        break
                                    case Ei:
                                    case Ci:
                                    case Pi:
                                        l = bn
                                        break
                                    case Li:
                                        l = Dn
                                        break
                                    case 'scroll':
                                        l = dn
                                        break
                                    case 'wheel':
                                        l = Tn
                                        break
                                    case 'copy':
                                    case 'cut':
                                    case 'paste':
                                        l = vn
                                        break
                                    case 'gotpointercapture':
                                    case 'lostpointercapture':
                                    case 'pointercancel':
                                    case 'pointerdown':
                                    case 'pointermove':
                                    case 'pointerout':
                                    case 'pointerover':
                                    case 'pointerup':
                                        l = Pn
                                }
                                var u = 0 != (4 & e),
                                    h = !u && 'scroll' === t,
                                    d = u ? (null !== s ? s + 'Capture' : null) : s
                                u = []
                                for (var f, p = i; null !== p;) {
                                    var g = (f = p).stateNode
                                    if (
                                        (5 === f.tag &&
                                        null !== g &&
                                        ((f = g), null !== d && null != (g = Tt(p, d)) && u.push(Ui(p, g, f))),
                                            h)
                                    )
                                        break
                                    p = p.return
                                }
                                0 < u.length && ((s = new l(s, c, null, n, r)), a.push({event: s, listeners: u}))
                            }
                        }
                        if (0 == (7 & e)) {
                            if (
                                ((l = 'mouseout' === t || 'pointerout' === t),
                                (!(s = 'mouseover' === t || 'pointerover' === t) ||
                                    n === xt ||
                                    !(c = n.relatedTarget || n.fromElement) ||
                                    (!yr(c) && !c[pr])) &&
                                (l || s) &&
                                ((s =
                                    r.window === r
                                        ? r
                                        : (s = r.ownerDocument)
                                            ? s.defaultView || s.parentWindow
                                            : window),
                                    l
                                        ? ((l = i),
                                        null !== (c = (c = n.relatedTarget || n.toElement) ? yr(c) : null) &&
                                        (c !== (h = Wt(c)) || (5 !== c.tag && 6 !== c.tag)) &&
                                        (c = null))
                                        : ((l = null), (c = i)),
                                l !== c))
                            ) {
                                if (
                                    ((u = pn),
                                        (g = 'onMouseLeave'),
                                        (d = 'onMouseEnter'),
                                        (p = 'mouse'),
                                    ('pointerout' !== t && 'pointerover' !== t) ||
                                    ((u = Pn), (g = 'onPointerLeave'), (d = 'onPointerEnter'), (p = 'pointer')),
                                        (h = null == l ? s : xr(l)),
                                        (f = null == c ? s : xr(c)),
                                        ((s = new u(g, p + 'leave', l, n, r)).target = h),
                                        (s.relatedTarget = f),
                                        (g = null),
                                    yr(r) === i &&
                                    (((u = new u(d, p + 'enter', c, n, r)).target = f),
                                        (u.relatedTarget = h),
                                        (g = u)),
                                        (h = g),
                                    l && c)
                                )
                                    t: {
                                        for (d = c, p = 0, f = u = l; f; f = Qi(f)) p++
                                        for (f = 0, g = d; g; g = Qi(g)) f++
                                        for (; 0 < p - f;) (u = Qi(u)), p--
                                        for (; 0 < f - p;) (d = Qi(d)), f--
                                        for (; p--;) {
                                            if (u === d || (null !== d && u === d.alternate)) break t
                                                ;
                                            (u = Qi(u)), (d = Qi(d))
                                        }
                                        u = null
                                    }
                                else u = null
                                null !== l && Xi(a, s, l, u, !1), null !== c && null !== h && Xi(a, h, c, u, !0)
                            }
                            if (
                                'select' === (l = (s = i ? xr(i) : window).nodeName && s.nodeName.toLowerCase()) ||
                                ('input' === l && 'file' === s.type)
                            )
                                var m = Kn
                            else if ($n(s))
                                if (Gn) m = ai
                                else {
                                    m = ri
                                    var b = ii
                                }
                            else
                                (l = s.nodeName) &&
                                'input' === l.toLowerCase() &&
                                ('checkbox' === s.type || 'radio' === s.type) &&
                                (m = oi)
                            switch (
                                (m && (m = m(t, i))
                                    ? Un(a, m, n, r)
                                    : (b && b(t, s, i),
                                    'focusout' === t &&
                                    (b = s._wrapperState) &&
                                    b.controlled &&
                                    'number' === s.type &&
                                    tt(s, 'number', s.value)),
                                    (b = i ? xr(i) : window),
                                    t)
                                ) {
                                case 'focusin':
                                    ;($n(b) || 'true' === b.contentEditable) && ((mi = b), (bi = i), (yi = null))
                                    break
                                case 'focusout':
                                    yi = bi = mi = null
                                    break
                                case 'mousedown':
                                    vi = !0
                                    break
                                case 'contextmenu':
                                case 'mouseup':
                                case 'dragend':
                                    ;(vi = !1), xi(a, n, r)
                                    break
                                case 'selectionchange':
                                    if (gi) break
                                case 'keydown':
                                case 'keyup':
                                    xi(a, n, r)
                            }
                            var y
                            if (Rn)
                                t: {
                                    switch (t) {
                                        case 'compositionstart':
                                            var v = 'onCompositionStart'
                                            break t
                                        case 'compositionend':
                                            v = 'onCompositionEnd'
                                            break t
                                        case 'compositionupdate':
                                            v = 'onCompositionUpdate'
                                            break t
                                    }
                                    v = void 0
                                }
                            else
                                Wn
                                    ? Bn(t, n) && (v = 'onCompositionEnd')
                                    : 'keydown' === t && 229 === n.keyCode && (v = 'onCompositionStart')
                            v &&
                            (In &&
                            'ko' !== n.locale &&
                            (Wn || 'onCompositionStart' !== v
                                ? 'onCompositionEnd' === v && Wn && (y = tn())
                                : ((Ze = 'value' in (Ge = r) ? Ge.value : Ge.textContent), (Wn = !0))),
                            0 < (b = Yi(i, v)).length &&
                            ((v = new xn(v, t, null, n, r)),
                                a.push({event: v, listeners: b}),
                            (y || null !== (y = jn(n))) && (v.data = y))),
                            (y = Nn
                                ? (function (t, e) {
                                    switch (t) {
                                        case 'compositionend':
                                            return jn(e)
                                        case 'keypress':
                                            return 32 !== e.which ? null : ((Vn = !0), Fn)
                                        case 'textInput':
                                            return (t = e.data) === Fn && Vn ? null : t
                                        default:
                                            return null
                                    }
                                })(t, n)
                                : (function (t, e) {
                                    if (Wn)
                                        return 'compositionend' === t || (!Rn && Bn(t, e))
                                            ? ((t = tn()), (Je = Ze = Ge = null), (Wn = !1), t)
                                            : null
                                    switch (t) {
                                        case 'paste':
                                        default:
                                            return null
                                        case 'keypress':
                                            if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
                                                if (e.char && 1 < e.char.length) return e.char
                                                if (e.which) return String.fromCharCode(e.which)
                                            }
                                            return null
                                        case 'compositionend':
                                            return In && 'ko' !== e.locale ? null : e.data
                                    }
                                })(t, n)) &&
                            0 < (i = Yi(i, 'onBeforeInput')).length &&
                            ((r = new xn('onBeforeInput', 'beforeinput', null, n, r)),
                                a.push({event: r, listeners: i}),
                                (r.data = y))
                        }
                        Fi(a, e)
                    })
                }

                function Ui(t, e, n) {
                    return {instance: t, listener: e, currentTarget: n}
                }

                function Yi(t, e) {
                    for (var n = e + 'Capture', i = []; null !== t;) {
                        var r = t,
                            o = r.stateNode
                        5 === r.tag &&
                        null !== o &&
                        ((r = o),
                        null != (o = Tt(t, n)) && i.unshift(Ui(t, o, r)),
                        null != (o = Tt(t, e)) && i.push(Ui(t, o, r))),
                            (t = t.return)
                    }
                    return i
                }

                function Qi(t) {
                    if (null === t) return null
                    do {
                        t = t.return
                    } while (t && 5 !== t.tag)
                    return t || null
                }

                function Xi(t, e, n, i, r) {
                    for (var o = e._reactName, a = []; null !== n && n !== i;) {
                        var s = n,
                            l = s.alternate,
                            c = s.stateNode
                        if (null !== l && l === i) break
                        5 === s.tag &&
                        null !== c &&
                        ((s = c),
                            r
                                ? null != (l = Tt(n, o)) && a.unshift(Ui(n, l, s))
                                : r || (null != (l = Tt(n, o)) && a.push(Ui(n, l, s)))),
                            (n = n.return)
                    }
                    0 !== a.length && t.push({event: e, listeners: a})
                }

                var qi = /\r\n?/g,
                    Ki = /\u0000|\uFFFD/g

                function Gi(t) {
                    return ('string' == typeof t ? t : '' + t).replace(qi, '\n').replace(Ki, '')
                }

                function Zi(t, e, n) {
                    if (((e = Gi(e)), Gi(t) !== e && n)) throw Error(o(425))
                }

                function Ji() {
                }

                var tr = null,
                    er = null

                function nr(t, e) {
                    return (
                        'textarea' === t ||
                        'noscript' === t ||
                        'string' == typeof e.children ||
                        'number' == typeof e.children ||
                        ('object' == typeof e.dangerouslySetInnerHTML &&
                            null !== e.dangerouslySetInnerHTML &&
                            null != e.dangerouslySetInnerHTML.__html)
                    )
                }

                var ir = 'function' == typeof setTimeout ? setTimeout : void 0,
                    rr = 'function' == typeof clearTimeout ? clearTimeout : void 0,
                    or = 'function' == typeof Promise ? Promise : void 0,
                    ar =
                        'function' == typeof queueMicrotask
                            ? queueMicrotask
                            : void 0 !== or
                                ? function (t) {
                                    return or.resolve(null).then(t).catch(sr)
                                }
                                : ir

                function sr(t) {
                    setTimeout(function () {
                        throw t
                    })
                }

                function lr(t, e) {
                    var n = e,
                        i = 0
                    do {
                        var r = n.nextSibling
                        if ((t.removeChild(n), r && 8 === r.nodeType))
                            if ('/$' === (n = r.data)) {
                                if (0 === i) return t.removeChild(r), void We(e)
                                i--
                            } else ('$' !== n && '$?' !== n && '$!' !== n) || i++
                        n = r
                    } while (n)
                    We(e)
                }

                function cr(t) {
                    for (; null != t; t = t.nextSibling) {
                        var e = t.nodeType
                        if (1 === e || 3 === e) break
                        if (8 === e) {
                            if ('$' === (e = t.data) || '$!' === e || '$?' === e) break
                            if ('/$' === e) return null
                        }
                    }
                    return t
                }

                function ur(t) {
                    t = t.previousSibling
                    for (var e = 0; t;) {
                        if (8 === t.nodeType) {
                            var n = t.data
                            if ('$' === n || '$!' === n || '$?' === n) {
                                if (0 === e) return t
                                e--
                            } else '/$' === n && e++
                        }
                        t = t.previousSibling
                    }
                    return null
                }

                var hr = Math.random().toString(36).slice(2),
                    dr = '__reactFiber$' + hr,
                    fr = '__reactProps$' + hr,
                    pr = '__reactContainer$' + hr,
                    gr = '__reactEvents$' + hr,
                    mr = '__reactListeners$' + hr,
                    br = '__reactHandles$' + hr

                function yr(t) {
                    var e = t[dr]
                    if (e) return e
                    for (var n = t.parentNode; n;) {
                        if ((e = n[pr] || n[dr])) {
                            if (((n = e.alternate), null !== e.child || (null !== n && null !== n.child)))
                                for (t = ur(t); null !== t;) {
                                    if ((n = t[dr])) return n
                                    t = ur(t)
                                }
                            return e
                        }
                        n = (t = n).parentNode
                    }
                    return null
                }

                function vr(t) {
                    return !(t = t[dr] || t[pr]) ||
                    (5 !== t.tag && 6 !== t.tag && 13 !== t.tag && 3 !== t.tag)
                        ? null
                        : t
                }

                function xr(t) {
                    if (5 === t.tag || 6 === t.tag) return t.stateNode
                    throw Error(o(33))
                }

                function _r(t) {
                    return t[fr] || null
                }

                var wr = [],
                    kr = -1

                function Sr(t) {
                    return {current: t}
                }

                function Mr(t) {
                    0 > kr || ((t.current = wr[kr]), (wr[kr] = null), kr--)
                }

                function Er(t, e) {
                    kr++, (wr[kr] = t.current), (t.current = e)
                }

                var Cr = {},
                    Pr = Sr(Cr),
                    Lr = Sr(!1),
                    Dr = Cr

                function Or(t, e) {
                    var n = t.type.contextTypes
                    if (!n) return Cr
                    var i = t.stateNode
                    if (i && i.__reactInternalMemoizedUnmaskedChildContext === e)
                        return i.__reactInternalMemoizedMaskedChildContext
                    var r,
                        o = {}
                    for (r in n) o[r] = e[r]
                    return (
                        i &&
                        (((t = t.stateNode).__reactInternalMemoizedUnmaskedChildContext = e),
                            (t.__reactInternalMemoizedMaskedChildContext = o)),
                            o
                    )
                }

                function Tr(t) {
                    return null != t.childContextTypes
                }

                function zr() {
                    Mr(Lr), Mr(Pr)
                }

                function Rr(t, e, n) {
                    if (Pr.current !== Cr) throw Error(o(168))
                    Er(Pr, e), Er(Lr, n)
                }

                function Ar(t, e, n) {
                    var i = t.stateNode
                    if (((e = e.childContextTypes), 'function' != typeof i.getChildContext)) return n
                    for (var r in (i = i.getChildContext()))
                        if (!(r in e)) throw Error(o(108, H(t) || 'Unknown', r))
                    return I({}, n, i)
                }

                function Nr(t) {
                    return (
                        (t = ((t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext) || Cr),
                            (Dr = Pr.current),
                            Er(Pr, t),
                            Er(Lr, Lr.current),
                            !0
                    )
                }

                function Ir(t, e, n) {
                    var i = t.stateNode
                    if (!i) throw Error(o(169))
                    n
                        ? ((t = Ar(t, e, Dr)),
                            (i.__reactInternalMemoizedMergedChildContext = t),
                            Mr(Lr),
                            Mr(Pr),
                            Er(Pr, t))
                        : Mr(Lr),
                        Er(Lr, n)
                }

                var Fr = null,
                    Vr = !1,
                    Br = !1

                function jr(t) {
                    null === Fr ? (Fr = [t]) : Fr.push(t)
                }

                function Wr() {
                    if (!Br && null !== Fr) {
                        Br = !0
                        var t = 0,
                            e = ve
                        try {
                            var n = Fr
                            for (ve = 1; t < n.length; t++) {
                                var i = n[t]
                                do {
                                    i = i(!0)
                                } while (null !== i)
                            }
                            ;(Fr = null), (Vr = !1)
                        } catch (e) {
                            throw (null !== Fr && (Fr = Fr.slice(t + 1)), Qt(Jt, Wr), e)
                        } finally {
                            ;(ve = e), (Br = !1)
                        }
                    }
                    return null
                }

                var Hr = [],
                    $r = 0,
                    Ur = null,
                    Yr = 0,
                    Qr = [],
                    Xr = 0,
                    qr = null,
                    Kr = 1,
                    Gr = ''

                function Zr(t, e) {
                    ;(Hr[$r++] = Yr), (Hr[$r++] = Ur), (Ur = t), (Yr = e)
                }

                function Jr(t, e, n) {
                    ;(Qr[Xr++] = Kr), (Qr[Xr++] = Gr), (Qr[Xr++] = qr), (qr = t)
                    var i = Kr
                    t = Gr
                    var r = 32 - ae(i) - 1
                    ;(i &= ~(1 << r)), (n += 1)
                    var o = 32 - ae(e) + r
                    if (30 < o) {
                        var a = r - (r % 5)
                        ;(o = (i & ((1 << a) - 1)).toString(32)),
                            (i >>= a),
                            (r -= a),
                            (Kr = (1 << (32 - ae(e) + r)) | (n << r) | i),
                            (Gr = o + t)
                    } else (Kr = (1 << o) | (n << r) | i), (Gr = t)
                }

                function to(t) {
                    null !== t.return && (Zr(t, 1), Jr(t, 1, 0))
                }

                function eo(t) {
                    for (; t === Ur;) (Ur = Hr[--$r]), (Hr[$r] = null), (Yr = Hr[--$r]), (Hr[$r] = null)
                    for (; t === qr;)
                        (qr = Qr[--Xr]),
                            (Qr[Xr] = null),
                            (Gr = Qr[--Xr]),
                            (Qr[Xr] = null),
                            (Kr = Qr[--Xr]),
                            (Qr[Xr] = null)
                }

                var no = null,
                    io = null,
                    ro = !1,
                    oo = null

                function ao(t, e) {
                    var n = Tc(5, null, null, 0)
                    ;(n.elementType = 'DELETED'),
                        (n.stateNode = e),
                        (n.return = t),
                        null === (e = t.deletions) ? ((t.deletions = [n]), (t.flags |= 16)) : e.push(n)
                }

                function so(t, e) {
                    switch (t.tag) {
                        case 5:
                            var n = t.type
                            return (
                                null !==
                                (e =
                                    1 !== e.nodeType || n.toLowerCase() !== e.nodeName.toLowerCase() ? null : e) &&
                                ((t.stateNode = e), (no = t), (io = cr(e.firstChild)), !0)
                            )
                        case 6:
                            return (
                                null !== (e = '' === t.pendingProps || 3 !== e.nodeType ? null : e) &&
                                ((t.stateNode = e), (no = t), (io = null), !0)
                            )
                        case 13:
                            return (
                                null !== (e = 8 !== e.nodeType ? null : e) &&
                                ((n = null !== qr ? {id: Kr, overflow: Gr} : null),
                                    (t.memoizedState = {dehydrated: e, treeContext: n, retryLane: 1073741824}),
                                    ((n = Tc(18, null, null, 0)).stateNode = e),
                                    (n.return = t),
                                    (t.child = n),
                                    (no = t),
                                    (io = null),
                                    !0)
                            )
                        default:
                            return !1
                    }
                }

                function lo(t) {
                    return 0 != (1 & t.mode) && 0 == (128 & t.flags)
                }

                function co(t) {
                    if (ro) {
                        var e = io
                        if (e) {
                            var n = e
                            if (!so(t, e)) {
                                if (lo(t)) throw Error(o(418))
                                e = cr(n.nextSibling)
                                var i = no
                                e && so(t, e) ? ao(i, n) : ((t.flags = (-4097 & t.flags) | 2), (ro = !1), (no = t))
                            }
                        } else {
                            if (lo(t)) throw Error(o(418))
                                ;
                            (t.flags = (-4097 & t.flags) | 2), (ro = !1), (no = t)
                        }
                    }
                }

                function uo(t) {
                    for (t = t.return; null !== t && 5 !== t.tag && 3 !== t.tag && 13 !== t.tag;)
                        t = t.return
                    no = t
                }

                function ho(t) {
                    if (t !== no) return !1
                    if (!ro) return uo(t), (ro = !0), !1
                    var e
                    if (
                        ((e = 3 !== t.tag) &&
                        !(e = 5 !== t.tag) &&
                        (e = 'head' !== (e = t.type) && 'body' !== e && !nr(t.type, t.memoizedProps)),
                        e && (e = io))
                    ) {
                        if (lo(t)) throw (fo(), Error(o(418)))
                        for (; e;) ao(t, e), (e = cr(e.nextSibling))
                    }
                    if ((uo(t), 13 === t.tag)) {
                        if (!(t = null !== (t = t.memoizedState) ? t.dehydrated : null)) throw Error(o(317))
                        t: {
                            for (t = t.nextSibling, e = 0; t;) {
                                if (8 === t.nodeType) {
                                    var n = t.data
                                    if ('/$' === n) {
                                        if (0 === e) {
                                            io = cr(t.nextSibling)
                                            break t
                                        }
                                        e--
                                    } else ('$' !== n && '$!' !== n && '$?' !== n) || e++
                                }
                                t = t.nextSibling
                            }
                            io = null
                        }
                    } else io = no ? cr(t.stateNode.nextSibling) : null
                    return !0
                }

                function fo() {
                    for (var t = io; t;) t = cr(t.nextSibling)
                }

                function po() {
                    ;(io = no = null), (ro = !1)
                }

                function go(t) {
                    null === oo ? (oo = [t]) : oo.push(t)
                }

                var mo = x.ReactCurrentBatchConfig

                function bo(t, e) {
                    if (t && t.defaultProps) {
                        for (var n in ((e = I({}, e)), (t = t.defaultProps))) void 0 === e[n] && (e[n] = t[n])
                        return e
                    }
                    return e
                }

                var yo = Sr(null),
                    vo = null,
                    xo = null,
                    _o = null

                function wo() {
                    _o = xo = vo = null
                }

                function ko(t) {
                    var e = yo.current
                    Mr(yo), (t._currentValue = e)
                }

                function So(t, e, n) {
                    for (; null !== t;) {
                        var i = t.alternate
                        if (
                            ((t.childLanes & e) !== e
                                ? ((t.childLanes |= e), null !== i && (i.childLanes |= e))
                                : null !== i && (i.childLanes & e) !== e && (i.childLanes |= e),
                            t === n)
                        )
                            break
                        t = t.return
                    }
                }

                function Mo(t, e) {
                    ;(vo = t),
                        (_o = xo = null),
                    null !== (t = t.dependencies) &&
                    null !== t.firstContext &&
                    (0 != (t.lanes & e) && (xs = !0), (t.firstContext = null))
                }

                function Eo(t) {
                    var e = t._currentValue
                    if (_o !== t)
                        if (((t = {context: t, memoizedValue: e, next: null}), null === xo)) {
                            if (null === vo) throw Error(o(308))
                                ;
                            (xo = t), (vo.dependencies = {lanes: 0, firstContext: t})
                        } else xo = xo.next = t
                    return e
                }

                var Co = null

                function Po(t) {
                    null === Co ? (Co = [t]) : Co.push(t)
                }

                function Lo(t, e, n, i) {
                    var r = e.interleaved
                    return (
                        null === r ? ((n.next = n), Po(e)) : ((n.next = r.next), (r.next = n)),
                            (e.interleaved = n),
                            Do(t, i)
                    )
                }

                function Do(t, e) {
                    t.lanes |= e
                    var n = t.alternate
                    for (null !== n && (n.lanes |= e), n = t, t = t.return; null !== t;)
                        (t.childLanes |= e),
                        null !== (n = t.alternate) && (n.childLanes |= e),
                            (n = t),
                            (t = t.return)
                    return 3 === n.tag ? n.stateNode : null
                }

                var Oo = !1

                function To(t) {
                    t.updateQueue = {
                        baseState: t.memoizedState,
                        firstBaseUpdate: null,
                        lastBaseUpdate: null,
                        shared: {pending: null, interleaved: null, lanes: 0},
                        effects: null
                    }
                }

                function zo(t, e) {
                    ;(t = t.updateQueue),
                    e.updateQueue === t &&
                    (e.updateQueue = {
                        baseState: t.baseState,
                        firstBaseUpdate: t.firstBaseUpdate,
                        lastBaseUpdate: t.lastBaseUpdate,
                        shared: t.shared,
                        effects: t.effects
                    })
                }

                function Ro(t, e) {
                    return {eventTime: t, lane: e, tag: 0, payload: null, callback: null, next: null}
                }

                function Ao(t, e, n) {
                    var i = t.updateQueue
                    if (null === i) return null
                    if (((i = i.shared), 0 != (2 & Ll))) {
                        var r = i.pending
                        return (
                            null === r ? (e.next = e) : ((e.next = r.next), (r.next = e)),
                                (i.pending = e),
                                Do(t, n)
                        )
                    }
                    return (
                        null === (r = i.interleaved)
                            ? ((e.next = e), Po(i))
                            : ((e.next = r.next), (r.next = e)),
                            (i.interleaved = e),
                            Do(t, n)
                    )
                }

                function No(t, e, n) {
                    if (null !== (e = e.updateQueue) && ((e = e.shared), 0 != (4194240 & n))) {
                        var i = e.lanes
                        ;(n |= i &= t.pendingLanes), (e.lanes = n), ye(t, n)
                    }
                }

                function Io(t, e) {
                    var n = t.updateQueue,
                        i = t.alternate
                    if (null !== i && n === (i = i.updateQueue)) {
                        var r = null,
                            o = null
                        if (null !== (n = n.firstBaseUpdate)) {
                            do {
                                var a = {
                                    eventTime: n.eventTime,
                                    lane: n.lane,
                                    tag: n.tag,
                                    payload: n.payload,
                                    callback: n.callback,
                                    next: null
                                }
                                null === o ? (r = o = a) : (o = o.next = a), (n = n.next)
                            } while (null !== n)
                            null === o ? (r = o = e) : (o = o.next = e)
                        } else r = o = e
                        return (
                            (n = {
                                baseState: i.baseState,
                                firstBaseUpdate: r,
                                lastBaseUpdate: o,
                                shared: i.shared,
                                effects: i.effects
                            }),
                                void (t.updateQueue = n)
                        )
                    }
                    null === (t = n.lastBaseUpdate) ? (n.firstBaseUpdate = e) : (t.next = e),
                        (n.lastBaseUpdate = e)
                }

                function Fo(t, e, n, i) {
                    var r = t.updateQueue
                    Oo = !1
                    var o = r.firstBaseUpdate,
                        a = r.lastBaseUpdate,
                        s = r.shared.pending
                    if (null !== s) {
                        r.shared.pending = null
                        var l = s,
                            c = l.next
                        ;(l.next = null), null === a ? (o = c) : (a.next = c), (a = l)
                        var u = t.alternate
                        null !== u &&
                        (s = (u = u.updateQueue).lastBaseUpdate) !== a &&
                        (null === s ? (u.firstBaseUpdate = c) : (s.next = c), (u.lastBaseUpdate = l))
                    }
                    if (null !== o) {
                        var h = r.baseState
                        for (a = 0, u = c = l = null, s = o; ;) {
                            var d = s.lane,
                                f = s.eventTime
                            if ((i & d) === d) {
                                null !== u &&
                                (u = u.next =
                                    {
                                        eventTime: f,
                                        lane: 0,
                                        tag: s.tag,
                                        payload: s.payload,
                                        callback: s.callback,
                                        next: null
                                    })
                                t: {
                                    var p = t,
                                        g = s
                                    switch (((d = e), (f = n), g.tag)) {
                                        case 1:
                                            if ('function' == typeof (p = g.payload)) {
                                                h = p.call(f, h, d)
                                                break t
                                            }
                                            h = p
                                            break t
                                        case 3:
                                            p.flags = (-65537 & p.flags) | 128
                                        case 0:
                                            if (null == (d = 'function' == typeof (p = g.payload) ? p.call(f, h, d) : p))
                                                break t
                                            h = I({}, h, d)
                                            break t
                                        case 2:
                                            Oo = !0
                                    }
                                }
                                null !== s.callback &&
                                0 !== s.lane &&
                                ((t.flags |= 64), null === (d = r.effects) ? (r.effects = [s]) : d.push(s))
                            } else
                                (f = {
                                    eventTime: f,
                                    lane: d,
                                    tag: s.tag,
                                    payload: s.payload,
                                    callback: s.callback,
                                    next: null
                                }),
                                    null === u ? ((c = u = f), (l = h)) : (u = u.next = f),
                                    (a |= d)
                            if (null === (s = s.next)) {
                                if (null === (s = r.shared.pending)) break
                                    ;
                                (s = (d = s).next),
                                    (d.next = null),
                                    (r.lastBaseUpdate = d),
                                    (r.shared.pending = null)
                            }
                        }
                        if (
                            (null === u && (l = h),
                                (r.baseState = l),
                                (r.firstBaseUpdate = c),
                                (r.lastBaseUpdate = u),
                            null !== (e = r.shared.interleaved))
                        ) {
                            r = e
                            do {
                                ;(a |= r.lane), (r = r.next)
                            } while (r !== e)
                        } else null === o && (r.shared.lanes = 0)
                        ;
                        (Il |= a), (t.lanes = a), (t.memoizedState = h)
                    }
                }

                function Vo(t, e, n) {
                    if (((t = e.effects), (e.effects = null), null !== t))
                        for (e = 0; e < t.length; e++) {
                            var i = t[e],
                                r = i.callback
                            if (null !== r) {
                                if (((i.callback = null), (i = n), 'function' != typeof r)) throw Error(o(191, r))
                                r.call(i)
                            }
                        }
                }

                var Bo = new i.Component().refs

                function jo(t, e, n, i) {
                    ;(n = null == (n = n(i, (e = t.memoizedState))) ? e : I({}, e, n)),
                        (t.memoizedState = n),
                    0 === t.lanes && (t.updateQueue.baseState = n)
                }

                var Wo = {
                    isMounted: function (t) {
                        return !!(t = t._reactInternals) && Wt(t) === t
                    },
                    enqueueSetState: function (t, e, n) {
                        t = t._reactInternals
                        var i = ec(),
                            r = nc(t),
                            o = Ro(i, r)
                        ;(o.payload = e),
                        null != n && (o.callback = n),
                        null !== (e = Ao(t, o, r)) && (ic(e, t, r, i), No(e, t, r))
                    },
                    enqueueReplaceState: function (t, e, n) {
                        t = t._reactInternals
                        var i = ec(),
                            r = nc(t),
                            o = Ro(i, r)
                        ;(o.tag = 1),
                            (o.payload = e),
                        null != n && (o.callback = n),
                        null !== (e = Ao(t, o, r)) && (ic(e, t, r, i), No(e, t, r))
                    },
                    enqueueForceUpdate: function (t, e) {
                        t = t._reactInternals
                        var n = ec(),
                            i = nc(t),
                            r = Ro(n, i)
                        ;(r.tag = 2),
                        null != e && (r.callback = e),
                        null !== (e = Ao(t, r, i)) && (ic(e, t, i, n), No(e, t, i))
                    }
                }

                function Ho(t, e, n, i, r, o, a) {
                    return 'function' == typeof (t = t.stateNode).shouldComponentUpdate
                        ? t.shouldComponentUpdate(i, o, a)
                        : !(e.prototype && e.prototype.isPureReactComponent && li(n, i) && li(r, o))
                }

                function $o(t, e, n) {
                    var i = !1,
                        r = Cr,
                        o = e.contextType
                    return (
                        'object' == typeof o && null !== o
                            ? (o = Eo(o))
                            : ((r = Tr(e) ? Dr : Pr.current),
                                (o = (i = null != (i = e.contextTypes)) ? Or(t, r) : Cr)),
                            (e = new e(n, o)),
                            (t.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null),
                            (e.updater = Wo),
                            (t.stateNode = e),
                            (e._reactInternals = t),
                        i &&
                        (((t = t.stateNode).__reactInternalMemoizedUnmaskedChildContext = r),
                            (t.__reactInternalMemoizedMaskedChildContext = o)),
                            e
                    )
                }

                function Uo(t, e, n, i) {
                    ;(t = e.state),
                    'function' == typeof e.componentWillReceiveProps && e.componentWillReceiveProps(n, i),
                    'function' == typeof e.UNSAFE_componentWillReceiveProps &&
                    e.UNSAFE_componentWillReceiveProps(n, i),
                    e.state !== t && Wo.enqueueReplaceState(e, e.state, null)
                }

                function Yo(t, e, n, i) {
                    var r = t.stateNode
                    ;(r.props = n), (r.state = t.memoizedState), (r.refs = Bo), To(t)
                    var o = e.contextType
                    'object' == typeof o && null !== o
                        ? (r.context = Eo(o))
                        : ((o = Tr(e) ? Dr : Pr.current), (r.context = Or(t, o))),
                        (r.state = t.memoizedState),
                    'function' == typeof (o = e.getDerivedStateFromProps) &&
                    (jo(t, e, o, n), (r.state = t.memoizedState)),
                    'function' == typeof e.getDerivedStateFromProps ||
                    'function' == typeof r.getSnapshotBeforeUpdate ||
                    ('function' != typeof r.UNSAFE_componentWillMount &&
                        'function' != typeof r.componentWillMount) ||
                    ((e = r.state),
                    'function' == typeof r.componentWillMount && r.componentWillMount(),
                    'function' == typeof r.UNSAFE_componentWillMount && r.UNSAFE_componentWillMount(),
                    e !== r.state && Wo.enqueueReplaceState(r, r.state, null),
                        Fo(t, n, r, i),
                        (r.state = t.memoizedState)),
                    'function' == typeof r.componentDidMount && (t.flags |= 4194308)
                }

                function Qo(t, e, n) {
                    if (null !== (t = n.ref) && 'function' != typeof t && 'object' != typeof t) {
                        if (n._owner) {
                            if ((n = n._owner)) {
                                if (1 !== n.tag) throw Error(o(309))
                                var i = n.stateNode
                            }
                            if (!i) throw Error(o(147, t))
                            var r = i,
                                a = '' + t
                            return null !== e &&
                            null !== e.ref &&
                            'function' == typeof e.ref &&
                            e.ref._stringRef === a
                                ? e.ref
                                : ((e = function (t) {
                                    var e = r.refs
                                    e === Bo && (e = r.refs = {}), null === t ? delete e[a] : (e[a] = t)
                                }),
                                    (e._stringRef = a),
                                    e)
                        }
                        if ('string' != typeof t) throw Error(o(284))
                        if (!n._owner) throw Error(o(290, t))
                    }
                    return t
                }

                function Xo(t, e) {
                    throw (
                        ((t = Object.prototype.toString.call(e)),
                            Error(
                                o(
                                    31,
                                    '[object Object]' === t ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t
                                )
                            ))
                    )
                }

                function qo(t) {
                    return (0, t._init)(t._payload)
                }

                function Ko(t) {
                    function e(e, n) {
                        if (t) {
                            var i = e.deletions
                            null === i ? ((e.deletions = [n]), (e.flags |= 16)) : i.push(n)
                        }
                    }

                    function n(n, i) {
                        if (!t) return null
                        for (; null !== i;) e(n, i), (i = i.sibling)
                        return null
                    }

                    function i(t, e) {
                        for (t = new Map(); null !== e;)
                            null !== e.key ? t.set(e.key, e) : t.set(e.index, e), (e = e.sibling)
                        return t
                    }

                    function r(t, e) {
                        return ((t = Rc(t, e)).index = 0), (t.sibling = null), t
                    }

                    function a(e, n, i) {
                        return (
                            (e.index = i),
                                t
                                    ? null !== (i = e.alternate)
                                        ? (i = i.index) < n
                                            ? ((e.flags |= 2), n)
                                            : i
                                        : ((e.flags |= 2), n)
                                    : ((e.flags |= 1048576), n)
                        )
                    }

                    function s(e) {
                        return t && null === e.alternate && (e.flags |= 2), e
                    }

                    function l(t, e, n, i) {
                        return null === e || 6 !== e.tag
                            ? (((e = Fc(n, t.mode, i)).return = t), e)
                            : (((e = r(e, n)).return = t), e)
                    }

                    function c(t, e, n, i) {
                        var o = n.type
                        return o === k
                            ? h(t, e, n.props.children, i, n.key)
                            : null !== e &&
                            (e.elementType === o ||
                                ('object' == typeof o && null !== o && o.$$typeof === T && qo(o) === e.type))
                                ? (((i = r(e, n.props)).ref = Qo(t, e, n)), (i.return = t), i)
                                : (((i = Ac(n.type, n.key, n.props, null, t.mode, i)).ref = Qo(t, e, n)),
                                    (i.return = t),
                                    i)
                    }

                    function u(t, e, n, i) {
                        return null === e ||
                        4 !== e.tag ||
                        e.stateNode.containerInfo !== n.containerInfo ||
                        e.stateNode.implementation !== n.implementation
                            ? (((e = Vc(n, t.mode, i)).return = t), e)
                            : (((e = r(e, n.children || [])).return = t), e)
                    }

                    function h(t, e, n, i, o) {
                        return null === e || 7 !== e.tag
                            ? (((e = Nc(n, t.mode, i, o)).return = t), e)
                            : (((e = r(e, n)).return = t), e)
                    }

                    function d(t, e, n) {
                        if (('string' == typeof e && '' !== e) || 'number' == typeof e)
                            return ((e = Fc('' + e, t.mode, n)).return = t), e
                        if ('object' == typeof e && null !== e) {
                            switch (e.$$typeof) {
                                case _:
                                    return (
                                        ((n = Ac(e.type, e.key, e.props, null, t.mode, n)).ref = Qo(t, null, e)),
                                            (n.return = t),
                                            n
                                    )
                                case w:
                                    return ((e = Vc(e, t.mode, n)).return = t), e
                                case T:
                                    return d(t, (0, e._init)(e._payload), n)
                            }
                            if (et(e) || A(e)) return ((e = Nc(e, t.mode, n, null)).return = t), e
                            Xo(t, e)
                        }
                        return null
                    }

                    function f(t, e, n, i) {
                        var r = null !== e ? e.key : null
                        if (('string' == typeof n && '' !== n) || 'number' == typeof n)
                            return null !== r ? null : l(t, e, '' + n, i)
                        if ('object' == typeof n && null !== n) {
                            switch (n.$$typeof) {
                                case _:
                                    return n.key === r ? c(t, e, n, i) : null
                                case w:
                                    return n.key === r ? u(t, e, n, i) : null
                                case T:
                                    return f(t, e, (r = n._init)(n._payload), i)
                            }
                            if (et(n) || A(n)) return null !== r ? null : h(t, e, n, i, null)
                            Xo(t, n)
                        }
                        return null
                    }

                    function p(t, e, n, i, r) {
                        if (('string' == typeof i && '' !== i) || 'number' == typeof i)
                            return l(e, (t = t.get(n) || null), '' + i, r)
                        if ('object' == typeof i && null !== i) {
                            switch (i.$$typeof) {
                                case _:
                                    return c(e, (t = t.get(null === i.key ? n : i.key) || null), i, r)
                                case w:
                                    return u(e, (t = t.get(null === i.key ? n : i.key) || null), i, r)
                                case T:
                                    return p(t, e, n, (0, i._init)(i._payload), r)
                            }
                            if (et(i) || A(i)) return h(e, (t = t.get(n) || null), i, r, null)
                            Xo(e, i)
                        }
                        return null
                    }

                    function g(r, o, s, l) {
                        for (
                            var c = null, u = null, h = o, g = (o = 0), m = null;
                            null !== h && g < s.length;
                            g++
                        ) {
                            h.index > g ? ((m = h), (h = null)) : (m = h.sibling)
                            var b = f(r, h, s[g], l)
                            if (null === b) {
                                null === h && (h = m)
                                break
                            }
                            t && h && null === b.alternate && e(r, h),
                                (o = a(b, o, g)),
                                null === u ? (c = b) : (u.sibling = b),
                                (u = b),
                                (h = m)
                        }
                        if (g === s.length) return n(r, h), ro && Zr(r, g), c
                        if (null === h) {
                            for (; g < s.length; g++)
                                null !== (h = d(r, s[g], l)) &&
                                ((o = a(h, o, g)), null === u ? (c = h) : (u.sibling = h), (u = h))
                            return ro && Zr(r, g), c
                        }
                        for (h = i(r, h); g < s.length; g++)
                            null !== (m = p(h, r, g, s[g], l)) &&
                            (t && null !== m.alternate && h.delete(null === m.key ? g : m.key),
                                (o = a(m, o, g)),
                                null === u ? (c = m) : (u.sibling = m),
                                (u = m))
                        return (
                            t &&
                            h.forEach(function (t) {
                                return e(r, t)
                            }),
                            ro && Zr(r, g),
                                c
                        )
                    }

                    function m(r, s, l, c) {
                        var u = A(l)
                        if ('function' != typeof u) throw Error(o(150))
                        if (null == (l = u.call(l))) throw Error(o(151))
                        for (
                            var h = (u = null), g = s, m = (s = 0), b = null, y = l.next();
                            null !== g && !y.done;
                            m++, y = l.next()
                        ) {
                            g.index > m ? ((b = g), (g = null)) : (b = g.sibling)
                            var v = f(r, g, y.value, c)
                            if (null === v) {
                                null === g && (g = b)
                                break
                            }
                            t && g && null === v.alternate && e(r, g),
                                (s = a(v, s, m)),
                                null === h ? (u = v) : (h.sibling = v),
                                (h = v),
                                (g = b)
                        }
                        if (y.done) return n(r, g), ro && Zr(r, m), u
                        if (null === g) {
                            for (; !y.done; m++, y = l.next())
                                null !== (y = d(r, y.value, c)) &&
                                ((s = a(y, s, m)), null === h ? (u = y) : (h.sibling = y), (h = y))
                            return ro && Zr(r, m), u
                        }
                        for (g = i(r, g); !y.done; m++, y = l.next())
                            null !== (y = p(g, r, m, y.value, c)) &&
                            (t && null !== y.alternate && g.delete(null === y.key ? m : y.key),
                                (s = a(y, s, m)),
                                null === h ? (u = y) : (h.sibling = y),
                                (h = y))
                        return (
                            t &&
                            g.forEach(function (t) {
                                return e(r, t)
                            }),
                            ro && Zr(r, m),
                                u
                        )
                    }

                    return function t(i, o, a, l) {
                        if (
                            ('object' == typeof a &&
                            null !== a &&
                            a.type === k &&
                            null === a.key &&
                            (a = a.props.children),
                            'object' == typeof a && null !== a)
                        ) {
                            switch (a.$$typeof) {
                                case _:
                                    t: {
                                        for (var c = a.key, u = o; null !== u;) {
                                            if (u.key === c) {
                                                if ((c = a.type) === k) {
                                                    if (7 === u.tag) {
                                                        n(i, u.sibling), ((o = r(u, a.props.children)).return = i), (i = o)
                                                        break t
                                                    }
                                                } else if (
                                                    u.elementType === c ||
                                                    ('object' == typeof c &&
                                                        null !== c &&
                                                        c.$$typeof === T &&
                                                        qo(c) === u.type)
                                                ) {
                                                    n(i, u.sibling),
                                                        ((o = r(u, a.props)).ref = Qo(i, u, a)),
                                                        (o.return = i),
                                                        (i = o)
                                                    break t
                                                }
                                                n(i, u)
                                                break
                                            }
                                            e(i, u), (u = u.sibling)
                                        }
                                        a.type === k
                                            ? (((o = Nc(a.props.children, i.mode, l, a.key)).return = i), (i = o))
                                            : (((l = Ac(a.type, a.key, a.props, null, i.mode, l)).ref = Qo(i, o, a)),
                                                (l.return = i),
                                                (i = l))
                                    }
                                    return s(i)
                                case w:
                                    t: {
                                        for (u = a.key; null !== o;) {
                                            if (o.key === u) {
                                                if (
                                                    4 === o.tag &&
                                                    o.stateNode.containerInfo === a.containerInfo &&
                                                    o.stateNode.implementation === a.implementation
                                                ) {
                                                    n(i, o.sibling), ((o = r(o, a.children || [])).return = i), (i = o)
                                                    break t
                                                }
                                                n(i, o)
                                                break
                                            }
                                            e(i, o), (o = o.sibling)
                                        }
                                        ;((o = Vc(a, i.mode, l)).return = i), (i = o)
                                    }
                                    return s(i)
                                case T:
                                    return t(i, o, (u = a._init)(a._payload), l)
                            }
                            if (et(a)) return g(i, o, a, l)
                            if (A(a)) return m(i, o, a, l)
                            Xo(i, a)
                        }
                        return ('string' == typeof a && '' !== a) || 'number' == typeof a
                            ? ((a = '' + a),
                                null !== o && 6 === o.tag
                                    ? (n(i, o.sibling), ((o = r(o, a)).return = i), (i = o))
                                    : (n(i, o), ((o = Fc(a, i.mode, l)).return = i), (i = o)),
                                s(i))
                            : n(i, o)
                    }
                }

                var Go = Ko(!0),
                    Zo = Ko(!1),
                    Jo = {},
                    ta = Sr(Jo),
                    ea = Sr(Jo),
                    na = Sr(Jo)

                function ia(t) {
                    if (t === Jo) throw Error(o(174))
                    return t
                }

                function ra(t, e) {
                    switch ((Er(na, e), Er(ea, t), Er(ta, Jo), (t = e.nodeType))) {
                        case 9:
                        case 11:
                            e = (e = e.documentElement) ? e.namespaceURI : lt(null, '')
                            break
                        default:
                            e = lt((e = (t = 8 === t ? e.parentNode : e).namespaceURI || null), (t = t.tagName))
                    }
                    Mr(ta), Er(ta, e)
                }

                function oa() {
                    Mr(ta), Mr(ea), Mr(na)
                }

                function aa(t) {
                    ia(na.current)
                    var e = ia(ta.current),
                        n = lt(e, t.type)
                    e !== n && (Er(ea, t), Er(ta, n))
                }

                function sa(t) {
                    ea.current === t && (Mr(ta), Mr(ea))
                }

                var la = Sr(0)

                function ca(t) {
                    for (var e = t; null !== e;) {
                        if (13 === e.tag) {
                            var n = e.memoizedState
                            if (null !== n && (null === (n = n.dehydrated) || '$?' === n.data || '$!' === n.data))
                                return e
                        } else if (19 === e.tag && void 0 !== e.memoizedProps.revealOrder) {
                            if (0 != (128 & e.flags)) return e
                        } else if (null !== e.child) {
                            ;(e.child.return = e), (e = e.child)
                            continue
                        }
                        if (e === t) break
                        for (; null === e.sibling;) {
                            if (null === e.return || e.return === t) return null
                            e = e.return
                        }
                        ;(e.sibling.return = e.return), (e = e.sibling)
                    }
                    return null
                }

                var ua = []

                function ha() {
                    for (var t = 0; t < ua.length; t++) ua[t]._workInProgressVersionPrimary = null
                    ua.length = 0
                }

                var da = x.ReactCurrentDispatcher,
                    fa = x.ReactCurrentBatchConfig,
                    pa = 0,
                    ga = null,
                    ma = null,
                    ba = null,
                    ya = !1,
                    va = !1,
                    xa = 0,
                    _a = 0

                function wa() {
                    throw Error(o(321))
                }

                function ka(t, e) {
                    if (null === e) return !1
                    for (var n = 0; n < e.length && n < t.length; n++) if (!si(t[n], e[n])) return !1
                    return !0
                }

                function Sa(t, e, n, i, r, a) {
                    if (
                        ((pa = a),
                            (ga = e),
                            (e.memoizedState = null),
                            (e.updateQueue = null),
                            (e.lanes = 0),
                            (da.current = null === t || null === t.memoizedState ? ss : ls),
                            (t = n(i, r)),
                            va)
                    ) {
                        a = 0
                        do {
                            if (((va = !1), (xa = 0), 25 <= a)) throw Error(o(301))
                                ;
                            (a += 1), (ba = ma = null), (e.updateQueue = null), (da.current = cs), (t = n(i, r))
                        } while (va)
                    }
                    if (
                        ((da.current = as),
                            (e = null !== ma && null !== ma.next),
                            (pa = 0),
                            (ba = ma = ga = null),
                            (ya = !1),
                            e)
                    )
                        throw Error(o(300))
                    return t
                }

                function Ma() {
                    var t = 0 !== xa
                    return (xa = 0), t
                }

                function Ea() {
                    var t = {memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null}
                    return null === ba ? (ga.memoizedState = ba = t) : (ba = ba.next = t), ba
                }

                function Ca() {
                    if (null === ma) {
                        var t = ga.alternate
                        t = null !== t ? t.memoizedState : null
                    } else t = ma.next
                    var e = null === ba ? ga.memoizedState : ba.next
                    if (null !== e) (ba = e), (ma = t)
                    else {
                        if (null === t) throw Error(o(310))
                            ;
                        (t = {
                            memoizedState: (ma = t).memoizedState,
                            baseState: ma.baseState,
                            baseQueue: ma.baseQueue,
                            queue: ma.queue,
                            next: null
                        }),
                            null === ba ? (ga.memoizedState = ba = t) : (ba = ba.next = t)
                    }
                    return ba
                }

                function Pa(t, e) {
                    return 'function' == typeof e ? e(t) : e
                }

                function La(t) {
                    var e = Ca(),
                        n = e.queue
                    if (null === n) throw Error(o(311))
                    n.lastRenderedReducer = t
                    var i = ma,
                        r = i.baseQueue,
                        a = n.pending
                    if (null !== a) {
                        if (null !== r) {
                            var s = r.next
                            ;(r.next = a.next), (a.next = s)
                        }
                        ;(i.baseQueue = r = a), (n.pending = null)
                    }
                    if (null !== r) {
                        ;(a = r.next), (i = i.baseState)
                        var l = (s = null),
                            c = null,
                            u = a
                        do {
                            var h = u.lane
                            if ((pa & h) === h)
                                null !== c &&
                                (c = c.next =
                                    {
                                        lane: 0,
                                        action: u.action,
                                        hasEagerState: u.hasEagerState,
                                        eagerState: u.eagerState,
                                        next: null
                                    }),
                                    (i = u.hasEagerState ? u.eagerState : t(i, u.action))
                            else {
                                var d = {
                                    lane: h,
                                    action: u.action,
                                    hasEagerState: u.hasEagerState,
                                    eagerState: u.eagerState,
                                    next: null
                                }
                                null === c ? ((l = c = d), (s = i)) : (c = c.next = d), (ga.lanes |= h), (Il |= h)
                            }
                            u = u.next
                        } while (null !== u && u !== a)
                        null === c ? (s = i) : (c.next = l),
                        si(i, e.memoizedState) || (xs = !0),
                            (e.memoizedState = i),
                            (e.baseState = s),
                            (e.baseQueue = c),
                            (n.lastRenderedState = i)
                    }
                    if (null !== (t = n.interleaved)) {
                        r = t
                        do {
                            ;(a = r.lane), (ga.lanes |= a), (Il |= a), (r = r.next)
                        } while (r !== t)
                    } else null === r && (n.lanes = 0)
                    return [e.memoizedState, n.dispatch]
                }

                function Da(t) {
                    var e = Ca(),
                        n = e.queue
                    if (null === n) throw Error(o(311))
                    n.lastRenderedReducer = t
                    var i = n.dispatch,
                        r = n.pending,
                        a = e.memoizedState
                    if (null !== r) {
                        n.pending = null
                        var s = (r = r.next)
                        do {
                            ;(a = t(a, s.action)), (s = s.next)
                        } while (s !== r)
                        si(a, e.memoizedState) || (xs = !0),
                            (e.memoizedState = a),
                        null === e.baseQueue && (e.baseState = a),
                            (n.lastRenderedState = a)
                    }
                    return [a, i]
                }

                function Oa() {
                }

                function Ta(t, e) {
                    var n = ga,
                        i = Ca(),
                        r = e(),
                        a = !si(i.memoizedState, r)
                    if (
                        (a && ((i.memoizedState = r), (xs = !0)),
                            (i = i.queue),
                            $a(Aa.bind(null, n, i, t), [t]),
                        i.getSnapshot !== e || a || (null !== ba && 1 & ba.memoizedState.tag))
                    ) {
                        if (((n.flags |= 2048), Va(9, Ra.bind(null, n, i, r, e), void 0, null), null === Dl))
                            throw Error(o(349))
                        0 != (30 & pa) || za(n, e, r)
                    }
                    return r
                }

                function za(t, e, n) {
                    ;(t.flags |= 16384),
                        (t = {getSnapshot: e, value: n}),
                        null === (e = ga.updateQueue)
                            ? ((e = {lastEffect: null, stores: null}), (ga.updateQueue = e), (e.stores = [t]))
                            : null === (n = e.stores)
                                ? (e.stores = [t])
                                : n.push(t)
                }

                function Ra(t, e, n, i) {
                    ;(e.value = n), (e.getSnapshot = i), Na(e) && Ia(t)
                }

                function Aa(t, e, n) {
                    return n(function () {
                        Na(e) && Ia(t)
                    })
                }

                function Na(t) {
                    var e = t.getSnapshot
                    t = t.value
                    try {
                        var n = e()
                        return !si(t, n)
                    } catch (t) {
                        return !0
                    }
                }

                function Ia(t) {
                    var e = Do(t, 1)
                    null !== e && ic(e, t, 1, -1)
                }

                function Fa(t) {
                    var e = Ea()
                    return (
                        'function' == typeof t && (t = t()),
                            (e.memoizedState = e.baseState = t),
                            (t = {
                                pending: null,
                                interleaved: null,
                                lanes: 0,
                                dispatch: null,
                                lastRenderedReducer: Pa,
                                lastRenderedState: t
                            }),
                            (e.queue = t),
                            (t = t.dispatch = ns.bind(null, ga, t)),
                            [e.memoizedState, t]
                    )
                }

                function Va(t, e, n, i) {
                    return (
                        (t = {tag: t, create: e, destroy: n, deps: i, next: null}),
                            null === (e = ga.updateQueue)
                                ? ((e = {lastEffect: null, stores: null}),
                                    (ga.updateQueue = e),
                                    (e.lastEffect = t.next = t))
                                : null === (n = e.lastEffect)
                                    ? (e.lastEffect = t.next = t)
                                    : ((i = n.next), (n.next = t), (t.next = i), (e.lastEffect = t)),
                            t
                    )
                }

                function Ba() {
                    return Ca().memoizedState
                }

                function ja(t, e, n, i) {
                    var r = Ea()
                    ;(ga.flags |= t), (r.memoizedState = Va(1 | e, n, void 0, void 0 === i ? null : i))
                }

                function Wa(t, e, n, i) {
                    var r = Ca()
                    i = void 0 === i ? null : i
                    var o = void 0
                    if (null !== ma) {
                        var a = ma.memoizedState
                        if (((o = a.destroy), null !== i && ka(i, a.deps)))
                            return void (r.memoizedState = Va(e, n, o, i))
                    }
                    ;(ga.flags |= t), (r.memoizedState = Va(1 | e, n, o, i))
                }

                function Ha(t, e) {
                    return ja(8390656, 8, t, e)
                }

                function $a(t, e) {
                    return Wa(2048, 8, t, e)
                }

                function Ua(t, e) {
                    return Wa(4, 2, t, e)
                }

                function Ya(t, e) {
                    return Wa(4, 4, t, e)
                }

                function Qa(t, e) {
                    return 'function' == typeof e
                        ? ((t = t()),
                            e(t),
                            function () {
                                e(null)
                            })
                        : null != e
                            ? ((t = t()),
                                (e.current = t),
                                function () {
                                    e.current = null
                                })
                            : void 0
                }

                function Xa(t, e, n) {
                    return (n = null != n ? n.concat([t]) : null), Wa(4, 4, Qa.bind(null, e, t), n)
                }

                function qa() {
                }

                function Ka(t, e) {
                    var n = Ca()
                    e = void 0 === e ? null : e
                    var i = n.memoizedState
                    return null !== i && null !== e && ka(e, i[1]) ? i[0] : ((n.memoizedState = [t, e]), t)
                }

                function Ga(t, e) {
                    var n = Ca()
                    e = void 0 === e ? null : e
                    var i = n.memoizedState
                    return null !== i && null !== e && ka(e, i[1])
                        ? i[0]
                        : ((t = t()), (n.memoizedState = [t, e]), t)
                }

                function Za(t, e, n) {
                    return 0 == (21 & pa)
                        ? (t.baseState && ((t.baseState = !1), (xs = !0)), (t.memoizedState = n))
                        : (si(n, e) || ((n = ge()), (ga.lanes |= n), (Il |= n), (t.baseState = !0)), e)
                }

                function Ja(t, e) {
                    var n = ve
                    ;(ve = 0 !== n && 4 > n ? n : 4), t(!0)
                    var i = fa.transition
                    fa.transition = {}
                    try {
                        t(!1), e()
                    } finally {
                        ;(ve = n), (fa.transition = i)
                    }
                }

                function ts() {
                    return Ca().memoizedState
                }

                function es(t, e, n) {
                    var i = nc(t)
                    ;(n = {lane: i, action: n, hasEagerState: !1, eagerState: null, next: null}),
                        is(t) ? rs(e, n) : null !== (n = Lo(t, e, n, i)) && (ic(n, t, i, ec()), os(n, e, i))
                }

                function ns(t, e, n) {
                    var i = nc(t),
                        r = {lane: i, action: n, hasEagerState: !1, eagerState: null, next: null}
                    if (is(t)) rs(e, r)
                    else {
                        var o = t.alternate
                        if (
                            0 === t.lanes &&
                            (null === o || 0 === o.lanes) &&
                            null !== (o = e.lastRenderedReducer)
                        )
                            try {
                                var a = e.lastRenderedState,
                                    s = o(a, n)
                                if (((r.hasEagerState = !0), (r.eagerState = s), si(s, a))) {
                                    var l = e.interleaved
                                    return (
                                        null === l ? ((r.next = r), Po(e)) : ((r.next = l.next), (l.next = r)),
                                            void (e.interleaved = r)
                                    )
                                }
                            } catch (t) {
                            }
                        null !== (n = Lo(t, e, r, i)) && (ic(n, t, i, (r = ec())), os(n, e, i))
                    }
                }

                function is(t) {
                    var e = t.alternate
                    return t === ga || (null !== e && e === ga)
                }

                function rs(t, e) {
                    va = ya = !0
                    var n = t.pending
                    null === n ? (e.next = e) : ((e.next = n.next), (n.next = e)), (t.pending = e)
                }

                function os(t, e, n) {
                    if (0 != (4194240 & n)) {
                        var i = e.lanes
                        ;(n |= i &= t.pendingLanes), (e.lanes = n), ye(t, n)
                    }
                }

                var as = {
                        readContext: Eo,
                        useCallback: wa,
                        useContext: wa,
                        useEffect: wa,
                        useImperativeHandle: wa,
                        useInsertionEffect: wa,
                        useLayoutEffect: wa,
                        useMemo: wa,
                        useReducer: wa,
                        useRef: wa,
                        useState: wa,
                        useDebugValue: wa,
                        useDeferredValue: wa,
                        useTransition: wa,
                        useMutableSource: wa,
                        useSyncExternalStore: wa,
                        useId: wa,
                        unstable_isNewReconciler: !1
                    },
                    ss = {
                        readContext: Eo,
                        useCallback: function (t, e) {
                            return (Ea().memoizedState = [t, void 0 === e ? null : e]), t
                        },
                        useContext: Eo,
                        useEffect: Ha,
                        useImperativeHandle: function (t, e, n) {
                            return (n = null != n ? n.concat([t]) : null), ja(4194308, 4, Qa.bind(null, e, t), n)
                        },
                        useLayoutEffect: function (t, e) {
                            return ja(4194308, 4, t, e)
                        },
                        useInsertionEffect: function (t, e) {
                            return ja(4, 2, t, e)
                        },
                        useMemo: function (t, e) {
                            var n = Ea()
                            return (e = void 0 === e ? null : e), (t = t()), (n.memoizedState = [t, e]), t
                        },
                        useReducer: function (t, e, n) {
                            var i = Ea()
                            return (
                                (e = void 0 !== n ? n(e) : e),
                                    (i.memoizedState = i.baseState = e),
                                    (t = {
                                        pending: null,
                                        interleaved: null,
                                        lanes: 0,
                                        dispatch: null,
                                        lastRenderedReducer: t,
                                        lastRenderedState: e
                                    }),
                                    (i.queue = t),
                                    (t = t.dispatch = es.bind(null, ga, t)),
                                    [i.memoizedState, t]
                            )
                        },
                        useRef: function (t) {
                            return (t = {current: t}), (Ea().memoizedState = t)
                        },
                        useState: Fa,
                        useDebugValue: qa,
                        useDeferredValue: function (t) {
                            return (Ea().memoizedState = t)
                        },
                        useTransition: function () {
                            var t = Fa(!1),
                                e = t[0]
                            return (t = Ja.bind(null, t[1])), (Ea().memoizedState = t), [e, t]
                        },
                        useMutableSource: function () {
                        },
                        useSyncExternalStore: function (t, e, n) {
                            var i = ga,
                                r = Ea()
                            if (ro) {
                                if (void 0 === n) throw Error(o(407))
                                n = n()
                            } else {
                                if (((n = e()), null === Dl)) throw Error(o(349))
                                0 != (30 & pa) || za(i, e, n)
                            }
                            r.memoizedState = n
                            var a = {value: n, getSnapshot: e}
                            return (
                                (r.queue = a),
                                    Ha(Aa.bind(null, i, a, t), [t]),
                                    (i.flags |= 2048),
                                    Va(9, Ra.bind(null, i, a, n, e), void 0, null),
                                    n
                            )
                        },
                        useId: function () {
                            var t = Ea(),
                                e = Dl.identifierPrefix
                            if (ro) {
                                var n = Gr
                                ;(e = ':' + e + 'R' + (n = (Kr & ~(1 << (32 - ae(Kr) - 1))).toString(32) + n)),
                                0 < (n = xa++) && (e += 'H' + n.toString(32)),
                                    (e += ':')
                            } else e = ':' + e + 'r' + (n = _a++).toString(32) + ':'
                            return (t.memoizedState = e)
                        },
                        unstable_isNewReconciler: !1
                    },
                    ls = {
                        readContext: Eo,
                        useCallback: Ka,
                        useContext: Eo,
                        useEffect: $a,
                        useImperativeHandle: Xa,
                        useInsertionEffect: Ua,
                        useLayoutEffect: Ya,
                        useMemo: Ga,
                        useReducer: La,
                        useRef: Ba,
                        useState: function () {
                            return La(Pa)
                        },
                        useDebugValue: qa,
                        useDeferredValue: function (t) {
                            return Za(Ca(), ma.memoizedState, t)
                        },
                        useTransition: function () {
                            return [La(Pa)[0], Ca().memoizedState]
                        },
                        useMutableSource: Oa,
                        useSyncExternalStore: Ta,
                        useId: ts,
                        unstable_isNewReconciler: !1
                    },
                    cs = {
                        readContext: Eo,
                        useCallback: Ka,
                        useContext: Eo,
                        useEffect: $a,
                        useImperativeHandle: Xa,
                        useInsertionEffect: Ua,
                        useLayoutEffect: Ya,
                        useMemo: Ga,
                        useReducer: Da,
                        useRef: Ba,
                        useState: function () {
                            return Da(Pa)
                        },
                        useDebugValue: qa,
                        useDeferredValue: function (t) {
                            var e = Ca()
                            return null === ma ? (e.memoizedState = t) : Za(e, ma.memoizedState, t)
                        },
                        useTransition: function () {
                            return [Da(Pa)[0], Ca().memoizedState]
                        },
                        useMutableSource: Oa,
                        useSyncExternalStore: Ta,
                        useId: ts,
                        unstable_isNewReconciler: !1
                    }

                function us(t, e) {
                    try {
                        var n = '',
                            i = e
                        do {
                            ;(n += j(i)), (i = i.return)
                        } while (i)
                        var r = n
                    } catch (t) {
                        r = '\nError generating stack: ' + t.message + '\n' + t.stack
                    }
                    return {value: t, source: e, stack: r, digest: null}
                }

                function hs(t, e, n) {
                    return {
                        value: t,
                        source: null,
                        stack: null != n ? n : null,
                        digest: null != e ? e : null
                    }
                }

                function ds(t, e) {
                    try {
                        console.error(e.value)
                    } catch (t) {
                        setTimeout(function () {
                            throw t
                        })
                    }
                }

                var fs = 'function' == typeof WeakMap ? WeakMap : Map

                function ps(t, e, n) {
                    ;((n = Ro(-1, n)).tag = 3), (n.payload = {element: null})
                    var i = e.value
                    return (
                        (n.callback = function () {
                            Ul || ((Ul = !0), (Yl = i)), ds(0, e)
                        }),
                            n
                    )
                }

                function gs(t, e, n) {
                    ;(n = Ro(-1, n)).tag = 3
                    var i = t.type.getDerivedStateFromError
                    if ('function' == typeof i) {
                        var r = e.value
                        ;(n.payload = function () {
                            return i(r)
                        }),
                            (n.callback = function () {
                                ds(0, e)
                            })
                    }
                    var o = t.stateNode
                    return (
                        null !== o &&
                        'function' == typeof o.componentDidCatch &&
                        (n.callback = function () {
                            ds(0, e),
                            'function' != typeof i && (null === Ql ? (Ql = new Set([this])) : Ql.add(this))
                            var t = e.stack
                            this.componentDidCatch(e.value, {componentStack: null !== t ? t : ''})
                        }),
                            n
                    )
                }

                function ms(t, e, n) {
                    var i = t.pingCache
                    if (null === i) {
                        i = t.pingCache = new fs()
                        var r = new Set()
                        i.set(e, r)
                    } else void 0 === (r = i.get(e)) && ((r = new Set()), i.set(e, r))
                    r.has(n) || (r.add(n), (t = Ec.bind(null, t, e, n)), e.then(t, t))
                }

                function bs(t) {
                    do {
                        var e
                        if (
                            ((e = 13 === t.tag) && (e = null === (e = t.memoizedState) || null !== e.dehydrated),
                                e)
                        )
                            return t
                        t = t.return
                    } while (null !== t)
                    return null
                }

                function ys(t, e, n, i, r) {
                    return 0 == (1 & t.mode)
                        ? (t === e
                            ? (t.flags |= 65536)
                            : ((t.flags |= 128),
                                (n.flags |= 131072),
                                (n.flags &= -52805),
                            1 === n.tag &&
                            (null === n.alternate
                                ? (n.tag = 17)
                                : (((e = Ro(-1, 1)).tag = 2), Ao(n, e, 1))),
                                (n.lanes |= 1)),
                            t)
                        : ((t.flags |= 65536), (t.lanes = r), t)
                }

                var vs = x.ReactCurrentOwner,
                    xs = !1

                function _s(t, e, n, i) {
                    e.child = null === t ? Zo(e, null, n, i) : Go(e, t.child, n, i)
                }

                function ws(t, e, n, i, r) {
                    n = n.render
                    var o = e.ref
                    return (
                        Mo(e, r),
                            (i = Sa(t, e, n, i, o, r)),
                            (n = Ma()),
                            null === t || xs
                                ? (ro && n && to(e), (e.flags |= 1), _s(t, e, i, r), e.child)
                                : ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~r), Us(t, e, r))
                    )
                }

                function ks(t, e, n, i, r) {
                    if (null === t) {
                        var o = n.type
                        return 'function' != typeof o ||
                        zc(o) ||
                        void 0 !== o.defaultProps ||
                        null !== n.compare ||
                        void 0 !== n.defaultProps
                            ? (((t = Ac(n.type, null, i, e, e.mode, r)).ref = e.ref),
                                (t.return = e),
                                (e.child = t))
                            : ((e.tag = 15), (e.type = o), Ss(t, e, o, i, r))
                    }
                    if (((o = t.child), 0 == (t.lanes & r))) {
                        var a = o.memoizedProps
                        if ((n = null !== (n = n.compare) ? n : li)(a, i) && t.ref === e.ref) return Us(t, e, r)
                    }
                    return (e.flags |= 1), ((t = Rc(o, i)).ref = e.ref), (t.return = e), (e.child = t)
                }

                function Ss(t, e, n, i, r) {
                    if (null !== t) {
                        var o = t.memoizedProps
                        if (li(o, i) && t.ref === e.ref) {
                            if (((xs = !1), (e.pendingProps = i = o), 0 == (t.lanes & r)))
                                return (e.lanes = t.lanes), Us(t, e, r)
                            0 != (131072 & t.flags) && (xs = !0)
                        }
                    }
                    return Cs(t, e, n, i, r)
                }

                function Ms(t, e, n) {
                    var i = e.pendingProps,
                        r = i.children,
                        o = null !== t ? t.memoizedState : null
                    if ('hidden' === i.mode)
                        if (0 == (1 & e.mode))
                            (e.memoizedState = {baseLanes: 0, cachePool: null, transitions: null}),
                                Er(Rl, zl),
                                (zl |= n)
                        else {
                            if (0 == (1073741824 & n))
                                return (
                                    (t = null !== o ? o.baseLanes | n : n),
                                        (e.lanes = e.childLanes = 1073741824),
                                        (e.memoizedState = {baseLanes: t, cachePool: null, transitions: null}),
                                        (e.updateQueue = null),
                                        Er(Rl, zl),
                                        (zl |= t),
                                        null
                                )
                                    ;
                            (e.memoizedState = {baseLanes: 0, cachePool: null, transitions: null}),
                                (i = null !== o ? o.baseLanes : n),
                                Er(Rl, zl),
                                (zl |= i)
                        }
                    else
                        null !== o ? ((i = o.baseLanes | n), (e.memoizedState = null)) : (i = n),
                            Er(Rl, zl),
                            (zl |= i)
                    return _s(t, e, r, n), e.child
                }

                function Es(t, e) {
                    var n = e.ref
                    ;((null === t && null !== n) || (null !== t && t.ref !== n)) &&
                    ((e.flags |= 512), (e.flags |= 2097152))
                }

                function Cs(t, e, n, i, r) {
                    var o = Tr(n) ? Dr : Pr.current
                    return (
                        (o = Or(e, o)),
                            Mo(e, r),
                            (n = Sa(t, e, n, i, o, r)),
                            (i = Ma()),
                            null === t || xs
                                ? (ro && i && to(e), (e.flags |= 1), _s(t, e, n, r), e.child)
                                : ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~r), Us(t, e, r))
                    )
                }

                function Ps(t, e, n, i, r) {
                    if (Tr(n)) {
                        var o = !0
                        Nr(e)
                    } else o = !1
                    if ((Mo(e, r), null === e.stateNode)) $s(t, e), $o(e, n, i), Yo(e, n, i, r), (i = !0)
                    else if (null === t) {
                        var a = e.stateNode,
                            s = e.memoizedProps
                        a.props = s
                        var l = a.context,
                            c = n.contextType
                        c = 'object' == typeof c && null !== c ? Eo(c) : Or(e, (c = Tr(n) ? Dr : Pr.current))
                        var u = n.getDerivedStateFromProps,
                            h = 'function' == typeof u || 'function' == typeof a.getSnapshotBeforeUpdate
                        h ||
                        ('function' != typeof a.UNSAFE_componentWillReceiveProps &&
                            'function' != typeof a.componentWillReceiveProps) ||
                        ((s !== i || l !== c) && Uo(e, a, i, c)),
                            (Oo = !1)
                        var d = e.memoizedState
                        ;(a.state = d),
                            Fo(e, i, a, r),
                            (l = e.memoizedState),
                            s !== i || d !== l || Lr.current || Oo
                                ? ('function' == typeof u && (jo(e, n, u, i), (l = e.memoizedState)),
                                    (s = Oo || Ho(e, n, s, i, d, l, c))
                                        ? (h ||
                                        ('function' != typeof a.UNSAFE_componentWillMount &&
                                            'function' != typeof a.componentWillMount) ||
                                        ('function' == typeof a.componentWillMount && a.componentWillMount(),
                                        'function' == typeof a.UNSAFE_componentWillMount &&
                                        a.UNSAFE_componentWillMount()),
                                        'function' == typeof a.componentDidMount && (e.flags |= 4194308))
                                        : ('function' == typeof a.componentDidMount && (e.flags |= 4194308),
                                            (e.memoizedProps = i),
                                            (e.memoizedState = l)),
                                    (a.props = i),
                                    (a.state = l),
                                    (a.context = c),
                                    (i = s))
                                : ('function' == typeof a.componentDidMount && (e.flags |= 4194308), (i = !1))
                    } else {
                        ;(a = e.stateNode),
                            zo(t, e),
                            (s = e.memoizedProps),
                            (c = e.type === e.elementType ? s : bo(e.type, s)),
                            (a.props = c),
                            (h = e.pendingProps),
                            (d = a.context),
                            (l =
                                'object' == typeof (l = n.contextType) && null !== l
                                    ? Eo(l)
                                    : Or(e, (l = Tr(n) ? Dr : Pr.current)))
                        var f = n.getDerivedStateFromProps
                        ;(u = 'function' == typeof f || 'function' == typeof a.getSnapshotBeforeUpdate) ||
                        ('function' != typeof a.UNSAFE_componentWillReceiveProps &&
                            'function' != typeof a.componentWillReceiveProps) ||
                        ((s !== h || d !== l) && Uo(e, a, i, l)),
                            (Oo = !1),
                            (d = e.memoizedState),
                            (a.state = d),
                            Fo(e, i, a, r)
                        var p = e.memoizedState
                        s !== h || d !== p || Lr.current || Oo
                            ? ('function' == typeof f && (jo(e, n, f, i), (p = e.memoizedState)),
                                (c = Oo || Ho(e, n, c, i, d, p, l) || !1)
                                    ? (u ||
                                    ('function' != typeof a.UNSAFE_componentWillUpdate &&
                                        'function' != typeof a.componentWillUpdate) ||
                                    ('function' == typeof a.componentWillUpdate && a.componentWillUpdate(i, p, l),
                                    'function' == typeof a.UNSAFE_componentWillUpdate &&
                                    a.UNSAFE_componentWillUpdate(i, p, l)),
                                    'function' == typeof a.componentDidUpdate && (e.flags |= 4),
                                    'function' == typeof a.getSnapshotBeforeUpdate && (e.flags |= 1024))
                                    : ('function' != typeof a.componentDidUpdate ||
                                    (s === t.memoizedProps && d === t.memoizedState) ||
                                    (e.flags |= 4),
                                    'function' != typeof a.getSnapshotBeforeUpdate ||
                                    (s === t.memoizedProps && d === t.memoizedState) ||
                                    (e.flags |= 1024),
                                        (e.memoizedProps = i),
                                        (e.memoizedState = p)),
                                (a.props = i),
                                (a.state = p),
                                (a.context = l),
                                (i = c))
                            : ('function' != typeof a.componentDidUpdate ||
                            (s === t.memoizedProps && d === t.memoizedState) ||
                            (e.flags |= 4),
                            'function' != typeof a.getSnapshotBeforeUpdate ||
                            (s === t.memoizedProps && d === t.memoizedState) ||
                            (e.flags |= 1024),
                                (i = !1))
                    }
                    return Ls(t, e, n, i, o, r)
                }

                function Ls(t, e, n, i, r, o) {
                    Es(t, e)
                    var a = 0 != (128 & e.flags)
                    if (!i && !a) return r && Ir(e, n, !1), Us(t, e, o)
                        ;
                    (i = e.stateNode), (vs.current = e)
                    var s = a && 'function' != typeof n.getDerivedStateFromError ? null : i.render()
                    return (
                        (e.flags |= 1),
                            null !== t && a
                                ? ((e.child = Go(e, t.child, null, o)), (e.child = Go(e, null, s, o)))
                                : _s(t, e, s, o),
                            (e.memoizedState = i.state),
                        r && Ir(e, n, !0),
                            e.child
                    )
                }

                function Ds(t) {
                    var e = t.stateNode
                    e.pendingContext
                        ? Rr(0, e.pendingContext, e.pendingContext !== e.context)
                        : e.context && Rr(0, e.context, !1),
                        ra(t, e.containerInfo)
                }

                function Os(t, e, n, i, r) {
                    return po(), go(r), (e.flags |= 256), _s(t, e, n, i), e.child
                }

                var Ts,
                    zs,
                    Rs,
                    As,
                    Ns = {dehydrated: null, treeContext: null, retryLane: 0}

                function Is(t) {
                    return {baseLanes: t, cachePool: null, transitions: null}
                }

                function Fs(t, e, n) {
                    var i,
                        r = e.pendingProps,
                        a = la.current,
                        s = !1,
                        l = 0 != (128 & e.flags)
                    if (
                        ((i = l) || (i = (null === t || null !== t.memoizedState) && 0 != (2 & a)),
                            i
                                ? ((s = !0), (e.flags &= -129))
                                : (null !== t && null === t.memoizedState) || (a |= 1),
                            Er(la, 1 & a),
                        null === t)
                    )
                        return (
                            co(e),
                                null !== (t = e.memoizedState) && null !== (t = t.dehydrated)
                                    ? (0 == (1 & e.mode)
                                        ? (e.lanes = 1)
                                        : '$!' === t.data
                                            ? (e.lanes = 8)
                                            : (e.lanes = 1073741824),
                                        null)
                                    : ((l = r.children),
                                        (t = r.fallback),
                                        s
                                            ? ((r = e.mode),
                                                (s = e.child),
                                                (l = {mode: 'hidden', children: l}),
                                                0 == (1 & r) && null !== s
                                                    ? ((s.childLanes = 0), (s.pendingProps = l))
                                                    : (s = Ic(l, r, 0, null)),
                                                (t = Nc(t, r, n, null)),
                                                (s.return = e),
                                                (t.return = e),
                                                (s.sibling = t),
                                                (e.child = s),
                                                (e.child.memoizedState = Is(n)),
                                                (e.memoizedState = Ns),
                                                t)
                                            : Vs(e, l))
                        )
                    if (null !== (a = t.memoizedState) && null !== (i = a.dehydrated))
                        return (function (t, e, n, i, r, a, s) {
                            if (n)
                                return 256 & e.flags
                                    ? ((e.flags &= -257), Bs(t, e, s, (i = hs(Error(o(422))))))
                                    : null !== e.memoizedState
                                        ? ((e.child = t.child), (e.flags |= 128), null)
                                        : ((a = i.fallback),
                                            (r = e.mode),
                                            (i = Ic({mode: 'visible', children: i.children}, r, 0, null)),
                                            ((a = Nc(a, r, s, null)).flags |= 2),
                                            (i.return = e),
                                            (a.return = e),
                                            (i.sibling = a),
                                            (e.child = i),
                                        0 != (1 & e.mode) && Go(e, t.child, null, s),
                                            (e.child.memoizedState = Is(s)),
                                            (e.memoizedState = Ns),
                                            a)
                            if (0 == (1 & e.mode)) return Bs(t, e, s, null)
                            if ('$!' === r.data) {
                                if ((i = r.nextSibling && r.nextSibling.dataset)) var l = i.dgst
                                return (i = l), Bs(t, e, s, (i = hs((a = Error(o(419))), i, void 0)))
                            }
                            if (((l = 0 != (s & t.childLanes)), xs || l)) {
                                if (null !== (i = Dl)) {
                                    switch (s & -s) {
                                        case 4:
                                            r = 2
                                            break
                                        case 16:
                                            r = 8
                                            break
                                        case 64:
                                        case 128:
                                        case 256:
                                        case 512:
                                        case 1024:
                                        case 2048:
                                        case 4096:
                                        case 8192:
                                        case 16384:
                                        case 32768:
                                        case 65536:
                                        case 131072:
                                        case 262144:
                                        case 524288:
                                        case 1048576:
                                        case 2097152:
                                        case 4194304:
                                        case 8388608:
                                        case 16777216:
                                        case 33554432:
                                        case 67108864:
                                            r = 32
                                            break
                                        case 536870912:
                                            r = 268435456
                                            break
                                        default:
                                            r = 0
                                    }
                                    0 !== (r = 0 != (r & (i.suspendedLanes | s)) ? 0 : r) &&
                                    r !== a.retryLane &&
                                    ((a.retryLane = r), Do(t, r), ic(i, t, r, -1))
                                }
                                return mc(), Bs(t, e, s, (i = hs(Error(o(421)))))
                            }
                            return '$?' === r.data
                                ? ((e.flags |= 128),
                                    (e.child = t.child),
                                    (e = Pc.bind(null, t)),
                                    (r._reactRetry = e),
                                    null)
                                : ((t = a.treeContext),
                                    (io = cr(r.nextSibling)),
                                    (no = e),
                                    (ro = !0),
                                    (oo = null),
                                null !== t &&
                                ((Qr[Xr++] = Kr),
                                    (Qr[Xr++] = Gr),
                                    (Qr[Xr++] = qr),
                                    (Kr = t.id),
                                    (Gr = t.overflow),
                                    (qr = e)),
                                    ((e = Vs(e, i.children)).flags |= 4096),
                                    e)
                        })(t, e, l, r, i, a, n)
                    if (s) {
                        ;(s = r.fallback), (l = e.mode), (i = (a = t.child).sibling)
                        var c = {mode: 'hidden', children: r.children}
                        return (
                            0 == (1 & l) && e.child !== a
                                ? (((r = e.child).childLanes = 0), (r.pendingProps = c), (e.deletions = null))
                                : ((r = Rc(a, c)).subtreeFlags = 14680064 & a.subtreeFlags),
                                null !== i ? (s = Rc(i, s)) : ((s = Nc(s, l, n, null)).flags |= 2),
                                (s.return = e),
                                (r.return = e),
                                (r.sibling = s),
                                (e.child = r),
                                (r = s),
                                (s = e.child),
                                (l =
                                    null === (l = t.child.memoizedState)
                                        ? Is(n)
                                        : {baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions}),
                                (s.memoizedState = l),
                                (s.childLanes = t.childLanes & ~n),
                                (e.memoizedState = Ns),
                                r
                        )
                    }
                    return (
                        (t = (s = t.child).sibling),
                            (r = Rc(s, {mode: 'visible', children: r.children})),
                        0 == (1 & e.mode) && (r.lanes = n),
                            (r.return = e),
                            (r.sibling = null),
                        null !== t &&
                        (null === (n = e.deletions) ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t)),
                            (e.child = r),
                            (e.memoizedState = null),
                            r
                    )
                }

                function Vs(t, e) {
                    return (
                        ((e = Ic({mode: 'visible', children: e}, t.mode, 0, null)).return = t), (t.child = e)
                    )
                }

                function Bs(t, e, n, i) {
                    return (
                        null !== i && go(i),
                            Go(e, t.child, null, n),
                            ((t = Vs(e, e.pendingProps.children)).flags |= 2),
                            (e.memoizedState = null),
                            t
                    )
                }

                function js(t, e, n) {
                    t.lanes |= e
                    var i = t.alternate
                    null !== i && (i.lanes |= e), So(t.return, e, n)
                }

                function Ws(t, e, n, i, r) {
                    var o = t.memoizedState
                    null === o
                        ? (t.memoizedState = {
                            isBackwards: e,
                            rendering: null,
                            renderingStartTime: 0,
                            last: i,
                            tail: n,
                            tailMode: r
                        })
                        : ((o.isBackwards = e),
                            (o.rendering = null),
                            (o.renderingStartTime = 0),
                            (o.last = i),
                            (o.tail = n),
                            (o.tailMode = r))
                }

                function Hs(t, e, n) {
                    var i = e.pendingProps,
                        r = i.revealOrder,
                        o = i.tail
                    if ((_s(t, e, i.children, n), 0 != (2 & (i = la.current))))
                        (i = (1 & i) | 2), (e.flags |= 128)
                    else {
                        if (null !== t && 0 != (128 & t.flags))
                            t: for (t = e.child; null !== t;) {
                                if (13 === t.tag) null !== t.memoizedState && js(t, n, e)
                                else if (19 === t.tag) js(t, n, e)
                                else if (null !== t.child) {
                                    ;(t.child.return = t), (t = t.child)
                                    continue
                                }
                                if (t === e) break;
                                for (; null === t.sibling;) {
                                    if (null === t.return || t.return === e) break t
                                    t = t.return
                                }
                                ;(t.sibling.return = t.return), (t = t.sibling)
                            }
                        i &= 1
                    }
                    if ((Er(la, i), 0 == (1 & e.mode))) e.memoizedState = null
                    else
                        switch (r) {
                            case 'forwards':
                                for (n = e.child, r = null; null !== n;)
                                    null !== (t = n.alternate) && null === ca(t) && (r = n), (n = n.sibling)
                                null === (n = r)
                                    ? ((r = e.child), (e.child = null))
                                    : ((r = n.sibling), (n.sibling = null)),
                                    Ws(e, !1, r, n, o)
                                break
                            case 'backwards':
                                for (n = null, r = e.child, e.child = null; null !== r;) {
                                    if (null !== (t = r.alternate) && null === ca(t)) {
                                        e.child = r
                                        break
                                    }
                                    ;(t = r.sibling), (r.sibling = n), (n = r), (r = t)
                                }
                                Ws(e, !0, n, null, o)
                                break
                            case 'together':
                                Ws(e, !1, null, null, void 0)
                                break
                            default:
                                e.memoizedState = null
                        }
                    return e.child
                }

                function $s(t, e) {
                    0 == (1 & e.mode) &&
                    null !== t &&
                    ((t.alternate = null), (e.alternate = null), (e.flags |= 2))
                }

                function Us(t, e, n) {
                    if (
                        (null !== t && (e.dependencies = t.dependencies),
                            (Il |= e.lanes),
                        0 == (n & e.childLanes))
                    )
                        return null
                    if (null !== t && e.child !== t.child) throw Error(o(153))
                    if (null !== e.child) {
                        for (
                            n = Rc((t = e.child), t.pendingProps), e.child = n, n.return = e;
                            null !== t.sibling;
                        )
                            (t = t.sibling), ((n = n.sibling = Rc(t, t.pendingProps)).return = e)
                        n.sibling = null
                    }
                    return e.child
                }

                function Ys(t, e) {
                    if (!ro)
                        switch (t.tailMode) {
                            case 'hidden':
                                e = t.tail
                                for (var n = null; null !== e;) null !== e.alternate && (n = e), (e = e.sibling)
                                null === n ? (t.tail = null) : (n.sibling = null)
                                break
                            case 'collapsed':
                                n = t.tail
                                for (var i = null; null !== n;) null !== n.alternate && (i = n), (n = n.sibling)
                                null === i
                                    ? e || null === t.tail
                                        ? (t.tail = null)
                                        : (t.tail.sibling = null)
                                    : (i.sibling = null)
                        }
                }

                function Qs(t) {
                    var e = null !== t.alternate && t.alternate.child === t.child,
                        n = 0,
                        i = 0
                    if (e)
                        for (var r = t.child; null !== r;)
                            (n |= r.lanes | r.childLanes),
                                (i |= 14680064 & r.subtreeFlags),
                                (i |= 14680064 & r.flags),
                                (r.return = t),
                                (r = r.sibling)
                    else
                        for (r = t.child; null !== r;)
                            (n |= r.lanes | r.childLanes),
                                (i |= r.subtreeFlags),
                                (i |= r.flags),
                                (r.return = t),
                                (r = r.sibling)
                    return (t.subtreeFlags |= i), (t.childLanes = n), e
                }

                function Xs(t, e, n) {
                    var i = e.pendingProps
                    switch ((eo(e), e.tag)) {
                        case 2:
                        case 16:
                        case 15:
                        case 0:
                        case 11:
                        case 7:
                        case 8:
                        case 12:
                        case 9:
                        case 14:
                            return Qs(e), null
                        case 1:
                        case 17:
                            return Tr(e.type) && zr(), Qs(e), null
                        case 3:
                            return (
                                (i = e.stateNode),
                                    oa(),
                                    Mr(Lr),
                                    Mr(Pr),
                                    ha(),
                                i.pendingContext && ((i.context = i.pendingContext), (i.pendingContext = null)),
                                (null !== t && null !== t.child) ||
                                (ho(e)
                                    ? (e.flags |= 4)
                                    : null === t ||
                                    (t.memoizedState.isDehydrated && 0 == (256 & e.flags)) ||
                                    ((e.flags |= 1024), null !== oo && (sc(oo), (oo = null)))),
                                    zs(t, e),
                                    Qs(e),
                                    null
                            )
                        case 5:
                            sa(e)
                            var r = ia(na.current)
                            if (((n = e.type), null !== t && null != e.stateNode))
                                Rs(t, e, n, i, r), t.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152))
                            else {
                                if (!i) {
                                    if (null === e.stateNode) throw Error(o(166))
                                    return Qs(e), null
                                }
                                if (((t = ia(ta.current)), ho(e))) {
                                    ;(i = e.stateNode), (n = e.type)
                                    var a = e.memoizedProps
                                    switch (((i[dr] = e), (i[fr] = a), (t = 0 != (1 & e.mode)), n)) {
                                        case 'dialog':
                                            Vi('cancel', i), Vi('close', i)
                                            break
                                        case 'iframe':
                                        case 'object':
                                        case 'embed':
                                            Vi('load', i)
                                            break
                                        case 'video':
                                        case 'audio':
                                            for (r = 0; r < Ai.length; r++) Vi(Ai[r], i)
                                            break
                                        case 'source':
                                            Vi('error', i)
                                            break
                                        case 'img':
                                        case 'image':
                                        case 'link':
                                            Vi('error', i), Vi('load', i)
                                            break
                                        case 'details':
                                            Vi('toggle', i)
                                            break
                                        case 'input':
                                            K(i, a), Vi('invalid', i)
                                            break
                                        case 'select':
                                            ;(i._wrapperState = {wasMultiple: !!a.multiple}), Vi('invalid', i)
                                            break
                                        case 'textarea':
                                            rt(i, a), Vi('invalid', i)
                                    }
                                    for (var l in (yt(n, a), (r = null), a))
                                        if (a.hasOwnProperty(l)) {
                                            var c = a[l]
                                            'children' === l
                                                ? 'string' == typeof c
                                                    ? i.textContent !== c &&
                                                    (!0 !== a.suppressHydrationWarning && Zi(i.textContent, c, t),
                                                        (r = ['children', c]))
                                                    : 'number' == typeof c &&
                                                    i.textContent !== '' + c &&
                                                    (!0 !== a.suppressHydrationWarning && Zi(i.textContent, c, t),
                                                        (r = ['children', '' + c]))
                                                : s.hasOwnProperty(l) && null != c && 'onScroll' === l && Vi('scroll', i)
                                        }
                                    switch (n) {
                                        case 'input':
                                            Y(i), J(i, a, !0)
                                            break
                                        case 'textarea':
                                            Y(i), at(i)
                                            break
                                        case 'select':
                                        case 'option':
                                            break
                                        default:
                                            'function' == typeof a.onClick && (i.onclick = Ji)
                                    }
                                    ;(i = r), (e.updateQueue = i), null !== i && (e.flags |= 4)
                                } else {
                                    ;(l = 9 === r.nodeType ? r : r.ownerDocument),
                                    'http://www.w3.org/1999/xhtml' === t && (t = st(n)),
                                        'http://www.w3.org/1999/xhtml' === t
                                            ? 'script' === n
                                                ? (((t = l.createElement('div')).innerHTML = '<script></script>'),
                                                    (t = t.removeChild(t.firstChild)))
                                                : 'string' == typeof i.is
                                                    ? (t = l.createElement(n, {is: i.is}))
                                                    : ((t = l.createElement(n)),
                                                    'select' === n &&
                                                    ((l = t),
                                                        i.multiple ? (l.multiple = !0) : i.size && (l.size = i.size)))
                                            : (t = l.createElementNS(t, n)),
                                        (t[dr] = e),
                                        (t[fr] = i),
                                        Ts(t, e, !1, !1),
                                        (e.stateNode = t)
                                    t: {
                                        switch (((l = vt(n, i)), n)) {
                                            case 'dialog':
                                                Vi('cancel', t), Vi('close', t), (r = i)
                                                break
                                            case 'iframe':
                                            case 'object':
                                            case 'embed':
                                                Vi('load', t), (r = i)
                                                break
                                            case 'video':
                                            case 'audio':
                                                for (r = 0; r < Ai.length; r++) Vi(Ai[r], t)
                                                r = i
                                                break
                                            case 'source':
                                                Vi('error', t), (r = i)
                                                break
                                            case 'img':
                                            case 'image':
                                            case 'link':
                                                Vi('error', t), Vi('load', t), (r = i)
                                                break
                                            case 'details':
                                                Vi('toggle', t), (r = i)
                                                break
                                            case 'input':
                                                K(t, i), (r = q(t, i)), Vi('invalid', t)
                                                break
                                            case 'option':
                                            default:
                                                r = i
                                                break
                                            case 'select':
                                                ;(t._wrapperState = {wasMultiple: !!i.multiple}),
                                                (r = I({}, i, {value: void 0})),
                                                Vi('invalid', t)
                                                break
                                            case 'textarea':
                                                rt(t, i), (r = it(t, i)), Vi('invalid', t)
                                        }
                                        for (a in (yt(n, r), (c = r)))
                                            if (c.hasOwnProperty(a)) {
                                                var u = c[a]
                                                'style' === a
                                                    ? mt(t, u)
                                                    : 'dangerouslySetInnerHTML' === a
                                                        ? null != (u = u ? u.__html : void 0) && ht(t, u)
                                                        : 'children' === a
                                                            ? 'string' == typeof u
                                                                ? ('textarea' !== n || '' !== u) && dt(t, u)
                                                                : 'number' == typeof u && dt(t, '' + u)
                                                            : 'suppressContentEditableWarning' !== a &&
                                                            'suppressHydrationWarning' !== a &&
                                                            'autoFocus' !== a &&
                                                            (s.hasOwnProperty(a)
                                                                ? null != u && 'onScroll' === a && Vi('scroll', t)
                                                                : null != u && v(t, a, u, l))
                                            }
                                        switch (n) {
                                            case 'input':
                                                Y(t), J(t, i, !1)
                                                break
                                            case 'textarea':
                                                Y(t), at(t)
                                                break
                                            case 'option':
                                                null != i.value && t.setAttribute('value', '' + $(i.value))
                                                break
                                            case 'select':
                                                ;(t.multiple = !!i.multiple),
                                                null != (a = i.value)
                                                    ? nt(t, !!i.multiple, a, !1)
                                                    : null != i.defaultValue && nt(t, !!i.multiple, i.defaultValue, !0)
                                                break
                                            default:
                                                'function' == typeof r.onClick && (t.onclick = Ji)
                                        }
                                        switch (n) {
                                            case 'button':
                                            case 'input':
                                            case 'select':
                                            case 'textarea':
                                                i = !!i.autoFocus
                                                break t
                                            case 'img':
                                                i = !0
                                                break t
                                            default:
                                                i = !1
                                        }
                                    }
                                    i && (e.flags |= 4)
                                }
                                null !== e.ref && ((e.flags |= 512), (e.flags |= 2097152))
                            }
                            return Qs(e), null
                        case 6:
                            if (t && null != e.stateNode) As(t, e, t.memoizedProps, i)
                            else {
                                if ('string' != typeof i && null === e.stateNode) throw Error(o(166))
                                if (((n = ia(na.current)), ia(ta.current), ho(e))) {
                                    if (
                                        ((i = e.stateNode),
                                            (n = e.memoizedProps),
                                            (i[dr] = e),
                                        (a = i.nodeValue !== n) && null !== (t = no))
                                    )
                                        switch (t.tag) {
                                            case 3:
                                                Zi(i.nodeValue, n, 0 != (1 & t.mode))
                                                break
                                            case 5:
                                                !0 !== t.memoizedProps.suppressHydrationWarning &&
                                                Zi(i.nodeValue, n, 0 != (1 & t.mode))
                                        }
                                    a && (e.flags |= 4)
                                } else
                                    ((i = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(i))[dr] = e),
                                        (e.stateNode = i)
                            }
                            return Qs(e), null
                        case 13:
                            if (
                                (Mr(la),
                                    (i = e.memoizedState),
                                null === t || (null !== t.memoizedState && null !== t.memoizedState.dehydrated))
                            ) {
                                if (ro && null !== io && 0 != (1 & e.mode) && 0 == (128 & e.flags))
                                    fo(), po(), (e.flags |= 98560), (a = !1)
                                else if (((a = ho(e)), null !== i && null !== i.dehydrated)) {
                                    if (null === t) {
                                        if (!a) throw Error(o(318))
                                        if (!(a = null !== (a = e.memoizedState) ? a.dehydrated : null))
                                            throw Error(o(317))
                                        a[dr] = e
                                    } else po(), 0 == (128 & e.flags) && (e.memoizedState = null), (e.flags |= 4)
                                    Qs(e), (a = !1)
                                } else null !== oo && (sc(oo), (oo = null)), (a = !0)
                                if (!a) return 65536 & e.flags ? e : null
                            }
                            return 0 != (128 & e.flags)
                                ? ((e.lanes = n), e)
                                : ((i = null !== i) != (null !== t && null !== t.memoizedState) &&
                                i &&
                                ((e.child.flags |= 8192),
                                0 != (1 & e.mode) &&
                                (null === t || 0 != (1 & la.current) ? 0 === Al && (Al = 3) : mc())),
                                null !== e.updateQueue && (e.flags |= 4),
                                    Qs(e),
                                    null)
                        case 4:
                            return oa(), zs(t, e), null === t && Wi(e.stateNode.containerInfo), Qs(e), null
                        case 10:
                            return ko(e.type._context), Qs(e), null
                        case 19:
                            if ((Mr(la), null === (a = e.memoizedState))) return Qs(e), null
                            if (((i = 0 != (128 & e.flags)), null === (l = a.rendering)))
                                if (i) Ys(a, !1)
                                else {
                                    if (0 !== Al || (null !== t && 0 != (128 & t.flags)))
                                        for (t = e.child; null !== t;) {
                                            if (null !== (l = ca(t))) {
                                                for (
                                                    e.flags |= 128,
                                                        Ys(a, !1),
                                                    null !== (i = l.updateQueue) && ((e.updateQueue = i), (e.flags |= 4)),
                                                        e.subtreeFlags = 0,
                                                        i = n,
                                                        n = e.child;
                                                    null !== n;
                                                )
                                                    (t = i),
                                                        ((a = n).flags &= 14680066),
                                                        null === (l = a.alternate)
                                                            ? ((a.childLanes = 0),
                                                                (a.lanes = t),
                                                                (a.child = null),
                                                                (a.subtreeFlags = 0),
                                                                (a.memoizedProps = null),
                                                                (a.memoizedState = null),
                                                                (a.updateQueue = null),
                                                                (a.dependencies = null),
                                                                (a.stateNode = null))
                                                            : ((a.childLanes = l.childLanes),
                                                                (a.lanes = l.lanes),
                                                                (a.child = l.child),
                                                                (a.subtreeFlags = 0),
                                                                (a.deletions = null),
                                                                (a.memoizedProps = l.memoizedProps),
                                                                (a.memoizedState = l.memoizedState),
                                                                (a.updateQueue = l.updateQueue),
                                                                (a.type = l.type),
                                                                (t = l.dependencies),
                                                                (a.dependencies =
                                                                    null === t
                                                                        ? null
                                                                        : {lanes: t.lanes, firstContext: t.firstContext})),
                                                        (n = n.sibling)
                                                return Er(la, (1 & la.current) | 2), e.child
                                            }
                                            t = t.sibling
                                        }
                                    null !== a.tail &&
                                    Gt() > Hl &&
                                    ((e.flags |= 128), (i = !0), Ys(a, !1), (e.lanes = 4194304))
                                }
                            else {
                                if (!i)
                                    if (null !== (t = ca(l))) {
                                        if (
                                            ((e.flags |= 128),
                                                (i = !0),
                                            null !== (n = t.updateQueue) && ((e.updateQueue = n), (e.flags |= 4)),
                                                Ys(a, !0),
                                            null === a.tail && 'hidden' === a.tailMode && !l.alternate && !ro)
                                        )
                                            return Qs(e), null
                                    } else
                                        2 * Gt() - a.renderingStartTime > Hl &&
                                        1073741824 !== n &&
                                        ((e.flags |= 128), (i = !0), Ys(a, !1), (e.lanes = 4194304))
                                a.isBackwards
                                    ? ((l.sibling = e.child), (e.child = l))
                                    : (null !== (n = a.last) ? (n.sibling = l) : (e.child = l), (a.last = l))
                            }
                            return null !== a.tail
                                ? ((e = a.tail),
                                    (a.rendering = e),
                                    (a.tail = e.sibling),
                                    (a.renderingStartTime = Gt()),
                                    (e.sibling = null),
                                    (n = la.current),
                                    Er(la, i ? (1 & n) | 2 : 1 & n),
                                    e)
                                : (Qs(e), null)
                        case 22:
                        case 23:
                            return (
                                dc(),
                                    (i = null !== e.memoizedState),
                                null !== t && (null !== t.memoizedState) !== i && (e.flags |= 8192),
                                    i && 0 != (1 & e.mode)
                                        ? 0 != (1073741824 & zl) && (Qs(e), 6 & e.subtreeFlags && (e.flags |= 8192))
                                        : Qs(e),
                                    null
                            )
                        case 24:
                        case 25:
                            return null
                    }
                    throw Error(o(156, e.tag))
                }

                function qs(t, e) {
                    switch ((eo(e), e.tag)) {
                        case 1:
                            return (
                                Tr(e.type) && zr(),
                                    65536 & (t = e.flags) ? ((e.flags = (-65537 & t) | 128), e) : null
                            )
                        case 3:
                            return (
                                oa(),
                                    Mr(Lr),
                                    Mr(Pr),
                                    ha(),
                                    0 != (65536 & (t = e.flags)) && 0 == (128 & t)
                                        ? ((e.flags = (-65537 & t) | 128), e)
                                        : null
                            )
                        case 5:
                            return sa(e), null
                        case 13:
                            if ((Mr(la), null !== (t = e.memoizedState) && null !== t.dehydrated)) {
                                if (null === e.alternate) throw Error(o(340))
                                po()
                            }
                            return 65536 & (t = e.flags) ? ((e.flags = (-65537 & t) | 128), e) : null
                        case 19:
                            return Mr(la), null
                        case 4:
                            return oa(), null
                        case 10:
                            return ko(e.type._context), null
                        case 22:
                        case 23:
                            return dc(), null
                        default:
                            return null
                    }
                }
                ;(Ts = function (t, e) {
                    for (var n = e.child; null !== n;) {
                        if (5 === n.tag || 6 === n.tag) t.appendChild(n.stateNode)
                        else if (4 !== n.tag && null !== n.child) {
                            ;(n.child.return = n), (n = n.child)
                            continue
                        }
                        if (n === e) break
                        for (; null === n.sibling;) {
                            if (null === n.return || n.return === e) return
                            n = n.return
                        }
                        ;(n.sibling.return = n.return), (n = n.sibling)
                    }
                }),
                    (zs = function () {
                    }),
                    (Rs = function (t, e, n, i) {
                        var r = t.memoizedProps
                        if (r !== i) {
                            ;(t = e.stateNode), ia(ta.current)
                            var o,
                                a = null
                            switch (n) {
                                case 'input':
                                    ;(r = q(t, r)), (i = q(t, i)), (a = [])
                                    break
                                case 'select':
                                    ;(r = I({}, r, {value: void 0})), (i = I({}, i, {value: void 0})), (a = [])
                                    break
                                case 'textarea':
                                    ;(r = it(t, r)), (i = it(t, i)), (a = [])
                                    break
                                default:
                                    'function' != typeof r.onClick &&
                                    'function' == typeof i.onClick &&
                                    (t.onclick = Ji)
                            }
                            for (u in (yt(n, i), (n = null), r))
                                if (!i.hasOwnProperty(u) && r.hasOwnProperty(u) && null != r[u])
                                    if ('style' === u) {
                                        var l = r[u]
                                        for (o in l) l.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''))
                                    } else
                                        'dangerouslySetInnerHTML' !== u &&
                                        'children' !== u &&
                                        'suppressContentEditableWarning' !== u &&
                                        'suppressHydrationWarning' !== u &&
                                        'autoFocus' !== u &&
                                        (s.hasOwnProperty(u) ? a || (a = []) : (a = a || []).push(u, null))
                            for (u in i) {
                                var c = i[u]
                                if (
                                    ((l = null != r ? r[u] : void 0),
                                    i.hasOwnProperty(u) && c !== l && (null != c || null != l))
                                )
                                    if ('style' === u)
                                        if (l) {
                                            for (o in l)
                                                !l.hasOwnProperty(o) ||
                                                (c && c.hasOwnProperty(o)) ||
                                                (n || (n = {}), (n[o] = ''))
                                            for (o in c)
                                                c.hasOwnProperty(o) && l[o] !== c[o] && (n || (n = {}), (n[o] = c[o]))
                                        } else n || (a || (a = []), a.push(u, n)), (n = c)
                                    else
                                        'dangerouslySetInnerHTML' === u
                                            ? ((c = c ? c.__html : void 0),
                                                (l = l ? l.__html : void 0),
                                            null != c && l !== c && (a = a || []).push(u, c))
                                            : 'children' === u
                                                ? ('string' != typeof c && 'number' != typeof c) ||
                                                (a = a || []).push(u, '' + c)
                                                : 'suppressContentEditableWarning' !== u &&
                                                'suppressHydrationWarning' !== u &&
                                                (s.hasOwnProperty(u)
                                                    ? (null != c && 'onScroll' === u && Vi('scroll', t),
                                                    a || l === c || (a = []))
                                                    : (a = a || []).push(u, c))
                            }
                            n && (a = a || []).push('style', n)
                            var u = a
                            ;(e.updateQueue = u) && (e.flags |= 4)
                        }
                    }),
                    (As = function (t, e, n, i) {
                        n !== i && (e.flags |= 4)
                    })
                var Ks = !1,
                    Gs = !1,
                    Zs = 'function' == typeof WeakSet ? WeakSet : Set,
                    Js = null

                function tl(t, e) {
                    var n = t.ref
                    if (null !== n)
                        if ('function' == typeof n)
                            try {
                                n(null)
                            } catch (n) {
                                Mc(t, e, n)
                            }
                        else n.current = null
                }

                function el(t, e, n) {
                    try {
                        n()
                    } catch (n) {
                        Mc(t, e, n)
                    }
                }

                var nl = !1

                function il(t, e, n) {
                    var i = e.updateQueue
                    if (null !== (i = null !== i ? i.lastEffect : null)) {
                        var r = (i = i.next)
                        do {
                            if ((r.tag & t) === t) {
                                var o = r.destroy
                                ;(r.destroy = void 0), void 0 !== o && el(e, n, o)
                            }
                            r = r.next
                        } while (r !== i)
                    }
                }

                function rl(t, e) {
                    if (null !== (e = null !== (e = e.updateQueue) ? e.lastEffect : null)) {
                        var n = (e = e.next)
                        do {
                            if ((n.tag & t) === t) {
                                var i = n.create
                                n.destroy = i()
                            }
                            n = n.next
                        } while (n !== e)
                    }
                }

                function ol(t) {
                    var e = t.ref
                    if (null !== e) {
                        var n = t.stateNode
                        t.tag, (t = n), 'function' == typeof e ? e(t) : (e.current = t)
                    }
                }

                function al(t) {
                    var e = t.alternate
                    null !== e && ((t.alternate = null), al(e)),
                        (t.child = null),
                        (t.deletions = null),
                        (t.sibling = null),
                    5 === t.tag &&
                    null !== (e = t.stateNode) &&
                    (delete e[dr], delete e[fr], delete e[gr], delete e[mr], delete e[br]),
                        (t.stateNode = null),
                        (t.return = null),
                        (t.dependencies = null),
                        (t.memoizedProps = null),
                        (t.memoizedState = null),
                        (t.pendingProps = null),
                        (t.stateNode = null),
                        (t.updateQueue = null)
                }

                function sl(t) {
                    return 5 === t.tag || 3 === t.tag || 4 === t.tag
                }

                function ll(t) {
                    t: for (; ;) {
                        for (; null === t.sibling;) {
                            if (null === t.return || sl(t.return)) return null
                            t = t.return
                        }
                        for (
                            t.sibling.return = t.return, t = t.sibling;
                            5 !== t.tag && 6 !== t.tag && 18 !== t.tag;
                        ) {
                            if (2 & t.flags) continue t
                            if (null === t.child || 4 === t.tag) continue t
                                ;
                            (t.child.return = t), (t = t.child)
                        }
                        if (!(2 & t.flags)) return t.stateNode
                    }
                }

                function cl(t, e, n) {
                    var i = t.tag
                    if (5 === i || 6 === i)
                        (t = t.stateNode),
                            e
                                ? 8 === n.nodeType
                                    ? n.parentNode.insertBefore(t, e)
                                    : n.insertBefore(t, e)
                                : (8 === n.nodeType
                                    ? (e = n.parentNode).insertBefore(t, n)
                                    : (e = n).appendChild(t),
                                null != (n = n._reactRootContainer) || null !== e.onclick || (e.onclick = Ji))
                    else if (4 !== i && null !== (t = t.child))
                        for (cl(t, e, n), t = t.sibling; null !== t;) cl(t, e, n), (t = t.sibling)
                }

                function ul(t, e, n) {
                    var i = t.tag
                    if (5 === i || 6 === i) (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t)
                    else if (4 !== i && null !== (t = t.child))
                        for (ul(t, e, n), t = t.sibling; null !== t;) ul(t, e, n), (t = t.sibling)
                }

                var hl = null,
                    dl = !1

                function fl(t, e, n) {
                    for (n = n.child; null !== n;) pl(t, e, n), (n = n.sibling)
                }

                function pl(t, e, n) {
                    if (oe && 'function' == typeof oe.onCommitFiberUnmount)
                        try {
                            oe.onCommitFiberUnmount(re, n)
                        } catch (t) {
                        }
                    switch (n.tag) {
                        case 5:
                            Gs || tl(n, e)
                        case 6:
                            var i = hl,
                                r = dl
                            ;(hl = null),
                            fl(t, e, n),
                            (dl = r),
                        null !== (hl = i) &&
                        (dl
                            ? ((t = hl),
                                (n = n.stateNode),
                                8 === t.nodeType ? t.parentNode.removeChild(n) : t.removeChild(n))
                            : hl.removeChild(n.stateNode))
                            break
                        case 18:
                            null !== hl &&
                            (dl
                                ? ((t = hl),
                                    (n = n.stateNode),
                                    8 === t.nodeType ? lr(t.parentNode, n) : 1 === t.nodeType && lr(t, n),
                                    We(t))
                                : lr(hl, n.stateNode))
                            break
                        case 4:
                            ;(i = hl),
                            (r = dl),
                            (hl = n.stateNode.containerInfo),
                            (dl = !0),
                            fl(t, e, n),
                            (hl = i),
                            (dl = r)
                            break
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            if (!Gs && null !== (i = n.updateQueue) && null !== (i = i.lastEffect)) {
                                r = i = i.next
                                do {
                                    var o = r,
                                        a = o.destroy
                                    ;(o = o.tag),
                                    void 0 !== a && (0 != (2 & o) || 0 != (4 & o)) && el(n, e, a),
                                        (r = r.next)
                                } while (r !== i)
                            }
                            fl(t, e, n)
                            break
                        case 1:
                            if (!Gs && (tl(n, e), 'function' == typeof (i = n.stateNode).componentWillUnmount))
                                try {
                                    ;(i.props = n.memoizedProps),
                                        (i.state = n.memoizedState),
                                        i.componentWillUnmount()
                                } catch (t) {
                                    Mc(n, e, t)
                                }
                            fl(t, e, n)
                            break
                        case 21:
                            fl(t, e, n)
                            break
                        case 22:
                            1 & n.mode
                                ? ((Gs = (i = Gs) || null !== n.memoizedState), fl(t, e, n), (Gs = i))
                                : fl(t, e, n)
                            break
                        default:
                            fl(t, e, n)
                    }
                }

                function gl(t) {
                    var e = t.updateQueue
                    if (null !== e) {
                        t.updateQueue = null
                        var n = t.stateNode
                        null === n && (n = t.stateNode = new Zs()),
                            e.forEach(function (e) {
                                var i = Lc.bind(null, t, e)
                                n.has(e) || (n.add(e), e.then(i, i))
                            })
                    }
                }

                function ml(t, e) {
                    var n = e.deletions
                    if (null !== n)
                        for (var i = 0; i < n.length; i++) {
                            var r = n[i]
                            try {
                                var a = t,
                                    s = e,
                                    l = s
                                t: for (; null !== l;) {
                                    switch (l.tag) {
                                        case 5:
                                            ;(hl = l.stateNode), (dl = !1)
                                            break t
                                        case 3:
                                        case 4:
                                            ;(hl = l.stateNode.containerInfo), (dl = !0)
                                            break t
                                    }
                                    l = l.return
                                }
                                if (null === hl) throw Error(o(160))
                                pl(a, s, r), (hl = null), (dl = !1)
                                var c = r.alternate
                                null !== c && (c.return = null), (r.return = null)
                            } catch (t) {
                                Mc(r, e, t)
                            }
                        }
                    if (12854 & e.subtreeFlags) for (e = e.child; null !== e;) bl(e, t), (e = e.sibling)
                }

                function bl(t, e) {
                    var n = t.alternate,
                        i = t.flags
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            if ((ml(e, t), yl(t), 4 & i)) {
                                try {
                                    il(3, t, t.return), rl(3, t)
                                } catch (e) {
                                    Mc(t, t.return, e)
                                }
                                try {
                                    il(5, t, t.return)
                                } catch (e) {
                                    Mc(t, t.return, e)
                                }
                            }
                            break
                        case 1:
                            ml(e, t), yl(t), 512 & i && null !== n && tl(n, n.return)
                            break
                        case 5:
                            if ((ml(e, t), yl(t), 512 & i && null !== n && tl(n, n.return), 32 & t.flags)) {
                                var r = t.stateNode
                                try {
                                    dt(r, '')
                                } catch (e) {
                                    Mc(t, t.return, e)
                                }
                            }
                            if (4 & i && null != (r = t.stateNode)) {
                                var a = t.memoizedProps,
                                    s = null !== n ? n.memoizedProps : a,
                                    l = t.type,
                                    c = t.updateQueue
                                if (((t.updateQueue = null), null !== c))
                                    try {
                                        'input' === l && 'radio' === a.type && null != a.name && G(r, a), vt(l, s)
                                        var u = vt(l, a)
                                        for (s = 0; s < c.length; s += 2) {
                                            var h = c[s],
                                                d = c[s + 1]
                                            'style' === h
                                                ? mt(r, d)
                                                : 'dangerouslySetInnerHTML' === h
                                                    ? ht(r, d)
                                                    : 'children' === h
                                                        ? dt(r, d)
                                                        : v(r, h, d, u)
                                        }
                                        switch (l) {
                                            case 'input':
                                                Z(r, a)
                                                break
                                            case 'textarea':
                                                ot(r, a)
                                                break
                                            case 'select':
                                                var f = r._wrapperState.wasMultiple
                                                r._wrapperState.wasMultiple = !!a.multiple
                                                var p = a.value
                                                null != p
                                                    ? nt(r, !!a.multiple, p, !1)
                                                    : f !== !!a.multiple &&
                                                    (null != a.defaultValue
                                                        ? nt(r, !!a.multiple, a.defaultValue, !0)
                                                        : nt(r, !!a.multiple, a.multiple ? [] : '', !1))
                                        }
                                        r[fr] = a
                                    } catch (e) {
                                        Mc(t, t.return, e)
                                    }
                            }
                            break
                        case 6:
                            if ((ml(e, t), yl(t), 4 & i)) {
                                if (null === t.stateNode) throw Error(o(162))
                                    ;
                                (r = t.stateNode), (a = t.memoizedProps)
                                try {
                                    r.nodeValue = a
                                } catch (e) {
                                    Mc(t, t.return, e)
                                }
                            }
                            break
                        case 3:
                            if ((ml(e, t), yl(t), 4 & i && null !== n && n.memoizedState.isDehydrated))
                                try {
                                    We(e.containerInfo)
                                } catch (e) {
                                    Mc(t, t.return, e)
                                }
                            break
                        case 4:
                        default:
                            ml(e, t), yl(t)
                            break
                        case 13:
                            ml(e, t),
                                yl(t),
                            8192 & (r = t.child).flags &&
                            ((a = null !== r.memoizedState),
                                (r.stateNode.isHidden = a),
                            !a ||
                            (null !== r.alternate && null !== r.alternate.memoizedState) ||
                            (Wl = Gt())),
                            4 & i && gl(t)
                            break
                        case 22:
                            if (
                                ((h = null !== n && null !== n.memoizedState),
                                    1 & t.mode ? ((Gs = (u = Gs) || h), ml(e, t), (Gs = u)) : ml(e, t),
                                    yl(t),
                                8192 & i)
                            ) {
                                if (
                                    ((u = null !== t.memoizedState),
                                    (t.stateNode.isHidden = u) && !h && 0 != (1 & t.mode))
                                )
                                    for (Js = t, h = t.child; null !== h;) {
                                        for (d = Js = h; null !== Js;) {
                                            switch (((p = (f = Js).child), f.tag)) {
                                                case 0:
                                                case 11:
                                                case 14:
                                                case 15:
                                                    il(4, f, f.return)
                                                    break
                                                case 1:
                                                    tl(f, f.return)
                                                    var g = f.stateNode
                                                    if ('function' == typeof g.componentWillUnmount) {
                                                        ;(i = f), (n = f.return)
                                                        try {
                                                            ;(e = i),
                                                                (g.props = e.memoizedProps),
                                                                (g.state = e.memoizedState),
                                                                g.componentWillUnmount()
                                                        } catch (t) {
                                                            Mc(i, n, t)
                                                        }
                                                    }
                                                    break
                                                case 5:
                                                    tl(f, f.return)
                                                    break
                                                case 22:
                                                    if (null !== f.memoizedState) {
                                                        wl(d)
                                                        continue
                                                    }
                                            }
                                            null !== p ? ((p.return = f), (Js = p)) : wl(d)
                                        }
                                        h = h.sibling
                                    }
                                t: for (h = null, d = t; ;) {
                                    if (5 === d.tag) {
                                        if (null === h) {
                                            h = d
                                            try {
                                                ;(r = d.stateNode),
                                                    u
                                                        ? 'function' == typeof (a = r.style).setProperty
                                                            ? a.setProperty('display', 'none', 'important')
                                                            : (a.display = 'none')
                                                        : ((l = d.stateNode),
                                                            (s =
                                                                null != (c = d.memoizedProps.style) && c.hasOwnProperty('display')
                                                                    ? c.display
                                                                    : null),
                                                            (l.style.display = gt('display', s)))
                                            } catch (e) {
                                                Mc(t, t.return, e)
                                            }
                                        }
                                    } else if (6 === d.tag) {
                                        if (null === h)
                                            try {
                                                d.stateNode.nodeValue = u ? '' : d.memoizedProps
                                            } catch (e) {
                                                Mc(t, t.return, e)
                                            }
                                    } else if (
                                        ((22 !== d.tag && 23 !== d.tag) || null === d.memoizedState || d === t) &&
                                        null !== d.child
                                    ) {
                                        ;(d.child.return = d), (d = d.child)
                                        continue
                                    }
                                    if (d === t) break;
                                    for (; null === d.sibling;) {
                                        if (null === d.return || d.return === t) break t
                                        h === d && (h = null), (d = d.return)
                                    }
                                    h === d && (h = null), (d.sibling.return = d.return), (d = d.sibling)
                                }
                            }
                            break
                        case 19:
                            ml(e, t), yl(t), 4 & i && gl(t)
                        case 21:
                    }
                }

                function yl(t) {
                    var e = t.flags
                    if (2 & e) {
                        try {
                            t: {
                                for (var n = t.return; null !== n;) {
                                    if (sl(n)) {
                                        var i = n
                                        break t
                                    }
                                    n = n.return
                                }
                                throw Error(o(160))
                            }
                            switch (i.tag) {
                                case 5:
                                    var r = i.stateNode
                                    32 & i.flags && (dt(r, ''), (i.flags &= -33)), ul(t, ll(t), r)
                                    break
                                case 3:
                                case 4:
                                    var a = i.stateNode.containerInfo
                                    cl(t, ll(t), a)
                                    break
                                default:
                                    throw Error(o(161))
                            }
                        } catch (e) {
                            Mc(t, t.return, e)
                        }
                        t.flags &= -3
                    }
                    4096 & e && (t.flags &= -4097)
                }

                function vl(t, e, n) {
                    ;(Js = t), xl(t, e, n)
                }

                function xl(t, e, n) {
                    for (var i = 0 != (1 & t.mode); null !== Js;) {
                        var r = Js,
                            o = r.child
                        if (22 === r.tag && i) {
                            var a = null !== r.memoizedState || Ks
                            if (!a) {
                                var s = r.alternate,
                                    l = (null !== s && null !== s.memoizedState) || Gs
                                s = Ks
                                var c = Gs
                                if (((Ks = a), (Gs = l) && !c))
                                    for (Js = r; null !== Js;)
                                        (l = (a = Js).child),
                                            22 === a.tag && null !== a.memoizedState
                                                ? kl(r)
                                                : null !== l
                                                    ? ((l.return = a), (Js = l))
                                                    : kl(r)
                                for (; null !== o;) (Js = o), xl(o, e, n), (o = o.sibling)
                                ;
                                (Js = r), (Ks = s), (Gs = c)
                            }
                            _l(t)
                        } else 0 != (8772 & r.subtreeFlags) && null !== o ? ((o.return = r), (Js = o)) : _l(t)
                    }
                }

                function _l(t) {
                    for (; null !== Js;) {
                        var e = Js
                        if (0 != (8772 & e.flags)) {
                            var n = e.alternate
                            try {
                                if (0 != (8772 & e.flags))
                                    switch (e.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Gs || rl(5, e)
                                            break
                                        case 1:
                                            var i = e.stateNode
                                            if (4 & e.flags && !Gs)
                                                if (null === n) i.componentDidMount()
                                                else {
                                                    var r =
                                                        e.elementType === e.type ? n.memoizedProps : bo(e.type, n.memoizedProps)
                                                    i.componentDidUpdate(
                                                        r,
                                                        n.memoizedState,
                                                        i.__reactInternalSnapshotBeforeUpdate
                                                    )
                                                }
                                            var a = e.updateQueue
                                            null !== a && Vo(e, a, i)
                                            break
                                        case 3:
                                            var s = e.updateQueue
                                            if (null !== s) {
                                                if (((n = null), null !== e.child))
                                                    switch (e.child.tag) {
                                                        case 5:
                                                        case 1:
                                                            n = e.child.stateNode
                                                    }
                                                Vo(e, s, n)
                                            }
                                            break
                                        case 5:
                                            var l = e.stateNode
                                            if (null === n && 4 & e.flags) {
                                                n = l
                                                var c = e.memoizedProps
                                                switch (e.type) {
                                                    case 'button':
                                                    case 'input':
                                                    case 'select':
                                                    case 'textarea':
                                                        c.autoFocus && n.focus()
                                                        break
                                                    case 'img':
                                                        c.src && (n.src = c.src)
                                                }
                                            }
                                            break
                                        case 6:
                                        case 4:
                                        case 12:
                                        case 19:
                                        case 17:
                                        case 21:
                                        case 22:
                                        case 23:
                                        case 25:
                                            break
                                        case 13:
                                            if (null === e.memoizedState) {
                                                var u = e.alternate
                                                if (null !== u) {
                                                    var h = u.memoizedState
                                                    if (null !== h) {
                                                        var d = h.dehydrated
                                                        null !== d && We(d)
                                                    }
                                                }
                                            }
                                            break
                                        default:
                                            throw Error(o(163))
                                    }
                                Gs || (512 & e.flags && ol(e))
                            } catch (t) {
                                Mc(e, e.return, t)
                            }
                        }
                        if (e === t) {
                            Js = null
                            break
                        }
                        if (null !== (n = e.sibling)) {
                            ;(n.return = e.return), (Js = n)
                            break
                        }
                        Js = e.return
                    }
                }

                function wl(t) {
                    for (; null !== Js;) {
                        var e = Js
                        if (e === t) {
                            Js = null
                            break
                        }
                        var n = e.sibling
                        if (null !== n) {
                            ;(n.return = e.return), (Js = n)
                            break
                        }
                        Js = e.return
                    }
                }

                function kl(t) {
                    for (; null !== Js;) {
                        var e = Js
                        try {
                            switch (e.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    var n = e.return
                                    try {
                                        rl(4, e)
                                    } catch (t) {
                                        Mc(e, n, t)
                                    }
                                    break
                                case 1:
                                    var i = e.stateNode
                                    if ('function' == typeof i.componentDidMount) {
                                        var r = e.return
                                        try {
                                            i.componentDidMount()
                                        } catch (t) {
                                            Mc(e, r, t)
                                        }
                                    }
                                    var o = e.return
                                    try {
                                        ol(e)
                                    } catch (t) {
                                        Mc(e, o, t)
                                    }
                                    break
                                case 5:
                                    var a = e.return
                                    try {
                                        ol(e)
                                    } catch (t) {
                                        Mc(e, a, t)
                                    }
                            }
                        } catch (t) {
                            Mc(e, e.return, t)
                        }
                        if (e === t) {
                            Js = null
                            break
                        }
                        var s = e.sibling
                        if (null !== s) {
                            ;(s.return = e.return), (Js = s)
                            break
                        }
                        Js = e.return
                    }
                }

                var Sl,
                    Ml = Math.ceil,
                    El = x.ReactCurrentDispatcher,
                    Cl = x.ReactCurrentOwner,
                    Pl = x.ReactCurrentBatchConfig,
                    Ll = 0,
                    Dl = null,
                    Ol = null,
                    Tl = 0,
                    zl = 0,
                    Rl = Sr(0),
                    Al = 0,
                    Nl = null,
                    Il = 0,
                    Fl = 0,
                    Vl = 0,
                    Bl = null,
                    jl = null,
                    Wl = 0,
                    Hl = 1 / 0,
                    $l = null,
                    Ul = !1,
                    Yl = null,
                    Ql = null,
                    Xl = !1,
                    ql = null,
                    Kl = 0,
                    Gl = 0,
                    Zl = null,
                    Jl = -1,
                    tc = 0

                function ec() {
                    return 0 != (6 & Ll) ? Gt() : -1 !== Jl ? Jl : (Jl = Gt())
                }

                function nc(t) {
                    return 0 == (1 & t.mode)
                        ? 1
                        : 0 != (2 & Ll) && 0 !== Tl
                            ? Tl & -Tl
                            : null !== mo.transition
                                ? (0 === tc && (tc = ge()), tc)
                                : 0 !== (t = ve)
                                    ? t
                                    : (t = void 0 === (t = window.event) ? 16 : Ke(t.type))
                }

                function ic(t, e, n, i) {
                    if (50 < Gl) throw ((Gl = 0), (Zl = null), Error(o(185)))
                    be(t, n, i),
                    (0 != (2 & Ll) && t === Dl) ||
                    (t === Dl && (0 == (2 & Ll) && (Fl |= n), 4 === Al && lc(t, Tl)),
                        rc(t, i),
                    1 === n && 0 === Ll && 0 == (1 & e.mode) && ((Hl = Gt() + 500), Vr && Wr()))
                }

                function rc(t, e) {
                    var n = t.callbackNode
                    !(function (t, e) {
                        for (
                            var n = t.suspendedLanes,
                                i = t.pingedLanes,
                                r = t.expirationTimes,
                                o = t.pendingLanes;
                            0 < o;
                        ) {
                            var a = 31 - ae(o),
                                s = 1 << a,
                                l = r[a]
                            ;-1 === l
                                ? (0 != (s & n) && 0 == (s & i)) || (r[a] = fe(s, e))
                                : l <= e && (t.expiredLanes |= s),
                                (o &= ~s)
                        }
                    })(t, e)
                    var i = de(t, t === Dl ? Tl : 0)
                    if (0 === i) null !== n && Xt(n), (t.callbackNode = null), (t.callbackPriority = 0)
                    else if (((e = i & -i), t.callbackPriority !== e)) {
                        if ((null != n && Xt(n), 1 === e))
                            0 === t.tag
                                ? (function (t) {
                                    ;(Vr = !0), jr(t)
                                })(cc.bind(null, t))
                                : jr(cc.bind(null, t)),
                                ar(function () {
                                    0 == (6 & Ll) && Wr()
                                }),
                                (n = null)
                        else {
                            switch (xe(i)) {
                                case 1:
                                    n = Jt
                                    break
                                case 4:
                                    n = te
                                    break
                                case 16:
                                default:
                                    n = ee
                                    break
                                case 536870912:
                                    n = ie
                            }
                            n = Dc(n, oc.bind(null, t))
                        }
                        ;(t.callbackPriority = e), (t.callbackNode = n)
                    }
                }

                function oc(t, e) {
                    if (((Jl = -1), (tc = 0), 0 != (6 & Ll))) throw Error(o(327))
                    var n = t.callbackNode
                    if (kc() && t.callbackNode !== n) return null
                    var i = de(t, t === Dl ? Tl : 0)
                    if (0 === i) return null
                    if (0 != (30 & i) || 0 != (i & t.expiredLanes) || e) e = bc(t, i)
                    else {
                        e = i
                        var r = Ll
                        Ll |= 2
                        var a = gc()
                        for ((Dl === t && Tl === e) || (($l = null), (Hl = Gt() + 500), fc(t, e)); ;)
                            try {
                                vc()
                                break
                            } catch (e) {
                                pc(t, e)
                            }
                        wo(),
                            (El.current = a),
                            (Ll = r),
                            null !== Ol ? (e = 0) : ((Dl = null), (Tl = 0), (e = Al))
                    }
                    if (0 !== e) {
                        if ((2 === e && 0 !== (r = pe(t)) && ((i = r), (e = ac(t, r))), 1 === e))
                            throw ((n = Nl), fc(t, 0), lc(t, i), rc(t, Gt()), n)
                        if (6 === e) lc(t, i)
                        else {
                            if (
                                ((r = t.current.alternate),
                                0 == (30 & i) &&
                                !(function (t) {
                                    for (var e = t; ;) {
                                        if (16384 & e.flags) {
                                            var n = e.updateQueue
                                            if (null !== n && null !== (n = n.stores))
                                                for (var i = 0; i < n.length; i++) {
                                                    var r = n[i],
                                                        o = r.getSnapshot
                                                    r = r.value
                                                    try {
                                                        if (!si(o(), r)) return !1
                                                    } catch (t) {
                                                        return !1
                                                    }
                                                }
                                        }
                                        if (((n = e.child), 16384 & e.subtreeFlags && null !== n))
                                            (n.return = e), (e = n)
                                        else {
                                            if (e === t) break
                                            for (; null === e.sibling;) {
                                                if (null === e.return || e.return === t) return !0
                                                e = e.return
                                            }
                                            ;(e.sibling.return = e.return), (e = e.sibling)
                                        }
                                    }
                                    return !0
                                })(r) &&
                                (2 === (e = bc(t, i)) && 0 !== (a = pe(t)) && ((i = a), (e = ac(t, a))), 1 === e))
                            )
                                throw ((n = Nl), fc(t, 0), lc(t, i), rc(t, Gt()), n)
                            switch (((t.finishedWork = r), (t.finishedLanes = i), e)) {
                                case 0:
                                case 1:
                                    throw Error(o(345))
                                case 2:
                                case 5:
                                    wc(t, jl, $l)
                                    break
                                case 3:
                                    if ((lc(t, i), (130023424 & i) === i && 10 < (e = Wl + 500 - Gt()))) {
                                        if (0 !== de(t, 0)) break
                                        if (((r = t.suspendedLanes) & i) !== i) {
                                            ec(), (t.pingedLanes |= t.suspendedLanes & r)
                                            break
                                        }
                                        t.timeoutHandle = ir(wc.bind(null, t, jl, $l), e)
                                        break
                                    }
                                    wc(t, jl, $l)
                                    break
                                case 4:
                                    if ((lc(t, i), (4194240 & i) === i)) break
                                    for (e = t.eventTimes, r = -1; 0 < i;) {
                                        var s = 31 - ae(i)
                                        ;(a = 1 << s), (s = e[s]) > r && (r = s), (i &= ~a)
                                    }
                                    if (
                                        ((i = r),
                                        10 <
                                        (i =
                                            (120 > (i = Gt() - i)
                                                ? 120
                                                : 480 > i
                                                    ? 480
                                                    : 1080 > i
                                                        ? 1080
                                                        : 1920 > i
                                                            ? 1920
                                                            : 3e3 > i
                                                                ? 3e3
                                                                : 4320 > i
                                                                    ? 4320
                                                                    : 1960 * Ml(i / 1960)) - i))
                                    ) {
                                        t.timeoutHandle = ir(wc.bind(null, t, jl, $l), i)
                                        break
                                    }
                                    wc(t, jl, $l)
                                    break
                                default:
                                    throw Error(o(329))
                            }
                        }
                    }
                    return rc(t, Gt()), t.callbackNode === n ? oc.bind(null, t) : null
                }

                function ac(t, e) {
                    var n = Bl
                    return (
                        t.current.memoizedState.isDehydrated && (fc(t, e).flags |= 256),
                        2 !== (t = bc(t, e)) && ((e = jl), (jl = n), null !== e && sc(e)),
                            t
                    )
                }

                function sc(t) {
                    null === jl ? (jl = t) : jl.push.apply(jl, t)
                }

                function lc(t, e) {
                    for (
                        e &= ~Vl, e &= ~Fl, t.suspendedLanes |= e, t.pingedLanes &= ~e, t = t.expirationTimes;
                        0 < e;
                    ) {
                        var n = 31 - ae(e),
                            i = 1 << n
                        ;(t[n] = -1), (e &= ~i)
                    }
                }

                function cc(t) {
                    if (0 != (6 & Ll)) throw Error(o(327))
                    kc()
                    var e = de(t, 0)
                    if (0 == (1 & e)) return rc(t, Gt()), null
                    var n = bc(t, e)
                    if (0 !== t.tag && 2 === n) {
                        var i = pe(t)
                        0 !== i && ((e = i), (n = ac(t, i)))
                    }
                    if (1 === n) throw ((n = Nl), fc(t, 0), lc(t, e), rc(t, Gt()), n)
                    if (6 === n) throw Error(o(345))
                    return (
                        (t.finishedWork = t.current.alternate),
                            (t.finishedLanes = e),
                            wc(t, jl, $l),
                            rc(t, Gt()),
                            null
                    )
                }

                function uc(t, e) {
                    var n = Ll
                    Ll |= 1
                    try {
                        return t(e)
                    } finally {
                        0 === (Ll = n) && ((Hl = Gt() + 500), Vr && Wr())
                    }
                }

                function hc(t) {
                    null !== ql && 0 === ql.tag && 0 == (6 & Ll) && kc()
                    var e = Ll
                    Ll |= 1
                    var n = Pl.transition,
                        i = ve
                    try {
                        if (((Pl.transition = null), (ve = 1), t)) return t()
                    } finally {
                        ;(ve = i), (Pl.transition = n), 0 == (6 & (Ll = e)) && Wr()
                    }
                }

                function dc() {
                    ;(zl = Rl.current), Mr(Rl)
                }

                function fc(t, e) {
                    ;(t.finishedWork = null), (t.finishedLanes = 0)
                    var n = t.timeoutHandle
                    if ((-1 !== n && ((t.timeoutHandle = -1), rr(n)), null !== Ol))
                        for (n = Ol.return; null !== n;) {
                            var i = n
                            switch ((eo(i), i.tag)) {
                                case 1:
                                    null != (i = i.type.childContextTypes) && zr()
                                    break
                                case 3:
                                    oa(), Mr(Lr), Mr(Pr), ha()
                                    break
                                case 5:
                                    sa(i)
                                    break
                                case 4:
                                    oa()
                                    break
                                case 13:
                                case 19:
                                    Mr(la)
                                    break
                                case 10:
                                    ko(i.type._context)
                                    break
                                case 22:
                                case 23:
                                    dc()
                            }
                            n = n.return
                        }
                    if (
                        ((Dl = t),
                            (Ol = t = Rc(t.current, null)),
                            (Tl = zl = e),
                            (Al = 0),
                            (Nl = null),
                            (Vl = Fl = Il = 0),
                            (jl = Bl = null),
                        null !== Co)
                    ) {
                        for (e = 0; e < Co.length; e++)
                            if (null !== (i = (n = Co[e]).interleaved)) {
                                n.interleaved = null
                                var r = i.next,
                                    o = n.pending
                                if (null !== o) {
                                    var a = o.next
                                    ;(o.next = r), (i.next = a)
                                }
                                n.pending = i
                            }
                        Co = null
                    }
                    return t
                }

                function pc(t, e) {
                    for (; ;) {
                        var n = Ol
                        try {
                            if ((wo(), (da.current = as), ya)) {
                                for (var i = ga.memoizedState; null !== i;) {
                                    var r = i.queue
                                    null !== r && (r.pending = null), (i = i.next)
                                }
                                ya = !1
                            }
                            if (
                                ((pa = 0),
                                    (ba = ma = ga = null),
                                    (va = !1),
                                    (xa = 0),
                                    (Cl.current = null),
                                null === n || null === n.return)
                            ) {
                                ;(Al = 1), (Nl = e), (Ol = null)
                                break
                            }
                            t: {
                                var a = t,
                                    s = n.return,
                                    l = n,
                                    c = e
                                if (
                                    ((e = Tl),
                                        (l.flags |= 32768),
                                    null !== c && 'object' == typeof c && 'function' == typeof c.then)
                                ) {
                                    var u = c,
                                        h = l,
                                        d = h.tag
                                    if (0 == (1 & h.mode) && (0 === d || 11 === d || 15 === d)) {
                                        var f = h.alternate
                                        f
                                            ? ((h.updateQueue = f.updateQueue),
                                                (h.memoizedState = f.memoizedState),
                                                (h.lanes = f.lanes))
                                            : ((h.updateQueue = null), (h.memoizedState = null))
                                    }
                                    var p = bs(s)
                                    if (null !== p) {
                                        ;(p.flags &= -257), ys(p, s, l, 0, e), 1 & p.mode && ms(a, u, e), (c = u)
                                        var g = (e = p).updateQueue
                                        if (null === g) {
                                            var m = new Set()
                                            m.add(c), (e.updateQueue = m)
                                        } else g.add(c)
                                        break t
                                    }
                                    if (0 == (1 & e)) {
                                        ms(a, u, e), mc()
                                        break t
                                    }
                                    c = Error(o(426))
                                } else if (ro && 1 & l.mode) {
                                    var b = bs(s)
                                    if (null !== b) {
                                        0 == (65536 & b.flags) && (b.flags |= 256), ys(b, s, l, 0, e), go(us(c, l))
                                        break t
                                    }
                                }
                                ;(a = c = us(c, l)),
                                4 !== Al && (Al = 2),
                                    null === Bl ? (Bl = [a]) : Bl.push(a),
                                    (a = s)
                                do {
                                    switch (a.tag) {
                                        case 3:
                                            ;(a.flags |= 65536), (e &= -e), (a.lanes |= e), Io(a, ps(0, c, e))
                                            break t
                                        case 1:
                                            l = c
                                            var y = a.type,
                                                v = a.stateNode
                                            if (
                                                0 == (128 & a.flags) &&
                                                ('function' == typeof y.getDerivedStateFromError ||
                                                    (null !== v &&
                                                        'function' == typeof v.componentDidCatch &&
                                                        (null === Ql || !Ql.has(v))))
                                            ) {
                                                ;(a.flags |= 65536), (e &= -e), (a.lanes |= e), Io(a, gs(a, l, e))
                                                break t
                                            }
                                    }
                                    a = a.return
                                } while (null !== a)
                            }
                            _c(n)
                        } catch (t) {
                            ;(e = t), Ol === n && null !== n && (Ol = n = n.return)
                            continue
                        }
                        break
                    }
                }

                function gc() {
                    var t = El.current
                    return (El.current = as), null === t ? as : t
                }

                function mc() {
                    ;(0 !== Al && 3 !== Al && 2 !== Al) || (Al = 4),
                    null === Dl || (0 == (268435455 & Il) && 0 == (268435455 & Fl)) || lc(Dl, Tl)
                }

                function bc(t, e) {
                    var n = Ll
                    Ll |= 2
                    var i = gc()
                    for ((Dl === t && Tl === e) || (($l = null), fc(t, e)); ;)
                        try {
                            yc()
                            break
                        } catch (e) {
                            pc(t, e)
                        }
                    if ((wo(), (Ll = n), (El.current = i), null !== Ol)) throw Error(o(261))
                    return (Dl = null), (Tl = 0), Al
                }

                function yc() {
                    for (; null !== Ol;) xc(Ol)
                }

                function vc() {
                    for (; null !== Ol && !qt();) xc(Ol)
                }

                function xc(t) {
                    var e = Sl(t.alternate, t, zl)
                    ;(t.memoizedProps = t.pendingProps), null === e ? _c(t) : (Ol = e), (Cl.current = null)
                }

                function _c(t) {
                    var e = t
                    do {
                        var n = e.alternate
                        if (((t = e.return), 0 == (32768 & e.flags))) {
                            if (null !== (n = Xs(n, e, zl))) return void (Ol = n)
                        } else {
                            if (null !== (n = qs(n, e))) return (n.flags &= 32767), void (Ol = n)
                            if (null === t) return (Al = 6), void (Ol = null)
                                ;
                            (t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null)
                        }
                        if (null !== (e = e.sibling)) return void (Ol = e)
                        Ol = e = t
                    } while (null !== e)
                    0 === Al && (Al = 5)
                }

                function wc(t, e, n) {
                    var i = ve,
                        r = Pl.transition
                    try {
                        ;(Pl.transition = null),
                            (ve = 1),
                            (function (t, e, n, i) {
                                do {
                                    kc()
                                } while (null !== ql)
                                if (0 != (6 & Ll)) throw Error(o(327))
                                n = t.finishedWork
                                var r = t.finishedLanes
                                if (null === n) return null
                                if (((t.finishedWork = null), (t.finishedLanes = 0), n === t.current))
                                    throw Error(o(177))
                                        ;
                                (t.callbackNode = null), (t.callbackPriority = 0)
                                var a = n.lanes | n.childLanes
                                if (
                                    ((function (t, e) {
                                        var n = t.pendingLanes & ~e
                                        ;(t.pendingLanes = e),
                                            (t.suspendedLanes = 0),
                                            (t.pingedLanes = 0),
                                            (t.expiredLanes &= e),
                                            (t.mutableReadLanes &= e),
                                            (t.entangledLanes &= e),
                                            (e = t.entanglements)
                                        var i = t.eventTimes
                                        for (t = t.expirationTimes; 0 < n;) {
                                            var r = 31 - ae(n),
                                                o = 1 << r
                                            ;(e[r] = 0), (i[r] = -1), (t[r] = -1), (n &= ~o)
                                        }
                                    })(t, a),
                                    t === Dl && ((Ol = Dl = null), (Tl = 0)),
                                    (0 == (2064 & n.subtreeFlags) && 0 == (2064 & n.flags)) ||
                                    Xl ||
                                    ((Xl = !0),
                                        Dc(ee, function () {
                                            return kc(), null
                                        })),
                                        (a = 0 != (15990 & n.flags)),
                                    0 != (15990 & n.subtreeFlags) || a)
                                ) {
                                    ;(a = Pl.transition), (Pl.transition = null)
                                    var s = ve
                                    ve = 1
                                    var l = Ll
                                    ;(Ll |= 4),
                                        (Cl.current = null),
                                        (function (t, e) {
                                            if (((tr = $e), fi((t = di())))) {
                                                if ('selectionStart' in t)
                                                    var n = {start: t.selectionStart, end: t.selectionEnd}
                                                else
                                                    t: {
                                                        var i =
                                                            (n = ((n = t.ownerDocument) && n.defaultView) || window)
                                                                .getSelection && n.getSelection()
                                                        if (i && 0 !== i.rangeCount) {
                                                            n = i.anchorNode
                                                            var r = i.anchorOffset,
                                                                a = i.focusNode
                                                            i = i.focusOffset
                                                            try {
                                                                n.nodeType, a.nodeType
                                                            } catch (t) {
                                                                n = null
                                                                break t
                                                            }
                                                            var s = 0,
                                                                l = -1,
                                                                c = -1,
                                                                u = 0,
                                                                h = 0,
                                                                d = t,
                                                                f = null
                                                            e: for (; ;) {
                                                                for (
                                                                    var p;
                                                                    d !== n || (0 !== r && 3 !== d.nodeType) || (l = s + r),
                                                                    d !== a || (0 !== i && 3 !== d.nodeType) || (c = s + i),
                                                                    3 === d.nodeType && (s += d.nodeValue.length),
                                                                    null !== (p = d.firstChild);
                                                                )
                                                                    (f = d), (d = p)
                                                                for (; ;) {
                                                                    if (d === t) break e
                                                                    if (
                                                                        (f === n && ++u === r && (l = s),
                                                                        f === a && ++h === i && (c = s),
                                                                        null !== (p = d.nextSibling))
                                                                    )
                                                                        break
                                                                    f = (d = f).parentNode
                                                                }
                                                                d = p
                                                            }
                                                            n = -1 === l || -1 === c ? null : {start: l, end: c}
                                                        } else n = null
                                                    }
                                                n = n || {start: 0, end: 0}
                                            } else n = null
                                            for (
                                                er = {focusedElem: t, selectionRange: n}, $e = !1, Js = e;
                                                null !== Js;
                                            )
                                                if (((t = (e = Js).child), 0 != (1028 & e.subtreeFlags) && null !== t))
                                                    (t.return = e), (Js = t)
                                                else
                                                    for (; null !== Js;) {
                                                        e = Js
                                                        try {
                                                            var g = e.alternate
                                                            if (0 != (1024 & e.flags))
                                                                switch (e.tag) {
                                                                    case 0:
                                                                    case 11:
                                                                    case 15:
                                                                    case 5:
                                                                    case 6:
                                                                    case 4:
                                                                    case 17:
                                                                        break
                                                                    case 1:
                                                                        if (null !== g) {
                                                                            var m = g.memoizedProps,
                                                                                b = g.memoizedState,
                                                                                y = e.stateNode,
                                                                                v = y.getSnapshotBeforeUpdate(
                                                                                    e.elementType === e.type ? m : bo(e.type, m),
                                                                                    b
                                                                                )
                                                                            y.__reactInternalSnapshotBeforeUpdate = v
                                                                        }
                                                                        break
                                                                    case 3:
                                                                        var x = e.stateNode.containerInfo
                                                                        1 === x.nodeType
                                                                            ? (x.textContent = '')
                                                                            : 9 === x.nodeType &&
                                                                            x.documentElement &&
                                                                            x.removeChild(x.documentElement)
                                                                        break
                                                                    default:
                                                                        throw Error(o(163))
                                                                }
                                                        } catch (t) {
                                                            Mc(e, e.return, t)
                                                        }
                                                        if (null !== (t = e.sibling)) {
                                                            ;(t.return = e.return), (Js = t)
                                                            break
                                                        }
                                                        Js = e.return
                                                    }
                                            ;(g = nl), (nl = !1)
                                        })(t, n),
                                        bl(n, t),
                                        pi(er),
                                        ($e = !!tr),
                                        (er = tr = null),
                                        (t.current = n),
                                        vl(n, t, r),
                                        Kt(),
                                        (Ll = l),
                                        (ve = s),
                                        (Pl.transition = a)
                                } else t.current = n
                                if (
                                    (Xl && ((Xl = !1), (ql = t), (Kl = r)),
                                    0 === (a = t.pendingLanes) && (Ql = null),
                                        (function (t) {
                                            if (oe && 'function' == typeof oe.onCommitFiberRoot)
                                                try {
                                                    oe.onCommitFiberRoot(re, t, void 0, 128 == (128 & t.current.flags))
                                                } catch (t) {
                                                }
                                        })(n.stateNode),
                                        rc(t, Gt()),
                                    null !== e)
                                )
                                    for (i = t.onRecoverableError, n = 0; n < e.length; n++)
                                        i((r = e[n]).value, {componentStack: r.stack, digest: r.digest})
                                if (Ul) throw ((Ul = !1), (t = Yl), (Yl = null), t)
                                0 != (1 & Kl) && 0 !== t.tag && kc(),
                                    0 != (1 & (a = t.pendingLanes))
                                        ? t === Zl
                                            ? Gl++
                                            : ((Gl = 0), (Zl = t))
                                        : (Gl = 0),
                                    Wr()
                            })(t, e, n, i)
                    } finally {
                        ;(Pl.transition = r), (ve = i)
                    }
                    return null
                }

                function kc() {
                    if (null !== ql) {
                        var t = xe(Kl),
                            e = Pl.transition,
                            n = ve
                        try {
                            if (((Pl.transition = null), (ve = 16 > t ? 16 : t), null === ql)) var i = !1
                            else {
                                if (((t = ql), (ql = null), (Kl = 0), 0 != (6 & Ll))) throw Error(o(331))
                                var r = Ll
                                for (Ll |= 4, Js = t.current; null !== Js;) {
                                    var a = Js,
                                        s = a.child
                                    if (0 != (16 & Js.flags)) {
                                        var l = a.deletions
                                        if (null !== l) {
                                            for (var c = 0; c < l.length; c++) {
                                                var u = l[c]
                                                for (Js = u; null !== Js;) {
                                                    var h = Js
                                                    switch (h.tag) {
                                                        case 0:
                                                        case 11:
                                                        case 15:
                                                            il(8, h, a)
                                                    }
                                                    var d = h.child
                                                    if (null !== d) (d.return = h), (Js = d)
                                                    else
                                                        for (; null !== Js;) {
                                                            var f = (h = Js).sibling,
                                                                p = h.return
                                                            if ((al(h), h === u)) {
                                                                Js = null
                                                                break
                                                            }
                                                            if (null !== f) {
                                                                ;(f.return = p), (Js = f)
                                                                break
                                                            }
                                                            Js = p
                                                        }
                                                }
                                            }
                                            var g = a.alternate
                                            if (null !== g) {
                                                var m = g.child
                                                if (null !== m) {
                                                    g.child = null
                                                    do {
                                                        var b = m.sibling
                                                        ;(m.sibling = null), (m = b)
                                                    } while (null !== m)
                                                }
                                            }
                                            Js = a
                                        }
                                    }
                                    if (0 != (2064 & a.subtreeFlags) && null !== s) (s.return = a), (Js = s)
                                    else
                                        t: for (; null !== Js;) {
                                            if (0 != (2048 & (a = Js).flags))
                                                switch (a.tag) {
                                                    case 0:
                                                    case 11:
                                                    case 15:
                                                        il(9, a, a.return)
                                                }
                                            var y = a.sibling
                                            if (null !== y) {
                                                ;(y.return = a.return), (Js = y)
                                                break;
                                            }
                                            Js = a.return
                                        }
                                }
                                var v = t.current
                                for (Js = v; null !== Js;) {
                                    var x = (s = Js).child
                                    if (0 != (2064 & s.subtreeFlags) && null !== x) (x.return = s), (Js = x)
                                    else
                                        t: for (s = v; null !== Js;) {
                                            if (0 != (2048 & (l = Js).flags))
                                                try {
                                                    switch (l.tag) {
                                                        case 0:
                                                        case 11:
                                                        case 15:
                                                            rl(9, l)
                                                    }
                                                } catch (t) {
                                                    Mc(l, l.return, t)
                                                }
                                            if (l === s) {
                                                Js = null
                                                break;
                                            }
                                            var _ = l.sibling
                                            if (null !== _) {
                                                ;(_.return = l.return), (Js = _)
                                                break;
                                            }
                                            Js = l.return
                                        }
                                }
                                if (((Ll = r), Wr(), oe && 'function' == typeof oe.onPostCommitFiberRoot))
                                    try {
                                        oe.onPostCommitFiberRoot(re, t)
                                    } catch (t) {
                                    }
                                i = !0
                            }
                            return i
                        } finally {
                            ;(ve = n), (Pl.transition = e)
                        }
                    }
                    return !1
                }

                function Sc(t, e, n) {
                    ;(t = Ao(t, (e = ps(0, (e = us(n, e)), 1)), 1)),
                        (e = ec()),
                    null !== t && (be(t, 1, e), rc(t, e))
                }

                function Mc(t, e, n) {
                    if (3 === t.tag) Sc(t, t, n)
                    else
                        for (; null !== e;) {
                            if (3 === e.tag) {
                                Sc(e, t, n)
                                break
                            }
                            if (1 === e.tag) {
                                var i = e.stateNode
                                if (
                                    'function' == typeof e.type.getDerivedStateFromError ||
                                    ('function' == typeof i.componentDidCatch && (null === Ql || !Ql.has(i)))
                                ) {
                                    ;(e = Ao(e, (t = gs(e, (t = us(n, t)), 1)), 1)),
                                        (t = ec()),
                                    null !== e && (be(e, 1, t), rc(e, t))
                                    break
                                }
                            }
                            e = e.return
                        }
                }

                function Ec(t, e, n) {
                    var i = t.pingCache
                    null !== i && i.delete(e),
                        (e = ec()),
                        (t.pingedLanes |= t.suspendedLanes & n),
                    Dl === t &&
                    (Tl & n) === n &&
                    (4 === Al || (3 === Al && (130023424 & Tl) === Tl && 500 > Gt() - Wl)
                        ? fc(t, 0)
                        : (Vl |= n)),
                        rc(t, e)
                }

                function Cc(t, e) {
                    0 === e &&
                    (0 == (1 & t.mode)
                        ? (e = 1)
                        : ((e = ue), 0 == (130023424 & (ue <<= 1)) && (ue = 4194304)))
                    var n = ec()
                    null !== (t = Do(t, e)) && (be(t, e, n), rc(t, n))
                }

                function Pc(t) {
                    var e = t.memoizedState,
                        n = 0
                    null !== e && (n = e.retryLane), Cc(t, n)
                }

                function Lc(t, e) {
                    var n = 0
                    switch (t.tag) {
                        case 13:
                            var i = t.stateNode,
                                r = t.memoizedState
                            null !== r && (n = r.retryLane)
                            break
                        case 19:
                            i = t.stateNode
                            break
                        default:
                            throw Error(o(314))
                    }
                    null !== i && i.delete(e), Cc(t, n)
                }

                function Dc(t, e) {
                    return Qt(t, e)
                }

                function Oc(t, e, n, i) {
                    ;(this.tag = t),
                        (this.key = n),
                        (this.sibling =
                            this.child =
                                this.return =
                                    this.stateNode =
                                        this.type =
                                            this.elementType =
                                                null),
                        (this.index = 0),
                        (this.ref = null),
                        (this.pendingProps = e),
                        (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
                        (this.mode = i),
                        (this.subtreeFlags = this.flags = 0),
                        (this.deletions = null),
                        (this.childLanes = this.lanes = 0),
                        (this.alternate = null)
                }

                function Tc(t, e, n, i) {
                    return new Oc(t, e, n, i)
                }

                function zc(t) {
                    return !(!(t = t.prototype) || !t.isReactComponent)
                }

                function Rc(t, e) {
                    var n = t.alternate
                    return (
                        null === n
                            ? (((n = Tc(t.tag, e, t.key, t.mode)).elementType = t.elementType),
                                (n.type = t.type),
                                (n.stateNode = t.stateNode),
                                (n.alternate = t),
                                (t.alternate = n))
                            : ((n.pendingProps = e),
                                (n.type = t.type),
                                (n.flags = 0),
                                (n.subtreeFlags = 0),
                                (n.deletions = null)),
                            (n.flags = 14680064 & t.flags),
                            (n.childLanes = t.childLanes),
                            (n.lanes = t.lanes),
                            (n.child = t.child),
                            (n.memoizedProps = t.memoizedProps),
                            (n.memoizedState = t.memoizedState),
                            (n.updateQueue = t.updateQueue),
                            (e = t.dependencies),
                            (n.dependencies = null === e ? null : {lanes: e.lanes, firstContext: e.firstContext}),
                            (n.sibling = t.sibling),
                            (n.index = t.index),
                            (n.ref = t.ref),
                            n
                    )
                }

                function Ac(t, e, n, i, r, a) {
                    var s = 2
                    if (((i = t), 'function' == typeof t)) zc(t) && (s = 1)
                    else if ('string' == typeof t) s = 5
                    else
                        t: switch (t) {
                            case k:
                                return Nc(n.children, r, a, e)
                            case S:
                                ;(s = 8), (r |= 8)
                                break
                            case M:
                                return ((t = Tc(12, n, e, 2 | r)).elementType = M), (t.lanes = a), t
                            case L:
                                return ((t = Tc(13, n, e, r)).elementType = L), (t.lanes = a), t
                            case D:
                                return ((t = Tc(19, n, e, r)).elementType = D), (t.lanes = a), t
                            case z:
                                return Ic(n, r, a, e)
                            default:
                                if ('object' == typeof t && null !== t)
                                    switch (t.$$typeof) {
                                        case E:
                                            s = 10
                                            break t
                                        case C:
                                            s = 9
                                            break t
                                        case P:
                                            s = 11
                                            break t
                                        case O:
                                            s = 14
                                            break t
                                        case T:
                                            ;(s = 16), (i = null)
                                            break t
                                    }
                                throw Error(o(130, null == t ? t : typeof t, ''))
                        }
                    return ((e = Tc(s, n, e, r)).elementType = t), (e.type = i), (e.lanes = a), e
                }

                function Nc(t, e, n, i) {
                    return ((t = Tc(7, t, i, e)).lanes = n), t
                }

                function Ic(t, e, n, i) {
                    return (
                        ((t = Tc(22, t, i, e)).elementType = z),
                            (t.lanes = n),
                            (t.stateNode = {isHidden: !1}),
                            t
                    )
                }

                function Fc(t, e, n) {
                    return ((t = Tc(6, t, null, e)).lanes = n), t
                }

                function Vc(t, e, n) {
                    return (
                        ((e = Tc(4, null !== t.children ? t.children : [], t.key, e)).lanes = n),
                            (e.stateNode = {
                                containerInfo: t.containerInfo,
                                pendingChildren: null,
                                implementation: t.implementation
                            }),
                            e
                    )
                }

                function Bc(t, e, n, i, r) {
                    ;(this.tag = e),
                        (this.containerInfo = t),
                        (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
                        (this.timeoutHandle = -1),
                        (this.callbackNode = this.pendingContext = this.context = null),
                        (this.callbackPriority = 0),
                        (this.eventTimes = me(0)),
                        (this.expirationTimes = me(-1)),
                        (this.entangledLanes =
                            this.finishedLanes =
                                this.mutableReadLanes =
                                    this.expiredLanes =
                                        this.pingedLanes =
                                            this.suspendedLanes =
                                                this.pendingLanes =
                                                    0),
                        (this.entanglements = me(0)),
                        (this.identifierPrefix = i),
                        (this.onRecoverableError = r),
                        (this.mutableSourceEagerHydrationData = null)
                }

                function jc(t, e, n, i, r, o, a, s, l) {
                    return (
                        (t = new Bc(t, e, n, s, l)),
                            1 === e ? ((e = 1), !0 === o && (e |= 8)) : (e = 0),
                            (o = Tc(3, null, null, e)),
                            (t.current = o),
                            (o.stateNode = t),
                            (o.memoizedState = {
                                element: i,
                                isDehydrated: n,
                                cache: null,
                                transitions: null,
                                pendingSuspenseBoundaries: null
                            }),
                            To(o),
                            t
                    )
                }

                function Wc(t) {
                    if (!t) return Cr
                    t: {
                        if (Wt((t = t._reactInternals)) !== t || 1 !== t.tag) throw Error(o(170))
                        var e = t
                        do {
                            switch (e.tag) {
                                case 3:
                                    e = e.stateNode.context
                                    break t
                                case 1:
                                    if (Tr(e.type)) {
                                        e = e.stateNode.__reactInternalMemoizedMergedChildContext
                                        break t
                                    }
                            }
                            e = e.return
                        } while (null !== e)
                        throw Error(o(171))
                    }
                    if (1 === t.tag) {
                        var n = t.type
                        if (Tr(n)) return Ar(t, n, e)
                    }
                    return e
                }

                function Hc(t, e, n, i, r, o, a, s, l) {
                    return (
                        ((t = jc(n, i, !0, t, 0, o, 0, s, l)).context = Wc(null)),
                            (n = t.current),
                            ((o = Ro((i = ec()), (r = nc(n)))).callback = null != e ? e : null),
                            Ao(n, o, r),
                            (t.current.lanes = r),
                            be(t, r, i),
                            rc(t, i),
                            t
                    )
                }

                function $c(t, e, n, i) {
                    var r = e.current,
                        o = ec(),
                        a = nc(r)
                    return (
                        (n = Wc(n)),
                            null === e.context ? (e.context = n) : (e.pendingContext = n),
                            ((e = Ro(o, a)).payload = {element: t}),
                        null !== (i = void 0 === i ? null : i) && (e.callback = i),
                        null !== (t = Ao(r, e, a)) && (ic(t, r, a, o), No(t, r, a)),
                            a
                    )
                }

                function Uc(t) {
                    return (t = t.current).child ? (t.child.tag, t.child.stateNode) : null
                }

                function Yc(t, e) {
                    if (null !== (t = t.memoizedState) && null !== t.dehydrated) {
                        var n = t.retryLane
                        t.retryLane = 0 !== n && n < e ? n : e
                    }
                }

                function Qc(t, e) {
                    Yc(t, e), (t = t.alternate) && Yc(t, e)
                }

                Sl = function (t, e, n) {
                    if (null !== t)
                        if (t.memoizedProps !== e.pendingProps || Lr.current) xs = !0
                        else {
                            if (0 == (t.lanes & n) && 0 == (128 & e.flags))
                                return (
                                    (xs = !1),
                                        (function (t, e, n) {
                                            switch (e.tag) {
                                                case 3:
                                                    Ds(e), po()
                                                    break
                                                case 5:
                                                    aa(e)
                                                    break
                                                case 1:
                                                    Tr(e.type) && Nr(e)
                                                    break
                                                case 4:
                                                    ra(e, e.stateNode.containerInfo)
                                                    break
                                                case 10:
                                                    var i = e.type._context,
                                                        r = e.memoizedProps.value
                                                    Er(yo, i._currentValue), (i._currentValue = r)
                                                    break
                                                case 13:
                                                    if (null !== (i = e.memoizedState))
                                                        return null !== i.dehydrated
                                                            ? (Er(la, 1 & la.current), (e.flags |= 128), null)
                                                            : 0 != (n & e.child.childLanes)
                                                                ? Fs(t, e, n)
                                                                : (Er(la, 1 & la.current),
                                                                    null !== (t = Us(t, e, n)) ? t.sibling : null)
                                                    Er(la, 1 & la.current)
                                                    break
                                                case 19:
                                                    if (((i = 0 != (n & e.childLanes)), 0 != (128 & t.flags))) {
                                                        if (i) return Hs(t, e, n)
                                                        e.flags |= 128
                                                    }
                                                    if (
                                                        (null !== (r = e.memoizedState) &&
                                                        ((r.rendering = null), (r.tail = null), (r.lastEffect = null)),
                                                            Er(la, la.current),
                                                            i)
                                                    )
                                                        break
                                                    return null
                                                case 22:
                                                case 23:
                                                    return (e.lanes = 0), Ms(t, e, n)
                                            }
                                            return Us(t, e, n)
                                        })(t, e, n)
                                )
                            xs = 0 != (131072 & t.flags)
                        }
                    else (xs = !1), ro && 0 != (1048576 & e.flags) && Jr(e, Yr, e.index)
                    switch (((e.lanes = 0), e.tag)) {
                        case 2:
                            var i = e.type
                            $s(t, e), (t = e.pendingProps)
                            var r = Or(e, Pr.current)
                            Mo(e, n), (r = Sa(null, e, i, t, r, n))
                            var a = Ma()
                            return (
                                (e.flags |= 1),
                                    'object' == typeof r &&
                                    null !== r &&
                                    'function' == typeof r.render &&
                                    void 0 === r.$$typeof
                                        ? ((e.tag = 1),
                                            (e.memoizedState = null),
                                            (e.updateQueue = null),
                                            Tr(i) ? ((a = !0), Nr(e)) : (a = !1),
                                            (e.memoizedState = null !== r.state && void 0 !== r.state ? r.state : null),
                                            To(e),
                                            (r.updater = Wo),
                                            (e.stateNode = r),
                                            (r._reactInternals = e),
                                            Yo(e, i, t, n),
                                            (e = Ls(null, e, i, !0, a, n)))
                                        : ((e.tag = 0), ro && a && to(e), _s(null, e, r, n), (e = e.child)),
                                    e
                            )
                        case 16:
                            i = e.elementType
                            t: {
                                switch (
                                    ($s(t, e),
                                        (t = e.pendingProps),
                                        (i = (r = i._init)(i._payload)),
                                        (e.type = i),
                                        (r = e.tag =
                                            (function (t) {
                                                if ('function' == typeof t) return zc(t) ? 1 : 0
                                                if (null != t) {
                                                    if ((t = t.$$typeof) === P) return 11
                                                    if (t === O) return 14
                                                }
                                                return 2
                                            })(i)),
                                        (t = bo(i, t)),
                                        r)
                                    ) {
                                    case 0:
                                        e = Cs(null, e, i, t, n)
                                        break t
                                    case 1:
                                        e = Ps(null, e, i, t, n)
                                        break t
                                    case 11:
                                        e = ws(null, e, i, t, n)
                                        break t
                                    case 14:
                                        e = ks(null, e, i, bo(i.type, t), n)
                                        break t
                                }
                                throw Error(o(306, i, ''))
                            }
                            return e
                        case 0:
                            return (
                                (i = e.type),
                                    (r = e.pendingProps),
                                    Cs(t, e, i, (r = e.elementType === i ? r : bo(i, r)), n)
                            )
                        case 1:
                            return (
                                (i = e.type),
                                    (r = e.pendingProps),
                                    Ps(t, e, i, (r = e.elementType === i ? r : bo(i, r)), n)
                            )
                        case 3:
                            t: {
                                if ((Ds(e), null === t)) throw Error(o(387))
                                    ;
                                (i = e.pendingProps),
                                    (r = (a = e.memoizedState).element),
                                    zo(t, e),
                                    Fo(e, i, null, n)
                                var s = e.memoizedState
                                if (((i = s.element), a.isDehydrated)) {
                                    if (
                                        ((a = {
                                            element: i,
                                            isDehydrated: !1,
                                            cache: s.cache,
                                            pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                                            transitions: s.transitions
                                        }),
                                            (e.updateQueue.baseState = a),
                                            (e.memoizedState = a),
                                        256 & e.flags)
                                    ) {
                                        e = Os(t, e, i, n, (r = us(Error(o(423)), e)))
                                        break t
                                    }
                                    if (i !== r) {
                                        e = Os(t, e, i, n, (r = us(Error(o(424)), e)))
                                        break t
                                    }
                                    for (
                                        io = cr(e.stateNode.containerInfo.firstChild),
                                            no = e,
                                            ro = !0,
                                            oo = null,
                                            n = Zo(e, null, i, n),
                                            e.child = n;
                                        n;
                                    )
                                        (n.flags = (-3 & n.flags) | 4096), (n = n.sibling)
                                } else {
                                    if ((po(), i === r)) {
                                        e = Us(t, e, n)
                                        break t
                                    }
                                    _s(t, e, i, n)
                                }
                                e = e.child
                            }
                            return e
                        case 5:
                            return (
                                aa(e),
                                null === t && co(e),
                                    (i = e.type),
                                    (r = e.pendingProps),
                                    (a = null !== t ? t.memoizedProps : null),
                                    (s = r.children),
                                    nr(i, r) ? (s = null) : null !== a && nr(i, a) && (e.flags |= 32),
                                    Es(t, e),
                                    _s(t, e, s, n),
                                    e.child
                            )
                        case 6:
                            return null === t && co(e), null
                        case 13:
                            return Fs(t, e, n)
                        case 4:
                            return (
                                ra(e, e.stateNode.containerInfo),
                                    (i = e.pendingProps),
                                    null === t ? (e.child = Go(e, null, i, n)) : _s(t, e, i, n),
                                    e.child
                            )
                        case 11:
                            return (
                                (i = e.type),
                                    (r = e.pendingProps),
                                    ws(t, e, i, (r = e.elementType === i ? r : bo(i, r)), n)
                            )
                        case 7:
                            return _s(t, e, e.pendingProps, n), e.child
                        case 8:
                        case 12:
                            return _s(t, e, e.pendingProps.children, n), e.child
                        case 10:
                            t: {
                                if (
                                    ((i = e.type._context),
                                        (r = e.pendingProps),
                                        (a = e.memoizedProps),
                                        (s = r.value),
                                        Er(yo, i._currentValue),
                                        (i._currentValue = s),
                                    null !== a)
                                )
                                    if (si(a.value, s)) {
                                        if (a.children === r.children && !Lr.current) {
                                            e = Us(t, e, n)
                                            break t
                                        }
                                    } else
                                        for (null !== (a = e.child) && (a.return = e); null !== a;) {
                                            var l = a.dependencies
                                            if (null !== l) {
                                                s = a.child
                                                for (var c = l.firstContext; null !== c;) {
                                                    if (c.context === i) {
                                                        if (1 === a.tag) {
                                                            ;(c = Ro(-1, n & -n)).tag = 2
                                                            var u = a.updateQueue
                                                            if (null !== u) {
                                                                var h = (u = u.shared).pending
                                                                null === h ? (c.next = c) : ((c.next = h.next), (h.next = c)),
                                                                    (u.pending = c)
                                                            }
                                                        }
                                                        ;(a.lanes |= n),
                                                        null !== (c = a.alternate) && (c.lanes |= n),
                                                            So(a.return, n, e),
                                                            (l.lanes |= n)
                                                        break
                                                    }
                                                    c = c.next
                                                }
                                            } else if (10 === a.tag) s = a.type === e.type ? null : a.child
                                            else if (18 === a.tag) {
                                                if (null === (s = a.return)) throw Error(o(341))
                                                    ;
                                                (s.lanes |= n),
                                                null !== (l = s.alternate) && (l.lanes |= n),
                                                    So(s, n, e),
                                                    (s = a.sibling)
                                            } else s = a.child
                                            if (null !== s) s.return = a
                                            else
                                                for (s = a; null !== s;) {
                                                    if (s === e) {
                                                        s = null
                                                        break
                                                    }
                                                    if (null !== (a = s.sibling)) {
                                                        ;(a.return = s.return), (s = a)
                                                        break
                                                    }
                                                    s = s.return
                                                }
                                            a = s
                                        }
                                _s(t, e, r.children, n), (e = e.child)
                            }
                            return e
                        case 9:
                            return (
                                (r = e.type),
                                    (i = e.pendingProps.children),
                                    Mo(e, n),
                                    (i = i((r = Eo(r)))),
                                    (e.flags |= 1),
                                    _s(t, e, i, n),
                                    e.child
                            )
                        case 14:
                            return (r = bo((i = e.type), e.pendingProps)), ks(t, e, i, (r = bo(i.type, r)), n)
                        case 15:
                            return Ss(t, e, e.type, e.pendingProps, n)
                        case 17:
                            return (
                                (i = e.type),
                                    (r = e.pendingProps),
                                    (r = e.elementType === i ? r : bo(i, r)),
                                    $s(t, e),
                                    (e.tag = 1),
                                    Tr(i) ? ((t = !0), Nr(e)) : (t = !1),
                                    Mo(e, n),
                                    $o(e, i, r),
                                    Yo(e, i, r, n),
                                    Ls(null, e, i, !0, t, n)
                            )
                        case 19:
                            return Hs(t, e, n)
                        case 22:
                            return Ms(t, e, n)
                    }
                    throw Error(o(156, e.tag))
                }
                var Xc =
                    'function' == typeof reportError
                        ? reportError
                        : function (t) {
                            console.error(t)
                        }

                function qc(t) {
                    this._internalRoot = t
                }

                function Kc(t) {
                    this._internalRoot = t
                }

                function Gc(t) {
                    return !(!t || (1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType))
                }

                function Zc(t) {
                    return !(
                        !t ||
                        (1 !== t.nodeType &&
                            9 !== t.nodeType &&
                            11 !== t.nodeType &&
                            (8 !== t.nodeType || ' react-mount-point-unstable ' !== t.nodeValue))
                    )
                }

                function Jc() {
                }

                function tu(t, e, n, i, r) {
                    var o = n._reactRootContainer
                    if (o) {
                        var a = o
                        if ('function' == typeof r) {
                            var s = r
                            r = function () {
                                var t = Uc(a)
                                s.call(t)
                            }
                        }
                        $c(e, a, t, r)
                    } else
                        a = (function (t, e, n, i, r) {
                            if (r) {
                                if ('function' == typeof i) {
                                    var o = i
                                    i = function () {
                                        var t = Uc(a)
                                        o.call(t)
                                    }
                                }
                                var a = Hc(e, i, t, 0, null, !1, 0, '', Jc)
                                return (
                                    (t._reactRootContainer = a),
                                        (t[pr] = a.current),
                                        Wi(8 === t.nodeType ? t.parentNode : t),
                                        hc(),
                                        a
                                )
                            }
                            for (; (r = t.lastChild);) t.removeChild(r)
                            if ('function' == typeof i) {
                                var s = i
                                i = function () {
                                    var t = Uc(l)
                                    s.call(t)
                                }
                            }
                            var l = jc(t, 0, !1, null, 0, !1, 0, '', Jc)
                            return (
                                (t._reactRootContainer = l),
                                    (t[pr] = l.current),
                                    Wi(8 === t.nodeType ? t.parentNode : t),
                                    hc(function () {
                                        $c(e, l, n, i)
                                    }),
                                    l
                            )
                        })(n, e, t, r, i)
                    return Uc(a)
                }
                ;(Kc.prototype.render = qc.prototype.render =
                    function (t) {
                        var e = this._internalRoot
                        if (null === e) throw Error(o(409))
                        $c(t, e, null, null)
                    }),
                    (Kc.prototype.unmount = qc.prototype.unmount =
                        function () {
                            var t = this._internalRoot
                            if (null !== t) {
                                this._internalRoot = null
                                var e = t.containerInfo
                                hc(function () {
                                    $c(null, t, null, null)
                                }),
                                    (e[pr] = null)
                            }
                        }),
                    (Kc.prototype.unstable_scheduleHydration = function (t) {
                        if (t) {
                            var e = Se()
                            t = {blockedOn: null, target: t, priority: e}
                            for (var n = 0; n < ze.length && 0 !== e && e < ze[n].priority; n++) ;
                            ze.splice(n, 0, t), 0 === n && Ie(t)
                        }
                    }),
                    (_e = function (t) {
                        switch (t.tag) {
                            case 3:
                                var e = t.stateNode
                                if (e.current.memoizedState.isDehydrated) {
                                    var n = he(e.pendingLanes)
                                    0 !== n && (ye(e, 1 | n), rc(e, Gt()), 0 == (6 & Ll) && ((Hl = Gt() + 500), Wr()))
                                }
                                break
                            case 13:
                                hc(function () {
                                    var e = Do(t, 1)
                                    if (null !== e) {
                                        var n = ec()
                                        ic(e, t, 1, n)
                                    }
                                }),
                                    Qc(t, 1)
                        }
                    }),
                    (we = function (t) {
                        if (13 === t.tag) {
                            var e = Do(t, 134217728)
                            null !== e && ic(e, t, 134217728, ec()), Qc(t, 134217728)
                        }
                    }),
                    (ke = function (t) {
                        if (13 === t.tag) {
                            var e = nc(t),
                                n = Do(t, e)
                            null !== n && ic(n, t, e, ec()), Qc(t, e)
                        }
                    }),
                    (Se = function () {
                        return ve
                    }),
                    (Me = function (t, e) {
                        var n = ve
                        try {
                            return (ve = t), e()
                        } finally {
                            ve = n
                        }
                    }),
                    (wt = function (t, e, n) {
                        switch (e) {
                            case 'input':
                                if ((Z(t, n), (e = n.name), 'radio' === n.type && null != e)) {
                                    for (n = t; n.parentNode;) n = n.parentNode
                                    for (
                                        n = n.querySelectorAll(
                                            'input[name=' + JSON.stringify('' + e) + '][type="radio"]'
                                        ),
                                            e = 0;
                                        e < n.length;
                                        e++
                                    ) {
                                        var i = n[e]
                                        if (i !== t && i.form === t.form) {
                                            var r = _r(i)
                                            if (!r) throw Error(o(90))
                                            Q(i), Z(i, r)
                                        }
                                    }
                                }
                                break
                            case 'textarea':
                                ot(t, n)
                                break
                            case 'select':
                                null != (e = n.value) && nt(t, !!n.multiple, e, !1)
                        }
                    }),
                    (Pt = uc),
                    (Lt = hc)
                var eu = {usingClientEntryPoint: !1, Events: [vr, xr, _r, Et, Ct, uc]},
                    nu = {
                        findFiberByHostInstance: yr,
                        bundleType: 0,
                        version: '18.2.0',
                        rendererPackageName: 'react-dom'
                    },
                    iu = {
                        bundleType: nu.bundleType,
                        version: nu.version,
                        rendererPackageName: nu.rendererPackageName,
                        rendererConfig: nu.rendererConfig,
                        overrideHookState: null,
                        overrideHookStateDeletePath: null,
                        overrideHookStateRenamePath: null,
                        overrideProps: null,
                        overridePropsDeletePath: null,
                        overridePropsRenamePath: null,
                        setErrorHandler: null,
                        setSuspenseHandler: null,
                        scheduleUpdate: null,
                        currentDispatcherRef: x.ReactCurrentDispatcher,
                        findHostInstanceByFiber: function (t) {
                            return null === (t = Ut(t)) ? null : t.stateNode
                        },
                        findFiberByHostInstance:
                            nu.findFiberByHostInstance ||
                            function () {
                                return null
                            },
                        findHostInstancesForRefresh: null,
                        scheduleRefresh: null,
                        scheduleRoot: null,
                        setRefreshHandler: null,
                        getCurrentFiber: null,
                        reconcilerVersion: '18.2.0-next-9e3b772b8-20220608'
                    }
                if ('undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
                    var ru = __REACT_DEVTOOLS_GLOBAL_HOOK__
                    if (!ru.isDisabled && ru.supportsFiber)
                        try {
                            ;(re = ru.inject(iu)), (oe = ru)
                        } catch (ut) {
                        }
                }
                ;(e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = eu),
                    (e.createPortal = function (t, e) {
                        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null
                        if (!Gc(e)) throw Error(o(200))
                        return (function (t, e, n) {
                            var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null
                            return {
                                $$typeof: w,
                                key: null == i ? null : '' + i,
                                children: t,
                                containerInfo: e,
                                implementation: n
                            }
                        })(t, e, null, n)
                    }),
                    (e.createRoot = function (t, e) {
                        if (!Gc(t)) throw Error(o(299))
                        var n = !1,
                            i = '',
                            r = Xc
                        return (
                            null != e &&
                            (!0 === e.unstable_strictMode && (n = !0),
                            void 0 !== e.identifierPrefix && (i = e.identifierPrefix),
                            void 0 !== e.onRecoverableError && (r = e.onRecoverableError)),
                                (e = jc(t, 1, !1, null, 0, n, 0, i, r)),
                                (t[pr] = e.current),
                                Wi(8 === t.nodeType ? t.parentNode : t),
                                new qc(e)
                        )
                    }),
                    (e.findDOMNode = function (t) {
                        if (null == t) return null
                        if (1 === t.nodeType) return t
                        var e = t._reactInternals
                        if (void 0 === e) {
                            if ('function' == typeof t.render) throw Error(o(188))
                            throw ((t = Object.keys(t).join(',')), Error(o(268, t)))
                        }
                        return null === (t = Ut(e)) ? null : t.stateNode
                    }),
                    (e.flushSync = function (t) {
                        return hc(t)
                    }),
                    (e.hydrate = function (t, e, n) {
                        if (!Zc(e)) throw Error(o(200))
                        return tu(null, t, e, !0, n)
                    }),
                    (e.hydrateRoot = function (t, e, n) {
                        if (!Gc(t)) throw Error(o(405))
                        var i = (null != n && n.hydratedSources) || null,
                            r = !1,
                            a = '',
                            s = Xc
                        if (
                            (null != n &&
                            (!0 === n.unstable_strictMode && (r = !0),
                            void 0 !== n.identifierPrefix && (a = n.identifierPrefix),
                            void 0 !== n.onRecoverableError && (s = n.onRecoverableError)),
                                (e = Hc(e, null, t, 1, null != n ? n : null, r, 0, a, s)),
                                (t[pr] = e.current),
                                Wi(t),
                                i)
                        )
                            for (t = 0; t < i.length; t++)
                                (r = (r = (n = i[t])._getVersion)(n._source)),
                                    null == e.mutableSourceEagerHydrationData
                                        ? (e.mutableSourceEagerHydrationData = [n, r])
                                        : e.mutableSourceEagerHydrationData.push(n, r)
                        return new Kc(e)
                    }),
                    (e.render = function (t, e, n) {
                        if (!Zc(e)) throw Error(o(200))
                        return tu(null, t, e, !1, n)
                    }),
                    (e.unmountComponentAtNode = function (t) {
                        if (!Zc(t)) throw Error(o(40))
                        return (
                            !!t._reactRootContainer &&
                            (hc(function () {
                                tu(null, null, t, !1, function () {
                                    ;(t._reactRootContainer = null), (t[pr] = null)
                                })
                            }),
                                !0)
                        )
                    }),
                    (e.unstable_batchedUpdates = uc),
                    (e.unstable_renderSubtreeIntoContainer = function (t, e, n, i) {
                        if (!Zc(n)) throw Error(o(200))
                        if (null == t || void 0 === t._reactInternals) throw Error(o(38))
                        return tu(t, e, n, !1, i)
                    }),
                    (e.version = '18.2.0-next-9e3b772b8-20220608')
            },
            338: (t, e, n) => {
                var i = n(961)
                ;(e.createRoot = i.createRoot), (e.hydrateRoot = i.hydrateRoot)
            },
            961: (t, e, n) => {
                !(function t() {
                    if (
                        'undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
                        'function' == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
                    )
                        try {
                            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)
                        } catch (t) {
                            console.error(t)
                        }
                })(),
                    (t.exports = n(551))
            },
            287: (t, e) => {
                var n = Symbol.for('react.element'),
                    i = Symbol.for('react.portal'),
                    r = Symbol.for('react.fragment'),
                    o = Symbol.for('react.strict_mode'),
                    a = Symbol.for('react.profiler'),
                    s = Symbol.for('react.provider'),
                    l = Symbol.for('react.context'),
                    c = Symbol.for('react.forward_ref'),
                    u = Symbol.for('react.suspense'),
                    h = Symbol.for('react.memo'),
                    d = Symbol.for('react.lazy'),
                    f = Symbol.iterator,
                    p = {
                        isMounted: function () {
                            return !1
                        },
                        enqueueForceUpdate: function () {
                        },
                        enqueueReplaceState: function () {
                        },
                        enqueueSetState: function () {
                        }
                    },
                    g = Object.assign,
                    m = {}

                function b(t, e, n) {
                    ;(this.props = t), (this.context = e), (this.refs = m), (this.updater = n || p)
                }

                function y() {
                }

                function v(t, e, n) {
                    ;(this.props = t), (this.context = e), (this.refs = m), (this.updater = n || p)
                }
                ;(b.prototype.isReactComponent = {}),
                    (b.prototype.setState = function (t, e) {
                        if ('object' != typeof t && 'function' != typeof t && null != t)
                            throw Error(
                                'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
                            )
                        this.updater.enqueueSetState(this, t, e, 'setState')
                    }),
                    (b.prototype.forceUpdate = function (t) {
                        this.updater.enqueueForceUpdate(this, t, 'forceUpdate')
                    }),
                    (y.prototype = b.prototype)
                var x = (v.prototype = new y())
                ;(x.constructor = v), g(x, b.prototype), (x.isPureReactComponent = !0)
                var _ = Array.isArray,
                    w = Object.prototype.hasOwnProperty,
                    k = {current: null},
                    S = {key: !0, ref: !0, __self: !0, __source: !0}

                function M(t, e, i) {
                    var r,
                        o = {},
                        a = null,
                        s = null
                    if (null != e)
                        for (r in (void 0 !== e.ref && (s = e.ref), void 0 !== e.key && (a = '' + e.key), e))
                            w.call(e, r) && !S.hasOwnProperty(r) && (o[r] = e[r])
                    var l = arguments.length - 2
                    if (1 === l) o.children = i
                    else if (1 < l) {
                        for (var c = Array(l), u = 0; u < l; u++) c[u] = arguments[u + 2]
                        o.children = c
                    }
                    if (t && t.defaultProps) for (r in (l = t.defaultProps)) void 0 === o[r] && (o[r] = l[r])
                    return {$$typeof: n, type: t, key: a, ref: s, props: o, _owner: k.current}
                }

                function E(t) {
                    return 'object' == typeof t && null !== t && t.$$typeof === n
                }

                var C = /\/+/g

                function P(t, e) {
                    return 'object' == typeof t && null !== t && null != t.key
                        ? (function (t) {
                            var e = {'=': '=0', ':': '=2'}
                            return (
                                '$' +
                                t.replace(/[=:]/g, function (t) {
                                    return e[t]
                                })
                            )
                        })('' + t.key)
                        : e.toString(36)
                }

                function L(t, e, r, o, a) {
                    var s = typeof t
                    ;('undefined' !== s && 'boolean' !== s) || (t = null)
                    var l = !1
                    if (null === t) l = !0
                    else
                        switch (s) {
                            case 'string':
                            case 'number':
                                l = !0
                                break
                            case 'object':
                                switch (t.$$typeof) {
                                    case n:
                                    case i:
                                        l = !0
                                }
                        }
                    if (l)
                        return (
                            (a = a((l = t))),
                                (t = '' === o ? '.' + P(l, 0) : o),
                                _(a)
                                    ? ((r = ''),
                                    null != t && (r = t.replace(C, '$&/') + '/'),
                                        L(a, e, r, '', function (t) {
                                            return t
                                        }))
                                    : null != a &&
                                    (E(a) &&
                                    (a = (function (t, e) {
                                        return {
                                            $$typeof: n,
                                            type: t.type,
                                            key: e,
                                            ref: t.ref,
                                            props: t.props,
                                            _owner: t._owner
                                        }
                                    })(
                                        a,
                                        r +
                                        (!a.key || (l && l.key === a.key)
                                            ? ''
                                            : ('' + a.key).replace(C, '$&/') + '/') +
                                        t
                                    )),
                                        e.push(a)),
                                1
                        )
                    if (((l = 0), (o = '' === o ? '.' : o + ':'), _(t)))
                        for (var c = 0; c < t.length; c++) {
                            var u = o + P((s = t[c]), c)
                            l += L(s, e, r, u, a)
                        }
                    else if (
                        ((u = (function (t) {
                            return null === t || 'object' != typeof t
                                ? null
                                : 'function' == typeof (t = (f && t[f]) || t['@@iterator'])
                                    ? t
                                    : null
                        })(t)),
                        'function' == typeof u)
                    )
                        for (t = u.call(t), c = 0; !(s = t.next()).done;)
                            l += L((s = s.value), e, r, (u = o + P(s, c++)), a)
                    else if ('object' === s)
                        throw (
                            ((e = String(t)),
                                Error(
                                    'Objects are not valid as a React child (found: ' +
                                    ('[object Object]' === e
                                        ? 'object with keys {' + Object.keys(t).join(', ') + '}'
                                        : e) +
                                    '). If you meant to render a collection of children, use an array instead.'
                                ))
                        )
                    return l
                }

                function D(t, e, n) {
                    if (null == t) return t
                    var i = [],
                        r = 0
                    return (
                        L(t, i, '', '', function (t) {
                            return e.call(n, t, r++)
                        }),
                            i
                    )
                }

                function O(t) {
                    if (-1 === t._status) {
                        var e = t._result
                        ;(e = e()).then(
                            function (e) {
                                ;(0 !== t._status && -1 !== t._status) || ((t._status = 1), (t._result = e))
                            },
                            function (e) {
                                ;(0 !== t._status && -1 !== t._status) || ((t._status = 2), (t._result = e))
                            }
                        ),
                        -1 === t._status && ((t._status = 0), (t._result = e))
                    }
                    if (1 === t._status) return t._result.default
                    throw t._result
                }

                var T = {current: null},
                    z = {transition: null},
                    R = {ReactCurrentDispatcher: T, ReactCurrentBatchConfig: z, ReactCurrentOwner: k}
                ;(e.Children = {
                    map: D,
                    forEach: function (t, e, n) {
                        D(
                            t,
                            function () {
                                e.apply(this, arguments)
                            },
                            n
                        )
                    },
                    count: function (t) {
                        var e = 0
                        return (
                            D(t, function () {
                                e++
                            }),
                                e
                        )
                    },
                    toArray: function (t) {
                        return (
                            D(t, function (t) {
                                return t
                            }) || []
                        )
                    },
                    only: function (t) {
                        if (!E(t))
                            throw Error('React.Children.only expected to receive a single React element child.')
                        return t
                    }
                }),
                    (e.Component = b),
                    (e.Fragment = r),
                    (e.Profiler = a),
                    (e.PureComponent = v),
                    (e.StrictMode = o),
                    (e.Suspense = u),
                    (e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = R),
                    (e.cloneElement = function (t, e, i) {
                        if (null == t)
                            throw Error(
                                'React.cloneElement(...): The argument must be a React element, but you passed ' +
                                t +
                                '.'
                            )
                        var r = g({}, t.props),
                            o = t.key,
                            a = t.ref,
                            s = t._owner
                        if (null != e) {
                            if (
                                (void 0 !== e.ref && ((a = e.ref), (s = k.current)),
                                void 0 !== e.key && (o = '' + e.key),
                                t.type && t.type.defaultProps)
                            )
                                var l = t.type.defaultProps
                            for (c in e)
                                w.call(e, c) &&
                                !S.hasOwnProperty(c) &&
                                (r[c] = void 0 === e[c] && void 0 !== l ? l[c] : e[c])
                        }
                        var c = arguments.length - 2
                        if (1 === c) r.children = i
                        else if (1 < c) {
                            l = Array(c)
                            for (var u = 0; u < c; u++) l[u] = arguments[u + 2]
                            r.children = l
                        }
                        return {$$typeof: n, type: t.type, key: o, ref: a, props: r, _owner: s}
                    }),
                    (e.createContext = function (t) {
                        return (
                            ((t = {
                                $$typeof: l,
                                _currentValue: t,
                                _currentValue2: t,
                                _threadCount: 0,
                                Provider: null,
                                Consumer: null,
                                _defaultValue: null,
                                _globalName: null
                            }).Provider = {$$typeof: s, _context: t}),
                                (t.Consumer = t)
                        )
                    }),
                    (e.createElement = M),
                    (e.createFactory = function (t) {
                        var e = M.bind(null, t)
                        return (e.type = t), e
                    }),
                    (e.createRef = function () {
                        return {current: null}
                    }),
                    (e.forwardRef = function (t) {
                        return {$$typeof: c, render: t}
                    }),
                    (e.isValidElement = E),
                    (e.lazy = function (t) {
                        return {$$typeof: d, _payload: {_status: -1, _result: t}, _init: O}
                    }),
                    (e.memo = function (t, e) {
                        return {$$typeof: h, type: t, compare: void 0 === e ? null : e}
                    }),
                    (e.startTransition = function (t) {
                        var e = z.transition
                        z.transition = {}
                        try {
                            t()
                        } finally {
                            z.transition = e
                        }
                    }),
                    (e.unstable_act = function () {
                        throw Error('act(...) is not supported in production builds of React.')
                    }),
                    (e.useCallback = function (t, e) {
                        return T.current.useCallback(t, e)
                    }),
                    (e.useContext = function (t) {
                        return T.current.useContext(t)
                    }),
                    (e.useDebugValue = function () {
                    }),
                    (e.useDeferredValue = function (t) {
                        return T.current.useDeferredValue(t)
                    }),
                    (e.useEffect = function (t, e) {
                        return T.current.useEffect(t, e)
                    }),
                    (e.useId = function () {
                        return T.current.useId()
                    }),
                    (e.useImperativeHandle = function (t, e, n) {
                        return T.current.useImperativeHandle(t, e, n)
                    }),
                    (e.useInsertionEffect = function (t, e) {
                        return T.current.useInsertionEffect(t, e)
                    }),
                    (e.useLayoutEffect = function (t, e) {
                        return T.current.useLayoutEffect(t, e)
                    }),
                    (e.useMemo = function (t, e) {
                        return T.current.useMemo(t, e)
                    }),
                    (e.useReducer = function (t, e, n) {
                        return T.current.useReducer(t, e, n)
                    }),
                    (e.useRef = function (t) {
                        return T.current.useRef(t)
                    }),
                    (e.useState = function (t) {
                        return T.current.useState(t)
                    }),
                    (e.useSyncExternalStore = function (t, e, n) {
                        return T.current.useSyncExternalStore(t, e, n)
                    }),
                    (e.useTransition = function () {
                        return T.current.useTransition()
                    }),
                    (e.version = '18.2.0')
            },
            540: (t, e, n) => {
                t.exports = n(287)
            },
            463: (t, e) => {
                function n(t, e) {
                    var n = t.length
                    t.push(e)
                    t: for (; 0 < n;) {
                        var i = (n - 1) >>> 1,
                            r = t[i]
                        if (!(0 < o(r, e))) break;
                        (t[i] = e), (t[n] = r), (n = i)
                    }
                }

                function i(t) {
                    return 0 === t.length ? null : t[0]
                }

                function r(t) {
                    if (0 === t.length) return null
                    var e = t[0],
                        n = t.pop()
                    if (n !== e) {
                        t[0] = n
                        t: for (var i = 0, r = t.length, a = r >>> 1; i < a;) {
                            var s = 2 * (i + 1) - 1,
                                l = t[s],
                                c = s + 1,
                                u = t[c]
                            if (0 > o(l, n))
                                c < r && 0 > o(u, l)
                                    ? ((t[i] = u), (t[c] = n), (i = c))
                                    : ((t[i] = l), (t[s] = n), (i = s))
                            else {
                                if (!(c < r && 0 > o(u, n))) break;
                                (t[i] = u), (t[c] = n), (i = c)
                            }
                        }
                    }
                    return e
                }

                function o(t, e) {
                    var n = t.sortIndex - e.sortIndex
                    return 0 !== n ? n : t.id - e.id
                }

                if ('object' == typeof performance && 'function' == typeof performance.now) {
                    var a = performance
                    e.unstable_now = function () {
                        return a.now()
                    }
                } else {
                    var s = Date,
                        l = s.now()
                    e.unstable_now = function () {
                        return s.now() - l
                    }
                }
                var c = [],
                    u = [],
                    h = 1,
                    d = null,
                    f = 3,
                    p = !1,
                    g = !1,
                    m = !1,
                    b = 'function' == typeof setTimeout ? setTimeout : null,
                    y = 'function' == typeof clearTimeout ? clearTimeout : null,
                    v = 'undefined' != typeof setImmediate ? setImmediate : null

                function x(t) {
                    for (var e = i(u); null !== e;) {
                        if (null === e.callback) r(u)
                        else {
                            if (!(e.startTime <= t)) break
                            r(u), (e.sortIndex = e.expirationTime), n(c, e)
                        }
                        e = i(u)
                    }
                }

                function _(t) {
                    if (((m = !1), x(t), !g))
                        if (null !== i(c)) (g = !0), z(w)
                        else {
                            var e = i(u)
                            null !== e && R(_, e.startTime - t)
                        }
                }

                function w(t, n) {
                    ;(g = !1), m && ((m = !1), y(E), (E = -1)), (p = !0)
                    var o = f
                    try {
                        for (x(n), d = i(c); null !== d && (!(d.expirationTime > n) || (t && !L()));) {
                            var a = d.callback
                            if ('function' == typeof a) {
                                ;(d.callback = null), (f = d.priorityLevel)
                                var s = a(d.expirationTime <= n)
                                ;(n = e.unstable_now()),
                                    'function' == typeof s ? (d.callback = s) : d === i(c) && r(c),
                                    x(n)
                            } else r(c)
                            d = i(c)
                        }
                        if (null !== d) var l = !0
                        else {
                            var h = i(u)
                            null !== h && R(_, h.startTime - n), (l = !1)
                        }
                        return l
                    } finally {
                        ;(d = null), (f = o), (p = !1)
                    }
                }

                'undefined' != typeof navigator &&
                void 0 !== navigator.scheduling &&
                void 0 !== navigator.scheduling.isInputPending &&
                navigator.scheduling.isInputPending.bind(navigator.scheduling)
                var k,
                    S = !1,
                    M = null,
                    E = -1,
                    C = 5,
                    P = -1

                function L() {
                    return !(e.unstable_now() - P < C)
                }

                function D() {
                    if (null !== M) {
                        var t = e.unstable_now()
                        P = t
                        var n = !0
                        try {
                            n = M(!0, t)
                        } finally {
                            n ? k() : ((S = !1), (M = null))
                        }
                    } else S = !1
                }

                if ('function' == typeof v)
                    k = function () {
                        v(D)
                    }
                else if ('undefined' != typeof MessageChannel) {
                    var O = new MessageChannel(),
                        T = O.port2
                    ;(O.port1.onmessage = D),
                        (k = function () {
                            T.postMessage(null)
                        })
                } else
                    k = function () {
                        b(D, 0)
                    }

                function z(t) {
                    ;(M = t), S || ((S = !0), k())
                }

                function R(t, n) {
                    E = b(function () {
                        t(e.unstable_now())
                    }, n)
                }
                ;(e.unstable_IdlePriority = 5),
                    (e.unstable_ImmediatePriority = 1),
                    (e.unstable_LowPriority = 4),
                    (e.unstable_NormalPriority = 3),
                    (e.unstable_Profiling = null),
                    (e.unstable_UserBlockingPriority = 2),
                    (e.unstable_cancelCallback = function (t) {
                        t.callback = null
                    }),
                    (e.unstable_continueExecution = function () {
                        g || p || ((g = !0), z(w))
                    }),
                    (e.unstable_forceFrameRate = function (t) {
                        0 > t || 125 < t
                            ? console.error(
                                'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                            )
                            : (C = 0 < t ? Math.floor(1e3 / t) : 5)
                    }),
                    (e.unstable_getCurrentPriorityLevel = function () {
                        return f
                    }),
                    (e.unstable_getFirstCallbackNode = function () {
                        return i(c)
                    }),
                    (e.unstable_next = function (t) {
                        switch (f) {
                            case 1:
                            case 2:
                            case 3:
                                var e = 3
                                break
                            default:
                                e = f
                        }
                        var n = f
                        f = e
                        try {
                            return t()
                        } finally {
                            f = n
                        }
                    }),
                    (e.unstable_pauseExecution = function () {
                    }),
                    (e.unstable_requestPaint = function () {
                    }),
                    (e.unstable_runWithPriority = function (t, e) {
                        switch (t) {
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                                break
                            default:
                                t = 3
                        }
                        var n = f
                        f = t
                        try {
                            return e()
                        } finally {
                            f = n
                        }
                    }),
                    (e.unstable_scheduleCallback = function (t, r, o) {
                        var a = e.unstable_now()
                        switch (
                            ((o =
                                'object' == typeof o && null !== o && 'number' == typeof (o = o.delay) && 0 < o
                                    ? a + o
                                    : a),
                                t)
                            ) {
                            case 1:
                                var s = -1
                                break
                            case 2:
                                s = 250
                                break
                            case 5:
                                s = 1073741823
                                break
                            case 4:
                                s = 1e4
                                break
                            default:
                                s = 5e3
                        }
                        return (
                            (t = {
                                id: h++,
                                callback: r,
                                priorityLevel: t,
                                startTime: o,
                                expirationTime: (s = o + s),
                                sortIndex: -1
                            }),
                                o > a
                                    ? ((t.sortIndex = o),
                                        n(u, t),
                                    null === i(c) && t === i(u) && (m ? (y(E), (E = -1)) : (m = !0), R(_, o - a)))
                                    : ((t.sortIndex = s), n(c, t), g || p || ((g = !0), z(w))),
                                t
                        )
                    }),
                    (e.unstable_shouldYield = L),
                    (e.unstable_wrapCallback = function (t) {
                        var e = f
                        return function () {
                            var n = f
                            f = e
                            try {
                                return t.apply(this, arguments)
                            } finally {
                                f = n
                            }
                        }
                    })
            },
            982: (t, e, n) => {
                t.exports = n(463)
            }
        },
        e = {}

    function n(i) {
        var r = e[i]
        if (void 0 !== r) return r.exports
        var o = (e[i] = {exports: {}})
        return t[i](o, o.exports, n), o.exports
    }
    ;(() => {
        var t = n(338),
            e = n(540)

        function i(t) {
            return (t + 0.5) | 0
        }

        const r = (t, e, n) => Math.max(Math.min(t, n), e)

        function o(t) {
            return r(i(2.55 * t), 0, 255)
        }

        function a(t) {
            return r(i(255 * t), 0, 255)
        }

        function s(t) {
            return r(i(t / 2.55) / 100, 0, 1)
        }

        function l(t) {
            return r(i(100 * t), 0, 100)
        }

        const c = {
                0: 0,
                1: 1,
                2: 2,
                3: 3,
                4: 4,
                5: 5,
                6: 6,
                7: 7,
                8: 8,
                9: 9,
                A: 10,
                B: 11,
                C: 12,
                D: 13,
                E: 14,
                F: 15,
                a: 10,
                b: 11,
                c: 12,
                d: 13,
                e: 14,
                f: 15
            },
            u = [...'0123456789ABCDEF'],
            h = t => u[15 & t],
            d = t => u[(240 & t) >> 4] + u[15 & t],
            f = t => (240 & t) >> 4 == (15 & t)
        const p =
            /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/

        function g(t, e, n) {
            const i = e * Math.min(n, 1 - n),
                r = (e, r = (e + t / 30) % 12) => n - i * Math.max(Math.min(r - 3, 9 - r, 1), -1)
            return [r(0), r(8), r(4)]
        }

        function m(t, e, n) {
            const i = (i, r = (i + t / 60) % 6) => n - n * e * Math.max(Math.min(r, 4 - r, 1), 0)
            return [i(5), i(3), i(1)]
        }

        function b(t, e, n) {
            const i = g(t, 1, 0.5)
            let r
            for (e + n > 1 && ((r = 1 / (e + n)), (e *= r), (n *= r)), r = 0; r < 3; r++)
                (i[r] *= 1 - e - n), (i[r] += e)
            return i
        }

        function y(t) {
            const e = t.r / 255,
                n = t.g / 255,
                i = t.b / 255,
                r = Math.max(e, n, i),
                o = Math.min(e, n, i),
                a = (r + o) / 2
            let s, l, c
            return (
                r !== o &&
                ((c = r - o),
                    (l = a > 0.5 ? c / (2 - r - o) : c / (r + o)),
                    (s = (function (t, e, n, i, r) {
                        return t === r
                            ? (e - n) / i + (e < n ? 6 : 0)
                            : e === r
                                ? (n - t) / i + 2
                                : (t - e) / i + 4
                    })(e, n, i, c, r)),
                    (s = 60 * s + 0.5)),
                    [0 | s, l || 0, a]
            )
        }

        function v(t, e, n, i) {
            return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, n, i)).map(a)
        }

        function x(t, e, n) {
            return v(g, t, e, n)
        }

        function _(t) {
            return ((t % 360) + 360) % 360
        }

        const w = {
                x: 'dark',
                Z: 'light',
                Y: 're',
                X: 'blu',
                W: 'gr',
                V: 'medium',
                U: 'slate',
                A: 'ee',
                T: 'ol',
                S: 'or',
                B: 'ra',
                C: 'lateg',
                D: 'ights',
                R: 'in',
                Q: 'turquois',
                E: 'hi',
                P: 'ro',
                O: 'al',
                N: 'le',
                M: 'de',
                L: 'yello',
                F: 'en',
                K: 'ch',
                G: 'arks',
                H: 'ea',
                I: 'ightg',
                J: 'wh'
            },
            k = {
                OiceXe: 'f0f8ff',
                antiquewEte: 'faebd7',
                aqua: 'ffff',
                aquamarRe: '7fffd4',
                azuY: 'f0ffff',
                beige: 'f5f5dc',
                bisque: 'ffe4c4',
                black: '0',
                blanKedOmond: 'ffebcd',
                Xe: 'ff',
                XeviTet: '8a2be2',
                bPwn: 'a52a2a',
                burlywood: 'deb887',
                caMtXe: '5f9ea0',
                KartYuse: '7fff00',
                KocTate: 'd2691e',
                cSO: 'ff7f50',
                cSnflowerXe: '6495ed',
                cSnsilk: 'fff8dc',
                crimson: 'dc143c',
                cyan: 'ffff',
                xXe: '8b',
                xcyan: '8b8b',
                xgTMnPd: 'b8860b',
                xWay: 'a9a9a9',
                xgYF: '6400',
                xgYy: 'a9a9a9',
                xkhaki: 'bdb76b',
                xmagFta: '8b008b',
                xTivegYF: '556b2f',
                xSange: 'ff8c00',
                xScEd: '9932cc',
                xYd: '8b0000',
                xsOmon: 'e9967a',
                xsHgYF: '8fbc8f',
                xUXe: '483d8b',
                xUWay: '2f4f4f',
                xUgYy: '2f4f4f',
                xQe: 'ced1',
                xviTet: '9400d3',
                dAppRk: 'ff1493',
                dApskyXe: 'bfff',
                dimWay: '696969',
                dimgYy: '696969',
                dodgerXe: '1e90ff',
                fiYbrick: 'b22222',
                flSOwEte: 'fffaf0',
                foYstWAn: '228b22',
                fuKsia: 'ff00ff',
                gaRsbSo: 'dcdcdc',
                ghostwEte: 'f8f8ff',
                gTd: 'ffd700',
                gTMnPd: 'daa520',
                Way: '808080',
                gYF: '8000',
                gYFLw: 'adff2f',
                gYy: '808080',
                honeyMw: 'f0fff0',
                hotpRk: 'ff69b4',
                RdianYd: 'cd5c5c',
                Rdigo: '4b0082',
                ivSy: 'fffff0',
                khaki: 'f0e68c',
                lavFMr: 'e6e6fa',
                lavFMrXsh: 'fff0f5',
                lawngYF: '7cfc00',
                NmoncEffon: 'fffacd',
                ZXe: 'add8e6',
                ZcSO: 'f08080',
                Zcyan: 'e0ffff',
                ZgTMnPdLw: 'fafad2',
                ZWay: 'd3d3d3',
                ZgYF: '90ee90',
                ZgYy: 'd3d3d3',
                ZpRk: 'ffb6c1',
                ZsOmon: 'ffa07a',
                ZsHgYF: '20b2aa',
                ZskyXe: '87cefa',
                ZUWay: '778899',
                ZUgYy: '778899',
                ZstAlXe: 'b0c4de',
                ZLw: 'ffffe0',
                lime: 'ff00',
                limegYF: '32cd32',
                lRF: 'faf0e6',
                magFta: 'ff00ff',
                maPon: '800000',
                VaquamarRe: '66cdaa',
                VXe: 'cd',
                VScEd: 'ba55d3',
                VpurpN: '9370db',
                VsHgYF: '3cb371',
                VUXe: '7b68ee',
                VsprRggYF: 'fa9a',
                VQe: '48d1cc',
                VviTetYd: 'c71585',
                midnightXe: '191970',
                mRtcYam: 'f5fffa',
                mistyPse: 'ffe4e1',
                moccasR: 'ffe4b5',
                navajowEte: 'ffdead',
                navy: '80',
                Tdlace: 'fdf5e6',
                Tive: '808000',
                TivedBb: '6b8e23',
                Sange: 'ffa500',
                SangeYd: 'ff4500',
                ScEd: 'da70d6',
                pOegTMnPd: 'eee8aa',
                pOegYF: '98fb98',
                pOeQe: 'afeeee',
                pOeviTetYd: 'db7093',
                papayawEp: 'ffefd5',
                pHKpuff: 'ffdab9',
                peru: 'cd853f',
                pRk: 'ffc0cb',
                plum: 'dda0dd',
                powMrXe: 'b0e0e6',
                purpN: '800080',
                YbeccapurpN: '663399',
                Yd: 'ff0000',
                Psybrown: 'bc8f8f',
                PyOXe: '4169e1',
                saddNbPwn: '8b4513',
                sOmon: 'fa8072',
                sandybPwn: 'f4a460',
                sHgYF: '2e8b57',
                sHshell: 'fff5ee',
                siFna: 'a0522d',
                silver: 'c0c0c0',
                skyXe: '87ceeb',
                UXe: '6a5acd',
                UWay: '708090',
                UgYy: '708090',
                snow: 'fffafa',
                sprRggYF: 'ff7f',
                stAlXe: '4682b4',
                tan: 'd2b48c',
                teO: '8080',
                tEstN: 'd8bfd8',
                tomato: 'ff6347',
                Qe: '40e0d0',
                viTet: 'ee82ee',
                JHt: 'f5deb3',
                wEte: 'ffffff',
                wEtesmoke: 'f5f5f5',
                Lw: 'ffff00',
                LwgYF: '9acd32'
            }
        let S
        const M =
                /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/,
            E = t => (t <= 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - 0.055),
            C = t => (t <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4))

        function P(t, e, n) {
            if (t) {
                let i = y(t)
                ;(i[e] = Math.max(0, Math.min(i[e] + i[e] * n, 0 === e ? 360 : 1))),
                    (i = x(i)),
                    (t.r = i[0]),
                    (t.g = i[1]),
                    (t.b = i[2])
            }
        }

        function L(t, e) {
            return t ? Object.assign(e || {}, t) : t
        }

        function D(t) {
            var e = {r: 0, g: 0, b: 0, a: 255}
            return (
                Array.isArray(t)
                    ? t.length >= 3 &&
                    ((e = {r: t[0], g: t[1], b: t[2], a: 255}), t.length > 3 && (e.a = a(t[3])))
                    : ((e = L(t, {r: 0, g: 0, b: 0, a: 1})).a = a(e.a)),
                    e
            )
        }

        function O(t) {
            return 'r' === t.charAt(0)
                ? (function (t) {
                    const e = M.exec(t)
                    let n,
                        i,
                        a,
                        s = 255
                    if (e) {
                        if (e[7] !== n) {
                            const t = +e[7]
                            s = e[8] ? o(t) : r(255 * t, 0, 255)
                        }
                        return (
                            (n = +e[1]),
                                (i = +e[3]),
                                (a = +e[5]),
                                (n = 255 & (e[2] ? o(n) : r(n, 0, 255))),
                                (i = 255 & (e[4] ? o(i) : r(i, 0, 255))),
                                (a = 255 & (e[6] ? o(a) : r(a, 0, 255))),
                                {r: n, g: i, b: a, a: s}
                        )
                    }
                })(t)
                : (function (t) {
                    const e = p.exec(t)
                    let n,
                        i = 255
                    if (!e) return
                    e[5] !== n && (i = e[6] ? o(+e[5]) : a(+e[5]))
                    const r = _(+e[2]),
                        s = +e[3] / 100,
                        l = +e[4] / 100
                    return (
                        (n =
                            'hwb' === e[1]
                                ? (function (t, e, n) {
                                    return v(b, t, e, n)
                                })(r, s, l)
                                : 'hsv' === e[1]
                                    ? (function (t, e, n) {
                                        return v(m, t, e, n)
                                    })(r, s, l)
                                    : x(r, s, l)),
                            {r: n[0], g: n[1], b: n[2], a: i}
                    )
                })(t)
        }

        class T {
            constructor(t) {
                if (t instanceof T) return t
                const e = typeof t
                let n
                var i, r, o
                'object' === e
                    ? (n = D(t))
                    : 'string' === e &&
                    ((o = (i = t).length),
                    '#' === i[0] &&
                    (4 === o || 5 === o
                        ? (r = {
                            r: 255 & (17 * c[i[1]]),
                            g: 255 & (17 * c[i[2]]),
                            b: 255 & (17 * c[i[3]]),
                            a: 5 === o ? 17 * c[i[4]] : 255
                        })
                        : (7 !== o && 9 !== o) ||
                        (r = {
                            r: (c[i[1]] << 4) | c[i[2]],
                            g: (c[i[3]] << 4) | c[i[4]],
                            b: (c[i[5]] << 4) | c[i[6]],
                            a: 9 === o ? (c[i[7]] << 4) | c[i[8]] : 255
                        })),
                        (n =
                            r ||
                            (function (t) {
                                S ||
                                ((S = (function () {
                                    const t = {},
                                        e = Object.keys(k),
                                        n = Object.keys(w)
                                    let i, r, o, a, s
                                    for (i = 0; i < e.length; i++) {
                                        for (a = s = e[i], r = 0; r < n.length; r++)
                                            (o = n[r]), (s = s.replace(o, w[o]))
                                            ;
                                        (o = parseInt(k[a], 16)), (t[s] = [(o >> 16) & 255, (o >> 8) & 255, 255 & o])
                                    }
                                    return t
                                })()),
                                    (S.transparent = [0, 0, 0, 0]))
                                const e = S[t.toLowerCase()]
                                return e && {r: e[0], g: e[1], b: e[2], a: 4 === e.length ? e[3] : 255}
                            })(t) ||
                            O(t))),
                    (this._rgb = n),
                    (this._valid = !!n)
            }

            get valid() {
                return this._valid
            }

            get rgb() {
                var t = L(this._rgb)
                return t && (t.a = s(t.a)), t
            }

            set rgb(t) {
                this._rgb = D(t)
            }

            rgbString() {
                return this._valid
                    ? (t = this._rgb) &&
                    (t.a < 255
                        ? `rgba(${t.r}, ${t.g}, ${t.b}, ${s(t.a)})`
                        : `rgb(${t.r}, ${t.g}, ${t.b})`)
                    : void 0
                var t
            }

            hexString() {
                return this._valid
                    ? ((t = this._rgb),
                        (e = (t => f(t.r) && f(t.g) && f(t.b) && f(t.a))(t) ? h : d),
                        t ? '#' + e(t.r) + e(t.g) + e(t.b) + ((t, e) => (t < 255 ? e(t) : ''))(t.a, e) : void 0)
                    : void 0
                var t, e
            }

            hslString() {
                return this._valid
                    ? (function (t) {
                        if (!t) return
                        const e = y(t),
                            n = e[0],
                            i = l(e[1]),
                            r = l(e[2])
                        return t.a < 255 ? `hsla(${n}, ${i}%, ${r}%, ${s(t.a)})` : `hsl(${n}, ${i}%, ${r}%)`
                    })(this._rgb)
                    : void 0
            }

            mix(t, e) {
                if (t) {
                    const n = this.rgb,
                        i = t.rgb
                    let r
                    const o = e === r ? 0.5 : e,
                        a = 2 * o - 1,
                        s = n.a - i.a,
                        l = ((a * s == -1 ? a : (a + s) / (1 + a * s)) + 1) / 2
                    ;(r = 1 - l),
                        (n.r = 255 & (l * n.r + r * i.r + 0.5)),
                        (n.g = 255 & (l * n.g + r * i.g + 0.5)),
                        (n.b = 255 & (l * n.b + r * i.b + 0.5)),
                        (n.a = o * n.a + (1 - o) * i.a),
                        (this.rgb = n)
                }
                return this
            }

            interpolate(t, e) {
                return (
                    t &&
                    (this._rgb = (function (t, e, n) {
                        const i = C(s(t.r)),
                            r = C(s(t.g)),
                            o = C(s(t.b))
                        return {
                            r: a(E(i + n * (C(s(e.r)) - i))),
                            g: a(E(r + n * (C(s(e.g)) - r))),
                            b: a(E(o + n * (C(s(e.b)) - o))),
                            a: t.a + n * (e.a - t.a)
                        }
                    })(this._rgb, t._rgb, e)),
                        this
                )
            }

            clone() {
                return new T(this.rgb)
            }

            alpha(t) {
                return (this._rgb.a = a(t)), this
            }

            clearer(t) {
                return (this._rgb.a *= 1 - t), this
            }

            greyscale() {
                const t = this._rgb,
                    e = i(0.3 * t.r + 0.59 * t.g + 0.11 * t.b)
                return (t.r = t.g = t.b = e), this
            }

            opaquer(t) {
                return (this._rgb.a *= 1 + t), this
            }

            negate() {
                const t = this._rgb
                return (t.r = 255 - t.r), (t.g = 255 - t.g), (t.b = 255 - t.b), this
            }

            lighten(t) {
                return P(this._rgb, 2, t), this
            }

            darken(t) {
                return P(this._rgb, 2, -t), this
            }

            saturate(t) {
                return P(this._rgb, 1, t), this
            }

            desaturate(t) {
                return P(this._rgb, 1, -t), this
            }

            rotate(t) {
                return (
                    (function (t, e) {
                        var n = y(t)
                        ;(n[0] = _(n[0] + e)), (n = x(n)), (t.r = n[0]), (t.g = n[1]), (t.b = n[2])
                    })(this._rgb, t),
                        this
                )
            }
        }

        function z() {
        }

        const R = (() => {
            let t = 0
            return () => t++
        })()

        function A(t) {
            return null == t
        }

        function N(t) {
            if (Array.isArray && Array.isArray(t)) return !0
            const e = Object.prototype.toString.call(t)
            return '[object' === e.slice(0, 7) && 'Array]' === e.slice(-6)
        }

        function I(t) {
            return null !== t && '[object Object]' === Object.prototype.toString.call(t)
        }

        function F(t) {
            return ('number' == typeof t || t instanceof Number) && isFinite(+t)
        }

        function V(t, e) {
            return F(t) ? t : e
        }

        function B(t, e) {
            return void 0 === t ? e : t
        }

        const j = (t, e) => ('string' == typeof t && t.endsWith('%') ? (parseFloat(t) / 100) * e : +t)

        function W(t, e, n) {
            if (t && 'function' == typeof t.call) return t.apply(n, e)
        }

        function H(t, e, n, i) {
            let r, o, a
            if (N(t))
                if (((o = t.length), i)) for (r = o - 1; r >= 0; r--) e.call(n, t[r], r)
                else for (r = 0; r < o; r++) e.call(n, t[r], r)
            else if (I(t))
                for (a = Object.keys(t), o = a.length, r = 0; r < o; r++) e.call(n, t[a[r]], a[r])
        }

        function $(t, e) {
            let n, i, r, o
            if (!t || !e || t.length !== e.length) return !1
            for (n = 0, i = t.length; n < i; ++n)
                if (((r = t[n]), (o = e[n]), r.datasetIndex !== o.datasetIndex || r.index !== o.index))
                    return !1
            return !0
        }

        function U(t) {
            if (N(t)) return t.map(U)
            if (I(t)) {
                const e = Object.create(null),
                    n = Object.keys(t),
                    i = n.length
                let r = 0
                for (; r < i; ++r) e[n[r]] = U(t[n[r]])
                return e
            }
            return t
        }

        function Y(t) {
            return -1 === ['__proto__', 'prototype', 'constructor'].indexOf(t)
        }

        function Q(t, e, n, i) {
            if (!Y(t)) return
            const r = e[t],
                o = n[t]
            I(r) && I(o) ? X(r, o, i) : (e[t] = U(o))
        }

        function X(t, e, n) {
            const i = N(e) ? e : [e],
                r = i.length
            if (!I(t)) return t
            const o = (n = n || {}).merger || Q
            let a
            for (let e = 0; e < r; ++e) {
                if (((a = i[e]), !I(a))) continue
                const r = Object.keys(a)
                for (let e = 0, i = r.length; e < i; ++e) o(r[e], t, a, n)
            }
            return t
        }

        function q(t, e) {
            return X(t, e, {merger: K})
        }

        function K(t, e, n) {
            if (!Y(t)) return
            const i = e[t],
                r = n[t]
            I(i) && I(r) ? q(i, r) : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = U(r))
        }

        const G = {'': t => t, x: t => t.x, y: t => t.y}

        function Z(t, e) {
            const n =
                G[e] ||
                (G[e] = (function (t) {
                    const e = (function (t) {
                        const e = t.split('.'),
                            n = []
                        let i = ''
                        for (const t of e)
                            (i += t), i.endsWith('\\') ? (i = i.slice(0, -1) + '.') : (n.push(i), (i = ''))
                        return n
                    })(t)
                    return t => {
                        for (const n of e) {
                            if ('' === n) break
                            t = t && t[n]
                        }
                        return t
                    }
                })(e))
            return n(t)
        }

        function J(t) {
            return t.charAt(0).toUpperCase() + t.slice(1)
        }

        const tt = t => void 0 !== t,
            et = t => 'function' == typeof t,
            nt = (t, e) => {
                if (t.size !== e.size) return !1
                for (const n of t) if (!e.has(n)) return !1
                return !0
            },
            it = Math.PI,
            rt = 2 * it,
            ot = rt + it,
            at = Number.POSITIVE_INFINITY,
            st = it / 180,
            lt = it / 2,
            ct = it / 4,
            ut = (2 * it) / 3,
            ht = Math.log10,
            dt = Math.sign

        function ft(t, e, n) {
            return Math.abs(t - e) < n
        }

        function pt(t) {
            const e = Math.round(t)
            t = ft(t, e, t / 1e3) ? e : t
            const n = Math.pow(10, Math.floor(ht(t))),
                i = t / n
            return (i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * n
        }

        function gt(t) {
            return !isNaN(parseFloat(t)) && isFinite(t)
        }

        function mt(t, e, n) {
            let i, r, o
            for (i = 0, r = t.length; i < r; i++)
                (o = t[i][n]), isNaN(o) || ((e.min = Math.min(e.min, o)), (e.max = Math.max(e.max, o)))
        }

        function bt(t) {
            return t * (it / 180)
        }

        function yt(t) {
            return t * (180 / it)
        }

        function vt(t) {
            if (!F(t)) return
            let e = 1,
                n = 0
            for (; Math.round(t * e) / e !== t;) (e *= 10), n++
            return n
        }

        function xt(t, e) {
            const n = e.x - t.x,
                i = e.y - t.y,
                r = Math.sqrt(n * n + i * i)
            let o = Math.atan2(i, n)
            return o < -0.5 * it && (o += rt), {angle: o, distance: r}
        }

        function _t(t, e) {
            return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
        }

        function wt(t, e) {
            return ((t - e + ot) % rt) - it
        }

        function kt(t) {
            return ((t % rt) + rt) % rt
        }

        function St(t, e, n, i) {
            const r = kt(t),
                o = kt(e),
                a = kt(n),
                s = kt(o - r),
                l = kt(a - r),
                c = kt(r - o),
                u = kt(r - a)
            return r === o || r === a || (i && o === a) || (s > l && c < u)
        }

        function Mt(t, e, n) {
            return Math.max(e, Math.min(n, t))
        }

        function Et(t, e, n, i = 1e-6) {
            return t >= Math.min(e, n) - i && t <= Math.max(e, n) + i
        }

        function Ct(t, e, n) {
            n = n || (n => t[n] < e)
            let i,
                r = t.length - 1,
                o = 0
            for (; r - o > 1;) (i = (o + r) >> 1), n(i) ? (o = i) : (r = i)
            return {lo: o, hi: r}
        }

        const Pt = (t, e, n, i) =>
                Ct(
                    t,
                    n,
                    i
                        ? i => {
                            const r = t[i][e]
                            return r < n || (r === n && t[i + 1][e] === n)
                        }
                        : i => t[i][e] < n
                ),
            Lt = (t, e, n) => Ct(t, n, i => t[i][e] >= n),
            Dt = ['push', 'pop', 'shift', 'splice', 'unshift']

        function Ot(t, e) {
            const n = t._chartjs
            if (!n) return
            const i = n.listeners,
                r = i.indexOf(e)
            ;-1 !== r && i.splice(r, 1),
            i.length > 0 ||
            (Dt.forEach(e => {
                delete t[e]
            }),
                delete t._chartjs)
        }

        function Tt(t) {
            const e = new Set(t)
            return e.size === t.length ? t : Array.from(e)
        }

        const zt =
            'undefined' == typeof window
                ? function (t) {
                    return t()
                }
                : window.requestAnimationFrame

        function Rt(t, e) {
            let n = [],
                i = !1
            return function (...r) {
                ;(n = r),
                i ||
                ((i = !0),
                    zt.call(window, () => {
                        ;(i = !1), t.apply(e, n)
                    }))
            }
        }

        const At = t => ('start' === t ? 'left' : 'end' === t ? 'right' : 'center'),
            Nt = (t, e, n) => ('start' === t ? e : 'end' === t ? n : (e + n) / 2)

        function It(t, e, n) {
            const i = e.length
            let r = 0,
                o = i
            if (t._sorted) {
                const {iScale: a, _parsed: s} = t,
                    l = a.axis,
                    {min: c, max: u, minDefined: h, maxDefined: d} = a.getUserBounds()
                h &&
                (r = Mt(Math.min(Pt(s, l, c).lo, n ? i : Pt(e, l, a.getPixelForValue(c)).lo), 0, i - 1)),
                    (o = d
                        ? Mt(
                        Math.max(
                            Pt(s, a.axis, u, !0).hi + 1,
                            n ? 0 : Pt(e, l, a.getPixelForValue(u), !0).hi + 1
                        ),
                        r,
                        i
                    ) - r
                        : i - r)
            }
            return {start: r, count: o}
        }

        function Ft(t) {
            const {xScale: e, yScale: n, _scaleRanges: i} = t,
                r = {xmin: e.min, xmax: e.max, ymin: n.min, ymax: n.max}
            if (!i) return (t._scaleRanges = r), !0
            const o = i.xmin !== e.min || i.xmax !== e.max || i.ymin !== n.min || i.ymax !== n.max
            return Object.assign(i, r), o
        }

        const Vt = t => 0 === t || 1 === t,
            Bt = (t, e, n) => -Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - e) * rt) / n),
            jt = (t, e, n) => Math.pow(2, -10 * t) * Math.sin(((t - e) * rt) / n) + 1,
            Wt = {
                linear: t => t,
                easeInQuad: t => t * t,
                easeOutQuad: t => -t * (t - 2),
                easeInOutQuad: t => ((t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1)),
                easeInCubic: t => t * t * t,
                easeOutCubic: t => (t -= 1) * t * t + 1,
                easeInOutCubic: t => ((t /= 0.5) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2)),
                easeInQuart: t => t * t * t * t,
                easeOutQuart: t => -((t -= 1) * t * t * t - 1),
                easeInOutQuart: t =>
                    (t /= 0.5) < 1 ? 0.5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2),
                easeInQuint: t => t * t * t * t * t,
                easeOutQuint: t => (t -= 1) * t * t * t * t + 1,
                easeInOutQuint: t =>
                    (t /= 0.5) < 1 ? 0.5 * t * t * t * t * t : 0.5 * ((t -= 2) * t * t * t * t + 2),
                easeInSine: t => 1 - Math.cos(t * lt),
                easeOutSine: t => Math.sin(t * lt),
                easeInOutSine: t => -0.5 * (Math.cos(it * t) - 1),
                easeInExpo: t => (0 === t ? 0 : Math.pow(2, 10 * (t - 1))),
                easeOutExpo: t => (1 === t ? 1 : 1 - Math.pow(2, -10 * t)),
                easeInOutExpo: t =>
                    Vt(t)
                        ? t
                        : t < 0.5
                            ? 0.5 * Math.pow(2, 10 * (2 * t - 1))
                            : 0.5 * (2 - Math.pow(2, -10 * (2 * t - 1))),
                easeInCirc: t => (t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1)),
                easeOutCirc: t => Math.sqrt(1 - (t -= 1) * t),
                easeInOutCirc: t =>
                    (t /= 0.5) < 1
                        ? -0.5 * (Math.sqrt(1 - t * t) - 1)
                        : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
                easeInElastic: t => (Vt(t) ? t : Bt(t, 0.075, 0.3)),
                easeOutElastic: t => (Vt(t) ? t : jt(t, 0.075, 0.3)),
                easeInOutElastic(t) {
                    const e = 0.1125
                    return Vt(t) ? t : t < 0.5 ? 0.5 * Bt(2 * t, e, 0.45) : 0.5 + 0.5 * jt(2 * t - 1, e, 0.45)
                },
                easeInBack(t) {
                    const e = 1.70158
                    return t * t * ((e + 1) * t - e)
                },
                easeOutBack(t) {
                    const e = 1.70158
                    return (t -= 1) * t * ((e + 1) * t + e) + 1
                },
                easeInOutBack(t) {
                    let e = 1.70158
                    return (t /= 0.5) < 1
                        ? t * t * ((1 + (e *= 1.525)) * t - e) * 0.5
                        : 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
                },
                easeInBounce: t => 1 - Wt.easeOutBounce(1 - t),
                easeOutBounce(t) {
                    const e = 7.5625,
                        n = 2.75
                    return t < 1 / n
                        ? e * t * t
                        : t < 2 / n
                            ? e * (t -= 1.5 / n) * t + 0.75
                            : t < 2.5 / n
                                ? e * (t -= 2.25 / n) * t + 0.9375
                                : e * (t -= 2.625 / n) * t + 0.984375
                },
                easeInOutBounce: t =>
                    t < 0.5 ? 0.5 * Wt.easeInBounce(2 * t) : 0.5 * Wt.easeOutBounce(2 * t - 1) + 0.5
            }

        function Ht(t) {
            if (t && 'object' == typeof t) {
                const e = t.toString()
                return '[object CanvasPattern]' === e || '[object CanvasGradient]' === e
            }
            return !1
        }

        function $t(t) {
            return Ht(t) ? t : new T(t)
        }

        function Ut(t) {
            return Ht(t) ? t : new T(t).saturate(0.5).darken(0.1).hexString()
        }

        const Yt = ['x', 'y', 'borderWidth', 'radius', 'tension'],
            Qt = ['color', 'borderColor', 'backgroundColor'],
            Xt = new Map()

        function qt(t, e, n) {
            return (function (t, e) {
                e = e || {}
                const n = t + JSON.stringify(e)
                let i = Xt.get(n)
                return i || ((i = new Intl.NumberFormat(t, e)), Xt.set(n, i)), i
            })(e, n).format(t)
        }

        const Kt = {
            values: t => (N(t) ? t : '' + t),
            numeric(t, e, n) {
                if (0 === t) return '0'
                const i = this.chart.options.locale
                let r,
                    o = t
                if (n.length > 1) {
                    const e = Math.max(Math.abs(n[0].value), Math.abs(n[n.length - 1].value))
                    ;(e < 1e-4 || e > 1e15) && (r = 'scientific'),
                        (o = (function (t, e) {
                            let n = e.length > 3 ? e[2].value - e[1].value : e[1].value - e[0].value
                            return Math.abs(n) >= 1 && t !== Math.floor(t) && (n = t - Math.floor(t)), n
                        })(t, n))
                }
                const a = ht(Math.abs(o)),
                    s = isNaN(a) ? 1 : Math.max(Math.min(-1 * Math.floor(a), 20), 0),
                    l = {notation: r, minimumFractionDigits: s, maximumFractionDigits: s}
                return Object.assign(l, this.options.ticks.format), qt(t, i, l)
            },
            logarithmic(t, e, n) {
                if (0 === t) return '0'
                const i = n[e].significand || t / Math.pow(10, Math.floor(ht(t)))
                return [1, 2, 3, 5, 10, 15].includes(i) || e > 0.8 * n.length
                    ? Kt.numeric.call(this, t, e, n)
                    : ''
            }
        }
        var Gt = {formatters: Kt}
        const Zt = Object.create(null),
            Jt = Object.create(null)

        function te(t, e) {
            if (!e) return t
            const n = e.split('.')
            for (let e = 0, i = n.length; e < i; ++e) {
                const i = n[e]
                t = t[i] || (t[i] = Object.create(null))
            }
            return t
        }

        function ee(t, e, n) {
            return 'string' == typeof e ? X(te(t, e), n) : X(te(t, ''), e)
        }

        class ne {
            constructor(t, e) {
                ;(this.animation = void 0),
                    (this.backgroundColor = 'rgba(0,0,0,0.1)'),
                    (this.borderColor = 'rgba(0,0,0,0.1)'),
                    (this.color = '#666'),
                    (this.datasets = {}),
                    (this.devicePixelRatio = t => t.chart.platform.getDevicePixelRatio()),
                    (this.elements = {}),
                    (this.events = ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove']),
                    (this.font = {
                        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                        size: 12,
                        style: 'normal',
                        lineHeight: 1.2,
                        weight: null
                    }),
                    (this.hover = {}),
                    (this.hoverBackgroundColor = (t, e) => Ut(e.backgroundColor)),
                    (this.hoverBorderColor = (t, e) => Ut(e.borderColor)),
                    (this.hoverColor = (t, e) => Ut(e.color)),
                    (this.indexAxis = 'x'),
                    (this.interaction = {mode: 'nearest', intersect: !0, includeInvisible: !1}),
                    (this.maintainAspectRatio = !0),
                    (this.onHover = null),
                    (this.onClick = null),
                    (this.parsing = !0),
                    (this.plugins = {}),
                    (this.responsive = !0),
                    (this.scale = void 0),
                    (this.scales = {}),
                    (this.showLine = !0),
                    (this.drawActiveElementsOnTop = !0),
                    this.describe(t),
                    this.apply(e)
            }

            set(t, e) {
                return ee(this, t, e)
            }

            get(t) {
                return te(this, t)
            }

            describe(t, e) {
                return ee(Jt, t, e)
            }

            override(t, e) {
                return ee(Zt, t, e)
            }

            route(t, e, n, i) {
                const r = te(this, t),
                    o = te(this, n),
                    a = '_' + e
                Object.defineProperties(r, {
                    [a]: {value: r[e], writable: !0},
                    [e]: {
                        enumerable: !0,
                        get() {
                            const t = this[a],
                                e = o[i]
                            return I(t) ? Object.assign({}, e, t) : B(t, e)
                        },
                        set(t) {
                            this[a] = t
                        }
                    }
                })
            }

            apply(t) {
                t.forEach(t => t(this))
            }
        }

        var ie = new ne(
            {
                _scriptable: t => !t.startsWith('on'),
                _indexable: t => 'events' !== t,
                hover: {_fallback: 'interaction'},
                interaction: {_scriptable: !1, _indexable: !1}
            },
            [
                function (t) {
                    t.set('animation', {
                        delay: void 0,
                        duration: 1e3,
                        easing: 'easeOutQuart',
                        fn: void 0,
                        from: void 0,
                        loop: void 0,
                        to: void 0,
                        type: void 0
                    }),
                        t.describe('animation', {
                            _fallback: !1,
                            _indexable: !1,
                            _scriptable: t => 'onProgress' !== t && 'onComplete' !== t && 'fn' !== t
                        }),
                        t.set('animations', {
                            colors: {type: 'color', properties: Qt},
                            numbers: {type: 'number', properties: Yt}
                        }),
                        t.describe('animations', {_fallback: 'animation'}),
                        t.set('transitions', {
                            active: {animation: {duration: 400}},
                            resize: {animation: {duration: 0}},
                            show: {
                                animations: {
                                    colors: {from: 'transparent'},
                                    visible: {type: 'boolean', duration: 0}
                                }
                            },
                            hide: {
                                animations: {
                                    colors: {to: 'transparent'},
                                    visible: {type: 'boolean', easing: 'linear', fn: t => 0 | t}
                                }
                            }
                        })
                },
                function (t) {
                    t.set('layout', {autoPadding: !0, padding: {top: 0, right: 0, bottom: 0, left: 0}})
                },
                function (t) {
                    t.set('scale', {
                        display: !0,
                        offset: !1,
                        reverse: !1,
                        beginAtZero: !1,
                        bounds: 'ticks',
                        clip: !0,
                        grace: 0,
                        grid: {
                            display: !0,
                            lineWidth: 1,
                            drawOnChartArea: !0,
                            drawTicks: !0,
                            tickLength: 8,
                            tickWidth: (t, e) => e.lineWidth,
                            tickColor: (t, e) => e.color,
                            offset: !1
                        },
                        border: {display: !0, dash: [], dashOffset: 0, width: 1},
                        title: {display: !1, text: '', padding: {top: 4, bottom: 4}},
                        ticks: {
                            minRotation: 0,
                            maxRotation: 50,
                            mirror: !1,
                            textStrokeWidth: 0,
                            textStrokeColor: '',
                            padding: 3,
                            display: !0,
                            autoSkip: !0,
                            autoSkipPadding: 3,
                            labelOffset: 0,
                            callback: Gt.formatters.values,
                            minor: {},
                            major: {},
                            align: 'center',
                            crossAlign: 'near',
                            showLabelBackdrop: !1,
                            backdropColor: 'rgba(255, 255, 255, 0.75)',
                            backdropPadding: 2
                        }
                    }),
                        t.route('scale.ticks', 'color', '', 'color'),
                        t.route('scale.grid', 'color', '', 'borderColor'),
                        t.route('scale.border', 'color', '', 'borderColor'),
                        t.route('scale.title', 'color', '', 'color'),
                        t.describe('scale', {
                            _fallback: !1,
                            _scriptable: t =>
                                !t.startsWith('before') &&
                                !t.startsWith('after') &&
                                'callback' !== t &&
                                'parser' !== t,
                            _indexable: t => 'borderDash' !== t && 'tickBorderDash' !== t && 'dash' !== t
                        }),
                        t.describe('scales', {_fallback: 'scale'}),
                        t.describe('scale.ticks', {
                            _scriptable: t => 'backdropPadding' !== t && 'callback' !== t,
                            _indexable: t => 'backdropPadding' !== t
                        })
                }
            ]
        )

        function re(t, e, n, i, r) {
            let o = e[r]
            return o || ((o = e[r] = t.measureText(r).width), n.push(r)), o > i && (i = o), i
        }

        function oe(t, e, n, i) {
            let r = ((i = i || {}).data = i.data || {}),
                o = (i.garbageCollect = i.garbageCollect || [])
            i.font !== e && ((r = i.data = {}), (o = i.garbageCollect = []), (i.font = e)),
                t.save(),
                (t.font = e)
            let a = 0
            const s = n.length
            let l, c, u, h, d
            for (l = 0; l < s; l++)
                if (((h = n[l]), null == h || N(h))) {
                    if (N(h))
                        for (c = 0, u = h.length; c < u; c++)
                            (d = h[c]), null == d || N(d) || (a = re(t, r, o, a, d))
                } else a = re(t, r, o, a, h)
            t.restore()
            const f = o.length / 2
            if (f > n.length) {
                for (l = 0; l < f; l++) delete r[o[l]]
                o.splice(0, f)
            }
            return a
        }

        function ae(t, e, n) {
            const i = t.currentDevicePixelRatio,
                r = 0 !== n ? Math.max(n / 2, 0.5) : 0
            return Math.round((e - r) * i) / i + r
        }

        function se(t, e) {
            ;(e = e || t.getContext('2d')).save(),
                e.resetTransform(),
                e.clearRect(0, 0, t.width, t.height),
                e.restore()
        }

        function le(t, e, n, i) {
            ce(t, e, n, i, null)
        }

        function ce(t, e, n, i, r) {
            let o, a, s, l, c, u, h, d
            const f = e.pointStyle,
                p = e.rotation,
                g = e.radius
            let m = (p || 0) * st
            if (
                f &&
                'object' == typeof f &&
                ((o = f.toString()),
                '[object HTMLImageElement]' === o || '[object HTMLCanvasElement]' === o)
            )
                return (
                    t.save(),
                        t.translate(n, i),
                        t.rotate(m),
                        t.drawImage(f, -f.width / 2, -f.height / 2, f.width, f.height),
                        void t.restore()
                )
            if (!(isNaN(g) || g <= 0)) {
                switch ((t.beginPath(), f)) {
                    default:
                        r ? t.ellipse(n, i, r / 2, g, 0, 0, rt) : t.arc(n, i, g, 0, rt), t.closePath()
                        break
                    case 'triangle':
                        ;(u = r ? r / 2 : g),
                        t.moveTo(n + Math.sin(m) * u, i - Math.cos(m) * g),
                        (m += ut),
                        t.lineTo(n + Math.sin(m) * u, i - Math.cos(m) * g),
                        (m += ut),
                        t.lineTo(n + Math.sin(m) * u, i - Math.cos(m) * g),
                        t.closePath()
                        break
                    case 'rectRounded':
                        ;(c = 0.516 * g),
                        (l = g - c),
                        (a = Math.cos(m + ct) * l),
                        (h = Math.cos(m + ct) * (r ? r / 2 - c : l)),
                        (s = Math.sin(m + ct) * l),
                        (d = Math.sin(m + ct) * (r ? r / 2 - c : l)),
                        t.arc(n - h, i - s, c, m - it, m - lt),
                        t.arc(n + d, i - a, c, m - lt, m),
                        t.arc(n + h, i + s, c, m, m + lt),
                        t.arc(n - d, i + a, c, m + lt, m + it),
                        t.closePath()
                        break
                    case 'rect':
                        if (!p) {
                            ;(l = Math.SQRT1_2 * g), (u = r ? r / 2 : l), t.rect(n - u, i - l, 2 * u, 2 * l)
                            break
                        }
                        m += ct
                    case 'rectRot':
                        ;(h = Math.cos(m) * (r ? r / 2 : g)),
                        (a = Math.cos(m) * g),
                        (s = Math.sin(m) * g),
                        (d = Math.sin(m) * (r ? r / 2 : g)),
                        t.moveTo(n - h, i - s),
                        t.lineTo(n + d, i - a),
                        t.lineTo(n + h, i + s),
                        t.lineTo(n - d, i + a),
                        t.closePath()
                        break
                    case 'crossRot':
                        m += ct
                    case 'cross':
                        ;(h = Math.cos(m) * (r ? r / 2 : g)),
                        (a = Math.cos(m) * g),
                        (s = Math.sin(m) * g),
                        (d = Math.sin(m) * (r ? r / 2 : g)),
                        t.moveTo(n - h, i - s),
                        t.lineTo(n + h, i + s),
                        t.moveTo(n + d, i - a),
                        t.lineTo(n - d, i + a)
                        break
                    case 'star':
                        ;(h = Math.cos(m) * (r ? r / 2 : g)),
                        (a = Math.cos(m) * g),
                        (s = Math.sin(m) * g),
                        (d = Math.sin(m) * (r ? r / 2 : g)),
                        t.moveTo(n - h, i - s),
                        t.lineTo(n + h, i + s),
                        t.moveTo(n + d, i - a),
                        t.lineTo(n - d, i + a),
                        (m += ct),
                        (h = Math.cos(m) * (r ? r / 2 : g)),
                        (a = Math.cos(m) * g),
                        (s = Math.sin(m) * g),
                        (d = Math.sin(m) * (r ? r / 2 : g)),
                        t.moveTo(n - h, i - s),
                        t.lineTo(n + h, i + s),
                        t.moveTo(n + d, i - a),
                        t.lineTo(n - d, i + a)
                        break
                    case 'line':
                        ;(a = r ? r / 2 : Math.cos(m) * g),
                        (s = Math.sin(m) * g),
                        t.moveTo(n - a, i - s),
                        t.lineTo(n + a, i + s)
                        break
                    case 'dash':
                        t.moveTo(n, i), t.lineTo(n + Math.cos(m) * (r ? r / 2 : g), i + Math.sin(m) * g)
                        break
                    case !1:
                        t.closePath()
                }
                t.fill(), e.borderWidth > 0 && t.stroke()
            }
        }

        function ue(t, e, n) {
            return (
                (n = n || 0.5),
                !e || (t && t.x > e.left - n && t.x < e.right + n && t.y > e.top - n && t.y < e.bottom + n)
            )
        }

        function he(t, e) {
            t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip()
        }

        function de(t) {
            t.restore()
        }

        function fe(t, e, n, i, r) {
            if (!e) return t.lineTo(n.x, n.y)
            if ('middle' === r) {
                const i = (e.x + n.x) / 2
                t.lineTo(i, e.y), t.lineTo(i, n.y)
            } else ('after' === r) != !!i ? t.lineTo(e.x, n.y) : t.lineTo(n.x, e.y)
            t.lineTo(n.x, n.y)
        }

        function pe(t, e, n, i) {
            if (!e) return t.lineTo(n.x, n.y)
            t.bezierCurveTo(
                i ? e.cp1x : e.cp2x,
                i ? e.cp1y : e.cp2y,
                i ? n.cp2x : n.cp1x,
                i ? n.cp2y : n.cp1y,
                n.x,
                n.y
            )
        }

        function ge(t, e, n, i, r) {
            if (r.strikethrough || r.underline) {
                const o = t.measureText(i),
                    a = e - o.actualBoundingBoxLeft,
                    s = e + o.actualBoundingBoxRight,
                    l = n - o.actualBoundingBoxAscent,
                    c = n + o.actualBoundingBoxDescent,
                    u = r.strikethrough ? (l + c) / 2 : c
                ;(t.strokeStyle = t.fillStyle),
                    t.beginPath(),
                    (t.lineWidth = r.decorationWidth || 2),
                    t.moveTo(a, u),
                    t.lineTo(s, u),
                    t.stroke()
            }
        }

        function me(t, e) {
            const n = t.fillStyle
            ;(t.fillStyle = e.color), t.fillRect(e.left, e.top, e.width, e.height), (t.fillStyle = n)
        }

        function be(t, e, n, i, r, o = {}) {
            const a = N(e) ? e : [e],
                s = o.strokeWidth > 0 && '' !== o.strokeColor
            let l, c
            for (
                t.save(),
                    t.font = r.string,
                    (function (t, e) {
                        e.translation && t.translate(e.translation[0], e.translation[1]),
                        A(e.rotation) || t.rotate(e.rotation),
                        e.color && (t.fillStyle = e.color),
                        e.textAlign && (t.textAlign = e.textAlign),
                        e.textBaseline && (t.textBaseline = e.textBaseline)
                    })(t, o),
                    l = 0;
                l < a.length;
                ++l
            )
                (c = a[l]),
                o.backdrop && me(t, o.backdrop),
                s &&
                (o.strokeColor && (t.strokeStyle = o.strokeColor),
                A(o.strokeWidth) || (t.lineWidth = o.strokeWidth),
                    t.strokeText(c, n, i, o.maxWidth)),
                    t.fillText(c, n, i, o.maxWidth),
                    ge(t, n, i, c, o),
                    (i += Number(r.lineHeight))
            t.restore()
        }

        function ye(t, e) {
            const {x: n, y: i, w: r, h: o, radius: a} = e
            t.arc(n + a.topLeft, i + a.topLeft, a.topLeft, 1.5 * it, it, !0),
                t.lineTo(n, i + o - a.bottomLeft),
                t.arc(n + a.bottomLeft, i + o - a.bottomLeft, a.bottomLeft, it, lt, !0),
                t.lineTo(n + r - a.bottomRight, i + o),
                t.arc(n + r - a.bottomRight, i + o - a.bottomRight, a.bottomRight, lt, 0, !0),
                t.lineTo(n + r, i + a.topRight),
                t.arc(n + r - a.topRight, i + a.topRight, a.topRight, 0, -lt, !0),
                t.lineTo(n + a.topLeft, i)
        }

        const ve = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
            xe = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/

        function _e(t, e) {
            const n = ('' + t).match(ve)
            if (!n || 'normal' === n[1]) return 1.2 * e
            switch (((t = +n[2]), n[3])) {
                case 'px':
                    return t
                case '%':
                    t /= 100
            }
            return e * t
        }

        const we = t => +t || 0

        function ke(t, e) {
            const n = {},
                i = I(e),
                r = i ? Object.keys(e) : e,
                o = I(t) ? (i ? n => B(t[n], t[e[n]]) : e => t[e]) : () => t
            for (const t of r) n[t] = we(o(t))
            return n
        }

        function Se(t) {
            return ke(t, {top: 'y', right: 'x', bottom: 'y', left: 'x'})
        }

        function Me(t) {
            return ke(t, ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'])
        }

        function Ee(t) {
            const e = Se(t)
            return (e.width = e.left + e.right), (e.height = e.top + e.bottom), e
        }

        function Ce(t, e) {
            ;(t = t || {}), (e = e || ie.font)
            let n = B(t.size, e.size)
            'string' == typeof n && (n = parseInt(n, 10))
            let i = B(t.style, e.style)
            i &&
            !('' + i).match(xe) &&
            (console.warn('Invalid font style specified: "' + i + '"'), (i = void 0))
            const r = {
                family: B(t.family, e.family),
                lineHeight: _e(B(t.lineHeight, e.lineHeight), n),
                size: n,
                style: i,
                weight: B(t.weight, e.weight),
                string: ''
            }
            return (
                (r.string = (function (t) {
                    return !t || A(t.size) || A(t.family)
                        ? null
                        : (t.style ? t.style + ' ' : '') +
                        (t.weight ? t.weight + ' ' : '') +
                        t.size +
                        'px ' +
                        t.family
                })(r)),
                    r
            )
        }

        function Pe(t, e, n, i) {
            let r,
                o,
                a,
                s = !0
            for (r = 0, o = t.length; r < o; ++r)
                if (
                    ((a = t[r]),
                    void 0 !== a &&
                    (void 0 !== e && 'function' == typeof a && ((a = a(e)), (s = !1)),
                    void 0 !== n && N(a) && ((a = a[n % a.length]), (s = !1)),
                    void 0 !== a))
                )
                    return i && !s && (i.cacheable = !1), a
        }

        function Le(t, e) {
            return Object.assign(Object.create(t), e)
        }

        function De(t, e = [''], n, i, r = () => t[0]) {
            const o = n || t
            void 0 === i && (i = je('_fallback', t))
            const a = {
                [Symbol.toStringTag]: 'Object',
                _cacheable: !0,
                _scopes: t,
                _rootScopes: o,
                _fallback: i,
                _getTarget: r,
                override: n => De([n, ...t], e, o, i)
            }
            return new Proxy(a, {
                deleteProperty: (e, n) => (delete e[n], delete e._keys, delete t[0][n], !0),
                get: (n, i) =>
                    Ae(n, i, () =>
                        (function (t, e, n, i) {
                            let r
                            for (const o of e)
                                if (((r = je(ze(o, t), n)), void 0 !== r)) return Re(t, r) ? Ve(n, i, t, r) : r
                        })(i, e, t, n)
                    ),
                getOwnPropertyDescriptor: (t, e) => Reflect.getOwnPropertyDescriptor(t._scopes[0], e),
                getPrototypeOf: () => Reflect.getPrototypeOf(t[0]),
                has: (t, e) => We(t).includes(e),
                ownKeys: t => We(t),
                set(t, e, n) {
                    const i = t._storage || (t._storage = r())
                    return (t[e] = i[e] = n), delete t._keys, !0
                }
            })
        }

        function Oe(t, e, n, i) {
            const r = {
                _cacheable: !1,
                _proxy: t,
                _context: e,
                _subProxy: n,
                _stack: new Set(),
                _descriptors: Te(t, i),
                setContext: e => Oe(t, e, n, i),
                override: r => Oe(t.override(r), e, n, i)
            }
            return new Proxy(r, {
                deleteProperty: (e, n) => (delete e[n], delete t[n], !0),
                get: (t, e, n) =>
                    Ae(t, e, () =>
                        (function (t, e, n) {
                            const {_proxy: i, _context: r, _subProxy: o, _descriptors: a} = t
                            let s = i[e]
                            return (
                                et(s) &&
                                a.isScriptable(e) &&
                                (s = (function (t, e, n, i) {
                                    const {_proxy: r, _context: o, _subProxy: a, _stack: s} = n
                                    if (s.has(t))
                                        throw new Error('Recursion detected: ' + Array.from(s).join('->') + '->' + t)
                                    s.add(t)
                                    let l = e(o, a || i)
                                    return s.delete(t), Re(t, l) && (l = Ve(r._scopes, r, t, l)), l
                                })(e, s, t, n)),
                                N(s) &&
                                s.length &&
                                (s = (function (t, e, n, i) {
                                    const {_proxy: r, _context: o, _subProxy: a, _descriptors: s} = n
                                    if (void 0 !== o.index && i(t)) return e[o.index % e.length]
                                    if (I(e[0])) {
                                        const n = e,
                                            i = r._scopes.filter(t => t !== n)
                                        e = []
                                        for (const l of n) {
                                            const n = Ve(i, r, t, l)
                                            e.push(Oe(n, o, a && a[t], s))
                                        }
                                    }
                                    return e
                                })(e, s, t, a.isIndexable)),
                                Re(e, s) && (s = Oe(s, r, o && o[e], a)),
                                    s
                            )
                        })(t, e, n)
                    ),
                getOwnPropertyDescriptor: (e, n) =>
                    e._descriptors.allKeys
                        ? Reflect.has(t, n)
                            ? {enumerable: !0, configurable: !0}
                            : void 0
                        : Reflect.getOwnPropertyDescriptor(t, n),
                getPrototypeOf: () => Reflect.getPrototypeOf(t),
                has: (e, n) => Reflect.has(t, n),
                ownKeys: () => Reflect.ownKeys(t),
                set: (e, n, i) => ((t[n] = i), delete e[n], !0)
            })
        }

        function Te(t, e = {scriptable: !0, indexable: !0}) {
            const {
                _scriptable: n = e.scriptable,
                _indexable: i = e.indexable,
                _allKeys: r = e.allKeys
            } = t
            return {
                allKeys: r,
                scriptable: n,
                indexable: i,
                isScriptable: et(n) ? n : () => n,
                isIndexable: et(i) ? i : () => i
            }
        }

        const ze = (t, e) => (t ? t + J(e) : e),
            Re = (t, e) =>
                I(e) && 'adapters' !== t && (null === Object.getPrototypeOf(e) || e.constructor === Object)

        function Ae(t, e, n) {
            if (Object.prototype.hasOwnProperty.call(t, e)) return t[e]
            const i = n()
            return (t[e] = i), i
        }

        function Ne(t, e, n) {
            return et(t) ? t(e, n) : t
        }

        const Ie = (t, e) => (!0 === t ? e : 'string' == typeof t ? Z(e, t) : void 0)

        function Fe(t, e, n, i, r) {
            for (const o of e) {
                const e = Ie(n, o)
                if (e) {
                    t.add(e)
                    const o = Ne(e._fallback, n, r)
                    if (void 0 !== o && o !== n && o !== i) return o
                } else if (!1 === e && void 0 !== i && n !== i) return null
            }
            return !1
        }

        function Ve(t, e, n, i) {
            const r = e._rootScopes,
                o = Ne(e._fallback, n, i),
                a = [...t, ...r],
                s = new Set()
            s.add(i)
            let l = Be(s, a, n, o || n, i)
            return (
                null !== l &&
                (void 0 === o || o === n || ((l = Be(s, a, o, l, i)), null !== l)) &&
                De(Array.from(s), [''], r, o, () =>
                    (function (t, e, n) {
                        const i = t._getTarget()
                        e in i || (i[e] = {})
                        const r = i[e]
                        return N(r) && I(n) ? n : r || {}
                    })(e, n, i)
                )
            )
        }

        function Be(t, e, n, i, r) {
            for (; n;) n = Fe(t, e, n, i, r)
            return n
        }

        function je(t, e) {
            for (const n of e) {
                if (!n) continue
                const e = n[t]
                if (void 0 !== e) return e
            }
        }

        function We(t) {
            let e = t._keys
            return (
                e ||
                (e = t._keys =
                    (function (t) {
                        const e = new Set()
                        for (const n of t)
                            for (const t of Object.keys(n).filter(t => !t.startsWith('_'))) e.add(t)
                        return Array.from(e)
                    })(t._scopes)),
                    e
            )
        }

        function He(t, e, n, i) {
            const {iScale: r} = t,
                {key: o = 'r'} = this._parsing,
                a = new Array(i)
            let s, l, c, u
            for (s = 0, l = i; s < l; ++s) (c = s + n), (u = e[c]), (a[s] = {r: r.parse(Z(u, o), c)})
            return a
        }

        const $e = Number.EPSILON || 1e-14,
            Ue = (t, e) => e < t.length && !t[e].skip && t[e],
            Ye = t => ('x' === t ? 'y' : 'x')

        function Qe(t, e, n, i) {
            const r = t.skip ? e : t,
                o = e,
                a = n.skip ? e : n,
                s = _t(o, r),
                l = _t(a, o)
            let c = s / (s + l),
                u = l / (s + l)
            ;(c = isNaN(c) ? 0 : c), (u = isNaN(u) ? 0 : u)
            const h = i * c,
                d = i * u
            return {
                previous: {x: o.x - h * (a.x - r.x), y: o.y - h * (a.y - r.y)},
                next: {x: o.x + d * (a.x - r.x), y: o.y + d * (a.y - r.y)}
            }
        }

        function Xe(t, e, n) {
            return Math.max(Math.min(t, n), e)
        }

        function qe(t, e, n, i, r) {
            let o, a, s, l
            if ((e.spanGaps && (t = t.filter(t => !t.skip)), 'monotone' === e.cubicInterpolationMode))
                !(function (t, e = 'x') {
                    const n = Ye(e),
                        i = t.length,
                        r = Array(i).fill(0),
                        o = Array(i)
                    let a,
                        s,
                        l,
                        c = Ue(t, 0)
                    for (a = 0; a < i; ++a)
                        if (((s = l), (l = c), (c = Ue(t, a + 1)), l)) {
                            if (c) {
                                const t = c[e] - l[e]
                                r[a] = 0 !== t ? (c[n] - l[n]) / t : 0
                            }
                            o[a] = s
                                ? c
                                    ? dt(r[a - 1]) !== dt(r[a])
                                        ? 0
                                        : (r[a - 1] + r[a]) / 2
                                    : r[a - 1]
                                : r[a]
                        }
                    !(function (t, e, n) {
                        const i = t.length
                        let r,
                            o,
                            a,
                            s,
                            l,
                            c = Ue(t, 0)
                        for (let u = 0; u < i - 1; ++u)
                            (l = c),
                                (c = Ue(t, u + 1)),
                            l &&
                            c &&
                            (ft(e[u], 0, $e)
                                ? (n[u] = n[u + 1] = 0)
                                : ((r = n[u] / e[u]),
                                    (o = n[u + 1] / e[u]),
                                    (s = Math.pow(r, 2) + Math.pow(o, 2)),
                                s <= 9 ||
                                ((a = 3 / Math.sqrt(s)), (n[u] = r * a * e[u]), (n[u + 1] = o * a * e[u]))))
                    })(t, r, o),
                        (function (t, e, n = 'x') {
                            const i = Ye(n),
                                r = t.length
                            let o,
                                a,
                                s,
                                l = Ue(t, 0)
                            for (let c = 0; c < r; ++c) {
                                if (((a = s), (s = l), (l = Ue(t, c + 1)), !s)) continue
                                const r = s[n],
                                    u = s[i]
                                a && ((o = (r - a[n]) / 3), (s[`cp1${n}`] = r - o), (s[`cp1${i}`] = u - o * e[c])),
                                l && ((o = (l[n] - r) / 3), (s[`cp2${n}`] = r + o), (s[`cp2${i}`] = u + o * e[c]))
                            }
                        })(t, o, e)
                })(t, r)
            else {
                let n = i ? t[t.length - 1] : t[0]
                for (o = 0, a = t.length; o < a; ++o)
                    (s = t[o]),
                        (l = Qe(n, s, t[Math.min(o + 1, a - (i ? 0 : 1)) % a], e.tension)),
                        (s.cp1x = l.previous.x),
                        (s.cp1y = l.previous.y),
                        (s.cp2x = l.next.x),
                        (s.cp2y = l.next.y),
                        (n = s)
            }
            e.capBezierPoints &&
            (function (t, e) {
                let n,
                    i,
                    r,
                    o,
                    a,
                    s = ue(t[0], e)
                for (n = 0, i = t.length; n < i; ++n)
                    (a = o),
                        (o = s),
                        (s = n < i - 1 && ue(t[n + 1], e)),
                    o &&
                    ((r = t[n]),
                    a &&
                    ((r.cp1x = Xe(r.cp1x, e.left, e.right)), (r.cp1y = Xe(r.cp1y, e.top, e.bottom))),
                    s &&
                    ((r.cp2x = Xe(r.cp2x, e.left, e.right)), (r.cp2y = Xe(r.cp2y, e.top, e.bottom))))
            })(t, n)
        }

        function Ke() {
            return 'undefined' != typeof window && 'undefined' != typeof document
        }

        function Ge(t) {
            let e = t.parentNode
            return e && '[object ShadowRoot]' === e.toString() && (e = e.host), e
        }

        function Ze(t, e, n) {
            let i
            return (
                'string' == typeof t
                    ? ((i = parseInt(t, 10)), -1 !== t.indexOf('%') && (i = (i / 100) * e.parentNode[n]))
                    : (i = t),
                    i
            )
        }

        const Je = t => t.ownerDocument.defaultView.getComputedStyle(t, null),
            tn = ['top', 'right', 'bottom', 'left']

        function en(t, e, n) {
            const i = {}
            n = n ? '-' + n : ''
            for (let r = 0; r < 4; r++) {
                const o = tn[r]
                i[o] = parseFloat(t[e + '-' + o + n]) || 0
            }
            return (i.width = i.left + i.right), (i.height = i.top + i.bottom), i
        }

        const nn = (t, e, n) => (t > 0 || e > 0) && (!n || !n.shadowRoot)

        function rn(t, e) {
            if ('native' in t) return t
            const {canvas: n, currentDevicePixelRatio: i} = e,
                r = Je(n),
                o = 'border-box' === r.boxSizing,
                a = en(r, 'padding'),
                s = en(r, 'border', 'width'),
                {
                    x: l,
                    y: c,
                    box: u
                } = (function (t, e) {
                    const n = t.touches,
                        i = n && n.length ? n[0] : t,
                        {offsetX: r, offsetY: o} = i
                    let a,
                        s,
                        l = !1
                    if (nn(r, o, t.target)) (a = r), (s = o)
                    else {
                        const t = e.getBoundingClientRect()
                        ;(a = i.clientX - t.left), (s = i.clientY - t.top), (l = !0)
                    }
                    return {x: a, y: s, box: l}
                })(t, n),
                h = a.left + (u && s.left),
                d = a.top + (u && s.top)
            let {width: f, height: p} = e
            return (
                o && ((f -= a.width + s.width), (p -= a.height + s.height)),
                    {
                        x: Math.round((((l - h) / f) * n.width) / i),
                        y: Math.round((((c - d) / p) * n.height) / i)
                    }
            )
        }

        const on = t => Math.round(10 * t) / 10

        function an(t, e, n) {
            const i = e || 1,
                r = Math.floor(t.height * i),
                o = Math.floor(t.width * i)
            ;(t.height = Math.floor(t.height)), (t.width = Math.floor(t.width))
            const a = t.canvas
            return (
                a.style &&
                (n || (!a.style.height && !a.style.width)) &&
                ((a.style.height = `${t.height}px`), (a.style.width = `${t.width}px`)),
                (t.currentDevicePixelRatio !== i || a.height !== r || a.width !== o) &&
                ((t.currentDevicePixelRatio = i),
                    (a.height = r),
                    (a.width = o),
                    t.ctx.setTransform(i, 0, 0, i, 0, 0),
                    !0)
            )
        }

        const sn = (function () {
            let t = !1
            try {
                const e = {
                    get passive() {
                        return (t = !0), !1
                    }
                }
                Ke() &&
                (window.addEventListener('test', null, e), window.removeEventListener('test', null, e))
            } catch (t) {
            }
            return t
        })()

        function ln(t, e) {
            const n = (function (t, e) {
                    return Je(t).getPropertyValue(e)
                })(t, e),
                i = n && n.match(/^(\d+)(\.\d+)?px$/)
            return i ? +i[1] : void 0
        }

        function cn(t, e, n, i) {
            return {x: t.x + n * (e.x - t.x), y: t.y + n * (e.y - t.y)}
        }

        function un(t, e, n, i) {
            return {
                x: t.x + n * (e.x - t.x),
                y:
                    'middle' === i
                        ? n < 0.5
                            ? t.y
                            : e.y
                        : 'after' === i
                            ? n < 1
                                ? t.y
                                : e.y
                            : n > 0
                                ? e.y
                                : t.y
            }
        }

        function hn(t, e, n, i) {
            const r = {x: t.cp2x, y: t.cp2y},
                o = {x: e.cp1x, y: e.cp1y},
                a = cn(t, r, n),
                s = cn(r, o, n),
                l = cn(o, e, n),
                c = cn(a, s, n),
                u = cn(s, l, n)
            return cn(c, u, n)
        }

        function dn(t, e, n) {
            return t
                ? (function (t, e) {
                    return {
                        x: n => t + t + e - n,
                        setWidth(t) {
                            e = t
                        },
                        textAlign: t => ('center' === t ? t : 'right' === t ? 'left' : 'right'),
                        xPlus: (t, e) => t - e,
                        leftForLtr: (t, e) => t - e
                    }
                })(e, n)
                : {
                    x: t => t,
                    setWidth(t) {
                    },
                    textAlign: t => t,
                    xPlus: (t, e) => t + e,
                    leftForLtr: (t, e) => t
                }
        }

        function fn(t, e) {
            let n, i
            ;('ltr' !== e && 'rtl' !== e) ||
            ((n = t.canvas.style),
                (i = [n.getPropertyValue('direction'), n.getPropertyPriority('direction')]),
                n.setProperty('direction', e, 'important'),
                (t.prevTextDirection = i))
        }

        function pn(t, e) {
            void 0 !== e &&
            (delete t.prevTextDirection, t.canvas.style.setProperty('direction', e[0], e[1]))
        }

        function gn(t) {
            return 'angle' === t
                ? {between: St, compare: wt, normalize: kt}
                : {between: Et, compare: (t, e) => t - e, normalize: t => t}
        }

        function mn({start: t, end: e, count: n, loop: i, style: r}) {
            return {start: t % n, end: e % n, loop: i && (e - t + 1) % n == 0, style: r}
        }

        function bn(t, e, n) {
            if (!n) return [t]
            const {property: i, start: r, end: o} = n,
                a = e.length,
                {compare: s, between: l, normalize: c} = gn(i),
                {
                    start: u,
                    end: h,
                    loop: d,
                    style: f
                } = (function (t, e, n) {
                    const {property: i, start: r, end: o} = n,
                        {between: a, normalize: s} = gn(i),
                        l = e.length
                    let c,
                        u,
                        {start: h, end: d, loop: f} = t
                    if (f) {
                        for (h += l, d += l, c = 0, u = l; c < u && a(s(e[h % l][i]), r, o); ++c) h--, d--
                        ;
                        (h %= l), (d %= l)
                    }
                    return d < h && (d += l), {start: h, end: d, loop: f, style: t.style}
                })(t, e, n),
                p = []
            let g,
                m,
                b,
                y = !1,
                v = null
            for (let t = u, n = u; t <= h; ++t)
                (m = e[t % a]),
                m.skip ||
                ((g = c(m[i])),
                g !== b &&
                ((y = l(g, r, o)),
                null === v && (y || (l(r, b, g) && 0 !== s(r, b))) && (v = 0 === s(g, r) ? t : n),
                null !== v &&
                (!y || 0 === s(o, g) || l(o, b, g)) &&
                (p.push(mn({start: v, end: t, loop: d, count: a, style: f})), (v = null)),
                    (n = t),
                    (b = g)))
            return null !== v && p.push(mn({start: v, end: h, loop: d, count: a, style: f})), p
        }

        function yn(t, e) {
            const n = [],
                i = t.segments
            for (let r = 0; r < i.length; r++) {
                const o = bn(i[r], t.points, e)
                o.length && n.push(...o)
            }
            return n
        }

        function vn(t) {
            return {
                backgroundColor: t.backgroundColor,
                borderCapStyle: t.borderCapStyle,
                borderDash: t.borderDash,
                borderDashOffset: t.borderDashOffset,
                borderJoinStyle: t.borderJoinStyle,
                borderWidth: t.borderWidth,
                borderColor: t.borderColor
            }
        }

        function xn(t, e) {
            if (!e) return !1
            const n = [],
                i = function (t, e) {
                    return Ht(e) ? (n.includes(e) || n.push(e), n.indexOf(e)) : e
                }
            return JSON.stringify(t, i) !== JSON.stringify(e, i)
        }

        class _n {
            constructor() {
                ;(this._request = null),
                    (this._charts = new Map()),
                    (this._running = !1),
                    (this._lastDate = void 0)
            }

            _notify(t, e, n, i) {
                const r = e.listeners[i],
                    o = e.duration
                r.forEach(i =>
                    i({chart: t, initial: e.initial, numSteps: o, currentStep: Math.min(n - e.start, o)})
                )
            }

            _refresh() {
                this._request ||
                ((this._running = !0),
                    (this._request = zt.call(window, () => {
                        this._update(), (this._request = null), this._running && this._refresh()
                    })))
            }

            _update(t = Date.now()) {
                let e = 0
                this._charts.forEach((n, i) => {
                    if (!n.running || !n.items.length) return
                    const r = n.items
                    let o,
                        a = r.length - 1,
                        s = !1
                    for (; a >= 0; --a)
                        (o = r[a]),
                            o._active
                                ? (o._total > n.duration && (n.duration = o._total), o.tick(t), (s = !0))
                                : ((r[a] = r[r.length - 1]), r.pop())
                    s && (i.draw(), this._notify(i, n, t, 'progress')),
                    r.length || ((n.running = !1), this._notify(i, n, t, 'complete'), (n.initial = !1)),
                        (e += r.length)
                }),
                    (this._lastDate = t),
                0 === e && (this._running = !1)
            }

            _getAnims(t) {
                const e = this._charts
                let n = e.get(t)
                return (
                    n ||
                    ((n = {
                        running: !1,
                        initial: !0,
                        items: [],
                        listeners: {complete: [], progress: []}
                    }),
                        e.set(t, n)),
                        n
                )
            }

            listen(t, e, n) {
                this._getAnims(t).listeners[e].push(n)
            }

            add(t, e) {
                e && e.length && this._getAnims(t).items.push(...e)
            }

            has(t) {
                return this._getAnims(t).items.length > 0
            }

            start(t) {
                const e = this._charts.get(t)
                e &&
                ((e.running = !0),
                    (e.start = Date.now()),
                    (e.duration = e.items.reduce((t, e) => Math.max(t, e._duration), 0)),
                    this._refresh())
            }

            running(t) {
                if (!this._running) return !1
                const e = this._charts.get(t)
                return !!(e && e.running && e.items.length)
            }

            stop(t) {
                const e = this._charts.get(t)
                if (!e || !e.items.length) return
                const n = e.items
                let i = n.length - 1
                for (; i >= 0; --i) n[i].cancel()
                ;
                (e.items = []), this._notify(t, e, Date.now(), 'complete')
            }

            remove(t) {
                return this._charts.delete(t)
            }
        }

        var wn = new _n()
        const kn = 'transparent',
            Sn = {
                boolean: (t, e, n) => (n > 0.5 ? e : t),
                color(t, e, n) {
                    const i = $t(t || kn),
                        r = i.valid && $t(e || kn)
                    return r && r.valid ? r.mix(i, n).hexString() : e
                },
                number: (t, e, n) => t + (e - t) * n
            }

        class Mn {
            constructor(t, e, n, i) {
                const r = e[n]
                i = Pe([t.to, i, r, t.from])
                const o = Pe([t.from, r, i])
                ;(this._active = !0),
                    (this._fn = t.fn || Sn[t.type || typeof o]),
                    (this._easing = Wt[t.easing] || Wt.linear),
                    (this._start = Math.floor(Date.now() + (t.delay || 0))),
                    (this._duration = this._total = Math.floor(t.duration)),
                    (this._loop = !!t.loop),
                    (this._target = e),
                    (this._prop = n),
                    (this._from = o),
                    (this._to = i),
                    (this._promises = void 0)
            }

            active() {
                return this._active
            }

            update(t, e, n) {
                if (this._active) {
                    this._notify(!1)
                    const i = this._target[this._prop],
                        r = n - this._start,
                        o = this._duration - r
                    ;(this._start = n),
                        (this._duration = Math.floor(Math.max(o, t.duration))),
                        (this._total += r),
                        (this._loop = !!t.loop),
                        (this._to = Pe([t.to, e, i, t.from])),
                        (this._from = Pe([t.from, i, e]))
                }
            }

            cancel() {
                this._active && (this.tick(Date.now()), (this._active = !1), this._notify(!1))
            }

            tick(t) {
                const e = t - this._start,
                    n = this._duration,
                    i = this._prop,
                    r = this._from,
                    o = this._loop,
                    a = this._to
                let s
                if (((this._active = r !== a && (o || e < n)), !this._active))
                    return (this._target[i] = a), void this._notify(!0)
                e < 0
                    ? (this._target[i] = r)
                    : ((s = (e / n) % 2),
                        (s = o && s > 1 ? 2 - s : s),
                        (s = this._easing(Math.min(1, Math.max(0, s)))),
                        (this._target[i] = this._fn(r, a, s)))
            }

            wait() {
                const t = this._promises || (this._promises = [])
                return new Promise((e, n) => {
                    t.push({res: e, rej: n})
                })
            }

            _notify(t) {
                const e = t ? 'res' : 'rej',
                    n = this._promises || []
                for (let t = 0; t < n.length; t++) n[t][e]()
            }
        }

        class En {
            constructor(t, e) {
                ;(this._chart = t), (this._properties = new Map()), this.configure(e)
            }

            configure(t) {
                if (!I(t)) return
                const e = Object.keys(ie.animation),
                    n = this._properties
                Object.getOwnPropertyNames(t).forEach(i => {
                    const r = t[i]
                    if (!I(r)) return
                    const o = {}
                    for (const t of e) o[t] = r[t]
                    ;
                    ((N(r.properties) && r.properties) || [i]).forEach(t => {
                        ;(t !== i && n.has(t)) || n.set(t, o)
                    })
                })
            }

            _animateOptions(t, e) {
                const n = e.options,
                    i = (function (t, e) {
                        if (!e) return
                        let n = t.options
                        if (n)
                            return (
                                n.$shared &&
                                (t.options = n = Object.assign({}, n, {$shared: !1, $animations: {}})),
                                    n
                            )
                        t.options = e
                    })(t, n)
                if (!i) return []
                const r = this._createAnimations(i, n)
                return (
                    n.$shared &&
                    (function (t, e) {
                        const n = [],
                            i = Object.keys(e)
                        for (let e = 0; e < i.length; e++) {
                            const r = t[i[e]]
                            r && r.active() && n.push(r.wait())
                        }
                        return Promise.all(n)
                    })(t.options.$animations, n).then(
                        () => {
                            t.options = n
                        },
                        () => {
                        }
                    ),
                        r
                )
            }

            _createAnimations(t, e) {
                const n = this._properties,
                    i = [],
                    r = t.$animations || (t.$animations = {}),
                    o = Object.keys(e),
                    a = Date.now()
                let s
                for (s = o.length - 1; s >= 0; --s) {
                    const l = o[s]
                    if ('$' === l.charAt(0)) continue
                    if ('options' === l) {
                        i.push(...this._animateOptions(t, e))
                        continue
                    }
                    const c = e[l]
                    let u = r[l]
                    const h = n.get(l)
                    if (u) {
                        if (h && u.active()) {
                            u.update(h, c, a)
                            continue
                        }
                        u.cancel()
                    }
                    h && h.duration ? ((r[l] = u = new Mn(h, t, l, c)), i.push(u)) : (t[l] = c)
                }
                return i
            }

            update(t, e) {
                if (0 === this._properties.size) return void Object.assign(t, e)
                const n = this._createAnimations(t, e)
                return n.length ? (wn.add(this._chart, n), !0) : void 0
            }
        }

        function Cn(t, e) {
            const n = (t && t.options) || {},
                i = n.reverse,
                r = void 0 === n.min ? e : 0,
                o = void 0 === n.max ? e : 0
            return {start: i ? o : r, end: i ? r : o}
        }

        function Pn(t, e) {
            const n = [],
                i = t._getSortedDatasetMetas(e)
            let r, o
            for (r = 0, o = i.length; r < o; ++r) n.push(i[r].index)
            return n
        }

        function Ln(t, e, n, i = {}) {
            const r = t.keys,
                o = 'single' === i.mode
            let a, s, l, c
            if (null !== e) {
                for (a = 0, s = r.length; a < s; ++a) {
                    if (((l = +r[a]), l === n)) {
                        if (i.all) continue
                        break
                    }
                    ;(c = t.values[l]), F(c) && (o || 0 === e || dt(e) === dt(c)) && (e += c)
                }
                return e
            }
        }

        function Dn(t, e) {
            const n = t && t.options.stacked
            return n || (void 0 === n && void 0 !== e.stack)
        }

        function On(t, e, n) {
            const i = t[e] || (t[e] = {})
            return i[n] || (i[n] = {})
        }

        function Tn(t, e, n, i) {
            for (const r of e.getMatchingVisibleMetas(i).reverse()) {
                const e = t[r.index]
                if ((n && e > 0) || (!n && e < 0)) return r.index
            }
            return null
        }

        function zn(t, e) {
            const {chart: n, _cachedMeta: i} = t,
                r = n._stacks || (n._stacks = {}),
                {iScale: o, vScale: a, index: s} = i,
                l = o.axis,
                c = a.axis,
                u = (function (t, e, n) {
                    return `${t.id}.${e.id}.${n.stack || n.type}`
                })(o, a, i),
                h = e.length
            let d
            for (let t = 0; t < h; ++t) {
                const n = e[t],
                    {[l]: o, [c]: h} = n
                ;(d = (n._stacks || (n._stacks = {}))[c] = On(r, u, o)),
                    (d[s] = h),
                    (d._top = Tn(d, a, !0, i.type)),
                    (d._bottom = Tn(d, a, !1, i.type)),
                    ((d._visualValues || (d._visualValues = {}))[s] = h)
            }
        }

        function Rn(t, e) {
            const n = t.scales
            return Object.keys(n)
                .filter(t => n[t].axis === e)
                .shift()
        }

        function An(t, e) {
            const n = t.controller.index,
                i = t.vScale && t.vScale.axis
            if (i) {
                e = e || t._parsed
                for (const t of e) {
                    const e = t._stacks
                    if (!e || void 0 === e[i] || void 0 === e[i][n]) return
                    delete e[i][n],
                    void 0 !== e[i]._visualValues &&
                    void 0 !== e[i]._visualValues[n] &&
                    delete e[i]._visualValues[n]
                }
            }
        }

        const Nn = t => 'reset' === t || 'none' === t,
            In = (t, e) => (e ? t : Object.assign({}, t))

        class Fn {
            static defaults = {}
            static datasetElementType = null
            static dataElementType = null

            constructor(t, e) {
                ;(this.chart = t),
                    (this._ctx = t.ctx),
                    (this.index = e),
                    (this._cachedDataOpts = {}),
                    (this._cachedMeta = this.getMeta()),
                    (this._type = this._cachedMeta.type),
                    (this.options = void 0),
                    (this._parsing = !1),
                    (this._data = void 0),
                    (this._objectData = void 0),
                    (this._sharedOptions = void 0),
                    (this._drawStart = void 0),
                    (this._drawCount = void 0),
                    (this.enableOptionSharing = !1),
                    (this.supportsDecimation = !1),
                    (this.$context = void 0),
                    (this._syncList = []),
                    (this.datasetElementType = new.target.datasetElementType),
                    (this.dataElementType = new.target.dataElementType),
                    this.initialize()
            }

            initialize() {
                const t = this._cachedMeta
                this.configure(),
                    this.linkScales(),
                    (t._stacked = Dn(t.vScale, t)),
                    this.addElements(),
                this.options.fill &&
                !this.chart.isPluginEnabled('filler') &&
                console.warn(
                    "Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options"
                )
            }

            updateIndex(t) {
                this.index !== t && An(this._cachedMeta), (this.index = t)
            }

            linkScales() {
                const t = this.chart,
                    e = this._cachedMeta,
                    n = this.getDataset(),
                    i = (t, e, n, i) => ('x' === t ? e : 'r' === t ? i : n),
                    r = (e.xAxisID = B(n.xAxisID, Rn(t, 'x'))),
                    o = (e.yAxisID = B(n.yAxisID, Rn(t, 'y'))),
                    a = (e.rAxisID = B(n.rAxisID, Rn(t, 'r'))),
                    s = e.indexAxis,
                    l = (e.iAxisID = i(s, r, o, a)),
                    c = (e.vAxisID = i(s, o, r, a))
                ;(e.xScale = this.getScaleForId(r)),
                    (e.yScale = this.getScaleForId(o)),
                    (e.rScale = this.getScaleForId(a)),
                    (e.iScale = this.getScaleForId(l)),
                    (e.vScale = this.getScaleForId(c))
            }

            getDataset() {
                return this.chart.data.datasets[this.index]
            }

            getMeta() {
                return this.chart.getDatasetMeta(this.index)
            }

            getScaleForId(t) {
                return this.chart.scales[t]
            }

            _getOtherScale(t) {
                const e = this._cachedMeta
                return t === e.iScale ? e.vScale : e.iScale
            }

            reset() {
                this._update('reset')
            }

            _destroy() {
                const t = this._cachedMeta
                this._data && Ot(this._data, this), t._stacked && An(t)
            }

            _dataCheck() {
                const t = this.getDataset(),
                    e = t.data || (t.data = []),
                    n = this._data
                if (I(e))
                    this._data = (function (t) {
                        const e = Object.keys(t),
                            n = new Array(e.length)
                        let i, r, o
                        for (i = 0, r = e.length; i < r; ++i) (o = e[i]), (n[i] = {x: o, y: t[o]})
                        return n
                    })(e)
                else if (n !== e) {
                    if (n) {
                        Ot(n, this)
                        const t = this._cachedMeta
                        An(t), (t._parsed = [])
                    }
                    e &&
                    Object.isExtensible(e) &&
                    (this,
                        (i = e)._chartjs
                            ? i._chartjs.listeners.push(this)
                            : (Object.defineProperty(i, '_chartjs', {
                                configurable: !0,
                                enumerable: !1,
                                value: {listeners: [this]}
                            }),
                                Dt.forEach(t => {
                                    const e = '_onData' + J(t),
                                        n = i[t]
                                    Object.defineProperty(i, t, {
                                        configurable: !0,
                                        enumerable: !1,
                                        value(...t) {
                                            const r = n.apply(this, t)
                                            return (
                                                i._chartjs.listeners.forEach(n => {
                                                    'function' == typeof n[e] && n[e](...t)
                                                }),
                                                    r
                                            )
                                        }
                                    })
                                }))),
                        (this._syncList = []),
                        (this._data = e)
                }
                var i
            }

            addElements() {
                const t = this._cachedMeta
                this._dataCheck(), this.datasetElementType && (t.dataset = new this.datasetElementType())
            }

            buildOrUpdateElements(t) {
                const e = this._cachedMeta,
                    n = this.getDataset()
                let i = !1
                this._dataCheck()
                const r = e._stacked
                ;(e._stacked = Dn(e.vScale, e)),
                e.stack !== n.stack && ((i = !0), An(e), (e.stack = n.stack)),
                    this._resyncElements(t),
                (i || r !== e._stacked) && zn(this, e._parsed)
            }

            configure() {
                const t = this.chart.config,
                    e = t.datasetScopeKeys(this._type),
                    n = t.getOptionScopes(this.getDataset(), e, !0)
                ;(this.options = t.createResolver(n, this.getContext())),
                    (this._parsing = this.options.parsing),
                    (this._cachedDataOpts = {})
            }

            parse(t, e) {
                const {_cachedMeta: n, _data: i} = this,
                    {iScale: r, _stacked: o} = n,
                    a = r.axis
                let s,
                    l,
                    c,
                    u = (0 === t && e === i.length) || n._sorted,
                    h = t > 0 && n._parsed[t - 1]
                if (!1 === this._parsing) (n._parsed = i), (n._sorted = !0), (c = i)
                else {
                    c = N(i[t])
                        ? this.parseArrayData(n, i, t, e)
                        : I(i[t])
                            ? this.parseObjectData(n, i, t, e)
                            : this.parsePrimitiveData(n, i, t, e)
                    const r = () => null === l[a] || (h && l[a] < h[a])
                    for (s = 0; s < e; ++s) (n._parsed[s + t] = l = c[s]), u && (r() && (u = !1), (h = l))
                    n._sorted = u
                }
                o && zn(this, c)
            }

            parsePrimitiveData(t, e, n, i) {
                const {iScale: r, vScale: o} = t,
                    a = r.axis,
                    s = o.axis,
                    l = r.getLabels(),
                    c = r === o,
                    u = new Array(i)
                let h, d, f
                for (h = 0, d = i; h < d; ++h)
                    (f = h + n), (u[h] = {[a]: c || r.parse(l[f], f), [s]: o.parse(e[f], f)})
                return u
            }

            parseArrayData(t, e, n, i) {
                const {xScale: r, yScale: o} = t,
                    a = new Array(i)
                let s, l, c, u
                for (s = 0, l = i; s < l; ++s)
                    (c = s + n), (u = e[c]), (a[s] = {x: r.parse(u[0], c), y: o.parse(u[1], c)})
                return a
            }

            parseObjectData(t, e, n, i) {
                const {xScale: r, yScale: o} = t,
                    {xAxisKey: a = 'x', yAxisKey: s = 'y'} = this._parsing,
                    l = new Array(i)
                let c, u, h, d
                for (c = 0, u = i; c < u; ++c)
                    (h = c + n), (d = e[h]), (l[c] = {x: r.parse(Z(d, a), h), y: o.parse(Z(d, s), h)})
                return l
            }

            getParsed(t) {
                return this._cachedMeta._parsed[t]
            }

            getDataElement(t) {
                return this._cachedMeta.data[t]
            }

            applyStack(t, e, n) {
                const i = this.chart,
                    r = this._cachedMeta,
                    o = e[t.axis]
                return Ln({keys: Pn(i, !0), values: e._stacks[t.axis]._visualValues}, o, r.index, {
                    mode: n
                })
            }

            updateRangeFromParsed(t, e, n, i) {
                const r = n[e.axis]
                let o = null === r ? NaN : r
                const a = i && n._stacks[e.axis]
                i && a && ((i.values = a), (o = Ln(i, r, this._cachedMeta.index))),
                    (t.min = Math.min(t.min, o)),
                    (t.max = Math.max(t.max, o))
            }

            getMinMax(t, e) {
                const n = this._cachedMeta,
                    i = n._parsed,
                    r = n._sorted && t === n.iScale,
                    o = i.length,
                    a = this._getOtherScale(t),
                    s = ((t, e, n) => t && !e.hidden && e._stacked && {keys: Pn(n, !0), values: null})(
                        e,
                        n,
                        this.chart
                    ),
                    l = {min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY},
                    {min: c, max: u} = (function (t) {
                        const {min: e, max: n, minDefined: i, maxDefined: r} = t.getUserBounds()
                        return {min: i ? e : Number.NEGATIVE_INFINITY, max: r ? n : Number.POSITIVE_INFINITY}
                    })(a)
                let h, d

                function f() {
                    d = i[h]
                    const e = d[a.axis]
                    return !F(d[t.axis]) || c > e || u < e
                }

                for (h = 0; h < o && (f() || (this.updateRangeFromParsed(l, t, d, s), !r)); ++h) ;
                if (r)
                    for (h = o - 1; h >= 0; --h)
                        if (!f()) {
                            this.updateRangeFromParsed(l, t, d, s)
                            break
                        }
                return l
            }

            getAllParsedValues(t) {
                const e = this._cachedMeta._parsed,
                    n = []
                let i, r, o
                for (i = 0, r = e.length; i < r; ++i) (o = e[i][t.axis]), F(o) && n.push(o)
                return n
            }

            getMaxOverflow() {
                return !1
            }

            getLabelAndValue(t) {
                const e = this._cachedMeta,
                    n = e.iScale,
                    i = e.vScale,
                    r = this.getParsed(t)
                return {
                    label: n ? '' + n.getLabelForValue(r[n.axis]) : '',
                    value: i ? '' + i.getLabelForValue(r[i.axis]) : ''
                }
            }

            _update(t) {
                const e = this._cachedMeta
                this.update(t || 'default'),
                    (e._clip = (function (t) {
                        let e, n, i, r
                        return (
                            I(t)
                                ? ((e = t.top), (n = t.right), (i = t.bottom), (r = t.left))
                                : (e = n = i = r = t),
                                {top: e, right: n, bottom: i, left: r, disabled: !1 === t}
                        )
                    })(
                        B(
                            this.options.clip,
                            (function (t, e, n) {
                                if (!1 === n) return !1
                                const i = Cn(t, n),
                                    r = Cn(e, n)
                                return {top: r.end, right: i.end, bottom: r.start, left: i.start}
                            })(e.xScale, e.yScale, this.getMaxOverflow())
                        )
                    ))
            }

            update(t) {
            }

            draw() {
                const t = this._ctx,
                    e = this.chart,
                    n = this._cachedMeta,
                    i = n.data || [],
                    r = e.chartArea,
                    o = [],
                    a = this._drawStart || 0,
                    s = this._drawCount || i.length - a,
                    l = this.options.drawActiveElementsOnTop
                let c
                for (n.dataset && n.dataset.draw(t, r, a, s), c = a; c < a + s; ++c) {
                    const e = i[c]
                    e.hidden || (e.active && l ? o.push(e) : e.draw(t, r))
                }
                for (c = 0; c < o.length; ++c) o[c].draw(t, r)
            }

            getStyle(t, e) {
                const n = e ? 'active' : 'default'
                return void 0 === t && this._cachedMeta.dataset
                    ? this.resolveDatasetElementOptions(n)
                    : this.resolveDataElementOptions(t || 0, n)
            }

            getContext(t, e, n) {
                const i = this.getDataset()
                let r
                if (t >= 0 && t < this._cachedMeta.data.length) {
                    const e = this._cachedMeta.data[t]
                    ;(r =
                        e.$context ||
                        (e.$context = (function (t, e, n) {
                            return Le(t, {
                                active: !1,
                                dataIndex: e,
                                parsed: void 0,
                                raw: void 0,
                                element: n,
                                index: e,
                                mode: 'default',
                                type: 'data'
                            })
                        })(this.getContext(), t, e))),
                        (r.parsed = this.getParsed(t)),
                        (r.raw = i.data[t]),
                        (r.index = r.dataIndex = t)
                } else
                    (r =
                        this.$context ||
                        (this.$context = (function (t, e) {
                            return Le(t, {
                                active: !1,
                                dataset: void 0,
                                datasetIndex: e,
                                index: e,
                                mode: 'default',
                                type: 'dataset'
                            })
                        })(this.chart.getContext(), this.index))),
                        (r.dataset = i),
                        (r.index = r.datasetIndex = this.index)
                return (r.active = !!e), (r.mode = n), r
            }

            resolveDatasetElementOptions(t) {
                return this._resolveElementOptions(this.datasetElementType.id, t)
            }

            resolveDataElementOptions(t, e) {
                return this._resolveElementOptions(this.dataElementType.id, e, t)
            }

            _resolveElementOptions(t, e = 'default', n) {
                const i = 'active' === e,
                    r = this._cachedDataOpts,
                    o = t + '-' + e,
                    a = r[o],
                    s = this.enableOptionSharing && tt(n)
                if (a) return In(a, s)
                const l = this.chart.config,
                    c = l.datasetElementScopeKeys(this._type, t),
                    u = i ? [`${t}Hover`, 'hover', t, ''] : [t, ''],
                    h = l.getOptionScopes(this.getDataset(), c),
                    d = Object.keys(ie.elements[t]),
                    f = l.resolveNamedOptions(h, d, () => this.getContext(n, i, e), u)
                return f.$shared && ((f.$shared = s), (r[o] = Object.freeze(In(f, s)))), f
            }

            _resolveAnimations(t, e, n) {
                const i = this.chart,
                    r = this._cachedDataOpts,
                    o = `animation-${e}`,
                    a = r[o]
                if (a) return a
                let s
                if (!1 !== i.options.animation) {
                    const i = this.chart.config,
                        r = i.datasetAnimationScopeKeys(this._type, e),
                        o = i.getOptionScopes(this.getDataset(), r)
                    s = i.createResolver(o, this.getContext(t, n, e))
                }
                const l = new En(i, s && s.animations)
                return s && s._cacheable && (r[o] = Object.freeze(l)), l
            }

            getSharedOptions(t) {
                if (t.$shared) return this._sharedOptions || (this._sharedOptions = Object.assign({}, t))
            }

            includeOptions(t, e) {
                return !e || Nn(t) || this.chart._animationsDisabled
            }

            _getSharedOptions(t, e) {
                const n = this.resolveDataElementOptions(t, e),
                    i = this._sharedOptions,
                    r = this.getSharedOptions(n),
                    o = this.includeOptions(e, r) || r !== i
                return this.updateSharedOptions(r, e, n), {sharedOptions: r, includeOptions: o}
            }

            updateElement(t, e, n, i) {
                Nn(i) ? Object.assign(t, n) : this._resolveAnimations(e, i).update(t, n)
            }

            updateSharedOptions(t, e, n) {
                t && !Nn(e) && this._resolveAnimations(void 0, e).update(t, n)
            }

            _setStyle(t, e, n, i) {
                t.active = i
                const r = this.getStyle(e, i)
                this._resolveAnimations(e, n, i).update(t, {
                    options: (!i && this.getSharedOptions(r)) || r
                })
            }

            removeHoverStyle(t, e, n) {
                this._setStyle(t, n, 'active', !1)
            }

            setHoverStyle(t, e, n) {
                this._setStyle(t, n, 'active', !0)
            }

            _removeDatasetHoverStyle() {
                const t = this._cachedMeta.dataset
                t && this._setStyle(t, void 0, 'active', !1)
            }

            _setDatasetHoverStyle() {
                const t = this._cachedMeta.dataset
                t && this._setStyle(t, void 0, 'active', !0)
            }

            _resyncElements(t) {
                const e = this._data,
                    n = this._cachedMeta.data
                for (const [t, e, n] of this._syncList) this[t](e, n)
                this._syncList = []
                const i = n.length,
                    r = e.length,
                    o = Math.min(r, i)
                o && this.parse(0, o),
                    r > i ? this._insertElements(i, r - i, t) : r < i && this._removeElements(r, i - r)
            }

            _insertElements(t, e, n = !0) {
                const i = this._cachedMeta,
                    r = i.data,
                    o = t + e
                let a
                const s = t => {
                    for (t.length += e, a = t.length - 1; a >= o; a--) t[a] = t[a - e]
                }
                for (s(r), a = t; a < o; ++a) r[a] = new this.dataElementType()
                this._parsing && s(i._parsed), this.parse(t, e), n && this.updateElements(r, t, e, 'reset')
            }

            updateElements(t, e, n, i) {
            }

            _removeElements(t, e) {
                const n = this._cachedMeta
                if (this._parsing) {
                    const i = n._parsed.splice(t, e)
                    n._stacked && An(n, i)
                }
                n.data.splice(t, e)
            }

            _sync(t) {
                if (this._parsing) this._syncList.push(t)
                else {
                    const [e, n, i] = t
                    this[e](n, i)
                }
                this.chart._dataChanges.push([this.index, ...t])
            }

            _onDataPush() {
                const t = arguments.length
                this._sync(['_insertElements', this.getDataset().data.length - t, t])
            }

            _onDataPop() {
                this._sync(['_removeElements', this._cachedMeta.data.length - 1, 1])
            }

            _onDataShift() {
                this._sync(['_removeElements', 0, 1])
            }

            _onDataSplice(t, e) {
                e && this._sync(['_removeElements', t, e])
                const n = arguments.length - 2
                n && this._sync(['_insertElements', t, n])
            }

            _onDataUnshift() {
                this._sync(['_insertElements', 0, arguments.length])
            }
        }

        function Vn(t) {
            const e = t.iScale,
                n = (function (t, e) {
                    if (!t._cache.$bar) {
                        const n = t.getMatchingVisibleMetas(e)
                        let i = []
                        for (let e = 0, r = n.length; e < r; e++)
                            i = i.concat(n[e].controller.getAllParsedValues(t))
                        t._cache.$bar = Tt(i.sort((t, e) => t - e))
                    }
                    return t._cache.$bar
                })(e, t.type)
            let i,
                r,
                o,
                a,
                s = e._length
            const l = () => {
                32767 !== o && -32768 !== o && (tt(a) && (s = Math.min(s, Math.abs(o - a) || s)), (a = o))
            }
            for (i = 0, r = n.length; i < r; ++i) (o = e.getPixelForValue(n[i])), l()
            for (a = void 0, i = 0, r = e.ticks.length; i < r; ++i) (o = e.getPixelForTick(i)), l()
            return s
        }

        function Bn(t, e, n, i) {
            return (
                N(t)
                    ? (function (t, e, n, i) {
                        const r = n.parse(t[0], i),
                            o = n.parse(t[1], i),
                            a = Math.min(r, o),
                            s = Math.max(r, o)
                        let l = a,
                            c = s
                        Math.abs(a) > Math.abs(s) && ((l = s), (c = a)),
                            (e[n.axis] = c),
                            (e._custom = {barStart: l, barEnd: c, start: r, end: o, min: a, max: s})
                    })(t, e, n, i)
                    : (e[n.axis] = n.parse(t, i)),
                    e
            )
        }

        function jn(t, e, n, i) {
            const r = t.iScale,
                o = t.vScale,
                a = r.getLabels(),
                s = r === o,
                l = []
            let c, u, h, d
            for (c = n, u = n + i; c < u; ++c)
                (d = e[c]), (h = {}), (h[r.axis] = s || r.parse(a[c], c)), l.push(Bn(d, h, o, c))
            return l
        }

        function Wn(t) {
            return t && void 0 !== t.barStart && void 0 !== t.barEnd
        }

        function Hn(t, e, n, i) {
            let r = e.borderSkipped
            const o = {}
            if (!r) return void (t.borderSkipped = o)
            if (!0 === r) return void (t.borderSkipped = {top: !0, right: !0, bottom: !0, left: !0})
            const {
                start: a,
                end: s,
                reverse: l,
                top: c,
                bottom: u
            } = (function (t) {
                let e, n, i, r, o
                return (
                    t.horizontal
                        ? ((e = t.base > t.x), (n = 'left'), (i = 'right'))
                        : ((e = t.base < t.y), (n = 'bottom'), (i = 'top')),
                        e ? ((r = 'end'), (o = 'start')) : ((r = 'start'), (o = 'end')),
                        {start: n, end: i, reverse: e, top: r, bottom: o}
                )
            })(t)
            'middle' === r &&
            n &&
            ((t.enableBorderRadius = !0),
                (n._top || 0) === i
                    ? (r = c)
                    : (n._bottom || 0) === i
                        ? (r = u)
                        : ((o[$n(u, a, s, l)] = !0), (r = c))),
                (o[$n(r, a, s, l)] = !0),
                (t.borderSkipped = o)
        }

        function $n(t, e, n, i) {
            var r, o, a
            return (
                i
                    ? ((a = n), (t = Un((t = (r = t) === (o = e) ? a : r === a ? o : r), n, e)))
                    : (t = Un(t, e, n)),
                    t
            )
        }

        function Un(t, e, n) {
            return 'start' === t ? e : 'end' === t ? n : t
        }

        function Yn(t, {inflateAmount: e}, n) {
            t.inflateAmount = 'auto' === e ? (1 === n ? 0.33 : 0) : e
        }

        class Qn extends Fn {
            static id = 'bar'
            static defaults = {
                datasetElementType: !1,
                dataElementType: 'bar',
                categoryPercentage: 0.8,
                barPercentage: 0.9,
                grouped: !0,
                animations: {
                    numbers: {type: 'number', properties: ['x', 'y', 'base', 'width', 'height']}
                }
            }
            static overrides = {
                scales: {
                    _index_: {type: 'category', offset: !0, grid: {offset: !0}},
                    _value_: {type: 'linear', beginAtZero: !0}
                }
            }

            parsePrimitiveData(t, e, n, i) {
                return jn(t, e, n, i)
            }

            parseArrayData(t, e, n, i) {
                return jn(t, e, n, i)
            }

            parseObjectData(t, e, n, i) {
                const {iScale: r, vScale: o} = t,
                    {xAxisKey: a = 'x', yAxisKey: s = 'y'} = this._parsing,
                    l = 'x' === r.axis ? a : s,
                    c = 'x' === o.axis ? a : s,
                    u = []
                let h, d, f, p
                for (h = n, d = n + i; h < d; ++h)
                    (p = e[h]), (f = {}), (f[r.axis] = r.parse(Z(p, l), h)), u.push(Bn(Z(p, c), f, o, h))
                return u
            }

            updateRangeFromParsed(t, e, n, i) {
                super.updateRangeFromParsed(t, e, n, i)
                const r = n._custom
                r &&
                e === this._cachedMeta.vScale &&
                ((t.min = Math.min(t.min, r.min)), (t.max = Math.max(t.max, r.max)))
            }

            getMaxOverflow() {
                return 0
            }

            getLabelAndValue(t) {
                const e = this._cachedMeta,
                    {iScale: n, vScale: i} = e,
                    r = this.getParsed(t),
                    o = r._custom,
                    a = Wn(o) ? '[' + o.start + ', ' + o.end + ']' : '' + i.getLabelForValue(r[i.axis])
                return {label: '' + n.getLabelForValue(r[n.axis]), value: a}
            }

            initialize() {
                ;(this.enableOptionSharing = !0),
                    super.initialize(),
                    (this._cachedMeta.stack = this.getDataset().stack)
            }

            update(t) {
                const e = this._cachedMeta
                this.updateElements(e.data, 0, e.data.length, t)
            }

            updateElements(t, e, n, i) {
                const r = 'reset' === i,
                    {
                        index: o,
                        _cachedMeta: {vScale: a}
                    } = this,
                    s = a.getBasePixel(),
                    l = a.isHorizontal(),
                    c = this._getRuler(),
                    {sharedOptions: u, includeOptions: h} = this._getSharedOptions(e, i)
                for (let d = e; d < e + n; d++) {
                    const e = this.getParsed(d),
                        n = r || A(e[a.axis]) ? {base: s, head: s} : this._calculateBarValuePixels(d),
                        f = this._calculateBarIndexPixels(d, c),
                        p = (e._stacks || {})[a.axis],
                        g = {
                            horizontal: l,
                            base: n.base,
                            enableBorderRadius: !p || Wn(e._custom) || o === p._top || o === p._bottom,
                            x: l ? n.head : f.center,
                            y: l ? f.center : n.head,
                            height: l ? f.size : Math.abs(n.size),
                            width: l ? Math.abs(n.size) : f.size
                        }
                    h && (g.options = u || this.resolveDataElementOptions(d, t[d].active ? 'active' : i))
                    const m = g.options || t[d].options
                    Hn(g, m, p, o), Yn(g, m, c.ratio), this.updateElement(t[d], d, g, i)
                }
            }

            _getStacks(t, e) {
                const {iScale: n} = this._cachedMeta,
                    i = n.getMatchingVisibleMetas(this._type).filter(t => t.controller.options.grouped),
                    r = n.options.stacked,
                    o = [],
                    a = t => {
                        const n = t.controller.getParsed(e),
                            i = n && n[t.vScale.axis]
                        if (A(i) || isNaN(i)) return !0
                    }
                for (const n of i)
                    if (
                        (void 0 === e || !a(n)) &&
                        ((!1 === r || -1 === o.indexOf(n.stack) || (void 0 === r && void 0 === n.stack)) &&
                        o.push(n.stack),
                        n.index === t)
                    )
                        break
                return o.length || o.push(void 0), o
            }

            _getStackCount(t) {
                return this._getStacks(void 0, t).length
            }

            _getStackIndex(t, e, n) {
                const i = this._getStacks(t, n),
                    r = void 0 !== e ? i.indexOf(e) : -1
                return -1 === r ? i.length - 1 : r
            }

            _getRuler() {
                const t = this.options,
                    e = this._cachedMeta,
                    n = e.iScale,
                    i = []
                let r, o
                for (r = 0, o = e.data.length; r < o; ++r)
                    i.push(n.getPixelForValue(this.getParsed(r)[n.axis], r))
                const a = t.barThickness
                return {
                    min: a || Vn(e),
                    pixels: i,
                    start: n._startPixel,
                    end: n._endPixel,
                    stackCount: this._getStackCount(),
                    scale: n,
                    grouped: t.grouped,
                    ratio: a ? 1 : t.categoryPercentage * t.barPercentage
                }
            }

            _calculateBarValuePixels(t) {
                const {
                        _cachedMeta: {vScale: e, _stacked: n, index: i},
                        options: {base: r, minBarLength: o}
                    } = this,
                    a = r || 0,
                    s = this.getParsed(t),
                    l = s._custom,
                    c = Wn(l)
                let u,
                    h,
                    d = s[e.axis],
                    f = 0,
                    p = n ? this.applyStack(e, s, n) : d
                p !== d && ((f = p - d), (p = d)),
                c &&
                ((d = l.barStart),
                    (p = l.barEnd - l.barStart),
                0 !== d && dt(d) !== dt(l.barEnd) && (f = 0),
                    (f += d))
                const g = A(r) || c ? f : r
                let m = e.getPixelForValue(g)
                if (
                    ((u = this.chart.getDataVisibility(t) ? e.getPixelForValue(f + p) : m),
                        (h = u - m),
                    Math.abs(h) < o)
                ) {
                    ;(h =
                        (function (t, e, n) {
                            return 0 !== t ? dt(t) : (e.isHorizontal() ? 1 : -1) * (e.min >= n ? 1 : -1)
                        })(h, e, a) * o),
                    d === a && (m -= h / 2)
                    const t = e.getPixelForDecimal(0),
                        r = e.getPixelForDecimal(1),
                        l = Math.min(t, r),
                        f = Math.max(t, r)
                    ;(m = Math.max(Math.min(m, f), l)),
                        (u = m + h),
                    n &&
                    !c &&
                    (s._stacks[e.axis]._visualValues[i] = e.getValueForPixel(u) - e.getValueForPixel(m))
                }
                if (m === e.getPixelForValue(a)) {
                    const t = (dt(h) * e.getLineWidthForValue(a)) / 2
                    ;(m += t), (h -= t)
                }
                return {size: h, base: m, head: u, center: u + h / 2}
            }

            _calculateBarIndexPixels(t, e) {
                const n = e.scale,
                    i = this.options,
                    r = i.skipNull,
                    o = B(i.maxBarThickness, 1 / 0)
                let a, s
                if (e.grouped) {
                    const n = r ? this._getStackCount(t) : e.stackCount,
                        l =
                            'flex' === i.barThickness
                                ? (function (t, e, n, i) {
                                    const r = e.pixels,
                                        o = r[t]
                                    let a = t > 0 ? r[t - 1] : null,
                                        s = t < r.length - 1 ? r[t + 1] : null
                                    const l = n.categoryPercentage
                                    null === a && (a = o - (null === s ? e.end - e.start : s - o)),
                                    null === s && (s = o + o - a)
                                    const c = o - ((o - Math.min(a, s)) / 2) * l
                                    return {
                                        chunk: ((Math.abs(s - a) / 2) * l) / i,
                                        ratio: n.barPercentage,
                                        start: c
                                    }
                                })(t, e, i, n)
                                : (function (t, e, n, i) {
                                    const r = n.barThickness
                                    let o, a
                                    return (
                                        A(r)
                                            ? ((o = e.min * n.categoryPercentage), (a = n.barPercentage))
                                            : ((o = r * i), (a = 1)),
                                            {chunk: o / i, ratio: a, start: e.pixels[t] - o / 2}
                                    )
                                })(t, e, i, n),
                        c = this._getStackIndex(this.index, this._cachedMeta.stack, r ? t : void 0)
                    ;(a = l.start + l.chunk * c + l.chunk / 2), (s = Math.min(o, l.chunk * l.ratio))
                } else
                    (a = n.getPixelForValue(this.getParsed(t)[n.axis], t)), (s = Math.min(o, e.min * e.ratio))
                return {base: a - s / 2, head: a + s / 2, center: a, size: s}
            }

            draw() {
                const t = this._cachedMeta,
                    e = t.vScale,
                    n = t.data,
                    i = n.length
                let r = 0
                for (; r < i; ++r) null !== this.getParsed(r)[e.axis] && n[r].draw(this._ctx)
            }
        }

        class Xn extends Fn {
            static id = 'doughnut'
            static defaults = {
                datasetElementType: !1,
                dataElementType: 'arc',
                animation: {animateRotate: !0, animateScale: !1},
                animations: {
                    numbers: {
                        type: 'number',
                        properties: [
                            'circumference',
                            'endAngle',
                            'innerRadius',
                            'outerRadius',
                            'startAngle',
                            'x',
                            'y',
                            'offset',
                            'borderWidth',
                            'spacing'
                        ]
                    }
                },
                cutout: '50%',
                rotation: 0,
                circumference: 360,
                radius: '100%',
                spacing: 0,
                indexAxis: 'r'
            }
            static descriptors = {
                _scriptable: t => 'spacing' !== t,
                _indexable: t =>
                    'spacing' !== t && !t.startsWith('borderDash') && !t.startsWith('hoverBorderDash')
            }
            static overrides = {
                aspectRatio: 1,
                plugins: {
                    legend: {
                        labels: {
                            generateLabels(t) {
                                const e = t.data
                                if (e.labels.length && e.datasets.length) {
                                    const {
                                        labels: {pointStyle: n, color: i}
                                    } = t.legend.options
                                    return e.labels.map((e, r) => {
                                        const o = t.getDatasetMeta(0).controller.getStyle(r)
                                        return {
                                            text: e,
                                            fillStyle: o.backgroundColor,
                                            strokeStyle: o.borderColor,
                                            fontColor: i,
                                            lineWidth: o.borderWidth,
                                            pointStyle: n,
                                            hidden: !t.getDataVisibility(r),
                                            index: r
                                        }
                                    })
                                }
                                return []
                            }
                        },
                        onClick(t, e, n) {
                            n.chart.toggleDataVisibility(e.index), n.chart.update()
                        }
                    }
                }
            }

            constructor(t, e) {
                super(t, e),
                    (this.enableOptionSharing = !0),
                    (this.innerRadius = void 0),
                    (this.outerRadius = void 0),
                    (this.offsetX = void 0),
                    (this.offsetY = void 0)
            }

            linkScales() {
            }

            parse(t, e) {
                const n = this.getDataset().data,
                    i = this._cachedMeta
                if (!1 === this._parsing) i._parsed = n
                else {
                    let r,
                        o,
                        a = t => +n[t]
                    if (I(n[t])) {
                        const {key: t = 'value'} = this._parsing
                        a = e => +Z(n[e], t)
                    }
                    for (r = t, o = t + e; r < o; ++r) i._parsed[r] = a(r)
                }
            }

            _getRotation() {
                return bt(this.options.rotation - 90)
            }

            _getCircumference() {
                return bt(this.options.circumference)
            }

            _getRotationExtents() {
                let t = rt,
                    e = -rt
                for (let n = 0; n < this.chart.data.datasets.length; ++n)
                    if (this.chart.isDatasetVisible(n) && this.chart.getDatasetMeta(n).type === this._type) {
                        const i = this.chart.getDatasetMeta(n).controller,
                            r = i._getRotation(),
                            o = i._getCircumference()
                        ;(t = Math.min(t, r)), (e = Math.max(e, r + o))
                    }
                return {rotation: t, circumference: e - t}
            }

            update(t) {
                const e = this.chart,
                    {chartArea: n} = e,
                    i = this._cachedMeta,
                    r = i.data,
                    o = this.getMaxBorderWidth() + this.getMaxOffset(r) + this.options.spacing,
                    a = Math.max((Math.min(n.width, n.height) - o) / 2, 0),
                    s = Math.min(
                        ((c = a),
                            'string' == typeof (l = this.options.cutout) && l.endsWith('%')
                                ? parseFloat(l) / 100
                                : +l / c),
                        1
                    )
                var l, c
                const u = this._getRingWeight(this.index),
                    {circumference: h, rotation: d} = this._getRotationExtents(),
                    {
                        ratioX: f,
                        ratioY: p,
                        offsetX: g,
                        offsetY: m
                    } = (function (t, e, n) {
                        let i = 1,
                            r = 1,
                            o = 0,
                            a = 0
                        if (e < rt) {
                            const s = t,
                                l = s + e,
                                c = Math.cos(s),
                                u = Math.sin(s),
                                h = Math.cos(l),
                                d = Math.sin(l),
                                f = (t, e, i) => (St(t, s, l, !0) ? 1 : Math.max(e, e * n, i, i * n)),
                                p = (t, e, i) => (St(t, s, l, !0) ? -1 : Math.min(e, e * n, i, i * n)),
                                g = f(0, c, h),
                                m = f(lt, u, d),
                                b = p(it, c, h),
                                y = p(it + lt, u, d)
                            ;(i = (g - b) / 2), (r = (m - y) / 2), (o = -(g + b) / 2), (a = -(m + y) / 2)
                        }
                        return {ratioX: i, ratioY: r, offsetX: o, offsetY: a}
                    })(d, h, s),
                    b = (n.width - o) / f,
                    y = (n.height - o) / p,
                    v = Math.max(Math.min(b, y) / 2, 0),
                    x = j(this.options.radius, v),
                    _ = (x - Math.max(x * s, 0)) / this._getVisibleDatasetWeightTotal()
                ;(this.offsetX = g * x),
                    (this.offsetY = m * x),
                    (i.total = this.calculateTotal()),
                    (this.outerRadius = x - _ * this._getRingWeightOffset(this.index)),
                    (this.innerRadius = Math.max(this.outerRadius - _ * u, 0)),
                    this.updateElements(r, 0, r.length, t)
            }

            _circumference(t, e) {
                const n = this.options,
                    i = this._cachedMeta,
                    r = this._getCircumference()
                return (e && n.animation.animateRotate) ||
                !this.chart.getDataVisibility(t) ||
                null === i._parsed[t] ||
                i.data[t].hidden
                    ? 0
                    : this.calculateCircumference((i._parsed[t] * r) / rt)
            }

            updateElements(t, e, n, i) {
                const r = 'reset' === i,
                    o = this.chart,
                    a = o.chartArea,
                    s = o.options.animation,
                    l = (a.left + a.right) / 2,
                    c = (a.top + a.bottom) / 2,
                    u = r && s.animateScale,
                    h = u ? 0 : this.innerRadius,
                    d = u ? 0 : this.outerRadius,
                    {sharedOptions: f, includeOptions: p} = this._getSharedOptions(e, i)
                let g,
                    m = this._getRotation()
                for (g = 0; g < e; ++g) m += this._circumference(g, r)
                for (g = e; g < e + n; ++g) {
                    const e = this._circumference(g, r),
                        n = t[g],
                        o = {
                            x: l + this.offsetX,
                            y: c + this.offsetY,
                            startAngle: m,
                            endAngle: m + e,
                            circumference: e,
                            outerRadius: d,
                            innerRadius: h
                        }
                    p && (o.options = f || this.resolveDataElementOptions(g, n.active ? 'active' : i)),
                        (m += e),
                        this.updateElement(n, g, o, i)
                }
            }

            calculateTotal() {
                const t = this._cachedMeta,
                    e = t.data
                let n,
                    i = 0
                for (n = 0; n < e.length; n++) {
                    const r = t._parsed[n]
                    null === r ||
                    isNaN(r) ||
                    !this.chart.getDataVisibility(n) ||
                    e[n].hidden ||
                    (i += Math.abs(r))
                }
                return i
            }

            calculateCircumference(t) {
                const e = this._cachedMeta.total
                return e > 0 && !isNaN(t) ? rt * (Math.abs(t) / e) : 0
            }

            getLabelAndValue(t) {
                const e = this._cachedMeta,
                    n = this.chart,
                    i = n.data.labels || [],
                    r = qt(e._parsed[t], n.options.locale)
                return {label: i[t] || '', value: r}
            }

            getMaxBorderWidth(t) {
                let e = 0
                const n = this.chart
                let i, r, o, a, s
                if (!t)
                    for (i = 0, r = n.data.datasets.length; i < r; ++i)
                        if (n.isDatasetVisible(i)) {
                            ;(o = n.getDatasetMeta(i)), (t = o.data), (a = o.controller)
                            break
                        }
                if (!t) return 0
                for (i = 0, r = t.length; i < r; ++i)
                    (s = a.resolveDataElementOptions(i)),
                    'inner' !== s.borderAlign &&
                    (e = Math.max(e, s.borderWidth || 0, s.hoverBorderWidth || 0))
                return e
            }

            getMaxOffset(t) {
                let e = 0
                for (let n = 0, i = t.length; n < i; ++n) {
                    const t = this.resolveDataElementOptions(n)
                    e = Math.max(e, t.offset || 0, t.hoverOffset || 0)
                }
                return e
            }

            _getRingWeightOffset(t) {
                let e = 0
                for (let n = 0; n < t; ++n) this.chart.isDatasetVisible(n) && (e += this._getRingWeight(n))
                return e
            }

            _getRingWeight(t) {
                return Math.max(B(this.chart.data.datasets[t].weight, 1), 0)
            }

            _getVisibleDatasetWeightTotal() {
                return this._getRingWeightOffset(this.chart.data.datasets.length) || 1
            }
        }

        class qn extends Fn {
            static id = 'polarArea'
            static defaults = {
                dataElementType: 'arc',
                animation: {animateRotate: !0, animateScale: !0},
                animations: {
                    numbers: {
                        type: 'number',
                        properties: ['x', 'y', 'startAngle', 'endAngle', 'innerRadius', 'outerRadius']
                    }
                },
                indexAxis: 'r',
                startAngle: 0
            }
            static overrides = {
                aspectRatio: 1,
                plugins: {
                    legend: {
                        labels: {
                            generateLabels(t) {
                                const e = t.data
                                if (e.labels.length && e.datasets.length) {
                                    const {
                                        labels: {pointStyle: n, color: i}
                                    } = t.legend.options
                                    return e.labels.map((e, r) => {
                                        const o = t.getDatasetMeta(0).controller.getStyle(r)
                                        return {
                                            text: e,
                                            fillStyle: o.backgroundColor,
                                            strokeStyle: o.borderColor,
                                            fontColor: i,
                                            lineWidth: o.borderWidth,
                                            pointStyle: n,
                                            hidden: !t.getDataVisibility(r),
                                            index: r
                                        }
                                    })
                                }
                                return []
                            }
                        },
                        onClick(t, e, n) {
                            n.chart.toggleDataVisibility(e.index), n.chart.update()
                        }
                    }
                },
                scales: {
                    r: {
                        type: 'radialLinear',
                        angleLines: {display: !1},
                        beginAtZero: !0,
                        grid: {circular: !0},
                        pointLabels: {display: !1},
                        startAngle: 0
                    }
                }
            }

            constructor(t, e) {
                super(t, e), (this.innerRadius = void 0), (this.outerRadius = void 0)
            }

            getLabelAndValue(t) {
                const e = this._cachedMeta,
                    n = this.chart,
                    i = n.data.labels || [],
                    r = qt(e._parsed[t].r, n.options.locale)
                return {label: i[t] || '', value: r}
            }

            parseObjectData(t, e, n, i) {
                return He.bind(this)(t, e, n, i)
            }

            update(t) {
                const e = this._cachedMeta.data
                this._updateRadius(), this.updateElements(e, 0, e.length, t)
            }

            getMinMax() {
                const t = this._cachedMeta,
                    e = {min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY}
                return (
                    t.data.forEach((t, n) => {
                        const i = this.getParsed(n).r
                        !isNaN(i) &&
                        this.chart.getDataVisibility(n) &&
                        (i < e.min && (e.min = i), i > e.max && (e.max = i))
                    }),
                        e
                )
            }

            _updateRadius() {
                const t = this.chart,
                    e = t.chartArea,
                    n = t.options,
                    i = Math.min(e.right - e.left, e.bottom - e.top),
                    r = Math.max(i / 2, 0),
                    o =
                        (r - Math.max(n.cutoutPercentage ? (r / 100) * n.cutoutPercentage : 1, 0)) /
                        t.getVisibleDatasetCount()
                ;(this.outerRadius = r - o * this.index), (this.innerRadius = this.outerRadius - o)
            }

            updateElements(t, e, n, i) {
                const r = 'reset' === i,
                    o = this.chart,
                    a = o.options.animation,
                    s = this._cachedMeta.rScale,
                    l = s.xCenter,
                    c = s.yCenter,
                    u = s.getIndexAngle(0) - 0.5 * it
                let h,
                    d = u
                const f = 360 / this.countVisibleElements()
                for (h = 0; h < e; ++h) d += this._computeAngle(h, i, f)
                for (h = e; h < e + n; h++) {
                    const e = t[h]
                    let n = d,
                        p = d + this._computeAngle(h, i, f),
                        g = o.getDataVisibility(h) ? s.getDistanceFromCenterForValue(this.getParsed(h).r) : 0
                    ;(d = p), r && (a.animateScale && (g = 0), a.animateRotate && (n = p = u))
                    const m = {
                        x: l,
                        y: c,
                        innerRadius: 0,
                        outerRadius: g,
                        startAngle: n,
                        endAngle: p,
                        options: this.resolveDataElementOptions(h, e.active ? 'active' : i)
                    }
                    this.updateElement(e, h, m, i)
                }
            }

            countVisibleElements() {
                const t = this._cachedMeta
                let e = 0
                return (
                    t.data.forEach((t, n) => {
                        !isNaN(this.getParsed(n).r) && this.chart.getDataVisibility(n) && e++
                    }),
                        e
                )
            }

            _computeAngle(t, e, n) {
                return this.chart.getDataVisibility(t)
                    ? bt(this.resolveDataElementOptions(t, e).angle || n)
                    : 0
            }
        }

        var Kn = Object.freeze({
            __proto__: null,
            BarController: Qn,
            BubbleController: class extends Fn {
                static id = 'bubble'
                static defaults = {
                    datasetElementType: !1,
                    dataElementType: 'point',
                    animations: {
                        numbers: {type: 'number', properties: ['x', 'y', 'borderWidth', 'radius']}
                    }
                }
                static overrides = {scales: {x: {type: 'linear'}, y: {type: 'linear'}}}

                initialize() {
                    ;(this.enableOptionSharing = !0), super.initialize()
                }

                parsePrimitiveData(t, e, n, i) {
                    const r = super.parsePrimitiveData(t, e, n, i)
                    for (let t = 0; t < r.length; t++)
                        r[t]._custom = this.resolveDataElementOptions(t + n).radius
                    return r
                }

                parseArrayData(t, e, n, i) {
                    const r = super.parseArrayData(t, e, n, i)
                    for (let t = 0; t < r.length; t++) {
                        const i = e[n + t]
                        r[t]._custom = B(i[2], this.resolveDataElementOptions(t + n).radius)
                    }
                    return r
                }

                parseObjectData(t, e, n, i) {
                    const r = super.parseObjectData(t, e, n, i)
                    for (let t = 0; t < r.length; t++) {
                        const i = e[n + t]
                        r[t]._custom = B(i && i.r && +i.r, this.resolveDataElementOptions(t + n).radius)
                    }
                    return r
                }

                getMaxOverflow() {
                    const t = this._cachedMeta.data
                    let e = 0
                    for (let n = t.length - 1; n >= 0; --n)
                        e = Math.max(e, t[n].size(this.resolveDataElementOptions(n)) / 2)
                    return e > 0 && e
                }

                getLabelAndValue(t) {
                    const e = this._cachedMeta,
                        n = this.chart.data.labels || [],
                        {xScale: i, yScale: r} = e,
                        o = this.getParsed(t),
                        a = i.getLabelForValue(o.x),
                        s = r.getLabelForValue(o.y),
                        l = o._custom
                    return {label: n[t] || '', value: '(' + a + ', ' + s + (l ? ', ' + l : '') + ')'}
                }

                update(t) {
                    const e = this._cachedMeta.data
                    this.updateElements(e, 0, e.length, t)
                }

                updateElements(t, e, n, i) {
                    const r = 'reset' === i,
                        {iScale: o, vScale: a} = this._cachedMeta,
                        {sharedOptions: s, includeOptions: l} = this._getSharedOptions(e, i),
                        c = o.axis,
                        u = a.axis
                    for (let h = e; h < e + n; h++) {
                        const e = t[h],
                            n = !r && this.getParsed(h),
                            d = {},
                            f = (d[c] = r ? o.getPixelForDecimal(0.5) : o.getPixelForValue(n[c])),
                            p = (d[u] = r ? a.getBasePixel() : a.getPixelForValue(n[u]))
                        ;(d.skip = isNaN(f) || isNaN(p)),
                        l &&
                        ((d.options = s || this.resolveDataElementOptions(h, e.active ? 'active' : i)),
                        r && (d.options.radius = 0)),
                            this.updateElement(e, h, d, i)
                    }
                }

                resolveDataElementOptions(t, e) {
                    const n = this.getParsed(t)
                    let i = super.resolveDataElementOptions(t, e)
                    i.$shared && (i = Object.assign({}, i, {$shared: !1}))
                    const r = i.radius
                    return 'active' !== e && (i.radius = 0), (i.radius += B(n && n._custom, r)), i
                }
            },
            DoughnutController: Xn,
            LineController: class extends Fn {
                static id = 'line'
                static defaults = {
                    datasetElementType: 'line',
                    dataElementType: 'point',
                    showLine: !0,
                    spanGaps: !1
                }
                static overrides = {
                    scales: {_index_: {type: 'category'}, _value_: {type: 'linear'}}
                }

                initialize() {
                    ;(this.enableOptionSharing = !0), (this.supportsDecimation = !0), super.initialize()
                }

                update(t) {
                    const e = this._cachedMeta,
                        {dataset: n, data: i = [], _dataset: r} = e,
                        o = this.chart._animationsDisabled
                    let {start: a, count: s} = It(e, i, o)
                    ;(this._drawStart = a),
                        (this._drawCount = s),
                    Ft(e) && ((a = 0), (s = i.length)),
                        (n._chart = this.chart),
                        (n._datasetIndex = this.index),
                        (n._decimated = !!r._decimated),
                        (n.points = i)
                    const l = this.resolveDatasetElementOptions(t)
                    this.options.showLine || (l.borderWidth = 0),
                        (l.segment = this.options.segment),
                        this.updateElement(n, void 0, {animated: !o, options: l}, t),
                        this.updateElements(i, a, s, t)
                }

                updateElements(t, e, n, i) {
                    const r = 'reset' === i,
                        {iScale: o, vScale: a, _stacked: s, _dataset: l} = this._cachedMeta,
                        {sharedOptions: c, includeOptions: u} = this._getSharedOptions(e, i),
                        h = o.axis,
                        d = a.axis,
                        {spanGaps: f, segment: p} = this.options,
                        g = gt(f) ? f : Number.POSITIVE_INFINITY,
                        m = this.chart._animationsDisabled || r || 'none' === i,
                        b = e + n,
                        y = t.length
                    let v = e > 0 && this.getParsed(e - 1)
                    for (let n = 0; n < y; ++n) {
                        const f = t[n],
                            y = m ? f : {}
                        if (n < e || n >= b) {
                            y.skip = !0
                            continue
                        }
                        const x = this.getParsed(n),
                            _ = A(x[d]),
                            w = (y[h] = o.getPixelForValue(x[h], n)),
                            k = (y[d] =
                                r || _
                                    ? a.getBasePixel()
                                    : a.getPixelForValue(s ? this.applyStack(a, x, s) : x[d], n))
                        ;(y.skip = isNaN(w) || isNaN(k) || _),
                            (y.stop = n > 0 && Math.abs(x[h] - v[h]) > g),
                        p && ((y.parsed = x), (y.raw = l.data[n])),
                        u && (y.options = c || this.resolveDataElementOptions(n, f.active ? 'active' : i)),
                        m || this.updateElement(f, n, y, i),
                            (v = x)
                    }
                }

                getMaxOverflow() {
                    const t = this._cachedMeta,
                        e = t.dataset,
                        n = (e.options && e.options.borderWidth) || 0,
                        i = t.data || []
                    if (!i.length) return n
                    const r = i[0].size(this.resolveDataElementOptions(0)),
                        o = i[i.length - 1].size(this.resolveDataElementOptions(i.length - 1))
                    return Math.max(n, r, o) / 2
                }

                draw() {
                    const t = this._cachedMeta
                    t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis), super.draw()
                }
            },
            PieController: class extends Xn {
                static id = 'pie'
                static defaults = {cutout: 0, rotation: 0, circumference: 360, radius: '100%'}
            },
            PolarAreaController: qn,
            RadarController: class extends Fn {
                static id = 'radar'
                static defaults = {
                    datasetElementType: 'line',
                    dataElementType: 'point',
                    indexAxis: 'r',
                    showLine: !0,
                    elements: {line: {fill: 'start'}}
                }
                static overrides = {aspectRatio: 1, scales: {r: {type: 'radialLinear'}}}

                getLabelAndValue(t) {
                    const e = this._cachedMeta.vScale,
                        n = this.getParsed(t)
                    return {label: e.getLabels()[t], value: '' + e.getLabelForValue(n[e.axis])}
                }

                parseObjectData(t, e, n, i) {
                    return He.bind(this)(t, e, n, i)
                }

                update(t) {
                    const e = this._cachedMeta,
                        n = e.dataset,
                        i = e.data || [],
                        r = e.iScale.getLabels()
                    if (((n.points = i), 'resize' !== t)) {
                        const e = this.resolveDatasetElementOptions(t)
                        this.options.showLine || (e.borderWidth = 0)
                        const o = {_loop: !0, _fullLoop: r.length === i.length, options: e}
                        this.updateElement(n, void 0, o, t)
                    }
                    this.updateElements(i, 0, i.length, t)
                }

                updateElements(t, e, n, i) {
                    const r = this._cachedMeta.rScale,
                        o = 'reset' === i
                    for (let a = e; a < e + n; a++) {
                        const e = t[a],
                            n = this.resolveDataElementOptions(a, e.active ? 'active' : i),
                            s = r.getPointPositionForValue(a, this.getParsed(a).r),
                            l = o ? r.xCenter : s.x,
                            c = o ? r.yCenter : s.y,
                            u = {x: l, y: c, angle: s.angle, skip: isNaN(l) || isNaN(c), options: n}
                        this.updateElement(e, a, u, i)
                    }
                }
            },
            ScatterController: class extends Fn {
                static id = 'scatter'
                static defaults = {
                    datasetElementType: !1,
                    dataElementType: 'point',
                    showLine: !1,
                    fill: !1
                }
                static overrides = {
                    interaction: {mode: 'point'},
                    scales: {x: {type: 'linear'}, y: {type: 'linear'}}
                }

                getLabelAndValue(t) {
                    const e = this._cachedMeta,
                        n = this.chart.data.labels || [],
                        {xScale: i, yScale: r} = e,
                        o = this.getParsed(t),
                        a = i.getLabelForValue(o.x),
                        s = r.getLabelForValue(o.y)
                    return {label: n[t] || '', value: '(' + a + ', ' + s + ')'}
                }

                update(t) {
                    const e = this._cachedMeta,
                        {data: n = []} = e,
                        i = this.chart._animationsDisabled
                    let {start: r, count: o} = It(e, n, i)
                    if (
                        ((this._drawStart = r),
                            (this._drawCount = o),
                        Ft(e) && ((r = 0), (o = n.length)),
                            this.options.showLine)
                    ) {
                        this.datasetElementType || this.addElements()
                        const {dataset: r, _dataset: o} = e
                        ;(r._chart = this.chart),
                            (r._datasetIndex = this.index),
                            (r._decimated = !!o._decimated),
                            (r.points = n)
                        const a = this.resolveDatasetElementOptions(t)
                        ;(a.segment = this.options.segment),
                            this.updateElement(r, void 0, {animated: !i, options: a}, t)
                    } else this.datasetElementType && (delete e.dataset, (this.datasetElementType = !1))
                    this.updateElements(n, r, o, t)
                }

                addElements() {
                    const {showLine: t} = this.options
                    !this.datasetElementType &&
                    t &&
                    (this.datasetElementType = this.chart.registry.getElement('line')),
                        super.addElements()
                }

                updateElements(t, e, n, i) {
                    const r = 'reset' === i,
                        {iScale: o, vScale: a, _stacked: s, _dataset: l} = this._cachedMeta,
                        c = this.resolveDataElementOptions(e, i),
                        u = this.getSharedOptions(c),
                        h = this.includeOptions(i, u),
                        d = o.axis,
                        f = a.axis,
                        {spanGaps: p, segment: g} = this.options,
                        m = gt(p) ? p : Number.POSITIVE_INFINITY,
                        b = this.chart._animationsDisabled || r || 'none' === i
                    let y = e > 0 && this.getParsed(e - 1)
                    for (let c = e; c < e + n; ++c) {
                        const e = t[c],
                            n = this.getParsed(c),
                            p = b ? e : {},
                            v = A(n[f]),
                            x = (p[d] = o.getPixelForValue(n[d], c)),
                            _ = (p[f] =
                                r || v
                                    ? a.getBasePixel()
                                    : a.getPixelForValue(s ? this.applyStack(a, n, s) : n[f], c))
                        ;(p.skip = isNaN(x) || isNaN(_) || v),
                            (p.stop = c > 0 && Math.abs(n[d] - y[d]) > m),
                        g && ((p.parsed = n), (p.raw = l.data[c])),
                        h && (p.options = u || this.resolveDataElementOptions(c, e.active ? 'active' : i)),
                        b || this.updateElement(e, c, p, i),
                            (y = n)
                    }
                    this.updateSharedOptions(u, i, c)
                }

                getMaxOverflow() {
                    const t = this._cachedMeta,
                        e = t.data || []
                    if (!this.options.showLine) {
                        let t = 0
                        for (let n = e.length - 1; n >= 0; --n)
                            t = Math.max(t, e[n].size(this.resolveDataElementOptions(n)) / 2)
                        return t > 0 && t
                    }
                    const n = t.dataset,
                        i = (n.options && n.options.borderWidth) || 0
                    if (!e.length) return i
                    const r = e[0].size(this.resolveDataElementOptions(0)),
                        o = e[e.length - 1].size(this.resolveDataElementOptions(e.length - 1))
                    return Math.max(i, r, o) / 2
                }
            }
        })

        function Gn() {
            throw new Error(
                'This method is not implemented: Check that a complete date adapter is provided.'
            )
        }

        class Zn {
            options

            constructor(t) {
                this.options = t || {}
            }

            static override(t) {
                Object.assign(Zn.prototype, t)
            }

            init() {
            }

            formats() {
                return Gn()
            }

            parse() {
                return Gn()
            }

            format() {
                return Gn()
            }

            add() {
                return Gn()
            }

            diff() {
                return Gn()
            }

            startOf() {
                return Gn()
            }

            endOf() {
                return Gn()
            }
        }

        var Jn = Zn

        function ti(t, e, n, i) {
            const {controller: r, data: o, _sorted: a} = t,
                s = r._cachedMeta.iScale
            if (s && e === s.axis && 'r' !== e && a && o.length) {
                const t = s._reversePixels ? Lt : Pt
                if (!i) return t(o, e, n)
                if (r._sharedOptions) {
                    const i = o[0],
                        r = 'function' == typeof i.getRange && i.getRange(e)
                    if (r) {
                        const i = t(o, e, n - r),
                            a = t(o, e, n + r)
                        return {lo: i.lo, hi: a.hi}
                    }
                }
            }
            return {lo: 0, hi: o.length - 1}
        }

        function ei(t, e, n, i, r) {
            const o = t.getSortedVisibleDatasetMetas(),
                a = n[e]
            for (let t = 0, n = o.length; t < n; ++t) {
                const {index: n, data: s} = o[t],
                    {lo: l, hi: c} = ti(o[t], e, a, r)
                for (let t = l; t <= c; ++t) {
                    const e = s[t]
                    e.skip || i(e, n, t)
                }
            }
        }

        function ni(t, e, n, i, r) {
            const o = []
            return r || t.isPointInArea(e)
                ? (ei(
                    t,
                    n,
                    e,
                    function (n, a, s) {
                        ;(r || ue(n, t.chartArea, 0)) &&
                        n.inRange(e.x, e.y, i) &&
                        o.push({element: n, datasetIndex: a, index: s})
                    },
                    !0
                ),
                    o)
                : o
        }

        function ii(t, e, n, i, r, o) {
            return o || t.isPointInArea(e)
                ? 'r' !== n || i
                    ? (function (t, e, n, i, r, o) {
                        let a = []
                        const s = (function (t) {
                            const e = -1 !== t.indexOf('x'),
                                n = -1 !== t.indexOf('y')
                            return function (t, i) {
                                const r = e ? Math.abs(t.x - i.x) : 0,
                                    o = n ? Math.abs(t.y - i.y) : 0
                                return Math.sqrt(Math.pow(r, 2) + Math.pow(o, 2))
                            }
                        })(n)
                        let l = Number.POSITIVE_INFINITY
                        return (
                            ei(t, n, e, function (n, c, u) {
                                const h = n.inRange(e.x, e.y, r)
                                if (i && !h) return
                                const d = n.getCenterPoint(r)
                                if (!o && !t.isPointInArea(d) && !h) return
                                const f = s(e, d)
                                f < l
                                    ? ((a = [{element: n, datasetIndex: c, index: u}]), (l = f))
                                    : f === l && a.push({element: n, datasetIndex: c, index: u})
                            }),
                                a
                        )
                    })(t, e, n, i, r, o)
                    : (function (t, e, n, i) {
                        let r = []
                        return (
                            ei(t, n, e, function (t, n, o) {
                                const {startAngle: a, endAngle: s} = t.getProps(['startAngle', 'endAngle'], i),
                                    {angle: l} = xt(t, {x: e.x, y: e.y})
                                St(l, a, s) && r.push({element: t, datasetIndex: n, index: o})
                            }),
                                r
                        )
                    })(t, e, n, r)
                : []
        }

        function ri(t, e, n, i, r) {
            const o = [],
                a = 'x' === n ? 'inXRange' : 'inYRange'
            let s = !1
            return (
                ei(t, n, e, (t, i, l) => {
                    t[a](e[n], r) &&
                    (o.push({element: t, datasetIndex: i, index: l}), (s = s || t.inRange(e.x, e.y, r)))
                }),
                    i && !s ? [] : o
            )
        }

        var oi = {
            evaluateInteractionItems: ei,
            modes: {
                index(t, e, n, i) {
                    const r = rn(e, t),
                        o = n.axis || 'x',
                        a = n.includeInvisible || !1,
                        s = n.intersect ? ni(t, r, o, i, a) : ii(t, r, o, !1, i, a),
                        l = []
                    return s.length
                        ? (t.getSortedVisibleDatasetMetas().forEach(t => {
                            const e = s[0].index,
                                n = t.data[e]
                            n && !n.skip && l.push({element: n, datasetIndex: t.index, index: e})
                        }),
                            l)
                        : []
                },
                dataset(t, e, n, i) {
                    const r = rn(e, t),
                        o = n.axis || 'xy',
                        a = n.includeInvisible || !1
                    let s = n.intersect ? ni(t, r, o, i, a) : ii(t, r, o, !1, i, a)
                    if (s.length > 0) {
                        const e = s[0].datasetIndex,
                            n = t.getDatasetMeta(e).data
                        s = []
                        for (let t = 0; t < n.length; ++t) s.push({element: n[t], datasetIndex: e, index: t})
                    }
                    return s
                },
                point: (t, e, n, i) => ni(t, rn(e, t), n.axis || 'xy', i, n.includeInvisible || !1),
                nearest(t, e, n, i) {
                    const r = rn(e, t),
                        o = n.axis || 'xy',
                        a = n.includeInvisible || !1
                    return ii(t, r, o, n.intersect, i, a)
                },
                x: (t, e, n, i) => ri(t, rn(e, t), 'x', n.intersect, i),
                y: (t, e, n, i) => ri(t, rn(e, t), 'y', n.intersect, i)
            }
        }
        const ai = ['left', 'top', 'right', 'bottom']

        function si(t, e) {
            return t.filter(t => t.pos === e)
        }

        function li(t, e) {
            return t.filter(t => -1 === ai.indexOf(t.pos) && t.box.axis === e)
        }

        function ci(t, e) {
            return t.sort((t, n) => {
                const i = e ? n : t,
                    r = e ? t : n
                return i.weight === r.weight ? i.index - r.index : i.weight - r.weight
            })
        }

        function ui(t, e, n, i) {
            return Math.max(t[n], e[n]) + Math.max(t[i], e[i])
        }

        function hi(t, e) {
            ;(t.top = Math.max(t.top, e.top)),
                (t.left = Math.max(t.left, e.left)),
                (t.bottom = Math.max(t.bottom, e.bottom)),
                (t.right = Math.max(t.right, e.right))
        }

        function di(t, e, n, i) {
            const {pos: r, box: o} = n,
                a = t.maxPadding
            if (!I(r)) {
                n.size && (t[r] -= n.size)
                const e = i[n.stack] || {size: 0, count: 1}
                ;(e.size = Math.max(e.size, n.horizontal ? o.height : o.width)),
                    (n.size = e.size / e.count),
                    (t[r] += n.size)
            }
            o.getPadding && hi(a, o.getPadding())
            const s = Math.max(0, e.outerWidth - ui(a, t, 'left', 'right')),
                l = Math.max(0, e.outerHeight - ui(a, t, 'top', 'bottom')),
                c = s !== t.w,
                u = l !== t.h
            return (t.w = s), (t.h = l), n.horizontal ? {same: c, other: u} : {same: u, other: c}
        }

        function fi(t, e) {
            const n = e.maxPadding
            return (function (t) {
                const i = {left: 0, top: 0, right: 0, bottom: 0}
                return (
                    t.forEach(t => {
                        i[t] = Math.max(e[t], n[t])
                    }),
                        i
                )
            })(t ? ['left', 'right'] : ['top', 'bottom'])
        }

        function pi(t, e, n, i) {
            const r = []
            let o, a, s, l, c, u
            for (o = 0, a = t.length, c = 0; o < a; ++o) {
                ;(s = t[o]), (l = s.box), l.update(s.width || e.w, s.height || e.h, fi(s.horizontal, e))
                const {same: a, other: h} = di(e, n, s, i)
                ;(c |= a && r.length), (u = u || h), l.fullSize || r.push(s)
            }
            return (c && pi(r, e, n, i)) || u
        }

        function gi(t, e, n, i, r) {
            ;(t.top = n),
                (t.left = e),
                (t.right = e + i),
                (t.bottom = n + r),
                (t.width = i),
                (t.height = r)
        }

        function mi(t, e, n, i) {
            const r = n.padding
            let {x: o, y: a} = e
            for (const s of t) {
                const t = s.box,
                    l = i[s.stack] || {count: 1, placed: 0, weight: 1},
                    c = s.stackWeight / l.weight || 1
                if (s.horizontal) {
                    const i = e.w * c,
                        o = l.size || t.height
                    tt(l.start) && (a = l.start),
                        t.fullSize
                            ? gi(t, r.left, a, n.outerWidth - r.right - r.left, o)
                            : gi(t, e.left + l.placed, a, i, o),
                        (l.start = a),
                        (l.placed += i),
                        (a = t.bottom)
                } else {
                    const i = e.h * c,
                        a = l.size || t.width
                    tt(l.start) && (o = l.start),
                        t.fullSize
                            ? gi(t, o, r.top, a, n.outerHeight - r.bottom - r.top)
                            : gi(t, o, e.top + l.placed, a, i),
                        (l.start = o),
                        (l.placed += i),
                        (o = t.right)
                }
            }
            ;(e.x = o), (e.y = a)
        }

        var bi = {
            addBox(t, e) {
                t.boxes || (t.boxes = []),
                    (e.fullSize = e.fullSize || !1),
                    (e.position = e.position || 'top'),
                    (e.weight = e.weight || 0),
                    (e._layers =
                        e._layers ||
                        function () {
                            return [
                                {
                                    z: 0,
                                    draw(t) {
                                        e.draw(t)
                                    }
                                }
                            ]
                        }),
                    t.boxes.push(e)
            },
            removeBox(t, e) {
                const n = t.boxes ? t.boxes.indexOf(e) : -1
                ;-1 !== n && t.boxes.splice(n, 1)
            },
            configure(t, e, n) {
                ;(e.fullSize = n.fullSize), (e.position = n.position), (e.weight = n.weight)
            },
            update(t, e, n, i) {
                if (!t) return
                const r = Ee(t.options.layout.padding),
                    o = Math.max(e - r.width, 0),
                    a = Math.max(n - r.height, 0),
                    s = (function (t) {
                        const e = (function (t) {
                                const e = []
                                let n, i, r, o, a, s
                                for (n = 0, i = (t || []).length; n < i; ++n)
                                    (r = t[n]),
                                        ({
                                            position: o,
                                            options: {stack: a, stackWeight: s = 1}
                                        } = r),
                                        e.push({
                                            index: n,
                                            box: r,
                                            pos: o,
                                            horizontal: r.isHorizontal(),
                                            weight: r.weight,
                                            stack: a && o + a,
                                            stackWeight: s
                                        })
                                return e
                            })(t),
                            n = ci(
                                e.filter(t => t.box.fullSize),
                                !0
                            ),
                            i = ci(si(e, 'left'), !0),
                            r = ci(si(e, 'right')),
                            o = ci(si(e, 'top'), !0),
                            a = ci(si(e, 'bottom')),
                            s = li(e, 'x'),
                            l = li(e, 'y')
                        return {
                            fullSize: n,
                            leftAndTop: i.concat(o),
                            rightAndBottom: r.concat(l).concat(a).concat(s),
                            chartArea: si(e, 'chartArea'),
                            vertical: i.concat(r).concat(l),
                            horizontal: o.concat(a).concat(s)
                        }
                    })(t.boxes),
                    l = s.vertical,
                    c = s.horizontal
                H(t.boxes, t => {
                    'function' == typeof t.beforeLayout && t.beforeLayout()
                })
                const u =
                        l.reduce((t, e) => (e.box.options && !1 === e.box.options.display ? t : t + 1), 0) || 1,
                    h = Object.freeze({
                        outerWidth: e,
                        outerHeight: n,
                        padding: r,
                        availableWidth: o,
                        availableHeight: a,
                        vBoxMaxWidth: o / 2 / u,
                        hBoxMaxHeight: a / 2
                    }),
                    d = Object.assign({}, r)
                hi(d, Ee(i))
                const f = Object.assign({maxPadding: d, w: o, h: a, x: r.left, y: r.top}, r),
                    p = (function (t, e) {
                        const n = (function (t) {
                                const e = {}
                                for (const n of t) {
                                    const {stack: t, pos: i, stackWeight: r} = n
                                    if (!t || !ai.includes(i)) continue
                                    const o = e[t] || (e[t] = {count: 0, placed: 0, weight: 0, size: 0})
                                    o.count++, (o.weight += r)
                                }
                                return e
                            })(t),
                            {vBoxMaxWidth: i, hBoxMaxHeight: r} = e
                        let o, a, s
                        for (o = 0, a = t.length; o < a; ++o) {
                            s = t[o]
                            const {fullSize: a} = s.box,
                                l = n[s.stack],
                                c = l && s.stackWeight / l.weight
                            s.horizontal
                                ? ((s.width = c ? c * i : a && e.availableWidth), (s.height = r))
                                : ((s.width = i), (s.height = c ? c * r : a && e.availableHeight))
                        }
                        return n
                    })(l.concat(c), h)
                pi(s.fullSize, f, h, p),
                    pi(l, f, h, p),
                pi(c, f, h, p) && pi(l, f, h, p),
                    (function (t) {
                        const e = t.maxPadding

                        function n(n) {
                            const i = Math.max(e[n] - t[n], 0)
                            return (t[n] += i), i
                        }
                        ;(t.y += n('top')), (t.x += n('left')), n('right'), n('bottom')
                    })(f),
                    mi(s.leftAndTop, f, h, p),
                    (f.x += f.w),
                    (f.y += f.h),
                    mi(s.rightAndBottom, f, h, p),
                    (t.chartArea = {
                        left: f.left,
                        top: f.top,
                        right: f.left + f.w,
                        bottom: f.top + f.h,
                        height: f.h,
                        width: f.w
                    }),
                    H(s.chartArea, e => {
                        const n = e.box
                        Object.assign(n, t.chartArea),
                            n.update(f.w, f.h, {left: 0, top: 0, right: 0, bottom: 0})
                    })
            }
        }

        class yi {
            acquireContext(t, e) {
            }

            releaseContext(t) {
                return !1
            }

            addEventListener(t, e, n) {
            }

            removeEventListener(t, e, n) {
            }

            getDevicePixelRatio() {
                return 1
            }

            getMaximumSize(t, e, n, i) {
                return (
                    (e = Math.max(0, e || t.width)),
                        (n = n || t.height),
                        {width: e, height: Math.max(0, i ? Math.floor(e / i) : n)}
                )
            }

            isAttached(t) {
                return !0
            }

            updateConfig(t) {
            }
        }

        class vi extends yi {
            acquireContext(t) {
                return (t && t.getContext && t.getContext('2d')) || null
            }

            updateConfig(t) {
                t.options.animation = !1
            }
        }

        const xi = '$chartjs',
            _i = {
                touchstart: 'mousedown',
                touchmove: 'mousemove',
                touchend: 'mouseup',
                pointerenter: 'mouseenter',
                pointerdown: 'mousedown',
                pointermove: 'mousemove',
                pointerup: 'mouseup',
                pointerleave: 'mouseout',
                pointerout: 'mouseout'
            },
            wi = t => null === t || '' === t,
            ki = !!sn && {passive: !0}

        function Si(t, e, n) {
            t.canvas.removeEventListener(e, n, ki)
        }

        function Mi(t, e) {
            for (const n of t) if (n === e || n.contains(e)) return !0
        }

        function Ei(t, e, n) {
            const i = t.canvas,
                r = new MutationObserver(t => {
                    let e = !1
                    for (const n of t) (e = e || Mi(n.addedNodes, i)), (e = e && !Mi(n.removedNodes, i))
                    e && n()
                })
            return r.observe(document, {childList: !0, subtree: !0}), r
        }

        function Ci(t, e, n) {
            const i = t.canvas,
                r = new MutationObserver(t => {
                    let e = !1
                    for (const n of t) (e = e || Mi(n.removedNodes, i)), (e = e && !Mi(n.addedNodes, i))
                    e && n()
                })
            return r.observe(document, {childList: !0, subtree: !0}), r
        }

        const Pi = new Map()
        let Li = 0

        function Di() {
            const t = window.devicePixelRatio
            t !== Li &&
            ((Li = t),
                Pi.forEach((e, n) => {
                    n.currentDevicePixelRatio !== t && e()
                }))
        }

        function Oi(t, e, n) {
            const i = t.canvas,
                r = i && Ge(i)
            if (!r) return
            const o = Rt((t, e) => {
                    const i = r.clientWidth
                    n(t, e), i < r.clientWidth && n()
                }, window),
                a = new ResizeObserver(t => {
                    const e = t[0],
                        n = e.contentRect.width,
                        i = e.contentRect.height
                    ;(0 === n && 0 === i) || o(n, i)
                })
            return (
                a.observe(r),
                    (function (t, e) {
                        Pi.size || window.addEventListener('resize', Di), Pi.set(t, e)
                    })(t, o),
                    a
            )
        }

        function Ti(t, e, n) {
            n && n.disconnect(),
            'resize' === e &&
            (function (t) {
                Pi.delete(t), Pi.size || window.removeEventListener('resize', Di)
            })(t)
        }

        function zi(t, e, n) {
            const i = t.canvas,
                r = Rt(e => {
                    null !== t.ctx &&
                    n(
                        (function (t, e) {
                            const n = _i[t.type] || t.type,
                                {x: i, y: r} = rn(t, e)
                            return {
                                type: n,
                                chart: e,
                                native: t,
                                x: void 0 !== i ? i : null,
                                y: void 0 !== r ? r : null
                            }
                        })(e, t)
                    )
                }, t)
            return (
                (function (t, e, n) {
                    t.addEventListener(e, n, ki)
                })(i, e, r),
                    r
            )
        }

        class Ri extends yi {
            acquireContext(t, e) {
                const n = t && t.getContext && t.getContext('2d')
                return n && n.canvas === t
                    ? ((function (t, e) {
                        const n = t.style,
                            i = t.getAttribute('height'),
                            r = t.getAttribute('width')
                        if (
                            ((t[xi] = {
                                initial: {
                                    height: i,
                                    width: r,
                                    style: {display: n.display, height: n.height, width: n.width}
                                }
                            }),
                                (n.display = n.display || 'block'),
                                (n.boxSizing = n.boxSizing || 'border-box'),
                                wi(r))
                        ) {
                            const e = ln(t, 'width')
                            void 0 !== e && (t.width = e)
                        }
                        if (wi(i))
                            if ('' === t.style.height) t.height = t.width / (e || 2)
                            else {
                                const e = ln(t, 'height')
                                void 0 !== e && (t.height = e)
                            }
                    })(t, e),
                        n)
                    : null
            }

            releaseContext(t) {
                const e = t.canvas
                if (!e[xi]) return !1
                const n = e[xi].initial
                ;['height', 'width'].forEach(t => {
                    const i = n[t]
                    A(i) ? e.removeAttribute(t) : e.setAttribute(t, i)
                })
                const i = n.style || {}
                return (
                    Object.keys(i).forEach(t => {
                        e.style[t] = i[t]
                    }),
                        (e.width = e.width),
                        delete e[xi],
                        !0
                )
            }

            addEventListener(t, e, n) {
                this.removeEventListener(t, e)
                const i = t.$proxies || (t.$proxies = {}),
                    r = {attach: Ei, detach: Ci, resize: Oi}[e] || zi
                i[e] = r(t, e, n)
            }

            removeEventListener(t, e) {
                const n = t.$proxies || (t.$proxies = {}),
                    i = n[e]
                i && (({attach: Ti, detach: Ti, resize: Ti}[e] || Si)(t, e, i), (n[e] = void 0))
            }

            getDevicePixelRatio() {
                return window.devicePixelRatio
            }

            getMaximumSize(t, e, n, i) {
                return (function (t, e, n, i) {
                    const r = Je(t),
                        o = en(r, 'margin'),
                        a = Ze(r.maxWidth, t, 'clientWidth') || at,
                        s = Ze(r.maxHeight, t, 'clientHeight') || at,
                        l = (function (t, e, n) {
                            let i, r
                            if (void 0 === e || void 0 === n) {
                                const o = Ge(t)
                                if (o) {
                                    const t = o.getBoundingClientRect(),
                                        a = Je(o),
                                        s = en(a, 'border', 'width'),
                                        l = en(a, 'padding')
                                    ;(e = t.width - l.width - s.width),
                                        (n = t.height - l.height - s.height),
                                        (i = Ze(a.maxWidth, o, 'clientWidth')),
                                        (r = Ze(a.maxHeight, o, 'clientHeight'))
                                } else (e = t.clientWidth), (n = t.clientHeight)
                            }
                            return {width: e, height: n, maxWidth: i || at, maxHeight: r || at}
                        })(t, e, n)
                    let {width: c, height: u} = l
                    if ('content-box' === r.boxSizing) {
                        const t = en(r, 'border', 'width'),
                            e = en(r, 'padding')
                        ;(c -= e.width + t.width), (u -= e.height + t.height)
                    }
                    return (
                        (c = Math.max(0, c - o.width)),
                            (u = Math.max(0, i ? c / i : u - o.height)),
                            (c = on(Math.min(c, a, l.maxWidth))),
                            (u = on(Math.min(u, s, l.maxHeight))),
                        c && !u && (u = on(c / 2)),
                        (void 0 !== e || void 0 !== n) &&
                        i &&
                        l.height &&
                        u > l.height &&
                        ((u = l.height), (c = on(Math.floor(u * i)))),
                            {width: c, height: u}
                    )
                })(t, e, n, i)
            }

            isAttached(t) {
                const e = Ge(t)
                return !(!e || !e.isConnected)
            }
        }

        class Ai {
            static defaults = {}
            static defaultRoutes = void 0
            x
            y
            active = !1
            options
            $animations

            tooltipPosition(t) {
                const {x: e, y: n} = this.getProps(['x', 'y'], t)
                return {x: e, y: n}
            }

            hasValue() {
                return gt(this.x) && gt(this.y)
            }

            getProps(t, e) {
                const n = this.$animations
                if (!e || !n) return this
                const i = {}
                return (
                    t.forEach(t => {
                        i[t] = n[t] && n[t].active() ? n[t]._to : this[t]
                    }),
                        i
                )
            }
        }

        function Ni(t, e, n, i, r) {
            const o = B(i, 0),
                a = Math.min(B(r, t.length), t.length)
            let s,
                l,
                c,
                u = 0
            for (n = Math.ceil(n), r && ((s = r - i), (n = s / Math.floor(s / n))), c = o; c < 0;)
                u++, (c = Math.round(o + u * n))
            for (l = Math.max(o, 0); l < a; l++)
                l === c && (e.push(t[l]), u++, (c = Math.round(o + u * n)))
        }

        const Ii = (t, e, n) => ('top' === e || 'left' === e ? t[e] + n : t[e] - n),
            Fi = (t, e) => Math.min(e || t, t)

        function Vi(t, e) {
            const n = [],
                i = t.length / e,
                r = t.length
            let o = 0
            for (; o < r; o += i) n.push(t[Math.floor(o)])
            return n
        }

        function Bi(t, e, n) {
            const i = t.ticks.length,
                r = Math.min(e, i - 1),
                o = t._startPixel,
                a = t._endPixel,
                s = 1e-6
            let l,
                c = t.getPixelForTick(r)
            if (
                !(
                    n &&
                    ((l =
                        1 === i
                            ? Math.max(c - o, a - c)
                            : 0 === e
                                ? (t.getPixelForTick(1) - c) / 2
                                : (c - t.getPixelForTick(r - 1)) / 2),
                        (c += r < e ? l : -l),
                    c < o - s || c > a + s)
                )
            )
                return c
        }

        function ji(t) {
            return t.drawTicks ? t.tickLength : 0
        }

        function Wi(t, e) {
            if (!t.display) return 0
            const n = Ce(t.font, e),
                i = Ee(t.padding)
            return (N(t.text) ? t.text.length : 1) * n.lineHeight + i.height
        }

        function Hi(t, e, n) {
            let i = At(t)
            return (
                ((n && 'right' !== e) || (!n && 'right' === e)) &&
                (i = (t => ('left' === t ? 'right' : 'right' === t ? 'left' : t))(i)),
                    i
            )
        }

        class $i extends Ai {
            constructor(t) {
                super(),
                    (this.id = t.id),
                    (this.type = t.type),
                    (this.options = void 0),
                    (this.ctx = t.ctx),
                    (this.chart = t.chart),
                    (this.top = void 0),
                    (this.bottom = void 0),
                    (this.left = void 0),
                    (this.right = void 0),
                    (this.width = void 0),
                    (this.height = void 0),
                    (this._margins = {left: 0, right: 0, top: 0, bottom: 0}),
                    (this.maxWidth = void 0),
                    (this.maxHeight = void 0),
                    (this.paddingTop = void 0),
                    (this.paddingBottom = void 0),
                    (this.paddingLeft = void 0),
                    (this.paddingRight = void 0),
                    (this.axis = void 0),
                    (this.labelRotation = void 0),
                    (this.min = void 0),
                    (this.max = void 0),
                    (this._range = void 0),
                    (this.ticks = []),
                    (this._gridLineItems = null),
                    (this._labelItems = null),
                    (this._labelSizes = null),
                    (this._length = 0),
                    (this._maxLength = 0),
                    (this._longestTextCache = {}),
                    (this._startPixel = void 0),
                    (this._endPixel = void 0),
                    (this._reversePixels = !1),
                    (this._userMax = void 0),
                    (this._userMin = void 0),
                    (this._suggestedMax = void 0),
                    (this._suggestedMin = void 0),
                    (this._ticksLength = 0),
                    (this._borderValue = 0),
                    (this._cache = {}),
                    (this._dataLimitsCached = !1),
                    (this.$context = void 0)
            }

            init(t) {
                ;(this.options = t.setContext(this.getContext())),
                    (this.axis = t.axis),
                    (this._userMin = this.parse(t.min)),
                    (this._userMax = this.parse(t.max)),
                    (this._suggestedMin = this.parse(t.suggestedMin)),
                    (this._suggestedMax = this.parse(t.suggestedMax))
            }

            parse(t, e) {
                return t
            }

            getUserBounds() {
                let {_userMin: t, _userMax: e, _suggestedMin: n, _suggestedMax: i} = this
                return (
                    (t = V(t, Number.POSITIVE_INFINITY)),
                        (e = V(e, Number.NEGATIVE_INFINITY)),
                        (n = V(n, Number.POSITIVE_INFINITY)),
                        (i = V(i, Number.NEGATIVE_INFINITY)),
                        {min: V(t, n), max: V(e, i), minDefined: F(t), maxDefined: F(e)}
                )
            }

            getMinMax(t) {
                let e,
                    {min: n, max: i, minDefined: r, maxDefined: o} = this.getUserBounds()
                if (r && o) return {min: n, max: i}
                const a = this.getMatchingVisibleMetas()
                for (let s = 0, l = a.length; s < l; ++s)
                    (e = a[s].controller.getMinMax(this, t)),
                    r || (n = Math.min(n, e.min)),
                    o || (i = Math.max(i, e.max))
                return (
                    (n = o && n > i ? i : n),
                        (i = r && n > i ? n : i),
                        {min: V(n, V(i, n)), max: V(i, V(n, i))}
                )
            }

            getPadding() {
                return {
                    left: this.paddingLeft || 0,
                    top: this.paddingTop || 0,
                    right: this.paddingRight || 0,
                    bottom: this.paddingBottom || 0
                }
            }

            getTicks() {
                return this.ticks
            }

            getLabels() {
                const t = this.chart.data
                return (
                    this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || []
                )
            }

            getLabelItems(t = this.chart.chartArea) {
                return this._labelItems || (this._labelItems = this._computeLabelItems(t))
            }

            beforeLayout() {
                ;(this._cache = {}), (this._dataLimitsCached = !1)
            }

            beforeUpdate() {
                W(this.options.beforeUpdate, [this])
            }

            update(t, e, n) {
                const {beginAtZero: i, grace: r, ticks: o} = this.options,
                    a = o.sampleSize
                this.beforeUpdate(),
                    (this.maxWidth = t),
                    (this.maxHeight = e),
                    (this._margins = n = Object.assign({left: 0, right: 0, top: 0, bottom: 0}, n)),
                    (this.ticks = null),
                    (this._labelSizes = null),
                    (this._gridLineItems = null),
                    (this._labelItems = null),
                    this.beforeSetDimensions(),
                    this.setDimensions(),
                    this.afterSetDimensions(),
                    (this._maxLength = this.isHorizontal()
                        ? this.width + n.left + n.right
                        : this.height + n.top + n.bottom),
                this._dataLimitsCached ||
                (this.beforeDataLimits(),
                    this.determineDataLimits(),
                    this.afterDataLimits(),
                    (this._range = (function (t, e, n) {
                        const {min: i, max: r} = t,
                            o = j(e, (r - i) / 2),
                            a = (t, e) => (n && 0 === t ? 0 : t + e)
                        return {min: a(i, -Math.abs(o)), max: a(r, o)}
                    })(this, r, i)),
                    (this._dataLimitsCached = !0)),
                    this.beforeBuildTicks(),
                    (this.ticks = this.buildTicks() || []),
                    this.afterBuildTicks()
                const s = a < this.ticks.length
                this._convertTicksToLabels(s ? Vi(this.ticks, a) : this.ticks),
                    this.configure(),
                    this.beforeCalculateLabelRotation(),
                    this.calculateLabelRotation(),
                    this.afterCalculateLabelRotation(),
                o.display &&
                (o.autoSkip || 'auto' === o.source) &&
                ((this.ticks = (function (t, e) {
                    const n = t.options.ticks,
                        i = (function (t) {
                            const e = t.options.offset,
                                n = t._tickSize(),
                                i = t._length / n + (e ? 0 : 1),
                                r = t._maxLength / n
                            return Math.floor(Math.min(i, r))
                        })(t),
                        r = Math.min(n.maxTicksLimit || i, i),
                        o = n.major.enabled
                            ? (function (t) {
                                const e = []
                                let n, i
                                for (n = 0, i = t.length; n < i; n++) t[n].major && e.push(n)
                                return e
                            })(e)
                            : [],
                        a = o.length,
                        s = o[0],
                        l = o[a - 1],
                        c = []
                    if (a > r)
                        return (
                            (function (t, e, n, i) {
                                let r,
                                    o = 0,
                                    a = n[0]
                                for (i = Math.ceil(i), r = 0; r < t.length; r++)
                                    r === a && (e.push(t[r]), o++, (a = n[o * i]))
                            })(e, c, o, a / r),
                                c
                        )
                    const u = (function (t, e, n) {
                        const i = (function (t) {
                                const e = t.length
                                let n, i
                                if (e < 2) return !1
                                for (i = t[0], n = 1; n < e; ++n) if (t[n] - t[n - 1] !== i) return !1
                                return i
                            })(t),
                            r = e.length / n
                        if (!i) return Math.max(r, 1)
                        const o = (function (t) {
                            const e = [],
                                n = Math.sqrt(t)
                            let i
                            for (i = 1; i < n; i++) t % i == 0 && (e.push(i), e.push(t / i))
                            return n === (0 | n) && e.push(n), e.sort((t, e) => t - e).pop(), e
                        })(i)
                        for (let t = 0, e = o.length - 1; t < e; t++) {
                            const e = o[t]
                            if (e > r) return e
                        }
                        return Math.max(r, 1)
                    })(o, e, r)
                    if (a > 0) {
                        let t, n
                        const i = a > 1 ? Math.round((l - s) / (a - 1)) : null
                        for (Ni(e, c, u, A(i) ? 0 : s - i, s), t = 0, n = a - 1; t < n; t++)
                            Ni(e, c, u, o[t], o[t + 1])
                        return Ni(e, c, u, l, A(i) ? e.length : l + i), c
                    }
                    return Ni(e, c, u), c
                })(this, this.ticks)),
                    (this._labelSizes = null),
                    this.afterAutoSkip()),
                s && this._convertTicksToLabels(this.ticks),
                    this.beforeFit(),
                    this.fit(),
                    this.afterFit(),
                    this.afterUpdate()
            }

            configure() {
                let t,
                    e,
                    n = this.options.reverse
                this.isHorizontal()
                    ? ((t = this.left), (e = this.right))
                    : ((t = this.top), (e = this.bottom), (n = !n)),
                    (this._startPixel = t),
                    (this._endPixel = e),
                    (this._reversePixels = n),
                    (this._length = e - t),
                    (this._alignToPixels = this.options.alignToPixels)
            }

            afterUpdate() {
                W(this.options.afterUpdate, [this])
            }

            beforeSetDimensions() {
                W(this.options.beforeSetDimensions, [this])
            }

            setDimensions() {
                this.isHorizontal()
                    ? ((this.width = this.maxWidth), (this.left = 0), (this.right = this.width))
                    : ((this.height = this.maxHeight), (this.top = 0), (this.bottom = this.height)),
                    (this.paddingLeft = 0),
                    (this.paddingTop = 0),
                    (this.paddingRight = 0),
                    (this.paddingBottom = 0)
            }

            afterSetDimensions() {
                W(this.options.afterSetDimensions, [this])
            }

            _callHooks(t) {
                this.chart.notifyPlugins(t, this.getContext()), W(this.options[t], [this])
            }

            beforeDataLimits() {
                this._callHooks('beforeDataLimits')
            }

            determineDataLimits() {
            }

            afterDataLimits() {
                this._callHooks('afterDataLimits')
            }

            beforeBuildTicks() {
                this._callHooks('beforeBuildTicks')
            }

            buildTicks() {
                return []
            }

            afterBuildTicks() {
                this._callHooks('afterBuildTicks')
            }

            beforeTickToLabelConversion() {
                W(this.options.beforeTickToLabelConversion, [this])
            }

            generateTickLabels(t) {
                const e = this.options.ticks
                let n, i, r
                for (n = 0, i = t.length; n < i; n++)
                    (r = t[n]), (r.label = W(e.callback, [r.value, n, t], this))
            }

            afterTickToLabelConversion() {
                W(this.options.afterTickToLabelConversion, [this])
            }

            beforeCalculateLabelRotation() {
                W(this.options.beforeCalculateLabelRotation, [this])
            }

            calculateLabelRotation() {
                const t = this.options,
                    e = t.ticks,
                    n = Fi(this.ticks.length, t.ticks.maxTicksLimit),
                    i = e.minRotation || 0,
                    r = e.maxRotation
                let o,
                    a,
                    s,
                    l = i
                if (!this._isVisible() || !e.display || i >= r || n <= 1 || !this.isHorizontal())
                    return void (this.labelRotation = i)
                const c = this._getLabelSizes(),
                    u = c.widest.width,
                    h = c.highest.height,
                    d = Mt(this.chart.width - u, 0, this.maxWidth)
                ;(o = t.offset ? this.maxWidth / n : d / (n - 1)),
                u + 6 > o &&
                ((o = d / (n - (t.offset ? 0.5 : 1))),
                    (a = this.maxHeight - ji(t.grid) - e.padding - Wi(t.title, this.chart.options.font)),
                    (s = Math.sqrt(u * u + h * h)),
                    (l = yt(
                        Math.min(
                            Math.asin(Mt((c.highest.height + 6) / o, -1, 1)),
                            Math.asin(Mt(a / s, -1, 1)) - Math.asin(Mt(h / s, -1, 1))
                        )
                    )),
                    (l = Math.max(i, Math.min(r, l)))),
                    (this.labelRotation = l)
            }

            afterCalculateLabelRotation() {
                W(this.options.afterCalculateLabelRotation, [this])
            }

            afterAutoSkip() {
            }

            beforeFit() {
                W(this.options.beforeFit, [this])
            }

            fit() {
                const t = {width: 0, height: 0},
                    {
                        chart: e,
                        options: {ticks: n, title: i, grid: r}
                    } = this,
                    o = this._isVisible(),
                    a = this.isHorizontal()
                if (o) {
                    const o = Wi(i, e.options.font)
                    if (
                        (a
                            ? ((t.width = this.maxWidth), (t.height = ji(r) + o))
                            : ((t.height = this.maxHeight), (t.width = ji(r) + o)),
                        n.display && this.ticks.length)
                    ) {
                        const {first: e, last: i, widest: r, highest: o} = this._getLabelSizes(),
                            s = 2 * n.padding,
                            l = bt(this.labelRotation),
                            c = Math.cos(l),
                            u = Math.sin(l)
                        if (a) {
                            const e = n.mirror ? 0 : u * r.width + c * o.height
                            t.height = Math.min(this.maxHeight, t.height + e + s)
                        } else {
                            const e = n.mirror ? 0 : c * r.width + u * o.height
                            t.width = Math.min(this.maxWidth, t.width + e + s)
                        }
                        this._calculatePadding(e, i, u, c)
                    }
                }
                this._handleMargins(),
                    a
                        ? ((this.width = this._length = e.width - this._margins.left - this._margins.right),
                            (this.height = t.height))
                        : ((this.width = t.width),
                            (this.height = this._length = e.height - this._margins.top - this._margins.bottom))
            }

            _calculatePadding(t, e, n, i) {
                const {
                        ticks: {align: r, padding: o},
                        position: a
                    } = this.options,
                    s = 0 !== this.labelRotation,
                    l = 'top' !== a && 'x' === this.axis
                if (this.isHorizontal()) {
                    const a = this.getPixelForTick(0) - this.left,
                        c = this.right - this.getPixelForTick(this.ticks.length - 1)
                    let u = 0,
                        h = 0
                    s
                        ? l
                            ? ((u = i * t.width), (h = n * e.height))
                            : ((u = n * t.height), (h = i * e.width))
                        : 'start' === r
                            ? (h = e.width)
                            : 'end' === r
                                ? (u = t.width)
                                : 'inner' !== r && ((u = t.width / 2), (h = e.width / 2)),
                        (this.paddingLeft = Math.max(((u - a + o) * this.width) / (this.width - a), 0)),
                        (this.paddingRight = Math.max(((h - c + o) * this.width) / (this.width - c), 0))
                } else {
                    let n = e.height / 2,
                        i = t.height / 2
                    'start' === r ? ((n = 0), (i = t.height)) : 'end' === r && ((n = e.height), (i = 0)),
                        (this.paddingTop = n + o),
                        (this.paddingBottom = i + o)
                }
            }

            _handleMargins() {
                this._margins &&
                ((this._margins.left = Math.max(this.paddingLeft, this._margins.left)),
                    (this._margins.top = Math.max(this.paddingTop, this._margins.top)),
                    (this._margins.right = Math.max(this.paddingRight, this._margins.right)),
                    (this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom)))
            }

            afterFit() {
                W(this.options.afterFit, [this])
            }

            isHorizontal() {
                const {axis: t, position: e} = this.options
                return 'top' === e || 'bottom' === e || 'x' === t
            }

            isFullSize() {
                return this.options.fullSize
            }

            _convertTicksToLabels(t) {
                let e, n
                for (
                    this.beforeTickToLabelConversion(), this.generateTickLabels(t), e = 0, n = t.length;
                    e < n;
                    e++
                )
                    A(t[e].label) && (t.splice(e, 1), n--, e--)
                this.afterTickToLabelConversion()
            }

            _getLabelSizes() {
                let t = this._labelSizes
                if (!t) {
                    const e = this.options.ticks.sampleSize
                    let n = this.ticks
                    e < n.length && (n = Vi(n, e)),
                        (this._labelSizes = t =
                            this._computeLabelSizes(n, n.length, this.options.ticks.maxTicksLimit))
                }
                return t
            }

            _computeLabelSizes(t, e, n) {
                const {ctx: i, _longestTextCache: r} = this,
                    o = [],
                    a = [],
                    s = Math.floor(e / Fi(e, n))
                let l,
                    c,
                    u,
                    h,
                    d,
                    f,
                    p,
                    g,
                    m,
                    b,
                    y,
                    v = 0,
                    x = 0
                for (l = 0; l < e; l += s) {
                    if (
                        ((h = t[l].label),
                            (d = this._resolveTickFontOptions(l)),
                            (i.font = f = d.string),
                            (p = r[f] = r[f] || {data: {}, gc: []}),
                            (g = d.lineHeight),
                            (m = b = 0),
                        A(h) || N(h))
                    ) {
                        if (N(h))
                            for (c = 0, u = h.length; c < u; ++c)
                                (y = h[c]), A(y) || N(y) || ((m = re(i, p.data, p.gc, m, y)), (b += g))
                    } else (m = re(i, p.data, p.gc, m, h)), (b = g)
                    o.push(m), a.push(b), (v = Math.max(m, v)), (x = Math.max(b, x))
                }
                !(function (t, e) {
                    H(t, t => {
                        const n = t.gc,
                            i = n.length / 2
                        let r
                        if (i > e) {
                            for (r = 0; r < i; ++r) delete t.data[n[r]]
                            n.splice(0, i)
                        }
                    })
                })(r, e)
                const _ = o.indexOf(v),
                    w = a.indexOf(x),
                    k = t => ({width: o[t] || 0, height: a[t] || 0})
                return {first: k(0), last: k(e - 1), widest: k(_), highest: k(w), widths: o, heights: a}
            }

            getLabelForValue(t) {
                return t
            }

            getPixelForValue(t, e) {
                return NaN
            }

            getValueForPixel(t) {
            }

            getPixelForTick(t) {
                const e = this.ticks
                return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value)
            }

            getPixelForDecimal(t) {
                this._reversePixels && (t = 1 - t)
                const e = this._startPixel + t * this._length
                return Mt(this._alignToPixels ? ae(this.chart, e, 0) : e, -32768, 32767)
            }

            getDecimalForPixel(t) {
                const e = (t - this._startPixel) / this._length
                return this._reversePixels ? 1 - e : e
            }

            getBasePixel() {
                return this.getPixelForValue(this.getBaseValue())
            }

            getBaseValue() {
                const {min: t, max: e} = this
                return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0
            }

            getContext(t) {
                const e = this.ticks || []
                if (t >= 0 && t < e.length) {
                    const n = e[t]
                    return (
                        n.$context ||
                        (n.$context = (function (t, e, n) {
                            return Le(t, {tick: n, index: e, type: 'tick'})
                        })(this.getContext(), t, n))
                    )
                }
                return (
                    this.$context ||
                    (this.$context = Le(this.chart.getContext(), {scale: this, type: 'scale'}))
                )
            }

            _tickSize() {
                const t = this.options.ticks,
                    e = bt(this.labelRotation),
                    n = Math.abs(Math.cos(e)),
                    i = Math.abs(Math.sin(e)),
                    r = this._getLabelSizes(),
                    o = t.autoSkipPadding || 0,
                    a = r ? r.widest.width + o : 0,
                    s = r ? r.highest.height + o : 0
                return this.isHorizontal() ? (s * n > a * i ? a / n : s / i) : s * i < a * n ? s / n : a / i
            }

            _isVisible() {
                const t = this.options.display
                return 'auto' !== t ? !!t : this.getMatchingVisibleMetas().length > 0
            }

            _computeGridLineItems(t) {
                const e = this.axis,
                    n = this.chart,
                    i = this.options,
                    {grid: r, position: o, border: a} = i,
                    s = r.offset,
                    l = this.isHorizontal(),
                    c = this.ticks.length + (s ? 1 : 0),
                    u = ji(r),
                    h = [],
                    d = a.setContext(this.getContext()),
                    f = d.display ? d.width : 0,
                    p = f / 2,
                    g = function (t) {
                        return ae(n, t, f)
                    }
                let m, b, y, v, x, _, w, k, S, M, E, C
                if ('top' === o)
                    (m = g(this.bottom)),
                        (_ = this.bottom - u),
                        (k = m - p),
                        (M = g(t.top) + p),
                        (C = t.bottom)
                else if ('bottom' === o)
                    (m = g(this.top)), (M = t.top), (C = g(t.bottom) - p), (_ = m + p), (k = this.top + u)
                else if ('left' === o)
                    (m = g(this.right)), (x = this.right - u), (w = m - p), (S = g(t.left) + p), (E = t.right)
                else if ('right' === o)
                    (m = g(this.left)), (S = t.left), (E = g(t.right) - p), (x = m + p), (w = this.left + u)
                else if ('x' === e) {
                    if ('center' === o) m = g((t.top + t.bottom) / 2 + 0.5)
                    else if (I(o)) {
                        const t = Object.keys(o)[0],
                            e = o[t]
                        m = g(this.chart.scales[t].getPixelForValue(e))
                    }
                    ;(M = t.top), (C = t.bottom), (_ = m + p), (k = _ + u)
                } else if ('y' === e) {
                    if ('center' === o) m = g((t.left + t.right) / 2)
                    else if (I(o)) {
                        const t = Object.keys(o)[0],
                            e = o[t]
                        m = g(this.chart.scales[t].getPixelForValue(e))
                    }
                    ;(x = m - p), (w = x - u), (S = t.left), (E = t.right)
                }
                const P = B(i.ticks.maxTicksLimit, c),
                    L = Math.max(1, Math.ceil(c / P))
                for (b = 0; b < c; b += L) {
                    const t = this.getContext(b),
                        e = r.setContext(t),
                        i = a.setContext(t),
                        o = e.lineWidth,
                        c = e.color,
                        u = i.dash || [],
                        d = i.dashOffset,
                        f = e.tickWidth,
                        p = e.tickColor,
                        g = e.tickBorderDash || [],
                        m = e.tickBorderDashOffset
                    ;(y = Bi(this, b, s)),
                    void 0 !== y &&
                    ((v = ae(n, y, o)),
                        l ? (x = w = S = E = v) : (_ = k = M = C = v),
                        h.push({
                            tx1: x,
                            ty1: _,
                            tx2: w,
                            ty2: k,
                            x1: S,
                            y1: M,
                            x2: E,
                            y2: C,
                            width: o,
                            color: c,
                            borderDash: u,
                            borderDashOffset: d,
                            tickWidth: f,
                            tickColor: p,
                            tickBorderDash: g,
                            tickBorderDashOffset: m
                        }))
                }
                return (this._ticksLength = c), (this._borderValue = m), h
            }

            _computeLabelItems(t) {
                const e = this.axis,
                    n = this.options,
                    {position: i, ticks: r} = n,
                    o = this.isHorizontal(),
                    a = this.ticks,
                    {align: s, crossAlign: l, padding: c, mirror: u} = r,
                    h = ji(n.grid),
                    d = h + c,
                    f = u ? -c : d,
                    p = -bt(this.labelRotation),
                    g = []
                let m,
                    b,
                    y,
                    v,
                    x,
                    _,
                    w,
                    k,
                    S,
                    M,
                    E,
                    C,
                    P = 'middle'
                if ('top' === i) (_ = this.bottom - f), (w = this._getXAxisLabelAlignment())
                else if ('bottom' === i) (_ = this.top + f), (w = this._getXAxisLabelAlignment())
                else if ('left' === i) {
                    const t = this._getYAxisLabelAlignment(h)
                    ;(w = t.textAlign), (x = t.x)
                } else if ('right' === i) {
                    const t = this._getYAxisLabelAlignment(h)
                    ;(w = t.textAlign), (x = t.x)
                } else if ('x' === e) {
                    if ('center' === i) _ = (t.top + t.bottom) / 2 + d
                    else if (I(i)) {
                        const t = Object.keys(i)[0],
                            e = i[t]
                        _ = this.chart.scales[t].getPixelForValue(e) + d
                    }
                    w = this._getXAxisLabelAlignment()
                } else if ('y' === e) {
                    if ('center' === i) x = (t.left + t.right) / 2 - d
                    else if (I(i)) {
                        const t = Object.keys(i)[0],
                            e = i[t]
                        x = this.chart.scales[t].getPixelForValue(e)
                    }
                    w = this._getYAxisLabelAlignment(h).textAlign
                }
                'y' === e && ('start' === s ? (P = 'top') : 'end' === s && (P = 'bottom'))
                const L = this._getLabelSizes()
                for (m = 0, b = a.length; m < b; ++m) {
                    ;(y = a[m]), (v = y.label)
                    const t = r.setContext(this.getContext(m))
                    ;(k = this.getPixelForTick(m) + r.labelOffset),
                        (S = this._resolveTickFontOptions(m)),
                        (M = S.lineHeight),
                        (E = N(v) ? v.length : 1)
                    const e = E / 2,
                        n = t.color,
                        s = t.textStrokeColor,
                        c = t.textStrokeWidth
                    let h,
                        d = w
                    if (
                        (o
                            ? ((x = k),
                            'inner' === w &&
                            (d =
                                m === b - 1
                                    ? this.options.reverse
                                        ? 'left'
                                        : 'right'
                                    : 0 === m
                                        ? this.options.reverse
                                            ? 'right'
                                            : 'left'
                                        : 'center'),
                                (C =
                                    'top' === i
                                        ? 'near' === l || 0 !== p
                                            ? -E * M + M / 2
                                            : 'center' === l
                                                ? -L.highest.height / 2 - e * M + M
                                                : -L.highest.height + M / 2
                                        : 'near' === l || 0 !== p
                                            ? M / 2
                                            : 'center' === l
                                                ? L.highest.height / 2 - e * M
                                                : L.highest.height - E * M),
                            u && (C *= -1),
                            0 === p || t.showLabelBackdrop || (x += (M / 2) * Math.sin(p)))
                            : ((_ = k), (C = ((1 - E) * M) / 2)),
                            t.showLabelBackdrop)
                    ) {
                        const e = Ee(t.backdropPadding),
                            n = L.heights[m],
                            i = L.widths[m]
                        let r = C - e.top,
                            o = 0 - e.left
                        switch (P) {
                            case 'middle':
                                r -= n / 2
                                break
                            case 'bottom':
                                r -= n
                        }
                        switch (w) {
                            case 'center':
                                o -= i / 2
                                break
                            case 'right':
                                o -= i
                                break
                            case 'inner':
                                m === b - 1 ? (o -= i) : m > 0 && (o -= i / 2)
                        }
                        h = {
                            left: o,
                            top: r,
                            width: i + e.width,
                            height: n + e.height,
                            color: t.backdropColor
                        }
                    }
                    g.push({
                        label: v,
                        font: S,
                        textOffset: C,
                        options: {
                            rotation: p,
                            color: n,
                            strokeColor: s,
                            strokeWidth: c,
                            textAlign: d,
                            textBaseline: P,
                            translation: [x, _],
                            backdrop: h
                        }
                    })
                }
                return g
            }

            _getXAxisLabelAlignment() {
                const {position: t, ticks: e} = this.options
                if (-bt(this.labelRotation)) return 'top' === t ? 'left' : 'right'
                let n = 'center'
                return (
                    'start' === e.align
                        ? (n = 'left')
                        : 'end' === e.align
                            ? (n = 'right')
                            : 'inner' === e.align && (n = 'inner'),
                        n
                )
            }

            _getYAxisLabelAlignment(t) {
                const {
                        position: e,
                        ticks: {crossAlign: n, mirror: i, padding: r}
                    } = this.options,
                    o = t + r,
                    a = this._getLabelSizes().widest.width
                let s, l
                return (
                    'left' === e
                        ? i
                            ? ((l = this.right + r),
                                'near' === n
                                    ? (s = 'left')
                                    : 'center' === n
                                        ? ((s = 'center'), (l += a / 2))
                                        : ((s = 'right'), (l += a)))
                            : ((l = this.right - o),
                                'near' === n
                                    ? (s = 'right')
                                    : 'center' === n
                                        ? ((s = 'center'), (l -= a / 2))
                                        : ((s = 'left'), (l = this.left)))
                        : 'right' === e
                            ? i
                                ? ((l = this.left + r),
                                    'near' === n
                                        ? (s = 'right')
                                        : 'center' === n
                                            ? ((s = 'center'), (l -= a / 2))
                                            : ((s = 'left'), (l -= a)))
                                : ((l = this.left + o),
                                    'near' === n
                                        ? (s = 'left')
                                        : 'center' === n
                                            ? ((s = 'center'), (l += a / 2))
                                            : ((s = 'right'), (l = this.right)))
                            : (s = 'right'),
                        {textAlign: s, x: l}
                )
            }

            _computeLabelArea() {
                if (this.options.ticks.mirror) return
                const t = this.chart,
                    e = this.options.position
                return 'left' === e || 'right' === e
                    ? {top: 0, left: this.left, bottom: t.height, right: this.right}
                    : 'top' === e || 'bottom' === e
                        ? {top: this.top, left: 0, bottom: this.bottom, right: t.width}
                        : void 0
            }

            drawBackground() {
                const {
                    ctx: t,
                    options: {backgroundColor: e},
                    left: n,
                    top: i,
                    width: r,
                    height: o
                } = this
                e && (t.save(), (t.fillStyle = e), t.fillRect(n, i, r, o), t.restore())
            }

            getLineWidthForValue(t) {
                const e = this.options.grid
                if (!this._isVisible() || !e.display) return 0
                const n = this.ticks.findIndex(e => e.value === t)
                return n >= 0 ? e.setContext(this.getContext(n)).lineWidth : 0
            }

            drawGrid(t) {
                const e = this.options.grid,
                    n = this.ctx,
                    i = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t))
                let r, o
                const a = (t, e, i) => {
                    i.width &&
                    i.color &&
                    (n.save(),
                        (n.lineWidth = i.width),
                        (n.strokeStyle = i.color),
                        n.setLineDash(i.borderDash || []),
                        (n.lineDashOffset = i.borderDashOffset),
                        n.beginPath(),
                        n.moveTo(t.x, t.y),
                        n.lineTo(e.x, e.y),
                        n.stroke(),
                        n.restore())
                }
                if (e.display)
                    for (r = 0, o = i.length; r < o; ++r) {
                        const t = i[r]
                        e.drawOnChartArea && a({x: t.x1, y: t.y1}, {x: t.x2, y: t.y2}, t),
                        e.drawTicks &&
                        a(
                            {x: t.tx1, y: t.ty1},
                            {x: t.tx2, y: t.ty2},
                            {
                                color: t.tickColor,
                                width: t.tickWidth,
                                borderDash: t.tickBorderDash,
                                borderDashOffset: t.tickBorderDashOffset
                            }
                        )
                    }
            }

            drawBorder() {
                const {
                        chart: t,
                        ctx: e,
                        options: {border: n, grid: i}
                    } = this,
                    r = n.setContext(this.getContext()),
                    o = n.display ? r.width : 0
                if (!o) return
                const a = i.setContext(this.getContext(0)).lineWidth,
                    s = this._borderValue
                let l, c, u, h
                this.isHorizontal()
                    ? ((l = ae(t, this.left, o) - o / 2), (c = ae(t, this.right, a) + a / 2), (u = h = s))
                    : ((u = ae(t, this.top, o) - o / 2), (h = ae(t, this.bottom, a) + a / 2), (l = c = s)),
                    e.save(),
                    (e.lineWidth = r.width),
                    (e.strokeStyle = r.color),
                    e.beginPath(),
                    e.moveTo(l, u),
                    e.lineTo(c, h),
                    e.stroke(),
                    e.restore()
            }

            drawLabels(t) {
                if (!this.options.ticks.display) return
                const e = this.ctx,
                    n = this._computeLabelArea()
                n && he(e, n)
                const i = this.getLabelItems(t)
                for (const t of i) {
                    const n = t.options,
                        i = t.font
                    be(e, t.label, 0, t.textOffset, i, n)
                }
                n && de(e)
            }

            drawTitle() {
                const {
                    ctx: t,
                    options: {position: e, title: n, reverse: i}
                } = this
                if (!n.display) return
                const r = Ce(n.font),
                    o = Ee(n.padding),
                    a = n.align
                let s = r.lineHeight / 2
                'bottom' === e || 'center' === e || I(e)
                    ? ((s += o.bottom), N(n.text) && (s += r.lineHeight * (n.text.length - 1)))
                    : (s += o.top)
                const {
                    titleX: l,
                    titleY: c,
                    maxWidth: u,
                    rotation: h
                } = (function (t, e, n, i) {
                    const {top: r, left: o, bottom: a, right: s, chart: l} = t,
                        {chartArea: c, scales: u} = l
                    let h,
                        d,
                        f,
                        p = 0
                    const g = a - r,
                        m = s - o
                    if (t.isHorizontal()) {
                        if (((d = Nt(i, o, s)), I(n))) {
                            const t = Object.keys(n)[0],
                                i = n[t]
                            f = u[t].getPixelForValue(i) + g - e
                        } else f = 'center' === n ? (c.bottom + c.top) / 2 + g - e : Ii(t, n, e)
                        h = s - o
                    } else {
                        if (I(n)) {
                            const t = Object.keys(n)[0],
                                i = n[t]
                            d = u[t].getPixelForValue(i) - m + e
                        } else d = 'center' === n ? (c.left + c.right) / 2 - m + e : Ii(t, n, e)
                        ;
                        (f = Nt(i, a, r)), (p = 'left' === n ? -lt : lt)
                    }
                    return {titleX: d, titleY: f, maxWidth: h, rotation: p}
                })(this, s, e, a)
                be(t, n.text, 0, 0, r, {
                    color: n.color,
                    maxWidth: u,
                    rotation: h,
                    textAlign: Hi(a, e, i),
                    textBaseline: 'middle',
                    translation: [l, c]
                })
            }

            draw(t) {
                this._isVisible() &&
                (this.drawBackground(),
                    this.drawGrid(t),
                    this.drawBorder(),
                    this.drawTitle(),
                    this.drawLabels(t))
            }

            _layers() {
                const t = this.options,
                    e = (t.ticks && t.ticks.z) || 0,
                    n = B(t.grid && t.grid.z, -1),
                    i = B(t.border && t.border.z, 0)
                return this._isVisible() && this.draw === $i.prototype.draw
                    ? [
                        {
                            z: n,
                            draw: t => {
                                this.drawBackground(), this.drawGrid(t), this.drawTitle()
                            }
                        },
                        {
                            z: i,
                            draw: () => {
                                this.drawBorder()
                            }
                        },
                        {
                            z: e,
                            draw: t => {
                                this.drawLabels(t)
                            }
                        }
                    ]
                    : [
                        {
                            z: e,
                            draw: t => {
                                this.draw(t)
                            }
                        }
                    ]
            }

            getMatchingVisibleMetas(t) {
                const e = this.chart.getSortedVisibleDatasetMetas(),
                    n = this.axis + 'AxisID',
                    i = []
                let r, o
                for (r = 0, o = e.length; r < o; ++r) {
                    const o = e[r]
                    o[n] !== this.id || (t && o.type !== t) || i.push(o)
                }
                return i
            }

            _resolveTickFontOptions(t) {
                return Ce(this.options.ticks.setContext(this.getContext(t)).font)
            }

            _maxDigits() {
                const t = this._resolveTickFontOptions(0).lineHeight
                return (this.isHorizontal() ? this.width : this.height) / t
            }
        }

        class Ui {
            constructor(t, e, n) {
                ;(this.type = t), (this.scope = e), (this.override = n), (this.items = Object.create(null))
            }

            isForType(t) {
                return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype)
            }

            register(t) {
                const e = Object.getPrototypeOf(t)
                let n
                ;(function (t) {
                    return 'id' in t && 'defaults' in t
                })(e) && (n = this.register(e))
                const i = this.items,
                    r = t.id,
                    o = this.scope + '.' + r
                if (!r) throw new Error('class does not have id: ' + t)
                return (
                    r in i ||
                    ((i[r] = t),
                        (function (t, e, n) {
                            const i = X(Object.create(null), [n ? ie.get(n) : {}, ie.get(e), t.defaults])
                            ie.set(e, i),
                            t.defaultRoutes &&
                            (function (t, e) {
                                Object.keys(e).forEach(n => {
                                    const i = n.split('.'),
                                        r = i.pop(),
                                        o = [t].concat(i).join('.'),
                                        a = e[n].split('.'),
                                        s = a.pop(),
                                        l = a.join('.')
                                    ie.route(o, r, l, s)
                                })
                            })(e, t.defaultRoutes),
                            t.descriptors && ie.describe(e, t.descriptors)
                        })(t, o, n),
                    this.override && ie.override(t.id, t.overrides)),
                        o
                )
            }

            get(t) {
                return this.items[t]
            }

            unregister(t) {
                const e = this.items,
                    n = t.id,
                    i = this.scope
                n in e && delete e[n], i && n in ie[i] && (delete ie[i][n], this.override && delete Zt[n])
            }
        }

        class Yi {
            constructor() {
                ;(this.controllers = new Ui(Fn, 'datasets', !0)),
                    (this.elements = new Ui(Ai, 'elements')),
                    (this.plugins = new Ui(Object, 'plugins')),
                    (this.scales = new Ui($i, 'scales')),
                    (this._typedRegistries = [this.controllers, this.scales, this.elements])
            }

            add(...t) {
                this._each('register', t)
            }

            remove(...t) {
                this._each('unregister', t)
            }

            addControllers(...t) {
                this._each('register', t, this.controllers)
            }

            addElements(...t) {
                this._each('register', t, this.elements)
            }

            addPlugins(...t) {
                this._each('register', t, this.plugins)
            }

            addScales(...t) {
                this._each('register', t, this.scales)
            }

            getController(t) {
                return this._get(t, this.controllers, 'controller')
            }

            getElement(t) {
                return this._get(t, this.elements, 'element')
            }

            getPlugin(t) {
                return this._get(t, this.plugins, 'plugin')
            }

            getScale(t) {
                return this._get(t, this.scales, 'scale')
            }

            removeControllers(...t) {
                this._each('unregister', t, this.controllers)
            }

            removeElements(...t) {
                this._each('unregister', t, this.elements)
            }

            removePlugins(...t) {
                this._each('unregister', t, this.plugins)
            }

            removeScales(...t) {
                this._each('unregister', t, this.scales)
            }

            _each(t, e, n) {
                ;[...e].forEach(e => {
                    const i = n || this._getRegistryForType(e)
                    n || i.isForType(e) || (i === this.plugins && e.id)
                        ? this._exec(t, i, e)
                        : H(e, e => {
                            const i = n || this._getRegistryForType(e)
                            this._exec(t, i, e)
                        })
                })
            }

            _exec(t, e, n) {
                const i = J(t)
                W(n['before' + i], [], n), e[t](n), W(n['after' + i], [], n)
            }

            _getRegistryForType(t) {
                for (let e = 0; e < this._typedRegistries.length; e++) {
                    const n = this._typedRegistries[e]
                    if (n.isForType(t)) return n
                }
                return this.plugins
            }

            _get(t, e, n) {
                const i = e.get(t)
                if (void 0 === i) throw new Error('"' + t + '" is not a registered ' + n + '.')
                return i
            }
        }

        var Qi = new Yi()

        class Xi {
            constructor() {
                this._init = []
            }

            notify(t, e, n, i) {
                'beforeInit' === e &&
                ((this._init = this._createDescriptors(t, !0)), this._notify(this._init, t, 'install'))
                const r = i ? this._descriptors(t).filter(i) : this._descriptors(t),
                    o = this._notify(r, t, e, n)
                return (
                    'afterDestroy' === e &&
                    (this._notify(r, t, 'stop'), this._notify(this._init, t, 'uninstall')),
                        o
                )
            }

            _notify(t, e, n, i) {
                i = i || {}
                for (const r of t) {
                    const t = r.plugin
                    if (!1 === W(t[n], [e, i, r.options], t) && i.cancelable) return !1
                }
                return !0
            }

            invalidate() {
                A(this._cache) || ((this._oldCache = this._cache), (this._cache = void 0))
            }

            _descriptors(t) {
                if (this._cache) return this._cache
                const e = (this._cache = this._createDescriptors(t))
                return this._notifyStateChanges(t), e
            }

            _createDescriptors(t, e) {
                const n = t && t.config,
                    i = B(n.options && n.options.plugins, {}),
                    r = (function (t) {
                        const e = {},
                            n = [],
                            i = Object.keys(Qi.plugins.items)
                        for (let t = 0; t < i.length; t++) n.push(Qi.getPlugin(i[t]))
                        const r = t.plugins || []
                        for (let t = 0; t < r.length; t++) {
                            const i = r[t]
                            ;-1 === n.indexOf(i) && (n.push(i), (e[i.id] = !0))
                        }
                        return {plugins: n, localIds: e}
                    })(n)
                return !1 !== i || e
                    ? (function (t, {plugins: e, localIds: n}, i, r) {
                        const o = [],
                            a = t.getContext()
                        for (const s of e) {
                            const e = s.id,
                                l = qi(i[e], r)
                            null !== l &&
                            o.push({plugin: s, options: Ki(t.config, {plugin: s, local: n[e]}, l, a)})
                        }
                        return o
                    })(t, r, i, e)
                    : []
            }

            _notifyStateChanges(t) {
                const e = this._oldCache || [],
                    n = this._cache,
                    i = (t, e) => t.filter(t => !e.some(e => t.plugin.id === e.plugin.id))
                this._notify(i(e, n), t, 'stop'), this._notify(i(n, e), t, 'start')
            }
        }

        function qi(t, e) {
            return e || !1 !== t ? (!0 === t ? {} : t) : null
        }

        function Ki(t, {plugin: e, local: n}, i, r) {
            const o = t.pluginScopeKeys(e),
                a = t.getOptionScopes(i, o)
            return (
                n && e.defaults && a.push(e.defaults),
                    t.createResolver(a, r, [''], {scriptable: !1, indexable: !1, allKeys: !0})
            )
        }

        function Gi(t, e) {
            const n = ie.datasets[t] || {}
            return ((e.datasets || {})[t] || {}).indexAxis || e.indexAxis || n.indexAxis || 'x'
        }

        function Zi(t) {
            if ('x' === t || 'y' === t || 'r' === t) return t
        }

        function Ji(t, ...e) {
            if (Zi(t)) return t
            for (const i of e) {
                const e =
                    i.axis ||
                    ('top' === (n = i.position) || 'bottom' === n
                        ? 'x'
                        : 'left' === n || 'right' === n
                            ? 'y'
                            : void 0) ||
                    (t.length > 1 && Zi(t[0].toLowerCase()))
                if (e) return e
            }
            var n
            throw new Error(
                `Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`
            )
        }

        function tr(t, e, n) {
            if (n[e + 'AxisID'] === t) return {axis: e}
        }

        function er(t) {
            const e = t.options || (t.options = {})
            ;(e.plugins = B(e.plugins, {})),
                (e.scales = (function (t, e) {
                    const n = Zt[t.type] || {scales: {}},
                        i = e.scales || {},
                        r = Gi(t.type, e),
                        o = Object.create(null)
                    return (
                        Object.keys(i).forEach(e => {
                            const a = i[e]
                            if (!I(a)) return console.error(`Invalid scale configuration for scale: ${e}`)
                            if (a._proxy)
                                return console.warn(`Ignoring resolver passed as options for scale: ${e}`)
                            const s = Ji(
                                    e,
                                    a,
                                    (function (t, e) {
                                        if (e.data && e.data.datasets) {
                                            const n = e.data.datasets.filter(e => e.xAxisID === t || e.yAxisID === t)
                                            if (n.length) return tr(t, 'x', n[0]) || tr(t, 'y', n[0])
                                        }
                                        return {}
                                    })(e, t),
                                    ie.scales[a.type]
                                ),
                                l = (function (t, e) {
                                    return t === e ? '_index_' : '_value_'
                                })(s, r),
                                c = n.scales || {}
                            o[e] = q(Object.create(null), [{axis: s}, a, c[s], c[l]])
                        }),
                            t.data.datasets.forEach(n => {
                                const r = n.type || t.type,
                                    a = n.indexAxis || Gi(r, e),
                                    s = (Zt[r] || {}).scales || {}
                                Object.keys(s).forEach(t => {
                                    const e = (function (t, e) {
                                            let n = t
                                            return (
                                                '_index_' === t ? (n = e) : '_value_' === t && (n = 'x' === e ? 'y' : 'x'), n
                                            )
                                        })(t, a),
                                        r = n[e + 'AxisID'] || e
                                    ;(o[r] = o[r] || Object.create(null)), q(o[r], [{axis: e}, i[r], s[t]])
                                })
                            }),
                            Object.keys(o).forEach(t => {
                                const e = o[t]
                                q(e, [ie.scales[e.type], ie.scale])
                            }),
                            o
                    )
                })(t, e))
        }

        function nr(t) {
            return ((t = t || {}).datasets = t.datasets || []), (t.labels = t.labels || []), t
        }

        const ir = new Map(),
            rr = new Set()

        function or(t, e) {
            let n = ir.get(t)
            return n || ((n = e()), ir.set(t, n), rr.add(n)), n
        }

        const ar = (t, e, n) => {
            const i = Z(e, n)
            void 0 !== i && t.add(i)
        }

        class sr {
            constructor(t) {
                ;(this._config = (function (t) {
                    return ((t = t || {}).data = nr(t.data)), er(t), t
                })(t)),
                    (this._scopeCache = new Map()),
                    (this._resolverCache = new Map())
            }

            get platform() {
                return this._config.platform
            }

            get type() {
                return this._config.type
            }

            set type(t) {
                this._config.type = t
            }

            get data() {
                return this._config.data
            }

            set data(t) {
                this._config.data = nr(t)
            }

            get options() {
                return this._config.options
            }

            set options(t) {
                this._config.options = t
            }

            get plugins() {
                return this._config.plugins
            }

            update() {
                const t = this._config
                this.clearCache(), er(t)
            }

            clearCache() {
                this._scopeCache.clear(), this._resolverCache.clear()
            }

            datasetScopeKeys(t) {
                return or(t, () => [[`datasets.${t}`, '']])
            }

            datasetAnimationScopeKeys(t, e) {
                return or(`${t}.transition.${e}`, () => [
                    [`datasets.${t}.transitions.${e}`, `transitions.${e}`],
                    [`datasets.${t}`, '']
                ])
            }

            datasetElementScopeKeys(t, e) {
                return or(`${t}-${e}`, () => [
                    [`datasets.${t}.elements.${e}`, `datasets.${t}`, `elements.${e}`, '']
                ])
            }

            pluginScopeKeys(t) {
                const e = t.id
                return or(`${this.type}-plugin-${e}`, () => [
                    [`plugins.${e}`, ...(t.additionalOptionScopes || [])]
                ])
            }

            _cachedScopes(t, e) {
                const n = this._scopeCache
                let i = n.get(t)
                return (i && !e) || ((i = new Map()), n.set(t, i)), i
            }

            getOptionScopes(t, e, n) {
                const {options: i, type: r} = this,
                    o = this._cachedScopes(t, n),
                    a = o.get(e)
                if (a) return a
                const s = new Set()
                e.forEach(e => {
                    t && (s.add(t), e.forEach(e => ar(s, t, e))),
                        e.forEach(t => ar(s, i, t)),
                        e.forEach(t => ar(s, Zt[r] || {}, t)),
                        e.forEach(t => ar(s, ie, t)),
                        e.forEach(t => ar(s, Jt, t))
                })
                const l = Array.from(s)
                return 0 === l.length && l.push(Object.create(null)), rr.has(e) && o.set(e, l), l
            }

            chartOptionScopes() {
                const {options: t, type: e} = this
                return [t, Zt[e] || {}, ie.datasets[e] || {}, {type: e}, ie, Jt]
            }

            resolveNamedOptions(t, e, n, i = ['']) {
                const r = {$shared: !0},
                    {resolver: o, subPrefixes: a} = lr(this._resolverCache, t, i)
                let s = o
                ;(function (t, e) {
                    const {isScriptable: n, isIndexable: i} = Te(t)
                    for (const r of e) {
                        const e = n(r),
                            o = i(r),
                            a = (o || e) && t[r]
                        if ((e && (et(a) || cr(a))) || (o && N(a))) return !0
                    }
                    return !1
                })(o, e) &&
                ((r.$shared = !1), (s = Oe(o, (n = et(n) ? n() : n), this.createResolver(t, n, a))))
                for (const t of e) r[t] = s[t]
                return r
            }

            createResolver(t, e, n = [''], i) {
                const {resolver: r} = lr(this._resolverCache, t, n)
                return I(e) ? Oe(r, e, void 0, i) : r
            }
        }

        function lr(t, e, n) {
            let i = t.get(e)
            i || ((i = new Map()), t.set(e, i))
            const r = n.join()
            let o = i.get(r)
            return (
                o ||
                ((o = {
                    resolver: De(e, n),
                    subPrefixes: n.filter(t => !t.toLowerCase().includes('hover'))
                }),
                    i.set(r, o)),
                    o
            )
        }

        const cr = t => I(t) && Object.getOwnPropertyNames(t).some(e => et(t[e])),
            ur = ['top', 'bottom', 'left', 'right', 'chartArea']

        function hr(t, e) {
            return 'top' === t || 'bottom' === t || (-1 === ur.indexOf(t) && 'x' === e)
        }

        function dr(t, e) {
            return function (n, i) {
                return n[t] === i[t] ? n[e] - i[e] : n[t] - i[t]
            }
        }

        function fr(t) {
            const e = t.chart,
                n = e.options.animation
            e.notifyPlugins('afterRender'), W(n && n.onComplete, [t], e)
        }

        function pr(t) {
            const e = t.chart,
                n = e.options.animation
            W(n && n.onProgress, [t], e)
        }

        function gr(t) {
            return (
                Ke() && 'string' == typeof t
                    ? (t = document.getElementById(t))
                    : t && t.length && (t = t[0]),
                t && t.canvas && (t = t.canvas),
                    t
            )
        }

        const mr = {},
            br = t => {
                const e = gr(t)
                return Object.values(mr)
                    .filter(t => t.canvas === e)
                    .pop()
            }

        function yr(t, e, n) {
            const i = Object.keys(t)
            for (const r of i) {
                const i = +r
                if (i >= e) {
                    const o = t[r]
                    delete t[r], (n > 0 || i > e) && (t[i + n] = o)
                }
            }
        }

        function vr(t, e, n) {
            return t.options.clip ? t[n] : e[n]
        }

        class xr {
            static defaults = ie
            static instances = mr
            static overrides = Zt
            static registry = Qi
            static version = '4.4.1'
            static getChart = br

            constructor(t, e) {
                const n = (this.config = new sr(e)),
                    i = gr(t),
                    r = br(i)
                if (r)
                    throw new Error(
                        "Canvas is already in use. Chart with ID '" +
                        r.id +
                        "' must be destroyed before the canvas with ID '" +
                        r.canvas.id +
                        "' can be reused."
                    )
                const o = n.createResolver(n.chartOptionScopes(), this.getContext())
                ;(this.platform = new (n.platform ||
                    (function (t) {
                        return !Ke() || ('undefined' != typeof OffscreenCanvas && t instanceof OffscreenCanvas)
                            ? vi
                            : Ri
                    })(i))()),
                    this.platform.updateConfig(n)
                const a = this.platform.acquireContext(i, o.aspectRatio),
                    s = a && a.canvas,
                    l = s && s.height,
                    c = s && s.width
                ;(this.id = R()),
                    (this.ctx = a),
                    (this.canvas = s),
                    (this.width = c),
                    (this.height = l),
                    (this._options = o),
                    (this._aspectRatio = this.aspectRatio),
                    (this._layers = []),
                    (this._metasets = []),
                    (this._stacks = void 0),
                    (this.boxes = []),
                    (this.currentDevicePixelRatio = void 0),
                    (this.chartArea = void 0),
                    (this._active = []),
                    (this._lastEvent = void 0),
                    (this._listeners = {}),
                    (this._responsiveListeners = void 0),
                    (this._sortedMetasets = []),
                    (this.scales = {}),
                    (this._plugins = new Xi()),
                    (this.$proxies = {}),
                    (this._hiddenIndices = {}),
                    (this.attached = !1),
                    (this._animationsDisabled = void 0),
                    (this.$context = void 0),
                    (this._doResize = (function (t, e) {
                        let n
                        return function (...i) {
                            return e ? (clearTimeout(n), (n = setTimeout(t, e, i))) : t.apply(this, i), e
                        }
                    })(t => this.update(t), o.resizeDelay || 0)),
                    (this._dataChanges = []),
                    (mr[this.id] = this),
                    a && s
                        ? (wn.listen(this, 'complete', fr),
                            wn.listen(this, 'progress', pr),
                            this._initialize(),
                        this.attached && this.update())
                        : console.error("Failed to create chart: can't acquire context from the given item")
            }

            get aspectRatio() {
                const {
                    options: {aspectRatio: t, maintainAspectRatio: e},
                    width: n,
                    height: i,
                    _aspectRatio: r
                } = this
                return A(t) ? (e && r ? r : i ? n / i : null) : t
            }

            get data() {
                return this.config.data
            }

            set data(t) {
                this.config.data = t
            }

            get options() {
                return this._options
            }

            set options(t) {
                this.config.options = t
            }

            get registry() {
                return Qi
            }

            static register(...t) {
                Qi.add(...t), _r()
            }

            static unregister(...t) {
                Qi.remove(...t), _r()
            }

            _initialize() {
                return (
                    this.notifyPlugins('beforeInit'),
                        this.options.responsive ? this.resize() : an(this, this.options.devicePixelRatio),
                        this.bindEvents(),
                        this.notifyPlugins('afterInit'),
                        this
                )
            }

            clear() {
                return se(this.canvas, this.ctx), this
            }

            stop() {
                return wn.stop(this), this
            }

            resize(t, e) {
                wn.running(this) ? (this._resizeBeforeDraw = {width: t, height: e}) : this._resize(t, e)
            }

            _resize(t, e) {
                const n = this.options,
                    i = this.canvas,
                    r = n.maintainAspectRatio && this.aspectRatio,
                    o = this.platform.getMaximumSize(i, t, e, r),
                    a = n.devicePixelRatio || this.platform.getDevicePixelRatio(),
                    s = this.width ? 'resize' : 'attach'
                ;(this.width = o.width),
                    (this.height = o.height),
                    (this._aspectRatio = this.aspectRatio),
                an(this, a, !0) &&
                (this.notifyPlugins('resize', {size: o}),
                    W(n.onResize, [this, o], this),
                this.attached && this._doResize(s) && this.render())
            }

            ensureScalesHaveIDs() {
                H(this.options.scales || {}, (t, e) => {
                    t.id = e
                })
            }

            buildOrUpdateScales() {
                const t = this.options,
                    e = t.scales,
                    n = this.scales,
                    i = Object.keys(n).reduce((t, e) => ((t[e] = !1), t), {})
                let r = []
                e &&
                (r = r.concat(
                    Object.keys(e).map(t => {
                        const n = e[t],
                            i = Ji(t, n),
                            r = 'r' === i,
                            o = 'x' === i
                        return {
                            options: n,
                            dposition: r ? 'chartArea' : o ? 'bottom' : 'left',
                            dtype: r ? 'radialLinear' : o ? 'category' : 'linear'
                        }
                    })
                )),
                    H(r, e => {
                        const r = e.options,
                            o = r.id,
                            a = Ji(o, r),
                            s = B(r.type, e.dtype)
                        ;(void 0 !== r.position && hr(r.position, a) === hr(e.dposition)) ||
                        (r.position = e.dposition),
                            (i[o] = !0)
                        let l = null
                        o in n && n[o].type === s
                            ? (l = n[o])
                            : ((l = new (Qi.getScale(s))({id: o, type: s, ctx: this.ctx, chart: this})),
                                (n[l.id] = l)),
                            l.init(r, t)
                    }),
                    H(i, (t, e) => {
                        t || delete n[e]
                    }),
                    H(n, t => {
                        bi.configure(this, t, t.options), bi.addBox(this, t)
                    })
            }

            _updateMetasets() {
                const t = this._metasets,
                    e = this.data.datasets.length,
                    n = t.length
                if ((t.sort((t, e) => t.index - e.index), n > e)) {
                    for (let t = e; t < n; ++t) this._destroyDatasetMeta(t)
                    t.splice(e, n - e)
                }
                this._sortedMetasets = t.slice(0).sort(dr('order', 'index'))
            }

            _removeUnreferencedMetasets() {
                const {
                    _metasets: t,
                    data: {datasets: e}
                } = this
                t.length > e.length && delete this._stacks,
                    t.forEach((t, n) => {
                        0 === e.filter(e => e === t._dataset).length && this._destroyDatasetMeta(n)
                    })
            }

            buildOrUpdateControllers() {
                const t = [],
                    e = this.data.datasets
                let n, i
                for (this._removeUnreferencedMetasets(), n = 0, i = e.length; n < i; n++) {
                    const i = e[n]
                    let r = this.getDatasetMeta(n)
                    const o = i.type || this.config.type
                    if (
                        (r.type && r.type !== o && (this._destroyDatasetMeta(n), (r = this.getDatasetMeta(n))),
                            (r.type = o),
                            (r.indexAxis = i.indexAxis || Gi(o, this.options)),
                            (r.order = i.order || 0),
                            (r.index = n),
                            (r.label = '' + i.label),
                            (r.visible = this.isDatasetVisible(n)),
                            r.controller)
                    )
                        r.controller.updateIndex(n), r.controller.linkScales()
                    else {
                        const e = Qi.getController(o),
                            {datasetElementType: i, dataElementType: a} = ie.datasets[o]
                        Object.assign(e, {
                            dataElementType: Qi.getElement(a),
                            datasetElementType: i && Qi.getElement(i)
                        }),
                            (r.controller = new e(this, n)),
                            t.push(r.controller)
                    }
                }
                return this._updateMetasets(), t
            }

            _resetElements() {
                H(
                    this.data.datasets,
                    (t, e) => {
                        this.getDatasetMeta(e).controller.reset()
                    },
                    this
                )
            }

            reset() {
                this._resetElements(), this.notifyPlugins('reset')
            }

            update(t) {
                const e = this.config
                e.update()
                const n = (this._options = e.createResolver(e.chartOptionScopes(), this.getContext())),
                    i = (this._animationsDisabled = !n.animation)
                if (
                    (this._updateScales(),
                        this._checkEventBindings(),
                        this._updateHiddenIndices(),
                        this._plugins.invalidate(),
                    !1 === this.notifyPlugins('beforeUpdate', {mode: t, cancelable: !0}))
                )
                    return
                const r = this.buildOrUpdateControllers()
                this.notifyPlugins('beforeElementsUpdate')
                let o = 0
                for (let t = 0, e = this.data.datasets.length; t < e; t++) {
                    const {controller: e} = this.getDatasetMeta(t),
                        n = !i && -1 === r.indexOf(e)
                    e.buildOrUpdateElements(n), (o = Math.max(+e.getMaxOverflow(), o))
                }
                ;(o = this._minPadding = n.layout.autoPadding ? o : 0),
                    this._updateLayout(o),
                i ||
                H(r, t => {
                    t.reset()
                }),
                    this._updateDatasets(t),
                    this.notifyPlugins('afterUpdate', {mode: t}),
                    this._layers.sort(dr('z', '_idx'))
                const {_active: a, _lastEvent: s} = this
                s ? this._eventHandler(s, !0) : a.length && this._updateHoverStyles(a, a, !0), this.render()
            }

            _updateScales() {
                H(this.scales, t => {
                    bi.removeBox(this, t)
                }),
                    this.ensureScalesHaveIDs(),
                    this.buildOrUpdateScales()
            }

            _checkEventBindings() {
                const t = this.options,
                    e = new Set(Object.keys(this._listeners)),
                    n = new Set(t.events)
                ;(nt(e, n) && !!this._responsiveListeners === t.responsive) ||
                (this.unbindEvents(), this.bindEvents())
            }

            _updateHiddenIndices() {
                const {_hiddenIndices: t} = this,
                    e = this._getUniformDataChanges() || []
                for (const {method: n, start: i, count: r} of e)
                    yr(t, i, '_removeElements' === n ? -r : r)
            }

            _getUniformDataChanges() {
                const t = this._dataChanges
                if (!t || !t.length) return
                this._dataChanges = []
                const e = this.data.datasets.length,
                    n = e =>
                        new Set(t.filter(t => t[0] === e).map((t, e) => e + ',' + t.splice(1).join(','))),
                    i = n(0)
                for (let t = 1; t < e; t++) if (!nt(i, n(t))) return
                return Array.from(i)
                    .map(t => t.split(','))
                    .map(t => ({method: t[1], start: +t[2], count: +t[3]}))
            }

            _updateLayout(t) {
                if (!1 === this.notifyPlugins('beforeLayout', {cancelable: !0})) return
                bi.update(this, this.width, this.height, t)
                const e = this.chartArea,
                    n = e.width <= 0 || e.height <= 0
                ;(this._layers = []),
                    H(
                        this.boxes,
                        t => {
                            ;(n && 'chartArea' === t.position) ||
                            (t.configure && t.configure(), this._layers.push(...t._layers()))
                        },
                        this
                    ),
                    this._layers.forEach((t, e) => {
                        t._idx = e
                    }),
                    this.notifyPlugins('afterLayout')
            }

            _updateDatasets(t) {
                if (!1 !== this.notifyPlugins('beforeDatasetsUpdate', {mode: t, cancelable: !0})) {
                    for (let t = 0, e = this.data.datasets.length; t < e; ++t)
                        this.getDatasetMeta(t).controller.configure()
                    for (let e = 0, n = this.data.datasets.length; e < n; ++e)
                        this._updateDataset(e, et(t) ? t({datasetIndex: e}) : t)
                    this.notifyPlugins('afterDatasetsUpdate', {mode: t})
                }
            }

            _updateDataset(t, e) {
                const n = this.getDatasetMeta(t),
                    i = {meta: n, index: t, mode: e, cancelable: !0}
                !1 !== this.notifyPlugins('beforeDatasetUpdate', i) &&
                (n.controller._update(e),
                    (i.cancelable = !1),
                    this.notifyPlugins('afterDatasetUpdate', i))
            }

            render() {
                !1 !== this.notifyPlugins('beforeRender', {cancelable: !0}) &&
                (wn.has(this)
                    ? this.attached && !wn.running(this) && wn.start(this)
                    : (this.draw(), fr({chart: this})))
            }

            draw() {
                let t
                if (this._resizeBeforeDraw) {
                    const {width: t, height: e} = this._resizeBeforeDraw
                    this._resize(t, e), (this._resizeBeforeDraw = null)
                }
                if ((this.clear(), this.width <= 0 || this.height <= 0)) return
                if (!1 === this.notifyPlugins('beforeDraw', {cancelable: !0})) return
                const e = this._layers
                for (t = 0; t < e.length && e[t].z <= 0; ++t) e[t].draw(this.chartArea)
                for (this._drawDatasets(); t < e.length; ++t) e[t].draw(this.chartArea)
                this.notifyPlugins('afterDraw')
            }

            _getSortedDatasetMetas(t) {
                const e = this._sortedMetasets,
                    n = []
                let i, r
                for (i = 0, r = e.length; i < r; ++i) {
                    const r = e[i]
                    ;(t && !r.visible) || n.push(r)
                }
                return n
            }

            getSortedVisibleDatasetMetas() {
                return this._getSortedDatasetMetas(!0)
            }

            _drawDatasets() {
                if (!1 === this.notifyPlugins('beforeDatasetsDraw', {cancelable: !0})) return
                const t = this.getSortedVisibleDatasetMetas()
                for (let e = t.length - 1; e >= 0; --e) this._drawDataset(t[e])
                this.notifyPlugins('afterDatasetsDraw')
            }

            _drawDataset(t) {
                const e = this.ctx,
                    n = t._clip,
                    i = !n.disabled,
                    r = (function (t, e) {
                        const {xScale: n, yScale: i} = t
                        return n && i
                            ? {
                                left: vr(n, e, 'left'),
                                right: vr(n, e, 'right'),
                                top: vr(i, e, 'top'),
                                bottom: vr(i, e, 'bottom')
                            }
                            : e
                    })(t, this.chartArea),
                    o = {meta: t, index: t.index, cancelable: !0}
                !1 !== this.notifyPlugins('beforeDatasetDraw', o) &&
                (i &&
                he(e, {
                    left: !1 === n.left ? 0 : r.left - n.left,
                    right: !1 === n.right ? this.width : r.right + n.right,
                    top: !1 === n.top ? 0 : r.top - n.top,
                    bottom: !1 === n.bottom ? this.height : r.bottom + n.bottom
                }),
                    t.controller.draw(),
                i && de(e),
                    (o.cancelable = !1),
                    this.notifyPlugins('afterDatasetDraw', o))
            }

            isPointInArea(t) {
                return ue(t, this.chartArea, this._minPadding)
            }

            getElementsAtEventForMode(t, e, n, i) {
                const r = oi.modes[e]
                return 'function' == typeof r ? r(this, t, n, i) : []
            }

            getDatasetMeta(t) {
                const e = this.data.datasets[t],
                    n = this._metasets
                let i = n.filter(t => t && t._dataset === e).pop()
                return (
                    i ||
                    ((i = {
                        type: null,
                        data: [],
                        dataset: null,
                        controller: null,
                        hidden: null,
                        xAxisID: null,
                        yAxisID: null,
                        order: (e && e.order) || 0,
                        index: t,
                        _dataset: e,
                        _parsed: [],
                        _sorted: !1
                    }),
                        n.push(i)),
                        i
                )
            }

            getContext() {
                return this.$context || (this.$context = Le(null, {chart: this, type: 'chart'}))
            }

            getVisibleDatasetCount() {
                return this.getSortedVisibleDatasetMetas().length
            }

            isDatasetVisible(t) {
                const e = this.data.datasets[t]
                if (!e) return !1
                const n = this.getDatasetMeta(t)
                return 'boolean' == typeof n.hidden ? !n.hidden : !e.hidden
            }

            setDatasetVisibility(t, e) {
                this.getDatasetMeta(t).hidden = !e
            }

            toggleDataVisibility(t) {
                this._hiddenIndices[t] = !this._hiddenIndices[t]
            }

            getDataVisibility(t) {
                return !this._hiddenIndices[t]
            }

            _updateVisibility(t, e, n) {
                const i = n ? 'show' : 'hide',
                    r = this.getDatasetMeta(t),
                    o = r.controller._resolveAnimations(void 0, i)
                tt(e)
                    ? ((r.data[e].hidden = !n), this.update())
                    : (this.setDatasetVisibility(t, n),
                        o.update(r, {visible: n}),
                        this.update(e => (e.datasetIndex === t ? i : void 0)))
            }

            hide(t, e) {
                this._updateVisibility(t, e, !1)
            }

            show(t, e) {
                this._updateVisibility(t, e, !0)
            }

            _destroyDatasetMeta(t) {
                const e = this._metasets[t]
                e && e.controller && e.controller._destroy(), delete this._metasets[t]
            }

            _stop() {
                let t, e
                for (this.stop(), wn.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t)
                    this._destroyDatasetMeta(t)
            }

            destroy() {
                this.notifyPlugins('beforeDestroy')
                const {canvas: t, ctx: e} = this
                this._stop(),
                    this.config.clearCache(),
                t &&
                (this.unbindEvents(),
                    se(t, e),
                    this.platform.releaseContext(e),
                    (this.canvas = null),
                    (this.ctx = null)),
                    delete mr[this.id],
                    this.notifyPlugins('afterDestroy')
            }

            toBase64Image(...t) {
                return this.canvas.toDataURL(...t)
            }

            bindEvents() {
                this.bindUserEvents(),
                    this.options.responsive ? this.bindResponsiveEvents() : (this.attached = !0)
            }

            bindUserEvents() {
                const t = this._listeners,
                    e = this.platform,
                    n = (n, i) => {
                        e.addEventListener(this, n, i), (t[n] = i)
                    },
                    i = (t, e, n) => {
                        ;(t.offsetX = e), (t.offsetY = n), this._eventHandler(t)
                    }
                H(this.options.events, t => n(t, i))
            }

            bindResponsiveEvents() {
                this._responsiveListeners || (this._responsiveListeners = {})
                const t = this._responsiveListeners,
                    e = this.platform,
                    n = (n, i) => {
                        e.addEventListener(this, n, i), (t[n] = i)
                    },
                    i = (n, i) => {
                        t[n] && (e.removeEventListener(this, n, i), delete t[n])
                    },
                    r = (t, e) => {
                        this.canvas && this.resize(t, e)
                    }
                let o
                const a = () => {
                        i('attach', a), (this.attached = !0), this.resize(), n('resize', r), n('detach', o)
                    }
                ;(o = () => {
                    ;(this.attached = !1), i('resize', r), this._stop(), this._resize(0, 0), n('attach', a)
                }),
                    e.isAttached(this.canvas) ? a() : o()
            }

            unbindEvents() {
                H(this._listeners, (t, e) => {
                    this.platform.removeEventListener(this, e, t)
                }),
                    (this._listeners = {}),
                    H(this._responsiveListeners, (t, e) => {
                        this.platform.removeEventListener(this, e, t)
                    }),
                    (this._responsiveListeners = void 0)
            }

            updateHoverStyle(t, e, n) {
                const i = n ? 'set' : 'remove'
                let r, o, a, s
                for (
                    'dataset' === e &&
                    ((r = this.getDatasetMeta(t[0].datasetIndex)),
                        r.controller['_' + i + 'DatasetHoverStyle']()),
                        a = 0,
                        s = t.length;
                    a < s;
                    ++a
                ) {
                    o = t[a]
                    const e = o && this.getDatasetMeta(o.datasetIndex).controller
                    e && e[i + 'HoverStyle'](o.element, o.datasetIndex, o.index)
                }
            }

            getActiveElements() {
                return this._active || []
            }

            setActiveElements(t) {
                const e = this._active || [],
                    n = t.map(({datasetIndex: t, index: e}) => {
                        const n = this.getDatasetMeta(t)
                        if (!n) throw new Error('No dataset found at index ' + t)
                        return {datasetIndex: t, element: n.data[e], index: e}
                    })
                !$(n, e) && ((this._active = n), (this._lastEvent = null), this._updateHoverStyles(n, e))
            }

            notifyPlugins(t, e, n) {
                return this._plugins.notify(this, t, e, n)
            }

            isPluginEnabled(t) {
                return 1 === this._plugins._cache.filter(e => e.plugin.id === t).length
            }

            _updateHoverStyles(t, e, n) {
                const i = this.options.hover,
                    r = (t, e) =>
                        t.filter(t => !e.some(e => t.datasetIndex === e.datasetIndex && t.index === e.index)),
                    o = r(e, t),
                    a = n ? t : r(t, e)
                o.length && this.updateHoverStyle(o, i.mode, !1),
                a.length && i.mode && this.updateHoverStyle(a, i.mode, !0)
            }

            _eventHandler(t, e) {
                const n = {event: t, replay: e, cancelable: !0, inChartArea: this.isPointInArea(t)},
                    i = e => (e.options.events || this.options.events).includes(t.native.type)
                if (!1 === this.notifyPlugins('beforeEvent', n, i)) return
                const r = this._handleEvent(t, e, n.inChartArea)
                return (
                    (n.cancelable = !1),
                        this.notifyPlugins('afterEvent', n, i),
                    (r || n.changed) && this.render(),
                        this
                )
            }

            _handleEvent(t, e, n) {
                const {_active: i = [], options: r} = this,
                    o = e,
                    a = this._getActiveElements(t, i, n, o),
                    s = (function (t) {
                        return 'mouseup' === t.type || 'click' === t.type || 'contextmenu' === t.type
                    })(t),
                    l = (function (t, e, n, i) {
                        return n && 'mouseout' !== t.type ? (i ? e : t) : null
                    })(t, this._lastEvent, n, s)
                n &&
                ((this._lastEvent = null),
                    W(r.onHover, [t, a, this], this),
                s && W(r.onClick, [t, a, this], this))
                const c = !$(a, i)
                return (
                    (c || e) && ((this._active = a), this._updateHoverStyles(a, i, e)),
                        (this._lastEvent = l),
                        c
                )
            }

            _getActiveElements(t, e, n, i) {
                if ('mouseout' === t.type) return []
                if (!n) return e
                const r = this.options.hover
                return this.getElementsAtEventForMode(t, r.mode, r, i)
            }
        }

        function _r() {
            return H(xr.instances, t => t._plugins.invalidate())
        }

        function wr(t, e, n, i) {
            return {x: n + t * Math.cos(e), y: i + t * Math.sin(e)}
        }

        function kr(t, e, n, i, r, o) {
            const {x: a, y: s, startAngle: l, pixelMargin: c, innerRadius: u} = e,
                h = Math.max(e.outerRadius + i + n - c, 0),
                d = u > 0 ? u + i + n + c : 0
            let f = 0
            const p = r - l
            if (i) {
                const t = ((u > 0 ? u - i : 0) + (h > 0 ? h - i : 0)) / 2
                f = (p - (0 !== t ? (p * t) / (t + i) : p)) / 2
            }
            const g = (p - Math.max(0.001, p * h - n / it) / h) / 2,
                m = l + g + f,
                b = r - g - f,
                {
                    outerStart: y,
                    outerEnd: v,
                    innerStart: x,
                    innerEnd: _
                } = (function (t, e, n, i) {
                    const r = ke(t.options.borderRadius, [
                            'outerStart',
                            'outerEnd',
                            'innerStart',
                            'innerEnd'
                        ]),
                        o = (n - e) / 2,
                        a = Math.min(o, (i * e) / 2),
                        s = t => {
                            const e = ((n - Math.min(o, t)) * i) / 2
                            return Mt(t, 0, Math.min(o, e))
                        }
                    return {
                        outerStart: s(r.outerStart),
                        outerEnd: s(r.outerEnd),
                        innerStart: Mt(r.innerStart, 0, a),
                        innerEnd: Mt(r.innerEnd, 0, a)
                    }
                })(e, d, h, b - m),
                w = h - y,
                k = h - v,
                S = m + y / w,
                M = b - v / k,
                E = d + x,
                C = d + _,
                P = m + x / E,
                L = b - _ / C
            if ((t.beginPath(), o)) {
                const e = (S + M) / 2
                if ((t.arc(a, s, h, S, e), t.arc(a, s, h, e, M), v > 0)) {
                    const e = wr(k, M, a, s)
                    t.arc(e.x, e.y, v, M, b + lt)
                }
                const n = wr(C, b, a, s)
                if ((t.lineTo(n.x, n.y), _ > 0)) {
                    const e = wr(C, L, a, s)
                    t.arc(e.x, e.y, _, b + lt, L + Math.PI)
                }
                const i = (b - _ / d + (m + x / d)) / 2
                if ((t.arc(a, s, d, b - _ / d, i, !0), t.arc(a, s, d, i, m + x / d, !0), x > 0)) {
                    const e = wr(E, P, a, s)
                    t.arc(e.x, e.y, x, P + Math.PI, m - lt)
                }
                const r = wr(w, m, a, s)
                if ((t.lineTo(r.x, r.y), y > 0)) {
                    const e = wr(w, S, a, s)
                    t.arc(e.x, e.y, y, m - lt, S)
                }
            } else {
                t.moveTo(a, s)
                const e = Math.cos(S) * h + a,
                    n = Math.sin(S) * h + s
                t.lineTo(e, n)
                const i = Math.cos(M) * h + a,
                    r = Math.sin(M) * h + s
                t.lineTo(i, r)
            }
            t.closePath()
        }

        function Sr(t, e, n = e) {
            ;(t.lineCap = B(n.borderCapStyle, e.borderCapStyle)),
                t.setLineDash(B(n.borderDash, e.borderDash)),
                (t.lineDashOffset = B(n.borderDashOffset, e.borderDashOffset)),
                (t.lineJoin = B(n.borderJoinStyle, e.borderJoinStyle)),
                (t.lineWidth = B(n.borderWidth, e.borderWidth)),
                (t.strokeStyle = B(n.borderColor, e.borderColor))
        }

        function Mr(t, e, n) {
            t.lineTo(n.x, n.y)
        }

        function Er(t, e, n = {}) {
            const i = t.length,
                {start: r = 0, end: o = i - 1} = n,
                {start: a, end: s} = e,
                l = Math.max(r, a),
                c = Math.min(o, s),
                u = (r < a && o < a) || (r > s && o > s)
            return {count: i, start: l, loop: e.loop, ilen: c < l && !u ? i + c - l : c - l}
        }

        function Cr(t, e, n, i) {
            const {points: r, options: o} = e,
                {count: a, start: s, loop: l, ilen: c} = Er(r, n, i),
                u = (function (t) {
                    return t.stepped ? fe : t.tension || 'monotone' === t.cubicInterpolationMode ? pe : Mr
                })(o)
            let h,
                d,
                f,
                {move: p = !0, reverse: g} = i || {}
            for (h = 0; h <= c; ++h)
                (d = r[(s + (g ? c - h : h)) % a]),
                d.skip || (p ? (t.moveTo(d.x, d.y), (p = !1)) : u(t, f, d, g, o.stepped), (f = d))
            return l && ((d = r[(s + (g ? c : 0)) % a]), u(t, f, d, g, o.stepped)), !!l
        }

        function Pr(t, e, n, i) {
            const r = e.points,
                {count: o, start: a, ilen: s} = Er(r, n, i),
                {move: l = !0, reverse: c} = i || {}
            let u,
                h,
                d,
                f,
                p,
                g,
                m = 0,
                b = 0
            const y = t => (a + (c ? s - t : t)) % o,
                v = () => {
                    f !== p && (t.lineTo(m, p), t.lineTo(m, f), t.lineTo(m, g))
                }
            for (l && ((h = r[y(0)]), t.moveTo(h.x, h.y)), u = 0; u <= s; ++u) {
                if (((h = r[y(u)]), h.skip)) continue
                const e = h.x,
                    n = h.y,
                    i = 0 | e
                i === d
                    ? (n < f ? (f = n) : n > p && (p = n), (m = (b * m + e) / ++b))
                    : (v(), t.lineTo(e, n), (d = i), (b = 0), (f = p = n)),
                    (g = n)
            }
            v()
        }

        function Lr(t) {
            const e = t.options,
                n = e.borderDash && e.borderDash.length
            return t._decimated ||
            t._loop ||
            e.tension ||
            'monotone' === e.cubicInterpolationMode ||
            e.stepped ||
            n
                ? Cr
                : Pr
        }

        const Dr = 'function' == typeof Path2D

        class Or extends Ai {
            static id = 'line'
            static defaults = {
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0,
                borderJoinStyle: 'miter',
                borderWidth: 3,
                capBezierPoints: !0,
                cubicInterpolationMode: 'default',
                fill: !1,
                spanGaps: !1,
                stepped: !1,
                tension: 0
            }
            static defaultRoutes = {backgroundColor: 'backgroundColor', borderColor: 'borderColor'}
            static descriptors = {_scriptable: !0, _indexable: t => 'borderDash' !== t && 'fill' !== t}

            constructor(t) {
                super(),
                    (this.animated = !0),
                    (this.options = void 0),
                    (this._chart = void 0),
                    (this._loop = void 0),
                    (this._fullLoop = void 0),
                    (this._path = void 0),
                    (this._points = void 0),
                    (this._segments = void 0),
                    (this._decimated = !1),
                    (this._pointsUpdated = !1),
                    (this._datasetIndex = void 0),
                t && Object.assign(this, t)
            }

            get points() {
                return this._points
            }

            set points(t) {
                ;(this._points = t), delete this._segments, delete this._path, (this._pointsUpdated = !1)
            }

            get segments() {
                return (
                    this._segments ||
                    (this._segments = (function (t, e) {
                        const n = t.points,
                            i = t.options.spanGaps,
                            r = n.length
                        if (!r) return []
                        const o = !!t._loop,
                            {start: a, end: s} = (function (t, e, n, i) {
                                let r = 0,
                                    o = e - 1
                                if (n && !i) for (; r < e && !t[r].skip;) r++
                                for (; r < e && t[r].skip;) r++
                                for (r %= e, n && (o += r); o > r && t[o % e].skip;) o--
                                return (o %= e), {start: r, end: o}
                            })(n, r, o, i)
                        return (function (t, e, n, i) {
                            return i && i.setContext && n
                                ? (function (t, e, n, i) {
                                    const r = t._chart.getContext(),
                                        o = vn(t.options),
                                        {
                                            _datasetIndex: a,
                                            options: {spanGaps: s}
                                        } = t,
                                        l = n.length,
                                        c = []
                                    let u = o,
                                        h = e[0].start,
                                        d = h

                                    function f(t, e, i, r) {
                                        const o = s ? -1 : 1
                                        if (t !== e) {
                                            for (t += l; n[t % l].skip;) t -= o
                                            for (; n[e % l].skip;) e += o
                                            t % l != e % l &&
                                            (c.push({start: t % l, end: e % l, loop: i, style: r}),
                                                (u = r),
                                                (h = e % l))
                                        }
                                    }

                                    for (const t of e) {
                                        h = s ? h : t.start
                                        let e,
                                            o = n[h % l]
                                        for (d = h + 1; d <= t.end; d++) {
                                            const s = n[d % l]
                                            ;(e = vn(
                                                i.setContext(
                                                    Le(r, {
                                                        type: 'segment',
                                                        p0: o,
                                                        p1: s,
                                                        p0DataIndex: (d - 1) % l,
                                                        p1DataIndex: d % l,
                                                        datasetIndex: a
                                                    })
                                                )
                                            )),
                                            xn(e, u) && f(h, d - 1, t.loop, u),
                                                (o = s),
                                                (u = e)
                                        }
                                        h < d - 1 && f(h, d - 1, t.loop, u)
                                    }
                                    return c
                                })(t, e, n, i)
                                : e
                        })(
                            t,
                            !0 === i
                                ? [{start: a, end: s, loop: o}]
                                : (function (t, e, n, i) {
                                    const r = t.length,
                                        o = []
                                    let a,
                                        s = e,
                                        l = t[e]
                                    for (a = e + 1; a <= n; ++a) {
                                        const n = t[a % r]
                                        n.skip || n.stop
                                            ? l.skip ||
                                            ((i = !1),
                                                o.push({start: e % r, end: (a - 1) % r, loop: i}),
                                                (e = s = n.stop ? a : null))
                                            : ((s = a), l.skip && (e = a)),
                                            (l = n)
                                    }
                                    return null !== s && o.push({start: e % r, end: s % r, loop: i}), o
                                })(n, a, s < a ? s + r : s, !!t._fullLoop && 0 === a && s === r - 1),
                            n,
                            e
                        )
                    })(this, this.options.segment))
                )
            }

            updateControlPoints(t, e) {
                const n = this.options
                if (
                    (n.tension || 'monotone' === n.cubicInterpolationMode) &&
                    !n.stepped &&
                    !this._pointsUpdated
                ) {
                    const i = n.spanGaps ? this._loop : this._fullLoop
                    qe(this._points, n, t, i, e), (this._pointsUpdated = !0)
                }
            }

            first() {
                const t = this.segments,
                    e = this.points
                return t.length && e[t[0].start]
            }

            last() {
                const t = this.segments,
                    e = this.points,
                    n = t.length
                return n && e[t[n - 1].end]
            }

            interpolate(t, e) {
                const n = this.options,
                    i = t[e],
                    r = this.points,
                    o = yn(this, {property: e, start: i, end: i})
                if (!o.length) return
                const a = [],
                    s = (function (t) {
                        return t.stepped ? un : t.tension || 'monotone' === t.cubicInterpolationMode ? hn : cn
                    })(n)
                let l, c
                for (l = 0, c = o.length; l < c; ++l) {
                    const {start: c, end: u} = o[l],
                        h = r[c],
                        d = r[u]
                    if (h === d) {
                        a.push(h)
                        continue
                    }
                    const f = s(h, d, Math.abs((i - h[e]) / (d[e] - h[e])), n.stepped)
                    ;(f[e] = t[e]), a.push(f)
                }
                return 1 === a.length ? a[0] : a
            }

            pathSegment(t, e, n) {
                return Lr(this)(t, this, e, n)
            }

            path(t, e, n) {
                const i = this.segments,
                    r = Lr(this)
                let o = this._loop
                ;(e = e || 0), (n = n || this.points.length - e)
                for (const a of i) o &= r(t, this, a, {start: e, end: e + n - 1})
                return !!o
            }

            draw(t, e, n, i) {
                const r = this.options || {}
                ;(this.points || []).length &&
                r.borderWidth &&
                (t.save(),
                    (function (t, e, n, i) {
                        Dr && !e.options.segment
                            ? (function (t, e, n, i) {
                                let r = e._path
                                r || ((r = e._path = new Path2D()), e.path(r, n, i) && r.closePath()),
                                    Sr(t, e.options),
                                    t.stroke(r)
                            })(t, e, n, i)
                            : (function (t, e, n, i) {
                                const {segments: r, options: o} = e,
                                    a = Lr(e)
                                for (const s of r)
                                    Sr(t, o, s.style),
                                        t.beginPath(),
                                    a(t, e, s, {start: n, end: n + i - 1}) && t.closePath(),
                                        t.stroke()
                            })(t, e, n, i)
                    })(t, this, n, i),
                    t.restore()),
                this.animated && ((this._pointsUpdated = !1), (this._path = void 0))
            }
        }

        function Tr(t, e, n, i) {
            const r = t.options,
                {[n]: o} = t.getProps([n], i)
            return Math.abs(e - o) < r.radius + r.hitRadius
        }

        function zr(t, e) {
            const {
                x: n,
                y: i,
                base: r,
                width: o,
                height: a
            } = t.getProps(['x', 'y', 'base', 'width', 'height'], e)
            let s, l, c, u, h
            return (
                t.horizontal
                    ? ((h = a / 2), (s = Math.min(n, r)), (l = Math.max(n, r)), (c = i - h), (u = i + h))
                    : ((h = o / 2), (s = n - h), (l = n + h), (c = Math.min(i, r)), (u = Math.max(i, r))),
                    {left: s, top: c, right: l, bottom: u}
            )
        }

        function Rr(t, e, n, i) {
            return t ? 0 : Mt(e, n, i)
        }

        function Ar(t, e, n, i) {
            const r = null === e,
                o = null === n,
                a = t && !(r && o) && zr(t, i)
            return a && (r || Et(e, a.left, a.right)) && (o || Et(n, a.top, a.bottom))
        }

        function Nr(t, e) {
            t.rect(e.x, e.y, e.w, e.h)
        }

        function Ir(t, e, n = {}) {
            const i = t.x !== n.x ? -e : 0,
                r = t.y !== n.y ? -e : 0,
                o = (t.x + t.w !== n.x + n.w ? e : 0) - i,
                a = (t.y + t.h !== n.y + n.h ? e : 0) - r
            return {x: t.x + i, y: t.y + r, w: t.w + o, h: t.h + a, radius: t.radius}
        }

        var Fr = Object.freeze({
            __proto__: null,
            ArcElement: class extends Ai {
                static id = 'arc'
                static defaults = {
                    borderAlign: 'center',
                    borderColor: '#fff',
                    borderDash: [],
                    borderDashOffset: 0,
                    borderJoinStyle: void 0,
                    borderRadius: 0,
                    borderWidth: 2,
                    offset: 0,
                    spacing: 0,
                    angle: void 0,
                    circular: !0
                }
                static defaultRoutes = {backgroundColor: 'backgroundColor'}
                static descriptors = {_scriptable: !0, _indexable: t => 'borderDash' !== t}
                circumference
                endAngle
                fullCircles
                innerRadius
                outerRadius
                pixelMargin
                startAngle

                constructor(t) {
                    super(),
                        (this.options = void 0),
                        (this.circumference = void 0),
                        (this.startAngle = void 0),
                        (this.endAngle = void 0),
                        (this.innerRadius = void 0),
                        (this.outerRadius = void 0),
                        (this.pixelMargin = 0),
                        (this.fullCircles = 0),
                    t && Object.assign(this, t)
                }

                inRange(t, e, n) {
                    const i = this.getProps(['x', 'y'], n),
                        {angle: r, distance: o} = xt(i, {x: t, y: e}),
                        {
                            startAngle: a,
                            endAngle: s,
                            innerRadius: l,
                            outerRadius: c,
                            circumference: u
                        } = this.getProps(
                            ['startAngle', 'endAngle', 'innerRadius', 'outerRadius', 'circumference'],
                            n
                        ),
                        h = (this.options.spacing + this.options.borderWidth) / 2,
                        d = B(u, s - a) >= rt || St(r, a, s),
                        f = Et(o, l + h, c + h)
                    return d && f
                }

                getCenterPoint(t) {
                    const {
                            x: e,
                            y: n,
                            startAngle: i,
                            endAngle: r,
                            innerRadius: o,
                            outerRadius: a
                        } = this.getProps(
                            ['x', 'y', 'startAngle', 'endAngle', 'innerRadius', 'outerRadius'],
                            t
                        ),
                        {offset: s, spacing: l} = this.options,
                        c = (i + r) / 2,
                        u = (o + a + l + s) / 2
                    return {x: e + Math.cos(c) * u, y: n + Math.sin(c) * u}
                }

                tooltipPosition(t) {
                    return this.getCenterPoint(t)
                }

                draw(t) {
                    const {options: e, circumference: n} = this,
                        i = (e.offset || 0) / 4,
                        r = (e.spacing || 0) / 2,
                        o = e.circular
                    if (
                        ((this.pixelMargin = 'inner' === e.borderAlign ? 0.33 : 0),
                            (this.fullCircles = n > rt ? Math.floor(n / rt) : 0),
                        0 === n || this.innerRadius < 0 || this.outerRadius < 0)
                    )
                        return
                    t.save()
                    const a = (this.startAngle + this.endAngle) / 2
                    t.translate(Math.cos(a) * i, Math.sin(a) * i)
                    const s = i * (1 - Math.sin(Math.min(it, n || 0)))
                    ;(t.fillStyle = e.backgroundColor),
                        (t.strokeStyle = e.borderColor),
                        (function (t, e, n, i, r) {
                            const {fullCircles: o, startAngle: a, circumference: s} = e
                            let l = e.endAngle
                            if (o) {
                                kr(t, e, n, i, l, r)
                                for (let e = 0; e < o; ++e) t.fill()
                                isNaN(s) || (l = a + (s % rt || rt))
                            }
                            kr(t, e, n, i, l, r), t.fill()
                        })(t, this, s, r, o),
                        (function (t, e, n, i, r) {
                            const {fullCircles: o, startAngle: a, circumference: s, options: l} = e,
                                {borderWidth: c, borderJoinStyle: u, borderDash: h, borderDashOffset: d} = l,
                                f = 'inner' === l.borderAlign
                            if (!c) return
                            t.setLineDash(h || []),
                                (t.lineDashOffset = d),
                                f
                                    ? ((t.lineWidth = 2 * c), (t.lineJoin = u || 'round'))
                                    : ((t.lineWidth = c), (t.lineJoin = u || 'bevel'))
                            let p = e.endAngle
                            if (o) {
                                kr(t, e, n, i, p, r)
                                for (let e = 0; e < o; ++e) t.stroke()
                                isNaN(s) || (p = a + (s % rt || rt))
                            }
                            f &&
                            (function (t, e, n) {
                                const {
                                    startAngle: i,
                                    pixelMargin: r,
                                    x: o,
                                    y: a,
                                    outerRadius: s,
                                    innerRadius: l
                                } = e
                                let c = r / s
                                t.beginPath(),
                                    t.arc(o, a, s, i - c, n + c),
                                    l > r
                                        ? ((c = r / l), t.arc(o, a, l, n + c, i - c, !0))
                                        : t.arc(o, a, r, n + lt, i - lt),
                                    t.closePath(),
                                    t.clip()
                            })(t, e, p),
                            o || (kr(t, e, n, i, p, r), t.stroke())
                        })(t, this, s, r, o),
                        t.restore()
                }
            },
            BarElement: class extends Ai {
                static id = 'bar'
                static defaults = {
                    borderSkipped: 'start',
                    borderWidth: 0,
                    borderRadius: 0,
                    inflateAmount: 'auto',
                    pointStyle: void 0
                }
                static defaultRoutes = {backgroundColor: 'backgroundColor', borderColor: 'borderColor'}

                constructor(t) {
                    super(),
                        (this.options = void 0),
                        (this.horizontal = void 0),
                        (this.base = void 0),
                        (this.width = void 0),
                        (this.height = void 0),
                        (this.inflateAmount = void 0),
                    t && Object.assign(this, t)
                }

                draw(t) {
                    const {
                            inflateAmount: e,
                            options: {borderColor: n, backgroundColor: i}
                        } = this,
                        {inner: r, outer: o} = (function (t) {
                            const e = zr(t),
                                n = e.right - e.left,
                                i = e.bottom - e.top,
                                r = (function (t, e, n) {
                                    const i = t.options.borderWidth,
                                        r = t.borderSkipped,
                                        o = Se(i)
                                    return {
                                        t: Rr(r.top, o.top, 0, n),
                                        r: Rr(r.right, o.right, 0, e),
                                        b: Rr(r.bottom, o.bottom, 0, n),
                                        l: Rr(r.left, o.left, 0, e)
                                    }
                                })(t, n / 2, i / 2),
                                o = (function (t, e, n) {
                                    const {enableBorderRadius: i} = t.getProps(['enableBorderRadius']),
                                        r = t.options.borderRadius,
                                        o = Me(r),
                                        a = Math.min(e, n),
                                        s = t.borderSkipped,
                                        l = i || I(r)
                                    return {
                                        topLeft: Rr(!l || s.top || s.left, o.topLeft, 0, a),
                                        topRight: Rr(!l || s.top || s.right, o.topRight, 0, a),
                                        bottomLeft: Rr(!l || s.bottom || s.left, o.bottomLeft, 0, a),
                                        bottomRight: Rr(!l || s.bottom || s.right, o.bottomRight, 0, a)
                                    }
                                })(t, n / 2, i / 2)
                            return {
                                outer: {x: e.left, y: e.top, w: n, h: i, radius: o},
                                inner: {
                                    x: e.left + r.l,
                                    y: e.top + r.t,
                                    w: n - r.l - r.r,
                                    h: i - r.t - r.b,
                                    radius: {
                                        topLeft: Math.max(0, o.topLeft - Math.max(r.t, r.l)),
                                        topRight: Math.max(0, o.topRight - Math.max(r.t, r.r)),
                                        bottomLeft: Math.max(0, o.bottomLeft - Math.max(r.b, r.l)),
                                        bottomRight: Math.max(0, o.bottomRight - Math.max(r.b, r.r))
                                    }
                                }
                            }
                        })(this),
                        a = (s = o.radius).topLeft || s.topRight || s.bottomLeft || s.bottomRight ? ye : Nr
                    var s
                    t.save(),
                    (o.w === r.w && o.h === r.h) ||
                    (t.beginPath(),
                        a(t, Ir(o, e, r)),
                        t.clip(),
                        a(t, Ir(r, -e, o)),
                        (t.fillStyle = n),
                        t.fill('evenodd')),
                        t.beginPath(),
                        a(t, Ir(r, e)),
                        (t.fillStyle = i),
                        t.fill(),
                        t.restore()
                }

                inRange(t, e, n) {
                    return Ar(this, t, e, n)
                }

                inXRange(t, e) {
                    return Ar(this, t, null, e)
                }

                inYRange(t, e) {
                    return Ar(this, null, t, e)
                }

                getCenterPoint(t) {
                    const {
                        x: e,
                        y: n,
                        base: i,
                        horizontal: r
                    } = this.getProps(['x', 'y', 'base', 'horizontal'], t)
                    return {x: r ? (e + i) / 2 : e, y: r ? n : (n + i) / 2}
                }

                getRange(t) {
                    return 'x' === t ? this.width / 2 : this.height / 2
                }
            },
            LineElement: Or,
            PointElement: class extends Ai {
                static id = 'point'
                static defaults = {
                    borderWidth: 1,
                    hitRadius: 1,
                    hoverBorderWidth: 1,
                    hoverRadius: 4,
                    pointStyle: 'circle',
                    radius: 3,
                    rotation: 0
                }
                static defaultRoutes = {backgroundColor: 'backgroundColor', borderColor: 'borderColor'}
                parsed
                skip
                stop

                constructor(t) {
                    super(),
                        (this.options = void 0),
                        (this.parsed = void 0),
                        (this.skip = void 0),
                        (this.stop = void 0),
                    t && Object.assign(this, t)
                }

                inRange(t, e, n) {
                    const i = this.options,
                        {x: r, y: o} = this.getProps(['x', 'y'], n)
                    return Math.pow(t - r, 2) + Math.pow(e - o, 2) < Math.pow(i.hitRadius + i.radius, 2)
                }

                inXRange(t, e) {
                    return Tr(this, t, 'x', e)
                }

                inYRange(t, e) {
                    return Tr(this, t, 'y', e)
                }

                getCenterPoint(t) {
                    const {x: e, y: n} = this.getProps(['x', 'y'], t)
                    return {x: e, y: n}
                }

                size(t) {
                    let e = (t = t || this.options || {}).radius || 0
                    return (e = Math.max(e, (e && t.hoverRadius) || 0)), 2 * (e + ((e && t.borderWidth) || 0))
                }

                draw(t, e) {
                    const n = this.options
                    this.skip ||
                    n.radius < 0.1 ||
                    !ue(this, e, this.size(n) / 2) ||
                    ((t.strokeStyle = n.borderColor),
                        (t.lineWidth = n.borderWidth),
                        (t.fillStyle = n.backgroundColor),
                        le(t, n, this.x, this.y))
                }

                getRange() {
                    const t = this.options || {}
                    return t.radius + t.hitRadius
                }
            }
        })
        const Vr = [
                'rgb(54, 162, 235)',
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
            Br = Vr.map(t => t.replace('rgb(', 'rgba(').replace(')', ', 0.5)'))

        function jr(t) {
            return Vr[t % Vr.length]
        }

        function Wr(t) {
            return Br[t % Br.length]
        }

        function Hr(t) {
            let e
            for (e in t) if (t[e].borderColor || t[e].backgroundColor) return !0
            return !1
        }

        var $r = {
            id: 'colors',
            defaults: {enabled: !0, forceOverride: !1},
            beforeLayout(t, e, n) {
                if (!n.enabled) return
                const {
                        data: {datasets: i},
                        options: r
                    } = t.config,
                    {elements: o} = r
                if (
                    !n.forceOverride &&
                    (Hr(i) || ((a = r) && (a.borderColor || a.backgroundColor)) || (o && Hr(o)))
                )
                    return
                var a
                const s = (function (t) {
                    let e = 0
                    return (n, i) => {
                        const r = t.getDatasetMeta(i).controller
                        r instanceof Xn
                            ? (e = (function (t, e) {
                                return (t.backgroundColor = t.data.map(() => jr(e++))), e
                            })(n, e))
                            : r instanceof qn
                                ? (e = (function (t, e) {
                                    return (t.backgroundColor = t.data.map(() => Wr(e++))), e
                                })(n, e))
                                : r &&
                                (e = (function (t, e) {
                                    return (t.borderColor = jr(e)), (t.backgroundColor = Wr(e)), ++e
                                })(n, e))
                    }
                })(t)
                i.forEach(s)
            }
        }

        function Ur(t) {
            if (t._decimated) {
                const e = t._data
                delete t._decimated,
                    delete t._data,
                    Object.defineProperty(t, 'data', {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        value: e
                    })
            }
        }

        function Yr(t) {
            t.data.datasets.forEach(t => {
                Ur(t)
            })
        }

        var Qr = {
            id: 'decimation',
            defaults: {algorithm: 'min-max', enabled: !1},
            beforeElementsUpdate: (t, e, n) => {
                if (!n.enabled) return void Yr(t)
                const i = t.width
                t.data.datasets.forEach((e, r) => {
                    const {_data: o, indexAxis: a} = e,
                        s = t.getDatasetMeta(r),
                        l = o || e.data
                    if ('y' === Pe([a, t.options.indexAxis])) return
                    if (!s.controller.supportsDecimation) return
                    const c = t.scales[s.xAxisID]
                    if ('linear' !== c.type && 'time' !== c.type) return
                    if (t.options.parsing) return
                    let u,
                        {start: h, count: d} = (function (t, e) {
                            const n = e.length
                            let i,
                                r = 0
                            const {iScale: o} = t,
                                {min: a, max: s, minDefined: l, maxDefined: c} = o.getUserBounds()
                            return (
                                l && (r = Mt(Pt(e, o.axis, a).lo, 0, n - 1)),
                                    (i = c ? Mt(Pt(e, o.axis, s).hi + 1, r, n) - r : n - r),
                                    {start: r, count: i}
                            )
                        })(s, l)
                    if (d <= (n.threshold || 4 * i)) Ur(e)
                    else {
                        switch (
                            (A(o) &&
                            ((e._data = l),
                                delete e.data,
                                Object.defineProperty(e, 'data', {
                                    configurable: !0,
                                    enumerable: !0,
                                    get: function () {
                                        return this._decimated
                                    },
                                    set: function (t) {
                                        this._data = t
                                    }
                                })),
                                n.algorithm)
                            ) {
                            case 'lttb':
                                u = (function (t, e, n, i, r) {
                                    const o = r.samples || i
                                    if (o >= n) return t.slice(e, e + n)
                                    const a = [],
                                        s = (n - 2) / (o - 2)
                                    let l = 0
                                    const c = e + n - 1
                                    let u,
                                        h,
                                        d,
                                        f,
                                        p,
                                        g = e
                                    for (a[l++] = t[g], u = 0; u < o - 2; u++) {
                                        let i,
                                            r = 0,
                                            o = 0
                                        const c = Math.floor((u + 1) * s) + 1 + e,
                                            m = Math.min(Math.floor((u + 2) * s) + 1, n) + e,
                                            b = m - c
                                        for (i = c; i < m; i++) (r += t[i].x), (o += t[i].y)
                                        ;
                                        (r /= b), (o /= b)
                                        const y = Math.floor(u * s) + 1 + e,
                                            v = Math.min(Math.floor((u + 1) * s) + 1, n) + e,
                                            {x, y: _} = t[g]
                                        for (d = f = -1, i = y; i < v; i++)
                                            (f = 0.5 * Math.abs((x - r) * (t[i].y - _) - (x - t[i].x) * (o - _))),
                                            f > d && ((d = f), (h = t[i]), (p = i))
                                            ;
                                        (a[l++] = h), (g = p)
                                    }
                                    return (a[l++] = t[c]), a
                                })(l, h, d, i, n)
                                break
                            case 'min-max':
                                u = (function (t, e, n, i) {
                                    let r,
                                        o,
                                        a,
                                        s,
                                        l,
                                        c,
                                        u,
                                        h,
                                        d,
                                        f,
                                        p = 0,
                                        g = 0
                                    const m = [],
                                        b = e + n - 1,
                                        y = t[e].x,
                                        v = t[b].x - y
                                    for (r = e; r < e + n; ++r) {
                                        ;(o = t[r]), (a = ((o.x - y) / v) * i), (s = o.y)
                                        const e = 0 | a
                                        if (e === l)
                                            s < d ? ((d = s), (c = r)) : s > f && ((f = s), (u = r)),
                                                (p = (g * p + o.x) / ++g)
                                        else {
                                            const n = r - 1
                                            if (!A(c) && !A(u)) {
                                                const e = Math.min(c, u),
                                                    i = Math.max(c, u)
                                                e !== h && e !== n && m.push({...t[e], x: p}),
                                                i !== h && i !== n && m.push({...t[i], x: p})
                                            }
                                            r > 0 && n !== h && m.push(t[n]),
                                                m.push(o),
                                                (l = e),
                                                (g = 0),
                                                (d = f = s),
                                                (c = u = h = r)
                                        }
                                    }
                                    return m
                                })(l, h, d, i)
                                break
                            default:
                                throw new Error(`Unsupported decimation algorithm '${n.algorithm}'`)
                        }
                        e._decimated = u
                    }
                })
            },
            destroy(t) {
                Yr(t)
            }
        }

        function Xr(t, e, n, i) {
            if (i) return
            let r = e[t],
                o = n[t]
            return 'angle' === t && ((r = kt(r)), (o = kt(o))), {property: t, start: r, end: o}
        }

        function qr(t, e, n) {
            for (; e > t; e--) {
                const t = n[e]
                if (!isNaN(t.x) && !isNaN(t.y)) break
            }
            return e
        }

        function Kr(t, e, n, i) {
            return t && e ? i(t[n], e[n]) : t ? t[n] : e ? e[n] : 0
        }

        function Gr(t, e) {
            let n = [],
                i = !1
            return (
                N(t)
                    ? ((i = !0), (n = t))
                    : (n = (function (t, e) {
                        const {x: n = null, y: i = null} = t || {},
                            r = e.points,
                            o = []
                        return (
                            e.segments.forEach(({start: t, end: e}) => {
                                e = qr(t, e, r)
                                const a = r[t],
                                    s = r[e]
                                null !== i
                                    ? (o.push({x: a.x, y: i}), o.push({x: s.x, y: i}))
                                    : null !== n && (o.push({x: n, y: a.y}), o.push({x: n, y: s.y}))
                            }),
                                o
                        )
                    })(t, e)),
                    n.length ? new Or({points: n, options: {tension: 0}, _loop: i, _fullLoop: i}) : null
            )
        }

        function Zr(t) {
            return t && !1 !== t.fill
        }

        function Jr(t, e, n) {
            let i = t[e].fill
            const r = [e]
            let o
            if (!n) return i
            for (; !1 !== i && -1 === r.indexOf(i);) {
                if (!F(i)) return i
                if (((o = t[i]), !o)) return !1
                if (o.visible) return i
                r.push(i), (i = o.fill)
            }
            return !1
        }

        function to(t, e, n) {
            const i = (function (t) {
                const e = t.options,
                    n = e.fill
                let i = B(n && n.target, n)
                return (
                    void 0 === i && (i = !!e.backgroundColor),
                    !1 !== i && null !== i && (!0 === i ? 'origin' : i)
                )
            })(t)
            if (I(i)) return !isNaN(i.value) && i
            let r = parseFloat(i)
            return F(r) && Math.floor(r) === r
                ? (function (t, e, n, i) {
                    return ('-' !== t && '+' !== t) || (n = e + n), !(n === e || n < 0 || n >= i) && n
                })(i[0], e, r, n)
                : ['origin', 'start', 'end', 'stack', 'shape'].indexOf(i) >= 0 && i
        }

        function eo(t, e, n) {
            const i = []
            for (let r = 0; r < n.length; r++) {
                const o = n[r],
                    {first: a, last: s, point: l} = no(o, e, 'x')
                if (!(!l || (a && s)))
                    if (a) i.unshift(l)
                    else if ((t.push(l), !s)) break
            }
            t.push(...i)
        }

        function no(t, e, n) {
            const i = t.interpolate(e, n)
            if (!i) return {}
            const r = i[n],
                o = t.segments,
                a = t.points
            let s = !1,
                l = !1
            for (let t = 0; t < o.length; t++) {
                const e = o[t],
                    i = a[e.start][n],
                    c = a[e.end][n]
                if (Et(r, i, c)) {
                    ;(s = r === i), (l = r === c)
                    break
                }
            }
            return {first: s, last: l, point: i}
        }

        class io {
            constructor(t) {
                ;(this.x = t.x), (this.y = t.y), (this.radius = t.radius)
            }

            pathSegment(t, e, n) {
                const {x: i, y: r, radius: o} = this
                return (e = e || {start: 0, end: rt}), t.arc(i, r, o, e.end, e.start, !0), !n.bounds
            }

            interpolate(t) {
                const {x: e, y: n, radius: i} = this,
                    r = t.angle
                return {x: e + Math.cos(r) * i, y: n + Math.sin(r) * i, angle: r}
            }
        }

        function ro(t, e, n) {
            const i = (function (t) {
                    const {chart: e, fill: n, line: i} = t
                    if (F(n))
                        return (function (t, e) {
                            const n = t.getDatasetMeta(e)
                            return n && t.isDatasetVisible(e) ? n.dataset : null
                        })(e, n)
                    if ('stack' === n)
                        return (function (t) {
                            const {scale: e, index: n, line: i} = t,
                                r = [],
                                o = i.segments,
                                a = i.points,
                                s = (function (t, e) {
                                    const n = [],
                                        i = t.getMatchingVisibleMetas('line')
                                    for (let t = 0; t < i.length; t++) {
                                        const r = i[t]
                                        if (r.index === e) break
                                        r.hidden || n.unshift(r.dataset)
                                    }
                                    return n
                                })(e, n)
                            s.push(Gr({x: null, y: e.bottom}, i))
                            for (let t = 0; t < o.length; t++) {
                                const e = o[t]
                                for (let t = e.start; t <= e.end; t++) eo(r, a[t], s)
                            }
                            return new Or({points: r, options: {}})
                        })(t)
                    if ('shape' === n) return !0
                    const r = (function (t) {
                        return (t.scale || {}).getPointPositionForValue
                            ? (function (t) {
                                const {scale: e, fill: n} = t,
                                    i = e.options,
                                    r = e.getLabels().length,
                                    o = i.reverse ? e.max : e.min,
                                    a = (function (t, e, n) {
                                        let i
                                        return (
                                            (i =
                                                'start' === t
                                                    ? n
                                                    : 'end' === t
                                                        ? e.options.reverse
                                                            ? e.min
                                                            : e.max
                                                        : I(t)
                                                            ? t.value
                                                            : e.getBaseValue()),
                                                i
                                        )
                                    })(n, e, o),
                                    s = []
                                if (i.grid.circular) {
                                    const t = e.getPointPositionForValue(0, o)
                                    return new io({x: t.x, y: t.y, radius: e.getDistanceFromCenterForValue(a)})
                                }
                                for (let t = 0; t < r; ++t) s.push(e.getPointPositionForValue(t, a))
                                return s
                            })(t)
                            : (function (t) {
                                const {scale: e = {}, fill: n} = t,
                                    i = (function (t, e) {
                                        let n = null
                                        return (
                                            'start' === t
                                                ? (n = e.bottom)
                                                : 'end' === t
                                                    ? (n = e.top)
                                                    : I(t)
                                                        ? (n = e.getPixelForValue(t.value))
                                                        : e.getBasePixel && (n = e.getBasePixel()),
                                                n
                                        )
                                    })(n, e)
                                if (F(i)) {
                                    const t = e.isHorizontal()
                                    return {x: t ? i : null, y: t ? null : i}
                                }
                                return null
                            })(t)
                    })(t)
                    return r instanceof io ? r : Gr(r, i)
                })(e),
                {line: r, scale: o, axis: a} = e,
                s = r.options,
                l = s.fill,
                c = s.backgroundColor,
                {above: u = c, below: h = c} = l || {}
            i &&
            r.points.length &&
            (he(t, n),
                (function (t, e) {
                    const {line: n, target: i, above: r, below: o, area: a, scale: s} = e,
                        l = n._loop ? 'angle' : e.axis
                    t.save(),
                    'x' === l &&
                    o !== r &&
                    (oo(t, i, a.top),
                        ao(t, {line: n, target: i, color: r, scale: s, property: l}),
                        t.restore(),
                        t.save(),
                        oo(t, i, a.bottom)),
                        ao(t, {line: n, target: i, color: o, scale: s, property: l}),
                        t.restore()
                })(t, {line: r, target: i, above: u, below: h, area: n, scale: o, axis: a}),
                de(t))
        }

        function oo(t, e, n) {
            const {segments: i, points: r} = e
            let o = !0,
                a = !1
            t.beginPath()
            for (const s of i) {
                const {start: i, end: l} = s,
                    c = r[i],
                    u = r[qr(i, l, r)]
                o ? (t.moveTo(c.x, c.y), (o = !1)) : (t.lineTo(c.x, n), t.lineTo(c.x, c.y)),
                    (a = !!e.pathSegment(t, s, {move: a})),
                    a ? t.closePath() : t.lineTo(u.x, n)
            }
            t.lineTo(e.first().x, n), t.closePath(), t.clip()
        }

        function ao(t, e) {
            const {line: n, target: i, property: r, color: o, scale: a} = e,
                s = (function (t, e, n) {
                    const i = t.segments,
                        r = t.points,
                        o = e.points,
                        a = []
                    for (const t of i) {
                        let {start: i, end: s} = t
                        s = qr(i, s, r)
                        const l = Xr(n, r[i], r[s], t.loop)
                        if (!e.segments) {
                            a.push({source: t, target: l, start: r[i], end: r[s]})
                            continue
                        }
                        const c = yn(e, l)
                        for (const e of c) {
                            const i = Xr(n, o[e.start], o[e.end], e.loop),
                                s = bn(t, r, i)
                            for (const t of s)
                                a.push({
                                    source: t,
                                    target: e,
                                    start: {[n]: Kr(l, i, 'start', Math.max)},
                                    end: {[n]: Kr(l, i, 'end', Math.min)}
                                })
                        }
                    }
                    return a
                })(n, i, r)
            for (const {source: e, target: l, start: c, end: u} of s) {
                const {style: {backgroundColor: s = o} = {}} = e,
                    h = !0 !== i
                t.save(), (t.fillStyle = s), so(t, a, h && Xr(r, c, u)), t.beginPath()
                const d = !!n.pathSegment(t, e)
                let f
                if (h) {
                    d ? t.closePath() : lo(t, i, u, r)
                    const e = !!i.pathSegment(t, l, {move: d, reverse: !0})
                    ;(f = d && e), f || lo(t, i, c, r)
                }
                t.closePath(), t.fill(f ? 'evenodd' : 'nonzero'), t.restore()
            }
        }

        function so(t, e, n) {
            const {top: i, bottom: r} = e.chart.chartArea,
                {property: o, start: a, end: s} = n || {}
            'x' === o && (t.beginPath(), t.rect(a, i, s - a, r - i), t.clip())
        }

        function lo(t, e, n, i) {
            const r = e.interpolate(n, i)
            r && t.lineTo(r.x, r.y)
        }

        var co = {
            id: 'filler',
            afterDatasetsUpdate(t, e, n) {
                const i = (t.data.datasets || []).length,
                    r = []
                let o, a, s, l
                for (a = 0; a < i; ++a)
                    (o = t.getDatasetMeta(a)),
                        (s = o.dataset),
                        (l = null),
                    s &&
                    s.options &&
                    s instanceof Or &&
                    (l = {
                        visible: t.isDatasetVisible(a),
                        index: a,
                        fill: to(s, a, i),
                        chart: t,
                        axis: o.controller.options.indexAxis,
                        scale: o.vScale,
                        line: s
                    }),
                        (o.$filler = l),
                        r.push(l)
                for (a = 0; a < i; ++a) (l = r[a]), l && !1 !== l.fill && (l.fill = Jr(r, a, n.propagate))
            },
            beforeDraw(t, e, n) {
                const i = 'beforeDraw' === n.drawTime,
                    r = t.getSortedVisibleDatasetMetas(),
                    o = t.chartArea
                for (let e = r.length - 1; e >= 0; --e) {
                    const n = r[e].$filler
                    n && (n.line.updateControlPoints(o, n.axis), i && n.fill && ro(t.ctx, n, o))
                }
            },
            beforeDatasetsDraw(t, e, n) {
                if ('beforeDatasetsDraw' !== n.drawTime) return
                const i = t.getSortedVisibleDatasetMetas()
                for (let e = i.length - 1; e >= 0; --e) {
                    const n = i[e].$filler
                    Zr(n) && ro(t.ctx, n, t.chartArea)
                }
            },
            beforeDatasetDraw(t, e, n) {
                const i = e.meta.$filler
                Zr(i) && 'beforeDatasetDraw' === n.drawTime && ro(t.ctx, i, t.chartArea)
            },
            defaults: {propagate: !0, drawTime: 'beforeDatasetDraw'}
        }
        const uo = (t, e) => {
            let {boxHeight: n = e, boxWidth: i = e} = t
            return (
                t.usePointStyle && ((n = Math.min(n, e)), (i = t.pointStyleWidth || Math.min(i, e))),
                    {boxWidth: i, boxHeight: n, itemHeight: Math.max(e, n)}
            )
        }

        class ho extends Ai {
            constructor(t) {
                super(),
                    (this._added = !1),
                    (this.legendHitBoxes = []),
                    (this._hoveredItem = null),
                    (this.doughnutMode = !1),
                    (this.chart = t.chart),
                    (this.options = t.options),
                    (this.ctx = t.ctx),
                    (this.legendItems = void 0),
                    (this.columnSizes = void 0),
                    (this.lineWidths = void 0),
                    (this.maxHeight = void 0),
                    (this.maxWidth = void 0),
                    (this.top = void 0),
                    (this.bottom = void 0),
                    (this.left = void 0),
                    (this.right = void 0),
                    (this.height = void 0),
                    (this.width = void 0),
                    (this._margins = void 0),
                    (this.position = void 0),
                    (this.weight = void 0),
                    (this.fullSize = void 0)
            }

            update(t, e, n) {
                ;(this.maxWidth = t),
                    (this.maxHeight = e),
                    (this._margins = n),
                    this.setDimensions(),
                    this.buildLabels(),
                    this.fit()
            }

            setDimensions() {
                this.isHorizontal()
                    ? ((this.width = this.maxWidth),
                        (this.left = this._margins.left),
                        (this.right = this.width))
                    : ((this.height = this.maxHeight),
                        (this.top = this._margins.top),
                        (this.bottom = this.height))
            }

            buildLabels() {
                const t = this.options.labels || {}
                let e = W(t.generateLabels, [this.chart], this) || []
                t.filter && (e = e.filter(e => t.filter(e, this.chart.data))),
                t.sort && (e = e.sort((e, n) => t.sort(e, n, this.chart.data))),
                this.options.reverse && e.reverse(),
                    (this.legendItems = e)
            }

            fit() {
                const {options: t, ctx: e} = this
                if (!t.display) return void (this.width = this.height = 0)
                const n = t.labels,
                    i = Ce(n.font),
                    r = i.size,
                    o = this._computeTitleHeight(),
                    {boxWidth: a, itemHeight: s} = uo(n, r)
                let l, c
                ;(e.font = i.string),
                    this.isHorizontal()
                        ? ((l = this.maxWidth), (c = this._fitRows(o, r, a, s) + 10))
                        : ((c = this.maxHeight), (l = this._fitCols(o, i, a, s) + 10)),
                    (this.width = Math.min(l, t.maxWidth || this.maxWidth)),
                    (this.height = Math.min(c, t.maxHeight || this.maxHeight))
            }

            _fitRows(t, e, n, i) {
                const {
                        ctx: r,
                        maxWidth: o,
                        options: {
                            labels: {padding: a}
                        }
                    } = this,
                    s = (this.legendHitBoxes = []),
                    l = (this.lineWidths = [0]),
                    c = i + a
                let u = t
                ;(r.textAlign = 'left'), (r.textBaseline = 'middle')
                let h = -1,
                    d = -c
                return (
                    this.legendItems.forEach((t, f) => {
                        const p = n + e / 2 + r.measureText(t.text).width
                        ;(0 === f || l[l.length - 1] + p + 2 * a > o) &&
                        ((u += c), (l[l.length - (f > 0 ? 0 : 1)] = 0), (d += c), h++),
                            (s[f] = {left: 0, top: d, row: h, width: p, height: i}),
                            (l[l.length - 1] += p + a)
                    }),
                        u
                )
            }

            _fitCols(t, e, n, i) {
                const {
                        ctx: r,
                        maxHeight: o,
                        options: {
                            labels: {padding: a}
                        }
                    } = this,
                    s = (this.legendHitBoxes = []),
                    l = (this.columnSizes = []),
                    c = o - t
                let u = a,
                    h = 0,
                    d = 0,
                    f = 0,
                    p = 0
                return (
                    this.legendItems.forEach((t, o) => {
                        const {itemWidth: g, itemHeight: m} = (function (t, e, n, i, r) {
                            const o = (function (t, e, n, i) {
                                    let r = t.text
                                    return (
                                        r &&
                                        'string' != typeof r &&
                                        (r = r.reduce((t, e) => (t.length > e.length ? t : e))),
                                        e + n.size / 2 + i.measureText(r).width
                                    )
                                })(i, t, e, n),
                                a = (function (t, e, n) {
                                    let i = t
                                    return 'string' != typeof e.text && (i = fo(e, n)), i
                                })(r, i, e.lineHeight)
                            return {itemWidth: o, itemHeight: a}
                        })(n, e, r, t, i)
                        o > 0 &&
                        d + m + 2 * a > c &&
                        ((u += h + a), l.push({width: h, height: d}), (f += h + a), p++, (h = d = 0)),
                            (s[o] = {left: f, top: d, col: p, width: g, height: m}),
                            (h = Math.max(h, g)),
                            (d += m + a)
                    }),
                        (u += h),
                        l.push({width: h, height: d}),
                        u
                )
            }

            adjustHitBoxes() {
                if (!this.options.display) return
                const t = this._computeTitleHeight(),
                    {
                        legendHitBoxes: e,
                        options: {
                            align: n,
                            labels: {padding: i},
                            rtl: r
                        }
                    } = this,
                    o = dn(r, this.left, this.width)
                if (this.isHorizontal()) {
                    let r = 0,
                        a = Nt(n, this.left + i, this.right - this.lineWidths[r])
                    for (const s of e)
                        r !== s.row &&
                        ((r = s.row), (a = Nt(n, this.left + i, this.right - this.lineWidths[r]))),
                            (s.top += this.top + t + i),
                            (s.left = o.leftForLtr(o.x(a), s.width)),
                            (a += s.width + i)
                } else {
                    let r = 0,
                        a = Nt(n, this.top + t + i, this.bottom - this.columnSizes[r].height)
                    for (const s of e)
                        s.col !== r &&
                        ((r = s.col),
                            (a = Nt(n, this.top + t + i, this.bottom - this.columnSizes[r].height))),
                            (s.top = a),
                            (s.left += this.left + i),
                            (s.left = o.leftForLtr(o.x(s.left), s.width)),
                            (a += s.height + i)
                }
            }

            isHorizontal() {
                return 'top' === this.options.position || 'bottom' === this.options.position
            }

            draw() {
                if (this.options.display) {
                    const t = this.ctx
                    he(t, this), this._draw(), de(t)
                }
            }

            _draw() {
                const {options: t, columnSizes: e, lineWidths: n, ctx: i} = this,
                    {align: r, labels: o} = t,
                    a = ie.color,
                    s = dn(t.rtl, this.left, this.width),
                    l = Ce(o.font),
                    {padding: c} = o,
                    u = l.size,
                    h = u / 2
                let d
                this.drawTitle(),
                    (i.textAlign = s.textAlign('left')),
                    (i.textBaseline = 'middle'),
                    (i.lineWidth = 0.5),
                    (i.font = l.string)
                const {boxWidth: f, boxHeight: p, itemHeight: g} = uo(o, u),
                    m = this.isHorizontal(),
                    b = this._computeTitleHeight()
                ;(d = m
                    ? {x: Nt(r, this.left + c, this.right - n[0]), y: this.top + c + b, line: 0}
                    : {x: this.left + c, y: Nt(r, this.top + b + c, this.bottom - e[0].height), line: 0}),
                    fn(this.ctx, t.textDirection)
                const y = g + c
                this.legendItems.forEach((v, x) => {
                    ;(i.strokeStyle = v.fontColor), (i.fillStyle = v.fontColor)
                    const _ = i.measureText(v.text).width,
                        w = s.textAlign(v.textAlign || (v.textAlign = o.textAlign)),
                        k = f + h + _
                    let S = d.x,
                        M = d.y
                    if (
                        (s.setWidth(this.width),
                            m
                                ? x > 0 &&
                                S + k + c > this.right &&
                                ((M = d.y += y), d.line++, (S = d.x = Nt(r, this.left + c, this.right - n[d.line])))
                                : x > 0 &&
                                M + y > this.bottom &&
                                ((S = d.x = S + e[d.line].width + c),
                                    d.line++,
                                    (M = d.y = Nt(r, this.top + b + c, this.bottom - e[d.line].height))),
                            (function (t, e, n) {
                                if (isNaN(f) || f <= 0 || isNaN(p) || p < 0) return
                                i.save()
                                const r = B(n.lineWidth, 1)
                                if (
                                    ((i.fillStyle = B(n.fillStyle, a)),
                                        (i.lineCap = B(n.lineCap, 'butt')),
                                        (i.lineDashOffset = B(n.lineDashOffset, 0)),
                                        (i.lineJoin = B(n.lineJoin, 'miter')),
                                        (i.lineWidth = r),
                                        (i.strokeStyle = B(n.strokeStyle, a)),
                                        i.setLineDash(B(n.lineDash, [])),
                                        o.usePointStyle)
                                ) {
                                    const a = {
                                            radius: (p * Math.SQRT2) / 2,
                                            pointStyle: n.pointStyle,
                                            rotation: n.rotation,
                                            borderWidth: r
                                        },
                                        l = s.xPlus(t, f / 2)
                                    ce(i, a, l, e + h, o.pointStyleWidth && f)
                                } else {
                                    const o = e + Math.max((u - p) / 2, 0),
                                        a = s.leftForLtr(t, f),
                                        l = Me(n.borderRadius)
                                    i.beginPath(),
                                        Object.values(l).some(t => 0 !== t)
                                            ? ye(i, {x: a, y: o, w: f, h: p, radius: l})
                                            : i.rect(a, o, f, p),
                                        i.fill(),
                                    0 !== r && i.stroke()
                                }
                                i.restore()
                            })(s.x(S), M, v),
                            (S = ((t, e, n, i) =>
                                t === (i ? 'left' : 'right') ? n : 'center' === t ? (e + n) / 2 : e)(
                                w,
                                S + f + h,
                                m ? S + k : this.right,
                                t.rtl
                            )),
                            (function (t, e, n) {
                                be(i, n.text, t, e + g / 2, l, {
                                    strikethrough: n.hidden,
                                    textAlign: s.textAlign(n.textAlign)
                                })
                            })(s.x(S), M, v),
                            m)
                    )
                        d.x += k + c
                    else if ('string' != typeof v.text) {
                        const t = l.lineHeight
                        d.y += fo(v, t) + c
                    } else d.y += y
                }),
                    pn(this.ctx, t.textDirection)
            }

            drawTitle() {
                const t = this.options,
                    e = t.title,
                    n = Ce(e.font),
                    i = Ee(e.padding)
                if (!e.display) return
                const r = dn(t.rtl, this.left, this.width),
                    o = this.ctx,
                    a = e.position,
                    s = n.size / 2,
                    l = i.top + s
                let c,
                    u = this.left,
                    h = this.width
                if (this.isHorizontal())
                    (h = Math.max(...this.lineWidths)),
                        (c = this.top + l),
                        (u = Nt(t.align, u, this.right - h))
                else {
                    const e = this.columnSizes.reduce((t, e) => Math.max(t, e.height), 0)
                    c =
                        l +
                        Nt(t.align, this.top, this.bottom - e - t.labels.padding - this._computeTitleHeight())
                }
                const d = Nt(a, u, u + h)
                ;(o.textAlign = r.textAlign(At(a))),
                    (o.textBaseline = 'middle'),
                    (o.strokeStyle = e.color),
                    (o.fillStyle = e.color),
                    (o.font = n.string),
                    be(o, e.text, d, c, n)
            }

            _computeTitleHeight() {
                const t = this.options.title,
                    e = Ce(t.font),
                    n = Ee(t.padding)
                return t.display ? e.lineHeight + n.height : 0
            }

            _getLegendItemAt(t, e) {
                let n, i, r
                if (Et(t, this.left, this.right) && Et(e, this.top, this.bottom))
                    for (r = this.legendHitBoxes, n = 0; n < r.length; ++n)
                        if (((i = r[n]), Et(t, i.left, i.left + i.width) && Et(e, i.top, i.top + i.height)))
                            return this.legendItems[n]
                return null
            }

            handleEvent(t) {
                const e = this.options
                if (
                    !(function (t, e) {
                        return (
                            !(('mousemove' !== t && 'mouseout' !== t) || (!e.onHover && !e.onLeave)) ||
                            !(!e.onClick || ('click' !== t && 'mouseup' !== t))
                        )
                    })(t.type, e)
                )
                    return
                const n = this._getLegendItemAt(t.x, t.y)
                if ('mousemove' === t.type || 'mouseout' === t.type) {
                    const o = this._hoveredItem,
                        a =
                            ((r = n),
                            null !== (i = o) &&
                            null !== r &&
                            i.datasetIndex === r.datasetIndex &&
                            i.index === r.index)
                    o && !a && W(e.onLeave, [t, o, this], this),
                        (this._hoveredItem = n),
                    n && !a && W(e.onHover, [t, n, this], this)
                } else n && W(e.onClick, [t, n, this], this)
                var i, r
            }
        }

        function fo(t, e) {
            return e * (t.text ? t.text.length : 0)
        }

        var po = {
            id: 'legend',
            _element: ho,
            start(t, e, n) {
                const i = (t.legend = new ho({ctx: t.ctx, options: n, chart: t}))
                bi.configure(t, i, n), bi.addBox(t, i)
            },
            stop(t) {
                bi.removeBox(t, t.legend), delete t.legend
            },
            beforeUpdate(t, e, n) {
                const i = t.legend
                bi.configure(t, i, n), (i.options = n)
            },
            afterUpdate(t) {
                const e = t.legend
                e.buildLabels(), e.adjustHitBoxes()
            },
            afterEvent(t, e) {
                e.replay || t.legend.handleEvent(e.event)
            },
            defaults: {
                display: !0,
                position: 'top',
                align: 'center',
                fullSize: !0,
                reverse: !1,
                weight: 1e3,
                onClick(t, e, n) {
                    const i = e.datasetIndex,
                        r = n.chart
                    r.isDatasetVisible(i) ? (r.hide(i), (e.hidden = !0)) : (r.show(i), (e.hidden = !1))
                },
                onHover: null,
                onLeave: null,
                labels: {
                    color: t => t.chart.options.color,
                    boxWidth: 40,
                    padding: 10,
                    generateLabels(t) {
                        const e = t.data.datasets,
                            {
                                labels: {
                                    usePointStyle: n,
                                    pointStyle: i,
                                    textAlign: r,
                                    color: o,
                                    useBorderRadius: a,
                                    borderRadius: s
                                }
                            } = t.legend.options
                        return t._getSortedDatasetMetas().map(t => {
                            const l = t.controller.getStyle(n ? 0 : void 0),
                                c = Ee(l.borderWidth)
                            return {
                                text: e[t.index].label,
                                fillStyle: l.backgroundColor,
                                fontColor: o,
                                hidden: !t.visible,
                                lineCap: l.borderCapStyle,
                                lineDash: l.borderDash,
                                lineDashOffset: l.borderDashOffset,
                                lineJoin: l.borderJoinStyle,
                                lineWidth: (c.width + c.height) / 4,
                                strokeStyle: l.borderColor,
                                pointStyle: i || l.pointStyle,
                                rotation: l.rotation,
                                textAlign: r || l.textAlign,
                                borderRadius: a && (s || l.borderRadius),
                                datasetIndex: t.index
                            }
                        }, this)
                    }
                },
                title: {color: t => t.chart.options.color, display: !1, position: 'center', text: ''}
            },
            descriptors: {
                _scriptable: t => !t.startsWith('on'),
                labels: {_scriptable: t => !['generateLabels', 'filter', 'sort'].includes(t)}
            }
        }

        class go extends Ai {
            constructor(t) {
                super(),
                    (this.chart = t.chart),
                    (this.options = t.options),
                    (this.ctx = t.ctx),
                    (this._padding = void 0),
                    (this.top = void 0),
                    (this.bottom = void 0),
                    (this.left = void 0),
                    (this.right = void 0),
                    (this.width = void 0),
                    (this.height = void 0),
                    (this.position = void 0),
                    (this.weight = void 0),
                    (this.fullSize = void 0)
            }

            update(t, e) {
                const n = this.options
                if (((this.left = 0), (this.top = 0), !n.display))
                    return void (this.width = this.height = this.right = this.bottom = 0)
                        ;
                (this.width = this.right = t), (this.height = this.bottom = e)
                const i = N(n.text) ? n.text.length : 1
                this._padding = Ee(n.padding)
                const r = i * Ce(n.font).lineHeight + this._padding.height
                this.isHorizontal() ? (this.height = r) : (this.width = r)
            }

            isHorizontal() {
                const t = this.options.position
                return 'top' === t || 'bottom' === t
            }

            _drawArgs(t) {
                const {top: e, left: n, bottom: i, right: r, options: o} = this,
                    a = o.align
                let s,
                    l,
                    c,
                    u = 0
                return (
                    this.isHorizontal()
                        ? ((l = Nt(a, n, r)), (c = e + t), (s = r - n))
                        : ('left' === o.position
                            ? ((l = n + t), (c = Nt(a, i, e)), (u = -0.5 * it))
                            : ((l = r - t), (c = Nt(a, e, i)), (u = 0.5 * it)),
                            (s = i - e)),
                        {titleX: l, titleY: c, maxWidth: s, rotation: u}
                )
            }

            draw() {
                const t = this.ctx,
                    e = this.options
                if (!e.display) return
                const n = Ce(e.font),
                    i = n.lineHeight / 2 + this._padding.top,
                    {titleX: r, titleY: o, maxWidth: a, rotation: s} = this._drawArgs(i)
                be(t, e.text, 0, 0, n, {
                    color: e.color,
                    maxWidth: a,
                    rotation: s,
                    textAlign: At(e.align),
                    textBaseline: 'middle',
                    translation: [r, o]
                })
            }
        }

        var mo = {
            id: 'title',
            _element: go,
            start(t, e, n) {
                !(function (t, e) {
                    const n = new go({ctx: t.ctx, options: e, chart: t})
                    bi.configure(t, n, e), bi.addBox(t, n), (t.titleBlock = n)
                })(t, n)
            },
            stop(t) {
                const e = t.titleBlock
                bi.removeBox(t, e), delete t.titleBlock
            },
            beforeUpdate(t, e, n) {
                const i = t.titleBlock
                bi.configure(t, i, n), (i.options = n)
            },
            defaults: {
                align: 'center',
                display: !1,
                font: {weight: 'bold'},
                fullSize: !0,
                padding: 10,
                position: 'top',
                text: '',
                weight: 2e3
            },
            defaultRoutes: {color: 'color'},
            descriptors: {_scriptable: !0, _indexable: !1}
        }
        const bo = new WeakMap()
        var yo = {
            id: 'subtitle',
            start(t, e, n) {
                const i = new go({ctx: t.ctx, options: n, chart: t})
                bi.configure(t, i, n), bi.addBox(t, i), bo.set(t, i)
            },
            stop(t) {
                bi.removeBox(t, bo.get(t)), bo.delete(t)
            },
            beforeUpdate(t, e, n) {
                const i = bo.get(t)
                bi.configure(t, i, n), (i.options = n)
            },
            defaults: {
                align: 'center',
                display: !1,
                font: {weight: 'normal'},
                fullSize: !0,
                padding: 0,
                position: 'top',
                text: '',
                weight: 1500
            },
            defaultRoutes: {color: 'color'},
            descriptors: {_scriptable: !0, _indexable: !1}
        }
        const vo = {
            average(t) {
                if (!t.length) return !1
                let e,
                    n,
                    i = 0,
                    r = 0,
                    o = 0
                for (e = 0, n = t.length; e < n; ++e) {
                    const n = t[e].element
                    if (n && n.hasValue()) {
                        const t = n.tooltipPosition()
                        ;(i += t.x), (r += t.y), ++o
                    }
                }
                return {x: i / o, y: r / o}
            },
            nearest(t, e) {
                if (!t.length) return !1
                let n,
                    i,
                    r,
                    o = e.x,
                    a = e.y,
                    s = Number.POSITIVE_INFINITY
                for (n = 0, i = t.length; n < i; ++n) {
                    const i = t[n].element
                    if (i && i.hasValue()) {
                        const t = _t(e, i.getCenterPoint())
                        t < s && ((s = t), (r = i))
                    }
                }
                if (r) {
                    const t = r.tooltipPosition()
                    ;(o = t.x), (a = t.y)
                }
                return {x: o, y: a}
            }
        }

        function xo(t, e) {
            return e && (N(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t
        }

        function _o(t) {
            return ('string' == typeof t || t instanceof String) && t.indexOf('\n') > -1
                ? t.split('\n')
                : t
        }

        function wo(t, e) {
            const {element: n, datasetIndex: i, index: r} = e,
                o = t.getDatasetMeta(i).controller,
                {label: a, value: s} = o.getLabelAndValue(r)
            return {
                chart: t,
                label: a,
                parsed: o.getParsed(r),
                raw: t.data.datasets[i].data[r],
                formattedValue: s,
                dataset: o.getDataset(),
                dataIndex: r,
                datasetIndex: i,
                element: n
            }
        }

        function ko(t, e) {
            const n = t.chart.ctx,
                {body: i, footer: r, title: o} = t,
                {boxWidth: a, boxHeight: s} = e,
                l = Ce(e.bodyFont),
                c = Ce(e.titleFont),
                u = Ce(e.footerFont),
                h = o.length,
                d = r.length,
                f = i.length,
                p = Ee(e.padding)
            let g = p.height,
                m = 0,
                b = i.reduce((t, e) => t + e.before.length + e.lines.length + e.after.length, 0)
            ;(b += t.beforeBody.length + t.afterBody.length),
            h && (g += h * c.lineHeight + (h - 1) * e.titleSpacing + e.titleMarginBottom),
            b &&
            (g +=
                f * (e.displayColors ? Math.max(s, l.lineHeight) : l.lineHeight) +
                (b - f) * l.lineHeight +
                (b - 1) * e.bodySpacing),
            d && (g += e.footerMarginTop + d * u.lineHeight + (d - 1) * e.footerSpacing)
            let y = 0
            const v = function (t) {
                m = Math.max(m, n.measureText(t).width + y)
            }
            return (
                n.save(),
                    (n.font = c.string),
                    H(t.title, v),
                    (n.font = l.string),
                    H(t.beforeBody.concat(t.afterBody), v),
                    (y = e.displayColors ? a + 2 + e.boxPadding : 0),
                    H(i, t => {
                        H(t.before, v), H(t.lines, v), H(t.after, v)
                    }),
                    (y = 0),
                    (n.font = u.string),
                    H(t.footer, v),
                    n.restore(),
                    (m += p.width),
                    {width: m, height: g}
            )
        }

        function So(t, e, n, i) {
            const {x: r, width: o} = n,
                {
                    width: a,
                    chartArea: {left: s, right: l}
                } = t
            let c = 'center'
            return (
                'center' === i
                    ? (c = r <= (s + l) / 2 ? 'left' : 'right')
                    : r <= o / 2
                        ? (c = 'left')
                        : r >= a - o / 2 && (c = 'right'),
                (function (t, e, n, i) {
                    const {x: r, width: o} = i,
                        a = n.caretSize + n.caretPadding
                    return ('left' === t && r + o + a > e.width) || ('right' === t && r - o - a < 0) || void 0
                })(c, t, e, n) && (c = 'center'),
                    c
            )
        }

        function Mo(t, e, n) {
            const i =
                n.yAlign ||
                e.yAlign ||
                (function (t, e) {
                    const {y: n, height: i} = e
                    return n < i / 2 ? 'top' : n > t.height - i / 2 ? 'bottom' : 'center'
                })(t, n)
            return {xAlign: n.xAlign || e.xAlign || So(t, e, n, i), yAlign: i}
        }

        function Eo(t, e, n, i) {
            const {caretSize: r, caretPadding: o, cornerRadius: a} = t,
                {xAlign: s, yAlign: l} = n,
                c = r + o,
                {topLeft: u, topRight: h, bottomLeft: d, bottomRight: f} = Me(a)
            let p = (function (t, e) {
                let {x: n, width: i} = t
                return 'right' === e ? (n -= i) : 'center' === e && (n -= i / 2), n
            })(e, s)
            const g = (function (t, e, n) {
                let {y: i, height: r} = t
                return 'top' === e ? (i += n) : (i -= 'bottom' === e ? r + n : r / 2), i
            })(e, l, c)
            return (
                'center' === l
                    ? 'left' === s
                        ? (p += c)
                        : 'right' === s && (p -= c)
                    : 'left' === s
                        ? (p -= Math.max(u, d) + r)
                        : 'right' === s && (p += Math.max(h, f) + r),
                    {x: Mt(p, 0, i.width - e.width), y: Mt(g, 0, i.height - e.height)}
            )
        }

        function Co(t, e, n) {
            const i = Ee(n.padding)
            return 'center' === e
                ? t.x + t.width / 2
                : 'right' === e
                    ? t.x + t.width - i.right
                    : t.x + i.left
        }

        function Po(t) {
            return xo([], _o(t))
        }

        function Lo(t, e) {
            const n = e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks
            return n ? t.override(n) : t
        }

        const Do = {
            beforeTitle: z,
            title(t) {
                if (t.length > 0) {
                    const e = t[0],
                        n = e.chart.data.labels,
                        i = n ? n.length : 0
                    if (this && this.options && 'dataset' === this.options.mode) return e.dataset.label || ''
                    if (e.label) return e.label
                    if (i > 0 && e.dataIndex < i) return n[e.dataIndex]
                }
                return ''
            },
            afterTitle: z,
            beforeBody: z,
            beforeLabel: z,
            label(t) {
                if (this && this.options && 'dataset' === this.options.mode)
                    return t.label + ': ' + t.formattedValue || t.formattedValue
                let e = t.dataset.label || ''
                e && (e += ': ')
                const n = t.formattedValue
                return A(n) || (e += n), e
            },
            labelColor(t) {
                const e = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex)
                return {
                    borderColor: e.borderColor,
                    backgroundColor: e.backgroundColor,
                    borderWidth: e.borderWidth,
                    borderDash: e.borderDash,
                    borderDashOffset: e.borderDashOffset,
                    borderRadius: 0
                }
            },
            labelTextColor() {
                return this.options.bodyColor
            },
            labelPointStyle(t) {
                const e = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex)
                return {pointStyle: e.pointStyle, rotation: e.rotation}
            },
            afterLabel: z,
            afterBody: z,
            beforeFooter: z,
            footer: z,
            afterFooter: z
        }

        function Oo(t, e, n, i) {
            const r = t[e].call(n, i)
            return void 0 === r ? Do[e].call(n, i) : r
        }

        class To extends Ai {
            static positioners = vo

            constructor(t) {
                super(),
                    (this.opacity = 0),
                    (this._active = []),
                    (this._eventPosition = void 0),
                    (this._size = void 0),
                    (this._cachedAnimations = void 0),
                    (this._tooltipItems = []),
                    (this.$animations = void 0),
                    (this.$context = void 0),
                    (this.chart = t.chart),
                    (this.options = t.options),
                    (this.dataPoints = void 0),
                    (this.title = void 0),
                    (this.beforeBody = void 0),
                    (this.body = void 0),
                    (this.afterBody = void 0),
                    (this.footer = void 0),
                    (this.xAlign = void 0),
                    (this.yAlign = void 0),
                    (this.x = void 0),
                    (this.y = void 0),
                    (this.height = void 0),
                    (this.width = void 0),
                    (this.caretX = void 0),
                    (this.caretY = void 0),
                    (this.labelColors = void 0),
                    (this.labelPointStyles = void 0),
                    (this.labelTextColors = void 0)
            }

            initialize(t) {
                ;(this.options = t), (this._cachedAnimations = void 0), (this.$context = void 0)
            }

            _resolveAnimations() {
                const t = this._cachedAnimations
                if (t) return t
                const e = this.chart,
                    n = this.options.setContext(this.getContext()),
                    i = n.enabled && e.options.animation && n.animations,
                    r = new En(this.chart, i)
                return i._cacheable && (this._cachedAnimations = Object.freeze(r)), r
            }

            getContext() {
                return (
                    this.$context ||
                    (this.$context =
                        (this,
                            Le(this.chart.getContext(), {
                                tooltip: this,
                                tooltipItems: this._tooltipItems,
                                type: 'tooltip'
                            })))
                )
            }

            getTitle(t, e) {
                const {callbacks: n} = e,
                    i = Oo(n, 'beforeTitle', this, t),
                    r = Oo(n, 'title', this, t),
                    o = Oo(n, 'afterTitle', this, t)
                let a = []
                return (a = xo(a, _o(i))), (a = xo(a, _o(r))), (a = xo(a, _o(o))), a
            }

            getBeforeBody(t, e) {
                return Po(Oo(e.callbacks, 'beforeBody', this, t))
            }

            getBody(t, e) {
                const {callbacks: n} = e,
                    i = []
                return (
                    H(t, t => {
                        const e = {before: [], lines: [], after: []},
                            r = Lo(n, t)
                        xo(e.before, _o(Oo(r, 'beforeLabel', this, t))),
                            xo(e.lines, Oo(r, 'label', this, t)),
                            xo(e.after, _o(Oo(r, 'afterLabel', this, t))),
                            i.push(e)
                    }),
                        i
                )
            }

            getAfterBody(t, e) {
                return Po(Oo(e.callbacks, 'afterBody', this, t))
            }

            getFooter(t, e) {
                const {callbacks: n} = e,
                    i = Oo(n, 'beforeFooter', this, t),
                    r = Oo(n, 'footer', this, t),
                    o = Oo(n, 'afterFooter', this, t)
                let a = []
                return (a = xo(a, _o(i))), (a = xo(a, _o(r))), (a = xo(a, _o(o))), a
            }

            _createItems(t) {
                const e = this._active,
                    n = this.chart.data,
                    i = [],
                    r = [],
                    o = []
                let a,
                    s,
                    l = []
                for (a = 0, s = e.length; a < s; ++a) l.push(wo(this.chart, e[a]))
                return (
                    t.filter && (l = l.filter((e, i, r) => t.filter(e, i, r, n))),
                    t.itemSort && (l = l.sort((e, i) => t.itemSort(e, i, n))),
                        H(l, e => {
                            const n = Lo(t.callbacks, e)
                            i.push(Oo(n, 'labelColor', this, e)),
                                r.push(Oo(n, 'labelPointStyle', this, e)),
                                o.push(Oo(n, 'labelTextColor', this, e))
                        }),
                        (this.labelColors = i),
                        (this.labelPointStyles = r),
                        (this.labelTextColors = o),
                        (this.dataPoints = l),
                        l
                )
            }

            update(t, e) {
                const n = this.options.setContext(this.getContext()),
                    i = this._active
                let r,
                    o = []
                if (i.length) {
                    const t = vo[n.position].call(this, i, this._eventPosition)
                    ;(o = this._createItems(n)),
                        (this.title = this.getTitle(o, n)),
                        (this.beforeBody = this.getBeforeBody(o, n)),
                        (this.body = this.getBody(o, n)),
                        (this.afterBody = this.getAfterBody(o, n)),
                        (this.footer = this.getFooter(o, n))
                    const e = (this._size = ko(this, n)),
                        a = Object.assign({}, t, e),
                        s = Mo(this.chart, n, a),
                        l = Eo(n, a, s, this.chart)
                    ;(this.xAlign = s.xAlign),
                        (this.yAlign = s.yAlign),
                        (r = {
                            opacity: 1,
                            x: l.x,
                            y: l.y,
                            width: e.width,
                            height: e.height,
                            caretX: t.x,
                            caretY: t.y
                        })
                } else 0 !== this.opacity && (r = {opacity: 0})
                ;
                (this._tooltipItems = o),
                    (this.$context = void 0),
                r && this._resolveAnimations().update(this, r),
                t && n.external && n.external.call(this, {chart: this.chart, tooltip: this, replay: e})
            }

            drawCaret(t, e, n, i) {
                const r = this.getCaretPosition(t, n, i)
                e.lineTo(r.x1, r.y1), e.lineTo(r.x2, r.y2), e.lineTo(r.x3, r.y3)
            }

            getCaretPosition(t, e, n) {
                const {xAlign: i, yAlign: r} = this,
                    {caretSize: o, cornerRadius: a} = n,
                    {topLeft: s, topRight: l, bottomLeft: c, bottomRight: u} = Me(a),
                    {x: h, y: d} = t,
                    {width: f, height: p} = e
                let g, m, b, y, v, x
                return (
                    'center' === r
                        ? ((v = d + p / 2),
                            'left' === i
                                ? ((g = h), (m = g - o), (y = v + o), (x = v - o))
                                : ((g = h + f), (m = g + o), (y = v - o), (x = v + o)),
                            (b = g))
                        : ((m =
                            'left' === i
                                ? h + Math.max(s, c) + o
                                : 'right' === i
                                    ? h + f - Math.max(l, u) - o
                                    : this.caretX),
                            'top' === r
                                ? ((y = d), (v = y - o), (g = m - o), (b = m + o))
                                : ((y = d + p), (v = y + o), (g = m + o), (b = m - o)),
                            (x = y)),
                        {x1: g, x2: m, x3: b, y1: y, y2: v, y3: x}
                )
            }

            drawTitle(t, e, n) {
                const i = this.title,
                    r = i.length
                let o, a, s
                if (r) {
                    const l = dn(n.rtl, this.x, this.width)
                    for (
                        t.x = Co(this, n.titleAlign, n),
                            e.textAlign = l.textAlign(n.titleAlign),
                            e.textBaseline = 'middle',
                            o = Ce(n.titleFont),
                            a = n.titleSpacing,
                            e.fillStyle = n.titleColor,
                            e.font = o.string,
                            s = 0;
                        s < r;
                        ++s
                    )
                        e.fillText(i[s], l.x(t.x), t.y + o.lineHeight / 2),
                            (t.y += o.lineHeight + a),
                        s + 1 === r && (t.y += n.titleMarginBottom - a)
                }
            }

            _drawColorBox(t, e, n, i, r) {
                const o = this.labelColors[n],
                    a = this.labelPointStyles[n],
                    {boxHeight: s, boxWidth: l} = r,
                    c = Ce(r.bodyFont),
                    u = Co(this, 'left', r),
                    h = i.x(u),
                    d = s < c.lineHeight ? (c.lineHeight - s) / 2 : 0,
                    f = e.y + d
                if (r.usePointStyle) {
                    const e = {
                            radius: Math.min(l, s) / 2,
                            pointStyle: a.pointStyle,
                            rotation: a.rotation,
                            borderWidth: 1
                        },
                        n = i.leftForLtr(h, l) + l / 2,
                        c = f + s / 2
                    ;(t.strokeStyle = r.multiKeyBackground),
                        (t.fillStyle = r.multiKeyBackground),
                        le(t, e, n, c),
                        (t.strokeStyle = o.borderColor),
                        (t.fillStyle = o.backgroundColor),
                        le(t, e, n, c)
                } else {
                    ;(t.lineWidth = I(o.borderWidth)
                        ? Math.max(...Object.values(o.borderWidth))
                        : o.borderWidth || 1),
                        (t.strokeStyle = o.borderColor),
                        t.setLineDash(o.borderDash || []),
                        (t.lineDashOffset = o.borderDashOffset || 0)
                    const e = i.leftForLtr(h, l),
                        n = i.leftForLtr(i.xPlus(h, 1), l - 2),
                        a = Me(o.borderRadius)
                    Object.values(a).some(t => 0 !== t)
                        ? (t.beginPath(),
                            (t.fillStyle = r.multiKeyBackground),
                            ye(t, {x: e, y: f, w: l, h: s, radius: a}),
                            t.fill(),
                            t.stroke(),
                            (t.fillStyle = o.backgroundColor),
                            t.beginPath(),
                            ye(t, {x: n, y: f + 1, w: l - 2, h: s - 2, radius: a}),
                            t.fill())
                        : ((t.fillStyle = r.multiKeyBackground),
                            t.fillRect(e, f, l, s),
                            t.strokeRect(e, f, l, s),
                            (t.fillStyle = o.backgroundColor),
                            t.fillRect(n, f + 1, l - 2, s - 2))
                }
                t.fillStyle = this.labelTextColors[n]
            }

            drawBody(t, e, n) {
                const {body: i} = this,
                    {
                        bodySpacing: r,
                        bodyAlign: o,
                        displayColors: a,
                        boxHeight: s,
                        boxWidth: l,
                        boxPadding: c
                    } = n,
                    u = Ce(n.bodyFont)
                let h = u.lineHeight,
                    d = 0
                const f = dn(n.rtl, this.x, this.width),
                    p = function (n) {
                        e.fillText(n, f.x(t.x + d), t.y + h / 2), (t.y += h + r)
                    },
                    g = f.textAlign(o)
                let m, b, y, v, x, _, w
                for (
                    e.textAlign = o,
                        e.textBaseline = 'middle',
                        e.font = u.string,
                        t.x = Co(this, g, n),
                        e.fillStyle = n.bodyColor,
                        H(this.beforeBody, p),
                        d = a && 'right' !== g ? ('center' === o ? l / 2 + c : l + 2 + c) : 0,
                        v = 0,
                        _ = i.length;
                    v < _;
                    ++v
                ) {
                    for (
                        m = i[v],
                            b = this.labelTextColors[v],
                            e.fillStyle = b,
                            H(m.before, p),
                            y = m.lines,
                        a && y.length && (this._drawColorBox(e, t, v, f, n), (h = Math.max(u.lineHeight, s))),
                            x = 0,
                            w = y.length;
                        x < w;
                        ++x
                    )
                        p(y[x]), (h = u.lineHeight)
                    H(m.after, p)
                }
                ;(d = 0), (h = u.lineHeight), H(this.afterBody, p), (t.y -= r)
            }

            drawFooter(t, e, n) {
                const i = this.footer,
                    r = i.length
                let o, a
                if (r) {
                    const s = dn(n.rtl, this.x, this.width)
                    for (
                        t.x = Co(this, n.footerAlign, n),
                            t.y += n.footerMarginTop,
                            e.textAlign = s.textAlign(n.footerAlign),
                            e.textBaseline = 'middle',
                            o = Ce(n.footerFont),
                            e.fillStyle = n.footerColor,
                            e.font = o.string,
                            a = 0;
                        a < r;
                        ++a
                    )
                        e.fillText(i[a], s.x(t.x), t.y + o.lineHeight / 2),
                            (t.y += o.lineHeight + n.footerSpacing)
                }
            }

            drawBackground(t, e, n, i) {
                const {xAlign: r, yAlign: o} = this,
                    {x: a, y: s} = t,
                    {width: l, height: c} = n,
                    {topLeft: u, topRight: h, bottomLeft: d, bottomRight: f} = Me(i.cornerRadius)
                ;(e.fillStyle = i.backgroundColor),
                    (e.strokeStyle = i.borderColor),
                    (e.lineWidth = i.borderWidth),
                    e.beginPath(),
                    e.moveTo(a + u, s),
                'top' === o && this.drawCaret(t, e, n, i),
                    e.lineTo(a + l - h, s),
                    e.quadraticCurveTo(a + l, s, a + l, s + h),
                'center' === o && 'right' === r && this.drawCaret(t, e, n, i),
                    e.lineTo(a + l, s + c - f),
                    e.quadraticCurveTo(a + l, s + c, a + l - f, s + c),
                'bottom' === o && this.drawCaret(t, e, n, i),
                    e.lineTo(a + d, s + c),
                    e.quadraticCurveTo(a, s + c, a, s + c - d),
                'center' === o && 'left' === r && this.drawCaret(t, e, n, i),
                    e.lineTo(a, s + u),
                    e.quadraticCurveTo(a, s, a + u, s),
                    e.closePath(),
                    e.fill(),
                i.borderWidth > 0 && e.stroke()
            }

            _updateAnimationTarget(t) {
                const e = this.chart,
                    n = this.$animations,
                    i = n && n.x,
                    r = n && n.y
                if (i || r) {
                    const n = vo[t.position].call(this, this._active, this._eventPosition)
                    if (!n) return
                    const o = (this._size = ko(this, t)),
                        a = Object.assign({}, n, this._size),
                        s = Mo(e, t, a),
                        l = Eo(t, a, s, e)
                    ;(i._to === l.x && r._to === l.y) ||
                    ((this.xAlign = s.xAlign),
                        (this.yAlign = s.yAlign),
                        (this.width = o.width),
                        (this.height = o.height),
                        (this.caretX = n.x),
                        (this.caretY = n.y),
                        this._resolveAnimations().update(this, l))
                }
            }

            _willRender() {
                return !!this.opacity
            }

            draw(t) {
                const e = this.options.setContext(this.getContext())
                let n = this.opacity
                if (!n) return
                this._updateAnimationTarget(e)
                const i = {width: this.width, height: this.height},
                    r = {x: this.x, y: this.y}
                n = Math.abs(n) < 0.001 ? 0 : n
                const o = Ee(e.padding),
                    a =
                        this.title.length ||
                        this.beforeBody.length ||
                        this.body.length ||
                        this.afterBody.length ||
                        this.footer.length
                e.enabled &&
                a &&
                (t.save(),
                    (t.globalAlpha = n),
                    this.drawBackground(r, t, i, e),
                    fn(t, e.textDirection),
                    (r.y += o.top),
                    this.drawTitle(r, t, e),
                    this.drawBody(r, t, e),
                    this.drawFooter(r, t, e),
                    pn(t, e.textDirection),
                    t.restore())
            }

            getActiveElements() {
                return this._active || []
            }

            setActiveElements(t, e) {
                const n = this._active,
                    i = t.map(({datasetIndex: t, index: e}) => {
                        const n = this.chart.getDatasetMeta(t)
                        if (!n) throw new Error('Cannot find a dataset at index ' + t)
                        return {datasetIndex: t, element: n.data[e], index: e}
                    }),
                    r = !$(n, i),
                    o = this._positionChanged(i, e)
                ;(r || o) &&
                ((this._active = i),
                    (this._eventPosition = e),
                    (this._ignoreReplayEvents = !0),
                    this.update(!0))
            }

            handleEvent(t, e, n = !0) {
                if (e && this._ignoreReplayEvents) return !1
                this._ignoreReplayEvents = !1
                const i = this.options,
                    r = this._active || [],
                    o = this._getActiveElements(t, r, e, n),
                    a = this._positionChanged(o, t),
                    s = e || !$(o, r) || a
                return (
                    s &&
                    ((this._active = o),
                    (i.enabled || i.external) &&
                    ((this._eventPosition = {x: t.x, y: t.y}), this.update(!0, e))),
                        s
                )
            }

            _getActiveElements(t, e, n, i) {
                const r = this.options
                if ('mouseout' === t.type) return []
                if (!i)
                    return e.filter(
                        t =>
                            this.chart.data.datasets[t.datasetIndex] &&
                            void 0 !== this.chart.getDatasetMeta(t.datasetIndex).controller.getParsed(t.index)
                    )
                const o = this.chart.getElementsAtEventForMode(t, r.mode, r, n)
                return r.reverse && o.reverse(), o
            }

            _positionChanged(t, e) {
                const {caretX: n, caretY: i, options: r} = this,
                    o = vo[r.position].call(this, t, e)
                return !1 !== o && (n !== o.x || i !== o.y)
            }
        }

        var zo = {
                id: 'tooltip',
                _element: To,
                positioners: vo,
                afterInit(t, e, n) {
                    n && (t.tooltip = new To({chart: t, options: n}))
                },
                beforeUpdate(t, e, n) {
                    t.tooltip && t.tooltip.initialize(n)
                },
                reset(t, e, n) {
                    t.tooltip && t.tooltip.initialize(n)
                },
                afterDraw(t) {
                    const e = t.tooltip
                    if (e && e._willRender()) {
                        const n = {tooltip: e}
                        if (!1 === t.notifyPlugins('beforeTooltipDraw', {...n, cancelable: !0})) return
                        e.draw(t.ctx), t.notifyPlugins('afterTooltipDraw', n)
                    }
                },
                afterEvent(t, e) {
                    if (t.tooltip) {
                        const n = e.replay
                        t.tooltip.handleEvent(e.event, n, e.inChartArea) && (e.changed = !0)
                    }
                },
                defaults: {
                    enabled: !0,
                    external: null,
                    position: 'average',
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    titleColor: '#fff',
                    titleFont: {weight: 'bold'},
                    titleSpacing: 2,
                    titleMarginBottom: 6,
                    titleAlign: 'left',
                    bodyColor: '#fff',
                    bodySpacing: 2,
                    bodyFont: {},
                    bodyAlign: 'left',
                    footerColor: '#fff',
                    footerSpacing: 2,
                    footerMarginTop: 6,
                    footerFont: {weight: 'bold'},
                    footerAlign: 'left',
                    padding: 6,
                    caretPadding: 2,
                    caretSize: 5,
                    cornerRadius: 6,
                    boxHeight: (t, e) => e.bodyFont.size,
                    boxWidth: (t, e) => e.bodyFont.size,
                    multiKeyBackground: '#fff',
                    displayColors: !0,
                    boxPadding: 0,
                    borderColor: 'rgba(0,0,0,0)',
                    borderWidth: 0,
                    animation: {duration: 400, easing: 'easeOutQuart'},
                    animations: {
                        numbers: {
                            type: 'number',
                            properties: ['x', 'y', 'width', 'height', 'caretX', 'caretY']
                        },
                        opacity: {easing: 'linear', duration: 200}
                    },
                    callbacks: Do
                },
                defaultRoutes: {bodyFont: 'font', footerFont: 'font', titleFont: 'font'},
                descriptors: {
                    _scriptable: t => 'filter' !== t && 'itemSort' !== t && 'external' !== t,
                    _indexable: !1,
                    callbacks: {_scriptable: !1, _indexable: !1},
                    animation: {_fallback: !1},
                    animations: {_fallback: 'animation'}
                },
                additionalOptionScopes: ['interaction']
            },
            Ro = Object.freeze({
                __proto__: null,
                Colors: $r,
                Decimation: Qr,
                Filler: co,
                Legend: po,
                SubTitle: yo,
                Title: mo,
                Tooltip: zo
            })

        function Ao(t) {
            const e = this.getLabels()
            return t >= 0 && t < e.length ? e[t] : t
        }

        class No extends $i {
            static id = 'category'
            static defaults = {ticks: {callback: Ao}}

            constructor(t) {
                super(t), (this._startValue = void 0), (this._valueRange = 0), (this._addedLabels = [])
            }

            init(t) {
                const e = this._addedLabels
                if (e.length) {
                    const t = this.getLabels()
                    for (const {index: n, label: i} of e) t[n] === i && t.splice(n, 1)
                    this._addedLabels = []
                }
                super.init(t)
            }

            parse(t, e) {
                if (A(t)) return null
                const n = this.getLabels()
                return ((t, e) => (null === t ? null : Mt(Math.round(t), 0, e)))(
                    (e =
                        isFinite(e) && n[e] === t
                            ? e
                            : (function (t, e, n, i) {
                                const r = t.indexOf(e)
                                return -1 === r
                                    ? ((t, e, n, i) => (
                                        'string' == typeof e
                                            ? ((n = t.push(e) - 1), i.unshift({index: n, label: e}))
                                            : isNaN(e) && (n = null),
                                            n
                                    ))(t, e, n, i)
                                    : r !== t.lastIndexOf(e)
                                        ? n
                                        : r
                            })(n, t, B(e, t), this._addedLabels)),
                    n.length - 1
                )
            }

            determineDataLimits() {
                const {minDefined: t, maxDefined: e} = this.getUserBounds()
                let {min: n, max: i} = this.getMinMax(!0)
                'ticks' === this.options.bounds && (t || (n = 0), e || (i = this.getLabels().length - 1)),
                    (this.min = n),
                    (this.max = i)
            }

            buildTicks() {
                const t = this.min,
                    e = this.max,
                    n = this.options.offset,
                    i = []
                let r = this.getLabels()
                ;(r = 0 === t && e === r.length - 1 ? r : r.slice(t, e + 1)),
                    (this._valueRange = Math.max(r.length - (n ? 0 : 1), 1)),
                    (this._startValue = this.min - (n ? 0.5 : 0))
                for (let n = t; n <= e; n++) i.push({value: n})
                return i
            }

            getLabelForValue(t) {
                return Ao.call(this, t)
            }

            configure() {
                super.configure(), this.isHorizontal() || (this._reversePixels = !this._reversePixels)
            }

            getPixelForValue(t) {
                return (
                    'number' != typeof t && (t = this.parse(t)),
                        null === t ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
                )
            }

            getPixelForTick(t) {
                const e = this.ticks
                return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value)
            }

            getValueForPixel(t) {
                return Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange)
            }

            getBasePixel() {
                return this.bottom
            }
        }

        function Io(t, e, {horizontal: n, minRotation: i}) {
            const r = bt(i),
                o = (n ? Math.sin(r) : Math.cos(r)) || 0.001,
                a = 0.75 * e * ('' + t).length
            return Math.min(e / o, a)
        }

        class Fo extends $i {
            constructor(t) {
                super(t),
                    (this.start = void 0),
                    (this.end = void 0),
                    (this._startValue = void 0),
                    (this._endValue = void 0),
                    (this._valueRange = 0)
            }

            parse(t, e) {
                return A(t) || (('number' == typeof t || t instanceof Number) && !isFinite(+t)) ? null : +t
            }

            handleTickRangeOptions() {
                const {beginAtZero: t} = this.options,
                    {minDefined: e, maxDefined: n} = this.getUserBounds()
                let {min: i, max: r} = this
                const o = t => (i = e ? i : t),
                    a = t => (r = n ? r : t)
                if (t) {
                    const t = dt(i),
                        e = dt(r)
                    t < 0 && e < 0 ? a(0) : t > 0 && e > 0 && o(0)
                }
                if (i === r) {
                    let e = 0 === r ? 1 : Math.abs(0.05 * r)
                    a(r + e), t || o(i - e)
                }
                ;(this.min = i), (this.max = r)
            }

            getTickLimit() {
                const t = this.options.ticks
                let e,
                    {maxTicksLimit: n, stepSize: i} = t
                return (
                    i
                        ? ((e = Math.ceil(this.max / i) - Math.floor(this.min / i) + 1),
                        e > 1e3 &&
                        (console.warn(
                            `scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${e} ticks. Limiting to 1000.`
                        ),
                            (e = 1e3)))
                        : ((e = this.computeTickLimit()), (n = n || 11)),
                    n && (e = Math.min(n, e)),
                        e
                )
            }

            computeTickLimit() {
                return Number.POSITIVE_INFINITY
            }

            buildTicks() {
                const t = this.options,
                    e = t.ticks
                let n = this.getTickLimit()
                n = Math.max(2, n)
                const i = (function (t, e) {
                    const n = [],
                        {
                            bounds: i,
                            step: r,
                            min: o,
                            max: a,
                            precision: s,
                            count: l,
                            maxTicks: c,
                            maxDigits: u,
                            includeBounds: h
                        } = t,
                        d = r || 1,
                        f = c - 1,
                        {min: p, max: g} = e,
                        m = !A(o),
                        b = !A(a),
                        y = !A(l),
                        v = (g - p) / (u + 1)
                    let x,
                        _,
                        w,
                        k,
                        S = pt((g - p) / f / d) * d
                    if (S < 1e-14 && !m && !b) return [{value: p}, {value: g}]
                        ;
                    (k = Math.ceil(g / S) - Math.floor(p / S)),
                    k > f && (S = pt((k * S) / f / d) * d),
                    A(s) || ((x = Math.pow(10, s)), (S = Math.ceil(S * x) / x)),
                        'ticks' === i
                            ? ((_ = Math.floor(p / S) * S), (w = Math.ceil(g / S) * S))
                            : ((_ = p), (w = g)),
                        m &&
                        b &&
                        r &&
                        (function (t, e) {
                            const n = Math.round(t)
                            return n - e <= t && n + e >= t
                        })((a - o) / r, S / 1e3)
                            ? ((k = Math.round(Math.min((a - o) / S, c))), (S = (a - o) / k), (_ = o), (w = a))
                            : y
                                ? ((_ = m ? o : _), (w = b ? a : w), (k = l - 1), (S = (w - _) / k))
                                : ((k = (w - _) / S),
                                    (k = ft(k, Math.round(k), S / 1e3) ? Math.round(k) : Math.ceil(k)))
                    const M = Math.max(vt(S), vt(_))
                    ;(x = Math.pow(10, A(s) ? M : s)),
                        (_ = Math.round(_ * x) / x),
                        (w = Math.round(w * x) / x)
                    let E = 0
                    for (
                        m &&
                        (h && _ !== o
                            ? (n.push({value: o}),
                            _ < o && E++,
                            ft(Math.round((_ + E * S) * x) / x, o, Io(o, v, t)) && E++)
                            : _ < o && E++);
                        E < k;
                        ++E
                    ) {
                        const t = Math.round((_ + E * S) * x) / x
                        if (b && t > a) break
                        n.push({value: t})
                    }
                    return (
                        b && h && w !== a
                            ? n.length && ft(n[n.length - 1].value, a, Io(a, v, t))
                                ? (n[n.length - 1].value = a)
                                : n.push({value: a})
                            : (b && w !== a) || n.push({value: w}),
                            n
                    )
                })(
                    {
                        maxTicks: n,
                        bounds: t.bounds,
                        min: t.min,
                        max: t.max,
                        precision: e.precision,
                        step: e.stepSize,
                        count: e.count,
                        maxDigits: this._maxDigits(),
                        horizontal: this.isHorizontal(),
                        minRotation: e.minRotation || 0,
                        includeBounds: !1 !== e.includeBounds
                    },
                    this._range || this
                )
                return (
                    'ticks' === t.bounds && mt(i, this, 'value'),
                        t.reverse
                            ? (i.reverse(), (this.start = this.max), (this.end = this.min))
                            : ((this.start = this.min), (this.end = this.max)),
                        i
                )
            }

            configure() {
                const t = this.ticks
                let e = this.min,
                    n = this.max
                if ((super.configure(), this.options.offset && t.length)) {
                    const i = (n - e) / Math.max(t.length - 1, 1) / 2
                    ;(e -= i), (n += i)
                }
                ;(this._startValue = e), (this._endValue = n), (this._valueRange = n - e)
            }

            getLabelForValue(t) {
                return qt(t, this.chart.options.locale, this.options.ticks.format)
            }
        }

        class Vo extends Fo {
            static id = 'linear'
            static defaults = {ticks: {callback: Gt.formatters.numeric}}

            determineDataLimits() {
                const {min: t, max: e} = this.getMinMax(!0)
                ;(this.min = F(t) ? t : 0), (this.max = F(e) ? e : 1), this.handleTickRangeOptions()
            }

            computeTickLimit() {
                const t = this.isHorizontal(),
                    e = t ? this.width : this.height,
                    n = bt(this.options.ticks.minRotation),
                    i = (t ? Math.sin(n) : Math.cos(n)) || 0.001,
                    r = this._resolveTickFontOptions(0)
                return Math.ceil(e / Math.min(40, r.lineHeight / i))
            }

            getPixelForValue(t) {
                return null === t ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
            }

            getValueForPixel(t) {
                return this._startValue + this.getDecimalForPixel(t) * this._valueRange
            }
        }

        const Bo = t => Math.floor(ht(t)),
            jo = (t, e) => Math.pow(10, Bo(t) + e)

        function Wo(t) {
            return 1 == t / Math.pow(10, Bo(t))
        }

        function Ho(t, e, n) {
            const i = Math.pow(10, n),
                r = Math.floor(t / i)
            return Math.ceil(e / i) - r
        }

        class $o extends $i {
            static id = 'logarithmic'
            static defaults = {ticks: {callback: Gt.formatters.logarithmic, major: {enabled: !0}}}

            constructor(t) {
                super(t),
                    (this.start = void 0),
                    (this.end = void 0),
                    (this._startValue = void 0),
                    (this._valueRange = 0)
            }

            parse(t, e) {
                const n = Fo.prototype.parse.apply(this, [t, e])
                if (0 !== n) return F(n) && n > 0 ? n : null
                this._zero = !0
            }

            determineDataLimits() {
                const {min: t, max: e} = this.getMinMax(!0)
                ;(this.min = F(t) ? Math.max(0, t) : null),
                    (this.max = F(e) ? Math.max(0, e) : null),
                this.options.beginAtZero && (this._zero = !0),
                this._zero &&
                this.min !== this._suggestedMin &&
                !F(this._userMin) &&
                (this.min = t === jo(this.min, 0) ? jo(this.min, -1) : jo(this.min, 0)),
                    this.handleTickRangeOptions()
            }

            handleTickRangeOptions() {
                const {minDefined: t, maxDefined: e} = this.getUserBounds()
                let n = this.min,
                    i = this.max
                const r = e => (n = t ? n : e),
                    o = t => (i = e ? i : t)
                n === i && (n <= 0 ? (r(1), o(10)) : (r(jo(n, -1)), o(jo(i, 1)))),
                n <= 0 && r(jo(i, -1)),
                i <= 0 && o(jo(n, 1)),
                    (this.min = n),
                    (this.max = i)
            }

            buildTicks() {
                const t = this.options,
                    e = (function (t, {min: e, max: n}) {
                        e = V(t.min, e)
                        const i = [],
                            r = Bo(e)
                        let o = (function (t, e) {
                                let n = Bo(e - t)
                                for (; Ho(t, e, n) > 10;) n++
                                for (; Ho(t, e, n) < 10;) n--
                                return Math.min(n, Bo(t))
                            })(e, n),
                            a = o < 0 ? Math.pow(10, Math.abs(o)) : 1
                        const s = Math.pow(10, o),
                            l = r > o ? Math.pow(10, r) : 0,
                            c = Math.round((e - l) * a) / a,
                            u = Math.floor((e - l) / s / 10) * s * 10
                        let h = Math.floor((c - u) / Math.pow(10, o)),
                            d = V(t.min, Math.round((l + u + h * Math.pow(10, o)) * a) / a)
                        for (; d < n;)
                            i.push({value: d, major: Wo(d), significand: h}),
                                h >= 10 ? (h = h < 15 ? 15 : 20) : h++,
                            h >= 20 && (o++, (h = 2), (a = o >= 0 ? 1 : a)),
                                (d = Math.round((l + u + h * Math.pow(10, o)) * a) / a)
                        const f = V(t.max, d)
                        return i.push({value: f, major: Wo(f), significand: h}), i
                    })({min: this._userMin, max: this._userMax}, this)
                return (
                    'ticks' === t.bounds && mt(e, this, 'value'),
                        t.reverse
                            ? (e.reverse(), (this.start = this.max), (this.end = this.min))
                            : ((this.start = this.min), (this.end = this.max)),
                        e
                )
            }

            getLabelForValue(t) {
                return void 0 === t ? '0' : qt(t, this.chart.options.locale, this.options.ticks.format)
            }

            configure() {
                const t = this.min
                super.configure(), (this._startValue = ht(t)), (this._valueRange = ht(this.max) - ht(t))
            }

            getPixelForValue(t) {
                return (
                    (void 0 !== t && 0 !== t) || (t = this.min),
                        null === t || isNaN(t)
                            ? NaN
                            : this.getPixelForDecimal(
                                t === this.min ? 0 : (ht(t) - this._startValue) / this._valueRange
                            )
                )
            }

            getValueForPixel(t) {
                const e = this.getDecimalForPixel(t)
                return Math.pow(10, this._startValue + e * this._valueRange)
            }
        }

        function Uo(t) {
            const e = t.ticks
            if (e.display && t.display) {
                const t = Ee(e.backdropPadding)
                return B(e.font && e.font.size, ie.font.size) + t.height
            }
            return 0
        }

        function Yo(t, e, n, i, r) {
            return t === i || t === r
                ? {start: e - n / 2, end: e + n / 2}
                : t < i || t > r
                    ? {start: e - n, end: e}
                    : {start: e, end: e + n}
        }

        function Qo(t, e, n, i, r) {
            const o = Math.abs(Math.sin(n)),
                a = Math.abs(Math.cos(n))
            let s = 0,
                l = 0
            i.start < e.l
                ? ((s = (e.l - i.start) / o), (t.l = Math.min(t.l, e.l - s)))
                : i.end > e.r && ((s = (i.end - e.r) / o), (t.r = Math.max(t.r, e.r + s))),
                r.start < e.t
                    ? ((l = (e.t - r.start) / a), (t.t = Math.min(t.t, e.t - l)))
                    : r.end > e.b && ((l = (r.end - e.b) / a), (t.b = Math.max(t.b, e.b + l)))
        }

        function Xo(t, e, n) {
            const i = t.drawingArea,
                {extra: r, additionalAngle: o, padding: a, size: s} = n,
                l = t.getPointPosition(e, i + r + a, o),
                c = Math.round(yt(kt(l.angle + lt))),
                u = (function (t, e, n) {
                    return 90 === n || 270 === n ? (t -= e / 2) : (n > 270 || n < 90) && (t -= e), t
                })(l.y, s.h, c),
                h = (function (t) {
                    return 0 === t || 180 === t ? 'center' : t < 180 ? 'left' : 'right'
                })(c),
                d =
                    ((f = l.x), (p = s.w), 'right' === (g = h) ? (f -= p) : 'center' === g && (f -= p / 2), f)
            var f, p, g
            return {
                visible: !0,
                x: l.x,
                y: u,
                textAlign: h,
                left: d,
                top: u,
                right: d + s.w,
                bottom: u + s.h
            }
        }

        function qo(t, e) {
            if (!e) return !0
            const {left: n, top: i, right: r, bottom: o} = t
            return !(
                ue({x: n, y: i}, e) ||
                ue({x: n, y: o}, e) ||
                ue({x: r, y: i}, e) ||
                ue({x: r, y: o}, e)
            )
        }

        function Ko(t, e, n) {
            const {left: i, top: r, right: o, bottom: a} = n,
                {backdropColor: s} = e
            if (!A(s)) {
                const n = Me(e.borderRadius),
                    l = Ee(e.backdropPadding)
                t.fillStyle = s
                const c = i - l.left,
                    u = r - l.top,
                    h = o - i + l.width,
                    d = a - r + l.height
                Object.values(n).some(t => 0 !== t)
                    ? (t.beginPath(), ye(t, {x: c, y: u, w: h, h: d, radius: n}), t.fill())
                    : t.fillRect(c, u, h, d)
            }
        }

        function Go(t, e, n, i) {
            const {ctx: r} = t
            if (n) r.arc(t.xCenter, t.yCenter, e, 0, rt)
            else {
                let n = t.getPointPosition(0, e)
                r.moveTo(n.x, n.y)
                for (let o = 1; o < i; o++) (n = t.getPointPosition(o, e)), r.lineTo(n.x, n.y)
            }
        }

        class Zo extends Fo {
            static id = 'radialLinear'
            static defaults = {
                display: !0,
                animate: !0,
                position: 'chartArea',
                angleLines: {display: !0, lineWidth: 1, borderDash: [], borderDashOffset: 0},
                grid: {circular: !1},
                startAngle: 0,
                ticks: {showLabelBackdrop: !0, callback: Gt.formatters.numeric},
                pointLabels: {
                    backdropColor: void 0,
                    backdropPadding: 2,
                    display: !0,
                    font: {size: 10},
                    callback: t => t,
                    padding: 5,
                    centerPointLabels: !1
                }
            }
            static defaultRoutes = {
                'angleLines.color': 'borderColor',
                'pointLabels.color': 'color',
                'ticks.color': 'color'
            }
            static descriptors = {angleLines: {_fallback: 'grid'}}

            constructor(t) {
                super(t),
                    (this.xCenter = void 0),
                    (this.yCenter = void 0),
                    (this.drawingArea = void 0),
                    (this._pointLabels = []),
                    (this._pointLabelItems = [])
            }

            setDimensions() {
                const t = (this._padding = Ee(Uo(this.options) / 2)),
                    e = (this.width = this.maxWidth - t.width),
                    n = (this.height = this.maxHeight - t.height)
                ;(this.xCenter = Math.floor(this.left + e / 2 + t.left)),
                    (this.yCenter = Math.floor(this.top + n / 2 + t.top)),
                    (this.drawingArea = Math.floor(Math.min(e, n) / 2))
            }

            determineDataLimits() {
                const {min: t, max: e} = this.getMinMax(!1)
                ;(this.min = F(t) && !isNaN(t) ? t : 0),
                    (this.max = F(e) && !isNaN(e) ? e : 0),
                    this.handleTickRangeOptions()
            }

            computeTickLimit() {
                return Math.ceil(this.drawingArea / Uo(this.options))
            }

            generateTickLabels(t) {
                Fo.prototype.generateTickLabels.call(this, t),
                    (this._pointLabels = this.getLabels()
                        .map((t, e) => {
                            const n = W(this.options.pointLabels.callback, [t, e], this)
                            return n || 0 === n ? n : ''
                        })
                        .filter((t, e) => this.chart.getDataVisibility(e)))
            }

            fit() {
                const t = this.options
                t.display && t.pointLabels.display
                    ? (function (t) {
                        const e = {
                                l: t.left + t._padding.left,
                                r: t.right - t._padding.right,
                                t: t.top + t._padding.top,
                                b: t.bottom - t._padding.bottom
                            },
                            n = Object.assign({}, e),
                            i = [],
                            r = [],
                            o = t._pointLabels.length,
                            a = t.options.pointLabels,
                            s = a.centerPointLabels ? it / o : 0
                        for (let h = 0; h < o; h++) {
                            const o = a.setContext(t.getPointLabelContext(h))
                            r[h] = o.padding
                            const d = t.getPointPosition(h, t.drawingArea + r[h], s),
                                f = Ce(o.font),
                                p =
                                    ((l = t.ctx),
                                        (c = f),
                                        (u = N((u = t._pointLabels[h])) ? u : [u]),
                                        {w: oe(l, c.string, u), h: u.length * c.lineHeight})
                            i[h] = p
                            const g = kt(t.getIndexAngle(h) + s),
                                m = Math.round(yt(g))
                            Qo(n, e, g, Yo(m, d.x, p.w, 0, 180), Yo(m, d.y, p.h, 90, 270))
                        }
                        var l, c, u
                        t.setCenterPoint(e.l - n.l, n.r - e.r, e.t - n.t, n.b - e.b),
                            (t._pointLabelItems = (function (t, e, n) {
                                const i = [],
                                    r = t._pointLabels.length,
                                    o = t.options,
                                    {centerPointLabels: a, display: s} = o.pointLabels,
                                    l = {extra: Uo(o) / 2, additionalAngle: a ? it / r : 0}
                                let c
                                for (let o = 0; o < r; o++) {
                                    ;(l.padding = n[o]), (l.size = e[o])
                                    const r = Xo(t, o, l)
                                    i.push(r), 'auto' === s && ((r.visible = qo(r, c)), r.visible && (c = r))
                                }
                                return i
                            })(t, i, r))
                    })(this)
                    : this.setCenterPoint(0, 0, 0, 0)
            }

            setCenterPoint(t, e, n, i) {
                ;(this.xCenter += Math.floor((t - e) / 2)),
                    (this.yCenter += Math.floor((n - i) / 2)),
                    (this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, e, n, i)))
            }

            getIndexAngle(t) {
                return kt(t * (rt / (this._pointLabels.length || 1)) + bt(this.options.startAngle || 0))
            }

            getDistanceFromCenterForValue(t) {
                if (A(t)) return NaN
                const e = this.drawingArea / (this.max - this.min)
                return this.options.reverse ? (this.max - t) * e : (t - this.min) * e
            }

            getValueForDistanceFromCenter(t) {
                if (A(t)) return NaN
                const e = t / (this.drawingArea / (this.max - this.min))
                return this.options.reverse ? this.max - e : this.min + e
            }

            getPointLabelContext(t) {
                const e = this._pointLabels || []
                if (t >= 0 && t < e.length) {
                    const n = e[t]
                    return (function (t, e, n) {
                        return Le(t, {label: n, index: e, type: 'pointLabel'})
                    })(this.getContext(), t, n)
                }
            }

            getPointPosition(t, e, n = 0) {
                const i = this.getIndexAngle(t) - lt + n
                return {x: Math.cos(i) * e + this.xCenter, y: Math.sin(i) * e + this.yCenter, angle: i}
            }

            getPointPositionForValue(t, e) {
                return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
            }

            getBasePosition(t) {
                return this.getPointPositionForValue(t || 0, this.getBaseValue())
            }

            getPointLabelPosition(t) {
                const {left: e, top: n, right: i, bottom: r} = this._pointLabelItems[t]
                return {left: e, top: n, right: i, bottom: r}
            }

            drawBackground() {
                const {
                    backgroundColor: t,
                    grid: {circular: e}
                } = this.options
                if (t) {
                    const n = this.ctx
                    n.save(),
                        n.beginPath(),
                        Go(
                            this,
                            this.getDistanceFromCenterForValue(this._endValue),
                            e,
                            this._pointLabels.length
                        ),
                        n.closePath(),
                        (n.fillStyle = t),
                        n.fill(),
                        n.restore()
                }
            }

            drawGrid() {
                const t = this.ctx,
                    e = this.options,
                    {angleLines: n, grid: i, border: r} = e,
                    o = this._pointLabels.length
                let a, s, l
                if (
                    (e.pointLabels.display &&
                    (function (t, e) {
                        const {
                            ctx: n,
                            options: {pointLabels: i}
                        } = t
                        for (let r = e - 1; r >= 0; r--) {
                            const e = t._pointLabelItems[r]
                            if (!e.visible) continue
                            const o = i.setContext(t.getPointLabelContext(r))
                            Ko(n, o, e)
                            const a = Ce(o.font),
                                {x: s, y: l, textAlign: c} = e
                            be(n, t._pointLabels[r], s, l + a.lineHeight / 2, a, {
                                color: o.color,
                                textAlign: c,
                                textBaseline: 'middle'
                            })
                        }
                    })(this, o),
                    i.display &&
                    this.ticks.forEach((t, e) => {
                        if (0 !== e) {
                            s = this.getDistanceFromCenterForValue(t.value)
                            const n = this.getContext(e),
                                a = i.setContext(n),
                                l = r.setContext(n)
                            !(function (t, e, n, i, r) {
                                const o = t.ctx,
                                    a = e.circular,
                                    {color: s, lineWidth: l} = e
                                ;(!a && !i) ||
                                !s ||
                                !l ||
                                n < 0 ||
                                (o.save(),
                                    (o.strokeStyle = s),
                                    (o.lineWidth = l),
                                    o.setLineDash(r.dash),
                                    (o.lineDashOffset = r.dashOffset),
                                    o.beginPath(),
                                    Go(t, n, a, i),
                                    o.closePath(),
                                    o.stroke(),
                                    o.restore())
                            })(this, a, s, o, l)
                        }
                    }),
                        n.display)
                ) {
                    for (t.save(), a = o - 1; a >= 0; a--) {
                        const i = n.setContext(this.getPointLabelContext(a)),
                            {color: r, lineWidth: o} = i
                        o &&
                        r &&
                        ((t.lineWidth = o),
                            (t.strokeStyle = r),
                            t.setLineDash(i.borderDash),
                            (t.lineDashOffset = i.borderDashOffset),
                            (s = this.getDistanceFromCenterForValue(e.ticks.reverse ? this.min : this.max)),
                            (l = this.getPointPosition(a, s)),
                            t.beginPath(),
                            t.moveTo(this.xCenter, this.yCenter),
                            t.lineTo(l.x, l.y),
                            t.stroke())
                    }
                    t.restore()
                }
            }

            drawBorder() {
            }

            drawLabels() {
                const t = this.ctx,
                    e = this.options,
                    n = e.ticks
                if (!n.display) return
                const i = this.getIndexAngle(0)
                let r, o
                t.save(),
                    t.translate(this.xCenter, this.yCenter),
                    t.rotate(i),
                    (t.textAlign = 'center'),
                    (t.textBaseline = 'middle'),
                    this.ticks.forEach((i, a) => {
                        if (0 === a && !e.reverse) return
                        const s = n.setContext(this.getContext(a)),
                            l = Ce(s.font)
                        if (
                            ((r = this.getDistanceFromCenterForValue(this.ticks[a].value)), s.showLabelBackdrop)
                        ) {
                            ;(t.font = l.string),
                                (o = t.measureText(i.label).width),
                                (t.fillStyle = s.backdropColor)
                            const e = Ee(s.backdropPadding)
                            t.fillRect(-o / 2 - e.left, -r - l.size / 2 - e.top, o + e.width, l.size + e.height)
                        }
                        be(t, i.label, 0, -r, l, {
                            color: s.color,
                            strokeColor: s.textStrokeColor,
                            strokeWidth: s.textStrokeWidth
                        })
                    }),
                    t.restore()
            }

            drawTitle() {
            }
        }

        const Jo = {
                millisecond: {common: !0, size: 1, steps: 1e3},
                second: {common: !0, size: 1e3, steps: 60},
                minute: {common: !0, size: 6e4, steps: 60},
                hour: {common: !0, size: 36e5, steps: 24},
                day: {common: !0, size: 864e5, steps: 30},
                week: {common: !1, size: 6048e5, steps: 4},
                month: {common: !0, size: 2628e6, steps: 12},
                quarter: {common: !1, size: 7884e6, steps: 4},
                year: {common: !0, size: 3154e7}
            },
            ta = Object.keys(Jo)

        function ea(t, e) {
            return t - e
        }

        function na(t, e) {
            if (A(e)) return null
            const n = t._adapter,
                {parser: i, round: r, isoWeekday: o} = t._parseOpts
            let a = e
            return (
                'function' == typeof i && (a = i(a)),
                F(a) || (a = 'string' == typeof i ? n.parse(a, i) : n.parse(a)),
                    null === a
                        ? null
                        : (r &&
                        (a =
                            'week' !== r || (!gt(o) && !0 !== o)
                                ? n.startOf(a, r)
                                : n.startOf(a, 'isoWeek', o)),
                            +a)
            )
        }

        function ia(t, e, n, i) {
            const r = ta.length
            for (let o = ta.indexOf(t); o < r - 1; ++o) {
                const t = Jo[ta[o]],
                    r = t.steps ? t.steps : Number.MAX_SAFE_INTEGER
                if (t.common && Math.ceil((n - e) / (r * t.size)) <= i) return ta[o]
            }
            return ta[r - 1]
        }

        function ra(t, e, n) {
            if (n) {
                if (n.length) {
                    const {lo: i, hi: r} = Ct(n, e)
                    t[n[i] >= e ? n[i] : n[r]] = !0
                }
            } else t[e] = !0
        }

        function oa(t, e, n) {
            const i = [],
                r = {},
                o = e.length
            let a, s
            for (a = 0; a < o; ++a) (s = e[a]), (r[s] = a), i.push({value: s, major: !1})
            return 0 !== o && n
                ? (function (t, e, n, i) {
                    const r = t._adapter,
                        o = +r.startOf(e[0].value, i),
                        a = e[e.length - 1].value
                    let s, l
                    for (s = o; s <= a; s = +r.add(s, 1, i)) (l = n[s]), l >= 0 && (e[l].major = !0)
                    return e
                })(t, i, r, n)
                : i
        }

        class aa extends $i {
            static id = 'time'
            static defaults = {
                bounds: 'data',
                adapters: {},
                time: {
                    parser: !1,
                    unit: !1,
                    round: !1,
                    isoWeekday: !1,
                    minUnit: 'millisecond',
                    displayFormats: {}
                },
                ticks: {source: 'auto', callback: !1, major: {enabled: !1}}
            }

            constructor(t) {
                super(t),
                    (this._cache = {data: [], labels: [], all: []}),
                    (this._unit = 'day'),
                    (this._majorUnit = void 0),
                    (this._offsets = {}),
                    (this._normalized = !1),
                    (this._parseOpts = void 0)
            }

            init(t, e = {}) {
                const n = t.time || (t.time = {}),
                    i = (this._adapter = new Jn(t.adapters.date))
                i.init(e),
                    q(n.displayFormats, i.formats()),
                    (this._parseOpts = {parser: n.parser, round: n.round, isoWeekday: n.isoWeekday}),
                    super.init(t),
                    (this._normalized = e.normalized)
            }

            parse(t, e) {
                return void 0 === t ? null : na(this, t)
            }

            beforeLayout() {
                super.beforeLayout(), (this._cache = {data: [], labels: [], all: []})
            }

            determineDataLimits() {
                const t = this.options,
                    e = this._adapter,
                    n = t.time.unit || 'day'
                let {min: i, max: r, minDefined: o, maxDefined: a} = this.getUserBounds()

                function s(t) {
                    o || isNaN(t.min) || (i = Math.min(i, t.min)),
                    a || isNaN(t.max) || (r = Math.max(r, t.max))
                }
                ;(o && a) ||
                (s(this._getLabelBounds()),
                ('ticks' === t.bounds && 'labels' === t.ticks.source) || s(this.getMinMax(!1))),
                    (i = F(i) && !isNaN(i) ? i : +e.startOf(Date.now(), n)),
                    (r = F(r) && !isNaN(r) ? r : +e.endOf(Date.now(), n) + 1),
                    (this.min = Math.min(i, r - 1)),
                    (this.max = Math.max(i + 1, r))
            }

            _getLabelBounds() {
                const t = this.getLabelTimestamps()
                let e = Number.POSITIVE_INFINITY,
                    n = Number.NEGATIVE_INFINITY
                return t.length && ((e = t[0]), (n = t[t.length - 1])), {min: e, max: n}
            }

            buildTicks() {
                const t = this.options,
                    e = t.time,
                    n = t.ticks,
                    i = 'labels' === n.source ? this.getLabelTimestamps() : this._generate()
                'ticks' === t.bounds &&
                i.length &&
                ((this.min = this._userMin || i[0]), (this.max = this._userMax || i[i.length - 1]))
                const r = this.min,
                    o = (function (t, e, n) {
                        let i = 0,
                            r = t.length
                        for (; i < r && t[i] < e;) i++
                        for (; r > i && t[r - 1] > n;) r--
                        return i > 0 || r < t.length ? t.slice(i, r) : t
                    })(i, r, this.max)
                return (
                    (this._unit =
                        e.unit ||
                        (n.autoSkip
                            ? ia(e.minUnit, this.min, this.max, this._getLabelCapacity(r))
                            : (function (t, e, n, i, r) {
                                for (let o = ta.length - 1; o >= ta.indexOf(n); o--) {
                                    const n = ta[o]
                                    if (Jo[n].common && t._adapter.diff(r, i, n) >= e - 1) return n
                                }
                                return ta[n ? ta.indexOf(n) : 0]
                            })(this, o.length, e.minUnit, this.min, this.max))),
                        (this._majorUnit =
                            n.major.enabled && 'year' !== this._unit
                                ? (function (t) {
                                    for (let e = ta.indexOf(t) + 1, n = ta.length; e < n; ++e)
                                        if (Jo[ta[e]].common) return ta[e]
                                })(this._unit)
                                : void 0),
                        this.initOffsets(i),
                    t.reverse && o.reverse(),
                        oa(this, o, this._majorUnit)
                )
            }

            afterAutoSkip() {
                this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map(t => +t.value))
            }

            initOffsets(t = []) {
                let e,
                    n,
                    i = 0,
                    r = 0
                this.options.offset &&
                t.length &&
                ((e = this.getDecimalForValue(t[0])),
                    (i = 1 === t.length ? 1 - e : (this.getDecimalForValue(t[1]) - e) / 2),
                    (n = this.getDecimalForValue(t[t.length - 1])),
                    (r = 1 === t.length ? n : (n - this.getDecimalForValue(t[t.length - 2])) / 2))
                const o = t.length < 3 ? 0.5 : 0.25
                ;(i = Mt(i, 0, o)),
                    (r = Mt(r, 0, o)),
                    (this._offsets = {start: i, end: r, factor: 1 / (i + 1 + r)})
            }

            _generate() {
                const t = this._adapter,
                    e = this.min,
                    n = this.max,
                    i = this.options,
                    r = i.time,
                    o = r.unit || ia(r.minUnit, e, n, this._getLabelCapacity(e)),
                    a = B(i.ticks.stepSize, 1),
                    s = 'week' === o && r.isoWeekday,
                    l = gt(s) || !0 === s,
                    c = {}
                let u,
                    h,
                    d = e
                if (
                    (l && (d = +t.startOf(d, 'isoWeek', s)),
                        (d = +t.startOf(d, l ? 'day' : o)),
                    t.diff(n, e, o) > 1e5 * a)
                )
                    throw new Error(e + ' and ' + n + ' are too far apart with stepSize of ' + a + ' ' + o)
                const f = 'data' === i.ticks.source && this.getDataTimestamps()
                for (u = d, h = 0; u < n; u = +t.add(u, a, o), h++) ra(c, u, f)
                return (
                    (u !== n && 'ticks' !== i.bounds && 1 !== h) || ra(c, u, f),
                        Object.keys(c)
                            .sort(ea)
                            .map(t => +t)
                )
            }

            getLabelForValue(t) {
                const e = this._adapter,
                    n = this.options.time
                return n.tooltipFormat
                    ? e.format(t, n.tooltipFormat)
                    : e.format(t, n.displayFormats.datetime)
            }

            format(t, e) {
                const n = this.options.time.displayFormats,
                    i = this._unit,
                    r = e || n[i]
                return this._adapter.format(t, r)
            }

            _tickFormatFunction(t, e, n, i) {
                const r = this.options,
                    o = r.ticks.callback
                if (o) return W(o, [t, e, n], this)
                const a = r.time.displayFormats,
                    s = this._unit,
                    l = this._majorUnit,
                    c = s && a[s],
                    u = l && a[l],
                    h = n[e],
                    d = l && u && h && h.major
                return this._adapter.format(t, i || (d ? u : c))
            }

            generateTickLabels(t) {
                let e, n, i
                for (e = 0, n = t.length; e < n; ++e)
                    (i = t[e]), (i.label = this._tickFormatFunction(i.value, e, t))
            }

            getDecimalForValue(t) {
                return null === t ? NaN : (t - this.min) / (this.max - this.min)
            }

            getPixelForValue(t) {
                const e = this._offsets,
                    n = this.getDecimalForValue(t)
                return this.getPixelForDecimal((e.start + n) * e.factor)
            }

            getValueForPixel(t) {
                const e = this._offsets,
                    n = this.getDecimalForPixel(t) / e.factor - e.end
                return this.min + n * (this.max - this.min)
            }

            _getLabelSize(t) {
                const e = this.options.ticks,
                    n = this.ctx.measureText(t).width,
                    i = bt(this.isHorizontal() ? e.maxRotation : e.minRotation),
                    r = Math.cos(i),
                    o = Math.sin(i),
                    a = this._resolveTickFontOptions(0).size
                return {w: n * r + a * o, h: n * o + a * r}
            }

            _getLabelCapacity(t) {
                const e = this.options.time,
                    n = e.displayFormats,
                    i = n[e.unit] || n.millisecond,
                    r = this._tickFormatFunction(t, 0, oa(this, [t], this._majorUnit), i),
                    o = this._getLabelSize(r),
                    a = Math.floor(this.isHorizontal() ? this.width / o.w : this.height / o.h) - 1
                return a > 0 ? a : 1
            }

            getDataTimestamps() {
                let t,
                    e,
                    n = this._cache.data || []
                if (n.length) return n
                const i = this.getMatchingVisibleMetas()
                if (this._normalized && i.length)
                    return (this._cache.data = i[0].controller.getAllParsedValues(this))
                for (t = 0, e = i.length; t < e; ++t) n = n.concat(i[t].controller.getAllParsedValues(this))
                return (this._cache.data = this.normalize(n))
            }

            getLabelTimestamps() {
                const t = this._cache.labels || []
                let e, n
                if (t.length) return t
                const i = this.getLabels()
                for (e = 0, n = i.length; e < n; ++e) t.push(na(this, i[e]))
                return (this._cache.labels = this._normalized ? t : this.normalize(t))
            }

            normalize(t) {
                return Tt(t.sort(ea))
            }
        }

        function sa(t, e, n) {
            let i,
                r,
                o,
                a,
                s = 0,
                l = t.length - 1
            n
                ? (e >= t[s].pos && e <= t[l].pos && ({lo: s, hi: l} = Pt(t, 'pos', e)),
                    ({pos: i, time: o} = t[s]),
                    ({pos: r, time: a} = t[l]))
                : (e >= t[s].time && e <= t[l].time && ({lo: s, hi: l} = Pt(t, 'time', e)),
                    ({time: i, pos: o} = t[s]),
                    ({time: r, pos: a} = t[l]))
            const c = r - i
            return c ? o + ((a - o) * (e - i)) / c : o
        }

        const la = [
                Kn,
                Fr,
                Ro,
                Object.freeze({
                    __proto__: null,
                    CategoryScale: No,
                    LinearScale: Vo,
                    LogarithmicScale: $o,
                    RadialLinearScale: Zo,
                    TimeScale: aa,
                    TimeSeriesScale: class extends aa {
                        static id = 'timeseries'
                        static defaults = aa.defaults

                        constructor(t) {
                            super(t), (this._table = []), (this._minPos = void 0), (this._tableRange = void 0)
                        }

                        initOffsets() {
                            const t = this._getTimestampsForTable(),
                                e = (this._table = this.buildLookupTable(t))
                            ;(this._minPos = sa(e, this.min)),
                                (this._tableRange = sa(e, this.max) - this._minPos),
                                super.initOffsets(t)
                        }

                        buildLookupTable(t) {
                            const {min: e, max: n} = this,
                                i = [],
                                r = []
                            let o, a, s, l, c
                            for (o = 0, a = t.length; o < a; ++o) (l = t[o]), l >= e && l <= n && i.push(l)
                            if (i.length < 2)
                                return [
                                    {time: e, pos: 0},
                                    {time: n, pos: 1}
                                ]
                            for (o = 0, a = i.length; o < a; ++o)
                                (c = i[o + 1]),
                                    (s = i[o - 1]),
                                    (l = i[o]),
                                Math.round((c + s) / 2) !== l && r.push({time: l, pos: o / (a - 1)})
                            return r
                        }

                        _generate() {
                            const t = this.min,
                                e = this.max
                            let n = super.getDataTimestamps()
                            return (
                                (n.includes(t) && n.length) || n.splice(0, 0, t),
                                (n.includes(e) && 1 !== n.length) || n.push(e),
                                    n.sort((t, e) => t - e)
                            )
                        }

                        _getTimestampsForTable() {
                            let t = this._cache.all || []
                            if (t.length) return t
                            const e = this.getDataTimestamps(),
                                n = this.getLabelTimestamps()
                            return (
                                (t = e.length && n.length ? this.normalize(e.concat(n)) : e.length ? e : n),
                                    (t = this._cache.all = t),
                                    t
                            )
                        }

                        getDecimalForValue(t) {
                            return (sa(this._table, t) - this._minPos) / this._tableRange
                        }

                        getValueForPixel(t) {
                            const e = this._offsets,
                                n = this.getDecimalForPixel(t) / e.factor - e.end
                            return sa(this._table, n * this._tableRange + this._minPos, !0)
                        }
                    }
                })
            ],
            ca = 'label'

        function ua(t, e) {
            'function' == typeof t ? t(e) : t && (t.current = e)
        }

        function ha(t, e) {
            t.labels = e
        }

        function da(t, e) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ca
            const i = []
            t.datasets = e.map(e => {
                const r = t.datasets.find(t => t[n] === e[n])
                return r && e.data && !i.includes(r) ? (i.push(r), Object.assign(r, e), r) : {...e}
            })
        }

        function fa(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ca
            const n = {labels: [], datasets: []}
            return ha(n, t.labels), da(n, t.datasets, e), n
        }

        function pa(t, n) {
            const {
                    height: i = 150,
                    width: r = 300,
                    redraw: o = !1,
                    datasetIdKey: a,
                    type: s,
                    data: l,
                    options: c,
                    plugins: u = [],
                    fallbackContent: h,
                    updateMode: d,
                    ...f
                } = t,
                p = (0, e.useRef)(null),
                g = (0, e.useRef)(),
                m = () => {
                    p.current &&
                    ((g.current = new xr(p.current, {
                        type: s,
                        data: fa(l, a),
                        options: c && {...c},
                        plugins: u
                    })),
                        ua(n, g.current))
                },
                b = () => {
                    ua(n, null), g.current && (g.current.destroy(), (g.current = null))
                }
            return (
                (0, e.useEffect)(() => {
                    !o &&
                    g.current &&
                    c &&
                    (function (t, e) {
                        const n = t.options
                        n && e && Object.assign(n, e)
                    })(g.current, c)
                }, [o, c]),
                    (0, e.useEffect)(() => {
                        !o && g.current && ha(g.current.config.data, l.labels)
                    }, [o, l.labels]),
                    (0, e.useEffect)(() => {
                        !o && g.current && l.datasets && da(g.current.config.data, l.datasets, a)
                    }, [o, l.datasets]),
                    (0, e.useEffect)(() => {
                        g.current && (o ? (b(), setTimeout(m)) : g.current.update(d))
                    }, [o, c, l.labels, l.datasets, d]),
                    (0, e.useEffect)(() => {
                        g.current && (b(), setTimeout(m))
                    }, [s]),
                    (0, e.useEffect)(() => (m(), () => b()), []),
                    e.createElement('canvas', Object.assign({ref: p, role: 'img', height: i, width: r}, f), h)
            )
        }

        const ga = (0, e.forwardRef)(pa)

        function ma(t, n) {
            return (
                xr.register(n),
                    (0, e.forwardRef)((n, i) => e.createElement(ga, Object.assign({}, n, {ref: i, type: t})))
            )
        }

        const ba = ma('bar', Qn)

        function ya(t) {
            return (
                (ya =
                    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                        ? function (t) {
                            return typeof t
                        }
                        : function (t) {
                            return t &&
                            'function' == typeof Symbol &&
                            t.constructor === Symbol &&
                            t !== Symbol.prototype
                                ? 'symbol'
                                : typeof t
                        }),
                    ya(t)
            )
        }

        function va() {
            va = function () {
                return e
            }
            var t,
                e = {},
                n = Object.prototype,
                i = n.hasOwnProperty,
                r =
                    Object.defineProperty ||
                    function (t, e, n) {
                        t[e] = n.value
                    },
                o = 'function' == typeof Symbol ? Symbol : {},
                a = o.iterator || '@@iterator',
                s = o.asyncIterator || '@@asyncIterator',
                l = o.toStringTag || '@@toStringTag'

            function c(t, e, n) {
                return (
                    Object.defineProperty(t, e, {value: n, enumerable: !0, configurable: !0, writable: !0}),
                        t[e]
                )
            }

            try {
                c({}, '')
            } catch (t) {
                c = function (t, e, n) {
                    return (t[e] = n)
                }
            }

            function u(t, e, n, i) {
                var o = e && e.prototype instanceof b ? e : b,
                    a = Object.create(o.prototype),
                    s = new D(i || [])
                return r(a, '_invoke', {value: E(t, n, s)}), a
            }

            function h(t, e, n) {
                try {
                    return {type: 'normal', arg: t.call(e, n)}
                } catch (t) {
                    return {type: 'throw', arg: t}
                }
            }

            e.wrap = u
            var d = 'suspendedStart',
                f = 'suspendedYield',
                p = 'executing',
                g = 'completed',
                m = {}

            function b() {
            }

            function y() {
            }

            function v() {
            }

            var x = {}
            c(x, a, function () {
                return this
            })
            var _ = Object.getPrototypeOf,
                w = _ && _(_(O([])))
            w && w !== n && i.call(w, a) && (x = w)
            var k = (v.prototype = b.prototype = Object.create(x))

            function S(t) {
                ;['next', 'throw', 'return'].forEach(function (e) {
                    c(t, e, function (t) {
                        return this._invoke(e, t)
                    })
                })
            }

            function M(t, e) {
                function n(r, o, a, s) {
                    var l = h(t[r], t, o)
                    if ('throw' !== l.type) {
                        var c = l.arg,
                            u = c.value
                        return u && 'object' == ya(u) && i.call(u, '__await')
                            ? e.resolve(u.__await).then(
                                function (t) {
                                    n('next', t, a, s)
                                },
                                function (t) {
                                    n('throw', t, a, s)
                                }
                            )
                            : e.resolve(u).then(
                                function (t) {
                                    ;(c.value = t), a(c)
                                },
                                function (t) {
                                    return n('throw', t, a, s)
                                }
                            )
                    }
                    s(l.arg)
                }

                var o
                r(this, '_invoke', {
                    value: function (t, i) {
                        function r() {
                            return new e(function (e, r) {
                                n(t, i, e, r)
                            })
                        }

                        return (o = o ? o.then(r, r) : r())
                    }
                })
            }

            function E(e, n, i) {
                var r = d
                return function (o, a) {
                    if (r === p) throw new Error('Generator is already running')
                    if (r === g) {
                        if ('throw' === o) throw a
                        return {value: t, done: !0}
                    }
                    for (i.method = o, i.arg = a; ;) {
                        var s = i.delegate
                        if (s) {
                            var l = C(s, i)
                            if (l) {
                                if (l === m) continue
                                return l
                            }
                        }
                        if ('next' === i.method) i.sent = i._sent = i.arg
                        else if ('throw' === i.method) {
                            if (r === d) throw ((r = g), i.arg)
                            i.dispatchException(i.arg)
                        } else 'return' === i.method && i.abrupt('return', i.arg)
                        r = p
                        var c = h(e, n, i)
                        if ('normal' === c.type) {
                            if (((r = i.done ? g : f), c.arg === m)) continue
                            return {value: c.arg, done: i.done}
                        }
                        'throw' === c.type && ((r = g), (i.method = 'throw'), (i.arg = c.arg))
                    }
                }
            }

            function C(e, n) {
                var i = n.method,
                    r = e.iterator[i]
                if (r === t)
                    return (
                        (n.delegate = null),
                        ('throw' === i &&
                            e.iterator.return &&
                            ((n.method = 'return'), (n.arg = t), C(e, n), 'throw' === n.method)) ||
                        ('return' !== i &&
                            ((n.method = 'throw'),
                                (n.arg = new TypeError("The iterator does not provide a '" + i + "' method")))),
                            m
                    )
                var o = h(r, e.iterator, n.arg)
                if ('throw' === o.type) return (n.method = 'throw'), (n.arg = o.arg), (n.delegate = null), m
                var a = o.arg
                return a
                    ? a.done
                        ? ((n[e.resultName] = a.value),
                            (n.next = e.nextLoc),
                        'return' !== n.method && ((n.method = 'next'), (n.arg = t)),
                            (n.delegate = null),
                            m)
                        : a
                    : ((n.method = 'throw'),
                        (n.arg = new TypeError('iterator result is not an object')),
                        (n.delegate = null),
                        m)
            }

            function P(t) {
                var e = {tryLoc: t[0]}
                1 in t && (e.catchLoc = t[1]),
                2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
                    this.tryEntries.push(e)
            }

            function L(t) {
                var e = t.completion || {}
                ;(e.type = 'normal'), delete e.arg, (t.completion = e)
            }

            function D(t) {
                ;(this.tryEntries = [{tryLoc: 'root'}]), t.forEach(P, this), this.reset(!0)
            }

            function O(e) {
                if (e || '' === e) {
                    var n = e[a]
                    if (n) return n.call(e)
                    if ('function' == typeof e.next) return e
                    if (!isNaN(e.length)) {
                        var r = -1,
                            o = function n() {
                                for (; ++r < e.length;) if (i.call(e, r)) return (n.value = e[r]), (n.done = !1), n
                                return (n.value = t), (n.done = !0), n
                            }
                        return (o.next = o)
                    }
                }
                throw new TypeError(ya(e) + ' is not iterable')
            }

            return (
                (y.prototype = v),
                    r(k, 'constructor', {value: v, configurable: !0}),
                    r(v, 'constructor', {value: y, configurable: !0}),
                    (y.displayName = c(v, l, 'GeneratorFunction')),
                    (e.isGeneratorFunction = function (t) {
                        var e = 'function' == typeof t && t.constructor
                        return !!e && (e === y || 'GeneratorFunction' === (e.displayName || e.name))
                    }),
                    (e.mark = function (t) {
                        return (
                            Object.setPrototypeOf
                                ? Object.setPrototypeOf(t, v)
                                : ((t.__proto__ = v), c(t, l, 'GeneratorFunction')),
                                (t.prototype = Object.create(k)),
                                t
                        )
                    }),
                    (e.awrap = function (t) {
                        return {__await: t}
                    }),
                    S(M.prototype),
                    c(M.prototype, s, function () {
                        return this
                    }),
                    (e.AsyncIterator = M),
                    (e.async = function (t, n, i, r, o) {
                        void 0 === o && (o = Promise)
                        var a = new M(u(t, n, i, r), o)
                        return e.isGeneratorFunction(n)
                            ? a
                            : a.next().then(function (t) {
                                return t.done ? t.value : a.next()
                            })
                    }),
                    S(k),
                    c(k, l, 'Generator'),
                    c(k, a, function () {
                        return this
                    }),
                    c(k, 'toString', function () {
                        return '[object Generator]'
                    }),
                    (e.keys = function (t) {
                        var e = Object(t),
                            n = []
                        for (var i in e) n.push(i)
                        return (
                            n.reverse(),
                                function t() {
                                    for (; n.length;) {
                                        var i = n.pop()
                                        if (i in e) return (t.value = i), (t.done = !1), t
                                    }
                                    return (t.done = !0), t
                                }
                        )
                    }),
                    (e.values = O),
                    (D.prototype = {
                        constructor: D,
                        reset: function (e) {
                            if (
                                ((this.prev = 0),
                                    (this.next = 0),
                                    (this.sent = this._sent = t),
                                    (this.done = !1),
                                    (this.delegate = null),
                                    (this.method = 'next'),
                                    (this.arg = t),
                                    this.tryEntries.forEach(L),
                                    !e)
                            )
                                for (var n in this)
                                    't' === n.charAt(0) && i.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t)
                        },
                        stop: function () {
                            this.done = !0
                            var t = this.tryEntries[0].completion
                            if ('throw' === t.type) throw t.arg
                            return this.rval
                        },
                        dispatchException: function (e) {
                            if (this.done) throw e
                            var n = this

                            function r(i, r) {
                                return (
                                    (s.type = 'throw'),
                                        (s.arg = e),
                                        (n.next = i),
                                    r && ((n.method = 'next'), (n.arg = t)),
                                        !!r
                                )
                            }

                            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                                var a = this.tryEntries[o],
                                    s = a.completion
                                if ('root' === a.tryLoc) return r('end')
                                if (a.tryLoc <= this.prev) {
                                    var l = i.call(a, 'catchLoc'),
                                        c = i.call(a, 'finallyLoc')
                                    if (l && c) {
                                        if (this.prev < a.catchLoc) return r(a.catchLoc, !0)
                                        if (this.prev < a.finallyLoc) return r(a.finallyLoc)
                                    } else if (l) {
                                        if (this.prev < a.catchLoc) return r(a.catchLoc, !0)
                                    } else {
                                        if (!c) throw new Error('try statement without catch or finally')
                                        if (this.prev < a.finallyLoc) return r(a.finallyLoc)
                                    }
                                }
                            }
                        },
                        abrupt: function (t, e) {
                            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                                var r = this.tryEntries[n]
                                if (r.tryLoc <= this.prev && i.call(r, 'finallyLoc') && this.prev < r.finallyLoc) {
                                    var o = r
                                    break
                                }
                            }
                            o &&
                            ('break' === t || 'continue' === t) &&
                            o.tryLoc <= e &&
                            e <= o.finallyLoc &&
                            (o = null)
                            var a = o ? o.completion : {}
                            return (
                                (a.type = t),
                                    (a.arg = e),
                                    o ? ((this.method = 'next'), (this.next = o.finallyLoc), m) : this.complete(a)
                            )
                        },
                        complete: function (t, e) {
                            if ('throw' === t.type) throw t.arg
                            return (
                                'break' === t.type || 'continue' === t.type
                                    ? (this.next = t.arg)
                                    : 'return' === t.type
                                        ? ((this.rval = this.arg = t.arg), (this.method = 'return'), (this.next = 'end'))
                                        : 'normal' === t.type && e && (this.next = e),
                                    m
                            )
                        },
                        finish: function (t) {
                            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                var n = this.tryEntries[e]
                                if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), L(n), m
                            }
                        },
                        catch: function (t) {
                            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                var n = this.tryEntries[e]
                                if (n.tryLoc === t) {
                                    var i = n.completion
                                    if ('throw' === i.type) {
                                        var r = i.arg
                                        L(n)
                                    }
                                    return r
                                }
                            }
                            throw new Error('illegal catch attempt')
                        },
                        delegateYield: function (e, n, i) {
                            return (
                                (this.delegate = {iterator: O(e), resultName: n, nextLoc: i}),
                                'next' === this.method && (this.arg = t),
                                    m
                            )
                        }
                    }),
                    e
            )
        }

        function xa(t, e, n, i, r, o, a) {
            try {
                var s = t[o](a),
                    l = s.value
            } catch (t) {
                return void n(t)
            }
            s.done ? e(l) : Promise.resolve(l).then(i, r)
        }

        function _a(t) {
            return wa.apply(this, arguments)
        }

        function wa() {
            var t
            return (
                (t = va().mark(function t(e) {
                    var n
                    return va().wrap(function (t) {
                        for (; ;)
                            switch ((t.prev = t.next)) {
                                case 0:
                                    return (t.next = 2), fetch(e)
                                case 2:
                                    return (n = t.sent), (t.next = 5), n.json()
                                case 5:
                                    return t.abrupt('return', t.sent)
                                case 6:
                                case 'end':
                                    return t.stop()
                            }
                    }, t)
                })),
                    (wa = function () {
                        var e = this,
                            n = arguments
                        return new Promise(function (i, r) {
                            var o = t.apply(e, n)

                            function a(t) {
                                xa(o, i, r, a, s, 'next', t)
                            }

                            function s(t) {
                                xa(o, i, r, a, s, 'throw', t)
                            }

                            a(void 0)
                        })
                    }),
                    wa.apply(this, arguments)
            )
        }

        function ka() {
            return e.createElement(
                'form',
                null,
                e.createElement(
                    'label',
                    null,
                    'Max amount',
                    e.createElement('input', {type: 'number', name: 'name', placeholder: 'Default: 30'})
                ),
                e.createElement('input', {type: 'submit', value: 'Reload'})
            )
        }

        function Sa(t) {
            return (
                (Sa =
                    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                        ? function (t) {
                            return typeof t
                        }
                        : function (t) {
                            return t &&
                            'function' == typeof Symbol &&
                            t.constructor === Symbol &&
                            t !== Symbol.prototype
                                ? 'symbol'
                                : typeof t
                        }),
                    Sa(t)
            )
        }

        function Ma() {
            Ma = function () {
                return e
            }
            var t,
                e = {},
                n = Object.prototype,
                i = n.hasOwnProperty,
                r =
                    Object.defineProperty ||
                    function (t, e, n) {
                        t[e] = n.value
                    },
                o = 'function' == typeof Symbol ? Symbol : {},
                a = o.iterator || '@@iterator',
                s = o.asyncIterator || '@@asyncIterator',
                l = o.toStringTag || '@@toStringTag'

            function c(t, e, n) {
                return (
                    Object.defineProperty(t, e, {value: n, enumerable: !0, configurable: !0, writable: !0}),
                        t[e]
                )
            }

            try {
                c({}, '')
            } catch (t) {
                c = function (t, e, n) {
                    return (t[e] = n)
                }
            }

            function u(t, e, n, i) {
                var o = e && e.prototype instanceof b ? e : b,
                    a = Object.create(o.prototype),
                    s = new D(i || [])
                return r(a, '_invoke', {value: E(t, n, s)}), a
            }

            function h(t, e, n) {
                try {
                    return {type: 'normal', arg: t.call(e, n)}
                } catch (t) {
                    return {type: 'throw', arg: t}
                }
            }

            e.wrap = u
            var d = 'suspendedStart',
                f = 'suspendedYield',
                p = 'executing',
                g = 'completed',
                m = {}

            function b() {
            }

            function y() {
            }

            function v() {
            }

            var x = {}
            c(x, a, function () {
                return this
            })
            var _ = Object.getPrototypeOf,
                w = _ && _(_(O([])))
            w && w !== n && i.call(w, a) && (x = w)
            var k = (v.prototype = b.prototype = Object.create(x))

            function S(t) {
                ;['next', 'throw', 'return'].forEach(function (e) {
                    c(t, e, function (t) {
                        return this._invoke(e, t)
                    })
                })
            }

            function M(t, e) {
                function n(r, o, a, s) {
                    var l = h(t[r], t, o)
                    if ('throw' !== l.type) {
                        var c = l.arg,
                            u = c.value
                        return u && 'object' == Sa(u) && i.call(u, '__await')
                            ? e.resolve(u.__await).then(
                                function (t) {
                                    n('next', t, a, s)
                                },
                                function (t) {
                                    n('throw', t, a, s)
                                }
                            )
                            : e.resolve(u).then(
                                function (t) {
                                    ;(c.value = t), a(c)
                                },
                                function (t) {
                                    return n('throw', t, a, s)
                                }
                            )
                    }
                    s(l.arg)
                }

                var o
                r(this, '_invoke', {
                    value: function (t, i) {
                        function r() {
                            return new e(function (e, r) {
                                n(t, i, e, r)
                            })
                        }

                        return (o = o ? o.then(r, r) : r())
                    }
                })
            }

            function E(e, n, i) {
                var r = d
                return function (o, a) {
                    if (r === p) throw new Error('Generator is already running')
                    if (r === g) {
                        if ('throw' === o) throw a
                        return {value: t, done: !0}
                    }
                    for (i.method = o, i.arg = a; ;) {
                        var s = i.delegate
                        if (s) {
                            var l = C(s, i)
                            if (l) {
                                if (l === m) continue
                                return l
                            }
                        }
                        if ('next' === i.method) i.sent = i._sent = i.arg
                        else if ('throw' === i.method) {
                            if (r === d) throw ((r = g), i.arg)
                            i.dispatchException(i.arg)
                        } else 'return' === i.method && i.abrupt('return', i.arg)
                        r = p
                        var c = h(e, n, i)
                        if ('normal' === c.type) {
                            if (((r = i.done ? g : f), c.arg === m)) continue
                            return {value: c.arg, done: i.done}
                        }
                        'throw' === c.type && ((r = g), (i.method = 'throw'), (i.arg = c.arg))
                    }
                }
            }

            function C(e, n) {
                var i = n.method,
                    r = e.iterator[i]
                if (r === t)
                    return (
                        (n.delegate = null),
                        ('throw' === i &&
                            e.iterator.return &&
                            ((n.method = 'return'), (n.arg = t), C(e, n), 'throw' === n.method)) ||
                        ('return' !== i &&
                            ((n.method = 'throw'),
                                (n.arg = new TypeError("The iterator does not provide a '" + i + "' method")))),
                            m
                    )
                var o = h(r, e.iterator, n.arg)
                if ('throw' === o.type) return (n.method = 'throw'), (n.arg = o.arg), (n.delegate = null), m
                var a = o.arg
                return a
                    ? a.done
                        ? ((n[e.resultName] = a.value),
                            (n.next = e.nextLoc),
                        'return' !== n.method && ((n.method = 'next'), (n.arg = t)),
                            (n.delegate = null),
                            m)
                        : a
                    : ((n.method = 'throw'),
                        (n.arg = new TypeError('iterator result is not an object')),
                        (n.delegate = null),
                        m)
            }

            function P(t) {
                var e = {tryLoc: t[0]}
                1 in t && (e.catchLoc = t[1]),
                2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
                    this.tryEntries.push(e)
            }

            function L(t) {
                var e = t.completion || {}
                ;(e.type = 'normal'), delete e.arg, (t.completion = e)
            }

            function D(t) {
                ;(this.tryEntries = [{tryLoc: 'root'}]), t.forEach(P, this), this.reset(!0)
            }

            function O(e) {
                if (e || '' === e) {
                    var n = e[a]
                    if (n) return n.call(e)
                    if ('function' == typeof e.next) return e
                    if (!isNaN(e.length)) {
                        var r = -1,
                            o = function n() {
                                for (; ++r < e.length;) if (i.call(e, r)) return (n.value = e[r]), (n.done = !1), n
                                return (n.value = t), (n.done = !0), n
                            }
                        return (o.next = o)
                    }
                }
                throw new TypeError(Sa(e) + ' is not iterable')
            }

            return (
                (y.prototype = v),
                    r(k, 'constructor', {value: v, configurable: !0}),
                    r(v, 'constructor', {value: y, configurable: !0}),
                    (y.displayName = c(v, l, 'GeneratorFunction')),
                    (e.isGeneratorFunction = function (t) {
                        var e = 'function' == typeof t && t.constructor
                        return !!e && (e === y || 'GeneratorFunction' === (e.displayName || e.name))
                    }),
                    (e.mark = function (t) {
                        return (
                            Object.setPrototypeOf
                                ? Object.setPrototypeOf(t, v)
                                : ((t.__proto__ = v), c(t, l, 'GeneratorFunction')),
                                (t.prototype = Object.create(k)),
                                t
                        )
                    }),
                    (e.awrap = function (t) {
                        return {__await: t}
                    }),
                    S(M.prototype),
                    c(M.prototype, s, function () {
                        return this
                    }),
                    (e.AsyncIterator = M),
                    (e.async = function (t, n, i, r, o) {
                        void 0 === o && (o = Promise)
                        var a = new M(u(t, n, i, r), o)
                        return e.isGeneratorFunction(n)
                            ? a
                            : a.next().then(function (t) {
                                return t.done ? t.value : a.next()
                            })
                    }),
                    S(k),
                    c(k, l, 'Generator'),
                    c(k, a, function () {
                        return this
                    }),
                    c(k, 'toString', function () {
                        return '[object Generator]'
                    }),
                    (e.keys = function (t) {
                        var e = Object(t),
                            n = []
                        for (var i in e) n.push(i)
                        return (
                            n.reverse(),
                                function t() {
                                    for (; n.length;) {
                                        var i = n.pop()
                                        if (i in e) return (t.value = i), (t.done = !1), t
                                    }
                                    return (t.done = !0), t
                                }
                        )
                    }),
                    (e.values = O),
                    (D.prototype = {
                        constructor: D,
                        reset: function (e) {
                            if (
                                ((this.prev = 0),
                                    (this.next = 0),
                                    (this.sent = this._sent = t),
                                    (this.done = !1),
                                    (this.delegate = null),
                                    (this.method = 'next'),
                                    (this.arg = t),
                                    this.tryEntries.forEach(L),
                                    !e)
                            )
                                for (var n in this)
                                    't' === n.charAt(0) && i.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t)
                        },
                        stop: function () {
                            this.done = !0
                            var t = this.tryEntries[0].completion
                            if ('throw' === t.type) throw t.arg
                            return this.rval
                        },
                        dispatchException: function (e) {
                            if (this.done) throw e
                            var n = this

                            function r(i, r) {
                                return (
                                    (s.type = 'throw'),
                                        (s.arg = e),
                                        (n.next = i),
                                    r && ((n.method = 'next'), (n.arg = t)),
                                        !!r
                                )
                            }

                            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                                var a = this.tryEntries[o],
                                    s = a.completion
                                if ('root' === a.tryLoc) return r('end')
                                if (a.tryLoc <= this.prev) {
                                    var l = i.call(a, 'catchLoc'),
                                        c = i.call(a, 'finallyLoc')
                                    if (l && c) {
                                        if (this.prev < a.catchLoc) return r(a.catchLoc, !0)
                                        if (this.prev < a.finallyLoc) return r(a.finallyLoc)
                                    } else if (l) {
                                        if (this.prev < a.catchLoc) return r(a.catchLoc, !0)
                                    } else {
                                        if (!c) throw new Error('try statement without catch or finally')
                                        if (this.prev < a.finallyLoc) return r(a.finallyLoc)
                                    }
                                }
                            }
                        },
                        abrupt: function (t, e) {
                            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                                var r = this.tryEntries[n]
                                if (r.tryLoc <= this.prev && i.call(r, 'finallyLoc') && this.prev < r.finallyLoc) {
                                    var o = r
                                    break
                                }
                            }
                            o &&
                            ('break' === t || 'continue' === t) &&
                            o.tryLoc <= e &&
                            e <= o.finallyLoc &&
                            (o = null)
                            var a = o ? o.completion : {}
                            return (
                                (a.type = t),
                                    (a.arg = e),
                                    o ? ((this.method = 'next'), (this.next = o.finallyLoc), m) : this.complete(a)
                            )
                        },
                        complete: function (t, e) {
                            if ('throw' === t.type) throw t.arg
                            return (
                                'break' === t.type || 'continue' === t.type
                                    ? (this.next = t.arg)
                                    : 'return' === t.type
                                        ? ((this.rval = this.arg = t.arg), (this.method = 'return'), (this.next = 'end'))
                                        : 'normal' === t.type && e && (this.next = e),
                                    m
                            )
                        },
                        finish: function (t) {
                            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                var n = this.tryEntries[e]
                                if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), L(n), m
                            }
                        },
                        catch: function (t) {
                            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                var n = this.tryEntries[e]
                                if (n.tryLoc === t) {
                                    var i = n.completion
                                    if ('throw' === i.type) {
                                        var r = i.arg
                                        L(n)
                                    }
                                    return r
                                }
                            }
                            throw new Error('illegal catch attempt')
                        },
                        delegateYield: function (e, n, i) {
                            return (
                                (this.delegate = {iterator: O(e), resultName: n, nextLoc: i}),
                                'next' === this.method && (this.arg = t),
                                    m
                            )
                        }
                    }),
                    e
            )
        }

        function Ea(t, e, n, i, r, o, a) {
            try {
                var s = t[o](a),
                    l = s.value
            } catch (t) {
                return void n(t)
            }
            s.done ? e(l) : Promise.resolve(l).then(i, r)
        }

        function Ca(t, e) {
            ;(null == e || e > t.length) && (e = t.length)
            for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n]
            return i
        }

        function Pa(t) {
            var n,
                i,
                r,
                o,
                a = t.source,
                s = t.title,
                l =
                    ((r = (0, e.useState)()),
                        (o = 2),
                    (function (t) {
                        if (Array.isArray(t)) return t
                    })(r) ||
                    (function (t, e) {
                        var n =
                            null == t
                                ? null
                                : ('undefined' != typeof Symbol && t[Symbol.iterator]) || t['@@iterator']
                        if (null != n) {
                            var i,
                                r,
                                o,
                                a,
                                s = [],
                                l = !0,
                                c = !1
                            try {
                                if (((o = (n = n.call(t)).next), 0 === e)) {
                                    if (Object(n) !== n) return
                                    l = !1
                                } else
                                    for (
                                        ;
                                        !(l = (i = o.call(n)).done) && (s.push(i.value), s.length !== e);
                                        l = !0
                                    ) ;
                            } catch (t) {
                                ;(c = !0), (r = t)
                            } finally {
                                try {
                                    if (!l && null != n.return && ((a = n.return()), Object(a) !== a)) return
                                } finally {
                                    if (c) throw r
                                }
                            }
                            return s
                        }
                    })(r, o) ||
                    (function (t, e) {
                        if (t) {
                            if ('string' == typeof t) return Ca(t, e)
                            var n = Object.prototype.toString.call(t).slice(8, -1)
                            return (
                                'Object' === n && t.constructor && (n = t.constructor.name),
                                    'Map' === n || 'Set' === n
                                        ? Array.from(t)
                                        : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                                            ? Ca(t, e)
                                            : void 0
                            )
                        }
                    })(r, o) ||
                    (function () {
                        throw new TypeError(
                            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                        )
                    })()),
                c = l[0],
                u = l[1]
            ;(0, e.useEffect)(function () {
                h()
            }, [])
            var h = (function () {
                    var t,
                        e =
                            ((t = Ma().mark(function t() {
                                var e
                                return Ma().wrap(function (t) {
                                    for (; ;)
                                        switch ((t.prev = t.next)) {
                                            case 0:
                                                return (t.next = 2), _a('/admin/analytics/admindashboard/' + a)
                                            case 2:
                                                ;(e = t.sent), u(e)
                                            case 4:
                                            case 'end':
                                                return t.stop()
                                        }
                                }, t)
                            })),
                                function () {
                                    var e = this,
                                        n = arguments
                                    return new Promise(function (i, r) {
                                        var o = t.apply(e, n)

                                        function a(t) {
                                            Ea(o, i, r, a, s, 'next', t)
                                        }

                                        function s(t) {
                                            Ea(o, i, r, a, s, 'throw', t)
                                        }

                                        a(void 0)
                                    })
                                })
                    return function () {
                        return e.apply(this, arguments)
                    }
                })(),
                d = {
                    labels:
                        null == c || null === (n = c.data) || void 0 === n
                            ? void 0
                            : n.map(function (t) {
                                return t.date
                            }),
                    datasets: [
                        {
                            data:
                                null == c || null === (i = c.data) || void 0 === i
                                    ? void 0
                                    : i.map(function (t) {
                                        return t.amount
                                    }),
                            backgroundColor: ['green']
                        }
                    ]
                },
                f = {plugins: {title: {display: !0, text: s}, legend: {display: !1}}}
            return e.createElement(
                'div',
                {className: 'chart-container'},
                e.createElement(ba, {data: d, options: f}),
                e.createElement(ka, null)
            )
        }

        function La() {
            return e.createElement(
                'div',
                {className: 'row'},
                e.createElement(
                    'div',
                    {className: 'col-12 col-lg-4'},
                    e.createElement(Pa, {source: 'getpageviewsbyday', title: 'PageViewsByDay'})
                ),
                e.createElement(
                    'div',
                    {className: 'col-12 col-lg-4'},
                    e.createElement(Pa, {source: 'getclicksbyday', title: 'ClicksByDay'})
                ),
                e.createElement(
                    'div',
                    {className: 'col-12 col-lg-4'},
                    e.createElement(Pa, {source: 'getwebcrawlervisitsbyday', title: 'WebcrawlerVistsByDay'})
                )
            )
        }

        xr.register(...la), xr.register(No)
        var Da = document.getElementById('react-analytics-dashboard')
        null !== Da && t.createRoot(Da).render(e.createElement(La, null))
    })()
})()
