import { makeStyles } from "@mui/material/styles";

/**
 * Global styles
 */
const useStyles = makeStyles((theme: any) => {
  const { palette } = theme;

  return {
    root: {
      "& .MuiGrid-item": { paddingTop: 0 },
      "& .MuiFormControl-root": { width: "100%" },
    },
    sidebar: {
      paddingRight: "15px",
      paddingBottom: "50px",
      paddingTop: "5px",
      background: theme.palette.background.white,
      borderRadius: 4,
      width: "95%",
    },
    sidebarUserControl: {
      boxShadow: `0 -5px 3px ${
        palette.mode === "dark" ? palette.grey[800] : palette.grey[300]
      }`,
      borderRadius: "6px",
      padding: "30px 0px 10px",
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      marginBottom: "20px",
    },
    sidebarAvatar: {
      border: `5px solid ${theme.palette.common.white}`,
      boxShadow: theme.shadows[3],
      width: 120,
      height: 120,
      marginBottom: "10px",
    },
    sidebarLink: {
      display: "block",
      "& .MuiButton-outlinedPrimary": {
        textAlign: "left",
        padding: "10px",
        color:
          palette.mode === "dark"
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
        borderColor:
          palette.mode === "dark"
            ? theme.palette.grey[800]
            : theme.palette.grey[300],
        fontWeight: theme.typography.fontWeightRegular,
        textTransform: "capitalize",
      },
      "&.active": {
        "& .MuiButton-outlinedPrimary": {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.common.white,
        },
      },
    },
    group: {
      "& .MuiOutlinedInput-root": {
        borderRadius: "4px 0 0 4px",
      },
      "& .MuiButton-outlined": {
        minHeight: 56,
        borderRadius: "0 4px 4px 0",
        marginLeft: "-1px",
      },
    },
    mb5: {
      marginBottom: "5px",
    },
    searchPaper: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
    },
    searchInput: {
      marginLeft: "15px",
      flex: 1,
    },
    listRoot: {
      "& li:hover": {
        cursor: "pointer",
        backgroundColor: "#E3E3E3",
      },
      "& li:hover .MuiButtonBase-root": {
        display: "block",
        color: "#000",
      },
      "& .MuiButtonBase-root": {
        display: "none",
      },
      "& .MuiButtonBase-root:hover": {
        backgroundColor: "transparent",
      },
    },
    scrollbar: {
      "&::-webkit-scrollbar": {
        backgroundColor:
          palette.mode === "dark" ? palette.grey[700] : palette.grey[200],
        width: 10,
        borderRadius: 2,
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor:
          palette.mode === "dark" ? palette.grey[300] : palette.primary.main,
        maxHeight: 10,
        borderRadius: 2,
      },
      "&::-webkit-scrollbar-track": {
        borderRadius: 2,
        border: `1px solid ${
          palette.mode === "dark" ? palette.grey[600] : palette.primary.light
        }`,
      },
      "&::-webkit-scrollbar-thumb:focus": {
        backgroundColor:
          palette.mode === "dark" ? palette.grey[500] : palette.primary.dark,
      },
      "&::-webkit-scrollbar-thumb:active": {
        backgroundColor: "#959595",
      },
      "&::-webkit-scrollbar-thumb:hover": {
        backgroundColor: "#959595",
      },
    },
  };
});

// export
export { useStyles };
