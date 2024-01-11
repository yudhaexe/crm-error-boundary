"use client";

import { useClients } from "@/app/(api)/Clients/routes";
import { Clients } from "@/types/ClientsTypes";
import { Avatar, IconButton, LinearProgress, Typography } from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import dayjs from "dayjs";
import React, { ChangeEvent, ReactInstance, ReactNode, useState } from "react";
import SearchBar from "./SearchBar";
import FilterButton from "./Button/FilterButton";
import { WarningAmber } from "@mui/icons-material";
import Link from "next/link";
import ClientError from "../ClientError";

export default function ClientTab() {
  const { data, isLoading, isError } = useClients();

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      renderCell: (params) => (
        <Link href={"/profile"}>
          <div className="flex gap-2">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            <Typography className="text-gray-900 text-sm self-center">
              {params.value}
            </Typography>
          </div>
        </Link>
      ),
    },
    {
      field: "gender",
      headerName: "Gender",
      width: 150,
    },
    {
      field: "dob",
      headerName: "DOB",
      width: 150,
      valueFormatter: ({ value }) => dayjs(value).format("DD/MM/YYYY"),
    },
    {
      field: "maritalStatus",
      headerName: "Maritial Status",
      width: 150,
    },
    {
      field: "employmentStatus",
      headerName: "Employment",
      width: 150,
    },
  ];
  const clientData: Clients[] = Array.isArray(data) ? (data as Clients[]) : [];
  const [searchText, setSearchText] = useState("");

  const [anchorGenderFilter, setAnchorGenderFilter] =
    React.useState<null | HTMLElement>(null);

  const [anchorMaritialFilter, setAnchorMaritialFilter] =
    React.useState<null | HTMLElement>(null);

  const [anchorEmploymentFilter, setAnchorEmploymentFilter] =
    React.useState<null | HTMLElement>(null);

  const handleOpenGenderMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorGenderFilter(event.currentTarget);
  };

  const handlecloseGenderMenu = () => {
    setAnchorGenderFilter(null);
  };

  const handleOpenMaritialMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorMaritialFilter(event.currentTarget);
  };

  const handlecloseMaritialMenu = () => {
    setAnchorMaritialFilter(null);
  };

  const handleOpenEmploymentMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEmploymentFilter(event.currentTarget);
  };

  const handlecloseEmploymentMenu = () => {
    setAnchorEmploymentFilter(null);
  };

  const [checkedGender, setCheckedGender] = useState({
    male: false,
    female: false,
  });
  const [checkedMaritial, setCheckedMaritial] = useState({
    married: false,
    single: false,
    divorced: false,
  });
  const [checkedEmployment, setCheckedEmployment] = useState({
    employed: false,
    unemployed: false,
  });

  const handleCheckedGender = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setCheckedGender({
      ...checkedGender,
      [name]: checked,
    });
  };
  const handleCheckedMaritial = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setCheckedMaritial({
      ...checkedMaritial,
      [name]: checked,
    });
  };

  const handleCheckedEmployment = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setCheckedEmployment({
      ...checkedEmployment,
      [name]: checked,
    });
  };

  const rows =
    clientData
      ?.filter((client) => {
        //Search Box
        if (searchText === "") return true;

        return client.name.toLowerCase().includes(searchText.toLowerCase());
      })

      ?.filter((client) => {
        // Filtering Gender
        if (
          (checkedGender.female && client.gender.toLowerCase() === "female") ||
          (checkedGender.male && client.gender.toLowerCase() === "male") ||
          (!checkedGender.female && !checkedGender.male)
        ) {
          return true;
        }
        return false;
      })
      ?.filter((client) => {
        // Filtering Gender
        if (
          (checkedMaritial.single &&
            client.maritalStatus.toLowerCase() === "single") ||
          (checkedMaritial.married &&
            client.maritalStatus.toLowerCase() === "married") ||
          (checkedMaritial.divorced &&
            client.maritalStatus.toLowerCase() === "divorced") ||
          (!checkedMaritial.single &&
            !checkedMaritial.married &&
            !checkedMaritial.divorced)
        ) {
          return true;
        }
        return false;
      })
      ?.filter((client) => {
        // Filtering Gender
        if (
          (checkedEmployment.employed &&
            client.employmentStatus.toLowerCase() === "employed") ||
          (checkedEmployment.unemployed &&
            client.employmentStatus.toLowerCase() === "unemployed") ||
          (!checkedEmployment.employed && !checkedEmployment.unemployed)
        ) {
          return true;
        }
        return false;
      })
      .map((client: Clients) => ({
        id: client.id,
        gender: client.gender,
        name: client.name,
        dob: client.dob,
        maritalStatus: client.maritalStatus,
        employmentStatus: client.employmentStatus,
      })) ?? [];
  if (!isError) {
    return (
      <>
        <div className="flex flex-wrap gap-6">
          <div className="w-auto h-10 items-center rounded-lg text-gray-900 bg-gray-100">
            <SearchBar setSearchText={setSearchText} searchText={searchText} />
          </div>
          <div className="flex flex-wrap gap-4">
            {/* Gender Filter Component */}
            <FilterButton
              anchorEl={anchorGenderFilter}
              handleOpen={handleOpenGenderMenu}
              handleClose={handlecloseGenderMenu}
              checkedValues={checkedGender}
              handleChecked={handleCheckedGender}
              filterName="Gender"
            />

            {/* Marital Status Filter Component */}
            <FilterButton
              anchorEl={anchorMaritialFilter}
              handleOpen={handleOpenMaritialMenu}
              handleClose={handlecloseMaritialMenu}
              checkedValues={checkedMaritial}
              handleChecked={handleCheckedMaritial}
              filterName="Marital Status"
            />

            {/* Employment Filter Component */}
            <FilterButton
              anchorEl={anchorEmploymentFilter}
              handleOpen={handleOpenEmploymentMenu}
              handleClose={handlecloseEmploymentMenu}
              checkedValues={checkedEmployment}
              handleChecked={handleCheckedEmployment}
              filterName="Employment"
            />
          </div>
        </div>
        <DataGrid
          {...clientData}
          className="mt-6"
          autoHeight
          columns={columns}
          rows={rows}
          slots={{
            loadingOverlay: LinearProgress,
          }}
          getRowId={(row) => {
            return `${row.id}`;
          }}
          loading={isLoading}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </>
    );
  } else {
    return <ClientError />;
  }
}
