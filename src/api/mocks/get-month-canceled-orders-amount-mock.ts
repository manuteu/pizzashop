import { http, HttpHandler, HttpResponse } from "msw";

import { GetMonthCanceledOrdersAmountResponse } from "../get-month-canceled-orders-amount";

export const getMonthCanceledOrdersAmountMock: HttpHandler = http.get<
  never,
  never,
  GetMonthCanceledOrdersAmountResponse
>("/metrics/month-canceled-orders-amount", () => {
  return HttpResponse.json({
    amount: 5,
    diffFromLastMonth: -5,
  });
});
