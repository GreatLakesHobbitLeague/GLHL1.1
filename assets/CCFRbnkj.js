import{r as c,q as T,A as _,o as s,c as l,a as t,F as v,s as I,t as a,C as z,b,w as k,u as w,T as y,v as $,B as J,y as R}from"./D0gD1ce6.js";import{c as Z}from"./BDNBXTTe.js";const O={key:0},L=t("div",{class:"flex sticky top-0 text-xs xs:text-lg font-Cinzel font-bold text-center bg-cover bg-[url(/public\\images\\textures/glhl_gold.webp)] p-2 shadow-md shadow-black rounded-b-md"},[t("p",{class:"w-[25%]"}),t("p",{class:"w-[75%] text-left"},"Artisans of Legend")],-1),S={class:"w-[50%] font-bold text-lg font-Cinzel"},j={class:"w-[50%] text-center"},H=t("div",{class:"sticky top-0 flex text-xs xs:text-lg font-Cinzel font-bold text-center bg-center bg-cover bg-[url(/public\\images\\textures/glhl_silver.webp)] p-2 shadow-md shadow-black rounded-b-md"},[t("p",{class:"w-[25%]"}),t("p",{class:"w-[75%] text-left"},"Artisans of Valour")],-1),M={class:"w-[50%] font-bold text-lg font-Cinzel"},D={class:"w-full"},F={class:"w-[50%] text-center"},X=t("div",{class:"flex sticky top-0 text-xs xs:text-lg font-Cinzel font-bold text-center bg-center bg-cover bg-[url(/public\\images\\textures/glhl_bronze.webp)] p-2 shadow-md shadow-black rounded-b-md"},[t("p",{class:"w-[25%]"}),t("p",{class:"w-[75%] text-left"},"Artisans of Fortitude"),t("p",{class:""})],-1),A={class:"w-[50%] font-bold text-lg font-Cinzel"},P={class:"w-full"},B={class:"w-[50%] text-center"},U={key:0,class:"h-10 bottom-0 opacity-85 left-0 z-40 absolute rounded-b-lg w-full bg-gradient-to-b from-transparent to-glhl-dark-gray"},Y="https://ienwmfvepudsgvruuuwh.supabase.co",Q="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImllbndtZnZlcHVkc2d2cnV1dXdoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNTExOTU3NywiZXhwIjoyMDMwNjk1NTc3fQ.jkuPHQfGZ-iKvyCEJuRLxCVCzvcnikSt-E19526AOZY",G={__name:"artisan",setup(E){const m=Z(Y,Q),r=c([]),d=c([]),g=c([]),x=c(!1),u=c(null),p=c(!1);T(async()=>{try{x.value=!0;const{data:o,error:i}=await m.from("artisansOfLegend").select("*");if(i)throw new Error(i.message);r.value=o;const{data:e,error:n}=await m.from("artisansOfValour").select("*");if(n)throw new Error(n.message);d.value=e;const{data:N,error:C}=await m.from("artisansOfFortitude").select("*");if(C)throw new Error(C.message);g.value=N}catch(o){console.error("Error fetching data:",o.message),u.value="Failed to fetch data"}finally{x.value=!1}});const h=()=>{const o=f.value,i=o.scrollTop,e=o.scrollHeight,n=o.clientHeight;p.value=i+n>=e},f=c(null);return(o,i)=>_(x)?w("",!0):(s(),l("div",O,[t("div",{ref_key:"scrollContainerRef",ref:f,onScroll:h,class:"bg-white rounded-b-md flex flex-col gap-1 h-96 overflow-y-scroll relative"},[L,(s(!0),l(v,null,I(_(r),(e,n)=>(s(),l("div",{key:n,class:"flex w-full text-left items-center even:bg-glhl-light-gray px-2"},[t("p",S,a(e.Rank),1),t("p",{class:z(["w-full",e.Qualified?"font-semibold":"text-glhl-dark-gray"])},a(e.Name),3),t("p",j,a(e.TotalPoints),1)]))),128)),H,(s(!0),l(v,null,I(_(d),(e,n)=>(s(),l("div",{key:n,class:"flex w-full text-left items-center even:bg-glhl-light-gray px-2"},[t("p",M,a(e.Rank),1),t("p",D,a(e.Name),1),t("p",F,a(e.TotalPoints),1)]))),128)),X,(s(!0),l(v,null,I(_(g),(e,n)=>(s(),l("div",{key:n,class:"flex w-full text-left items-center even:bg-glhl-light-gray px-2"},[t("p",A,a(e.Rank),1),t("p",P,a(e.Name),1),t("p",B,a(e.TotalPoints),1)]))),128))],544),b(y,{name:"fade"},{default:k(()=>[_(p)?w("",!0):(s(),l("div",U))]),_:1})]))}},K=G,q={key:0},W=t("div",{class:"flex sticky top-0 text-xs xs:text-lg font-Cinzel font-bold text-center bg-cover bg-[url(/public\\images\\textures/glhl_gold.webp)] p-2 shadow-md shadow-black rounded-b-md"},[t("p",{class:"w-[25%]"}),t("p",{class:"w-[75%] text-left"},"Tacticians of Legend")],-1),tt={class:"w-[50%] font-bold text-lg font-Cinzel"},et={class:"w-[50%] text-center"},st=t("div",{class:"sticky top-0 flex text-xs xs:text-lg font-Cinzel font-bold text-center bg-center bg-cover bg-[url(/public\\images\\textures/glhl_silver.webp)] p-2 shadow-md shadow-black rounded-b-md"},[t("p",{class:"w-[25%]"}),t("p",{class:"w-[75%] text-left"},"Tacticians of Valour")],-1),lt={class:"w-[50%] font-bold text-lg font-Cinzel"},at={class:"w-full"},ot={class:"w-[50%] text-center"},nt=t("div",{class:"flex sticky top-0 text-xs xs:text-lg font-Cinzel font-bold text-center bg-center bg-cover bg-[url(/public\\images\\textures/glhl_bronze.webp)] p-2 shadow-md shadow-black rounded-b-md"},[t("p",{class:"w-[25%]"}),t("p",{class:"w-[75%] text-left"},"Tacticians of Fortitude"),t("p",{class:""})],-1),ct={class:"w-[50%] font-bold text-lg font-Cinzel"},it={class:"w-full"},rt={class:"w-[50%] text-center"},dt={key:0,class:"h-10 bottom-0 opacity-85 left-0 z-40 absolute rounded-b-lg w-full bg-gradient-to-b from-transparent to-glhl-dark-gray"},ut="https://ienwmfvepudsgvruuuwh.supabase.co",ft="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImllbndtZnZlcHVkc2d2cnV1dXdoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNTExOTU3NywiZXhwIjoyMDMwNjk1NTc3fQ.jkuPHQfGZ-iKvyCEJuRLxCVCzvcnikSt-E19526AOZY",gt={__name:"tactician",setup(E){const m=Z(ut,ft),r=c([]),d=c([]),g=c([]),x=c(!1),u=c(null),p=c(!1);T(async()=>{try{x.value=!0;const{data:o,error:i}=await m.from("tacticiansOfLegend").select("*");if(i)throw new Error(i.message);r.value=o;const{data:e,error:n}=await m.from("tacticiansOfValour").select("*");if(n)throw new Error(n.message);d.value=e;const{data:N,error:C}=await m.from("tacticiansOfFortitude").select("*");if(C)throw new Error(C.message);g.value=N}catch(o){console.error("Error fetching data:",o.message),u.value="Failed to fetch data"}finally{x.value=!1}});const h=()=>{const o=f.value,i=o.scrollTop,e=o.scrollHeight,n=o.clientHeight;p.value=i+n>=e},f=c(null);return(o,i)=>_(x)?w("",!0):(s(),l("div",q,[t("div",{ref_key:"scrollContainerRef",ref:f,onScroll:h,class:"bg-white rounded-b-md flex flex-col gap-1 h-96 overflow-y-scroll relative"},[W,(s(!0),l(v,null,I(_(r),(e,n)=>(s(),l("div",{key:n,class:"flex w-full text-left items-center even:bg-glhl-light-gray px-2"},[t("p",tt,a(e.Rank),1),t("p",{class:z(["w-full",e.Qualified?"font-semibold":"text-glhl-dark-gray"])},a(e.Name),3),t("p",et,a(e.TotalPoints),1)]))),128)),st,(s(!0),l(v,null,I(_(d),(e,n)=>(s(),l("div",{key:n,class:"flex w-full text-left items-center even:bg-glhl-light-gray px-2"},[t("p",lt,a(e.Rank),1),t("p",at,a(e.Name),1),t("p",ot,a(e.TotalPoints),1)]))),128)),nt,(s(!0),l(v,null,I(_(g),(e,n)=>(s(),l("div",{key:n,class:"flex w-full text-left items-center even:bg-glhl-light-gray px-2"},[t("p",ct,a(e.Rank),1),t("p",it,a(e.Name),1),t("p",rt,a(e.TotalPoints),1)]))),128))],544),b(y,{name:"fade"},{default:k(()=>[_(p)?w("",!0):(s(),l("div",dt))]),_:1})]))}},ht=gt,V=$("/images/mesbg-silhouettes/Legolas.png"),mt=$("/images/rankings/glhl_silver.png"),_t=$("/images/rankings/glhl_legend.png"),xt=$("/images/rankings/glhl_bronze.png"),pt=J('<div class="mt-20 sm:mt-32 md:mt-52"></div><div class="bg-[url(/public\\images\\cinematics\\hero_desktop.webp)] bg-center bg-cover shadow-lg shadow-black"><div class="bg-black bg-opacity-85 text-white flex justify-center mb-10"><div class="my-auto flex flex-col"><p class="text-6xl font-Ringbearer justify-center py-10">Rankings</p></div></div></div>',2),wt={class:"pb-20 flex justify-center items-center"},vt=t("div",null,[t("img",{src:V,alt:"legolas knives",class:"-rotate-45 opacity-10 w-full hidden lg:flex"})],-1),bt={class:"flex flex-col gap-8 sm:max-w-[600px] w-full"},kt={class:"flex justify-center items-baseline gap-8 relative font-Ringbearer px-4"},yt={class:"justify-center text-center flex flex-col gap-2 z-10"},It=t("img",{src:mt,alt:"silver medal",class:"w-28 rounded-full mx-auto shadow-md shadow-black"},null,-1),Ct={key:0},zt={key:0},$t={key:1},Nt={class:"justify-center text-center flex flex-col gap-2 z-10"},Tt=t("img",{src:_t,alt:"gold medal",class:"w-52 mx-auto"},null,-1),Zt={key:0},Et={key:0},Rt={key:1},Vt={class:"justify-center text-center flex flex-col gap-2 z-10"},Jt=t("img",{src:xt,alt:"bronze medal",class:"w-28 rounded-full mx-auto shadow-md shadow-black"},null,-1),Ot={key:0},Lt={key:0},St={key:1},jt={class:"mx-auto w-full flex flex-col px-2"},Ht={class:"flex justify-between"},Mt=t("p",{class:"my-auto font-Ringbearer text-sm xs:text-xl"}," current standings ",-1),Dt={class:"flex gap-1 mr-2"},Ft=t("div",{class:"flex bg-glhl-red-400 text-sm sm:text-base rounded-t-md font-Cinzel italic z-10 text-white items-center p-2 text-left"},[t("p",{class:"w-full"},"Rank"),t("p",{class:"w-full"},"Player"),t("p",{class:"w-[50%]"},"Total Points")],-1),Xt={class:"container relative min-w-full min-h-96 bg-gradient-to-t to-glhl-red-400 from-glhl-red-100 rounded-b-md"},At={class:"m-0.5"},Pt=t("div",null,[t("img",{src:V,alt:"legolas knives",class:"rotate-45 scale-x-[-1] opacity-10 w-full hidden lg:flex"})],-1),Bt="https://ienwmfvepudsgvruuuwh.supabase.co",Ut="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImllbndtZnZlcHVkc2d2cnV1dXdoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNTExOTU3NywiZXhwIjoyMDMwNjk1NTc3fQ.jkuPHQfGZ-iKvyCEJuRLxCVCzvcnikSt-E19526AOZY",Gt={__name:"rankings",setup(E){const m=Z(Bt,Ut),r=c([]),d=c([]),g=c(!1),x=c(null);T(async()=>{try{g.value=!0;const{data:h,error:f}=await m.from("artisansOfLegend").select("*");if(f)throw new Error(f.message);r.value=h;const{data:o,error:i}=await m.from("tacticiansOfLegend").select("*");if(i)throw new Error(i.message);d.value=o}catch(h){console.error("Error fetching data:",h.message),x.value="Failed to fetch data"}finally{g.value=!1}});const u=c("tactician"),p=h=>{h==="tactician"?u.value="artisan":h==="artisan"&&(u.value="tactician")};return(h,f)=>{const o=K,i=ht;return s(),l(v,null,[pt,t("section",wt,[vt,t("div",bt,[t("section",kt,[t("div",yt,[It,g.value?w("",!0):(s(),l("div",Ct,[b(y,{name:"slide-in",mode:"out-in"},{default:k(()=>[u.value==="tactician"?(s(),l("p",zt,a(d.value.length>0?d.value[1].Name:"Loading..."),1)):(s(),l("p",$t,a(r.value.length>0?r.value[1].Name:"Loading..."),1))]),_:1})]))]),t("div",Nt,[Tt,g.value?w("",!0):(s(),l("div",Zt,[b(y,{name:"slide-in",mode:"out-in"},{default:k(()=>[u.value==="tactician"?(s(),l("p",Et,a(d.value.length>0?d.value[0].Name:"Loading..."),1)):(s(),l("p",Rt,a(r.value.length>0?r.value[0].Name:"Loading..."),1))]),_:1})]))]),t("div",Vt,[Jt,g.value?w("",!0):(s(),l("div",Ot,[b(y,{name:"slide-in",mode:"out-in"},{default:k(()=>[u.value==="tactician"?(s(),l("p",Lt,a(d.value.length>0?d.value[2].Name:"Loading..."),1)):(s(),l("p",St,a(r.value.length>0?r.value[2].Name:"Loading..."),1))]),_:1})]))])]),t("div",jt,[t("div",Ht,[Mt,t("div",Dt,[t("button",{onClick:f[0]||(f[0]=e=>p("artisan")),class:z(["w-20 sm:w-28 text-xs sm:text-base bg-gradient-to-t hover:scale-105 hover:to-glhl-red-200 from-glhl-red-400 to bg-glhl-red-100 rounded-t-md sm:px-2 p-1.5 text-white font-Ringbearer",u.value==="tactician"?" shadow-black shadow-lg ":" opacity-80"])}," Tactician ",2),t("button",{onClick:f[1]||(f[1]=e=>p("tactician")),class:z(["w-20 sm:w-28 bg-gradient-to-t text-xs sm:text-base rounded-t-md hover:scale-105 hover:to-glhl-red-200 from-glhl-red-400 to bg-glhl-red-100 sm:px-2 p-1 text-white font-Ringbearer",u.value==="artisan"?"shadow-black shadow-lg  ":"opacity-80"])}," Artisan ",2)])]),Ft,t("div",Xt,[t("div",At,[b(y,{name:"slide-in",mode:"out-in"},{default:k(()=>[u.value==="artisan"?(s(),R(o,{key:0,class:"w-full"})):u.value==="tactician"?(s(),R(i,{key:1,class:"w-full"})):w("",!0)]),_:1})])])])]),Pt])],64)}}};export{Gt as default};