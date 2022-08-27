function Input({ labelText, value, onChange }) {
  return <>
    <label>{labelText}</label>
    <input value={value} onChange={onChange} />
  </>
}

export default Input;
