import dotenv from 'dotenv';

dotenv.config();
export default process.env.hasOwnProperty('DEPLOY_PREVIEW')
