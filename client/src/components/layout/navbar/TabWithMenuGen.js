import { Divider, IconButton, List, Menu } from "@material-ui/core";
import React, { Fragment } from "react";
import DropdownListContainer from "./DropdownListContainer";
import DropdownListItem from "./DropdownListItem";

const appsDropDownList = (list) => (
  <List>
    {list.map(({ text, Icon, lastIcon, divider, header, onClick }, index) => {
      return (
        <Fragment key={index}>
          {/* checking if there is a header component for list */}
          {header ? header : null}

          {text ? (
            <DropdownListItem
              options={{ text, Icon, lastIcon }}
              onClick={onClick}
            />
          ) : null}

          {divider ? (
            <Divider style={{ marginBottom: "8px", marginTop: "8px" }} />
          ) : null}
        </Fragment>
      );
    })}
  </List>
);

const TabWithMenuGen = ({
  classes,
  onTabClickHandler,
  TabIcon,
  anchorEl,
  onMenuClose,
  dropdownListData,
}) => {
  return (
    <Fragment>
      <IconButton
        classes={{ root: classes.disableHoverBgClr }}
        onClick={onTabClickHandler}
      >
        {TabIcon}
      </IconButton>
      <Menu
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transitionDuration={0}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={onMenuClose}
        PopoverClasses={{
          paper: classes.dropDownPopOver,
        }}
        getContentAnchorEl={null}
      >
        <DropdownListContainer>
          {appsDropDownList(dropdownListData)}
        </DropdownListContainer>
      </Menu>
    </Fragment>
  );
};

export default TabWithMenuGen;
