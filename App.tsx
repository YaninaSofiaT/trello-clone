import React from "react";
import AddNewItem from "./AddNewItem";
import Columns from "./Columns";
import { AppContainer } from "./styles";

export const App = () => {
  return (
    <AppContainer>
      <Columns text="Todo:" />
      <AddNewItem
        toggleButtonText="+ Add new list"
        onAdd={() => {
          console.log("new list created");
        }}
      />
    </AppContainer>
  );
};
