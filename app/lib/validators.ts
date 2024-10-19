import { z } from "zod";

export const useNameSchema = z.object({
  username: z
    .string()
    .min(3)
    .max(20)
    .regex(
      /^[a-zA-Z0-9]+$^/,
      "UserName can only contain letters, numbers or underscores"
    ),
});
