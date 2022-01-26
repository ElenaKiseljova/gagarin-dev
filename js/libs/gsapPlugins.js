/*!
 * SplitText 3.8.0
 * https://greensock.com
 *
 * @license Copyright 2021, GreenSock. All rights reserved.
 * This plugin is a membership benefit of Club GreenSock and is only authorized for use in sites/apps/products developed by individuals/companies with an active Club GreenSock membership. See https://greensock.com/club
 * @author: Jack Doyle, jack@greensock.com
 */

!(function (D, u) {
  "object" == typeof exports && "undefined" != typeof module
    ? u(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], u)
    : u(((D = D || self).window = D.window || {}));
})(this, function (D) {
  "use strict";
  var _ =
    /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
  function k(D) {
    return e.getComputedStyle(D);
  }
  function n(D, u) {
    var e;
    return i(D)
      ? D
      : "string" == (e = typeof D) && !u && D
      ? E.call(X.querySelectorAll(D), 0)
      : D && "object" == e && "length" in D
      ? E.call(D, 0)
      : D
      ? [D]
      : [];
  }
  function o(D) {
    return "absolute" === D.position || !0 === D.absolute;
  }
  function p(D, u) {
    for (var e, t = u.length; -1 < --t; )
      if (((e = u[t]), D.substr(0, e.length) === e)) return e.length;
  }
  function r(D, u) {
    void 0 === D && (D = "");
    var e = ~D.indexOf("++"),
      t = 1;
    return (
      e && (D = D.split("++").join("")),
      function () {
        return (
          "<" +
          u +
          " style='position:relative;display:inline-block;'" +
          (D ? " class='" + D + (e ? t++ : "") + "'>" : ">")
        );
      }
    );
  }
  function s(D, u, e) {
    var t = D.nodeType;
    if (1 === t || 9 === t || 11 === t)
      for (D = D.firstChild; D; D = D.nextSibling) s(D, u, e);
    else (3 !== t && 4 !== t) || (D.nodeValue = D.nodeValue.split(u).join(e));
  }
  function t(D, u) {
    for (var e = u.length; -1 < --e; ) D.push(u[e]);
  }
  function u(D, u, e) {
    for (var t; D && D !== u; ) {
      if ((t = D._next || D.nextSibling)) return t.textContent.charAt(0) === e;
      D = D.parentNode || D._parent;
    }
  }
  function v(D) {
    var u,
      e,
      t = n(D.childNodes),
      F = t.length;
    for (u = 0; u < F; u++)
      (e = t[u])._isSplit
        ? v(e)
        : u && e.previousSibling && 3 === e.previousSibling.nodeType
        ? ((e.previousSibling.nodeValue +=
            3 === e.nodeType ? e.nodeValue : e.firstChild.nodeValue),
          D.removeChild(e))
        : 3 !== e.nodeType &&
          (D.insertBefore(e.firstChild, e), D.removeChild(e));
  }
  function w(D, u) {
    return parseFloat(u[D]) || 0;
  }
  function x(D, e, F, C, i, n, E) {
    var r,
      l,
      p,
      d,
      a,
      h,
      B,
      f,
      A,
      c,
      x,
      g,
      y = k(D),
      _ = w("paddingLeft", y),
      b = -999,
      S = w("borderBottomWidth", y) + w("borderTopWidth", y),
      T = w("borderLeftWidth", y) + w("borderRightWidth", y),
      m = w("paddingTop", y) + w("paddingBottom", y),
      N = w("paddingLeft", y) + w("paddingRight", y),
      L = w("fontSize", y) * (e.lineThreshold || 0.2),
      W = y.textAlign,
      H = [],
      O = [],
      V = [],
      j = e.wordDelimiter || " ",
      M = e.tag ? e.tag : e.span ? "span" : "div",
      R = e.type || e.split || "chars,words,lines",
      z = i && ~R.indexOf("lines") ? [] : null,
      P = ~R.indexOf("words"),
      q = ~R.indexOf("chars"),
      G = o(e),
      I = e.linesClass,
      J = ~(I || "").indexOf("++"),
      K = [],
      Q = "flex" === y.display,
      U = D.style.display;
    for (
      J && (I = I.split("++").join("")),
        Q && (D.style.display = "block"),
        p = (l = D.getElementsByTagName("*")).length,
        a = [],
        r = 0;
      r < p;
      r++
    )
      a[r] = l[r];
    if (z || G)
      for (r = 0; r < p; r++)
        ((h = (d = a[r]).parentNode === D) || G || (q && !P)) &&
          ((g = d.offsetTop),
          z &&
            h &&
            Math.abs(g - b) > L &&
            ("BR" !== d.nodeName || 0 === r) &&
            ((B = []), z.push(B), (b = g)),
          G &&
            ((d._x = d.offsetLeft),
            (d._y = g),
            (d._w = d.offsetWidth),
            (d._h = d.offsetHeight)),
          z &&
            (((d._isSplit && h) ||
              (!q && h) ||
              (P && h) ||
              (!P &&
                d.parentNode.parentNode === D &&
                !d.parentNode._isSplit)) &&
              (B.push(d), (d._x -= _), u(d, D, j) && (d._wordEnd = !0)),
            "BR" === d.nodeName &&
              ((d.nextSibling && "BR" === d.nextSibling.nodeName) || 0 === r) &&
              z.push([])));
    for (r = 0; r < p; r++)
      if (((h = (d = a[r]).parentNode === D), "BR" !== d.nodeName))
        if (
          (G &&
            ((A = d.style),
            P || h || ((d._x += d.parentNode._x), (d._y += d.parentNode._y)),
            (A.left = d._x + "px"),
            (A.top = d._y + "px"),
            (A.position = "absolute"),
            (A.display = "block"),
            (A.width = d._w + 1 + "px"),
            (A.height = d._h + "px")),
          !P && q)
        )
          if (d._isSplit)
            for (
              d._next = l = d.nextSibling, d.parentNode.appendChild(d);
              l && 3 === l.nodeType && " " === l.textContent;

            )
              (d._next = l.nextSibling),
                d.parentNode.appendChild(l),
                (l = l.nextSibling);
          else
            d.parentNode._isSplit
              ? ((d._parent = d.parentNode),
                !d.previousSibling &&
                  d.firstChild &&
                  (d.firstChild._isFirst = !0),
                d.nextSibling &&
                  " " === d.nextSibling.textContent &&
                  !d.nextSibling.nextSibling &&
                  K.push(d.nextSibling),
                (d._next =
                  d.nextSibling && d.nextSibling._isFirst
                    ? null
                    : d.nextSibling),
                d.parentNode.removeChild(d),
                a.splice(r--, 1),
                p--)
              : h ||
                ((g = !d.nextSibling && u(d.parentNode, D, j)),
                d.parentNode._parent && d.parentNode._parent.appendChild(d),
                g && d.parentNode.appendChild(X.createTextNode(" ")),
                "span" === M && (d.style.display = "inline"),
                H.push(d));
        else
          d.parentNode._isSplit && !d._isSplit && "" !== d.innerHTML
            ? O.push(d)
            : q &&
              !d._isSplit &&
              ("span" === M && (d.style.display = "inline"), H.push(d));
      else
        z || G
          ? (d.parentNode && d.parentNode.removeChild(d), a.splice(r--, 1), p--)
          : P || D.appendChild(d);
    for (r = K.length; -1 < --r; ) K[r].parentNode.removeChild(K[r]);
    if (z) {
      for (
        G &&
          ((c = X.createElement(M)),
          D.appendChild(c),
          (x = c.offsetWidth + "px"),
          (g = c.offsetParent === D ? 0 : D.offsetLeft),
          D.removeChild(c)),
          A = D.style.cssText,
          D.style.cssText = "display:none;";
        D.firstChild;

      )
        D.removeChild(D.firstChild);
      for (f = " " === j && (!G || (!P && !q)), r = 0; r < z.length; r++) {
        for (
          B = z[r],
            (c = X.createElement(M)).style.cssText =
              "display:block;text-align:" +
              W +
              ";position:" +
              (G ? "absolute;" : "relative;"),
            I && (c.className = I + (J ? r + 1 : "")),
            V.push(c),
            p = B.length,
            l = 0;
          l < p;
          l++
        )
          "BR" !== B[l].nodeName &&
            ((d = B[l]),
            c.appendChild(d),
            f && d._wordEnd && c.appendChild(X.createTextNode(" ")),
            G &&
              (0 === l &&
                ((c.style.top = d._y + "px"), (c.style.left = _ + g + "px")),
              (d.style.top = "0px"),
              g && (d.style.left = d._x - g + "px")));
        0 === p
          ? (c.innerHTML = "&nbsp;")
          : P || q || (v(c), s(c, String.fromCharCode(160), " ")),
          G && ((c.style.width = x), (c.style.height = d._h + "px")),
          D.appendChild(c);
      }
      D.style.cssText = A;
    }
    G &&
      (E > D.clientHeight &&
        ((D.style.height = E - m + "px"),
        D.clientHeight < E && (D.style.height = E + S + "px")),
      n > D.clientWidth &&
        ((D.style.width = n - N + "px"),
        D.clientWidth < n && (D.style.width = n + T + "px"))),
      Q && (U ? (D.style.display = U) : D.style.removeProperty("display")),
      t(F, H),
      P && t(C, O),
      t(i, V);
  }
  function y(D, u, e, t) {
    var F,
      C,
      i,
      n,
      E,
      r,
      l,
      d,
      a = u.tag ? u.tag : u.span ? "span" : "div",
      h = ~(u.type || u.split || "chars,words,lines").indexOf("chars"),
      B = o(u),
      f = u.wordDelimiter || " ",
      A = " " !== f ? "" : B ? "&#173; " : " ",
      c = "</" + a + ">",
      x = 1,
      g = u.specialChars
        ? "function" == typeof u.specialChars
          ? u.specialChars
          : p
        : null,
      y = X.createElement("div"),
      v = D.parentNode;
    for (
      v.insertBefore(y, D),
        y.textContent = D.nodeValue,
        v.removeChild(D),
        l =
          -1 !==
          (F = (function getText(D) {
            var u = D.nodeType,
              e = "";
            if (1 === u || 9 === u || 11 === u) {
              if ("string" == typeof D.textContent) return D.textContent;
              for (D = D.firstChild; D; D = D.nextSibling) e += getText(D);
            } else if (3 === u || 4 === u) return D.nodeValue;
            return e;
          })((D = y))).indexOf("<"),
        !1 !== u.reduceWhiteSpace && (F = F.replace(S, " ").replace(b, "")),
        l && (F = F.split("<").join("{{LT}}")),
        E = F.length,
        C = (" " === F.charAt(0) ? A : "") + e(),
        i = 0;
      i < E;
      i++
    )
      if (((r = F.charAt(i)), g && (d = g(F.substr(i), u.specialChars))))
        (r = F.substr(i, d || 1)),
          (C += h && " " !== r ? t() + r + "</" + a + ">" : r),
          (i += d - 1);
      else if (r === f && F.charAt(i - 1) !== f && i) {
        for (C += x ? c : "", x = 0; F.charAt(i + 1) === f; ) (C += A), i++;
        i === E - 1
          ? (C += A)
          : ")" !== F.charAt(i + 1) && ((C += A + e()), (x = 1));
      } else
        "{" === r && "{{LT}}" === F.substr(i, 6)
          ? ((C += h ? t() + "{{LT}}</" + a + ">" : "{{LT}}"), (i += 5))
          : (55296 <= r.charCodeAt(0) && r.charCodeAt(0) <= 56319) ||
            (65024 <= F.charCodeAt(i + 1) && F.charCodeAt(i + 1) <= 65039)
          ? ((n = ((F.substr(i, 12).split(_) || [])[1] || "").length || 2),
            (C +=
              h && " " !== r
                ? t() + F.substr(i, n) + "</" + a + ">"
                : F.substr(i, n)),
            (i += n - 1))
          : (C += h && " " !== r ? t() + r + "</" + a + ">" : r);
    (D.outerHTML = C + (x ? c : "")), l && s(v, "{{LT}}", "<");
  }
  function z(D, u, e, t) {
    var F,
      C,
      i = n(D.childNodes),
      E = i.length,
      s = o(u);
    if (3 !== D.nodeType || 1 < E) {
      for (u.absolute = !1, F = 0; F < E; F++)
        ((C = i[F])._next = C._isFirst = C._parent = C._wordEnd = null),
          (3 === C.nodeType && !/\S+/.test(C.nodeValue)) ||
            (s &&
              3 !== C.nodeType &&
              "inline" === k(C).display &&
              ((C.style.display = "inline-block"),
              (C.style.position = "relative")),
            (C._isSplit = !0),
            z(C, u, e, t));
      return (u.absolute = s), void (D._isSplit = !0);
    }
    y(D, u, e, t);
  }
  var X,
    e,
    F,
    C,
    b = /(?:\r|\n|\t\t)/g,
    S = /(?:\s\s+)/g,
    i = Array.isArray,
    E = [].slice,
    l =
      (((C = SplitText.prototype).split = function split(D) {
        this.isSplit && this.revert(),
          (this.vars = D = D || this.vars),
          (this._originals.length =
            this.chars.length =
            this.words.length =
            this.lines.length =
              0);
        for (
          var u,
            e,
            t,
            F = this.elements.length,
            C = D.tag ? D.tag : D.span ? "span" : "div",
            i = r(D.wordsClass, C),
            n = r(D.charsClass, C);
          -1 < --F;

        )
          (t = this.elements[F]),
            (this._originals[F] = t.innerHTML),
            (u = t.clientHeight),
            (e = t.clientWidth),
            z(t, D, i, n),
            x(t, D, this.chars, this.words, this.lines, e, u);
        return (
          this.chars.reverse(),
          this.words.reverse(),
          this.lines.reverse(),
          (this.isSplit = !0),
          this
        );
      }),
      (C.revert = function revert() {
        var e = this._originals;
        if (!e) throw "revert() call wasn't scoped properly.";
        return (
          this.elements.forEach(function (D, u) {
            return (D.innerHTML = e[u]);
          }),
          (this.chars = []),
          (this.words = []),
          (this.lines = []),
          (this.isSplit = !1),
          this
        );
      }),
      (SplitText.create = function create(D, u) {
        return new SplitText(D, u);
      }),
      SplitText);
  function SplitText(D, u) {
    F ||
      (function _initCore() {
        (X = document), (e = window), (F = 1);
      })(),
      (this.elements = n(D)),
      (this.chars = []),
      (this.words = []),
      (this.lines = []),
      (this._originals = []),
      (this.vars = u || {}),
      this.split(u);
  }
  (l.version = "3.8.0"), (D.SplitText = l), (D.default = l);
  if (typeof window === "undefined" || window !== D) {
    Object.defineProperty(D, "__esModule", { value: !0 });
  } else {
    delete D.default;
  }
});

