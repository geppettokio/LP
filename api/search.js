export default function handler(req, res) {
  res.json({
    id: process.env.NAVER_CLIENT_ID,
    secretLength: process.env.NAVER_CLIENT_SECRET?.length
  });
}
