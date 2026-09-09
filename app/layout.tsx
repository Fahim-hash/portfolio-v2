import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={title:"Syed Fahim Muddasir | Creative Designer",description:"Official portfolio of Syed Fahim Muddasir — cinematic visual identities, photo manipulation, motion graphics and automated digital tools.",keywords:["Syed Fahim Muddasir","Creative Designer Dhaka","RelaxStudio","Cinematic Branding","Visual Identity"],authors:[{name:"Syed Fahim Muddasir"}],openGraph:{title:"Syed Fahim Muddasir | Creative Designer",description:"Cinematic visual identities and creative digital work.",url:"https://syedfahimmuddasir.bro.bd",siteName:"Fahim's Portfolio",type:"website"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
