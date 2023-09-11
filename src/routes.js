
export const ADMIN_ROUTES = [
  {name: "Resumen", route: "/Admin"},
  {name: "Crear un nuevo año escolar", route: "/Admin/createYear"},
  {name: "Registrar Alumno", route: "/Admin/RegisterStudent"},
  {name: "Registrar Profesor", route: "/Admin/registerTeacher"},
  {name: "Crear un nuevo Curso", route: "/Admin/createCourse"},
  {name: "Asignar alumno a una sección", route: "/Admin/assignStudent"},
  {name: "Enviar un comunicado/citación", route: "/Admin/releases"}
]

export const STUDENT_ROUTES = [
  {name: "Inicio", route: "/student"},
  {name: "Horario", route: "/student/schedules"},
  {name: "Ver tareas", route: "/student/homeworks"},
  {name: "Ver comunicados", route: "/student/releases"},
  {name: "Ver libreta de calificaciones", route: "/student/reportCard"}
]