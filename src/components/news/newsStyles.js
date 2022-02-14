export const NewsCardStyles = {
   image: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
  },
   dateText: {
      position: "absolute",
      bottom: 0,
      right: 20,
      fontWeight: "bold"
   }
}

export const MainNewsStyles = {
    container: {
       display: "flex",
       flexWrap: "wrap",
       width: "100%",
       /*height: 400*/
    },
    newsContainer: {
       display: "flex",
       flexWrap: "wrap",
       position: "relative",
       width: "50%",
       height: 400,
       overflow: "hidden"
    },
    bigNewsImg: {
       position: "absolute",
       width: "100%",
       height: "100%",
       objectFit: "cover"
    },
    littleNewsContainer: {
       position: "relative",
       padding: 1,
       width: "50%",
       height: "50%",
       overflow: "hidden"
    },
    littleImgContainer: {
       width: "100%",
       height: "100%",
       objectFit: "cover"
    },
    title: {
       position: "absolute",
       bottom: 0,
       padding: 20,
       width: "100%",
       color: "white",
       backgroundColor: "rgba(0,0,0,.5)"
    }
 }