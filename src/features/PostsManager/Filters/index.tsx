import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { FiltersQuery } from "types/filters.types";

import { FiltersContainer } from "./Filters.styled";

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
        size="small"
        value={titleQuery}
        onChange={({ target }) => setTitleQuery(target.value)}
      />
      <TextField
        label="User Id"
        size="small"
        value={userQuery}
        onChange={({ target }) => setUserQuery(target.value)}
        type="number"
      />

      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>

      <Button variant="text" color="primary" onClick={resetFields}>
        Reset All
      </Button>
    </FiltersContainer>
  );
};

export default Filters;
