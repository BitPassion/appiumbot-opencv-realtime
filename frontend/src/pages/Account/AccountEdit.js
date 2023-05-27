import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  makeStyles,
} from "@material-ui/core";
import ResourceType from "../../components/ResourceType";
import NodeLevel from "../../components/NodeLevel";
import axios from "axios";

const useStyles = makeStyles({
  root: {
    textTransform: "none",
  },
});
function AccountEdit({ setState = () => {}, state = {}, marches, flag }) {
  const classes = useStyles();

  const instance = axios.create({
    baseURL: "http://localhost:4000",
  });

  const Save = () => {
    setState((pre) => ({ ...pre, isEdit: false }));
    instance
      .post("/save", { save: state.resourceType })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="text-white bg-side rounded-md p-8 absolute top-1/2 transform -translate-x-1/2 left-1/2 -translate-y-1/2">
      <h4 className="text-2xl text-center mb-8">Account Edit</h4>
      <div>
        <div className="flex justify-between items-center">
          <FormControlLabel
            control={
              <Checkbox
                checked={state?.gather ?? false}
                onChange={(e) =>
                  setState((prev) => ({
                    ...prev,
                    gather: e.target.checked,
                  }))
                }
              />
            }
            label="Gather"
            labelPlacement="start"
          />
          <div className="flex items-center justify-between">
            <p>Marches Number</p>{" "}
            <TextField
              value={marches}
              style={{ width: "100px", marginLeft: "8px" }}
              size="small"
              variant="outlined"
              disabled
            />
          </div>
        </div>
        <div className="pl-6 pb-3 flex justify-between items-center">
          <p className="pl-6 pt-3">Resource Type</p>
          <ResourceType
            style={{ marginTop: "8px" }}
            state={state}
            setState={setState}
          />
        </div>
        <div className="pl-6 pb-3 flex justify-between items-center">
          <p className="pl-6 pt-3">Node Level</p>
          <NodeLevel
            style={{ marginTop: "8px", width: "100px" }}
            setState={setState}
            state={state}
          />
        </div>
      </div>
      <div className="mb-8">
        <h5 className="pl-4 pt-3">Darkling's Hunting</h5>
        <FormControlLabel
          className="pl-6 pt-3"
          control={
            <Checkbox
              checked={state?.PatrolsHunting ?? false}
              onChange={(e) =>
                setState((prev) => ({
                  ...prev,
                  PatrolsHunting: e.target.checked,
                }))
              }
            />
          }
          label="Patrols Hunting"
          labelPlacement="start"
        />
        <div className="pl-6 pb-3 flex justify-between items-center">
          <p className="pl-9 pt-3">Minimum Patrols Level</p>
          <NodeLevel
            style={{ marginTop: "8px", width: "100px" }}
            setState={setState}
            state={state}
          />
        </div>
        <div class="grid grid-cols-3 gap-4 pl-6">
          <div>
            <FormControlLabel
              className="pl-3"
              control={
                <Checkbox
                  checked={state?.PatrolsHunting_Slot1 ?? false}
                  onChange={(e) =>
                    setState((prev) => ({
                      ...prev,
                      PatrolsHunting_Slot1: e.target.checked,
                    }))
                  }
                />
              }
              label="Slot 1"
              labelPlacement="end"
            />
          </div>
          <div>
            <FormControlLabel
              className="pl-3"
              control={
                <Checkbox
                  checked={state?.PatrolsHunting_Slot2 ?? false}
                  onChange={(e) =>
                    setState((prev) => ({
                      ...prev,
                      PatrolsHunting_Slot2: e.target.checked,
                    }))
                  }
                />
              }
              label="Slot 2"
              labelPlacement="end"
            />
          </div>
          <div>
            <FormControlLabel
              className="pl-3"
              control={
                <Checkbox
                  checked={state?.PatrolsHunting_Slot3 ?? false}
                  onChange={(e) =>
                    setState((prev) => ({
                      ...prev,
                      PatrolsHunting_Slot3: e.target.checked,
                    }))
                  }
                />
              }
              label="Slot 3"
              labelPlacement="end"
            />
          </div>
          <div>
            <FormControlLabel
              className="pl-3"
              control={
                <Checkbox
                  checked={state?.PatrolsHunting_Slot4 ?? false}
                  onChange={(e) =>
                    setState((prev) => ({
                      ...prev,
                      PatrolsHunting_Slot4: e.target.checked,
                    }))
                  }
                />
              }
              label="Slot 4"
              labelPlacement="end"
            />
          </div>
          <div>
            <FormControlLabel
              className="pl-3"
              control={
                <Checkbox
                  checked={state?.PatrolsHunting_Slot5 ?? false}
                  onChange={(e) =>
                    setState((prev) => ({
                      ...prev,
                      PatrolsHunting_Slot5: e.target.checked,
                    }))
                  }
                />
              }
              label="Slot 5"
              labelPlacement="end"
            />
          </div>
        </div>
        <FormControlLabel
          className="pl-6 pt-3"
          control={
            <Checkbox
              checked={state?.CreaturesHunting ?? false}
              onChange={(e) =>
                setState((prev) => ({
                  ...prev,
                  CreaturesHunting: e.target.checked,
                }))
              }
            />
          }
          label="Creatures Hunting"
          labelPlacement="start"
        />
        <div className="pl-6 pb-3 flex justify-between items-center">
          <p className="pl-9 pt-3">Minimum Creature Level</p>
          <NodeLevel
            style={{ marginTop: "8px", width: "100px" }}
            setState={setState}
            state={state}
          />
        </div>
        <div class="grid grid-cols-3 gap-4 pl-6">
          <div>
            <FormControlLabel
              className="pl-3"
              control={
                <Checkbox
                  checked={state?.CreaturesHunting_Slot1 ?? false}
                  onChange={(e) =>
                    setState((prev) => ({
                      ...prev,
                      CreaturesHunting_Slot1: e.target.checked,
                    }))
                  }
                />
              }
              label="Slot 1"
              labelPlacement="end"
            />
          </div>
          <div>
            <FormControlLabel
              className="pl-3"
              control={
                <Checkbox
                  checked={state?.CreaturesHunting_Slot2 ?? false}
                  onChange={(e) =>
                    setState((prev) => ({
                      ...prev,
                      CreaturesHunting_Slot2: e.target.checked,
                    }))
                  }
                />
              }
              label="Slot 2"
              labelPlacement="end"
            />
          </div>
          <div>
            <FormControlLabel
              className="pl-3"
              control={
                <Checkbox
                  checked={state?.CreaturesHunting_Slot3 ?? false}
                  onChange={(e) =>
                    setState((prev) => ({
                      ...prev,
                      CreaturesHunting_Slot3: e.target.checked,
                    }))
                  }
                />
              }
              label="Slot 3"
              labelPlacement="end"
            />
          </div>
          <div>
            <FormControlLabel
              className="pl-3"
              control={
                <Checkbox
                  checked={state?.CreaturesHunting_Slot4 ?? false}
                  onChange={(e) =>
                    setState((prev) => ({
                      ...prev,
                      CreaturesHunting_Slot4: e.target.checked,
                    }))
                  }
                />
              }
              label="Slot 4"
              labelPlacement="end"
            />
          </div>
          <div>
            <FormControlLabel
              className="pl-3"
              control={
                <Checkbox
                  checked={state?.CreaturesHunting_Slot5 ?? false}
                  onChange={(e) =>
                    setState((prev) => ({
                      ...prev,
                      CreaturesHunting_Slot5: e.target.checked,
                    }))
                  }
                />
              }
              label="Slot 5"
              labelPlacement="end"
            />
          </div>
        </div>
      </div>
      <div className="w-full text-center">
        <Button
          style={{ width: "120px", height: "80px", fontSize: "20px" }}
          onClick={Save}
          className="bg-button"
          variant="text"
          classes={{ root: classes.root }}
          size="large"
          color="white"
        >
          Save
        </Button>
      </div>
    </div>
  );
}

export default AccountEdit;
