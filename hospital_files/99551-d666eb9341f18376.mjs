"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[99551],{521262:(e,i,t)=>{t.d(i,{YS:()=>l,eF:()=>s,m_:()=>a});var r=t(40660),n=t(78309);function a(e,i,t,r){let a=new URLSearchParams;return a.append(n.NR.SOURCE_EVENT_ID,e),a.append(n.NR.DESTINATION,function(e){let i;try{i=decodeURIComponent(e)}catch(t){i=e}return i.startsWith("http")||(i="https://"+i),new URL(i).origin}(i)||""),a.append(n.NR.EXPIRY,t?n.uV:n.ug),a.append(n.NR.PRIORITY,t?n.NR.CLICK_PRIORITY:n.NR.VIEW_PRIORITY),r&&a.append(n.NR.CAMPAIGN_ID,r),a.append(n.NR.SOURCE_EVENT_TYPE,t?n.bC:n.Cu),"/attribution_source/?"+a.toString()}async function l(e,i,t,n,l,s){let{appType:o,osType:d}=s||{};if(["Pin","pinImpressions"].includes(e)&&i&&t&&n){r.Z.increment("webapp.arapi.view.funnel",.1,{status:"start",appType:o,osType:d});try{var u;if(!(null!==(u=window.document.featurePolicy)&&void 0!==u&&u.allowsFeature("attribution-reporting"))){r.Z.increment("webapp.arapi.view.funnel",.1,{status:"skipped",message:"attribution-reporting is not enabled",appType:o,osType:d});return}let e=a(t,n||"",!1,l),i=await window.fetch(e,{keepalive:!0,attributionReporting:{eventSourceEligible:!0,triggerEligible:!1}});if(!i.ok)throw Error("server request failed.");r.Z.increment("webapp.arapi.view.funnel",.1,{status:"success",appType:o,osType:d})}catch(e){r.Z.increment("webapp.arapi.view.funnel",.1,{status:"failed",error:e.name,appType:o,osType:d})}}else r.Z.increment("webapp.arapi.view.funnel",.1,{status:"missing_param",appType:o,osType:d})}function s(e){if(e){let i=e.toLowerCase();if(i.includes("windows"))return"windows xp"===i?1:"windows vista"===i?2:"windows 7"===i?3:"windows 8"===i?4:12;if(i.includes("mac os"))return 5;if(i.includes("android"))return 7;if(i.includes("ios"))return 6;if(i.includes("ubuntu"))return 8;if(i.includes("chromium os"))return 13}return 0}},354428:(e,i,t)=>{t.d(i,{Se:()=>f,iw:()=>w,gV:()=>h,G3:()=>v,Gj:()=>b,Jd:()=>_,$3:()=>g});var r=t(965533),n=t(457628),a=t(791045),l=t(970588),s=t(250307);let o=e=>"string"!=typeof e&&e?e.state:null;var d=t(845098),u=t(48040),c=t(957733),p=t(625168),m=t(795142);let _=()=>{window&&window.focus(),document.activeElement&&document.activeElement.blur()},h=({isOffsiteUrl:e,event:i})=>!e&&(i.metaKey||i.ctrlKey),g=({location:e,pinId:i,surface:t})=>!!t&&!m.ZF.includes(t)||e.pathname.includes(i),f=(e,i)=>{var t,r;let l=Math.round(1e3*Math.random())+"",s=Math.round(1e3*Math.random())+"";n.t8((0,a.GS)(l),s);let o={token:`${l}-${s}`,url:e,...i&&!i.params?i.queryParams:(null==i?void 0:i.params)&&{pin:null!==(t=i.params.pinId)&&void 0!==t?t:void 0,isThirdPartyAd:null!==(r=i.params.isThirdPartyAd)&&void 0!==r?r:void 0,csr:i.params.csrId&&!i.params.pinId?i.params.csrId:void 0,client_tracking_params:i.params.clientTrackingParams,aux_data:i.params.auxData?JSON.stringify(i.params.auxData):void 0}};return`/offsite/?${(0,d.Z)(o)}`},b=(e,i)=>{(0,r.Z)(f(e,i),!0)},w=async({clientTrackingParams:e,href:i,isMounted:t,pinId:r,spamCheckCallback:n})=>{let a=await (0,l.Z)({url:"/v3/offsite/",data:{check_only:!0,client_tracking_params:e,pin_id:r,url:i}});if(!a.resource_response.error&&t){let e=a.resource_response.data||{},{message:i,redirect_status:t,url:r}=e,l=["blocked","suspicious","porn"].includes(t);n({blocked:l,message:i,redirectStatus:t,sanitized_url:r})}},v=({event:e,onHistoryChange:i,href:t,history:n,target:a})=>{let l=(0,s.Z)(t),d=o(t),m=(0,u.Z)(l);m===p.Z.TRUSTED_DIFFERENT_ORIGIN||"blank"===a?(0,r.Z)(l,"blank"===a):n&&m===p.Z.SAME_ORIGIN&&(n.push((0,c.Z)({url:l}),null!=d?d:{}),i&&i({event:e}))}},599551:(e,i,t)=>{t.d(i,{Z:()=>p,p:()=>m});var r=t(667294),n=t(616550),a=t(946618),l=t(354428),s=t(300657),o=t(250307),d=t(28630),u=t(554318),c=t(935340);function p(e){var i,t,p;let{externalData:m,href:_,onHistoryChange:h,target:g}=e,[f,b]=(0,r.useState)(null),[w,v]=(0,r.useState)(!1),k=(0,n.useHistory)(),P=(0,n.useLocation)(),y=(0,o.Z)(_),I=(0,d.Z)({url:y}),{showWarning:S}=null!==(i=(0,u.s)())&&void 0!==i?i:{},{pin:A,surface:x}=m||{},R=A?(0,a.Z)({boardUrl:null===(t=A.board)||void 0===t?void 0:t.url,location:P,pinId:A.entityId,pinnerUserName:null===(p=A.pinner)||void 0===p?void 0:p.username,storyPinDataId:A.storyPinDataId,trackingParams:A.trackingParams,trackingParamsMap:A.trackingParamsMap}):null,E=(0,s.Z)();return(0,r.useEffect)(()=>(v(!0),()=>{v(!1)}),[]),(0,r.useEffect)(()=>{I&&A&&null===f&&w&&(!A.promoter||A.isDownstreamPromotion)&&(0,l.$3)({location:P,pinId:A.entityId,surface:x})&&(0,l.iw)({clientTrackingParams:R,isMounted:w,pinId:A.entityId,spamCheckCallback:e=>b(e),href:y})},[R,A,x,y,I,w,P,f]),({event:e})=>{if(!(0,l.gV)({isOffsiteUrl:I,event:e})){if(e.preventDefault(),!_||"string"==typeof _&&_.startsWith("#")){(0,c.nP)("link_navigation_empty_href",{sampleRate:1,tags:{route:P.pathname}});return}if(I||null!=m&&m.dangerouslyForceOffsiteUrl){var i;E({auxData:null==m?void 0:m.auxData,clientTrackingParams:R,pin:(null==m?void 0:m.pin)&&{attributionSourceId:m.pin.attributionSourceId,campaignId:m.pin.campaignId,isPromoted:m.pin.isPromoted,pinPromotionId:m.pin.pinPromotionId,isThirdPartyAd:m.pin.isThirdPartyAd},pinId:null==m?void 0:null===(i=m.pin)||void 0===i?void 0:i.entityId,queryParams:null==m?void 0:m.queryParams,showWarning:S,spamCheck:f,url:y})}else(0,l.G3)({event:e,href:_,history:k,onHistoryChange:h,target:"blank"===g?"blank":null})}}}let m=({children:e,...i})=>{let t=p(i);return e({handleClick:t})}},300657:(e,i,t)=>{t.d(i,{Z:()=>m,t:()=>p});var r=t(758579),n=t(78309),a=t(521262),l=t(969327),s=t(388011),o=t(354428),d=t(204926);let u=(e,i,t)=>{let r=document.createElement("a");r.setAttribute("href",i),r.setAttribute("target","_blank"),r.setAttribute("rel","noopener nofollow noreferrer"),r.style.cursor="pointer",r.style.display="block",r.setAttribute(n.$N.ATTRIBUTION_SOURCE_ID,e),r.setAttribute(n.$N.ATTRIBUTE_DESTINATION,t),r.setAttribute(n.$N.ATTRIBUTE_ON,t),r.click()},c=(e,i,t,r)=>{let l=(0,a.m_)(e,t,!0,r),s=document.createElement("a");s.setAttribute("href",i),s.setAttribute("target","_blank"),s.setAttribute("rel","noopener nofollow noreferrer"),s.style.cursor="pointer",s.style.display="block",s.setAttribute(n.NR.SOURCE,l),s.click()},p=()=>{let{logContextEvent:e}=(0,s.v)();return({attributionSourceId:i,auxData:t,campaignId:n,clientTrackingParams:a,href:s,isPromoted:d,pinId:p,pinPromotionId:m,isThirdPartyAd:_})=>{var h,g,f;if(!d)return!1;let b=(0,r.Z)(),w=(0,o.Se)(s,{params:{pinId:p,csrId:null,clientTrackingParams:a,auxData:t,isThirdPartyAd:_}}),v=null!==(h=null==b?void 0:b.userAgent.browserName)&&void 0!==h?h:"";if((0,l.G6)(v)){let{group:t}=null!==(g=null==b?void 0:b.experimentsClient.checkExperiment("m10n_event_conversion_measurement"))&&void 0!==g?g:{},r=null!=b&&b.userAgent.browserVersion?b.userAgent.browserVersion:"0.0",l=parseFloat(r.split(".")[0]+"."+r.split(".")[1]);if(i&&l>=14.1&&["enabled_safari"].includes(t))return u(i,w,s),e({event_type:101,clientTrackingParams:a,object_id_str:p||"",aux_data:{pin_id:p||"",click_measurement_ppid:m||"",click_measurement_campaign_id:n||"",is_pcm:!0,attribution_source_id:i,page_url:s}}),!0}else if((0,l.i7)(v)){let{group:t}=null!==(f=null==b?void 0:b.experimentsClient.checkExperiment("m10n_event_conversion_measurement_chrome"))&&void 0!==f?f:{},r=null!=b&&b.userAgent.browserVersion?parseInt(b.userAgent.browserVersion.split(".")[0],10):0;if(void 0!==i&&r>=101&&["enabled"].includes(t)){let t=null!=i?i:"0";return c(t,w,s,n),e({event_type:101,clientTrackingParams:a,object_id_str:p||"",aux_data:{pin_id:p||"",click_measurement_ppid:m||"",click_measurement_campaign_id:n||"",is_arapi:!0,attribution_source_id:t,page_url:s}}),!0}}return!1}},m=e=>{let i=p();return({auxData:t,clientTrackingParams:r,pin:n,pinId:a,queryParams:l,showWarning:s,spamCheck:u,url:c})=>{if("undefined"!=typeof window&&window.Windows){(0,d.Z)(c,{clientTrackingParams:r,pinId:a,hasPin:!!n,auxData:t,isThirdPartyAd:null==n?void 0:n.isThirdPartyAd});return}if(!n&&!(null!=e&&e.isFromClickthroughLink)){(0,o.Gj)(c,l?{queryParams:l}:{params:{pinId:a}});return}if(null!=u&&u.blocked){null==s||s(u);return}n&&i({attributionSourceId:n.attributionSourceId,auxData:t,campaignId:n.campaignId?String(n.campaignId):null,clientTrackingParams:r,href:c,isPromoted:n.isPromoted,pinId:a,pinPromotionId:n.pinPromotionId?String(n.pinPromotionId):null,isThirdPartyAd:n.isThirdPartyAd})||(0,o.Gj)(c,{params:{clientTrackingParams:r,auxData:t,pinId:a,isThirdPartyAd:null==n?void 0:n.isThirdPartyAd}})}}},250307:(e,i,t)=>{t.d(i,{Z:()=>r});let r=e=>e?"string"==typeof e?e:e.pathname?e.pathname:"":""},957733:(e,i,t)=>{t.d(i,{Z:()=>a});let r=(e,i)=>0===e.lastIndexOf(i,0);var n=t(17330);let a=({url:e})=>{let i=(0,n.Z)("/");return r(e,i)?e.substr(i.length-1):e}},204926:(e,i,t)=>{t.d(i,{Z:()=>a});var r=t(970588),n=t(354428);function a(e,i){let{auxData:t,clientTrackingParams:a,hasPin:l,pinId:s,isThirdPartyAd:o}=i||{},d={pin_id:s,check_only:!0,client_tracking_params:l?a:void 0,url:e,aux_data:JSON.stringify(t)};o&&(d.third_party_ad=s,delete d.pin_id),(0,r.Z)({url:"/v3/offsite/",data:d}).then(i=>{if(i&&i.resource_response&&!i.resource_response.error){let{resource_response:e}=i,{redirect_status:t,url:r}=e.data,n=["blocked","suspicious","porn"].includes(t);if(!n){if(window.Windows.Foundation&&window.Windows.System&&window.Windows.System.Launcher&&window.Windows.System.Launcher.launchUriAsync){let e=new window.Windows.Foundation.Uri(r);window.Windows.System.Launcher.launchUriAsync(e)}return}}(0,n.Gj)(e,{params:l?{pinId:s,clientTrackingParams:a,auxData:t,isThirdPartyAd:o}:{pinId:s}})})}},795142:(e,i,t)=>{t.d(i,{UP:()=>s,Wv:()=>n,ZF:()=>r,zI:()=>a,zl:()=>l});let r=["AuthHomefeed","CloseupRelatedProducts","FollowingFeedGrid","RelatedPinGrid","RelatedProductsFeed","SearchItem"],n=["ArticleProductsStory","CloseupRelatedProducts","ProductPinsFeed","RelatedProductsFeed","ShoppingPackageItem","RelatedProductsFeed","UserProfilePinGrid","ShoppingGridShippedMetadataWithVisitButton"],a=[...n,"ShoppingGridShippedMetadata","ShoppingSquareGridDomain","ShoppingSquareGridDomainNoMetadata","ProductPinsFeed","ShoppingCatalogsProductsMetadata","ShoppingDynamicHeightGrid"],l=["ShoppingSquareGridDomain","ShoppingGridShippedMetadata","ShoppingSquareGridStorefront","ShoppingSquareGridStorefrontDomain","ShoppingGridShippedMetadataWithVisitButton"],s=["BaseBoardPinGrid"]},554318:(e,i,t)=>{t.d(i,{Z:()=>g,s:()=>h});var r=t(667294),n=t(583592),a=t(608575),l=t(883119),s=t(88622),o=t(536042),d=t(630089),u=t(785893);let c=()=>{var e;let i=(0,o.ZP)(),{dismissWarning:t}=null!==(e=h())&&void 0!==e?e:{};return(0,u.jsx)(l.xu,{paddingX:3,children:(0,u.jsx)(l.zx,{fullWidth:!0,color:"red",onClick:t,text:i._('Okay', 'Dismiss a modal stating that clicking through to a link has been blocked', 'Dismiss a modal stating that clicking through to a link has been blocked')})})},p=()=>{let e=(0,o.ZP)();return(0,u.jsx)(l.xv,{inline:!0,weight:"bold",children:(0,u.jsx)(l.rU,{target:"blank",href:"https://policy.pinterest.com/community-guidelines#section-spam",display:"inlineBlock",underline:"hover",children:e._('Learn more', 'Link text leading to policy website', 'Link text leading to policy website')})})},m=({message:e,sanitized_url:i})=>{var t;let r=(0,o.ZP)(),{dismissWarning:n}=null!==(t=h())&&void 0!==t?t:{};return(0,u.jsx)(s.ZP,{accessibilityModalLabel:r._('We have blocked this link', 'Modal label when clicking a spammy link', 'Modal label when clicking a spammy link'),onDismiss:n,heading:r._('Heads up!', 'Modal heading when clicking through to a link has been blocked', 'Modal heading when clicking through to a link has been blocked'),footer:(0,u.jsx)(c,{}),children:(0,u.jsxs)(l.xu,{padding:6,children:[(0,u.jsx)(l.xv,{children:(0,d.nk)("{{ message }} {{ learnMore }}",{message:e,learnMore:(0,u.jsx)(p,{},"learnMoreLink")})}),(0,u.jsxs)(l.xu,{alignItems:"center",display:"flex",marginTop:4,children:[(0,u.jsx)(l.xu,{marginEnd:3,children:(0,u.jsx)(l.JO,{accessibilityLabel:r._('Blocked link address', 'Icon label preceding a block url', 'Icon label preceding a block url'),color:"error",icon:"report",inline:!0,size:24})}),(0,u.jsx)(l.xv,{inline:!0,lineClamp:1,weight:"bold",children:a.parse(i).hostname})]})]})})},{Provider:_,useMaybeHook:h}=(0,n.Z)("SpammyClickthrough");function g({children:e}){let[i,t]=(0,r.useState)(null),n=(0,r.useCallback)(()=>{t(null)},[t]),a=(0,r.useCallback)(e=>{t(e)},[t]),l=(0,r.useMemo)(()=>({dismissWarning:n,showWarning:a}),[n,a]);return(0,u.jsxs)(_,{value:l,children:[i&&(0,u.jsx)(m,{...i}),e]})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/99551-d666eb9341f18376.mjs.map