import{_ as r}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-DjTxLwqa.js";import{o as p,c as d,k as t,l as a,m as e,q as g,s as c,z as l,e as i,A as s}from"./modules/vue-DA_U2QyW.js";import{_ as y}from"./slidev/default-with-footer-DMhDQxJ7.js";import{u as o,f as D}from"./slidev/context--brUxisk.js";import"./modules/unplugin-icons-C3nPvzff.js";import"./index-gbvkemB6.js";import"./modules/shiki-Bn9P-Gxk.js";const A=i("h2",null,"Verify - Custom Scrubbers",-1),B=i("p",null,[i("a",{href:"https://github.com/VerifyTests/Verify/blob/main/docs/scrubbers.md",target:"_blank"},"https://github.com/VerifyTests/Verify/blob/main/docs/scrubbers.md")],-1),f=i("ul",null,[i("li",null,[s("Example when generating SVGs using "),i("a",{href:"https://plotly.net/",target:"_blank"},"Plotly.NET"),s(": Scrub all lines containing "),i("code",null,"#clip"),s(" followed by a word character")]),i("li",null,[i("code",null,"ScrubLinesWithReplace"),s(" and friends")])],-1),u=i("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[i("code",{class:"language-fsharp"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"// F#")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"let"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," settings"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}}," ="),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," VerifySettings "),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"()")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"settings.ScrubLinesWithReplace "),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"(fun"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," line "),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"->")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"    System.Text.RegularExpressions.Regex.Replace"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"("),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"line"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},","),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},' "'),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"#clip"),i("span",{style:{"--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic","--shiki-light":"#B31D28","--shiki-light-font-style":"italic"}},"\\w"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"+"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},","),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},' "'),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"#clipSCRUBBED"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"))")])])],-1),m=i("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[i("code",{class:"language-csharp"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"// C# (unverified)")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"var"),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," settings"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," new"),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," VerifySettings"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"();")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"settings"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"ScrubLinesWithReplace"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"line"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," =>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"    System"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"Text"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"RegularExpressions"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"Regex"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"Replace"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"line"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},' "'),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"#clip"),i("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}},"\\\\"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"w+"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},' "'),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"#clipSCRUBBED"),i("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"));")])])],-1),W={__name:"slides.md__slidev_20",setup(_){const{$slidev:C,$nav:E,$clicksContext:k,$clicks:b,$page:x,$renderContext:S,$frontmatter:n}=o();return k.setup(),(v,F)=>{const h=r;return p(),d(y,g(c(l(D)(l(n),19))),{default:t(()=>[A,B,f,a(h,e({},{ranges:[]}),{default:t(()=>[u]),_:1},16),a(h,e({},{ranges:[]}),{default:t(()=>[m]),_:1},16)]),_:1},16)}}};export{W as default};
