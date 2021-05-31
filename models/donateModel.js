const db = require("../config/db.js");

const create = (donor) => {
  try {
    return new Promise(async (resolve, reject) => {
      const donorData = {
        firstName: donor.firstName,
        lastName: donor.lastName,
        streetAddress: donor.address,
        city: donor.city,
        country: donor.country,
        postalCode: donor.postalCode,
        phone: donor.phone,
        email: donor.email,
        preferredFormOfContact: donor.preferredFormOfContact,
        preferredFormOfPayment: donor.preferredFormOfPayment,
        frequencyOfDonation: donor.frequency,
        amount: donor.amount,
        comments: donor.comments
      };
      const query = `INSERT INTO donors SET ?`;
      const result = await db.saveDonor(query, donorData);
      resolve(donor);
    });
  } catch (error) {
    throw new (error);
  }
}

const getAll = async () => {
  let allDonors = [];
  try {
    const query = `SELECT * FROM donors`;
    const result = await db.findAllDonors(query, (err, data) => {
      if (err) {
        // reject(err);
        return err;
      } else {
        // resolve(data);
        return data;
      }
    });
    // return new Promise(async (resolve, reject) => {
     
    // });
  } catch (error) {
    // throw new (error);
    return error;
  }
}

module.exports = { getAll, create }
