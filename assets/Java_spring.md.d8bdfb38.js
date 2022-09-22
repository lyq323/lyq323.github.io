import{_ as s,c as n,o as a,a as e}from"./app.3756c945.js";const A=JSON.parse('{"title":"Spring","description":"","frontmatter":{},"headers":[{"level":3,"title":"maven\u6587\u4EF6\u7684\u683C\u5F0F","slug":"maven\u6587\u4EF6\u7684\u683C\u5F0F","link":"#maven\u6587\u4EF6\u7684\u683C\u5F0F","children":[]}],"relativePath":"Java/spring.md"}'),t={name:"Java/spring.md"},l=e(`<h1 id="spring" tabindex="-1">Spring <a class="header-anchor" href="#spring" aria-hidden="true">#</a></h1><div class="info custom-block"><p class="custom-block-title">INFO</p><ol><li>\u5F00\u6E90\u514D\u8D39\u7684\u5BB9\u5668/\u6846\u67B6</li><li>\u8F7B\u91CF\u7EA7\u975E\u5165\u4FB5\u5F0F</li><li>\u63A7\u5236\u53CD\u8F6C\uFF08IOC\uFF09</li><li>\u9762\u5411\u5207\u9762\u7F16\u7A0B(AOP)</li><li>\u652F\u6301\u4E8B\u52A1</li></ol></div><p>\u6700\u91CD\u8981\u7684maven\u5305,\u4F7F\u7528\u6700\u65B0\u7248\u672C\u70B9\u51FB\u8FDB\u53BB\u590D\u5236</p><blockquote><p><a href="https://mvnrepository.com/search?q=spring" target="_blank" rel="noreferrer">https://mvnrepository.com/search?q=spring</a></p></blockquote><ul><li>1\u3001Spring Web MVC</li><li>2\u3001Spring JDBC</li></ul><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- https://mvnrepository.com/artifact/org.springframework/spring-webmvc --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;groupId&gt;org.springframework&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;artifactId&gt;spring-webmvc&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;version&gt;5.3.23&lt;/version&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- https://mvnrepository.com/artifact/org.springframework/spring-jdbc --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;groupId&gt;org.springframework&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;artifactId&gt;spring-jdbc&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;version&gt;5.3.23&lt;/version&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="maven\u6587\u4EF6\u7684\u683C\u5F0F" tabindex="-1">maven\u6587\u4EF6\u7684\u683C\u5F0F <a class="header-anchor" href="#maven\u6587\u4EF6\u7684\u683C\u5F0F" aria-hidden="true">#</a></h3><p>pom.xml \u662F Maven \u7684\u6838\u5FC3\u914D\u7F6E\u6587\u4EF6\uFF0C\u4E00\u4E2A Maven \u9879\u76EE\u6709\u4E14\u53EA\u6709\u4E00\u4E2A pom.xml \u6587\u4EF6\uFF0C\u5FC5\u987B\u5728\u9879\u76EE\u7684\u6839\u76EE\u5F55\u4E0B</p>`,8),p=[l];function r(o,i,c,g,d,m){return a(),n("div",null,p)}const v=s(t,[["render",r]]);export{A as __pageData,v as default};