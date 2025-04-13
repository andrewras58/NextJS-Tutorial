// instead of underscore folders we can also create our own components folder to import from
import AboutSection from "@/components/about";

export const metadata = {
    title: "About Codevolution"
}

export default function About(){
    return <AboutSection />
}