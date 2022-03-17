import styled from "styled-components";
import Button from "../Button/Button";

export const FilterBarStyles = styled.ul`
  list-style: none;
  margin: 0;
  padding-top: 80px;
  margin-left: 5px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  width: fit-content;

  & li {
  }
`;

const FilterBar = (): JSX.Element => {
  return (
    <>
      <FilterBarStyles>
        <li key={"All"}>
          <Button
            text="All"
            actionOnClick={() => console.log("h")}
            type="filter"
          ></Button>
        </li>
        <li key={"PS4"}>
          <Button
            text="PS4"
            actionOnClick={() => console.log("h")}
            type="filter"
          ></Button>
        </li>
        <li key={"XBOX"}>
          <Button
            text="XBOX"
            actionOnClick={() => console.log("h")}
            type="filter"
          ></Button>
        </li>
        <li key={"PS5"}>
          <Button
            text="PS5"
            actionOnClick={() => console.log("h")}
            type="filter"
          ></Button>
        </li>
        <li key={"PC"}>
          <Button
            text="PC"
            actionOnClick={() => console.log("h")}
            type="filter"
          ></Button>
        </li>
      </FilterBarStyles>
    </>
  );
};

export default FilterBar;
