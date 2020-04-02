const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'shubhamshinde.3151@gmail.com',
        subject: 'Thanks for joining Shubham\'s task app!',
        html: `<h3>Welcome to Task App, ${name}</h3>`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'no-reply@zigartiq.com',
        subject: 'Sorry for inconvenience!',
        html: `<h3>Hi, ${name}</h3><p>Task App is sorry for the inconvenience caused!</p>`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}