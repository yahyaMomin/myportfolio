export default function handler(req, res) {
   const clientIp =
      req.headers["x-forwarded-for"] || req.connection.remoteAddress;
   res.json({ ip: clientIp });
}