(function (global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? factory(exports)
    : typeof define === "function" && define.amd
    ? define(["exports"], factory)
    : ((global = global || self),
      factory((global.window = global.window || {})));
})(this, function (exports) {
  "use strict";

  /*!
   * DrawSVGPlugin 3.8.0
   * https://greensock.com
   *
   * @license Copyright 2008-2021, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */
  var gsap,
    _toArray,
    _win,
    _isEdge,
    _coreInitted,
    _windowExists = function _windowExists() {
      return typeof window !== "undefined";
    },
    _getGSAP = function _getGSAP() {
      return (
        gsap ||
        (_windowExists() && (gsap = window.gsap) && gsap.registerPlugin && gsap)
      );
    },
    _numExp = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
    _types = {
      rect: ["width", "height"],
      circle: ["r", "r"],
      ellipse: ["rx", "ry"],
      line: ["x2", "y2"],
    },
    _round = function _round(value) {
      return Math.round(value * 10000) / 10000;
    },
    _parseNum = function _parseNum(value) {
      return parseFloat(value) || 0;
    },
    _parseSingleVal = function _parseSingleVal(value, length) {
      var num = _parseNum(value);

      return ~value.indexOf("%") ? (num / 100) * length : num;
    },
    _getAttributeAsNumber = function _getAttributeAsNumber(target, attr) {
      return _parseNum(target.getAttribute(attr));
    },
    _sqrt = Math.sqrt,
    _getDistance = function _getDistance(x1, y1, x2, y2, scaleX, scaleY) {
      return _sqrt(
        Math.pow((_parseNum(x2) - _parseNum(x1)) * scaleX, 2) +
          Math.pow((_parseNum(y2) - _parseNum(y1)) * scaleY, 2)
      );
    },
    _warn = function _warn(message) {
      return console.warn(message);
    },
    _hasNonScalingStroke = function _hasNonScalingStroke(target) {
      return target.getAttribute("vector-effect") === "non-scaling-stroke";
    },
    _bonusValidated = 1,
    _parse = function _parse(value, length, defaultStart) {
      var i = value.indexOf(" "),
        s,
        e;

      if (i < 0) {
        s = defaultStart !== undefined ? defaultStart + "" : value;
        e = value;
      } else {
        s = value.substr(0, i);
        e = value.substr(i + 1);
      }

      s = _parseSingleVal(s, length);
      e = _parseSingleVal(e, length);
      return s > e ? [e, s] : [s, e];
    },
    _getLength = function _getLength(target) {
      target = _toArray(target)[0];

      if (!target) {
        return 0;
      }

      var type = target.tagName.toLowerCase(),
        style = target.style,
        scaleX = 1,
        scaleY = 1,
        length,
        bbox,
        points,
        prevPoint,
        i,
        rx,
        ry;

      if (_hasNonScalingStroke(target)) {
        scaleY = target.getScreenCTM();
        scaleX = _sqrt(scaleY.a * scaleY.a + scaleY.b * scaleY.b);
        scaleY = _sqrt(scaleY.d * scaleY.d + scaleY.c * scaleY.c);
      }

      try {
        bbox = target.getBBox();
      } catch (e) {
        _warn(
          "Some browsers won't measure invisible elements (like display:none or masks inside defs)."
        );
      }

      var _ref = bbox || {
          x: 0,
          y: 0,
          width: 0,
          height: 0,
        },
        x = _ref.x,
        y = _ref.y,
        width = _ref.width,
        height = _ref.height;

      if ((!bbox || (!width && !height)) && _types[type]) {
        width = _getAttributeAsNumber(target, _types[type][0]);
        height = _getAttributeAsNumber(target, _types[type][1]);

        if (type !== "rect" && type !== "line") {
          width *= 2;
          height *= 2;
        }

        if (type === "line") {
          x = _getAttributeAsNumber(target, "x1");
          y = _getAttributeAsNumber(target, "y1");
          width = Math.abs(width - x);
          height = Math.abs(height - y);
        }
      }

      if (type === "path") {
        prevPoint = style.strokeDasharray;
        style.strokeDasharray = "none";
        length = target.getTotalLength() || 0;
        scaleX !== scaleY &&
          _warn(
            "Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."
          );
        length *= (scaleX + scaleY) / 2;
        style.strokeDasharray = prevPoint;
      } else if (type === "rect") {
        length = width * 2 * scaleX + height * 2 * scaleY;
      } else if (type === "line") {
        length = _getDistance(x, y, x + width, y + height, scaleX, scaleY);
      } else if (type === "polyline" || type === "polygon") {
        points = target.getAttribute("points").match(_numExp) || [];
        type === "polygon" && points.push(points[0], points[1]);
        length = 0;

        for (i = 2; i < points.length; i += 2) {
          length +=
            _getDistance(
              points[i - 2],
              points[i - 1],
              points[i],
              points[i + 1],
              scaleX,
              scaleY
            ) || 0;
        }
      } else if (type === "circle" || type === "ellipse") {
        rx = (width / 2) * scaleX;
        ry = (height / 2) * scaleY;
        length =
          Math.PI * (3 * (rx + ry) - _sqrt((3 * rx + ry) * (rx + 3 * ry)));
      }

      return length || 0;
    },
    _getPosition = function _getPosition(target, length) {
      target = _toArray(target)[0];

      if (!target) {
        return [0, 0];
      }

      length || (length = _getLength(target) + 1);

      var cs = _win.getComputedStyle(target),
        dash = cs.strokeDasharray || "",
        offset = _parseNum(cs.strokeDashoffset),
        i = dash.indexOf(",");

      i < 0 && (i = dash.indexOf(" "));
      dash = i < 0 ? length : _parseNum(dash.substr(0, i));
      dash > length && (dash = length);
      return [-offset || 0, dash - offset || 0];
    },
    _initCore = function _initCore() {
      if (_windowExists()) {
        _win = window;
        _coreInitted = gsap = _getGSAP();
        _toArray = gsap.utils.toArray;
        _isEdge =
          ((_win.navigator || {}).userAgent || "").indexOf("Edge") !== -1;
      }
    };

  var DrawSVGPlugin = {
    version: "3.8.0",
    name: "drawSVG",
    register: function register(core) {
      gsap = core;

      _initCore();
    },
    init: function init(target, value, tween, index, targets) {
      if (!target.getBBox) {
        return false;
      }

      _coreInitted || _initCore();

      var length = _getLength(target),
        start,
        end,
        cs;

      this._style = target.style;
      this._target = target;

      if (value + "" === "true") {
        value = "0 100%";
      } else if (!value) {
        value = "0 0";
      } else if ((value + "").indexOf(" ") === -1) {
        value = "0 " + value;
      }

      start = _getPosition(target, length);
      end = _parse(value, length, start[0]);
      this._length = _round(length);
      this._dash = _round(start[1] - start[0]);
      this._offset = _round(-start[0]);
      this._dashPT = this.add(
        this,
        "_dash",
        this._dash,
        _round(end[1] - end[0])
      );
      this._offsetPT = this.add(this, "_offset", this._offset, _round(-end[0]));

      if (_isEdge) {
        cs = _win.getComputedStyle(target);

        if (cs.strokeLinecap !== cs.strokeLinejoin) {
          end = _parseNum(cs.strokeMiterlimit);
          this.add(target.style, "strokeMiterlimit", end, end + 0.01);
        }
      }

      this._live =
        _hasNonScalingStroke(target) || ~(value + "").indexOf("live");
      this._nowrap = ~(value + "").indexOf("nowrap");

      this._props.push("drawSVG");

      return _bonusValidated;
    },
    render: function render(ratio, data) {
      var pt = data._pt,
        style = data._style,
        length,
        lengthRatio,
        dash,
        offset;

      if (pt) {
        if (data._live) {
          length = _getLength(data._target);

          if (length !== data._length) {
            lengthRatio = length / data._length;
            data._length = length;

            if (data._offsetPT) {
              data._offsetPT.s *= lengthRatio;
              data._offsetPT.c *= lengthRatio;
            }

            if (data._dashPT) {
              data._dashPT.s *= lengthRatio;
              data._dashPT.c *= lengthRatio;
            } else {
              data._dash *= lengthRatio;
            }
          }
        }

        while (pt) {
          pt.r(ratio, pt.d);
          pt = pt._next;
        }

        dash = data._dash || (ratio && ratio !== 1 && 0.0001) || 0;
        length = data._length - dash + 0.1;
        offset = data._offset;
        dash &&
          offset &&
          dash + Math.abs(offset % data._length) > data._length - 0.2 &&
          (offset += offset < 0 ? 0.1 : -0.1) &&
          (length += 0.1);
        style.strokeDashoffset = dash ? offset : offset + 0.001;
        style.strokeDasharray =
          length < 0.2
            ? "none"
            : dash
            ? dash + "px," + (data._nowrap ? 999999 : length) + "px"
            : "0px, 999999px";
      }
    },
    getLength: _getLength,
    getPosition: _getPosition,
  };
  _getGSAP() && gsap.registerPlugin(DrawSVGPlugin);

  exports.DrawSVGPlugin = DrawSVGPlugin;
  exports.default = DrawSVGPlugin;

  Object.defineProperty(exports, "__esModule", { value: true });
});

