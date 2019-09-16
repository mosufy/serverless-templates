export const app = {
  env: process.env.APP_ENV || process.env.NODE_ENV,
  debug: process.env.APP_DEBUG === 'true',
};

const awsSQSPingQueueName = `serverless-templates-api-sqs-${app.env}-PingQueue`;

export const aws = {
  sqs: {
    pingQueue: {
      name: awsSQSPingQueueName,
      url: `https://sqs.${process.env.AWS_ACCOUNT_REGION}.amazonaws.com/${process.env.AWS_ACCOUNT_ID}/${awsSQSPingQueueName}`,
    },
  },
};

export default {
  app,
  aws,
};
