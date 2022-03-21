// pages/api/hello.js
import nc from "next-connect";
import connectDb from "../../../utils/connectDb";
import UserModel from "../../../models/UserModel";
connectDb();

// function ini di copy-paste dari (https://www.npmjs.com/package/next-connect?activeTab=readme)
const handler = nc({
    onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
    },
    onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
    },
    })
    .get(async(req, res) => {
        try {
            const users =  await UserModel.find({})
            res.send(users);
        } catch (error) {
            console.log(error);
        }
    })

    .post(async(req, res) => {
        const {name, email, phone} = req.body
        const newUser = new UserModel({name,email,phone})
        try {
            await newUser.save();
            res.send('User Baru Ditambahkan');
        } catch (error) {
            console.log(error);
        }
    })
    
    .put(async (req, res) => {
    res.end("async/await is also supported!");
    })
    
    .patch(async (req, res) => {
    throw new Error("Throws me around! Error can be caught and handled.");
    });

export default handler;