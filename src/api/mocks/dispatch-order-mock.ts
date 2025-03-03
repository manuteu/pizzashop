import { http, HttpHandler, HttpResponse } from "msw";

import { DispatchOrderParams } from "../dispatch-order";

export const dispatchOrderMock: HttpHandler = http.patch<
  DispatchOrderParams,
  never,
  never
>("/orders/:orderId/dispatch", async ({ params }) => {
  if (params.orderId === "error-order-id") {
    return new HttpResponse(null, { status: 400 });
  }

  return new HttpResponse(null, { status: 204 });
});
