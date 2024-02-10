import React from "react";
import { ColumnSelectorProps } from "./DataTable.types";
declare const ColumnsSelector: <T>({
  columns,
  selectedOptionIDs,
  onSelect,
  closeTriggerAction,
  open,
  anchorEl,
}: ColumnSelectorProps<T>) => React.ReactPortal | null;
export default ColumnsSelector;
