export enum EDataRangeOptions {
  AllTime = "all",
  ThisWeek = "cur-week",
  ThisMonth = "cur-month",
  LastWeek = "last-week",
  LastMonth = "last-month",
}

export const dataRangeOptionsMap = {
  [EDataRangeOptions.AllTime]: "All time",
  [EDataRangeOptions.ThisWeek]: "This week",
  [EDataRangeOptions.ThisMonth]: "This month",
  [EDataRangeOptions.LastWeek]: "Last week",
  [EDataRangeOptions.LastMonth]: "Last month",
};

export const dataRangeOptions = Object.values(EDataRangeOptions).map(key => ({
  label: dataRangeOptionsMap[key as EDataRangeOptions],
  value: key,
}));
