const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
    .then(() => {
        console.log("connection Successfully");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

// let chat1 = new Chat({
//     from: "neha",
//     to: "priya",
//     msg: "send me your exam sheets",
//     created_at: new Date(),
// });

// chat1.save().then((res) => {
//     console.log(res);
// });

let allChats = [
    {
        from: "neha",
        to: "priya",
        msg: "send me your exam sheets",
        created_at: new Date(),
    },
    {
        from: "neha",
        to: "Dhanesh",
        msg: "teach me JS callbacks",
        created_at: new Date(),
    },
    {
        from: "Vinayak",
        to: "Aman",
        msg: "send me your Feedback",
        created_at: new Date(),
    },

    {
        from: "Pratik",
        to: "Mruduk",
        msg: "What's happening",
        created_at: new Date(),
    },

    {
        from: "raj",
        to: "yash",
        msg: "what's your opinion",
        created_at: new Date(),
    },
];

Chat.insertMany(allChats);