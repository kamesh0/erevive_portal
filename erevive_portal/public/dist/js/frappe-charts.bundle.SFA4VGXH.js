(() => {
  // ../erevive_portal/node_modules/frappe-charts/dist/frappe-charts.min.esm.js
  function styleInject(t6, e) {
    e === void 0 && (e = {});
    var n = e.insertAt;
    if (t6 && typeof document != "undefined") {
      var i = document.head || document.getElementsByTagName("head")[0], a = document.createElement("style");
      a.type = "text/css", n === "top" && i.firstChild ? i.insertBefore(a, i.firstChild) : i.appendChild(a), a.styleSheet ? a.styleSheet.cssText = t6 : a.appendChild(document.createTextNode(t6));
    }
  }
  function $(t6, e) {
    return typeof t6 == "string" ? (e || document).querySelector(t6) : t6 || null;
  }
  function getOffset(t6) {
    var e = t6.getBoundingClientRect();
    return { top: e.top + (document.documentElement.scrollTop || document.body.scrollTop), left: e.left + (document.documentElement.scrollLeft || document.body.scrollLeft) };
  }
  function isHidden(t6) {
    return t6.offsetParent === null;
  }
  function isElementInViewport(t6) {
    var e = t6.getBoundingClientRect();
    return e.top >= 0 && e.left >= 0 && e.bottom <= (window.innerHeight || document.documentElement.clientHeight) && e.right <= (window.innerWidth || document.documentElement.clientWidth);
  }
  function getElementContentWidth(t6) {
    var e = window.getComputedStyle(t6), n = parseFloat(e.paddingLeft) + parseFloat(e.paddingRight);
    return t6.clientWidth - n;
  }
  function fire(t6, e, n) {
    var i = document.createEvent("HTMLEvents");
    i.initEvent(e, true, true);
    for (var a in n)
      i[a] = n[a];
    return t6.dispatchEvent(i);
  }
  function getTopOffset(t6) {
    return t6.titleHeight + t6.margins.top + t6.paddings.top;
  }
  function getLeftOffset(t6) {
    return t6.margins.left + t6.paddings.left;
  }
  function getExtraHeight(t6) {
    return t6.margins.top + t6.margins.bottom + t6.paddings.top + t6.paddings.bottom + t6.titleHeight + t6.legendHeight;
  }
  function getExtraWidth(t6) {
    return t6.margins.left + t6.margins.right + t6.paddings.left + t6.paddings.right;
  }
  function _classCallCheck$4(t6, e) {
    if (!(t6 instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function floatTwo(t6) {
    return parseFloat(t6.toFixed(2));
  }
  function fillArray(t6, e, n) {
    var i = arguments.length > 3 && arguments[3] !== void 0 && arguments[3];
    n || (n = i ? t6[0] : t6[t6.length - 1]);
    var a = new Array(Math.abs(e)).fill(n);
    return t6 = i ? a.concat(t6) : t6.concat(a);
  }
  function getStringWidth(t6, e) {
    return (t6 + "").length * e;
  }
  function getPositionByAngle(t6, e) {
    return { x: Math.sin(t6 * ANGLE_RATIO) * e, y: Math.cos(t6 * ANGLE_RATIO) * e };
  }
  function isValidNumber(t6) {
    var e = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
    return !Number.isNaN(t6) && (t6 !== void 0 && (!!Number.isFinite(t6) && !(e && t6 < 0)));
  }
  function round(t6) {
    return Number(Math.round(t6 + "e4") + "e-4");
  }
  function deepClone(t6) {
    var e = void 0, n = void 0, i = void 0;
    if (t6 instanceof Date)
      return new Date(t6.getTime());
    if ((t6 === void 0 ? "undefined" : _typeof$2(t6)) !== "object" || t6 === null)
      return t6;
    e = Array.isArray(t6) ? [] : {};
    for (i in t6)
      n = t6[i], e[i] = deepClone(n);
    return e;
  }
  function getBarHeightAndYAttr(t6, e) {
    var n = void 0, i = void 0;
    return t6 <= e ? (n = e - t6, i = t6) : (n = t6 - e, i = e), [n, i];
  }
  function equilizeNoOfElements(t6, e) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length - t6.length;
    return n > 0 ? t6 = fillArray(t6, n) : e = fillArray(e, n), [t6, e];
  }
  function truncateString(t6, e) {
    if (t6)
      return t6.length > e ? t6.slice(0, e - 3) + "..." : t6;
  }
  function shortenLargeNumber(t6) {
    var e = void 0;
    if (typeof t6 == "number")
      e = t6;
    else if (typeof t6 == "string" && (e = Number(t6), Number.isNaN(e)))
      return t6;
    var n = Math.floor(Math.log10(Math.abs(e)));
    if (n <= 2)
      return e;
    var i = Math.floor(n / 3), a = Math.pow(10, n - 3 * i) * +(e / Math.pow(10, n)).toFixed(1);
    return Math.round(100 * a) / 100 + " " + ["", "K", "M", "B", "T"][i];
  }
  function getSplineCurvePointsStr(t6, e) {
    for (var n = [], i = 0; i < t6.length; i++)
      n.push([t6[i], e[i]]);
    var a = function(t7, e2) {
      var n2 = e2[0] - t7[0], i2 = e2[1] - t7[1];
      return { length: Math.sqrt(Math.pow(n2, 2) + Math.pow(i2, 2)), angle: Math.atan2(i2, n2) };
    }, r = function(t7, e2, n2, i2) {
      var r2 = a(e2 || t7, n2 || t7), o = r2.angle + (i2 ? Math.PI : 0), s = 0.2 * r2.length;
      return [t7[0] + Math.cos(o) * s, t7[1] + Math.sin(o) * s];
    };
    return function(t7, e2) {
      return t7.reduce(function(t8, n2, i2, a2) {
        return i2 === 0 ? n2[0] + "," + n2[1] : t8 + " " + e2(n2, i2, a2);
      }, "");
    }(n, function(t7, e2, n2) {
      var i2 = r(n2[e2 - 1], n2[e2 - 2], t7), a2 = r(t7, n2[e2 - 1], n2[e2 + 1], true);
      return "C " + i2[0] + "," + i2[1] + " " + a2[0] + "," + a2[1] + " " + t7[0] + "," + t7[1];
    });
  }
  function limitColor(t6) {
    return t6 > 255 ? 255 : t6 < 0 ? 0 : t6;
  }
  function lightenDarkenColor(t6, e) {
    var n = getColor(t6), i = false;
    n[0] == "#" && (n = n.slice(1), i = true);
    var a = parseInt(n, 16), r = limitColor((a >> 16) + e), o = limitColor((a >> 8 & 255) + e), s = limitColor((255 & a) + e);
    return (i ? "#" : "") + (s | o << 8 | r << 16).toString(16);
  }
  function isValidColor(t6) {
    var e = /(^\s*)(rgb|hsl)(a?)[(]\s*([\d.]+\s*%?)\s*,\s*([\d.]+\s*%?)\s*,\s*([\d.]+\s*%?)\s*(?:,\s*([\d.]+)\s*)?[)]$/i;
    return /(^\s*)(#)((?:[A-Fa-f0-9]{3}){1,2})$/i.test(t6) || e.test(t6);
  }
  function $$1(t6, e) {
    return typeof t6 == "string" ? (e || document).querySelector(t6) : t6 || null;
  }
  function createSVG(t6, e) {
    var n = document.createElementNS("http://www.w3.org/2000/svg", t6);
    for (var i in e) {
      var a = e[i];
      if (i === "inside")
        $$1(a).appendChild(n);
      else if (i === "around") {
        var r = $$1(a);
        r.parentNode.insertBefore(n, r), n.appendChild(r);
      } else
        i === "styles" ? (a === void 0 ? "undefined" : _typeof$1(a)) === "object" && Object.keys(a).map(function(t7) {
          n.style[t7] = a[t7];
        }) : (i === "className" && (i = "class"), i === "innerHTML" ? n.textContent = a : n.setAttribute(i, a));
    }
    return n;
  }
  function renderVerticalGradient(t6, e) {
    return createSVG("linearGradient", { inside: t6, id: e, x1: 0, x2: 0, y1: 0, y2: 1 });
  }
  function setGradientStop(t6, e, n, i) {
    return createSVG("stop", { inside: t6, style: "stop-color: " + n, offset: e, "stop-opacity": i });
  }
  function makeSVGContainer(t6, e, n, i) {
    return createSVG("svg", { className: e, inside: t6, width: n, height: i });
  }
  function makeSVGDefs(t6) {
    return createSVG("defs", { inside: t6 });
  }
  function makeSVGGroup(t6) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0, i = { className: t6, transform: e };
    return n && (i.inside = n), createSVG("g", i);
  }
  function makePath(t6) {
    return createSVG("path", { className: arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", d: t6, styles: { stroke: arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "none", fill: arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "none", "stroke-width": arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 2 } });
  }
  function makeArcPathStr(t6, e, n, i) {
    var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 1, r = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0, o = n.x + t6.x, s = n.y + t6.y, l = n.x + e.x, u = n.y + e.y;
    return "M" + n.x + " " + n.y + "\n		L" + o + " " + s + "\n		A " + i + " " + i + " 0 " + r + " " + (a ? 1 : 0) + "\n		" + l + " " + u + " z";
  }
  function makeCircleStr(t6, e, n, i) {
    var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 1, r = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0, o = n.x + t6.x, s = n.y + t6.y, l = n.x + e.x, u = 2 * n.y, c = n.y + e.y;
    return "M" + n.x + " " + n.y + "\n		L" + o + " " + s + "\n		A " + i + " " + i + " 0 " + r + " " + (a ? 1 : 0) + "\n		" + l + " " + u + " z\n		L" + o + " " + u + "\n		A " + i + " " + i + " 0 " + r + " " + (a ? 1 : 0) + "\n		" + l + " " + c + " z";
  }
  function makeArcStrokePathStr(t6, e, n, i) {
    var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 1, r = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0, o = n.x + t6.x, s = n.y + t6.y, l = n.x + e.x, u = n.y + e.y;
    return "M" + o + " " + s + "\n		A " + i + " " + i + " 0 " + r + " " + (a ? 1 : 0) + "\n		" + l + " " + u;
  }
  function makeStrokeCircleStr(t6, e, n, i) {
    var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 1, r = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0, o = n.x + t6.x, s = n.y + t6.y, l = n.x + e.x, u = 2 * i + s, c = n.y + t6.y;
    return "M" + o + " " + s + "\n		A " + i + " " + i + " 0 " + r + " " + (a ? 1 : 0) + "\n		" + l + " " + u + "\n		M" + o + " " + u + "\n		A " + i + " " + i + " 0 " + r + " " + (a ? 1 : 0) + "\n		" + l + " " + c;
  }
  function makeGradient(t6, e) {
    var n = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], i = "path-fill-gradient-" + e + "-" + (n ? "lighter" : "default"), a = renderVerticalGradient(t6, i), r = [1, 0.6, 0.2];
    return n && (r = [0.4, 0.2, 0]), setGradientStop(a, "0%", e, r[0]), setGradientStop(a, "50%", e, r[1]), setGradientStop(a, "100%", e, r[2]), i;
  }
  function percentageBar(t6, e, n, i) {
    var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : PERCENTAGE_BAR_DEFAULT_DEPTH, r = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : "none";
    return createSVG("rect", { className: "percentage-bar", x: t6, y: e, width: n, height: i, fill: r, styles: { stroke: lightenDarkenColor(r, -25), "stroke-dasharray": "0, " + (i + n) + ", " + n + ", " + i, "stroke-width": a } });
  }
  function heatSquare(t6, e, n, i, a) {
    var r = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : "none", o = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : {}, s = { className: t6, x: e, y: n, width: i, height: i, rx: a, fill: r };
    return Object.keys(o).map(function(t7) {
      s[t7] = o[t7];
    }), createSVG("rect", s);
  }
  function legendBar(t6, e, n) {
    var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "none", a = arguments[4];
    a = arguments.length > 5 && arguments[5] !== void 0 && arguments[5] ? truncateString(a, LABEL_MAX_CHARS) : a;
    var r = { className: "legend-bar", x: 0, y: 0, width: n, height: "2px", fill: i }, o = createSVG("text", { className: "legend-dataset-text", x: 0, y: 0, dy: 2 * FONT_SIZE + "px", "font-size": 1.2 * FONT_SIZE + "px", "text-anchor": "start", fill: FONT_FILL, innerHTML: a }), s = createSVG("g", { transform: "translate(" + t6 + ", " + e + ")" });
    return s.appendChild(createSVG("rect", r)), s.appendChild(o), s;
  }
  function legendDot(t6, e, n) {
    var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "none", a = arguments[4];
    a = arguments.length > 5 && arguments[5] !== void 0 && arguments[5] ? truncateString(a, LABEL_MAX_CHARS) : a;
    var r = { className: "legend-dot", cx: 0, cy: 0, r: n, fill: i }, o = createSVG("text", { className: "legend-dataset-text", x: 0, y: 0, dx: FONT_SIZE + "px", dy: FONT_SIZE / 3 + "px", "font-size": 1.2 * FONT_SIZE + "px", "text-anchor": "start", fill: FONT_FILL, innerHTML: a }), s = createSVG("g", { transform: "translate(" + t6 + ", " + e + ")" });
    return s.appendChild(createSVG("circle", r)), s.appendChild(o), s;
  }
  function makeText(t6, e, n, i) {
    var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {}, r = a.fontSize || FONT_SIZE;
    return createSVG("text", { className: t6, x: e, y: n, dy: (a.dy !== void 0 ? a.dy : r / 2) + "px", "font-size": r + "px", fill: a.fill || FONT_FILL, "text-anchor": a.textAnchor || "start", innerHTML: i });
  }
  function makeVertLine(t6, e, n, i) {
    var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {};
    a.stroke || (a.stroke = BASE_LINE_COLOR);
    var r = createSVG("line", { className: "line-vertical " + a.className, x1: 0, x2: 0, y1: n, y2: i, styles: { stroke: a.stroke } }), o = createSVG("text", { x: 0, y: n > i ? n + LABEL_MARGIN : n - LABEL_MARGIN - FONT_SIZE, dy: FONT_SIZE + "px", "font-size": FONT_SIZE + "px", "text-anchor": "middle", innerHTML: e + "" }), s = createSVG("g", { transform: "translate(" + t6 + ", 0)" });
    return s.appendChild(r), s.appendChild(o), s;
  }
  function makeHoriLine(t6, e, n, i) {
    var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {};
    a.stroke || (a.stroke = BASE_LINE_COLOR), a.lineType || (a.lineType = ""), a.shortenNumbers && (e = shortenLargeNumber(e));
    var r = createSVG("line", { className: "line-horizontal " + a.className + (a.lineType === "dashed" ? "dashed" : ""), x1: n, x2: i, y1: 0, y2: 0, styles: { stroke: a.stroke } }), o = createSVG("text", { x: n < i ? n - LABEL_MARGIN : n + LABEL_MARGIN, y: 0, dy: FONT_SIZE / 2 - 2 + "px", "font-size": FONT_SIZE + "px", "text-anchor": n < i ? "end" : "start", innerHTML: e + "" }), s = createSVG("g", { transform: "translate(0, " + t6 + ")", "stroke-opacity": 1 });
    return o !== 0 && o !== "0" || (s.style.stroke = "rgba(27, 31, 35, 0.6)"), s.appendChild(r), s.appendChild(o), s;
  }
  function yLine(t6, e, n) {
    var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    isValidNumber(t6) || (t6 = 0), i.pos || (i.pos = "left"), i.offset || (i.offset = 0), i.mode || (i.mode = "span"), i.stroke || (i.stroke = BASE_LINE_COLOR), i.className || (i.className = "");
    var a = -1 * AXIS_TICK_LENGTH, r = i.mode === "span" ? n + AXIS_TICK_LENGTH : 0;
    return i.mode === "tick" && i.pos === "right" && (a = n + AXIS_TICK_LENGTH, r = n), a += i.offset, r += i.offset, makeHoriLine(t6, e, a, r, { stroke: i.stroke, className: i.className, lineType: i.lineType, shortenNumbers: i.shortenNumbers });
  }
  function xLine(t6, e, n) {
    var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    isValidNumber(t6) || (t6 = 0), i.pos || (i.pos = "bottom"), i.offset || (i.offset = 0), i.mode || (i.mode = "span"), i.stroke || (i.stroke = BASE_LINE_COLOR), i.className || (i.className = "");
    var a = n + AXIS_TICK_LENGTH, r = i.mode === "span" ? -1 * AXIS_TICK_LENGTH : n;
    return i.mode === "tick" && i.pos === "top" && (a = -1 * AXIS_TICK_LENGTH, r = 0), makeVertLine(t6, e, a, r, { stroke: i.stroke, className: i.className, lineType: i.lineType });
  }
  function yMarker(t6, e, n) {
    var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    i.labelPos || (i.labelPos = "right");
    var a = createSVG("text", { className: "chart-label", x: i.labelPos === "left" ? LABEL_MARGIN : n - getStringWidth(e, 5) - LABEL_MARGIN, y: 0, dy: FONT_SIZE / -2 + "px", "font-size": FONT_SIZE + "px", "text-anchor": "start", innerHTML: e + "" }), r = makeHoriLine(t6, "", 0, n, { stroke: i.stroke || BASE_LINE_COLOR, className: i.className || "", lineType: i.lineType });
    return r.appendChild(a), r;
  }
  function yRegion(t6, e, n, i) {
    var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {}, r = t6 - e, o = createSVG("rect", { className: "bar mini", styles: { fill: "rgba(228, 234, 239, 0.49)", stroke: BASE_LINE_COLOR, "stroke-dasharray": n + ", " + r }, x: 0, y: 0, width: n, height: r });
    a.labelPos || (a.labelPos = "right");
    var s = createSVG("text", { className: "chart-label", x: a.labelPos === "left" ? LABEL_MARGIN : n - getStringWidth(i + "", 4.5) - LABEL_MARGIN, y: 0, dy: FONT_SIZE / -2 + "px", "font-size": FONT_SIZE + "px", "text-anchor": "start", innerHTML: i + "" }), l = createSVG("g", { transform: "translate(0, " + e + ")" });
    return l.appendChild(o), l.appendChild(s), l;
  }
  function datasetBar(t6, e, n, i) {
    var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : "", r = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0, o = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : 0, s = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : {}, l = getBarHeightAndYAttr(e, s.zeroLine), u = _slicedToArray(l, 2), c = u[0], h = u[1];
    h -= o, c === 0 && (c = s.minHeight, h -= s.minHeight), isValidNumber(t6) || (t6 = 0), isValidNumber(h) || (h = 0), isValidNumber(c, true) || (c = 0), isValidNumber(n, true) || (n = 0);
    var d = createSVG("rect", { className: "bar mini", style: "fill: " + i, "data-point-index": r, x: t6, y: h, width: n, height: c });
    if ((a += "") || a.length) {
      d.setAttribute("y", 0), d.setAttribute("x", 0);
      var f = createSVG("text", { className: "data-point-value", x: n / 2, y: 0, dy: FONT_SIZE / 2 * -1 + "px", "font-size": FONT_SIZE + "px", "text-anchor": "middle", innerHTML: a }), p = createSVG("g", { "data-point-index": r, transform: "translate(" + t6 + ", " + h + ")" });
      return p.appendChild(d), p.appendChild(f), p;
    }
    return d;
  }
  function datasetDot(t6, e, n, i) {
    var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : "", r = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0, o = createSVG("circle", { style: "fill: " + i, "data-point-index": r, cx: t6, cy: e, r: n });
    if ((a += "") || a.length) {
      o.setAttribute("cy", 0), o.setAttribute("cx", 0);
      var s = createSVG("text", { className: "data-point-value", x: 0, y: 0, dy: FONT_SIZE / 2 * -1 - n + "px", "font-size": FONT_SIZE + "px", "text-anchor": "middle", innerHTML: a }), l = createSVG("g", { "data-point-index": r, transform: "translate(" + t6 + ", " + e + ")" });
      return l.appendChild(o), l.appendChild(s), l;
    }
    return o;
  }
  function getPaths(t6, e, n) {
    var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {}, r = e.map(function(e2, n2) {
      return t6[n2] + "," + e2;
    }).join("L");
    i.spline && (r = getSplineCurvePointsStr(t6, e));
    var o = makePath("M" + r, "line-graph-path", n);
    if (i.heatline) {
      var s = makeGradient(a.svgDefs, n);
      o.style.stroke = "url(#" + s + ")";
    }
    var l = { path: o };
    if (i.regionFill) {
      var u = makeGradient(a.svgDefs, n, true), c = "M" + t6[0] + "," + a.zeroLine + "L" + r + "L" + t6.slice(-1)[0] + "," + a.zeroLine;
      l.region = makePath(c, "region-fill", "none", "url(#" + u + ")");
    }
    return l;
  }
  function translate(t6, e, n, i) {
    var a = typeof e == "string" ? e : e.join(", ");
    return [t6, { transform: n.join(", ") }, i, STD_EASING, "translate", { transform: a }];
  }
  function translateVertLine(t6, e, n) {
    return translate(t6, [n, 0], [e, 0], MARKER_LINE_ANIM_DUR);
  }
  function translateHoriLine(t6, e, n) {
    return translate(t6, [0, n], [0, e], MARKER_LINE_ANIM_DUR);
  }
  function animateRegion(t6, e, n, i) {
    var a = e - n, r = t6.childNodes[0];
    return [[r, { height: a, "stroke-dasharray": r.getAttribute("width") + ", " + a }, MARKER_LINE_ANIM_DUR, STD_EASING], translate(t6, [0, i], [0, n], MARKER_LINE_ANIM_DUR)];
  }
  function animateBar(t6, e, n, i) {
    var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0, r = getBarHeightAndYAttr(n, (arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}).zeroLine), o = _slicedToArray$2(r, 2), s = o[0], l = o[1];
    return l -= a, t6.nodeName !== "rect" ? [[t6.childNodes[0], { width: i, height: s }, UNIT_ANIM_DUR, STD_EASING], translate(t6, t6.getAttribute("transform").split("(")[1].slice(0, -1), [e, l], MARKER_LINE_ANIM_DUR)] : [[t6, { width: i, height: s, x: e, y: l }, UNIT_ANIM_DUR, STD_EASING]];
  }
  function animateDot(t6, e, n) {
    return t6.nodeName !== "circle" ? [translate(t6, t6.getAttribute("transform").split("(")[1].slice(0, -1), [e, n], MARKER_LINE_ANIM_DUR)] : [[t6, { cx: e, cy: n }, UNIT_ANIM_DUR, STD_EASING]];
  }
  function animatePath(t6, e, n, i, a) {
    var r = [], o = n.map(function(t7, n2) {
      return e[n2] + "," + t7;
    }).join("L");
    a && (o = getSplineCurvePointsStr(e, n));
    var s = [t6.path, { d: "M" + o }, PATH_ANIM_DUR, STD_EASING];
    if (r.push(s), t6.region) {
      var l = e[0] + "," + i + "L", u = "L" + e.slice(-1)[0] + ", " + i, c = [t6.region, { d: "M" + l + o + u }, PATH_ANIM_DUR, STD_EASING];
      r.push(c);
    }
    return r;
  }
  function animatePathStr(t6, e) {
    return [t6, { d: e }, UNIT_ANIM_DUR, STD_EASING];
  }
  function _toConsumableArray$1(t6) {
    if (Array.isArray(t6)) {
      for (var e = 0, n = Array(t6.length); e < t6.length; e++)
        n[e] = t6[e];
      return n;
    }
    return Array.from(t6);
  }
  function animateSVGElement(t6, e, n) {
    var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "linear", a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : void 0, r = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, o = t6.cloneNode(true), s = t6.cloneNode(true);
    for (var l in e) {
      var u = void 0;
      u = l === "transform" ? document.createElementNS("http://www.w3.org/2000/svg", "animateTransform") : document.createElementNS("http://www.w3.org/2000/svg", "animate");
      var c = r[l] || t6.getAttribute(l), h = e[l], d = { attributeName: l, from: c, to: h, begin: "0s", dur: n / 1e3 + "s", values: c + ";" + h, keySplines: EASING[i], keyTimes: "0;1", calcMode: "spline", fill: "freeze" };
      a && (d.type = a);
      for (var f in d)
        u.setAttribute(f, d[f]);
      o.appendChild(u), a ? s.setAttribute(l, "translate(" + h + ")") : s.setAttribute(l, h);
    }
    return [o, s];
  }
  function transform(t6, e) {
    t6.style.transform = e, t6.style.webkitTransform = e, t6.style.msTransform = e, t6.style.mozTransform = e, t6.style.oTransform = e;
  }
  function animateSVG(t6, e) {
    var n = [], i = [];
    e.map(function(t7) {
      var e2 = t7[0], a2 = e2.parentNode, r = void 0, o = void 0;
      t7[0] = e2;
      var s = animateSVGElement.apply(void 0, _toConsumableArray$1(t7)), l = _slicedToArray$1(s, 2);
      r = l[0], o = l[1], n.push(o), i.push([r, a2]), a2 && a2.replaceChild(r, e2);
    });
    var a = t6.cloneNode(true);
    return i.map(function(t7, i2) {
      t7[1] && (t7[1].replaceChild(n[i2], t7[0]), e[i2][0] = n[i2]);
    }), a;
  }
  function runSMILAnimation(t6, e, n) {
    if (n.length !== 0) {
      var i = animateSVG(e, n);
      e.parentNode == t6 && (t6.removeChild(e), t6.appendChild(i)), setTimeout(function() {
        i.parentNode == t6 && (t6.removeChild(i), t6.appendChild(e));
      }, REPLACE_ALL_NEW_DUR);
    }
  }
  function downloadFile(t6, e) {
    var n = document.createElement("a");
    n.style = "display: none";
    var i = new Blob(e, { type: "image/svg+xml; charset=utf-8" }), a = window.URL.createObjectURL(i);
    n.href = a, n.download = t6, document.body.appendChild(n), n.click(), setTimeout(function() {
      document.body.removeChild(n), window.URL.revokeObjectURL(a);
    }, 300);
  }
  function prepareForExport(t6) {
    var e = t6.cloneNode(true);
    e.classList.add("chart-container"), e.setAttribute("xmlns", "http://www.w3.org/2000/svg"), e.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
    var n = $.create("style", { innerHTML: CSSTEXT });
    e.insertBefore(n, e.firstChild);
    var i = $.create("div");
    return i.appendChild(e), i.innerHTML;
  }
  function _classCallCheck$3(t6, e) {
    if (!(t6 instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function _classCallCheck$2(t6, e) {
    if (!(t6 instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function _possibleConstructorReturn$1(t6, e) {
    if (!t6)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || typeof e != "object" && typeof e != "function" ? t6 : e;
  }
  function _inherits$1(t6, e) {
    if (typeof e != "function" && e !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t6.prototype = Object.create(e && e.prototype, { constructor: { value: t6, enumerable: false, writable: true, configurable: true } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t6, e) : t6.__proto__ = e);
  }
  function treatAsUtc(t6) {
    var e = new Date(t6);
    return e.setMinutes(e.getMinutes() - e.getTimezoneOffset()), e;
  }
  function getYyyyMmDd(t6) {
    var e = t6.getDate(), n = t6.getMonth() + 1;
    return [t6.getFullYear(), (n > 9 ? "" : "0") + n, (e > 9 ? "" : "0") + e].join("-");
  }
  function clone(t6) {
    return new Date(t6.getTime());
  }
  function getWeeksBetween(t6, e) {
    var n = setDayToSunday(t6);
    return Math.ceil(getDaysBetween(n, e) / NO_OF_DAYS_IN_WEEK);
  }
  function getDaysBetween(t6, e) {
    var n = SEC_IN_DAY * NO_OF_MILLIS;
    return (treatAsUtc(e) - treatAsUtc(t6)) / n;
  }
  function areInSameMonth(t6, e) {
    return t6.getMonth() === e.getMonth() && t6.getFullYear() === e.getFullYear();
  }
  function getMonthName(t6) {
    var e = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], n = MONTH_NAMES[t6];
    return e ? n.slice(0, 3) : n;
  }
  function getLastDateInMonth(t6, e) {
    return new Date(e, t6 + 1, 0);
  }
  function setDayToSunday(t6) {
    var e = clone(t6), n = e.getDay();
    return n !== 0 && addDays(e, -1 * n), e;
  }
  function addDays(t6, e) {
    t6.setDate(t6.getDate() + e);
  }
  function _classCallCheck$5(t6, e) {
    if (!(t6 instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function getComponent(t6, e, n) {
    var i = Object.keys(componentConfigs).filter(function(e2) {
      return t6.includes(e2);
    }), a = componentConfigs[i[0]];
    return Object.assign(a, { constants: e, getData: n }), new ChartComponent(a);
  }
  function _toConsumableArray(t6) {
    if (Array.isArray(t6)) {
      for (var e = 0, n = Array(t6.length); e < t6.length; e++)
        n[e] = t6[e];
      return n;
    }
    return Array.from(t6);
  }
  function _classCallCheck$1(t6, e) {
    if (!(t6 instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function _possibleConstructorReturn(t6, e) {
    if (!t6)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || typeof e != "object" && typeof e != "function" ? t6 : e;
  }
  function _inherits(t6, e) {
    if (typeof e != "function" && e !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t6.prototype = Object.create(e && e.prototype, { constructor: { value: t6, enumerable: false, writable: true, configurable: true } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t6, e) : t6.__proto__ = e);
  }
  function _toConsumableArray$2(t6) {
    if (Array.isArray(t6)) {
      for (var e = 0, n = Array(t6.length); e < t6.length; e++)
        n[e] = t6[e];
      return n;
    }
    return Array.from(t6);
  }
  function _classCallCheck$6(t6, e) {
    if (!(t6 instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function _possibleConstructorReturn$2(t6, e) {
    if (!t6)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || typeof e != "object" && typeof e != "function" ? t6 : e;
  }
  function _inherits$2(t6, e) {
    if (typeof e != "function" && e !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t6.prototype = Object.create(e && e.prototype, { constructor: { value: t6, enumerable: false, writable: true, configurable: true } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t6, e) : t6.__proto__ = e);
  }
  function _toConsumableArray$4(t6) {
    if (Array.isArray(t6)) {
      for (var e = 0, n = Array(t6.length); e < t6.length; e++)
        n[e] = t6[e];
      return n;
    }
    return Array.from(t6);
  }
  function normalize(t6) {
    if (t6 === 0)
      return [0, 0];
    if (isNaN(t6))
      return { mantissa: -6755399441055744, exponent: 972 };
    var e = t6 > 0 ? 1 : -1;
    if (!isFinite(t6))
      return { mantissa: 4503599627370496 * e, exponent: 972 };
    t6 = Math.abs(t6);
    var n = Math.floor(Math.log10(t6));
    return [e * (t6 / Math.pow(10, n)), n];
  }
  function getChartRangeIntervals(t6) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = Math.ceil(t6), i = Math.floor(e), a = n - i, r = a, o = 1;
    a > 5 && (a % 2 != 0 && (a = ++n - i), r = a / 2, o = 2), a <= 2 && (o = a / (r = 4)), a === 0 && (r = 5, o = 1);
    for (var s = [], l = 0; l <= r; l++)
      s.push(i + o * l);
    return s;
  }
  function getChartIntervals(t6) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = normalize(t6), i = _slicedToArray$4(n, 2), a = i[0], r = i[1], o = e ? e / Math.pow(10, r) : 0, s = getChartRangeIntervals(a = a.toFixed(6), o);
    return s = s.map(function(t7) {
      return t7 * Math.pow(10, r);
    });
  }
  function calcChartIntervals(t6) {
    function e(t7, e2) {
      for (var n2 = getChartIntervals(t7), i2 = n2[1] - n2[0], a2 = 0, r2 = 1; a2 < e2; r2++)
        a2 += i2, n2.unshift(-1 * a2);
      return n2;
    }
    var n = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], i = Math.max.apply(Math, _toConsumableArray$4(t6)), a = Math.min.apply(Math, _toConsumableArray$4(t6)), r = [];
    if (i >= 0 && a >= 0)
      normalize(i)[1], r = n ? getChartIntervals(i, a) : getChartIntervals(i);
    else if (i > 0 && a < 0) {
      var o = Math.abs(a);
      i >= o ? (normalize(i)[1], r = e(i, o)) : (normalize(o)[1], r = e(o, i).reverse().map(function(t7) {
        return -1 * t7;
      }));
    } else if (i <= 0 && a <= 0) {
      var s = Math.abs(a), l = Math.abs(i);
      normalize(s)[1], r = (r = n ? getChartIntervals(s, l) : getChartIntervals(s)).reverse().map(function(t7) {
        return -1 * t7;
      });
    }
    return r;
  }
  function getZeroIndex(t6) {
    var e = getIntervalSize(t6);
    return t6.indexOf(0) >= 0 ? t6.indexOf(0) : t6[0] > 0 ? -1 * t6[0] / e : -1 * t6[t6.length - 1] / e + (t6.length - 1);
  }
  function getIntervalSize(t6) {
    return t6[1] - t6[0];
  }
  function getValueRange(t6) {
    return t6[t6.length - 1] - t6[0];
  }
  function scale(t6, e) {
    return floatTwo(e.zeroLine - t6 * e.scaleMultiplier);
  }
  function getClosestInArray(t6, e) {
    var n = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], i = e.reduce(function(e2, n2) {
      return Math.abs(n2 - t6) < Math.abs(e2 - t6) ? n2 : e2;
    }, []);
    return n ? e.indexOf(i) : i;
  }
  function calcDistribution(t6, e) {
    for (var n = Math.max.apply(Math, _toConsumableArray$4(t6)), i = 1 / (e - 1), a = [], r = 0; r < e; r++) {
      var o = n * (i * r);
      a.push(o);
    }
    return a;
  }
  function getMaxCheckpoint(t6, e) {
    return e.filter(function(e2) {
      return e2 < t6;
    }).length;
  }
  function _toConsumableArray$3(t6) {
    if (Array.isArray(t6)) {
      for (var e = 0, n = Array(t6.length); e < t6.length; e++)
        n[e] = t6[e];
      return n;
    }
    return Array.from(t6);
  }
  function _classCallCheck$7(t6, e) {
    if (!(t6 instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function _possibleConstructorReturn$3(t6, e) {
    if (!t6)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || typeof e != "object" && typeof e != "function" ? t6 : e;
  }
  function _inherits$3(t6, e) {
    if (typeof e != "function" && e !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t6.prototype = Object.create(e && e.prototype, { constructor: { value: t6, enumerable: false, writable: true, configurable: true } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t6, e) : t6.__proto__ = e);
  }
  function _toConsumableArray$6(t6) {
    if (Array.isArray(t6)) {
      for (var e = 0, n = Array(t6.length); e < t6.length; e++)
        n[e] = t6[e];
      return n;
    }
    return Array.from(t6);
  }
  function dataPrep(t6, e) {
    t6.labels = t6.labels || [];
    var n = t6.labels.length, i = t6.datasets, a = new Array(n).fill(0);
    return i || (i = [{ values: a }]), i.map(function(t7) {
      if (t7.values) {
        var i2 = t7.values;
        i2 = (i2 = i2.map(function(t8) {
          return isNaN(t8) ? 0 : t8;
        })).length > n ? i2.slice(0, n) : fillArray(i2, n - i2.length, 0), t7.values = i2;
      } else
        t7.values = a;
      t7.chartType || (AXIS_DATASET_CHART_TYPES.includes(e), t7.chartType = e);
    }), t6.yRegions && t6.yRegions.map(function(t7) {
      if (t7.end < t7.start) {
        var e2 = [t7.end, t7.start];
        t7.start = e2[0], t7.end = e2[1];
      }
    }), t6;
  }
  function zeroDataPrep(t6) {
    var e = t6.labels.length, n = new Array(e).fill(0), i = { labels: t6.labels.slice(0, -1), datasets: t6.datasets.map(function(t7) {
      return { name: "", values: n.slice(0, -1), chartType: t7.chartType };
    }) };
    return t6.yMarkers && (i.yMarkers = [{ value: 0, label: "" }]), t6.yRegions && (i.yRegions = [{ start: 0, end: 0, label: "" }]), i;
  }
  function getShortenedLabels(t6) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2], i = t6 / e.length;
    i <= 0 && (i = 1);
    var a = i / DEFAULT_CHAR_WIDTH, r = void 0;
    if (n) {
      var o = Math.max.apply(Math, _toConsumableArray$6(e.map(function(t7) {
        return t7.length;
      })));
      r = Math.ceil(o / a);
    }
    return e.map(function(t7, e2) {
      return (t7 += "").length > a && (n ? e2 % r != 0 && (t7 = "") : t7 = a - 3 > 0 ? t7.slice(0, a - 3) + " ..." : t7.slice(0, a) + ".."), t7;
    });
  }
  function _toConsumableArray$5(t6) {
    if (Array.isArray(t6)) {
      for (var e = 0, n = Array(t6.length); e < t6.length; e++)
        n[e] = t6[e];
      return n;
    }
    return Array.from(t6);
  }
  function _classCallCheck$8(t6, e) {
    if (!(t6 instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function _possibleConstructorReturn$4(t6, e) {
    if (!t6)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || typeof e != "object" && typeof e != "function" ? t6 : e;
  }
  function _inherits$4(t6, e) {
    if (typeof e != "function" && e !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t6.prototype = Object.create(e && e.prototype, { constructor: { value: t6, enumerable: false, writable: true, configurable: true } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t6, e) : t6.__proto__ = e);
  }
  function _toConsumableArray$7(t6) {
    if (Array.isArray(t6)) {
      for (var e = 0, n = Array(t6.length); e < t6.length; e++)
        n[e] = t6[e];
      return n;
    }
    return Array.from(t6);
  }
  function _classCallCheck$9(t6, e) {
    if (!(t6 instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function _possibleConstructorReturn$5(t6, e) {
    if (!t6)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || typeof e != "object" && typeof e != "function" ? t6 : e;
  }
  function _inherits$5(t6, e) {
    if (typeof e != "function" && e !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t6.prototype = Object.create(e && e.prototype, { constructor: { value: t6, enumerable: false, writable: true, configurable: true } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t6, e) : t6.__proto__ = e);
  }
  var css_248z = '.chart-container{position:relative;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif}.chart-container .axis,.chart-container .chart-label{fill:#555b51}.chart-container .axis line,.chart-container .chart-label line{stroke:#dadada}.chart-container .dataset-units circle{stroke:#fff;stroke-width:2}.chart-container .dataset-units path{fill:none;stroke-opacity:1;stroke-width:2px}.chart-container .dataset-path{stroke-width:2px}.chart-container .path-group path{fill:none;stroke-opacity:1;stroke-width:2px}.chart-container line.dashed{stroke-dasharray:5,3}.chart-container .axis-line .specific-value{text-anchor:start}.chart-container .axis-line .y-line{text-anchor:end}.chart-container .axis-line .x-line{text-anchor:middle}.chart-container .legend-dataset-text{fill:#6c7680;font-weight:600}.graph-svg-tip{position:absolute;z-index:99999;padding:10px;font-size:12px;color:#959da5;text-align:center;background:rgba(0,0,0,.8);border-radius:3px}.graph-svg-tip ol,.graph-svg-tip ul{padding-left:0;display:-webkit-box;display:-ms-flexbox;display:flex}.graph-svg-tip ul.data-point-list li{min-width:90px;-webkit-box-flex:1;-ms-flex:1;flex:1;font-weight:600}.graph-svg-tip strong{color:#dfe2e5;font-weight:600}.graph-svg-tip .svg-pointer{position:absolute;height:5px;margin:0 0 0 -5px;content:" ";border:5px solid transparent;border-top-color:rgba(0,0,0,.8)}.graph-svg-tip.comparison{padding:0;text-align:left;pointer-events:none}.graph-svg-tip.comparison .title{display:block;padding:10px;margin:0;font-weight:600;line-height:1;pointer-events:none}.graph-svg-tip.comparison ul{margin:0;white-space:nowrap;list-style:none}.graph-svg-tip.comparison li{display:inline-block;padding:5px 10px}';
  styleInject(css_248z);
  var _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t6) {
    return typeof t6;
  } : function(t6) {
    return t6 && typeof Symbol == "function" && t6.constructor === Symbol && t6 !== Symbol.prototype ? "symbol" : typeof t6;
  };
  $.create = function(t6, e) {
    var n = document.createElement(t6);
    for (var i in e) {
      var a = e[i];
      if (i === "inside")
        $(a).appendChild(n);
      else if (i === "around") {
        var r = $(a);
        r.parentNode.insertBefore(n, r), n.appendChild(r);
      } else
        i === "styles" ? (a === void 0 ? "undefined" : _typeof(a)) === "object" && Object.keys(a).map(function(t7) {
          n.style[t7] = a[t7];
        }) : i in n ? n[i] = a : n.setAttribute(i, a);
    }
    return n;
  };
  var BASE_MEASURES = { margins: { top: 10, bottom: 10, left: 20, right: 20 }, paddings: { top: 20, bottom: 40, left: 30, right: 10 }, baseHeight: 240, titleHeight: 20, legendHeight: 30, titleFontSize: 12 };
  var INIT_CHART_UPDATE_TIMEOUT = 700;
  var CHART_POST_ANIMATE_TIMEOUT = 400;
  var AXIS_DATASET_CHART_TYPES = ["line", "bar"];
  var AXIS_LEGEND_BAR_SIZE = 100;
  var BAR_CHART_SPACE_RATIO = 0.5;
  var MIN_BAR_PERCENT_HEIGHT = 0;
  var LINE_CHART_DOT_SIZE = 4;
  var DOT_OVERLAY_SIZE_INCR = 4;
  var PERCENTAGE_BAR_DEFAULT_HEIGHT = 20;
  var PERCENTAGE_BAR_DEFAULT_DEPTH = 2;
  var HEATMAP_DISTRIBUTION_SIZE = 5;
  var HEATMAP_SQUARE_SIZE = 10;
  var HEATMAP_GUTTER_SIZE = 2;
  var DEFAULT_CHAR_WIDTH = 7;
  var TOOLTIP_POINTER_TRIANGLE_HEIGHT = 5;
  var DEFAULT_CHART_COLORS = ["light-blue", "blue", "violet", "red", "orange", "yellow", "green", "light-green", "purple", "magenta", "light-grey", "dark-grey"];
  var HEATMAP_COLORS_GREEN = ["#ebedf0", "#c6e48b", "#7bc96f", "#239a3b", "#196127"];
  var DEFAULT_COLORS = { bar: DEFAULT_CHART_COLORS, line: DEFAULT_CHART_COLORS, pie: DEFAULT_CHART_COLORS, percentage: DEFAULT_CHART_COLORS, heatmap: HEATMAP_COLORS_GREEN, donut: DEFAULT_CHART_COLORS };
  var ANGLE_RATIO = Math.PI / 180;
  var FULL_ANGLE = 360;
  var _createClass$3 = function() {
    function t6(t7, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || false, i.configurable = true, "value" in i && (i.writable = true), Object.defineProperty(t7, i.key, i);
      }
    }
    return function(e, n, i) {
      return n && t6(e.prototype, n), i && t6(e, i), e;
    };
  }();
  var SvgTip = function() {
    function t6(e) {
      var n = e.parent, i = n === void 0 ? null : n, a = e.colors, r = a === void 0 ? [] : a;
      _classCallCheck$4(this, t6), this.parent = i, this.colors = r, this.titleName = "", this.titleValue = "", this.listValues = [], this.titleValueFirst = 0, this.x = 0, this.y = 0, this.top = 0, this.left = 0, this.setup();
    }
    return _createClass$3(t6, [{ key: "setup", value: function() {
      this.makeTooltip();
    } }, { key: "refresh", value: function() {
      this.fill(), this.calcPosition();
    } }, { key: "makeTooltip", value: function() {
      var t7 = this;
      this.container = $.create("div", { inside: this.parent, className: "graph-svg-tip comparison", innerHTML: '<span class="title"></span>\n				<ul class="data-point-list"></ul>\n				<div class="svg-pointer"></div>' }), this.hideTip(), this.title = this.container.querySelector(".title"), this.dataPointList = this.container.querySelector(".data-point-list"), this.parent.addEventListener("mouseleave", function() {
        t7.hideTip();
      });
    } }, { key: "fill", value: function() {
      var t7 = this, e = void 0;
      this.index && this.container.setAttribute("data-point-index", this.index), e = this.titleValueFirst ? "<strong>" + this.titleValue + "</strong>" + this.titleName : this.titleName + "<strong>" + this.titleValue + "</strong>", this.title.innerHTML = e, this.dataPointList.innerHTML = "", this.listValues.map(function(e2, n) {
        var i = t7.colors[n] || "black", a = e2.formatted === 0 || e2.formatted ? e2.formatted : e2.value, r = $.create("li", { styles: { "border-top": "3px solid " + i }, innerHTML: '<strong style="display: block;">' + (a === 0 || a ? a : "") + "</strong>\n					" + (e2.title ? e2.title : "") });
        t7.dataPointList.appendChild(r);
      });
    } }, { key: "calcPosition", value: function() {
      var t7 = this.container.offsetWidth;
      this.top = this.y - this.container.offsetHeight - TOOLTIP_POINTER_TRIANGLE_HEIGHT, this.left = this.x - t7 / 2;
      var e = this.parent.offsetWidth - t7, n = this.container.querySelector(".svg-pointer");
      if (this.left < 0)
        n.style.left = "calc(50% - " + -1 * this.left + "px)", this.left = 0;
      else if (this.left > e) {
        var i = "calc(50% + " + (this.left - e) + "px)";
        n.style.left = i, this.left = e;
      } else
        n.style.left = "50%";
    } }, { key: "setValues", value: function(t7, e) {
      var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : [], a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : -1;
      this.titleName = n.name, this.titleValue = n.value, this.listValues = i, this.x = t7, this.y = e, this.titleValueFirst = n.valueFirst || 0, this.index = a, this.refresh();
    } }, { key: "hideTip", value: function() {
      this.container.style.top = "0px", this.container.style.left = "0px", this.container.style.opacity = "0";
    } }, { key: "showTip", value: function() {
      this.container.style.top = this.top + "px", this.container.style.left = this.left + "px", this.container.style.opacity = "1";
    } }]), t6;
  }();
  var _typeof$2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t6) {
    return typeof t6;
  } : function(t6) {
    return t6 && typeof Symbol == "function" && t6.constructor === Symbol && t6 !== Symbol.prototype ? "symbol" : typeof t6;
  };
  var PRESET_COLOR_MAP = { "light-blue": "#7cd6fd", blue: "#5e64ff", violet: "#743ee2", red: "#ff5858", orange: "#ffa00a", yellow: "#feef72", green: "#28a745", "light-green": "#98d85b", purple: "#b554ff", magenta: "#ffa3ef", black: "#36114C", grey: "#bdd3e6", "light-grey": "#f0f4f7", "dark-grey": "#b8c2cc" };
  var getColor = function(t6) {
    return /rgb[a]{0,1}\([\d, ]+\)/gim.test(t6) ? /\D+(\d*)\D+(\d*)\D+(\d*)/gim.exec(t6).map(function(t7, e) {
      return e !== 0 ? Number(t7).toString(16) : "#";
    }).reduce(function(t7, e) {
      return "" + t7 + e;
    }) : PRESET_COLOR_MAP[t6] || t6;
  };
  var _slicedToArray = function() {
    function t6(t7, e) {
      var n = [], i = true, a = false, r = void 0;
      try {
        for (var o, s = t7[Symbol.iterator](); !(i = (o = s.next()).done) && (n.push(o.value), !e || n.length !== e); i = true)
          ;
      } catch (t8) {
        a = true, r = t8;
      } finally {
        try {
          !i && s.return && s.return();
        } finally {
          if (a)
            throw r;
        }
      }
      return n;
    }
    return function(e, n) {
      if (Array.isArray(e))
        return e;
      if (Symbol.iterator in Object(e))
        return t6(e, n);
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
  }();
  var _typeof$1 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t6) {
    return typeof t6;
  } : function(t6) {
    return t6 && typeof Symbol == "function" && t6.constructor === Symbol && t6 !== Symbol.prototype ? "symbol" : typeof t6;
  };
  var AXIS_TICK_LENGTH = 6;
  var LABEL_MARGIN = 4;
  var LABEL_MAX_CHARS = 15;
  var FONT_SIZE = 10;
  var BASE_LINE_COLOR = "#dadada";
  var FONT_FILL = "#555b51";
  var makeOverlay = { bar: function(t6) {
    var e = void 0;
    t6.nodeName !== "rect" && (e = t6.getAttribute("transform"), t6 = t6.childNodes[0]);
    var n = t6.cloneNode();
    return n.style.fill = "#000000", n.style.opacity = "0.4", e && n.setAttribute("transform", e), n;
  }, dot: function(t6) {
    var e = void 0;
    t6.nodeName !== "circle" && (e = t6.getAttribute("transform"), t6 = t6.childNodes[0]);
    var n = t6.cloneNode(), i = t6.getAttribute("r"), a = t6.getAttribute("fill");
    return n.setAttribute("r", parseInt(i) + DOT_OVERLAY_SIZE_INCR), n.setAttribute("fill", a), n.style.opacity = "0.6", e && n.setAttribute("transform", e), n;
  }, heat_square: function(t6) {
    var e = void 0;
    t6.nodeName !== "circle" && (e = t6.getAttribute("transform"), t6 = t6.childNodes[0]);
    var n = t6.cloneNode(), i = t6.getAttribute("r"), a = t6.getAttribute("fill");
    return n.setAttribute("r", parseInt(i) + DOT_OVERLAY_SIZE_INCR), n.setAttribute("fill", a), n.style.opacity = "0.6", e && n.setAttribute("transform", e), n;
  } };
  var updateOverlay = { bar: function(t6, e) {
    var n = void 0;
    t6.nodeName !== "rect" && (n = t6.getAttribute("transform"), t6 = t6.childNodes[0]);
    var i = ["x", "y", "width", "height"];
    Object.values(t6.attributes).filter(function(t7) {
      return i.includes(t7.name) && t7.specified;
    }).map(function(t7) {
      e.setAttribute(t7.name, t7.nodeValue);
    }), n && e.setAttribute("transform", n);
  }, dot: function(t6, e) {
    var n = void 0;
    t6.nodeName !== "circle" && (n = t6.getAttribute("transform"), t6 = t6.childNodes[0]);
    var i = ["cx", "cy"];
    Object.values(t6.attributes).filter(function(t7) {
      return i.includes(t7.name) && t7.specified;
    }).map(function(t7) {
      e.setAttribute(t7.name, t7.nodeValue);
    }), n && e.setAttribute("transform", n);
  }, heat_square: function(t6, e) {
    var n = void 0;
    t6.nodeName !== "circle" && (n = t6.getAttribute("transform"), t6 = t6.childNodes[0]);
    var i = ["cx", "cy"];
    Object.values(t6.attributes).filter(function(t7) {
      return i.includes(t7.name) && t7.specified;
    }).map(function(t7) {
      e.setAttribute(t7.name, t7.nodeValue);
    }), n && e.setAttribute("transform", n);
  } };
  var _slicedToArray$2 = function() {
    function t6(t7, e) {
      var n = [], i = true, a = false, r = void 0;
      try {
        for (var o, s = t7[Symbol.iterator](); !(i = (o = s.next()).done) && (n.push(o.value), !e || n.length !== e); i = true)
          ;
      } catch (t8) {
        a = true, r = t8;
      } finally {
        try {
          !i && s.return && s.return();
        } finally {
          if (a)
            throw r;
        }
      }
      return n;
    }
    return function(e, n) {
      if (Array.isArray(e))
        return e;
      if (Symbol.iterator in Object(e))
        return t6(e, n);
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
  }();
  var UNIT_ANIM_DUR = 350;
  var PATH_ANIM_DUR = 350;
  var MARKER_LINE_ANIM_DUR = UNIT_ANIM_DUR;
  var REPLACE_ALL_NEW_DUR = 250;
  var STD_EASING = "easein";
  var _slicedToArray$1 = function() {
    function t6(t7, e) {
      var n = [], i = true, a = false, r = void 0;
      try {
        for (var o, s = t7[Symbol.iterator](); !(i = (o = s.next()).done) && (n.push(o.value), !e || n.length !== e); i = true)
          ;
      } catch (t8) {
        a = true, r = t8;
      } finally {
        try {
          !i && s.return && s.return();
        } finally {
          if (a)
            throw r;
        }
      }
      return n;
    }
    return function(e, n) {
      if (Array.isArray(e))
        return e;
      if (Symbol.iterator in Object(e))
        return t6(e, n);
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
  }();
  var EASING = { ease: "0.25 0.1 0.25 1", linear: "0 0 1 1", easein: "0.1 0.8 0.2 1", easeout: "0 0 0.58 1", easeinout: "0.42 0 0.58 1" };
  var CSSTEXT = ".chart-container{position:relative;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif}.chart-container .axis,.chart-container .chart-label{fill:#555b51}.chart-container .axis line,.chart-container .chart-label line{stroke:#dadada}.chart-container .dataset-units circle{stroke:#fff;stroke-width:2}.chart-container .dataset-units path{fill:none;stroke-opacity:1;stroke-width:2px}.chart-container .dataset-path{stroke-width:2px}.chart-container .path-group path{fill:none;stroke-opacity:1;stroke-width:2px}.chart-container line.dashed{stroke-dasharray:5,3}.chart-container .axis-line .specific-value{text-anchor:start}.chart-container .axis-line .y-line{text-anchor:end}.chart-container .axis-line .x-line{text-anchor:middle}.chart-container .legend-dataset-text{fill:#6c7680;font-weight:600}.graph-svg-tip{position:absolute;z-index:99999;padding:10px;font-size:12px;color:#959da5;text-align:center;background:rgba(0,0,0,.8);border-radius:3px}.graph-svg-tip ul{padding-left:0;display:flex}.graph-svg-tip ol{padding-left:0;display:flex}.graph-svg-tip ul.data-point-list li{min-width:90px;flex:1;font-weight:600}.graph-svg-tip strong{color:#dfe2e5;font-weight:600}.graph-svg-tip .svg-pointer{position:absolute;height:5px;margin:0 0 0 -5px;content:' ';border:5px solid transparent;border-top-color:rgba(0,0,0,.8)}.graph-svg-tip.comparison{padding:0;text-align:left;pointer-events:none}.graph-svg-tip.comparison .title{display:block;padding:10px;margin:0;font-weight:600;line-height:1;pointer-events:none}.graph-svg-tip.comparison ul{margin:0;white-space:nowrap;list-style:none}.graph-svg-tip.comparison li{display:inline-block;padding:5px 10px}";
  var _createClass$2 = function() {
    function t6(t7, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || false, i.configurable = true, "value" in i && (i.writable = true), Object.defineProperty(t7, i.key, i);
      }
    }
    return function(e, n, i) {
      return n && t6(e.prototype, n), i && t6(e, i), e;
    };
  }();
  var BaseChart = function() {
    function t6(e, n) {
      if (_classCallCheck$3(this, t6), n = deepClone(n), this.parent = typeof e == "string" ? document.querySelector(e) : e, !(this.parent instanceof HTMLElement))
        throw new Error("No `parent` element to render on was provided.");
      this.rawChartArgs = n, this.title = n.title || "", this.type = n.type || "", this.realData = this.prepareData(n.data), this.data = this.prepareFirstData(this.realData), this.colors = this.validateColors(n.colors, this.type), this.config = { showTooltip: 1, showLegend: 1, isNavigable: n.isNavigable || 0, animate: n.animate !== void 0 ? n.animate : 1, truncateLegends: n.truncateLegends || 1 }, this.measures = JSON.parse(JSON.stringify(BASE_MEASURES));
      var i = this.measures;
      this.setMeasures(n), this.title.length || (i.titleHeight = 0), this.config.showLegend || (i.legendHeight = 0), this.argHeight = n.height || i.baseHeight, this.state = {}, this.options = {}, this.initTimeout = INIT_CHART_UPDATE_TIMEOUT, this.config.isNavigable && (this.overlays = []), this.configure(n);
    }
    return _createClass$2(t6, [{ key: "prepareData", value: function(t7) {
      return t7;
    } }, { key: "prepareFirstData", value: function(t7) {
      return t7;
    } }, { key: "validateColors", value: function(t7, e) {
      var n = [];
      return (t7 = (t7 || []).concat(DEFAULT_COLORS[e])).forEach(function(t8) {
        var e2 = getColor(t8);
        isValidColor(e2) ? n.push(e2) : console.warn('"' + t8 + '" is not a valid color.');
      }), n;
    } }, { key: "setMeasures", value: function() {
    } }, { key: "configure", value: function() {
      var t7 = this, e = this.argHeight;
      this.baseHeight = e, this.height = e - getExtraHeight(this.measures), this.boundDrawFn = function() {
        return t7.draw(true);
      }, ResizeObserver && (this.resizeObserver = new ResizeObserver(this.boundDrawFn), this.resizeObserver.observe(this.parent)), window.addEventListener("resize", this.boundDrawFn), window.addEventListener("orientationchange", this.boundDrawFn);
    } }, { key: "destroy", value: function() {
      this.resizeObserver && this.resizeObserver.disconnect(), window.removeEventListener("resize", this.boundDrawFn), window.removeEventListener("orientationchange", this.boundDrawFn);
    } }, { key: "setup", value: function() {
      this.makeContainer(), this.updateWidth(), this.makeTooltip(), this.draw(false, true);
    } }, { key: "makeContainer", value: function() {
      this.parent.innerHTML = "";
      var t7 = { inside: this.parent, className: "chart-container" };
      this.independentWidth && (t7.styles = { width: this.independentWidth + "px" }), this.container = $.create("div", t7);
    } }, { key: "makeTooltip", value: function() {
      this.tip = new SvgTip({ parent: this.container, colors: this.colors }), this.bindTooltip();
    } }, { key: "bindTooltip", value: function() {
    } }, { key: "draw", value: function() {
      var t7 = this, e = arguments.length > 0 && arguments[0] !== void 0 && arguments[0], n = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
      e && isHidden(this.parent) || (this.updateWidth(), this.calc(e), this.makeChartArea(), this.setupComponents(), this.components.forEach(function(e2) {
        return e2.setup(t7.drawArea);
      }), this.render(this.components, false), n && (this.data = this.realData, setTimeout(function() {
        t7.update(t7.data);
      }, this.initTimeout)), this.renderLegend(), this.setupNavigation(n));
    } }, { key: "calc", value: function() {
    } }, { key: "updateWidth", value: function() {
      this.baseWidth = getElementContentWidth(this.parent), this.width = this.baseWidth - getExtraWidth(this.measures);
    } }, { key: "makeChartArea", value: function() {
      this.svg && this.container.removeChild(this.svg);
      var t7 = this.measures;
      this.svg = makeSVGContainer(this.container, "frappe-chart chart", this.baseWidth, this.baseHeight), this.svgDefs = makeSVGDefs(this.svg), this.title.length && (this.titleEL = makeText("title", t7.margins.left, t7.margins.top, this.title, { fontSize: t7.titleFontSize, fill: "#666666", dy: t7.titleFontSize }));
      var e = getTopOffset(t7);
      this.drawArea = makeSVGGroup(this.type + "-chart chart-draw-area", "translate(" + getLeftOffset(t7) + ", " + e + ")"), this.config.showLegend && (e += this.height + t7.paddings.bottom, this.legendArea = makeSVGGroup("chart-legend", "translate(" + getLeftOffset(t7) + ", " + e + ")")), this.title.length && this.svg.appendChild(this.titleEL), this.svg.appendChild(this.drawArea), this.config.showLegend && this.svg.appendChild(this.legendArea), this.updateTipOffset(getLeftOffset(t7), getTopOffset(t7));
    } }, { key: "updateTipOffset", value: function(t7, e) {
      this.tip.offset = { x: t7, y: e };
    } }, { key: "setupComponents", value: function() {
      this.components = /* @__PURE__ */ new Map();
    } }, { key: "update", value: function(t7) {
      t7 || console.error("No data to update."), this.data = this.prepareData(t7), this.calc(), this.render(this.components, this.config.animate), this.renderLegend();
    } }, { key: "render", value: function() {
      var t7 = this, e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.components, n = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
      this.config.isNavigable && this.overlays.map(function(t8) {
        return t8.parentNode.removeChild(t8);
      });
      var i = [];
      e.forEach(function(t8) {
        i = i.concat(t8.update(n));
      }), i.length > 0 ? (runSMILAnimation(this.container, this.svg, i), setTimeout(function() {
        e.forEach(function(t8) {
          return t8.make();
        }), t7.updateNav();
      }, CHART_POST_ANIMATE_TIMEOUT)) : (e.forEach(function(t8) {
        return t8.make();
      }), this.updateNav());
    } }, { key: "updateNav", value: function() {
      this.config.isNavigable && (this.makeOverlay(), this.bindUnits());
    } }, { key: "renderLegend", value: function() {
    } }, { key: "setupNavigation", value: function() {
      var t7 = this, e = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
      this.config.isNavigable && e && (this.bindOverlay(), this.keyActions = { 13: this.onEnterKey.bind(this), 37: this.onLeftArrow.bind(this), 38: this.onUpArrow.bind(this), 39: this.onRightArrow.bind(this), 40: this.onDownArrow.bind(this) }, document.addEventListener("keydown", function(e2) {
        isElementInViewport(t7.container) && (e2 = e2 || window.event, t7.keyActions[e2.keyCode] && t7.keyActions[e2.keyCode]());
      }));
    } }, { key: "makeOverlay", value: function() {
    } }, { key: "updateOverlay", value: function() {
    } }, { key: "bindOverlay", value: function() {
    } }, { key: "bindUnits", value: function() {
    } }, { key: "onLeftArrow", value: function() {
    } }, { key: "onRightArrow", value: function() {
    } }, { key: "onUpArrow", value: function() {
    } }, { key: "onDownArrow", value: function() {
    } }, { key: "onEnterKey", value: function() {
    } }, { key: "addDataPoint", value: function() {
    } }, { key: "removeDataPoint", value: function() {
    } }, { key: "getDataPoint", value: function() {
    } }, { key: "setCurrentDataPoint", value: function() {
    } }, { key: "updateDataset", value: function() {
    } }, { key: "export", value: function() {
      var t7 = prepareForExport(this.svg);
      downloadFile(this.title || "Chart", [t7]);
    } }]), t6;
  }();
  var _createClass$1 = function() {
    function t6(t7, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || false, i.configurable = true, "value" in i && (i.writable = true), Object.defineProperty(t7, i.key, i);
      }
    }
    return function(e, n, i) {
      return n && t6(e.prototype, n), i && t6(e, i), e;
    };
  }();
  var _get$1 = function t(e, n, i) {
    e === null && (e = Function.prototype);
    var a = Object.getOwnPropertyDescriptor(e, n);
    if (a === void 0) {
      var r = Object.getPrototypeOf(e);
      return r === null ? void 0 : t(r, n, i);
    }
    if ("value" in a)
      return a.value;
    var o = a.get;
    if (o !== void 0)
      return o.call(i);
  };
  var AggregationChart = function(t6) {
    function e(t7, n) {
      return _classCallCheck$2(this, e), _possibleConstructorReturn$1(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t7, n));
    }
    return _inherits$1(e, t6), _createClass$1(e, [{ key: "configure", value: function(t7) {
      _get$1(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "configure", this).call(this, t7), this.config.formatTooltipY = (t7.tooltipOptions || {}).formatTooltipY, this.config.maxSlices = t7.maxSlices || 20, this.config.maxLegendPoints = t7.maxLegendPoints || 20;
    } }, { key: "calc", value: function() {
      var t7 = this, e2 = this.state, n = this.config.maxSlices;
      e2.sliceTotals = [];
      var i = this.data.labels.map(function(e3, n2) {
        var i2 = 0;
        return t7.data.datasets.map(function(t8) {
          i2 += t8.values[n2];
        }), [i2, e3];
      }).filter(function(t8) {
        return t8[0] >= 0;
      }), a = i;
      if (i.length > n) {
        i.sort(function(t8, e3) {
          return e3[0] - t8[0];
        }), a = i.slice(0, n - 1);
        var r = 0;
        i.slice(n - 1).map(function(t8) {
          r += t8[0];
        }), a.push([r, "Rest"]), this.colors[n - 1] = "grey";
      }
      e2.labels = [], a.map(function(t8) {
        e2.sliceTotals.push(round(t8[0])), e2.labels.push(t8[1]);
      }), e2.grandTotal = e2.sliceTotals.reduce(function(t8, e3) {
        return t8 + e3;
      }, 0), this.center = { x: this.width / 2, y: this.height / 2 };
    } }, { key: "renderLegend", value: function() {
      var t7 = this, e2 = this.state;
      this.legendArea.textContent = "", this.legendTotals = e2.sliceTotals.slice(0, this.config.maxLegendPoints);
      var n = 0, i = 0;
      this.legendTotals.map(function(a, r) {
        var o = 150, s = Math.floor((t7.width - getExtraWidth(t7.measures)) / o);
        t7.legendTotals.length < s && (o = t7.width / t7.legendTotals.length), n > s && (n = 0, i += 20);
        var l = o * n + 5, u = t7.config.truncateLegends ? truncateString(e2.labels[r], o / 10) : e2.labels[r], c = t7.config.formatTooltipY ? t7.config.formatTooltipY(a) : a, h = legendDot(l, i, 5, t7.colors[r], u + ": " + c, false);
        t7.legendArea.appendChild(h), n++;
      });
    } }]), e;
  }(BaseChart);
  var NO_OF_YEAR_MONTHS = 12;
  var NO_OF_DAYS_IN_WEEK = 7;
  var NO_OF_MILLIS = 1e3;
  var SEC_IN_DAY = 86400;
  var MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var DAY_NAMES_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var _slicedToArray$3 = function() {
    function t6(t7, e) {
      var n = [], i = true, a = false, r = void 0;
      try {
        for (var o, s = t7[Symbol.iterator](); !(i = (o = s.next()).done) && (n.push(o.value), !e || n.length !== e); i = true)
          ;
      } catch (t8) {
        a = true, r = t8;
      } finally {
        try {
          !i && s.return && s.return();
        } finally {
          if (a)
            throw r;
        }
      }
      return n;
    }
    return function(e, n) {
      if (Array.isArray(e))
        return e;
      if (Symbol.iterator in Object(e))
        return t6(e, n);
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
  }();
  var _createClass$4 = function() {
    function t6(t7, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || false, i.configurable = true, "value" in i && (i.writable = true), Object.defineProperty(t7, i.key, i);
      }
    }
    return function(e, n, i) {
      return n && t6(e.prototype, n), i && t6(e, i), e;
    };
  }();
  var ChartComponent = function() {
    function t6(e) {
      var n = e.layerClass, i = n === void 0 ? "" : n, a = e.layerTransform, r = a === void 0 ? "" : a, o = e.constants, s = e.getData, l = e.makeElements, u = e.animateElements;
      _classCallCheck$5(this, t6), this.layerTransform = r, this.constants = o, this.makeElements = l, this.getData = s, this.animateElements = u, this.store = [], this.labels = [], this.layerClass = i, this.layerClass = typeof this.layerClass == "function" ? this.layerClass() : this.layerClass, this.refresh();
    }
    return _createClass$4(t6, [{ key: "refresh", value: function(t7) {
      this.data = t7 || this.getData();
    } }, { key: "setup", value: function(t7) {
      this.layer = makeSVGGroup(this.layerClass, this.layerTransform, t7);
    } }, { key: "make", value: function() {
      this.render(this.data), this.oldData = this.data;
    } }, { key: "render", value: function(t7) {
      var e = this;
      this.store = this.makeElements(t7), this.layer.textContent = "", this.store.forEach(function(t8) {
        e.layer.appendChild(t8);
      }), this.labels.forEach(function(t8) {
        e.layer.appendChild(t8);
      });
    } }, { key: "update", value: function() {
      var t7 = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
      this.refresh();
      var e = [];
      return t7 && (e = this.animateElements(this.data) || []), e;
    } }]), t6;
  }();
  var componentConfigs = { donutSlices: { layerClass: "donut-slices", makeElements: function(t6) {
    return t6.sliceStrings.map(function(e, n) {
      var i = makePath(e, "donut-path", t6.colors[n], "none", t6.strokeWidth);
      return i.style.transition = "transform .3s;", i;
    });
  }, animateElements: function(t6) {
    return this.store.map(function(e, n) {
      return animatePathStr(e, t6.sliceStrings[n]);
    });
  } }, pieSlices: { layerClass: "pie-slices", makeElements: function(t6) {
    return t6.sliceStrings.map(function(e, n) {
      var i = makePath(e, "pie-path", "none", t6.colors[n]);
      return i.style.transition = "transform .3s;", i;
    });
  }, animateElements: function(t6) {
    return this.store.map(function(e, n) {
      return animatePathStr(e, t6.sliceStrings[n]);
    });
  } }, percentageBars: { layerClass: "percentage-bars", makeElements: function(t6) {
    var e = this;
    return t6.xPositions.map(function(n, i) {
      return percentageBar(n, 0, t6.widths[i], e.constants.barHeight, e.constants.barDepth, t6.colors[i]);
    });
  }, animateElements: function(t6) {
    if (t6)
      return [];
  } }, yAxis: { layerClass: "y axis", makeElements: function(t6) {
    var e = this;
    return t6.positions.map(function(n, i) {
      return yLine(n, t6.labels[i], e.constants.width, { mode: e.constants.mode, pos: e.constants.pos, shortenNumbers: e.constants.shortenNumbers });
    });
  }, animateElements: function(t6) {
    var e = t6.positions, n = t6.labels, i = this.oldData.positions, a = this.oldData.labels, r = equilizeNoOfElements(i, e), o = _slicedToArray$3(r, 2);
    i = o[0], e = o[1];
    var s = equilizeNoOfElements(a, n), l = _slicedToArray$3(s, 2);
    return a = l[0], n = l[1], this.render({ positions: i, labels: n }), this.store.map(function(t7, n2) {
      return translateHoriLine(t7, e[n2], i[n2]);
    });
  } }, xAxis: { layerClass: "x axis", makeElements: function(t6) {
    var e = this;
    return t6.positions.map(function(n, i) {
      return xLine(n, t6.calcLabels[i], e.constants.height, { mode: e.constants.mode, pos: e.constants.pos });
    });
  }, animateElements: function(t6) {
    var e = t6.positions, n = t6.calcLabels, i = this.oldData.positions, a = this.oldData.calcLabels, r = equilizeNoOfElements(i, e), o = _slicedToArray$3(r, 2);
    i = o[0], e = o[1];
    var s = equilizeNoOfElements(a, n), l = _slicedToArray$3(s, 2);
    return a = l[0], n = l[1], this.render({ positions: i, calcLabels: n }), this.store.map(function(t7, n2) {
      return translateVertLine(t7, e[n2], i[n2]);
    });
  } }, yMarkers: { layerClass: "y-markers", makeElements: function(t6) {
    var e = this;
    return t6.map(function(t7) {
      return yMarker(t7.position, t7.label, e.constants.width, { labelPos: t7.options.labelPos, mode: "span", lineType: "dashed" });
    });
  }, animateElements: function(t6) {
    var e = equilizeNoOfElements(this.oldData, t6), n = _slicedToArray$3(e, 2);
    this.oldData = n[0];
    var i = (t6 = n[1]).map(function(t7) {
      return t7.position;
    }), a = t6.map(function(t7) {
      return t7.label;
    }), r = t6.map(function(t7) {
      return t7.options;
    }), o = this.oldData.map(function(t7) {
      return t7.position;
    });
    return this.render(o.map(function(t7, e2) {
      return { position: o[e2], label: a[e2], options: r[e2] };
    })), this.store.map(function(t7, e2) {
      return translateHoriLine(t7, i[e2], o[e2]);
    });
  } }, yRegions: { layerClass: "y-regions", makeElements: function(t6) {
    var e = this;
    return t6.map(function(t7) {
      return yRegion(t7.startPos, t7.endPos, e.constants.width, t7.label, { labelPos: t7.options.labelPos });
    });
  }, animateElements: function(t6) {
    var e = equilizeNoOfElements(this.oldData, t6), n = _slicedToArray$3(e, 2);
    this.oldData = n[0];
    var i = (t6 = n[1]).map(function(t7) {
      return t7.endPos;
    }), a = t6.map(function(t7) {
      return t7.label;
    }), r = t6.map(function(t7) {
      return t7.startPos;
    }), o = t6.map(function(t7) {
      return t7.options;
    }), s = this.oldData.map(function(t7) {
      return t7.endPos;
    }), l = this.oldData.map(function(t7) {
      return t7.startPos;
    });
    this.render(s.map(function(t7, e2) {
      return { startPos: l[e2], endPos: s[e2], label: a[e2], options: o[e2] };
    }));
    var u = [];
    return this.store.map(function(t7, e2) {
      u = u.concat(animateRegion(t7, r[e2], i[e2], s[e2]));
    }), u;
  } }, heatDomain: { layerClass: function() {
    return "heat-domain domain-" + this.constants.index;
  }, makeElements: function(t6) {
    var e = this, n = this.constants, i = n.index, a = n.colWidth, r = n.rowHeight, o = n.squareSize, s = n.radius, l = n.xTranslate, u = 0;
    return this.serializedSubDomains = [], t6.cols.map(function(t7, n2) {
      n2 === 1 && e.labels.push(makeText("domain-name", l, -12, getMonthName(i, true).toUpperCase(), { fontSize: 9 })), t7.map(function(t8, n3) {
        if (t8.fill) {
          var i2 = { "data-date": t8.yyyyMmDd, "data-value": t8.dataValue, "data-day": n3 }, a2 = heatSquare("day", l, u, o, s, t8.fill, i2);
          e.serializedSubDomains.push(a2);
        }
        u += r;
      }), u = 0, l += a;
    }), this.serializedSubDomains;
  }, animateElements: function(t6) {
    if (t6)
      return [];
  } }, barGraph: { layerClass: function() {
    return "dataset-units dataset-bars dataset-" + this.constants.index;
  }, makeElements: function(t6) {
    var e = this.constants;
    return this.unitType = "bar", this.units = t6.yPositions.map(function(n, i) {
      return datasetBar(t6.xPositions[i], n, t6.barWidth, e.color, t6.labels[i], i, t6.offsets[i], { zeroLine: t6.zeroLine, barsWidth: t6.barsWidth, minHeight: e.minHeight });
    }), this.units;
  }, animateElements: function(t6) {
    var e = t6.xPositions, n = t6.yPositions, i = t6.offsets, a = t6.labels, r = this.oldData.xPositions, o = this.oldData.yPositions, s = this.oldData.offsets, l = this.oldData.labels, u = equilizeNoOfElements(r, e), c = _slicedToArray$3(u, 2);
    r = c[0], e = c[1];
    var h = equilizeNoOfElements(o, n), d = _slicedToArray$3(h, 2);
    o = d[0], n = d[1];
    var f = equilizeNoOfElements(s, i), p = _slicedToArray$3(f, 2);
    s = p[0], i = p[1];
    var v = equilizeNoOfElements(l, a), g = _slicedToArray$3(v, 2);
    l = g[0], a = g[1], this.render({ xPositions: r, yPositions: o, offsets: s, labels: a, zeroLine: this.oldData.zeroLine, barsWidth: this.oldData.barsWidth, barWidth: this.oldData.barWidth });
    var y = [];
    return this.store.map(function(a2, r2) {
      y = y.concat(animateBar(a2, e[r2], n[r2], t6.barWidth, i[r2], { zeroLine: t6.zeroLine }));
    }), y;
  } }, lineGraph: { layerClass: function() {
    return "dataset-units dataset-line dataset-" + this.constants.index;
  }, makeElements: function(t6) {
    var e = this.constants;
    return this.unitType = "dot", this.paths = {}, e.hideLine || (this.paths = getPaths(t6.xPositions, t6.yPositions, e.color, { heatline: e.heatline, regionFill: e.regionFill, spline: e.spline }, { svgDefs: e.svgDefs, zeroLine: t6.zeroLine })), this.units = [], e.hideDots || (this.units = t6.yPositions.map(function(n, i) {
      return datasetDot(t6.xPositions[i], n, t6.radius, e.color, e.valuesOverPoints ? t6.values[i] : "", i);
    })), Object.values(this.paths).concat(this.units);
  }, animateElements: function(t6) {
    var e = t6.xPositions, n = t6.yPositions, i = t6.values, a = this.oldData.xPositions, r = this.oldData.yPositions, o = this.oldData.values, s = equilizeNoOfElements(a, e), l = _slicedToArray$3(s, 2);
    a = l[0], e = l[1];
    var u = equilizeNoOfElements(r, n), c = _slicedToArray$3(u, 2);
    r = c[0], n = c[1];
    var h = equilizeNoOfElements(o, i), d = _slicedToArray$3(h, 2);
    o = d[0], i = d[1], this.render({ xPositions: a, yPositions: r, values: i, zeroLine: this.oldData.zeroLine, radius: this.oldData.radius });
    var f = [];
    return Object.keys(this.paths).length && (f = f.concat(animatePath(this.paths, e, n, t6.zeroLine, this.constants.spline))), this.units.length && this.units.map(function(t7, i2) {
      f = f.concat(animateDot(t7, e[i2], n[i2]));
    }), f;
  } } };
  var _createClass = function() {
    function t6(t7, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || false, i.configurable = true, "value" in i && (i.writable = true), Object.defineProperty(t7, i.key, i);
      }
    }
    return function(e, n, i) {
      return n && t6(e.prototype, n), i && t6(e, i), e;
    };
  }();
  var _get = function t2(e, n, i) {
    e === null && (e = Function.prototype);
    var a = Object.getOwnPropertyDescriptor(e, n);
    if (a === void 0) {
      var r = Object.getPrototypeOf(e);
      return r === null ? void 0 : t2(r, n, i);
    }
    if ("value" in a)
      return a.value;
    var o = a.get;
    if (o !== void 0)
      return o.call(i);
  };
  var PercentageChart = function(t6) {
    function e(t7, n) {
      _classCallCheck$1(this, e);
      var i = _possibleConstructorReturn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t7, n));
      return i.type = "percentage", i.setup(), i;
    }
    return _inherits(e, t6), _createClass(e, [{ key: "setMeasures", value: function(t7) {
      var e2 = this.measures;
      this.barOptions = t7.barOptions || {};
      var n = this.barOptions;
      n.height = n.height || PERCENTAGE_BAR_DEFAULT_HEIGHT, n.depth = n.depth || PERCENTAGE_BAR_DEFAULT_DEPTH, e2.paddings.right = 30, e2.legendHeight = 60, e2.baseHeight = 8 * (n.height + 0.5 * n.depth);
    } }, { key: "setupComponents", value: function() {
      var t7 = this.state, e2 = [["percentageBars", { barHeight: this.barOptions.height, barDepth: this.barOptions.depth }, function() {
        return { xPositions: t7.xPositions, widths: t7.widths, colors: this.colors };
      }.bind(this)]];
      this.components = new Map(e2.map(function(t8) {
        var e3 = getComponent.apply(void 0, _toConsumableArray(t8));
        return [t8[0], e3];
      }));
    } }, { key: "calc", value: function() {
      var t7 = this;
      _get(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "calc", this).call(this);
      var n = this.state;
      n.xPositions = [], n.widths = [];
      var i = 0;
      n.sliceTotals.map(function(e2) {
        var a = t7.width * e2 / n.grandTotal;
        n.widths.push(a), n.xPositions.push(i), i += a;
      });
    } }, { key: "makeDataByIndex", value: function() {
    } }, { key: "bindTooltip", value: function() {
      var t7 = this, e2 = this.state;
      this.container.addEventListener("mousemove", function(n) {
        var i = t7.components.get("percentageBars").store, a = n.target;
        if (i.includes(a)) {
          var r = i.indexOf(a), o = getOffset(t7.container), s = getOffset(a), l = s.left - o.left + parseInt(a.getAttribute("width")) / 2, u = s.top - o.top, c = (t7.formattedLabels && t7.formattedLabels.length > 0 ? t7.formattedLabels[r] : t7.state.labels[r]) + ": ", h = e2.sliceTotals[r] / e2.grandTotal;
          t7.tip.setValues(l, u, { name: c, value: (100 * h).toFixed(1) + "%" }), t7.tip.showTip();
        }
      });
    } }]), e;
  }(AggregationChart);
  var _createClass$5 = function() {
    function t6(t7, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || false, i.configurable = true, "value" in i && (i.writable = true), Object.defineProperty(t7, i.key, i);
      }
    }
    return function(e, n, i) {
      return n && t6(e.prototype, n), i && t6(e, i), e;
    };
  }();
  var _get$2 = function t3(e, n, i) {
    e === null && (e = Function.prototype);
    var a = Object.getOwnPropertyDescriptor(e, n);
    if (a === void 0) {
      var r = Object.getPrototypeOf(e);
      return r === null ? void 0 : t3(r, n, i);
    }
    if ("value" in a)
      return a.value;
    var o = a.get;
    if (o !== void 0)
      return o.call(i);
  };
  var PieChart = function(t6) {
    function e(t7, n) {
      _classCallCheck$6(this, e);
      var i = _possibleConstructorReturn$2(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t7, n));
      return i.type = "pie", i.initTimeout = 0, i.init = 1, i.setup(), i;
    }
    return _inherits$2(e, t6), _createClass$5(e, [{ key: "configure", value: function(t7) {
      _get$2(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "configure", this).call(this, t7), this.mouseMove = this.mouseMove.bind(this), this.mouseLeave = this.mouseLeave.bind(this), this.hoverRadio = t7.hoverRadio || 0.1, this.config.startAngle = t7.startAngle || 0, this.clockWise = t7.clockWise || false;
    } }, { key: "calc", value: function() {
      var t7 = this;
      _get$2(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "calc", this).call(this);
      var n = this.state;
      this.radius = this.height > this.width ? this.center.x : this.center.y;
      var i = this.radius, a = this.clockWise, r = n.slicesProperties || [];
      n.sliceStrings = [], n.slicesProperties = [];
      var o = 180 - this.config.startAngle;
      n.sliceTotals.map(function(e2, s) {
        var l = o, u = e2 / n.grandTotal * FULL_ANGLE, c = u > 180 ? 1 : 0, h = a ? -u : u, d = o += h, f = getPositionByAngle(l, i), p = getPositionByAngle(d, i), v = t7.init && r[s], g = void 0, y = void 0;
        t7.init ? (g = v ? v.startPosition : f, y = v ? v.endPosition : f) : (g = f, y = p);
        var m = u === 360 ? makeCircleStr(g, y, t7.center, t7.radius, a, c) : makeArcPathStr(g, y, t7.center, t7.radius, a, c);
        n.sliceStrings.push(m), n.slicesProperties.push({ startPosition: f, endPosition: p, value: e2, total: n.grandTotal, startAngle: l, endAngle: d, angle: h });
      }), this.init = 0;
    } }, { key: "setupComponents", value: function() {
      var t7 = this.state, e2 = [["pieSlices", {}, function() {
        return { sliceStrings: t7.sliceStrings, colors: this.colors };
      }.bind(this)]];
      this.components = new Map(e2.map(function(t8) {
        var e3 = getComponent.apply(void 0, _toConsumableArray$2(t8));
        return [t8[0], e3];
      }));
    } }, { key: "calTranslateByAngle", value: function(t7) {
      var e2 = this.radius, n = this.hoverRadio, i = getPositionByAngle(t7.startAngle + t7.angle / 2, e2);
      return "translate3d(" + i.x * n + "px," + i.y * n + "px,0)";
    } }, { key: "hoverSlice", value: function(t7, e2, n, i) {
      if (t7) {
        var a = this.colors[e2];
        if (n) {
          transform(t7, this.calTranslateByAngle(this.state.slicesProperties[e2])), t7.style.fill = lightenDarkenColor(a, 50);
          var r = getOffset(this.svg), o = i.pageX - r.left + 10, s = i.pageY - r.top - 10, l = (this.formatted_labels && this.formatted_labels.length > 0 ? this.formatted_labels[e2] : this.state.labels[e2]) + ": ", u = (100 * this.state.sliceTotals[e2] / this.state.grandTotal).toFixed(1);
          this.tip.setValues(o, s, { name: l, value: u + "%" }), this.tip.showTip();
        } else
          transform(t7, "translate3d(0,0,0)"), this.tip.hideTip(), t7.style.fill = a;
      }
    } }, { key: "bindTooltip", value: function() {
      this.container.addEventListener("mousemove", this.mouseMove), this.container.addEventListener("mouseleave", this.mouseLeave);
    } }, { key: "mouseMove", value: function(t7) {
      var e2 = t7.target, n = this.components.get("pieSlices").store, i = this.curActiveSliceIndex, a = this.curActiveSlice;
      if (n.includes(e2)) {
        var r = n.indexOf(e2);
        this.hoverSlice(a, i, false), this.curActiveSlice = e2, this.curActiveSliceIndex = r, this.hoverSlice(e2, r, true, t7);
      } else
        this.mouseLeave();
    } }, { key: "mouseLeave", value: function() {
      this.hoverSlice(this.curActiveSlice, this.curActiveSliceIndex, false);
    } }]), e;
  }(AggregationChart);
  var _slicedToArray$4 = function() {
    function t6(t7, e) {
      var n = [], i = true, a = false, r = void 0;
      try {
        for (var o, s = t7[Symbol.iterator](); !(i = (o = s.next()).done) && (n.push(o.value), !e || n.length !== e); i = true)
          ;
      } catch (t8) {
        a = true, r = t8;
      } finally {
        try {
          !i && s.return && s.return();
        } finally {
          if (a)
            throw r;
        }
      }
      return n;
    }
    return function(e, n) {
      if (Array.isArray(e))
        return e;
      if (Symbol.iterator in Object(e))
        return t6(e, n);
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
  }();
  var _createClass$6 = function() {
    function t6(t7, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || false, i.configurable = true, "value" in i && (i.writable = true), Object.defineProperty(t7, i.key, i);
      }
    }
    return function(e, n, i) {
      return n && t6(e.prototype, n), i && t6(e, i), e;
    };
  }();
  var COL_WIDTH = HEATMAP_SQUARE_SIZE + HEATMAP_GUTTER_SIZE;
  var ROW_HEIGHT = COL_WIDTH;
  var Heatmap = function(t6) {
    function e(t7, n) {
      _classCallCheck$7(this, e);
      var i = _possibleConstructorReturn$3(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t7, n));
      i.type = "heatmap", i.countLabel = n.countLabel || "";
      var a = ["Sunday", "Monday"], r = a.includes(n.startSubDomain) ? n.startSubDomain : "Sunday";
      return i.startSubDomainIndex = a.indexOf(r), i.setup(), i;
    }
    return _inherits$3(e, t6), _createClass$6(e, [{ key: "setMeasures", value: function(t7) {
      var e2 = this.measures;
      this.discreteDomains = t7.discreteDomains === 0 ? 0 : 1, e2.paddings.top = 3 * ROW_HEIGHT, e2.paddings.bottom = 0, e2.legendHeight = 2 * ROW_HEIGHT, e2.baseHeight = ROW_HEIGHT * NO_OF_DAYS_IN_WEEK + getExtraHeight(e2);
      var n = this.data, i = this.discreteDomains ? NO_OF_YEAR_MONTHS : 0;
      this.independentWidth = (getWeeksBetween(n.start, n.end) + i) * COL_WIDTH + getExtraWidth(e2);
    } }, { key: "updateWidth", value: function() {
      var t7 = this.discreteDomains ? NO_OF_YEAR_MONTHS : 0, e2 = this.state.noOfWeeks ? this.state.noOfWeeks : 52;
      this.baseWidth = (e2 + t7) * COL_WIDTH + getExtraWidth(this.measures);
    } }, { key: "prepareData", value: function() {
      var t7 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.data;
      if (t7.start && t7.end && t7.start > t7.end)
        throw new Error("Start date cannot be greater than end date.");
      if (t7.start || (t7.start = new Date(), t7.start.setFullYear(t7.start.getFullYear() - 1)), t7.end || (t7.end = new Date()), t7.dataPoints = t7.dataPoints || {}, parseInt(Object.keys(t7.dataPoints)[0]) > 1e5) {
        var e2 = {};
        Object.keys(t7.dataPoints).forEach(function(n) {
          var i = new Date(n * NO_OF_MILLIS);
          e2[getYyyyMmDd(i)] = t7.dataPoints[n];
        }), t7.dataPoints = e2;
      }
      return t7;
    } }, { key: "calc", value: function() {
      var t7 = this.state;
      t7.start = clone(this.data.start), t7.end = clone(this.data.end), t7.firstWeekStart = clone(t7.start), t7.noOfWeeks = getWeeksBetween(t7.start, t7.end), t7.distribution = calcDistribution(Object.values(this.data.dataPoints), HEATMAP_DISTRIBUTION_SIZE), t7.domainConfigs = this.getDomains();
    } }, { key: "setupComponents", value: function() {
      var t7 = this, e2 = this.state, n = this.discreteDomains ? 0 : 1, i = e2.domainConfigs.map(function(i2, a2) {
        return ["heatDomain", { index: i2.index, colWidth: COL_WIDTH, rowHeight: ROW_HEIGHT, squareSize: HEATMAP_SQUARE_SIZE, radius: t7.rawChartArgs.radius || 0, xTranslate: e2.domainConfigs.filter(function(t8, e3) {
          return e3 < a2;
        }).map(function(t8) {
          return t8.cols.length - n;
        }).reduce(function(t8, e3) {
          return t8 + e3;
        }, 0) * COL_WIDTH }, function() {
          return e2.domainConfigs[a2];
        }.bind(t7)];
      });
      this.components = new Map(i.map(function(t8, e3) {
        var n2 = getComponent.apply(void 0, _toConsumableArray$3(t8));
        return [t8[0] + "-" + e3, n2];
      }));
      var a = 0;
      DAY_NAMES_SHORT.forEach(function(e3, n2) {
        if ([1, 3, 5].includes(n2)) {
          var i2 = makeText("subdomain-name", -COL_WIDTH / 2, a, e3, { fontSize: HEATMAP_SQUARE_SIZE, dy: 8, textAnchor: "end" });
          t7.drawArea.appendChild(i2);
        }
        a += ROW_HEIGHT;
      });
    } }, { key: "update", value: function(t7) {
      t7 || console.error("No data to update."), this.data = this.prepareData(t7), this.draw(), this.bindTooltip();
    } }, { key: "bindTooltip", value: function() {
      var t7 = this;
      this.container.addEventListener("mousemove", function(e2) {
        t7.components.forEach(function(n) {
          var i = n.store, a = e2.target;
          if (i.includes(a)) {
            var r = a.getAttribute("data-value"), o = a.getAttribute("data-date").split("-"), s = getMonthName(parseInt(o[1]) - 1, true), l = t7.container.getBoundingClientRect(), u = a.getBoundingClientRect(), c = parseInt(e2.target.getAttribute("width")), h = u.left - l.left + c / 2, d = u.top - l.top, f = r + " " + t7.countLabel, p = " on " + s + " " + o[0] + ", " + o[2];
            t7.tip.setValues(h, d, { name: p, value: f, valueFirst: 1 }, []), t7.tip.showTip();
          }
        });
      });
    } }, { key: "renderLegend", value: function() {
      var t7 = this;
      this.legendArea.textContent = "";
      var e2 = 0, n = ROW_HEIGHT, i = this.rawChartArgs.radius || 0, a = makeText("subdomain-name", e2, n, "Less", { fontSize: HEATMAP_SQUARE_SIZE + 1, dy: 9 });
      e2 = 2 * COL_WIDTH + COL_WIDTH / 2, this.legendArea.appendChild(a), this.colors.slice(0, HEATMAP_DISTRIBUTION_SIZE).map(function(a2, r2) {
        var o = heatSquare("heatmap-legend-unit", e2 + (COL_WIDTH + 3) * r2, n, HEATMAP_SQUARE_SIZE, i, a2);
        t7.legendArea.appendChild(o);
      });
      var r = makeText("subdomain-name", e2 + HEATMAP_DISTRIBUTION_SIZE * (COL_WIDTH + 3) + COL_WIDTH / 4, n, "More", { fontSize: HEATMAP_SQUARE_SIZE + 1, dy: 9 });
      this.legendArea.appendChild(r);
    } }, { key: "getDomains", value: function() {
      for (var t7 = this.state, e2 = [t7.start.getMonth(), t7.start.getFullYear()], n = e2[0], i = e2[1], a = [t7.end.getMonth(), t7.end.getFullYear()], r = a[0] - n + 1 + 12 * (a[1] - i), o = [], s = clone(t7.start), l = 0; l < r; l++) {
        var u = t7.end;
        if (!areInSameMonth(s, t7.end)) {
          var c = [s.getMonth(), s.getFullYear()];
          u = getLastDateInMonth(c[0], c[1]);
        }
        o.push(this.getDomainConfig(s, u)), addDays(u, 1), s = u;
      }
      return o;
    } }, { key: "getDomainConfig", value: function(t7) {
      var e2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", n = [t7.getMonth(), t7.getFullYear()], i = n[0], a = n[1], r = setDayToSunday(t7), o = { index: i, cols: [] };
      addDays(e2 = clone(e2) || getLastDateInMonth(i, a), 1);
      for (var s = getWeeksBetween(r, e2), l = [], u = void 0, c = 0; c < s; c++)
        u = this.getCol(r, i), l.push(u), addDays(r = new Date(u[NO_OF_DAYS_IN_WEEK - 1].yyyyMmDd), 1);
      return u[NO_OF_DAYS_IN_WEEK - 1].dataValue !== void 0 && (addDays(r, 1), l.push(this.getCol(r, i, true))), o.cols = l, o;
    } }, { key: "getCol", value: function(t7, e2) {
      for (var n = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], i = this.state, a = clone(t7), r = [], o = 0; o < NO_OF_DAYS_IN_WEEK; o++, addDays(a, 1)) {
        var s = {}, l = a >= i.start && a <= i.end;
        n || a.getMonth() !== e2 || !l ? s.yyyyMmDd = getYyyyMmDd(a) : s = this.getSubDomainConfig(a), r.push(s);
      }
      return r;
    } }, { key: "getSubDomainConfig", value: function(t7) {
      var e2 = getYyyyMmDd(t7), n = this.data.dataPoints[e2];
      return { yyyyMmDd: e2, dataValue: n || 0, fill: this.colors[getMaxCheckpoint(n, this.state.distribution)] };
    } }]), e;
  }(BaseChart);
  var _createClass$7 = function() {
    function t6(t7, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || false, i.configurable = true, "value" in i && (i.writable = true), Object.defineProperty(t7, i.key, i);
      }
    }
    return function(e, n, i) {
      return n && t6(e.prototype, n), i && t6(e, i), e;
    };
  }();
  var _get$3 = function t4(e, n, i) {
    e === null && (e = Function.prototype);
    var a = Object.getOwnPropertyDescriptor(e, n);
    if (a === void 0) {
      var r = Object.getPrototypeOf(e);
      return r === null ? void 0 : t4(r, n, i);
    }
    if ("value" in a)
      return a.value;
    var o = a.get;
    if (o !== void 0)
      return o.call(i);
  };
  var AxisChart = function(t6) {
    function e(t7, n) {
      _classCallCheck$8(this, e);
      var i = _possibleConstructorReturn$4(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t7, n));
      return i.barOptions = n.barOptions || {}, i.lineOptions = n.lineOptions || {}, i.type = n.type || "line", i.init = 1, i.setup(), i;
    }
    return _inherits$4(e, t6), _createClass$7(e, [{ key: "setMeasures", value: function() {
      this.data.datasets.length <= 1 && (this.config.showLegend = 0, this.measures.paddings.bottom = 30);
    } }, { key: "configure", value: function(t7) {
      _get$3(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "configure", this).call(this, t7), t7.axisOptions = t7.axisOptions || {}, t7.tooltipOptions = t7.tooltipOptions || {}, this.config.xAxisMode = t7.axisOptions.xAxisMode || "span", this.config.yAxisMode = t7.axisOptions.yAxisMode || "span", this.config.xIsSeries = t7.axisOptions.xIsSeries || 0, this.config.shortenYAxisNumbers = t7.axisOptions.shortenYAxisNumbers || 0, this.config.formatTooltipX = t7.tooltipOptions.formatTooltipX, this.config.formatTooltipY = t7.tooltipOptions.formatTooltipY, this.config.valuesOverPoints = t7.valuesOverPoints;
    } }, { key: "prepareData", value: function() {
      return dataPrep(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.data, this.type);
    } }, { key: "prepareFirstData", value: function() {
      return zeroDataPrep(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.data);
    } }, { key: "calc", value: function() {
      var t7 = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
      this.calcXPositions(), t7 || this.calcYAxisParameters(this.getAllYValues(), this.type === "line"), this.makeDataByIndex();
    } }, { key: "calcXPositions", value: function() {
      var t7 = this.state, e2 = this.data.labels;
      t7.datasetLength = e2.length, t7.unitWidth = this.width / t7.datasetLength, t7.xOffset = t7.unitWidth / 2, t7.xAxis = { labels: e2, positions: e2.map(function(e3, n) {
        return floatTwo(t7.xOffset + n * t7.unitWidth);
      }) };
    } }, { key: "calcYAxisParameters", value: function(t7) {
      var e2 = calcChartIntervals(t7, arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "false"), n = this.height / getValueRange(e2), i = getIntervalSize(e2) * n, a = this.height - getZeroIndex(e2) * i;
      this.state.yAxis = { labels: e2, positions: e2.map(function(t8) {
        return a - t8 * n;
      }), scaleMultiplier: n, zeroLine: a }, this.calcDatasetPoints(), this.calcYExtremes(), this.calcYRegions();
    } }, { key: "calcDatasetPoints", value: function() {
      var t7 = this.state, e2 = function(e3) {
        return e3.map(function(e4) {
          return scale(e4, t7.yAxis);
        });
      };
      t7.datasets = this.data.datasets.map(function(t8, n) {
        var i = t8.values, a = t8.cumulativeYs || [];
        return { name: t8.name && t8.name.replace(/<|>|&/g, function(t9) {
          return t9 == "&" ? "&amp;" : t9 == "<" ? "&lt;" : "&gt;";
        }), index: n, chartType: t8.chartType, values: i, yPositions: e2(i), cumulativeYs: a, cumulativeYPos: e2(a) };
      });
    } }, { key: "calcYExtremes", value: function() {
      var t7 = this.state;
      if (this.barOptions.stacked)
        return void (t7.yExtremes = t7.datasets[t7.datasets.length - 1].cumulativeYPos);
      t7.yExtremes = new Array(t7.datasetLength).fill(9999), t7.datasets.map(function(e2) {
        e2.yPositions.map(function(e3, n) {
          e3 < t7.yExtremes[n] && (t7.yExtremes[n] = e3);
        });
      });
    } }, { key: "calcYRegions", value: function() {
      var t7 = this.state;
      this.data.yMarkers && (this.state.yMarkers = this.data.yMarkers.map(function(e2) {
        return e2.position = scale(e2.value, t7.yAxis), e2.options || (e2.options = {}), e2;
      })), this.data.yRegions && (this.state.yRegions = this.data.yRegions.map(function(e2) {
        return e2.startPos = scale(e2.start, t7.yAxis), e2.endPos = scale(e2.end, t7.yAxis), e2.options || (e2.options = {}), e2;
      }));
    } }, { key: "getAllYValues", value: function() {
      var t7, e2 = this, n = "values";
      if (this.barOptions.stacked) {
        n = "cumulativeYs";
        var i = new Array(this.state.datasetLength).fill(0);
        this.data.datasets.map(function(t8, a2) {
          var r = e2.data.datasets[a2].values;
          t8[n] = i = i.map(function(t9, e3) {
            return t9 + r[e3];
          });
        });
      }
      var a = this.data.datasets.map(function(t8) {
        return t8[n];
      });
      return this.data.yMarkers && a.push(this.data.yMarkers.map(function(t8) {
        return t8.value;
      })), this.data.yRegions && this.data.yRegions.map(function(t8) {
        a.push([t8.end, t8.start]);
      }), (t7 = []).concat.apply(t7, _toConsumableArray$5(a));
    } }, { key: "setupComponents", value: function() {
      var t7 = this, e2 = [["yAxis", { mode: this.config.yAxisMode, width: this.width, shortenNumbers: this.config.shortenYAxisNumbers }, function() {
        return this.state.yAxis;
      }.bind(this)], ["xAxis", { mode: this.config.xAxisMode, height: this.height }, function() {
        var t8 = this.state;
        return t8.xAxis.calcLabels = getShortenedLabels(this.width, t8.xAxis.labels, this.config.xIsSeries), t8.xAxis;
      }.bind(this)], ["yRegions", { width: this.width, pos: "right" }, function() {
        return this.state.yRegions;
      }.bind(this)]], n = this.state.datasets.filter(function(t8) {
        return t8.chartType === "bar";
      }), i = this.state.datasets.filter(function(t8) {
        return t8.chartType === "line";
      }), a = n.map(function(e3) {
        var i2 = e3.index;
        return ["barGraph-" + e3.index, { index: i2, color: t7.colors[i2], stacked: t7.barOptions.stacked, valuesOverPoints: t7.config.valuesOverPoints, minHeight: t7.height * MIN_BAR_PERCENT_HEIGHT }, function() {
          var t8 = this.state, e4 = t8.datasets[i2], a2 = this.barOptions.stacked, r2 = this.barOptions.spaceRatio || BAR_CHART_SPACE_RATIO, o2 = t8.unitWidth * (1 - r2), s2 = o2 / (a2 ? 1 : n.length), l = t8.xAxis.positions.map(function(t9) {
            return t9 - o2 / 2;
          });
          a2 || (l = l.map(function(t9) {
            return t9 + s2 * i2;
          }));
          var u = new Array(t8.datasetLength).fill("");
          this.config.valuesOverPoints && (u = a2 && e4.index === t8.datasets.length - 1 ? e4.cumulativeYs : e4.values);
          var c = new Array(t8.datasetLength).fill(0);
          return a2 && (c = e4.yPositions.map(function(t9, n2) {
            return t9 - e4.cumulativeYPos[n2];
          })), { xPositions: l, yPositions: e4.yPositions, offsets: c, labels: u, zeroLine: t8.yAxis.zeroLine, barsWidth: o2, barWidth: s2 };
        }.bind(t7)];
      }), r = i.map(function(e3) {
        var n2 = e3.index;
        return ["lineGraph-" + e3.index, { index: n2, color: t7.colors[n2], svgDefs: t7.svgDefs, heatline: t7.lineOptions.heatline, regionFill: t7.lineOptions.regionFill, spline: t7.lineOptions.spline, hideDots: t7.lineOptions.hideDots, hideLine: t7.lineOptions.hideLine, valuesOverPoints: t7.config.valuesOverPoints }, function() {
          var t8 = this.state, e4 = t8.datasets[n2], i2 = t8.yAxis.positions[0] < t8.yAxis.zeroLine ? t8.yAxis.positions[0] : t8.yAxis.zeroLine;
          return { xPositions: t8.xAxis.positions, yPositions: e4.yPositions, values: e4.values, zeroLine: i2, radius: this.lineOptions.dotSize || LINE_CHART_DOT_SIZE };
        }.bind(t7)];
      }), o = [["yMarkers", { width: this.width, pos: "right" }, function() {
        return this.state.yMarkers;
      }.bind(this)]];
      e2 = e2.concat(a, r, o);
      var s = ["yMarkers", "yRegions"];
      this.dataUnitComponents = [], this.components = new Map(e2.filter(function(e3) {
        return !s.includes(e3[0]) || t7.state[e3[0]];
      }).map(function(e3) {
        var n2 = getComponent.apply(void 0, _toConsumableArray$5(e3));
        return (e3[0].includes("lineGraph") || e3[0].includes("barGraph")) && t7.dataUnitComponents.push(n2), [e3[0], n2];
      }));
    } }, { key: "makeDataByIndex", value: function() {
      var t7 = this;
      this.dataByIndex = {};
      var e2 = this.state, n = this.config.formatTooltipX, i = this.config.formatTooltipY;
      e2.xAxis.labels.map(function(a, r) {
        var o = t7.state.datasets.map(function(e3, n2) {
          var a2 = e3.values[r];
          return { title: e3.name, value: a2, yPos: e3.yPositions[r], color: t7.colors[n2], formatted: i ? i(a2) : a2 };
        });
        t7.dataByIndex[r] = { label: a, formattedLabel: n ? n(a) : a, xPos: e2.xAxis.positions[r], values: o, yExtreme: e2.yExtremes[r] };
      });
    } }, { key: "bindTooltip", value: function() {
      var t7 = this;
      this.container.addEventListener("mousemove", function(e2) {
        var n = t7.measures, i = getOffset(t7.container), a = e2.pageX - i.left - getLeftOffset(n), r = e2.pageY - i.top;
        r < t7.height + getTopOffset(n) && r > getTopOffset(n) ? t7.mapTooltipXPosition(a) : t7.tip.hideTip();
      });
    } }, { key: "mapTooltipXPosition", value: function(t7) {
      var e2 = this.state;
      if (e2.yExtremes) {
        var n = getClosestInArray(t7, e2.xAxis.positions, true);
        if (n >= 0) {
          var i = this.dataByIndex[n];
          this.tip.setValues(i.xPos + this.tip.offset.x, i.yExtreme + this.tip.offset.y, { name: i.formattedLabel, value: "" }, i.values, n), this.tip.showTip();
        }
      }
    } }, { key: "renderLegend", value: function() {
      var t7 = this, e2 = this.data;
      e2.datasets.length > 1 && (this.legendArea.textContent = "", e2.datasets.map(function(e3, n) {
        var i = AXIS_LEGEND_BAR_SIZE, a = legendBar(i * n, "0", i, t7.colors[n], e3.name, t7.config.truncateLegends);
        t7.legendArea.appendChild(a);
      }));
    } }, { key: "makeOverlay", value: function() {
      var t7 = this;
      if (this.init)
        return void (this.init = 0);
      this.overlayGuides && this.overlayGuides.forEach(function(t8) {
        var e2 = t8.overlay;
        e2.parentNode.removeChild(e2);
      }), this.overlayGuides = this.dataUnitComponents.map(function(t8) {
        return { type: t8.unitType, overlay: void 0, units: t8.units };
      }), this.state.currentIndex === void 0 && (this.state.currentIndex = this.state.datasetLength - 1), this.overlayGuides.map(function(e2) {
        var n = e2.units[t7.state.currentIndex];
        e2.overlay = makeOverlay[e2.type](n), t7.drawArea.appendChild(e2.overlay);
      });
    } }, { key: "updateOverlayGuides", value: function() {
      this.overlayGuides && this.overlayGuides.forEach(function(t7) {
        var e2 = t7.overlay;
        e2.parentNode.removeChild(e2);
      });
    } }, { key: "bindOverlay", value: function() {
      var t7 = this;
      this.parent.addEventListener("data-select", function() {
        t7.updateOverlay();
      });
    } }, { key: "bindUnits", value: function() {
      var t7 = this;
      this.dataUnitComponents.map(function(e2) {
        e2.units.map(function(e3) {
          e3.addEventListener("click", function() {
            var n = e3.getAttribute("data-point-index");
            t7.setCurrentDataPoint(n);
          });
        });
      }), this.tip.container.addEventListener("click", function() {
        var e2 = t7.tip.container.getAttribute("data-point-index");
        t7.setCurrentDataPoint(e2);
      });
    } }, { key: "updateOverlay", value: function() {
      var t7 = this;
      this.overlayGuides.map(function(e2) {
        var n = e2.units[t7.state.currentIndex];
        updateOverlay[e2.type](n, e2.overlay);
      });
    } }, { key: "onLeftArrow", value: function() {
      this.setCurrentDataPoint(this.state.currentIndex - 1);
    } }, { key: "onRightArrow", value: function() {
      this.setCurrentDataPoint(this.state.currentIndex + 1);
    } }, { key: "getDataPoint", value: function() {
      var t7 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.state.currentIndex, e2 = this.state;
      return { index: t7, label: e2.xAxis.labels[t7], values: e2.datasets.map(function(e3) {
        return e3.values[t7];
      }) };
    } }, { key: "setCurrentDataPoint", value: function(t7) {
      var e2 = this.state;
      (t7 = parseInt(t7)) < 0 && (t7 = 0), t7 >= e2.xAxis.labels.length && (t7 = e2.xAxis.labels.length - 1), t7 !== e2.currentIndex && (e2.currentIndex = t7, fire(this.parent, "data-select", this.getDataPoint()));
    } }, { key: "addDataPoint", value: function(t7, n) {
      var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.state.datasetLength;
      _get$3(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "addDataPoint", this).call(this, t7, n, i), this.data.labels.splice(i, 0, t7), this.data.datasets.map(function(t8, e2) {
        t8.values.splice(i, 0, n[e2]);
      }), this.update(this.data);
    } }, { key: "removeDataPoint", value: function() {
      var t7 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.state.datasetLength - 1;
      this.data.labels.length <= 1 || (_get$3(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "removeDataPoint", this).call(this, t7), this.data.labels.splice(t7, 1), this.data.datasets.map(function(e2) {
        e2.values.splice(t7, 1);
      }), this.update(this.data));
    } }, { key: "updateDataset", value: function(t7) {
      var e2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      this.data.datasets[e2].values = t7, this.update(this.data);
    } }, { key: "updateDatasets", value: function(t7) {
      this.data.datasets.map(function(e2, n) {
        t7[n] && (e2.values = t7[n]);
      }), this.update(this.data);
    } }]), e;
  }(BaseChart);
  var _createClass$8 = function() {
    function t6(t7, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || false, i.configurable = true, "value" in i && (i.writable = true), Object.defineProperty(t7, i.key, i);
      }
    }
    return function(e, n, i) {
      return n && t6(e.prototype, n), i && t6(e, i), e;
    };
  }();
  var _get$4 = function t5(e, n, i) {
    e === null && (e = Function.prototype);
    var a = Object.getOwnPropertyDescriptor(e, n);
    if (a === void 0) {
      var r = Object.getPrototypeOf(e);
      return r === null ? void 0 : t5(r, n, i);
    }
    if ("value" in a)
      return a.value;
    var o = a.get;
    if (o !== void 0)
      return o.call(i);
  };
  var DonutChart = function(t6) {
    function e(t7, n) {
      _classCallCheck$9(this, e);
      var i = _possibleConstructorReturn$5(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t7, n));
      return i.type = "donut", i.initTimeout = 0, i.init = 1, i.setup(), i;
    }
    return _inherits$5(e, t6), _createClass$8(e, [{ key: "configure", value: function(t7) {
      _get$4(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "configure", this).call(this, t7), this.mouseMove = this.mouseMove.bind(this), this.mouseLeave = this.mouseLeave.bind(this), this.hoverRadio = t7.hoverRadio || 0.1, this.config.startAngle = t7.startAngle || 0, this.clockWise = t7.clockWise || false, this.strokeWidth = t7.strokeWidth || 30;
    } }, { key: "calc", value: function() {
      var t7 = this;
      _get$4(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "calc", this).call(this);
      var n = this.state;
      this.radius = this.height > this.width ? this.center.x - this.strokeWidth / 2 : this.center.y - this.strokeWidth / 2;
      var i = this.radius, a = this.clockWise, r = n.slicesProperties || [];
      n.sliceStrings = [], n.slicesProperties = [];
      var o = 180 - this.config.startAngle;
      n.sliceTotals.map(function(e2, s) {
        var l = o, u = e2 / n.grandTotal * FULL_ANGLE, c = u > 180 ? 1 : 0, h = a ? -u : u, d = o += h, f = getPositionByAngle(l, i), p = getPositionByAngle(d, i), v = t7.init && r[s], g = void 0, y = void 0;
        t7.init ? (g = v ? v.startPosition : f, y = v ? v.endPosition : f) : (g = f, y = p);
        var m = u === 360 ? makeStrokeCircleStr(g, y, t7.center, t7.radius, t7.clockWise, c) : makeArcStrokePathStr(g, y, t7.center, t7.radius, t7.clockWise, c);
        n.sliceStrings.push(m), n.slicesProperties.push({ startPosition: f, endPosition: p, value: e2, total: n.grandTotal, startAngle: l, endAngle: d, angle: h });
      }), this.init = 0;
    } }, { key: "setupComponents", value: function() {
      var t7 = this.state, e2 = [["donutSlices", {}, function() {
        return { sliceStrings: t7.sliceStrings, colors: this.colors, strokeWidth: this.strokeWidth };
      }.bind(this)]];
      this.components = new Map(e2.map(function(t8) {
        var e3 = getComponent.apply(void 0, _toConsumableArray$7(t8));
        return [t8[0], e3];
      }));
    } }, { key: "calTranslateByAngle", value: function(t7) {
      var e2 = this.radius, n = this.hoverRadio, i = getPositionByAngle(t7.startAngle + t7.angle / 2, e2);
      return "translate3d(" + i.x * n + "px," + i.y * n + "px,0)";
    } }, { key: "hoverSlice", value: function(t7, e2, n, i) {
      if (t7) {
        var a = this.colors[e2];
        if (n) {
          transform(t7, this.calTranslateByAngle(this.state.slicesProperties[e2])), t7.style.stroke = lightenDarkenColor(a, 50);
          var r = getOffset(this.svg), o = i.pageX - r.left + 10, s = i.pageY - r.top - 10, l = (this.formatted_labels && this.formatted_labels.length > 0 ? this.formatted_labels[e2] : this.state.labels[e2]) + ": ", u = (100 * this.state.sliceTotals[e2] / this.state.grandTotal).toFixed(1);
          this.tip.setValues(o, s, { name: l, value: u + "%" }), this.tip.showTip();
        } else
          transform(t7, "translate3d(0,0,0)"), this.tip.hideTip(), t7.style.stroke = a;
      }
    } }, { key: "bindTooltip", value: function() {
      this.container.addEventListener("mousemove", this.mouseMove), this.container.addEventListener("mouseleave", this.mouseLeave);
    } }, { key: "mouseMove", value: function(t7) {
      var e2 = t7.target, n = this.components.get("donutSlices").store, i = this.curActiveSliceIndex, a = this.curActiveSlice;
      if (n.includes(e2)) {
        var r = n.indexOf(e2);
        this.hoverSlice(a, i, false), this.curActiveSlice = e2, this.curActiveSliceIndex = r, this.hoverSlice(e2, r, true, t7);
      } else
        this.mouseLeave();
    } }, { key: "mouseLeave", value: function() {
      this.hoverSlice(this.curActiveSlice, this.curActiveSliceIndex, false);
    } }]), e;
  }(AggregationChart);
})();
//# sourceMappingURL=frappe-charts.bundle.SFA4VGXH.js.map
