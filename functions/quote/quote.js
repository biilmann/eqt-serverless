const quotes = require("inspirational-quotes")

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = async (event, context) => {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: quotes.getQuote().text}),
      // // more keys you can return:
      headers: { "Content-Type": "application/json" },
      // isBase64Encoded: true,
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
