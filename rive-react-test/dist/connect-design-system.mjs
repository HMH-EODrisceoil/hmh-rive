import "./index.css";
import B, { createContext as xr, useState as Rt, useContext as ti, useRef as Mt, useEffect as Pt } from "react";
const ni = ({ children: A }) => /* @__PURE__ */ B.createElement("blockquote", { className: "connect__blockquote" }, A), Mn = ({
  id: A = "add",
  size: L = "md",
  fill: R,
  stroke: w,
  opacity: P = 1,
  focusable: Q = !1,
  className: te,
  dataTestId: Z
}) => {
  const ee = R ? `--connect__${R}` : "", z = R ? `--connect__${w}` : "", S = "/node_modules/@connect/connect-design-system/dist/svg/sprite.svg";
  return /* @__PURE__ */ B.createElement(
    "svg",
    {
      className: `connect__icon connect__icon-${L} ${te}`,
      style: {
        "--connect__icon-fill-color": `var(${ee})`,
        "--connect__icon-stroke-color": `var(${z})`,
        "--connect__icon-opacity": `${P}`
      },
      "aria-hidden": "true",
      focusable: Q,
      "data-testid": Z
    },
    /* @__PURE__ */ B.createElement("use", { xlinkHref: `${S}#${A}`, href: `${S}#${A}` })
  );
}, ri = ({
  children: A,
  primary: L = !0,
  title: R,
  disabled: w = !1,
  correct: P,
  incorrect: Q,
  submit: te = "button",
  clickHandler: Z,
  iconId: ee,
  iconSize: z = "md",
  fill: S,
  iconPosition: k = "before",
  iconOpacity: he,
  ariaLabel: D,
  dataTestId: x,
  additionalClass: ae = ""
}) => {
  const oe = [
    "connect__button",
    L && "connect__button-primary",
    !L && "connect__button-secondary",
    P && "connect__button-correct",
    Q && "connect__button-incorrect",
    ae
  ].filter(Boolean).join(" "), ce = ee ? /* @__PURE__ */ B.createElement(Mn, { id: ee, size: z, fill: S, opacity: he }) : null;
  return /* @__PURE__ */ B.createElement(
    "button",
    {
      type: te,
      className: oe,
      onClick: Z,
      disabled: w,
      "data-testid": x,
      "aria-label": D || (ee && !A ? `Icon button ${ee}` : void 0),
      title: R || D
    },
    k === "before" && ce,
    A,
    k === "after" && ce
  );
}, Mr = xr(void 0), ii = ({ children: A }) => {
  const [L, R] = Rt(null);
  return /* @__PURE__ */ B.createElement(Mr.Provider, { value: { clickedButtonId: L, setClickedButtonId: R } }, A);
}, ai = () => {
  const A = ti(Mr);
  if (A === void 0)
    throw new Error("useButtonMenuContext must be used within a ButtonMenuProvider");
  return A;
}, bi = ({
  id: A,
  children: L,
  title: R,
  clickHandler: w,
  iconId: P,
  iconSize: Q = "md",
  fill: te,
  iconPosition: Z = "before",
  ariaLabel: ee,
  additionalClass: z = "",
  clickedClass: S,
  dataTestId: k
}) => {
  const { clickedButtonId: he, setClickedButtonId: D } = ai(), x = () => {
    D(he === A ? null : A), w && w();
  }, oe = [
    "connect__button",
    "connect__button-menu",
    z,
    he === A && S
  ].filter(Boolean).join(" "), ce = P ? /* @__PURE__ */ B.createElement(Mn, { id: P, size: Q, fill: te }) : null;
  return /* @__PURE__ */ B.createElement(
    "button",
    {
      id: A,
      className: oe,
      onClick: x,
      "data-testid": k,
      "aria-label": ee || (P && !L ? `Icon button ${P}` : void 0),
      title: R || ee
    },
    Z === "before" && ce,
    L,
    Z === "after" && ce
  );
}, jr = ({
  children: A,
  element: L = "span",
  color: R,
  family: w = "sans",
  size: P,
  style: Q = "normal",
  weight: te,
  letterSpacing: Z,
  textAlign: ee,
  textTransform: z,
  opacity: S,
  className: k,
  dataTestId: he,
  ariaLive: D
}) => {
  const x = {};
  if (R) {
    const ae = `--connect__${R}`;
    x.color = `var(${ae})`;
  }
  if (w && (x.fontFamily = `var(--connect__font-${w})`), Z && (x.letterSpacing = `var(--connect__spacer-${Z})`), Q && (x.fontStyle = Q), te) {
    const ae = "--connect__fw";
    x.fontWeight = `var(${ae}, ${te})`;
  }
  return ee && (x.textAlign = ee), z && (x.textTransform = z), S && (x.opacity = S), P && (x.fontSize = `var(--connect__${P})`, x.lineHeight = `var(--connect__${P}-lheight)`), /* @__PURE__ */ B.createElement(
    L,
    {
      ...Object.keys(x).length > 0 ? { style: x } : {},
      className: k,
      "data-testid": he,
      "aria-live": D
    },
    A
  );
};
/*! For license information please see bundle.js.LICENSE.txt */
(() => {
  var A = { 52: function(w) {
    var P;
    P = () => (() => {
      var Q = [, (z, S, k) => {
        k.r(S), k.d(S, { default: () => x });
        var he, D = (he = typeof document < "u" && document.currentScript ? document.currentScript.src : void 0, function(ae = {}) {
          var oe, ce, l = ae;
          function xe() {
            function e(c) {
              const h = r;
              n = t = 0, r = /* @__PURE__ */ new Map(), h.forEach((g) => {
                try {
                  g(c);
                } catch (f) {
                  console.error(f);
                }
              }), this.ob(), a && a.Tb();
            }
            let t = 0, n = 0, r = /* @__PURE__ */ new Map(), a = null, o = null;
            this.requestAnimationFrame = function(c) {
              t || (t = requestAnimationFrame(e.bind(this)));
              const h = ++n;
              return r.set(h, c), h;
            }, this.cancelAnimationFrame = function(c) {
              r.delete(c), t && r.size == 0 && (cancelAnimationFrame(t), t = 0);
            }, this.Rb = function(c) {
              o && (document.body.remove(o), o = null), c || (o = document.createElement("div"), o.style.backgroundColor = "black", o.style.position = "fixed", o.style.right = 0, o.style.top = 0, o.style.color = "white", o.style.padding = "4px", o.innerHTML = "RIVE FPS", c = function(h) {
                o.innerHTML = "RIVE FPS " + h.toFixed(1);
              }, document.body.appendChild(o)), a = new function() {
                let h = 0, g = 0;
                this.Tb = function() {
                  var f = performance.now();
                  g ? (++h, 1e3 < (f -= g) && (c(1e3 * h / f), h = g = 0)) : (g = f, h = 0);
                };
              }();
            }, this.Ob = function() {
              o && (document.body.remove(o), o = null), a = null;
            }, this.ob = function() {
            };
          }
          function Ie(e) {
            console.assert(!0);
            const t = /* @__PURE__ */ new Map();
            let n = -1 / 0;
            this.push = function(r) {
              return r = r + ((1 << e) - 1) >> e, t.has(r) && clearTimeout(t.get(r)), t.set(r, setTimeout(function() {
                t.delete(r), t.length == 0 ? n = -1 / 0 : r == n && (n = Math.max(...t.keys()), console.assert(n < r));
              }, 1e3)), n = Math.max(r, n), n << e;
            };
          }
          l.ready = new Promise((e, t) => {
            oe = e, ce = t;
          });
          const Ge = l.onRuntimeInitialized;
          l.onRuntimeInitialized = function() {
            Ge && Ge();
            let e = l.decodeAudio;
            l.decodeAudio = function(r, a) {
              a(r = e(r));
            };
            let t = l.decodeFont;
            l.decodeFont = function(r, a) {
              a(r = t(r));
            };
            const n = l.FileAssetLoader;
            l.ptrToAsset = (r) => {
              let a = l.ptrToFileAsset(r);
              return a.isImage ? l.ptrToImageAsset(r) : a.isFont ? l.ptrToFontAsset(r) : a.isAudio ? l.ptrToAudioAsset(r) : a;
            }, l.CustomFileAssetLoader = n.extend("CustomFileAssetLoader", { __construct: function({ loadContents: r }) {
              this.__parent.__construct.call(this), this.Gb = r;
            }, loadContents: function(r, a) {
              return r = l.ptrToAsset(r), this.Gb(r, a);
            } }), l.CDNFileAssetLoader = n.extend("CDNFileAssetLoader", { __construct: function() {
              this.__parent.__construct.call(this);
            }, loadContents: function(r) {
              let a = l.ptrToAsset(r);
              return (r = a.cdnUuid) !== "" && (o = a.cdnBaseUrl + "/" + r, (c = new XMLHttpRequest()).responseType = "arraybuffer", c.onreadystatechange = function() {
                c.readyState == 4 && c.status == 200 && ((h) => {
                  a.decode(new Uint8Array(h.response));
                })(c);
              }, c.open("GET", o, !0), c.send(null), !0);
              var o, c;
            } }), l.FallbackFileAssetLoader = n.extend("FallbackFileAssetLoader", { __construct: function() {
              this.__parent.__construct.call(this), this.kb = [];
            }, addLoader: function(r) {
              this.kb.push(r);
            }, loadContents: function(r, a) {
              for (let o of this.kb) if (o.loadContents(r, a)) return !0;
              return !1;
            } });
          };
          const Ne = "createConicGradient createImageData createLinearGradient createPattern createRadialGradient getContextAttributes getImageData getLineDash getTransform isContextLost isPointInPath isPointInStroke measureText".split(" "), Oe = new function() {
            function e() {
              if (!t) {
                let be = function(d, b, se) {
                  if (b = O.createShader(b), O.shaderSource(b, se), O.compileShader(b), 0 < ((se = O.getShaderInfoLog(b)) || "").length) throw se;
                  O.attachShader(d, b);
                };
                var G = document.createElement("canvas"), W = { alpha: 1, depth: 0, stencil: 0, antialias: 0, premultipliedAlpha: 1, preserveDrawingBuffer: 0, preferLowPowerToHighPerformance: 0, failIfMajorPerformanceCaveat: 0, enableExtensionsByDefault: 1, explicitSwapControl: 1, renderViaOffscreenBackBuffer: 1 };
                let O;
                if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                  if (O = G.getContext("webgl", W), n = 1, !O) return console.log("No WebGL support. Image mesh will not be drawn."), !1;
                } else if (O = G.getContext("webgl2", W)) n = 2;
                else {
                  if (!(O = G.getContext("webgl", W))) return console.log("No WebGL support. Image mesh will not be drawn."), !1;
                  n = 1;
                }
                if (O = new Proxy(O, { get: (d, b) => d.isContextLost() ? (g || (console.error("Cannot render the mesh because the GL Context was lost. Tried to invoke ", b), g = !0), typeof d[b] == "function" ? function() {
                } : void 0) : typeof d[b] == "function" ? function(...se) {
                  return d[b].apply(d, se);
                } : d[b], set(d, b, se) {
                  if (!d.isContextLost()) return d[b] = se, !0;
                  g || (console.error("Cannot render the mesh because the GL Context was lost. Tried to set property " + b), g = !0);
                } }), r = Math.min(O.getParameter(O.MAX_RENDERBUFFER_SIZE), O.getParameter(O.MAX_TEXTURE_SIZE)), be(G = O.createProgram(), O.VERTEX_SHADER, `attribute vec2 vertex;
                attribute vec2 uv;
                uniform vec4 mat;
                uniform vec2 translate;
                varying vec2 st;
                void main() {
                    st = uv;
                    gl_Position = vec4(mat2(mat) * vertex + translate, 0, 1);
                }`), be(G, O.FRAGMENT_SHADER, `precision highp float;
                uniform sampler2D image;
                varying vec2 st;
                void main() {
                    gl_FragColor = texture2D(image, st);
                }`), O.bindAttribLocation(G, 0, "vertex"), O.bindAttribLocation(G, 1, "uv"), O.linkProgram(G), 0 < ((W = O.getProgramInfoLog(G)) || "").trim().length) throw W;
                a = O.getUniformLocation(G, "mat"), o = O.getUniformLocation(G, "translate"), O.useProgram(G), O.bindBuffer(O.ARRAY_BUFFER, O.createBuffer()), O.enableVertexAttribArray(0), O.enableVertexAttribArray(1), O.bindBuffer(O.ELEMENT_ARRAY_BUFFER, O.createBuffer()), O.uniform1i(O.getUniformLocation(G, "image"), 0), O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0), t = O;
              }
              return !0;
            }
            let t = null, n = 0, r = 0, a = null, o = null, c = 0, h = 0, g = !1;
            e(), this.hc = function() {
              return e(), r;
            }, this.Mb = function(G) {
              t.deleteTexture && t.deleteTexture(G);
            }, this.Lb = function(G) {
              if (!e()) return null;
              const W = t.createTexture();
              return W ? (t.bindTexture(t.TEXTURE_2D, W), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, G), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR), n == 2 ? (t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR_MIPMAP_LINEAR), t.generateMipmap(t.TEXTURE_2D)) : t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), W) : null;
            };
            const f = new Ie(8), N = new Ie(8), U = new Ie(10), Y = new Ie(10);
            this.Qb = function(G, W, O, be, d) {
              if (e()) {
                var b = f.push(G), se = N.push(W);
                if (t.canvas) {
                  for (var ke of (t.canvas.width == b && t.canvas.height == se || (t.canvas.width = b, t.canvas.height = se), t.viewport(0, se - W, G, W), t.disable(t.SCISSOR_TEST), t.clearColor(0, 0, 0, 0), t.clear(t.COLOR_BUFFER_BIT), t.enable(t.SCISSOR_TEST), O.sort((_e, ut) => ut.wb - _e.wb), b = U.push(be), c != b && (t.bufferData(t.ARRAY_BUFFER, 8 * b, t.DYNAMIC_DRAW), c = b), b = 0, O)) t.bufferSubData(t.ARRAY_BUFFER, b, ke.Ta), b += 4 * ke.Ta.length;
                  for (var Qe of (console.assert(b == 4 * be), O)) t.bufferSubData(t.ARRAY_BUFFER, b, Qe.Db), b += 4 * Qe.Db.length;
                  for (var Et of (console.assert(b == 8 * be), b = Y.push(d), h != b && (t.bufferData(t.ELEMENT_ARRAY_BUFFER, 2 * b, t.DYNAMIC_DRAW), h = b), ke = 0, O)) t.bufferSubData(t.ELEMENT_ARRAY_BUFFER, ke, Et.indices), ke += 2 * Et.indices.length;
                  console.assert(ke == 2 * d), Et = 0, Qe = !0, b = ke = 0;
                  for (const _e of O) {
                    _e.image.Ka != Et && (t.bindTexture(t.TEXTURE_2D, _e.image.Ja || null), Et = _e.image.Ka), _e.mc ? (t.scissor(_e.Ya, se - _e.Za - _e.jb, _e.Ac, _e.jb), Qe = !0) : Qe && (t.scissor(0, se - W, G, W), Qe = !1), O = 2 / G;
                    const ut = -2 / W;
                    t.uniform4f(a, _e.ha[0] * O * _e.Ba, _e.ha[1] * ut * _e.Ca, _e.ha[2] * O * _e.Ba, _e.ha[3] * ut * _e.Ca), t.uniform2f(o, _e.ha[4] * O * _e.Ba + O * (_e.Ya - _e.ic * _e.Ba) - 1, _e.ha[5] * ut * _e.Ca + ut * (_e.Za - _e.jc * _e.Ca) + 1), t.vertexAttribPointer(0, 2, t.FLOAT, !1, 0, b), t.vertexAttribPointer(1, 2, t.FLOAT, !1, 0, b + 4 * be), t.drawElements(t.TRIANGLES, _e.indices.length, t.UNSIGNED_SHORT, ke), b += 4 * _e.Ta.length, ke += 2 * _e.indices.length;
                  }
                  console.assert(b == 4 * be), console.assert(ke == 2 * d);
                }
              }
            }, this.canvas = function() {
              return e() && t.canvas;
            };
          }(), q = l.onRuntimeInitialized;
          l.onRuntimeInitialized = function() {
            function e(_) {
              switch (_) {
                case f.srcOver:
                  return "source-over";
                case f.screen:
                  return "screen";
                case f.overlay:
                  return "overlay";
                case f.darken:
                  return "darken";
                case f.lighten:
                  return "lighten";
                case f.colorDodge:
                  return "color-dodge";
                case f.colorBurn:
                  return "color-burn";
                case f.hardLight:
                  return "hard-light";
                case f.softLight:
                  return "soft-light";
                case f.difference:
                  return "difference";
                case f.exclusion:
                  return "exclusion";
                case f.multiply:
                  return "multiply";
                case f.hue:
                  return "hue";
                case f.saturation:
                  return "saturation";
                case f.color:
                  return "color";
                case f.luminosity:
                  return "luminosity";
              }
            }
            function t(_) {
              return "rgba(" + ((16711680 & _) >>> 16) + "," + ((65280 & _) >>> 8) + "," + ((255 & _) >>> 0) + "," + ((4278190080 & _) >>> 24) / 255 + ")";
            }
            function n() {
              0 < se.length && (Oe.Qb(b.drawWidth(), b.drawHeight(), se, ke, Qe), se = [], Qe = ke = 0, b.reset(512, 512));
              for (const _ of d) {
                for (const V of _.J) V();
                _.J = [];
              }
              d.clear();
            }
            q && q();
            var r = l.RenderPaintStyle;
            const a = l.RenderPath, o = l.RenderPaint, c = l.Renderer, h = l.StrokeCap, g = l.StrokeJoin, f = l.BlendMode, N = r.fill, U = r.stroke, Y = l.FillRule.evenOdd;
            let G = 1;
            var W = l.RenderImage.extend("CanvasRenderImage", { __construct: function({ la: _, xa: V } = {}) {
              this.__parent.__construct.call(this), this.Ka = G, G = G + 1 & 2147483647 || 1, this.la = _, this.xa = V;
            }, __destruct: function() {
              this.Ja && (Oe.Mb(this.Ja), URL.revokeObjectURL(this.Wa)), this.__parent.__destruct.call(this);
            }, decode: function(_) {
              var V = this;
              V.xa && V.xa(V);
              var we = new Image();
              V.Wa = URL.createObjectURL(new Blob([_], { type: "image/png" })), we.onload = function() {
                V.Fb = we, V.Ja = Oe.Lb(we), V.size(we.width, we.height), V.la && V.la(V);
              }, we.src = V.Wa;
            } }), O = a.extend("CanvasRenderPath", { __construct: function() {
              this.__parent.__construct.call(this), this.T = new Path2D();
            }, rewind: function() {
              this.T = new Path2D();
            }, addPath: function(_, V, we, Ae, me, Te, Pe) {
              var Se = this.T, et = Se.addPath;
              _ = _.T;
              const Ye = new DOMMatrix();
              Ye.a = V, Ye.b = we, Ye.c = Ae, Ye.d = me, Ye.e = Te, Ye.f = Pe, et.call(Se, _, Ye);
            }, fillRule: function(_) {
              this.Va = _;
            }, moveTo: function(_, V) {
              this.T.moveTo(_, V);
            }, lineTo: function(_, V) {
              this.T.lineTo(_, V);
            }, cubicTo: function(_, V, we, Ae, me, Te) {
              this.T.bezierCurveTo(_, V, we, Ae, me, Te);
            }, close: function() {
              this.T.closePath();
            } }), be = o.extend("CanvasRenderPaint", { color: function(_) {
              this.Xa = t(_);
            }, thickness: function(_) {
              this.Ib = _;
            }, join: function(_) {
              switch (_) {
                case g.miter:
                  this.Ia = "miter";
                  break;
                case g.round:
                  this.Ia = "round";
                  break;
                case g.bevel:
                  this.Ia = "bevel";
              }
            }, cap: function(_) {
              switch (_) {
                case h.butt:
                  this.Ha = "butt";
                  break;
                case h.round:
                  this.Ha = "round";
                  break;
                case h.square:
                  this.Ha = "square";
              }
            }, style: function(_) {
              this.Hb = _;
            }, blendMode: function(_) {
              this.Eb = e(_);
            }, clearGradient: function() {
              this.ja = null;
            }, linearGradient: function(_, V, we, Ae) {
              this.ja = { yb: _, zb: V, bb: we, cb: Ae, Ra: [] };
            }, radialGradient: function(_, V, we, Ae) {
              this.ja = { yb: _, zb: V, bb: we, cb: Ae, Ra: [], ec: !0 };
            }, addStop: function(_, V) {
              this.ja.Ra.push({ color: _, stop: V });
            }, completeGradient: function() {
            }, draw: function(_, V, we) {
              let Ae = this.Hb;
              var me = this.Xa, Te = this.ja;
              if (_.globalCompositeOperation = this.Eb, Te != null) {
                me = Te.yb;
                var Pe = Te.zb;
                const et = Te.bb;
                var Se = Te.cb;
                const Ye = Te.Ra;
                Te.ec ? (Te = et - me, Se -= Pe, me = _.createRadialGradient(me, Pe, 0, me, Pe, Math.sqrt(Te * Te + Se * Se))) : me = _.createLinearGradient(me, Pe, et, Se);
                for (let ct = 0, ze = Ye.length; ct < ze; ct++) Pe = Ye[ct], me.addColorStop(Pe.stop, t(Pe.color));
                this.Xa = me, this.ja = null;
              }
              switch (Ae) {
                case U:
                  _.strokeStyle = me, _.lineWidth = this.Ib, _.lineCap = this.Ha, _.lineJoin = this.Ia, _.stroke(V);
                  break;
                case N:
                  _.fillStyle = me, _.fill(V, we);
              }
            } });
            const d = /* @__PURE__ */ new Set();
            let b = null, se = [], ke = 0, Qe = 0;
            var Et = l.CanvasRenderer = c.extend("Renderer", { __construct: function(_) {
              this.__parent.__construct.call(this), this.S = [1, 0, 0, 1, 0, 0], this.C = _.getContext("2d"), this.Ua = _, this.J = [];
            }, save: function() {
              this.S.push(...this.S.slice(this.S.length - 6)), this.J.push(this.C.save.bind(this.C));
            }, restore: function() {
              const _ = this.S.length - 6;
              if (6 > _) throw "restore() called without matching save().";
              this.S.splice(_), this.J.push(this.C.restore.bind(this.C));
            }, transform: function(_, V, we, Ae, me, Te) {
              const Pe = this.S, Se = Pe.length - 6;
              Pe.splice(Se, 6, Pe[Se] * _ + Pe[Se + 2] * V, Pe[Se + 1] * _ + Pe[Se + 3] * V, Pe[Se] * we + Pe[Se + 2] * Ae, Pe[Se + 1] * we + Pe[Se + 3] * Ae, Pe[Se] * me + Pe[Se + 2] * Te + Pe[Se + 4], Pe[Se + 1] * me + Pe[Se + 3] * Te + Pe[Se + 5]), this.J.push(this.C.transform.bind(this.C, _, V, we, Ae, me, Te));
            }, rotate: function(_) {
              const V = Math.sin(_);
              _ = Math.cos(_), this.transform(_, V, -V, _, 0, 0);
            }, _drawPath: function(_, V) {
              this.J.push(V.draw.bind(V, this.C, _.T, _.Va === Y ? "evenodd" : "nonzero"));
            }, _drawRiveImage: function(_, V, we) {
              var Ae = _.Fb;
              if (Ae) {
                var me = this.C, Te = e(V);
                this.J.push(function() {
                  me.globalCompositeOperation = Te, me.globalAlpha = we, me.drawImage(Ae, 0, 0), me.globalAlpha = 1;
                });
              }
            }, _getMatrix: function(_) {
              const V = this.S, we = V.length - 6;
              for (let Ae = 0; 6 > Ae; ++Ae) _[Ae] = V[we + Ae];
            }, _drawImageMesh: function(_, V, we, Ae, me, Te, Pe, Se, et, Ye) {
              var ct = this.C.canvas.width, ze = this.C.canvas.height;
              const Tr = et - Pe, Pr = Ye - Se;
              Pe = Math.max(Pe, 0), Se = Math.max(Se, 0), et = Math.min(et, ct), Ye = Math.min(Ye, ze);
              const Bt = et - Pe, Ut = Ye - Se;
              if (console.assert(Bt <= Math.min(Tr, ct)), console.assert(Ut <= Math.min(Pr, ze)), !(0 >= Bt || 0 >= Ut)) {
                et = Bt < Tr || Ut < Pr, ct = Ye = 1;
                var Ct = Math.ceil(Bt * Ye), Tt = Math.ceil(Ut * ct);
                ze = Oe.hc(), Ct > ze && (Ye *= ze / Ct, Ct = ze), Tt > ze && (ct *= ze / Tt, Tt = ze), b || (b = new l.DynamicRectanizer(ze), b.reset(512, 512)), 0 > (ze = b.addRect(Ct, Tt)) && (n(), d.add(this), ze = b.addRect(Ct, Tt), console.assert(0 <= ze));
                var Rr = 65535 & ze, Lr = ze >> 16;
                se.push({ ha: this.S.slice(this.S.length - 6), image: _, Ya: Rr, Za: Lr, ic: Pe, jc: Se, Ac: Ct, jb: Tt, Ba: Ye, Ca: ct, Ta: new Float32Array(Ae), Db: new Float32Array(me), indices: new Uint16Array(Te), mc: et, wb: _.Ka << 1 | (et ? 1 : 0) }), ke += Ae.length, Qe += Te.length;
                var xt = this.C, ei = e(V);
                this.J.push(function() {
                  xt.save(), xt.resetTransform(), xt.globalCompositeOperation = ei, xt.globalAlpha = we;
                  const Sr = Oe.canvas();
                  Sr && xt.drawImage(Sr, Rr, Lr, Ct, Tt, Pe, Se, Bt, Ut), xt.restore();
                });
              }
            }, _clipPath: function(_) {
              this.J.push(this.C.clip.bind(this.C, _.T, _.Va === Y ? "evenodd" : "nonzero"));
            }, clear: function() {
              d.add(this), this.J.push(this.C.clearRect.bind(this.C, 0, 0, this.Ua.width, this.Ua.height));
            }, flush: function() {
            }, translate: function(_, V) {
              this.transform(1, 0, 0, 1, _, V);
            } });
            l.makeRenderer = function(_) {
              const V = new Et(_), we = V.C;
              return new Proxy(V, { get(Ae, me) {
                if (typeof Ae[me] == "function") return function(...Te) {
                  return Ae[me].apply(Ae, Te);
                };
                if (typeof we[me] == "function") {
                  if (-1 < Ne.indexOf(me)) throw Error("RiveException: Method call to '" + me + "()' is not allowed, as the renderer cannot immediately pass through the return                 values of any canvas 2d context methods.");
                  return function(...Te) {
                    V.J.push(we[me].bind(we, ...Te));
                  };
                }
                return Ae[me];
              }, set(Ae, me, Te) {
                if (me in we) return we[me] = Te, !0;
              } });
            }, l.decodeImage = function(_, V) {
              new W({ la: V }).decode(_);
            }, l.renderFactory = { makeRenderPaint: function() {
              return new be();
            }, makeRenderPath: function() {
              return new O();
            }, makeRenderImage: function() {
              let _ = ut;
              return new W({ xa: () => {
                _.total++;
              }, la: () => {
                if (_.loaded++, _.loaded === _.total) {
                  const V = _.ready;
                  V && (V(), _.ready = null);
                }
              } });
            } };
            let _e = l.load, ut = null;
            l.load = function(_, V, we = !0) {
              const Ae = new l.FallbackFileAssetLoader();
              return V !== void 0 && Ae.addLoader(V), we && (V = new l.CDNFileAssetLoader(), Ae.addLoader(V)), new Promise(function(me) {
                let Te = null;
                ut = { total: 0, loaded: 0, ready: function() {
                  me(Te);
                } }, Te = _e(_, Ae), ut.total == 0 && me(Te);
              });
            }, r = new xe(), l.requestAnimationFrame = r.requestAnimationFrame.bind(r), l.cancelAnimationFrame = r.cancelAnimationFrame.bind(r), l.enableFPSCounter = r.Rb.bind(r), l.disableFPSCounter = r.Ob, r.ob = n, l.resolveAnimationFrame = n, l.cleanup = function() {
              b && b.delete();
            };
          };
          var De, Ue, C = Object.assign({}, l), m = "./this.program", F = typeof window == "object", K = typeof importScripts == "function", M = "";
          (F || K) && (K ? M = self.location.href : typeof document < "u" && document.currentScript && (M = document.currentScript.src), he && (M = he), M = M.indexOf("blob:") !== 0 ? M.substr(0, M.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "", K && (Ue = (e) => {
            var t = new XMLHttpRequest();
            return t.open("GET", e, !1), t.responseType = "arraybuffer", t.send(null), new Uint8Array(t.response);
          }), De = (e, t, n) => {
            var r = new XMLHttpRequest();
            r.open("GET", e, !0), r.responseType = "arraybuffer", r.onload = () => {
              r.status == 200 || r.status == 0 && r.response ? t(r.response) : n();
            }, r.onerror = n, r.send(null);
          });
          var ue, pe = l.print || console.log.bind(console), Ee = l.printErr || console.error.bind(console);
          Object.assign(l, C), C = null, l.thisProgram && (m = l.thisProgram), l.wasmBinary && (ue = l.wasmBinary), l.noExitRuntime, typeof WebAssembly != "object" && We("no native wasm support detected");
          var Re, I, le, re, Fe, Xe, fe, Ce, s, i, u = !1;
          function p() {
            var e = Re.buffer;
            l.HEAP8 = le = new Int8Array(e), l.HEAP16 = Fe = new Int16Array(e), l.HEAP32 = fe = new Int32Array(e), l.HEAPU8 = re = new Uint8Array(e), l.HEAPU16 = Xe = new Uint16Array(e), l.HEAPU32 = Ce = new Uint32Array(e), l.HEAPF32 = s = new Float32Array(e), l.HEAPF64 = i = new Float64Array(e);
          }
          var v, $ = [], T = [], ne = [];
          function Le() {
            var e = l.preRun.shift();
            $.unshift(e);
          }
          var ye, H = 0, $e = null;
          function We(e) {
            throw l.onAbort && l.onAbort(e), Ee(e = "Aborted(" + e + ")"), u = !0, e = new WebAssembly.RuntimeError(e + ". Build with -sASSERTIONS for more info."), ce(e), e;
          }
          function Me(e) {
            return e.startsWith("data:application/octet-stream;base64,");
          }
          if (!Me(ye = "canvas_advanced.wasm")) {
            var Ke = ye;
            ye = l.locateFile ? l.locateFile(Ke, M) : M + Ke;
          }
          function tt(e) {
            if (e == ye && ue) return new Uint8Array(ue);
            if (Ue) return Ue(e);
            throw "both async and sync fetching of the wasm failed";
          }
          function E(e, t, n) {
            return function(r) {
              if (!ue && (F || K)) {
                if (typeof fetch == "function" && !r.startsWith("file://")) return fetch(r, { credentials: "same-origin" }).then((a) => {
                  if (!a.ok) throw "failed to load wasm binary file at '" + r + "'";
                  return a.arrayBuffer();
                }).catch(() => tt(r));
                if (De) return new Promise((a, o) => {
                  De(r, (c) => a(new Uint8Array(c)), o);
                });
              }
              return Promise.resolve().then(() => tt(r));
            }(e).then((r) => WebAssembly.instantiate(r, t)).then((r) => r).then(n, (r) => {
              Ee("failed to asynchronously prepare wasm: " + r), We(r);
            });
          }
          var y, j, ie = { 430124: (e, t, n, r, a) => {
            if (typeof window > "u" || (window.AudioContext || window.webkitAudioContext) === void 0) return 0;
            if (window.h === void 0) {
              window.h = { Aa: 0 }, window.h.H = {}, window.h.H.ya = e, window.h.H.capture = t, window.h.H.La = n, window.h.ga = {}, window.h.ga.stopped = r, window.h.ga.xb = a;
              let o = window.h;
              o.D = [], o.yc = function(c) {
                for (var h = 0; h < o.D.length; ++h) if (o.D[h] == null) return o.D[h] = c, h;
                return o.D.push(c), o.D.length - 1;
              }, o.Cb = function(c) {
                for (o.D[c] = null; 0 < o.D.length && o.D[o.D.length - 1] == null; ) o.D.pop();
              }, o.Sc = function(c) {
                for (var h = 0; h < o.D.length; ++h) if (o.D[h] == c) return o.Cb(h);
              }, o.ra = function(c) {
                return o.D[c];
              }, o.Bb = ["touchend", "click"], o.unlock = function() {
                for (var c = 0; c < o.D.length; ++c) {
                  var h = o.D[c];
                  h != null && h.I != null && h.state === o.ga.xb && h.I.resume().then(() => {
                    br(h.pb);
                  }, (g) => {
                    console.error("Failed to resume audiocontext", g);
                  });
                }
                o.Bb.map(function(g) {
                  document.removeEventListener(g, o.unlock, !0);
                });
              }, o.Bb.map(function(c) {
                document.addEventListener(c, o.unlock, !0);
              });
            }
            return window.h.Aa += 1, 1;
          }, 432302: () => {
            window.h !== void 0 && (--window.h.Aa, window.h.Aa === 0 && delete window.h);
          }, 432466: () => navigator.mediaDevices !== void 0 && navigator.mediaDevices.getUserMedia !== void 0, 432570: () => {
            try {
              var e = new (window.AudioContext || window.webkitAudioContext)(), t = e.sampleRate;
              return e.close(), t;
            } catch {
              return 0;
            }
          }, 432741: (e, t, n, r, a, o) => {
            if (window.h === void 0) return -1;
            var c = {}, h = {};
            return e == window.h.H.ya && n != 0 && (h.sampleRate = n), c.I = new (window.AudioContext || window.webkitAudioContext)(h), c.I.suspend(), c.state = window.h.ga.stopped, n = 0, e != window.h.H.ya && (n = t), c.Z = c.I.createScriptProcessor(r, n, t), c.Z.onaudioprocess = function(g) {
              if (c.sa != null && c.sa.length != 0 || (c.sa = new Float32Array(s.buffer, a, r * t)), e == window.h.H.capture || e == window.h.H.La) {
                for (var f = 0; f < t; f += 1) for (var N = g.inputBuffer.getChannelData(f), U = c.sa, Y = 0; Y < r; Y += 1) U[Y * t + f] = N[Y];
                _r(o, r, a);
              }
              if (e == window.h.H.ya || e == window.h.H.La) for (wr(o, r, a), f = 0; f < g.outputBuffer.numberOfChannels; ++f) for (N = g.outputBuffer.getChannelData(f), U = c.sa, Y = 0; Y < r; Y += 1) N[Y] = U[Y * t + f];
              else for (f = 0; f < g.outputBuffer.numberOfChannels; ++f) g.outputBuffer.getChannelData(f).fill(0);
            }, e != window.h.H.capture && e != window.h.H.La || navigator.mediaDevices.getUserMedia({ audio: !0, video: !1 }).then(function(g) {
              c.Da = c.I.createMediaStreamSource(g), c.Da.connect(c.Z), c.Z.connect(c.I.destination);
            }).catch(function(g) {
              console.log("Failed to get user media: " + g);
            }), e == window.h.H.ya && c.Z.connect(c.I.destination), c.pb = o, window.h.yc(c);
          }, 435618: (e) => window.h.ra(e).I.sampleRate, 435691: (e) => {
            (e = window.h.ra(e)).Z !== void 0 && (e.Z.onaudioprocess = function() {
            }, e.Z.disconnect(), e.Z = void 0), e.Da !== void 0 && (e.Da.disconnect(), e.Da = void 0), e.I.close(), e.I = void 0, e.pb = void 0;
          }, 436091: (e) => {
            window.h.Cb(e);
          }, 436141: (e) => {
            (e = window.h.ra(e)).I.resume(), e.state = window.h.ga.xb;
          }, 436280: (e) => {
            (e = window.h.ra(e)).I.suspend(), e.state = window.h.ga.stopped;
          } }, J = (e) => {
            for (; 0 < e.length; ) e.shift()(l);
          }, ve = (e, t) => {
            for (var n = 0, r = e.length - 1; 0 <= r; r--) {
              var a = e[r];
              a === "." ? e.splice(r, 1) : a === ".." ? (e.splice(r, 1), n++) : n && (e.splice(r, 1), n--);
            }
            if (t) for (; n; n--) e.unshift("..");
            return e;
          }, je = (e) => {
            var t = e.charAt(0) === "/", n = e.substr(-1) === "/";
            return (e = ve(e.split("/").filter((r) => !!r), !t).join("/")) || t || (e = "."), e && n && (e += "/"), (t ? "/" : "") + e;
          }, qe = (e) => {
            var t = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(e).slice(1);
            return e = t[0], t = t[1], e || t ? (t && (t = t.substr(0, t.length - 1)), e + t) : ".";
          }, He = (e) => {
            if (e === "/") return "/";
            var t = (e = (e = je(e)).replace(/\/$/, "")).lastIndexOf("/");
            return t === -1 ? e : e.substr(t + 1);
          }, ht = (e) => (ht = (() => {
            if (typeof crypto == "object" && typeof crypto.getRandomValues == "function") return (t) => crypto.getRandomValues(t);
            We("initRandomDevice");
          })())(e);
          function it() {
            for (var e = "", t = !1, n = arguments.length - 1; -1 <= n && !t; n--) {
              if (typeof (t = 0 <= n ? arguments[n] : "/") != "string") throw new TypeError("Arguments to path.resolve must be strings");
              if (!t) return "";
              e = t + "/" + e, t = t.charAt(0) === "/";
            }
            return (t ? "/" : "") + (e = ve(e.split("/").filter((r) => !!r), !t).join("/")) || ".";
          }
          var at = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void 0, gt = (e, t, n) => {
            var r = t + n;
            for (n = t; e[n] && !(n >= r); ) ++n;
            if (16 < n - t && e.buffer && at) return at.decode(e.subarray(t, n));
            for (r = ""; t < n; ) {
              var a = e[t++];
              if (128 & a) {
                var o = 63 & e[t++];
                if ((224 & a) == 192) r += String.fromCharCode((31 & a) << 6 | o);
                else {
                  var c = 63 & e[t++];
                  65536 > (a = (240 & a) == 224 ? (15 & a) << 12 | o << 6 | c : (7 & a) << 18 | o << 12 | c << 6 | 63 & e[t++]) ? r += String.fromCharCode(a) : (a -= 65536, r += String.fromCharCode(55296 | a >> 10, 56320 | 1023 & a));
                }
              } else r += String.fromCharCode(a);
            }
            return r;
          }, dn = [], kn = (e) => {
            for (var t = 0, n = 0; n < e.length; ++n) {
              var r = e.charCodeAt(n);
              127 >= r ? t++ : 2047 >= r ? t += 2 : 55296 <= r && 57343 >= r ? (t += 4, ++n) : t += 3;
            }
            return t;
          }, On = (e, t, n, r) => {
            if (!(0 < r)) return 0;
            var a = n;
            r = n + r - 1;
            for (var o = 0; o < e.length; ++o) {
              var c = e.charCodeAt(o);
              if (55296 <= c && 57343 >= c && (c = 65536 + ((1023 & c) << 10) | 1023 & e.charCodeAt(++o)), 127 >= c) {
                if (n >= r) break;
                t[n++] = c;
              } else {
                if (2047 >= c) {
                  if (n + 1 >= r) break;
                  t[n++] = 192 | c >> 6;
                } else {
                  if (65535 >= c) {
                    if (n + 2 >= r) break;
                    t[n++] = 224 | c >> 12;
                  } else {
                    if (n + 3 >= r) break;
                    t[n++] = 240 | c >> 18, t[n++] = 128 | c >> 12 & 63;
                  }
                  t[n++] = 128 | c >> 6 & 63;
                }
                t[n++] = 128 | 63 & c;
              }
            }
            return t[n] = 0, n - a;
          };
          function In(e, t) {
            var n = Array(kn(e) + 1);
            return e = On(e, n, 0, n.length), t && (n.length = e), n;
          }
          var Fn = [];
          function $n(e, t) {
            Fn[e] = { input: [], F: [], V: t }, gn(e, Or);
          }
          var Or = { open: function(e) {
            var t = Fn[e.node.za];
            if (!t) throw new X(43);
            e.s = t, e.seekable = !1;
          }, close: function(e) {
            e.s.V.qa(e.s);
          }, qa: function(e) {
            e.s.V.qa(e.s);
          }, read: function(e, t, n, r) {
            if (!e.s || !e.s.V.ib) throw new X(60);
            for (var a = 0, o = 0; o < r; o++) {
              try {
                var c = e.s.V.ib(e.s);
              } catch {
                throw new X(29);
              }
              if (c === void 0 && a === 0) throw new X(6);
              if (c == null) break;
              a++, t[n + o] = c;
            }
            return a && (e.node.timestamp = Date.now()), a;
          }, write: function(e, t, n, r) {
            if (!e.s || !e.s.V.Oa) throw new X(60);
            try {
              for (var a = 0; a < r; a++) e.s.V.Oa(e.s, t[n + a]);
            } catch {
              throw new X(29);
            }
            return r && (e.node.timestamp = Date.now()), a;
          } }, Ir = { ib: function() {
            e: {
              if (!dn.length) {
                var e = null;
                if (typeof window < "u" && typeof window.prompt == "function" ? (e = window.prompt("Input: ")) !== null && (e += `
`) : typeof readline == "function" && (e = readline()) !== null && (e += `
`), !e) {
                  e = null;
                  break e;
                }
                dn = In(e, !0);
              }
              e = dn.shift();
            }
            return e;
          }, Oa: function(e, t) {
            t === null || t === 10 ? (pe(gt(e.F, 0)), e.F = []) : t != 0 && e.F.push(t);
          }, qa: function(e) {
            e.F && 0 < e.F.length && (pe(gt(e.F, 0)), e.F = []);
          }, bc: function() {
            return { Fc: 25856, Hc: 5, Ec: 191, Gc: 35387, Dc: [3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] };
          }, cc: function() {
            return 0;
          }, dc: function() {
            return [24, 80];
          } }, Fr = { Oa: function(e, t) {
            t === null || t === 10 ? (Ee(gt(e.F, 0)), e.F = []) : t != 0 && e.F.push(t);
          }, qa: function(e) {
            e.F && 0 < e.F.length && (Ee(gt(e.F, 0)), e.F = []);
          } };
          function Nn(e, t) {
            var n = e.j ? e.j.length : 0;
            n >= t || (t = Math.max(t, n * (1048576 > n ? 2 : 1.125) >>> 0), n != 0 && (t = Math.max(t, 256)), n = e.j, e.j = new Uint8Array(t), 0 < e.v && e.j.set(n.subarray(0, e.v), 0));
          }
          var Dn, pn, Wt, Yt, ge = { O: null, U: () => ge.createNode(null, "/", 16895, 0), createNode(e, t, n, r) {
            if ((61440 & n) == 24576 || (61440 & n) == 4096) throw new X(63);
            return ge.O || (ge.O = { dir: { node: { Y: ge.l.Y, P: ge.l.P, ka: ge.l.ka, va: ge.l.va, ub: ge.l.ub, Ab: ge.l.Ab, vb: ge.l.vb, sb: ge.l.sb, Ea: ge.l.Ea }, stream: { ba: ge.m.ba } }, file: { node: { Y: ge.l.Y, P: ge.l.P }, stream: { ba: ge.m.ba, read: ge.m.read, write: ge.m.write, pa: ge.m.pa, lb: ge.m.lb, nb: ge.m.nb } }, link: { node: { Y: ge.l.Y, P: ge.l.P, ma: ge.l.ma }, stream: {} }, $a: { node: { Y: ge.l.Y, P: ge.l.P }, stream: Nr } }), (61440 & (n = Xn(e, t, n, r)).mode) == 16384 ? (n.l = ge.O.dir.node, n.m = ge.O.dir.stream, n.j = {}) : (61440 & n.mode) == 32768 ? (n.l = ge.O.file.node, n.m = ge.O.file.stream, n.v = 0, n.j = null) : (61440 & n.mode) == 40960 ? (n.l = ge.O.link.node, n.m = ge.O.link.stream) : (61440 & n.mode) == 8192 && (n.l = ge.O.$a.node, n.m = ge.O.$a.stream), n.timestamp = Date.now(), e && (e.j[t] = n, e.timestamp = n.timestamp), n;
          }, Kc: (e) => e.j ? e.j.subarray ? e.j.subarray(0, e.v) : new Uint8Array(e.j) : new Uint8Array(0), l: { Y(e) {
            var t = {};
            return t.Jc = (61440 & e.mode) == 8192 ? e.id : 1, t.Mc = e.id, t.mode = e.mode, t.Oc = 1, t.uid = 0, t.Lc = 0, t.za = e.za, (61440 & e.mode) == 16384 ? t.size = 4096 : (61440 & e.mode) == 32768 ? t.size = e.v : (61440 & e.mode) == 40960 ? t.size = e.link.length : t.size = 0, t.Bc = new Date(e.timestamp), t.Nc = new Date(e.timestamp), t.Ic = new Date(e.timestamp), t.Jb = 4096, t.Cc = Math.ceil(t.size / t.Jb), t;
          }, P(e, t) {
            if (t.mode !== void 0 && (e.mode = t.mode), t.timestamp !== void 0 && (e.timestamp = t.timestamp), t.size !== void 0 && (t = t.size, e.v != t)) if (t == 0) e.j = null, e.v = 0;
            else {
              var n = e.j;
              e.j = new Uint8Array(t), n && e.j.set(n.subarray(0, Math.min(t, e.v))), e.v = t;
            }
          }, ka() {
            throw vn[44];
          }, va: (e, t, n, r) => ge.createNode(e, t, n, r), ub(e, t, n) {
            if ((61440 & e.mode) == 16384) {
              try {
                var r = Gt(t, n);
              } catch {
              }
              if (r) for (var a in r.j) throw new X(55);
            }
            delete e.parent.j[e.name], e.parent.timestamp = Date.now(), e.name = n, t.j[n] = e, t.timestamp = e.parent.timestamp, e.parent = t;
          }, Ab(e, t) {
            delete e.j[t], e.timestamp = Date.now();
          }, vb(e, t) {
            var n, r = Gt(e, t);
            for (n in r.j) throw new X(55);
            delete e.j[t], e.timestamp = Date.now();
          }, sb(e) {
            var t, n = [".", ".."];
            for (t in e.j) e.j.hasOwnProperty(t) && n.push(t);
            return n;
          }, Ea: (e, t, n) => ((e = ge.createNode(e, t, 41471, 0)).link = n, e), ma(e) {
            if ((61440 & e.mode) != 40960) throw new X(28);
            return e.link;
          } }, m: { read(e, t, n, r, a) {
            var o = e.node.j;
            if (a >= e.node.v) return 0;
            if (8 < (e = Math.min(e.node.v - a, r)) && o.subarray) t.set(o.subarray(a, a + e), n);
            else for (r = 0; r < e; r++) t[n + r] = o[a + r];
            return e;
          }, write(e, t, n, r, a, o) {
            if (t.buffer === le.buffer && (o = !1), !r) return 0;
            if ((e = e.node).timestamp = Date.now(), t.subarray && (!e.j || e.j.subarray)) {
              if (o) return e.j = t.subarray(n, n + r), e.v = r;
              if (e.v === 0 && a === 0) return e.j = t.slice(n, n + r), e.v = r;
              if (a + r <= e.v) return e.j.set(t.subarray(n, n + r), a), r;
            }
            if (Nn(e, a + r), e.j.subarray && t.subarray) e.j.set(t.subarray(n, n + r), a);
            else for (o = 0; o < r; o++) e.j[a + o] = t[n + o];
            return e.v = Math.max(e.v, a + r), r;
          }, ba(e, t, n) {
            if (n === 1 ? t += e.position : n === 2 && (61440 & e.node.mode) == 32768 && (t += e.node.v), 0 > t) throw new X(28);
            return t;
          }, pa(e, t, n) {
            Nn(e.node, t + n), e.node.v = Math.max(e.node.v, t + n);
          }, lb(e, t, n, r, a) {
            if ((61440 & e.node.mode) != 32768) throw new X(43);
            if (e = e.node.j, 2 & a || e.buffer !== le.buffer) {
              if ((0 < n || n + t < e.length) && (e = e.subarray ? e.subarray(n, n + t) : Array.prototype.slice.call(e, n, n + t)), n = !0, We(), !(t = void 0)) throw new X(48);
              le.set(e, t);
            } else n = !1, t = e.byteOffset;
            return { o: t, M: n };
          }, nb: (e, t, n, r) => (ge.m.write(e, t, 0, r, n, !1), 0) } }, mn = null, Bn = {}, Xt = [], $r = 1, jt = null, Un = !0, X = null, vn = {}, _t = (e, t = {}) => {
            if (!(e = it(e))) return { path: "", node: null };
            if (8 < (t = Object.assign({ gb: !0, Qa: 0 }, t)).Qa) throw new X(32);
            e = e.split("/").filter((c) => !!c);
            for (var n = mn, r = "/", a = 0; a < e.length; a++) {
              var o = a === e.length - 1;
              if (o && t.parent) break;
              if (n = Gt(n, e[a]), r = je(r + "/" + e[a]), n.wa && (!o || o && t.gb) && (n = n.wa.root), !o || t.fb) {
                for (o = 0; (61440 & n.mode) == 40960; ) if (n = Dr(r), r = it(qe(r), n), n = _t(r, { Qa: t.Qa + 1 }).node, 40 < o++) throw new X(32);
              }
            }
            return { path: r, node: n };
          }, Wn = (e) => {
            for (var t; ; ) {
              if (e === e.parent) return e = e.U.mb, t ? e[e.length - 1] !== "/" ? `${e}/${t}` : e + t : e;
              t = t ? `${e.name}/${t}` : e.name, e = e.parent;
            }
          }, Yn = (e, t) => {
            for (var n = 0, r = 0; r < t.length; r++) n = (n << 5) - n + t.charCodeAt(r) | 0;
            return (e + n >>> 0) % jt.length;
          }, Gt = (e, t) => {
            var n;
            if (n = (n = zt(e, "x")) ? n : e.l.ka ? 0 : 2) throw new X(n, e);
            for (n = jt[Yn(e.id, t)]; n; n = n.lc) {
              var r = n.name;
              if (n.parent.id === e.id && r === t) return n;
            }
            return e.l.ka(e, t);
          }, Xn = (e, t, n, r) => (e = new vr(e, t, n, r), t = Yn(e.parent.id, e.name), e.lc = jt[t], jt[t] = e), Gn = (e) => {
            var t = ["r", "w", "rw"][3 & e];
            return 512 & e && (t += "w"), t;
          }, zt = (e, t) => Un ? 0 : !t.includes("r") || 292 & e.mode ? t.includes("w") && !(146 & e.mode) || t.includes("x") && !(73 & e.mode) ? 2 : 0 : 2, zn = (e, t) => {
            try {
              return Gt(e, t), 20;
            } catch {
            }
            return zt(e, "wx");
          }, yt = (e) => {
            if (!(e = Xt[e])) throw new X(8);
            return e;
          }, Hn = (e, t = -1) => (Wt || ((Wt = function() {
            this.h = {};
          }).prototype = {}, Object.defineProperties(Wt.prototype, { object: { get() {
            return this.node;
          }, set(n) {
            this.node = n;
          } }, flags: { get() {
            return this.h.flags;
          }, set(n) {
            this.h.flags = n;
          } }, position: { get() {
            return this.h.position;
          }, set(n) {
            this.h.position = n;
          } } })), e = Object.assign(new Wt(), e), t == -1 && (t = (() => {
            for (var n = 0; 4096 >= n; n++) if (!Xt[n]) return n;
            throw new X(33);
          })()), e.X = t, Xt[t] = e), Nr = { open: (e) => {
            e.m = Bn[e.node.za].m, e.m.open && e.m.open(e);
          }, ba: () => {
            throw new X(70);
          } }, gn = (e, t) => {
            Bn[e] = { m: t };
          }, Vn = (e, t) => {
            var n = t === "/", r = !t;
            if (n && mn) throw new X(10);
            if (!n && !r) {
              var a = _t(t, { gb: !1 });
              if (t = a.path, (a = a.node).wa) throw new X(10);
              if ((61440 & a.mode) != 16384) throw new X(54);
            }
            t = { type: e, Qc: {}, mb: t, kc: [] }, (e = e.U(t)).U = t, t.root = e, n ? mn = e : a && (a.wa = t, a.U && a.U.kc.push(t));
          }, nt = (e, t, n) => {
            var r = _t(e, { parent: !0 }).node;
            if (!(e = He(e)) || e === "." || e === "..") throw new X(28);
            var a = zn(r, e);
            if (a) throw new X(a);
            if (!r.l.va) throw new X(63);
            return r.l.va(r, e, t, n);
          }, Ht = (e, t, n) => {
            n === void 0 && (n = t, t = 438), nt(e, 8192 | t, n);
          }, yn = (e, t) => {
            if (!it(e)) throw new X(44);
            var n = _t(t, { parent: !0 }).node;
            if (!n) throw new X(44);
            t = He(t);
            var r = zn(n, t);
            if (r) throw new X(r);
            if (!n.l.Ea) throw new X(63);
            n.l.Ea(n, t, e);
          }, Dr = (e) => {
            if (!(e = _t(e).node)) throw new X(44);
            if (!e.l.ma) throw new X(28);
            return it(Wn(e.parent), e.l.ma(e));
          }, Vt = (e, t, n) => {
            if (e === "") throw new X(44);
            if (typeof t == "string") {
              var r = { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 }[t];
              if (r === void 0) throw Error(`Unknown file open mode: ${t}`);
              t = r;
            }
            if (n = 64 & t ? 4095 & (n === void 0 ? 438 : n) | 32768 : 0, typeof e == "object") var a = e;
            else {
              e = je(e);
              try {
                a = _t(e, { fb: !(131072 & t) }).node;
              } catch {
              }
            }
            if (r = !1, 64 & t) if (a) {
              if (128 & t) throw new X(20);
            } else a = nt(e, n, 0), r = !0;
            if (!a) throw new X(44);
            if ((61440 & a.mode) == 8192 && (t &= -513), 65536 & t && (61440 & a.mode) != 16384) throw new X(54);
            if (!r && (n = a ? (61440 & a.mode) == 40960 ? 32 : (61440 & a.mode) == 16384 && (Gn(t) !== "r" || 512 & t) ? 31 : zt(a, Gn(t)) : 44)) throw new X(n);
            if (512 & t && !r) {
              if (!(n = typeof (n = a) == "string" ? _t(n, { fb: !0 }).node : n).l.P) throw new X(63);
              if ((61440 & n.mode) == 16384) throw new X(31);
              if ((61440 & n.mode) != 32768) throw new X(28);
              if (r = zt(n, "w")) throw new X(r);
              n.l.P(n, { size: 0, timestamp: Date.now() });
            }
            return t &= -131713, (a = Hn({ node: a, path: Wn(a), flags: t, seekable: !0, position: 0, m: a.m, zc: [], error: !1 })).m.open && a.m.open(a), !l.logReadFiles || 1 & t || (Yt || (Yt = {}), e in Yt || (Yt[e] = 1)), a;
          }, qn = (e, t, n) => {
            if (e.X === null) throw new X(8);
            if (!e.seekable || !e.m.ba) throw new X(70);
            if (n != 0 && n != 1 && n != 2) throw new X(28);
            e.position = e.m.ba(e, t, n), e.zc = [];
          }, Kn = () => {
            X || ((X = function(e, t) {
              this.name = "ErrnoError", this.node = t, this.pc = function(n) {
                this.aa = n;
              }, this.pc(e), this.message = "FS error";
            }).prototype = Error(), X.prototype.constructor = X, [44].forEach((e) => {
              vn[e] = new X(e), vn[e].stack = "<generic error, no stack>";
            }));
          }, kt = (e, t, n) => {
            e = je("/dev/" + e);
            var r = function(o, c) {
              var h = 0;
              return o && (h |= 365), c && (h |= 146), h;
            }(!!t, !!n);
            pn || (pn = 64);
            var a = pn++ << 8;
            gn(a, { open: (o) => {
              o.seekable = !1;
            }, close: () => {
              n && n.buffer && n.buffer.length && n(10);
            }, read: (o, c, h, g) => {
              for (var f = 0, N = 0; N < g; N++) {
                try {
                  var U = t();
                } catch {
                  throw new X(29);
                }
                if (U === void 0 && f === 0) throw new X(6);
                if (U == null) break;
                f++, c[h + N] = U;
              }
              return f && (o.node.timestamp = Date.now()), f;
            }, write: (o, c, h, g) => {
              for (var f = 0; f < g; f++) try {
                n(c[h + f]);
              } catch {
                throw new X(29);
              }
              return g && (o.node.timestamp = Date.now()), f;
            } }), Ht(e, r, a);
          }, wt = {}, qt = void 0;
          function ft() {
            return fe[(qt += 4) - 4 >> 2];
          }
          function Jn(e) {
            if (e === void 0) return "_unknown";
            var t = (e = e.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
            return 48 <= t && 57 >= t ? `_${e}` : e;
          }
          function Kt(e, t) {
            return e = Jn(e), { [e]: function() {
              return t.apply(this, arguments);
            } }[e];
          }
          function Qn() {
            this.M = [void 0], this.hb = [];
          }
          var Ze = new Qn(), Lt = void 0;
          function de(e) {
            throw new Lt(e);
          }
          var rt = (e) => (e || de("Cannot use deleted val. handle = " + e), Ze.get(e).value), ot = (e) => {
            switch (e) {
              case void 0:
                return 1;
              case null:
                return 2;
              case !0:
                return 3;
              case !1:
                return 4;
              default:
                return Ze.pa({ tb: 1, value: e });
            }
          };
          function Zn(e) {
            var t = Error, n = Kt(e, function(r) {
              this.name = e, this.message = r, (r = Error(r).stack) !== void 0 && (this.stack = this.toString() + `
` + r.replace(/^Error(:[^\n]*)?\n/, ""));
            });
            return n.prototype = Object.create(t.prototype), n.prototype.constructor = n, n.prototype.toString = function() {
              return this.message === void 0 ? this.name : `${this.name}: ${this.message}`;
            }, n;
          }
          var er = void 0, tr = void 0;
          function Be(e) {
            for (var t = ""; re[e]; ) t += tr[re[e++]];
            return t;
          }
          var Ot = [];
          function bn() {
            for (; Ot.length; ) {
              var e = Ot.pop();
              e.g.fa = !1, e.delete();
            }
          }
          var It = void 0, dt = {};
          function _n(e, t) {
            for (t === void 0 && de("ptr should not be undefined"); e.A; ) t = e.na(t), e = e.A;
            return t;
          }
          var At = {};
          function nr(e) {
            var t = Be(e = Er(e));
            return vt(e), t;
          }
          function Ft(e, t) {
            var n = At[e];
            return n === void 0 && de(t + " has unknown type " + nr(e)), n;
          }
          function Jt() {
          }
          var wn = !1;
          function rr(e) {
            --e.count.value, e.count.value === 0 && (e.G ? e.L.W(e.G) : e.u.i.W(e.o));
          }
          function ir(e, t, n) {
            return t === n ? e : n.A === void 0 || (e = ir(e, t, n.A)) === null ? null : n.Pb(e);
          }
          var ar = {}, or = void 0;
          function Qt(e) {
            throw new or(e);
          }
          function Zt(e, t) {
            return t.u && t.o || Qt("makeClassHandle requires ptr and ptrType"), !!t.L != !!t.G && Qt("Both smartPtrType and smartPtr must be specified"), t.count = { value: 1 }, $t(Object.create(e, { g: { value: t } }));
          }
          function $t(e) {
            return typeof FinalizationRegistry > "u" ? ($t = (t) => t, e) : (wn = new FinalizationRegistry((t) => {
              rr(t.g);
            }), Jt = (t) => {
              wn.unregister(t);
            }, ($t = (t) => {
              var n = t.g;
              return n.G && wn.register(t, { g: n }, t), t;
            })(e));
          }
          var en = {};
          function Nt(e) {
            for (; e.length; ) {
              var t = e.pop();
              e.pop()(t);
            }
          }
          function Dt(e) {
            return this.fromWireType(fe[e >> 2]);
          }
          var St = {}, tn = {};
          function Je(e, t, n) {
            function r(h) {
              (h = n(h)).length !== e.length && Qt("Mismatched type converter count");
              for (var g = 0; g < e.length; ++g) st(e[g], h[g]);
            }
            e.forEach(function(h) {
              tn[h] = t;
            });
            var a = Array(t.length), o = [], c = 0;
            t.forEach((h, g) => {
              At.hasOwnProperty(h) ? a[g] = At[h] : (o.push(h), St.hasOwnProperty(h) || (St[h] = []), St[h].push(() => {
                a[g] = At[h], ++c === o.length && r(a);
              }));
            }), o.length === 0 && r(a);
          }
          function nn(e) {
            switch (e) {
              case 1:
                return 0;
              case 2:
                return 1;
              case 4:
                return 2;
              case 8:
                return 3;
              default:
                throw new TypeError(`Unknown type size: ${e}`);
            }
          }
          function st(e, t, n = {}) {
            if (!("argPackAdvance" in t)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
            (function(r, a, o = {}) {
              var c = a.name;
              if (r || de(`type "${c}" must have a positive integer typeid pointer`), At.hasOwnProperty(r)) {
                if (o.$b) return;
                de(`Cannot register type '${c}' twice`);
              }
              At[r] = a, delete tn[r], St.hasOwnProperty(r) && (a = St[r], delete St[r], a.forEach((h) => h()));
            })(e, t, n);
          }
          function An(e) {
            de(e.g.u.i.name + " instance already deleted");
          }
          function bt() {
          }
          function En(e, t, n) {
            if (e[t].B === void 0) {
              var r = e[t];
              e[t] = function() {
                return e[t].B.hasOwnProperty(arguments.length) || de(`Function '${n}' called with an invalid number of arguments (${arguments.length}) - expects one of (${e[t].B})!`), e[t].B[arguments.length].apply(this, arguments);
              }, e[t].B = [], e[t].B[r.ea] = r;
            }
          }
          function Cn(e, t, n) {
            l.hasOwnProperty(e) ? ((n === void 0 || l[e].B !== void 0 && l[e].B[n] !== void 0) && de(`Cannot register public name '${e}' twice`), En(l, e, e), l.hasOwnProperty(n) && de(`Cannot register multiple overloads of a function with the same number of arguments (${n})!`), l[e].B[n] = t) : (l[e] = t, n !== void 0 && (l[e].Pc = n));
          }
          function Br(e, t, n, r, a, o, c, h) {
            this.name = e, this.constructor = t, this.N = n, this.W = r, this.A = a, this.Ub = o, this.na = c, this.Pb = h, this.qb = [];
          }
          function rn(e, t, n) {
            for (; t !== n; ) t.na || de(`Expected null or instance of ${n.name}, got an instance of ${t.name}`), e = t.na(e), t = t.A;
            return e;
          }
          function Ur(e, t) {
            return t === null ? (this.Na && de(`null is not a valid ${this.name}`), 0) : (t.g || de(`Cannot pass "${Pn(t)}" as a ${this.name}`), t.g.o || de(`Cannot pass deleted object as a pointer of type ${this.name}`), rn(t.g.o, t.g.u.i, this.i));
          }
          function Wr(e, t) {
            if (t === null) {
              if (this.Na && de(`null is not a valid ${this.name}`), this.ua) {
                var n = this.Pa();
                return e !== null && e.push(this.W, n), n;
              }
              return 0;
            }
            if (t.g || de(`Cannot pass "${Pn(t)}" as a ${this.name}`), t.g.o || de(`Cannot pass deleted object as a pointer of type ${this.name}`), !this.ta && t.g.u.ta && de(`Cannot convert argument of type ${t.g.L ? t.g.L.name : t.g.u.name} to parameter type ${this.name}`), n = rn(t.g.o, t.g.u.i, this.i), this.ua) switch (t.g.G === void 0 && de("Passing raw pointer to smart pointer is illegal"), this.tc) {
              case 0:
                t.g.L === this ? n = t.g.G : de(`Cannot convert argument of type ${t.g.L ? t.g.L.name : t.g.u.name} to parameter type ${this.name}`);
                break;
              case 1:
                n = t.g.G;
                break;
              case 2:
                if (t.g.L === this) n = t.g.G;
                else {
                  var r = t.clone();
                  n = this.oc(n, ot(function() {
                    r.delete();
                  })), e !== null && e.push(this.W, n);
                }
                break;
              default:
                de("Unsupporting sharing policy");
            }
            return n;
          }
          function Yr(e, t) {
            return t === null ? (this.Na && de(`null is not a valid ${this.name}`), 0) : (t.g || de(`Cannot pass "${Pn(t)}" as a ${this.name}`), t.g.o || de(`Cannot pass deleted object as a pointer of type ${this.name}`), t.g.u.ta && de(`Cannot convert argument of type ${t.g.u.name} to parameter type ${this.name}`), rn(t.g.o, t.g.u.i, this.i));
          }
          function pt(e, t, n, r) {
            this.name = e, this.i = t, this.Na = n, this.ta = r, this.ua = !1, this.W = this.oc = this.Pa = this.rb = this.tc = this.nc = void 0, t.A !== void 0 ? this.toWireType = Wr : (this.toWireType = r ? Ur : Yr, this.K = null);
          }
          function sr(e, t, n) {
            l.hasOwnProperty(e) || Qt("Replacing nonexistant public symbol"), l[e].B !== void 0 && n !== void 0 ? l[e].B[n] = t : (l[e] = t, l[e].ea = n);
          }
          var an = [], ur = (e) => {
            var t = an[e];
            return t || (e >= an.length && (an.length = e + 1), an[e] = t = v.get(e)), t;
          };
          function Ve(e, t) {
            var n = (e = Be(e)).includes("j") ? /* @__PURE__ */ ((r, a) => {
              var o = [];
              return function() {
                if (o.length = 0, Object.assign(o, arguments), r.includes("j")) {
                  var c = l["dynCall_" + r];
                  c = o && o.length ? c.apply(null, [a].concat(o)) : c.call(null, a);
                } else c = ur(a).apply(null, o);
                return c;
              };
            })(e, t) : ur(t);
            return typeof n != "function" && de(`unknown function pointer with signature ${e}: ${t}`), n;
          }
          var cr = void 0;
          function mt(e, t) {
            var n = [], r = {};
            throw t.forEach(function a(o) {
              r[o] || At[o] || (tn[o] ? tn[o].forEach(a) : (n.push(o), r[o] = !0));
            }), new cr(`${e}: ` + n.map(nr).join([", "]));
          }
          function on(e, t, n, r, a) {
            var o = t.length;
            2 > o && de("argTypes array size mismatch! Must at least get return value and 'this' types!");
            var c = t[1] !== null && n !== null, h = !1;
            for (n = 1; n < t.length; ++n) if (t[n] !== null && t[n].K === void 0) {
              h = !0;
              break;
            }
            var g = t[0].name !== "void", f = o - 2, N = Array(f), U = [], Y = [];
            return function() {
              if (arguments.length !== f && de(`function ${e} called with ${arguments.length} arguments, expected ${f} args!`), Y.length = 0, U.length = c ? 2 : 1, U[0] = a, c) {
                var G = t[1].toWireType(Y, this);
                U[1] = G;
              }
              for (var W = 0; W < f; ++W) N[W] = t[W + 2].toWireType(Y, arguments[W]), U.push(N[W]);
              if (W = r.apply(null, U), h) Nt(Y);
              else for (var O = c ? 1 : 2; O < t.length; O++) {
                var be = O === 1 ? G : N[O - 2];
                t[O].K !== null && t[O].K(be);
              }
              return g ? t[0].fromWireType(W) : void 0;
            };
          }
          function sn(e, t) {
            for (var n = [], r = 0; r < e; r++) n.push(Ce[t + 4 * r >> 2]);
            return n;
          }
          function lr(e, t, n) {
            return e instanceof Object || de(`${n} with invalid "this": ${e}`), e instanceof t.i.constructor || de(`${n} incompatible with "this" of type ${e.constructor.name}`), e.g.o || de(`cannot call emscripten binding method ${n} on deleted object`), rn(e.g.o, e.g.u.i, t.i);
          }
          function Tn(e) {
            e >= Ze.h && --Ze.get(e).tb == 0 && Ze.Zb(e);
          }
          function Xr(e, t, n) {
            switch (t) {
              case 0:
                return function(r) {
                  return this.fromWireType((n ? le : re)[r]);
                };
              case 1:
                return function(r) {
                  return this.fromWireType((n ? Fe : Xe)[r >> 1]);
                };
              case 2:
                return function(r) {
                  return this.fromWireType((n ? fe : Ce)[r >> 2]);
                };
              default:
                throw new TypeError("Unknown integer type: " + e);
            }
          }
          function Pn(e) {
            if (e === null) return "null";
            var t = typeof e;
            return t === "object" || t === "array" || t === "function" ? e.toString() : "" + e;
          }
          function Gr(e, t) {
            switch (t) {
              case 2:
                return function(n) {
                  return this.fromWireType(s[n >> 2]);
                };
              case 3:
                return function(n) {
                  return this.fromWireType(i[n >> 3]);
                };
              default:
                throw new TypeError("Unknown float type: " + e);
            }
          }
          function zr(e, t, n) {
            switch (t) {
              case 0:
                return n ? function(r) {
                  return le[r];
                } : function(r) {
                  return re[r];
                };
              case 1:
                return n ? function(r) {
                  return Fe[r >> 1];
                } : function(r) {
                  return Xe[r >> 1];
                };
              case 2:
                return n ? function(r) {
                  return fe[r >> 2];
                } : function(r) {
                  return Ce[r >> 2];
                };
              default:
                throw new TypeError("Unknown integer type: " + e);
            }
          }
          var hr = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void 0, Hr = (e, t) => {
            for (var n = e >> 1, r = n + t / 2; !(n >= r) && Xe[n]; ) ++n;
            if (32 < (n <<= 1) - e && hr) return hr.decode(re.subarray(e, n));
            for (n = "", r = 0; !(r >= t / 2); ++r) {
              var a = Fe[e + 2 * r >> 1];
              if (a == 0) break;
              n += String.fromCharCode(a);
            }
            return n;
          }, Vr = (e, t, n) => {
            if (n === void 0 && (n = 2147483647), 2 > n) return 0;
            var r = t;
            n = (n -= 2) < 2 * e.length ? n / 2 : e.length;
            for (var a = 0; a < n; ++a) Fe[t >> 1] = e.charCodeAt(a), t += 2;
            return Fe[t >> 1] = 0, t - r;
          }, qr = (e) => 2 * e.length, Kr = (e, t) => {
            for (var n = 0, r = ""; !(n >= t / 4); ) {
              var a = fe[e + 4 * n >> 2];
              if (a == 0) break;
              ++n, 65536 <= a ? (a -= 65536, r += String.fromCharCode(55296 | a >> 10, 56320 | 1023 & a)) : r += String.fromCharCode(a);
            }
            return r;
          }, Jr = (e, t, n) => {
            if (n === void 0 && (n = 2147483647), 4 > n) return 0;
            var r = t;
            n = r + n - 4;
            for (var a = 0; a < e.length; ++a) {
              var o = e.charCodeAt(a);
              if (55296 <= o && 57343 >= o && (o = 65536 + ((1023 & o) << 10) | 1023 & e.charCodeAt(++a)), fe[t >> 2] = o, (t += 4) + 4 > n) break;
            }
            return fe[t >> 2] = 0, t - r;
          }, Qr = (e) => {
            for (var t = 0, n = 0; n < e.length; ++n) {
              var r = e.charCodeAt(n);
              55296 <= r && 57343 >= r && ++n, t += 4;
            }
            return t;
          }, Zr = {};
          function un(e) {
            var t = Zr[e];
            return t === void 0 ? Be(e) : t;
          }
          var Rn, cn = [], fr = [], Ln = [], Sn = {}, dr = () => {
            if (!Rn) {
              var e, t = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: m || "./this.program" };
              for (e in Sn) Sn[e] === void 0 ? delete t[e] : t[e] = Sn[e];
              var n = [];
              for (e in t) n.push(`${e}=${t[e]}`);
              Rn = n;
            }
            return Rn;
          }, ln = (e) => e % 4 == 0 && (e % 100 != 0 || e % 400 == 0), pr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], mr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
          function vr(e, t, n, r) {
            e || (e = this), this.parent = e, this.U = e.U, this.wa = null, this.id = $r++, this.name = t, this.mode = n, this.l = {}, this.m = {}, this.za = r;
          }
          Object.defineProperties(vr.prototype, { read: { get: function() {
            return !(365 & ~this.mode);
          }, set: function(e) {
            e ? this.mode |= 365 : this.mode &= -366;
          } }, write: { get: function() {
            return !(146 & ~this.mode);
          }, set: function(e) {
            e ? this.mode |= 146 : this.mode &= -147;
          } } }), Kn(), jt = Array(4096), Vn(ge, "/"), nt("/tmp", 16895, 0), nt("/home", 16895, 0), nt("/home/web_user", 16895, 0), (() => {
            nt("/dev", 16895, 0), gn(259, { read: () => 0, write: (r, a, o, c) => c }), Ht("/dev/null", 259), $n(1280, Ir), $n(1536, Fr), Ht("/dev/tty", 1280), Ht("/dev/tty1", 1536);
            var e = new Uint8Array(1024), t = 0, n = () => (t === 0 && (t = ht(e).byteLength), e[--t]);
            kt("random", n), kt("urandom", n), nt("/dev/shm", 16895, 0), nt("/dev/shm/tmp", 16895, 0);
          })(), (() => {
            nt("/proc", 16895, 0);
            var e = nt("/proc/self", 16895, 0);
            nt("/proc/self/fd", 16895, 0), Vn({ U: () => {
              var t = Xn(e, "fd", 16895, 73);
              return t.l = { ka: (n, r) => {
                var a = yt(+r);
                return (n = { parent: null, U: { mb: "fake" }, l: { ma: () => a.path } }).parent = n;
              } }, t;
            } }, "/proc/self/fd");
          })(), Object.assign(Qn.prototype, { get(e) {
            return this.M[e];
          }, has(e) {
            return this.M[e] !== void 0;
          }, pa(e) {
            var t = this.hb.pop() || this.M.length;
            return this.M[t] = e, t;
          }, Zb(e) {
            this.M[e] = void 0, this.hb.push(e);
          } }), Lt = l.BindingError = class extends Error {
            constructor(e) {
              super(e), this.name = "BindingError";
            }
          }, Ze.M.push({ value: void 0 }, { value: null }, { value: !0 }, { value: !1 }), Ze.h = Ze.M.length, l.count_emval_handles = function() {
            for (var e = 0, t = Ze.h; t < Ze.M.length; ++t) Ze.M[t] !== void 0 && ++e;
            return e;
          }, er = l.PureVirtualError = Zn("PureVirtualError");
          for (var gr = Array(256), hn = 0; 256 > hn; ++hn) gr[hn] = String.fromCharCode(hn);
          tr = gr, l.getInheritedInstanceCount = function() {
            return Object.keys(dt).length;
          }, l.getLiveInheritedInstances = function() {
            var e, t = [];
            for (e in dt) dt.hasOwnProperty(e) && t.push(dt[e]);
            return t;
          }, l.flushPendingDeletes = bn, l.setDelayFunction = function(e) {
            It = e, Ot.length && It && It(bn);
          }, or = l.InternalError = class extends Error {
            constructor(e) {
              super(e), this.name = "InternalError";
            }
          }, bt.prototype.isAliasOf = function(e) {
            if (!(this instanceof bt && e instanceof bt)) return !1;
            var t = this.g.u.i, n = this.g.o, r = e.g.u.i;
            for (e = e.g.o; t.A; ) n = t.na(n), t = t.A;
            for (; r.A; ) e = r.na(e), r = r.A;
            return t === r && n === e;
          }, bt.prototype.clone = function() {
            if (this.g.o || An(this), this.g.ia) return this.g.count.value += 1, this;
            var e = $t, t = Object, n = t.create, r = Object.getPrototypeOf(this), a = this.g;
            return (e = e(n.call(t, r, { g: { value: { count: a.count, fa: a.fa, ia: a.ia, o: a.o, u: a.u, G: a.G, L: a.L } } }))).g.count.value += 1, e.g.fa = !1, e;
          }, bt.prototype.delete = function() {
            this.g.o || An(this), this.g.fa && !this.g.ia && de("Object already scheduled for deletion"), Jt(this), rr(this.g), this.g.ia || (this.g.G = void 0, this.g.o = void 0);
          }, bt.prototype.isDeleted = function() {
            return !this.g.o;
          }, bt.prototype.deleteLater = function() {
            return this.g.o || An(this), this.g.fa && !this.g.ia && de("Object already scheduled for deletion"), Ot.push(this), Ot.length === 1 && It && It(bn), this.g.fa = !0, this;
          }, pt.prototype.Vb = function(e) {
            return this.rb && (e = this.rb(e)), e;
          }, pt.prototype.ab = function(e) {
            this.W && this.W(e);
          }, pt.prototype.argPackAdvance = 8, pt.prototype.readValueFromPointer = Dt, pt.prototype.deleteObject = function(e) {
            e !== null && e.delete();
          }, pt.prototype.fromWireType = function(e) {
            function t() {
              return this.ua ? Zt(this.i.N, { u: this.nc, o: n, L: this, G: e }) : Zt(this.i.N, { u: this, o: e });
            }
            var n = this.Vb(e);
            if (!n) return this.ab(e), null;
            var r = function(o, c) {
              return c = _n(o, c), dt[c];
            }(this.i, n);
            if (r !== void 0) return r.g.count.value === 0 ? (r.g.o = n, r.g.G = e, r.clone()) : (r = r.clone(), this.ab(e), r);
            if (r = this.i.Ub(n), !(r = ar[r])) return t.call(this);
            r = this.ta ? r.Kb : r.pointerType;
            var a = ir(n, this.i, r.i);
            return a === null ? t.call(this) : this.ua ? Zt(r.i.N, { u: r, o: a, L: this, G: e }) : Zt(r.i.N, { u: r, o: a });
          }, cr = l.UnboundTypeError = Zn("UnboundTypeError");
          var yr = { __syscall_fcntl64: function(e, t, n) {
            qt = n;
            try {
              var r = yt(e);
              switch (t) {
                case 0:
                  var a = ft();
                  return 0 > a ? -28 : Hn(r, a).X;
                case 1:
                case 2:
                case 6:
                case 7:
                  return 0;
                case 3:
                  return r.flags;
                case 4:
                  return a = ft(), r.flags |= a, 0;
                case 5:
                  return a = ft(), Fe[a + 0 >> 1] = 2, 0;
                case 16:
                case 8:
                default:
                  return -28;
                case 9:
                  return fe[Ar() >> 2] = 28, -1;
              }
            } catch (o) {
              if (wt === void 0 || o.name !== "ErrnoError") throw o;
              return -o.aa;
            }
          }, __syscall_ioctl: function(e, t, n) {
            qt = n;
            try {
              var r = yt(e);
              switch (t) {
                case 21509:
                case 21510:
                case 21511:
                case 21512:
                case 21524:
                case 21515:
                  return r.s ? 0 : -59;
                case 21505:
                  if (!r.s) return -59;
                  if (r.s.V.bc) {
                    t = [3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                    var a = ft();
                    fe[a >> 2] = 25856, fe[a + 4 >> 2] = 5, fe[a + 8 >> 2] = 191, fe[a + 12 >> 2] = 35387;
                    for (var o = 0; 32 > o; o++) le[a + o + 17 | 0] = t[o] || 0;
                  }
                  return 0;
                case 21506:
                case 21507:
                case 21508:
                  if (!r.s) return -59;
                  if (r.s.V.cc) for (a = ft(), t = [], o = 0; 32 > o; o++) t.push(le[a + o + 17 | 0]);
                  return 0;
                case 21519:
                  return r.s ? (a = ft(), fe[a >> 2] = 0) : -59;
                case 21520:
                  return r.s ? -28 : -59;
                case 21531:
                  if (a = ft(), !r.m.ac) throw new X(59);
                  return r.m.ac(r, t, a);
                case 21523:
                  return r.s ? (r.s.V.dc && (o = [24, 80], a = ft(), Fe[a >> 1] = o[0], Fe[a + 2 >> 1] = o[1]), 0) : -59;
                default:
                  return -28;
              }
            } catch (c) {
              if (wt === void 0 || c.name !== "ErrnoError") throw c;
              return -c.aa;
            }
          }, __syscall_openat: function(e, t, n, r) {
            qt = r;
            try {
              var a = t = t ? gt(re, t) : "";
              if (a.charAt(0) === "/") t = a;
              else {
                var o = e === -100 ? "/" : yt(e).path;
                if (a.length == 0) throw new X(44);
                t = je(o + "/" + a);
              }
              var c = r ? ft() : 0;
              return Vt(t, n, c).X;
            } catch (h) {
              if (wt === void 0 || h.name !== "ErrnoError") throw h;
              return -h.aa;
            }
          }, _embind_create_inheriting_constructor: function(e, t, n) {
            e = Be(e), t = Ft(t, "wrapper"), n = rt(n);
            var r = [].slice, a = t.i, o = a.N, c = a.A.N, h = a.A.constructor;
            for (var g in e = Kt(e, function() {
              a.A.qb.forEach((function(f) {
                if (this[f] === c[f]) throw new er(`Pure virtual function ${f} must be implemented in JavaScript`);
              }).bind(this)), Object.defineProperty(this, "__parent", { value: o }), this.__construct.apply(this, r.call(arguments));
            }), o.__construct = function() {
              this === o && de("Pass correct 'this' to __construct");
              var f = h.implement.apply(void 0, [this].concat(r.call(arguments)));
              Jt(f);
              var N = f.g;
              f.notifyOnDestruction(), N.ia = !0, Object.defineProperties(this, { g: { value: N } }), $t(this), f = N.o, f = _n(a, f), dt.hasOwnProperty(f) ? de(`Tried to register registered instance: ${f}`) : dt[f] = this;
            }, o.__destruct = function() {
              this === o && de("Pass correct 'this' to __destruct"), Jt(this);
              var f = this.g.o;
              f = _n(a, f), dt.hasOwnProperty(f) ? delete dt[f] : de(`Tried to unregister unregistered instance: ${f}`);
            }, e.prototype = Object.create(o), n) e.prototype[g] = n[g];
            return ot(e);
          }, _embind_finalize_value_object: function(e) {
            var t = en[e];
            delete en[e];
            var n = t.Pa, r = t.W, a = t.eb;
            Je([e], a.map((o) => o.Yb).concat(a.map((o) => o.rc)), (o) => {
              var c = {};
              return a.forEach((h, g) => {
                var f = o[g], N = h.Wb, U = h.Xb, Y = o[g + a.length], G = h.qc, W = h.sc;
                c[h.Sb] = { read: (O) => f.fromWireType(N(U, O)), write: (O, be) => {
                  var d = [];
                  G(W, O, Y.toWireType(d, be)), Nt(d);
                } };
              }), [{ name: t.name, fromWireType: function(h) {
                var g, f = {};
                for (g in c) f[g] = c[g].read(h);
                return r(h), f;
              }, toWireType: function(h, g) {
                for (var f in c) if (!(f in g)) throw new TypeError(`Missing field: "${f}"`);
                var N = n();
                for (f in c) c[f].write(N, g[f]);
                return h !== null && h.push(r, N), N;
              }, argPackAdvance: 8, readValueFromPointer: Dt, K: r }];
            });
          }, _embind_register_bigint: function() {
          }, _embind_register_bool: function(e, t, n, r, a) {
            var o = nn(n);
            st(e, { name: t = Be(t), fromWireType: function(c) {
              return !!c;
            }, toWireType: function(c, h) {
              return h ? r : a;
            }, argPackAdvance: 8, readValueFromPointer: function(c) {
              if (n === 1) var h = le;
              else if (n === 2) h = Fe;
              else {
                if (n !== 4) throw new TypeError("Unknown boolean type size: " + t);
                h = fe;
              }
              return this.fromWireType(h[c >> o]);
            }, K: null });
          }, _embind_register_class: function(e, t, n, r, a, o, c, h, g, f, N, U, Y) {
            N = Be(N), o = Ve(a, o), h && (h = Ve(c, h)), f && (f = Ve(g, f)), Y = Ve(U, Y);
            var G = Jn(N);
            Cn(G, function() {
              mt(`Cannot construct ${N} due to unbound types`, [r]);
            }), Je([e, t, n], r ? [r] : [], function(W) {
              if (W = W[0], r) var O = W.i, be = O.N;
              else be = bt.prototype;
              W = Kt(G, function() {
                if (Object.getPrototypeOf(this) !== d) throw new Lt("Use 'new' to construct " + N);
                if (b.$ === void 0) throw new Lt(N + " has no accessible constructor");
                var ke = b.$[arguments.length];
                if (ke === void 0) throw new Lt(`Tried to invoke ctor of ${N} with invalid number of parameters (${arguments.length}) - expected (${Object.keys(b.$).toString()}) parameters instead!`);
                return ke.apply(this, arguments);
              });
              var d = Object.create(be, { constructor: { value: W } });
              W.prototype = d;
              var b = new Br(N, W, d, Y, O, o, h, f);
              b.A && (b.A.oa === void 0 && (b.A.oa = []), b.A.oa.push(b)), O = new pt(N, b, !0, !1), be = new pt(N + "*", b, !1, !1);
              var se = new pt(N + " const*", b, !1, !0);
              return ar[e] = { pointerType: be, Kb: se }, sr(G, W), [O, be, se];
            });
          }, _embind_register_class_class_function: function(e, t, n, r, a, o, c) {
            var h = sn(n, r);
            t = Be(t), o = Ve(a, o), Je([], [e], function(g) {
              function f() {
                mt(`Cannot call ${N} due to unbound types`, h);
              }
              var N = `${(g = g[0]).name}.${t}`;
              t.startsWith("@@") && (t = Symbol[t.substring(2)]);
              var U = g.i.constructor;
              return U[t] === void 0 ? (f.ea = n - 1, U[t] = f) : (En(U, t, N), U[t].B[n - 1] = f), Je([], h, function(Y) {
                if (Y = on(N, [Y[0], null].concat(Y.slice(1)), null, o, c), U[t].B === void 0 ? (Y.ea = n - 1, U[t] = Y) : U[t].B[n - 1] = Y, g.i.oa) for (const G of g.i.oa) G.constructor.hasOwnProperty(t) || (G.constructor[t] = Y);
                return [];
              }), [];
            });
          }, _embind_register_class_class_property: function(e, t, n, r, a, o, c, h) {
            t = Be(t), o = Ve(a, o), Je([], [e], function(g) {
              var f = `${(g = g[0]).name}.${t}`, N = { get() {
                mt(`Cannot access ${f} due to unbound types`, [n]);
              }, enumerable: !0, configurable: !0 };
              return N.set = h ? () => {
                mt(`Cannot access ${f} due to unbound types`, [n]);
              } : () => {
                de(`${f} is a read-only property`);
              }, Object.defineProperty(g.i.constructor, t, N), Je([], [n], function(U) {
                U = U[0];
                var Y = { get: () => U.fromWireType(o(r)), enumerable: !0 };
                return h && (h = Ve(c, h), Y.set = (G) => {
                  var W = [];
                  h(r, U.toWireType(W, G)), Nt(W);
                }), Object.defineProperty(g.i.constructor, t, Y), [];
              }), [];
            });
          }, _embind_register_class_constructor: function(e, t, n, r, a, o) {
            var c = sn(t, n);
            a = Ve(r, a), Je([], [e], function(h) {
              var g = `constructor ${(h = h[0]).name}`;
              if (h.i.$ === void 0 && (h.i.$ = []), h.i.$[t - 1] !== void 0) throw new Lt(`Cannot register multiple constructors with identical number of parameters (${t - 1}) for class '${h.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);
              return h.i.$[t - 1] = () => {
                mt(`Cannot construct ${h.name} due to unbound types`, c);
              }, Je([], c, function(f) {
                return f.splice(1, 0, null), h.i.$[t - 1] = on(g, f, null, a, o), [];
              }), [];
            });
          }, _embind_register_class_function: function(e, t, n, r, a, o, c, h) {
            var g = sn(n, r);
            t = Be(t), o = Ve(a, o), Je([], [e], function(f) {
              function N() {
                mt(`Cannot call ${U} due to unbound types`, g);
              }
              var U = `${(f = f[0]).name}.${t}`;
              t.startsWith("@@") && (t = Symbol[t.substring(2)]), h && f.i.qb.push(t);
              var Y = f.i.N, G = Y[t];
              return G === void 0 || G.B === void 0 && G.className !== f.name && G.ea === n - 2 ? (N.ea = n - 2, N.className = f.name, Y[t] = N) : (En(Y, t, U), Y[t].B[n - 2] = N), Je([], g, function(W) {
                return W = on(U, W, f, o, c), Y[t].B === void 0 ? (W.ea = n - 2, Y[t] = W) : Y[t].B[n - 2] = W, [];
              }), [];
            });
          }, _embind_register_class_property: function(e, t, n, r, a, o, c, h, g, f) {
            t = Be(t), a = Ve(r, a), Je([], [e], function(N) {
              var U = `${(N = N[0]).name}.${t}`, Y = { get() {
                mt(`Cannot access ${U} due to unbound types`, [n, c]);
              }, enumerable: !0, configurable: !0 };
              return Y.set = g ? () => {
                mt(`Cannot access ${U} due to unbound types`, [n, c]);
              } : () => {
                de(U + " is a read-only property");
              }, Object.defineProperty(N.i.N, t, Y), Je([], g ? [n, c] : [n], function(G) {
                var W = G[0], O = { get() {
                  var d = lr(this, N, U + " getter");
                  return W.fromWireType(a(o, d));
                }, enumerable: !0 };
                if (g) {
                  g = Ve(h, g);
                  var be = G[1];
                  O.set = function(d) {
                    var b = lr(this, N, U + " setter"), se = [];
                    g(f, b, be.toWireType(se, d)), Nt(se);
                  };
                }
                return Object.defineProperty(N.i.N, t, O), [];
              }), [];
            });
          }, _embind_register_emval: function(e, t) {
            st(e, { name: t = Be(t), fromWireType: function(n) {
              var r = rt(n);
              return Tn(n), r;
            }, toWireType: function(n, r) {
              return ot(r);
            }, argPackAdvance: 8, readValueFromPointer: Dt, K: null });
          }, _embind_register_enum: function(e, t, n, r) {
            function a() {
            }
            n = nn(n), t = Be(t), a.values = {}, st(e, { name: t, constructor: a, fromWireType: function(o) {
              return this.constructor.values[o];
            }, toWireType: function(o, c) {
              return c.value;
            }, argPackAdvance: 8, readValueFromPointer: Xr(t, n, r), K: null }), Cn(t, a);
          }, _embind_register_enum_value: function(e, t, n) {
            var r = Ft(e, "enum");
            t = Be(t), e = r.constructor, r = Object.create(r.constructor.prototype, { value: { value: n }, constructor: { value: Kt(`${r.name}_${t}`, function() {
            }) } }), e.values[n] = r, e[t] = r;
          }, _embind_register_float: function(e, t, n) {
            n = nn(n), st(e, { name: t = Be(t), fromWireType: function(r) {
              return r;
            }, toWireType: function(r, a) {
              return a;
            }, argPackAdvance: 8, readValueFromPointer: Gr(t, n), K: null });
          }, _embind_register_function: function(e, t, n, r, a, o) {
            var c = sn(t, n);
            e = Be(e), a = Ve(r, a), Cn(e, function() {
              mt(`Cannot call ${e} due to unbound types`, c);
            }, t - 1), Je([], c, function(h) {
              return sr(e, on(e, [h[0], null].concat(h.slice(1)), null, a, o), t - 1), [];
            });
          }, _embind_register_integer: function(e, t, n, r, a) {
            t = Be(t), a === -1 && (a = 4294967295), a = nn(n);
            var o = (h) => h;
            if (r === 0) {
              var c = 32 - 8 * n;
              o = (h) => h << c >>> c;
            }
            n = t.includes("unsigned") ? function(h, g) {
              return g >>> 0;
            } : function(h, g) {
              return g;
            }, st(e, { name: t, fromWireType: o, toWireType: n, argPackAdvance: 8, readValueFromPointer: zr(t, a, r !== 0), K: null });
          }, _embind_register_memory_view: function(e, t, n) {
            function r(o) {
              o >>= 2;
              var c = Ce;
              return new a(c.buffer, c[o + 1], c[o]);
            }
            var a = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][t];
            st(e, { name: n = Be(n), fromWireType: r, argPackAdvance: 8, readValueFromPointer: r }, { $b: !0 });
          }, _embind_register_std_string: function(e, t) {
            var n = (t = Be(t)) === "std::string";
            st(e, { name: t, fromWireType: function(r) {
              var a = Ce[r >> 2], o = r + 4;
              if (n) for (var c = o, h = 0; h <= a; ++h) {
                var g = o + h;
                if (h == a || re[g] == 0) {
                  if (c = c ? gt(re, c, g - c) : "", f === void 0) var f = c;
                  else f += "\0", f += c;
                  c = g + 1;
                }
              }
              else {
                for (f = Array(a), h = 0; h < a; ++h) f[h] = String.fromCharCode(re[o + h]);
                f = f.join("");
              }
              return vt(r), f;
            }, toWireType: function(r, a) {
              a instanceof ArrayBuffer && (a = new Uint8Array(a));
              var o = typeof a == "string";
              o || a instanceof Uint8Array || a instanceof Uint8ClampedArray || a instanceof Int8Array || de("Cannot pass non-string to std::string");
              var c = n && o ? kn(a) : a.length, h = xn(4 + c + 1), g = h + 4;
              if (Ce[h >> 2] = c, n && o) On(a, re, g, c + 1);
              else if (o) for (o = 0; o < c; ++o) {
                var f = a.charCodeAt(o);
                255 < f && (vt(g), de("String has UTF-16 code units that do not fit in 8 bits")), re[g + o] = f;
              }
              else for (o = 0; o < c; ++o) re[g + o] = a[o];
              return r !== null && r.push(vt, h), h;
            }, argPackAdvance: 8, readValueFromPointer: Dt, K: function(r) {
              vt(r);
            } });
          }, _embind_register_std_wstring: function(e, t, n) {
            if (n = Be(n), t === 2) var r = Hr, a = Vr, o = qr, c = () => Xe, h = 1;
            else t === 4 && (r = Kr, a = Jr, o = Qr, c = () => Ce, h = 2);
            st(e, { name: n, fromWireType: function(g) {
              for (var f, N = Ce[g >> 2], U = c(), Y = g + 4, G = 0; G <= N; ++G) {
                var W = g + 4 + G * t;
                G != N && U[W >> h] != 0 || (Y = r(Y, W - Y), f === void 0 ? f = Y : (f += "\0", f += Y), Y = W + t);
              }
              return vt(g), f;
            }, toWireType: function(g, f) {
              typeof f != "string" && de(`Cannot pass non-string to C++ string type ${n}`);
              var N = o(f), U = xn(4 + N + t);
              return Ce[U >> 2] = N >> h, a(f, U + 4, N + t), g !== null && g.push(vt, U), U;
            }, argPackAdvance: 8, readValueFromPointer: Dt, K: function(g) {
              vt(g);
            } });
          }, _embind_register_value_object: function(e, t, n, r, a, o) {
            en[e] = { name: Be(t), Pa: Ve(n, r), W: Ve(a, o), eb: [] };
          }, _embind_register_value_object_field: function(e, t, n, r, a, o, c, h, g, f) {
            en[e].eb.push({ Sb: Be(t), Yb: n, Wb: Ve(r, a), Xb: o, rc: c, qc: Ve(h, g), sc: f });
          }, _embind_register_void: function(e, t) {
            st(e, { fc: !0, name: t = Be(t), argPackAdvance: 0, fromWireType: function() {
            }, toWireType: function() {
            } });
          }, _emval_as: function(e, t, n) {
            e = rt(e), t = Ft(t, "emval::as");
            var r = [], a = ot(r);
            return Ce[n >> 2] = a, t.toWireType(r, e);
          }, _emval_call_method: function(e, t, n, r, a) {
            e = cn[e], t = rt(t), n = un(n);
            var o = [];
            return Ce[r >> 2] = ot(o), e(t, n, o, a);
          }, _emval_call_void_method: function(e, t, n, r) {
            (e = cn[e])(t = rt(t), n = un(n), null, r);
          }, _emval_decref: Tn, _emval_get_method_caller: function(e, t) {
            var n = function(c, h) {
              for (var g = Array(c), f = 0; f < c; ++f) g[f] = Ft(Ce[h + 4 * f >> 2], "parameter " + f);
              return g;
            }(e, t), r = n[0];
            t = r.name + "_$" + n.slice(1).map(function(c) {
              return c.name;
            }).join("_") + "$";
            var a = fr[t];
            if (a !== void 0) return a;
            var o = Array(e - 1);
            return a = function(c) {
              var h = cn.length;
              return cn.push(c), h;
            }((c, h, g, f) => {
              for (var N = 0, U = 0; U < e - 1; ++U) o[U] = n[U + 1].readValueFromPointer(f + N), N += n[U + 1].argPackAdvance;
              for (c = c[h].apply(c, o), U = 0; U < e - 1; ++U) n[U + 1].Nb && n[U + 1].Nb(o[U]);
              if (!r.fc) return r.toWireType(g, c);
            }), fr[t] = a;
          }, _emval_get_module_property: function(e) {
            return e = un(e), ot(l[e]);
          }, _emval_get_property: function(e, t) {
            return e = rt(e), t = rt(t), ot(e[t]);
          }, _emval_incref: function(e) {
            4 < e && (Ze.get(e).tb += 1);
          }, _emval_new_cstring: function(e) {
            return ot(un(e));
          }, _emval_new_object: function() {
            return ot({});
          }, _emval_run_destructors: function(e) {
            Nt(rt(e)), Tn(e);
          }, _emval_set_property: function(e, t, n) {
            e = rt(e), t = rt(t), n = rt(n), e[t] = n;
          }, _emval_take_value: function(e, t) {
            return e = (e = Ft(e, "_emval_take_value")).readValueFromPointer(t), ot(e);
          }, abort: () => {
            We("");
          }, emscripten_asm_const_int: (e, t, n) => {
            var r;
            for (Ln.length = 0, n >>= 2; r = re[t++]; ) n += r != 105 & n, Ln.push(r == 105 ? fe[n] : i[n++ >> 1]), ++n;
            return ie[e].apply(null, Ln);
          }, emscripten_memcpy_big: (e, t, n) => re.copyWithin(e, t, t + n), emscripten_resize_heap: (e) => {
            var t = re.length;
            if (2147483648 < (e >>>= 0)) return !1;
            for (var n = 1; 4 >= n; n *= 2) {
              var r = t * (1 + 0.2 / n);
              r = Math.min(r, e + 100663296);
              var a = Math;
              r = Math.max(e, r);
              e: {
                a = a.min.call(a, 2147483648, r + (65536 - r % 65536) % 65536) - Re.buffer.byteLength + 65535 >>> 16;
                try {
                  Re.grow(a), p();
                  var o = 1;
                  break e;
                } catch {
                }
                o = void 0;
              }
              if (o) return !0;
            }
            return !1;
          }, environ_get: (e, t) => {
            var n = 0;
            return dr().forEach(function(r, a) {
              var o = t + n;
              for (a = Ce[e + 4 * a >> 2] = o, o = 0; o < r.length; ++o) le[0 | a++] = r.charCodeAt(o);
              le[0 | a] = 0, n += r.length + 1;
            }), 0;
          }, environ_sizes_get: (e, t) => {
            var n = dr();
            Ce[e >> 2] = n.length;
            var r = 0;
            return n.forEach(function(a) {
              r += a.length + 1;
            }), Ce[t >> 2] = r, 0;
          }, fd_close: function(e) {
            try {
              var t = yt(e);
              if (t.X === null) throw new X(8);
              t.Ma && (t.Ma = null);
              try {
                t.m.close && t.m.close(t);
              } catch (n) {
                throw n;
              } finally {
                Xt[t.X] = null;
              }
              return t.X = null, 0;
            } catch (n) {
              if (wt === void 0 || n.name !== "ErrnoError") throw n;
              return n.aa;
            }
          }, fd_read: function(e, t, n, r) {
            try {
              e: {
                var a = yt(e);
                e = t;
                for (var o, c = t = 0; c < n; c++) {
                  var h = Ce[e >> 2], g = Ce[e + 4 >> 2];
                  e += 8;
                  var f = a, N = h, U = g, Y = o, G = le;
                  if (0 > U || 0 > Y) throw new X(28);
                  if (f.X === null) throw new X(8);
                  if ((2097155 & f.flags) == 1) throw new X(8);
                  if ((61440 & f.node.mode) == 16384) throw new X(31);
                  if (!f.m.read) throw new X(28);
                  var W = Y !== void 0;
                  if (W) {
                    if (!f.seekable) throw new X(70);
                  } else Y = f.position;
                  var O = f.m.read(f, G, N, U, Y);
                  W || (f.position += O);
                  var be = O;
                  if (0 > be) {
                    var d = -1;
                    break e;
                  }
                  if (t += be, be < g) break;
                  o !== void 0 && (o += be);
                }
                d = t;
              }
              return Ce[r >> 2] = d, 0;
            } catch (b) {
              if (wt === void 0 || b.name !== "ErrnoError") throw b;
              return b.aa;
            }
          }, fd_seek: function(e, t, n, r, a) {
            t = n + 2097152 >>> 0 < 4194305 - !!t ? (t >>> 0) + 4294967296 * n : NaN;
            try {
              if (isNaN(t)) return 61;
              var o = yt(e);
              return qn(o, t, r), j = [o.position >>> 0, (y = o.position, 1 <= +Math.abs(y) ? 0 < y ? +Math.floor(y / 4294967296) >>> 0 : ~~+Math.ceil((y - +(~~y >>> 0)) / 4294967296) >>> 0 : 0)], fe[a >> 2] = j[0], fe[a + 4 >> 2] = j[1], o.Ma && t === 0 && r === 0 && (o.Ma = null), 0;
            } catch (c) {
              if (wt === void 0 || c.name !== "ErrnoError") throw c;
              return c.aa;
            }
          }, fd_write: function(e, t, n, r) {
            try {
              e: {
                var a = yt(e);
                e = t;
                for (var o, c = t = 0; c < n; c++) {
                  var h = Ce[e >> 2], g = Ce[e + 4 >> 2];
                  e += 8;
                  var f = a, N = h, U = g, Y = o, G = le;
                  if (0 > U || 0 > Y) throw new X(28);
                  if (f.X === null) throw new X(8);
                  if (!(2097155 & f.flags)) throw new X(8);
                  if ((61440 & f.node.mode) == 16384) throw new X(31);
                  if (!f.m.write) throw new X(28);
                  f.seekable && 1024 & f.flags && qn(f, 0, 2);
                  var W = Y !== void 0;
                  if (W) {
                    if (!f.seekable) throw new X(70);
                  } else Y = f.position;
                  var O = f.m.write(f, G, N, U, Y, void 0);
                  W || (f.position += O);
                  var be = O;
                  if (0 > be) {
                    var d = -1;
                    break e;
                  }
                  t += be, o !== void 0 && (o += be);
                }
                d = t;
              }
              return Ce[r >> 2] = d, 0;
            } catch (b) {
              if (wt === void 0 || b.name !== "ErrnoError") throw b;
              return b.aa;
            }
          }, strftime_l: (e, t, n, r) => ((a, o, c, h) => {
            function g(d, b, se) {
              for (d = typeof d == "number" ? d.toString() : d || ""; d.length < b; ) d = se[0] + d;
              return d;
            }
            function f(d, b) {
              return g(d, b, "0");
            }
            function N(d, b) {
              function se(Qe) {
                return 0 > Qe ? -1 : 0 < Qe ? 1 : 0;
              }
              var ke;
              return (ke = se(d.getFullYear() - b.getFullYear())) === 0 && (ke = se(d.getMonth() - b.getMonth())) === 0 && (ke = se(d.getDate() - b.getDate())), ke;
            }
            function U(d) {
              switch (d.getDay()) {
                case 0:
                  return new Date(d.getFullYear() - 1, 11, 29);
                case 1:
                  return d;
                case 2:
                  return new Date(d.getFullYear(), 0, 3);
                case 3:
                  return new Date(d.getFullYear(), 0, 2);
                case 4:
                  return new Date(d.getFullYear(), 0, 1);
                case 5:
                  return new Date(d.getFullYear() - 1, 11, 31);
                case 6:
                  return new Date(d.getFullYear() - 1, 11, 30);
              }
            }
            function Y(d) {
              var b = d.ca;
              for (d = new Date(new Date(d.da + 1900, 0, 1).getTime()); 0 < b; ) {
                var se = d.getMonth(), ke = (ln(d.getFullYear()) ? pr : mr)[se];
                if (!(b > ke - d.getDate())) {
                  d.setDate(d.getDate() + b);
                  break;
                }
                b -= ke - d.getDate() + 1, d.setDate(1), 11 > se ? d.setMonth(se + 1) : (d.setMonth(0), d.setFullYear(d.getFullYear() + 1));
              }
              return se = new Date(d.getFullYear() + 1, 0, 4), b = U(new Date(d.getFullYear(), 0, 4)), se = U(se), 0 >= N(b, d) ? 0 >= N(se, d) ? d.getFullYear() + 1 : d.getFullYear() : d.getFullYear() - 1;
            }
            var G = fe[h + 40 >> 2];
            for (var W in h = { wc: fe[h >> 2], vc: fe[h + 4 >> 2], Fa: fe[h + 8 >> 2], Sa: fe[h + 12 >> 2], Ga: fe[h + 16 >> 2], da: fe[h + 20 >> 2], R: fe[h + 24 >> 2], ca: fe[h + 28 >> 2], Rc: fe[h + 32 >> 2], uc: fe[h + 36 >> 2], xc: G && G ? gt(re, G) : "" }, c = c ? gt(re, c) : "", G = { "%c": "%a %b %d %H:%M:%S %Y", "%D": "%m/%d/%y", "%F": "%Y-%m-%d", "%h": "%b", "%r": "%I:%M:%S %p", "%R": "%H:%M", "%T": "%H:%M:%S", "%x": "%m/%d/%y", "%X": "%H:%M:%S", "%Ec": "%c", "%EC": "%C", "%Ex": "%m/%d/%y", "%EX": "%H:%M:%S", "%Ey": "%y", "%EY": "%Y", "%Od": "%d", "%Oe": "%e", "%OH": "%H", "%OI": "%I", "%Om": "%m", "%OM": "%M", "%OS": "%S", "%Ou": "%u", "%OU": "%U", "%OV": "%V", "%Ow": "%w", "%OW": "%W", "%Oy": "%y" }) c = c.replace(new RegExp(W, "g"), G[W]);
            var O = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), be = "January February March April May June July August September October November December".split(" ");
            for (W in G = { "%a": (d) => O[d.R].substring(0, 3), "%A": (d) => O[d.R], "%b": (d) => be[d.Ga].substring(0, 3), "%B": (d) => be[d.Ga], "%C": (d) => f((d.da + 1900) / 100 | 0, 2), "%d": (d) => f(d.Sa, 2), "%e": (d) => g(d.Sa, 2, " "), "%g": (d) => Y(d).toString().substring(2), "%G": (d) => Y(d), "%H": (d) => f(d.Fa, 2), "%I": (d) => ((d = d.Fa) == 0 ? d = 12 : 12 < d && (d -= 12), f(d, 2)), "%j": (d) => {
              for (var b = 0, se = 0; se <= d.Ga - 1; b += (ln(d.da + 1900) ? pr : mr)[se++]) ;
              return f(d.Sa + b, 3);
            }, "%m": (d) => f(d.Ga + 1, 2), "%M": (d) => f(d.vc, 2), "%n": () => `
`, "%p": (d) => 0 <= d.Fa && 12 > d.Fa ? "AM" : "PM", "%S": (d) => f(d.wc, 2), "%t": () => "	", "%u": (d) => d.R || 7, "%U": (d) => f(Math.floor((d.ca + 7 - d.R) / 7), 2), "%V": (d) => {
              var b = Math.floor((d.ca + 7 - (d.R + 6) % 7) / 7);
              if (2 >= (d.R + 371 - d.ca - 2) % 7 && b++, b) b == 53 && ((se = (d.R + 371 - d.ca) % 7) == 4 || se == 3 && ln(d.da) || (b = 1));
              else {
                b = 52;
                var se = (d.R + 7 - d.ca - 1) % 7;
                (se == 4 || se == 5 && ln(d.da % 400 - 1)) && b++;
              }
              return f(b, 2);
            }, "%w": (d) => d.R, "%W": (d) => f(Math.floor((d.ca + 7 - (d.R + 6) % 7) / 7), 2), "%y": (d) => (d.da + 1900).toString().substring(2), "%Y": (d) => d.da + 1900, "%z": (d) => {
              var b = 0 <= (d = d.uc);
              return d = Math.abs(d) / 60, (b ? "+" : "-") + ("0000" + (d / 60 * 100 + d % 60)).slice(-4);
            }, "%Z": (d) => d.xc, "%%": () => "%" }, c = c.replace(/%%/g, "\0\0"), G) c.includes(W) && (c = c.replace(new RegExp(W, "g"), G[W](h)));
            return (W = In(c = c.replace(/\0\0/g, "%"), !1)).length > o ? 0 : (le.set(W, a), W.length - 1);
          })(e, t, n, r) };
          (function() {
            function e(n) {
              if (I = n = n.exports, Re = I.memory, p(), v = I.__indirect_function_table, T.unshift(I.__wasm_call_ctors), H--, l.monitorRunDependencies && l.monitorRunDependencies(H), H == 0 && $e) {
                var r = $e;
                $e = null, r();
              }
              return n;
            }
            var t = { env: yr, wasi_snapshot_preview1: yr };
            if (H++, l.monitorRunDependencies && l.monitorRunDependencies(H), l.instantiateWasm) try {
              return l.instantiateWasm(t, e);
            } catch (n) {
              Ee("Module.instantiateWasm callback failed with error: " + n), ce(n);
            }
            (function(n, r) {
              var a = ye;
              return ue || typeof WebAssembly.instantiateStreaming != "function" || Me(a) || a.startsWith("file://") || typeof fetch != "function" ? E(a, n, r) : fetch(a, { credentials: "same-origin" }).then((o) => WebAssembly.instantiateStreaming(o, n).then(r, function(c) {
                return Ee("wasm streaming compile failed: " + c), Ee("falling back to ArrayBuffer instantiation"), E(a, n, r);
              }));
            })(t, function(n) {
              e(n.instance);
            }).catch(ce);
          })();
          var vt = (e) => (vt = I.free)(e), xn = (e) => (xn = I.malloc)(e), br = l._ma_device__on_notification_unlocked = (e) => (br = l._ma_device__on_notification_unlocked = I.ma_device__on_notification_unlocked)(e);
          l._ma_malloc_emscripten = (e, t) => (l._ma_malloc_emscripten = I.ma_malloc_emscripten)(e, t), l._ma_free_emscripten = (e, t) => (l._ma_free_emscripten = I.ma_free_emscripten)(e, t);
          var fn, _r = l._ma_device_process_pcm_frames_capture__webaudio = (e, t, n) => (_r = l._ma_device_process_pcm_frames_capture__webaudio = I.ma_device_process_pcm_frames_capture__webaudio)(e, t, n), wr = l._ma_device_process_pcm_frames_playback__webaudio = (e, t, n) => (wr = l._ma_device_process_pcm_frames_playback__webaudio = I.ma_device_process_pcm_frames_playback__webaudio)(e, t, n), Ar = () => (Ar = I.__errno_location)(), Er = (e) => (Er = I.__getTypeName)(e);
          function Cr() {
            function e() {
              if (!fn && (fn = !0, l.calledRun = !0, !u)) {
                if (l.noFSInit || Dn || (Dn = !0, Kn(), l.stdin = l.stdin, l.stdout = l.stdout, l.stderr = l.stderr, l.stdin ? kt("stdin", l.stdin) : yn("/dev/tty", "/dev/stdin"), l.stdout ? kt("stdout", null, l.stdout) : yn("/dev/tty", "/dev/stdout"), l.stderr ? kt("stderr", null, l.stderr) : yn("/dev/tty1", "/dev/stderr"), Vt("/dev/stdin", 0), Vt("/dev/stdout", 1), Vt("/dev/stderr", 1)), Un = !1, J(T), oe(l), l.onRuntimeInitialized && l.onRuntimeInitialized(), l.postRun) for (typeof l.postRun == "function" && (l.postRun = [l.postRun]); l.postRun.length; ) {
                  var t = l.postRun.shift();
                  ne.unshift(t);
                }
                J(ne);
              }
            }
            if (!(0 < H)) {
              if (l.preRun) for (typeof l.preRun == "function" && (l.preRun = [l.preRun]); l.preRun.length; ) Le();
              J($), 0 < H || (l.setStatus ? (l.setStatus("Running..."), setTimeout(function() {
                setTimeout(function() {
                  l.setStatus("");
                }, 1), e();
              }, 1)) : e());
            }
          }
          if (l.__embind_initialize_bindings = () => (l.__embind_initialize_bindings = I._embind_initialize_bindings)(), l.dynCall_iiji = (e, t, n, r, a) => (l.dynCall_iiji = I.dynCall_iiji)(e, t, n, r, a), l.dynCall_jiji = (e, t, n, r, a) => (l.dynCall_jiji = I.dynCall_jiji)(e, t, n, r, a), l.dynCall_iiiji = (e, t, n, r, a, o) => (l.dynCall_iiiji = I.dynCall_iiiji)(e, t, n, r, a, o), l.dynCall_iij = (e, t, n, r) => (l.dynCall_iij = I.dynCall_iij)(e, t, n, r), l.dynCall_jii = (e, t, n) => (l.dynCall_jii = I.dynCall_jii)(e, t, n), l.dynCall_viijii = (e, t, n, r, a, o, c) => (l.dynCall_viijii = I.dynCall_viijii)(e, t, n, r, a, o, c), l.dynCall_iiiiij = (e, t, n, r, a, o, c) => (l.dynCall_iiiiij = I.dynCall_iiiiij)(e, t, n, r, a, o, c), l.dynCall_iiiiijj = (e, t, n, r, a, o, c, h, g) => (l.dynCall_iiiiijj = I.dynCall_iiiiijj)(e, t, n, r, a, o, c, h, g), l.dynCall_iiiiiijj = (e, t, n, r, a, o, c, h, g, f) => (l.dynCall_iiiiiijj = I.dynCall_iiiiiijj)(e, t, n, r, a, o, c, h, g, f), $e = function e() {
            fn || Cr(), fn || ($e = e);
          }, l.preInit) for (typeof l.preInit == "function" && (l.preInit = [l.preInit]); 0 < l.preInit.length; ) l.preInit.pop()();
          return Cr(), ae.ready;
        });
        const x = D;
      }, (z) => {
        z.exports = JSON.parse(`{"name":"@rive-app/canvas","version":"2.15.6","description":"Rive's canvas based web api.","main":"rive.js","homepage":"https://rive.app","repository":{"type":"git","url":"https://github.com/rive-app/rive-wasm/tree/master/js"},"keywords":["rive","animation"],"author":"Rive","contributors":["Luigi Rosso <luigi@rive.app> (https://rive.app)","Maxwell Talbot <max@rive.app> (https://rive.app)","Arthur Vivian <arthur@rive.app> (https://rive.app)","Umberto Sonnino <umberto@rive.app> (https://rive.app)","Matthew Sullivan <matt.j.sullivan@gmail.com> (mailto:matt.j.sullivan@gmail.com)"],"license":"MIT","files":["rive.js","rive.js.map","rive.wasm","rive_fallback.wasm","rive.d.ts","rive_advanced.mjs.d.ts"],"typings":"rive.d.ts","dependencies":{},"browser":{"fs":false,"path":false}}`);
      }, (z, S, k) => {
        k.r(S), k.d(S, { BLANK_URL: () => D.BLANK_URL, registerTouchInteractions: () => he.registerTouchInteractions, sanitizeUrl: () => D.sanitizeUrl });
        var he = k(4), D = k(5);
      }, (z, S, k) => {
        k.r(S), k.d(S, { registerTouchInteractions: () => he });
        var he = function(D) {
          var x = D.canvas, ae = D.artboard, oe = D.stateMachines, ce = oe === void 0 ? [] : oe, l = D.renderer, xe = D.rive, Ie = D.fit, Ge = D.alignment, Ne = D.isTouchScrollEnabled, Oe = Ne !== void 0 && Ne;
          if (!(x && ce.length && l && xe && ae && typeof window < "u")) return null;
          var q = (function(De) {
            var Ue = De.currentTarget.getBoundingClientRect(), C = function(p, v) {
              var $, T;
              return ["touchstart", "touchmove"].indexOf(p.type) > -1 && (!(($ = p.touches) === null || $ === void 0) && $.length) ? (v || p.preventDefault(), { clientX: p.touches[0].clientX, clientY: p.touches[0].clientY }) : p.type === "touchend" && (!((T = p.changedTouches) === null || T === void 0) && T.length) ? { clientX: p.changedTouches[0].clientX, clientY: p.changedTouches[0].clientY } : { clientX: p.clientX, clientY: p.clientY };
            }(De, Oe), m = C.clientX, F = C.clientY;
            if (m || F) {
              var K = m - Ue.left, M = F - Ue.top, ue = xe.computeAlignment(Ie, Ge, { minX: 0, minY: 0, maxX: Ue.width, maxY: Ue.height }, ae.bounds), pe = new xe.Mat2D();
              ue.invert(pe);
              var Ee = new xe.Vec2D(K, M), Re = xe.mapXY(pe, Ee), I = Re.x(), le = Re.y();
              switch (Re.delete(), pe.delete(), Ee.delete(), ue.delete(), De.type) {
                case "mouseout":
                  for (var re = 0, Fe = ce; re < Fe.length; re++) Fe[re].pointerMove(I < 0 ? I - 1e4 : I + 1e4, le < 0 ? le - 1e4 : le + 1e4);
                  break;
                case "touchmove":
                case "mouseover":
                case "mousemove":
                  for (var Xe = 0, fe = ce; Xe < fe.length; Xe++) fe[Xe].pointerMove(I, le);
                  break;
                case "touchstart":
                case "mousedown":
                  for (var Ce = 0, s = ce; Ce < s.length; Ce++) s[Ce].pointerDown(I, le);
                  break;
                case "touchend":
                case "mouseup":
                  for (var i = 0, u = ce; i < u.length; i++) u[i].pointerUp(I, le);
              }
            }
          }).bind(void 0);
          return x.addEventListener("mouseover", q), x.addEventListener("mouseout", q), x.addEventListener("mousemove", q), x.addEventListener("mousedown", q), x.addEventListener("mouseup", q), x.addEventListener("touchmove", q), x.addEventListener("touchstart", q), x.addEventListener("touchend", q), function() {
            x.removeEventListener("mouseover", q), x.removeEventListener("mouseout", q), x.removeEventListener("mousemove", q), x.removeEventListener("mousedown", q), x.removeEventListener("mouseup", q), x.removeEventListener("touchmove", q), x.removeEventListener("touchstart", q), x.removeEventListener("touchend", q);
          };
        };
      }, (z, S, k) => {
        k.r(S), k.d(S, { BLANK_URL: () => l, sanitizeUrl: () => xe });
        var he = /^([^\w]*)(javascript|data|vbscript)/im, D = /&#(\w+)(^\w|;)?/g, x = /&(newline|tab);/gi, ae = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim, oe = /^.+(:|&colon;)/gim, ce = [".", "/"], l = "about:blank";
        function xe(Ie) {
          if (!Ie) return l;
          var Ge, Ne = (Ge = Ie, Ge.replace(ae, "").replace(D, function(De, Ue) {
            return String.fromCharCode(Ue);
          })).replace(x, "").replace(ae, "").trim();
          if (!Ne) return l;
          if (function(De) {
            return ce.indexOf(De[0]) > -1;
          }(Ne)) return Ne;
          var Oe = Ne.match(oe);
          if (!Oe) return Ne;
          var q = Oe[0];
          return he.test(q) ? l : Ne;
        }
      }], te = {};
      function Z(z) {
        var S = te[z];
        if (S !== void 0) return S.exports;
        var k = te[z] = { exports: {} };
        return Q[z](k, k.exports, Z), k.exports;
      }
      Z.d = (z, S) => {
        for (var k in S) Z.o(S, k) && !Z.o(z, k) && Object.defineProperty(z, k, { enumerable: !0, get: S[k] });
      }, Z.o = (z, S) => Object.prototype.hasOwnProperty.call(z, S), Z.r = (z) => {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(z, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(z, "__esModule", { value: !0 });
      };
      var ee = {};
      return (() => {
        Z.r(ee), Z.d(ee, { Alignment: () => k, EventType: () => q, Fit: () => S, Layout: () => xe, LoopType: () => De, Rive: () => I, RiveEventType: () => Ne, RuntimeLoader: () => Ie, StateMachineInput: () => Oe, StateMachineInputType: () => l, Testing: () => Fe, decodeAudio: () => Xe, decodeFont: () => Ce, decodeImage: () => fe });
        var z, S, k, he = Z(1), D = Z(2), x = Z(3), ae = (z = function(s, i) {
          return z = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(u, p) {
            u.__proto__ = p;
          } || function(u, p) {
            for (var v in p) Object.prototype.hasOwnProperty.call(p, v) && (u[v] = p[v]);
          }, z(s, i);
        }, function(s, i) {
          if (typeof i != "function" && i !== null) throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
          function u() {
            this.constructor = s;
          }
          z(s, i), s.prototype = i === null ? Object.create(i) : (u.prototype = i.prototype, new u());
        }), oe = function(s, i, u, p) {
          return new (u || (u = Promise))(function(v, $) {
            function T(ye) {
              try {
                Le(p.next(ye));
              } catch (H) {
                $(H);
              }
            }
            function ne(ye) {
              try {
                Le(p.throw(ye));
              } catch (H) {
                $(H);
              }
            }
            function Le(ye) {
              var H;
              ye.done ? v(ye.value) : (H = ye.value, H instanceof u ? H : new u(function($e) {
                $e(H);
              })).then(T, ne);
            }
            Le((p = p.apply(s, [])).next());
          });
        }, ce = function(s, i) {
          var u, p, v, $, T = { label: 0, sent: function() {
            if (1 & v[0]) throw v[1];
            return v[1];
          }, trys: [], ops: [] };
          return $ = { next: ne(0), throw: ne(1), return: ne(2) }, typeof Symbol == "function" && ($[Symbol.iterator] = function() {
            return this;
          }), $;
          function ne(Le) {
            return function(ye) {
              return function(H) {
                if (u) throw new TypeError("Generator is already executing.");
                for (; $ && ($ = 0, H[0] && (T = 0)), T; ) try {
                  if (u = 1, p && (v = 2 & H[0] ? p.return : H[0] ? p.throw || ((v = p.return) && v.call(p), 0) : p.next) && !(v = v.call(p, H[1])).done) return v;
                  switch (p = 0, v && (H = [2 & H[0], v.value]), H[0]) {
                    case 0:
                    case 1:
                      v = H;
                      break;
                    case 4:
                      return T.label++, { value: H[1], done: !1 };
                    case 5:
                      T.label++, p = H[1], H = [0];
                      continue;
                    case 7:
                      H = T.ops.pop(), T.trys.pop();
                      continue;
                    default:
                      if (!((v = (v = T.trys).length > 0 && v[v.length - 1]) || H[0] !== 6 && H[0] !== 2)) {
                        T = 0;
                        continue;
                      }
                      if (H[0] === 3 && (!v || H[1] > v[0] && H[1] < v[3])) {
                        T.label = H[1];
                        break;
                      }
                      if (H[0] === 6 && T.label < v[1]) {
                        T.label = v[1], v = H;
                        break;
                      }
                      if (v && T.label < v[2]) {
                        T.label = v[2], T.ops.push(H);
                        break;
                      }
                      v[2] && T.ops.pop(), T.trys.pop();
                      continue;
                  }
                  H = i.call(s, T);
                } catch ($e) {
                  H = [6, $e], p = 0;
                } finally {
                  u = v = 0;
                }
                if (5 & H[0]) throw H[1];
                return { value: H[0] ? H[1] : void 0, done: !0 };
              }([Le, ye]);
            };
          }
        };
        (function(s) {
          s.Cover = "cover", s.Contain = "contain", s.Fill = "fill", s.FitWidth = "fitWidth", s.FitHeight = "fitHeight", s.None = "none", s.ScaleDown = "scaleDown";
        })(S || (S = {})), function(s) {
          s.Center = "center", s.TopLeft = "topLeft", s.TopCenter = "topCenter", s.TopRight = "topRight", s.CenterLeft = "centerLeft", s.CenterRight = "centerRight", s.BottomLeft = "bottomLeft", s.BottomCenter = "bottomCenter", s.BottomRight = "bottomRight";
        }(k || (k = {}));
        var l, xe = function() {
          function s(i) {
            var u, p, v, $, T, ne;
            this.fit = (u = i == null ? void 0 : i.fit) !== null && u !== void 0 ? u : S.Contain, this.alignment = (p = i == null ? void 0 : i.alignment) !== null && p !== void 0 ? p : k.Center, this.minX = (v = i == null ? void 0 : i.minX) !== null && v !== void 0 ? v : 0, this.minY = ($ = i == null ? void 0 : i.minY) !== null && $ !== void 0 ? $ : 0, this.maxX = (T = i == null ? void 0 : i.maxX) !== null && T !== void 0 ? T : 0, this.maxY = (ne = i == null ? void 0 : i.maxY) !== null && ne !== void 0 ? ne : 0;
          }
          return s.new = function(i) {
            var u = i.fit, p = i.alignment, v = i.minX, $ = i.minY, T = i.maxX, ne = i.maxY;
            return console.warn("This function is deprecated: please use `new Layout({})` instead"), new s({ fit: u, alignment: p, minX: v, minY: $, maxX: T, maxY: ne });
          }, s.prototype.copyWith = function(i) {
            var u = i.fit, p = i.alignment, v = i.minX, $ = i.minY, T = i.maxX, ne = i.maxY;
            return new s({ fit: u ?? this.fit, alignment: p ?? this.alignment, minX: v ?? this.minX, minY: $ ?? this.minY, maxX: T ?? this.maxX, maxY: ne ?? this.maxY });
          }, s.prototype.runtimeFit = function(i) {
            return this.cachedRuntimeFit ? this.cachedRuntimeFit : (u = this.fit === S.Cover ? i.Fit.cover : this.fit === S.Contain ? i.Fit.contain : this.fit === S.Fill ? i.Fit.fill : this.fit === S.FitWidth ? i.Fit.fitWidth : this.fit === S.FitHeight ? i.Fit.fitHeight : this.fit === S.ScaleDown ? i.Fit.scaleDown : i.Fit.none, this.cachedRuntimeFit = u, u);
            var u;
          }, s.prototype.runtimeAlignment = function(i) {
            return this.cachedRuntimeAlignment ? this.cachedRuntimeAlignment : (u = this.alignment === k.TopLeft ? i.Alignment.topLeft : this.alignment === k.TopCenter ? i.Alignment.topCenter : this.alignment === k.TopRight ? i.Alignment.topRight : this.alignment === k.CenterLeft ? i.Alignment.centerLeft : this.alignment === k.CenterRight ? i.Alignment.centerRight : this.alignment === k.BottomLeft ? i.Alignment.bottomLeft : this.alignment === k.BottomCenter ? i.Alignment.bottomCenter : this.alignment === k.BottomRight ? i.Alignment.bottomRight : i.Alignment.center, this.cachedRuntimeAlignment = u, u);
            var u;
          }, s;
        }(), Ie = function() {
          function s() {
          }
          return s.loadRuntime = function() {
            he.default({ locateFile: function() {
              return s.wasmURL;
            } }).then(function(i) {
              var u;
              for (s.runtime = i; s.callBackQueue.length > 0; ) (u = s.callBackQueue.shift()) === null || u === void 0 || u(s.runtime);
            }).catch(function() {
              var i = "https://cdn.jsdelivr.net/npm/".concat(D.name, "@").concat(D.version, "/rive_fallback.wasm");
              s.wasmURL.toLowerCase() !== i ? (console.warn("Failed to load WASM from ".concat(s.wasmURL, ", trying jsdelivr as a backup")), s.setWasmUrl(i), s.loadRuntime()) : console.error("Could not load Rive WASM file from unpkg or jsdelivr, network connection may be down, or         you may need to call set a new WASM source via RuntimeLoader.setWasmUrl() and call         RuntimeLoader.loadRuntime() again");
            });
          }, s.getInstance = function(i) {
            s.isLoading || (s.isLoading = !0, s.loadRuntime()), s.runtime ? i(s.runtime) : s.callBackQueue.push(i);
          }, s.awaitInstance = function() {
            return new Promise(function(i) {
              return s.getInstance(function(u) {
                return i(u);
              });
            });
          }, s.setWasmUrl = function(i) {
            s.wasmURL = i;
          }, s.isLoading = !1, s.callBackQueue = [], s.wasmURL = "https://unpkg.com/".concat(D.name, "@").concat(D.version, "/rive.wasm"), s;
        }(), Ge = function() {
          function s(i, u, p, v) {
            this.animation = i, this.artboard = u, this.playing = v, this.loopCount = 0, this.scrubTo = null, this.instance = new p.LinearAnimationInstance(i, u);
          }
          return Object.defineProperty(s.prototype, "name", { get: function() {
            return this.animation.name;
          }, enumerable: !1, configurable: !0 }), Object.defineProperty(s.prototype, "time", { get: function() {
            return this.instance.time;
          }, set: function(i) {
            this.instance.time = i;
          }, enumerable: !1, configurable: !0 }), Object.defineProperty(s.prototype, "loopValue", { get: function() {
            return this.animation.loopValue;
          }, enumerable: !1, configurable: !0 }), s.prototype.advance = function(i) {
            this.scrubTo === null ? this.instance.advance(i) : (this.instance.time = 0, this.instance.advance(this.scrubTo), this.scrubTo = null);
          }, s.prototype.apply = function(i) {
            this.instance.apply(i);
          }, Object.defineProperty(s.prototype, "needsScrub", { get: function() {
            return this.scrubTo !== null;
          }, enumerable: !1, configurable: !0 }), s.prototype.cleanup = function() {
            this.instance.delete();
          }, s;
        }();
        (function(s) {
          s[s.Number = 56] = "Number", s[s.Trigger = 58] = "Trigger", s[s.Boolean = 59] = "Boolean";
        })(l || (l = {}));
        var Ne, Oe = function() {
          function s(i, u) {
            this.type = i, this.runtimeInput = u;
          }
          return Object.defineProperty(s.prototype, "name", { get: function() {
            return this.runtimeInput.name;
          }, enumerable: !1, configurable: !0 }), Object.defineProperty(s.prototype, "value", { get: function() {
            return this.runtimeInput.value;
          }, set: function(i) {
            this.runtimeInput.value = i;
          }, enumerable: !1, configurable: !0 }), s.prototype.fire = function() {
            this.type === l.Trigger && this.runtimeInput.fire();
          }, s;
        }();
        (function(s) {
          s[s.General = 128] = "General", s[s.OpenUrl = 131] = "OpenUrl";
        })(Ne || (Ne = {}));
        var q, De, Ue = function() {
          function s(i, u, p, v) {
            this.stateMachine = i, this.playing = p, this.artboard = v, this.inputs = [], this.instance = new u.StateMachineInstance(i, v), this.initInputs(u);
          }
          return Object.defineProperty(s.prototype, "name", { get: function() {
            return this.stateMachine.name;
          }, enumerable: !1, configurable: !0 }), Object.defineProperty(s.prototype, "statesChanged", { get: function() {
            for (var i = [], u = 0; u < this.instance.stateChangedCount(); u++) i.push(this.instance.stateChangedNameByIndex(u));
            return i;
          }, enumerable: !1, configurable: !0 }), s.prototype.advance = function(i) {
            this.instance.advance(i);
          }, s.prototype.reportedEventCount = function() {
            return this.instance.reportedEventCount();
          }, s.prototype.reportedEventAt = function(i) {
            return this.instance.reportedEventAt(i);
          }, s.prototype.initInputs = function(i) {
            for (var u = 0; u < this.instance.inputCount(); u++) {
              var p = this.instance.input(u);
              this.inputs.push(this.mapRuntimeInput(p, i));
            }
          }, s.prototype.mapRuntimeInput = function(i, u) {
            return i.type === u.SMIInput.bool ? new Oe(l.Boolean, i.asBool()) : i.type === u.SMIInput.number ? new Oe(l.Number, i.asNumber()) : i.type === u.SMIInput.trigger ? new Oe(l.Trigger, i.asTrigger()) : void 0;
          }, s.prototype.cleanup = function() {
            this.instance.delete();
          }, s;
        }(), C = function() {
          function s(i, u, p, v, $) {
            v === void 0 && (v = []), $ === void 0 && ($ = []), this.runtime = i, this.artboard = u, this.eventManager = p, this.animations = v, this.stateMachines = $;
          }
          return s.prototype.add = function(i, u, p) {
            if (p === void 0 && (p = !0), (i = re(i)).length === 0) this.animations.forEach(function(Me) {
              return Me.playing = u;
            }), this.stateMachines.forEach(function(Me) {
              return Me.playing = u;
            });
            else for (var v = this.animations.map(function(Me) {
              return Me.name;
            }), $ = this.stateMachines.map(function(Me) {
              return Me.name;
            }), T = 0; T < i.length; T++) {
              var ne = v.indexOf(i[T]), Le = $.indexOf(i[T]);
              if (ne >= 0 || Le >= 0) ne >= 0 ? this.animations[ne].playing = u : this.stateMachines[Le].playing = u;
              else {
                var ye = this.artboard.animationByName(i[T]);
                if (ye) {
                  var H = new Ge(ye, this.artboard, this.runtime, u);
                  H.advance(0), H.apply(1), this.animations.push(H);
                } else {
                  var $e = this.artboard.stateMachineByName(i[T]);
                  if ($e) {
                    var We = new Ue($e, this.runtime, u, this.artboard);
                    this.stateMachines.push(We);
                  }
                }
              }
            }
            return p && (u ? this.eventManager.fire({ type: q.Play, data: this.playing }) : this.eventManager.fire({ type: q.Pause, data: this.paused })), u ? this.playing : this.paused;
          }, s.prototype.initLinearAnimations = function(i, u) {
            for (var p = this.animations.map(function(Le) {
              return Le.name;
            }), v = 0; v < i.length; v++) {
              var $ = p.indexOf(i[v]);
              if ($ >= 0) this.animations[$].playing = u;
              else {
                var T = this.artboard.animationByName(i[v]);
                if (T) {
                  var ne = new Ge(T, this.artboard, this.runtime, u);
                  ne.advance(0), ne.apply(1), this.animations.push(ne);
                }
              }
            }
          }, s.prototype.initStateMachines = function(i, u) {
            for (var p = this.stateMachines.map(function(Le) {
              return Le.name;
            }), v = 0; v < i.length; v++) {
              var $ = p.indexOf(i[v]);
              if ($ >= 0) this.stateMachines[$].playing = u;
              else {
                var T = this.artboard.stateMachineByName(i[v]);
                if (T) {
                  var ne = new Ue(T, this.runtime, u, this.artboard);
                  this.stateMachines.push(ne);
                } else this.initLinearAnimations([i[v]], u);
              }
            }
          }, s.prototype.play = function(i) {
            return this.add(i, !0);
          }, s.prototype.pause = function(i) {
            return this.add(i, !1);
          }, s.prototype.scrub = function(i, u) {
            var p = this.animations.filter(function(v) {
              return i.includes(v.name);
            });
            return p.forEach(function(v) {
              return v.scrubTo = u;
            }), p.map(function(v) {
              return v.name;
            });
          }, Object.defineProperty(s.prototype, "playing", { get: function() {
            return this.animations.filter(function(i) {
              return i.playing;
            }).map(function(i) {
              return i.name;
            }).concat(this.stateMachines.filter(function(i) {
              return i.playing;
            }).map(function(i) {
              return i.name;
            }));
          }, enumerable: !1, configurable: !0 }), Object.defineProperty(s.prototype, "paused", { get: function() {
            return this.animations.filter(function(i) {
              return !i.playing;
            }).map(function(i) {
              return i.name;
            }).concat(this.stateMachines.filter(function(i) {
              return !i.playing;
            }).map(function(i) {
              return i.name;
            }));
          }, enumerable: !1, configurable: !0 }), s.prototype.stop = function(i) {
            var u = this, p = [];
            if ((i = re(i)).length === 0) p = this.animations.map(function(T) {
              return T.name;
            }).concat(this.stateMachines.map(function(T) {
              return T.name;
            })), this.animations.forEach(function(T) {
              return T.cleanup();
            }), this.stateMachines.forEach(function(T) {
              return T.cleanup();
            }), this.animations.splice(0, this.animations.length), this.stateMachines.splice(0, this.stateMachines.length);
            else {
              var v = this.animations.filter(function(T) {
                return i.includes(T.name);
              });
              v.forEach(function(T) {
                T.cleanup(), u.animations.splice(u.animations.indexOf(T), 1);
              });
              var $ = this.stateMachines.filter(function(T) {
                return i.includes(T.name);
              });
              $.forEach(function(T) {
                T.cleanup(), u.stateMachines.splice(u.stateMachines.indexOf(T), 1);
              }), p = v.map(function(T) {
                return T.name;
              }).concat($.map(function(T) {
                return T.name;
              }));
            }
            return this.eventManager.fire({ type: q.Stop, data: p }), p;
          }, Object.defineProperty(s.prototype, "isPlaying", { get: function() {
            return this.animations.reduce(function(i, u) {
              return i || u.playing;
            }, !1) || this.stateMachines.reduce(function(i, u) {
              return i || u.playing;
            }, !1);
          }, enumerable: !1, configurable: !0 }), Object.defineProperty(s.prototype, "isPaused", { get: function() {
            return !this.isPlaying && (this.animations.length > 0 || this.stateMachines.length > 0);
          }, enumerable: !1, configurable: !0 }), Object.defineProperty(s.prototype, "isStopped", { get: function() {
            return this.animations.length === 0 && this.stateMachines.length === 0;
          }, enumerable: !1, configurable: !0 }), s.prototype.atLeastOne = function(i, u) {
            var p;
            return u === void 0 && (u = !0), this.animations.length === 0 && this.stateMachines.length === 0 && (this.artboard.animationCount() > 0 ? this.add([p = this.artboard.animationByIndex(0).name], i, u) : this.artboard.stateMachineCount() > 0 && this.add([p = this.artboard.stateMachineByIndex(0).name], i, u)), p;
          }, s.prototype.handleLooping = function() {
            for (var i = 0, u = this.animations.filter(function(v) {
              return v.playing;
            }); i < u.length; i++) {
              var p = u[i];
              p.loopValue === 0 && p.loopCount ? (p.loopCount = 0, this.stop(p.name)) : p.loopValue === 1 && p.loopCount ? (this.eventManager.fire({ type: q.Loop, data: { animation: p.name, type: De.Loop } }), p.loopCount = 0) : p.loopValue === 2 && p.loopCount > 1 && (this.eventManager.fire({ type: q.Loop, data: { animation: p.name, type: De.PingPong } }), p.loopCount = 0);
            }
          }, s.prototype.handleStateChanges = function() {
            for (var i = [], u = 0, p = this.stateMachines.filter(function($) {
              return $.playing;
            }); u < p.length; u++) {
              var v = p[u];
              i.push.apply(i, v.statesChanged);
            }
            i.length > 0 && this.eventManager.fire({ type: q.StateChange, data: i });
          }, s.prototype.handleAdvancing = function(i) {
            this.eventManager.fire({ type: q.Advance, data: i });
          }, s;
        }();
        (function(s) {
          s.Load = "load", s.LoadError = "loaderror", s.Play = "play", s.Pause = "pause", s.Stop = "stop", s.Loop = "loop", s.Draw = "draw", s.Advance = "advance", s.StateChange = "statechange", s.RiveEvent = "riveevent", s.AudioStatusChange = "audiostatuschange";
        })(q || (q = {})), function(s) {
          s.OneShot = "oneshot", s.Loop = "loop", s.PingPong = "pingpong";
        }(De || (De = {}));
        var m, F = function() {
          function s(i) {
            i === void 0 && (i = []), this.listeners = i;
          }
          return s.prototype.getListeners = function(i) {
            return this.listeners.filter(function(u) {
              return u.type === i;
            });
          }, s.prototype.add = function(i) {
            this.listeners.includes(i) || this.listeners.push(i);
          }, s.prototype.remove = function(i) {
            for (var u = 0; u < this.listeners.length; u++) {
              var p = this.listeners[u];
              if (p.type === i.type && p.callback === i.callback) {
                this.listeners.splice(u, 1);
                break;
              }
            }
          }, s.prototype.removeAll = function(i) {
            var u = this;
            i ? this.listeners.filter(function(p) {
              return p.type === i;
            }).forEach(function(p) {
              return u.remove(p);
            }) : this.listeners.splice(0, this.listeners.length);
          }, s.prototype.fire = function(i) {
            this.getListeners(i.type).forEach(function(u) {
              return u.callback(i);
            });
          }, s;
        }(), K = function() {
          function s(i) {
            this.eventManager = i, this.queue = [];
          }
          return s.prototype.add = function(i) {
            this.queue.push(i);
          }, s.prototype.process = function() {
            for (; this.queue.length > 0; ) {
              var i = this.queue.shift();
              i != null && i.action && i.action(), i != null && i.event && this.eventManager.fire(i.event);
            }
          }, s;
        }();
        (function(s) {
          s[s.AVAILABLE = 0] = "AVAILABLE", s[s.UNAVAILABLE = 1] = "UNAVAILABLE";
        })(m || (m = {}));
        var M = function(s) {
          function i() {
            var u = s !== null && s.apply(this, arguments) || this;
            return u._started = !1, u._enabled = !1, u._status = m.UNAVAILABLE, u;
          }
          return ae(i, s), i.prototype.delay = function(u) {
            return oe(this, void 0, void 0, function() {
              return ce(this, function(p) {
                return [2, new Promise(function(v) {
                  return setTimeout(v, u);
                })];
              });
            });
          }, i.prototype.timeout = function() {
            return oe(this, void 0, void 0, function() {
              return ce(this, function(u) {
                return [2, new Promise(function(p, v) {
                  return setTimeout(v, 50);
                })];
              });
            });
          }, i.prototype.reportToListeners = function() {
            this.fire({ type: q.AudioStatusChange }), this.removeAll();
          }, i.prototype.enableAudio = function() {
            return oe(this, void 0, void 0, function() {
              return ce(this, function(u) {
                return this._enabled || (this._enabled = !0, this._status = m.AVAILABLE, this.reportToListeners()), [2];
              });
            });
          }, i.prototype.testAudio = function() {
            return oe(this, void 0, void 0, function() {
              return ce(this, function(u) {
                switch (u.label) {
                  case 0:
                    if (this._status !== m.UNAVAILABLE || this._audioContext === null) return [3, 4];
                    u.label = 1;
                  case 1:
                    return u.trys.push([1, 3, , 4]), [4, Promise.race([this._audioContext.resume(), this.timeout()])];
                  case 2:
                    return u.sent(), this.enableAudio(), [3, 4];
                  case 3:
                    return u.sent(), [3, 4];
                  case 4:
                    return [2];
                }
              });
            });
          }, i.prototype._establishAudio = function() {
            return oe(this, void 0, void 0, function() {
              return ce(this, function(u) {
                switch (u.label) {
                  case 0:
                    return this._started ? [3, 5] : (this._started = !0, typeof window < "u" ? [3, 1] : (this.enableAudio(), [3, 5]));
                  case 1:
                    this._audioContext = new AudioContext(), this.listenForUserAction(), u.label = 2;
                  case 2:
                    return this._status !== m.UNAVAILABLE ? [3, 5] : [4, this.testAudio()];
                  case 3:
                    return u.sent(), [4, this.delay(1e3)];
                  case 4:
                    return u.sent(), [3, 2];
                  case 5:
                    return [2];
                }
              });
            });
          }, i.prototype.listenForUserAction = function() {
            var u = this;
            document.addEventListener("pointerdown", function() {
              return oe(u, void 0, void 0, function() {
                return ce(this, function(p) {
                  return this.enableAudio(), [2];
                });
              });
            }, { once: !0 });
          }, i.prototype.establishAudio = function() {
            return oe(this, void 0, void 0, function() {
              return ce(this, function(u) {
                return this._establishAudio(), [2];
              });
            });
          }, Object.defineProperty(i.prototype, "systemVolume", { get: function() {
            return this._status === m.UNAVAILABLE ? (this.testAudio(), 0) : 1;
          }, enumerable: !1, configurable: !0 }), Object.defineProperty(i.prototype, "status", { get: function() {
            return this._status;
          }, enumerable: !1, configurable: !0 }), i;
        }(F), ue = new M(), pe = function() {
          function s() {
          }
          return s.prototype.observe = function() {
          }, s.prototype.unobserve = function() {
          }, s.prototype.disconnect = function() {
          }, s;
        }(), Ee = globalThis.ResizeObserver || pe, Re = new (function() {
          function s() {
            var i = this;
            this._elementsMap = /* @__PURE__ */ new Map(), this._onObservedEntry = function(u) {
              var p = i._elementsMap.get(u.target);
              p !== null ? p.onResize(u.target.clientWidth == 0 || u.target.clientHeight == 0) : i._resizeObserver.unobserve(u.target);
            }, this._onObserved = function(u) {
              u.forEach(i._onObservedEntry);
            }, this._resizeObserver = new Ee(this._onObserved);
          }
          return s.prototype.add = function(i, u) {
            var p = { onResize: u, element: i };
            return this._elementsMap.set(i, p), this._resizeObserver.observe(i), p;
          }, s.prototype.remove = function(i) {
            this._resizeObserver.unobserve(i.element), this._elementsMap.delete(i.element);
          }, s;
        }())(), I = function() {
          function s(i) {
            var u, p = this;
            this.loaded = !1, this.readyForPlaying = !1, this.artboard = null, this.eventCleanup = null, this.shouldDisableRiveListeners = !1, this.automaticallyHandleEvents = !1, this.enableRiveAssetCDN = !0, this._volume = 1, this._hasZeroSize = !1, this.durations = [], this.frameTimes = [], this.frameCount = 0, this.isTouchScrollEnabled = !1, this.onCanvasResize = function(v) {
              p._hasZeroSize = v, p._layout.maxX && p._layout.maxY || p.resizeToCanvas();
            }, this.renderSecondTimer = 0, this.canvas = i.canvas, i.canvas.constructor === HTMLCanvasElement && (this._observed = Re.add(this.canvas, this.onCanvasResize)), this.src = i.src, this.buffer = i.buffer, this.layout = (u = i.layout) !== null && u !== void 0 ? u : new xe(), this.shouldDisableRiveListeners = !!i.shouldDisableRiveListeners, this.isTouchScrollEnabled = !!i.isTouchScrollEnabled, this.automaticallyHandleEvents = !!i.automaticallyHandleEvents, this.enableRiveAssetCDN = i.enableRiveAssetCDN === void 0 || i.enableRiveAssetCDN, this.eventManager = new F(), i.onLoad && this.on(q.Load, i.onLoad), i.onLoadError && this.on(q.LoadError, i.onLoadError), i.onPlay && this.on(q.Play, i.onPlay), i.onPause && this.on(q.Pause, i.onPause), i.onStop && this.on(q.Stop, i.onStop), i.onLoop && this.on(q.Loop, i.onLoop), i.onStateChange && this.on(q.StateChange, i.onStateChange), i.onAdvance && this.on(q.Advance, i.onAdvance), i.onload && !i.onLoad && this.on(q.Load, i.onload), i.onloaderror && !i.onLoadError && this.on(q.LoadError, i.onloaderror), i.onplay && !i.onPlay && this.on(q.Play, i.onplay), i.onpause && !i.onPause && this.on(q.Pause, i.onpause), i.onstop && !i.onStop && this.on(q.Stop, i.onstop), i.onloop && !i.onLoop && this.on(q.Loop, i.onloop), i.onstatechange && !i.onStateChange && this.on(q.StateChange, i.onstatechange), i.assetLoader && (this.assetLoader = i.assetLoader), this.taskQueue = new K(this.eventManager), this.init({ src: this.src, buffer: this.buffer, autoplay: i.autoplay, animations: i.animations, stateMachines: i.stateMachines, artboard: i.artboard, useOffscreenRenderer: i.useOffscreenRenderer });
          }
          return s.new = function(i) {
            return console.warn("This function is deprecated: please use `new Rive({})` instead"), new s(i);
          }, s.prototype.onSystemAudioChanged = function() {
            this.volume = this._volume;
          }, s.prototype.init = function(i) {
            var u = this, p = i.src, v = i.buffer, $ = i.animations, T = i.stateMachines, ne = i.artboard, Le = i.autoplay, ye = Le !== void 0 && Le, H = i.useOffscreenRenderer, $e = H !== void 0 && H;
            if (this.src = p, this.buffer = v, !this.src && !this.buffer) throw new Error(s.missingErrorMessage);
            var We = re($), Me = re(T);
            this.loaded = !1, this.readyForPlaying = !1, Ie.awaitInstance().then(function(Ke) {
              u.runtime = Ke, u.renderer = u.runtime.makeRenderer(u.canvas, $e), u.canvas.width || u.canvas.height || u.resizeDrawingSurfaceToCanvas(), u.initData(ne, We, Me, ye).then(function() {
                return u.setupRiveListeners();
              }).catch(function(tt) {
                console.error(tt);
              });
            }).catch(function(Ke) {
              console.error(Ke);
            });
          }, s.prototype.setupRiveListeners = function(i) {
            var u = this;
            if (!this.shouldDisableRiveListeners) {
              var p = (this.animator.stateMachines || []).filter(function($) {
                return $.playing && u.runtime.hasListeners($.instance);
              }).map(function($) {
                return $.instance;
              }), v = this.isTouchScrollEnabled;
              i && "isTouchScrollEnabled" in i && (v = i.isTouchScrollEnabled), this.eventCleanup = (0, x.registerTouchInteractions)({ canvas: this.canvas, artboard: this.artboard, stateMachines: p, renderer: this.renderer, rive: this.runtime, fit: this._layout.runtimeFit(this.runtime), alignment: this._layout.runtimeAlignment(this.runtime), isTouchScrollEnabled: v });
            }
          }, s.prototype.removeRiveListeners = function() {
            this.eventCleanup && this.eventCleanup();
          }, s.prototype.initializeAudio = function() {
            var i, u = this;
            ue.status == m.UNAVAILABLE && (!((i = this.artboard) === null || i === void 0) && i.hasAudio) && (ue.add({ type: q.AudioStatusChange, callback: function() {
              return u.onSystemAudioChanged();
            } }), ue.establishAudio());
          }, s.prototype.initData = function(i, u, p, v) {
            var $;
            return oe(this, void 0, void 0, function() {
              var T, ne, Le, ye;
              return ce(this, function(H) {
                switch (H.label) {
                  case 0:
                    return this.src ? (T = this, [4, le(this.src)]) : [3, 2];
                  case 1:
                    T.buffer = H.sent(), H.label = 2;
                  case 2:
                    return this.assetLoader && (ne = new this.runtime.CustomFileAssetLoader({ loadContents: this.assetLoader })), Le = this, [4, this.runtime.load(new Uint8Array(this.buffer), ne, this.enableRiveAssetCDN)];
                  case 3:
                    return Le.file = H.sent(), this.file ? (this.initArtboard(i, u, p, v), this.initializeAudio(), this.loaded = !0, this.eventManager.fire({ type: q.Load, data: ($ = this.src) !== null && $ !== void 0 ? $ : "buffer" }), this.readyForPlaying = !0, this.taskQueue.process(), this.drawFrame(), [2, Promise.resolve()]) : (ye = "Problem loading file; may be corrupt!", console.warn(ye), this.eventManager.fire({ type: q.LoadError, data: ye }), [2, Promise.reject(ye)]);
                }
              });
            });
          }, s.prototype.initArtboard = function(i, u, p, v) {
            var $, T = i ? this.file.artboardByName(i) : this.file.defaultArtboard();
            if (!T) {
              var ne = "Invalid artboard name or no default artboard";
              return console.warn(ne), void this.eventManager.fire({ type: q.LoadError, data: ne });
            }
            if (this.artboard = T, T.volume = this._volume * ue.systemVolume, this.artboard.animationCount() < 1) throw ne = "Artboard has no animations", this.eventManager.fire({ type: q.LoadError, data: ne }), ne;
            this.animator = new C(this.runtime, this.artboard, this.eventManager), u.length > 0 || p.length > 0 ? ($ = u.concat(p), this.animator.initLinearAnimations(u, v), this.animator.initStateMachines(p, v)) : $ = [this.animator.atLeastOne(v, !1)], this.taskQueue.add({ event: { type: v ? q.Play : q.Pause, data: $ } });
          }, s.prototype.drawFrame = function() {
            this.startRendering();
          }, s.prototype.draw = function(i, u) {
            this.frameRequestId = null;
            var p = performance.now();
            this.lastRenderTime || (this.lastRenderTime = i), this.renderSecondTimer += i - this.lastRenderTime, this.renderSecondTimer > 5e3 && (this.renderSecondTimer = 0, u == null || u());
            var v = (i - this.lastRenderTime) / 1e3;
            this.lastRenderTime = i;
            for (var $ = 0, T = this.animator.animations.filter(function(ve) {
              return ve.playing || ve.needsScrub;
            }).sort(function(ve) {
              return ve.needsScrub ? -1 : 1;
            }); $ < T.length; $++) {
              var ne = T[$];
              ne.advance(v), ne.instance.didLoop && (ne.loopCount += 1), ne.apply(1);
            }
            for (var Le = 0, ye = this.animator.stateMachines.filter(function(ve) {
              return ve.playing;
            }); Le < ye.length; Le++) {
              var H = ye[Le], $e = H.reportedEventCount();
              if ($e) for (var We = 0; We < $e; We++) {
                var Me = H.reportedEventAt(We);
                if (Me) if (Me.type === Ne.OpenUrl) {
                  if (this.eventManager.fire({ type: q.RiveEvent, data: Me }), this.automaticallyHandleEvents) {
                    var Ke = document.createElement("a"), tt = Me, E = tt.url, y = tt.target, j = (0, x.sanitizeUrl)(E);
                    E && Ke.setAttribute("href", j), y && Ke.setAttribute("target", y), j && j !== x.BLANK_URL && Ke.click();
                  }
                } else this.eventManager.fire({ type: q.RiveEvent, data: Me });
              }
              H.advance(v);
            }
            this.artboard.advance(v);
            var ie = this.renderer;
            ie.clear(), ie.save(), this.alignRenderer(), this._hasZeroSize || this.artboard.draw(ie), ie.restore(), ie.flush(), this.animator.handleLooping(), this.animator.handleStateChanges(), this.animator.handleAdvancing(v), this.frameCount++;
            var J = performance.now();
            for (this.frameTimes.push(J), this.durations.push(J - p); this.frameTimes[0] <= J - 1e3; ) this.frameTimes.shift(), this.durations.shift();
            this.animator.isPlaying ? this.startRendering() : (this.animator.isPaused || this.animator.isStopped) && (this.lastRenderTime = 0);
          }, s.prototype.alignRenderer = function() {
            var i = this, u = i.renderer, p = i.runtime, v = i._layout, $ = i.artboard;
            u.align(v.runtimeFit(p), v.runtimeAlignment(p), { minX: v.minX, minY: v.minY, maxX: v.maxX, maxY: v.maxY }, $.bounds);
          }, Object.defineProperty(s.prototype, "fps", { get: function() {
            return this.durations.length;
          }, enumerable: !1, configurable: !0 }), Object.defineProperty(s.prototype, "frameTime", { get: function() {
            return this.durations.length === 0 ? 0 : (this.durations.reduce(function(i, u) {
              return i + u;
            }, 0) / this.durations.length).toFixed(4);
          }, enumerable: !1, configurable: !0 }), s.prototype.cleanup = function() {
            var i;
            this.stopRendering(), this.cleanupInstances(), this._observed !== null && Re.remove(this._observed), (i = this.file) === null || i === void 0 || i.delete(), this.file = null;
          }, s.prototype.deleteRiveRenderer = function() {
            var i;
            (i = this.renderer) === null || i === void 0 || i.delete(), this.renderer = null;
          }, s.prototype.cleanupInstances = function() {
            this.eventCleanup !== null && this.eventCleanup(), this.stop(), this.artboard && (this.artboard.delete(), this.artboard = null);
          }, s.prototype.retrieveTextRun = function(i) {
            var u;
            if (i) if (this.artboard) {
              var p = this.artboard.textRun(i);
              if (p) return p;
              console.warn("Could not access a text run with name '".concat(i, "' in the '").concat((u = this.artboard) === null || u === void 0 ? void 0 : u.name, "' Artboard. Note that you must rename a text run node in the Rive editor to make it queryable at runtime."));
            } else console.warn("Tried to access text run, but the Artboard is null");
            else console.warn("No text run name provided");
          }, s.prototype.getTextRunValue = function(i) {
            var u = this.retrieveTextRun(i);
            return u ? u.text : void 0;
          }, s.prototype.setTextRunValue = function(i, u) {
            var p = this.retrieveTextRun(i);
            p && (p.text = u);
          }, s.prototype.play = function(i, u) {
            var p = this;
            i = re(i), this.readyForPlaying ? (this.animator.play(i), this.eventCleanup && this.eventCleanup(), this.setupRiveListeners(), this.startRendering()) : this.taskQueue.add({ action: function() {
              return p.play(i, u);
            } });
          }, s.prototype.pause = function(i) {
            var u = this;
            i = re(i), this.readyForPlaying ? (this.eventCleanup && this.eventCleanup(), this.animator.pause(i)) : this.taskQueue.add({ action: function() {
              return u.pause(i);
            } });
          }, s.prototype.scrub = function(i, u) {
            var p = this;
            i = re(i), this.readyForPlaying ? (this.animator.scrub(i, u || 0), this.drawFrame()) : this.taskQueue.add({ action: function() {
              return p.scrub(i, u);
            } });
          }, s.prototype.stop = function(i) {
            var u = this;
            i = re(i), this.readyForPlaying ? (this.animator.stop(i), this.eventCleanup && this.eventCleanup()) : this.taskQueue.add({ action: function() {
              return u.stop(i);
            } });
          }, s.prototype.reset = function(i) {
            var u, p = i == null ? void 0 : i.artboard, v = re(i == null ? void 0 : i.animations), $ = re(i == null ? void 0 : i.stateMachines), T = (u = i == null ? void 0 : i.autoplay) !== null && u !== void 0 && u;
            this.cleanupInstances(), this.initArtboard(p, v, $, T), this.taskQueue.process();
          }, s.prototype.load = function(i) {
            this.stop(), this.init(i);
          }, Object.defineProperty(s.prototype, "layout", { get: function() {
            return this._layout;
          }, set: function(i) {
            this._layout = i, i.maxX && i.maxY || this.resizeToCanvas(), this.loaded && !this.animator.isPlaying && this.drawFrame();
          }, enumerable: !1, configurable: !0 }), s.prototype.resizeToCanvas = function() {
            this._layout = this.layout.copyWith({ minX: 0, minY: 0, maxX: this.canvas.width, maxY: this.canvas.height });
          }, s.prototype.resizeDrawingSurfaceToCanvas = function(i) {
            if (this.canvas instanceof HTMLCanvasElement && window) {
              var u = this.canvas.getBoundingClientRect(), p = u.width, v = u.height, $ = i || window.devicePixelRatio || 1;
              this.canvas.width = $ * p, this.canvas.height = $ * v, this.startRendering(), this.resizeToCanvas();
            }
          }, Object.defineProperty(s.prototype, "source", { get: function() {
            return this.src;
          }, enumerable: !1, configurable: !0 }), Object.defineProperty(s.prototype, "activeArtboard", { get: function() {
            return this.artboard ? this.artboard.name : "";
          }, enumerable: !1, configurable: !0 }), Object.defineProperty(s.prototype, "animationNames", { get: function() {
            if (!this.loaded) return [];
            for (var i = [], u = 0; u < this.artboard.animationCount(); u++) i.push(this.artboard.animationByIndex(u).name);
            return i;
          }, enumerable: !1, configurable: !0 }), Object.defineProperty(s.prototype, "stateMachineNames", { get: function() {
            if (!this.loaded) return [];
            for (var i = [], u = 0; u < this.artboard.stateMachineCount(); u++) i.push(this.artboard.stateMachineByIndex(u).name);
            return i;
          }, enumerable: !1, configurable: !0 }), s.prototype.stateMachineInputs = function(i) {
            if (this.loaded) {
              var u = this.animator.stateMachines.find(function(p) {
                return p.name === i;
              });
              return u == null ? void 0 : u.inputs;
            }
          }, Object.defineProperty(s.prototype, "playingStateMachineNames", { get: function() {
            return this.loaded ? this.animator.stateMachines.filter(function(i) {
              return i.playing;
            }).map(function(i) {
              return i.name;
            }) : [];
          }, enumerable: !1, configurable: !0 }), Object.defineProperty(s.prototype, "playingAnimationNames", { get: function() {
            return this.loaded ? this.animator.animations.filter(function(i) {
              return i.playing;
            }).map(function(i) {
              return i.name;
            }) : [];
          }, enumerable: !1, configurable: !0 }), Object.defineProperty(s.prototype, "pausedAnimationNames", { get: function() {
            return this.loaded ? this.animator.animations.filter(function(i) {
              return !i.playing;
            }).map(function(i) {
              return i.name;
            }) : [];
          }, enumerable: !1, configurable: !0 }), Object.defineProperty(s.prototype, "pausedStateMachineNames", { get: function() {
            return this.loaded ? this.animator.stateMachines.filter(function(i) {
              return !i.playing;
            }).map(function(i) {
              return i.name;
            }) : [];
          }, enumerable: !1, configurable: !0 }), Object.defineProperty(s.prototype, "isPlaying", { get: function() {
            return this.animator.isPlaying;
          }, enumerable: !1, configurable: !0 }), Object.defineProperty(s.prototype, "isPaused", { get: function() {
            return this.animator.isPaused;
          }, enumerable: !1, configurable: !0 }), Object.defineProperty(s.prototype, "isStopped", { get: function() {
            return this.animator.isStopped;
          }, enumerable: !1, configurable: !0 }), Object.defineProperty(s.prototype, "bounds", { get: function() {
            return this.artboard ? this.artboard.bounds : void 0;
          }, enumerable: !1, configurable: !0 }), s.prototype.on = function(i, u) {
            this.eventManager.add({ type: i, callback: u });
          }, s.prototype.off = function(i, u) {
            this.eventManager.remove({ type: i, callback: u });
          }, s.prototype.unsubscribe = function(i, u) {
            console.warn("This function is deprecated: please use `off()` instead."), this.off(i, u);
          }, s.prototype.removeAllRiveEventListeners = function(i) {
            this.eventManager.removeAll(i);
          }, s.prototype.unsubscribeAll = function(i) {
            console.warn("This function is deprecated: please use `removeAllRiveEventListeners()` instead."), this.removeAllRiveEventListeners(i);
          }, s.prototype.stopRendering = function() {
            this.loaded && this.frameRequestId && (this.runtime.cancelAnimationFrame ? this.runtime.cancelAnimationFrame(this.frameRequestId) : cancelAnimationFrame(this.frameRequestId), this.frameRequestId = null);
          }, s.prototype.startRendering = function() {
            this.loaded && this.artboard && !this.frameRequestId && (this.runtime.requestAnimationFrame ? this.frameRequestId = this.runtime.requestAnimationFrame(this.draw.bind(this)) : this.frameRequestId = requestAnimationFrame(this.draw.bind(this)));
          }, s.prototype.enableFPSCounter = function(i) {
            this.runtime.enableFPSCounter(i);
          }, s.prototype.disableFPSCounter = function() {
            this.runtime.disableFPSCounter();
          }, Object.defineProperty(s.prototype, "contents", { get: function() {
            if (this.loaded) {
              for (var i = { artboards: [] }, u = 0; u < this.file.artboardCount(); u++) {
                for (var p = this.file.artboardByIndex(u), v = { name: p.name, animations: [], stateMachines: [] }, $ = 0; $ < p.animationCount(); $++) {
                  var T = p.animationByIndex($);
                  v.animations.push(T.name);
                }
                for (var ne = 0; ne < p.stateMachineCount(); ne++) {
                  for (var Le = p.stateMachineByIndex(ne), ye = Le.name, H = new this.runtime.StateMachineInstance(Le, p), $e = [], We = 0; We < H.inputCount(); We++) {
                    var Me = H.input(We);
                    $e.push({ name: Me.name, type: Me.type });
                  }
                  v.stateMachines.push({ name: ye, inputs: $e });
                }
                i.artboards.push(v);
              }
              return i;
            }
          }, enumerable: !1, configurable: !0 }), Object.defineProperty(s.prototype, "volume", { get: function() {
            return this.artboard && this.artboard.volume !== this._volume && (this._volume = this.artboard.volume), this._volume;
          }, set: function(i) {
            this._volume = i, this.artboard && (this.artboard.volume = i * ue.systemVolume);
          }, enumerable: !1, configurable: !0 }), s.missingErrorMessage = "Rive source file or data buffer required", s;
        }(), le = function(s) {
          return oe(void 0, void 0, void 0, function() {
            var i;
            return ce(this, function(u) {
              switch (u.label) {
                case 0:
                  return i = new Request(s), [4, fetch(i)];
                case 1:
                  return [4, u.sent().arrayBuffer()];
                case 2:
                  return [2, u.sent()];
              }
            });
          });
        }, re = function(s) {
          return typeof s == "string" ? [s] : s instanceof Array ? s : [];
        }, Fe = { EventManager: F, TaskQueueManager: K }, Xe = function(s) {
          return new Promise(function(i) {
            return Ie.getInstance(function(u) {
              u.decodeAudio(s, i);
            });
          });
        }, fe = function(s) {
          return new Promise(function(i) {
            return Ie.getInstance(function(u) {
              u.decodeImage(s, i);
            });
          });
        }, Ce = function(s) {
          return new Promise(function(i) {
            return Ie.getInstance(function(u) {
              u.decodeFont(s, i);
            });
          });
        };
      })(), ee;
    })(), w.exports = P();
  } }, L = {};
  function R(w) {
    var P = L[w];
    if (P !== void 0) return P.exports;
    var Q = L[w] = { exports: {} };
    return A[w].call(Q.exports, Q, Q.exports, R), Q.exports;
  }
  R.n = (w) => {
    var P = w && w.__esModule ? () => w.default : () => w;
    return R.d(P, { a: P }), P;
  }, R.d = (w, P) => {
    for (var Q in P) R.o(P, Q) && !R.o(w, Q) && Object.defineProperty(w, Q, { enumerable: !0, get: P[Q] });
  }, R.o = (w, P) => Object.prototype.hasOwnProperty.call(w, P), (() => {
    var w = R(52);
    function P(C) {
      return P = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(m) {
        return typeof m;
      } : function(m) {
        return m && typeof Symbol == "function" && m.constructor === Symbol && m !== Symbol.prototype ? "symbol" : typeof m;
      }, P(C);
    }
    function Q(C) {
      return function(m) {
        if (Array.isArray(m)) return te(m);
      }(C) || function(m) {
        if (typeof Symbol < "u" && m[Symbol.iterator] != null || m["@@iterator"] != null) return Array.from(m);
      }(C) || function(m, F) {
        if (m) {
          if (typeof m == "string") return te(m, F);
          var K = Object.prototype.toString.call(m).slice(8, -1);
          return K === "Object" && m.constructor && (K = m.constructor.name), K === "Map" || K === "Set" ? Array.from(m) : K === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(K) ? te(m, F) : void 0;
        }
      }(C) || function() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    function te(C, m) {
      (m == null || m > C.length) && (m = C.length);
      for (var F = 0, K = new Array(m); F < m; F++) K[F] = C[F];
      return K;
    }
    function Z() {
      Z = function() {
        return m;
      };
      var C, m = {}, F = Object.prototype, K = F.hasOwnProperty, M = Object.defineProperty || function(E, y, j) {
        E[y] = j.value;
      }, ue = typeof Symbol == "function" ? Symbol : {}, pe = ue.iterator || "@@iterator", Ee = ue.asyncIterator || "@@asyncIterator", Re = ue.toStringTag || "@@toStringTag";
      function I(E, y, j) {
        return Object.defineProperty(E, y, { value: j, enumerable: !0, configurable: !0, writable: !0 }), E[y];
      }
      try {
        I({}, "");
      } catch {
        I = function(y, j, ie) {
          return y[j] = ie;
        };
      }
      function le(E, y, j, ie) {
        var J = y && y.prototype instanceof i ? y : i, ve = Object.create(J.prototype), je = new Ke(ie || []);
        return M(ve, "_invoke", { value: H(E, j, je) }), ve;
      }
      function re(E, y, j) {
        try {
          return { type: "normal", arg: E.call(y, j) };
        } catch (ie) {
          return { type: "throw", arg: ie };
        }
      }
      m.wrap = le;
      var Fe = "suspendedStart", Xe = "suspendedYield", fe = "executing", Ce = "completed", s = {};
      function i() {
      }
      function u() {
      }
      function p() {
      }
      var v = {};
      I(v, pe, function() {
        return this;
      });
      var $ = Object.getPrototypeOf, T = $ && $($(tt([])));
      T && T !== F && K.call(T, pe) && (v = T);
      var ne = p.prototype = i.prototype = Object.create(v);
      function Le(E) {
        ["next", "throw", "return"].forEach(function(y) {
          I(E, y, function(j) {
            return this._invoke(y, j);
          });
        });
      }
      function ye(E, y) {
        function j(J, ve, je, qe) {
          var He = re(E[J], E, ve);
          if (He.type !== "throw") {
            var ht = He.arg, it = ht.value;
            return it && P(it) == "object" && K.call(it, "__await") ? y.resolve(it.__await).then(function(at) {
              j("next", at, je, qe);
            }, function(at) {
              j("throw", at, je, qe);
            }) : y.resolve(it).then(function(at) {
              ht.value = at, je(ht);
            }, function(at) {
              return j("throw", at, je, qe);
            });
          }
          qe(He.arg);
        }
        var ie;
        M(this, "_invoke", { value: function(J, ve) {
          function je() {
            return new y(function(qe, He) {
              j(J, ve, qe, He);
            });
          }
          return ie = ie ? ie.then(je, je) : je();
        } });
      }
      function H(E, y, j) {
        var ie = Fe;
        return function(J, ve) {
          if (ie === fe) throw Error("Generator is already running");
          if (ie === Ce) {
            if (J === "throw") throw ve;
            return { value: C, done: !0 };
          }
          for (j.method = J, j.arg = ve; ; ) {
            var je = j.delegate;
            if (je) {
              var qe = $e(je, j);
              if (qe) {
                if (qe === s) continue;
                return qe;
              }
            }
            if (j.method === "next") j.sent = j._sent = j.arg;
            else if (j.method === "throw") {
              if (ie === Fe) throw ie = Ce, j.arg;
              j.dispatchException(j.arg);
            } else j.method === "return" && j.abrupt("return", j.arg);
            ie = fe;
            var He = re(E, y, j);
            if (He.type === "normal") {
              if (ie = j.done ? Ce : Xe, He.arg === s) continue;
              return { value: He.arg, done: j.done };
            }
            He.type === "throw" && (ie = Ce, j.method = "throw", j.arg = He.arg);
          }
        };
      }
      function $e(E, y) {
        var j = y.method, ie = E.iterator[j];
        if (ie === C) return y.delegate = null, j === "throw" && E.iterator.return && (y.method = "return", y.arg = C, $e(E, y), y.method === "throw") || j !== "return" && (y.method = "throw", y.arg = new TypeError("The iterator does not provide a '" + j + "' method")), s;
        var J = re(ie, E.iterator, y.arg);
        if (J.type === "throw") return y.method = "throw", y.arg = J.arg, y.delegate = null, s;
        var ve = J.arg;
        return ve ? ve.done ? (y[E.resultName] = ve.value, y.next = E.nextLoc, y.method !== "return" && (y.method = "next", y.arg = C), y.delegate = null, s) : ve : (y.method = "throw", y.arg = new TypeError("iterator result is not an object"), y.delegate = null, s);
      }
      function We(E) {
        var y = { tryLoc: E[0] };
        1 in E && (y.catchLoc = E[1]), 2 in E && (y.finallyLoc = E[2], y.afterLoc = E[3]), this.tryEntries.push(y);
      }
      function Me(E) {
        var y = E.completion || {};
        y.type = "normal", delete y.arg, E.completion = y;
      }
      function Ke(E) {
        this.tryEntries = [{ tryLoc: "root" }], E.forEach(We, this), this.reset(!0);
      }
      function tt(E) {
        if (E || E === "") {
          var y = E[pe];
          if (y) return y.call(E);
          if (typeof E.next == "function") return E;
          if (!isNaN(E.length)) {
            var j = -1, ie = function J() {
              for (; ++j < E.length; ) if (K.call(E, j)) return J.value = E[j], J.done = !1, J;
              return J.value = C, J.done = !0, J;
            };
            return ie.next = ie;
          }
        }
        throw new TypeError(P(E) + " is not iterable");
      }
      return u.prototype = p, M(ne, "constructor", { value: p, configurable: !0 }), M(p, "constructor", { value: u, configurable: !0 }), u.displayName = I(p, Re, "GeneratorFunction"), m.isGeneratorFunction = function(E) {
        var y = typeof E == "function" && E.constructor;
        return !!y && (y === u || (y.displayName || y.name) === "GeneratorFunction");
      }, m.mark = function(E) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(E, p) : (E.__proto__ = p, I(E, Re, "GeneratorFunction")), E.prototype = Object.create(ne), E;
      }, m.awrap = function(E) {
        return { __await: E };
      }, Le(ye.prototype), I(ye.prototype, Ee, function() {
        return this;
      }), m.AsyncIterator = ye, m.async = function(E, y, j, ie, J) {
        J === void 0 && (J = Promise);
        var ve = new ye(le(E, y, j, ie), J);
        return m.isGeneratorFunction(y) ? ve : ve.next().then(function(je) {
          return je.done ? je.value : ve.next();
        });
      }, Le(ne), I(ne, Re, "Generator"), I(ne, pe, function() {
        return this;
      }), I(ne, "toString", function() {
        return "[object Generator]";
      }), m.keys = function(E) {
        var y = Object(E), j = [];
        for (var ie in y) j.push(ie);
        return j.reverse(), function J() {
          for (; j.length; ) {
            var ve = j.pop();
            if (ve in y) return J.value = ve, J.done = !1, J;
          }
          return J.done = !0, J;
        };
      }, m.values = tt, Ke.prototype = { constructor: Ke, reset: function(E) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = C, this.done = !1, this.delegate = null, this.method = "next", this.arg = C, this.tryEntries.forEach(Me), !E) for (var y in this) y.charAt(0) === "t" && K.call(this, y) && !isNaN(+y.slice(1)) && (this[y] = C);
      }, stop: function() {
        this.done = !0;
        var E = this.tryEntries[0].completion;
        if (E.type === "throw") throw E.arg;
        return this.rval;
      }, dispatchException: function(E) {
        if (this.done) throw E;
        var y = this;
        function j(He, ht) {
          return ve.type = "throw", ve.arg = E, y.next = He, ht && (y.method = "next", y.arg = C), !!ht;
        }
        for (var ie = this.tryEntries.length - 1; ie >= 0; --ie) {
          var J = this.tryEntries[ie], ve = J.completion;
          if (J.tryLoc === "root") return j("end");
          if (J.tryLoc <= this.prev) {
            var je = K.call(J, "catchLoc"), qe = K.call(J, "finallyLoc");
            if (je && qe) {
              if (this.prev < J.catchLoc) return j(J.catchLoc, !0);
              if (this.prev < J.finallyLoc) return j(J.finallyLoc);
            } else if (je) {
              if (this.prev < J.catchLoc) return j(J.catchLoc, !0);
            } else {
              if (!qe) throw Error("try statement without catch or finally");
              if (this.prev < J.finallyLoc) return j(J.finallyLoc);
            }
          }
        }
      }, abrupt: function(E, y) {
        for (var j = this.tryEntries.length - 1; j >= 0; --j) {
          var ie = this.tryEntries[j];
          if (ie.tryLoc <= this.prev && K.call(ie, "finallyLoc") && this.prev < ie.finallyLoc) {
            var J = ie;
            break;
          }
        }
        J && (E === "break" || E === "continue") && J.tryLoc <= y && y <= J.finallyLoc && (J = null);
        var ve = J ? J.completion : {};
        return ve.type = E, ve.arg = y, J ? (this.method = "next", this.next = J.finallyLoc, s) : this.complete(ve);
      }, complete: function(E, y) {
        if (E.type === "throw") throw E.arg;
        return E.type === "break" || E.type === "continue" ? this.next = E.arg : E.type === "return" ? (this.rval = this.arg = E.arg, this.method = "return", this.next = "end") : E.type === "normal" && y && (this.next = y), s;
      }, finish: function(E) {
        for (var y = this.tryEntries.length - 1; y >= 0; --y) {
          var j = this.tryEntries[y];
          if (j.finallyLoc === E) return this.complete(j.completion, j.afterLoc), Me(j), s;
        }
      }, catch: function(E) {
        for (var y = this.tryEntries.length - 1; y >= 0; --y) {
          var j = this.tryEntries[y];
          if (j.tryLoc === E) {
            var ie = j.completion;
            if (ie.type === "throw") {
              var J = ie.arg;
              Me(j);
            }
            return J;
          }
        }
        throw Error("illegal catch attempt");
      }, delegateYield: function(E, y, j) {
        return this.delegate = { iterator: tt(E), resultName: y, nextLoc: j }, this.method === "next" && (this.arg = C), s;
      } }, m;
    }
    function ee(C, m) {
      var F = Object.keys(C);
      if (Object.getOwnPropertySymbols) {
        var K = Object.getOwnPropertySymbols(C);
        m && (K = K.filter(function(M) {
          return Object.getOwnPropertyDescriptor(C, M).enumerable;
        })), F.push.apply(F, K);
      }
      return F;
    }
    function z(C) {
      for (var m = 1; m < arguments.length; m++) {
        var F = arguments[m] != null ? arguments[m] : {};
        m % 2 ? ee(Object(F), !0).forEach(function(K) {
          Ie(C, K, F[K]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(C, Object.getOwnPropertyDescriptors(F)) : ee(Object(F)).forEach(function(K) {
          Object.defineProperty(C, K, Object.getOwnPropertyDescriptor(F, K));
        });
      }
      return C;
    }
    function S(C, m, F, K, M, ue, pe) {
      try {
        var Ee = C[ue](pe), Re = Ee.value;
      } catch (I) {
        return void F(I);
      }
      Ee.done ? m(Re) : Promise.resolve(Re).then(K, M);
    }
    function k(C, m) {
      if (!(C instanceof m)) throw new TypeError("Cannot call a class as a function");
    }
    function he(C, m) {
      for (var F = 0; F < m.length; F++) {
        var K = m[F];
        K.enumerable = K.enumerable || !1, K.configurable = !0, "value" in K && (K.writable = !0), Object.defineProperty(C, Ge(K.key), K);
      }
    }
    function D(C, m, F) {
      return m && he(C.prototype, m), F && he(C, F), Object.defineProperty(C, "prototype", { writable: !1 }), C;
    }
    function x(C, m, F) {
      return m = xe(m), function(K, M) {
        if (M && (P(M) === "object" || typeof M == "function")) return M;
        if (M !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
        return function(ue) {
          if (ue === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return ue;
        }(K);
      }(C, ce() ? Reflect.construct(m, F || [], xe(C).constructor) : m.apply(C, F));
    }
    function ae(C, m) {
      if (typeof m != "function" && m !== null) throw new TypeError("Super expression must either be null or a function");
      C.prototype = Object.create(m && m.prototype, { constructor: { value: C, writable: !0, configurable: !0 } }), Object.defineProperty(C, "prototype", { writable: !1 }), m && l(C, m);
    }
    function oe(C) {
      var m = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
      return oe = function(F) {
        if (F === null || !function(M) {
          try {
            return Function.toString.call(M).indexOf("[native code]") !== -1;
          } catch {
            return typeof M == "function";
          }
        }(F)) return F;
        if (typeof F != "function") throw new TypeError("Super expression must either be null or a function");
        if (m !== void 0) {
          if (m.has(F)) return m.get(F);
          m.set(F, K);
        }
        function K() {
          return function(M, ue, pe) {
            if (ce()) return Reflect.construct.apply(null, arguments);
            var Ee = [null];
            Ee.push.apply(Ee, ue);
            var Re = new (M.bind.apply(M, Ee))();
            return pe && l(Re, pe.prototype), Re;
          }(F, arguments, xe(this).constructor);
        }
        return K.prototype = Object.create(F.prototype, { constructor: { value: K, enumerable: !1, writable: !0, configurable: !0 } }), l(K, F);
      }, oe(C);
    }
    function ce() {
      try {
        var C = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
      } catch {
      }
      return (ce = function() {
        return !!C;
      })();
    }
    function l(C, m) {
      return l = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(F, K) {
        return F.__proto__ = K, F;
      }, l(C, m);
    }
    function xe(C) {
      return xe = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(m) {
        return m.__proto__ || Object.getPrototypeOf(m);
      }, xe(C);
    }
    function Ie(C, m, F) {
      return (m = Ge(m)) in C ? Object.defineProperty(C, m, { value: F, enumerable: !0, configurable: !0, writable: !0 }) : C[m] = F, C;
    }
    function Ge(C) {
      var m = function(F, K) {
        if (P(F) != "object" || !F) return F;
        var M = F[Symbol.toPrimitive];
        if (M !== void 0) {
          var ue = M.call(F, "string");
          if (P(ue) != "object") return ue;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(F);
      }(C);
      return P(m) == "symbol" ? m : m + "";
    }
    var Ne = function(C) {
      function m() {
        var M;
        return k(this, m), (M = x(this, m)).attachShadow({ mode: "open" }), M.rive = null, M.autoplay = M.getAttribute("autoplay") !== "false", M.ignoreHiddenInputs = M.hasAttribute("ignoreHiddenInputs") && M.getAttribute("ignoreHiddenInputs") !== "false", M.surfaceAllInputs = M.hasAttribute("surfaceAllInputs") && M.getAttribute("surfaceAllInputs") !== "false", M;
      }
      return ae(m, C), D(m, [{ key: "attributeChangedCallback", value: function(M, ue, pe) {
        if (this.suppressNextAttributeChangeCallback) this.suppressNextAttributeChangeCallback = !1;
        else switch (M) {
          case "play-state":
            return this.setPlayState(pe);
          case "desc":
            return this.setDescription(pe);
          case "volume":
            return this.volume = pe;
        }
      } }, { key: "connectedCallback", value: function() {
        var M = this;
        this.shadowRoot.innerHTML = `
      <style>
        :host {
          position: relative;
        }
        canvas {
          width: 100%;
          height: var(--rive-h, 100%);
          display: block;
          position: relative;
        }
        #riveToolbar {
          position: absolute;
          left: var(--connect-spacer-sm, .5rem);
          top: calc(100% - var(--connect-spacer-sm, .5rem));
          transform: translateY(-100%);
        }
        #riveDescriptor {
          position: absolute;
          top: 0;
          left: -9999px;
        }
      )
      </style>
      <canvas role="img" aria-describedby="riveDescriptor" aria-labelledby="riveDescriptor"></canvas>
      <p id="riveDescriptor" role="status" aria-live="polite" aria-atomic="true"></p>
    `, this.canvas = this.shadowRoot.querySelector("canvas"), this.riveDescriptor = this.shadowRoot.querySelector("#riveDescriptor"), window.requestAnimationFrame(function() {
          M.initRive(M.getAttribute("src"));
        }), window.addEventListener("resize", this.handleResize.bind(this)), this.setDescription(this.getAttribute("desc"));
        var ue = window.matchMedia("(prefers-reduced-motion: reduce)");
        this.handleReduceMotionChange.bind(this), ue.addEventListener("change", function(pe) {
          M.handleReduceMotionChange(pe.matches);
        });
      } }, { key: "disconnectedCallback", value: function() {
        this.rive && (this.rive.stop(), this.rive.cleanup(), window.removeEventListener("resize", this.handleResize.bind(this)));
      } }, { key: "initRive", value: (F = Z().mark(function M(ue) {
        var pe, Ee, Re, I = this;
        return Z().wrap(function(le) {
          for (; ; ) switch (le.prev = le.next) {
            case 0:
              if (ue) {
                le.next = 2;
                break;
              }
              return le.abrupt("return", console.error("Rive source file is required."));
            case 2:
              if (this.canvas) {
                le.next = 4;
                break;
              }
              return le.abrupt("return", console.error("Canvas element not found."));
            case 4:
              pe = this.getAttribute("stateMachine") || "State Machine 1", Ee = this.getAttribute("artboard") || void 0, Re = !this.hasAttribute("disableTouchScroll") || this.getAttribute("disableTouchScroll") === "false", this.rive = new w.Rive(z(z({ src: ue, canvas: this.canvas, autoplay: this.autoplay, stateMachines: pe }, Ee && { artboard: Ee }), {}, { isTouchScrollEnabled: Re, layout: new w.Layout({ fit: w.Fit.Contain }), onLoad: function() {
                I.rive.resizeDrawingSurfaceToCanvas();
                var re = I.rive.artboard;
                if (I.hasAttribute("contain") || I.hasAttribute("height")) {
                  if (!I.hasAttribute("contain")) {
                    var Fe = I.canvas.height * (re.bounds.maxX / re.bounds.maxY);
                    I.canvas.width = Fe, I.rive.layout = new w.Layout({ fit: w.Fit.Contain });
                  }
                } else {
                  var Xe = I.canvas.width * (re.bounds.maxY / re.bounds.maxX);
                  I.canvas.height = Xe, console.log("height calculated " + Xe), I.rive.layout = new w.Layout({ fit: w.Fit.Contain });
                }
                I.volume = I.getAttribute("volume");
                var fe = window.matchMedia("(prefers-reduced-motion: reduce)");
                I.handleReduceMotionChange(fe.matches), I.getInputs(void 0, I.ignoreHiddenInputs, I.surfaceAllInputs), I.dispatchEvent(new CustomEvent("rive-loaded", { bubbles: !0, composed: !0 }));
              }, onPlay: function() {
                return I.dispatchEvent(new CustomEvent("rive-play", { bubbles: !0, composed: !0 }));
              }, onPause: function() {
                return I.dispatchEvent(new CustomEvent("rive-pause", { bubbles: !0, composed: !0 }));
              }, onStop: function() {
                return I.dispatchEvent(new CustomEvent("rive-stop", { bubbles: !0, composed: !0 }));
              }, onLoop: function() {
                return I.dispatchEvent(new CustomEvent("rive-loop", { bubbles: !0, composed: !0 }));
              }, onAdvance: function(re) {
                I.handleDraw(re.data), I.dispatchEvent(new CustomEvent("rive-advance", { bubbles: !0, composed: !0 }));
              } }));
            case 8:
            case "end":
              return le.stop();
          }
        }, M, this);
      }), K = function() {
        var M = this, ue = arguments;
        return new Promise(function(pe, Ee) {
          var Re = F.apply(M, ue);
          function I(re) {
            S(Re, pe, Ee, I, le, "next", re);
          }
          function le(re) {
            S(Re, pe, Ee, I, le, "throw", re);
          }
          I(void 0);
        });
      }, function(M) {
        return K.apply(this, arguments);
      }) }, { key: "isPlaying", get: function() {
        return this.rive.isPlaying;
      } }, { key: "isPaused", get: function() {
        return this.rive.isPaused;
      } }, { key: "isStopped", get: function() {
        return this.rive.isStopped;
      } }, { key: "volume", get: function() {
        return this.rive.volume;
      }, set: function(M) {
        this.rive && (isNaN(M) || (this.rive.volume = M));
      } }, { key: "play", value: function() {
        this.autoplay && (this.rive.play(), this.getAttribute("play-state") !== "playing" && (this.suppressNextAttributeChangeCallback = !0, this.setAttribute("play-state", "playing")));
      } }, { key: "pause", value: function() {
        this.rive.pause(), this.pausedSinceLastDraw = !0, this.getAttribute("play-state") !== "paused" && (this.suppressNextAttributeChangeCallback = !0, this.setAttribute("play-state", "paused"));
      } }, { key: "stop", value: function() {
        this.rive.stop(), this.getAttribute("play-state") !== "stopped" && (this.suppressNextAttributeChangeCallback = !0, this.setAttribute("play-state", "stopped"));
      } }, { key: "setPlayState", value: function(M) {
        if (this.rive) {
          var ue = M !== "paused" && M !== "stopped";
          ue && !this.isPlaying ? this.play() : !ue && this.isPlaying && this.pause();
        }
      } }, { key: "togglePlayState", value: function() {
        this.rive && (this.isPlaying ? this.pause() : this.play());
      } }, { key: "getInputs", value: function(M, ue, pe) {
        var Ee = this;
        if (pe == null && (pe = !0), this.inputs = {}, this.rive) {
          var Re = this.getActiveStateMachine();
          if (Re) {
            var I = this.rive.stateMachineInputs(Re);
            I && I.length != 0 && (I.forEach(function(le) {
              var re = le.name.toLowerCase().startsWith(m.INPUT_HIDING_PREFIX.toLowerCase()), Fe = le.name.toLowerCase().startsWith(m.INPUT_SURFACING_PREFIX.toLowerCase());
              if ((pe || !re) && (pe || Fe)) {
                var Xe = Fe ? le.name.slice(m.INPUT_SURFACING_PREFIX.length) : le.name, fe = new Oe(Ee, le.name);
                Ee.inputs[Xe] = fe;
              }
            }), console.log(this.inputs));
          }
        }
      } }, { key: "getActiveArtboard", value: function() {
        return this.rive.activeArtboard;
      } }, { key: "getActiveStateMachine", value: function() {
        if (this.rive) {
          var M = [].concat(Q(this.rive.playingStateMachineNames), Q(this.rive.pausedStateMachineNames));
          switch (M.length) {
            case 0:
              return null;
            case 1:
              return M[0];
            default:
              return console.error("Multiple State Machines are somehow active on this Artboard!", M);
          }
        }
      } }, { key: "handleResize", value: function() {
        if (this.shadowRoot.querySelector("canvas") && this.rive) {
          this.rive.resizeDrawingSurfaceToCanvas();
          var M = this.rive.artboard;
          if (console.log("resize"), this.hasAttribute("contain") || this.hasAttribute("height")) {
            if (!this.hasAttribute("contain")) {
              console.log("only contain");
              var ue = this.canvas.height * (M.bounds.maxX / M.bounds.maxY);
              this.canvas.width = ue, this.rive.layout = new w.Layout({ fit: w.Fit.Contain });
            }
          } else {
            console.log("no contain or height");
            var pe = this.canvas.width * (M.bounds.maxY / M.bounds.maxX);
            this.canvas.height = pe, console.log("height calculated " + pe), this.rive.layout = new w.Layout({ fit: w.Fit.Contain });
          }
        }
      } }, { key: "handleDraw", value: function(M) {
        this.pausedSinceLastDraw && (this.pausedSinceLastDraw = !1);
      } }, { key: "handleReduceMotionChange", value: function(M) {
        this.rive && (M ? this.pause() : this.play());
      } }, { key: "setDescription", value: function(M) {
        this.riveDescriptor && (this.riveDescriptor.textContent = M);
      } }], [{ key: "observedAttributes", get: function() {
        return ["desc", "play-state", "animstate", "volume"];
      } }]);
      var F, K;
    }(oe(HTMLElement));
    Ie(Ne, "INPUT_SURFACING_PREFIX", "EXPORT_"), Ie(Ne, "INPUT_HIDING_PREFIX", "_");
    var Oe = function() {
      return D(function C(m, F, K) {
        var M = this;
        if (k(this, C), !m) return console.error("hmhRive instance must be supplied as an argument when creating a RiveInput!");
        if (!F) return console.error("Input name must be supplied as an argument when creating a RiveInput!");
        if (this.name = F, K != null) this.isNested = !0, this.nestedPath = K, this.input = m.rive.retrieveInputAtPath(this.name, this.nestedPath);
        else {
          this.isNested = !1, this.nestedPath = null;
          var ue = m.getActiveStateMachine(), pe = m.rive.stateMachineInputs(ue);
          this.input = pe.find(function(Ee) {
            return Ee.name === M.name;
          });
        }
        if (this.type = this.input.type, !(this instanceof q || this instanceof De || this instanceof Ue)) switch (this.type) {
          case w.StateMachineInputType.Number:
            return new q(m, F);
          case w.StateMachineInputType.Boolean:
            return new De(m, F);
          case w.StateMachineInputType.Trigger:
            return new Ue(m, F);
        }
      }, [{ key: "getValue", value: function() {
        return this.type == w.StateMachineInputType.Trigger ? null : this.isNested == 0 ? this.input.value : this.type == w.StateMachineInputType.Number ? this.input.asNumber().value : this.type == w.StateMachineInputType.Boolean ? this.input.asBool().value : void 0;
      } }, { key: "setValue", value: function(C) {
        return this.type == w.StateMachineInputType.Trigger ? C ? this.fire() : void 0 : this.isNested == 0 ? this.input.value = C : this.type == w.StateMachineInputType.Number ? this.input.asNumber().value = C : this.type == w.StateMachineInputType.Boolean ? this.input.asBool().value = C : void 0;
      } }, { key: "fire", value: function() {
        if (this.type == w.StateMachineInputType.Trigger) return this.isNested == 0 ? this.input.fire() : this.input.asTrigger().fire();
      } }, { key: "value", get: function() {
        return this.getValue();
      }, set: function(C) {
        this.setValue(C);
      } }], [{ key: "getTypeStringFromTypeID", value: function(C) {
        switch (C) {
          case w.StateMachineInputType.Number:
            return "Number";
          case w.StateMachineInputType.Boolean:
            return "Boolean";
          case w.StateMachineInputType.Trigger:
            return "Trigger";
          default:
            return;
        }
      } }]);
    }(), q = function(C) {
      function m() {
        return k(this, m), x(this, m, arguments);
      }
      return ae(m, C), D(m);
    }(Oe), De = function(C) {
      function m() {
        return k(this, m), x(this, m, arguments);
      }
      return ae(m, C), D(m);
    }(Oe), Ue = function(C) {
      function m() {
        return k(this, m), x(this, m, arguments);
      }
      return ae(m, C), D(m);
    }(Oe);
    customElements.get("hmh-rive") || customElements.define("hmh-rive", Ne);
  })();
})();
const _i = ({
  textTransform: A,
  animSrc: L,
  stateMachine: R = "State Machine 1",
  buttonText: w,
  playState: P = "paused",
  // Default play-state is not playing
  ...Q
}) => {
  const te = Mt(null), [Z, ee] = Rt(!1);
  Pt(() => {
    const S = window.matchMedia("(prefers-reduced-motion: reduce)");
    ee(S.matches);
    const k = () => ee(S.matches);
    return S.addEventListener("change", k), () => {
      S.removeEventListener("change", k);
    };
  }, []), Pt(() => {
    te.current && te.current.setAttribute("play-state", P || "paused");
  }, [P]);
  const z = P === "playing" && !Z;
  return /* @__PURE__ */ B.createElement(ri, { ...Q, iconOpacity: z ? 0 : 1 }, /* @__PURE__ */ B.createElement(
    jr,
    {
      element: "p",
      ariaLive: "polite",
      textTransform: A,
      opacity: z ? 0 : 1
    },
    w
  ), /* @__PURE__ */ B.createElement(
    "hmh-rive",
    {
      ref: te,
      src: L,
      autoplay: !1,
      hidePlayPause: !0,
      stateMachine: R,
      "aria-hidden": "true",
      style: { opacity: z ? 1 : 0 },
      height: !0
    }
  ));
};
function wi({ children: A, disabled: L, data: R, dataTestId: w }) {
  const [P, Q] = Rt(!1), te = Mt(null), Z = (S) => {
    te.current && !te.current.contains(S.target) && P && Q(!1);
  }, ee = () => Q(!P), z = (S) => {
    (S.key === "Enter" || S.key === " ") && ee();
  };
  return Pt(() => (document.addEventListener("click", Z), () => {
    document.removeEventListener("click", Z);
  }), [P]), /* @__PURE__ */ B.createElement(
    "div",
    {
      className: "connect__button-split connect__button connect__button-primary",
      ref: te,
      "data-testid": w
    },
    /* @__PURE__ */ B.createElement("button", { type: "button", className: "connect__button-split-button", disabled: L }, A),
    /* @__PURE__ */ B.createElement(
      "button",
      {
        type: "button",
        className: "connect__button-split-button connect__button-split-button-actions",
        disabled: L,
        "aria-haspopup": "true",
        "aria-expanded": P,
        onClick: ee,
        onKeyDown: z,
        "aria-label": "Toggle extra options"
      },
      /* @__PURE__ */ B.createElement(Mn, { id: P ? "arrowUp" : "arrowDown", size: "sm", fill: "white" })
    ),
    P && /* @__PURE__ */ B.createElement(oi, { data: R })
  );
}
function oi({
  data: A
}) {
  return /* @__PURE__ */ B.createElement(B.Fragment, null, /* @__PURE__ */ B.createElement("ul", { role: "menu", className: "connect__list" }, A.map((L, R) => /* @__PURE__ */ B.createElement("li", { key: `${L.label}-${R}`, role: "menuitem", className: "connect__list-item" }, L.value))));
}
const si = ({ caption: A, cite: L }) => /* @__PURE__ */ B.createElement("figcaption", { className: "connect__figcaption" }, A, L && /* @__PURE__ */ B.createElement("cite", null, " ", L)), jn = ({ children: A, caption: L, cite: R, dataTestId: w }) => /* @__PURE__ */ B.createElement("figure", { className: "connect__figure", "data-testid": w }, A, (L || R) && /* @__PURE__ */ B.createElement(si, { caption: L, cite: R }));
function ui({ headerElement: A, children: L }) {
  return /* @__PURE__ */ B.createElement("header", { className: "connect__card-header" }, /* @__PURE__ */ B.createElement(jr, { element: A }, L));
}
function ci({ children: A }) {
  return /* @__PURE__ */ B.createElement("div", { className: "connect__card-content" }, A);
}
function li({ children: A }) {
  return /* @__PURE__ */ B.createElement("footer", { className: "connect__card-footer" }, A);
}
function Ai({
  image: A,
  headerElement: L,
  headerContent: R,
  mainContent: w,
  footerContent: P,
  dataTestId: Q,
  children: te
}) {
  return /* @__PURE__ */ B.createElement("article", { className: "connect__card", "data-testid": Q }, A && /* @__PURE__ */ B.createElement(jn, null, te), /* @__PURE__ */ B.createElement(ui, { headerElement: L }, R), /* @__PURE__ */ B.createElement(ci, null, w), /* @__PURE__ */ B.createElement(li, null, P));
}
function Ei({ children: A, num: L, totalNum: R, dataTestId: w }) {
  return /* @__PURE__ */ B.createElement("div", { className: "connect__chip", "data-testid": w }, L, " ", R ? `/ ${R}` : "", " ", A);
}
const Ci = ({ orientation: A, dataTestId: L }) => /* @__PURE__ */ B.createElement(
  "hr",
  {
    className: "connect__divider",
    "aria-orientation": A,
    "aria-hidden": "true",
    "data-testid": L
  }
), Ti = ({
  children: A,
  footerBreakoutColor: L,
  footerPosition: R = "relative",
  footerPositionTop: w,
  footerHeight: P,
  footerWidth: Q,
  footerBreakoutLeft: te,
  footerBreakoutWidth: Z,
  footerPaddingTop: ee,
  footerPaddingRight: z,
  footerPaddingLeft: S,
  footerPaddingBottom: k,
  footerMarginTop: he = "xxl",
  className: D = "connect__grid",
  dataTestId: x
}) => {
  const ae = {}, oe = {
    "--theme__footer-breakout-bg": L && `var(--connect__${L})`,
    "--theme__footer-position": R,
    "--theme__footer-position-t": w,
    "--theme__footer-h": P && `var(--connect__spacer-${P})`,
    "--theme__footer-w": Q,
    "--theme__footer-breakout-l": te,
    "--theme__footer-breakout-w": Z,
    "--theme__footer-padding-t": ee && `var(--connect__spacer-${ee})`,
    "--theme__footer-padding-r": z && `var(--connect__spacer-${z})`,
    "--theme__footer-padding-l": S && `var(--connect__spacer-${S})`,
    "--theme__footer-padding-b": k && `var(--connect__spacer-${k})`,
    "--theme__footer-margin-t": he && `var(--connect__spacer-${he})`
  };
  return Object.entries(oe).forEach(([ce, l]) => {
    l && (ae[ce] = l);
  }), /* @__PURE__ */ B.createElement("footer", { className: `connect__footer ${D}`, "data-testid": x, style: ae }, A);
}, Pi = ({
  children: A,
  borderColor: L,
  borderWidth: R = "none",
  borderRadius: w = "none",
  headerBackgroundColor: P,
  headerBreakoutColor: Q,
  headerBackgroundImage: te,
  paddingBottom: Z = "sm",
  paddingTop: ee = "sm",
  paddingLeft: z = "sm",
  paddingRight: S = "sm",
  className: k = "connect__grid",
  dataTestId: he
}) => {
  const D = {}, x = {
    "--theme__connect-header-border-c": L && `var(--connect__${L})`,
    "--theme__connect-header-border-w": R && `var(--connect__spacer-${R})`,
    "--theme__connect-header-border-r": w && `var(--connect__spacer-${w})`,
    "--theme__connect-header-bg-color": P && `var(--connect__${P})`,
    "--theme__connect-header-breakout-bg": Q && `var(--connect__${Q})`,
    "--theme__connect-header-bg-image": te && `url(${te})`,
    "--theme__connect-header-padding-b": Z && `var(--connect__spacer-${Z})`,
    "--theme__connect-header-padding-t": ee && `var(--connect__spacer-${ee})`,
    "--theme__connect-header-padding-l": z && `var(--connect__spacer-${z})`,
    "--theme__connect-header-padding-r": S && `var(--connect__spacer-${S})`
  };
  return Object.entries(x).forEach(([ae, oe]) => {
    oe && (D[ae] = oe);
  }), /* @__PURE__ */ B.createElement("header", { className: `connect__header ${k}`, "data-testid": he, style: D }, A);
}, hi = "/node_modules/@connect/connect-design-system/dist/images/zelda.jpg", fi = ({ imageSrc: A, altText: L, dataTestId: R }) => /* @__PURE__ */ B.createElement("img", { src: A || hi, alt: L, "data-testid": R });
function Ri({
  type: A,
  id: L,
  name: R,
  children: w,
  checked: P,
  disabled: Q,
  correct: te,
  incorrect: Z,
  answerShown: ee,
  noShadow: z = !1,
  dataTestId: S
}) {
  const k = `${te ? "connect__input-correct" : ""} ${Z ? "connect__input-incorrect" : ""} ${ee ? "connect__mcq-label-shown" : ""} ${z ? "connect__input-no-shadow" : ""}`, he = Mt(null), [D, x] = Rt(P || !1), ae = () => {
    var oe;
    x(((oe = he.current) == null ? void 0 : oe.checked) ?? !1);
  };
  return Pt(() => {
    x(P || !1);
  }, [P]), /* @__PURE__ */ B.createElement("div", { className: "connect__input-label-wrapper" }, /* @__PURE__ */ B.createElement(
    "input",
    {
      ref: he,
      type: A,
      id: L,
      className: `connect__input ${k}`,
      name: R,
      checked: D,
      onChange: ae,
      disabled: Q,
      "data-testid": S
    }
  ), /* @__PURE__ */ B.createElement("label", { htmlFor: L, className: `connect__checkbox-label ${k}` }, w));
}
function Li({
  correct: A,
  incorrect: L,
  answerShown: R,
  number: w,
  disabled: P,
  defaultText: Q,
  dataTestId: te
}) {
  const Z = `${A ? "connect__input-correct" : ""} ${L ? "connect__input-incorrect" : ""} ${R ? "connect__input-shown" : ""}`, ee = w ? "number" : "text", [z, S] = Rt(Q);
  let k = "Input field";
  A ? k += ", marked as correct" : L ? k += ", marked as incorrect" : R && (k += ", answer shown");
  const he = A || L || R || P;
  return /* @__PURE__ */ B.createElement("label", { className: `connect__icon-wrapper ${Z}` }, /* @__PURE__ */ B.createElement(
    "input",
    {
      type: ee,
      className: `connect__input ${Z}`,
      disabled: he,
      value: z,
      onChange: (D) => S(D.target.value),
      "aria-label": k,
      "data-testid": te
    }
  ));
}
const Si = ({
  data: A,
  listType: L = "unordered",
  variants: R = "",
  className: w = "",
  dataTestId: P
}) => {
  const Q = R !== "none" ? `connect__list-${R}` : "";
  return A = A || [], L === "ordered" ? /* @__PURE__ */ B.createElement("ol", { className: `connect__list ${Q} ${w}`, "data-testid": P }, A.map((te, Z) => /* @__PURE__ */ B.createElement("li", { key: Z, className: "connect__list-item" }, te.content))) : /* @__PURE__ */ B.createElement("ul", { className: `connect__list  ${Q} ${w}`, "data-testid": P }, A.map((te, Z) => /* @__PURE__ */ B.createElement("li", { key: Z, className: "connect__list-item" }, te.content)));
};
function xi({
  type: A,
  id: L,
  name: R,
  children: w,
  checked: P,
  disabled: Q,
  correct: te,
  incorrect: Z,
  answerShown: ee,
  dataTestId: z
}) {
  const S = `${te ? "connect__input-correct" : ""} ${Z ? "connect__input-incorrect" : ""} ${ee ? "connect__mcq-label-shown" : ""}`, k = Mt(null), [he, D] = Rt(P || !1), x = () => {
    var oe;
    D(((oe = k.current) == null ? void 0 : oe.checked) ?? !1);
  };
  Pt(() => {
    D(P || !1);
  }, [P]);
  let ae = "Multiple Choice Question";
  return te ? ae += ", marked as correct" : Z ? ae += ", marked as incorrect" : ee && (ae += ", answer shown"), /* @__PURE__ */ B.createElement("div", { className: "connect__mcq-label-wrapper" }, /* @__PURE__ */ B.createElement(
    "input",
    {
      ref: k,
      type: A,
      id: L,
      className: `connect__input ${S}`,
      name: R,
      checked: he,
      onChange: x,
      disabled: Q,
      "aria-label": ae,
      "data-testid": z
    }
  ), /* @__PURE__ */ B.createElement("label", { className: `connect__mcq-label ${S}`, htmlFor: L }, w));
}
const di = ({
  children: A,
  element: L = "div",
  elevation: R,
  roundedCorner: w = !1,
  className: P,
  dataTestId: Q
}) => {
  const te = [
    "connect__paper",
    R !== void 0 ? `connect__elevation-${R}` : "",
    w ? "connect__rounded-corners" : "",
    P || ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ B.createElement(L, { className: te, "data-testid": Q }, A);
}, Mi = ({
  value: A,
  max: L = 100,
  barColor: R,
  backgroundColor: w,
  dataTestId: P
}) => {
  const Q = {
    "--theme__progress-bg": `var(--connect__${w})`,
    "--theme__progress-color": `var(--connect__${R})`
  };
  return /* @__PURE__ */ B.createElement("div", { className: "connect__progress-wrapper" }, /* @__PURE__ */ B.createElement(
    "progress",
    {
      className: "connect__progress",
      value: A,
      max: L,
      style: Q,
      "data-testid": P
    },
    A + "%"
  ));
}, pi = xr(void 0);
var lt = /* @__PURE__ */ ((A) => (A.G2_3 = "g2-3", A.G4_5 = "g4-5", A.G6_8 = "g6-8", A.G9_12 = "g9-12", A.Teach = "teach", A))(lt || {});
const ji = ({
  gradeBand: A,
  srcDefault: L,
  src23: R,
  src45: w,
  src68: P,
  src912: Q,
  descDefault: te,
  desc23: Z,
  desc45: ee,
  desc68: z,
  desc912: S,
  stateMachine: k = "State Machine 1",
  artboard: he,
  autoplay: D = !0,
  hidePlayPause: x,
  playState: ae = "playing",
  contain: oe = !1,
  height: ce,
  inputs: l = {}
}) => {
  const xe = Mt(null), Ie = () => {
    switch (A) {
      case lt.G2_3:
        return {
          riveSrc: R || L || "",
          altText: Z || te || ""
        };
      case lt.G4_5:
        return {
          riveSrc: w || L || "",
          altText: ee || te || ""
        };
      case lt.G6_8:
        return {
          riveSrc: P || L || "",
          altText: z || te || ""
        };
      case lt.G9_12:
        return {
          riveSrc: Q || L || "",
          altText: S || te || ""
        };
      default:
        return {
          riveSrc: L || "",
          altText: te || ""
        };
    }
  }, { riveSrc: Ge, altText: Ne } = Ie();
  return Pt(() => {
    xe.current && (console.log("Updating inputs on hmhRiveRef:", l), Object.entries(l).forEach(([Oe, q]) => {
      var De, Ue, C;
      (De = xe.current) == null || De.setAttribute(Oe, q), (C = (Ue = xe.current) == null ? void 0 : Ue.inputs) != null && C[Oe] && (xe.current.inputs[Oe].value = q);
    }));
  }, [l]), /* @__PURE__ */ B.createElement(pi.Provider, { value: A }, /* @__PURE__ */ B.createElement(
    "hmh-rive",
    {
      ref: xe,
      src: Ge,
      desc: Ne,
      autoplay: D,
      "play-state": ae,
      hidePlayPause: x,
      stateMachine: k,
      artboard: he,
      ...oe && { contain: oe },
      ...ce && { height: ce },
      inputs: !0
    }
  ));
};
function ki({
  data: A,
  defaultValue: L,
  correct: R,
  incorrect: w,
  answerShown: P,
  disabled: Q,
  dataTestId: te
}) {
  const [Z, ee] = Rt(L || ""), z = Mt(null), S = (ae) => {
    ee(ae.target.value);
  };
  let k = "Select Item";
  R ? k += ", marked as correct" : w ? k += ", marked as incorrect" : P && (k += ", answer shown");
  const he = `connect__icon-wrapper ${R ? "connect__icon-correct" : ""} ${w ? "connect__icon-incorrect" : ""} ${P ? "connect__icon-shown" : ""}`, D = `connect__select ${R ? "connect__select-correct" : ""} ${w ? "connect__select-incorrect" : ""}${P ? "connect__select-shown" : ""}`, x = R || w || P || Q;
  return /* @__PURE__ */ B.createElement("label", { className: he }, /* @__PURE__ */ B.createElement(
    "select",
    {
      ref: z,
      className: D,
      value: Z,
      "aria-label": k,
      onChange: S,
      disabled: x,
      "data-testid": te
    },
    /* @__PURE__ */ B.createElement(mi, { data: A })
  ));
}
function mi({
  data: A
}) {
  return /* @__PURE__ */ B.createElement(B.Fragment, null, A.map((L, R) => /* @__PURE__ */ B.createElement("option", { key: R, value: L.value }, L.label)));
}
const Oi = ({ children: A }) => /* @__PURE__ */ B.createElement(ii, null, /* @__PURE__ */ B.createElement(di, { element: "aside", elevation: 2, className: "connect__aside" }, A)), Ii = ({
  children: A,
  caption: L,
  cite: R
}) => /* @__PURE__ */ B.createElement(jn, { caption: L, cite: R }, /* @__PURE__ */ B.createElement(ni, null, A)), Fi = ({
  imageSrc: A,
  altText: L,
  caption: R,
  cite: w
}) => /* @__PURE__ */ B.createElement(jn, { caption: R, cite: w }, /* @__PURE__ */ B.createElement(fi, { imageSrc: A, altText: L })), kr = {
  // [GradeBand.K_2]: 'connect__k2',
  [lt.G2_3]: "connect__g23",
  // [GradeBand.G3_5]: 'connect__g35',
  [lt.G4_5]: "connect__g45",
  [lt.G6_8]: "connect__g68",
  [lt.G9_12]: "connect__g912",
  [lt.Teach]: "connect__teach"
}, vi = Object.values(kr);
function $i({
  children: A,
  gradeBand: L,
  themeWrapperRef: R
}) {
  return Pt(() => {
    var w, P;
    (w = R == null ? void 0 : R.current) == null || w.classList.remove(...vi), (P = R == null ? void 0 : R.current) == null || P.classList.add(kr[L]);
  }, [L, R]), /* @__PURE__ */ B.createElement(B.Fragment, null, A);
}
const Ni = ({ children: A, gap: L, gutter: R, className: w, dataTestId: P }) => {
  const Z = {
    gap: L ? {
      xs: "var(--connect__spacer-xs)",
      sm: "var(--connect__spacer-sm)",
      md: "var(--connect__spacer-md)",
      lg: "var(--connect__spacer-lg)",
      xl: "var(--connect__spacer-xl)"
    }[L] : "var(--grid-gap)",
    width: "var(--theme__connect-grid-width, 100%)"
  }, ee = R === !0 ? "connect__grid-gutter" : "";
  return /* @__PURE__ */ B.createElement(
    "section",
    {
      className: `${w || ""} connect__grid ${ee}`,
      style: Z,
      "data-testid": P
    },
    A
  );
}, Di = ({
  children: A,
  xs: L,
  sm: R,
  md: w,
  lg: P,
  xl: Q,
  className: te,
  dataTestId: Z
}) => {
  const ee = (D, x, ae, oe) => (D == null ? void 0 : D[ae]) ?? x[ae] ?? oe, z = {}, S = { xs: L, sm: R, md: w, lg: P, xl: Q };
  let k = {};
  Object.entries(S).forEach(([D, x]) => {
    if (x) {
      const ae = ee(x, k, "startCol", 1), oe = ee(x, k, "spanCol", 12), ce = ee(x, k, "rowSpan", null);
      z[`--${D}-start-col`] = ae, z[`--${D}-span-col`] = oe, ce && (z[`--${D}-row-span`] = ce), k = { startCol: ae, spanCol: oe, rowSpan: ce };
    }
  });
  const he = `connect__grid-item ${te || ""} ${Object.keys(S).filter((D) => S[D]).map((D) => `connect__${D}`).join(" ")}`;
  return /* @__PURE__ */ B.createElement("div", { className: he, style: z, "data-testid": Z }, A);
}, Bi = ({
  children: A,
  xs: L,
  sm: R,
  md: w,
  lg: P,
  xl: Q,
  className: te,
  dataTestId: Z
}) => {
  const ee = {}, z = { xs: L, sm: R, md: w, lg: P, xl: Q };
  let S = {};
  const k = Object.keys(z).filter((D) => z[D]).map((D) => `connect__stack-${D}`).join(" ");
  Object.entries(z).forEach(([D, x]) => {
    if (x) {
      const ae = x.direction ?? S.direction ?? "column", oe = x.spacing ?? S.spacing ?? "xs", ce = x.alignItems ?? S.alignItems ?? "stretch", l = x.justifyContent ?? S.justifyContent ?? "start", xe = x.flexWrap ?? S.flexWrap ?? "wrap", Ie = x.paddingX ?? S.paddingX ?? "", Ge = x.paddingY ?? S.paddingY ?? "";
      x.direction && (ee[`--${D}-direction`] = ae), x.spacing && (ee[`--${D}-spacing`] = `var(--connect__spacer-${oe})`), x.alignItems && (ee[`--${D}-alignItems`] = ce), x.justifyContent && (ee[`--${D}-justifyContent`] = l), x.flexWrap && (ee[`--${D}-flexWrap`] = xe), x.paddingX && (ee[`--${D}-paddingX`] = `var(--connect__spacer-${Ie})`), x.paddingY && (ee[`--${D}-paddingY`] = `var(--connect__spacer-${Ge})`), S = { ...S, ...x };
    }
  });
  const he = `connect__stack ${te || ""} ${k}`;
  return /* @__PURE__ */ B.createElement("div", { className: he, style: ee, "data-testid": Z }, A);
};
export {
  ni as Blockquote,
  ri as Button,
  bi as ButtonMenu,
  _i as ButtonRive,
  wi as ButtonSplit,
  Ai as Card,
  Ei as Chip,
  $i as ConnectTheme,
  Ci as Divider,
  si as FigCaption,
  jn as Figure,
  Ti as Footer,
  lt as GradeBand,
  Ni as Grid,
  Di as GridItem,
  Pi as Header,
  Mn as Icon,
  fi as Image,
  Ri as InputBox,
  Li as InputText,
  Si as List,
  xi as MultipleChoiceQuestion,
  di as Paper,
  Mi as ProgressBar,
  ji as RiveSimple,
  ki as SelectBox,
  Oi as Sidebar,
  Ii as SingleBlockquote,
  Fi as SingleImage,
  Bi as Stack,
  jr as Typography
};
//# sourceMappingURL=connect-design-system.mjs.map
