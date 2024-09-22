import { toast } from "sonner";

export const TOAST_MESSAGE = {
  error: () => toast.error("Error en guardar el message"),
  success: () => toast.success("Exito"),
};
