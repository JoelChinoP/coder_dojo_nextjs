interface CursoInscrito {
    id: number;
    titulo: string;
    descripcion: string;
    instructor: string;
    imagenInstructor: string;
    progreso: number;
    ultimaActividad: string;
}

const cursosInscritos: CursoInscrito[] = [
    {
        id: 1,
        titulo: "Introducción a React",
        descripcion: "Aprende los fundamentos de React y crea aplicaciones web modernas",
        instructor: "María López",
        imagenInstructor: "/placeholder.svg?height=50&width=50",
        progreso: 60,
        ultimaActividad: "Hace 2 días"
    },
    {
        id: 2,
        titulo: "Python para Ciencia de Datos",
        descripcion: "Domina Python y sus librerías para análisis de datos",
        instructor: "Juan Pérez",
        imagenInstructor: "/placeholder.svg?height=50&width=50",
        progreso: 30,
        ultimaActividad: "Hace 1 semana"
    },
    {
        id: 3,
        titulo: "Diseño UX/UI Avanzado",
        descripcion: "Mejora tus habilidades en diseño de experiencia e interfaz de usuario",
        instructor: "Ana García",
        imagenInstructor: "/placeholder.svg?height=50&width=50",
        progreso: 80,
        ultimaActividad: "Ayer"
    }
];
export default cursosInscritos;