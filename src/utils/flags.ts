export const getFlagUrl = (flagCode?: string) => {
  // switch (flagCode) {
  //   case "AE-AZ":
  //     return "/assets/flags/Abu_Dhabi.svg";
  //   case "GB-":
  //     return "/assets/flags/Channel_Islands.svg";
  //   case "AN":
  //     return "/assets/flags/Netherlands_Antilles.svg";
  //   case "AE-RK":
  //     return "/assets/flags/Ras_Al_Khaimah.svg";
  //   default:
  //     return `https://flagcdn.com/${flagCode?.toLowerCase()}.svg`;
  // }
  return `https://flagcdn.com/${flagCode?.toLowerCase()}.svg`;
};
