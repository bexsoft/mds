import React from "react";
import { IActionButton } from "./DataTable.types";
export declare const isPredefinedAction: (
  val: any,
) => val is
  | "view"
  | "console"
  | "cloud"
  | "format"
  | "edit"
  | "delete"
  | "description"
  | "share"
  | "download"
  | "disable"
  | "preview";
declare const TableActionButton: <T>({
  type,
  onClick,
  valueToSend,
  idField,
  sendOnlyId,
  disabled,
  tooltip,
}: IActionButton<T>) => React.JSX.Element | null;
export default TableActionButton;
