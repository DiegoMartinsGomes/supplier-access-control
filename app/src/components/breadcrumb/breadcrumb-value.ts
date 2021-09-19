let value = [''];
export default {
    getValue: () => value,
    setValue: (v: string[]) => { value = v }
};