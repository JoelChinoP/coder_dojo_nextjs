import SectionBackground from "@/components/ui/SectionBackground";

export default function AlumnoLayout({
children
}: {children: React.ReactNode;
}){
    return(
        <SectionBackground>
            {children}
        </SectionBackground>
    )
}