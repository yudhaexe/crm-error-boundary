import React from "react";
import { Avatar, Button, Card, Typography } from "@mui/material";

interface InsuranceCardProps {
  title: string;
  plan: string;
  onClick: () => void;
}

const InsuranceCard: React.FC<InsuranceCardProps> = ({ title, plan, onClick }) => {
  return (
    <Card variant="outlined" className="w-full p-6 flex justify-between">
      <div className="flex gap-3">
        <Avatar alt={`Avatar ${title}`} src="/static/images/avatar/2.jpg" />
        <div className="flex flex-col">
          <Typography className="text-base font-semibold text-gray-700">
            {title}
          </Typography>
          <Typography className="text-sm text-gray-600">
            {plan}
          </Typography>
        </div>
      </div>
      <Button
        className="px-4 py-2 text-sm text-gray-700 font-semibold normal-case rounded-lg outline outline-1 outline-gray-300"
        onClick={onClick}
      >
        View Insurance
      </Button>
    </Card>
  );
};

export default InsuranceCard;
