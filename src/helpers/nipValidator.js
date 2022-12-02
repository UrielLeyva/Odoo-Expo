export function nipValidator(nip) {
  if (!nip) return "La constraseña no puede quedar vacia."
  if (nip.length < 4) return 'La constraseña debe tener 4 caracteres.'
  return ''
}
