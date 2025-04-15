import { sendMail } from "../../utils/mailer";
import {
  queryToSales,
  thankYouForContactingWithSales,
} from "../../utils/templates";

async function handleContactUsRequest(data, subject) {
  return new Promise(async (resolve, reject) => {
    try {
      const payload = {
        to: data.email,
        subject: subject ?? "Thank You For Contacting Us | Brain Inventory",
        html: thankYouForContactingWithSales(data),
      };
      await sendMail(payload);

      const payload2 = {
        to: "askus@braininventory.com",
        subject: "New Inquiry",
        html: queryToSales(data),
      };

      await sendMail(payload2);

      resolve(true);
    } catch (error) {
      reject({
        error: error?.message || "Email not sent!",
      });
    }
  });
}
export default async function handler(req, res) {
  if (req.method === "POST") {
    const reqData = JSON.parse(req.body);

    handleContactUsRequest(reqData.data, reqData.subject)
      .then((resp) => {
        if (resp) {
          res.status(200).json({ success: true });
        }
      })
      .catch((error) => {
        res.status(500).json({ error: error });
      });
  }
}
