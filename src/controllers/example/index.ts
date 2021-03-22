import axios from "axios";
import { __CONFIG__ } from "../../assets/config";
import { IARequest } from "../interfaces";
import Requests from "../requests";

export default class ExampleController {
    public static getAll(args: IARequest<null>) {
        axios
            .get(`${__CONFIG__.backendURL}/example/`)
            .then((res) =>
                Requests.handleResponse({ response: res, cb: args.onLoaded })
            );
    }

    public static add(args: IARequest<any /* Here your endpoint args type goes */ >): Promise<void> {
        return new Promise((res, rej) => {
            axios
                .post(`${__CONFIG__.backendURL}/example/`, args.data)
                .then(response => {
                    res();
                    return response;
                })
                .then((res) =>
                    Requests.handleResponse({
                        response: res,
                        cb: args.onLoaded,
                    })
                ).catch(e => {
                    alert(e);
                    throw e;
                });
        });
    }
}
