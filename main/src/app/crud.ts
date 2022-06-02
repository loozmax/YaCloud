import {
    DeleteItemCommand,
    DeleteItemCommandInput,
    DynamoDBClient, GetItemCommand, GetItemCommandInput, GetItemCommandOutput, QueryCommandInput, UpdateItemCommand,
    UpdateItemCommandInput
} from "@aws-sdk/client-dynamodb";
import { HttpRequest } from "@aws-sdk/protocol-http";
import { Movie } from "./model";
import { marshall, unmarshall } from "@aws-sdk/util-dynamodb";
const AWS = require('aws-sdk')
const MOVIES_TABLE = "movies";

AWS.config.update({
    region: "ru-central-1",
    accessKeyId: "YCAJEgy46sepY2cJ1lL05VPP2",
    secretAccessKey: "YCMZ8m0qCXCB-LG7BZwBafSTA7ZVltHd-4XF-Ega",
});

const ddbClient = new DynamoDBClient({
    region: "ru-central-1",
    endpoint: "https://docapi.serverless.yandexcloud.net/ru-central1/b1geukl7pcuo8lp0cssb/etnfiom9julofe0dj2m4",
    credentials: {
        accessKeyId: "YCAJEgy46sepY2cJ1lL05VPP2",
        secretAccessKey: "YCMZ8m0qCXCB-LG7BZwBafSTA7ZVltHd-4XF-Ega",
    }
});

/**
 * сохраняем фильм в бд (create)
 * @param movie фильм
 * @returns 
 */
export async function saveMovie(movie: Movie): Promise<Movie> {
    const params: UpdateItemCommandInput = {
        TableName: MOVIES_TABLE,
        Key: {
            "id": {
                "N": movie.id.toString()
            }
        },
        UpdateExpression: "SET " +
            "title = :title, ",
        ExpressionAttributeValues: {
            ":title": { "S": movie.title || "" },
        }
    };
    try {
        await callWithToken(() => ddbClient.send(new UpdateItemCommand(params)));
        return movie;
    } catch (e) {
        return new Promise(null);
    }
}

/**
 * удаление фильма (delete)
 * @param id айди фильма в бд
 * @returns 
 */
export async function deleteMovieById(id: number): Promise<number> {
    const params: DeleteItemCommandInput = {
        TableName: MOVIES_TABLE,
        Key: marshall({ "id": id })
    };

    try {
        await callWithToken(() => ddbClient.send(new DeleteItemCommand(params)));
        return id;
    } catch (e) {
        return new Promise(null);
    }
}

/**
 * read -- получение записи из бд
 * @param id айди фильма
 * @returns 
 */
export async function getMovieById(id: number): Promise<Movie | undefined> {
    const params: GetItemCommandInput = {
        TableName: MOVIES_TABLE,
        Key: marshall({"id": id}),
    };

    try {
        const result: GetItemCommandOutput = await callWithToken(() => ddbClient.send(new GetItemCommand(params)));
        return result.Item ? unmarshall(result.Item) as Movie : undefined;
    } catch (e) {
        return new Promise(null);
    }
}

/**
 * update -- обновление title фильма по айди в бд
 * @param movieId айди
 * @param title название
 * @returns 
 */
export async function updateMovie(movieId: number, title: string): Promise<string> {
    const params: UpdateItemCommandInput = {
        TableName: MOVIES_TABLE,
        Key: {
            "id": {
                "N": movieId.toString()
            }
        },
        UpdateExpression: "SET title = :title",
        ExpressionAttributeValues: {
            ":title": {"S": title },
        }
    };

    try {
        await callWithToken(() => ddbClient.send(new UpdateItemCommand(params)));
        return title;
    } catch (e) {
        return new Promise(null);
    }
}

/**
 * каждое обращение к бд с помощью iam токена
 * @param operation коллбэк обращение к бд
 * @returns 
 */
function callWithToken(operation: () => Promise<any>): Promise<any> {
    ddbClient.middlewareStack.add(
        (next) => async (arguments_) => {
            const request = arguments_.request as HttpRequest;
            const token: string = "t1.9euelZrMiczGmMjJk8nJlImeyIyaze3rnpWamMiTkJWKzJbNicqbjs-Vz5zl8_c-eTZr-e8RVQZ7_d3z934nNGv57xFVBnv9.nL9pwxpHHLofKGQAUOapKzIvEPGyWF-PPTGJeFn0quT2v8XRFPKFcqLUEGcqzfj5OcPNaiZikMf3gUK4fdwsCQ"
            request.headers["Authorization"] = "Bearer " + token;
            return next(arguments_);
        },
        {
            step: "finalizeRequest",
        }
    );
    return operation.apply({});
}

