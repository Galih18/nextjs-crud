// pages/api/hello.js
import nc from "next-connect";
import connectDb from "../../../utils/connectDb";
import UserModel from "../../../models/UserModel";
connectDb();


const handler = nc({
    onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
    },
    onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
    },
    })
    .delete(async(req, res) => {
        try {
            await UserModel.findOneAndDelete({_id:req.query.id})
            res.send('User Berhasil Dihapus')
        } catch (error) {
            console.log(error)
        }
    })

    .put(async(req, res) => {
        try {
            const user = await UserModel.findOne({_id: req.query.id})
            user.name = req.body.name
            user.email = req.body.email
            user.phone = req.body.phone
            await user.save()
            res.send('User Berhasil Diupdate');

        } catch (error) {
            console.log(error);
        }
    });

export default handler;