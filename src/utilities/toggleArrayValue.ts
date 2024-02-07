export const toggleArrayValue = (array:number[], value: number): number[] => {
  if (array.includes(value)) {
    return array.filter((el)=>el !== value);
  } else {
    return array.concat([value]);
  }
}

export const toggleStringArrayValue = (array:string[], value: string): string[] => {
  if (array.includes(value)) {
    return array.filter((el)=>el !== value);
  } else {
    return array.concat([value]);
  }
}
