
export const STUDENT = "student";
export const TEACHER = "teacher";
export const YEAR = "year";
export const SUCCESS = "success";
export const FAILURE = "failure";

export const studentAttributes = [
  { name: "DNI:", attribute: "studentDNI" },
  { name: "Apellido Paterno:", attribute: "fatherLastName"},
  { name: "Apellido Materno:", attribute: "motherLastName"},
  { name: "Nombres:", attribute: "names"},
  { name: "Fecha de nacimiento:", attribute: "birthdate"},
  { name: "Religión:", attribute: "religion"},
  { name: "Género:", attribute: "gender", options: ["- Género -","M","F"]},
  { name: "Colegio de procedencia: ", attribute: "procedense"},
  { name: "GRADO: ", attribute: "grade"},
  { name: "Nivel Educativo", attribute: "level", options: ["-Nivel-","Inicial","Primaria", "Secundaria"]}
];

export const fatherAttributes = [
      {name: "DNI:" ,attribute:"fatherDNI"},
      {name: "Apellidos:",attribute:"fatherLastNames"},
      {name: "Nombres:",attribute:"fatherName"},
      {name: "Domicilio:",attribute:"fatherAddress"},
      {name: "Teléfono:",attribute:"fatherPhone"},
      {name: "Estado civil:",attribute:"fatherCivil"},
      {name: "Celular:",attribute:"fatherCelphone"},
      {name: "Email:",attribute:"fatherEmail"},
      {name: "Centro de trabajo:",attribute:"fatherWorkPlace"},
      {name: "Ocupación:",attribute:"fatherOccup"},
      {name: "RPM ó RPC:",attribute:"fatherRPMorRPC"},
]

export const motherAttributes = [
  {name: "DNI:" ,attribute:"motherDNI"},
  {name: "Apellidos:",attribute:"motherLastNames"},
  {name: "Nombres:",attribute:"motherName"},
  {name: "Domicilio:",attribute:"motherAddress"},
  {name: "Teléfono:",attribute:"motherPhone"},
  {name: "Estado civil:",attribute:"motherCivil"},
  {name: "Celular:",attribute:"motherCelphone"},
  {name: "Email:",attribute:"motherEmail"},
  {name: "Centro de trabajo:",attribute:"motherWorkPlace"},
  {name: "Ocupación:",attribute:"motherOccup"},
  {name: "RPM ó RPC:",attribute:"motherRPMorRPC"},
]

export const initialAttributes = [
  {name: "Grado", attribute: "gradeName" },
  {name: "Seccion", attribute: "section"}
];

export const HOMEWORKS = "homeworks";
export const CLASSES = "classes";

export const DAYS = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
export const CLASSLIST = {col1: "Sesión", col2: "Archivo"};
export const HOMEWORKSLIST = {col1: "Asignación", col2:"Archivo"};