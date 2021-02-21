import {Context, APIGatewayProxyEvent} from 'aws-lambda'

export const handler = async (apiGatewayEvent: APIGatewayProxyEvent, _context: Context): Promise<any> => {
    const res = {
        statusCode: 200,
        body: JSON.stringify("Hello from lambda!")
    }

    return res
}
