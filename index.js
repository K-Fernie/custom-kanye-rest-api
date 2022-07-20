import axios from "axios";
import express from "express";
import cors from "cors";
//I now have an express app/server that can recieve http(s) requrests and send back http or https responses
//this app/server is deaf
const app = express();

//middleware
app.use(cors());

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`);
});

const URL = "https://api.kanye.rest/";

//GET /kanye_quotes
//<SERVERNAME>.<METHODNAME>(<PATHNAME>, <CALLBACK FUNCTION>)
app.get("/kanye_quotes", async (req, res) => {
  try {
    const response = await axios.get(URL);
    res.send(response.data);
  } catch (error) {
    console.error(error);
  }

  // axios.get(URL).then(
  //     (response) => {
  //       console.log(response.data);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
});

// //PUT
// app.put("/kanye_quotes");

// //DELETE
// app.delete("/kanye_quotes");

// //POST
// app.post("/kanye_quotes");