/*!
 * ScrollTrigger 3.9.1
 * https://greensock.com
 *
 * @license Copyright 2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!(function (e, r) {
  "object" == typeof exports && "undefined" != typeof module
    ? r(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], r)
    : r(((e = e || self).window = e.window || {}));
})(this, function (e) {
  "use strict";
  function H(e) {
    return e;
  }
  function I(e) {
    return (
      Ve(e)[0] ||
      (rr(e) && !1 !== Re.config().nullTargetWarn
        ? console.warn("Element not found:", e)
        : null)
    );
  }
  function J(e) {
    return Math.round(1e5 * e) / 1e5 || 0;
  }
  function K() {
    return "undefined" != typeof window;
  }
  function L() {
    return Re || (K() && (Re = window.gsap) && Re.registerPlugin && Re);
  }
  function M(e) {
    return !!~i.indexOf(e);
  }
  function N(e, r) {
    return ~Ue.indexOf(e) && Ue[Ue.indexOf(e) + 1][r];
  }
  function O(r, e) {
    var t = e.s,
      n = e.sc,
      i = g.indexOf(r),
      o = n === gr.sc ? 1 : 2;
    return (
      ~i || (i = g.push(r) - 1),
      g[i + o] ||
        (g[i + o] =
          N(r, t) ||
          (M(r)
            ? n
            : function (e) {
                return arguments.length ? (r[t] = e) : r[t];
              }))
    );
  }
  function P(e) {
    return (
      N(e, "getBoundingClientRect") ||
      (M(e)
        ? function () {
            return (wr.width = ze.innerWidth), (wr.height = ze.innerHeight), wr;
          }
        : function () {
            return hr(e);
          })
    );
  }
  function S(e, r) {
    var t = r.s,
      n = r.d2,
      i = r.d,
      o = r.a;
    return (t = "scroll" + n) && (o = N(e, t))
      ? o() - P(e)()[i]
      : M(e)
      ? (Fe[t] || We[t]) -
        (ze["inner" + n] || We["client" + n] || Fe["client" + n])
      : e[t] - e["offset" + n];
  }
  function T(e, r) {
    for (var t = 0; t < f.length; t += 3)
      (r && !~r.indexOf(f[t + 1])) || e(f[t], f[t + 1], f[t + 2]);
  }
  function V(e) {
    return "function" == typeof e;
  }
  function W(e) {
    return "number" == typeof e;
  }
  function X(e) {
    return "object" == typeof e;
  }
  function Y(e) {
    return V(e) && e();
  }
  function Z(t, n) {
    return function () {
      var e = Y(t),
        r = Y(n);
      return function () {
        Y(e), Y(r);
      };
    };
  }
  function $(e, r, t) {
    return e && e.progress(r ? 0 : 1) && t && e.pause();
  }
  function _(e, r) {
    if (e.enabled) {
      var t = r(e);
      t && t.totalTime && (e.callbackAnimation = t);
    }
  }
  function ua(e) {
    return ze.getComputedStyle(e);
  }
  function wa(e, r) {
    for (var t in r) t in e || (e[t] = r[t]);
    return e;
  }
  function ya(e, r) {
    var t = r.d2;
    return e["offset" + t] || e["client" + t] || 0;
  }
  function za(e) {
    var r,
      t = [],
      n = e.labels,
      i = e.duration();
    for (r in n) t.push(n[r] / i);
    return t;
  }
  function Ba(i) {
    var o = Re.utils.snap(i),
      a =
        Array.isArray(i) &&
        i.slice(0).sort(function (e, r) {
          return e - r;
        });
    return a
      ? function (e, r, t) {
          var n;
          if ((void 0 === t && (t = 0.001), !r)) return o(e);
          if (0 < r) {
            for (e -= t, n = 0; n < a.length; n++) if (a[n] >= e) return a[n];
            return a[n - 1];
          }
          for (n = a.length, e += t; n--; ) if (a[n] <= e) return a[n];
          return a[0];
        }
      : function (e, r, t) {
          void 0 === t && (t = 0.001);
          var n = o(e);
          return !r || Math.abs(n - e) < t || n - e < 0 == r < 0
            ? n
            : o(r < 0 ? e - i : e + i);
        };
  }
  function Da(r, t, e, n) {
    return e.split(",").forEach(function (e) {
      return r(t, e, n);
    });
  }
  function Ea(e, r, t) {
    return e.addEventListener(r, t, { passive: !0 });
  }
  function Fa(e, r, t) {
    return e.removeEventListener(r, t);
  }
  function Ja(e, r) {
    if (rr(e)) {
      var t = e.indexOf("="),
        n = ~t ? (e.charAt(t - 1) + 1) * parseFloat(e.substr(t + 1)) : 0;
      ~t && (e.indexOf("%") > t && (n *= r / 100), (e = e.substr(0, t - 1))),
        (e =
          n +
          (e in b
            ? b[e] * r
            : ~e.indexOf("%")
            ? (parseFloat(e) * r) / 100
            : parseFloat(e) || 0));
    }
    return e;
  }
  function Ka(e, r, t, n, i, o, a, s) {
    var l = i.startColor,
      c = i.endColor,
      u = i.fontSize,
      f = i.indent,
      p = i.fontWeight,
      d = Le.createElement("div"),
      g = M(t) || "fixed" === N(t, "pinType"),
      h = -1 !== e.indexOf("scroller"),
      v = g ? Fe : t,
      m = -1 !== e.indexOf("start"),
      b = m ? l : c,
      x =
        "border-color:" +
        b +
        ";font-size:" +
        u +
        ";color:" +
        b +
        ";font-weight:" +
        p +
        ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return (
      (x += "position:" + ((h || s) && g ? "fixed;" : "absolute;")),
      (!h && !s && g) ||
        (x += (n === gr ? y : w) + ":" + (o + parseFloat(f)) + "px;"),
      a &&
        (x +=
          "box-sizing:border-box;text-align:left;width:" +
          a.offsetWidth +
          "px;"),
      (d._isStart = m),
      d.setAttribute("class", "gsap-marker-" + e + (r ? " marker-" + r : "")),
      (d.style.cssText = x),
      (d.innerText = r || 0 === r ? e + "-" + r : e),
      v.children[0] ? v.insertBefore(d, v.children[0]) : v.appendChild(d),
      (d._offset = d["offset" + n.op.d2]),
      E(d, 0, n, m),
      d
    );
  }
  function Oa() {
    return 34 < Ze() - Ge && j();
  }
  function Pa() {
    j(), Ge || A("scrollStart"), (Ge = Ze());
  }
  function Qa() {
    return !Xe && !t && !Le.fullscreenElement && a.restart(!0);
  }
  function Wa(e) {
    var r,
      t = Re.ticker.frame,
      n = [],
      i = 0;
    if (p !== t || qe) {
      for (z(); i < C.length; i += 4)
        (r = ze.matchMedia(C[i]).matches) !== C[i + 3] &&
          ((C[i + 3] = r)
            ? n.push(i)
            : z(1, C[i]) || (V(C[i + 2]) && C[i + 2]()));
      for (R(), i = 0; i < n.length; i++)
        (r = n[i]), (Qe = C[r]), (C[r + 2] = C[r + 1](e));
      (Qe = 0), o && F(0, 1), (p = t), A("matchMedia");
    }
  }
  function Xa() {
    return Fa(ee, "scrollEnd", Xa) || F(!0);
  }
  function ab() {
    return g.forEach(function (e) {
      return "function" == typeof e && (e.rec = 0);
    });
  }
  function jb(e, r, t, n) {
    if (e.parentNode !== r) {
      for (var i, o = Q.length, a = r.style, s = e.style; o--; )
        a[(i = Q[o])] = t[i];
      (a.position = "absolute" === t.position ? "absolute" : "relative"),
        "inline" === t.display && (a.display = "inline-block"),
        (s[w] = s[y] = a.flexBasis = "auto"),
        (a.overflow = "visible"),
        (a.boxSizing = "border-box"),
        (a[nr] = ya(e, dr) + pr),
        (a[ir] = ya(e, gr) + pr),
        (a[cr] = s[ur] = s.top = s[v] = "0"),
        Sr(n),
        (s[nr] = s.maxWidth = t[nr]),
        (s[ir] = s.maxHeight = t[ir]),
        (s[cr] = t[cr]),
        e.parentNode.insertBefore(r, e),
        r.appendChild(e);
    }
  }
  function mb(e) {
    for (var r = q.length, t = e.style, n = [], i = 0; i < r; i++)
      n.push(q[i], t[q[i]]);
    return (n.t = e), n;
  }
  function pb(e, r, t, n, i, o, a, s, l, c, u, f, p) {
    V(e) && (e = e(s)),
      rr(e) &&
        "max" === e.substr(0, 3) &&
        (e = f + ("=" === e.charAt(4) ? Ja("0" + e.substr(3), t) : 0));
    var d,
      g,
      h,
      v = p ? p.time() : 0;
    if ((p && p.seek(0), W(e))) a && E(a, t, n, !0);
    else {
      V(r) && (r = r(s));
      var m,
        b,
        x,
        y,
        S = e.split(" ");
      (h = I(r) || Fe),
        ((m = hr(h) || {}) && (m.left || m.top)) ||
          "none" !== ua(h).display ||
          ((y = h.style.display),
          (h.style.display = "block"),
          (m = hr(h)),
          y ? (h.style.display = y) : h.style.removeProperty("display")),
        (b = Ja(S[0], m[n.d])),
        (x = Ja(S[1] || "0", t)),
        (e = m[n.p] - l[n.p] - c + b + i - x),
        a && E(a, x, n, t - x < 20 || (a._isStart && 20 < x)),
        (t -= t - x);
    }
    if (o) {
      var w = e + t,
        T = o._isStart;
      (d = "scroll" + n.d2),
        E(
          o,
          w,
          n,
          (T && 20 < w) ||
            (!T && (u ? Math.max(Fe[d], We[d]) : o.parentNode[d]) <= w + 1)
        ),
        u &&
          ((l = hr(a)),
          u && (o.style[n.op.p] = l[n.op.p] - n.op.m - o._offset + pr));
    }
    return (
      p &&
        h &&
        ((d = hr(h)),
        p.seek(f),
        (g = hr(h)),
        (p._caScrollDist = d[n.p] - g[n.p]),
        (e = (e / p._caScrollDist) * f)),
      p && p.seek(v),
      p ? e : Math.round(e)
    );
  }
  function rb(e, r, t, n) {
    if (e.parentNode !== r) {
      var i,
        o,
        a = e.style;
      if (r === Fe) {
        for (i in ((e._stOrig = a.cssText), (o = ua(e))))
          +i ||
            G.test(i) ||
            !o[i] ||
            "string" != typeof a[i] ||
            "0" === i ||
            (a[i] = o[i]);
        (a.top = t), (a.left = n);
      } else a.cssText = e._stOrig;
      (Re.core.getCache(e).uncache = 1), r.appendChild(e);
    }
  }
  function sb(l, e) {
    function xf(e, r, t, n, i) {
      var o = xf.tween,
        a = r.onComplete,
        s = {};
      return (
        o && o.kill(),
        (c = Math.round(t)),
        (r[p] = e),
        ((r.modifiers = s)[p] = function (e) {
          return (
            (e = J(f())) !== c &&
            e !== u &&
            2 < Math.abs(e - c) &&
            2 < Math.abs(e - u)
              ? (o.kill(), (xf.tween = 0))
              : (e = t + n * o.ratio + i * o.ratio * o.ratio),
            (u = c),
            (c = J(e))
          );
        }),
        (r.onComplete = function () {
          (xf.tween = 0), a && a.call(o);
        }),
        (o = xf.tween = Re.to(l, r))
      );
    }
    var c,
      u,
      f = O(l, e),
      p = "_scroll" + e.p2;
    return (
      (l[p] = f),
      Ea(l, "wheel", function () {
        return xf.tween && xf.tween.kill() && (xf.tween = 0);
      }),
      xf
    );
  }
  var Re,
    o,
    ze,
    Le,
    We,
    Fe,
    i,
    a,
    Ve,
    De,
    He,
    s,
    Xe,
    je,
    l,
    Je,
    c,
    u,
    f,
    Ke,
    Ye,
    t,
    $e,
    Qe,
    p,
    d,
    qe = 1,
    Ue = [],
    g = [],
    Ze = Date.now,
    h = Ze(),
    Ge = 0,
    er = 1,
    rr = function _isString(e) {
      return "string" == typeof e;
    },
    tr = Math.abs,
    r = "scrollLeft",
    n = "scrollTop",
    v = "left",
    y = "right",
    w = "bottom",
    nr = "width",
    ir = "height",
    or = "Right",
    ar = "Left",
    sr = "Top",
    lr = "Bottom",
    cr = "padding",
    ur = "margin",
    fr = "Width",
    m = "Height",
    pr = "px",
    dr = {
      s: r,
      p: v,
      p2: ar,
      os: y,
      os2: or,
      d: nr,
      d2: fr,
      a: "x",
      sc: function sc(e) {
        return arguments.length
          ? ze.scrollTo(e, gr.sc())
          : ze.pageXOffset || Le[r] || We[r] || Fe[r] || 0;
      },
    },
    gr = {
      s: n,
      p: "top",
      p2: sr,
      os: w,
      os2: lr,
      d: ir,
      d2: m,
      a: "y",
      op: dr,
      sc: function sc(e) {
        return arguments.length
          ? ze.scrollTo(dr.sc(), e)
          : ze.pageYOffset || Le[n] || We[n] || Fe[n] || 0;
      },
    },
    hr = function _getBounds(e, r) {
      var t =
          r &&
          "matrix(1, 0, 0, 1, 0, 0)" !== ua(e)[l] &&
          Re.to(e, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
          }).progress(1),
        n = e.getBoundingClientRect();
      return t && t.progress(0).kill(), n;
    },
    vr = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal",
    },
    mr = { toggleActions: "play", anticipatePin: 0 },
    b = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    E = function _positionMarker(e, r, t, n) {
      var i = { display: "block" },
        o = t[n ? "os2" : "p2"],
        a = t[n ? "p2" : "os2"];
      (e._isFlipped = n),
        (i[t.a + "Percent"] = n ? -100 : 0),
        (i[t.a] = n ? "1px" : 0),
        (i["border" + o + fr] = 1),
        (i["border" + a + fr] = 0),
        (i[t.p] = r + "px"),
        Re.set(e, i);
    },
    br = [],
    xr = {},
    x = {},
    k = [],
    C = [],
    A = function _dispatch(e) {
      return (
        (x[e] &&
          x[e].map(function (e) {
            return e();
          })) ||
        k
      );
    },
    B = [],
    R = function _revertRecorded(e) {
      for (var r = 0; r < B.length; r += 5)
        (e && B[r + 4] !== e) ||
          ((B[r].style.cssText = B[r + 1]),
          B[r].getBBox && B[r].setAttribute("transform", B[r + 2] || ""),
          (B[r + 3].uncache = 1));
    },
    z = function _revertAll(e, r) {
      var t;
      for (Je = 0; Je < br.length; Je++)
        (t = br[Je]), (r && t.media !== r) || (e ? t.kill(1) : t.revert());
      r && R(r), r || A("revert");
    },
    F = function _refreshAll(e, r) {
      if (!Ge || e) {
        d = !0;
        var t = A("refreshInit");
        Ke && ee.sort(),
          r || z(),
          br.forEach(function (e) {
            return e.refresh();
          }),
          br.forEach(function (e) {
            return (
              "max" === e.vars.end &&
              e.setPositions(e.start, S(e.scroller, e._dir))
            );
          }),
          t.forEach(function (e) {
            return e && e.render && e.render(-1);
          }),
          ab(),
          a.pause(),
          (d = !1),
          A("refresh");
      } else Ea(ee, "scrollEnd", Xa);
    },
    D = 0,
    yr = 1,
    j = function _updateAll() {
      if (!d) {
        var e = br.length,
          r = Ze(),
          t = 50 <= r - h,
          n = e && br[0].scroll();
        if (
          ((yr = n < D ? -1 : 1),
          (D = n),
          t &&
            (Ge && !je && 200 < r - Ge && ((Ge = 0), A("scrollEnd")),
            (He = h),
            (h = r)),
          yr < 0)
        ) {
          for (Je = e; 0 < Je--; ) br[Je] && br[Je].update(0, t);
          yr = 1;
        } else for (Je = 0; Je < e; Je++) br[Je] && br[Je].update(0, t);
      }
    },
    Q = [
      v,
      "top",
      w,
      y,
      ur + lr,
      ur + or,
      ur + sr,
      ur + ar,
      "display",
      "flexShrink",
      "float",
      "zIndex",
      "gridColumnStart",
      "gridColumnEnd",
      "gridRowStart",
      "gridRowEnd",
      "gridArea",
      "justifySelf",
      "alignSelf",
      "placeSelf",
      "order",
    ],
    q = Q.concat([
      nr,
      ir,
      "boxSizing",
      "max" + fr,
      "max" + m,
      "position",
      ur,
      cr,
      cr + sr,
      cr + or,
      cr + lr,
      cr + ar,
    ]),
    U = /([A-Z])/g,
    Sr = function _setState(e) {
      if (e) {
        var r,
          t,
          n = e.t.style,
          i = e.length,
          o = 0;
        for ((e.t._gsap || Re.core.getCache(e.t)).uncache = 1; o < i; o += 2)
          (t = e[o + 1]),
            (r = e[o]),
            t
              ? (n[r] = t)
              : n[r] && n.removeProperty(r.replace(U, "-$1").toLowerCase());
      }
    },
    wr = { left: 0, top: 0 },
    G = /(?:webkit|moz|length|cssText|inset)/i;
  dr.op = gr;
  var ee =
    ((ScrollTrigger.prototype.init = function init(E, k) {
      if (((this.progress = this.start = 0), this.vars && this.kill(1), er)) {
        var m,
          n,
          f,
          C,
          A,
          B,
          R,
          z,
          L,
          F,
          D,
          e,
          j,
          J,
          K,
          Y,
          Q,
          r,
          q,
          b,
          U,
          Z,
          x,
          G,
          y,
          w,
          t,
          T,
          ee,
          re,
          i,
          p,
          te,
          ne,
          ie,
          oe,
          ae,
          se = (E = wa(rr(E) || W(E) || E.nodeType ? { trigger: E } : E, mr))
            .onUpdate,
          le = E.toggleClass,
          o = E.id,
          ce = E.onToggle,
          ue = E.onRefresh,
          fe = E.scrub,
          pe = E.trigger,
          de = E.pin,
          ge = E.pinSpacing,
          he = E.invalidateOnRefresh,
          ve = E.anticipatePin,
          a = E.onScrubComplete,
          d = E.onSnapComplete,
          me = E.once,
          be = E.snap,
          xe = E.pinReparent,
          s = E.pinSpacer,
          ye = E.containerAnimation,
          Se = E.fastScrollEnd,
          we = E.preventOverlaps,
          Te =
            E.horizontal || (E.containerAnimation && !1 !== E.horizontal)
              ? dr
              : gr,
          Ee = !fe && 0 !== fe,
          Oe = I(E.scroller || ze),
          l = Re.core.getCache(Oe),
          _e = M(Oe),
          ke =
            "fixed" ===
            ("pinType" in E ? E.pinType : N(Oe, "pinType") || (_e && "fixed")),
          Ce = [E.onEnter, E.onLeave, E.onEnterBack, E.onLeaveBack],
          Me = Ee && E.toggleActions.split(" "),
          c = "markers" in E ? E.markers : mr.markers,
          Pe = _e ? 0 : parseFloat(ua(Oe)["border" + Te.p2 + fr]) || 0,
          Ie = this,
          u =
            E.onRefreshInit &&
            function () {
              return E.onRefreshInit(Ie);
            },
          Ae = (function _getSizeFunc(e, r, t) {
            var n = t.d,
              i = t.d2,
              o = t.a;
            return (o = N(e, "getBoundingClientRect"))
              ? function () {
                  return o()[n];
                }
              : function () {
                  return (r ? ze["inner" + i] : e["client" + i]) || 0;
                };
          })(Oe, _e, Te),
          Ne = (function _getOffsetsFunc(e, r) {
            return !r || ~Ue.indexOf(e)
              ? P(e)
              : function () {
                  return wr;
                };
          })(Oe, _e),
          g = 0,
          Be = O(Oe, Te);
        if (
          ((Ie.media = Qe),
          (Ie._dir = Te),
          (ve *= 45),
          (Ie.scroller = Oe),
          (Ie.scroll = ye ? ye.time.bind(ye) : Be),
          (C = Be()),
          (Ie.vars = E),
          (k = k || E.animation),
          "refreshPriority" in E && (Ke = 1),
          (l.tweenScroll = l.tweenScroll || {
            top: sb(Oe, gr),
            left: sb(Oe, dr),
          }),
          (Ie.tweenTo = m = l.tweenScroll[Te.p]),
          k &&
            ((k.vars.lazy = !1),
            k._initted ||
              (!1 !== k.vars.immediateRender &&
                !1 !== E.immediateRender &&
                k.render(0, !0, !0)),
            (Ie.animation = k.pause()),
            (k.scrollTrigger = Ie),
            (i = W(fe) && fe) &&
              (re = Re.to(k, {
                ease: "power3",
                duration: i,
                onComplete: function onComplete() {
                  return a && a(Ie);
                },
              })),
            (T = 0),
            (o = o || k.vars.id)),
          br.push(Ie),
          be &&
            ((X(be) && !be.push) || (be = { snapTo: be }),
            "scrollBehavior" in Fe.style &&
              Re.set(_e ? [Fe, We] : Oe, { scrollBehavior: "auto" }),
            (f = V(be.snapTo)
              ? be.snapTo
              : "labels" === be.snapTo
              ? (function _getClosestLabel(r) {
                  return function (e) {
                    return Re.utils.snap(za(r), e);
                  };
                })(k)
              : "labelsDirectional" === be.snapTo
              ? (function _getLabelAtDirection(t) {
                  return function (e, r) {
                    return Ba(za(t))(e, r.direction);
                  };
                })(k)
              : !1 !== be.directional
              ? function (e, r) {
                  return Ba(be.snapTo)(e, r.direction);
                }
              : Re.utils.snap(be.snapTo)),
            (p = be.duration || { min: 0.1, max: 2 }),
            (p = X(p) ? De(p.min, p.max) : De(p, p)),
            (te = Re.delayedCall(be.delay || i / 2 || 0.1, function () {
              if (Math.abs(Ie.getVelocity()) < 10 && !je && g !== Be()) {
                var e = k && !Ee ? k.totalProgress() : Ie.progress,
                  r = ((e - ee) / (Ze() - He)) * 1e3 || 0,
                  t = Re.utils.clamp(
                    -Ie.progress,
                    1 - Ie.progress,
                    (tr(r / 2) * r) / 0.185
                  ),
                  n = Ie.progress + (!1 === be.inertia ? 0 : t),
                  i = De(0, 1, f(n, Ie)),
                  o = Be(),
                  a = Math.round(B + i * j),
                  s = be.onStart,
                  l = be.onInterrupt,
                  c = be.onComplete,
                  u = m.tween;
                if (o <= R && B <= o && a !== o) {
                  if (u && !u._initted && u.data <= tr(a - o)) return;
                  !1 === be.inertia && (t = i - Ie.progress),
                    m(
                      a,
                      {
                        duration: p(
                          tr(
                            (0.185 * Math.max(tr(n - e), tr(i - e))) /
                              r /
                              0.05 || 0
                          )
                        ),
                        ease: be.ease || "power3",
                        data: tr(a - o),
                        onInterrupt: function onInterrupt() {
                          return te.restart(!0) && l && l(Ie);
                        },
                        onComplete: function onComplete() {
                          Ie.update(),
                            (g = Be()),
                            (T = ee =
                              k && !Ee ? k.totalProgress() : Ie.progress),
                            d && d(Ie),
                            c && c(Ie);
                        },
                      },
                      o,
                      t * j,
                      a - o - t * j
                    ),
                    s && s(Ie, m.tween);
                }
              } else Ie.isActive && te.restart(!0);
            }).pause())),
          o && (xr[o] = Ie),
          (pe = Ie.trigger = I(pe || de)),
          (de = !0 === de ? pe : I(de)),
          rr(le) && (le = { targets: pe, className: le }),
          de &&
            (!1 === ge ||
              ge === ur ||
              (ge = !(!ge && "flex" === ua(de.parentNode).display) && cr),
            (Ie.pin = de),
            !1 !== E.force3D && Re.set(de, { force3D: !0 }),
            (n = Re.core.getCache(de)).spacer
              ? (J = n.pinState)
              : (s &&
                  ((s = I(s)) &&
                    !s.nodeType &&
                    (s = s.current || s.nativeElement),
                  (n.spacerIsNative = !!s),
                  s && (n.spacerState = mb(s))),
                (n.spacer = Q = s || Le.createElement("div")),
                Q.classList.add("pin-spacer"),
                o && Q.classList.add("pin-spacer-" + o),
                (n.pinState = J = mb(de))),
            (Ie.spacer = Q = n.spacer),
            (t = ua(de)),
            (x = t[ge + Te.os2]),
            (q = Re.getProperty(de)),
            (b = Re.quickSetter(de, Te.a, pr)),
            jb(de, Q, t),
            (Y = mb(de))),
          c &&
            ((e = X(c) ? wa(c, vr) : vr),
            (F = Ka("scroller-start", o, Oe, Te, e, 0)),
            (D = Ka("scroller-end", o, Oe, Te, e, 0, F)),
            (r = F["offset" + Te.op.d2]),
            (z = Ka("start", o, Oe, Te, e, r, 0, ye)),
            (L = Ka("end", o, Oe, Te, e, r, 0, ye)),
            ye && (ae = Re.quickSetter([z, L], Te.a, pr)),
            ke ||
              (Ue.length && !0 === N(Oe, "fixedMarkers")) ||
              ((function _makePositionable(e) {
                var r = ua(e).position;
                e.style.position =
                  "absolute" === r || "fixed" === r ? r : "relative";
              })(_e ? Fe : Oe),
              Re.set([F, D], { force3D: !0 }),
              (y = Re.quickSetter(F, Te.a, pr)),
              (w = Re.quickSetter(D, Te.a, pr)))),
          ye)
        ) {
          var h = ye.vars.onUpdate,
            v = ye.vars.onUpdateParams;
          ye.eventCallback("onUpdate", function () {
            Ie.update(0, 0, 1), h && h.apply(v || []);
          });
        }
        (Ie.previous = function () {
          return br[br.indexOf(Ie) - 1];
        }),
          (Ie.next = function () {
            return br[br.indexOf(Ie) + 1];
          }),
          (Ie.revert = function (e) {
            var r = !1 !== e || !Ie.enabled,
              t = Xe;
            r !== Ie.isReverted &&
              (r &&
                (Ie.scroll.rec || (Ie.scroll.rec = Be()),
                (ie = Math.max(Be(), Ie.scroll.rec || 0)),
                (ne = Ie.progress),
                (oe = k && k.progress())),
              z &&
                [z, L, F, D].forEach(function (e) {
                  return (e.style.display = r ? "none" : "block");
                }),
              r && (Xe = 1),
              Ie.update(r),
              (Xe = t),
              de &&
                (r
                  ? (function _swapPinOut(e, r, t) {
                      Sr(t);
                      var n = e._gsap;
                      if (n.spacerIsNative) Sr(n.spacerState);
                      else if (e.parentNode === r) {
                        var i = r.parentNode;
                        i && (i.insertBefore(e, r), i.removeChild(r));
                      }
                    })(de, Q, J)
                  : (xe && Ie.isActive) || jb(de, Q, ua(de), G)),
              (Ie.isReverted = r));
          }),
          (Ie.refresh = function (e, r) {
            if ((!Xe && Ie.enabled) || r)
              if (de && e && Ge) Ea(ScrollTrigger, "scrollEnd", Xa);
              else {
                (Xe = 1),
                  re && re.pause(),
                  he && k && k.time(-0.01, !0).invalidate(),
                  Ie.isReverted || Ie.revert();
                for (
                  var t,
                    n,
                    i,
                    o,
                    a,
                    s,
                    l,
                    c,
                    u,
                    f,
                    p = Ae(),
                    d = Ne(),
                    g = ye ? ye.duration() : S(Oe, Te),
                    h = 0,
                    v = 0,
                    m = E.end,
                    b = E.endTrigger || pe,
                    x =
                      E.start ||
                      (0 !== E.start && pe ? (de ? "0 0" : "0 100%") : 0),
                    y = E.pinnedContainer && I(E.pinnedContainer),
                    w = (pe && Math.max(0, br.indexOf(Ie))) || 0,
                    T = w;
                  T--;

                )
                  (s = br[T]).end || s.refresh(0, 1) || (Xe = 1),
                    !(l = s.pin) ||
                      (l !== pe && l !== de) ||
                      s.isReverted ||
                      ((f = f || []).unshift(s), s.revert());
                for (
                  V(x) && (x = x(Ie)),
                    B =
                      pb(x, pe, p, Te, Be(), z, F, Ie, d, Pe, ke, g, ye) ||
                      (de ? -0.001 : 0),
                    V(m) && (m = m(Ie)),
                    rr(m) &&
                      !m.indexOf("+=") &&
                      (~m.indexOf(" ")
                        ? (m = (rr(x) ? x.split(" ")[0] : "") + m)
                        : ((h = Ja(m.substr(2), p)),
                          (m = rr(x) ? x : B + h),
                          (b = pe))),
                    R =
                      Math.max(
                        B,
                        pb(
                          m || (b ? "100% 0" : g),
                          b,
                          p,
                          Te,
                          Be() + h,
                          L,
                          D,
                          Ie,
                          d,
                          Pe,
                          ke,
                          g,
                          ye
                        )
                      ) || -0.001,
                    j = R - B || ((B -= 0.01) && 0.001),
                    h = 0,
                    T = w;
                  T--;

                )
                  (l = (s = br[T]).pin) &&
                    s.start - s._pinPush < B &&
                    !ye &&
                    ((t = s.end - s.start),
                    (l !== pe && l !== y) ||
                      W(x) ||
                      (h += t * (1 - s.progress)),
                    l === de && (v += t));
                if (
                  ((B += h),
                  (R += h),
                  (Ie._pinPush = v),
                  z &&
                    h &&
                    (((t = {})[Te.a] = "+=" + h),
                    y && (t[Te.p] = "-=" + Be()),
                    Re.set([z, L], t)),
                  de)
                )
                  (t = ua(de)),
                    (o = Te === gr),
                    (i = Be()),
                    (U = parseFloat(q(Te.a)) + v),
                    !g &&
                      1 < R &&
                      ((_e ? Fe : Oe).style["overflow-" + Te.a] = "scroll"),
                    jb(de, Q, t),
                    (Y = mb(de)),
                    (n = hr(de, !0)),
                    (c = ke && O(Oe, o ? dr : gr)()),
                    ge &&
                      (((G = [ge + Te.os2, j + v + pr]).t = Q),
                      (T = ge === cr ? ya(de, Te) + j + v : 0) &&
                        G.push(Te.d, T + pr),
                      Sr(G),
                      ke && Be(ie)),
                    ke &&
                      (((a = {
                        top: n.top + (o ? i - B : c) + pr,
                        left: n.left + (o ? c : i - B) + pr,
                        boxSizing: "border-box",
                        position: "fixed",
                      })[nr] = a.maxWidth =
                        Math.ceil(n.width) + pr),
                      (a[ir] = a.maxHeight = Math.ceil(n.height) + pr),
                      (a[ur] =
                        a[ur + sr] =
                        a[ur + or] =
                        a[ur + lr] =
                        a[ur + ar] =
                          "0"),
                      (a[cr] = t[cr]),
                      (a[cr + sr] = t[cr + sr]),
                      (a[cr + or] = t[cr + or]),
                      (a[cr + lr] = t[cr + lr]),
                      (a[cr + ar] = t[cr + ar]),
                      (K = (function _copyState(e, r, t) {
                        for (
                          var n, i = [], o = e.length, a = t ? 8 : 0;
                          a < o;
                          a += 2
                        )
                          (n = e[a]), i.push(n, n in r ? r[n] : e[a + 1]);
                        return (i.t = e.t), i;
                      })(J, a, xe))),
                    k
                      ? ((u = k._initted),
                        Ye(1),
                        k.render(k.duration(), !0, !0),
                        (Z = q(Te.a) - U + j + v),
                        j !== Z && K.splice(K.length - 2, 2),
                        k.render(0, !0, !0),
                        u || k.invalidate(),
                        Ye(0))
                      : (Z = j);
                else if (pe && Be() && !ye)
                  for (n = pe.parentNode; n && n !== Fe; )
                    n._pinOffset && ((B -= n._pinOffset), (R -= n._pinOffset)),
                      (n = n.parentNode);
                f &&
                  f.forEach(function (e) {
                    return e.revert(!1);
                  }),
                  (Ie.start = B),
                  (Ie.end = R),
                  (C = A = Be()),
                  ye || (C < ie && Be(ie), (Ie.scroll.rec = 0)),
                  Ie.revert(!1),
                  (Xe = 0),
                  k &&
                    Ee &&
                    k._initted &&
                    k.progress() !== oe &&
                    k.progress(oe, !0).render(k.time(), !0, !0),
                  (ne === Ie.progress && !ye) ||
                    (k && !Ee && k.totalProgress(ne, !0),
                    (Ie.progress = ne),
                    Ie.update(0, 0, 1)),
                  de && ge && (Q._pinOffset = Math.round(Ie.progress * Z)),
                  ue && ue(Ie);
              }
          }),
          (Ie.getVelocity = function () {
            return ((Be() - A) / (Ze() - He)) * 1e3 || 0;
          }),
          (Ie.endAnimation = function () {
            $(Ie.callbackAnimation),
              k &&
                (re
                  ? re.progress(1)
                  : k.paused()
                  ? Ee || $(k, Ie.direction < 0, 1)
                  : $(k, k.reversed()));
          }),
          (Ie.labelToScroll = function (e) {
            return (
              (k &&
                k.labels &&
                (B || Ie.refresh() || B) + (k.labels[e] / k.duration()) * j) ||
              0
            );
          }),
          (Ie.getTrailing = function (r) {
            var e = br.indexOf(Ie),
              t = 0 < Ie.direction ? br.slice(0, e).reverse() : br.slice(e + 1);
            return rr(r)
              ? t.filter(function (e) {
                  return e.vars.preventOverlaps === r;
                })
              : t;
          }),
          (Ie.update = function (e, r, t) {
            if (!ye || t || e) {
              var n,
                i,
                o,
                a,
                s,
                l,
                c,
                u = Ie.scroll(),
                f = e ? 0 : (u - B) / j,
                p = f < 0 ? 0 : 1 < f ? 1 : f || 0,
                d = Ie.progress;
              if (
                (r &&
                  ((A = C),
                  (C = ye ? Be() : u),
                  be && ((ee = T), (T = k && !Ee ? k.totalProgress() : p))),
                ve &&
                  !p &&
                  de &&
                  !Xe &&
                  !qe &&
                  Ge &&
                  B < u + ((u - A) / (Ze() - He)) * ve &&
                  (p = 1e-4),
                p !== d && Ie.enabled)
              ) {
                if (
                  ((a =
                    (s = (n = Ie.isActive = !!p && p < 1) != (!!d && d < 1)) ||
                    !!p != !!d),
                  (Ie.direction = d < p ? 1 : -1),
                  (Ie.progress = p),
                  a &&
                    !Xe &&
                    ((i = p && !d ? 0 : 1 === p ? 1 : 1 === d ? 2 : 3),
                    Ee &&
                      ((o = (!s && "none" !== Me[i + 1] && Me[i + 1]) || Me[i]),
                      (c =
                        k && ("complete" === o || "reset" === o || o in k)))),
                  we &&
                    s &&
                    (c || fe || !k) &&
                    (V(we)
                      ? we(Ie)
                      : Ie.getTrailing(we).forEach(function (e) {
                          return e.endAnimation();
                        })),
                  Ee ||
                    (!re || Xe || qe
                      ? k && k.totalProgress(p, !!Xe)
                      : ((re.vars.totalProgress = p),
                        re.invalidate().restart())),
                  de)
                )
                  if ((e && ge && (Q.style[ge + Te.os2] = x), ke)) {
                    if (a) {
                      if (
                        ((l = !e && d < p && u < R + 1 && u + 1 >= S(Oe, Te)),
                        xe)
                      )
                        if (e || (!n && !l)) rb(de, Q);
                        else {
                          var g = hr(de, !0),
                            h = u - B;
                          rb(
                            de,
                            Fe,
                            g.top + (Te === gr ? h : 0) + pr,
                            g.left + (Te === gr ? 0 : h) + pr
                          );
                        }
                      Sr(n || l ? K : Y),
                        (Z !== j && p < 1 && n) ||
                          b(U + (1 !== p || l ? 0 : Z));
                    }
                  } else b(U + Z * p);
                !be || m.tween || Xe || qe || te.restart(!0),
                  le &&
                    (s || (me && p && (p < 1 || !$e))) &&
                    Ve(le.targets).forEach(function (e) {
                      return e.classList[n || me ? "add" : "remove"](
                        le.className
                      );
                    }),
                  !se || Ee || e || se(Ie),
                  a && !Xe
                    ? (Ee &&
                        (c &&
                          ("complete" === o
                            ? k.pause().totalProgress(1)
                            : "reset" === o
                            ? k.restart(!0).pause()
                            : "restart" === o
                            ? k.restart(!0)
                            : k[o]()),
                        se && se(Ie)),
                      (!s && $e) ||
                        (ce && s && _(Ie, ce),
                        Ce[i] && _(Ie, Ce[i]),
                        me && (1 === p ? Ie.kill(!1, 1) : (Ce[i] = 0)),
                        s || (Ce[(i = 1 === p ? 1 : 3)] && _(Ie, Ce[i]))),
                      Se &&
                        !n &&
                        Math.abs(Ie.getVelocity()) > (W(Se) ? Se : 2500) &&
                        ($(Ie.callbackAnimation),
                        re ? re.progress(1) : $(k, !p, 1)))
                    : Ee && se && !Xe && se(Ie);
              }
              if (w) {
                var v = ye ? (u / ye.duration()) * (ye._caScrollDist || 0) : u;
                y(v + (F._isFlipped ? 1 : 0)), w(v);
              }
              ae && ae((-u / ye.duration()) * (ye._caScrollDist || 0));
            }
          }),
          (Ie.enable = function (e, r) {
            Ie.enabled ||
              ((Ie.enabled = !0),
              Ea(Oe, "resize", Qa),
              Ea(Oe, "scroll", Pa),
              u && Ea(ScrollTrigger, "refreshInit", u),
              !1 !== e && ((Ie.progress = ne = 0), (C = A = g = Be())),
              !1 !== r && Ie.refresh());
          }),
          (Ie.getTween = function (e) {
            return e && m ? m.tween : re;
          }),
          (Ie.setPositions = function (e, r) {
            de && ((U += e - B), (Z += r - e - j)),
              (Ie.start = B = e),
              (Ie.end = R = r),
              (j = r - e),
              Ie.update();
          }),
          (Ie.disable = function (e, r) {
            if (
              Ie.enabled &&
              (!1 !== e && Ie.revert(),
              (Ie.enabled = Ie.isActive = !1),
              r || (re && re.pause()),
              (ie = 0),
              n && (n.uncache = 1),
              u && Fa(ScrollTrigger, "refreshInit", u),
              te && (te.pause(), m.tween && m.tween.kill() && (m.tween = 0)),
              !_e)
            ) {
              for (var t = br.length; t--; )
                if (br[t].scroller === Oe && br[t] !== Ie) return;
              Fa(Oe, "resize", Qa), Fa(Oe, "scroll", Pa);
            }
          }),
          (Ie.kill = function (e, r) {
            Ie.disable(e, r), re && re.kill(), o && delete xr[o];
            var t = br.indexOf(Ie);
            0 <= t && br.splice(t, 1),
              t === Je && 0 < yr && Je--,
              (t = 0),
              br.forEach(function (e) {
                return e.scroller === Ie.scroller && (t = 1);
              }),
              t || (Ie.scroll.rec = 0),
              k && ((k.scrollTrigger = null), e && k.render(-1), r || k.kill()),
              z &&
                [z, L, F, D].forEach(function (e) {
                  return e.parentNode && e.parentNode.removeChild(e);
                }),
              de &&
                (n && (n.uncache = 1),
                (t = 0),
                br.forEach(function (e) {
                  return e.pin === de && t++;
                }),
                t || (n.spacer = 0));
          }),
          Ie.enable(!1, !1),
          k && k.add && !j
            ? Re.delayedCall(0.01, function () {
                return B || R || Ie.refresh();
              }) &&
              (j = 0.01) &&
              (B = R = 0)
            : Ie.refresh();
      } else this.update = this.refresh = this.kill = H;
    }),
    (ScrollTrigger.register = function register(e) {
      if (
        !o &&
        ((Re = e || L()),
        K() &&
          window.document &&
          ((ze = window),
          (Le = document),
          (We = Le.documentElement),
          (Fe = Le.body)),
        Re &&
          ((Ve = Re.utils.toArray),
          (De = Re.utils.clamp),
          (Ye = Re.core.suppressOverwrites || H),
          Re.core.globals("ScrollTrigger", ScrollTrigger),
          Fe))
      ) {
        Ea(ze, "wheel", Pa), (i = [ze, Le, We, Fe]), Ea(Le, "scroll", Pa);
        var r,
          t = Fe.style,
          n = t.borderTopStyle;
        (t.borderTopStyle = "solid"),
          (r = hr(Fe)),
          (gr.m = Math.round(r.top + gr.sc()) || 0),
          (dr.m = Math.round(r.left + dr.sc()) || 0),
          n ? (t.borderTopStyle = n) : t.removeProperty("border-top-style"),
          (s = setInterval(Oa, 200)),
          Re.delayedCall(0.5, function () {
            return (qe = 0);
          }),
          Ea(Le, "touchcancel", H),
          Ea(Fe, "touchstart", H),
          Da(Ea, Le, "pointerdown,touchstart,mousedown", function () {
            return (je = 1);
          }),
          Da(Ea, Le, "pointerup,touchend,mouseup", function () {
            return (je = 0);
          }),
          (l = Re.utils.checkPrefix("transform")),
          q.push(l),
          (o = Ze()),
          (a = Re.delayedCall(0.2, F).pause()),
          (f = [
            Le,
            "visibilitychange",
            function () {
              var e = ze.innerWidth,
                r = ze.innerHeight;
              Le.hidden ? ((c = e), (u = r)) : (c === e && u === r) || Qa();
            },
            Le,
            "DOMContentLoaded",
            F,
            ze,
            "load",
            function () {
              return Ge || F();
            },
            ze,
            "resize",
            Qa,
          ]),
          T(Ea);
      }
      return o;
    }),
    (ScrollTrigger.defaults = function defaults(e) {
      if (e) for (var r in e) mr[r] = e[r];
      return mr;
    }),
    (ScrollTrigger.kill = function kill() {
      (er = 0),
        br.slice(0).forEach(function (e) {
          return e.kill(1);
        });
    }),
    (ScrollTrigger.config = function config(e) {
      "limitCallbacks" in e && ($e = !!e.limitCallbacks);
      var r = e.syncInterval;
      (r && clearInterval(s)) || ((s = r) && setInterval(Oa, r)),
        "autoRefreshEvents" in e &&
          (T(Fa) || T(Ea, e.autoRefreshEvents || "none"),
          (t = -1 === (e.autoRefreshEvents + "").indexOf("resize")));
    }),
    (ScrollTrigger.scrollerProxy = function scrollerProxy(e, r) {
      var t = I(e),
        n = g.indexOf(t),
        i = M(t);
      ~n && g.splice(n, i ? 6 : 2),
        r && (i ? Ue.unshift(ze, r, Fe, r, We, r) : Ue.unshift(t, r));
    }),
    (ScrollTrigger.matchMedia = function matchMedia(e) {
      var r, t, n, i, o;
      for (t in e)
        (n = C.indexOf(t)),
          (i = e[t]),
          "all" === (Qe = t)
            ? i()
            : (r = ze.matchMedia(t)) &&
              (r.matches && (o = i()),
              ~n
                ? ((C[n + 1] = Z(C[n + 1], i)), (C[n + 2] = Z(C[n + 2], o)))
                : ((n = C.length),
                  C.push(t, i, o),
                  r.addListener
                    ? r.addListener(Wa)
                    : r.addEventListener("change", Wa)),
              (C[n + 3] = r.matches)),
          (Qe = 0);
      return C;
    }),
    (ScrollTrigger.clearMatchMedia = function clearMatchMedia(e) {
      e || (C.length = 0), 0 <= (e = C.indexOf(e)) && C.splice(e, 4);
    }),
    (ScrollTrigger.isInViewport = function isInViewport(e, r, t) {
      var n = (rr(e) ? I(e) : e).getBoundingClientRect(),
        i = n[t ? nr : ir] * r || 0;
      return t
        ? 0 < n.right - i && n.left + i < ze.innerWidth
        : 0 < n.bottom - i && n.top + i < ze.innerHeight;
    }),
    (ScrollTrigger.positionInViewport = function positionInViewport(e, r, t) {
      rr(e) && (e = I(e));
      var n = e.getBoundingClientRect(),
        i = n[t ? nr : ir],
        o =
          null == r
            ? i / 2
            : r in b
            ? b[r] * i
            : ~r.indexOf("%")
            ? (parseFloat(r) * i) / 100
            : parseFloat(r) || 0;
      return t ? (n.left + o) / ze.innerWidth : (n.top + o) / ze.innerHeight;
    }),
    ScrollTrigger);
  function ScrollTrigger(e, r) {
    o ||
      ScrollTrigger.register(Re) ||
      console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
      this.init(e, r);
  }
  (ee.version = "3.9.1"),
    (ee.saveStyles = function (e) {
      return e
        ? Ve(e).forEach(function (e) {
            if (e && e.style) {
              var r = B.indexOf(e);
              0 <= r && B.splice(r, 5),
                B.push(
                  e,
                  e.style.cssText,
                  e.getBBox && e.getAttribute("transform"),
                  Re.core.getCache(e),
                  Qe
                );
            }
          })
        : B;
    }),
    (ee.revert = function (e, r) {
      return z(!e, r);
    }),
    (ee.create = function (e, r) {
      return new ee(e, r);
    }),
    (ee.refresh = function (e) {
      return e ? Qa() : (o || ee.register()) && F(!0);
    }),
    (ee.update = j),
    (ee.clearScrollMemory = ab),
    (ee.maxScroll = function (e, r) {
      return S(e, r ? dr : gr);
    }),
    (ee.getScrollFunc = function (e, r) {
      return O(I(e), r ? dr : gr);
    }),
    (ee.getById = function (e) {
      return xr[e];
    }),
    (ee.getAll = function () {
      return br.slice(0);
    }),
    (ee.isScrolling = function () {
      return !!Ge;
    }),
    (ee.snapDirectional = Ba),
    (ee.addEventListener = function (e, r) {
      var t = x[e] || (x[e] = []);
      ~t.indexOf(r) || t.push(r);
    }),
    (ee.removeEventListener = function (e, r) {
      var t = x[e],
        n = t && t.indexOf(r);
      0 <= n && t.splice(n, 1);
    }),
    (ee.batch = function (e, r) {
      function Nj(e, r) {
        var t = [],
          n = [],
          i = Re.delayedCall(o, function () {
            r(t, n), (t = []), (n = []);
          }).pause();
        return function (e) {
          t.length || i.restart(!0),
            t.push(e.trigger),
            n.push(e),
            a <= t.length && i.progress(1);
        };
      }
      var t,
        n = [],
        i = {},
        o = r.interval || 0.016,
        a = r.batchMax || 1e9;
      for (t in r)
        i[t] =
          "on" === t.substr(0, 2) && V(r[t]) && "onRefreshInit" !== t
            ? Nj(0, r[t])
            : r[t];
      return (
        V(a) &&
          ((a = a()),
          Ea(ee, "refresh", function () {
            return (a = r.batchMax());
          })),
        Ve(e).forEach(function (e) {
          var r = {};
          for (t in i) r[t] = i[t];
          (r.trigger = e), n.push(ee.create(r));
        }),
        n
      );
    }),
    (ee.sort = function (e) {
      return br.sort(
        e ||
          function (e, r) {
            return (
              -1e6 * (e.vars.refreshPriority || 0) +
              e.start -
              (r.start + -1e6 * (r.vars.refreshPriority || 0))
            );
          }
      );
    }),
    L() && Re.registerPlugin(ee),
    (e.ScrollTrigger = ee),
    (e.default = ee);
  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
  } else {
    delete e.default;
  }
});
