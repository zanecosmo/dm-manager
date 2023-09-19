import { PrismaClient } from '@prisma/client';
import express, { Application, Request, Response } from 'express';

const app: Application = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(express.static('public'))

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

app.get('/api/campaign', async (req: Request, res: Response) => {
  try {
    const campaigns = await prisma.campaign.findMany();
    return res.json({
      success: true,
      data: campaigns
    });
  } catch (error) {
    return res.json({
      succces: false,
      message: error
    });
  };
});

interface newCampaign {
  name: string
};

app.post('/api/campaign', async (req: Request, res: Response) => {
  try {
    const body: newCampaign = req.body;
    const newCampaign = await prisma.campaign.create({
      data: body
    });
    return res.json({
      success: true,
      data: newCampaign
    });
  } catch (error) {
    return res.json({
      succces: false,
      message: error
    });
  };
});

const port = 5656;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});