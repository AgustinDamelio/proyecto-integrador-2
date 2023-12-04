import { NextApiRequest, NextApiResponse } from "next";
import { deleteProyecto, getProyecto, postProyecto } from "services/proyectos/proyectos.service";
import { ERROR_SERVER } from "services/sesion/user-sesion.errors";

type Data = {
    data: any;
} | { error: string, message: string }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { id } = req.body.id
    //TODO ver como manejo el id del proyecto
    res.setHeader("Content-Type", "application/json");
    const idNumber = parseInt(`${id}`);

    if (req.method === "POST") {
        try {
            const result = await postProyecto(req.body);
            res.status(200).json({ data: result });
        } catch (err) {
            res.status(500).json({ error: "en el error 500  ", message: "error 500" });
        }
        return

    } else if (req.method === "DELETE") {
        try {
            await deleteProyecto(idNumber);
            res.status(204).end(); 
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "en el error 500  ", message: "Error al eliminar el proyecto" });
        }
        return;
    }

    try {
        const result: any | null = await getProyecto(idNumber);
        if (result === null) {
            res.status(404).json({ error: "No se encontró el proyecto", message: "El proyecto no existe" });
        } else {
            res.status(200).json(result);
        }
        return;
    } catch (err) {
        res.status(500).json(ERROR_SERVER)
    }
}