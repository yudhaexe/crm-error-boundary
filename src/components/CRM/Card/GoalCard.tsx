import React from "react";
import { Avatar, Button, Card, Typography } from "@mui/material";

interface GoalCardProps {
  title: string;
  amount?: string | number;
  onClick: () => void;
}

const GoalCard: React.FC<GoalCardProps> = ({ title, amount, onClick }) => {
  return (
    <Card variant="outlined" className="w-full p-6 flex justify-between">
      <div className="flex gap-3">
        <Avatar alt={`Avatar ${title}`} src="/static/images/avatar/2.jpg" />
        <div className="flex flex-col">
          <Typography className="text-base font-semibold text-gray-700">
            {title}
          </Typography>
          <Typography className="text-sm text-gray-600">
            ${amount}
          </Typography>
        </div>
      </div>
      <Button
        className="px-4 py-2 text-sm text-gray-700 font-semibold normal-case rounded-lg outline outline-1 outline-gray-300"
        onClick={onClick}
      >
        Edit
      </Button>
    </Card>
  );
};

export default GoalCard;
