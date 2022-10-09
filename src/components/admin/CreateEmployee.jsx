import React from "react";
import Box from "@mui/material/Box";
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import { Modal } from "..";
import { filtersStyles } from "../../styles";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { createEmployee } from "../../api";
import { createStorageEmployee } from "../../store/features/employees/employeesSlice";

let CreateEmployee = () => {
  let dispatch = useDispatch();

  let handleCreateEmployee = async () => {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    try {
      let data = await createEmployee({
        username : username,
        password: password,
      });
      if (data.status === 200) {
        Swal.fire({ title: `added Employee ${username}`, icon: "success" });
        dispatch(
          createStorageEmployee({
            employee: data.data,
          })
        );
      }
    } catch (error) {
      console.log(error)
      Swal.fire({ title: `failed to add Employee ${username}`, icon: "error" });
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
        openButtonContent="create Employee"
        closeButtonContent="create"
        headerContent="create Employee"
        func={handleCreateEmployee}
      />
    </>
  );
};

export default CreateEmployee;
