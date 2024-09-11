import React from "react";
const columns = [
  {name: "ID", uid: "id", sortable: true},
  {name: "NAME", uid: "title", sortable: true},
  {name: "PRICE (NPR)", uid: "price", sortable: true},
  {name: "CREATED AT", uid: "creationAt"},
];

const statusOptions = [
  {name: "Active", uid: "active"},
  {name: "Paused", uid: "paused"},
  {name: "Vacation", uid: "vacation"},
];



export {columns,  statusOptions};
