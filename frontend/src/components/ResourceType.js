import { FormControl, Select } from "@material-ui/core";

function CustomSelect({ setState = () => {}, state = {}, style }) {
  return (
    <FormControl variant="outlined" style={style}>
      <Select
        native
        value={state?.resourceType ?? ""}
        inputProps={{
          name: "age",
          id: "age-native-simple",
        }}
        style={{ height: "30px" }}
        onChange={(e) =>
          setState((prev) => ({
            ...prev,
            resourceType: e.target.value,
          }))
        }
      >
        <option aria-label="None" value="" />
        <option value={"Gold Mine"}>Gold Mine</option>
        <option value={"Logging Camp"}>Logging Camp</option>
        <option value={"Ore Mine"}>Ore Mine</option>
        <option value={"Mana Pool"}>Mana Pool</option>
      </Select>
    </FormControl>
  );
}

export default CustomSelect;
