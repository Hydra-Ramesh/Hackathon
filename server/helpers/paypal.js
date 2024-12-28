const dotenv = require("dotenv");
dotenv.config();
const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AXbe_6LC6Rm_ObRuup-cVrFTI_DnPH6M5l6FvdIUkDMdOe4sQH4H6esGlX6asY7WHofjoPsZu9nD0NZm",
  client_secret: "EE4O4vgDiAdzbc2u7aavsmCM5pHS_fLP4VhouBLPMCoVjGjj7JwRb1GMbIyWNFAOhcmjMmXnxf3MYGtE"
});

module.exports = paypal;
