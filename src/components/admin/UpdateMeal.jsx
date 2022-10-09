import React, { useState } from "react";
import Box from "@mui/material/Box";
import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { Modal } from "..";
import { filtersStyles } from "../../styles";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { updateMeal } from "../../api";
import { updateStorageMeal } from "../../store/features/meals/mealsSlice";

let UpdateMeal = (props) => {
  let { title, desc, _id } = props.meal;
  let { order } = props;
  let dispatch = useDispatch();
  let [price, setPrice] = useState(props.meal.price);

  let handleUpdate = async () => {
    let newTitle = document.getElementById("title").value;
    let desc = document.getElementById("desc").value;
    try {
      let data = await updateMeal({
        _id: _id,
        desc: desc,
        title: newTitle,
        price: price,
      });
      if (data.status === 200) {
        dispatch(
          updateStorageMeal({
            order: order,
            meal: data.data,
          })
        );
        Swal.fire({ title: `updated meal ${title}`, icon: "success" });
      }
    } catch (error) {
      Swal.fire({
        title: `failed to update meal ${title}`,
        icon: "error",
      });
    }
  };
  let handlePriceChange = (e) => {
    setPrice(e.target.value);
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
                  placeholder="Example : Burger"
                  label="title"
                  variant="outlined"
                  defaultValue={title}
                  id="title"
                />
                <TextField
                  placeholder="Write meal`s description here"
                  variant="outlined"
                  label="description"
                  defaultValue={desc}
                  id="desc"
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>Price :</FormLabel>
                <FormControl>
                  <Slider
                    min={0}
                    max={10000}
                    valueLabelDisplay="auto"
                    defaultValue={price}
                    onChange={handlePriceChange}
                  />
                </FormControl>
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

export default UpdateMeal;
