export type Project={slug:string;number:string;title:string;category:string;year:string;description:string;images:string[];external?:string};
const base="https://raw.githubusercontent.com/Fahim-hash/portfolio/main/public/designs/";
export const projects:Project[]=[
{slug:"nexora",number:"01",title:"NEXORA",category:"Brand Identity · Art Direction",year:"2025",description:"A visual identity study focused on a confident, high-contrast brand language.",images:["work1.png","work2.png","work3.png"]},
{slug:"aaroh",number:"02",title:"AAROH",category:"Identity · Digital Experience",year:"2025",description:"Identity and digital direction built around clarity, rhythm and a contemporary visual system.",images:["banner.png","work5.png"]},
{slug:"aksara",number:"03",title:"AKSARA",category:"Editorial · Visual System",year:"2024",description:"An editorial-led visual exploration combining typography, composition and image treatment.",images:["work2.jpg","work7.png"]},
{slug:"orion",number:"04",title:"ORION",category:"Campaign · Social Design",year:"2024",description:"Campaign artwork designed for attention at feed speed while retaining a coherent visual language.",images:["eid.png","work8.png"]},
{slug:"wide",number:"05",title:"WIDE",category:"Creative Direction · Digital",year:"2024",description:"Creative direction across digital layouts, campaign compositions and experimental visual treatments.",images:["work10.png","Artboard%201.png"]},
{slug:"everglow-gems",number:"06",title:"EVERGLOW GEMS",category:"E-commerce · Product Design",year:"2024",description:"A premium visual direction for a jewellery-focused e-commerce experience.",images:["work5.png","work1.png"]},
{slug:"williams-study-tour-26",number:"07",title:"WILLIANS STUDY TOUR 26",category:"Event Branding · Campaign",year:"2026",description:"A vibrant 360-degree event identity combining dark-mode foundations with electric highlights.",images:["banner.png","work3.png","work7.png"],external:"https://www.behance.net/gallery/243588815/Willians-Study-Tour-26-Full-Event-Branding"},
{slug:"made-siho",number:"08",title:"MADE SIHO",category:"Social · Visual Direction",year:"2025",description:"A social-first visual exploration built around bold compositions and memorable art direction.",images:["work8.png","work10.png"]}
];
export const imageUrl=(name:string)=>base+name;
export const allArchiveImages=["Artboard%201.png","banner.png","eid.png","work1.png","work10.png","work2.jpg","work2.png","work3.png","work5.png","work7.png","work8.png"];
