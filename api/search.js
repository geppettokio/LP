export default async function handler(req, res) {
  const { q } = req.query;

  if (!q) {
    return res.status(400).json({
      error: "검색어를 입력하세요."
    });
  }

  try {
    const response = await fetch(
      `https://openapi.naver.com/v1/search/image.json?query=${encodeURIComponent(q)}&display=10&sort=sim`,
      {
        headers: {
          "X-Naver-Client-Id": process.env.NAVER_CLIENT_ID,
          "X-Naver-Client-Secret": process.env.NAVER_CLIENT_SECRET
        }
      }
    );

    const data = await response.json();

    res.status(200).json(data);

  } catch (e) {
    res.status(500).json({
      error: e.message
    });
  }
}
