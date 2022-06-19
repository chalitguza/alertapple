const PORT = 5000;
const express = require("express");
const component = require('./component.js');
const app = express();

module.exports = async function () {

        app.get("/api", async (req, res) => {
            try {
              const macbook = await component.app2();

              return res.status(200).json({
                status: macbook,
              });
            } catch (err) {
              return res.status(500).json({
                err: err.toString(),
              });
            }
          });
          
          app.listen(PORT, () =>
            console.log(`The server is active and running on port ${PORT}`)
          );


}