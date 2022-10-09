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
import { createMeal } from "../../api";
import { createStorageMeal } from "../../store/features/meals/mealsSlice";

let CreateMeal = (props) => {
  let [price, setPrice] = useState(0);
  let dispatch = useDispatch();

  let handleCreateMeal = async () => {
    let title = document.getElementById("title").value;
    let img = document.getElementById("img").value;
    let desc = document.getElementById("desc").value;
    try {
      let data = await createMeal({
        img: img,
        title: title,
        price: price,
        desc: desc,
      });
      if (data.status === 200) {
        Swal.fire({ title: `added meal ${title}`, icon: "success" });
        dispatch(
          createStorageMeal({
            meal: data.data,
          })
        );
      }
    } catch (error) {
      Swal.fire({ title: `failed to add meal ${title}`, icon: "error" });
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
                  placeholder="Example : HUAWEI MATE 10 LITE"
                  label="title"
                  variant="outlined"
                  id="title"
                />
                <TextField
                  placeholder="Write meal`s description here"
                  variant="outlined"
                  label="desc"
                  id="desc"
                />
                <TextField
                  placeholder="Write img src"
                  variant="outlined"
                  label="img"
                  id="img"
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
        openButtonContent="add meal"
        closeButtonContent="add"
        headerContent="add meal"
        func={handleCreateMeal}
      />
    </>
  );
};

export default CreateMeal;
