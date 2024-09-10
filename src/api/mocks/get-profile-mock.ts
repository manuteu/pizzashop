import { http, HttpHandler, HttpResponse } from "msw";

import type { GetProfileResponse } from "../get-profile";

export const getProfileMock: HttpHandler = http.get<
  never,
  never,
  GetProfileResponse
>("/me", () => {
  return HttpResponse.json({
    id: "custom-user-id",
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "81237127123",
    role: "manager",
    createdAt: new Date(),
    updatedAt: null,
  });
});
