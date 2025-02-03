export const omitProps = <Props extends object>(props: Array<keyof Props>) => (
  prop: any,
  defaultValidatorFn: (prop: any) => boolean,
) => {
  return !props.includes(prop) && defaultValidatorFn(prop);
};

const toHex = (value: string) => parseInt(`0x${value}`, 16);

export const hexToRGB = (color: string, opacity: number = 1) => {
  // @ts-ignore
  const [, red1, red2, green1, green2, blue1, blue2] = color;

  const red = toHex(`${red1}${red2}`);
  const green = toHex(`${green1}${green2}`);
  const blue = toHex(`${blue1}${blue2}`);

  if (opacity !== 1) {
    return `rgb(${red}, ${green}, ${blue}, ${opacity})`;
  }

  return `rgb(${red}, ${green}, ${blue})`;
};
