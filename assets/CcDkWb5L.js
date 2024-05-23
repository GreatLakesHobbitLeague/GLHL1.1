import{r as i,q as Z,A as h,o as s,c as l,a as t,F as k,s as I,t as n,D as p,b,w as v,u as _,T as w,v as T,d as $,C as O,y as V}from"./q4o2PvI0.js";import{c as E}from"./CPnbwep2.js";const L={key:0},S=t("div",{class:"flex sticky top-0 text-xs xs:text-lg font-Cinzel font-bold text-center bg-cover bg-[url(/public\\images\\textures/glhl_gold.webp)] p-2 shadow-md shadow-black rounded-b-md"},[t("p",{class:"w-[25%]"}),t("p",{class:"w-[75%] text-left"},"Artisans of Legend")],-1),j={class:"w-[50%] font-bold text-lg font-Cinzel"},H={class:"w-[50%] text-center"},D=t("div",{class:"sticky top-0 flex text-xs xs:text-lg font-Cinzel font-bold text-center bg-center bg-cover bg-[url(/public\\images\\textures/glhl_silver.webp)] p-2 shadow-md shadow-black rounded-b-md"},[t("p",{class:"w-[25%]"}),t("p",{class:"w-[75%] text-left"},"Artisans of Valour")],-1),M={class:"w-[50%] font-bold text-lg font-Cinzel"},F={class:"w-[50%] text-center"},Q=t("div",{class:"flex sticky top-0 text-xs xs:text-lg font-Cinzel font-bold text-center bg-center bg-cover bg-[url(/public\\images\\textures/glhl_bronze.webp)] p-2 shadow-md shadow-black rounded-b-md"},[t("p",{class:"w-[25%]"}),t("p",{class:"w-[75%] text-left"},"Artisans of Fortitude"),t("p",{class:""})],-1),X={class:"w-[50%] font-bold text-lg font-Cinzel"},A={class:"w-[50%] text-center"},P={key:0,class:"h-10 bottom-0 opacity-85 left-0 z-40 absolute rounded-b-lg w-full bg-gradient-to-b from-transparent to-glhl-dark-gray"},B="https://ienwmfvepudsgvruuuwh.supabase.co",U="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImllbndtZnZlcHVkc2d2cnV1dXdoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNTExOTU3NywiZXhwIjoyMDMwNjk1NTc3fQ.jkuPHQfGZ-iKvyCEJuRLxCVCzvcnikSt-E19526AOZY",Y={__name:"artisan",setup(R){const g=E(B,U),d=i([]),u=i([]),m=i([]),f=i(!1),C=i(null),r=i(!1);Z(async()=>{try{f.value=!0;const{data:o,error:c}=await g.from("artisansOfLegend").select("*");if(c)throw new Error(c.message);d.value=o;const{data:e,error:a}=await g.from("artisansOfValour").select("*");if(a)throw new Error(a.message);u.value=e;const{data:z,error:N}=await g.from("artisansOfFortitude").select("*");if(N)throw new Error(N.message);m.value=z}catch(o){console.error("Error fetching data:",o.message),C.value="Failed to fetch data"}finally{f.value=!1}});const y=()=>{const o=x.value,c=o.scrollTop,e=o.scrollHeight,a=o.clientHeight;r.value=c+a>=e},x=i(null);return(o,c)=>h(f)?_("",!0):(s(),l("div",L,[t("div",{ref_key:"scrollContainerRef",ref:x,onScroll:y,class:"bg-white rounded-b-md flex flex-col gap-1 h-96 overflow-y-scroll relative"},[S,(s(!0),l(k,null,I(h(d),(e,a)=>(s(),l("div",{key:a,class:"flex w-full text-left items-center even:bg-glhl-light-gray px-2"},[t("p",j,n(e.Rank),1),t("p",{class:p(["w-full",e.Qualified?"font-semibold":" font-light"])},n(e.Name),3),t("p",H,n(e.TotalPoints),1)]))),128)),D,(s(!0),l(k,null,I(h(u),(e,a)=>(s(),l("div",{key:a,class:"flex w-full text-left items-center even:bg-glhl-light-gray px-2"},[t("p",M,n(e.Rank),1),t("p",{class:p(["w-full",e.Qualified?"font-semibold":" font-light"])},n(e.Name),3),t("p",F,n(e.TotalPoints),1)]))),128)),Q,(s(!0),l(k,null,I(h(m),(e,a)=>(s(),l("div",{key:a,class:"flex w-full text-left items-center even:bg-glhl-light-gray px-2"},[t("p",X,n(e.Rank),1),t("p",{class:p(["w-full",e.Qualified?"font-semibold":" font-light"])},n(e.Name),3),t("p",A,n(e.TotalPoints),1)]))),128))],544),b(w,{name:"fade"},{default:v(()=>[h(r)?_("",!0):(s(),l("div",P))]),_:1})]))}},G=Y,K={key:0},q=t("div",{class:"flex sticky top-0 text-xs xs:text-lg font-Cinzel font-bold text-center bg-cover bg-[url(/public\\images\\textures/glhl_gold.webp)] p-2 shadow-md shadow-black rounded-b-md"},[t("p",{class:"w-[25%]"}),t("p",{class:"w-[75%] text-left"},"Tacticians of Legend")],-1),W={class:"w-[50%] font-bold text-lg font-Cinzel"},tt={class:"w-[50%] text-center"},et=t("div",{class:"sticky top-0 flex text-xs xs:text-lg font-Cinzel font-bold text-center bg-center bg-cover bg-[url(/public\\images\\textures/glhl_silver.webp)] p-2 shadow-md shadow-black rounded-b-md"},[t("p",{class:"w-[25%]"}),t("p",{class:"w-[75%] text-left"},"Tacticians of Valour")],-1),st={class:"w-[50%] font-bold text-lg font-Cinzel"},lt={class:"w-[50%] text-center"},at=t("div",{class:"flex sticky top-0 text-xs xs:text-lg font-Cinzel font-bold text-center bg-center bg-cover bg-[url(/public\\images\\textures/glhl_bronze.webp)] p-2 shadow-md shadow-black rounded-b-md"},[t("p",{class:"w-[25%]"}),t("p",{class:"w-[75%] text-left"},"Tacticians of Fortitude"),t("p",{class:""})],-1),ot={class:"w-[50%] font-bold text-lg font-Cinzel"},nt={class:"w-[50%] text-center"},it={key:0,class:"h-10 bottom-0 opacity-85 left-0 z-40 absolute rounded-b-lg w-full bg-gradient-to-b from-transparent to-glhl-dark-gray"},ct="https://ienwmfvepudsgvruuuwh.supabase.co",rt="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImllbndtZnZlcHVkc2d2cnV1dXdoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNTExOTU3NywiZXhwIjoyMDMwNjk1NTc3fQ.jkuPHQfGZ-iKvyCEJuRLxCVCzvcnikSt-E19526AOZY",dt={__name:"tactician",setup(R){const g=E(ct,rt),d=i([]),u=i([]),m=i([]),f=i(!1),C=i(null),r=i(!1);Z(async()=>{try{f.value=!0;const{data:o,error:c}=await g.from("tacticiansOfLegend").select("*");if(c)throw new Error(c.message);d.value=o;const{data:e,error:a}=await g.from("tacticiansOfValour").select("*");if(a)throw new Error(a.message);u.value=e;const{data:z,error:N}=await g.from("tacticiansOfFortitude").select("*");if(N)throw new Error(N.message);m.value=z}catch(o){console.error("Error fetching data:",o.message),C.value="Failed to fetch data"}finally{f.value=!1}});const y=()=>{const o=x.value,c=o.scrollTop,e=o.scrollHeight,a=o.clientHeight;r.value=c+a>=e},x=i(null);return(o,c)=>h(f)?_("",!0):(s(),l("div",K,[t("div",{ref_key:"scrollContainerRef",ref:x,onScroll:y,class:"bg-white rounded-b-md flex flex-col gap-1 h-96 overflow-y-scroll relative"},[q,(s(!0),l(k,null,I(h(d),(e,a)=>(s(),l("div",{key:a,class:"flex w-full text-left items-center even:bg-glhl-light-gray px-2"},[t("p",W,n(e.Rank),1),t("p",{class:p(["w-full",e.Qualified?"font-semibold":" font-light "])},n(e.Name),3),t("p",tt,n(e.TotalPoints),1)]))),128)),et,(s(!0),l(k,null,I(h(u),(e,a)=>(s(),l("div",{key:a,class:"flex w-full text-left items-center even:bg-glhl-light-gray px-2"},[t("p",st,n(e.Rank),1),t("p",{class:p(["w-full",e.Qualified?"font-semibold":" font-thin"])},n(e.Name),3),t("p",lt,n(e.TotalPoints),1)]))),128)),at,(s(!0),l(k,null,I(h(m),(e,a)=>(s(),l("div",{key:a,class:"flex w-full text-left items-center even:bg-glhl-light-gray px-2"},[t("p",ot,n(e.Rank),1),t("p",{class:p(["w-full",e.Qualified?"font-semibold":" font-light"])},n(e.Name),3),t("p",nt,n(e.TotalPoints),1)]))),128))],544),b(w,{name:"fade"},{default:v(()=>[h(r)?_("",!0):(s(),l("div",it))]),_:1})]))}},ut=dt,J=T("/images/mesbg-silhouettes/Legolas.png"),ft=T("/images/rankings/glhl_silver.png"),gt=T("/images/rankings/glhl_legend.png"),ht=T("/images/rankings/glhl_bronze.png"),mt=T("/images/icons/question.png"),_t=O('<div class="mt-20 sm:mt-32 md:mt-52"></div><div class="bg-[url(/public\\images\\cinematics\\hero_desktop.webp)] bg-center bg-cover shadow-lg shadow-black"><div class="bg-black bg-opacity-85 text-white flex justify-center mb-10"><div class="my-auto flex flex-col"><p class="text-6xl font-Ringbearer justify-center py-10">Rankings</p></div></div></div>',2),pt={class:"pb-20 flex justify-center items-center"},xt=t("div",null,[t("img",{src:J,alt:"legolas knives",class:"-rotate-45 opacity-10 w-full hidden lg:flex"})],-1),bt={class:"flex flex-col gap-8 sm:max-w-[600px] w-full"},vt={class:"flex justify-center items-baseline gap-8 relative font-Ringbearer px-4"},wt={class:"justify-center text-center flex flex-col gap-2 z-10"},kt=t("img",{src:ft,alt:"silver medal",class:"w-28 rounded-full mx-auto shadow-md shadow-black"},null,-1),yt={key:0},It={key:0},Ct={key:1},zt={class:"justify-center text-center flex flex-col gap-2 z-10"},Nt=t("img",{src:gt,alt:"gold medal",class:"w-52 mx-auto"},null,-1),Tt={key:0},$t={key:0},Zt={key:1},Et={class:"justify-center text-center flex flex-col gap-2 z-10"},Rt=t("img",{src:ht,alt:"bronze medal",class:"w-28 rounded-full mx-auto shadow-md shadow-black"},null,-1),Vt={key:0},Jt={key:0},Ot={key:1},Lt={class:"mx-auto w-full flex flex-col px-2"},St={key:0,class:"mb-4"},jt=t("span",{class:"font-semibold"},"Bolded",-1),Ht={class:"flex justify-between"},Dt=t("img",{src:mt,alt:"question mark icon"},null,-1),Mt=[Dt],Ft={class:"flex gap-1 mr-2"},Qt=t("div",{class:"flex bg-glhl-red-400 text-sm sm:text-base rounded-t-md font-Cinzel italic z-10 text-white items-center p-2 text-left"},[t("p",{class:"w-full"},"Rank"),t("p",{class:"w-full"},"Player"),t("p",{class:"w-[50%]"},"Total Points")],-1),Xt={class:"container relative min-w-full min-h-96 bg-gradient-to-t to-glhl-red-400 from-glhl-red-100 rounded-b-md"},At={class:"m-0.5"},Pt=t("div",null,[t("img",{src:J,alt:"legolas knives",class:"rotate-45 scale-x-[-1] opacity-10 w-full hidden lg:flex"})],-1),Bt="https://ienwmfvepudsgvruuuwh.supabase.co",Ut="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImllbndtZnZlcHVkc2d2cnV1dXdoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNTExOTU3NywiZXhwIjoyMDMwNjk1NTc3fQ.jkuPHQfGZ-iKvyCEJuRLxCVCzvcnikSt-E19526AOZY",Kt={__name:"rankings",setup(R){const g=E(Bt,Ut),d=i([]),u=i([]),m=i(!1),f=i(!1),C=i(null);Z(async()=>{try{f.value=!0;const{data:o,error:c}=await g.from("artisansOfLegend").select("*");if(c)throw new Error(c.message);d.value=o;const{data:e,error:a}=await g.from("tacticiansOfLegend").select("*");if(a)throw new Error(a.message);u.value=e}catch(o){console.error("Error fetching data:",o.message),C.value="Failed to fetch data"}finally{f.value=!1}});const r=i("tactician"),y=o=>{o==="tactician"?r.value="artisan":o==="artisan"&&(r.value="tactician")},x=()=>{m.value=!m.value};return(o,c)=>{const e=G,a=ut;return s(),l(k,null,[_t,t("section",pt,[xt,t("div",bt,[t("section",vt,[t("div",wt,[kt,f.value?_("",!0):(s(),l("div",yt,[b(w,{name:"slide-in",mode:"out-in"},{default:v(()=>[r.value==="tactician"?(s(),l("p",It,n(u.value.length>0?u.value[1].Name:"Loading..."),1)):(s(),l("p",Ct,n(d.value.length>0?d.value[1].Name:"Loading..."),1))]),_:1})]))]),t("div",zt,[Nt,f.value?_("",!0):(s(),l("div",Tt,[b(w,{name:"slide-in",mode:"out-in"},{default:v(()=>[r.value==="tactician"?(s(),l("p",$t,n(u.value.length>0?u.value[0].Name:"Loading..."),1)):(s(),l("p",Zt,n(d.value.length>0?d.value[0].Name:"Loading..."),1))]),_:1})]))]),t("div",Et,[Rt,f.value?_("",!0):(s(),l("div",Vt,[b(w,{name:"slide-in",mode:"out-in"},{default:v(()=>[r.value==="tactician"?(s(),l("p",Jt,n(u.value.length>0?u.value[2].Name:"Loading..."),1)):(s(),l("p",Ot,n(d.value.length>0?d.value[2].Name:"Loading..."),1))]),_:1})]))])]),t("div",Lt,[b(w,{name:"slide-in"},{default:v(()=>[m.value?(s(),l("p",St,[$(" Names that are "),jt,$(" are qualified. To qualify, a player must participate in 3 events. Rankings are determined by the sum of each player's 3 lowest scores. ")])):_("",!0)]),_:1}),t("div",Ht,[t("p",{class:"my-auto font-Ringbearer text-sm xs:text-xl flex gap-1"},[$(" current standings "),t("button",{onClick:x,class:"w-5 h-5 hover:scale-110 transition-all"},Mt)]),t("div",Ft,[t("button",{onClick:c[0]||(c[0]=z=>y("artisan")),class:p(["w-20 sm:w-28 text-xs sm:text-base bg-gradient-to-t hover:scale-105 hover:to-glhl-red-200 from-glhl-red-400 to bg-glhl-red-100 rounded-t-md sm:px-2 p-1.5 text-white font-Ringbearer",r.value==="tactician"?" shadow-black shadow-lg ":" opacity-80"])}," Tactician ",2),t("button",{onClick:c[1]||(c[1]=z=>y("tactician")),class:p(["w-20 sm:w-28 bg-gradient-to-t text-xs sm:text-base rounded-t-md hover:scale-105 hover:to-glhl-red-200 from-glhl-red-400 to bg-glhl-red-100 sm:px-2 p-1 text-white font-Ringbearer",r.value==="artisan"?"shadow-black shadow-lg  ":"opacity-80"])}," Artisan ",2)])]),Qt,t("div",Xt,[t("div",At,[b(w,{name:"slide-in",mode:"out-in"},{default:v(()=>[r.value==="artisan"?(s(),V(e,{key:0,class:"w-full"})):r.value==="tactician"?(s(),V(a,{key:1,class:"w-full"})):_("",!0)]),_:1})])])])]),Pt])],64)}}};export{Kt as default};
