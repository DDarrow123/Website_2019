(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    10: function(e, t, a) {
      e.exports = a(17);
    },
    16: function(e, t, a) {},
    17: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        l = a.n(n),
        i = a(8),
        s = a.n(i),
        c = (a(16), a(7), a(1)),
        r = a(2),
        o = a(4),
        m = a(3),
        d = a(5),
        u = function() {
          return l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              "div",
              { className: "vertical-text-bar" },
              "text text - text alongside text text"
            ),
            l.a.createElement("h4", { className: "dates" }, "15-16 of April"),
            l.a.createElement(
              "footer",
              { className: "bottom-nav" },
              l.a.createElement(
                "h3",
                { className: "topics" },
                "CINEMA-ART-",
                l.a.createElement("br", null),
                "MUSIC-DESIGN"
              ),
              l.a.createElement(
                "h3",
                { className: "cities" },
                "PARIS-HAMBURG-MELBURN"
              )
            )
          );
        },
        A = a(9),
        E = a.n(A),
        v = function() {
          return l.a.createElement(
            "header",
            { className: "nav-bar" },
            l.a.createElement("img", {
              className: "lightening-bolt",
              src: E.a,
              alt: "Lightening Bolt Image"
            }),
            l.a.createElement("span", null, "One Minimal Festival"),
            l.a.createElement(
              "span",
              { className: "nav-bar-title" },
              l.a.createElement(
                "a",
                { href: "#", target: "_blank" },
                "Get tickets!"
              )
            )
          );
        },
        h = (function(e) {
          function t() {
            var e, a;
            Object(c.a)(this, t);
            for (var n = arguments.length, l = new Array(n), i = 0; i < n; i++)
              l[i] = arguments[i];
            return (
              ((a = Object(o.a)(
                this,
                (e = Object(m.a)(t)).call.apply(e, [this].concat(l))
              )).state = {
                slideOneAnimate: !1,
                slideTwoAnimate: !1,
                slideThreeAnimate: !1
              }),
              (a.scrollHorizontally = function(e) {
                e = window.event || e;
                var t = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
                (document.querySelector(".carousel-slider").scrollLeft -=
                  60 * t),
                  e.preventDefault();
              }),
              (a.hoverOn = function(e) {
                switch (e.target.id) {
                  case "slide-4":
                    a.setState({ slideOneAnimate: !0 });
                    break;
                  case "slide-6":
                    a.setState({ slideTwoAnimate: !0 });
                    break;
                  case "slide-7":
                    a.setState({ slideThreeAnimate: !0 });
                }
              }),
              (a.hoverOff = function(e) {
                switch (e.target.id) {
                  case "slide-4":
                    a.setState({ slideOneAnimate: !1 });
                    break;
                  case "slide-6":
                    a.setState({ slideTwoAnimate: !1 });
                    break;
                  case "slide-7":
                    a.setState({ slideThreeAnimate: !1 });
                }
              }),
              a
            );
          }
          return (
            Object(d.a)(t, e),
            Object(r.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  document
                    .querySelector(".carousel-container")
                    .addEventListener("scroll", this.scrollHorizontally);
                }
              },
              {
                key: "render",
                value: function() {
                  return l.a.createElement(
                    "div",
                    {
                      className: "carousel-container",
                      onWheel: this.scrollHorizontally
                    },
                    l.a.createElement(
                      "div",
                      { className: "carousel-slider" },
                      l.a.createElement(
                        "div",
                        { className: "slide", id: "slide-1" },
                        "One"
                      ),
                      l.a.createElement(
                        "div",
                        { className: "slide", id: "slide-2" },
                        "Minimal"
                      ),
                      l.a.createElement(
                        "div",
                        { className: "slide", id: "slide-3" },
                        "Festival:"
                      ),
                      l.a.createElement(
                        "div",
                        {
                          className: this.state.slideOneAnimate
                            ? "slide text-focus-in"
                            : "slide",
                          id: "slide-4",
                          onMouseEnter: this.hoverOn,
                          onMouseLeave: this.hoverOff
                        },
                        "Cinema."
                      ),
                      l.a.createElement(
                        "div",
                        { className: "slide", id: "slide-5" },
                        "Art."
                      ),
                      l.a.createElement(
                        "div",
                        {
                          className: this.state.slideTwoAnimate
                            ? "slide jello-horizontal"
                            : "slide",
                          id: "slide-6",
                          onMouseEnter: this.hoverOn,
                          onMouseLeave: this.hoverOff
                        },
                        "Music."
                      ),
                      l.a.createElement(
                        "div",
                        {
                          className: this.state.slideThreeAnimate
                            ? "slide vibrate-1"
                            : "slide",
                          id: "slide-7",
                          onMouseEnter: this.hoverOn,
                          onMouseLeave: this.hoverOff
                        },
                        "Design"
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        f = function() {
          return l.a.createElement(
            "div",
            null,
            l.a.createElement("div", null, l.a.createElement(v, null)),
            l.a.createElement("div", null, l.a.createElement(h, null)),
            l.a.createElement("div", null, l.a.createElement(u, null))
          );
        },
        g = (function(e) {
          function t() {
            return (
              Object(c.a)(this, t),
              Object(o.a)(this, Object(m.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(d.a)(t, e),
            Object(r.a)(t, [
              {
                key: "render",
                value: function() {
                  return l.a.createElement(
                    "div",
                    null,
                    l.a.createElement(f, null)
                  );
                }
              }
            ]),
            t
          );
        })(n.Component);
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      s.a.render(l.a.createElement(g, null), document.getElementById("root")),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister();
          });
    },
    7: function(e, t, a) {},
    9: function(e, t) {
      e.exports =
        "data:image/png;base64,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";
    }
  },
  [[10, 1, 2]]
]);
//# sourceMappingURL=main.1401b72f.chunk.js.map
