(this['webpackJsonpdesktop-react'] =
  this['webpackJsonpdesktop-react'] || []).push([
  [0],
  [
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      t.exports = n(24);
    },
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {},
    function (t, e, n) {},
    function (t, e, n) {},
    function (t, e, n) {},
    function (t, e, n) {},
    function (t, e, n) {},
    function (t, e, n) {
      'use strict';
      n.r(e);
      var o = n(1),
        i = n.n(o),
        s = n(9),
        a = n.n(s),
        r = (n(18), n(19), n(3)),
        u = n(4),
        c = n(7),
        d = n(6),
        l = n(5),
        w = (n(20), n(21), n(10)),
        h =
          (n(22),
          (function (t) {
            Object(d.a)(n, t);
            var e = Object(l.a)(n);
            function n(t) {
              var o;
              Object(r.a)(this, n),
                ((o = e.call(this, t))._setNewProps = function (t) {
                  o.state.width !== t &&
                    (console.log(o.state.width, ' ', t),
                    o.setState({ width: t }));
                }),
                (o._onClick = function () {
                  o.state.isTimeoutActivated ||
                    (o.props.onClick(),
                    o.setState({
                      isTimeoutActivated: !0,
                      buttonStyle: o.state.pressedButtonStyle,
                    }),
                    (o.timeoutButton = setTimeout(function () {
                      o.setState({
                        isTimeoutActivated: !1,
                        buttonStyle: o.state.unpressedButtonStyle,
                      });
                    }, 250)));
                });
              var i = o.props.width,
                s = { margin: 5, color: 'rgb(255,255,255)' };
              return (
                (o.state = {
                  height: 60,
                  width: i,
                  isTimeoutActivated: !1,
                  unpressedButtonStyle: s,
                  pressedButtonStyle: {
                    margin: 5,
                    color: 'rgba(255,255,255,0.5)',
                  },
                  buttonStyle: s,
                }),
                o
              );
            }
            return (
              Object(u.a)(n, [
                {
                  key: 'componentWillMount',
                  value: function () {
                    this.timeoutButton = 0;
                  },
                },
                {
                  key: 'componentWillUpdate',
                  value: function () {
                    var t = this.props.width;
                    this._setNewProps(t);
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function () {
                    clearTimeout(this.timeoutButton), (this.timeoutButton = 0);
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    return i.a.createElement(
                      'div',
                      { className: 'buttonDiv' },
                      i.a.createElement(w.a, {
                        className: 'icon',
                        style: this.state.buttonStyle,
                        onClick: this._onClick,
                      })
                    );
                  },
                },
              ]),
              n
            );
          })(i.a.Component)),
        m = (function (t) {
          Object(d.a)(n, t);
          var e = Object(l.a)(n);
          function n(t) {
            var o;
            Object(r.a)(this, n),
              ((o = e.call(this, t))._setNewProps = function (t) {
                o.state.width !== t &&
                  (console.log(o.state.width, ' ', t),
                  o.setState({ width: t }));
              });
            var i = o.props.width;
            return (o.state = { height: 45, width: i }), o;
          }
          return (
            Object(u.a)(n, [
              {
                key: 'componentWillUpdate',
                value: function () {
                  var t = this.props.width;
                  this._setNewProps(t);
                },
              },
              {
                key: 'render',
                value: function () {
                  var t = this.state,
                    e = { height: t.height, width: t.width };
                  return i.a.createElement(
                    'div',
                    { className: 'menuBar', style: e },
                    i.a.createElement(h, { onClick: this.props.addButton })
                  );
                },
              },
            ]),
            n
          );
        })(i.a.Component),
        p = n(2),
        v = (n(23), n(11)),
        f = (function (t) {
          Object(d.a)(n, t);
          var e = Object(l.a)(n);
          function n(t) {
            var o;
            Object(r.a)(this, n),
              ((o = e.call(this, t))._getWindowClassName = function () {
                return ''.concat(o.state.color);
              }),
              (o._handleMouseDown = function (t) {
                o.state.isOverCloseButton
                  ? o._closeWindow()
                  : (o.props.onFocus(o.state.id),
                    o.setState({ isWindowMoving: !0 }),
                    o.setState({
                      windowPosition: Object(p.a)(
                        Object(p.a)({}, o.state.windowPosition),
                        {},
                        { left: t.clientX - 75, top: t.clientY - 110 }
                      ),
                    }));
              }),
              (o._handleMouseUp = function (t) {
                console.log('teste'),
                  o.setState({
                    windowPosition: Object(p.a)(
                      Object(p.a)({}, o.state.windowPosition),
                      {},
                      { left: t.clientX - 110, top: t.clientY - 75 }
                    ),
                    isWindowMoving: !1,
                  });
              }),
              (o._handleMouseOut = function (t) {
                o.setState({ isWindowMoving: !1 });
              }),
              (o._setBorderLimit = function (t) {
                (o.state.borderLimit.width === t.width &&
                  o.state.borderLimit.height === t.height) ||
                  o.setState({ borderLimit: t });
              }),
              (o._getTopBarColor = function () {
                return ''.concat(o.state.color, '-topbar');
              }),
              (o._closeWindow = function () {
                o.props.closeWindow(o.state.id);
              }),
              (o._onMouseOverCloseButton = function () {
                return o.setState({ isOverCloseButton: !0 });
              }),
              (o._onMouseLeaveCloseButton = function () {
                return o.setState({ isOverCloseButton: !1 });
              }),
              (o._getWindowsStyle = function () {
                return o.state.isWindowMoving
                  ? Object(p.a)(
                      Object(p.a)({}, o.state.windowPosition),
                      o.state.movingStyle
                    )
                  : o.state.windowPosition;
              });
            var i = t.id,
              s = t.color,
              a = t.size,
              u = t.borderLimit,
              c = {
                position: 'absolute',
                left: u.width / 2,
                top: u.height / 2,
                width: 300,
                height: 300,
              };
            return (
              (o.state = {
                id: i,
                movingStyle: { position: 'relative', width: 150, height: 150 },
                borderLimit: u,
                color: s,
                size: a,
                initialPosition: c,
                windowPosition: c,
                isWindowMoving: !1,
                isOverCloseButton: !1,
              }),
              o
            );
          }
          return (
            Object(u.a)(n, [
              {
                key: 'componentWillUpdate',
                value: function () {
                  var t = this.props.borderLimit;
                  this._setBorderLimit(t);
                },
              },
              {
                key: '_onMouseMove',
                value: function (t) {
                  if (this.state.isWindowMoving) {
                    var e,
                      n = this.state.windowPosition,
                      o = n.left,
                      i = n.top,
                      s = t.movementX,
                      a = t.movementY,
                      r = 0;
                    (e = o + s < 0 ? 0 : o + s),
                      (r = i + a < 0 ? 0 : i + a),
                      this.setState({
                        windowPosition: Object(p.a)(
                          Object(p.a)({}, this.state.windowPosition),
                          {},
                          { left: e, top: r }
                        ),
                      });
                  }
                },
              },
              {
                key: 'render',
                value: function () {
                  return i.a.createElement(
                    'div',
                    {
                      className: 'square '.concat(this._getWindowClassName()),
                      style: this._getWindowsStyle(),
                      onMouseMove: this._onMouseMove.bind(this),
                      onMouseDown: this._handleMouseDown,
                      onMouseUp: this._handleMouseUp,
                      onMouseOut: this._handleMouseOut,
                    },
                    i.a.createElement(
                      'div',
                      { className: 'topBar '.concat(this._getTopBarColor()) },
                      i.a.createElement(
                        'div',
                        null,
                        i.a.createElement(v.a, {
                          className: 'closeButton',
                          onClick: this._closeWindow,
                          onMouseOver: this._onMouseOverCloseButton,
                          onMouseLeave: this._onMouseLeaveCloseButton,
                        })
                      )
                    )
                  );
                },
              },
            ]),
            n
          );
        })(i.a.Component),
        g = (function (t) {
          Object(d.a)(n, t);
          var e = Object(l.a)(n);
          function n(t) {
            var o;
            Object(r.a)(this, n),
              ((o = e.call(this, t))._renderTopBar = function () {
                if (!o.state.isLoading)
                  return i.a.createElement(m, {
                    width: o.state.frame.width,
                    addButton: o._renderNewWindows,
                  });
              }),
              (o._getRandomInteger = function (t, e) {
                return Math.floor(Math.random() * (e - t)) + t;
              }),
              (o._getWindowColor = function () {
                switch (o._getRandomInteger(0, 5)) {
                  case 0:
                    return 'red';
                  case 1:
                    return 'green';
                  case 2:
                    return 'purple';
                  case 3:
                    return 'yellow';
                  default:
                    return 'blue';
                }
              }),
              (o._closeWindow = function (t) {
                var e = o.state.windows.filter(function (e) {
                  return e.props.id !== t;
                });
                o.setState({ windows: e });
              }),
              (o._bringToTopView = function (t) {
                if (
                  o.state.windows[o.state.windows.length - 1].props.id !== t
                ) {
                  var e = o.state.windows.find(function (e) {
                      return e.props.id === t;
                    }),
                    n = o.state.windows.filter(function (t) {
                      return t.props.id !== e.props.id;
                    });
                  n.splice(o.state.windows.length - 1, 0, e),
                    o.setState({ windows: n });
                }
              }),
              (o._renderNewWindows = function () {
                if (o.state.windows.length < o.state.maxWindowsNbr) {
                  var t = o.state.windows.concat(
                    i.a.createElement(f, {
                      id: o.state.windowsCreated,
                      key: o.state.windowsCreated,
                      borderLimit: o.state.frame,
                      color: o._getWindowColor(),
                      closeWindow: o._closeWindow,
                      size: 'large',
                      onFocus: o._bringToTopView,
                    })
                  );
                  o.setState({
                    windows: t,
                    windowsCreated: o.state.windowsCreated + 1,
                  });
                }
              }),
              (o._renderWindows = function () {
                return o.state.windows;
              });
            return (
              (o.updateWindowDimensions = o.updateWindowDimensions.bind(
                Object(c.a)(o)
              )),
              (o.state = {
                frame: { width: 0, height: 0 },
                mousePos: { x: 0, y: 0 },
                isLoading: !1,
                windows: [],
                maxWindowsNbr: 10,
                windowsCreated: 0,
              }),
              o
            );
          }
          return (
            Object(u.a)(n, [
              {
                key: 'componentWillMount',
                value: function () {
                  this.setState({ isLoading: !0 });
                },
              },
              {
                key: 'componentDidMount',
                value: function () {
                  this.updateWindowDimensions(),
                    window.addEventListener(
                      'resize',
                      this.updateWindowDimensions
                    ),
                    this.setState({ isLoading: !1 });
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  window.removeEventListener(
                    'resize',
                    this.updateWindowDimensions
                  );
                },
              },
              {
                key: 'updateWindowDimensions',
                value: function () {
                  this.setState({
                    frame: {
                      width: window.innerWidth,
                      height: window.innerHeight,
                    },
                  });
                },
              },
              {
                key: '_onMouseMove',
                value: function (t) {
                  this.setState({ mousePos: { x: t.screenX, y: t.screenY } });
                },
              },
              {
                key: 'render',
                value: function () {
                  return i.a.createElement(
                    'div',
                    {
                      className: 'detectArea noselect',
                      onMouseMove: this._onMouseMove.bind(this),
                      style: this.state.frame,
                    },
                    this._renderTopBar(),
                    this._renderWindows()
                  );
                },
              },
            ]),
            n
          );
        })(i.a.Component);
      var b = function () {
        return i.a.createElement(g, { className: 'App', style: { flex: 1 } });
      };
      Boolean(
        'localhost' === window.location.hostname ||
          '[::1]' === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      a.a.render(i.a.createElement(b, null), document.getElementById('root')),
        'serviceWorker' in navigator &&
          navigator.serviceWorker.ready.then(function (t) {
            t.unregister();
          });
    },
  ],
  [[12, 1, 2]],
]);
//# sourceMappingURL=main.29a70e52.chunk.js.map
