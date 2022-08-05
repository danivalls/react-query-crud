import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { FiltersContainer } from "./Filters.styled";
import { FiltersQuery } from "types/filters.types";

interface FiltersProps {
  onSearch: (query: FiltersQuery) => void;
}

const Filters: React.FC<FiltersProps> = ({ onSearch }) => {
  const [titleQuery, setTitleQuery] = useState("");
  const [userQuery, setUserQuery] = useState("");

  const handleSearch = () => {
    onSearch({ title: titleQuery, userId: userQuery });
  };

  const resetFields = () => {
    setTitleQuery("");
    setUserQuery("");
    onSearch({ title: "", userId: "" });
  };

  return (
    <FiltersContainer>
      <TextField
        label="Title"
        value={titleQuery}
        onChange={({ target }) => setTitleQuery(target.value)}
      />
      <TextField
        label="User"
        value={userQuery}
        onChange={({ target }) => setUserQuery(target.value)}
        type="number"
      />

      <Button variant="text" color="primary" onClick={resetFields}>
        Reset
      </Button>

      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
    </FiltersContainer>
  );
};

export default Filters;
