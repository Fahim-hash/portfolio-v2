export type Design={slug:string;number:string;title:string;client:string;year:string;image:string;layout:"portrait"|"wide"|"square"};
export const base="https://raw.githubusercontent.com/Fahim-hash/portfolio/main/public/designs/";
export const designs:Design[]=[
{slug:"26-march-poster",number:"01",title:"26 March Poster",client:"TongErKhobor",year:"2026",image:"work1.png",layout:"portrait"},
{slug:"event-banner",number:"02",title:"Event Banner",client:"Willes Literary Club",year:"2025",image:"work2.jpg",layout:"wide"},
{slug:"executive-panel-post",number:"03",title:"Executive Panel Post",client:"Ta'atuf Foundation",year:"2025",image:"work3.png",layout:"square"},
{slug:"member-recruit-post",number:"04",title:"Member Recruit Post",client:"Omni Diplomatic Forum",year:"2025",image:"Artboard%201.png",layout:"square"},
{slug:"full-event-branding",number:"05",title:"Full Event Branding",client:"Willian's Study Tour 26",year:"2026",image:"work5.png",layout:"wide"},
{slug:"eid-mubarak-post",number:"06",title:"Eid Mubarak Post",client:"Relax Studio",year:"2025",image:"eid.png",layout:"portrait"},
{slug:"poet-birthday-post",number:"07",title:"Poet Birthday Post",client:"Willes Literary Club",year:"2025",image:"work7.png",layout:"square"},
{slug:"mourn-post",number:"08",title:"Mourn Post",client:"Willes Literary Club",year:"2025",image:"work8.png",layout:"square"},
{slug:"practice-design",number:"09",title:"Practice Design",client:"Concept Design",year:"2025",image:"banner.png",layout:"wide"},
{slug:"t-shirt-design-poster",number:"10",title:"T-Shirt Design And Poster",client:"Madesiho",year:"2025",image:"work10.png",layout:"square"},
];
export const imageUrl=(name:string)=>base+name;
export const allArchiveImages=designs.map(d=>d.image);
export const caseStudy={slug:"willians-study-tour-26",title:"Willian's Study Tour 26",year:"2026",client:"Willian's Study Tour 26",category:"Event Branding · Campaign",description:"Willian’s Study Tour '26 is a vibrant, 360-degree brand identity designed for a modern tour experience. The project blends a sophisticated dark-mode aesthetic with electric neon highlights.",external:"https://www.behance.net/gallery/243588815/Willians-Study-Tour-26-Full-Event-Branding"};
