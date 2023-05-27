import { FormControl, Select } from "@material-ui/core";

function CustomSelect({ setState = () => {}, style, state }) {
  return (
    <FormControl variant="outlined" style={style}>
      <Select
        native
        value={state?.nodeLevel ?? ""}
        inputProps={{
          name: "age",
          id: "age-native-simple",
        }}
        style={{ height: "30px" }}
        onChange={(e) =>
          setState((prev) => ({
            ...prev,
            nodeLevel: e.target.value,
          }))
        }
      >
        <option aria-label="None" value="" />
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        <option value={6}>6</option>
      </Select>
    </FormControl>
  );
}

export default CustomSelect;
