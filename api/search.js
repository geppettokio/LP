export default async function handler(req, res) {
  const response = await fetch(
    "https://openapi.naver.com/v1/search/image.json?query=test",
    {
      headers: {
        "X-Naver-Client-Id": process.env.NAVER_CLIENT_ID,
        "X-Naver-Client-Secret": process.env.NAVER_CLIENT_SECRET,
      },
    }
  );

  const text = await response.text();

  res.json({
    status: response.status,
    body: text,
  });
}
