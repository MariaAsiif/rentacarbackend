/*
System developed and deployed by Jamshaid Sabir
jamshaidsabir411980@gmail.com

*/

//bluebird for promises
const promise = require('bluebird');

//async for async tasks
var async = require('async');


responseHelper = require("../helpers/response.helper");


var contactUs = async (req, res) => {
    console.log("contactUs called")

    try {

        var contactUsData = req.body
        let responsemessage = "Email sent successfull"

        const { firstname, surname, useremailaddress, message } = contactUsData


        let recieverEmail = "info@devopsmarkaz.com"

        res.mailer.send('emails/contactus.html', {
            surname: surname,
            username: firstname,
            usermessage: message,
            customeremail: useremailaddress,
            to: recieverEmail,
            subject: 'Kontaktiere uns',
        }, async (err) => {
            if (err) {
                return console.error("Email could not be sent: ", err)
            }
        })

        return responseHelper.success(res, {}, responsemessage)



    } catch (err) {

        responseHelper.requestfailure(res, err)
    }
}

var carRentRequest = async (req, res) => {
    console.log("carRentRequest called")

    try {

        var contactUsData = req.body

        const { startdate, starttime, enddate, endtime, firstname, lastname, streetandhouseno, postcode, location, phonenumber, email, atage, agreetoterms, acceptprivacypolicy, kilometerpackages, totalfreekilometers, basicprice, additionalkilometers, totalprice, plusdeposit, excess } = contactUsData



        let atagecondition = "Nein"
        let agreetotermscondition = "Nein"
        let aacceptprivacypolicyecondition = "Nein"

        let hundredkm = "Nein"
        let twohundredkm = "Nein"
        let fivehundredkm = "Nein"

        if (kilometerpackages.hundredkm) {
            hundredkm = "Jawohl"
        } else {
            hundredkm = "Nein"
        }

        if (kilometerpackages.twohundredkm) {
            twohundredkm = "Jawohl"
        }

        if (kilometerpackages.fivehundredkm) {
            fivehundredkm = "Jawohl"
        }

        if (atage) {
            atagecondition = "Jawohl"
        }

        if (agreetoterms) {
            agreetotermscondition = "Jawohl"
        }

        if (acceptprivacypolicy) {
            aacceptprivacypolicyecondition = "Jawohl"
        }

        let recieverEmail = "info@devopsmarkaz.com"

        res.mailer.send('emails/rentacar.html', {
            startdate: startdate,
            starttime: starttime,
            enddate: enddate,
            endtime: endtime,
            firstname: firstname,
            lastname: lastname,
            streetandhouseno: streetandhouseno,
            postcode: postcode,
            location: location,
            phonenumber: phonenumber,
            email: email,
            hundredkm: hundredkm,
            twohundredkm: twohundredkm,
            fivehundredkm: fivehundredkm,
            totalfreekilometers: totalfreekilometers,
            basicprice: basicprice,
            distance: additionalkilometers.distance,
            price: additionalkilometers.price,
            totalprice: totalprice,
            plusdeposit: plusdeposit,
            excess: excess,
            atage: atagecondition,
            agreetoterms: agreetotermscondition,
            acceptprivacypolicy: aacceptprivacypolicyecondition,
            to: recieverEmail,
            subject: 'Anfrage für Mietwagen',
        }, async (err) => {
            if (err) {
                return console.error("Email could not be sent: ", err)
            }
        })

        let responsemessage = "Email sent successfull"

        return responseHelper.success(res, {}, responsemessage)



    } catch (err) {

        responseHelper.requestfailure(res, err)
    }
}







module.exports = {
    contactUs,
    carRentRequest,


};



