import { alpha, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => (

  {

    pdContainer: {

      paddingTop: "20px",
      paddingLeft: "50px",
      paddingRight: "50px"

    },

    cardMedia: {

      margin: "auto",

    },


    cardContent: {

      textAlign: "center",

    },

    searchContainer: {

      display: "flex",
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      paddingLeft: "10px",
      paddingRight: "10px",
      marginTop: "5px",
      marginBottom: "5px"

    },

    searchIcon: {

      alignSelf: "flex-end",
      marginBottom: "5px"

    },

    searchInput: {

      width: "400px",
      margin: "5px"

    }

  }

));
