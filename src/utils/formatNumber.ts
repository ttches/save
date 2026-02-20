export const formatWithCommas = (value: string): string => {
  if (!value) return "";

  const [integerPart, decimalPart] = value.split(".");
  const num = parseInt(integerPart, 10);
  if (isNaN(num)) return "";

  const formattedInteger = num.toLocaleString("en-US");
  if (decimalPart !== undefined) return `${formattedInteger}.${decimalPart}`;
  return formattedInteger;
};

export const parseNumericInput = (value: string, allowDecimal = false): string => {
  const stripped = value.replace(/,/g, "");
  return allowDecimal
    ? stripped.replace(/[^\d.]/g, "").replace(/(\..*)\./g, "$1")
    : stripped.replace(/[^\d]/g, "");
};
