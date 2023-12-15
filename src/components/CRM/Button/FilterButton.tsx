import React, { ChangeEvent } from "react";
import { Button, Checkbox, FormControlLabel, FormGroup, Menu, MenuItem, Typography } from "@mui/material";
import { AddCircleOutlineOutlined } from "@mui/icons-material";

interface FilterProps {
  anchorEl: null | HTMLElement;
  handleOpen: (event: React.MouseEvent<HTMLElement>) => void;
  handleClose: () => void;
  checkedValues: Record<string, boolean>;
  handleChecked: (event: ChangeEvent<HTMLInputElement>) => void;
  filterName: string;
}

const FilterButton: React.FC<FilterProps> = ({ anchorEl, handleOpen, handleClose, checkedValues, handleChecked, filterName }) => {
  return (
    <div className="rounded-full bg-gray-50 outline outline-1 outline-gray-200 flex items-center py-1 px-3 gap-1 h-7 self-center">
      <Button onClick={handleOpen} className="flex gap-1 normal-case">
        <AddCircleOutlineOutlined sx={{ color: "#667085", fontSize: "14px" }} />
        <Typography className="text-sm text-gray-700 font-medium">{filterName}</Typography>
      </Button>
      <Menu
        sx={{ mt: "45px" }}
        id={`menu-${filterName}`}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem>
          <FormGroup>
            {Object.keys(checkedValues).map((key) => (
              <FormControlLabel
                key={key}
                control={<Checkbox checked={checkedValues[key]} onChange={handleChecked} name={key} />}
                label={key.charAt(0).toUpperCase() + key.slice(1)}
              />
            ))}
          </FormGroup>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default FilterButton;
