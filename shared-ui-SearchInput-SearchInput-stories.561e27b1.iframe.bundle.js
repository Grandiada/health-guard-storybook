"use strict";(self.webpackChunkhealthguard=self.webpackChunkhealthguard||[]).push([[404],{"./src/shared/ui/SearchInput/SearchInput.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _SearchInput__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/ui/SearchInput/SearchInput.tsx"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_shared__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/shared/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Data Entry/SearchInput",component:_SearchInput__WEBPACK_IMPORTED_MODULE_0__.M,parameters:{layout:"centered"},tags:["autodocs"],args:{onChange:val=>console.log(val),placeholder:"Search",value:"test"}},Default={render:props=>{const[value,setValue]=react__WEBPACK_IMPORTED_MODULE_1__.useState(props.value);return(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{setValue(props.value)}),[props.value]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_shared__WEBPACK_IMPORTED_MODULE_2__.xu,{style:{width:"300px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_SearchInput__WEBPACK_IMPORTED_MODULE_0__.M,{...props,value,onChange:val=>{setValue(val)}})})}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: props => {\n    const [value, setValue] = React.useState(props.value);\n    useEffect(() => {\n      setValue(props.value);\n    }, [props.value]);\n    return <Box style={{\n      width: "300px"\n    }}>\r\n        <SearchInput {...props} value={value} onChange={val => {\n        setValue(val);\n      }} />\r\n      </Box>;\n  }\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]}}]);