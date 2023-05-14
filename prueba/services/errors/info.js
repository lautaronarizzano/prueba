export const generateUserErrorInfo = (user) => {
    return `Una o mas propiedades estan incompletas o son invalidas.
    Lista de las propiedades requeridas: 
    *nombre: necesita que sea tipo string, recibimos ${user.first_name}
    apellido: necesita que sea tipo string, recibimos ${user.last_name}
    *correo: necesita que sea tipo string, recibimos ${user.email}`
}