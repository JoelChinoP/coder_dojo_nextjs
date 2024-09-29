export default function AlumnoLayout({
children
}: {children: React.ReactNode;
}){
    return(
        <div>
            <h1>ESTE ES EL LAYOUT DEL USER</h1>
            {children}
        </div>
    )
}