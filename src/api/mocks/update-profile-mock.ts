import { http, HttpHandler, HttpResponse } from 'msw'

import type { UpdateProfileBody } from '../update-profile'

export const updateProfileMock: HttpHandler = http.put<never, UpdateProfileBody>(
  '/profile',
  async ({ request }) => {
    const { name } = await request.json()

    if (name === 'Rocket Pizza') {
      return new HttpResponse(null, { status: 204 })
    }

    return new HttpResponse(null, { status: 400 })
  },
)