export function GET(): Response {
  return Response.json({
    status: "ok",
    application: "TECHZONE BizOS",
    stage: "foundation-scaffold",
    timestamp: new Date().toISOString(),
  });
}
