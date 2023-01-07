var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const verbRouter = Router();
const apiRouter = Router();
verbRouter.get('/verb', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const posts = yield prisma.verb.findMany();
    res.json(posts);
}));
verbRouter.post('/verb', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { level, content, translation, exception, ich, du, erEsSie, wir, ihr, sie } = req.body;
    const post = yield prisma.verb.create({
        data: {
            level,
            content,
            translation,
            exception,
            ich,
            du,
            erEsSie,
            wir,
            ihr,
            sie
        }
    });
    res.json(post);
}));
apiRouter.use(verbRouter);
export default apiRouter;
