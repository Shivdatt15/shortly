export const cookieOptions = {
    httpOnly: true,
    secure: true,        // must be true for HTTPS frontend
    sameSite: "None",    // important for cross-domain cookies
    maxAge: 1000 * 60 * 60 * 24, // 1 day
}
