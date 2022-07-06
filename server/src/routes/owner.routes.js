import { Router } from 'express';
import { registerDefinition } from 'swaggiffy';
import { deleteOwner, getAllOwners, getOwnerByEmail, getOwnerById, updateOwner } from '../controllers/owner.controller';

const router = Router();

router.put('/:id', updateOwner);
router.get('/', getAllOwners);
router.get('/:id', getOwnerById);
router.get('/email/:email', getOwnerByEmail);
router.delete('/:id', deleteOwner);

registerDefinition(router, { tags: 'Owners', mappedSchema: 'Owner', basePath: '/api/v1/owners' });
export default router;