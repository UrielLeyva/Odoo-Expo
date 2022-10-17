export function emailValidator(ID) {
  if (!ID) return "Debe ingresar su ID"
  if (ID.length < 12) return 'Tu ID debe tener al menos 12 dígitos.'
  return ''

  /*
  const re = /\S+@\S+\.\S+/
  if (!email) return "Debe ingresar su corro electronico."
  if (!re.test(email)) return '¡Ups!, correo invalido.'
  return ''
  */
}
