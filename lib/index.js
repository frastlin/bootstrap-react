"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _DC = _interopRequireDefault(require("../../AccDC/DC"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Usage:
use the import statement to import the Accordion component. Then use it as follows:

function render(){
	return(
		<Accordion title="This is the title" defaultOpen={true}>This is content that is expanded</Accordion>
	)
}
*/
var Accordion =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Accordion, _React$Component);

  function Accordion(props) {
    var _this;

    _classCallCheck(this, Accordion);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Accordion).call(this, props));
    _this.uniqueId = "Accordion-component-number".concat(new Date().getUTCMilliseconds());
    _this.group = "group-".concat(_this.uniqueId); // you can not have a single accordion placed in a group without a group element

    return _this;
  }

  _createClass(Accordion, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _DC["default"].setAccordion(this, _defineProperty({}, "".concat(this.props.title, "-").concat(this.uniqueId), _react["default"].createElement("div", null, this.props.children)), {
        callback: this.props.callback,
        isToggle: this.props.isToggle,
        allowMultiple: false,
        // not useful for a single accordion
        overrides: {
          toggleClassName: this.props.toggleClassName
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var expandableElement = _react["default"].createElement(this.props.triggeringElement, {
        className: this.props.className,
        style: this.props.style,
        "data-controls": "".concat(this.props.title, "-").concat(this.uniqueId),
        "data-insert": "content-".concat(this.uniqueId),
        "data-defaultopen": this.props.defaultOpen,
        "data-accordiongroup": this.group,
        id: this.uniqueId
      }, this.props.title);

      return _react["default"].createElement("div", {
        id: this.uniqueId
      }, expandableElement, _react["default"].createElement("div", {
        id: "content-".concat(this.uniqueId)
      }));
    }
  }]);

  return Accordion;
}(_react["default"].Component);

exports["default"] = Accordion;

_defineProperty(Accordion, "defaultProps", {
  title: "",
  // title of the accordian
  defaultOpen: false,
  // says if the accordion should be expanded or not.
  isToggle: true,
  //says if the accordion should be toggleable
  callback: function callback(DC, isOpen) {},
  // is run every time the accordion is expanded or collapsed
  triggeringElement: "button",
  // the type of the triggering element. Should be either button or a (link)
  className: "accAccordion",
  // Visual Aria for the triggering element.
  style: {} // if there should be inline css for the element
  // pass the panel in as a child of the component

});
//# sourceMappingURL=index.js.map