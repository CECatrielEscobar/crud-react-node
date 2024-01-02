import { z } from "zod";

export const createTaskSchema = z.object({
  title: z
    .string({
      required_error: "es requerido ingresar un titulo",
    })
    .min(4, {
      message: "el titulo debe tener como minimo 4 caracteres",
    }),
  description: z
    .string({
      required_error: " es requerido que se agregue una descripcion a la tarea",
    })
    .min(4, {
      message: "la descripcion debe tener como minimo 4 caracteres",
    }),
  date: z.string().datetime().optional(),
});
