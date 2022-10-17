export function passwordValidator(password) {
  if (!password) return "La constraseña no puede quedar vacia."
  if (password.length < 5) return 'La constraseña debe tener mínimo 5 caracteres.'
  return ''
}
