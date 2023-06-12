import express from "express"
import cors from "cors"
import { StreamChat } from "stream-chat"
import {v4 as uuidv4} from "uuid"
import bcrypt from "bcrypt"

const app = express()

app.use(cors());
app.use(express.json());
const api_key = "xxpq8z5ve96a"
const api_secret = "tz5vee94hn2s4p5r6rftkuqnrnbsnzehmkwb7c6pkp9br7wkrxtbj4gebd2qf9wp"

const serverClient = StreamChat.getInstance(api_key, api_secret);

app.post("/signup", async (req, res) => {
  try {
    const {username, password} = req.body;
    const userID = uuidv4();
    const hashedPassword = await bcrypt.hash(password, 10);
    const token = serverClient.createToken(userID);
    res.json({token, userID, username, hashedPassword})

  } catch { 
    res.json(error);
  }

})
app.post("/login", async (req, res) => {
  try{
    const {username, password} = req.body;
    const {users} = await serverClient.queryUsers({name: username});

    console.log('users: ', users[0].name) // DEBUG

    if (users.length === 0) return res.json({message: "user not found"});

    const token = serverClient.createToken(users[0].id);
    const passwordMatch = await bcrypt.compare(password, users[0].hashedPassword);

    if (passwordMatch) {
      res.json({
        token, 
        username,
        userID: users[0].id
      })
    }

  } catch(error) {
    res.json(error)
  }
})


app.listen(3001, ()=>{
  console.log("server is running on port 3001");
})