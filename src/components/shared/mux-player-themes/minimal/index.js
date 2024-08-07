"use strict";
var mediaThemeMinimal = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // src/themes/minimal/index.ts
  var minimal_exports = {};

  // ../../node_modules/media-chrome/dist/utils/server-safe-globals.js
  var EventTarget = class {
    addEventListener() {
    }
    removeEventListener() {
    }
    dispatchEvent() {
      return true;
    }
  };
  var Node = class extends EventTarget {
  };
  var ResizeObserver = class {
    observe() {
    }
    unobserve() {
    }
    disconnect() {
    }
  };
  var documentShim = {
    createElement: function() {
      return new globalThisShim.HTMLElement();
    },
    createElementNS: function() {
      return new globalThisShim.HTMLElement();
    },
    addEventListener() {
    },
    removeEventListener() {
    },
    /**
     *
     * @param {Event} event
     * @returns {boolean}
     */
    dispatchEvent(event) {
      return false;
    }
    // eslint-disable-line no-unused-vars
  };
  var globalThisShim = {
    ResizeObserver,
    document: documentShim,
    Node,
    HTMLElement: class HTMLElement extends Node {
    },
    DocumentFragment: class DocumentFragment extends EventTarget {
    },
    customElements: {
      get: function() {
      },
      define: function() {
      },
      whenDefined: function() {
      }
    },
    localStorage: {
      /**
       * @param {string} key
       * @returns {string|null}
      */
      getItem(key) {
        return null;
      },
      // eslint-disable-line no-unused-vars
      /**
       * @param {string} key
       * @param {string} value
       */
      setItem(key, value) {
      },
      // eslint-disable-line no-unused-vars
      /**
       * @param {string} key
      */
      removeItem(key) {
      }
      // eslint-disable-line no-unused-vars
    },
    CustomEvent: function CustomEvent() {
    },
    getComputedStyle: function() {
    },
    navigator: {
      languages: [],
      get userAgent() {
        return "";
      }
    },
    /**
     * @param {string} media
     */
    matchMedia(media) {
      return {
        matches: false,
        media
      };
    }
  };
  var isServer = typeof window === "undefined" || typeof window.customElements === "undefined";
  var isShimmed = Object.keys(globalThisShim).every((key) => key in globalThis);
  var GlobalThis = isServer && !isShimmed ? globalThisShim : globalThis;
  var Document = isServer && !isShimmed ? documentShim : globalThis.document;

  // ../../node_modules/media-chrome/dist/constants.js
  var MediaUIProps = {
    MEDIA_AIRPLAY_UNAVAILABLE: "mediaAirplayUnavailable",
    MEDIA_FULLSCREEN_UNAVAILABLE: "mediaFullscreenUnavailable",
    MEDIA_PIP_UNAVAILABLE: "mediaPipUnavailable",
    MEDIA_CAST_UNAVAILABLE: "mediaCastUnavailable",
    MEDIA_RENDITION_UNAVAILABLE: "mediaRenditionUnavailable",
    MEDIA_AUDIO_TRACK_UNAVAILABLE: "mediaAudioTrackUnavailable",
    MEDIA_PAUSED: "mediaPaused",
    MEDIA_HAS_PLAYED: "mediaHasPlayed",
    MEDIA_ENDED: "mediaEnded",
    MEDIA_MUTED: "mediaMuted",
    MEDIA_VOLUME_LEVEL: "mediaVolumeLevel",
    MEDIA_VOLUME: "mediaVolume",
    MEDIA_VOLUME_UNAVAILABLE: "mediaVolumeUnavailable",
    MEDIA_IS_PIP: "mediaIsPip",
    MEDIA_IS_CASTING: "mediaIsCasting",
    MEDIA_IS_AIRPLAYING: "mediaIsAirplaying",
    MEDIA_SUBTITLES_LIST: "mediaSubtitlesList",
    MEDIA_SUBTITLES_SHOWING: "mediaSubtitlesShowing",
    MEDIA_IS_FULLSCREEN: "mediaIsFullscreen",
    MEDIA_PLAYBACK_RATE: "mediaPlaybackRate",
    MEDIA_CURRENT_TIME: "mediaCurrentTime",
    MEDIA_DURATION: "mediaDuration",
    MEDIA_SEEKABLE: "mediaSeekable",
    MEDIA_PREVIEW_TIME: "mediaPreviewTime",
    MEDIA_PREVIEW_IMAGE: "mediaPreviewImage",
    MEDIA_PREVIEW_COORDS: "mediaPreviewCoords",
    MEDIA_PREVIEW_CHAPTER: "mediaPreviewChapter",
    MEDIA_LOADING: "mediaLoading",
    MEDIA_BUFFERED: "mediaBuffered",
    MEDIA_STREAM_TYPE: "mediaStreamType",
    MEDIA_TARGET_LIVE_WINDOW: "mediaTargetLiveWindow",
    MEDIA_TIME_IS_LIVE: "mediaTimeIsLive",
    MEDIA_RENDITION_LIST: "mediaRenditionList",
    MEDIA_RENDITION_SELECTED: "mediaRenditionSelected",
    MEDIA_AUDIO_TRACK_LIST: "mediaAudioTrackList",
    MEDIA_AUDIO_TRACK_ENABLED: "mediaAudioTrackEnabled",
    MEDIA_CHAPTERS_CUES: "mediaChaptersCues"
  };
  var MediaUIPropsEntries = (
    /** @type {[keyof MediaUIProps, string][]} */
    Object.entries(MediaUIProps)
  );
  var MediaUIAttributes = (
    /** @type {{ [k in keyof MediaUIProps]: string }} */
    MediaUIPropsEntries.reduce(
      (dictObj, [key, propName]) => {
        dictObj[key] = `${propName.toLowerCase()}`;
        return dictObj;
      },
      /** @type {Partial<{ [k in keyof MediaUIProps]: string }>} */
      {}
    )
  );
  var MediaStateChangeEvents = (
    /** @type {{ [k in keyof MediaUIProps | 'USER_INACTIVE' | 'BREAKPOINTS_CHANGE' | 'BREAKPOINTS_COMPUTED']: string }} */
    MediaUIPropsEntries.reduce(
      (dictObj, [key, propName]) => {
        dictObj[key] = `${propName.toLowerCase()}`;
        return dictObj;
      },
      /** @type {Partial<{ [k in keyof MediaUIProps | 'USER_INACTIVE' | 'BREAKPOINTS_CHANGE' | 'BREAKPOINTS_COMPUTED']: string  }>} */
      {
        USER_INACTIVE: "userinactivechange",
        BREAKPOINTS_CHANGE: "breakpointchange",
        BREAKPOINTS_COMPUTED: "breakpointscomputed"
      }
    )
  );
  var StateChangeEventToAttributeMap = Object.entries(
    MediaStateChangeEvents
  ).reduce(
    (mapObj, [key, eventType]) => {
      const attrName = MediaUIAttributes[key];
      if (attrName) {
        mapObj[eventType] = attrName;
      }
      return mapObj;
    },
    { userinactivechange: "userinactive" }
  );
  var AttributeToStateChangeEventMap = Object.entries(
    MediaUIAttributes
  ).reduce(
    (mapObj, [key, attrName]) => {
      const evtType = MediaStateChangeEvents[key];
      if (evtType) {
        mapObj[attrName] = evtType;
      }
      return mapObj;
    },
    { userinactive: "userinactivechange" }
  );

  // ../../node_modules/media-chrome/dist/utils/template-parts.js
  var __defProp2 = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };
  var __accessCheck = (obj, member, msg) => {
    if (!member.has(obj))
      throw TypeError("Cannot " + msg);
  };
  var __privateGet = (obj, member, getter) => {
    __accessCheck(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
  };
  var __privateAdd = (obj, member, value) => {
    if (member.has(obj))
      throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
  };
  var __privateSet = (obj, member, value, setter) => {
    __accessCheck(obj, member, "write to private field");
    setter ? setter.call(obj, value) : member.set(obj, value);
    return value;
  };
  var _parts;
  var _processor;
  var _items;
  var _value;
  var _element;
  var _attributeName;
  var _namespaceURI;
  var _list;
  var list_get;
  var _parentNode;
  var _nodes;
  var ELEMENT = 1;
  var STRING = 0;
  var PART = 1;
  var defaultProcessor = {
    processCallback(instance, parts, state) {
      if (!state)
        return;
      for (const [expression, part] of parts) {
        if (expression in state) {
          const value = state[expression];
          if (typeof value === "boolean" && part instanceof AttrPart && typeof part.element[part.attributeName] === "boolean") {
            part.booleanValue = value;
          } else if (typeof value === "function" && part instanceof AttrPart) {
            part.element[part.attributeName] = value;
          } else {
            part.value = value;
          }
        }
      }
    }
  };
  var TemplateInstance = class extends GlobalThis.DocumentFragment {
    constructor(template2, state, processor2 = defaultProcessor) {
      var _a;
      super();
      __privateAdd(this, _parts, void 0);
      __privateAdd(this, _processor, void 0);
      this.append(template2.content.cloneNode(true));
      __privateSet(this, _parts, parse(this));
      __privateSet(this, _processor, processor2);
      (_a = processor2.createCallback) == null ? void 0 : _a.call(processor2, this, __privateGet(this, _parts), state);
      processor2.processCallback(this, __privateGet(this, _parts), state);
    }
    update(state) {
      __privateGet(this, _processor).processCallback(this, __privateGet(this, _parts), state);
    }
  };
  _parts = /* @__PURE__ */ new WeakMap();
  _processor = /* @__PURE__ */ new WeakMap();
  var parse = (element, parts = []) => {
    let type, value;
    for (let attr of element.attributes || []) {
      if (attr.value.includes("{{")) {
        const list = new AttrPartList();
        for ([type, value] of tokenize(attr.value)) {
          if (!type)
            list.append(value);
          else {
            const part = new AttrPart(element, attr.name, attr.namespaceURI);
            list.append(part);
            parts.push([value, part]);
          }
        }
        attr.value = list.toString();
      }
    }
    for (let node of element.childNodes) {
      if (node.nodeType === ELEMENT && !(node instanceof HTMLTemplateElement)) {
        parse(node, parts);
      } else {
        if (node.nodeType === ELEMENT || node.data.includes("{{")) {
          const items = [];
          if (node.data) {
            for ([type, value] of tokenize(node.data))
              if (!type)
                items.push(new Text(value));
              else {
                const part = new ChildNodePart(element);
                items.push(part);
                parts.push([value, part]);
              }
          } else if (node instanceof HTMLTemplateElement) {
            const part = new InnerTemplatePart(element, node);
            items.push(part);
            parts.push([part.expression, part]);
          }
          node.replaceWith(
            ...items.flatMap((part) => part.replacementNodes || [part])
          );
        }
      }
    }
    return parts;
  };
  var mem = {};
  var tokenize = (text) => {
    let value = "", open = 0, tokens = mem[text], i = 0, c;
    if (tokens)
      return tokens;
    else
      tokens = [];
    for (; c = text[i]; i++) {
      if (c === "{" && text[i + 1] === "{" && text[i - 1] !== "\\" && text[i + 2] && ++open == 1) {
        if (value)
          tokens.push([STRING, value]);
        value = "";
        i++;
      } else if (c === "}" && text[i + 1] === "}" && text[i - 1] !== "\\" && !--open) {
        tokens.push([PART, value.trim()]);
        value = "";
        i++;
      } else
        value += c || "";
    }
    if (value)
      tokens.push([STRING, (open > 0 ? "{{" : "") + value]);
    return mem[text] = tokens;
  };
  var FRAGMENT = 11;
  var Part = class {
    get value() {
      return "";
    }
    set value(val) {
    }
    toString() {
      return this.value;
    }
  };
  var attrPartToList = /* @__PURE__ */ new WeakMap();
  var AttrPartList = class {
    constructor() {
      __privateAdd(this, _items, []);
    }
    [Symbol.iterator]() {
      return __privateGet(this, _items).values();
    }
    get length() {
      return __privateGet(this, _items).length;
    }
    item(index) {
      return __privateGet(this, _items)[index];
    }
    append(...items) {
      for (const item of items) {
        if (item instanceof AttrPart) {
          attrPartToList.set(item, this);
        }
        __privateGet(this, _items).push(item);
      }
    }
    toString() {
      return __privateGet(this, _items).join("");
    }
  };
  _items = /* @__PURE__ */ new WeakMap();
  var AttrPart = class extends Part {
    constructor(element, attributeName, namespaceURI) {
      super();
      __privateAdd(this, _list);
      __privateAdd(this, _value, "");
      __privateAdd(this, _element, void 0);
      __privateAdd(this, _attributeName, void 0);
      __privateAdd(this, _namespaceURI, void 0);
      __privateSet(this, _element, element);
      __privateSet(this, _attributeName, attributeName);
      __privateSet(this, _namespaceURI, namespaceURI);
    }
    get attributeName() {
      return __privateGet(this, _attributeName);
    }
    get attributeNamespace() {
      return __privateGet(this, _namespaceURI);
    }
    get element() {
      return __privateGet(this, _element);
    }
    get value() {
      return __privateGet(this, _value);
    }
    set value(newValue) {
      if (__privateGet(this, _value) === newValue)
        return;
      __privateSet(this, _value, newValue);
      if (!__privateGet(this, _list, list_get) || __privateGet(this, _list, list_get).length === 1) {
        if (newValue == null) {
          __privateGet(this, _element).removeAttributeNS(
            __privateGet(this, _namespaceURI),
            __privateGet(this, _attributeName)
          );
        } else {
          __privateGet(this, _element).setAttributeNS(
            __privateGet(this, _namespaceURI),
            __privateGet(this, _attributeName),
            newValue
          );
        }
      } else {
        __privateGet(this, _element).setAttributeNS(
          __privateGet(this, _namespaceURI),
          __privateGet(this, _attributeName),
          __privateGet(this, _list, list_get)
        );
      }
    }
    /** @type boolean */
    get booleanValue() {
      return __privateGet(this, _element).hasAttributeNS(
        __privateGet(this, _namespaceURI),
        __privateGet(this, _attributeName)
      );
    }
    set booleanValue(value) {
      if (!__privateGet(this, _list, list_get) || __privateGet(this, _list, list_get).length === 1)
        this.value = value ? "" : null;
      else
        throw new DOMException("Value is not fully templatized");
    }
  };
  _value = /* @__PURE__ */ new WeakMap();
  _element = /* @__PURE__ */ new WeakMap();
  _attributeName = /* @__PURE__ */ new WeakMap();
  _namespaceURI = /* @__PURE__ */ new WeakMap();
  _list = /* @__PURE__ */ new WeakSet();
  list_get = function() {
    return attrPartToList.get(this);
  };
  var ChildNodePart = class extends Part {
    constructor(parentNode, nodes) {
      super();
      __privateAdd(this, _parentNode, void 0);
      __privateAdd(this, _nodes, void 0);
      __privateSet(this, _parentNode, parentNode);
      __privateSet(this, _nodes, nodes ? [...nodes] : [new Text()]);
    }
    get replacementNodes() {
      return __privateGet(this, _nodes);
    }
    get parentNode() {
      return __privateGet(this, _parentNode);
    }
    get nextSibling() {
      return __privateGet(this, _nodes)[__privateGet(this, _nodes).length - 1].nextSibling;
    }
    get previousSibling() {
      return __privateGet(this, _nodes)[0].previousSibling;
    }
    // FIXME: not sure why do we need string serialization here? Just because parent class has type DOMString?
    get value() {
      return __privateGet(this, _nodes).map((node) => node.textContent).join("");
    }
    set value(newValue) {
      this.replace(newValue);
    }
    replace(...nodes) {
      const normalisedNodes = nodes.flat().flatMap(
        (node) => node == null ? [new Text()] : node.forEach ? [...node] : node.nodeType === FRAGMENT ? [...node.childNodes] : node.nodeType ? [node] : [new Text(node)]
      );
      if (!normalisedNodes.length)
        normalisedNodes.push(new Text());
      __privateSet(this, _nodes, swapdom(
        __privateGet(this, _nodes)[0].parentNode,
        __privateGet(this, _nodes),
        normalisedNodes,
        this.nextSibling
      ));
    }
  };
  _parentNode = /* @__PURE__ */ new WeakMap();
  _nodes = /* @__PURE__ */ new WeakMap();
  var InnerTemplatePart = class extends ChildNodePart {
    constructor(parentNode, template2) {
      let directive = template2.getAttribute("directive") || template2.getAttribute("type");
      let expression = template2.getAttribute("expression") || template2.getAttribute(directive) || "";
      if (expression.startsWith("{{"))
        expression = expression.trim().slice(2, -2).trim();
      super(parentNode);
      __publicField(this, "directive");
      this.expression = expression;
      this.template = template2;
      this.directive = directive;
    }
  };
  function swapdom(parent, a, b, end = null) {
    let i = 0, cur, next, bi, n = b.length, m = a.length;
    while (i < n && i < m && a[i] == b[i])
      i++;
    while (i < n && i < m && b[n - 1] == a[m - 1])
      end = b[--m, --n];
    if (i == m)
      while (i < n)
        parent.insertBefore(b[i++], end);
    if (i == n)
      while (i < m)
        parent.removeChild(a[i++]);
    else {
      cur = a[i];
      while (i < n) {
        bi = b[i++], next = cur ? cur.nextSibling : end;
        if (cur == bi)
          cur = next;
        else if (i < n && b[i] == next)
          parent.replaceChild(bi, cur), cur = next;
        else
          parent.insertBefore(bi, cur);
      }
      while (cur != end)
        next = cur.nextSibling, parent.removeChild(cur), cur = next;
    }
    return b;
  }

  // ../../node_modules/media-chrome/dist/utils/utils.js
  function camelCase(name) {
    return name.replace(/[-_]([a-z])/g, ($0, $1) => $1.toUpperCase());
  }
  function isNumericString(str) {
    if (typeof str != "string")
      return false;
    return !isNaN(str) && !isNaN(parseFloat(str));
  }

  // ../../node_modules/media-chrome/dist/utils/template-processor.js
  var pipeModifiers = {
    string: (value) => String(value)
  };
  var PartialTemplate = class {
    constructor(template2) {
      this.template = template2;
      this.state = void 0;
    }
  };
  var templates = /* @__PURE__ */ new WeakMap();
  var templateInstances = /* @__PURE__ */ new WeakMap();
  var Directives = {
    partial: (part, state) => {
      state[part.expression] = new PartialTemplate(part.template);
    },
    if: (part, state) => {
      var _a;
      if (evaluateExpression(part.expression, state)) {
        if (templates.get(part) !== part.template) {
          templates.set(part, part.template);
          const tpl = new TemplateInstance(part.template, state, processor);
          part.replace(tpl);
          templateInstances.set(part, tpl);
        } else {
          (_a = templateInstances.get(part)) == null ? void 0 : _a.update(state);
        }
      } else {
        part.replace("");
        templates.delete(part);
        templateInstances.delete(part);
      }
    }
  };
  var DirectiveNames = Object.keys(Directives);
  var processor = {
    processCallback(instance, parts, state) {
      var _a, _b;
      if (!state)
        return;
      for (const [expression, part] of parts) {
        if (part instanceof InnerTemplatePart) {
          if (!part.directive) {
            const directive = DirectiveNames.find((n) => part.template.hasAttribute(n));
            if (directive) {
              part.directive = directive;
              part.expression = part.template.getAttribute(directive);
            }
          }
          (_a = Directives[part.directive]) == null ? void 0 : _a.call(Directives, part, state);
          continue;
        }
        let value = evaluateExpression(expression, state);
        if (value instanceof PartialTemplate) {
          if (templates.get(part) !== value.template) {
            templates.set(part, value.template);
            value = new TemplateInstance(
              value.template,
              value.state,
              processor
            );
            part.value = value;
            templateInstances.set(part, value);
          } else {
            (_b = templateInstances.get(part)) == null ? void 0 : _b.update(value.state);
          }
          continue;
        }
        if (value) {
          if (part instanceof AttrPart) {
            if (part.attributeName.startsWith("aria-")) {
              value = String(value);
            }
          }
          if (part instanceof AttrPart) {
            if (typeof value === "boolean") {
              part.booleanValue = value;
            } else if (typeof value === "function") {
              part.element[part.attributeName] = value;
            } else {
              part.value = value;
            }
          } else {
            part.value = value;
            templates.delete(part);
            templateInstances.delete(part);
          }
        } else {
          if (part instanceof AttrPart) {
            part.value = void 0;
          } else {
            part.value = void 0;
            templates.delete(part);
            templateInstances.delete(part);
          }
        }
      }
    }
  };
  var operators = {
    "!": (a) => !a,
    "!!": (a) => !!a,
    "==": (a, b) => a == b,
    "!=": (a, b) => a != b,
    ">": (a, b) => a > b,
    ">=": (a, b) => a >= b,
    "<": (a, b) => a < b,
    "<=": (a, b) => a <= b,
    "??": (a, b) => a != null ? a : b,
    "|": (a, b) => {
      var _a;
      return (_a = pipeModifiers[b]) == null ? void 0 : _a.call(pipeModifiers, a);
    }
  };
  function tokenizeExpression(expr) {
    return tokenize2(expr, {
      boolean: /true|false/,
      number: /-?\d+\.?\d*/,
      string: /(["'])((?:\\.|[^\\])*?)\1/,
      operator: /[!=><][=!]?|\?\?|\|/,
      ws: /\s+/,
      param: /[$a-z_][$\w]*/i
    }).filter(({ type }) => type !== "ws");
  }
  function evaluateExpression(expr, state = {}) {
    var _a, _b, _c, _d, _e, _f, _g;
    const tokens = tokenizeExpression(expr);
    if (tokens.length === 0 || tokens.some(({ type }) => !type)) {
      return invalidExpression(expr);
    }
    if (((_a = tokens[0]) == null ? void 0 : _a.token) === ">") {
      const partial = state[(_b = tokens[1]) == null ? void 0 : _b.token];
      if (!partial) {
        return invalidExpression(expr);
      }
      const partialState = { ...state };
      partial.state = partialState;
      const args = tokens.slice(2);
      for (let i = 0; i < args.length; i += 3) {
        const name = (_c = args[i]) == null ? void 0 : _c.token;
        const operator = (_d = args[i + 1]) == null ? void 0 : _d.token;
        const value = (_e = args[i + 2]) == null ? void 0 : _e.token;
        if (name && operator === "=") {
          partialState[name] = getParamValue(value, state);
        }
      }
      return partial;
    }
    if (tokens.length === 1) {
      if (!isValidParam(tokens[0])) {
        return invalidExpression(expr);
      }
      return getParamValue(tokens[0].token, state);
    }
    if (tokens.length === 2) {
      const operator = (_f = tokens[0]) == null ? void 0 : _f.token;
      const run = operators[operator];
      if (!run || !isValidParam(tokens[1])) {
        return invalidExpression(expr);
      }
      const a = getParamValue(tokens[1].token, state);
      return run(a);
    }
    if (tokens.length === 3) {
      const operator = (_g = tokens[1]) == null ? void 0 : _g.token;
      const run = operators[operator];
      if (!run || !isValidParam(tokens[0]) || !isValidParam(tokens[2])) {
        return invalidExpression(expr);
      }
      const a = getParamValue(tokens[0].token, state);
      if (operator === "|") {
        return run(a, tokens[2].token);
      }
      const b = getParamValue(tokens[2].token, state);
      return run(a, b);
    }
  }
  function invalidExpression(expr) {
    console.warn(`Warning: invalid expression \`${expr}\``);
    return false;
  }
  function isValidParam({ type }) {
    return ["number", "boolean", "string", "param"].includes(type);
  }
  function getParamValue(raw, state) {
    const firstChar = raw[0];
    const lastChar = raw.slice(-1);
    if (raw === "true" || raw === "false") {
      return raw === "true";
    }
    if (firstChar === lastChar && [`'`, `"`].includes(firstChar)) {
      return raw.slice(1, -1);
    }
    if (isNumericString(raw)) {
      return parseFloat(raw);
    }
    return state[raw];
  }
  function tokenize2(str, parsers) {
    let len, match, token, tokens = [];
    while (str) {
      token = null;
      len = str.length;
      for (let key in parsers) {
        match = parsers[key].exec(str);
        if (match && match.index < len) {
          token = {
            token: match[0],
            type: key,
            matches: match.slice(1)
          };
          len = match.index;
        }
      }
      if (len) {
        tokens.push({
          token: str.substr(0, len),
          type: void 0
        });
      }
      if (token) {
        tokens.push(token);
      }
      str = str.substr(len + (token ? token.token.length : 0));
    }
    return tokens;
  }

  // ../../node_modules/media-chrome/dist/media-theme-element.js
  var __defProp3 = Object.defineProperty;
  var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField2 = (obj, key, value) => {
    __defNormalProp2(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };
  var __accessCheck2 = (obj, member, msg) => {
    if (!member.has(obj))
      throw TypeError("Cannot " + msg);
  };
  var __privateGet2 = (obj, member, getter) => {
    __accessCheck2(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
  };
  var __privateAdd2 = (obj, member, value) => {
    if (member.has(obj))
      throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
  };
  var __privateSet2 = (obj, member, value, setter) => {
    __accessCheck2(obj, member, "write to private field");
    setter ? setter.call(obj, value) : member.set(obj, value);
    return value;
  };
  var __privateMethod = (obj, member, method) => {
    __accessCheck2(obj, member, "access private method");
    return method;
  };
  var _template;
  var _prevTemplate;
  var _prevTemplateId;
  var _upgradeProperty;
  var upgradeProperty_fn;
  var _updateTemplate;
  var updateTemplate_fn;
  var observedMediaAttributes = {
    mediatargetlivewindow: "targetlivewindow",
    mediastreamtype: "streamtype"
  };
  var prependTemplate = Document.createElement("template");
  prependTemplate.innerHTML = /*html*/
  `
  <style>
    :host {
      display: inline-block;
      line-height: 0;
    }

    media-controller {
      width: 100%;
      height: 100%;
    }

    media-controller:not([mediasubtitleslist]) media-captions-selectmenu,
    media-captions-button:not([mediasubtitleslist]),
    media-rendition-selectmenu[mediarenditionunavailable],
    media-audio-track-selectmenu[mediaaudiotrackunavailable],
    media-volume-range[mediavolumeunavailable],
    media-airplay-button[mediaairplayunavailable],
    media-fullscreen-button[mediafullscreenunavailable],
    media-cast-button[mediacastunavailable],
    media-pip-button[mediapipunavailable] {
      display: none;
    }
  </style>
`;
  var MediaThemeElement = class extends GlobalThis.HTMLElement {
    constructor() {
      super();
      __privateAdd2(this, _upgradeProperty);
      __privateAdd2(this, _updateTemplate);
      __publicField2(this, "renderRoot");
      __publicField2(this, "renderer");
      __privateAdd2(this, _template, void 0);
      __privateAdd2(this, _prevTemplate, void 0);
      __privateAdd2(this, _prevTemplateId, void 0);
      if (this.shadowRoot) {
        this.renderRoot = this.shadowRoot;
      } else {
        this.renderRoot = this.attachShadow({ mode: "open" });
        this.createRenderer();
      }
      const observer = new MutationObserver((mutationList) => {
        var _a;
        if (this.mediaController && !((_a = this.mediaController) == null ? void 0 : _a.breakpointsComputed))
          return;
        if (mutationList.some((mutation) => {
          const target = (
            /** @type {HTMLElement} */
            mutation.target
          );
          if (target === this)
            return true;
          if (target.localName !== "media-controller")
            return false;
          if (observedMediaAttributes[mutation.attributeName])
            return true;
          if (mutation.attributeName.startsWith("breakpoint"))
            return true;
          return false;
        })) {
          this.render();
        }
      });
      observer.observe(this, { attributes: true });
      observer.observe(this.renderRoot, {
        attributes: true,
        subtree: true
      });
      this.addEventListener(MediaStateChangeEvents.BREAKPOINTS_COMPUTED, this.render);
      __privateMethod(this, _upgradeProperty, upgradeProperty_fn).call(this, "template");
    }
    /** @type {HTMLElement & { breakpointsComputed?: boolean }} */
    get mediaController() {
      return this.renderRoot.querySelector("media-controller");
    }
    get template() {
      var _a;
      return (_a = __privateGet2(this, _template)) != null ? _a : this.constructor.template;
    }
    set template(element) {
      __privateSet2(this, _prevTemplateId, null);
      __privateSet2(this, _template, element);
      this.createRenderer();
    }
    get props() {
      var _a, _b, _c;
      const observedAttributes = [
        ...Array.from((_b = (_a = this.mediaController) == null ? void 0 : _a.attributes) != null ? _b : []).filter(({ name }) => {
          return observedMediaAttributes[name] || name.startsWith("breakpoint");
        }),
        ...Array.from(this.attributes)
      ];
      const props = {};
      for (let attr of observedAttributes) {
        const name = (_c = observedMediaAttributes[attr.name]) != null ? _c : camelCase(attr.name);
        let { value } = attr;
        if (value != null) {
          if (isNumericString(value)) {
            value = parseFloat(value);
          }
          props[name] = value === "" ? true : value;
        } else {
          props[name] = false;
        }
      }
      return props;
    }
    attributeChangedCallback(attrName, oldValue, newValue) {
      if (attrName === "template" && oldValue != newValue) {
        __privateMethod(this, _updateTemplate, updateTemplate_fn).call(this);
      }
    }
    connectedCallback() {
      __privateMethod(this, _updateTemplate, updateTemplate_fn).call(this);
    }
    createRenderer() {
      if (this.template && this.template !== __privateGet2(this, _prevTemplate)) {
        __privateSet2(this, _prevTemplate, this.template);
        this.renderer = new TemplateInstance(
          this.template,
          this.props,
          // @ts-ignore
          this.constructor.processor
        );
        this.renderRoot.textContent = "";
        this.renderRoot.append(
          prependTemplate.content.cloneNode(true),
          this.renderer
        );
      }
    }
    render() {
      var _a;
      (_a = this.renderer) == null ? void 0 : _a.update(this.props);
    }
  };
  _template = /* @__PURE__ */ new WeakMap();
  _prevTemplate = /* @__PURE__ */ new WeakMap();
  _prevTemplateId = /* @__PURE__ */ new WeakMap();
  _upgradeProperty = /* @__PURE__ */ new WeakSet();
  upgradeProperty_fn = function(prop) {
    if (Object.prototype.hasOwnProperty.call(this, prop)) {
      const value = this[prop];
      delete this[prop];
      this[prop] = value;
    }
  };
  _updateTemplate = /* @__PURE__ */ new WeakSet();
  updateTemplate_fn = function() {
    var _a;
    const templateId = this.getAttribute("template");
    if (!templateId || templateId === __privateGet2(this, _prevTemplateId))
      return;
    const rootNode = (
      /** @type HTMLDocument | ShadowRoot */
      this.getRootNode()
    );
    const template2 = (_a = rootNode == null ? void 0 : rootNode.getElementById) == null ? void 0 : _a.call(rootNode, templateId);
    if (template2) {
      __privateSet2(this, _prevTemplateId, templateId);
      __privateSet2(this, _template, template2);
      this.createRenderer();
      return;
    }
    if (isValidUrl(templateId)) {
      __privateSet2(this, _prevTemplateId, templateId);
      request(templateId).then((data) => {
        const template22 = Document.createElement("template");
        template22.innerHTML = data;
        __privateSet2(this, _template, template22);
        this.createRenderer();
      }).catch(console.error);
    }
  };
  __publicField2(MediaThemeElement, "template");
  __publicField2(MediaThemeElement, "observedAttributes", ["template"]);
  __publicField2(MediaThemeElement, "processor", processor);
  function isValidUrl(url) {
    if (!/^(\/|\.\/|https?:\/\/)/.test(url))
      return false;
    const base = /^https?:\/\//.test(url) ? void 0 : location.origin;
    try {
      new URL(url, base);
    } catch (e) {
      return false;
    }
    return true;
  }
  async function request(resource) {
    const response = await fetch(resource);
    if (response.status !== 200) {
      throw new Error(`Failed to load resource: the server responded with a status of ${response.status}`);
    }
    return response.text();
  }
  if (!GlobalThis.customElements.get("media-theme")) {
    GlobalThis.customElements.define("media-theme", MediaThemeElement);
  }

  // ../../node_modules/media-chrome/dist/themes/minimal.js
  var __defProp4 = Object.defineProperty;
  var __defNormalProp3 = (obj, key, value) => key in obj ? __defProp4(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField3 = (obj, key, value) => {
    __defNormalProp3(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };
  var template = Document.createElement("template");
  template.innerHTML = /*html*/
  `
  <style>
    :host {
      --_primary-color: var(--media-primary-color, #fff);
      --_secondary-color: var(--media-secondary-color, rgb(0 0 0 / .75));

      --media-icon-color: var(--_primary-color);
      --media-range-thumb-background: var(--_primary-color);
      --media-range-bar-color: var(--_primary-color);
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      --media-range-track-border-radius: 3px;
      --media-time-range-buffered-color: rgba(255, 255, 255, 0.4);
      --media-range-track-background: rgba(255, 255, 255, 0.5);
      --media-range-thumb-opacity: 0;
      --media-preview-thumbnail-border-radius: 2px;

      color: var(--_primary-color);
    }

    media-control-bar {
      --media-control-padding: 2px;
      background: var(--_secondary-color);
      align-items: center;
      height: 30px;
      border-radius: 4px;
      margin: 0 5px 5px;
      padding-inline: 2px;
    }

    media-controller[breakpointsm] media-control-bar {
      --media-control-padding: 4px;
      height: 38px;
      border-radius: 8px;
      padding-inline: 5px;
    }

    media-controller[breakpointmd] media-control-bar {
      height: 46px;
      margin: 0 8px 8px;
    }

    media-controller[breakpointlg] media-control-bar,
    media-controller[breakpointxl] media-control-bar {
      padding-inline: 7px;
    }

    .live-controls-left {
      margin-right: auto;
    }

    media-time-range,
    media-live-button,
    media-time-display,
    media-text-display,
    media-playback-rate-button[role='button'] {
      color: inherit;
    }

    [disabled]:not(media-live-button) {
      opacity: 60%;
      cursor: not-allowed;
    }

    ${/* Turn some buttons off by default */
  ""}
    media-seek-backward-button {
      display: var(--media-control-display, var(--media-seek-backward-button-display, none));
    }

    media-seek-forward-button {
      display: var(--media-control-display, var(--media-seek-forward-button-display, none));
    }

    media-pip-button {
      display: var(--media-control-display, var(--media-pip-button-display, none));
    }
  </style>

  <template partial="PlayButton">
    <media-play-button
      part="play button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" slot="play">
        <path
          d="m6.73 20.93 14.05-8.54a.46.46 0 0 0 0-.78L6.73 3.07a.48.48 0 0 0-.73.39v17.07a.48.48 0 0 0 .73.4Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 24 24" slot="pause">
        <path
          d="M6 19.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v15ZM14.5 4a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5h-3Z"
        />
      </svg>
    </media-play-button>
  </template>

  <template partial="MuteButton">
    <media-mute-button
      part="mute button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" slot="high">
        <path
          d="m11.14 4.86-4 4a.49.49 0 0 1-.35.14H3.25a.25.25 0 0 0-.25.25v5.5a.25.25 0 0 0 .25.25h3.54a.49.49 0 0 1 .36.15l4 4a.5.5 0 0 0 .85-.36V5.21a.5.5 0 0 0-.86-.35Zm2.74-1.56v1.52A7.52 7.52 0 0 1 19.47 12a7.52 7.52 0 0 1-5.59 7.18v1.52A9 9 0 0 0 21 12a9 9 0 0 0-7.12-8.7Zm3.56 8.7a5.49 5.49 0 0 0-3.56-5.1v1.66a3.93 3.93 0 0 1 0 6.88v1.66a5.49 5.49 0 0 0 3.56-5.1Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 24 24" slot="medium">
        <path
          d="m11.14 4.853-4 4a.49.49 0 0 1-.35.14H3.25a.25.25 0 0 0-.25.25v5.5a.25.25 0 0 0 .25.25h3.54a.49.49 0 0 1 .36.15l4 4a.5.5 0 0 0 .85-.36V5.203a.5.5 0 0 0-.86-.35Zm6.3 7.14a5.49 5.49 0 0 0-3.56-5.1v1.66a3.93 3.93 0 0 1 0 6.88v1.66a5.49 5.49 0 0 0 3.56-5.1Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 24 24" slot="low">
        <path
          d="m11.14 4.853-4 4a.49.49 0 0 1-.35.14H3.25a.25.25 0 0 0-.25.25v5.5a.25.25 0 0 0 .25.25h3.54a.49.49 0 0 1 .36.15l4 4a.5.5 0 0 0 .85-.36V5.203a.5.5 0 0 0-.86-.35Zm6.3 7.14a5.49 5.49 0 0 0-3.56-5.1v1.66a3.93 3.93 0 0 1 0 6.88v1.66a5.49 5.49 0 0 0 3.56-5.1Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 24 24" slot="off">
        <path
          d="m3 4.05 4.48 4.47-.33.33a.49.49 0 0 1-.36.15H3.25a.25.25 0 0 0-.25.25v5.5a.25.25 0 0 0 .25.25h3.54a.49.49 0 0 1 .36.15l4 4a.48.48 0 0 0 .36.15.5.5 0 0 0 .5-.5v-5.75l4.67 4.66a7.71 7.71 0 0 1-2.79 1.47v1.52a9.32 9.32 0 0 0 3.87-1.91L20 21l1-1L4.06 3 3 4.05Zm5.36 5.36 2.39 2.39V17L8 14.26a1.74 1.74 0 0 0-1.24-.51H4.25v-3.5h2.54A1.74 1.74 0 0 0 8 9.74l.36-.33ZM19.47 12a7.19 7.19 0 0 1-.89 3.47l1.11 1.1A8.64 8.64 0 0 0 21 12a9 9 0 0 0-7.12-8.7v1.52A7.52 7.52 0 0 1 19.47 12ZM12 8.88V5.21a.5.5 0 0 0-.5-.5.48.48 0 0 0-.36.15L9.56 6.44 12 8.88ZM15.91 12a4.284 4.284 0 0 1-.07.72l1.22 1.22a5.2 5.2 0 0 0 .38-1.94 5.49 5.49 0 0 0-3.56-5.1v1.66A4 4 0 0 1 15.91 12Z"
        />
      </svg>
    </media-mute-button>
  </template>

  <template partial="CaptionsButton">
    <media-captions-button
      part="captions button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 26 24" slot="on">
        <path
          d="M22.832 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.41 10.1a3.63 3.63 0 0 1-1.51.32 4.76 4.76 0 0 1-1.63-.27 4 4 0 0 1-1.28-.83 3.67 3.67 0 0 1-.84-1.26 4.23 4.23 0 0 1-.3-1.63 4.28 4.28 0 0 1 .3-1.64 3.53 3.53 0 0 1 .84-1.21 3.89 3.89 0 0 1 1.29-.8 4.76 4.76 0 0 1 1.63-.27 4.06 4.06 0 0 1 1.35.24c.225.091.44.205.64.34a2.7 2.7 0 0 1 .55.52l-1.27 1a1.79 1.79 0 0 0-.6-.46 2 2 0 0 0-.83-.16 2 2 0 0 0-1.56.69 2.35 2.35 0 0 0-.46.77 2.78 2.78 0 0 0-.16 1c-.009.34.046.68.16 1 .104.283.26.545.46.77.188.21.415.38.67.5a2 2 0 0 0 .84.18 1.87 1.87 0 0 0 .9-.21 1.78 1.78 0 0 0 .65-.6l1.38 1a2.88 2.88 0 0 1-1.22 1.01Zm7.52 0a3.63 3.63 0 0 1-1.51.32 4.76 4.76 0 0 1-1.63-.27 3.89 3.89 0 0 1-1.28-.83 3.55 3.55 0 0 1-.85-1.26 4.23 4.23 0 0 1-.3-1.63 4.28 4.28 0 0 1 .3-1.64 3.43 3.43 0 0 1 .85-1.25 3.75 3.75 0 0 1 1.28-.8 4.76 4.76 0 0 1 1.63-.27 4 4 0 0 1 1.35.24c.225.091.44.205.64.34.21.144.395.32.55.52l-1.27 1a1.79 1.79 0 0 0-.6-.46 2 2 0 0 0-.83-.16 2 2 0 0 0-1.56.69 2.352 2.352 0 0 0-.46.77 3.01 3.01 0 0 0-.16 1c-.003.34.05.678.16 1 .108.282.263.542.46.77.188.21.416.38.67.5a2 2 0 0 0 .84.18 1.87 1.87 0 0 0 .9-.21 1.78 1.78 0 0 0 .65-.6l1.38 1a2.82 2.82 0 0 1-1.21 1.05Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 26 24" slot="off">
        <path
          d="M22.832 5.68a2.58 2.58 0 0 0-2.3-2.5c-1.81-.12-4.67-.18-7.53-.18-2.86 0-5.72.06-7.53.18a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c1.81.12 4.67.18 7.53.18 2.86 0 5.72-.06 7.53-.18a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.137-.21-8.283 0-12.42a1.11 1.11 0 0 1 .91-1.11c1.67-.11 4.43-.18 7.43-.18s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.137.21 8.283 0 12.42ZM10.843 14a1.55 1.55 0 0 1-.76.18 1.57 1.57 0 0 1-.71-.18 1.69 1.69 0 0 1-.57-.42 2.099 2.099 0 0 1-.38-.58 2.47 2.47 0 0 1 0-1.64 2 2 0 0 1 .39-.66 1.73 1.73 0 0 1 .58-.42c.23-.103.479-.158.73-.16.241-.004.48.044.7.14.199.088.373.222.51.39l1.08-.89a2.179 2.179 0 0 0-.47-.44 2.81 2.81 0 0 0-.54-.32 2.91 2.91 0 0 0-.58-.15 2.71 2.71 0 0 0-.56 0 4.08 4.08 0 0 0-1.38.15 3.27 3.27 0 0 0-1.09.67 3.14 3.14 0 0 0-.71 1.06 3.62 3.62 0 0 0-.26 1.39 3.57 3.57 0 0 0 .26 1.38 3 3 0 0 0 .71 1.06c.316.293.687.52 1.09.67.443.16.91.238 1.38.23a3.2 3.2 0 0 0 1.28-.27c.401-.183.747-.47 1-.83l-1.17-.88a1.42 1.42 0 0 1-.53.52Zm6.62 0a1.58 1.58 0 0 1-.76.18 1.54 1.54 0 0 1-.7-.18 1.69 1.69 0 0 1-.57-.42 2.12 2.12 0 0 1-.43-.58 2.29 2.29 0 0 1 .39-2.3 1.84 1.84 0 0 1 1.32-.58c.241-.003.48.045.7.14.199.088.373.222.51.39l1.08-.92a2.43 2.43 0 0 0-.47-.44 3.22 3.22 0 0 0-.53-.29 2.999 2.999 0 0 0-.57-.15 2.87 2.87 0 0 0-.57 0 4.06 4.06 0 0 0-1.36.15 3.17 3.17 0 0 0-1.09.67 3 3 0 0 0-.72 1.06 3.62 3.62 0 0 0-.25 1.39 3.57 3.57 0 0 0 .25 1.38c.16.402.405.764.72 1.06a3.17 3.17 0 0 0 1.09.67c.44.16.904.237 1.37.23.441 0 .877-.092 1.28-.27a2.45 2.45 0 0 0 1-.83l-1.15-.85a1.49 1.49 0 0 1-.54.49Z"
        />
      </svg>
    </media-captions-button>
  </template>

  <template partial="FullscreenButton">
    <media-fullscreen-button
      part="fullscreen button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" slot="enter">
        <path
          d="M20.25 14.5a.76.76 0 0 0-.75.75v4.25h-4.25a.75.75 0 1 0 0 1.5h5a.76.76 0 0 0 .75-.75v-5a.76.76 0 0 0-.75-.75Zm0-11.5h-5a.76.76 0 0 0-.75.75.76.76 0 0 0 .75.75h4.25v4.25a.75.75 0 1 0 1.5 0v-5a.76.76 0 0 0-.75-.75ZM8.75 19.5H4.5v-4.25a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v5a.76.76 0 0 0 .75.75h5a.75.75 0 1 0 0-1.5Zm0-16.5h-5a.76.76 0 0 0-.75.75v5a.76.76 0 0 0 .75.75.76.76 0 0 0 .75-.75V4.5h4.25a.76.76 0 0 0 .75-.75.76.76 0 0 0-.75-.75Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 24 24" slot="exit">
        <path
          d="M20.25 14.5h-5a.76.76 0 0 0-.75.75v5a.75.75 0 1 0 1.5 0V16h4.25a.75.75 0 1 0 0-1.5Zm-5-5h5a.75.75 0 1 0 0-1.5H16V3.75a.75.75 0 1 0-1.5 0v5a.76.76 0 0 0 .75.75Zm-6.5 5h-5a.75.75 0 1 0 0 1.5H8v4.25a.75.75 0 1 0 1.5 0v-5a.76.76 0 0 0-.75-.75Zm0-11.5a.76.76 0 0 0-.75.75V8H3.75a.75.75 0 0 0 0 1.5h5a.76.76 0 0 0 .75-.75v-5A.76.76 0 0 0 8.75 3Z"
        />
      </svg>
    </media-fullscreen-button>
  </template>

  <template partial="LiveButton">
    <media-live-button
      part="live seek-live button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <span slot="text" style="font-weight: normal;">Live</span>
      <svg
        slot="indicator"
        width="8"
        height="8"
        viewBox="0 0 8 8"
        xmlns="http://www.w3.org/2000/svg"
        style="width: 8px; height: 8px; margin-right: 2px;"
      >
        <rect width="8" height="8" rx="2" />
      </svg>
    </media-live-button>
  </template>

  <template partial="PipButton">
    <media-pip-button
      part="pip button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 26 24" slot="enter">
        <path
          d="M22 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h6.75v-1.25h-6.5V4.25h17.5v6.5H23V4a1 1 0 0 0-1-1Zm0 10h-8a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1Zm-.5 6.5h-7v-5h7v5Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 26 24" slot="exit">
        <path
          d="M22 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h6.75v-1.25h-6.5V4.25h17.5v6.5H23V4a1 1 0 0 0-1-1Zm0 10h-8a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1Zm-.5 6.5h-7v-5h7v5Z"
        />
      </svg>
    </media-pip-button>
  </template>

  <template partial="SeekBackwardButton">
    <media-seek-backward-button
      seekoffset="{{backwardseekoffset ?? 10}}"
      part="seek-backward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 22 24" slot="icon">
        <path
          d="M11 6V3L5.37 7 11 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 11 6Z"
        />
        <text
          class="value"
          transform="translate(2.5 21)"
          style="font-size: 8px; font-family: 'ArialMT', 'Arial'"
        >
          {{backwardseekoffset ?? 10}}
        </text>
      </svg>
    </media-seek-backward-button>
  </template>

  <template partial="SeekForwardButton">
    <media-seek-forward-button
      seekoffset="{{forwardseekoffset ?? 10}}"
      part="seek-forward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 22 24" slot="icon">
        <path
          d="M11 6V3l5.61 4L11 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 11 6Z"
        />
        <text
          class="value"
          transform="translate(10 21)"
          style="font-size: 8px; font-family: 'ArialMT', 'Arial'"
        >
          {{forwardseekoffset ?? 10}}
        </text>
      </svg>
    </media-seek-forward-button>
  </template>

  <template partial="AirplayButton">
    <media-airplay-button
      part="airplay button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 26 24" slot="icon">
        <path
          d="M13.19 14.22a.25.25 0 0 0-.38 0l-5.46 6.37a.25.25 0 0 0 .19.41h10.92a.25.25 0 0 0 .19-.41l-5.46-6.37Z"
        />
        <path
          d="M22 3H4a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h2.94L8 16.75H4.25V4.25h17.5v12.5H18L19.06 18H22a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Z"
        />
      </svg>
    </media-airplay-button>
  </template>

  <template partial="CastButton">
    <media-cast-button
      part="cast button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 26 24" slot="enter">
        <path
          d="M3 15.5V17c2.206 0 4 1.794 4 4h1.5A5.5 5.5 0 0 0 3 15.5Zm0 3V21h2.5A2.5 2.5 0 0 0 3 18.5Z"
        />
        <path d="M3 12.5V14c3.86 0 7 3.14 7 7h1.5A8.5 8.5 0 0 0 3 12.5Z" />
        <path
          d="M22 3H4a1 1 0 0 0-1 1v6.984c.424 0 .84.035 1.25.086V4.25h17.5v15.5h-8.82c.051.41.086.826.086 1.25H22a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 26 24" slot="exit">
        <path
          d="M3 15.5V17c2.206 0 4 1.794 4 4h1.5A5.5 5.5 0 0 0 3 15.5Zm0 3V21h2.5A2.5 2.5 0 0 0 3 18.5Z"
        />
        <path d="M3 12.5V14c3.86 0 7 3.14 7 7h1.5A8.5 8.5 0 0 0 3 12.5Z" />
        <path
          d="M22 3H4a1 1 0 0 0-1 1v6.984c.424 0 .84.035 1.25.086V4.25h17.5v15.5h-8.82c.051.41.086.826.086 1.25H22a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Z"
        />
        <path
          d="M20.5 5.5h-15v5.811c3.52.906 6.283 3.67 7.189 7.19H20.5V5.5Z"
        />
      </svg>
    </media-cast-button>
  </template>

  <template partial="TimeRange">
    <media-time-range
      part="time range"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-time-range>
  </template>

  <template partial="VolumeRange">
    <media-volume-range
      part="volume range"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-volume-range>
  </template>

  <media-controller
    defaultsubtitles="{{defaultsubtitles}}"
    gesturesdisabled="{{disabled}}"
    hotkeys="{{hotkeys}}"
    nohotkeys="{{nohotkeys}}"
    audio="{{audio}}"
    exportparts="layer, media-layer, poster-layer, vertical-layer, centered-layer, gesture-layer"
  >
    <slot name="media" slot="media"></slot>
    <slot name="poster" slot="poster"></slot>
    <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>

    <template if="title">
      <div slot="top-chrome">
        <media-text-display>{{title}}</media-text-display>
      </div>
    </template>

    <template if="streamtype == 'on-demand'">
      <template if="!breakpointsm">
        <media-control-bar>
          {{>PlayButton}}
          {{>TimeRange}}
          {{>MuteButton}}
          {{>CaptionsButton}}
          {{>FullscreenButton}}
        </media-control-bar>
      </template>

      <template if="breakpointsm">
        <media-control-bar>
          {{>PlayButton}}
          {{>SeekBackwardButton}}
          {{>SeekForwardButton}}
          {{>TimeRange}}
          <template if="breakpointmd">
            <media-time-display></media-time-display>
          </template>
          {{>MuteButton}}
          {{>VolumeRange}}
          {{>CaptionsButton}}
          {{>AirplayButton}}
          {{>CastButton}}
          {{>PipButton}}
          {{>FullscreenButton}}
        </media-control-bar>
      </template>
    </template>

    <template if="streamtype == 'live'">
      <media-control-bar>
        <div class="live-controls-left">
          {{>LiveButton}}
          <template if="!targetlivewindow">
            <template if="breakpointsm">
              <media-time-display></media-time-display>
            </template>
          </template>
        </div>
        <template if="targetlivewindow > 0">
          <template if="breakpointsm">{{>TimeRange}}</template>
        </template>
        <div class="live-controls-right">
          <template if="targetlivewindow > 0">
            {{>SeekBackwardButton}}
            {{>SeekForwardButton}}
          </template>
          {{>MuteButton}}
          {{>VolumeRange}}
          {{>CaptionsButton}}
          {{>AirplayButton}}
          {{>CastButton}}
          {{>PipButton}}
          {{>FullscreenButton}}
        </div>
      </media-control-bar>
    </template>

    <slot></slot>
  </media-controller>
`;
  var MediaThemeMinimal = class extends MediaThemeElement {
  };
  __publicField3(MediaThemeMinimal, "template", template);
  if (!GlobalThis.customElements.get("media-theme-minimal")) {
    GlobalThis.customElements.define("media-theme-minimal", MediaThemeMinimal);
  }
  return __toCommonJS(minimal_exports);
})();
