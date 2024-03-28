import app from "./app.js";
import connectDb from "./utils/dbConfig.js";

//db connection
connectDb();

//listen
app.listen(process.env.PORT, () => {
  console.log(
    `Server is running on ${process.env.PORT} in ${process.env.NODE_ENV}`
  );
});
