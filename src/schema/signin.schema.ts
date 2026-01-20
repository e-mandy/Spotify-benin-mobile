import { z } from "zod";

export const signInSchema = z.object({
  email: z.email("Le format d'email invalide").min(1, "L'email est requis"),
  password: z.string().min(1, "Le mot de passe est requis!"),
});

export type SignupFormData = z.infer<typeof signInSchema>;
