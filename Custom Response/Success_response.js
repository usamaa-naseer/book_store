function customResponse(res, status, message, data) {
  return res.status(status).json({
    message: message,
    data: data,
  });
}

function customFailResponse(res, status, message, data) {
  return res.status(status).json({
    message: message,
    data: data,
  });
}

export { customResponse, customFailResponse };
