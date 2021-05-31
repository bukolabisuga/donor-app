const Donor = require("../models/donateModel");

const { getPostData } = require("../util");

const createDonor = async (req, res) => {
  try {
    const body = await getPostData(req)

    const { firstName, lastName, address, city, country, postalCode, phone, email, preferredFormOfContact, preferredFormOfPayment, frequency, amount, comments } = JSON.parse(body);

    const donor = {
      firstName,
      lastName,
      address,
      city,
      country,
      postalCode,
      phone,
      email,
      preferredFormOfContact,
      preferredFormOfPayment,
      frequency,
      amount,
      comments
    }

    if (!firstName
      || !lastName
      || !address
      || !city
      || !country
      || !postalCode
      || !phone
      || !email
      || !preferredFormOfContact
      || !preferredFormOfPayment
      || !frequency
      || !amount) {
      throw new Error("Confirm all required fields have been filled");
    }

    const newDonor = await Donor.create(donor);

    if (!newDonor) {
      res.writeHead(404, { "Content-Type": "application/json" })
      res.end(JSON.stringify({ "status": "Unable to create new donor" }));
    }

    res.writeHead(201, { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" });
    return res.end(JSON.stringify({ message: "Donor saved!", data: newDonor }));

  } catch (error) {
    res.writeHead(400, { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" });
    res.end(JSON.stringify({ code: "INVALID_INPUT", message: "Confirm all required fields are filled" }));
  }
}

const getAllDonors = async (req, res) => {
  try {
    const donors = await Donor.getAll();
    if (!donors) {
      res.writeHead(404, { "Content-Type": "application/json" })
      res.end(JSON.stringify({"status": "No donors found"}));
    }
    res.writeHead(200, { "Content-Type": "application/json" })
    res.end(JSON.stringify(donors));
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = { createDonor, getAllDonors };
