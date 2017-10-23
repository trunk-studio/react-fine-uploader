'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var UploadIcon = function UploadIcon(_ref) {
    var props = _objectWithoutProperties(_ref, []);

    return _react2.default.createElement(
        'svg',
        _extends({ fill: '#000000', width: '50', height: '50', viewBox: '0 0 50 50' }, props),
        _react2.default.createElement(
            'defs',
            null,
            _react2.default.createElement('rect', { id: 'a', width: '39', height: '34', rx: '6' })
        ),
        _react2.default.createElement(
            'g',
            { fill: 'none', 'fill-rule': 'evenodd' },
            _react2.default.createElement('path', { d: 'M0 0h50v50H0z' }),
            _react2.default.createElement(
                'g',
                { transform: 'translate(6 8)' },
                _react2.default.createElement('use', { fill: '#FFF' }),
                _react2.default.createElement('rect', { width: '37', height: '32', x: '1', y: '1', stroke: '#BBB', 'stroke-width': '2', rx: '6' }),
                _react2.default.createElement('path', { fill: '#FFF', stroke: '#BBB', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M11 24.174l5.533-7.207 2.644 3.365 4.09-5.768L30 24.174z' }),
                _react2.default.createElement('circle', { cx: '12', cy: '11', r: '2', fill: '#FFF', stroke: '#BBB', 'stroke-width': '1.8' })
            )
        )
    );
};

exports.default = UploadIcon;