import React from "react";
import {
  Form,
  FormInput,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "shards-react";

const SidebarSearch = () => (
  <Form
    className="main-sidebar__search w-100 border-right d-sm-flex d-md-none d-lg-none"
    style={{ display: "flex", minHeight: "45px" }}
  >
    <InputGroup seamless className="ml-3">
      <FormInput
        className="navbar-search"
        placeholder="Search for something..."
        aria-label="Search"
      />
      <InputGroupAddon type="append">
        <InputGroupText>
          <i className="material-icons">search</i>
        </InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  </Form>
);

export default SidebarSearch;
