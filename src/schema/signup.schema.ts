import { z } from "zod";

export const signupSchema = z.object({
  username: z
    .string()
    .min(3, "Le nom d'utilisateur doit contenir au moins 3 caractères")
    .max(20, "Le nom d'utilisateur est trop long"),

  email: z.email("Le format d'email invalide").min(1, "L'email est requis"),

  ethnicity: z.preprocess(
    (val) => (val === "" ? null : val),
    z
      .string()
      .min(2, "L'ethnie doit être valide")
      .max(25, "L'ethnie est trop longue")
      .nullish(),
  ),
  birthday: z
    .string()
    .nullish()
    .refine(
      (date) => (!date ? true : new Date(date) < new Date()),
      "La date de naissance doit être dans le passé",
    ),

  password: z
    .string()
    .min(8, "Le mot de passe doit contenir au moins 8 caractères")
    .regex(/[A-Z]/, "Il faut au moins une majuscule dans le mot de passe")
    .regex(/[0-9]/, "Il faut au moins un chiffre dans le mot de passe"),
});

export type SignupFormData = z.infer<typeof signupSchema>;
