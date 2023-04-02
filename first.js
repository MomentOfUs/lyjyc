// ==UserScript==
// @name         My Script with jQuery
// @namespace    my-script-with-jquery
// @version      1
// @description  Example script using jQuery
// @match        http://39.107.176.163/instudio/
// @grant        GM_addStyle
// @grant        GM_log
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_notification
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// ==/UserScript==


$(function() {
    var tmlb=$('input[type="radio"]');
    console.log(tmlb);
  
     var a=$("#qstContent");
    console.log(a);
    a.val="adjfkajsdfakl";
  
    // 创造事件
  var event = document.createEvent('HTMLEvents');
  event.initEvent("input", true, true);
  event.eventType = 'message';
  // 调度事件
  a.dispatchEvent(event);
  
  
  });