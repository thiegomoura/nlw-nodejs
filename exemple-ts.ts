interface DataSendMail {
    to: string;
    id: string;
    subject: string;
    body: string
}

function sendMail({to, id, subject, body}: DataSendMail) {
    console.log(to)
}

class sendMailToUser {
    send() {
        sendMail({
            to: "thi-ego@hotmail.com",
            id: "0asdas55",
            subject: "Olá",
            body: "Como vai?"
        })
    }
}