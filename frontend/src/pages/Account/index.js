import { Button, Modal, TextField } from "@material-ui/core";
import { useState } from "react";
import axios from "axios";
import Layout from "../Layout";
import AccountEdit from "./AccountEdit";
import AccountItem from "./AccountItem";
const accountList = [
  { name: "Account Name 1" },
  { name: "Account Name 2" },
  { name: "Account Name 3" },
  { name: "Account Name 4" },
  { name: "Account Name 5" },
  { name: "Account Name 6" },
  { name: "Account Name 7" },
  { name: "Account Name 8" },
  { name: "Account Name 9" },
  { name: "Account Name 10" },
  { name: "Account Name 11" },
  { name: "Account Name 12" },
];
function Account() {
  const [state, setState] = useState({
    isEdit: false,
  });
  const [marches, setMarches] = useState(0);
  const handleEdit = () => {
    setState((pre) => ({ ...pre, isEdit: true }));
  };

  const instance = axios.create({
    baseURL: "http://localhost:4000",
  });

  const Play = () => {
    instance.get("/exe");
  };

  const Start = () => {
    instance
      .get("/start")
      .then((response) => {
        console.log(response);
        setMarches(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Layout>
      <div className="text-white pt-24 px-10 md:px-20 font-normal text-xl">
        <div className="mb-3">
          <TextField
            type="search"
            label="Search"
            variant="outlined"
            size="small"
          />
        </div>
        <div style={{ maxHeight: "480px" }} className="overflow-auto">
          {accountList?.map((item, index) => {
            return (
              <div className="mt-3">
                <AccountItem
                  data={{ ...item, index: index + 1 }}
                  onEdit={handleEdit}
                />
              </div>
            );
          })}
        </div>
        <div className="mt-3 flex justify-around">
          <Button className="mt-3 bg-button" onClick={Play}>
            Play
          </Button>
          <Button className="mt-3 bg-button" onClick={Start}>
            Start
          </Button>
        </div>
      </div>
      <Modal
        open={state?.isEdit}
        onClose={() => setState((pre) => ({ ...pre, isEdit: false }))}
      >
        <AccountEdit
          setState={setState}
          onEdit={handleEdit}
          marches={marches}
          state={state}
        />
      </Modal>
    </Layout>
  );
}

export default Account;
