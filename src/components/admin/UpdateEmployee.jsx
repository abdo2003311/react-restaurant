import React from "react";
import Box from "@mui/material/Box";
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import { Modal } from "..";
import { filtersStyles } from "../../styles";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { updateEmpolyee } from "../../api";
import { updateStorageEmployee } from "../../store/features/employees/employeesSlice";

let UpdateEmployee = (props) => {
  let { username, password, _id } = props.employee;
  let { order } = props;
  let dispatch = useDispatch();

  let handleUpdate = async () => {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    try {
      let data = await updateEmpolyee({
        _id: _id,
        username: username,
        password: password,
      });
      if (data.status === 200) {
        dispatch(
          updateStorageEmployee({
            order: order,
            employee: data.data,
          })
        );
        Swal.fire({ title: `updated employee ${username}`, icon: "success" });
      }
    } catch (error) {
      Swal.fire({
        title: `failed to update employee ${username}`,
        icon: "error",
      });
    }
  };


  return (
    <>
      <Modal
        content={
          <Box sx={filtersStyles}>
            <form>
            <FormGroup>
                <TextField
                  type="text"
                  placeholder="username"
                  label="username"
                  variant="outlined"
                  id="username"
                  defaultValue={username}

                />
                <TextField
                  placeholder="password"
                  variant="outlined"
                  label="password"
                  id="password"
                />
              </FormGroup>
            </form>
          </Box>
        }
        headerContent="update"
        openButtonContent="update"
        closeButtonContent="update"
        func={handleUpdate}
      />
    </>
  );
};

export default UpdateEmployee;
