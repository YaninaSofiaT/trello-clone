import React from "react";
import Card from "./Card";
import { ColumnContainer, ColumnTitle } from "./styles";
import AddNewItem from "./AddNewItem";

type ColumnProps = {
  text: string;
};

const Columns = ({ text }: ColumnProps) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      <Card text="course" />
      <Card text="exercise" />
      <Card text="english" />
      <AddNewItem
        toggleButtonText="+ Add new card"
        onAdd={() => {
          console.log("new card created");
        }}
        dark
      />
    </ColumnContainer>
  );
};

export default Columns;
