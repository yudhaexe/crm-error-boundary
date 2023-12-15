"use client";
import { useClientInformation } from "@/app/(api)/Profile/routes";
import { ClientProfile } from "@/types/ProfileTypes";
import { TableRows } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Card,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  tableCellClasses,
} from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import GoalCard from "./Card/GoalCard";
import InsuranceCard from "./Card/InsuranceCard";
import ClientError from "../ClientError";

export default function ProfilePage() {
  const { data, isLoading, isError } = useClientInformation();
  const profileData = data as ClientProfile;
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  if (!isError) {
    return (
      <div className="mb-5">
        <Typography className="mb-5 font-semibold text-gray-900 text-3xl">
          {profileData?.clientInformation?.name}
        </Typography>
        <Divider className="mb-7" />
        <div className="bg-gray-50 w-full px-6 py-5 flex rounded-lg gap-14 mb-7">
          <div className="flex flex-col gap-2">
            <Typography className="text-sm text-gray-500">Gender</Typography>
            <Typography className="text-sm text-gray-600">
              {profileData?.clientInformation?.gender}
            </Typography>
          </div>
          <div className="flex flex-col gap-2">
            <Typography className="text-sm text-gray-500">DOB</Typography>
            <Typography className="text-sm text-gray-600">
              {profileData?.clientInformation?.dob}
            </Typography>
          </div>
          <div className="flex flex-col gap-2">
            <Typography className="text-sm text-gray-500">
              Marital Status
            </Typography>
            <Typography className="text-sm text-gray-600">
              {profileData?.clientInformation?.maritalStatus}
            </Typography>
          </div>
          <div className="flex flex-col gap-2">
            <Typography className="text-sm text-gray-500">
              Employment Status
            </Typography>
            <Typography className="text-sm text-gray-600">
              {profileData?.clientInformation?.employmentStatus}
            </Typography>
          </div>
        </div>
        <div className="mb-6">
          <Typography className="text-lg mb-5 text-gray-900 font-semibold">
            Financials
          </Typography>
          <Divider className="mb-6" />
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableBody>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    Income{" "}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    ${profileData?.financials?.income}
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    Expense{" "}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    ${profileData?.financials?.expenses}
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    Savings{" "}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    ${profileData?.financials?.savings}
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    Investment{" "}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    ${profileData?.financials?.investment}
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    Debt{" "}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    ${profileData?.financials?.debt}
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    Cashflow{" "}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    ${profileData?.financials?.cashflow}
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    Networth{" "}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    ${profileData?.financials?.networth}
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className="mb-6">
          <Typography className="text-lg mb-5 text-gray-900 font-semibold">
            Goals
          </Typography>
          <Divider className="mb-7" />
          <div className="flex justify-between gap-7">
            <GoalCard
              title="Emergency Fund"
              amount={profileData?.goals?.emergencyFund}
              onClick={() => {}}
            />
            <GoalCard
              title="Travel"
              amount={profileData?.goals?.travel}
              onClick={() => {}}
            />
          </div>
        </div>
        <div className="mb-6">
          <Typography className="text-lg mb-5 text-gray-900 font-semibold">
            Insurance
          </Typography>
          <Divider className="mb-7" />
          <div className="flex justify-between gap-7">
            <InsuranceCard
              title="Life Insurance"
              plan={`Plan A . ${profileData?.insurances?.lifeInsurance}`}
              onClick={() => {}}
            />
            <InsuranceCard
              title="Personal Accident"
              plan={`Plan A . ${profileData?.insurances?.personalAccident}`}
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return <ClientError />;
  }
}
