/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["D:/blog/public/2020/11/20/PHP/PHP序列化/index.html","d1378862dad13141fe05125668a4e5c0"],["D:/blog/public/2020/11/20/渗透测试/记一次渗透测试/index.html","d0b45f41a312ca956a53f98e6b3a0238"],["D:/blog/public/2020/11/22/靶场/DVWA的high和impossible/index.html","3865658727a3d823856f70a6fb15f07e"],["D:/blog/public/2020/11/28/Python/爆破脚本/index.html","5b00eaf8090ac6bff5573c751e04b770"],["D:/blog/public/2020/12/05/CTF题目/ctfshow-web/index.html","ed823f8a2a518e655d77af0f3153f52a"],["D:/blog/public/2020/12/08/实用技巧/linux/index.html","85633c1ce1e6b150faee97715f599852"],["D:/blog/public/2020/12/08/开发/docker/index.html","499678818fa1315658abb3a7036412b4"],["D:/blog/public/2020/12/08/靶场/sqli-labs/index.html","ec4e06ece7f16dceb912bb29cf8c39d6"],["D:/blog/public/2020/12/09/安全相关/nc/index.html","bf5717d801111f933a4bfcbba7c96093"],["D:/blog/public/2020/12/10/渗透测试/信息搜集/index.html","334c8a70856048f9c88f5b4526dba3f0"],["D:/blog/public/2020/12/13/奇技淫巧/INF/index.html","7b9a37485ff07dc6b1164dc3ca676a59"],["D:/blog/public/2020/12/16/CTF题目/ctfshow-web入门-命令执行/index.html","b49a4448866d71d51f6119f18e8acc93"],["D:/blog/public/2020/12/17/CTF题目/ctfshow-萌新web/index.html","f9de3f339527b6643f6a468e9125a10d"],["D:/blog/public/2020/12/17/命令执行/无字符构造RCE/index.html","00eaa7c7646549d74a046a4ee05705a7"],["D:/blog/public/2020/12/21/CTF题目/ctfshow_web入门-文件包含/index.html","e6bb009dbf9045cd22102be8299cfb59"],["D:/blog/public/2020/12/23/CTF题目/ctfshow-web入门-sql注入/index.html","3d7473b37bd8367a0c03483f3fbfa883"],["D:/blog/public/2020/12/29/安全相关/kali网络攻击/index.html","520b966de3141a01f22ffd7b85748a3d"],["D:/blog/public/2020/12/31/java/java-Dao/index.html","25ebeadd450592d86f415e065b64ea79"],["D:/blog/public/2021/01/03/内网相关/windows提权/index.html","4edb7a4dc4522b32b5bb5139bab25f58"],["D:/blog/public/2021/01/05/安全相关/msf初学/index.html","61149a445caad11443840f31d61ef5bf"],["D:/blog/public/2021/01/05/安全相关/nmap/index.html","f3f3054c6b0d08fbf709fd248d910238"],["D:/blog/public/2021/01/05/开发/GUI编程/index.html","dffd03fd9e4d0e99767a29f58e3b63b4"],["D:/blog/public/2021/01/17/安全相关/centos搭建php环境/index.html","0b465e9d9c7101df23ba9707fbeda116"],["D:/blog/public/2021/01/19/漏洞复现/vulhub搭建/index.html","ce457b00ea8f59a0c08400471d1ce756"],["D:/blog/public/2021/01/20/漏洞复现/phpunit-远程代码执行漏洞-cve-2017-9814/index.html","d4ee819a4a38c5ee689776699ebb718f"],["D:/blog/public/2021/01/22/漏洞复现/php远程代码执行漏洞-cve-2019-11043/index.html","313544b7c8b056c28d60443f9f152085"],["D:/blog/public/2021/01/24/算法题目/A-B和C/index.html","56f94bbf6f892d41f46bbfe42e69513f"],["D:/blog/public/2021/01/26/java/java内存泄露/index.html","ad30ee54496e87e9467c90435b8fef96"],["D:/blog/public/2021/01/27/组件漏洞/容器解析漏洞/index.html","aaa22b80b3252463854757a3163516bb"],["D:/blog/public/2021/02/21/组件漏洞/服务器总结/index.html","55577902bae79478b00d0ac2c2a89906"],["D:/blog/public/2021/03/02/开发/git的基本使用/index.html","643d9498007b0518d4fbd8e124cd4ccf"],["D:/blog/public/2021/03/05/开发/AJAX/index.html","2920ddb853347c2811a7ccf9f31ae29c"],["D:/blog/public/2021/03/06/安全相关/安全设备/index.html","0df5f3c1a969af1adeee042cb04762dc"],["D:/blog/public/2021/03/06/安全相关/蜜罐/index.html","e3127dbb974e5611133e583e631e0fd3"],["D:/blog/public/2021/03/12/内网相关/mysql提权/index.html","f16f4e5ae4f71a9ee1091ad4a9966ece"],["D:/blog/public/2021/03/13/内网相关/linux-suid提权/index.html","1c1543783e46a6360afe3255b8252e44"],["D:/blog/public/2021/03/16/开发/jsp与asp的一些记录/index.html","7744340fb049d843af156d04cfd4dd12"],["D:/blog/public/2021/03/16/漏洞复现/phpcms后台低权限任意命令执行/index.html","6bab639578193403d316372b7c90d6ce"],["D:/blog/public/2021/03/19/靶机/vulnhub-zico2/index.html","0ecc077a84fd6cf69b490c1089445e88"],["D:/blog/public/2021/03/20/安全相关/一句话弹反shell/index.html","7d0a385e78c7591191ed032522071a9a"],["D:/blog/public/2021/03/22/内网相关/linux-脏牛提权/index.html","ab7e72faf0ee10b2dc0a8d4e58d218e4"],["D:/blog/public/2021/03/22/内网相关/烂土豆提权/index.html","66a6ebf4c01f2519176aad57ac12b6a7"],["D:/blog/public/2021/03/23/面试题/青藤云hw面试题/index.html","f1813a67966b72963a888891651a56af"],["D:/blog/public/2021/03/26/命令执行/命令执行与一句话木马/index.html","5dc6d932e23dc72fcad919f54d7d7df4"],["D:/blog/public/2021/03/30/面试题/星澜科技面试题/index.html","c58fae3aabb22387b8538966e98795ea"],["D:/blog/public/2021/04/06/安全相关/APM/index.html","d2e70d10ebe6ed49486a6c442f8dc45a"],["D:/blog/public/2021/04/07/漏洞复现/135端口利用/index.html","55ea49dc26f92afe31ac29bd0890beb3"],["D:/blog/public/2021/04/14/安全相关/21,22,23端口/index.html","63dabe38359d374891780372dc98b9d7"],["D:/blog/public/2021/04/15/实用技巧/使用软链接修改默认启动项/index.html","89c3a4204dec55cae3aaeac7512c4a08"],["D:/blog/public/2021/04/16/实用技巧/linux下删除中文乱码文件/index.html","5436c0caf73dc69e6e154f3268665fcb"],["D:/blog/public/2021/04/17/安全相关/端口复用/index.html","97149cffe7f9a916efcd34d59633f679"],["D:/blog/public/2021/04/18/安全相关/溯源/index.html","3d81cbb9c616df98d4efda6dac65ccd0"],["D:/blog/public/2021/04/19/命令执行/内存马/index.html","3b28c20aba3f9379e934c7a755b09d3f"],["D:/blog/public/2021/04/19/漏洞复现/Webmin未经身份验证的远程代码执行/index.html","e9522d6f46149f2fd172bed603abe292"],["D:/blog/public/2021/04/19/漏洞复现/fckeditor编辑器漏洞/index.html","7d4844677770d8284e5aa10f61449656"],["D:/blog/public/2021/04/19/漏洞复现/uWSGI漏洞复现-CVE-2018-7490/index.html","b6ad2e08f50ae81568a02209a6d89196"],["D:/blog/public/2021/04/20/漏洞复现/飞星鱼-漏洞复现/index.html","f4bf33700db20ea3ffe88757295620ab"],["D:/blog/public/2021/05/04/PHP/thinkphp-5-x/index.html","5a25e1ced3185119b6478043c943da01"],["D:/blog/public/2021/05/04/java/java-agent/index.html","a4c98ef31454bd36564ee42671d4e966"],["D:/blog/public/2021/05/04/java/jvm/index.html","5f154e8039c3852603050d10abb9d72e"],["D:/blog/public/2021/05/07/实用技巧/linux和windows加固/index.html","9ae14ce9fffd6152344d6872d2dfa0d0"],["D:/blog/public/2021/05/09/内网相关/域前置与隐藏C2/index.html","17f579411f7a5ede0100dbad70c1faec"],["D:/blog/public/2021/05/10/奇技淫巧/windows系统那些奇技淫巧/index.html","7483857662316a79387c1683005ca9c2"],["D:/blog/public/2021/05/10/安全相关/linux反弹shell/index.html","347f6e9ec6974c039bc63634a95ecb6f"],["D:/blog/public/2021/06/04/CTF题目/easy-cal/index.html","c8c5341d94625f6fb323263690bc044e"],["D:/blog/public/2021/06/04/SQL注入/SSTI/index.html","beb76179d197d64a09fd480e53429e01"],["D:/blog/public/2021/06/05/文件上传/文件上传/index.html","d9a923edc59e97397f716dfaeb2800e0"],["D:/blog/public/2021/06/07/CTF题目/EasySearch/index.html","d3981b533b0b79cb8844e4d4354c3236"],["D:/blog/public/2021/06/15/CTF题目/Easy-Java/index.html","4e998accfeec8c801b5650255fed608f"],["D:/blog/public/2021/06/15/XSS/CSP绕过思路总结/index.html","ed4a107a12111a5cd053fb302382b8ec"],["D:/blog/public/2021/06/16/CTF题目/AWD/index.html","175b14fa7eba0632898a4eb3683051df"],["D:/blog/public/2021/06/22/实用技巧/linux修改环境变量/index.html","ee0fface1edac5aff6bc22759aa17b1c"],["D:/blog/public/2021/06/23/CTF题目/内存取证/index.html","b0c456beeefb83ecd273eda9b1dc283a"],["D:/blog/public/2021/06/23/Python/python中执行系统命令的四种方法/index.html","b7b5ec86c4c4b09c9dfe3c00551febcf"],["D:/blog/public/2021/06/23/Python/python简单用法/index.html","1587a3a13a0f6493f4930351d825ec62"],["D:/blog/public/2021/06/23/安全相关/wireshark的简单使用/index.html","a379d3d2f3d84befcbdf2d2ac065419c"],["D:/blog/public/2021/06/23/实用技巧/pip-not-found/index.html","5cca1331610b2c224af27e2ffe9dc817"],["D:/blog/public/2021/06/23/漏洞复现/struts2框架漏洞复现/index.html","b143f0fab884c57fb64a39d032300661"],["D:/blog/public/2021/06/24/SQL注入/报错注入/index.html","07548ffe12ab9b5bc15de035da6e4bd2"],["D:/blog/public/2021/06/24/命令执行/命令执行无回显/index.html","eedfc8974681d3c0f3141c65acab29e3"],["D:/blog/public/2021/06/24/实用技巧/linux和windows下载文件/index.html","11021c2214ae921e174da45a5705f850"],["D:/blog/public/2021/06/24/实用技巧/linux添加别名-alias/index.html","f93cad721388565976a0077d709b4c42"],["D:/blog/public/2021/06/30/java/java-servlet/index.html","6d19b1a586795caa0b1e2ae860242154"],["D:/blog/public/2021/07/05/API安全/API简单协议/index.html","0b76e5090307d3663df01bf9f9957d80"],["D:/blog/public/2021/07/05/API安全/RPC与gRPC/index.html","697265044e87ae4abc80c6b61e64a8e3"],["D:/blog/public/2021/07/05/漏洞复现/IIS-input/index.html","f4a60b1f3e4c18d719fece7642b9c2f5"],["D:/blog/public/2021/07/07/API安全/GraphQL/index.html","48bd4e376780ba27f481acfc6fc6e007"],["D:/blog/public/2021/07/07/漏洞复现/Apache-Dubbo-反序列化漏洞/index.html","65e53004af30f990dc625156012f8c68"],["D:/blog/public/2021/07/31/PHP/关于php中exit函数绕过的问题/index.html","fbe6b01c8025e25bde58d4b9efcdef9a"],["D:/blog/public/2021/07/31/SQL注入/预编译/index.html","b90f23148d79c0d7f8d0fa16e6f4b173"],["D:/blog/public/2021/07/31/XSS/三种xss的区别/index.html","0d104e1969a0f68185be098d4aeb41af"],["D:/blog/public/2021/07/31/hello-world/index.html","79312262ac7015ba9f488d4d0731a3fd"],["D:/blog/public/2021/07/31/安全相关/Cookie/index.html","c0fb17826f2159ca7b682a158b9d3322"],["D:/blog/public/2021/07/31/安全相关/LDAP/index.html","1318aaf335d6f80a25681ad6464c5919"],["D:/blog/public/2021/07/31/开发/SQL与ORM/index.html","c0d177fb337a02884255ae94eef60c6d"],["D:/blog/public/2021/07/31/开发/jsonp/index.html","f5efb3cb28d6a2955ac522c98b57bc0e"],["D:/blog/public/404.html","c4efa3be1b8630e4e359efb7337509a9"],["D:/blog/public/archives/2020/11/index.html","3a553698accee5846967b46fc22f8fbc"],["D:/blog/public/archives/2020/12/index.html","690bc2cee4aadb902fb50f1ba5078cb4"],["D:/blog/public/archives/2020/index.html","94a8f2cdb9b3b2ef2e400e4ec53e5186"],["D:/blog/public/archives/2021/01/index.html","d85114fa2ebe49708104254b17da06f2"],["D:/blog/public/archives/2021/02/index.html","565d8e12bb1e4158ab9158bdceb0b1e1"],["D:/blog/public/archives/2021/03/index.html","7481362557d9304e0ea8094c69df98f4"],["D:/blog/public/archives/2021/04/index.html","435f4b9848e0aa70aec2cdc10e86de52"],["D:/blog/public/archives/2021/05/index.html","d33d2017db0357854eecb005929c32e3"],["D:/blog/public/archives/2021/06/index.html","449f7ab2635f7c577d8407d118d72187"],["D:/blog/public/archives/2021/06/page/2/index.html","39bfc0f6cbd4f489b2d2a501f9fc209f"],["D:/blog/public/archives/2021/07/index.html","0c7bdd160cfff826ea8739e0fb11d592"],["D:/blog/public/archives/2021/index.html","a955a33fecb85ff66f64eb740fa66714"],["D:/blog/public/archives/2021/page/2/index.html","a6f1bf12048ab16f0bc52ddd3ef50129"],["D:/blog/public/archives/2021/page/3/index.html","15eea8742eff5b7578784d05008ee5d0"],["D:/blog/public/archives/2021/page/4/index.html","e95f274073bd1ee0d1013f2c72e0cfdf"],["D:/blog/public/archives/2021/page/5/index.html","f17d12e0a590cf940da1577de420f78f"],["D:/blog/public/archives/index.html","4b093653bb9a0d6a6af356fb5cadb077"],["D:/blog/public/archives/page/2/index.html","298d9e31fd27174c1eb4b2c6e93d6b5b"],["D:/blog/public/archives/page/3/index.html","ee04f5c48ac8531c85adea03e6586154"],["D:/blog/public/archives/page/4/index.html","de337d8681170d735acf6c97c9ab9caf"],["D:/blog/public/archives/page/5/index.html","8c1ef49adeecac8d2f3d97c239b9e7f4"],["D:/blog/public/archives/page/6/index.html","96b2129240a5793145cd49fadbb5c574"],["D:/blog/public/categories/API安全/index.html","7cb08f22a566dbb8bf6f7ee3b31e36aa"],["D:/blog/public/categories/API研究/index.html","110b8385790609fe2095fd9f222915ba"],["D:/blog/public/categories/CTF/index.html","d3ac01baa423755b4e2818aa5c790fba"],["D:/blog/public/categories/Kali/index.html","033f66658d163bd3801fa6413c6e381e"],["D:/blog/public/categories/SQL注入/index.html","d6ceda0b01f1a6ba8432447a611c1957"],["D:/blog/public/categories/XSS/index.html","c12d4ce60781b027460cbae5183100b7"],["D:/blog/public/categories/index.html","a660f3afcecbf76fe0b83b27ee9672f5"],["D:/blog/public/categories/java/index.html","e8acb1a869e87d92c4606b197ce9e53d"],["D:/blog/public/categories/linux/index.html","0f90ca582c32a8ad79f9ccba8bfc4bba"],["D:/blog/public/categories/python/index.html","b6ad63b1b681be6afb4cea2202051779"],["D:/blog/public/categories/命令执行/index.html","ae94fa4aed2736b9dc693b3e92b2cd8e"],["D:/blog/public/categories/奇技淫巧/index.html","4dd88afcf4b0a0539097d8a5ecfb9340"],["D:/blog/public/categories/安全相关/index.html","dc3a775efe5b3ef0d716b9309d95c1d2"],["D:/blog/public/categories/工具/index.html","e6420298bf57a3e86442206d0ba94145"],["D:/blog/public/categories/开发/index.html","a8d6f4b5f99fc9bcbfdfca0b0ea7f995"],["D:/blog/public/categories/攻防对抗/index.html","9aa5a43e344300bd445876e25387c623"],["D:/blog/public/categories/渗透测试/index.html","8c09bd0eada3bf33ed40c10caab87648"],["D:/blog/public/categories/漏洞复现/index.html","23bf4a345a3539eb63b69f1457e364e3"],["D:/blog/public/categories/笔记/index.html","c35c2e8376cc5a53431d3ab5b54de52b"],["D:/blog/public/categories/笔记/page/2/index.html","7de41924a07ebfbf0195e08d6c0cc2fa"],["D:/blog/public/categories/编程/index.html","55633d76b8be2801279d3291b7de9d10"],["D:/blog/public/categories/脚本编写/index.html","82bb707fa939ffa66c633fcf9a42bc31"],["D:/blog/public/categories/面试题/index.html","fff0a2f0e3c4f9ad6bb4688fd7de38b0"],["D:/blog/public/categories/靶场/index.html","24916ead96ff2633e7913e04f4961e6b"],["D:/blog/public/css/index.css","4ba0f40f4be1a5a0a2784e9e1bcf667d"],["D:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/public/img/1.jpg","567b4c69c65374f3c556a6e8d5482233"],["D:/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/blog/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["D:/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/blog/public/index.html","3fc474b864893a405bbaaea4a287ecba"],["D:/blog/public/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["D:/blog/public/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["D:/blog/public/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["D:/blog/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["D:/blog/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["D:/blog/public/link/index.html","5ed522ec005036a0bbca75e6e009c40d"],["D:/blog/public/page/2/index.html","1322d4df41811b83dddc8616ca8d7515"],["D:/blog/public/page/3/index.html","760519a28335f723342da0c3e2ccb3d7"],["D:/blog/public/page/4/index.html","97acc6920e406d6ba2e268c7b63fb8e7"],["D:/blog/public/page/5/index.html","f7a097a4b1527c4ff4316df30bf49169"],["D:/blog/public/page/6/index.html","a0b53716bb4bc787bcd2d12a575ccd65"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







