"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import cursosInscritos from "../../utils/dataCursos";

function CursosInscritos() {
    return (

        <div className="container mx-auto px-5 py-5">
            <h1 className="text-3xl font-bold mb-6 text-center">Mis Cursos</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {cursosInscritos.map((curso) => (
                    <Card key={curso.id} className="flex flex-col flex-grow">
                        <CardHeader>
                            <CardTitle>{curso.titulo}</CardTitle>
                            <CardDescription>{curso.descripcion}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <div className="flex items-center mb-5 ">
                                <Avatar>
                                    <AvatarImage src={curso.imagenInstructor} alt={curso.instructor} />
                                    <AvatarFallback>{curso.instructor.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                </Avatar>
                                <div className="pl-5">
                                    <p className="text-sm font-medium">{curso.instructor}</p>
                                    <p className="text-sm text-muted-foreground">Instructor</p>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span>Progreso</span>
                                    <span>{curso.progreso}%</span>
                                </div>
                                <Progress value={curso.progreso} className="w-full" />
                            </div>
                            <p className="text-sm text-muted-foreground mt-4">Última actividad: {curso.ultimaActividad}</p>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full">Continuar Curso</Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default CursosInscritos;