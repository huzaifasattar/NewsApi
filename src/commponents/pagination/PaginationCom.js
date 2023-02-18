import React from "react";
import { Pagination } from "react-bootstrap";
const PaginationCom = ({ newItem, activeTab, setActiveTab, pageSize }) => {
  console.log(newItem);
  const handlerChange = (pree) => {
    return setActiveTab(pree);
  };
  let totalTab = newItem / pageSize;
  let paginationList = [
    <Pagination.Item
    key={`first${1}`}
      active={activeTab === 1}
      tabIndex={1}
      onClick={(e) => handlerChange(e.target.tabIndex)}
    >
      {1}
    </Pagination.Item>,
  ];



  if (activeTab >= 4 && (activeTab - 2) !== 2) {
    paginationList.push(
      <Pagination.Ellipsis key={`ft-${activeTab}`}  />
    );
  }

  for (let i = (activeTab - 2); i < activeTab; i++) {
    if (i !== 1 && activeTab > 2 && i < totalTab) {
      paginationList.push(
        <Pagination.Item
          key={`pge-${i}`}
          tabIndex={i}
          active={i === activeTab}
          onClick={(e) => handlerChange(e.target.tabIndex)}
        >
          {i}
        </Pagination.Item>
      );
    }
  }

  for (let i = activeTab; i <= (activeTab + 2); i++) {
    if (i !== 1 && i < totalTab) {
      paginationList.push(
        <Pagination.Item
          key={`pge-${i}`}
          tabIndex={i}
          active={i === activeTab}
          onClick={(e) => handlerChange(e.target.tabIndex)}
        >
          {i}
        </Pagination.Item>
      );
    }
  }

  return (
    <Pagination className="justify-content-center">
      <Pagination.Prev />
      {paginationList}
      <Pagination.Next />
    </Pagination>
  );
};

export default PaginationCom;
