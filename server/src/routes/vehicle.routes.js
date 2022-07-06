import { Router } from "express";
import { registerDefinition } from "swaggiffy";
import { registerVehicle, deleteVehicle, getAllVehicles, getVehicleById, getVehiclesByOwnerId, updateVehicle } from "../controllers/vehicle.controller";
import AuthMiddleware from "../middlewares/auth.middleware";

const router = Router();

router.post('/', AuthMiddleware, registerVehicle);
router.get('/', getAllVehicles);
router.get('/:id', getVehicleById);
router.get('/owner/:id', getVehiclesByOwnerId);
router.put('/:id', updateVehicle);
router.delete('/:id', deleteVehicle);
// router.put('/:id/vote', AuthMiddleware, vote);

registerDefinition(router, { tags: "Vehicles", mappedSchema: "Vehicle", basePath: "/api/v1/vehicle" });

export default router;