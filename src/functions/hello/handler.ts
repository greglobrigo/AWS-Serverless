import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

import schema from './schema';

const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  try {
    const { path } = event;
    let response = null;
    switch (path) {
      case '/hello':
        response = {
          message: 'Invoked from the route /hello',
        };
        break;
      case '/route2':
        response = {
         message: 'Invoked from the route /route2',
        };
        break;
      default:
        response = 'Not found'
        break;
    }
    return formatJSONResponse(response);
  } catch (error) {
    console.log(error);
  }

};

export const main = middyfy(hello);
