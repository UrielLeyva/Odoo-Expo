export function employeeValidator(employee) {
  if (!employee) return "Debe ingresar su ID"
  if (!re.test(employee)) return '¡Ups!, ID invalido'
  return ''
}
