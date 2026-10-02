// Altere para true para reativar os preços preservados dos passeios.
export const EXIBIR_PRECOS = false;

export function textoPublico(texto: string): string {
  if (EXIBIR_PRECOS) return texto;
  return texto.replace(/O valor é de R\$[\s\d.,]+por pessoa,?\s*/g, '').replace(/, por R\$[\s\d.,]+por pessoa/g, '').replace(/ Valor[^.]*R\$.*$/g, '');
}
