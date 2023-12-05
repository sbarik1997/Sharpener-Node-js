const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    const data = fs.readFileSync("messege.txt", "utf-8");

    res.write("<html>");
    res.write("<head><title>Enter messege</title></head>");
    res.write(`<body>${data}</body>`);
    res.write(
      `<body><form action="/messege" method="POST"><input type="text" name="messege"><button>Send</button></form></body>`
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/messege" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const messege = parsedBody.split("=")[1];
      fs.writeFileSync("messege.txt", messege);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  }
};


// module.exports = requestHandler;

// module.exports = {
//     handler: requestHandler,
//     anyText: "my name is sb"
// }

exports.handler = requestHandler;
exports.anyText = "My name is sb";
