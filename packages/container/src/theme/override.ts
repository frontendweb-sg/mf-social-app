export default function themeOverrides(theme: any) {
  const { colors } = theme;
  return {
    MuiMenu: {
      backgrondColor: colors.blue[500],
      color: colors.blue[900],
      marginTop: 0,
    },
    MuiButton: {
      styleOverrides: {
        sizeSmall: {
          padding: "4px 6px",
          minWidth: "50px",
          fontSize: "12px",
          lineHeight: "1.5",
          alignItems: "center",
        },
      },
    },
  };
}
