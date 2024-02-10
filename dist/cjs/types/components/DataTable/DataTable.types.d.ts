import React, { HTMLAttributes } from "react";
import { CSSObject } from "styled-components";
import { SortDirectionType } from "react-virtualized";
export declare const actionsTypes: readonly [
  "view",
  "edit",
  "delete",
  "description",
  "share",
  "cloud",
  "console",
  "download",
  "disable",
  "format",
  "preview",
];
export type PredefinedActionTypes = (typeof actionsTypes)[number];
export interface ItemActions<T> {
  tooltip?: string;
  type: PredefinedActionTypes | React.ReactNode;
  sendOnlyId?: boolean;
  isDisabled?: boolean | ((itemValue: T) => boolean);
  showLoader?: boolean | ((itemValue: T) => boolean);
  onClick?(valueToSend: T): void;
}
export interface IColumns<T> {
  label: string;
  elementKey?: string;
  renderFunction?: (input: T) => any;
  renderFullObject?: boolean;
  globalClass?: any;
  rowClass?: any;
  width?: number;
  headerTextAlign?: string;
  contentTextAlign?: string;
  enableSort?: boolean;
}
export interface IInfiniteScrollConfig {
  loadMoreRecords: (indexElements: {
    startIndex: number;
    stopIndex: number;
  }) => Promise<any>;
  recordsCount: number;
}
export interface ITableSortInfo {
  sortBy: string;
  sortDirection: SortDirectionType;
}
export interface ISortConfig {
  onSortClick: (val: ITableSortInfo) => any;
  currentSort: string;
  currentDirection: "ASC" | "DESC" | undefined;
}
export interface DataTableProps<T> {
  itemActions?: ItemActions<T>[] | null;
  columns: IColumns<T>[];
  onSelect?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  idField?: string;
  isLoading?: boolean;
  loadingMessage?: React.ReactNode;
  records: T[];
  entityName?: string;
  selectedItems?: string[];
  customEmptyMessage?: string;
  customPaperHeight?: string;
  noBackground?: boolean;
  columnsSelector?: boolean;
  textSelectable?: boolean;
  columnsShown?: string[];
  onColumnChange?: (column: string) => any;
  autoScrollToBottom?: boolean;
  infiniteScrollConfig?: IInfiniteScrollConfig;
  disabled?: boolean;
  onSelectAll?: () => void;
  rowStyle?: ({
    index,
  }: {
    index: number;
  }) => "deleted" | "" | React.CSSProperties;
  parentClassName?: string;
  sx?: CSSObject;
  rowHeight?: number;
  sortEnabled?: boolean | string[] | ISortConfig;
  sortCallBack?: (info: ITableSortInfo) => void;
}
export interface DataTableWrapperProps extends HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
  customPaperHeight?: string | number;
  noBackground?: boolean;
  sx?: CSSObject;
  rowHeight: number;
}
export interface IActionButton<T> {
  tooltip?: string;
  type: PredefinedActionTypes | React.ReactNode;
  onClick?: (id: string) => void;
  valueToSend: T;
  selected: boolean;
  sendOnlyId?: boolean;
  idField: string;
  disabled: boolean;
}
export interface ColumnSelectorProps<T> {
  open: boolean;
  closeTriggerAction: () => void;
  onSelect: (column: string) => void;
  columns: IColumns<T>[];
  selectedOptionIDs: string[];
  sx?: CSSObject;
  anchorEl?: (EventTarget & HTMLElement) | null;
}
export interface ColumnSelectorConstructProps {
  sx?: CSSObject;
}
