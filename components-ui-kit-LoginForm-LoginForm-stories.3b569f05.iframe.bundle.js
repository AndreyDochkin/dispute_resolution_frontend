"use strict";(self.webpackChunkdispute_resolution=self.webpackChunkdispute_resolution||[]).push([[461],{"./src/components/ui-kit/LoginForm/LoginForm.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return LoginForm_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),Button=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/ui-kit/Button/Button.jsx")),Input=__webpack_require__("./src/components/ui-kit/Input/Input.jsx"),useForm=__webpack_require__("./src/hook/useForm.js"),useAuth=__webpack_require__("./src/hook/useAuth.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),LoginForm_LoginForm=function LoginForm(_ref){var onLogin=_ref.onLogin,loginStatus=_ref.loginStatus,isLoading=_ref.isLoading,_useFormWithValidatio=(0,useForm.U)(),values=_useFormWithValidatio.values,handleChange=_useFormWithValidatio.handleChange,errors=_useFormWithValidatio.errors,isValid=_useFormWithValidatio.isValid,_useAuth=(_useFormWithValidatio.resetForm,(0,useAuth.a)()),setLoginStatus=_useAuth.setLoginStatus,loginServerError=_useAuth.loginServerError,setloginServerError=_useAuth.setloginServerError,onChange=function onChange(evt){evt.preventDefault(),setLoginStatus(""),setloginServerError(""),handleChange(evt)};return(0,jsx_runtime.jsx)("section",{className:"auth__container",children:(0,jsx_runtime.jsxs)("form",{className:"auth__form",onSubmit:function handleSubmit(evt){evt.preventDefault(),onLogin(values)},children:[(0,jsx_runtime.jsx)("h1",{className:"auth__title",children:"Вход в Concordia"}),(0,jsx_runtime.jsxs)("div",{className:"auth__form-input-area",children:[(0,jsx_runtime.jsx)(Input.Z,{label:"Электронная почта",name:"email",id:"userEmail",placeholder:"Электронная почта",type:"email",autocomplete:"off",pattern:"[a-zA-Z0-9\\-\\.]+@[a-z\\-\\.]+\\.{1,1}[a-z]{1,}",minLength:5,maxLength:64,onChange:onChange,required:!0,error:errors.email||loginStatus,value:values.email||""}),(0,jsx_runtime.jsx)(Input.Z,{label:"Пароль",name:"password",id:"userPassword",onChange:onChange,placeholder:"Пароль",type:"password",pattern:"[0-9a-zA-Z\\!\\@\\#\\$\\%\\.]{8,32}",required:!0,minLength:8,maxLength:32,error:errors.password||loginStatus,value:values.password||""})]}),(0,jsx_runtime.jsx)("span",{className:"auth__form-error",children:loginServerError}),(0,jsx_runtime.jsx)(Button.Z,{backgroundColor:"blueLagoon",label:"Продолжить",type:"submit",disabled:!isValid||isLoading||""!==loginStatus||""!==loginServerError})]})})};LoginForm_LoginForm.__docgenInfo={description:"",methods:[],displayName:"LoginForm",props:{onLogin:{description:"",type:{name:"func"},required:!0},loginStatus:{description:"",type:{name:"string"},required:!0},isLoading:{description:"",type:{name:"bool"},required:!0}}};var _Default$parameters,_Default$parameters2,_Default$parameters2$,ui_kit_LoginForm_LoginForm=LoginForm_LoginForm,LoginForm_stories=(__webpack_require__("./src/index.css"),{title:"Dispute_Resolution/Forms/LoginForm",component:ui_kit_LoginForm_LoginForm}),Default=function Default(){return(0,jsx_runtime.jsx)(ui_kit_LoginForm_LoginForm,{})};Default.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Default.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"() => <LoginForm />"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})});var __namedExportsOrder=["Default"];Default.__docgenInfo={description:"",methods:[],displayName:"Default"}}}]);